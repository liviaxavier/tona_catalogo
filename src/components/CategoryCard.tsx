import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CategoryInterface } from "../interfaces/Category";
import { Link } from "react-router-dom";

export default function CategoryCard({name, image, id}: CategoryInterface){
    return  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card key={id} elevation={4}>
        <Link to={`/category/${id}`}>
            <CardMedia sx={{ height: 150 }} image={image} />
            <CardContent>
                <Typography fontWeight={500} variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Link>
    </Card>
    </Grid>
}