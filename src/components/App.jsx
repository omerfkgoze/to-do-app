import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import ToDoList from './ToDoList';
import Stats from './Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container">
      <Header />
      <Form onAddItems={handleAddItems} />
      {items.length === 0 ? (
        ''
      ) : (
        <ToDoList
          item={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      )}
      <Stats items={items} />
    </div>
  );
}

export default App;
