import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './style.css';

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

export default function About() {
  return (
    <div>
      <div>
        <p>
          Inventory is a small web application for managing inventory of items
        </p>
      </div>
    </div>
  );
}
