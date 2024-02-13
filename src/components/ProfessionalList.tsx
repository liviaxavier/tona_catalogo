import { useCallback, useEffect, useState } from "react"
import {Grid } from "@mui/material"
import professionalList from '../data/professionalList'
import ProfessionalCard from "./ProfessionalCard"
import { ProfessionalInterface } from "../interfaces/Professional"

interface ProfessionalListInterface {
    category: any
}
export default function ProfessionalList({category}: ProfessionalListInterface){
    const [state, setState] = useState({professionalList})
    const getProfessionalList = useCallback(() => {
        const list = professionalList
        setState({...state, professionalList: list.filter((item: ProfessionalInterface) => item.categories.includes(category))})
    }, [])
    useEffect(() => {getProfessionalList()}, [getProfessionalList])
    return  <Grid container spacing={2} padding={4}>
        
    {state.professionalList.length > 0 ? state.professionalList.map(
        item => <ProfessionalCard  item={item} />
    ) : <p>Não há profisisonais nesta categoria</p>}
    </Grid>
}