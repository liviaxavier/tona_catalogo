import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { FaGlobe, FaPeopleArrows } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProfessionalCard({item}: any){
    const {Nome, Foto, id, Presencial, Online } = item

    return  <Grid item xs={12} sm={6} >
    <Card key={id} elevation={2} >
        <Link to={`/professional/${id}`} style={{display: 'flex', justifyContent: 'start'}}>
            <Box className="professional__image" padding={1}>
                <img src={Foto} />
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    {Nome}
                </Typography>
                <Typography variant="body1" component="div">
                    {item["Localização"]}
                </Typography>
                <Box component={"div"} className="professional__chips">
                    {Presencial === 's' && <Chip color="primary" variant="outlined" icon={<FaPeopleArrows color="var(--purple)"/>} label={"presencial"}  style={{padding: '.5em'}}/>}
                    {Online === 's' && <Chip color="primary" variant="outlined" icon={<FaGlobe />} label={"online"} style={{padding: '.5em'}}/>}
                </Box>
            </CardContent>
        </Link>
    </Card>
    </Grid>
}