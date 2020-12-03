import React from 'react'
import {Col} from 'reactstrap'
export default function ListProductHome(props) {
    return (
        <Col md={3}>
            <img src={props.product}></img>
        </Col>
    )
}