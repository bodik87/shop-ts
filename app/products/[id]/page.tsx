import React from 'react'

interface Props {
 searchParams: { product: string }
}

const ProductPage = ({ searchParams: { product } }: Props) => {
 const object = JSON.parse(product);

 return (
  <div>{object.title}</div>
 )
}

export default ProductPage