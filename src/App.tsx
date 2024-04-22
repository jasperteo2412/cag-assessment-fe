import { Layout } from "antd";
import React from "react";
import UrlRoutesContent from "./services/UrlRoutesContent";
import { HashRouter } from "react-router-dom";

export default function App(){
    return(
        <HashRouter>
            <Layout>
                <UrlRoutesContent/>
            </Layout>
        </HashRouter>
    )
};