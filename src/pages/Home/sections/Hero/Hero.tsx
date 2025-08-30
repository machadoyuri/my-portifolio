import { Container, styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar01.jpg"
import { Button, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import Grid from "@mui/material/Grid"
import EmailIcon from '@mui/icons-material/Email';
//37

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))
    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography color="primary" variant="h1" textAlign="center">Yuri Machado</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">i'm Web Developer</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        DOWNLOAD CV
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        CONTACT ME
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
