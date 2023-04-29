import MaterialIcon from 'material-icons-react';
import {FormAction} from "../components/FormAction"

export function Campos(){

    const handleSubmit = e => {
        e.preventDefault()
        send()
    }

    const send = () => {
        console.log("ok")
    }

    const addEmailField = () => {
        const myForm = document.getElementById("list");
        
        const newEmailField = document.createElement("input");
        newEmailField.type = "text";
        newEmailField.name = "field";
        newEmailField.placeholder = "Dado";
        newEmailField.setAttribute("required", "");
        newEmailField.classList.add("input-field");
        newEmailField.classList.add("mt-4");

        // insert element
        myForm.appendChild(newEmailField);
    }

    return (
        <form id="form" action="" method="POST" className="flex flex-col space-y-60" onSubmit={handleSubmit}>
            <fieldset className="inputs-set" id="list">
                <input className="input-field" name="field" required placeholder="Dado"/>
            </fieldset>
            <div className="flex flex-col gap-4 items-center">
                <button onClick={addEmailField} className="bg-white rounded-full w-fit h-fit items-center">
                    <MaterialIcon icon="add" size={40}/>
                </button>
                <FormAction className="btn-submit w-80" handleSubmit={handleSubmit} text="Enviar"/>
            </div>
        </form>
    );
}