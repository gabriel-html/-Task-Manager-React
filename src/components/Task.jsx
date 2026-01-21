import { Trash2 } from "lucide-react";

import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
          >
            {task.title}
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md  text-white"
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md  text-white"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Task;
