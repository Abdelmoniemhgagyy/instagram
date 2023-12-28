import { useCallback, useEffect, useState } from "react"
import SuggestedFrindes from "../../components/SuggestedFrindes"
function LeftSide() {

  // when screen lager than 1200px the left Nav become Hidden 
  // كان ممكن بدل الدالة دي اعملها بسهولة بعناصر ال tailwind md sm lg 
  // بس عملتها كده علشان استخدم ال ts 

   const [showNav,setShowNav]=useState<boolean>(true)

    const ChangeWidth = useCallback(()=>{
         const itemWidth = window.innerWidth
              if(itemWidth>1200){
                  setShowNav(true)
                }else{
                  setShowNav(false)
                }

    },[showNav])
   

   useEffect(() => {
       ChangeWidth(); 
       window.addEventListener('resize', ChangeWidth);
     }
    ,[ChangeWidth])
  return (
<div>
   <div className={`flex flex-col w-[320px] min-h-screen ${showNav?``:`hidden`}`}>
      {/* name of your account  */}
      <div  className="FlexBetween">

        <p className="text-blue-600 hover:text-blue-400 text-sm cursor-pointer font-bold">التبديل</p>
        <div className="flex justify-center items-center space-x-3">

            <div>
              <p className="font-bold text-sm">abdelmoniem_hgagy</p>
              <p className="text-end">حجاجي</p>
            </div>

            <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"/>
        </div>
      </div>
      {/* end Name of your account  */}

      {/* Suggestions Header */}
          <div className="FlexBetween mt-[30px]">
          <p className="font-bold text-sm hover:text-gray-400 cursor-pointer">عرض الكل</p>
          <p className="text-gray-500 font-bold text-sm ">أقتراحات قد تعجبك</p>
          </div>
      {/* End Suggestions Header */}


      {/* Suggested frindes Component */}
          <SuggestedFrindes name="sa7169649" follow="يتابعك"/>
          <SuggestedFrindes name="mahmoud.rady.378537" follow="يتابعه hmada_hgagy"/>
          <SuggestedFrindes name="Hosny_ali" follow="مستخدم جديد في instgram"/>
          <SuggestedFrindes name="mrowanosama30" follow="يتابعه علي_محمد + 1 من الأشخاص الأخرين"/>
          <SuggestedFrindes name="ahmed_amer263" follow="أقتراحات قد تعجبك"/>
      {/*End Suggested frindes Component */}


      {/* about left side */}
          <div className="mt-[25px] flex flex-wrap text-gray-400 text-sm font-normal space-x-1 indent-[3.5px] cursor-pointer" dir="rtl">
              <p>حول</p> .
              <p>الصحافة</p> . 
              <p>واجهة الApi</p>.
              <p>الوظائف</p>.
              <p>الخصوصية</p>.
              <p>الشروط</p>.
              <p>الموقع</p>.
              <p>اللغة</p>.
              <p>Meta verfied</p>
          </div>
      {/* End about left side */}
 
       {/* copyRight  */}
         <p className=" text-gray-300 mt-7 text-[16px] text-left">© 2023 By Abdelmoniem Hgagy</p>
    </div>

</div>
  )
}

export default LeftSide