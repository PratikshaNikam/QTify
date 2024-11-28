import React from "react";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";

export default function HomePage() {
  const { data } = useOutletContext();
  const {topAlbums, newAlbums, songs,genres} = data;
  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        
        <Section title="Songs" data={songs}
          filterSource={ fetchFilters} type="song" />
      </div>
    </>
  )
}

