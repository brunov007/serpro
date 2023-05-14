import MaterialIcon from 'material-icons-react';
import { useState } from 'react';
import {FormAction} from "../components/FormAction"
import axios from 'axios';
import { Modal } from './Modal';
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export function Campos(){

    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        send()
    }

    const send = () => {
        setIsLoading(true)

        const list = []
        const container = document.getElementById('list-container');
        const inputs = container.getElementsByTagName('input');
        for(let i = 0; i< inputs.length; i++){
            list.push(inputs[i].value)
        }

        const endpoint=`http://localhost:3002/api/main/data`; 

        axios.post(endpoint, { 
            dados: list
        })
        .then(response => {
            setIsLoading(false)

            if(response.status >= 400 && response.status < 500) {
                throw new Error(`Ocorreu um erro! status:${response.status}`);
            }
            if(response.status >= 500) {
                throw new Error(`Erro no Servidor! status:${response.status}`);
            }

            setShow(true)
            setData(response.data)
        })
        .catch(error => {
            setIsLoading(false)
            if(error instanceof TypeError){
                alert("Erro de conexão")
            }else{
                alert(error.message ?? "Ocorreu um erro inesperado.")
            }
        });
    }

    const addEmailField = () => {
        const list = document.getElementById("list-container");
        
        const newEmailField = document.createElement("input");
        newEmailField.type = "text";
        newEmailField.placeholder = "Dado";
        newEmailField.setAttribute("required", "");
        newEmailField.classList.add("input-field");
        newEmailField.classList.add("mt-4");

        list.appendChild(newEmailField);
    }

    const relatorioClick = () => {

        const transform = data.report.fields.reduce((prev, current, i, arr) => {
            arr[i] = Object.values(current)
            return arr
        },0)
        transform.unshift(['Dado', 'Confidenciabilidade', 'Adequação', 'Severidade', 'Porcetagem'])

        var docDefinition = {
            content: [
              {text: 'Relatório', style: 'header'},
              'Validação dos dados de acordo com a privacidade e sua proteção.',
              {
                style: 'tableExample',
                table: {
                    body: transform
                }
              },
              `Emissão: ${data.date}`
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                }
            },
          };

        const pdfGenerator = pdfMake.createPdf(docDefinition)
        pdfGenerator.open()
    }

    const hideModal = () => setShow(false)

    return (
        <>
            <Modal show={show} handleClose={hideModal}>
                <div className="flex flex-col space-y-20 items-center">
                    <p>{data ? data.text : ""}</p>
                    <button className="btn-modal" onClick={relatorioClick}>Relatório</button>
                </div>
            </Modal>
            <form className="flex flex-col space-y-60" onSubmit={handleSubmit}>
                <fieldset className="inputs-set" id="list-container">
                    <input 
                        className="input-field" 
                        required 
                        placeholder="Dado"/>
                </fieldset>
                <div className="flex flex-col gap-4 items-center">
                    <button onClick={addEmailField} className="bg-white rounded-full w-fit h-10">
                        <MaterialIcon icon="add" size={40}/>
                    </button>
                    <FormAction className="btn-submit w-80" handleSubmit={handleSubmit} text="Enviar"/>
                </div>
            </form>
        </>
    );
}