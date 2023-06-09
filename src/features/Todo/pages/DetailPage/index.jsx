import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm';

import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (todo, idx) => {
    //clone current array to new array
    const newTodoList = [...todoList];

    console.log(todo, idx);
    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus('all');
    console.log('all');
  };

  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
    console.log('completed');
  };

  const handleShowNewClick = () => {
    setFilterStatus('new');
    console.log('new');
  };

  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );
  console.log(renderedTodoList);

  const handleToDoFormSubmit = (values) => {
    console.log('Form submit: ', values);
  }

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleToDoFormSubmit}></TodoForm>

      <h3>Todo List</h3>
      <TodoList
        todoList={renderedTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>

      <button onCLick={handleShowAllClick}>ShowAllClick</button>
      <button onClick={handleShowCompletedClick}>ShowCompletedClick</button>
      <button onCLick={handleShowNewClick}>ShowNewClick</button>
    </div>
  );
}

export default ListPage;



