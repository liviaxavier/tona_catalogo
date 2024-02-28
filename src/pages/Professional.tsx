import { Link, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Chip, Grid, Typography } from "@mui/material";
import '../styles/professional.css'
import Search from "../components/Search";
import { MdCamera, MdFace } from "react-icons/md";

export default function ProfessionalPage({data}: DataBindInterface){
    const {professionalId} = useParams()
    const listaProfissionais = data.find((item: any) => item.id === 'profissionais') || []
    const listaCategorias = data.find((item: any) => item.id === 'categorias') || []

    const professional = listaProfissionais.data.find((item: any) => item.id === professionalId)
    const category = listaCategorias.data.find((item: any) => item.name === professional.categoria )
    const {Presencial, Online} = professional
    const tel = professional["Contato divulgação"].replace(/^(\+)|\D/g, "$1")
    const registro = professional["Registro Conselho"]

    if(!professional) return "loading..."
    return professional && <>
    <Search data={data} />
    <Grid sm={12} margin={"auto"} container spacing={2}>
        <Grid item sm={12} >
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Link
                    color="inherit"
                    to={`/category/${category.id}`}
                >
                    {category?.name || ''}
                </Link>
                <Typography color="text.primary">{professional.Nome}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item sm={12} md={4} >
            <div className="professional__photo">
                <img src={professional.Foto} />
            </div>
        </Grid>
        <Grid item sm={12} md={8}>
            <h1>{professional.Nome}</h1>
            {registro && <p>Registro Conselho: {registro}</p>}
            <p>Localização: {professional["Localização"]}</p>
            <p>Telefone: <a target="_blank" href={`https://wa.me/55${tel}`}>{professional["Contato divulgação"]}</a></p>
            <p>
                Modalidade: 
                <Box component={"div"} className="professional__chips">
                    {Presencial === 's' && <Chip icon={<MdFace/>} label={"presencial"} />}
                    {Online === 's' && <Chip icon={<MdCamera />} label={"online"} />}
                </Box>
            </p>
            <br></br>
        </Grid>
        <Grid item sm={12}>
            <h3>Descrição</h3>
            <p>{professional.Descricao}</p>
        </Grid>
    </Grid>
    </>
}