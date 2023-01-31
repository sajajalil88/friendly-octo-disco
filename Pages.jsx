import React from 'react'
import Home from '../components/Mainpage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/wrapper/Wrapper'
import Announcement from '../components/announcement/Announcement'
import Discount from '../components/discount/Discount'
import Shop from "../components/shops/Shop"
import Cartg from '../components/shops/Cartg'
const Pages = ({productItems ,cartItem , addToCart, shopItems}) => {
  return (
    <>
    <Home  cartItem={cartItem}/>
    <FlashDeals productItems={productItems} addToCart={addToCart} />
   <TopCate />
   <Discount />
   
   <Announcement />
   <Wrapper />
    </>
  )
}

export default Pages
