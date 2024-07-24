// import { useCallback, useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import { CircularProgress, Grid } from "@mui/material"
import Search from "./Search"
// import useGoogleSheets from 'use-google-sheets';
import {CategoryInterface} from '../interfaces/Category'
import {DataInterface} from '../interfaces/General'
interface CategoryListInterface {
    list: CategoryInterface[]
    data: DataInterface
}
export default function CategoryList({list, data}: CategoryListInterface) {
    return <Grid item xs={12}>
        <Search data={data} />
        {
            list.length == 0 && <div style={{
                height: '50vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <CircularProgress />
            </div>
            
        }
       {list &&  <Grid display={"flex"} flexWrap={"wrap"} padding={"1em"}>

            {list.map(
                (item:any) => <CategoryCard key={item.id} name={item.name} image={item.image} id={item.id} parent={item.parent} />
            )}
        </Grid>}
    </Grid>
}