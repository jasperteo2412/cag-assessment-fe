import { Button } from "antd";
import React from "react";

export default function SaveItemButton(props: any){

    const { handleSave } = props;
    
    return(
        <div>
            <Button 
                style={{backgroundColor: '#EEAF2A', color: 'white'}}
                onClick={() => {handleSave();}}
            >
                Save Item
            </Button>
        </div>
    );
}