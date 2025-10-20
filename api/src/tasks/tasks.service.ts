import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto, userId: string) {
    return this.prisma.task.create({
      data: {
        ...createTaskDto,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    const tasks = await this.prisma.task.findMany({
      where: {
        userId,
      },
    });

    return tasks;
  }

  async findOne(id: string, userId: string) {
    const task = await this.prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto, userId: string) {
    const task = await this.findOne(id, userId);

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return this.prisma.task.update({
      where: {
        id,
        userId,
      },
      data: {
        completed: updateTaskDto.completed,
      },
    });
  }

  async remove(id: string, userId: string) {
    const task = await this.findOne(id, userId);

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return this.prisma.task.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
