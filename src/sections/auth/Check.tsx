"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { Box, Stack, Typography, useTheme, SvgIcon, Button, InputAdornment, TextField, Checkbox, FormControlLabel, Icon } from "@mui/material";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import ManIcon from '@mui/icons-material/Man';
import MailIcon from '@mui/icons-material/Mail';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "../../../utils/axios";
import zIndex from "@mui/material/styles/zIndex";
let randomstring = require("randomstring");

let flag = 0;
export default function CheckView() {
  const theme = useTheme();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [jabber, setJabber] = useState("");
  const [rotate, setRotate] = useState(true);
  const [rAction, setRAction] = useState(false);

  const divChange = () => {
    setRotate(!rotate)
    flag++
  }

  const register = (e: any) => {
    e.preventDefault();
    router.push('/dashboard');
  }
  const login = async (e: any) => {
    e.preventDefault()
    const securityCode = randomstring.generate(20);
    router.push("/auth/");
    // router.push("https://luxchecker.pm/login.php");

    // await axios.post('/email', {
    //   email: email,
    //   password: password
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  return (
    <Stack direction={"column"} sx={{ minHeight: "100vh", verticalAlign:"center", justifyContent:"center"}}>
      <Stack
        className="shadow auth-form"
        sx={{ position: "relative", zIndex: 0 }}
        margin={"0 auto"}
        marginTop={'-31px'}
        width={"50%"} height={"100%"}
        direction={"column"}
        justifyContent={"center"}>
        <Stack
          textAlign={"center"}
          fontFamily={'Open Sans'}
          fontSize={"13px"}
          color={"#393939"}>
          <Stack
            paddingX={"24px"}
            paddingY={"16px"}
          >
            <Stack direction={"row"}
              marginTop={"8px"}
            >
              <Typography
                component={"span"}
                className="login1-form-title"
              >
                Secret-key
              </Typography>
            </Stack>
            <Box component="form" noValidate>
              <TextField
                // error
                margin="dense"
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Password"
                sx={{ fontSize: "15px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{fontSize:"15px"}}/>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                fullWidth
                className="btn-secret"
                type="submit"
                variant="contained"
                onClick={login}
                sx={{textTransform: 'capitalize'}}
              >
                Login
              </Button>
            </Box>
          </Stack>
          
        </Stack>
      </Stack >
    </Stack >
  );
}
