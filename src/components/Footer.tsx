import { Grid } from "@mui/material";
import logo from '../assets/tona_logo_completa_3 1.png'
import '../styles/footer.css'
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer(){
    return <Grid container className="footer" spacing={4} padding={4}>
        <Grid className="footer__brand" item sm={12} md={5}>
            <img height={"80px"} src={logo} />
            <p>Projeto de impacto social para lésbicas</p>
        </Grid>
        <Grid className="footer__socialMedia" item sm={12} md={5}>
            <h4>REDES SOCIAIS</h4>
            <a href="https://www.instagram.com/clubetona/" target="_blank" rel="noopener noreferrer"><FaInstagram fontSize={"1.2em"}/> @clubetona</a>
            <a href="https://www.linkedin.com/company/clube-tona?originalSubdomain=br" target="_blank" rel="noopener noreferrer"><FaLinkedin fontSize={"1.2em"}/> LinkedIn</a>
            <a href="https://wa.me/message/W63NMCUWPSLGA1" target="_blank" rel="noopener noreferrer"><FaWhatsapp fontSize={"1.2em"}/> WhatsApp</a>
        </Grid>
    </Grid>
}