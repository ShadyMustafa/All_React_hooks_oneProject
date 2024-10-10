import { Link, Outlet } from "react-router-dom";

export default function Path(){
    return(
        <div className="path">
            <h1>Multiaple Pages with the same url</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequuntur voluptas culpa architecto voluptates repellendus, repellat quod omnis nesciunt facere, doloremque magni maxime dolor eveniet doloribus in minima, temporibus veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt cupiditate laudantium maiores eveniet esse nesciunt eum ut hic totam accusamus, modi culpa veritatis sunt iusto deleniti similique nemo et!.</p>
            <div className="btn">
                <Link to='firstPage'>First Page</Link>
                <Link to='secPage'>Second Page</Link>
            </div>
            <Outlet/>
        </div>
    );
}