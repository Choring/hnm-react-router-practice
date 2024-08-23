import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

export const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery= query.get('q') ? `?q=${query.get('q')}` : "";
        let url = `https://my-json-server.typicode.com/Choring/hnm-react-router-practice/products${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(() => {
        getProducts();
    },[query]);
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
