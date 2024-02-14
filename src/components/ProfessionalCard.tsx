import { Box, Card, CardActionArea, CardContent, Chip, Grid, Typography } from "@mui/material";
import { ProfessionalInterface } from "../interfaces/Professional";
import { MdCamera, MdFace } from "react-icons/md";

interface ProfesisonalCardInterface {
    item: ProfessionalInterface
}

export default function ProfessionalCard({item}: ProfesisonalCardInterface){
    const {name, image, id, face2face, online} = item

    return  <Grid item xs={12} md={6}>
    <Card key={id} >
        <CardActionArea href={`/professional/${id}`} sx={{display: 'flex', justifyContent: 'start'}}>
            <Box padding={1}>
                <img height={"150px"} src={image} />
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Box component={"div"} gap={2}>
                    {face2face && <Chip icon={<MdFace/>} label={"presencial"} />}
                    {online && <Chip icon={<MdCamera />} label={"online"} />}
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
    </Grid>
}