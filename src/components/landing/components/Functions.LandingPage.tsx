import { postCategory, postInsert } from "src/services/inventoryApis";

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

export function filterCategory(...args: any){
    const [categories, setData, setSuccess, setError] = args;
    var response: string = '';
    postCategory(categories).then((data: any) =>{
        if(data.status === 200){
            response = data.res.items;
            const tableData = filterCategoryData(response)
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

export function getCategoryList(...args: any){
    const [categories, setDropdownData, setSuccess, setError] = args;
    var response: string = '';
    postCategory(categories).then((data: any) =>{
        if(data.status === 200){
            response = data.res.items;
            const tableData = filterCategoryDropdownData(response)
            setDropdownData(tableData);
            setSuccess(true);
        }
        else{
            setDropdownData([]);
            setError(true);
        }
    });

    return response;
}

function filterCategoryData(data: any){
    return data.map((item: any, index: number) => {
        const category = item.category;
        const count = item.count;
        const totalPrice = item.total_price;

        return{
            category,
            count,
            totalPrice
        }
    })
}

function filterCategoryDropdownData(data: any){
    const processedData = [{
        value: "all",
        label: "All"
    }];
    data.map((item: any, index: number) => {
        const category = item.category;
        
        return processedData.push({
            value: category,
            label: category
        });
    });

    return processedData;
}