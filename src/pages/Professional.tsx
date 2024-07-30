import { Link, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Chip, CircularProgress, Grid, Typography } from "@mui/material";
import '../styles/professional.css'
import Search from "../components/Search";
import { FaGraduationCap, FaLocationDot, FaWhatsapp, FaGlobe, FaPeopleArrows, FaMoneyBill, FaBook, FaInstagram } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { DataInterface } from "../interfaces/General";
interface ProfessionalPageInterface {
    data: DataInterface
}
export default function ProfessionalPage({ data }: ProfessionalPageInterface) {
    const { professionalId } = useParams()
    const listaProfissionais = data.profissionais // data.find((item: any) => item.id === 'profissionais')
    const listaCategorias = data.categorias // data.find((item: any) => item.id === 'categorias')
    // const listaProfissionais = data.find((item: any) => item.id === 'profissionais') || []
    // const listaCategorias = data.find((item: any) => item.id === 'categorias') || []
    let professional: any = { Presencial: false, Online: false, "contato divulgação": "" }, category
    let registro, instagram, Foto_id, image, details, tel, Presencial, Online, Foto
    if (listaProfissionais?.data && listaCategorias?.data) {
        professional = listaProfissionais.data.find((item: any) => item.id === professionalId)
        category = listaCategorias.data.find((item: any) => item.name === professional.categoria)
    }

    if (professional) {
        Presencial = professional.Presencial
        Online = professional.Online
        Foto = professional.Foto
        registro = professional["Registro Conselho"]
        instagram = professional["Instagram"]?.replace('@', '')
        Foto_id = Foto.split('d/')[1]?.split('/view')[0]
        image = Foto_id ? `https://drive.google.com/thumbnail?export=view&id=${Foto_id}` : Foto
        details = {
            email: professional["E-mail"],
            instagram: professional["Instagram"],
            portfolio: professional["Portfólio"],
            whatsapp: professional["Whatsapp"],
            investimento: professional["Investimento"]
        }
        tel = details.whatsapp?.replace(/^(\+)|\D/g, "$1")
    }
    if (!professional) return <div style={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw'
    }}>
        <CircularProgress />
    </div>
    return professional && details && <Grid item xs={12} padding={"1em"}>
        <Search data={data} />
        <Grid xs={12} container >
            <Grid item sm={12} >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/">
                        Home
                    </Link>
                    <Link
                        color="inherit"
                        to={`/category/${category?.id}`}
                    >
                        {category?.name || ''}
                    </Link>
                    <Typography color="text.primary">{professional.Nome}</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid container sm={12} display={"flex"} flexWrap={"wrap"} className="professional__information" marginTop={1} padding={2} minHeight={"calc(100vh - 370px)"} alignContent={"start"} justifyContent={"start"}>
                <Grid item sm={12} md={4} >
                    <div className="professional__photo">
                        <img src={image} />
                    </div>
                </Grid>
                <Grid className="professional__details" container sm={12} md={8} >
                    <Grid item sm={12}>
                        <h1>{professional.Nome}</h1>
                        <p>{professional["Especialidade"]}</p>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <p><FaLocationDot color="var(--purple)" />  {professional["Localização"]}</p>
                        {details.investimento && <p><FaMoneyBill color="var(--purple)" />  {details.investimento}</p>}
                        <p>
                            <Box component={"div"} className="professional__chips">
                                {Presencial === 's' && <Chip color="primary" variant="outlined" icon={<FaPeopleArrows color="var(--purple)" />} label={"presencial"} style={{ padding: '.5em' }} />}
                                {Online === 's' && <Chip color="primary" variant="outlined" icon={<FaGlobe />} label={"online"} style={{ padding: '.5em' }} />}
                            </Box>
                        </p>

                    </Grid>
                    <Grid sm={12} md={6} style={{width:'100%'}}>
                        {registro && <p><FaGraduationCap color="var(--purple)" /> {registro}</p>}
                        {details.portfolio && <p style={{ overflow: "hidden", lineBreak: 'unset' }}><FaBook color="var(--purple)" /> <a style={{ textDecoration: 'underline' }} target="_blank" href={`${details.portfolio}`}>Portfólio</a></p>}
                    </Grid>
                    <Grid sm={12}>
                        <h5>Contatos</h5>
                        {details.whatsapp && <p><FaWhatsapp color="var(--purple)" /> <a style={{ textDecoration: 'underline' }} target="_blank" href={`https://wa.me/55${tel}`}>{details.whatsapp}</a></p>}
                        {details.instagram && <p><FaInstagram color="var(--purple)" /><a style={{ textDecoration: 'underline' }} target="_blank" href={`http://instagram.com/${instagram}`}>{details.instagram}</a></p>}
                        {details.email && <p><FaMailBulk color="var(--purple)" />{details.email}</p>}
                    </Grid>
                </Grid>
                <Grid item sm={12} >
                    <h3>Descrição</h3>
                    <p>{professional.Descricao}</p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}