import React from 'react'
import Star from '../../img/star-regular'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider  from 'react-slick'
import {Col, ListGroup,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';
// 
const new_product = ["https://product.hstatic.net/1000351433/product/wash_5f5afef0247d4b2eabcb1e4530da4612_grande.jpg",
"https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg",
"https://product.hstatic.net/1000351433/product/e365d650-02ad-4185-bff3-c4f1c0af421a_4ac8a539bbde4d028de3548fa0a4dca5_grande.jpg",
"https://product.hstatic.net/1000351433/product/02ed9133-9013-402d-9ba2-0cbac9abaa02_f990c5b32055460c90bfe5cafe24a62b_grande.jpg",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/129096909-3796122577087777-2554947625000685833-n.jpg?v=1607337263000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/89665201-200767764568731-48122205153787904-n.jpg?v=1583979820000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/115887679-1507772449402243-2148908102227384568-n.jpg?v=1607513073000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/118677728-992289671598757-6211559454166735872-n.jpg?v=1599647530000",
]
export default function  ProductNew(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
    return (
        <Slider {...settings}>
                {new_product.map((product,index)=>{
                    return (
                                <Col md={12}>
                                        <div className="product">
                                                    <Link to="/product">
                                                        <img src={product} alt="product-new">

                                                        </img>
                                                    </Link>
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <Link to="/product">Product {index}</Link>
                                                    </h3>
                                                    <div className="product-star mb-group">
                                                        <ListGroup>
                                                            <ListGroupItem><Star></Star></ListGroupItem>
                                                            <ListGroupItem><Star></Star></ListGroupItem>
                                                            <ListGroupItem><Star></Star></ListGroupItem>
                                                            <ListGroupItem><Star></Star></ListGroupItem>
                                                            <ListGroupItem><Star></Star></ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                    <div className="product-price mb-group">
                                                            <span>80$</span>
                                                    </div>
                                                </div>
                                        </div>
                                </Col>
                    )
                })}
        </Slider>
    )
}