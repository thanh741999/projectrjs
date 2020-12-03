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
const product_sale = ['https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg',
"https://product.hstatic.net/1000351433/product/193d9383-2e68-459f-9410-5e2401faafd0_0acca79e2ab04140913356573bf595f0_grande.jpg",
"https://product.hstatic.net/1000351433/product/a1612015-3b99-4f80-a884-b24ef08296e8_30c6eeb7acb048589f3b3f8146d0c0ac_grande.jpg",
"https://product.hstatic.net/1000351433/product/75ef9ba9-926e-4f21-a533-583afbb62e7b_46bc0046a175484fa9ea328db9ef4716_grande.jpg"
]
const new_product = ["https://product.hstatic.net/1000351433/product/wash_5f5afef0247d4b2eabcb1e4530da4612_grande.jpg",
"https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg",
"https://product.hstatic.net/1000351433/product/e365d650-02ad-4185-bff3-c4f1c0af421a_4ac8a539bbde4d028de3548fa0a4dca5_grande.jpg",
"https://product.hstatic.net/1000351433/product/02ed9133-9013-402d-9ba2-0cbac9abaa02_f990c5b32055460c90bfe5cafe24a62b_grande.jpg",
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
            <Footer></Footer>
        </>
    )
}
export default Home
