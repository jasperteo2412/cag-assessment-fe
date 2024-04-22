import axios from "axios";
import { apiConfig } from "./apiConfig";

const APIConfig: any = apiConfig();

export const getItems = async (data: any) => {
    let res;
    let status;
    let resError;

    await axios.get(APIConfig.API.itemsUrl, data).then((response: any) => {
        res = response.data;
        status = response.status;
        if(status !== 200){
            const error = response.data.error;
            resError = "An error has ocurred: "+error;
        }
    }).catch((error: any) => {
        status = error.code;
        resError = "An error has ocurred: "+error;
    });

    return { res, status, resError };
}

export const postInsert = async (data: any) => {
    let res;
    let status;
    let resError;

    await axios.post(APIConfig.API.insertUrl, data).then((response: any) => {
        res = response.data;
        status = response.status;
        if(status !== 200){
            const error = response.data.error;
            resError = "An error has ocurred: "+error;
        }
    }).catch((error: any) => {
        status = error.code;
        resError = "An error has ocurred: "+error;
    });

    return { res, status, resError };
}

export const postFilter = async (data: any) => {
    let res;
    let status;
    let resError;

    await axios.post(APIConfig.API.filterUrl, data).then((response: any) => {
        res = response.data;
        status = response.status;

        if(status !== 200){
            const error = response.data.error;
            resError = "An error has ocurred: "+error;
        }
    }).catch((error: any) => {
        status = error.code;
        resError = "An error has ocurred: "+error;
    });

    return { res, status, resError };
}

export const postFilterDate = async (data: any) => {
    let res;
    let status;
    let resError;

    await axios.post(APIConfig.API.filterDateUrl, data).then((response: any) => {
        res = response.data;
        status = response.status;

        if(status !== 200){
            const error = response.data.error;
            resError = "An error has ocurred: "+error;
        }
    }).catch((error: any) => {
        status = error.code;
        resError = "An error has ocurred: "+error;
    });

    return { res, status, resError };
}

export const postCategory = async (data: any) => {
    let res;
    let status;
    let resError;

    await axios.post(APIConfig.API.categoryUrl, data).then((response: any) => {
        res = response.data;
        status = response.status;

        if(status !== 200){
            const error = response.data.error;
            resError = "An error has ocurred: "+error;
        }
    }).catch((error: any) => {
        status = error.code;
        resError = "An error has ocurred: "+error;
    });

    return { res, status, resError };
}