import db from "../Database/index.js";

function ModuleRoutes(app) {
    app.delete("/api/modules/:mid", (req, res) => {
        const {mid} = req.params;
        db.modules = db.modules
            .filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    app.post("/api/courses/:cid/modules", (req, res) => {
        const {cid} = req.params;
        const module = {
            ...req.body,
            _id: new Date().getTime().toString(),
            course: cid
        };
        db.modules.push(module);
        res.send(module);
    });

    app.get("/api/courses/:cid/modules", (req, res) => {
        const {cid} = req.params;
        const modules = db.modules
            .filter((m) => m.course === cid);
        res.send(modules);
    });
}

export default ModuleRoutes;