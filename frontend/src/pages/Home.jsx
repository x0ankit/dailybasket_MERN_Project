import React from 'react'
import MainBanner from '../context/MainBanner'
import BottomBanner from '../components/BottomBanner' 
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
   <div className='mt-10' >
    <MainBanner/>
    <BottomBanner/>
    <NewsLetter/>
   </div>
  )
}

export default Home