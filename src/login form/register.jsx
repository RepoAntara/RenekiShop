import Button from "./Component/button";
import InputForm from "./Component/input";
import FormLayout from "./Component/layout";
import { useState } from "react";


const RegisterPage = () =>{
    const [formData, setFormData] = useState({username, password, email, id});
    function regisItem(){
        console.log(email,password,userName,confirmPassword)
        const [register, {isLoading, isError, error}] = useDataUserMutation()
        
        const handleRegister = (e) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
          };
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        register(formData);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };



    return(
        <form onSubmit="{handleSubmit}">
            <FormLayout Title='Register' LinkTo='/login' Message= "Have an account?"  Instruction='Sign In' gap="gap-8">
                <InputForm Type='email' PlaceHolder='name@gmail.com' ID='email' Label='Email' value={formData.email} OnChange={handleChange}></InputForm>
                <InputForm Type='text' PlaceHolder='Insert your name...' ID='username' Label='User Name' value={formData.username} OnChange={handleChange}></InputForm>
                <InputForm Type='password' PlaceHolder='Password' ID='password' Label='Password' value={formData.password} OnChange={handleChange}></InputForm>
                <InputForm Type='password' PlaceHolder='Confirm Password' ID='confirmPassword' Label='Confirm Password' value={confirmPassword} OnChange={handleChange}></InputForm>
                <Button Costumes='hover:border-third p-1 w-full text-xl'>Register</Button>
            </FormLayout>
        </form>
    )
}

export default RegisterPage;