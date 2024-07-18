"use client"
import Link from "next/link";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { TextField, FormControl, MenuItem, InputLabel, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import LevelTable from "./LevelTable";
const coinInfo = [
    {
        name: 'Bitcoin',
        address: 'bc1quh64kq4clezfylk76cnav776y9y6hgg5shfjql',
        img: "/assets/images/btc_qr.jpg",
    },
    {
        name: 'Litecoin',
        address: 'ltc1qehu4d263syp6uepjx6pemr8xnqugfgfp5xh9ec',
        img: "/assets/images/ltc_qr.jpg",
    }
]
export default function DashboardView() {
    const [coin, setCoin] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [payment, setPayment] = React.useState(0);
    const [selCoin, setSelCoin] = React.useState(0);
    const [selAmount, setSelAmount] = React.useState(0);
    const handleChange = (event: SelectChangeEvent) => {
        setCoin(event.target.value as string);
    };
    const coinDefault = () => {
        setCoin('');
        setAmount('')
        setPayment(0);
    }
    const update = (e: any) => {
        if (coin) {
            if (amount) {
                setPayment(1);
            } else {
                toast.warn('Please input amount of money!');
            }
        } else {
            toast.warn('Please set cryptocurrency what you want!');
        }
    }
    return (
        <>
            <ToastContainer />
            <Stack
                sx={{ marginTop: '10px', paddingX: "20px", width: "100%" }}
            >
                <ToastContainer />
                <Stack direction={"row"} sx={{ border: "1px solid #8fbd56", padding: "12px 20px", borderRadius: "5px" }}>
                    <Stack marginY={"auto"}>
                        <ReportOutlinedIcon sx={{ color: "#8fbd56" }} />
                    </Stack>
                    <Stack marginLeft={"6px"}>
                        <Typography color="#8fbd56">
                            - Minimum amount to deposit: <strong>50 USD</strong>
                        </Typography>
                        <Typography color="#8fbd56">
                            - Processing fee: 2%
                        </Typography>
                        <Typography color="#8fbd56" sx={{ display: "flex" }}>
                            - To next Level need <strong style={{ color: "#59adec", marginLeft: "4px", marginRight: "4px" }}> 197$ </strong>
                            <Link href="#" style={{ color: "#e7c354d9", textDecoration: "none" }}>What is the level bonus?</Link>
                        </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ width: "100%", marginTop: "40px" }}>
                    <Typography component={"h5"} sx={{ textAlign: "center", color: "red", fontSize: "20px", fontWeight: "700" }}>
                        Your Account is Inactive at the Moment.
                    </Typography>
                    <Typography component={"h5"} sx={{ textAlign: "center", color: "red", fontSize: "20px", fontWeight: "700", marginTop: "20px" }}>
                        Please Top up the Account for 50$ For Activation.
                    </Typography>
                </Stack>
                <Stack sx={{ paddingLeft: "20px", marginTop: "20px" }}>
                    <Typography component={"h6"} sx={{ color: "#495057", fontSize: "16px", fontWeight: 500 }}>
                        Wallet replenishment
                    </Typography>
                    {(payment ?
                        <Stack direction={'row'} justifyContent={"space-between"} sx={{ marginTop: "20px", padding: "40px 20px", boxShadow: "0 4px 16px 0 rgba(169, 184, 200, 0.15)" }}>
                            <Stack padding={"20px 40px"} sx={{ boxShadow: "0 4px 16px 0 rgba(169, 184, 200, 0.15)" }}>
                                <Typography>
                                    Order ID:
                                </Typography>
                                <Typography textAlign={"left"} paddingLeft="15px">
                                    -
                                </Typography>
                                <Typography>
                                    Status:
                                </Typography>
                                <Typography color="red">
                                    Awaiting deposit
                                </Typography>
                                <Typography>
                                    Time Left:
                                </Typography>
                                <Typography component={"h6"} color={"black"} fontWeight={"700"}>
                                    1 HOUR
                                </Typography>
                            </Stack>
                            <Stack sx={{ padding: "20px 10px", boxShadow: "0 4px 16px 0 rgba(169, 184, 200, 0.15)", width: "920px" }}>
                                <Typography component={"h6"} sx={{ textAlign: "center", fontSize: "24px", color: "#495057" }}>
                                    {(coin == 'btc' ? coinInfo[0].name : coinInfo[1].name)}
                                </Typography>
                                <Typography sx={{ marginTop: "20px" }}>
                                    You have up to <strong>60:00</strong> minutes to complete the payment, otherwise the request will be closed.
                                </Typography>
                                <Typography>
                                    Send <strong>{(coin == 'btc' ? "BTC - Bitcoin" : "LTC - Litecoin")}</strong> to the address:
                                </Typography>
                                <Link href={"#"} style={{ textDecoration: "none" }}>
                                    <Typography color={"#d12c47c2"} fontSize={"20px"} fontWeight={"500"} marginTop={"5px"} component={"h6"}>
                                        <ContentCopyIcon />
                                        {(coin == 'btc' ? coinInfo[0].address : coinInfo[1].address)}
                                    </Typography>
                                </Link>

                                <Link href={"#"} style={{ textDecoration: "none" }}>
                                    <Typography color={"#d12c47c2"} fontSize={"20px"} fontWeight={"500"} component={"h6"} marginTop={"5px"}>
                                        <ContentCopyIcon />
                                        Any amount of currency
                                    </Typography>
                                </Link>
                                <Button className="btn-transaction" sx={{ textTransform:'capitalize', fontSize: '13px', margin: "auto", background: "#d12c47", paddingLeft: "10px", paddingRight: "10px", color: "white" }} onClick={() => coinDefault()}>
                                    Create new transaction
                                </Button>
                            </Stack>
                            <Stack sx={{ padding: "20px", boxShadow: "0 4px 16px 0 rgba(169, 184, 200, 0.15)" }}>
                                <Image src={(coin == 'btc' ? coinInfo[0].img : coinInfo[1].img)} width="200" height="200" alt="crypto" />
                            </Stack>
                        </Stack> : <Stack direction={"row"} sx={{ marginTop: "20px" }} >
                            <TextField
                                required
                                id="demo-helper-text-aligned"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                label="Amount $"
                                sx={{ marginRight: "5px" }}
                            />
                            <FormControl sx={{ width: "220px", marginRight: "20px" }}>
                                <InputLabel id="demo-simple-select-label">Select cryptocurrency</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={coin}
                                    label="Select cryptocurrency"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"btc"}>Bitcoin</MenuItem>
                                    <MenuItem value={"ltc"}>Litecoin</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                className="btn-pay"
                                size="large"
                                type="submit"
                                variant="contained"
                                onClick={(e) => update(e)}
                                sx={{ textTransform: 'capitalize' }}
                            >
                                $ Pay
                            </Button>
                        </Stack>)}
                </Stack>
                <Stack>
                    <Typography component={"h4"} sx={{ fontSize: "17px", textAlign: "center", color: "#495057" }}>
                        Level Info
                    </Typography>
                    <Stack padding={"16px 24px"}>
                        <LevelTable />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
