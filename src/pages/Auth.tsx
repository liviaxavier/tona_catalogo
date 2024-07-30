import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';
// import imageTona from '../assets/image-tona.webp'
import logo from '../assets/150e9b_c64f84cf34ad43049086d4a4ebc049f5~mv2.webp'
import '../styles/auth.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import bg_desktop_image from '../assets/3840x2160_shoes.png'
import bg_mobile_image from '../assets/640x1136_shoes.png'



export default function Auth() {
  const { loginWithRedirect } = useAuth0();

  const [register, setIsRegister] = useState(false)
  const plans = [
    {
      label: 'Mensal',
      value: 'mensal',
      url: 'https://www.asaas.com/c/vq21k3ft5h5ayoq2'
    },
    {
      label: 'Trimestral',
      value: 'trimestral',
      url: 'https://www.asaas.com/c/hfqbokskyl1wi6eh'
    }
  ]
  const [plan, setPlan] = useState(plans[0])
  const [value, setValue] = useState(plans[0].value)

  console.info('register: ', register)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthCard registerHandler={setIsRegister} loginHandler={loginWithRedirect} />
    }
    , {
      path: "/register",
      element: <Register handleChange={handleChange} value={value} planHandler={setPlan} plan={plan} list={plans} registerHandler={setIsRegister} />
    }
  ])

  return <Grid container alignContent={"center"} justifyContent={"center"} className='container'>
    <img height={"50px"} src={logo} id="logo-auth-page" />
    <RouterProvider router={router} />
  </Grid>
}

interface RegisterInterface {
  planHandler: Function
  registerHandler: Function
  handleChange: Function
  plan: any
  list: any[]
  value: string
}
function Register({ planHandler, plan, list, registerHandler, handleChange, value }: RegisterInterface) {
  return <AuthCard children={
    <>
      <CardContent style={{ width: '100%' }}>
        <Typography gutterBottom variant="h5" component="div">
          Catálogo Clube Tona
        </Typography>
        <FormControl>
          <FormLabel id="plan-selector">Qual plano você deseja aderir?</FormLabel>
          <RadioGroup
            aria-labelledby="plan-selector"
            defaultValue="mensal"
            name="plan-selector"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
          >
            {
              list.map(item => {
                return <FormControlLabel onClick={() => planHandler(item)} value={item.value} control={<Radio />} label={item.label} />
              })
            }
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions className='card-actions'>
        <Button fullWidth className='card-button'
          size="large" color="primary" variant='contained'>
          <a style={{ color: 'white' }} target='_blank' href={plan.url}>Ver detalhes do plano</a>
        </Button>
        <Link to="/" className='card-button'>
          <Button
            style={{ width: '100%' }}
            onClick={() => registerHandler(false)}
            size="large" color="primary" variant='outlined'>
            Fazer login
          </Button>
        </Link>
        <a href='https://docs.google.com/document/d/1cG-VZ_4Lw9NsNT9jd8RNxMCoTMvX_NVMyDN-bJaF_I0/edit' target='_blank' style={{ fontSize: '12px', textDecoration: 'underline', textAlign: 'center', width: '100%', margin: '10px 0' }}>Veja onde temos profissionais cadastradas!</a>
      </CardActions>
    </>
  } />
}
interface AuthCardInterface {
  children?: any
  registerHandler?: Function
  loginHandler?: Function
}
function AuthCard({ children, registerHandler = () => { }, loginHandler = () => { } }: AuthCardInterface) {
  const screenSize = window.innerWidth
  const isDesktop = screenSize > 700
  return <Grid container>
    <img src={isDesktop ? bg_desktop_image : bg_mobile_image} alt="" style={{
      position: 'fixed',
      zIndex: '-9999',
      top: 0,
      left: 0,
      minHeight: '100%',
      minWidth:'100%',
      width: isDesktop ? '100%' : 'auto'
    }} />
    {!isDesktop && <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column', marginBottom:'2em' }}>
      <p style={{ color: 'var(--purple)', backgroundColor: '#ffc800a6', padding: '0 1em', margin:'0', borderRadius: '20px', fontWeight:'bold', marginBottom:'.5em' }}>Dezenas de profissionais lésbicas</p>
      <p style={{ color: 'var(--purple)', backgroundColor: '#ffc800a6', padding: '0 1em', margin:'0', borderRadius: '20px', fontWeight:'bold' }}>nas pontas dos seus dedos!</p>
    </Grid>}
    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 500, width: '100%' }} elevation={5} style={{
        minHeight: "20vh", display: "flex", justifyContent: "space-between", flexDirection: "column"
      }}>
        {
          children || (<><CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Catálogo Clube Tona
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realize seu login para ter acesso completo ao catálogo de profissionais!
            </Typography>
          </CardContent>
            <CardActions className='card-actions'
            >
              <Button className='card-button' onClick={() => loginHandler()} size="large" color="primary" variant='contained'>
                Entrar
              </Button>
              <Link to="/register" className='card-button'>
                <Button
                  style={{ width: '100%' }}
                  onClick={() => registerHandler(true)}
                  size="large" color="primary" variant='outlined'>
                  Quero me cadastrar
                </Button>

              </Link>
              <a href='https://docs.google.com/document/d/1cG-VZ_4Lw9NsNT9jd8RNxMCoTMvX_NVMyDN-bJaF_I0/edit' target='_blank' style={{ fontSize: '12px', textDecoration: 'underline', textAlign: 'center', width: '100%', margin: '10px 0' }}>Veja onde temos profissionais cadastradas!</a>
            </CardActions></>)
        }
      </Card>
    </Grid>
    {isDesktop && <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ color: 'var(--purple)', backgroundColor: '#ffc800a6', padding: '0 1em', borderRadius: '20px' }}>
        Dezenas de profissionais lésbicas nas pontas dos seus dedos!
      </h2>
    </Grid>}
  </Grid>


}