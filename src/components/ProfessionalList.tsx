import { useCallback, useEffect, useState } from "react"
import {Grid } from "@mui/material"
import professionalList from '../data/professionalList'
import ProfessionalCard from "./ProfessionalCard"

interface ProfessionalListInterface {
    category: any
}
export default function ProfessionalList({category}: ProfessionalListInterface){
    const [state, setState] = useState({professionalList})
    const getProfessionalList = useCallback(() => {
        const list = professionalList
        setState({...state, professionalList: list})
    }, [])
    useEffect(() => {getProfessionalList()}, [getProfessionalList])
    return  <Grid container spacing={2} padding={4}>
        
    {state.professionalList.filter(item => item.categories.includes(category)).map(
        item => <ProfessionalCard name={item.name} image={item.image} id={item.id} categories={item.categories} />
    )}
    </Grid>
}