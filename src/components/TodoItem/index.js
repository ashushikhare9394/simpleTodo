// Write your code here
import './index.css'

const TodoItem = props => {
  const {deleteTodo, todoDetails} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <div>
        <p className="para">{title}</p>
        <button tyoe="button" onClick={this.onDelete} className="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
