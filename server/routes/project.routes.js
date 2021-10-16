const ProjectController = require('../controllers/project.controller');



module.exports= function(app){
    app.get("/api/health",ProjectController.index );
    app.post("/api/project", ProjectController.createOne);
    app.get("/api/project", ProjectController.getAll);
    app.get("/api/project/:id", ProjectController.getOne);
    app.put("/api/project/:id", ProjectController.updateOne);
    app.delete("/api/project/:id", ProjectController.deleteOne);
    // app.put("/api/project/:id".ProjectController.addLike);


}