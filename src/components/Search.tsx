import { Box, Grid, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import professionalList from '../data/professionalList'
import categoryList from '../data/categoryList'
import { Link } from "react-router-dom";
import logo from '../assets/150e9b_c64f84cf34ad43049086d4a4ebc049f5~mv2.webp'

export default function Search(){
    const [query, setQuery] = useState<string>()
    const [categories, setCategories] = useState<any>()
    const [professional, setProfessional] = useState<any>()
    const filterCategory = useCallback(() => {
        const response = categoryList.filter(item => item.name.toLowerCase().includes(query?.toLowerCase() || ''))
        setCategories(response)
    }, [query])
    const filterProfessional = useCallback(() => {
        const response = professionalList.filter(item => item.name.toLowerCase().includes(query?.toLowerCase() || ''))
        setProfessional(response)
    }, [query])
    useEffect(() => {
        filterCategory()
        filterProfessional()
    }, [filterCategory, filterProfessional])
    return <Grid className="searchComponent" item sm={12}>
        <Box display={"flex"} alignItems={"center"} >
            <img height={"50px"} src={logo} />
            <TextField id="search" label="O que você procura?" fullWidth variant="outlined" 
            value={query}
                onChange={e => { setQuery(e.target.value) }} 
            />
        </Box>
        { query && categories && SearchResponse(categories, setQuery) }
        { query && professional && SearchResponse(professional, setQuery)}
    </Grid>
}

function SearchResponse(list: any, fn: any){
    return <List className="search__list" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {list.map((item: any) => <ListItem>
            <Link onClick={() => fn()} className="search__result" to={item.categories ? `/professional/${item.id}` : `/category/${item.id}`}>
                <ListItemButton>
                    <ListItemText primary={item.name} secondary={item.location || ''} />
                </ListItemButton>
            </Link>
    </ListItem>) }
  </List>
}