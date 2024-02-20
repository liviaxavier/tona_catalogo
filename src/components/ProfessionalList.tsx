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
    return  <>
    <Search />
    <Grid container sm={12} padding={2} display={"flex"} flexDirection={"column"}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Typography color="text.primary">{state.categoryDetails?.name}</Typography>
            </Breadcrumbs>
        <Grid container spacing={2} marginTop={1}>
            <h1 style={{width: '100%', marginLeft: '.5em'}}>{state.categoryDetails?.name}</h1>
            {state.professionalList.length > 0 ? state.professionalList.map(
                item => <ProfessionalCard  item={item} />
            ) : <p>Não há profisisonais nesta categoria</p>}

        </Grid>
    </Grid>
    </>
}