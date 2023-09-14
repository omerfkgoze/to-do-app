import { useState } from 'react';
import './App.css';

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

function Header() {
  return (
    <div className="header">
      <h1>do your best</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [note, setNote] = useState('');
  const [importance, setImportance] = useState('normal');

  function handleSubmit(e) {
    e.preventDefault();

    if (!note.trim()) return;

    const newItem = {
      note,
      id: Date.now(),
      completed: false,
      importance,
    };

    onAddItems(newItem);

    // reset the form
    setNote('');
    setImportance('normal');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select value={importance} onChange={e => setImportance(e.target.value)}>
        <option value="normal">⬛️ Normal</option>
        <option value="important">🟩 Important</option>
        <option value="very important">🟥 Very Important</option>
      </select>

      <input
        type="text"
        placeholder="do something"
        value={note}
        onChange={e => setNote(e.target.value)}
      />

      <button>ADD</button>
    </form>
  );
}

function ToDoList({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="todo-list">
      {item.map(item => (
        <ToDoItem
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  );
}

function ToDoItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.importance === 'very important'
          ? '🟥 '
          : item.importance === 'important'
          ? '🟩 '
          : '⬛️  '}
      </span>
      <p style={item.completed ? { textDecoration: 'line-through' } : {}}>
        {item.note}
      </p>
      <button onClick={() => onDeleteItem(item.id)}>DELETE</button>
    </div>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const normal = items?.filter(item => item.importance === 'normal').length;
  const important = items?.filter(
    item => item.importance === 'important'
  ).length;
  const veryImportant = items?.filter(
    item => item.importance === 'very important'
  ).length;

  const completed = items?.filter(item => item.completed).length;
  const total = items?.length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="stats">
      <p>Normal: {normal}</p>
      <p>Important: {important}</p>
      <p>Very Important: {veryImportant}</p>
      {percentage === 0 ? '' : <div>Completed: {percentage}% </div>}
    </div>
  );
}

export default App;
