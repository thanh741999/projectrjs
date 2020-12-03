import React from 'react';
import Navbar from './Navbar';
import Maincontent from './Maincontent'
import Slidebar from './Slidebar'
import '../../style/admin.scss'
import { Col, Container, Row } from 'reactstrap';
import Order from './Order';
import {Route} from 'react-router-dom'
export default class ShoppingAdmin extends React.Component {
    state = {
        open_slidebar: false,
    }
    toggleSlideBar = () => {
        this.setState({
            open_slidebar:!this.state.open_slidebar,
        })
    }
    componentDidMount() {
        const token = window.localStorage.getItem('admin_token');
       if (!token) {
           this.props.history.push('/admin/login')
       }
    }
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col className="SlideBar_bg" md={this.state.open_slidebar?0:3} style={{display:this.state.open_slidebar?'none':'block'}}>
                        <Slidebar></Slidebar>
                    </Col>
                    <Col md={this.state.open_slidebar?12:9}>
                        <Navbar toggleSlideBar={this.toggleSlideBar}></Navbar>
                    <Route path="/admin/order">
                        <Order></Order>
                    </Route>
                    <Route path="/admin/products" >
                        <Maincontent history={this.props.history}></Maincontent>
                    </Route>
                    </Col>
                </Row>
            </Container>
        )
    }
    
}