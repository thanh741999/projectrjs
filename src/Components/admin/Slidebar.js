import React from 'react';
import { Link } from 'react-router-dom';
import {ListGroup,ListGroupItem} from 'reactstrap'
export default function Slidebar(props) {
    return(
        <div className="slide_bar">
                SideBar
                <ListGroup>
                    <ListGroupItem><Link to="/admin/products">Show Products</Link></ListGroupItem>
                    <ListGroupItem><Link to="/admin/order">Show Order</Link></ListGroupItem>
                </ListGroup>
        </div>
    )
}