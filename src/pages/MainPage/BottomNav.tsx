import Logo from "../../assets/logo.png"
import data ,{Data} from "../../data/NavbarIcons"
import { NavLink } from 'react-router-dom'
function RightSide() {

  return (
  <div className='md:hidden fixed right-0 bottom-0 min-w-full bg-white z-[9999999999999]'>

  <div className={`h-[60px] flex transtion duration-300 border-l border-gray-300 justify-around`}>
    {/* logo */}
    <div className='my-[20px] flex items-center '>
          <img src={Logo} alt="logo" className='w-[20px] md:w-[30px] ' />
    </div>

  {/* Right Nav icons&title  */}
  {
    data.map((item:Data)=>(
        
        <NavLink to={`/${item.title}`} className={`  RightNavEle hover:bg-gray-200 p-2`}
          dir='rtl' key={item.id}>
            <div>
                <i className={`${item.icon} text-lg md:text-xl`}></i>
            </div>
        </NavLink>
        
      
    ))
  }
  {/* end Right Nav  */}

</div>


</div>
    
  )
}

export default RightSide