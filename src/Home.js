import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { useInventoryStore } from './store';

const Card = styled.div`
  margin-bottom: 12px;
`;

const ButtonBar = styled.div`
  margin-right: 16px;
  display: inline-block;
`;

const Wrapper = styled.div`
  margin-top: 28px;
`;

const Title = styled.div`
  font-size: 1.2em;
  display: inline-block;
`;

const Description = styled.div`
  margin-left: 38px;
`;

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

export default function Home() {
  let navigate = useNavigate();
  const { items, deleteItem } = useInventoryStore();

  const handleItemDelete = (item) => {
    const result = confirm(`Deleting ${item.title}. Are you sure?`);
    if (result === true) {
      deleteItem(item);
    }
  };

  const handleAddNew = () => {
    navigate(`/inventory/${uuidv4()}/create`, { replace: true });
  };

  return (
    <div>
      <Wrapper>
        <NavBlock>
          <button title="Add new inventory item" onClick={handleAddNew}>
            Add New
          </button>
        </NavBlock>
        {Object.keys(items).length === 0 && <div>No items exist yet!</div>}
        {items &&
          Object.keys(items).map((key) => (
            <Card key={items[key].id}>
              <div>
                <ButtonBar>
                  <button
                    title="Delete"
                    onClick={() => handleItemDelete(items[key])}
                  >
                    x
                  </button>
                </ButtonBar>
                <Title>
                  <Link to={`/inventory/${items[key].id}/edit`}>
                    {items[key].title}
                  </Link>
                </Title>
              </div>
              <Description>
                <i>{items[key].description}</i>
              </Description>
              <Description>Manufacturer: {items[key].manufacturer}</Description>
            </Card>
          ))}
      </Wrapper>
    </div>
  );
}
