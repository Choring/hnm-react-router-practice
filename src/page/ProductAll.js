import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

export const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = ` https://my-json-server.typicode.com/Choring/hnm-react-router-practice/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProducts();
    },[])
  return (
    <div>
        <Container>
          <Row>
            {productList.map((menu,index)=>(
              <Col lg={3} key={index} >
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  )
}
