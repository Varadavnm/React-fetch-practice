import React, { useEffect, useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { text: 'Yoga', checked: false },
        { text: 'Study MLF', checked: false },
        { text: 'Class preparation', checked: false },
        { text: 'Cooking', checked: false },
        { text: 'Project', checked: false },
        { text: 'Meeting', checked: false },
      ]);
      const setChange = (index) => {
        const updatedTasks = tasks.map((item, i) =>
          i === index ? { ...item, checked: !item.checked } : item
        );
        console.log(JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      };
  useEffect(()=>{
    setTimeout(()=>{
        setChange()
    },2000);
  })
  return (
    <div className="container"><h1>Today's Tasks</h1>
    <ul className="tasks">
        {tasks.map((item)=>(
            <li className="item" key={item.name}>
                 <input
              type="checkbox"
              onChange={() => setChange(item.index)}
              checked={item.checked}
            />
            <label style={{ color: item.checked ? "strike-through" : "none" }}>
              {item.item}
            </label>
            </li>
        ))}
    </ul>
    </div>
  );
}

export default ToDoList;
