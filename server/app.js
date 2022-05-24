const express = require('express');
const mongoose = require('mongoose');
const TaskController = require('./controllers/TaskController');
const cors = require('cors')

const app = express();
mongoose.connect('mongodb://localhost:27017/todo_list');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/', TaskController.tasks );

app.post('/task/store', TaskController.store )

app.put('/task/update/:id', TaskController.update )

app.delete('/task/delete/:id', TaskController.delete )

app.listen( 4000, () => console.log('Server is running in port 4000') );