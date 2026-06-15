import { FiUser } from "react-icons/fi";

const Profile = ()=>{
      return(
             <aside className="w-full flex justify-between p-5 text-gray-500">
                    <h1 className="text-4xl mdtext-5xl text-black font-bold">Admin Dashboard</h1>
                   <div className="border rounded-lg p-3 inline-flex gap-3  text-[14px]">
                      <div className="w-12 h-12  flex rounded-full border bg-radial-[at_50%_50%] from-white to-gray-600">
                          <FiUser className="size-8 m-auto text-gray-300"/>
                      </div>
                      <div className="">
                         <p className="text-[16px] font-semibold">Harriet Mandala</p>
                         <button className="font-bold my-1 rounded-md">Log out</button>
                         <p className="hidden">Managing Director</p>
                      </div>  
                  </div>  
             </aside>
      )
}
export default Profile;