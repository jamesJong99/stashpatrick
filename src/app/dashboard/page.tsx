import DashboardView from "@/sections/dashboard/view";
import Nav from "@/sections/header/nav";
import { Stack, Box } from "@mui/material";
import { TitleBar } from "@/components/TitleBar";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: 'Patrick Market',
};

export default function Page() {
    return <>
        <Nav title ="Dashboard" >
            <TitleBar title="Wallet" child="news" />
            <Stack direction={"row"}>
                <Box>
                </Box>
                <DashboardView />
            </Stack>
            <Footer />
        </Nav>
    </>
}