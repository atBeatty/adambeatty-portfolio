import Head from 'next/head'
import { useState } from 'react'
import AllProjects from '../components/AllProjects'
import NavBar from '../components/NavBar'
import MyAnimationExample from '../components/MyAnimationExample'




export default function Home() {
  const [state, setState] = useState({ name: '', email: '' });
  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  }
  console.log(state)
  const handlePress = (e) => {
    e.preventDefault()
    fetch('/api/mailer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: state.name, email: state.email })
    });
  }
  return (


    <div className="index-wrapper">

      <NavBar />
      {/* <ProjectBox /> */}
      <form>
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <div>
          <button onClick={handlePress}>Send</button>
        </div>
      </form>
      <AllProjects />
      {/* <MyAnimationExample /> */}
    </div>
  )
}
