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

export default Stats;
