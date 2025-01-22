import { useEffect,useState } from "react";
const useFetch = (url) => {
    const [data,setData] = useState([])
    const [pending,setPending] = useState(false)
    let username="coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`)
    useEffect(()=>{
    fetch(url,
        {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        }
    )
    .then(res => res.json())
    .then((data)=>{
        setData(data)
        setPending(true)
    })
    },[url,auth])
    return {pending,data}
}
 
export default useFetch;