import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';
import imageTona from '../assets/image-tona.webp'
import logo from '../assets/150e9b_c64f84cf34ad43049086d4a4ebc049f5~mv2.webp'
import '../styles/auth.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';


export default function Auth() {
  const { loginWithRedirect } = useAuth0();

  const [register, setIsRegister] = useState(false)
  const plans = [
    {
      label: 'Mensal',
      value: 'mensal',
      url: 'https://www.asaas.com/c/q62krvf838h8fofy'
    },
    {
      label: 'Trimestral',
      value: 'trimestral',
      url: 'https://www.asaas.com/c/2nu9ndqw923b1ehr'
    },
    {
      label: 'Semestral',
      value: 'semestral',
      url: 'https://www.asaas.com/c/r3dqpewbwr3y10xh'
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
          <a style={{color:'white'}} target='_blank' href={plan.url}>Ver detalhes do plano</a>
        </Button>
        <Link to="/" className='card-button'>
          <Button 
            style={{width:'100%', fontSize:'10px'}}
            onClick={() => registerHandler(false)}
            size="small" color="primary" variant='text'>
            ir para página inicial
          </Button>
        </Link>
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
  return <Grid container>
    <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 500, width: '100%' }} elevation={5} style={{ 
      minHeight: "20vh", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
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
              <Button className='card-button'  onClick={() => loginHandler()} size="large" color="primary" variant='contained'>
                Entrar
              </Button>
              <Link to="/register" className='card-button'>
                <Button
                  style={{width: '100%', fontSize:'10px'}}
                  onClick={() => registerHandler(true)}
                  size="small" color="primary" variant='text'>
                  Quero me cadastrar
                </Button>

              </Link>
            </CardActions></>)
        }
      </Card>
    </Grid>
    <Grid item xs={12} md={6} id={"image-tona"}>
      <img src={imageTona} style={{ position: 'relative' }} />
    </Grid>
  </Grid>


}