import Button from "./Component/button";
import InputForm from "./Component/input";
import FormLayout from "./Component/layout";
import { useState, useEffect } from "react";
import { useDataUserQuery } from "../Aplication/API/FetchDB";
import { personalDatabase } from "../Aplication/API/FetchDB"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { Provider } from "react-redux";
 

export const dataBase = configureStore({
    reducer : {
        [personalDatabase.reducerPath] : personalDatabase.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(personalDatabase.middleware),
})

setupListeners(dataBase.dispatch)

const LoginPage = () =>{
    const [formLogin,setFormLogin] = useState({
        email : '',
        password : ''
    });
    const {loginForm} = useDataUserQuery();
    const { email, password } = formLogin;
    function handleChange(e){
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
    }

    const loginBtn = async () =>{
        if(email && password){
            await loginForm({email, password});
        }
    }
    

    return(
            <FormLayout Title='Login' LinkTo='/register' Message= "Don't have an account?"  Instruction='Sign Up'>
                
                    {loginForm?.map((e) => (
                        <div>
                        <Provider store={dataBase}>
                            <InputForm Type='email' PlaceHolder='Email' ID='Email' Label='Email'  OnChange={handleChange}></InputForm>
                        </Provider>
                        <Provider store={dataBase}> 
                            <InputForm Type='password' PlaceHolder='Password' ID='Password' Label='Password'  OnChange={handleChange}></InputForm>
                        </Provider>
                        <Button OnClick={loginBtn} Costumes='hover:border-third p-1 w-full text-xl'>Login</Button>
                        </div>
                        
                    ))}
                    


            </FormLayout>
            
    )
}
export default LoginPage;