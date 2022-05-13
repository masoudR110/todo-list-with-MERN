import './AddTask.css';

const AddTask = () => {
    return (
        <div className="add-task-wrapper">
            <form className="add-task-wrapper__form">
                <input className="add-task-wrapper__input" />
                <button className="add-task-wrapper__btn-submit" type="button" >ثبت</button>
            </form>
        </div>
    )
}

export default AddTask;