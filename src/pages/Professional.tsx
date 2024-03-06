import { Link, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Chip, Grid, Typography } from "@mui/material";
import '../styles/professional.css'
import Search from "../components/Search";
import { FaGraduationCap, FaLocationDot, FaWhatsapp, FaGlobe, FaPeopleArrows } from "react-icons/fa6";

export default function ProfessionalPage({data}: DataBindInterface){
    const {professionalId} = useParams()
    const listaProfissionais = data.find((item: any) => item.id === 'profissionais') || []
    const listaCategorias = data.find((item: any) => item.id === 'categorias') || []
    let professional: any = {Presencial: false, Online:false, "contato divulgação": ""}, category
    if(listaProfissionais?.data && listaCategorias?.data){
        professional = listaProfissionais.data.find((item: any) => item.id === professionalId)
        category = listaCategorias.data.find((item: any) => item.name === professional.categoria )
    }
    const {Presencial, Online} = professional
    const tel = professional["Contato divulgação"]?.replace(/^(\+)|\D/g, "$1")
    const registro = professional["Registro Conselho"]
    if(!professional) return "loading..."
    return professional && <>
    <Search data={data} />
    <Grid sm={12} container gap={2} margin={2} >
        <Grid item sm={12} >
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Link
                    color="inherit"
                    to={`/category/${category?.id}`}
                >
                    {category?.name || ''}
                </Link>
                <Typography color="text.primary">{professional.Nome}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid container className="professional__information" marginTop={1} padding={2} spacing={2} minHeight={"calc(100vh - 370px)"}  alignContent={"start"}display={"flex"} justifyContent={"start"}>
            <Grid item sm={12} md={4} >
                <div className="professional__photo">
                    <img src={professional.Foto} />
                </div>
            </Grid>
            <Grid className="professional__details" item sm={12} md={8} >
                <h1>{professional.Nome}</h1>
                {registro && <p><FaGraduationCap color="var(--purple)"/> {registro}</p>}
                <p><FaLocationDot color="var(--purple)" />  {professional["Localização"]}</p>
                <p><FaWhatsapp color="var(--purple)"/> <a style={{textDecoration: 'underline'}} target="_blank" href={`https://wa.me/55${tel}`}>{professional["Contato divulgação"]}</a></p>
                <p> 
                    <Box component={"div"} className="professional__chips">
                        {Presencial === 's' && <Chip color="primary" variant="outlined" icon={<FaPeopleArrows color="var(--purple)"/>} label={"presencial"}  style={{padding: '.5em'}}/>}
                        {Online === 's' && <Chip color="primary" variant="outlined" icon={<FaGlobe />} label={"online"} style={{padding: '.5em'}}/>}
                    </Box>
                </p>
                <br></br>
            </Grid>
            <Grid item sm={12} >
                <h3>Descrição</h3>
                <p>{professional.Descricao}</p>
            </Grid>
        </Grid>
    </Grid>
    </>
}