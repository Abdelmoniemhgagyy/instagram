import { useState } from "react"
import { suggested } from "../lib/types"

function SuggestedFrindes({name,follow}:suggested) {
  const [isFollow,setIsFollow]=useState<boolean>(false)
  return (
    <div  className="FlexBetween mt-6">

       <p className="text-blue-600 hover:text-blue-400 text-sm cursor-pointer font-bold" onClick={()=>{setIsFollow(!isFollow)}}>
        {isFollow ? <span className='text-gray-500 hover:text-gray-400'>أتابع</span> : "متابعة"}</p>
       <div className="flex justify-center items-center space-x-3">

                <div className="text-right leading-1">
                <p className="font-bold text-sm">{name}</p>
                <p className="truncate w-44 text-[14px] text-gray-400 " dir="rtl">{follow}</p>
                </div>
    
                <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"/>
    
    
    </div>
    
    
    
    </div>
  )
}

export default SuggestedFrindes