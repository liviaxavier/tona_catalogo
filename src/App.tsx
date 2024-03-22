import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

import './App.css'
import CategoryList from "./components/CategoryList";
import ErrorPage from "./pages/Error";
import CategoryPage from "./pages/Category";
import ProfessionalPage from "./pages/Professional";
import Auth from "./pages/Auth";
import useGoogleSheets from "use-google-sheets";
import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Footer from "./components/Footer";
import {useAuth0  } from '@auth0/auth0-react';
import Profile from "./pages/Profile";

export const loader = async () => {
  const isLogged = true;

  if (!isLogged) {
    return redirect("/auth");
  }
  return null;
};

function App() {  
  const {  isAuthenticated, isLoading } = useAuth0()
  const { data } = useGoogleSheets({
    apiKey: import.meta.env.VITE_API_KEY,
    sheetId: import.meta.env.VITE_SPREADSHEET_ID
  });
  
  const [db, setDB] = useState<any>({categorias: [], profissionais: []})
  
  const getDatabase = useCallback( async () => {
    const dbCategories = data.find(item => item.id === 'categorias')
    if(dbCategories?.data){
      const categorias = dbCategories.data.filter((item: any) => item.name)
      setDB({ ...db, categorias })
    }
  }, [data])
  
  useEffect(() => {getDatabase()}, [getDatabase])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CategoryList list={db.categorias} data={data} />,
      errorElement: <ErrorPage />,
      loader,
    },
    {
      path: "/category/:categoryId",
      element: <CategoryPage data={data} />,
    }
    , {
      path: "/professional/:professionalId",
      element: <ProfessionalPage data={data}/>
    } 
    , {
      path: "/auth",
      element: <Auth />
    } 
    , {
      path: "/meu-perfil/:professionalId",
      element: <Profile data={data} />
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
