import {AppContext} from '../../Utilities/Context';
import {useContext} from 'react'
import {FaDownload} from 'react-icons/fa'
const Lab = () => {
    const {profile} = useContext(AppContext)
    
        
        return ( 
        <div className="rounded-2xl bg-white flex flex-col items-start justify-start p-3 w-full  ">
            <h1 className="text-lg text-[#092534] font-semibold ">Lab Results</h1>
            <div className="flex m-2 flex-col gap-y-3 h-[30dvh] overflow-y-scroll w-full ">
                    {profile.lab_results.map((result,index)=>(
                        <div className="flex items-center cursor-pointer hover:bg-[#F6F7F9] p-3 justify-between " key={index}>
                            <p className="">{result}</p>
                            <FaDownload />
                        </div>
                    ))}
            </div>
            
        </div>
     );
}
 
export default Lab;