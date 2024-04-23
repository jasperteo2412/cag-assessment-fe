import { Alert, Card, Col, Form, Row, Spin, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import SearchDateButton from "./components/Button.SearchDate";
import { SearchDateEnd, SearchDateStart } from "./components/Fields.SearchDate";
import { filterDateSearch } from "./components/Functions.SearchDate";

export default function SearchDateComponentCard(){

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        dt_from: startDate,
        dt_to: endDate,
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const columns: ColumnsType<any> = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 90,
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
            key: 'name',
            sorter: true,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            width: 200,
            key: 'category',
            sorter: true,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: 180,
            key: 'price',
            sorter: true,
        },
    ];

    // function formatDate(date: any){
    //     var formattedDate = date.toISOString().split("T")[0];
    //     return formattedDate;
    // }

    function handleStartDate(date){
        setStartDate(date);
    }

    function handleEndDate(date){
        setEndDate(date);
    }

    function handleSearch(){
        setLoading(true);
        form.validateFields().then((value: any) =>{
            const args = [formData, setData, setSuccess, setError, setTotalPrice];
            filterDateSearch(...args);
        }).catch((error: any) => {
            setError(true);
        })
    }

    useEffect(()=>{
        if(success || error){
            setLoading(false);
        }
    }, [success, error, loading]);

    useEffect(()=>{
        setFormData((prevState)=>{
            return{
                ...prevState,
                dt_from: startDate,
                dt_to: endDate,
            }
        })
    }, [startDate, endDate]);

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
                title="Search Inventory"
                bordered={false}
                style={{width: '100%', padding: '20px', marginBottom: '10px'}}
            >
                <Spin tip="Loading..." spinning={loading}>
                    <Form
                        form={form}
                        name="SaveItem"
                        layout="vertical"
                    >
                        <Row style={{width: "100%"}}>
                            <Col xl={12} xs={24}>
                                <SearchDateStart
                                    handleStartDate={handleStartDate}
                                />
                            </Col>
                            <Col xl={12} xs={24}>
                                <SearchDateEnd
                                    handleEndDate={handleEndDate}
                                />
                            </Col>
                        </Row>
                        <Row style={{width: "100%"}}>
                            <SearchDateButton
                                handleSearch={handleSearch}
                            />
                        </Row>
                    </Form>
                </Spin>
            </Card>

            <Card
                title="Search Results"
                bordered={false}
                style={{width: '100%', padding: '20px', marginBottom: '10px'}}
            >
                <Spin tip="Loading..." spinning={loading}>
                    <Row style={{width: "100%"}}>
                        <p>Total: ${totalPrice}</p>
                    </Row>
                    <Table
                        columns={columns}
                        dataSource={data}
                    />
                </Spin>
            </Card>
        </>
    )
}