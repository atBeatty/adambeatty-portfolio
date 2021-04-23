import '../styles/globals.css'
import { useState } from 'react'
// import useMousePosition from '../lib/hooks/useMousePosition';


function MyApp({ Component, pageProps }) {
  // const { x, y } = useMousePosition();

  // const hasMovedCursor = typeof x === "number" && typeof y === "number";


  return <div className="App">

    <Component {...pageProps} />
  </div>
}

export default MyApp
