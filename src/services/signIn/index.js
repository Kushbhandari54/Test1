import { Navigate } from 'react-router-dom';
import { API_URLS } from '../../config/API_URLS';
import axios from '../../utils/axios';

export const loginAPI= async(data)=>{
    try{

        const reqBody={
            client_id: "4743fb00-e573-11ec-b5d6-1fc81b6a5bb1",
            email: data?.email,
            password: data?.password,
        }

        const res=await axios.post(API_URLS,reqBody);

        if(res?.error){
            console.log("Err",res?.error?.message);
        }
    }
    catch(err){
        console.log("error in login",err);
    }

};