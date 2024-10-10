import { useEffect, useState } from "react";
import { useNavigate , useParams} from "react-router-dom";
import NotFound from "../pages/notFound";

export default function PersonnalDetails() {
   //const {state : p} = useLocation(); 
    const { id } = useParams(); 
    const [person , setPerson] = useState([])
    const [error,setError] = useState(false)
    const [loading , setLoading ] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res)=>{
            if(!res.ok){
                setError(true)
                setLoading(false)
                console.log('something Went Wrong')
                return;
            }
            return res.json()
        })
        .then((data)=>{
            setLoading(false)
            setPerson(data.data)
        })
        .catch((error)=>console.log(error))
    },[id])
    
;
    console.log(person)
    const {first_name , last_name , avatar , email} = person


        if(error){
           return <NotFound/>
        }
        if(loading){
            return <h1>Loading...</h1>
        }
        if(!error && !loading){
            return (
            <div className="details">
                
                <img src={avatar} alt="" />
                <div>
                    <h1>{first_name} {last_name} </h1>
                    <h3>{email}</h3>
                </div>
                <div className="btn">
                    <button onClick={()=>navigate(`/`)}>home</button>
                    <button onClick={()=>navigate(-1)}>go back</button>
                </div>
                
            </div>
        );
       }
}
