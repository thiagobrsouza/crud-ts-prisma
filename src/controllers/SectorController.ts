import { Request, Response, Router } from "express";
import { SectorService } from "../services/SectorService";

export const sectorRoute = Router();
const service = new SectorService();

sectorRoute.post('/', async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await service.create({ name });
    return res.status(201).json(result);
});

sectorRoute.get('/', async (req: Request, res: Response) => {
    const result = await service.findAll();
    return res.json(result);
});

sectorRoute.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.findById(+id);
    return res.json(result);
});

sectorRoute.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const result = await service.update(+id, { name });
    return res.json(result);
});

sectorRoute.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
});