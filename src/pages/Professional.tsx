import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import professionalList from '../data/professionalList'
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import '../styles/professional.css'

export default function ProfessionalPage(){
    const {professionalId} = useParams()
    const [state, setState] = useState<any>({})
    const {professional} = state
    const getProfessional = useCallback(() => {
        const professional = professionalList.find(item => item.id === professionalId)
        setState({...state, professional})
    }, [])
    useEffect(() => {getProfessional()}, [getProfessional])
    if(!professional) return "loading..."
    return professional && <Grid sm={12} md={8} container margin={"auto"} spacing={2} padding={4}>
        <Grid item sm={12} >
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    home
                </Link>
                <Link
                    color="inherit"
                    to="/"
                >
                    Categoria
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
}