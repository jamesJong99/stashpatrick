"use client"
import { Stack, Box } from "@mui/material"
import { Typography, Radio, RadioGroup, FormControlLabel, InputLabel, MenuItem, Select, Button } from '@mui/material';
import Link from "next/link";

import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import FormControl from '@mui/material/FormControl';
import { coinsAddress } from "../../../utils/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BalanceView() {
    const [success, setSuccess] = React.useState(0)
    const [coin, setCoin] = React.useState("10");
    const [pack, setPack] = React.useState("");
    const next = () => {
        if (coin == '10') {
            toast.warning("Please select coin!");
        } else {
            setSuccess(1);
        }
    }
    return (<Stack sx={{ padding: "0 20px 0 20px", width: "100%" }}><ToastContainer />
        {(!success ?
            <Stack style={{ marginTop: "20px", marginBottom: "60px" }} sx={{ borderColor: "#CCC" }} width={"100%"} border="1px solid" margin={"auto"}>
                <Typography width={"100%"} borderBottom="1px solid" borderColor={"#CCC"} display={"block"} fontFamily={"'Open Sans'"} bgcolor={"#F7F7F7"} color={"#669FC7"} minHeight={"38px"} paddingLeft={"12px"} lineHeight={"36px"} fontSize={"18px"}>
                    Buy Credits
                </Typography>
                <Box padding={2} borderBottom={"1px solid"} borderColor={"#CCC"} width={"100%"} display={"flex"} justifyContent={"center"}>
                    <Box marginTop="20px" display={"flex"}>
                        <Box>
                            <Box borderRadius={"50%"} margin={"auto"} border={"4px solid"} borderColor={"#5293C4"} width={"40px"} height="40px" lineHeight={"32px"} textAlign={"center"} >1</Box>
                            <Typography textAlign={"center"}>Select Package</Typography>
                        </Box>
                        <Box paddingTop="16px" marginLeft={"-36px"}>
                            <Box width={"300px"} height={"4px"} bgcolor={"#5293C4"}></Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Box width={"300px"} height={"4px"} bgcolor={"#CED1D6"}></Box>
                        </Box>
                        <Box>
                            <Box borderRadius={"50%"} border={"4px solid"} borderColor={"#CED1D6"} width={"40px"} height="40px" lineHeight={"32px"} textAlign={"center"} >2</Box>
                            <Typography textAlign={"center"}>Pay</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ marginTop: "20px" }} sx={{ borderColor: "#CCC" }} width={"40%"} border="1px solid" margin={"auto"}>
                    <Typography textAlign={"center"} width={"100%"} display={"block"} fontFamily={"'Open Sans'"} sx={{ backgroundImage: "linear-gradient(to bottom,#FFF 0,#EEE 100%)" }} color={"#669FC7"} minHeight={"38px"} paddingLeft={"12px"} lineHeight={"36px"} fontSize={"18px"}>
                        Select Package
                    </Typography>
                    <Box textAlign={"center"}>
                        <Typography sx={{ color: "#2679B5", fontWeight: 700, fontSize: "13px", marginTop: "15px" }}>
                            *BTC currently having high network fees, consider using other coins*
                        </Typography>
                        <Typography sx={{ color: "#2679B5", fontWeight: 700, fontSize: "16px", marginTop: "15px" }}>
                            <FontAwesomeIcon style={{ marginRight: "2px", color: "#69AA46" }} icon={faStar} />    USDT(TRC20) added
                            <FontAwesomeIcon style={{ marginLeft: "2px", color: "#69AA46" }} icon={faStar} />
                        </Typography>
                        <Box sx={{ paddingLeft: "28%", marginTop: "20px" }}>
                            <RadioGroup name="radio-buttons-group" value={"500"} sx={{ paddingLeft: "10px", margin: "auto", width: "100%" }}>
                                <FormControlLabel value="500" control={<Radio size="small" />} label="500 Credits - 115$" />
                                <FormControlLabel value="3" control={<Radio size="small" />} label="1.000 Credits - 230$" />
                                <FormControlLabel value="4" control={<Radio size="small" />} label="2.500 Credits - 575$" />
                                <FormControlLabel value="5" control={<Radio size="small" />} label="5.000 Credits - 1.150$" />
                                <FormControlLabel value="6" control={<Radio size="small" />} label="10.000 Credits - 2.300$" />
                                <FormControlLabel value="7" control={<Radio size="small" />} label="50.000 Credits - 11.500$" />
                                <FormControlLabel value="8" control={<Radio size="small" />} label="100.000 Credits - 23.000$" />
                                <FormControlLabel value="9" control={<Radio size="small" />} label="200.000 Credits - 46.000$" />
                                <FormControlLabel value="10" control={<Radio size="small" />} label="500.000 Credits - 115.000$" />
                            </RadioGroup>
                        </Box>
                        <Typography fontFamily={"'Open Sans'"} fontSize={"13px"} paddingX={4} marginTop="20px" color="#737373" sx={{ marginTop: "20px" }}>
                            For more than 500.000 credits, contact support. We have special discounts for our customers and unbeatable prices for api shop owners.
                        </Typography>
                        <Box width={"100%"} paddingBottom={"20px"}>
                            <Box margin={"auto"} display="flex" justifyContent={'center'} sx={{ marginTop: "25px", marginBottom: "4px", fontFamily: "Open-Sans sans-serif" }}>
                                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "14px", color: "#393939", fontWeight: 700, lineHeight: "40px", marginRight: '4px' }}>Select Coin</InputLabel>
                                <FormControl >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={coin}
                                        displayEmpty
                                        onChange={(e) => setCoin(e.target.value)}
                                        sx={{ padding: 0, fontSize: '14px', color: "#858585" }}
                                        size="small"
                                        defaultValue={"10"}
                                    >
                                        <MenuItem value={"10"}>Select crypto currency</MenuItem>
                                        <MenuItem value={"btc"}>Bitcoin(btc)</MenuItem>
                                        <MenuItem value={"xlm"}>Stellar(xlm)</MenuItem>
                                        <MenuItem value={"LTC"}>Litecoin(LTC)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Typography fontFamily={"'Open Sans'"} textAlign={"center"} fontSize={"13px"} paddingX={4} color="#737373" >
                                ETH is now available (BETA)
                            </Typography>

                            <Typography fontFamily={"'Open Sans'"} textAlign={"center"} fontSize={"13px"} color="#737373" >
                                ETH теперь доступен (БЕТА)
                            </Typography>

                            <Typography fontFamily={"'Open Sans'"} textAlign={"center"} fontSize={"13px"} paddingX={4} marginTop="3px" color="#737373" >
                                ETH 现已推出（测试版）
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ marginTop: "20px" }} paddingBottom={"20px"} sx={{ borderColor: "#CCC" }} width={"60%"} border="1px solid" margin={"auto"}>
                    <Typography textAlign={"center"} width={"100%"} display={"block"} fontFamily={"'Open Sans'"} sx={{ backgroundImage: "linear-gradient(to bottom,#FFF 0,#EEE 100%)" }} color={"#669FC7"} minHeight={"38px"} paddingLeft={"12px"} lineHeight={"36px"} fontSize={"18px"}>
                        Current Payments
                    </Typography>
                    <Box textAlign={"center"}>
                        <Box display={"flex"} >
                            <Typography sx={{ width: "25%", textAlign: "center", color: "black", fontWeight: "bold", fontSize: "16px", marginTop: "15px", textDecoration: "underline" }}>
                                Amount
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "black", fontWeight: "bold", fontSize: "16px", marginTop: "15px", textDecoration: "underline" }}>
                                Currency
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "black", fontWeight: "bold", fontSize: "16px", marginTop: "15px", textDecoration: "underline" }}>
                                Status
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "black", fontWeight: "bold", fontSize: "16px", marginTop: "15px", textDecoration: "underline" }}>
                                Action
                            </Typography>
                        </Box>

                        <Box display={"flex"}>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                $25 (0.000486)
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                BTC
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "blue", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                Pending
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                None
                            </Typography>
                        </Box>
                        <Box display={"flex"}>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                $225 (0.644699)
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                BCH
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "blue", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                Pending
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                None
                            </Typography>
                        </Box>
                        <Box display={"flex"}>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                $22000 (7.0455016)
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                ETH
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "blue", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                Pending
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                None
                            </Typography>
                        </Box>
                        <Box display={"flex"}>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                $22000 (7.0452704)
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "400", fontSize: "16px", marginTop: "15px" }}>
                                ETH
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "blue", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                Pending
                            </Typography>
                            <Typography sx={{ width: "25%", textAlign: "center", color: "#393939", fontWeight: "bold", fontSize: "16px", marginTop: "15px" }}>
                                None
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Typography fontSize="13px" textAlign={"center"} color={"#393939"} width={"60%"} margin={"auto"} marginY={"20px"}>
                    We also accept the following coins manually, please open a ticket for manual topup these coins:
                    Avalanche <strong>(AVAX)</strong> - Cardano <strong>(ADA)</strong> - Dash <strong>(DASH)</strong> - Dogecoin <strong>(DOGE)</strong> - Ripple <strong>(XRP)</strong> - Tron <strong>(TRX)</strong>
                </Typography>
                <Box marginX="5px" marginTop={"20px"} borderTop={"1px solid"} borderColor={"#CCC"} display={"flex"} justifyContent={"end"}>
                    <Link href="#successPart">
                        <Button
                            className="btn-register"
                            type="submit"
                            variant="contained"
                            style={{ fontFamily: "Open Sans" }}
                            sx={{ mt: 3, mb: 2, bgcolor: "#87BA21", borderRadius: "none" }}
                            onClick={() => next()}
                        >
                            Next
                            <FontAwesomeIcon style={{ marginLeft: "4px" }} icon={faArrowRight} className="fas fa-check"
                            />
                        </Button>
                    </Link>
                </Box>
            </Stack > :
            <Stack style={{ marginTop: "20px" }} paddingBottom={"20px"} sx={{ borderColor: "#CCC" }} width={"90%"} border="1px solid" margin={"auto"}>
                <Typography width={"100%"} borderBottom="1px solid" borderColor={"#CCC"} display={"block"} fontFamily={"'Open Sans'"} bgcolor={"#F7F7F7"} color={"#669FC7"} minHeight={"38px"} paddingLeft={"12px"} lineHeight={"36px"} fontSize={"18px"}>
                    Buy Credits
                </Typography>
                <Box padding={2} borderBottom={"1px solid"} borderColor={"#CCC"} width={"100%"} display={"flex"} justifyContent={"center"}>
                    <Box marginTop="20px" display={"flex"}>
                        <Box>
                            <Box borderRadius={"50%"} margin={"auto"} border={"4px solid"} borderColor={"#5293C4"} width={"40px"} height="40px" lineHeight={"32px"} textAlign={"center"} ><FontAwesomeIcon style={{ fontWeight: 900, color: "#87BA21", marginLeft: "4px", marginTop: "5px" }} icon={faCheck} className="fas fa-check"
                            /></Box>
                            <Typography textAlign={"center"}>Select Package</Typography>
                        </Box>
                        <Box paddingTop="16px" marginLeft={"-36px"}>
                            <Box width={"300px"} height={"4px"} bgcolor={"#5293C4"}></Box>
                        </Box>
                        <Box paddingTop="16px">
                            <Box width={"300px"} height={"4px"} bgcolor={"#5293C4"}></Box>
                        </Box>
                        <Box>
                            <Box borderRadius={"50%"} border={"4px solid"} borderColor={"#5293C4"} width={"40px"} height="40px" lineHeight={"32px"} textAlign={"center"} >2</Box>
                            <Typography textAlign={"center"}>Pay</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ marginTop: "20px" }} paddingBottom={"10px"} sx={{ borderColor: "#CCC" }} width={"98%"} border="1px solid" margin={"auto"}>
                    <Typography textAlign={"center"} width={"100%"} display={"block"} fontFamily={"'Open Sans'"} sx={{ backgroundImage: "linear-gradient(to bottom,#FFF 0,#EEE 100%)" }} color={"#669FC7"} minHeight={"38px"} paddingLeft={"12px"} lineHeight={"36px"} fontSize={"18px"}>
                        Address

                    </Typography>
                    <Typography sx={{ textAlign: "center", color: "black", fontWeight: 700, fontSize: "16px", marginTop: "15px", textDecoration: "underline" }}>
                        Payment Details
                    </Typography>
                    <Box >
                        <Box display={"flex"} marginTop={"20px"}>
                            <Typography width={"30%"} textAlign={"center"} color={"black"}>
                                Currency:
                            </Typography>
                            <Typography width={"70%"} textAlign={"center"} color={"#393939"}>
                                {(coin == "btc" ? coinsAddress[0].type : (coin == "LTC" ? coinsAddress[2].type : coinsAddress[1].type))}
                            </Typography>
                        </Box>
                        <Box display={"flex"} marginTop={"20px"}>
                            <Typography width={"30%"} textAlign={"center"} color={"black"}>
                                Amount:
                            </Typography>
                            <Typography width={"70%"} textAlign={"center"} color={"#393939"}>
                                0.173410
                            </Typography>
                        </Box>
                        <Box display={"flex"} marginTop={"20px"}>
                            <Typography width={"30%"} textAlign={"center"} color={"black"}>
                                Payment Address:
                            </Typography>
                            <Typography width={"70%"} textAlign={"center"} color={"#393939"}>
                                {(coin == "btc" ? coinsAddress[0].address : (coin == "LTC" ? coinsAddress[2].address : coinsAddress[1].address))}
                            </Typography>
                        </Box>
                        <Box display={"flex"} marginTop={"20px"}>
                            <Typography width={"30%"} textAlign={"center"} color={"black"}>
                                Confirmations Required:
                            </Typography>
                            <Typography width={"70%"} textAlign={"center"} color={"#393939"}>
                                3
                            </Typography>
                        </Box>
                    </Box>
                    <Typography marginTop={"40px"} paddingX={"20px"} textAlign={"center"} color="#393939">
                        <strong> Note:</strong> Above address is only valid for 24 hours. Please note and save it for reference, as no payment details are stored on server. These details will serve as ID for your payment incase of ticket/support.
                    </Typography>
                    <Typography paddingX={"20px"} textAlign={"center"} color="#393939">
                        Please send exact amount in a <strong>Single Transaction</strong>.
                    </Typography>
                </Box>
            </Stack >)}
    </Stack>)
}
