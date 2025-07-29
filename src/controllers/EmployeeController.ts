import { Request, Response, Router } from "express";
import { EmployeeService } from "../services/EmployeeService";
import { Employee } from "../models/Employee";

export const employeeRoute = Router();
const service = new EmployeeService();

employeeRoute.post('/', async (req: Request, res: Response) => {
    const data: Employee = req.body;
    const result = await service.create(data);
    return res.status(201).json(result);
});

employeeRoute.get('/', async (req: Request, res: Response) => {
    const result = await service.findAll();
    return res.json(result);
});

employeeRoute.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.findById(+id);
    return res.json(result);
});

employeeRoute.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: Employee = req.body;
    const result = await service.update(+id, data);
    return res.json(result);
});

employeeRoute.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
});