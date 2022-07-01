import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './style.css';
import Home from './Home';
import CreateEditInventory from './CreateEditInventory';
import About from './About';
import Settings from './Settings';

const NavBlock = styled.div`
  margin-bottom: 12px;
  display: flex;
`;

const Divider = styled.div`
  margin-right: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-right: 1px solid silver;
`;

export default function App() {
  return (
    <div>
      <h3>Inventory</h3>
      <NavBlock>
        <Link to="/">Home</Link>
        <Divider />
        <Link to="/settings">Settings</Link>
        <Divider />
        <Link to="/about">About</Link>
      </NavBlock>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/inventory/:id/:action"
          element={<CreateEditInventory />}
        />
      </Routes>
    </div>
  );
}
