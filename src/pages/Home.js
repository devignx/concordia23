import { useState } from "react"

const Home = () => {

    const currentAmount = '$ 523.28212'
    const currentCountry = 'Africa'

    const [infoPop, setInfoPop] = useState(true)

    return(
        <main>
            <div id='nav' className="flex justify-between w-11/12 mx-auto mt-6 md:mt-10 ">
                <h1 className="text-xl font-bold">(: KARUNA :)</h1>
                <button className="bg-white px-6 py-3 text-black uppercase font-semibold text-xs md:text-sm hover:bg-green-200 anim">Connect Wallet</button>
            </div>
            {
                <div id='currentInfo' className={` ${infoPop ? 'scale-y-100 translate-y-0' : 'scale-y-0 translate-y-full'} fixed w-full anim md:w-auto shadow-xl bottom-0 md:bottom-8 flex flex-col justify-center right-0 md:right-12 bg-black/20 backdrop-blur-xl p-6 md:p-12`}>
                    <button className="absolute bg-black/50 px-4 py-2  rounded-t-xl backdrop-blur-lg -top-10 right-0">Support {currentCountry} →</button>
                    <p className="opacity-40 text-xs text-center md:text-right">Donations Till now</p>
                    <button>
                        <p className="text-[2rem] hover:text-green-300 anim md:text-[5rem] tracking-tighter md:-mt-4 font-bold md:font-black">{currentAmount}</p>
                        <p className="text-center text-xs md:text-sm mt-2 md:text-right break-keep opacity-50 hover:opacity-100 anim md:-mt-2">View transaction History →</p>
                    </button>
                    <button className="w-7 h-7 absolute -bottom-3 -right-3" onClick={()=> setInfoPop(false)} >↓</button>
                </div>
            }
            { !infoPop &&  
                <button className="bg-white/10 hover:scale-105 anim w-8 h-8 rounded-full border fixed bottom-8 backdrop-blur-xl right-12" onClick={()=> setInfoPop(true)}>↑</button>
            }
            <div className="w-11/12 flex justify-center items-center mx-auto my-8 h-screen bg-white/10">
                <p>Crisis Data</p>
            </div>
        </main>
    )
}

export default Home;