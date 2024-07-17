import BalanceView from "@/sections/balance/view";
import Nav from "@/sections/header/nav";
import { Stack, Box } from "@mui/material";
import { TitleBar } from "@/components/TitleBar";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: 'test: Balance',
};

export default function Balance() {
    return <>
        <Nav title="Balance">
            <TitleBar title="Balance" child="Buy Credits   Available: BTC, BCH, LTC, ETH, XMR" />
            <Stack direction={"row"}>
                <Box>
                    {/* <Nav /> */}
                </Box>
                <BalanceView />
            </Stack>
            <Footer />
        </Nav>
    </>
}