//import { useEffect, useState } from "react";
import MaterialIcon from 'material-icons-react';
import { useState } from 'react';
import { Campos } from '../../components/Campos';
import { Csv } from '../../components/Csv';
import { HeaderMain } from "../../components/HeaderMain";

export function Main() {

  const [current, setCurrent] = useState(0)

  const set = event => {
    switch(event.target.id){
      case "dashboard":
        setCurrent(0)
        break
      case "dataset":
        setCurrent(1)
        break
      case "view_kanban":
        setCurrent(2)
        break
      default:
        setCurrent(0)
    }
  }

  return (
    <>
      <div className="body-main">
        <div className="p-12">
          <HeaderMain />
          <div className="flex flex-row gap-4 mt-10 blur-image-main">
            <div className="flex flex-col h-100 w-auto p-10 gap-8 items-center bg-[#00000041] rounded-lg">
              
              <button id= "dashboard" className="custom-button-main flex flex-col p-2 items-center" onClick={set}>
               <MaterialIcon id= "dashboard" icon="dashboard" size={50} color="#000010"/>
               Campos
              </button>

              <button id= "dataset" className="custom-button-main flex flex-col p-2 items-center" onClick={set}>
               <MaterialIcon id= "dataset"  icon="dataset" size={50} color="#000010"/>
               Excel
              </button>

              <button id= "view_kanban" className="custom-button-main flex flex-col p-2 items-center" onClick={set}>
               <MaterialIcon id= "view_kanban" icon="view_kanban" size={50} color="#000010"/>
               Tabela
              </button>
            </div>
            
            <div className="flex-auto bg-[#00000041] rounded-lg h-100 p-10">
              {current === 0 ? <Campos/> : current === 1 ? <Csv/> : null }
            </div>
            <div className="flex-auto bg-[#00000049] rounded-lg h-100 p-10">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}