import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
const Description:React.FC=()=> {
  return (
    <div>

<p> Property Description</p>  

<div>
    <p></p>
    <button className='flex flex-col justify-center items-center bg-carrot rounded-full w-max h-10 '>
Contact Dealer  <SearchIcon sx={{ color: "#fff", fontSize: "25px" }} />
    </button>
</div>

    </div>
  )
}

export default Description;