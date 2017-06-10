import React from 'react';
import format from '../common' ;
import {Input} from 'antd';


class TodoHeader extends React.Component {
  
  handlerKeyUp(e) {
    if (e.keyCode == 13) {
      let value = e.target.value;
      if (!value) return;
      e.target.value = '' ;
      let date = format(new Date(),'yyyy-MM-dd hh:mm')
      
      this.props.addTodo({
          text: value,
          isDone: false,
          time:date
        })
    }
  }

  render() {
    return (
        <div className='todo-header'>
              <h1 className="todo-title">React-TodoList</h1>
               <Input autoFocus ref="input" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      )
  }
}

export default TodoHeader