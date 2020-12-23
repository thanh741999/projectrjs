import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props){
    return <div className="navbar">
        <button className="btn btn-primary" onClick={props.toggleSlideBar}>Toggle SideBar</button>
        <h2>Admin Page</h2>
        <Link to="/">Back Home</Link>
    </div>
}