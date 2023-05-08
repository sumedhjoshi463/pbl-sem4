
import {useState} from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import {HashLink} from 'react-router-hash-link';
import { NavLink} from 'react-router-dom';

import { Fade} from 'react-reveal';

function Navbar(){

    const [open, setOpen] = useState(false);

    const[user, setUser] = useState(false);

    const handlemenubotton = ()=>{
        setOpen(!open);
    }


    return (
        
        <div className=" text-white flex flex-col md:w-full md:flex-row pb-3 md:grid grid-cols-5">
            <Fade>
            <div className='flex flex-row justify-around md:text-left col-span-2'>
                <div className="max-w-fit pt-3 text-xl md:text-3xl md:text-left hover:text-violet-500 ">
                    <NavLink to='/'>Cohesion</NavLink>
                </div>
                <div className='pl-3 pt-2 hover:cursor-pointer items-center md:text-left md:hidden' onClick={handlemenubotton} >
                    {open ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>

            <div className=' md:mx-auto md:flex flex-row gap-10 col-span-3' >
                <div className={!open ? 'hidden md:grid '  :  'text-center '} onClick={handlemenubotton}>
                    <ul className='md:flex flex-row justify-around pt-4 pr-3 gap-10 w-full'>
                        <li className='pb-5 pt-5 md:pt-0 text-xl md:text-lg hover:text-violet-500'><NavLink to='/about'>About</NavLink></li>
                        <li className='pb-5 text-xl md:text-lg break-words hover:text-violet-500 '><NavLink to='/activity'>Activity</NavLink></li>
                        <li className='pb-5 text-xl md:text-lg break-words hover:text-violet-500 '><NavLink to='/contect'>Contect Us</NavLink></li>
                        
                        {user ? <
                            li className='pb-5 text-xl md:text-lg break-words '><NavLink to='/login'> <AccountBoxIcon /> My profile</NavLink></li> :
                            <NavLink className='pb-5 text-xl md:text-lg break-words hover:text-violet-500' to='/login'>Login</NavLink> }
                    </ul>
                </div>
    
            </div>
            </Fade>
             
        </div>

       
    );
}

export default Navbar;