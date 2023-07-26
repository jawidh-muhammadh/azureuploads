import { useSelector } from "react-redux"



const Sectiontwo = () => {
  const count = useSelector((state) => state.counter.value)
    return (
      <div className=" w-full bg-red-800">
         {count}
          </div>
    )
  }
  
  export default Sectiontwo