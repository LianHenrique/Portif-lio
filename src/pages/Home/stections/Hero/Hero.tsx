import { styled } from "@mui/material/styles"
import Avatar from "../../../../assets/images/Avatar.svg"
import { Box, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

function Hero() {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0"
        },
    }))

    const StyledImage = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "100%",
        // border: `3px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <div>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2} alignItems={"center"}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={"100"} right={"0"}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position={"relative"} textAlign={"center"}>
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h1" textAlign="center" color="primary.contrastText">Lian Henrique</Typography>
                            <Typography variant="h2" textAlign="center" color="primary.contrastText">I'm a systems developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon /> 
                                        <Typography>Download cv</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <EmailIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </div>
    )
}

export default Hero
