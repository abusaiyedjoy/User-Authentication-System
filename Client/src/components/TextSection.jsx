/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaBell, FaCalendarAlt, FaPlus, FaSyncAlt } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { IoCheckboxOutline, IoStarOutline, IoStarSharp } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

const TextSection = ({ isGridLayout }) => {
    const [taskInput, setTaskInput] = useState("");
    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [calendarOpen, setCalendarOpen] = useState(false);

    useEffect(() => {
        const savedPendingTasks = JSON.parse(localStorage.getItem("pendingTasks")) || [];
        const savedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
        setPendingTasks(savedPendingTasks);
        setCompletedTasks(savedCompletedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }, [pendingTasks, completedTasks]);

    const handleAddTask = () => {
        if (taskInput.trim() === "") return;
        setPendingTasks([
            ...pendingTasks,
            { name: taskInput, reminder: false, dueDate: null, repeat: false },
        ]);
        setTaskInput("");
    };

    const handleCompleteTask = (index) => {
        const completedTask = pendingTasks[index];
        setPendingTasks(pendingTasks.filter((_, i) => i !== index));
        setCompletedTasks([...completedTasks, completedTask]);
    };

    const handleSelectTask = (task) => {
        setSelectedTask(task);
    };

    const updateTaskAttributes = (attribute, value) => {
        if (selectedTask) {
            const updatedTask = { ...selectedTask, [attribute]: value };
            setSelectedTask(updatedTask);
            setPendingTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.name === selectedTask.name ? updatedTask : task
                )
            );
        }
    };

    const handleSetDueDate = (date) => {
        updateTaskAttributes("dueDate", date.toLocaleDateString());
        setCalendarOpen(false);
        toast.success("Due date set!");
    };

    const handleDeleteTask = () => {
        setPendingTasks((prevTasks) =>
            prevTasks.filter((task) => task.name !== selectedTask.name)
        );
        setSelectedTask(null);
    };

    return (
        <div className="flex w-full gap-2">
            {/* Main Task Section */}
            <section className="flex flex-col w-full">
                <div className="flex flex-col justify-between bg-[#eaf2eb] h-[180px] mb-3 dark:bg-[#2f3630] p-4 rounded-md shadow-md w-full mx-auto">
                    <input
                        type="text"
                        placeholder="Enter a task"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        className="text-gray-800 mt-10 outline-none bg-transparent dark:text-gray-200 text-lg font-medium"
                        onKeyPress={(e) => {
                            if (e.key === "Enter") handleAddTask();
                        }}
                    />
                    <div className="flex justify-between items-center">
                        {/* Icons Section */}
                        <div className="flex justify-start space-x-4 mt-4">
                            <FaBell className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer" />
                            <FaSyncAlt className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer" />
                            <FaCalendarAlt className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer" />
                        </div>

                        <button
                            onClick={handleAddTask}
                            className="bg-[#ccf2d1] dark:bg-green-700 font-medium text-green-800 dark:text-gray-100 text-sm px-4 py-2 rounded-lg"
                        >
                            ADD TASK
                        </button>
                    </div>
                </div>

                <section className="w-full">
                    {/* Pending Tasks */}
                    <h2 className="text-lg font-semibold mb-4">Pending Tasks</h2>
                    <ul
                        className={`${isGridLayout
                                ? "grid grid-cols-2 md:grid-cols-3 gap-4"
                                : "space-y-8"
                            } w-full font-medium`}
                    >
                        {pendingTasks.length === 0 ? (
                            <p>No pending tasks</p>
                        ) : (
                            pendingTasks.map((task, index) => (
                                <li key={index} className="bg-transparent p-4 rounded shadow">
                                    <div className="flex justify-between items-center">
                                        <div
                                            className="flex justify-start items-center gap-3 cursor-pointer"
                                            onClick={() => handleSelectTask(task)}
                                        >
                                            <IoCheckboxOutline
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCompleteTask(index);
                                                }}
                                            />
                                            <p>{task.name}</p>
                                        </div>
                                        <IoStarOutline />
                                    </div>
                                    <hr className="border-gray-400 mt-3" />
                                </li>
                            ))
                        )}
                    </ul>

                    {/* Completed Tasks */}
                    <h2 className="mt-8 text-lg font-semibold mb-4">Completed</h2>
                    <ul className="space-y-8 font-medium mb-8">
                        {completedTasks.length === 0 ? (
                            <p>No completed tasks</p>
                        ) : (
                            completedTasks.map((task, index) => (
                                <li key={index}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-start items-center gap-3">
                                            <IoMdCheckbox className="text-green cursor-pointer" />
                                            <p>{task.name}</p>
                                        </div>
                                        <IoStarSharp />
                                    </div>
                                    <hr className="border-gray-400 mt-3" />
                                </li>
                            ))
                        )}
                    </ul>
                </section>
            </section>

            {/* Task Sidebar */}
            {selectedTask && (
                <aside className="w-80 md:static md:block absolute top-0 right-0 z-50 flex flex-col justify-between  bg-gray-100 dark:bg-[#2c2c2c] min-h-screen p-4 shadow-md">
                    <div>
                        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 py-4">
                            <div className="flex w-full justify-between items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
                                <div className="flex justify-start items-center gap-2">
                                    <IoCheckboxOutline
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    />
                                    {selectedTask.name}
                                </div>
                                <div className="">

                                    <IoStarOutline />
                                </div>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-4">
                            <li
                                className="flex items-center text-gray-900 dark:text-gray-200 text-lg cursor-pointer"
                                onClick={() =>
                                    updateTaskAttributes("reminder", !selectedTask.reminder)
                                }
                            >
                                <FaBell className="mr-4" />
                                {selectedTask.reminder ? "Reminder Set" : "Set Reminder"}
                            </li>
                            <hr className="border-gray-400 mt-3" />
                            <li
                                className="flex items-center text-gray-900 dark:text-gray-200 text-lg cursor-pointer"
                                onClick={() => setCalendarOpen(!calendarOpen)}
                            >
                                <FaCalendarAlt className="mr-4" />
                                {selectedTask.dueDate
                                    ? `Due: ${selectedTask.dueDate}`
                                    : "Add Due Date"}
                            </li>
                            {calendarOpen && (
                                <Calendar
                                    onChange={handleSetDueDate}
                                    className="mt-4 bg-gray-100 rounded-lg dark:bg-gray-800"
                                />
                            )}
                            <hr className="border-gray-400 mt-3" />
                            <li
                                className="flex items-center text-gray-900 dark:text-gray-200 text-lg cursor-pointer"
                                onClick={() =>
                                    updateTaskAttributes("repeat", !selectedTask.repeat)
                                }
                            >
                                <FaSyncAlt className="mr-4" />
                                {selectedTask.repeat ? "Repeating" : "Repeat"}
                            </li>
                            <hr className="border-gray-400 mt-3" />
                            <p className=" text-lg text-gray-400 dark:text-gray-400">Add note</p>
                        </ul>
                    </div>
                    {/* Footer */}
                    <div className="flex justify-between items-center text-gray-900 dark:text-gray-200 mt-6 border-t border-gray-300 dark:border-gray-600 pt-4">
                        <button className="text-xl">
                            <span className="sr-only">Delete</span>
                            <AiOutlineDelete className="hover:text-red-600" onClick={handleDeleteTask} />

                        </button>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Created Today</p>
                        <button className="text-xl">
                            <span className="sr-only">Close</span>
                            <FaPlus />
                        </button>
                    </div>
                </aside>
            )}
        </div>
    );
};

export default TextSection;
