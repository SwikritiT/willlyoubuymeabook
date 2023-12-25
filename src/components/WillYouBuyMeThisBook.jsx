import './WillYouBuyMeThisBook.css'
import React, {useRef, useEffect, useState} from 'react'

export default function WillYouBuyMeThisBook() {
    const wrapperRef = useRef()
    const noBtnRef = useRef()
    // const [buttonText, setbuttonText] = useState('No')

    useEffect(() => {
        const noBtn = noBtnRef.current
        const wrapperRect = wrapperRef.current.getBoundingClientRect()
        const noBtnRect = noBtn.getBoundingClientRect()

        const handleMouseOver = () => {
            const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1
            const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1
            noBtn.style.left = i + 'px'
            noBtn.style.top = j + 'px'
        }

        noBtn.addEventListener('mouseover', handleMouseOver)
        return () => {
            // Cleanup the event listener when the component unmounts
            noBtn.removeEventListener('mouseover', handleMouseOver)
        }
    }, []) // Empty dependency array ensures this effect runs once after the initial render

    const handleYes = () => {
        window.location.href = 'https://booksmandala.com/'
    }

    return (
        <div className="wrapper" ref={wrapperRef}>
            <h2 className="question">
                Will you buy me a book?
            </h2>
            <div className="btn-group">
                <button className="yes-btn" onClick={handleYes}>
                    Yes
                </button>
                <button className="no-btn" ref={noBtnRef}>
                    No
                </button>
            </div>
        </div>
    )
}
