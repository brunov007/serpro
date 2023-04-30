import { useState } from 'react';
import {FormAction} from "../components/FormAction"
import axios from 'axios';
import { Modal } from './Modal';

export function Csv(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [text, setText] = useState("")

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

            if(response.data.status){
                setShow(true)
                setText(response.data.text)
            }else{
                alert(response.data.message)
            }

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

    const hideModal = () => setShow(false)

    return (
        <>
            <Modal show={show} handleClose={hideModal}>
                <p>{text}</p>
            </Modal>
            <form className="flex flex-col space-y-80 items-center" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileSelect} className="text-white"/>
                <FormAction className="btn-submit w-80" handleSubmit={handleSubmit} text="Upload File"/>
            </form>
        </>
    );
}