import { Alert, Card, Col, Form, Row, Spin, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { SearchItemCategory, SearchItemHighestPrice, SearchItemLowestPrice, SearchItemName } from "./components/Fields.SearchItem";
import SearchItemButton from "./components/Button.SearchItem";
import { filterSearch } from "./components/Functions.SearchItem";

export default function SearchComponentCard(){
    
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [totalRecords, setTotalRecords] = useState(0);

    const [filterData, setFilterData] = useState({
        name: "",
        category: "all",
        price_range: priceRange,
    });
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
    });
    const [sort, setSort] = useState({
        field: "id",
        order: "asc",
    });

    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        filters: filterData,
        pagination: pagination,
        sort: sort,
    });

    const { name, category } = filterData;

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [reloadTable, setReloadTable] = useState(false);

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

    function handleChange(event: any){
        const { name, value } = event.target;
        setFilterData((prevState) =>{
            return{
                ...prevState,
                [name]: value,
            }
        })
    }

    function handlePagination(page: any, pageSize: any){
        if(pagination.page !== page){
            setPagination({
                ...pagination,
                page: page,
            })
        }
        if(pagination.limit !== pageSize){
            setPagination({
                ...pagination,
                limit: pageSize,
            })
        }
    }

    function handleSorting(pagination: any, filters: any, sorter: any){
        const order = sorter.order;
        const column = sorter.columnKey;
        var tempOrder = '';
        
        if(order !== undefined && column !==undefined){
            if(order === 'ascend'){
                tempOrder = 'asc';
            }
            else if(order === 'descend'){
                tempOrder = 'desc';
            }

            setSort({
                field: column,
                order: tempOrder
            })
        } else {
            setSort({
                field: "id",
                order: "asc"
            })
        }
    }

    function handleSearch(){
        setLoading(true);
        setFormData((prevState) => {
            return{
                ...prevState,                
                filters: filterData,
            }
        });
    }

    useEffect(()=>{
        if(success || error){
            setLoading(false);
        }
    }, [success, error, form, loading]);

    useEffect(()=>{
        setFilterData((prevState)=>{
            return{
                ...prevState,
                price_range: priceRange,
            }
        })
    }, [priceRange])

    useEffect(()=>{
        setFormData((prevState) => {
            return{
                ...prevState,                
                pagination: pagination,
                sort: sort,
            }
        });
        setReloadTable(true);
    }, [pagination, sort]);

    useEffect(()=>{
        if(loading){
            const args = [formData, setData, setSuccess, setError, setTotalRecords];
            filterSearch(...args);
        }
    }, [formData, loading]);

    useEffect(()=>{
        if(reloadTable){
            handleSearch();
            setReloadTable(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadTable]);

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
                            <Col xl={24} xs={24}>
                                <SearchItemName
                                    value={name}
                                    handleChange={handleChange}
                                />
                            </Col>
                            <Col xl={12} xs={24}>
                                <SearchItemLowestPrice
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                />
                            </Col>
                            <Col xl={12} xs={24}>
                                <SearchItemHighestPrice
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                />
                            </Col>
                            <Col xl={24} xs={24}>
                                <SearchItemCategory
                                    value={category}
                                    handleChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row style={{width: "100%"}}>
                            <SearchItemButton
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
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            current: pagination.page,
                            pageSize: pagination.limit,
                            onChange: handlePagination,
                            total: totalRecords, 
                            showSizeChanger: true,
                        }}
                        onChange={handleSorting}
                    />
                </Spin>
            </Card>
        </>
    )
}