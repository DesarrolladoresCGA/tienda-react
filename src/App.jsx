import { useState } from "react";
import Sidebar from "./componets/shared/sidebar";
import { IoMdAddCircleOutline,IoMdCloseCircleOutline} from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiMenuFill, RiVerifiedBadgeLine,RiArrowDownSLine } from "react-icons/ri";
import { Car } from "./componets/shared/Car";
import { Header } from "./componets/shared/Header";
import { Card } from "./componets/shared/CArd";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  }

  const toggleOrder=() =>{
    setShowOrder(!showOrder);
    setShowMenu(false);
  }
  return (
    <div className="bg-[#262837] w-full min-h-screen p-4">
      <Sidebar showMenu={showMenu} ></Sidebar>
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* menu  movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl text-gray-300">
        <button className="p-2">
          <FaRegUser />
        </button>
        <button className="p-2">
          <IoMdAddCircleOutline />
        </button>
        <button className="p-2" onClick={toggleOrder}>
          <RiVerifiedBadgeLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoMdCloseCircleOutline className="text-white" /> : <RiMenuFill className="text-white" />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <Header />
          {/* Titulo contenido */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* Contenido */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {/* Card */}
            <Card img="comida.png" description="Speacy seasoned seafood hodles" price="2.29" inventory="20 Bowls available" />
            <Card img="comida.png" description="Speacy seasoned seafood hodles" price="2.29" inventory="20 Bowls available" />
            <Card img="comida.png" description="Speacy seasoned seafood hodles" price="2.29" inventory="20 Bowls available" />
            <Card img="comida.png" description="Speacy seasoned seafood hodles" price="2.29" inventory="20 Bowls available" />
            <Card img="comida.png" description="Speacy seasoned seafood hodles" price="2.29" inventory="20 Bowls available" />
            <Card img="comida.png" description="Speacy seasoned seafood hodles" price="2.29" inventory="20 Bowls available" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
