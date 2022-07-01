import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';
import { useInventoryStore } from './store';
import InventoryForm from './InventoryForm';

export default function CreateEditInventoryContainer() {
  const { items, insertOrUpdate } = useInventoryStore();

  let navigate = useNavigate();
  let { id, action } = useParams();

  const currentItem = items[id];
  const title = currentItem?.title || '';
  const description = currentItem?.description || '';
  const manufacturer = currentItem?.manufacturer || '';

  const saveItem = (form) => {
    form.id = id;
    insertOrUpdate(form);

    navigate('/', { replace: true });
  };

  const cancel = () => {
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h4>{action === 'create' ? 'Add new' : 'Edit'}</h4>

      <InventoryForm
        title={title}
        description={description}
        manufacturer={manufacturer}
        onSaveClicked={saveItem}
        onCancelClicked={cancel}
      />
    </div>
  );
}
