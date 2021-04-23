import React from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import { useRef } from 'react'


export const AnimatedPlayerSkills = () => {



  return <Anime
    config={{
      points: [
        {
          value: [
            '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
            '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
        },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true

    }}>

    <svg width="140" height="140" viewBox="0 0 140 140">
      <g fill="none" fill-rule="evenodd">
        <g fill="currentColor" fill-opacity=".15" transform="translate(0 6)">
          <polygon points={`{10} 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369`}></polygon>
          <polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
          <polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
          <polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
        </g>
        <polygon class="polymorph" stroke-width="1" stroke="currentColor" points="70 18.685789495308185 123.80259649843606 58.87655417702257 97.40884932454136 113.40240350156394 37.11884932454137 121.36211455744359 51.19740350156394 67.37403611801504 "></polygon>
      </g>
    </svg>
    <div className="circle"></div>
  </Anime>


}

export default AnimatedPlayerSkills