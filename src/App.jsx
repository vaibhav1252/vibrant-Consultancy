import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import PrivacyPolicy from './components/privacy policy/PrivacyPolicy'
import AddServiceCard from './components/Add Service Card/AddServiceCard'
import AddCourseCard from './components/Add Course Card/AddCourseCard'
import ViewDistrictList from './components/View DIstrict List/ViewDistrictList'
import Courses from './components/Courses/Courses'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <PrivacyPolicy /> */}
      {/* <AddServiceCard /> */}
      {/* <AddCourseCard />
      <ViewDistrictList /> */}
      <Courses />

    </>
  )
}

export default App
