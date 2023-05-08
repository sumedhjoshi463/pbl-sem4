import {motion} from 'framer-motion';
import { useState } from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { SlSettings } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { Link, useLocation, useRoutes } from "react-router-dom";
import {useRef, useEffect} from 'react';

import {RiAddCircleLine} from 'react-icons/ri';

import {HiBars2} from "react-icons/hi2";
import {BiMessage} from "react-icons/bi";

function Sidebar() {

    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

      const AddChannels = ()=>{
        prompt("Enter channel name")
      }
 

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          />
          <span className="text-xl whitespace-pre">Project Name</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <Link to="introduction" className="flex flex-row gap-7 text-lg align-center  pl-5">
                <HiBars2 size={25} className="min-w-max" />
                Introduction
              </Link>
            </li>
            <li>
              <Link to="firstyear" className="flex flex-row gap-7 text-lg align-center pl-5">
                <HiBars2 size={25} className="min-w-max" />
                First Year
              </Link>
            </li>
            <li>
              <Link to="secondyear" className="flex flex-row gap-7 text-lg align-center pl-5">
                <HiBars2 size={25} className="min-w-max" />
                Second Year
              </Link>
            </li>
            <li>
              <Link to="thirdyear" className="flex flex-row gap-7 text-lg align-center pl-5">
                <HiBars2 size={25} className="min-w-max" />
                Third Year
              </Link>
            </li>
            <li>
              <Link to="finalyear" className="flex flex-row border-b pb-3 gap-7 text-lg align-center pl-5">
                <HiBars2 size={25} className="min-w-max" />
                Final Year
              </Link>
            </li>


            <div className='flex justify-between border-b pb-3'>
                <p className=' flex gap-5 text-lg pl-5'><BiMessage size={25}/>Add Channels </p>
                <RiAddCircleLine size={25} className='pt-1' onClick={AddChannels}/>
            </div>

            
            <li>
              <Link to={"/settings"} className="flex flex-row gap-7 text-lg align-center pl-5">
                <SlSettings size={23} className="min-w-max" />
                Settings
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex flex-row gap-7 text-lg align-center pl-5">
                
                go to home page
              </Link>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>

      
    </div>
  );
};

 
export default Sidebar;