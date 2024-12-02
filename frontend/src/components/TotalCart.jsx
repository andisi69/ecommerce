import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const TotalCart = () => {

  const { cartAmount, currency, delivery_fee } = useContext(ShopContext);
    
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'Cart'} text2={'Total'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between '>
            <p>Subtotal</p>
            <p>{currency} {cartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping fee</p>
            <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {cartAmount() === 0 ? 0 : cartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default TotalCart