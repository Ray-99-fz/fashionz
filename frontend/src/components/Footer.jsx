import { NavLink } from "react-router-dom"
import { FiFacebook, FiLinkedin} from "react-icons/fi";

const Footer = ()=>{
        return(
               <footer className="w-full bg-gray-200">
                   <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 mx-auto px-5 text-gray-500">
                       <div className="p-10  space-y-10">
                          <NavLink
                            to="/"
                            className="flex items-center gap-3 cursor-pointer"
                            >
                            <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=200&auto=format&fit=crop"
                            alt="Fashion Logo"
                            className="w-11 h-11 rounded-full object-cover border border-gray-200"
                            />

                            <div className="leading-tight">
                            <h1 className="text-xl font-bold tracking-wide">
                                MODA
                            </h1>
                            <p className="text-[11px] uppercase tracking-[0.25em]">
                                Fashion Hub
                            </p>
                            </div>
                         </NavLink>
                         <p className="text-[18px]">
                            Exceptional apparel and accessories 
                            designed for individuals who demand 
                            nothing less than the best. Regardless 
                            of the year. Uncompromising.
                         </p>
                         <div className="inline-flex gap-6 border border-white/70 rounded-full p-2">
                            <a href="/" className="">
                               <FiFacebook className="size-12"/>
                            </a>
                            <a href="/" className="">
                               <FiLinkedin className="size-12"/>
                            </a>
                         </div>
                       </div>
                       <div className="w-full h-full p-10 ">
                          <h1 className="font-semibold text-gray-900 tracking-[0.25em] uppercase mb-5 ">collections</h1>
                          <ul className="flex flex-col gap-5">
                              <NavLink to='/men' className='uppercase border-b border-white/70 py-1'>
                                 mens
                              </NavLink>
                              <NavLink to='/men' className='uppercase border-b border-white/70 py-1'>
                                 womens
                              </NavLink>
                              <NavLink to='/men' className='uppercase border-b border-white/70 py-1'>
                                 all products
                              </NavLink>
                              <NavLink to='/men' className='uppercase border-b border-white/70 py-1'>
                                 accessories
                              </NavLink>

                          </ul>
                       </div>
                       
                   </div>
               </footer>
        )
}

export default Footer;