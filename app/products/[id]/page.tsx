"use client";
import { useParams } from 'next/navigation';
import React from 'react'

const ProductPage = () => {
 const { id } = useParams();
 return (
  <div>Товар {id}</div>
 )
}

export default ProductPage