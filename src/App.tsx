import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

import './App.css'
import CategoryList from "./components/CategoryList";
import ErrorPage from "./pages/Error";
import CategoryPage from "./pages/Category";
import ProfessionalPage from "./pages/Professional";
import Auth from "./pages/Auth";
import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Footer from "./components/Footer";
import {useAuth0  } from '@auth0/auth0-react';
import Profile from "./pages/Profile";
import GetGSheetsData from "./services/GetGSheetsData";

export const loader = async () => {
  const isLogged = true;

  if (!isLogged) {
    return redirect("/auth");
  }
  return null;
};

function App() {  
  const {  isAuthenticated, isLoading } = useAuth0()
  
  const [db, setDB] = useState<any>({categorias: [], profissionais: []})
  
  const getDatabase = useCallback( async () => {
    const categoryList = await GetGSheetsData.GetCategories()
    const professionalList = await GetGSheetsData.GetProfessionals()

    if(categoryList?.data &&professionalList?.data){
      const categorias = categoryList.data.filter((item: any) => item.name)
      const profissionais = professionalList.data.filter((item: any) => item.Nome)
      setDB({ ...db, categorias, profissionais })
    }
  }, [])
  
  useEffect(() => {getDatabase()}, [getDatabase])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CategoryList list={db.categorias} data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}}} />,
      errorElement: <ErrorPage />,
      loader,
    },
    {
      path: "/category/:categoryId",
      element: <CategoryPage data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}}} />,
    }
    , {
      path: "/professional/:professionalId",
      element: <ProfessionalPage data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}}}/>
    } 
    , {
      path: "/auth",
      element: <Auth />
    } 
    , {
      path: "/meu-perfil/:professionalId",
      element: <Profile data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}}} />
    } 
  ]);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <>
      <Grid container md={8} margin={"auto"} spacing={2}>
        {isAuthenticated ? <RouterProvider router={router} /> : <Auth/>}
      </Grid> 
      <Footer />
  </>
  
}

export default App
