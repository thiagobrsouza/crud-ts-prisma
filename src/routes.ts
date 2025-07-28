import { Router } from "express";
import { sectorRoute } from "./controllers/SectorController";

export const routes = Router();

routes.use('/sectors', sectorRoute);