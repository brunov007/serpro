import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import {FormExtra} from "../../components/FormExtra"
import {FormAction} from "../../components/FormAction"

export function Login(){

    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault()
        authenticateUser()
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        /*
        const endpoint=`https://api.com`;
         fetch(endpoint,
             {
             method:'POST',
             headers: {
             'Content-Type': 'application/json'
             },
             body:{}
             }).then(response=>response.json())
             .then(data=>{
                //API Success from LoginRadius Login API
             })
             .catch(error=>console.log(error))
        */
        navigate('/main')
    }

    return (
      <>
        <div className="body-home">
          <div className="p-12">
            <Header />
            <div className="rounded-lg bg-white flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20 mr-52 ml-52">
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
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                    labelText="Email address"
                                    labelFor="email-address"
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    placeholder="Email address" 
                            />
                        </div>
                        <div className="my-5">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                    labelText="Password"
                                    labelFor="password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <FormExtra/>
                    <FormAction handleSubmit={handleSubmit} text="Login"/>
                </form>
            </div>
            <div className="h-screen"></div>
          </div>
        </div>
      </>
    )
  }