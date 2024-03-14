import { useEffect, useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const bookmarks = useSelector(state => state.bookmarks.bookmarks)
    const dispatch = useDispatch()

    function getData() {
        let data = []
        if (localStorage.getItem('books')) {
            data = JSON.parse(localStorage.getItem('books'))
        }

        return data
    }

    useEffect(() => {
        let count = getData().length
        dispatch({ type: "TAYINLASH", payload: count })

    }, [])
    return (
        <header>
            <div className="container">
                <div className="log">
                    <span>Logo</span>
                </div>
                <div className="count-cart">
                    <h3>{bookmarks}</h3>
                </div>
            </div>
        </header>
    )
}

export default Header