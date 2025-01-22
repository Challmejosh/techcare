import { useContext } from "react";
import {FaLungs,FaThermometerEmpty,FaHeart} from 'react-icons/fa'
import { AppContext } from "../../Utilities/Context";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'
// import { Chart } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend
)
const DiagnosticHistory = () => {
    
    const {profile} = useContext(AppContext)
    
    const data = {
        labels: profile.diagnosis_history.map(item => item.month +"," + item.year ),
        datasets: [
            {
                labels: "systolic",
                data: profile.diagnosis_history.map(item => item.blood_pressure.systolic.value),
                fill: false,
                backgroundColor: "#EF6CD0",
                borderColor: "rgba(255, 99, 132, 0.2 )",
                tension: 0.4,
            },
            {
                labels: "diastolic",
                data: profile.diagnosis_history.map(item => item.blood_pressure.diastolic.value),
                fill: false,
                backgroundColor: "#8B6DEB",
                borderColor: "rgba(255, 99, 132, 0.2 )",
                tension: 0.4,
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
    };
    


    return ( 
        <div className=" p-5 rounded-2xl gap-y-5 flex flex-col items-start justify-center bg-white  ">
            <h1 className="text-[#092534] text-lg font-semibold ">Diagnosis History</h1>
            <div className="w-full flex p-3 gap-x-2 rounded-lg bg-[#F4F0FE] ">
                <div className="w-[70%] flex flex-col items-start justify-center ">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="font-semibold text-[#092534] text-md  ">Blood Pressure</h1>
                        <select className="bg-transparent" >
                            <option>Last 6 months</option>
                            <option>Last 12 months</option>
                            <option>Last 2 years</option>
                        </select>
                    </div>
                    <Line data={data} options={options} />
                </div>
                <div className="w-[30%] ">
                    <div className="flex flex-col items-start justify-center gap-y-2">
                        <div>
                            <div className="flex gap-x-2 items-center justify-start ">
                                <span className="bg-[#EF6CD0] w-[10px] h-[10px] rounded-full "></span>
                                <h1 className="font-semibold text-md text-[#092534] ">Systolic</h1>
                            </div>
                            <div className="flex border-b p-3 flex-col items-start justify-center gap-y-2 ">
                                <p className="text-[#092534] text-lg font-semibold "> {profile.diagnosis_history[0].blood_pressure.systolic.value}</p>
                                <div className="flex items-center justify-center gap ">
                                    <p className="text-[#092534] "> {profile.diagnosis_history[0].blood_pressure.systolic.levels}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-x-2 items-center justify-start ">
                                <span className="bg-[#8B6DEB] w-[10px] h-[10px] rounded-full "></span>
                                <h1 className="font-semibold text-md text-[#092534] ">Diastolic</h1>
                            </div>
                            <div className="flex  p-3 flex-col items-start justify-center gap-y-2 ">
                                <p className="text-[#092534] text-lg font-semibold "> {profile.diagnosis_history[0].blood_pressure.diastolic.value}</p>
                                <div className="flex items-center justify-center gap ">
                                    <p className="text-[#092534] "> {profile.diagnosis_history[0].blood_pressure.diastolic.levels}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
            <div className="grid w-full grid-cols-3 gap-3 items-center justify-between ">
                <div className="p-3 w-full rounded-lg shadow bg-[#E0F3FA] flex flex-col items-start justify-center  ">
                    <div className="bg-white rounded-full p-5 flex items-center justify-center  ">
                        <FaLungs size={30} className="text-[#72CEF6]" />
                    </div>
                    <div className="flex flex-col items-start justify-center ">
                        <p className="text-sm text-[#092534] ">Respiratory Rate</p>
                        <p className="text-[#092534] text-lg font-semibold "> {profile.diagnosis_history[0].respiratory_rate.value + " "}bpm </p>
                        <p className="text-[#092534] text-xs mt-3 "> {profile.diagnosis_history[0].respiratory_rate.levels } </p>
                    </div>
                </div>
                <div className="p-3 w-full rounded-lg shadow bg-[#FFE6E9] flex flex-col items-start justify-center  ">
                    <div className="bg-white rounded-full p-5 flex items-center justify-center  ">
                        <FaThermometerEmpty size={30} className="text-[#F95668]" />
                    </div>
                    <div className="flex flex-col items-start justify-center ">
                        <p className="text-sm text-[#092534] ">Temperature</p>
                        <p className="text-[#092534] text-lg font-semibold "> {profile.diagnosis_history[0].temperature.value + " "} <sup>o</sup> F </p>
                        <p className="text-[#092534] text-xs mt-3 "> {profile.diagnosis_history[0].temperature.levels } </p>
                    </div>
                </div>
                <div className="p-3 w-full rounded-lg shadow bg-[#FFE6F1] flex flex-col items-start justify-center  ">
                    <div className="bg-white rounded-full p-5 flex items-center justify-center  ">
                        <FaHeart size={30} className="text-[#EF5C64]" />
                    </div>
                    <div className="flex flex-col items-start justify-center ">
                        <p className="text-sm text-[#092534] ">Heart Rate</p>
                        <p className="text-[#092534] text-lg font-semibold "> {profile.diagnosis_history[0].heart_rate.value + " "}bpm </p>
                        <p className="text-[#092534] text-xs mt-3 "> {profile.diagnosis_history[0].heart_rate.levels } </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DiagnosticHistory;