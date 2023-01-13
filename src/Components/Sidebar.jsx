import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { BiCog, BiSearch } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";





const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: <MdDashboard />,
  // },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <TbBrandGoogleAnalytics />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <HiUsers />,
  },
  {
    path: "/file-manager",
    name: "FileManager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdOutlineMessage />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <BiCog />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity:0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity:1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity:0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity:1,
      transition: {
        duration: 0.2,
      },
    },
  };


  return (
    <div className="main-container">
      <motion.div animate={{ width: isOpen ? "200px" : "50px", transition:{
        duration:0.5,
        type:'spring',
        damping:12,
      } }} className="sidebar">
        <div className='top_section'>
          {isOpen && <motion.h1 variants={showAnimation} initial="hidden" animate="show" exit="hidden" className='logo'>DigitalArc</motion.h1>}
          <div className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className='search'>
          <div className='search_icons'>
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder='search...' />}
          </AnimatePresence>
        </div>
        <section className='routes'>
          {routes.map((route) => (
            <NavLink activeClassName="active" to={route.path} key={route.name} className='link'>
              <div className='icon'>
                {route.icon}
              </div>
              <AnimatePresence>
                {isOpen && <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className='link_text'>{route.name}</motion.div>}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
