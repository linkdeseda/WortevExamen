import './App.css';
import './CSS/DesedaTableShow.css';
import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

function DesedaDataSeries  () {
  const [dataSeries, setDataSeries] = useState('');

  useEffect(() => {    
    fetch('https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/')
    .then(response =>  response.json())
    .then(resData => {
        setDataSeries(resData);
    })
  },[]);

    const Series = (dataSeries) =>{
        let newSeries = [];
        let sku;
        for (let i = 0; i < dataSeries.length; i++) {
            if(sku === dataSeries[i].sku){
                for (let j = 0; j < newSeries.length; j++) {
                    if(newSeries[j].name === dataSeries[i].name){
                     newSeries[j].data.push({
                        x:  dataSeries[i].dateExtraction,
                        y: [
                            dataSeries[i].price
                        ]
                     })
                    }
                }
                
            } else { 
                newSeries.push({
                    name: dataSeries[i].name,
                    data: [{
                        x:  dataSeries[i].dateExtraction,
                        y: [
                            dataSeries[i].price
                        ]
                    } 
                    ],
                });
            }
            sku = dataSeries[i].sku;
        }

        console.log(newSeries)
        return newSeries
      } 
      
  return (
    <div className="DesedaDataSeries">
 <div className='container-fluid mt-3 mb-3'>
          <h2> General Performance  Analysis</h2>          
          <Chart 
             options={{
                title:{ text:"Price evolution"},
                xaxis:{
                    title:{text:"Product Sell in Months"}
                },
                yaxis:{
                    title:{text:"Product in K"},    
                    min: 1,
                    max: 100,             
                }          
    
            }}
          series={Series(dataSeries)} 
          type="line" height={350} />

        </div>
    </div>
  );
}

export default DesedaDataSeries;
