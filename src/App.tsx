import { redirect } from "react-router-dom";

import './App.css'
import CategoryList from "./components/CategoryList";
export const loader = async () => {
  const isLogged = true;

  if (!isLogged) {
    return redirect("/auth");
  }
  return null;
};

function App() {  
  return (
    <>
      <CategoryList />
    </>
  )
}

export default App
