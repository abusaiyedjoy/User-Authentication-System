import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "./../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import TextSection from "../components/TextSection";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isGridLayout, setIsGridLayout] = useState(false);

  return (
    <div
      className={`${darkMode ? "dark" : "light"
        } bg-gray-100 dark:bg-[#242424] min-h-screen`}
    >
      <div className="min-h-[1000px] lg:min-h-screen px-4 bg-gray-100 dark:bg-[#242424] text-gray-800 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between max-w-[1450px] mx-auto items-center mb-6 py-3">
          <div className="flex justify-center items-center gap-3">
            {/* Toggle Sidebar */}
            <button className="cursor-pointer"
              onClick={() => setShowSidebar((prev) => !prev)}>
              {showSidebar ? <RxCross2 size={20} /> : <TfiMenuAlt size={20} />}
            </button>

            <img src={logo} className="w-8" alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="">
              <IoSearch size={20} />
            </div>
            {/* Toggle TaskSidebar */}
            <button onClick={() => setIsGridLayout((prev) => !prev)} className="cursor-pointer">
              {isGridLayout ? (
                <TfiMenuAlt size={20} />
              ) : (
                <LuLayoutDashboard size={20} />
              )}
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="">
              {darkMode ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <BsMoonStars size={20} />
              )}
            </button>
            {/* Authentication */}
            <Link to ="/login"
              className="btn bg-[#ccf2d1] hover:bg-[#defae1] dark:bg-green-700 font-semibold text-green-800 dark:text-gray-100 text-lg px-4 border-none rounded-lg"
            >
              Login
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row justify-between relative gap-4 my-12 max-w-[1450px] mx-auto">
          {/* Sidebar */}
          {showSidebar && (
            <div className="lg:static lg:block absolute top-0 left-0 z-50 bg-gray-100 dark:bg-[#242424] lg:bg-transparent">
              <Sidebar />
            </div>
          )}

          {/* Tasks Section */}
          <div className="w-full">
            <TextSection isGridLayout={isGridLayout} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
