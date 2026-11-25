import React from 'react'
import BannerImg from '../components/images/banner/banner_img01.png'
import '../components/css/banner.css'
function Banner() {
  return (
    <>
    <div className='banner_wrap'>
      <img src={BannerImg} alt="배너이미지"/>
    </div>
    </>
  )
}

export default Banner