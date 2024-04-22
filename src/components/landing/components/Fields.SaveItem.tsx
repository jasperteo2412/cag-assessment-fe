import React from "react";
import { Form, Input } from "antd";

export function SaveItemName(props: any){

    const { name, handleChange } = props;

    return(
        <Form.Item
            name="saveItemName"
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

export function SaveItemPrice(props: any){

    const { price, handleChange } = props;

    return(
        <Form.Item
            name="saveItemPrice"
            label={<label> Price </label>}
        >
            <Input
                type="number"
                name="price"
                value={price}
                placeholder="Please enter..."
                onChange={handleChange}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}

export function SaveItemCategory(props: any){

    const { category, handleChange } = props;

    return(
        <Form.Item
            name="saveItemCategory"
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