import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack, Box, Typography } from "@mui/material"

interface props {
    title: string,
    child: string
}
export const TitleBar = ({ title, child }: props) => {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} sx={{marginTop:"75px", paddingRight:"50px", background: "white"}}>
            <Typography style={{ paddingBottom: "12px", fontFamily: "Open Sans", paddingLeft: "30px", paddingTop: "12px", fontSize: "24px", fontWeight: "400" }}>
                {title} 
            </Typography>
            <Stack sx={{ color: "8089A0", fontSize: "16px", lineHeight:"60px" }} direction={"row"} fontSize={"16px"}>
                <a style={{ color: "#8fbd56" }}>Home</a> <KeyboardDoubleArrowRightIcon style={{ marginTop: "22px", marginLeft:"10px", marginRight:"10px", color: "#8089A0", fontSize: "14px" }} /> <span style={{ color: "#8089A0", fontSize: "16px" }}>{title}</span>
            </Stack>
        </Stack>
    )
}