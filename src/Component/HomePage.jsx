import React from 'react';
import Slider from "../Component/Slider";
import Notice from "../Component/Notice"

const HomePage = () => {
  return (
    <div style={{display:'flex', width: '100%'}}>

<div style={{width:'75%'}}>
    <Slider></Slider>
</div>
<div style={{width:'25%', backgroundColor: '#9c27b0', padding: '20px'}}>
    <Notice></Notice>
</div>

    </div>
  )
}

export default HomePage