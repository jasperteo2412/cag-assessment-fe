import React, { useState } from "react";
import InsertItemCard from "./Card.InsertItem";
import ViewItemsCard from "./Card.ViewItems";

export default function LandingPage(){

    const [reloadTable, setReloadTable] = useState(true);

    return(
        <div style={{padding: '20px', height: 'fit-content'}}>
            <InsertItemCard setReloadTable={setReloadTable}/>
            <ViewItemsCard reloadTable={reloadTable} setReloadTable={setReloadTable}/>
        </div>
    )
};