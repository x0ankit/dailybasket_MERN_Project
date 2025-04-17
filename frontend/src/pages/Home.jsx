import React from 'react'

import MainBanner from '../context/MainBanner'
import BottomBanner from '../components/BottomBanner' 
import NewsLetter from '../components/NewsLetter'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'


const Home = () => {
  return (
   <div className='mt-10' >
    <MainBanner/>
    <BottomBanner/>
    <NewsLetter/>
    <Categories/>
    <BestSeller/>

   </div>
  )
}

export default Home