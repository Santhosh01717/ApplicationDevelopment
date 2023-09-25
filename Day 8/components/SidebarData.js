import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    
    title: 'Customer',
    path: '/customer',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Medicine',
    path: '/medicine',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Supplier',
    path: '/supplier',
    icon: <FaIcons.FaCcVisa />,
    cName: 'nav-text'
  },
  {
    title: 'Purchase',
    path: '/purchase',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/reports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];
