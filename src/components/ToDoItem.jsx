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

export default ToDoItem;
