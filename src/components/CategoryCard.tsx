import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CategoryInterface } from "../interfaces/Category";
import { Link } from "react-router-dom";

export default function CategoryCard({name, image, id}: CategoryInterface){

    return   <Grid item xs={12} sm={8} md={4} lg={4}>
    <Card key={id}>
        <Link to={`/category/${id}`}>
            <CardMedia sx={{ height: 200 }} image={image} />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
        </Link>
    </Card>
    </Grid>
}