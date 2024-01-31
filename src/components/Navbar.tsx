import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
}

const Navbar = () => {

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Home', 'Headphones', 'Speakers', 'Ear'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  
  return (
   <nav className='bg-charcoal border-b border-[#FFFFFF] border-opacity-10 pb-[32px] '>
    <div className='hidden lg:flex'>
      <ul className='text-white'>
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
Navbar
    </div>
    <div className='lg:hidden h-[58px]'>
      <div className='flex text-white justify-between mx-[24px] py-[32px] '>
      <div className='hover:cursor-pointer'>
      <IoMdMenu size={30} />
      </div>
      <div className='hover:cursor-pointer'>
        <Link href='/'>
        <Image src="/logo.svg" alt="audiophile logo" width={143} height={25} />
        </Link>
      </div>
      <div className='hover:cursor-pointer'>
      <AiOutlineShoppingCart size={30} />
      </div>
      </div>
     
    

    </div>
   </nav>
  )
}

export default Navbar