import React from 'react'
import '../StylesForNetflix/InformationItem.css'

export default function InformationItem({videoSrc, head, paragraph, Class, bg_Photo, img}) {
  return (
    <div className={Class}>
      
      <div className='text'>
          <h2>{head}</h2>
          <h5>{paragraph}</h5>
      </div>

      <div className={bg_Photo}>
      <img src={img} />
            <video type = 'video/mp4' autoPlay playsInline muted loop>
              <source src={videoSrc} ></source>
             </video>
      </div>
    </div>
  )
}
