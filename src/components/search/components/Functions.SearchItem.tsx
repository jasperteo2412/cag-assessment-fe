import { postFilter } from "src/services/inventoryApis";

export function filterSearch(...args: any){
    const [formData, setData, setSuccess, setError, setTotalRecords] = args;
    var response: string = '';
    postFilter(formData).then((data: any) =>{
        if(data.status === 200){
            response = data.res.items;
            setTotalRecords(data.res.total);
            const tableData = filterSearchData(response)
            setData(tableData);
            setSuccess(true);
        }
        else{
            setData([]);
            setError(true);
        }
    });

    return response;
}

function filterSearchData(data: any){
    return data.map((item: any, index: number) => {
        const id = item.id;
        const name = item.name;
        const category = item.category;
        const price = item.price;

        return{
            id,
            name,
            category,
            price
        }
    })
}