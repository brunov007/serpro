import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import {FormExtra} from "../../components/FormExtra"
import {FormAction} from "../../components/FormAction"
import { useState } from "react";
import axios from 'axios';

export function Login(){

    const [data, setData] = useState({
        email:"",
        password:""
    })
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handle = e => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        authenticateUser()
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        setIsLoading(true)

        const endpoint=`http://localhost:3002/api/auth/sign-in`;

        axios.post(endpoint, data)
        .then(response=>{
            setIsLoading(false)

            if(response.status >= 400 && response.status < 500) {
                throw new Error(`Ocorreu um erro! status:${response.status}`);
            }
            if(response.status >= 500) {
                throw new Error(`Erro no Servidor! status:${response.status}`);
            }

            if(response.data.status){
                navigate('/main')
            }
        })
        .catch(error=>{
            setIsLoading(false)

            if(error instanceof TypeError){
                alert("Erro de conexão")
            }else{
                alert(error.message ?? "Ocorreu um erro inesperado.")
            }
        })
    }

    return (
      <>
        <div className="body-home">
          <div className="p-12">
            <Header />
            <div className="rounded-lg bg-white flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20 w-full">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Login to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                    Don't have an account yet? 
                    <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                        Signup
                    </Link>
                </p>
                <form className="mt-8 space-y-6 flex justify-center flex-col" onSubmit={handleSubmit}>
                    <div className="-space-y-px">
                        <div className="my-5">
                            <input
                                    labeltext="Email address"
                                    id="email"
                                    value={data.email}
                                    type="email"
                                    placeholder="Email address" 
                                    className="w-full border-solid border-2 border-gray-100 text-black"
                                    onChange={handle}
                            />
                        </div>
                        <div className="my-5">
                            <input
                                    labeltext="Password"
                                    id="password"
                                    value={data.password}
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    className="w-full border-solid border-2 border-gray-100 text-black"
                                    onChange={handle}
                            />
                        </div>
                    </div>
                    <FormExtra/>
                    <FormAction className="btn-login" handleSubmit={handleSubmit} text="Login"/>
                </form>
            </div>
          </div>
        </div>
      </>
    )
  }