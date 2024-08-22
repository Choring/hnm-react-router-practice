import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const [productList, setProductList] = useState(null); // 초기 상태를 null로 설정
  const {id} = useParams();
  
  const getProducts = async () => {
    let url = `http://localhost:4000/products?id=${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data[0]);
  }

  useEffect(() => {
      getProducts();
  },[id]);

  return (
    <div>
      <div className='container d-flex justify-content-center gap-5'>
        <div style={{flex:1}}>
          {productList && <img src={productList.img} alt='img' />}
        </div>
        <div style={{flex:1}} className='d-flex flex-column'>
          <h3 className='m-0'>{productList?.title}</h3>
          <h4 className='m-0'>₩ {productList?.price}</h4>
          {productList?.choice === true ? <p className='m-0'>Conscious choice</p> : null}
          <select style={{width:200}}>
            <option>사이즈 선택</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          <button className='bg-primary text-white mt-3'>추가하기</button>
        </div>
      </div>
    </div>
  )
}
