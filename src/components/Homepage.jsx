import './Homepage.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
    const [book, setBookName] = useState('')
    // Event handler to update the state when the input changes
    const handleBookNameChange = (e) => {
        setBookName(e.target.value)
    }

    const handleBookSearch = () => {
    // Navigate to the new page
        navigate('/buy-me-a-book')
    }
    return(
        <div className="input-wrapper">
            <input placeholder="Enter the name of a book"
                   type="text"
                   value={book}
                   onChange={handleBookNameChange}
                   required/>
            <button type="submit" onClick={handleBookSearch}>Go</button>
        </div>

    )
}
