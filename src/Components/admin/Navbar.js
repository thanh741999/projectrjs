import React from 'react';
export default function Navbar(props){
    return <div className="navbar">
        <button className="btn btn-primary" onClick={props.toggleSlideBar}>Open</button>
        <span>Admin</span>
    </div>
}