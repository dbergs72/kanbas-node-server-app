import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import AssignmentRoutes from "./assignments/routes.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://a5--dazzling-cat-7b74a7.netlify.app", "http://a5--dazzling-cat-7b74a7.netlify.app", "https://dazzling-cat-7b74a7.netlify.app"],
  }),
);
app.use(express.json());
AssignmentRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);
