import { useContext, useEffect } from "react";
import { AppContext } from "../../Utilities/Context";
import {Line} from 'react-chartjs-2'
const DiagnosticHistory = () => {
    const {profile} = useContext(AppContext)
    useEffect(()=>{
        console.log(profile)
    },[profile])

    const data = {
        labels: ["1","2","3","4"],
        datasets: [
            {
                labels: "check",
                data: [12,32,32,1,5,6,],
                fill: false,
                backgroundColor: "rgba(255, 99, 133,)",
                borderColor: "rgba(255, 99, 132, 0.2 )",
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return ( 
        <div className="h-[40dvh]  ">
            <h1 className="text-[] text-lg font-semibold ">Diagnosis History</h1>
            <div className="">
                <div className="h-[20dvh] ">
                    <Line data={data} options={options} />
                </div>
                <div className="">

                </div>
            </div>
        </div>
     );
}
 
export default DiagnosticHistory;