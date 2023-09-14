import { useState } from 'react';

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

export default Form;
