import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { ProfessionalInterface } from "../interfaces/Professional";
import { MdCamera, MdFace } from "react-icons/md";
import { Link } from "react-router-dom";

interface ProfesisonalCardInterface {
    item: ProfessionalInterface
}

export default function ProfessionalCard({item}: ProfesisonalCardInterface){
    const {name, image, id, face2face, online, location} = item

    return  <Grid item xs={12} md={6}>
    <Card key={id} >
        <Link to={`/professional/${id}`} style={{display: 'flex', justifyContent: 'start'}}>
            <Box padding={1}>
                <img height={"150px"} src={image} />
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" component="div">
                    {location}
                </Typography>
                <Box component={"div"} gap={2}>
                    {face2face && <Chip icon={<MdFace/>} label={"presencial"} />}
                    {online && <Chip icon={<MdCamera />} label={"online"} />}
                </Box>
            </CardContent>
        </Link>
    </Card>
    </Grid>
}