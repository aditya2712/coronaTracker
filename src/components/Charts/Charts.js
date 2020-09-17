import React,{useState,useEffect} from 'react';
import { Line,Bar } from 'react-chartjs-2';
import './Charts.css';

const Charts= ({data : {confirmed,recovered,deaths},country}) => {
    const [dailyData,setDailyData]=useState([]);

    useEffect( () => {
        fetch('https://covid19.mathdro.id/api/daily')
        .then(response => response.json())
        .then(data => setDailyData(data));
    },[])
    
    const LineChart = (
        dailyData.length?
        (   <Line 
                data={{
                    labels: dailyData.map(({reportDate}) => reportDate),
                    datasets: [{
                        data: dailyData.map(({totalConfirmed}) => totalConfirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        pointStyle: 'line',
                        fill: true
                    },{
                        data: dailyData.map(({deaths}) => deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        pointStyle: 'line',
                        fill: true
                    }]
                }}
            />
        ):null
    );
    
    const barChart= (
        confirmed?(
            <Bar 
                data={{
                    labels: ['Infected','Recovered','Deaths'],
                    datasets: [{
                        label:'People',
                        backgroundColor: [
                            'rgba(250,100,0,0.7)',
                            'rgba(1,255,0,0.7)',
                            'rgba(255,0,0,0.7)'
                        ],
                        data: [confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options = {{
                    legend: {display: false},
                    title: { display: true, text: `Current senerio in ${country}`},
                    scales: {
                        xAxes: [{
                            barThickness : 24
                        }]
                    }
                }}
            />
        ): null
    )

    if(country==='Global'){
        return(
            <div className='full' >
                <div style={{width: '85%', marginTop: '30px'}}>
                    {LineChart}
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='full' >
                <div className='mobile'>
                    {barChart}
                </div>
            </div>
        );
    }
    
}

export default Charts;