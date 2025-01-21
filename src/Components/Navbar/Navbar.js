import {FaHome,FaCalendar,FaUser,FaCreditCard,FaCommentO,FaCog,FaEllipsisV} from 'react-icons/fa'
const Navbar = () => {
    const size=20;
    return ( 
        <div className="flex items-center justify-between gap-x-3 border rounded-[9999px] bg-white py-2 px-5 ">
            <div className="">
                <h1 className="font-bold text-2xl text-[#092534] ">Tech <span className="text-[#32d594] ">.</span> Care</h1>
            </div>
            <div className="flex items-center justify-between gap-x-2  ">
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-y-1 ">
                    <FaHome size={size} />
                    <p className="">Overview</p>
                </div>
                <div className="flex p-3 rounded-[9999px] bg-[#03EFD1] items-center justify-center gap-y-1">
                    <p className="">Patients</p>
                </div>
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-y-1">
                    <FaCalender />
                    <FaUser size={size} />
                    <p className="">Schedule</p>
                </div>
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-y-1">
                    <FaCommentO size={size} />
                    <p className="">Message</p>
                </div>
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-y-1">
                    <FaCreditCard size={size} />
                    <p className="">Transactions</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-betweengap-x-2 ">
                    <img src="" alt="" className="" />
                    <div className="">
                        <h1 className="text-[#092534]">Dr. Jose Simmons</h1>
                        <p className="">General Practitioner</p>
                    </div>
                </div>
                <div className="flex items-center border-l justify-center">
                    <FaCog size={size} className="text-[#092534]" /> 
                    <FaEllipsisV size={size} className="text-[#092534]"/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;