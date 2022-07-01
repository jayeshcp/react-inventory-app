import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import './style.css';

const Label = styled.label`
  display: flex;
  font-weight: bold;
`;

const ButtonBar = styled.div`
  margin-top: 18px;
`;

const Wrapper = styled.div`
  margin-top: 28px;
`;

const Button = styled.button`
  margin-right: 8px;
`;

const FormSection = styled.div`
  margin-bottom: 12px;
`;

const Input = styled.input`
  padding: 8px 8px;
  min-width: 400px;
`;

export default function InventoryForm({
  title: propTitle,
  description: propDescription,
  manufacturer: propManufacturer,
  onSaveClicked,
  onCancelClicked,
}) {
  const [title, setTitle] = useState(propTitle);
  const titleRef = useRef(null);
  const [description, setDescription] = useState(propDescription);
  const [manufacturer, setManufacturer] = useState(propManufacturer);

  useEffect(() => {
    if (titleRef) {
      // titleRef.current.focus();
    }
  }, []);

  const handleSaveClicked = (event) => {
    onSaveClicked({
      title,
      description,
      manufacturer,
    });
  };

  return (
    <div>
      <Wrapper>
        <form onSubmit={handleSaveClicked}>
          <FormSection>
            <Label for="inventoryTitle">Title</Label>
            <Input
              id="inventoryTitle"
              type="text"
              ref={titleRef}
              value={title}
              autoComplete="off"
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormSection>
          <FormSection>
            <Label for="inventoryDescription">Description</Label>
            <Input
              id="inventoryDescription"
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormSection>
          <FormSection>
            <Label for="inventoryManufacturer">Manufacturer</Label>
            <Input
              id="inventoryManufacturer"
              type="text"
              value={manufacturer}
              onChange={(event) => setManufacturer(event.target.value)}
            />
          </FormSection>
        </form>

        <ButtonBar>
          <Button onClick={handleSaveClicked} disabled={title === ''}>
            Save
          </Button>
          <Button onClick={onCancelClicked}>Cancel</Button>
        </ButtonBar>
      </Wrapper>
    </div>
  );
}
