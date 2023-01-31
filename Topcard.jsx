import React from 'react'
import Tdata from "./Tdata"
import "./topStyle.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Topcard = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <>
        <Slider {...settings}>
          {Tdata.map((value) => {
            return (
              <>
                <div className='box product' >
                  <div className='nametop d_flex'>
                    <span className='tleft'>{value.para}</span>
                    <span className='tright'>{value.desc}</span>
                  </div>
                  <div className='img'>
                    <img src={value.cover} alt='/' />
                  </div>
                </div>
              </>
            )
          })}
        </Slider>
      </>
    )
  }
  
  export default Topcard 