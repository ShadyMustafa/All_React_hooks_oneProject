import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Personnal(){




    const[people,setPeople] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://reqres.in/api/users')
            .then((res)=>res.json())
            .then((data)=>setPeople(data.data))
            .catch((err)=>console.log(err))
    },[])

    console.log(people)




    return(
        <div className="personnal">
            <h1>Our Instructors</h1>
            <div className="personalWrapper">
                {people.map((p)=>{
                   const {id , first_name , last_name , avatar} = p;
                    return(
                        <div key={id} className="card">
                            <img src={avatar} alt="img" />
                            <div>
                                <h4>{first_name} {last_name}</h4>
                            </div>
                            <button onClick={()=> navigate(`/personnal/${id}`, {state:p})}>Detail</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}