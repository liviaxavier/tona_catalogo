import {useAuth0  } from '@auth0/auth0-react';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';


export default function Auth(){
    const { loginWithRedirect } = useAuth0();

    return <Grid container display={"flex"} alignContent={"center"} justifyContent={"center"} height={"calc(100vh - 265px)"} >
    <Card sx={{ maxWidth: 500 }} elevation={5} style={{minHeight:"20vh", display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Catálogo Clube Tona
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Realize seu login para ter acesso completo ao catálogo de profissionais!
          </Typography>
        </CardContent>
      <CardActions>
        <Button style={{marginLeft: 'auto'}} fullWidth onClick={() => loginWithRedirect()} size="large" color="primary" variant='contained'>
          Entrar
        </Button>
      </CardActions>
    </Card>

    </Grid>
}