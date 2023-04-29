//import { useEffect, useState } from "react";
import MaterialIcon from 'material-icons-react';
import { Campos } from '../../components/Campos';
import { HeaderMain } from "../../components/HeaderMain";

export function Main() {

  return (
    <>
      <div className="body-main h-screen">
        <div className="p-12">
          <HeaderMain />
          <div class="flex flex-row gap-4 mt-10">
            <div class="flex flex-col h-fit w-auto p-10 gap-8 items-center bg-[#00000041] rounded-lg">
              
              <div className="flex flex-col p-3 items-center rounded-lg bg-indigo-100">
               <MaterialIcon icon="dashboard" size={50}/>
               <h4>Campos</h4>
              </div>

              <div className="flex flex-col p-3 items-center rounded-lg bg-indigo-100">
               <MaterialIcon icon="dataset" size={50}/>
               <h4>Excel</h4>
              </div>

              <div className="flex flex-col p-3 items-center rounded-lg bg-indigo-100">
               <MaterialIcon icon="view_kanban" size={50}/>
               <h4>Tabela</h4>
              </div>
            </div>
            
            <div class="flex-auto w-80 bg-[#00000041] rounded-lg h-screen">
              {
                // Tela pra cada funcionalidade selecionada
              }
              <Campos/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}