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
    const [text, setText] = useState("")

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
            setText(response.data.text)
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
        var docDefinition = {
            content: [
              // if you don't need styles, you can use a simple string to define a paragraph
              'This is a standard paragraph, using default style',
          
              // using a { text: '...' } object lets you set styling properties
              { text: 'This paragraph will have a bigger font', fontSize: 15 },
          
              // if you set the value of text to an array instead of a string, you'll be able
              // to style any part individually
              {
                text: [
                  'This paragraph is defined as an array of elements to make it possible to ',
                  { text: 'restyle part of it and make it bigger ', fontSize: 15 },
                  'than the rest.'
                ]
              }
            ]
          };
        const pdfGenerator = pdfMake.createPdf(docDefinition)
        pdfGenerator.open()
    }

    const hideModal = () => setShow(false)

    return (
        <>
            <Modal show={show} handleClose={hideModal}>
                <div className="flex flex-col space-y-20 items-center">
                    <p>{text}</p>
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