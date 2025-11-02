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
    iconUrl="https://reactbits.dev/assets/demo/iconpattern.png"
    grainUrl="https://reactbits.dev/assets/demo/grain.webp"
    showUserInfo={true}
    enableTilt={true}
    enableMobileTilt={false}
    onContactClick={() => console.log('Contact clicked')}
  />
   </>
  )
}

export default App
