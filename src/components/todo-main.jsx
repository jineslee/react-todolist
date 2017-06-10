import React from 'react' ;
import TodoItem from './todo-item.jsx' ;

class TodoMain extends React.Component{

   render(){
    if(this.props.todos.length===0){
      return (
          <div className="todo-empty">恭喜您，目前没有待办任务</div>
        )
    }else {
      return (
          <ul className="todo-main">
            {
              this.props.todos.map((todo,index) => {
               return <TodoItem text={todo.text} isDone={todo.isDone} index={index} time={todo.time} {...this.props} key={index} />
             })
            }
          </ul>
        )
    }
   }
}

export default TodoMain 