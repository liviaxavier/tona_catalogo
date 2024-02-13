import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { ProfessionalInterface } from "../interfaces/Professional";

export default function ProfessionalCard({name, image, id}: ProfessionalInterface){

    return   <Grid item xs={12} sm={8} md={4} lg={3}>
    <Card key={id}>
        <CardActionArea href={`/professional/${id}`}>
            <CardMedia sx={{ height: 200 }} image={image} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </Grid>
}