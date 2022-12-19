const TodoList = ({id, text, isDel, todoClickEvent}:any) => {
    const handleOnClick = () => {
        todoClickEvent[isDel ? 'del' : 'complete'](id);
    };

    return (
        <div id={id} className="checkList">
            <span>{text}</span>
            <span 
                className={isDel ?  'finish' : 'todo'} 
                todo-id={id} 
                todo-text={text}
                onClick={handleOnClick}
            >
                {isDel ?  '❌' : '✔️'}
            </span>
        </div>
    );
};


export default TodoList;