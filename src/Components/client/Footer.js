import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row,ListGroup,ListGroupItem ,} from 'reactstrap';
import MapSolid from '../../img/map-marker-alt-solid'
import '../../style/footer.scss'
import Youtube from '../../img/youtube-brands'
import Google from '../../img//google-brands'
import Facebook from '../../img/facebook-f-brands'
import Instagram from '../../img/instagram-brands'
import Twitter from '../../img/twitter-brands';
import paypol_img from '../../img/bg/i_payment.png'
const Footer_bottom = ()=> {
    return (
        <div className="bg">
            <Container>
                    <p class="text">© 2020 Haddes SHOP</p>
                    <p class="text"> Hộ Kinh Doanh Lê Minh Huy</p>
                    <p class="text"> Giấy phép ĐKHKD: 41P8017957</p>
                    <p class="text">Cấp ngày 17/12/2016 tại Ủy ban Nhân dân Quận Phú Nhuận.</p>
            </Container>
        </div>
    )
}
export default function Footer() {
    return (
        <>
            <footer className="mid-footer">

                <Container>
                    <Row>
                        <Col md={3} className="story_address">
                            <h1>logo</h1>
                            <MapSolid></MapSolid>
                            <span>Hệ thống cửa hàng</span>
                            <address>Hades Flagship Store: 121 Nguyễn Trãi Q.1</address>
                            <address>Store 2: 26 LÝ TỰ TRỌNG Q.1 ( THE NEW PLAYROUND)</address>
                            <address>Store 3: Central Market ( đối diện 90 Lê Lai) Quận 1</address>
                            <address>Store 4: 350 ĐIỆN BIÊN PHỦ F17 Q. BÌNH THẠNH ( G TOWN)</address> 
                            <address>Store 5 : 136 Nguyễn Hồng Đào phường 14 Q.Tân Bình.</address>        
                            <address>Store 6 : Tầng 7 - tòa B2 - Vincom Bà Triệu, Hà Nội</address>       
                            <address>Store 7: 15 Nguyễn Việt Hồng, quận Ninh Kiều, thành phố Cần Thơ</address>     
                            <address>Store 8: 235 Phan Trung Tp Biên Hoà Đồng Nai</address>       
                        </Col>
                        <Col md={3} className="story_support">
                            <p className="header-title">Hỗ trợ khách hàng </p>
                            <ListGroup>
                                <ListGroupItem><Link>Trang chủ</Link></ListGroupItem>
                                <ListGroupItem><Link>Giới thiệu</Link></ListGroupItem>
                                <ListGroupItem><Link>Sản phẩm</Link></ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3} className="policy ">
                            <p className="header-title">CHÍNH SÁCH BÁN HÀNG</p>
                            <ListGroup>
                                <ListGroupItem><Link>Chính sách đổi hàng</Link></ListGroupItem>
                                <ListGroupItem><Link>Chính sách bảo hành</Link></ListGroupItem>
                                <ListGroupItem><Link>Chính sách hội viên</Link></ListGroupItem>
                                <ListGroupItem><Link>Chính sách giao nhận</Link></ListGroupItem>
                                <ListGroupItem><Link>Hướng dẫn mua hàng</Link></ListGroupItem>
                                <ListGroupItem><Link>Hướng dẫn thanh toán</Link></ListGroupItem>
                                <ListGroupItem><Link>Chính sách bảo mật thông tin</Link></ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3} className="story_info">
                            <div className="content-info">
                                <p className="header-title">KẾT NỐI VỚI CHÚNG TÔI</p>
                                <ListGroup className="list">
                                    <ListGroupItem className="mr-3"><Link className="border_line"><Facebook></Facebook></Link></ListGroupItem>
                                    <ListGroupItem className="mr-3"><Link className="border_line"><Twitter></Twitter></Link></ListGroupItem>
                                    <ListGroupItem className="mr-3"><Link className="border_line"><Google></Google></Link></ListGroupItem>
                                    <ListGroupItem className="mr-3"><Link className="border_line"><Instagram></Instagram></Link></ListGroupItem>
                                    <ListGroupItem className="mr-3"><Link className="border_line"><Youtube></Youtube></Link></ListGroupItem>
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
                </Container>
                </footer>
                <Footer_bottom></Footer_bottom>
        </>
    )
}