import React, {useState}from 'react';
import {
    InputGroup,
    Input,
    Button,
    Container,
    Row,
    Col,
    Badge,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarBrand,
    NavbarText} from 'reactstrap'
import Shopping_cart from '../../img/shopping-cart-solid'
import User_tie from '../../img/user-tie-solid';
import '../../style/clientNavBar.scss'
import {NavLink,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../../img/bg/logo.png'
import Search from '../../img/search-solid';
 function     ClientNavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
            <>
                <header className="header">
                    <Container>
                        <Row>
                            <Col sm={7} lg={3} md={3} className="logo header__logo">
                                <NavLink className="" to="/"><img src={logo}></img></NavLink>
                            </Col>
                            <Col xs={12} lg={7} md={7} className="header__input">
                                <InputGroup>
                                    <Input>
                                    </Input>
                                    <span><Button><Search></Search></Button></span>
                                </InputGroup>
                            </Col>
                            <Col sm={5} lg={2} md={2} className="header__user">
                                <Row className="header__login">
                                    <Col className="position-relative" lg="12" md="12">
                                        <User_tie></User_tie>
                                        <Link to="/cart"><Shopping_cart></Shopping_cart> </Link>
                                        <Badge color="secondary">{props.cart_total}</Badge>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </header>
                {/* <div className="section--nav"> */}
                    <Navbar light expand="md">
                        <Container>
                        <NavLink className="mainpage"exact to="/">Trang Chu</NavLink>
                        
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>                            
                                <NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <NavLink to="/product">All Product</NavLink>
                                            
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                            <Link to="/product">Áo Vải</Link> 
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to="/product">Quần Kaki</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to="/product">Quần Jean</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to="/product">Hoodie</Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                            <Link to="/product">Quần Váy</Link> 
                                            </DropdownItem>
                                            <DropdownItem>
                                            <Link to="/product">Sơ mi</Link> 
                                            </DropdownItem>
                                            <DropdownItem>
                                            <Link to="/product" >Áo Thun</Link> 
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <Link to="#">Giới thiệu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="#">Tin tức</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="#">Liên hệ</Link>
                                </NavItem>
                                <NavItem>
                                <NavLink to="/admin">to test admin</NavLink>
                                </NavItem>
                            </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                {/* </div>  */}
            </>
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