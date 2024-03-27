import { useParams } from "react-router-dom";
import ProfessionalList from "../components/ProfessionalList";
import { DataInterface } from "../interfaces/General";
interface CategoryPageInterface {
    data: DataInterface
}
export default function CategoryPage({data}: CategoryPageInterface){
    const {categoryId} = useParams()
    return <ProfessionalList data={data} categoryId={categoryId} />
}