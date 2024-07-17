import React from 'react';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import { Typography } from '@mui/material';

const DashboardModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false)
    };
    React.useEffect(()=> {
    }, [open])
    return (
        <div>
            {(open?<Modal
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
                keepMounted
                style={{ textAlign: "center" }}
            >
                <ModalContent sx={{ width: "60%" }}>
                    <h4 id="keep-mounted-modal-title" className="modal-title" style={{ textAlign: "center" }}>
                        Alert/Attention/Notice
                    </h4>
                    <Typography color={"#69AA46"} textAlign="center" marginTop={"20px"} style={{ textDecoration: "underline" }}>Buying POS/MERCHANT Accounts. Sellers contact us in tickets</Typography>
                    <Typography color={"#393939"} textAlign="center" marginTop={"20px"}>We are getting many tickets from users claiming their credits got used or their password got changed.</Typography>
                    <Typography color={"#393939"} textAlign="center" marginTop={"20px"}>The ONLY reason for it to happen is because users visit scam domains that look similar to luxchecker and sharing their login credentials with them and once they get your login credentials they will either use your credits OR change your password.</Typography>
                    <Typography color={"#393939"} textAlign="center" marginTop={"20px"}>We have been giving alot of warnings on our forums-threads and our login page still people are falling for this trap.</Typography>
                    <Typography fontSize={"16px"} fontWeight={700} textAlign="center" marginTop={"2px"}>NEVER USE GOOGLE OR ANY SEARCH ENGINE TO SEARCH FOR LUXCHECKER DOMAIN.</Typography>
                    <Typography color={"#393939"} textAlign="center" marginTop={"20px"}>There are the following three (clearnet) domain and one (tor) domain that belongs to us</Typography>
                    <Typography fontSize={"16px"} fontWeight={700} textAlign="center" marginTop={"2px"}>1: luxchecker.pm</Typography>
                    <Typography fontSize={"16px"} fontWeight={700} textAlign="center" marginTop={"2px"}>2: luxchecker.pw
                    </Typography>
                    <Typography fontSize={"16px"} fontWeight={700} textAlign="center" marginTop={"2px"}>3: luxchecker.vc</Typography>
                    <Typography fontSize={"16px"} fontWeight={700} textAlign="center" marginTop={"2px"}>4: luxchkr35xj7gis6u4xu67f4theumzhbw43pebz6lc6qsy7ahkzfmzqd.onion (TOR v3)</Typography>
                    <Typography color={"#393939"} textAlign="center" marginTop={"20px"}>All other domains are SCAM/FRAUD. You will lose your account and your credits if you enter your login credentials into them.</Typography>
                </ModalContent>
            </Modal>:<></>)}
        </div>
    );
}

const Backdrop:React.FC = (props) => {
    const { open, className, ...other }:any = props;
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            {...other}
        />
    );
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Modal = styled(BaseModal)(`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.base-Modal-hidden {
    visibility: hidden;
  }
`);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

const TriggerButton = styled('button')(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);

export default DashboardModal