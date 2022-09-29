import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import hero from '../../images/hero-01.jpeg'
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [time, setTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)
    useEffect(() => {
        fetch("fakeDb.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const getReadTime = (book) => {
        console.log(book.duration)
        const newTime = time + book.duration;
        setTime(newTime)
    }
    return (
        <div className='display-container'>
            <div className='display-books'>
                <h1>Fit-Ness Express</h1>
                <h3>Select Today's Book</h3>
                <div className='books-container'>
                    {
                        books.map(book => <Book
                            key={book._id}
                            book={book}
                            getReadTime={getReadTime}
                        ></Book>)
                    }
                </div>
            </div>
            <div className='id-container'>
                <div className='identity'>
                    <img className='hero' src={hero} alt="" />
                    <div>
                        <h2>Mithun Biswas</h2>
                        <p>Barishal, Bangladesh</p>
                    </div>
                </div>
                <div className='common'>
                    <div>
                        <h3>20<small>plus</small></h3>
                        <p>Book Read</p>
                    </div>
                    <div>
                        <h3>50<small>plus</small></h3>
                        <p>Will Read</p>
                    </div>
                    <div>
                        <h3>25</h3>
                        <p>Age</p>
                    </div>
                </div>
                <h2>Add A Break</h2>
                <div className='identity common'>
                    <button onClick={() => setBreakTime(10)}>10s</button>
                    <button onClick={() => setBreakTime(20)}>20s</button>
                    <button onClick={() => setBreakTime(30)}>30s</button>
                    <button onClick={() => setBreakTime(40)}>40s</button>
                    <button onClick={() => setBreakTime(50)}>50s</button>
                </div>
                <div>
                    <h2>Read-Time Details</h2>
                    <div className='common'>
                        <h3>Total Read</h3>
                        <p>{time} Seconds</p>
                    </div>
                    <div className='common'>
                        <h3>Break Time</h3>
                        <p>{breakTime} Seconds</p>
                    </div>
                </div>
                <button className='completed-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Books;