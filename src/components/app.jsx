import React from 'react' 
import ReactDOM  from 'react-dom' 
import TodoHeader from './todo-header.jsx' 
import TodoMain from './todo-main.jsx' 
import TodoFooter from './todo-footer.jsx'

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        todos: [],
        isAllChecked:false
      }
    }
    //添加新任务
    addTodo(item){
       this.state.todos.push(item)
       this.checkAllState()
        //修改状态的值
        this.setState({
          todos:this.state.todos
        })
    }
    //改变任务的状态
    changeTodoState( index , isDone , isChangeAll = false){
      let isAllChecked = this.state.isAllChecked ;
      if(isChangeAll) {
         this.setState({
           todos:this.state.todos.map( (todo)=> {
               todo.isDone = !isAllChecked 
               return todo
             }),
           isAllChecked:!isAllChecked
         })
      }else {
        this.state.todos[index].isDone = isDone ;
        this.checkAllState() 
      }
    }

    //删除已经完成的任务
    deleteTodoState( index ) {
      this.state.todos.splice(index,1) ;

      this.setState({
        todos:this.state.todos
      })
    }

    //全选的状态
    checkAllState(){
       let countDone = this.state.todos.filter(todo => todo.isDone) ;

       this.state.todos.length===countDone.length ? this.state.isAllChecked=true :this.state.isAllChecked = false;
       this.setState({
          todos:this.state.todos,
          isAllChecked:this.state.isAllChecked
      })
    }

    //删除所有任务
    deleteAll(){
      this.state.todos = [] ;
      this.setState({
          todos:this.state.todos,
          isAllChecked:false
      })
    }
  
    render(){
      let todoInfo = {
        isAllChecked:this.state.isAllChecked,
        todoCount :this.state.todos.length || 0 ,
        todoDone : (this.state.todos.filter(todo =>todo.isDone)).length || 0
      }

      return (
        <div className="todo-wrapper">
         <TodoHeader addTodo={this.addTodo.bind(this)}/>
         <TodoMain todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)} deleteTodoState={this.deleteTodoState.bind(this)}/>
         <TodoFooter changeTodoState={this.changeTodoState.bind(this)} deleteAll={this.deleteAll.bind(this)} {...todoInfo} />
        </div>
      )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))