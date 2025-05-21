/* eslint-disable react/prop-types */
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TodayTasks = ({ tasks }) => {
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  const chartData = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [pendingCount, completedCount],
        backgroundColor: ["#f87171", "#4caf50"], 
        hoverBackgroundColor: ["#f87171", "#4caf50"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#9ca3af", 
        },
      },
    },
  };

  return (
    <div className="mt-2 mx-2 p-2 bg-gray-100 dark:bg-[#232323] rounded-lg text-center">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
        Today Tasks
      </h3>
      <div className="w-32 h-32 mx-auto relative">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Pending: {pendingCount}, Completed: {completedCount}
      </p>
    </div>
  );
};

export default TodayTasks;
