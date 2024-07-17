import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack, Box, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Stack sx={{width:"100%", padding:"40px 20px 10px 20px",}}>
        <Stack sx={{ width: "100%", marginTop:"10px", padding:"8px", paddingBottom:"12px", borderTop: "3px double #E5E5E5" }}>
            <Typography sx={{ color: "#478FCA", paddingTop:"4px", width:"100%", textAlign:"center", fontSize:"15.6px", fontWeight:"bold" }}>
                Lux Checker
            </Typography>
        </Stack>
        </Stack>
    )
}