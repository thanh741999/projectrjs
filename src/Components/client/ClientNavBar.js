import React from 'react';
import { NavbarBrand,
    NavbarToggler,
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavbarText,
    Container,} from 'reactstrap'
import Shopping_cart from '../../img/shopping-cart-solid'
import '../../style/clientNavBar.scss'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
 function     ClientNavBar(props) {
    const toggle = false;
    const isOpen = false;
    return (

        <Container fluid={true}>
                <Navbar color="light" light expand="md" className="mb-3">
                    <NavbarBrand href="/">
                        <NavLink exact to="/"><img src={'//theme.hstatic.net/1000306633/1000504615/14/logo.png?v=273'}/></NavLink>
                        <NavLink to="/product/">Product</NavLink>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                            <NavLink to="/cart">Cart</NavLink>
                    </Nav>
                    <NavbarText>
                        <div className="cart-icon">
                            <span className="badge badge-pill badge-dark">{props.cart_total}</span>
                            <Shopping_cart></Shopping_cart>
                        </div>
                    </NavbarText>
                    </Collapse>
                </Navbar>
            </Container>
    )
}
const mapStateToProps = (state)=> {
    const total = state.cart.reduce((sum,product)=>{
       return sum = sum + product.quantyti;
    },0)
    return {
        cart_total: total,
    }
}
export default connect(mapStateToProps)(ClientNavBar)