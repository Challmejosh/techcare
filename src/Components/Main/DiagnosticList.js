import {AppContext} from '../../Utilities/Context';
import {useContext} from 'react'
const DiagnosticList = () => {
    const {profile} = useContext(AppContext)
    return ( 
        <div className="py-5 px-2 flex flex-col items-start justify-center gap-y-5 bg-white rounded-2xl shadow  ">
            <h1 className="text-[#092534] text-lg font-semibold  ">Diagnostic List</h1>
            <div className="flex flex-col items-start justify-center gap-y-4 ">
                <div className="grid grid-cols-5 bg-[#F6F7F9] rounded-[9999px]  items-start justify-start w-full p-3 " >
                    <div className="font-semibold text-[#092534] col-span-2">Problems/Diagnosis</div>
                    <div className="font-semibold text-[#092534] col-span-2">Description</div>
                    <div className="font-semibold text-[#092534] ">Status</div>
                </div>
                <div className="flex flex-col w-full gap-y-3 overflow-y-scroll h-[50dvh] ">
                    {profile.diagnostic_list.map((list,index)=>(
                        <div className="grid border-b grid-cols-5 gap-x-5 p-5 hover:bg-[#F6F7F9]  items-start justify-start w-full " key={index}>
                            <div className=" col-span-2  text-[#092534] ">{list.name}</div>
                            <div className=" col-span-2  text-[#092534] ">{list.description}</div>
                            <div className=" text-[#092534] ">{list.status}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default DiagnosticList;