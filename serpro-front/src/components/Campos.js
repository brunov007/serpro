import MaterialIcon from 'material-icons-react';

export function Campos(){

    const addEmailField = () => {
        const myForm = document.getElementById("email-list");
        
        const newEmailField = document.createElement("input");
        //newEmailField.type = "email";
        newEmailField.name = "email_field";
        newEmailField.setAttribute("required", "");
        newEmailField.classList.add("input-field");
        newEmailField.classList.add("mt-4");

        // insert element
        myForm.appendChild(newEmailField);
    }

    return (
        <div className="">
            <form id="form" action="" method="POST" className="">
                <fieldset class="inputs-set" id="email-list">
                    <input class="input-field" name="email_field[]" required placeholder="dado"/>
                </fieldset>
                <div className="flex flex-col gap-4 items-center">
                    <button onClick={addEmailField} className="bg-white rounded-full w-fit h-fit">
                        <MaterialIcon icon="add" size={40}/>
                    </button>
                    <button class="btn-submit w-80" type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}