import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import professionalList from '../data/professionalList'
import categoryList from '../data/categoryList'
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import '../styles/professional.css'
import Search from "../components/Search";

export default function ProfessionalPage(){
    const {professionalId} = useParams()
    const [state, setState] = useState<any>({})
    const {professional} = state
    const getProfessional = useCallback(() => {
        const professional = professionalList.find(item => item.id === professionalId)
        const categoria = categoryList.find(item => professional?.categories[0] === item.id)
        setState({...state, professional, categoria})
    }, [])
    useEffect(() => {getProfessional()}, [getProfessional])
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
                    to={`/category/${state.categoria.id}`}
                >
                    {state.categoria?.name || ''}
                </Link>
                <Typography color="text.primary">{professional.name}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item sm={12} >
            <div className="professional__photo">
                <img src={professional.image} />
            </div>
        </Grid>
        <Grid item sm={12}>
            <h1>{professional.name}</h1>
            <p>{professional.description}</p>
        </Grid>
    </Grid>
    </>
}