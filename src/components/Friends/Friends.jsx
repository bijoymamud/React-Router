import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const allfriends = useLoaderData();
    // console.log(allfriends);
    return (
        <div>
            <h1>These are my friends: {allfriends.length}</h1>

            <div className='single-div'>
                {
                    allfriends.map(friend => <Friend

                        key={friend.id}
                        friend={friend}

                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;