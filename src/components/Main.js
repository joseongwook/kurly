import React from 'react'
import Mainslide from './Mainslide'
import Recommandproduct from '../components/Recommandproduct'
import Banner from '../components/Banner'
import Bestproduct from '../components/Bestproduct'
function Main() {
  return (
    <>
      <main>
      {/* 1. 메인슬라이드 콤포넌트 */}
      <Mainslide/>
      {/* 2. 추천상품 콤포넌트 */}
      <Recommandproduct/>
      {/* 3. 배너 콤포넌트 */}
      <Banner/>
      {/* 4. 인기상품 콤포넌트 */}
      <Bestproduct/>
      </main>
    </>
  )
}

export default Main