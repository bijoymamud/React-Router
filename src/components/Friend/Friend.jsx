import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {

    const { name, phone, website, company, id } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>website: {website}</p>
            <p>Company: {company.name}</p>
            <p>
                <Link to={`/friend/${id}`}>More Details</Link>
            </p>

        </div>
    );
};

export default Friend;