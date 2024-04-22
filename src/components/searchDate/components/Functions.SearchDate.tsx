import { postFilterDate } from "src/services/inventoryApis";

export function filterDateSearch(...args: any){
    const [formData, setData, setSuccess, setError, setTotalPrice] = args;
    var response: string = '';
    postFilterDate(formData).then((data: any) =>{
        if(data.status === 200){
            response = data.res.items;
            setTotalPrice(data.res.total_price);
            const tableData = filterDateSearchData(response)
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

function filterDateSearchData(data: any){
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