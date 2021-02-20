import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Button,
    Col,} from 'reactstrap';
export default function Product(props) {
const {id,name,price,image} = props; 
const hanledAdd_To_Cart = () => {
    props.addToCart({id,name,price,image},1)
}
return (
        <Col sm={6} md={4} className="mb-5 product">
            <Card>
                <CardImg top width="100%" src={(image !== '')?image[0]:''} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">
                    <NavLink to={`product/${id}`}>
                        {name}
                     </NavLink>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{price}$</CardSubtitle>
                <Button outline onClick={hanledAdd_To_Cart}>Add to cart</Button>
                </CardBody>
            </Card>
        </Col>
    )
}