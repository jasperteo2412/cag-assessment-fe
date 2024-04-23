import React from "react";
import { DatePicker, Form } from "antd";

export function SearchDateStart(props: any){

    const { handleStartDate } = props;

    return(
        <Form.Item
            name="startDate"
            label={<label> Date From </label>}
            rules={[
                {
                    required: true,
                    message: 'Date is required'
                }
            ]}
            style={{marginRight: "10px"}}
        >
            <DatePicker
                name="startDate"
                placeholder="Please select..."
                onChange={(date) => handleStartDate(date)}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}

export function SearchDateEnd(props: any){

    const { handleEndDate } = props;

    return(
        <Form.Item
            name="endDate"
            label={<label> Date To </label>}
            rules={[
                {
                    required: true,
                    message: 'Date is required'
                }
            ]}
        >
            <DatePicker
                name="endDate"
                placeholder="Please select..."
                onChange={(date) => handleEndDate(date)}
                style={{width: "100%"}}
            />
        </Form.Item>
    )
}