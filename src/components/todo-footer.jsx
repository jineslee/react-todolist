import React from 'react' ;
import {Checkbox,Button} from 'antd' ;

class TodoFooter extends React.Component {

  changeAll(){
    this.props.changeTodoState(null,null,true) ;
  }

  deleteAll(){
    this.props.deleteAll() ;
  }

  render() {
    let remain = this.props.todoCount -this.props.todoDone ;

    return (
        <div className="todo-footer">
          <label>
          <Checkbox checked={this.props.isAllChecked} onChange={this.changeAll.bind(this)}/> 全选
          </label>
         <span className="item-left">还剩{remain}未完成</span>
         <Button type="danger" size="small" onClick={this.deleteAll.bind(this)}>清除全部已完成</Button>
        </div>
      )
  }
}

export default TodoFooter 