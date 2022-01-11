import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Menu, Typography} from 'antd';
import {HomeOutlined, MoneyCollectOutlined, BuildOutlined , FundOutlined, MenuOutlined} from '@ant-design/icons';


const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item  icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BuildOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;