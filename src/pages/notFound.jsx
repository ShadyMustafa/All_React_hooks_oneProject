import { useNavigate } from 'react-router-dom';
import ERROR from '../images/error.png'


export default function NotFound(){

    const navigate = useNavigate()


    return(
        <div className='notFound'>
            <img src={ERROR} alt="" /> <br />
            <button onClick={()=>navigate(`/`)}>HOME</button>
        </div>
    );
}