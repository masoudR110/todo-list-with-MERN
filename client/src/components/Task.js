import './Task.css';

const Task = (props) => {
    const circleDotElement = (
        <svg className="task-box__checkbox-icon" onClick={ e => props.updateStatus(props.uuid, props.status) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
        </svg>
    );

    const circleElement = (
        <svg className="task-box__checkbox-icon" onClick={ e => props.updateStatus(props.uuid, props.status) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
        </svg>
    )
    
    return (
        <div className="task-box">
            { props.status === 'done' ? circleDotElement : circleElement }
            <p className="task-box__title">{ props.body }</p>
            <svg className="task-box__trash-icon" onClick={ e => props.deleteTask(props.uuid) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/>
            </svg>
        </div>
    )
}

export default Task ;