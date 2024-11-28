import React,{useEffect,useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import HomePage from "./pages/HomePage/HomePage";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Outlet } from "react-router-dom";
import {fetchFilters,fetchNewAlbums,fetchSongs,fectTopAlbums}from "./api/api"


function App() {
  const [data, setData] = useState([]);

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      })
    })
    
  };

  useEffect(() => {
    generateData("genres", fetchFilters);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("topAlbums", fectTopAlbums);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;

  return (
 <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]}></Navbar>
        <Outlet context={{data:{topAlbums,newAlbums,songs,genres}}} />
        </StyledEngineProvider>
    </>
  );
}

export default App;
