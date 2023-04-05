import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider, createBrowserRouter
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import './index.css';

// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <App></App>
//   },

//   {
//     path: '/about',
//     element: <About></About>

//   },

//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }


// ])



const router = createBrowserRouter([

  //! For showing header on the toop

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },

      {
        path: '/friends',
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },

      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },

      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },

      {
        path: "post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },

      {
        path: 'contact',
        element: <Contact></Contact>,

      },

      {
        path: "*",
        element: <div>404 not found</div>
      }
      ,
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}>

    </RouterProvider>

  </React.StrictMode>,
)
