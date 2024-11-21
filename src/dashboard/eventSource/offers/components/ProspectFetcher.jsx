import { useEffect, useState } from "react";
import { getAuthToken } from "../../../../utils/Auth";

function ProspectFetcher({children}) {
    const [prospects, setProspects] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()


const URL = "https://e-vents.onrender.com/api/prospects";

// AUTHORIZATION TOKEN
const token = getAuthToken();


useEffect( () => {

    
    //  FETCH PROSPECTS FROM THE SERVER
    async function getAllProspects() {
        try {
            const res = await fetch(`${URL}/all`, {
                method: "GET",
                redirect: "follow",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if  (res.status !== 200) {
                throw new Error("Error fetching prospects")
            }
            
            const data = await res.json();
            setProspects(data.data);
            setIsLoading(false)
        } catch (error) {
            setError (error?.message);
            setIsLoading(false)
        }
    }
    
}, [])


    return (
        <div>
            {children}
        </div>
    )
}

export default ProspectFetcher
