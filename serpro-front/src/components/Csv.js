import { useState } from 'react';
import {FormAction} from "../components/FormAction"
import axios from 'axios';
import { Modal } from './Modal';
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export function Csv(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)

    const handleSubmit = async(event) => {
        setIsLoading(true)

        event.preventDefault()

        const formData = new FormData();
        formData.append("file", selectedFile);

        const endpoint="http://localhost:3002/api/main/upload/csv";

        axios({
            method: "post",
            url: endpoint,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
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

    const handleFileSelect = (event) => setSelectedFile(event.target.files[0])

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
            <form className="flex flex-col space-y-80 items-center" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileSelect} className="text-white"/>
                <FormAction className="btn-submit w-80" handleSubmit={handleSubmit} text="Upload File"/>
            </form>
        </>
    );
}