import React from 'react'
import {Row,Col} from 'reactstrap'
import '../../style/comonInput.scss'
export default function ComonQuatityInput (props) {
        return (
            <Row className="quantyti-input mb-3">
                <Col md={4}  className="minus" onClick={()=>{props.onChange && props.onChange(-1,true)}}>
                    -
                </Col>
                <Col md={4} className="quantyti">
                    <input value={props.value || 0} onChange={(event)=>{props.onChange && props.onChange(Number(event.target.value))}}/>
                </Col>
                <Col md={4} className="flus" onClick={()=>{props.onChange && props.onChange(1,true)}}>
                    +
                </Col>
            </Row>
        )
}