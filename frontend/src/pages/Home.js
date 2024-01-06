import React from 'react'
import '../styles/Home.css'
import homepic from '../assets/homepic.png'
import wave from '../assets/wave.svg'
function Home() {

  const hometext2ContainerStyle = {
    display: 'flex',

    width: '100%',
    height: '500px',
    background: `url(${wave})`,
    backgroundRepeat: 'no-repeat',
    marginTop:'-280px',
    marginLeft: '0px',
  };
  return (
    <div>
      <div className="hometext">Changing the Face of {'\n'}Irish Food Education</div>
      <div>
        <img src={homepic} alt="homepic" className="homepicture" />
      </div>
      <div style={hometext2ContainerStyle }>
        <div className="hometext2">
          By the time our children are adults,{'\n'}they won't know how to cook.{'\n'}We want to change that
        </div>
      </div>
    </div>
  )
}

export default Home
