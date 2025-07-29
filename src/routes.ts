import { Router } from "express";
import { sectorRoute } from "./controllers/SectorController";
import { roleRoute } from "./controllers/RoleController";

export const routes = Router();

routes.use('/sectors', sectorRoute);
routes.use('/roles', roleRoute);