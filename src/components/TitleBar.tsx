import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack, Box, Typography } from "@mui/material"

interface props{
    title: string,
    child: string
}
export const TitleBar = ({title, child}: props) => {
    return (
        <Stack>
            <Stack sx={{ minHeight: "41px", paddingLeft:"12px", paddingTop:"6px", backgroundColor: "#F5F5F5", color:"8089A0", fontSize:"16px" }} direction={"row"} fontSize={"16px"}>
                <HomeIcon style={{ paddingTop: "1px" }} /> <a style={{ color: "#4C8FBD" }}>Home</a> <ArrowForwardIosIcon style={{ marginTop: "4px", color: "#8089A0", fontSize: "14px" }} /> <span style={{color: "#8089A0", fontSize: "16px"}}>{title}</span>
            </Stack>
            <Typography style={{ paddingBottom: "12px", fontFamily:"Open Sans", paddingLeft:"30px", paddingTop:"12px", fontSize: "24px", borderBottom: "1px solid #E5E5E5", fontWeight: "lighter", color: "#2679B5" }}>
                {title} <KeyboardDoubleArrowRightIcon style={{ paddingTop: "4px", color: "#8089A0", fontSize: "14px" }} /><small style={{ fontSize: "14px", fontWeight: "400", color: "#8089A0", }}>{child}</small>
            </Typography>
        </Stack>
    )
}