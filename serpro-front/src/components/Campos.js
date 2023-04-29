import MaterialIcon from 'material-icons-react';
import {FormAction} from "../components/FormAction"

export function Campos(){

    const handleSubmit = e => {
        e.preventDefault()
        send()
    }

    const send = () => {
        const list = []
        const container = document.getElementById('list-container');
        const inputs = container.getElementsByTagName('input');
        for(let i = 0; i< inputs.length; i++){
            list.push(inputs[i].value)
        }

        /*
        const endpoint=`https://api.com`;
         fetch(endpoint,
             {
             method:'POST',
             headers: {
             'Content-Type': 'application/json'
             },
             body:{
                 dados: list
             }
             }).then(response=>response.json())
             .then(data=>{
                //API Success from LoginRadius Login API
             })
             .catch(error=>console.log(error))
        */
       alert(`Dados: ${list}`)
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

    return (
        <form className="flex flex-col space-y-60" onSubmit={handleSubmit}>
            <fieldset className="inputs-set" id="list-container">
                <input 
                    className="input-field" 
                    required 
                    placeholder="Dado"/>
            </fieldset>
            <div className="flex flex-col gap-4 items-center">
                <button onClick={addEmailField} className="bg-white rounded-full w-fit h-fit">
                    <MaterialIcon icon="add" size={40}/>
                </button>
                <FormAction className="btn-submit w-80" handleSubmit={handleSubmit} text="Enviar"/>
            </div>
        </form>
    );
}