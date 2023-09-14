import ToDoItem from './App';

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

export default ToDoList;
