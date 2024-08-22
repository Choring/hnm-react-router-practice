import React from 'react'
import { ProductDetail } from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({authenticate}) => {

  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />
}
