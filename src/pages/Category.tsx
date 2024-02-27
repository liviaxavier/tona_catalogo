import { useParams } from "react-router-dom";
import ProfessionalList from "../components/ProfessionalList";

export default function CategoryPage({data}: DataBindInterface){
    const {categoryId} = useParams()
    return <ProfessionalList data={data} categoryId={categoryId} />
}