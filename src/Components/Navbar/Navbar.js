import {FaHome,FaCalendar,FaUser,FaCreditCard,FaComment,FaCog,FaEllipsisV} from 'react-icons/fa'
const Navbar = () => {
    const size=20;
    return ( 
        <div className="flex mx-3 items-center justify-between gap-x-3 border rounded-[9999px] bg-white p-2 w-full  ">
            <div className="p-3">
                <h1 className="font-bold text-2xl text-[#092534] ">Tech <span className="text-[#32d594] ">.</span> Care</h1>
            </div>
            <div className="flex items-center justify-between gap-x-2  ">
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-x-2 ">
                    <FaHome size={size} />
                    <p className="">Overview</p>
                </div>
                <div className="flex p-3 rounded-[9999px] bg-[#03EFD1] items-center justify-center gap-x-2">
                    <FaUser size={size} />
                    <p className="">Patients</p>
                </div>
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-x-2">
                    <FaCalendar size={size} />
                    <p className="">Schedule</p>
                </div>
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-x-2">
                    <FaComment size={size} />
                    <p className="">Message</p>
                </div>
                <div className="flex p-3 rounded-[9999px] items-center justify-center gap-x-2  ">
                    <FaCreditCard size={size} />
                    <p className="">Transactions</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-x-2 ">
                    <img src="https://via.placeholder.com/150" alt="" className="w-[50px] rounded-full object-cover h-[50px] " />
                    <div className="flex flex-col p-3  items-start justify-center ">
                        <h1 className="text-[#092534] font-semibold ">Dr. Jose Simmons</h1>
                        <p className="">General Practitioner</p>
                    </div>
                </div>
                <div className="flex items-center p-3 border-l justify-center">
                    <FaCog size={size} className="text-[#092534]" /> 
                    <FaEllipsisV size={size} className="text-[#092534]"/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;