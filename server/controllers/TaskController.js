const Task = require('./../models/Task')

exports.tasks = async function(req, res) {
    const tasks = await Task.find({});
    res.send(tasks);
}

exports.store = async function(req, res) {
    const task = await new Task({
        body: req.body.body,
        status: req.body.status
    });
    task.save( function(err, doc) {
        if(!err) { return res.send(doc) }
    })
}

exports.update = async function(req, res) {
    const updateResult = await Task.updateOne({ _id: req.params.id}, { status: req.body.status})
    if( updateResult.matchedCount > 0 ) {
        return res.send(updateResult)
    } else {
        return res.send({ error: true})
    }
}

exports.delete = async function(req, res) {
    const deleteResult = await Task.deleteOne({ _id: req.params.id });
    if( !deleteResult.deletedCount ) return res.send({ error: true});
    if( deleteResult.deletedCount ) return res.send({ result: true})
}