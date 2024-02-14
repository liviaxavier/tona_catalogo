import { useCallback, useEffect, useState } from "react"
import categoryList from '../data/categoryList'
import CategoryCard from "./CategoryCard"
import {Grid } from "@mui/material"
export default function CategoryList(){
    const [state, setState] = useState({categoryList})
    const getCategoryList = useCallback(() => {
        const list = categoryList
        setState({...state, categoryList: list})
    }, [])
    useEffect(() => {getCategoryList()}, [getCategoryList])
    return  <Grid container margin={"auto"} md={8} spacing={2} padding={4}>
    {state.categoryList.map(
        item => <CategoryCard name={item.name} image={item.image} id={item.id} parent={item.parent} />
    )}
    </Grid>
}