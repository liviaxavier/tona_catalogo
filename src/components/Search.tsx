import { Button, Grid, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/150e9b_c64f84cf34ad43049086d4a4ebc049f5~mv2.webp'
import { useAuth0 } from '@auth0/auth0-react';
import DownloadMemberCard from "./DownloadMemberCard";
import Asaas from "../services/Asaas";
// import Asaas from "../services/Asaas";


export default function Search({ data }: any) {
    const user: any = data.user;
    const { logout } = useAuth0();

    const [query, setQuery] = useState<string>()
    const [categories, setCategories] = useState<any>()
    const [professional, setProfessional] = useState<any>()
    const [error, setError] = useState<any>();
    const [member, setMember] = useState<any>();

    const filterCategory = useCallback(() => {
        const listaCategorias = data.categorias//data.find((item: any) => item.id === 'categorias') || []
        if (listaCategorias?.data) {
            const response = listaCategorias.data.filter((item: any) => item.name && item.name.toLowerCase().includes(query?.toLowerCase() || ''))
            setCategories(response)
        }
    }, [query])
    const filterProfessional = useCallback(() => {
        const listaProfissionais = data.profissionais // data.find((item: any) => item.id === 'profissionais') || []
        if (listaProfissionais?.data) {
            const response = listaProfissionais.data.filter((item: any) => item.Nome && item.Nome.toLowerCase().includes(query?.toLowerCase() || ''))
            setProfessional(response)
        }
    }, [query])
    useEffect(() => {
        filterCategory()
        filterProfessional()
    }, [filterCategory, filterProfessional])

    const getUser = useCallback(async () => {
        try {
            const asaasData = await Asaas.getUser({email: user?.email})
            setMember({...user, ...asaasData.data})
        } catch (error) {
            setError('Erro ao buscar usuário')
        }
    }, [user])

    useEffect(() => {
        getUser()
    }, [getUser])
    if(error){
        return <p>{error}</p>
    }
    return member && <Grid className="searchComponent" container alignItems={"center"} xs={12}>
        <Grid item xs={2} marginTop={2}>
            <Link to="/"><img id={"logo"} height={"50px"} src={logo} /></Link>
        </Grid>
        <Grid item xs={10} style={{ display: 'flex', justifyContent: 'end', gap: '1em' }} marginTop={2}>
            <DownloadMemberCard member={member} />
            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} size="large" color="primary" variant='outlined'>
                Sair
            </Button>
        </Grid>
        <Grid item xs={12} md={12} marginTop={2} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextField style={{ width: '100%', margin: 'auto' }} id="search" label="O que você procura?" variant="outlined"
                value={query}
                onChange={e => { setQuery(e.target.value) }}
            />
        </Grid>
        <Grid item xs={12} md={12} marginTop={2}>
            {query && categories && SearchResponse(categories, setQuery)}
            {query && professional && SearchResponse(professional, setQuery)}
        </Grid>
    </Grid>
}

function SearchResponse(list: any, fn: any) {
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
        )}
    </List>
}