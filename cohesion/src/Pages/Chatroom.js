import Sidebar from "../Layouts/Sidebar";
import {Outlet} from 'react-router-dom';


function Chatroom(){
    return(
        <div className="w-full grid  grid-cols-5">
            <div className="col-span-1">
                <Sidebar/>
            </div>
            <div className="col-span-4 w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default Chatroom;