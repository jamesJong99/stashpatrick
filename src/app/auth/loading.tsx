import { Grid } from "@mui/material"
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <img src="/assets/images/loader.svg" alt="loading" />
            </Grid>
        </Grid>
    )
}