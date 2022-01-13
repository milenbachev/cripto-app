import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';

import News from '../News/News';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies'

import {useGetCryptosQuery} from '../../services/cryptoApi';


const Home = () =>{
    const{data, isFetching} = useGetCryptosQuery();
    const globalState = data?.data?.stats;

    if(isFetching) return 'Loading...'
   
    return(
        <div>
            <Typography.Title level={2} className='heading'></Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalState.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalState.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalState.totalMarkets)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Lates Crypto news</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to="/news">Show More</Link></Typography.Title>
            </div>
            <News simplified/>
        </div>
    )
}

export default Home