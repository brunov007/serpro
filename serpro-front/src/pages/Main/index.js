//import { useEffect, useState } from "react";
import MaterialIcon from 'material-icons-react';
import { Campos } from '../../components/Campos';
import { HeaderMain } from "../../components/HeaderMain";

export function Main() {

  return (
    <>
      <div className="body-main">
        <div className="p-12">
          <HeaderMain />
          <div className="flex flex-row gap-4 mt-10">
            <div className="flex flex-col h-fit w-auto p-10 gap-8 items-center bg-[#00000041] rounded-lg">
              
              <button className="custom-button-main flex flex-col p-2 items-center">
               <MaterialIcon icon="dashboard" size={50}/>
               <h4>Campos</h4>
              </button>

              <button className="custom-button-main flex flex-col p-2 items-center">
               <MaterialIcon icon="dataset" size={50}/>
               <h4>Excel</h4>
              </button>

              <button className="custom-button-main flex flex-col p-2 items-center">
               <MaterialIcon icon="view_kanban" size={50}/>
               <h4>Tabela</h4>
              </button>
            </div>
            
            <div className="flex-auto w-50 bg-[#00000041] rounded-lg h-100 p-10">
              {
                // Tela pra cada funcionalidade selecionada
              }
              <Campos/>
            </div>
            <div className="flex-auto w-30 bg-[#00000049] rounded-lg h-100 p-10">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}