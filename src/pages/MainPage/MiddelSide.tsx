import MySwiper from "../../components/Swiper"
import PostImg1 from "../../assets/post.jpg"
import PostImg2 from "../../assets/post3.jpg"
import PostImg3 from "../../assets/post2.jpg"
import Post from "../../components/Post"
function MiddelSide() {
  
  return (
    <div className=' overflow-hidden mr-[0px] lg:mr-[80px]'>
         <MySwiper/>   
        {/* Start posts  */}
          <Post srcImg={PostImg1}/>
          <Post srcImg={PostImg2}/>
          <Post srcImg={PostImg3}/>
          {/* End Posts  */}         
    </div>
  )
}

export default MiddelSide