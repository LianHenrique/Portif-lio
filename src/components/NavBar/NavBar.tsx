import { styled } from "@mui/material/styles"
import { AppBar, MenuItem, Toolbar, Typography } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About me</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar