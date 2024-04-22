import { Link, useLocation, useRoutes } from 'react-router-dom';
import urlRoutes from './urlRoutes';
import React, { useEffect, useState } from 'react';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';

export default function UrlRoutesContent(){

    let location = useLocation();
    const element = useRoutes(urlRoutes);
    const [menuKey, setMenuKey] = useState('1');

    useEffect(()=>{
        if(location){
            if(menuKey !== location.pathname){
                setMenuKey(location.pathname);
            }
        }
    }, [location, menuKey]);

    return(
        <Content style={{height: 'fit-content', paddingBottom: 0}}>
            <Header style={{ display: 'top', alignItems: 'center' }}>
                <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[menuKey]}
                style={{ flex: 1, minWidth: 0 }}
                >
                    <Menu.Item key="/home" onClick={() => {setMenuKey('/home')}}>
                        <span>Home</span>
                        <Link to="/home" />
                    </Menu.Item>
                    <Menu.Item key="/search" onClick={() => {setMenuKey('/search')}}>
                        <span>Search</span>
                        <Link to="/search" />
                    </Menu.Item>
                    <Menu.Item key="/search/date" onClick={() => {setMenuKey('/search/date')}}>
                        <span>Search By Date</span>
                        <Link to="/search/date" />
                    </Menu.Item>
                </Menu>
            </Header>
            {element}
            <Footer style={{display: 'bottom', textAlign: 'center', backgroundColor: 'white', height: '80px'}}>
                Inventory Management ©{new Date().getFullYear()} Created with Ant Design
            </Footer>
        </Content>
    );
}