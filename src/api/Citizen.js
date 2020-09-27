import HttpClient from "./HttpClient";

export default {    
   async fetch(params) {                
        const result = await  HttpClient.get("/api/citizens", {params: params});
        return {data: result['data']['data'], meta: result['data']['meta']};            
    }, 
}


