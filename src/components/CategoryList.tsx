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
    return <>
        <Search />
       {list &&  <Grid style={{paddingTop: '2em'}} container spacing={2}>

            {list.map(
                (item:any) => <CategoryCard key={item.id} name={item.name} image={item.image} id={item.id} parent={item.parent} />
            )}
        </Grid>}
    </>
}