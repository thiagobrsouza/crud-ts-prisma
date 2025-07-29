import { Request, Response, Router } from "express";
import { RoleService } from "../services/RoleService";

export const roleRoute = Router();
const service = new RoleService();

roleRoute.post('/', async (req: Request, res: Response) => {
    const { name, sectorId } = req.body;
    const result = await service.create({ name, sectorId });
    return res.status(201).json(result);
});

roleRoute.get('/', async (req: Request, res: Response) => {
    const result = await service.findAll();
    return res.json(result);
});

roleRoute.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.findById(+id);
    return res.json(result);
});

roleRoute.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, sectorId } = req.body;
    const result = await service.update(+id, { name, sectorId });
    return res.json(result);
});

roleRoute.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
});