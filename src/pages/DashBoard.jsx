import React, { useEffect, useState } from 'react'
import '../Css/home.css'
import { cardsData } from "../components/data";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ReactECharts from 'echarts-for-react';
import { allContext } from '../AllContext';

export default function DashBoard() {
  const { theme, toggleTheme } = allContext();
  const labelColor = theme == 'dark' ? '#bfbfbf' : '#696969';
  const colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272'];
  
  const categoriesSales = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: 'Categories Sales',
        type: 'pie',
        radius: ['45%', '65%'],
        avoidLabelOverlap: false,
        padAngle: 4,
        itemStyle: {
          borderRadius: 7
        },
        label: {
          show: false,
          position: 'center',
          fontSize: 1,
          fontWeight: 'normal',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: '600',
            color: labelColor,
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Hardware'},
          { value: 735, name: 'Accessories'},
          { value: 580, name: 'Electronics'},
          { value: 520, name: 'Monitors'},
          { value: 484, name: 'Consoles'},
          { value: 300, name: 'Other'}
        ]
      }
    ]
  };
  const typesSales = {
    xAxis: {
      type: 'category',
      data: ['Gpu', 'Cpu', 'Memory', 'Storage', 'Mouse', 'Keyboard'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          { value: 120, itemStyle: { color: colors[0] } }, // Gpu
          { value: 200, itemStyle: { color: colors[1] } }, // Cpu
          { value: 150, itemStyle: { color: colors[2] } }, // Memory
          { value: 80, itemStyle: { color: colors[3] } },  // Storage
          { value: 130, itemStyle: { color: colors[4] } }, // Mouse
          { value: 90, itemStyle: { color: colors[5] } }   // Keyboard
        ],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
  const brandSales = {
    legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: labelColor // Set the text color based on the theme
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [30, 160],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: true,
        color: labelColor, // Set the label text color
        fontSize: 13,
      },
      data: [
        { value: 50, name: 'Redragon'},
        { value: 40, name: 'Nvidia' },
        { value: 45, name: 'Amd' },
        { value: 30, name: 'Dell' },
        { value: 35, name: 'Intel' },
        { value: 51, name: 'Msi' },
        { value: 20, name: 'Xpg' },
        { value: 25, name: 'Asus' },
      ]
    }
  ]
  };
  return (
    <div className='dashboard container'>
      <div className="top">
      <h2 className="sectionTitle">General Analysis</h2>
      <div className="holder">
      <div className="cards">
        {cardsData.map((x, id) => {
          return (
            <div className="card" key={id}>
              <div className="text">
              <div className="icon">{x.svg && <x.svg />}</div>
                <h2>{x.value}</h2>
                <h3>{x.title}</h3>
                <p>
                  <span>{x.percentage > 0 ? '+' : '-'}{x.percentage}%</span> from last month
                </p>
              </div>
              <CircularProgressbar
                value={x.percentage}
                text={`%${x.percentage.toFixed(1)}`}
              />
            </div>
          );
        })}
      </div>
      </div>
      </div>
      <div className="bottom">
        <div className="catChart">
          <h3>Categories Sales</h3>
          <ReactECharts option={categoriesSales} />
          <ul>
          {categoriesSales.series[0].data.map((cat, index) => (
            <li key={index}>
              <span style={{ backgroundColor: colors[index] }}></span>
              <h4>{cat.name}</h4>
              <span>{cat.value}</span>
            </li>
          ))}
        </ul>
        </div>
        <div className="typeChart">
          <h3>Products Type Sales</h3>
          <ReactECharts option={typesSales} />
        </div>
        <div className="brandChart">
          <h3>Top Sales Brand</h3>
          <ReactECharts option={brandSales} />
        </div>
      </div>
      <div className="tables">
        
      </div>
    </div>
  )
}
