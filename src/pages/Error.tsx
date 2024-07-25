import { Button, Grid } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Grid container height={'70vh'} alignItems={'center'} justifyContent={'center'} >
      <Grid item xs={12} height={'10vh'}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

      </Grid>
      <Grid xs={12}>
        <Link to="/" className='card-button'>
          <Button
            style={{ width:'100%' }}
            size="large" color="primary" variant='text'>
            Ir para página inicial
          </Button>
        </Link>

      </Grid>
    </Grid>
  );
}