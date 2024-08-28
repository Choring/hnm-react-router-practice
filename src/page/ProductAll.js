import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productActions } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

export const ProductAll = () => {
    const productList = useSelector((state) => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch =useDispatch();
    const getProducts =  () => {
        let searchQuery= query.get('q') ? `?q=${query.get('q')}` : "";
        dispatch(productActions.getProducts(searchQuery));
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
