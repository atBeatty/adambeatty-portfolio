import Head from 'next/head'
import { useState } from 'react'
import ProjectBox from '../components/ProjectBox'
import NavBar from '../components/NavBar'




export default function Home() {

  const [isClicked, setIsClicked] = useState(false)
  const [projectNumber, setProjectNumber] = useState(0)








  return (
    <><Head>
      <title>Adam Beatty</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <NavBar />
      <ProjectBox />

    </>
  )
}
