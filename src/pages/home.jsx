import About from "../components/about";
import Courses from "../components/courses";

export default function Home(){
    return(
        <div className="homeWrapper">
            <div className="aboutSection">
                <About/>    
            </div>
            <div className="courseSection">
                 <Courses/>
            </div>

        </div>
    );
}