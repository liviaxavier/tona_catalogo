import { useCallback, useEffect, useState } from "react"
import categoryList from '../data/categoryList'
import { CategoryInterface } from "../interfaces/Category"
import CategoryCard from "./CategoryCard"
export default function CategoryList(){
    const [state, setState] = useState({categoryList})
    const getCategoryList = useCallback(() => {
        const list = categoryList
        setState({...state, categoryList: list})
    }, [])
    useEffect(() => {getCategoryList()}, [getCategoryList])
    return state.categoryList.map(
        item => <CategoryCard name={item.name} image={item.image} id={item.id} parent={item.parent} />
    )
}