
const envValue : string = process.env.NODE_ENV;
const BASE_URL: any = process.env.API_ROOT;

export const apiConfig = () => {

    //URL domain
    const ITEMS : string = "/items";
    const INSERT : string = "/insert";
    const FILTER : string = "/filter";
    const FILTER_DATE : string = FILTER+"/date";
    const CATEGORY : string = "/category";

    console.log("ENV VALUE!!! ", envValue);

    if(envValue === "development"){

        const API = {
            itemsUrl: BASE_URL + ITEMS,
            insertUrl: BASE_URL + INSERT,
            filterUrl: BASE_URL + FILTER,
            filterDateUrl: BASE_URL + FILTER_DATE,
            categoryUrl: BASE_URL + CATEGORY,
        }

        return { API };
    }
    else if(envValue === "production"){
        //  SET PRODUCTION VARIABLES
        const API = {
            itemsUrl: BASE_URL + ITEMS,
            insertUrl: BASE_URL + INSERT,
            filterUrl: BASE_URL + FILTER,
            filterDateUrl: BASE_URL + FILTER_DATE,
            categoryUrl: BASE_URL + CATEGORY,
        }

        return { API };
    }
    else{
        const API = {
            itemsUrl: "",
            insertUrl: "",
            filterUrl: "",
            filterDateUrl: "",
            categoryUrl: "",
        }

        return { API };
    }
};