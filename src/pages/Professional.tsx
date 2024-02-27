import { Link, useParams } from "react-router-dom";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import '../styles/professional.css'
import Search from "../components/Search";

export default function ProfessionalPage({data}: DataBindInterface){
    const {professionalId} = useParams()
    let categoryId = professionalId?.split("p")[0].replace("c","")
    const category = data[Number(categoryId)]
    const professionalCode = professionalId?.split("p")[1]
    const professional = category?.data[Number(professionalCode) - 1] || {}
    if(!professional) return "loading..."
    return professional && <>
    <Search />
    <Grid sm={12} container  padding={4}>
        <Grid item sm={12} >
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Link
                    color="inherit"
                    to={`/category/${categoryId}`}
                >
                    {category?.id || ''}
                </Link>
                <Typography color="text.primary">{professional.Nome}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item sm={12} >
            <div className="professional__photo">
                <img src={professional.Foto} />
            </div>
        </Grid>
        <Grid item sm={12}>
            <h1>{professional.Nome}</h1>
            <p>{professional.Descricao}</p>
            <br></br>
            <a target="_blank" href={`https://wa.me/55${professional["Contato divulgação"]}`}>{professional["Contato divulgação"]}</a>
        </Grid>
    </Grid>
    </>
}