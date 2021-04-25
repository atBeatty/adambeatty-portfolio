import Head from 'next/head'
import { useState } from 'react'
import ProjectBox from '../components/ProjectBox'
import NavBar from '../components/NavBar'




export default function Home() {


  return (
    <div className="index-wrapper">

      <NavBar />
      <ProjectBox />

    </div>
  )
}
