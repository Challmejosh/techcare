import { createContext,useEffect,useState } from "react";
import useFetch from './useFetch'
export const AppContext = createContext();

const Context = ({children}) => {
    const [worker,setWorker] = useState([])
    const [profile,setProfile] = useState([])
    const [pendProf,setPendProf] = useState(false)
    const {pending,data} = useFetch("https://fedskillstest.coalitiontechnologies.workers.dev/")
    useEffect(()=>{
        setWorker(data)
    },[data,worker])
    const handleProfile = (prof)=>{
        const check = worker.find(item => item === prof )
        if(check){
            console.log(check.lab_results)
            setProfile(check)
            setPendProf(true)
        }
    }
    return ( 
        <AppContext.Provider value={{data,pending,profile,worker,pendProf,handleProfile}}>    
            {children}
        </AppContext.Provider>
     );
}
 
export default Context;