import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigator = useNavigate()

    const handleNavigation = () => {
        navigator(`/post/${id}`)

    }
    return (
        <div className='single-post'>
            <h3>ID: {id}</h3>
            <h5>Title: {title}</h5>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link>



            <button onClick={handleNavigation}>With Button Handler</button>

        </div>
    );
};

export default Post;