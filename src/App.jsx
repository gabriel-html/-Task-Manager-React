import AddTask from "./components/addTask";
import Task from "./components/Task";
import "./App.css";
import { useState } from "react";
import { v4 } from "uuid";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Revisar hooks e estado no React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Exercício de JavaScript",
      description: "Praticar map, filter e reduce",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Ler artigo sobre Node.js",
      description: "Entender event loop e async/await",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newtask = tasks.filter((task) => task.id !== taskId);
    setTasks(newtask);
  }

  function onAddTaskSubmit(title, description) {
    const newtask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newtask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center ">
          Task manager
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
