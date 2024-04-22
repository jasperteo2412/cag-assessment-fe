import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Form, Row, Spin } from "antd";
import { SaveItemCategory, SaveItemName, SaveItemPrice } from "./components/Fields.SaveItem";
import SaveItemButton from "./components/Button.SaveItem";
import { saveItem } from "./components/Functions.SaveItem";

export default function LandingPage(){

    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        name: "",
        price: parseFloat(""),
        category: "",
    });
    const { name, price, category } = formData;

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [itemId, setItemId] = useState("");

    function handleChange(event: any){
        const { name, value } = event.target;
        setFormData((prevState) =>{
            var returnValue = value;
            if(name === 'price'){
                returnValue = parseFloat(value);
            }
            return{
                ...prevState,
                [name]: returnValue,
            }
        })
    }

    function handleSave(){
        setLoading(true);
        form.validateFields().then((value: any) =>{
            const args = [formData, setItemId, setSuccess, setError];
            saveItem(...args);
        }).catch((error: any) => {
            setError(true);
        })
    }

    useEffect(()=>{
        if(success || error){
            form.resetFields();
            setFormData({
                name: "",
                price: parseFloat(""),
                category: "",
            });
            setLoading(false);
        }
    }, [success, error, form, loading]);

    return(
        <div style={{padding: '20px', height: '100vh'}}>
            {success || error?
                <Alert
                    message={success? "Success" : "Error"}
                    description={success? `Item ${itemId} has been added!` : "An error has ocurred"}
                    type={success? "success" : "error"}
                    showIcon
                    closable
                    style={{
                        marginBottom: '10px'
                    }}
                />
                :
                undefined
            }
            
            <Card
                title="Insert Inventory"
                bordered={false}
                style={{width: '100%', padding: '20px'}}
            >
                <Spin tip="Loading..." spinning={loading}>
                    <Form
                        form={form}
                        name="SaveItem"
                        layout="vertical"
                    >
                        <Row style={{width: "100%"}}>
                            <Col xl={24} xs={24}>
                                <SaveItemName
                                    value={name}
                                    handleChange={handleChange}
                                />
                            </Col>
                            <Col xl={24} xs={24}>
                                <SaveItemPrice
                                    value={price}
                                    handleChange={handleChange}
                                />
                            </Col>
                            <Col xl={24} xs={24}>
                                <SaveItemCategory
                                    value={category}
                                    handleChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row style={{width: "100%"}}>
                            <SaveItemButton
                                handleSave={handleSave}
                            />
                        </Row>
                    </Form>
                </Spin>
            </Card>
        </div>
    )
};