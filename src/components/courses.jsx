import { course } from "../data/data";

export default function Courses(){

    return(
        <div className="course">
                <h1 style={{textAlign:'center' , color:'red' , marginBottom:'30px'}}>Our Courses!</h1>
                <div className="iconWrapper">
                    {course.map((c)=>{
                        const {id , name , text , img} = c;
                        return <div  className='card' key={id}>
                            <img src={img} alt="" width={'100px'} height={'100px'} />
                            <div>
                                <h5>{name}</h5>
                                <p>{text}</p>
                            </div>
                        </div>
                    })}
                </div>
        </div>
    );
}