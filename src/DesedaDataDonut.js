import './App.css';
import './CSS/DesedaTableShow.css';
import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

function DesedaDataDonut  () {
  const [dataDonut, setDataDonut] = useState('');

  useEffect(() => {    
    fetch('https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/')
    .then(response =>  response.json())
    .then(resData => {
      setDataDonut(resData);
    })
   
  },[]);

  const Options = (dataDonut) =>{
    const optionsDetail = { labels: [] };
    dataDonut.map((row) => (optionsDetail.labels.push(row.name)));
    return optionsDetail
  } 

  return (
    <div className="DesedaDataDonut">
    
      {dataDonut ? 

        <Chart
        options={Options(dataDonut)}
        series={dataDonut.map((row) => row.presenceShare)}
        type="pie"
        width="400"
        />
      
      : 
      
      'loading...'}
       
    </div>
  );
}

export default DesedaDataDonut;
