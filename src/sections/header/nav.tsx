"use client"
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from 'next/link';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MonetizationOn, Settings, PowerSettingsNew, AvTimer, Margin } from '@mui/icons-material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const drawerWidth = 0;
const listItems = [
  {
    icon: <HomeOutlinedIcon />,
    text: "News",
    childs: false
  },
  {
    icon: <CreditCardOutlinedIcon />,
    text: "Cards",
    childs: true,
  },
  {
    icon: <CreditCardOutlinedIcon />,
    text: "Cards NoVBV",
    childs: true,
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
    text: "Socks",
    childs: true,
  },
  {
    icon: <StarBorderOutlinedIcon />,
    text: "Sellers rating",
    childs: false,
  },
  {
    icon: <SendOutlinedIcon />,
    text: "Chat",
    childs: false,
  },
  {
    icon: <SupportOutlinedIcon />,
    text: "Tickets",
    childs: false,
  },
  {
    icon: <MonetizationOnOutlinedIcon />,
    text: "Wallet",
    childs: false,
  },
  {
    icon: <Diversity3OutlinedIcon />,
    text: "Partnership",
    childs: false,
  },
  {
    icon: <ThumbUpAltOutlinedIcon />,
    text: "Services",
    childs: false,
  },
  {
    icon: <PermIdentityOutlinedIcon />,
    text: "Profile",
    childs: true,
  },
  {
    icon: <LogoutOutlinedIcon />,
    text: "Logout",
    childs: false,
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#018935",
  ...theme.typography.body2,
  textAlign: 'center',
  color: "white",
  borderRight: "1px solid white",
  borderRadius: 0,
  height: 60
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  position: 'initial',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${1}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


type Props = {
  children: React.ReactNode;
  title: string,
};
export default function Nav({ title, children }: Props) {

  const [open, setOpen] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: 0, backgroundColor: "white" }}>
      <CssBaseline />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          padding: "20px",
        }}
      >
        <Link href="#" style={{ textDecoration: "none", paddingLeft: "14px" }}>
          <Typography
            component={"h4"}
            sx={{ fontSize: "20px", color: "#8fbd56", }}
          >
            PatrickStash
          </Typography>
        </Link>
        <Stack direction={"row"} justifyContent={"end"} sx={{ paddingTop: "5px" }}>
          <Box sx={{ paddingX: "12px" }}>
            <Link href="#" style={{ textDecoration: "none" }} >
              <ShoppingCartOutlinedIcon sx={{ color: "#100f15", fontSize: "20px" }} className='nav-item' />
            </Link>
          </Box>
          <Box sx={{ paddingX: "12px" }} >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#100f15" }} className='nav-item'>
                $ 0
              </Typography>
            </Link>
          </Box>
          <Box sx={{ paddingX: "12px" }}>
            <Link href="#" style={{ textDecoration: "none", display: "flex" }}>
              <NorthOutlinedIcon sx={{ color: "#100f15", fontSize: "20px" }} />
              <Typography sx={{ color: "#100f15" }} className='nav-item'>
                0 LVL
              </Typography>
            </Link>
          </Box>
          <Box sx={{ paddingX: "15px" }}>
            <Link href="#" style={{ textDecoration: "none", display: "flex" }}>
              <Typography sx={{ color: "#100f15" }} className='nav-item'>
                0 Points
              </Typography>
            </Link>
          </Box>
          <Box sx={{ paddingX: "15px" }}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <SupportOutlinedIcon sx={{ color: "#100f15", fontSize: "20px" }} className='nav-item' />
            </Link>
          </Box>
        </Stack>
      </Stack>
      <AppBar position="fixed" sx={{ boxShadow: "none" }} open={open}>
        <Toolbar sx={{ minHeight: "45px !important", paddingX: "10px !important" }}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Stack direction={"row"} width={"100%"}>

              <Stack
                direction="row"
                justifyContent="space-around"
                sx={{ width: "100%", paddingX: "60px" }}
              >
                {listItems.map((item, ind) =>
                  <Link key={ind} href={(item.text=="Logout"?"/":"#")} style={{textDecoration:"none"}}>
                    <Item className='nav-item' sx={{ boxShadow: "none", borderRight: 'none', borderLeft: "none", cursor: "pointer" }}>
                      <Stack sx={{ lineHeight: "45px", paddingX: "8px" }} alignItems={"center"} direction={"row"}>
                        {item.icon}
                        <span style={{ minWidth: "40px", marginLeft: "3px", marginTop: "3px" }}>
                          {item.text}
                        </span>
                        {(item.childs ? <ChevronRightOutlinedIcon /> : <></>)}
                      </Stack>
                    </Item>
                  </Link>
                )}
              </Stack>
              <div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Settings /> setting
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <PowerSettingsNew /> logout
                  </MenuItem>
                </Menu>
              </div>
            </Stack>

          </Stack>


        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, marginTop: '45px' }}>
        {children}
      </Box>
    </Box >
  );
}