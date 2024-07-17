"use client"
import Link from "next/link";
import { Stack, Box, Typography } from "@mui/material"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { TextField, FormControl, MenuItem, InputLabel, Button } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import * as React from 'react';

import LevelTable from "./LevelTable";

export default function DashboardView() {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const update = (e: any) => {

    }
    return (
        <Stack
            sx={{ marginTop: '10px', paddingX: "20px", width: "100%" }}
        >
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
            <Stack sx={{ paddingLeft: "20px" }}>
                <Typography>
                    Wallet replenishment
                </Typography>
                <Stack direction={"row"} >
                    <TextField
                        size="small"
                        id="demo-helper-text-aligned"
                        label="Amount $"
                        sx={{ marginRight: "5px" }}
                    />
                    <FormControl sx={{ width: "150px", marginRight: "20px" }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button

                        className="btn-register"
                        type="submit"
                        variant="contained"
                        onClick={(e) => update(e)}
                        sx={{ textTransform: 'capitalize' }}
                    >
                        $ Pay
                    </Button>
                </Stack>
            </Stack>
            <Stack>
                <Typography component={"h4"} sx={{ fontSize: "20px", textAlign:"center" }}>
                    Level Info
                </Typography>
                <LevelTable />
            </Stack>
        </Stack>

    )
}
