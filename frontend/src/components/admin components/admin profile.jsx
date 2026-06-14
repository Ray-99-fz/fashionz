import { FiUser } from "react-icons/fi";

const Profile = ()=>{
      return(
             <aside className="relative w-full py-5">
                 <div className=" right-5 md:right-10 w-fit border inline-flex gap-3 px-5 py-2 text-gray-500 text-[14px]">
                      <div className="w-12 h-12  flex rounded-full border bg-radial-[at_50%_50%] from-white to-gray-600">
                          <FiUser className="size-8 m-auto text-gray-300"/>
                      </div>
                      <div className="">
                         <p className="text-[16px] font-semibold">John Banda</p>
                         <p className="">Managing Director</p>
                      </div>  
                 </div>
             </aside>
      )
}
export default Profile;