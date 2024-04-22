import { Alert, Card, Col, Form, Row, Spin } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { filterCategory, getCategoryList } from "./components/Functions.LandingPage";
import { ViewCategories } from "./components/Fields.ViewCategories";

export default function ViewItemsCard(props: any){

    const { reloadTable, setReloadTable } = props;

    const [form] = Form.useForm();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [dropdownData, setDropdownData] = useState([]);
    const [category, setCategory] = useState("all");

    const columns: ColumnsType<any> = [
        {
            title: 'Category',
            dataIndex: 'category',
            width: 200,
            key: 'category'
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
            width: 180,
            key: 'totalPrice'
        },
        {
            title: 'Count',
            dataIndex: 'count',
            width: 180,
            key: 'count'
        },
    ];

    function getCategoryDropdownData(){
        const requestBody = {
            "category": "all"
        }
        const args = [requestBody, setDropdownData, setSuccess, setError];
        getCategoryList(...args);
    }

    function getTableData(){
        setLoading(true);
        const requestBody = {
            "category": category,
        }
        const args = [requestBody, setData, setSuccess, setError];
        filterCategory(...args);
    }

    useEffect(()=>{
        if(success || error){
            setLoading(false);
        }
    }, [success, error, loading]);

    useEffect(()=>{
        if(reloadTable){
            getCategoryDropdownData();
            getTableData();
            setReloadTable(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadTable, setReloadTable]);

    useEffect(()=>{
        if(category){
            getTableData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return(
        <>
            { error?
                <Alert
                    message={"Error"}
                    description={"An error has ocurred, unable to load data"}
                    type={"error"}
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
                title="List of Inventory Categories"
                bordered={false}
                style={{width: '100%', padding: '20px', marginBottom: '10px'}}
            >
                <Spin tip="Loading..." spinning={loading}>
                    <Form
                        form={form}
                        name="ViewCategories"
                        layout="vertical"
                    >
                        <Row>
                            <Col xl={8}>
                                <ViewCategories
                                    options={dropdownData}
                                    setCategory={setCategory}
                                />
                            </Col>
                        </Row>
                    </Form>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            showSizeChanger: true,
                        }}
                    />
                </Spin>
            </Card>
        </>
    )
}