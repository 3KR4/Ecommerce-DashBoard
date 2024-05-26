import React, { useEffect, useState } from 'react'
import '../Css/home.css'
import { MdAttachMoney } from "react-icons/md";
import { FaFileAlt, FaUserPlus } from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io5";
import Chart from 'react-apexcharts';
import { cardsData } from "../components/data";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const convertToPercentage = (series) => {
  return series.map((item) => {
    const max = Math.max(...item.data);
    return {
      ...item,
      data: item.data.map((value) => parseFloat(((value / max) * 100).toFixed(0)))
    };
  });
};

export default function DashBoard() {
  const [ chart, setChart ] = useState({
    options: {
      xaxis: {
        categories: ['May', 'June', 'August', 'Sep', 'Oct']
      }
    },
    series: [
      {
        name: "Total Sales",
        data: [ 1500, 2600, 3200, 4500, 7200]
      },
      {
        name: "Total Orders",
        data: [ 350, 400, 450, 500, 550]
      },
      {
        name: "Products Sold",
        data: [ 1500, 1700, 1900, 2100, 2300]
      },
      {
        name: "New Customers",
        data: [ 100, 120, 160, 140, 180 ]
      }
    ]
  }
)

  useEffect(() => {
    const updatedSeries = convertToPercentage(chart.series);
    setChart((prevChart) => ({
      ...prevChart,
      series: updatedSeries
    }));
  }, []);

  return (
    <div className='dashboard container'>

      <div className="top">
      <h2 className="sectionTitle">General Analysis</h2>
      <div className="holder">
      <div className="cards">
        {cardsData.map((x, id) => {
          const seriesItem = chart.series.find(item => item.name === x.title);
          const currentValue = seriesItem.data[seriesItem.data.length - 1];
          const lastMonthValue = seriesItem.data[seriesItem.data.length - 2];
          const percentageChange = lastMonthValue
            ? ((currentValue - lastMonthValue) / lastMonthValue) * 100
            : 0;

          return (
            <div className="card" key={id}>
              <div className="text">
              <div className="icon">{x.svg && <x.svg />}</div>
                <h2>{x.value}</h2>
                <h3>{x.title}</h3>
                <p>
                  <span>{percentageChange > 0 ? '+' : '-'}{percentageChange.toFixed(0)}%</span> from last month
                </p>
              </div>
              <CircularProgressbar
                value={percentageChange}
                text={`%${percentageChange.toFixed(1)}`}
              />
            </div>
          );
        })}
      </div>
        <div className="chart">
        <Chart
            options={chart.options}
            series={chart.series}
            type="bar"
          />
        </div>
      </div>
      </div>
    </div>
  )
}
