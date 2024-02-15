import { useCallback, useEffect, useState } from "react"
import {Breadcrumbs, Grid, Typography } from "@mui/material"
import professionalList from '../data/professionalList'
import ProfessionalCard from "./ProfessionalCard"
import { ProfessionalInterface } from "../interfaces/Professional"
import { Link } from "react-router-dom"
import categoryList from "../data/categoryList"
import Search from "./Search"

interface ProfessionalListInterface {
    category: any
}
export default function ProfessionalList({category}: ProfessionalListInterface){
    const categoryDetails = {id: '', name: '', image: '', parent: '' }
    const [state, setState] = useState({professionalList, categoryDetails})
    const getProfessionalList = useCallback(() => {
        const list = professionalList
        const filteredProfessionalList= list.filter((item: ProfessionalInterface) => item.categories.includes(category))
        const categoryFound: any = categoryList.find(item => item.id === category)
        setState({...state, professionalList: filteredProfessionalList, categoryDetails: categoryFound})

    }, [category])
    useEffect(() => {getProfessionalList()}, [getProfessionalList])
    return  <Grid container sm={12} md={8} margin={"auto"} spacing={2} padding={4}>
            <Search />
        <Grid item sm={12} marginTop={"80px"} >
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    home
                </Link>
                <Typography color="text.primary">{state.categoryDetails.name}</Typography>
            </Breadcrumbs>
        </Grid>
        <Grid item sm={12} spacing={2} >
            <h1>{state.categoryDetails.name}</h1>
        </Grid>
        <Grid container spacing={2} >
            {state.professionalList.length > 0 ? state.professionalList.map(
                item => <ProfessionalCard  item={item} />
            ) : <p>Não há profisisonais nesta categoria</p>}

        </Grid>
    </Grid>
}