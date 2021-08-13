import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className="container">
                <div  className="headerLeft">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <b style={{color:"black"}}><span  style={{ color: "gray" }}>hepsiburada</span>.com</b>
                    </Link>
                </div>
                <div className="headerRight">
                    <b>Link</b>VOTE Challange
                </div>
                <hr />
            </div>
        </div>
    )
}
