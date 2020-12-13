import React, { Component, useState } from 'react' 
import ClientNavBar from './ClientNavBar'
import Footer from './Footer'
import '../../style/Home.scss';
import {
    Container, Row, Col, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import ListProductHome from './ListProductHome';
import User_tie from '../../img/user-tie-solid';
const items = [
    {
        src:'//theme.hstatic.net/1000306633/1000504615/14/slideshow_4.jpg?v=273',
    },
    {
        src:'//theme.hstatic.net/1000306633/1000504615/14/slideshow_3.jpg?v=273',
    },
    {
        src:'//theme.hstatic.net/1000306633/1000504615/14/slideshow_1.jpg?v=273',
    }
];
const event_banner = [
    {
        src:'https://cdn2.yame.vn/cimg/images/33e13fd3-2ef4-0100-175c-001776c60a67.jpg',
    },
    {
        src:'https://cdn2.yame.vn/cimg/images/501f02c6-34e7-0200-ab6f-0017708deb77.jpg',
    },
    {
        src:'https://cdn2.yame.vn/cimg/images/1159e8a2-424f-0100-e062-00174dea54f8.jpg',
    },
]
const product_sale = ['https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg',
"https://product.hstatic.net/1000351433/product/193d9383-2e68-459f-9410-5e2401faafd0_0acca79e2ab04140913356573bf595f0_grande.jpg",
"https://product.hstatic.net/1000351433/product/a1612015-3b99-4f80-a884-b24ef08296e8_30c6eeb7acb048589f3b3f8146d0c0ac_grande.jpg",
"https://product.hstatic.net/1000351433/product/75ef9ba9-926e-4f21-a533-583afbb62e7b_46bc0046a175484fa9ea328db9ef4716_grande.jpg",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/106493627-1104633393243213-3606329519053421832-n.jpg?v=1596542759000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/123249733-1518238965231068-2542738556674352399-n.jpg?v=1604149138000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/130191086-4695038163904375-4136105752107117386-n.jpg?v=1607664796000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/130991720-203716081300693-7533353712156573740-n.jpg?v=1607664697000",
]
const new_product = ["https://product.hstatic.net/1000351433/product/wash_5f5afef0247d4b2eabcb1e4530da4612_grande.jpg",
"https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg",
"https://product.hstatic.net/1000351433/product/e365d650-02ad-4185-bff3-c4f1c0af421a_4ac8a539bbde4d028de3548fa0a4dca5_grande.jpg",
"https://product.hstatic.net/1000351433/product/02ed9133-9013-402d-9ba2-0cbac9abaa02_f990c5b32055460c90bfe5cafe24a62b_grande.jpg",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/129096909-3796122577087777-2554947625000685833-n.jpg?v=1607337263000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/89665201-200767764568731-48122205153787904-n.jpg?v=1583979820000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/115887679-1507772449402243-2148908102227384568-n.jpg?v=1607513073000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/118677728-992289671598757-6211559454166735872-n.jpg?v=1599647530000",
]
function Home(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        // setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                // onExiting={() => setAnimating(true)}
                // onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src}  />
                <CarouselCaption  />
            </CarouselItem>
        );
    });
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [animating1, setAnimating1] = useState(false);

    const next1 = () => {
        if (animating) return;
        const nextIndex = activeIndex === event_banner.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex1(nextIndex);
    }

    const previous1 = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? event_banner.length - 1 : activeIndex - 1;
        setActiveIndex1(nextIndex);
    }

    const goToIndex1 = (newIndex) => {
        if (animating) return;
        // setActiveIndex(newIndex);
    }
    const slides1 = event_banner.map((item) => {
        return (
            <CarouselItem
                // onExiting={() => setAnimating(true)}
                // onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src}  />
                <CarouselCaption  />
            </CarouselItem>
        );
    });
    return (
        <>
            <ClientNavBar></ClientNavBar>
            <Container fluid={true} >
                <Row className="carousel_item">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
                </Row>
            </Container>
            <section className="product-sale-page">
                <Container>
                    <div className="header">
                        <span>Khuyến Mãi</span>
                    </div>
                    <Row>
                        {product_sale.map(((product,index)=>{
                            return <ListProductHome product={product} key={index}></ListProductHome>
                        }))}
                    </Row>
                </Container>
            </section>
            <Container fluid={true} >
                <Row className="carousel_item">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}>
                    <CarouselIndicators items={event_banner} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides1}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
                </Row>
            </Container>
           <section className="new-product-page">
            <Container>
                    <div className="header">
                        <span>Sản Phẩm Mới</span>
                    </div>
                    <Row>
                        {new_product.map(((product,index)=>{
                                return <ListProductHome product={product} key={index}></ListProductHome>
                            }))}
                    </Row>
                </Container>
           </section>
           <section >
               <Container className="new">
                       <h2 className="new__header">Tin tức  Khuyến mãi</h2>
                   <Row>
                       <Col md={4}>
                            <div className="new__img">
                                <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/articles/123128452-399021061464188-423336698884241657-n.jpg?v=1604078191243"></img>
                            </div>
                            <div className="new__content content">
                                <div className="content__top">
                                    <h4>Halloween hoá trang thành “shopaholic” săn lùng Flash sale tại YG SHOP💥</h4>
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
                       <Col md={4}>
                        <div className="new__img">
                                    <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/articles/at-store-online.jpg?v=1598286103960"></img>
                                </div>
                                <div className="new__content content">
                                    <div className="content__top">
                                        <h4>Quốc Khánh 2/9 - Sale Upto 50%</h4>
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
                       <Col md={4}>
                        <div className="new__img">
                                        <img src="//bizweb.dktcdn.net/thumb/large/100/331/067/articles/127231981-1817671058388568-6091960111147141031-o.jpg?v=1606237618530"></img>
                                    </div>
                                    <div className="new__content content">
                                        <div className="content__top">
                                            <h4>WE’RE BACK - YG SHOP ĐÀ LẠT</h4>
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
