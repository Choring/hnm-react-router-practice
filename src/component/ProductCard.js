import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`product/${item.id}`);
  }
  return (
    <div>
        <div className='img-box' onClick={showDetail}>
          <img className='item-hover' src={item?.img} width={"100%"} alt="img" />
        </div>
        <div>{item.choice === true ? "Conscious Choice" : ""}</div>
        <div>{item?.name}</div>
        <div>{item?.price}</div>
        <div>{item.new === true ? "신제품" : ""}</div>
    </div>
  )
}
