import luxury from "../assets/icon-luxury.svg"
import sedans from "../assets/icon-sedans.svg"
import suvs from "../assets/icon-suvs.svg"

const MainStuff = () => {
    return (
        <main className="flex flex-wrap flex-col h-screen mx-auto p-2" >
            <section className="flex flex-col    bg-[#e57629] rounded-sm p-4 " >
                <img src={sedans} className="w-[15%] h-[20%] " />
                <h1> Sedans</h1>
                <p className="text-[#ffffffbf]">
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                    or on your next road flex-wrap trip.
                </p>
                <button className="w-[60px] bg-[#f2f2f2] h-[30px] hover:cursor-pointer " >Learn More</button>
            </section>
            <section className="bg-[#006b6b] rounded-sm p-4 " >
                <img src={suvs} />
                <h1> SUVs</h1>
                <p className="text-[#ffffffbf]">
                    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                    and off-road flex-wrap adventures.
                </p>
                <button className="w-[30px] h-2 bg-[#f2f2f2] text-[#006b6b] " >Learn More</button>
            </section>
            <section className="bg-[#003838] rounded-sm p-4 " >
                <img src={luxury} />
                <h1> Luxury</h1>
                <p className="text-[#ffffffbf]">
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                    rental and arrive in style.
                </p>
                <button className="w-[30px] h-3 bg-[#f2f2f2] text-[#003838] " >Learn More</button>
            </section>
        </main>
    )
}

export default MainStuff
