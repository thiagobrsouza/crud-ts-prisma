import { Role } from "../models/Role";
import { prisma } from "../prisma";

export class RoleService {
    async create(data: Role) {
        const exists = await prisma.role.findFirst({
            where: { name: data.name }
        });
        if (exists) {
            throw new Error('Role already exists!');
        }
        return await prisma.role.create({
            data: { name: data.name, sector: { connect: { id: data.sectorId } } }
        });
    }

    async findAll() {
        return await prisma.role.findMany({
            include: { sector: true }
        });
    }

    async findById(id: number) {
        const role = await prisma.role.findFirst({
            where: { id },
            include: { sector: true }
        });
        return role;
    }

    async update(id: number, data: Role) {
        const role = await prisma.role.findFirst({
            where: { id }
        });
        const exists = await prisma.role.findFirst({
            where: { name: data.name }
        });
        if (exists && exists.id !== role?.id) {
            throw new Error('Role already exists!');
        }
        return await prisma.role.update({
            where: { id },
            data: { name: data.name, sector: { connect: { id: data.sectorId } } }
        });
    }

    async deleteOne(id: number) {
        try {
            await prisma.role.delete({
                where: { id }
            });
        } catch {
            throw new Error('Role not be deleted or not found!');
        }
    }
}