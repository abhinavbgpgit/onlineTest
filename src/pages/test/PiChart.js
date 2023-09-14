import React from 'react'
import  Chart  from "react-apexcharts";
import { useState, useEffect} from "react";

const PiChart = () => {

  

  useEffect( ()=>{
     

  },[]);
  return (
    <React.Fragment>
    <div className="container-fluid mb-3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ marginBottom: "20px" }}></h2>
        <Chart
            type="pie"
            width={700}
            height={250}
            series={[22, 56, 43]}
            options={{
                noData: { text: "Empty Data" },
                labels:["Correct","Wrong","Not Attempted"],
                // colors: ["#f90000", "#f0f"],
                legend: {
                    show: true,
                    position: 'bottom', // Place the legend below the chart
                   
                }
            }}
        />
    </div>
</React.Fragment>

  )
}

export default PiChart