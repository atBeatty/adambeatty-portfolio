import Head from 'next/head'
import { useState } from 'react'
import AllProjects from '../components/AllProjects'
import NavBar from '../components/NavBar'
import MyAnimationExample from '../components/MyAnimationExample'




export default function Home() {

  return (
    <div className="index-wrapper">

      <NavBar />
      {/* <ProjectBox /> */}
      <AllProjects />
      {/* <MyAnimationExample /> */}
    </div>
  )
}
