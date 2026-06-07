

const Hero = () =>{
         return(
                <section className="relative w-full overflow-hidden h-[70vh] bg-gradient-to-r from-black/70 to-gray-500/20 flex">
                    <img src="https://i.pinimg.com/736x/f8/50/6c/f8506cf5e14f5fd90cc570b156a0fb57.jpg" 
                     alt="" 
                     className="absolute inset-0 w-full object-cover mix-blend-overlay"
                     />
                    <h1 className="uppercase text-4xl text-gray-300/60 md:text-6xl lg:text-8xl text-center font-bold m-auto">product destails</h1> 
                   
                </section>
         )
}
export default Hero;