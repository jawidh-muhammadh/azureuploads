import { useSelector } from "react-redux"



const Sectionfour = () => {
  const count = useSelector((state) => state.counter.value)
    return (
      <div className=" h-64 bg-amber-200">
        {count}
          </div>
    )
  }
  
  export default Sectionfour