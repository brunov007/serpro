//import { useEffect, useState } from "react";
import MaterialIcon from 'material-icons-react';
import { HeaderMain } from "../../components/HeaderMain";

export function Main() {

  return (
    <>
      <div className="body-main h-screen">
        <div className="p-12">
          <HeaderMain />
          <div class="flex flex-row gap-6 mt-10">
            <div class="flex flex-col h-fit w-20 p-20 gap-10 items-center bg-white rounded-lg">
              
              <div className="flex flex-col items-center rounded-lg bg-blue-50">
               <MaterialIcon icon="dashboard" size={50}/>
               <h4>Funcionalidade 1</h4>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-blue-50">
               <MaterialIcon icon="dataset" size={50}/>
               <h4>Funcionalidade 2</h4>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-blue-50">
               <MaterialIcon icon="view_kanban" size={50}/>
               <h4>Funcionalidade 3</h4>
              </div>
            </div>
            
            <div class="flex-auto w-80 bg-white rounded-lg h-screen">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}