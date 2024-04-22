import { Form, Select } from "antd";
import React from "react";

export function ViewCategories(props: any){

    const { options, setCategory } = props;

    const handleChange = (value: any) => {
        setCategory(value);
    }

    return(
        <Form.Item
            name="saveItemCategory"
            label={<label> Select Category: </label>}
            initialValue={"All"}
        >
            <Select
                placeholder="Please choose..."
                onChange={handleChange}
                options={options}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}