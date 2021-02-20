import React from 'react' 
import ClientNavBar from './ClientNavBar'
import Footer from './Footer'
import User_tie from '../../img/user-tie-solid';
// support 
import { Link } from 'react-router-dom';
import {
    Container, Row, Col,Button,Card, CardImg
} from 'reactstrap';
// css
import '../../style/Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSale from './ProductSale';
import ProductNew from './ProductNew';
import imgBanner1 from '../../img/bg/bg_module_1.png'
import imgBanner2 from '../../img/bg/bg_module_2.png'
import imgBanner3 from '../../img/bg/bg_module_3.png'

function Header_title (props) {
    return (
        <Col md={12} lg={12} sm={12}>
            <div className="header_hotdeal">
                <h2 className="title-head">
                    <Link to="">{props.title}</Link>
                </h2>
            </div>
        </Col>
    )
} 
function Product_banner (props) {
    return (
        <Col lg={3} md={4} className="banner">
            <div className="banner_img">
                <div className="bg_img">
                    {/* <img src={props.img} alt="Product_new_banner"></img> */}
                    <h2 className="title-new">
                        <Link to="/product">{props.title}</Link>
                    </h2>
                    <Button outline><Link to="/product">xem them</Link></Button>
                </div>
            </div>
        </Col>
    )
}
function Product_hot (props) {
    return (
        <>
                <div className="header-top">
                </div>
                <Container>
                    <Product_content imgBanners={props.imgBanner} bannerTitles={props.bannerTitle}></Product_content>
                </Container>
        </>
    )
} 
function Product_content (props) {
    return (
        <Row>
            <Product_banner img={props.imgBanners} title={props.bannerTitles}></Product_banner>
            <Col lg={9} md={8}>
                <ProductNew></ProductNew>
            </Col>
        </Row>
    )
}
function Home(props) {
    
    return (
        <>
            <ClientNavBar></ClientNavBar>
            <section className="sale-page">
                <Container>
                    <Row>
                        <Header_title title="sale"></Header_title>
                    </Row>
                    <Row>
                        <Col md={12} lg={12} sm={12} className="owl_product">
                            <ProductSale></ProductSale>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="new-page">
                <Container>
                    <Row>
                        <Header_title title="new"></Header_title>
                    </Row>
                    <Product_content imgBanners={imgBanner1} bannerTitles="new"></Product_content>
                </Container>
            </section>
            <section className="hot-page mb-0">
                <Product_hot imgBanner={imgBanner2} bannerTitle="hot"></Product_hot>
            </section>
            <section className="hot-page">
                <Product_hot imgBanner={imgBanner1} bannerTitle="what's hot"></Product_hot>
            </section>
            <section >
               <Container className="new">
                       <h2 className="new__header">Tin tức  Khuyến mãi</h2>
                   <Row>
                       <Col md={4} className="new__box">
                            <div className="new__img">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/articles/123128452-399021061464188-423336698884241657-n.jpg?v=1604078191243"></img>
                            </div>
                            <div className="new__content content">
                                <div className="content__top">
                                    <h4><Link>Halloween hoá trang thành “shopaholic” săn lùng Flash sale tại YG SHOP💥</Link></h4>
                                    <span>
                                        <User_tie></User_tie> Đăng bởi: Lê Minh Huy
                                    </span>
                                </div>
                                <div className="content__sub">
                                    <p> Trick or treat? 
                                        Săn sale hay bị ghẹo 😈 
                                        Halloween hoá trang thành “shopaholic” săn lùn...
                                    </p>
                                </div>
                            </div>                        
                       </Col>
                       <Col md={4} className="new__box">
                        <div className="new__img">
                                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/articles/at-store-online.jpg?v=1598286103960"></img>
                                </div>
                                <div className="new__content content">
                                    <div className="content__top">
                                        <h4><Link>Quốc Khánh 2/9 - Sale Upto 50%</Link></h4>
                                        <span>
                                            <User_tie></User_tie> Đăng bởi: Lê Minh Huy
                                        </span>
                                    </div>
                                    <div className="content__sub">
                                        <p>  🇻🇳INDEPENDENCE DAY🇻🇳🔥SALE UPTO 50%🔥 
                                            Hot sale tại YG SHOP vào dịp Quốc Khánh 2/9 năm nay...
                                        </p>
                                    </div>
                        </div>
                       
                       </Col>
                       <Col md={4} className="new__box">
                        <div className="new__img">
                                        <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/articles/127231981-1817671058388568-6091960111147141031-o.jpg?v=1606237618530"></img>
                                    </div>
                                    <div className="new__content content">
                                        <div className="content__top">
                                            <h4><Link>WE’RE BACK - YG SHOP ĐÀ LẠT</Link></h4>
                                            <span>
                                                <User_tie></User_tie> Đăng bởi: Lê Minh Huy
                                            </span>
                                        </div>
                                        <div className="content__sub">
                                            <p>   Alo alo alo!!! 
                                                Sau  bao ngày vất vả để hoàn thành cửa hàng mới với tốc độ 5G kèm rất...
                                            </p>
                                        </div>
                            </div>
                       </Col>
                   </Row>
               </Container>
           </section>
            <Footer></Footer>
        </>
    )
}
export default Home
