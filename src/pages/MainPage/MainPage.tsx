import LeftSide from "./LeftSide"
import  MiddelSide from "./MiddelSide"
import RightNav from "./RightNav"
import BottomNav from "./BottomNav"
function MainPage() {
  return (
    <div className="flex justify-between  md:gap-20">
        <LeftSide/>
        <MiddelSide/>
        <RightNav/>
        <BottomNav/>
    </div>
  )
}

export default MainPage