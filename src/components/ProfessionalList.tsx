import {Breadcrumbs, Grid, Typography } from "@mui/material"
import ProfessionalCard from "./ProfessionalCard"
import { Link } from "react-router-dom"
import Search from "./Search"

interface InnerDataBindInterface {
    data: any,
    categoryId: any
}
export default function ProfessionalList({data, categoryId}: InnerDataBindInterface){
    const professionalList = data[categoryId]?.data || []
    const categoryDetails = {name: data[categoryId]?.id || "", id: categoryId}
    if(!data) return "Loading..."
    return  <>
    <Search />
    <Grid container sm={12} padding={2} display={"flex"} flexDirection={"column"}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link  color="inherit" to="/">
                    Home
                </Link>
                <Typography color="text.primary">{categoryDetails?.name}</Typography>
            </Breadcrumbs>
        <Grid container spacing={2} marginTop={1}>
            <h1 style={{width: '100%', marginLeft: '.5em'}}>{categoryDetails?.name}</h1>
            {professionalList.length > 0 ? professionalList.filter((item: any) => item["Nome"] && item["aceite"] === 's').map(
                (item: any) => <ProfessionalCard  item={item} category={categoryDetails} />
            ) : <p>Não há profisisonais nesta categoria</p>}

        </Grid>
    </Grid>
    </>
}