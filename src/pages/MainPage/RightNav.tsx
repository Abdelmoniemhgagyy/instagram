import { useState } from 'react'
import Logo from "../../assets/logo.png"
import data ,{Data} from "../../data/NavbarIcons"
import { NavLink } from 'react-router-dom'
function RightSide() {

    const [openNav,setOpenNav] =useState<boolean>(true)

  return (
    <div>
<div className='hidden md:block fixed right-0 top-0 min-h-screen bg-white z-[999999999999]'>

<div className={`${openNav ? `w-[280px]`:`w-[60px]`}  flex flex-col transtion duration-300 border-l border-gray-300 `}>
   {/* logo */}
   <div className='my-[20px] flex justify-center'>
        <img src={Logo} alt="logo" className='w-[35px] ' />
   </div>

{/* Right Nav icons&title  */}
{
  data.map((item:Data)=>(
      
       <NavLink to={`/${item.title}`} className={`${!openNav ? `pr-[15px]` : `pr-[34px]`}  RightNavEle mt-[10px] hover:bg-gray-200 p-2`}
         dir='rtl' key={item.id}>
          <div>
              <i className={`${item.icon} text-2xl`}></i>
          </div>
          <div>
               <p style={{fontSize:openNav?"18px":"0px"}} className='text-[0px] transtion duration-300'>{item.title}</p>
          </div>
      </NavLink>
      
     
  ))
}
{/* end Right Nav  */}

{/* Sart Show More  */}
<div className={`${!openNav ? `pr-[15px]` : `pr-[34px]`}  RightNavEle mt-[10px] hover:bg-gray-200 p-2`}
         dir='rtl'
         onClick={()=>setOpenNav(!openNav)} >
          <div>
              <i className= "bi bi-list text-2xl"></i>
          </div>
          <div>
               <p style={{fontSize:openNav?"18px":"0px"}} className='text-[0px]'>القائمة</p>
          </div>

</div>
{/*End Show More  */}

</div>


</div>
    </div>
    
  )
}

export default RightSide