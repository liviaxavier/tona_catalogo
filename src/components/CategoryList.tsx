// import { useCallback, useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import { Grid } from "@mui/material"
import Search from "./Search"
// import useGoogleSheets from 'use-google-sheets';
import {CategoryInterface} from '../interfaces/Category'
interface CategoryListInterface {
    list: CategoryInterface[]
}
export default function CategoryList({list}: CategoryListInterface) {
    console.log(list)
    // let initialCategoryList = list
    // const [state] = useState({ categoryList: list })

    // const { data } = useGoogleSheets({
    //     apiKey: import.meta.env.VITE_API_KEY,
    //     sheetId: import.meta.env.VITE_SPREADSHEET_ID
    // });
    
    // const getCategoryList = useCallback( async () => {
    //     const categorias = data.find(item => item.id === 'categorias')
    //     const gsheetsCategoryList: any = categorias?.data.filter((item: any) => item.name)
    //     setState({ ...state, categoryList: gsheetsCategoryList })
    // }, [data])

    // useEffect(() => { getCategoryList() }, [getCategoryList])

    return <Grid container margin={"auto"} spacing={2} padding={4}>
        <Search />
       {list &&  <Grid container padding={4} spacing={2} marginTop={"50px"} >

            {list.map(
                (item:any) => <CategoryCard key={item.id} name={item.name} image={item.image} id={item.id} parent={item.parent} />
            )}
        </Grid>}
    </Grid>
}

// function GSheets(){

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error!</div>;
//     }

//     return <div>{JSON.stringify(data)}</div>;
// }