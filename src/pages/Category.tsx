import { useParams } from "react-router-dom";
import ProfessionalList from "../components/ProfessionalList";

export default function CategoryPage(){
    const {categoryId} = useParams()
    return <ProfessionalList category={categoryId} />
}