import React from 'react'
import Topcard from './Topcard'
import "./topStyle.css"
const TopCate = () => {
  return (
   <>
  <section className='topCate background'>
    <div className='container'>
        <div className='heading f_flex'>
        <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Top Categories</h2>
            </div>
        </div>
        <Topcard />
    </div>
  </section>
   </>
  )
}

export default TopCate
