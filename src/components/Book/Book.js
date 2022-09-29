import React from 'react';
import './Book.css'

const Book = ({ book, getReadTime }) => {
    const { name, image, duration, intro, page } = book
    return (
        <div className='book-container'>
            <div className='book'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p className='intro-text'><small>{intro}</small></p>
                <p>Page: {page}</p>
                <p>Time required: {duration} minutes</p>
                <button onClick={() => getReadTime(book)} className='book-btn'>Add to list</button>
            </div>
        </div>
    );
};

export default Book;