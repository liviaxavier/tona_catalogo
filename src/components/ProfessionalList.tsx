import {Breadcrumbs, Grid, Typography } from "@mui/material"
import ProfessionalCard from "./ProfessionalCard"
import { Link } from "react-router-dom"
import Search from "./Search"

interface InnerDataBindInterface {
    data: any,
    categoryId: any
}
export default function ProfessionalList({data, categoryId}: InnerDataBindInterface){
    const sheet = data.profissionais // data.find((item: any) => item.id === 'profissionais')
    const listaCategorias = data.categorias // data.find((item: any) => item.id === 'categorias')
    let categoryDetails: any, professionalList
    if(listaCategorias?.data && sheet?.data){
        categoryDetails = listaCategorias.data.find((item: any) => item.id === categoryId)
        professionalList = sheet?.data.filter((item: any) => item["Nome"] && item.categoria === categoryDetails.name) || []
    }
    if(!data) return "Loading..."
    return  <Grid item xs={12}>
    <Search data={data} />
    <Grid sm={12} minHeight={"calc(100vh - 275px)"} padding={"1em"}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Typography color="text.primary">{categoryDetails?.name}</Typography>
            </Breadcrumbs>
        <Grid display={"flex"} flexWrap={"wrap"} marginTop={1}>
            <h1 style={{width: '100%', marginLeft: '.5em'}}>{categoryDetails?.name}</h1>
            {professionalList && professionalList.length > 0 ? professionalList.sort((a: any, b: any) => a.Nome.localeCompare(b.Nome)).map(
                (item: any) => <ProfessionalCard  item={item} category={categoryDetails} />
            ) : <p>Não há profisisonais nesta categoria</p>}

        </Grid>
    </Grid>
    </Grid>
}