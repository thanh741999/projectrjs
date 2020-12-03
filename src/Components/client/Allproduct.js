import React from 'react'
import {Container,
     Row,
    Col,
} from 'reactstrap';
import Clientbar from './ClientNavBar'
import ClientSilebar from './ClientSilebar';
import Product from './ProductList'
import Footer from './Footer'
export default function Allproduct () {
    
    return (
        <>
            <Clientbar></Clientbar>
            <Container>
                <Row>
                    <Col md={3}>
                        <ClientSilebar></ClientSilebar>
                    </Col>
                    <Col md={9}>
                        <Product></Product>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}