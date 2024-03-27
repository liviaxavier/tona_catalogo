// import { useCallback, useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import { Grid } from "@mui/material"
import Search from "./Search"
// import useGoogleSheets from 'use-google-sheets';
import {CategoryInterface} from '../interfaces/Category'
import {DataInterface} from '../interfaces/General'
interface CategoryListInterface {
    list: CategoryInterface[]
    data: DataInterface
}
export default function CategoryList({list, data}: CategoryListInterface) {
    return <>
        <Search data={data} />
       {list &&  <Grid style={{padding: '2em 1em'}} container spacing={2}>

            {list.map(
                (item:any) => <CategoryCard key={item.id} name={item.name} image={item.image} id={item.id} parent={item.parent} />
            )}
        </Grid>}
    </>
}