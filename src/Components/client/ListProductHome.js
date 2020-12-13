import React from 'react'
import {Col, Row} from 'reactstrap'
export default function ListProductHome(props) {
    return (
            <Col md={3} className="mb-5 product">
            <img className='img-items' src={props.product}></img>
        </Col>
    )
        
}