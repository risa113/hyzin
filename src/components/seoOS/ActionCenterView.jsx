import React, { useState } from 'react';
import { CheckSquare, Plus, Filter, User, Calendar, Tag, ChevronRight, ChevronLeft, Trash2 } from 'lucide-react';

export default function ActionCenterView({ tasks, setTasks }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [isAddingTask, setIsAddingTask] = useState(false);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    source: 'Manual Task Entry',
    category: 'GBP',
    priority: 'P1',
    impact: 'High',
    effort: 'Low',
    owner: 'SEO Lead',
    dueDate: '2026-10-15',
    status: 'Backlog'
  });

  const columns = ['Backlog', 'Ready', 'In Progress', 'Review', 'Completed'];
  const categories = ['All', 'GBP', 'Website', 'Keywords', 'Reviews', 'Backlinks', 'Citations', 'Content', 'Technical SEO'];

  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    const created = {
      ...newTask,
      id: `task-${Date.now()}`
    };
    setTasks([...tasks, created]);
    setIsAddingTask(false);
    setNewTask({
      title: '',
      description: '',
      source: 'Manual Task Entry',
      category: 'GBP',
      priority: 'P1',
      impact: 'High',
      effort: 'Low',
      owner: 'SEO Lead',
      dueDate: '2026-10-15',
      status: 'Backlog'
    });
  };

  const filteredTasks = tasks.filter(t => {
    const catMatch = filterCategory === 'All' || t.category === filterCategory;
    const prioMatch = filterPriority === 'All' || t.priority === filterPriority;
    return catMatch && prioMatch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-amber-400" />
            SEO Action Center (Kanban Task Board)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Every audit recommendation is automatically tracked as an actionable task with owner assignment and due dates.
          </p>
        </div>
        <button
          onClick={() => setIsAddingTask(!isAddingTask)}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-4 h-4" /> Create Custom Task
        </button>
      </div>

      {/* Create Task Drawer Form */}
      {isAddingTask && (
        <form onSubmit={handleCreateTask} className="bg-slate-900 border border-amber-500/30 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-amber-400">Add New SEO Action Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Task Title *</label>
              <input
                type="text"
                required
                value={newTask.title}
                onChange={e => setNewTask({...newTask, title: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
                placeholder="e.g. Add FAQ microdata schema to homepage"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Area / Category</label>
              <select
                value={newTask.category}
                onChange={e => setNewTask({...newTask, category: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              >
                {categories.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Priority</label>
              <select
                value={newTask.priority}
                onChange={e => setNewTask({...newTask, priority: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
              >
                <option value="P1">P1 - High</option>
                <option value="P2">P2 - Medium</option>
                <option value="P3">P3 - Low</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Description</label>
            <input
              type="text"
              value={newTask.description}
              onChange={e => setNewTask({...newTask, description: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-white"
            />
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsAddingTask(false)} className="px-3 py-1 text-xs text-slate-400">Cancel</button>
            <button type="submit" className="px-4 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg">Add Task</button>
          </div>
        </form>
      )}

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-300 shrink-0">Category:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition shrink-0 ${
                filterCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Kanban Board Columns (Backlog -> Ready -> In Progress -> Review -> Completed) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto">
        {columns.map((col, colIdx) => {
          const colTasks = filteredTasks.filter(t => t.status === col);
          return (
            <div key={col} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 space-y-3 min-w-[260px]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 px-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    col === 'Backlog' ? 'bg-slate-500' :
                    col === 'Ready' ? 'bg-blue-400' :
                    col === 'In Progress' ? 'bg-amber-400' :
                    col === 'Review' ? 'bg-purple-400' : 'bg-emerald-400'
                  }`} />
                  {col}
                </span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-3 min-h-[350px]">
                {colTasks.map(t => (
                  <div key={t.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-2.5 hover:border-slate-700 transition">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {t.priority}
                      </span>
                      <button onClick={() => removeTask(t.id)} className="text-slate-500 hover:text-rose-400 p-0.5">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-xs font-bold text-white leading-snug">{t.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{t.description}</p>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-900">
                      <span>Area: <strong className="text-slate-300">{t.category}</strong></span>
                      <span>Owner: <strong className="text-slate-300">{t.owner}</strong></span>
                    </div>

                    {/* Quick Move Buttons */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-900/80">
                      {colIdx > 0 ? (
                        <button
                          onClick={() => moveTask(t.id, columns[colIdx - 1])}
                          className="text-[10px] text-slate-400 hover:text-white flex items-center gap-0.5"
                        >
                          <ChevronLeft className="w-3 h-3" /> Move Back
                        </button>
                      ) : <span />}
                      
                      {colIdx < columns.length - 1 ? (
                        <button
                          onClick={() => moveTask(t.id, columns[colIdx + 1])}
                          className="text-[10px] text-amber-400 hover:underline flex items-center gap-0.5 font-semibold"
                        >
                          Next Stage <ChevronRight className="w-3 h-3" />
                        </button>
                      ) : <span />}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
