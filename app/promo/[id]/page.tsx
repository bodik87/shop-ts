import { useParams } from 'next/navigation';
import React from 'react'

const PromoPage = () => {
 const { id } = useParams();
 return (
  <div>Акція №{id}</div>
 )
}

export default PromoPage