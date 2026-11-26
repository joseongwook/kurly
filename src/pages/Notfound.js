import React from 'react'
import '../pages/css/notfound.css'
import Error from '../pages/images/error_icon.png'
function Notfound() {
  return (
    <>
      <article className='wrap'>
        <img src={Error}/>
        <h2>Notfound</h2>
        <p>404 ERROR</p>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </article>
    </>
  )
}

export default Notfound