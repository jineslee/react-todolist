import React from 'react'
import { Checkbox,Button } from 'antd';

class TodoItem extends React.Component {
  handleChange(){
    let isDone = !this.props.isDone ;
    this.props.changeTodoState(this.props.index,isDone)
  }

  handleDelete () {
    this.props.deleteTodoState(this.props.index)
  }

  render(){
    let className = this.props.isDone?'task-done':'' ;
    return (
      <li>
        <label>
          <Checkbox checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
          <div className='time-task'>
             <span className="time">{this.props.time}</span>
             <span className={className+' task'}>{this.props.text}</span>
          </div>
          <Button type="danger" size="small" onClick={this.handleDelete.bind(this)}>删除 </Button>
        </label>
      </li>
      )
  }
}
export default TodoItem 