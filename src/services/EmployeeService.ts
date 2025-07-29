import { Employee } from "../models/Employee";
import { prisma } from "../prisma";

export class EmployeeService {
    async create(data: Employee) {
        try {
            return await prisma.employee.create({
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    rg: data.rg,
                    cpf: data.cpf,
                    birthDate: data.birthDate,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    salary: data.salary,
                    role: { connect: { id: data.roleId } }
                }
            });
        } catch {
            throw new Error('Employee alread registered!');
        }
    }

    async findAll() {
        return await prisma.employee.findMany({
            include: { role: true }
        });
    }

    async findById(id: number) {
        const employee = await prisma.employee.findFirst({
            where: { id },
            include: { role: true }
        });
        return employee;
    }

    async update(id: number, data: Employee) {
        try {
            return await prisma.employee.update({
                where: { id },
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    rg: data.rg,
                    cpf: data.cpf,
                    birthDate: data.birthDate,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    salary: data.salary,
                    role: { connect: { id: data.roleId } }
                }
            });
        } catch {
            throw new Error('Employee alread registered!');
        }
    }

    async deleteOne(id: number) {
        try {
            await prisma.employee.delete({
                where: { id }
            })
        } catch {
            throw new Error('Employee not be deleted!');
        }
    }
}