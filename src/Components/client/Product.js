import React from 'react';
import { Link } from 'react-router-dom';
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
        <Col md={4} className="mb-5">
            <Card>
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">
                    <Link to={`product/${id}`}>
                        {name}
                     </Link>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{price}$</CardSubtitle>
                <Button outline onClick={hanledAdd_To_Cart}>Add to cart</Button>
                </CardBody>
            </Card>
        </Col>
    )
}