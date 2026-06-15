import { FiUser } from "react-icons/fi";

const Profile = ()=>{
      return(
             <aside className="w-full flex justify-between items-end p-5 text-gray-500">
                    <h1 className="text-lg md:text-4xl text-black font-bold">Admin Dashboard</h1>
                   <div className="border rounded-lg px-3 py-1 flex items-end gap-3  text-[14px]">
                      <div className="w-12 h-12  flex rounded-full border bg-radial-[at_50%_50%] from-white to-gray-600">
                          <FiUser className="size-8 m-auto text-gray-300"/>
                      </div>
                      <div className="text-[10px] md:text-[14px]">
                         <p className="font-semibold">Harriet Mandala</p>
                         <button className="font-bold my-1 rounded-md">Log out</button>
                      </div>  
                  </div>  
             </aside>
      )
}
export default Profile;