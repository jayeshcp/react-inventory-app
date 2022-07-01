import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 8px;
`;

export default function Page({ header, children }) {
  return (
    <Wrapper>
      {header && <h2>{header}</h2>}
      {children}
    </Wrapper>
  );
}
