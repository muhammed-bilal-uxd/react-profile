import { Profiler, useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard.tsx'


function App() {

  return (
   <>
  
  <ProfileCard
    name="Javi A. Torres"
    title="Software Engineer"
    handle="javicodes"
    status="Online"
    contactText="Contact Me"
    avatarUrl="https://reactbits.dev/assets/demo/person.webp"
    showUserInfo={true}
    enableTilt={true}
    enableMobileTilt={false}
    onContactClick={() => console.log('Contact clicked')}
  />
   </>
  )
}

export default App
