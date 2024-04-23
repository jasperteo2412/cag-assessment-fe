import React from "react";
import { Form, Input } from "antd";

export function SearchItemName(props: any){

    const { name, handleChange } = props;

    return(
        <Form.Item
            name="name"
            label={<label> Name </label>}
        >
            <Input
                name="name"
                placeholder="Please enter..."
                value={name}
                onChange={handleChange}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}

export function SearchItemLowestPrice(props: any){

    const { priceRange, setPriceRange } = props;

    function handleChange(event: any){
        const { value } = event.target;
        const tempRange = priceRange;
        if(value.length > 0){
            tempRange[0] = parseFloat(value);
        }
        else{
            tempRange[0] = 0;
        }
        setPriceRange(tempRange);
    }

    return(
        <Form.Item
            name="lowestPrice"
            label={<label> Lowest Price </label>}
            style={{marginRight: "10px"}}
        >
            <Input
                type="number"
                name="lowestPrice"
                placeholder="Please enter..."
                onChange={handleChange}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}

export function SearchItemHighestPrice(props: any){

    const { priceRange, setPriceRange } = props;

    function handleChange(event: any){
        const { value } = event.target;
        const tempRange = priceRange;
        if(value.length > 0){
            tempRange[1] = parseFloat(value);
        }
        else{
            tempRange[0] = 0;
        }
        setPriceRange(tempRange);
    }

    return(
        <Form.Item
            name="highestPrice"
            label={<label> Highest Price </label>}
        >
            <Input
                type="number"
                name="highestPrice"
                placeholder="Please enter..."
                onChange={handleChange}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}

export function SearchItemCategory(props: any){

    const { category, handleChange } = props;

    return(
        <Form.Item
            name="category"
            label={<label> Category </label>}
        >
            <Input
                name="category"
                value={category}
                placeholder="Please enter..."
                onChange={handleChange}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}