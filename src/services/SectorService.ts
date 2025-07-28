import { Sector } from "../models/Sector";
import { prisma } from "../prisma";

export class SectorService {
    async create(data: Sector) {
        const exists = await prisma.sector.findFirst({
            where: { name: data.name }
        });
        if (exists) {
            throw new Error('Sector already exists!');
        }
        return await prisma.sector.create({
            data: { name: data.name }
        });
    }

    async findAll() {
        return await prisma.sector.findMany();
    }

    async findById(id: number) {
        const sector = await prisma.sector.findFirst({
            where: { id }
        });
        return sector;
    }

    async update(id: number, data: Sector) {
        const sector = await prisma.sector.findFirst({
            where: { id }
        });
        const exists = await prisma.sector.findFirst({
            where: { name: data.name }
        });
        if (exists && exists.id !== sector?.id) {
            throw new Error('Sector already exists!');
        }
        return await prisma.sector.update({
            where: { id },
            data: { name: data.name }
        });
    }

    async deleteOne(id: number) {
        try {
            await prisma.sector.delete({
                where: { id }
            });
        } catch {
            throw new Error('Sector not be deleted or not found!');
        }
    }
}