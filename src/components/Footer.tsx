import { Grid } from "@mui/material";
import logo from '../assets/tona_logo_completa_3 1.png'
import '../styles/footer.css'
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import evoe_logo_fff from '../assets/evoe_logo_2020_fff.svg'
import tangerina_logo_fff from '../assets/logo_tangerina_white.png'

export default function Footer(){
    const image_width = "100px"
    return <Grid container className="footer" padding={4}>
        <Grid className="footer__brand" item sm={12} md={4}>
            <img height={"80px"} src={logo} />
            <a href="https://www.clubetona.com.br/_files/ugd/150e9b_b7071276b1cf47c6b8b9ac441bca46e6.pdf" target="_blank" rel="noopener noreferrer">termos de serviço</a>
        </Grid>
        <Grid className="footer__socialMedia" item sm={12} md={4}>
            <h4>REDES SOCIAIS</h4>
            <a href="https://www.instagram.com/clubetona/" target="_blank" rel="noopener noreferrer"><FaInstagram fontSize={"1.2em"}/> @clubetona</a>
            <a href="https://www.linkedin.com/company/clube-tona?originalSubdomain=br" target="_blank" rel="noopener noreferrer"><FaLinkedin fontSize={"1.2em"}/> LinkedIn</a>
            <a href="https://wa.me/message/W63NMCUWPSLGA1" target="_blank" rel="noopener noreferrer"><FaWhatsapp fontSize={"1.2em"}/> WhatsApp</a>
        </Grid>
        <Grid container sm={12} md={4} alignContent={"start"} className="footer__partners">
            <Grid item sm={12}>
                <p style={{margin:'0', fontSize:'12px'}}>Em parceria com</p>
                <hr></hr>
            </Grid>
            <Grid item sm={12} md={6}>
                <a href="https://tangerinatech.com/" target="_blank" rel="noopener noreferrer">
                    <img src={tangerina_logo_fff} width={image_width}/>
                </a>
            </Grid>
            <Grid item sm={12} md={6}>
                <a href="https://evoe.cc/" target="_blank" rel="noopener noreferrer">
                    <img src={evoe_logo_fff} width={image_width}/>
                </a>
            </Grid>
        </Grid>
    </Grid>
}