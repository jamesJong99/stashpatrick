import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack, Box, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Stack sx={{ width: "100%", padding: "40px 20px 10px 20px", }}>
            <Stack sx={{ width: "100%", marginTop: "10px", padding: "8px", paddingBottom: "12px", borderTop: "1px solid #E5E5E5" }}>
                <Typography sx={{ color: "#495057;", paddingTop: "4px", width: "100%", textAlign: "center", fontSize: "15.6px", fontWeight: "bold" }}>
                    Copyright Patrick Market © 2023 All rights reserved
                </Typography>
            </Stack>
        </Stack>
    )
}