import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';
import imageTona from '../assets/image-tona.webp'
import '../styles/auth.css'


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


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return <Grid container alignContent={"center"} justifyContent={"center"} className='container'>
    {register ? <Register handleChange={handleChange} value={value} planHandler={setPlan} plan={plan} list={plans} registerHandler={setIsRegister} /> : <AuthCard registerHandler={setIsRegister} loginHandler={loginWithRedirect} />}


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
      <CardActions>
        <Button style={{ width: '50%' }}
          onClick={() => registerHandler(false)}
          size="large" color="primary" variant='text'>
          voltar
        </Button>
        <Button fullWidth
          size="large" color="primary" variant='outlined'>
          <a target='_blank' href={plan.url}>Ir para pagamento</a>
        </Button>
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
      <Card sx={{ maxWidth: 500, width: '100%' }} elevation={5} style={{ minHeight: "20vh", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
        {
          children || (<><CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Catálogo Clube Tona
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realize seu login para ter acesso completo ao catálogo de profissionais!
            </Typography>
          </CardContent>
            <CardActions style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <Button style={{ width: '50%' }}
                onClick={() => registerHandler(true)}
                size="large" color="primary" variant='outlined'>
                Cadastrar
              </Button>
              <Button style={{ width: '50%' }} onClick={() => loginHandler()} size="large" color="primary" variant='contained'>
                Entrar
              </Button>
            </CardActions></>)
        }
      </Card>
    </Grid>
    <Grid item xs={12} md={6} id={"image-tona"}>
      <img src={imageTona} style={{ position: 'relative' }} />
    </Grid>
  </Grid>


}