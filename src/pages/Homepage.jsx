import React from 'react'
import Holder from '../components/holder'
import Sectionone from '../components/sectionone'
import Sectionthree from '../components/sectionthreee'
import Sectionfour from '../components/sectionfour'
import Sectiontwo from '../components/sectiontwo'
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className=' h-screen'>

      <Holder />
      <Sectionone />
      {/* <Sectionone />


      <div className=' flex justify-center h-56 '> 
      <Sectiontwo />
      <Sectionthree/>
    

      </div> */}
      {/* <Sectionfour /> */}

      <button onClick={ () => navigate("/profile") }>  Go to profile </button>
   
        </div>
  )
}

export default Homepage