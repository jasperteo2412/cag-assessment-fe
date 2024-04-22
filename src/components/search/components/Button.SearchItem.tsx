import { Button } from "antd";
import React from "react";

export default function SearchItemButton(props: any){

    const { handleSearch } = props;
    
    return(
        <div>
            <Button 
                style={{backgroundColor: '#EEAF2A', color: 'white'}}
                onClick={() => {handleSearch();}}
            >
                Search
            </Button>
        </div>
    );
}