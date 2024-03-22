import { Button, Grid, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/150e9b_c64f84cf34ad43049086d4a4ebc049f5~mv2.webp'
import {useAuth0  } from '@auth0/auth0-react';


export default function Search({data}: any){
    const { logout } = useAuth0();

    const [query, setQuery] = useState<string>()
    const [categories, setCategories] = useState<any>()
    const [professional, setProfessional] = useState<any>()
    const filterCategory = useCallback(() => {
        const listaCategorias = data.find((item: any) => item.id === 'categorias') || []
        if(listaCategorias?.data){
            const response = listaCategorias.data.filter((item: any) => item.name && item.name.toLowerCase().includes(query?.toLowerCase() || ''))
            setCategories(response)
        }
    }, [query])
    const filterProfessional = useCallback(() => {
        const listaProfissionais = data.find((item: any) => item.id === 'profissionais') || []
        if(listaProfissionais?.data){
            const response = listaProfissionais.data.filter((item: any) => item.Nome && item.Nome.toLowerCase().includes(query?.toLowerCase() || ''))
            setProfessional(response)
        }
    }, [query])
    useEffect(() => {
        filterCategory()
        filterProfessional()
    }, [filterCategory, filterProfessional])
    return <Grid className="searchComponent" container display={"flex"} alignItems={"center"} sm={12}>
        <Link to="/"><img height={"50px"} src={logo} /></Link>
        <TextField style={{width: '100%', maxWidth: '500px'}}  id="search" label="O que você procura?" variant="outlined" 
            value={query}
                onChange={e => { setQuery(e.target.value) }} 
            />
        <Button style={{marginLeft: 'auto'}} onClick={() => logout()} size="large" color="primary" variant='contained'>
          Sair
        </Button>
        { query && categories && SearchResponse(categories, setQuery) }
        { query && professional && SearchResponse(professional, setQuery)}
    </Grid>
}

function SearchResponse(list: any, fn: any){
    return <List className="search__list" sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {list.map((item: any) => {
            const categoria = item['categoria'] || ''
            const localizacao = item['Localização'] || ''
        return <ListItem>
            <Link onClick={() => fn()} className="search__result" to={item.categoria ? `/professional/${item.id}` : `/category/${item.id}`}>
                <ListItemButton>
                    <ListItemText primary={item.Nome || item.name} secondary={localizacao && categoria ? `${categoria} - ${localizacao}` : ''} />
                </ListItemButton>
            </Link>
        </ListItem>

        } 
        ) }
  </List>
}