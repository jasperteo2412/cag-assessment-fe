import { postInsert } from "src/services/inventoryApis";

export function saveItem(...args: any){
    const [formData, setItemId, setSuccess, setError] = args;
    var response: string = '';
    postInsert(formData).then((data: any) =>{
        if(data.status === 200){
            response = data.res.id.toString();
            setItemId(response);
            setSuccess(true);
        }
        else{
            setItemId("");
            setError(true);
        }
    });

    return response;
}