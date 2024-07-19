import { chartsConfig } from "@/configs";
import { numbers } from "./export";
import { numbers2 } from "./export";

//let numbers = data1.js

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: numbers,
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: numbers2,
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 4,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "N8",
        "9",
      ],
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 220,
  series: [
    {

      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Max Wind",
    description: "Today",
    footer: "updated 1 min ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Avg Wind",
    description: "Today",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
