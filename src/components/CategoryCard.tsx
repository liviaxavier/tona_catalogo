import { CategoryInterface } from "../interfaces/Category";

export default function CategoryCard({name, image, id, parent}: CategoryInterface){

    return  <div key={id}>
        <img src={image} />
        <h2>{name}</h2>
        <span>{parent}</span>
    </div>
    
}