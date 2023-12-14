import luxury from "../assets/icon-luxury.svg"
import sedans from "../assets/icon-sedans.svg"
import suvs from "../assets/icon-suvs.svg"

const MainStuff = () => {
    return (
        <main className="flex flex-nowrap flex-col w-[90%] mx-auto p-2 sm:flex-row sm:w-[80%] sm:h-[90%] sm:mt-[200px] " >
            <section className="flex flex-col bg-[#e57629] rounded-sm p-7 sm:p-[30px] sm:w-[80rem] sm:h-[500px] w-screen sm:justify-center sm:items-center  " >
                <div className="w-[100%] text-left flex flex-wrap  " >
                    <img src={sedans} className="w-[15%] h-[20%] sm:w-[13%] sm:h-[9%] sm:mr-[250px] " />
                    <h1 className="text-[#ffffffbf] text-3xl sm:my-auto "> Sedans</h1>
                    <p className="text-[#ffffffbf] sm:mt-[10px] sm:mb-[100px] ">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                        or on your next road flex-wrap trip.
                    </p>
                    <button className="w-[40%] h-[30%] mt-5 p-2 flex justify-center text-[#e57629] text-center bg-[#f2f2f2] hover:cursor-pointer sm:w-[8rem] sm:h-[50px]  sm:p-1  rounded-[30px] " >Learn More</button>
                </div>
            </section>
            <section className="flex flex-col bg-[#006b6b] rounded-sm p-7 sm:p-[30px] sm:w-[80rem] sm:h-[500px] w-screen sm:justify-center sm:items-center  " >
                <div className="w-[100%] text-left flex flex-wrap  " >
                    <img src={suvs} className="w-[15%] h-[20%] sm:w-[13%] sm:h-[9%] sm:mr-[250px] " />
                    <h1 className="text-[#ffffffbf] text-3xl sm:my-auto "> SUVs</h1>
                    <p className="text-[#ffffffbf] sm:mt-[10px] sm:mb-[100px] ">
                        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                        and off-road flex-wrap adventures.
                    </p>
                    <button className="w-[40%] h-[30%] mt-5 p-2 flex justify-center text-[#006b6b] text-center bg-[#f2f2f2] hover:cursor-pointer sm:w-[8rem] sm:h-[50px]  sm:p-1  rounded-[30px] " >Learn More</button>
                </div>
            </section>
            <section className="flex flex-col bg-[#003838] rounded-sm p-7 sm:p-[30px] sm:w-[80rem] sm:h-[500px] w-screen sm:justify-center sm:items-center  " >
                <div className="w-[100%] text-left flex flex-wrap  " >
                    <img src={luxury} className="w-[15%] h-[20%] sm:w-[13%] sm:h-[9%] sm:mr-[250px] " />
                    <h1 className="text-[#ffffffbf] text-3xl sm:my-auto "> Luxury</h1>
                    <p className="text-[#ffffffbf] sm:mt-[10px] sm:mb-[100px] ">
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                        rental and arrive in style.
                    </p>
                    <button className="w-[40%] h-[30%] mt-5 p-2 flex justify-center text-[#003838] text-center bg-[#f2f2f2] hover:cursor-pointer sm:w-[8rem] sm:h-[50px]  sm:p-1  rounded-[30px] " >Learn More</button>
                </div>
            </section>
        </main>
    )
}

export default MainStuff
