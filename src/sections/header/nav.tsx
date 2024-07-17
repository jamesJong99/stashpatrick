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

const drawerWidth = 0;
const listItems = [
  {
    icon: "cn.png",
    text: "中文"
  },
  {
    icon: "ru.png",
    text: "русский"
  },
  {
    icon: "us.png",
    text: "English"
  }
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
    <Box sx={{ padding: 0 }}>
      <CssBaseline />
      <Stack>
        <Link href="#">
          <Typography>
            PatrickStash
          </Typography>
        </Link>
      </Stack>
      <AppBar position="fixed" sx={{ boxShadow: "none" }} open={open}>
        <Toolbar sx={{ minHeight: "45px !important", paddingX: "10px !important" }}>

          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Stack flexDirection={"row"} width={'100%'} justifyContent={'flex-start'}>
              <Image
                src={"/assets/images/Screenshot_31.png"}
                alt=""
                width={"32"}
                height={"21"}
                style={{ marginTop: "5px" }}
              />
              <Typography variant="h6" noWrap component="div" fontFamily={"Open Sans"} fontSize={"20px"} fontWeight={"400"}>

                LuX Checker
              </Typography>
            </Stack>

            <Stack direction={"row"}>

              <Stack
                direction="row"
                alignItems={"center"}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {listItems.map((item, ind) =>
                  <Item key={ind} sx={{ boxShadow: "none" }}>
                    <Stack sx={{ lineHeight: "45px", paddingX: "8px" }} alignItems={"center"} direction={"row"}>
                      <Image
                        src={`/assets/images/${item.icon}`}
                        alt=""
                        width={"20"}
                        height={"20"}
                      />
                      <span style={{ minWidth: "40px" }}>
                        {item.text}
                      </span>
                    </Stack>
                  </Item>
                )}
              </Stack>
              <Item sx={{ boxShadow: "none", backgroundColor: "#2E8965" }}>
                <Stack sx={{ padding: 2 }} alignItems={"center"} direction={"row"}>
                  <span>
                    <Badge badgeContent={4} color="secondary">
                      <MonetizationOn />
                    </Badge>
                  </span>
                </Stack>
              </Item>
              <div>
                <Item
                  sx={{ paddingX: "8px", backgroundColor: '#62A8D1', border: "none", boxShadow: "none" }}
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <Stack direction={"row"} sx={{ border: "none" }}>
                    <Typography variant="subtitle2" gutterBottom sx={{ marginBottom: 0, border: "none" }}>
                      <small>welcome,</small> User
                    </Typography>
                    <ArrowDropDownOutlinedIcon sx={{ margin: "auto" }} />
                  </Stack>
                </Item>
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