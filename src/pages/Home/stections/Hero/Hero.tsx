import { styled } from "@mui/material/styles"
import Avatar from "../../../../assets/images/Avatar.svg"
import { Button, Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "#161616ff",
        height: "100vh"
    }))

    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "100%"
    }))

    return (
        <div>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImage src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h1" textAlign="center" color="primary">Lian Henrique</Typography>
                            <Typography variant="h2" textAlign="center" color="primary">I'm a systems developer</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon /> Download cv
                                    </Button>
                                </Grid>
                                <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon /> Contact me
                                    </Button>
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
