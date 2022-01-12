import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import "./App.css"

import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Exchange from './components/Exchange/Exchange';
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';
import News from './components/News/News';
import CryptoDetails from './components/CryptoDetails/CryptoDetails';

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className='routes'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exchanges" element={<Exchange />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/news" element={<News />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer" >
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Crypto <br />
              All rights reserverd
            </Typography.Title>
            <Space className='footer-icon'>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
