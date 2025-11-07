const taskRouter = require("./task.router")
module.exports = (app) => {
    const version = "/api/v1"
    app.use(version + "/task",taskRouter)
    app.use((req,res) => {
        res.status(404).json({ code: 404 })
    })
    app.use((err, req, res, next) => {
        res.status(500).json({ code: 500, message: err.message });
    });
}   