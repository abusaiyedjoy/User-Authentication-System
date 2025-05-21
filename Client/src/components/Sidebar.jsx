/* eslint-disable react/prop-types */
import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { TbBrandPlanetscale } from "react-icons/tb";
import TodayTasks from "./TodayTask";


const tasks = [
    { id: 1, name: "Task 1", completed: true },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: true },
    { id: 4, name: "Task 4", completed: true },
    { id: 5, name: "Task 5", completed: false },
    { id: 6, name: "Task 6", completed: true },
];

const Sidebar = ({ user }) => {
    return (
        <aside className="w-[250px]  pb-4 bg-white dark:bg-[#2c2c2c] shadow-md min-h-screen flex-col justify-between">
            <div className="w-[240px]">
                <div className="p-6 text-center relative pt-5">
                    <img
                        src="https://i.ibb.co.com/Y8zbHGL/jonas-kakaroto-KIPqvv-TOC1s-unsplash.jpg"
                        alt="Profile"
                        className="w-24 h-24 rounded-full bg-cover bg-center absolute -top-10 left-[50%] transform -translate-x-1/2 border-2 dark:border-gray-800"
                    />
                    <h2 className="text-lg font-semibold mt-10 text-gray-900 dark:text-gray-200">
                        Hey, {user ? user : "Developer"}
                    </h2>
                </div>
                <ul className="space-y-4 p-2 dark:bg-[#232323] rounded-md mx-3 mt-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <LuNotebookText className="mr-2" />
                            All Tasks
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <FaRegCalendarAlt className="mr-2" />
                            Today
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <IoStarSharp className="mr-2" />
                            Important
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <TbBrandPlanetscale className="mr-2" />
                            Planned
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <MdOutlineAssignmentInd className="mr-2" />
                            Assign to me
                        </a>
                    </li>
                </ul>
                <div className="space-y-4 dark:bg-[#232323] rounded-md mx-3 mt-6">
                    <div className="p-2">
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <FaPlus className="mr-2" />
                            Add List
                        </a>
                    </div>
                </div>
                <div className="mt-8 mx-4 p-4 bg-gray-100 dark:bg-[#232323] rounded-lg text-center">
                    <TodayTasks tasks={tasks} />
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
