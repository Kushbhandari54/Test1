import axios from "../../utils/axios";
import { API_URLS } from "../../config/API_URLS";

 
export const demoApi= async(id)=>{
    try{
        const paramsData={
            params:{id:id},
            headers:{Authorization:'Authorization'},
            idAuthorized:true,
        }

        const response=await axios.get(API_URLS.postDemo,paramsData);
        return response;
    }
    catch({response}){
        throw new Error(response?.data?.error?.message);
    }
}
