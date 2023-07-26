import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const Profile = () => {
    const navigate = useNavigate()
    const count = useSelector((state) => state.counterz.value)
    const image = useSelector((state) => state.counterz.image)
  return (
    <div>

     <h1>  {count} </h1>
     <h1>  {image} </h1>

       <button onClick={() => navigate("/")}>  go to home </button> 
        </div>
  )
}

export default Profile