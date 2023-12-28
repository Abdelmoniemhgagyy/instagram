import { useState } from "react"
import { post } from "../lib/types"

function Post({srcImg} : post) {
    const [love,setLove] =useState<boolean>(false)

    const handelLove = ():void=>{
        setLove(!love)
    }
  return (
    <div className="flex flex-col lg:w-[70%] w-full  mx-auto">

    <div  className="FlexBetween  justify-between items-center mt-[40px]">
      {/* Start post header  */}
                <p className="text-3xl h-[58px]">...</p>
                <div className="flex justify-center items-center flex-start space-x-3 ">
                      <p className="font-bold text-sm">abdelmoniem_hgagy</p>
                    <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full border-2 border-red-400"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Image Description"/>
                </div>
    </div>
{/* End post header  */}
       {/* post img  */}
      <div className=" h-[400px] mt-[8px] mx-0">
        <img src={srcImg} alt="post" className="w-full h-full rounded" />
      </div>

 {/* icons under post  */}
    <div className="flex justify-between items-center mt-3 text-xl font-[900]">
            
          <i className="bi bi-bookmark hover:text-gray-400"></i>

          <div className=" text-right space-x-3 flex items-center justify-end cursor-pointer" >
              <i className="bi bi-send hover:text-gray-400"></i>
              <i className="bi bi-chat hover:text-gray-400"></i>

              {love?<i className="bi bi-heart-fill hover:text-red-400" onClick={handelLove}></i>
                   :<i className="bi bi-heart hover:text-gray-400" onClick={handelLove}></i>            
            }
             
          </div>
    </div>
 {/* icons under post  */}

  <div className="mt-3 text=[16px]  text-right leading-[1.9]">
        <p className="font-[600]">1,190 تسجيل إعجاب</p>
        <div >
          <p className="font-[700] " dir="rtl">
               abdelmoniem_hgagy
              <span className="mr-1 font-[400]">
              اللهم صل على محمد وعلى آل محمد، كما صليت على إبراهيم، وعلى آل إبراهيم، إنك حميد مجيد، اللهم بارك على محمد، وعلى آل محمد كما باركت على إبراهيم، وعلى آل إبراهيم إنك حميد مجيد                        </span>
          </p>
        </div>
  </div>
</div>
  )
}

export default Post