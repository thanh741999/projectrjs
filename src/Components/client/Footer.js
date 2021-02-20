import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row,ListGroup,ListGroupItem , Button} from 'reactstrap';
import MapSolid from '../../img/map-marker-alt-solid'
import '../../style/footer.scss'
import Youtube from '../../img/youtube-brands'
import Google from '../../img//google-brands'
import Facebook from '../../img/facebook-f-brands'
import Instagram from '../../img/instagram-brands'
import Twitter from '../../img/twitter-brands';
import paypol_img from '../../img/bg/i_payment.png'
import logo from '../../img/bg/logo.png'
const Footer_bottom = ()=> {
    return (
        <div className="bg">
            <Container>
                    <p class="text">© 2020 YG SHOP</p>
                    <p class="text"> Hộ Kinh Doanh Lê Minh Huy</p>
                    <p class="text"> Giấy phép ĐKHKD: 41P8017957</p>
                    <p class="text">Cấp ngày 17/12/2016 tại Ủy ban Nhân dân Quận Phú Nhuận.</p>
            </Container>
        </div>
    )
}
export default function Footer() {
    const [ToggleButton, setState] = useState(true)
    return (
        <>
            <footer className="mid-footer">

                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4} className="story_address">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="title-menu-top">
                                <MapSolid></MapSolid>
                                <span>Hệ thống cửa hàng</span>
                            </div>
                            <div className="hotline_footer">
                                <ListGroup>
                                    <ListGroupItem>Địa chỉ: 718 Cách Mạng Tháng 8, Phường 5, Quận Tân Bình, TP Hồ Chí Minh</ListGroupItem>
                                    <ListGroupItem>Hotline:<Link> 18009432</Link></ListGroupItem>
                                    <ListGroupItem>Email:<Link> ygshopvn@gmail.com</Link></ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={8}>
                            <Row>
                                <Col md={4} className="story_support repon">
                                    <p className="header-title">Hỗ trợ khách hàng </p>
                                    <ListGroup>
                                        <ListGroupItem><Link>Trang chủ</Link></ListGroupItem>
                                        <ListGroupItem><Link>Giới thiệu</Link></ListGroupItem>
                                        <ListGroupItem><Link>Sản phẩm</Link></ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col md={4} className="policy repon">
                                    <p className="header-title">CHÍNH SÁCH BÁN HÀNG</p>
                                    <ListGroup className={ToggleButton ? 'hidden' : 'show'}>
                                        <ListGroupItem><Link>Chính sách đổi hàng</Link></ListGroupItem>
                                        <ListGroupItem><Link>Chính sách bảo hành</Link></ListGroupItem>
                                        <ListGroupItem><Link>Chính sách hội viên</Link></ListGroupItem>
                                        <ListGroupItem><Link>Chính sách giao nhận</Link></ListGroupItem>
                                        <ListGroupItem><Link>Hướng dẫn mua hàng</Link></ListGroupItem>
                                        <ListGroupItem><Link>Hướng dẫn thanh toán</Link></ListGroupItem>
                                        <ListGroupItem><Link>Chính sách bảo mật thông tin</Link></ListGroupItem>
                                    </ListGroup>
                                    <Button onClick={()=> setState(!ToggleButton)}>+</Button>
                                </Col>
                                <Col md={4} className="story_info">
                                    <div className="content-info">
                                        <p className="header-title">KẾT NỐI VỚI CHÚNG TÔI</p>
                                        <ListGroup className="list">
                                            <ListGroupItem className="mr-2"><Link className="border_line"><Facebook></Facebook></Link></ListGroupItem>
                                            <ListGroupItem className="mr-2"><Link className="border_line"><Twitter></Twitter></Link></ListGroupItem>
                                            <ListGroupItem className="mr-2"><Link className="border_line"><Google></Google></Link></ListGroupItem>
                                            <ListGroupItem className="mr-2"><Link className="border_line"><Instagram></Instagram></Link></ListGroupItem>
                                            <ListGroupItem className="mr-2"><Link className="border_line"><Youtube></Youtube></Link></ListGroupItem>
                                        </ListGroup>
                                    </div>
                                    <div className="paypol mt-3">
                                        <h4>Phương thức thanh toán</h4>
                                        <div className="paypol_img">
                                            <img src={paypol_img} alt="paypol"></img>
                                        </div>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                </footer>
                <Footer_bottom></Footer_bottom>
        </>
    )
}