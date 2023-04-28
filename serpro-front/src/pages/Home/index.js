//import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { BannerHome } from "../../components/BannerHome";
//import { PopularCollections } from "../../components/PopularCollections";
//import { NewReleases } from "../../components/NewReleases";

//import api from "../../services/api";

export function Home() {

  return (
    <>
      <body className="body-home">
        <div className="p-12">
          <Header />
          <BannerHome />
          <div className="h-80"></div>
        </div>
      </body>
    </>
  )
}