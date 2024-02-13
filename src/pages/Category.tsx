import { useParams } from "react-router-dom";
import ProfessionalList from "../components/ProfessionalList";

export default function CategoryPage(){
    // return <h1>Category</h1>
    const {categoryId} = useParams()
    return <ProfessionalList category={categoryId} />
}