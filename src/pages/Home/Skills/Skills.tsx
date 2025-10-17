import { Container, Grid, Typography } from "@mui/material"
import { GrJava } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiReactbootstrap } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {

    return (
        <div>
            <Container>
                <Grid container spacing={3} display={"flex"} justifyContent={"center"} pr={5} pl={5} pb={5}>
                    <Typography variant="h2" width={"100%"} textAlign={"center"}>
                        Skills
                    </Typography>
                    <Grid container>
                        <Typography variant="subtitle1"> <GrJava /> Java </Typography>
                        <Typography variant="subtitle1"> <FaPython /> Python </Typography>
                        <Typography variant="subtitle1"> <IoLogoJavascript /> JavaScript </Typography>
                        <Typography variant="subtitle1"> <FaReact /> React </Typography>
                        <Typography variant="subtitle1"> <FaHtml5 /> HTML </Typography>
                        <Typography variant="subtitle1"> <FaCss3 /> CSS </Typography>
                        <Typography variant="subtitle1"> <PiFileCSharpDuotone /> C# </Typography>
                        <Typography variant="subtitle1"> <SiReactbootstrap /> ReactBootstrap </Typography>
                        <Typography variant="subtitle1"> <FaBootstrap /> Bootstrap </Typography>
                        <Typography variant="subtitle1"> <RiTailwindCssFill /> Talwind CSS </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Skills