import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <RiIcons.RiHomeGearFill />,
    cName: 'nav-text'
  },
  {
    title: 'GrowthPath',
    path: '/growthpath',
    icon: <IoIcons.IoMdFlower/>,
    cName: 'nav-text'
  },
  {
    title: 'Happy to Share',
    path: '/happytoshare',
    icon: <GiIcons.GiFlowers />,
    cName: 'nav-text'
  },
  {
    title: 'Trash',
    path: '/trash',
    icon: <FaIcons.FaTrash/>,
    cName: 'nav-text'
  }
];