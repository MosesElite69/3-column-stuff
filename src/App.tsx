import luxury from "./assets/icon-luxury.svg"
import sedans from "./assets/icon-sedans.svg"
import suvs from "./assets/icon-suvs.svg"
import MainStuff from "./extra/MainStuff"
import Footer from "./extra/Footer"

function App() {

  return (
    <>
      <MainStuff />
      <img src={luxury} />
      <img src={sedans} />
      <img src={suvs} />
      <h1 className='underline text-3xl text-bold'>Hello World</h1>
      <Footer />
    </>
  )
}

export default App
