import React from 'react'
import { useCartStore } from '../store/cart';

const EmailTemplate = () => {
 const cartStore = useCartStore();
 return (
  <>
   <h2>Ваше замовлення №1</h2>

   {cartStore.cart.map((el) => (
    <div key={el.id}>
     <h3 className="text-xl">{el.title}</h3>
     <div className="opacity-80">Ціна за одиницю: {el.price} грн</div>
     <p className="border rounded-lg w-12 h-12 flex items-center justify-center">{el.quantity}</p>
    </div>))}</>
 )
}

export default EmailTemplate