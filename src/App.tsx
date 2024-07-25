import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

import './App.css'
import CategoryList from "./components/CategoryList";
import ErrorPage from "./pages/Error";
import CategoryPage from "./pages/Category";
import ProfessionalPage from "./pages/Professional";
import Auth from "./pages/Auth";
import { useCallback, useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
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
  const {  isAuthenticated, isLoading, user } = useAuth0()
  
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
      element: <CategoryList list={db.categorias} data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}, user}} />,
      errorElement: <ErrorPage />,
      loader,
    },
    {
      path: "/category/:categoryId",
      element: <CategoryPage data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}, user}} />,
    }
    , {
      path: "/professional/:professionalId",
      element: <ProfessionalPage data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}, user}}/>
    } 
    , {
      path: "/auth",
      element: <Auth />
    } 
    , {
      path: "/meu-perfil/:professionalId",
      element: <Profile data={{profissionais: {data: db.profissionais}, categorias: {data:db.categorias}, user}} />
    } 
  ]);
  if (isLoading) {
    return <div style={{
      height: '50vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
  }}>
      <CircularProgress />
  </div>;
  }
  return <>
      <Grid container md={8} margin={"auto"}>
        {isAuthenticated ? <RouterProvider router={router} /> : <Auth/>}
      </Grid> 
      {showFooter(isAuthenticated) && <Footer />}
  </>
  
}

export default App

function showFooter(isAuthenticated: boolean){
  const screenSize = window.innerWidth
  return screenSize > 700 || isAuthenticated && screenSize < 700
}