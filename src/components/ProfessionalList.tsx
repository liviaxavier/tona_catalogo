import { Breadcrumbs, CircularProgress, Grid, Typography } from "@mui/material"
import ProfessionalCard from "./ProfessionalCard"
import { Link } from "react-router-dom"
import Search from "./Search"
import { useEffect, useState } from "react"

interface InnerDataBindInterface {
    data: any,
    categoryId: any
}
export default function ProfessionalList({ data, categoryId }: InnerDataBindInterface) {
    const sheet = data.profissionais // data.find((item: any) => item.id === 'profissionais')
    const listaCategorias = data.categorias // data.find((item: any) => item.id === 'categorias')

    const [professionalList, setProfessionalList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryDetails, setCategoryDetails] = useState({ name: '' })
    const [emptyList, setEmptyList] = useState(false)

    useEffect(() => {
        if (listaCategorias) {
            setCategoryDetails(listaCategorias.data.find((item: any) => item.id === categoryId))
        }
    }, [listaCategorias?.data])

    useEffect(() => {
        if (categoryDetails && sheet?.data[0]) {
            const list = sheet?.data.filter((item: any) => item["Nome"] && item.categoria === categoryDetails.name)
            setProfessionalList(list)
            setIsLoading(false)
            if (list) {
                console.log(list)
                if (list.length === 0) {
                    setEmptyList(true)
                } else {
                    setEmptyList(false)
                }

            }
        }
    }, [sheet?.data, categoryDetails])

    if (isLoading) {
        return <div style={{
            height: '70vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress />
        </div>
    }
    return <Grid item xs={12}>
        <Search data={data} />
        <Grid sm={12} minHeight={"calc(100vh - 275px)"} padding={"1em"}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Home
                </Link>
                <Typography color="text.primary">{categoryDetails?.name}</Typography>
            </Breadcrumbs>
            {!isLoading && <Grid display={"flex"} flexWrap={"wrap"} marginTop={1}>
                <h1 style={{ width: '100%', marginLeft: '.5em' }}>{categoryDetails?.name}</h1>
                {emptyList && <p>Não há profisisonais nesta categoria</p>}
                {!emptyList &&
                    professionalList.sort((a: any, b: any) => a.Nome.localeCompare(b.Nome)).map(
                        (item: any) => <ProfessionalCard item={item} category={categoryDetails} />
                    )
                }

            </Grid>}
        </Grid>
    </Grid>
}