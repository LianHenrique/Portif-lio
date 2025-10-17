import { Container, Grid, Typography } from "@mui/material"

function About() {

    return (
        <div>
            <Container>
                <Grid container spacing={3} p={5}>
                    <Typography variant="h3" width={"100%"} textAlign={"center"}>
                        About me
                    </Typography>
                    <Typography textAlign={"justify"}>
                        Sou estudante de Análise e Desenvolvimento de Sistemas pela Anhanguera, com formação técnica em Desenvolvimento de Sistemas (SENAI – Vitória) e Eletrotécnica. Tenho experiência prática em Java, JavaScript, React.js, HTML, CSS, C#, SQL, além da utilização de APIs REST, Bootstrap, Tailwind CSS e fundamentos de Programação Orientada a Objetos (POO).
                    </Typography>
                    <Typography textAlign={"justify"}>
                        Atuei em projetos full stack, com domínio no desenvolvimento web e na integração entre front-end e back-end. Utilizo Git para controle de versão e trabalho em equipe.
                    </Typography>
                    <Typography textAlign={"justify"}>
                        Possuo perfil proativo e comprometido, com experiência anterior em atendimento ao cliente e conhecimento técnico na área elétrica. Estou em constante aprendizado e busco aplicar meus conhecimentos em projetos que tragam impacto e evolução profissional.
                    </Typography>
                </Grid>
            </Container>
        </div>
    )
}

export default About