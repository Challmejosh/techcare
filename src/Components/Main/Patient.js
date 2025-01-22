import { FaSearch,FaEllipsisH } from "react-icons/fa";
import {AppContext} from '../../Utilities/Context';
import {useContext} from 'react'
const Patient = () => {
    const {worker,pending,handleProfile} = useContext(AppContext)
    return ( 
        <div className="w-full border rounded-2xl p-5 bg-white shadow-sm ">
            <div className="flex items-center justify-between ">
                <h1 className="text-lg font-semibold text-[#092534] ">Patience</h1>
                <FaSearch className="text-[#092534] " />
            </div>
            <div className="">
                {pending ? 
                    (
                        <div className="overflow-y-scroll h-[80dvh] ">
                            {worker.map((patient,index)=>(
                                <div  key={index}  className="flex cursor-pointer items-center justify-between p-5 gap-x-3 hover:bg-[#D8FCF8]  ">
                                    <div onClick={()=>handleProfile(patient)} className="flex gap-x-3 items-center justify-start ">
                                        <img src={patient.profile_picture} alt="" className="rounded-full w-[50px] h-[50px] object-cover " />
                                        <div className="flex flex-col items-start justify-center ">
                                            <p className="text-[#092534] font-semibold ">{patient.name}</p>
                                            <p className="text-xs ">{patient.gender}, {patient.age}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <FaEllipsisH />
                                    </div>
                            </div>
                            ))}
                        </div>
                    )
                 : (
                    <div className="w-full flex items-center justify-center ">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Patient;