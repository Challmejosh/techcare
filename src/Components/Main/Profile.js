import { useContext } from "react";
import { FaCalendar,FaPhone,FaShieldAlt,FaVenus } from "react-icons/fa";
import { AppContext } from "../../Utilities/Context";
import Lab from './Lab';

const Profile = () => {
    const {profile,pendProf} = useContext(AppContext)
    
    return ( 
        <div className="flex flex-col items-start justify-start gap-y-5 ">
            {pendProf ? (
                <div className="w-full flex flex-col gap-y-5 bg-white ">
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <img src={profile.profile_picture} alt="" className="w-[100px] h-[100px] " />
                        <h1 className="">{profile.name} </h1>
                    </div>
                    <div className="flex items-start flex-col justify-center gap-y-4 bg-[#000] ">    
                        <div className="flex items-center justify-start gap-x-2 p-3 ">
                            <div className=" bg-[#f4f7f7] p-2 rounded-full flex items-center justify-center">
                                <FaCalendar size={24} className="text-[#092534] " />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-y-1">
                                <p className="text-[#092534] text-md">Date Of Birth</p>
                                <p className="text-[#092534] font-semibold text-sm ">{profile.date_of_birth}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-x-2 p-3">
                        <div className=" bg-[#f4f7f7] p-2 rounded-full flex items-center justify-center">
                            <FaVenus size={24} className="text-[#092534] " />
                        </div>
                            <div className="flex flex-col items-start justify-center gap-y-1">
                                <p className="text-[#092534] text-md">Gender</p>
                                <p className="text-[#092534] font-semibold text-sm">{profile.gender}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-x-2 p-3">
                            <div className=" bg-[#f4f7f7] p-2 rounded-full flex items-center justify-center">
                                <FaPhone size={24} className="text-[#092534] " />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-y-1">
                                <p className="text-[#092534] text-md">Contact Info</p>
                                <p className="text-[#092534] font-semibold text-sm">{profile.phone_number}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-x-2 p-3">
                            <div className=" bg-[#f4f7f7] p-2 rounded-full flex items-center justify-center">
                                <FaPhone size={24} className="text-[#092534] " />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-y-1">
                                <p className="text-[#092534] text-md">Emergency Contacts</p>
                                <p className="text-[#092534] font-semibold text-sm">{profile.emergency_contact}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-x-2 p-3">
                            <div className=" bg-[#f4f7f7] p-2 rounded-full flex items-center justify-center">
                                <FaShieldAlt size={24} className="text-[#092534] " />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-y-1">
                                <p className="text-[#092534] text-md">Insurance Provider </p>
                                <p className="text-[#092534] font-semibold text-sm">{profile.insurance_type}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[##03F2D1] flex items-center justify-center text-[#092534] w-full bg-[#00F3D3] rounded-[9999px] py-2 px-5 ">Show All Information </div> 
                </div>
            ):(
                <div className="">Profile Loading....</div>
            )}
            <Lab />
        </div>
     );
}
 
export default Profile;