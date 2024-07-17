import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from '@mui/material';
export default function CustomAlert() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert icon={false} severity="success" onClose={() => { }} style={{ color: "#3c763d", fontSize: "14px" }}>
                <Typography fontFamily={"Open Sans"}><FontAwesomeIcon icon={faBullhorn} className="fas fa-check"
                />LuxChecker Updates!</Typography>
                <Typography fontFamily={"Open Sans"}>-Secure Checker Added.</Typography>
                <Typography marginTop={"40px"} fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                <Typography fontFamily={"Open Sans"} >https://mirror1.luxchecker.vc</Typography>
                <Typography marginTop={"40px"} fontFamily={"Open Sans"}>Note: All LuXChecker domains (.pm,.pw,.vc,TOR) will also work for API. These domains are just to ensure faster and stable checks.</Typography>
                <Typography marginTop={"20px"} fontFamily={"Open Sans"} fontWeight={"700"} >:Support</Typography>
            </Alert>
        </Stack>
    );
}
