import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={`flex flex-row  text-lg align-center pl-5 ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        
        <p className="flex text-lg pl-5"> <data.icon size={20} className="min-w-max" />{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu) => (
          <li key={menu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink
              to={`/${data.name}/${menu}`}
              className="flex text-lg align-center pl-5 !bg-transparent capitalize"
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;