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
export default function LoginView() {
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
    router.push("/auth/check");
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
    <Stack direction={"column"} sx={{ minHeight: "100vh", position: "relative", paddingTop:"110px" }}>
      <Stack sx={{ position: "relative", zIndex: 100 }}>
        <Image
          src={"/assets/images/logo.png"}
          width={271}
          height={192}
          alt="logo"
          style={{ margin: "0 auto" }}
        />
      </Stack>
      <Stack
        className="shadow auth-form"
        sx={{ position: "relative", zIndex: 0 }}
        margin={"0 auto"}
        marginTop={'-31px'}
        width={"368px"} height={"100%"}
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
                Login
              </Typography>
            </Stack>
            <Box component="form" noValidate>
              <TextField
                // error
                size="small"
                fullWidth={true}
                variant="outlined"
                placeholder="Login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ fontSize: "15px", color:"#495057bf" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{fontSize:"15px"}} />
                    </InputAdornment>
                  ),
                }}
              />
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
              <Box sx={{ display: 'flex', marginTop: "8px", marginBottom: "8px" }}>
                <TextField
                  size="small"
                  fullWidth={true}
                  variant="outlined"
                  placeholder="Captcha"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Image
                          src={"/assets/images/inverse.png"}
                          alt=""
                          width={"103"}
                          height={"40"}
                        />
                      </InputAdornment>
                    ),
                  }}
                />

              </Box>

              <FormControlLabel
                sx={{ width: '100%', fontWeight: 400, color: "#495057", marginBottom: "8px" }}
                control={<Checkbox
                  sx={{
                  paddingRight: 0, color: "#7c7c7c",
                  '&.Mui-checked': {
                    color: "#8fbd56",
                  },
                }} disableRipple={false} size="small" />}
                label="Remember Me" />
              <Button
                fullWidth
                className="btn-register"
                type="submit"
                variant="contained"
                onClick={login}
                sx={{textTransform: 'capitalize'}}
              >
                Login
              </Button>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            gap={0.3} pb={3}
          >
              <Typography
                component={"p"}
                sx={{color:"#343a40", fontWeight:400}}>                
                Not a member?
              </Typography>
            <Link href="/auth/register" className="link">
              <Typography
                onClick={() => divChange()}
                component={"p"}
                color={"#8fbd56"}>
                Create an Account
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack >
    </Stack >
  );
}
