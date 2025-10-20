import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Res,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import type { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(
    @Body() createTaskDto: CreateTaskDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.tasksService.create(createTaskDto, req.user?.userId!);

    return res.json({
      message: 'Tarefa criada com sucesso',
    });
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const tasks = await this.tasksService.findAll(req.user?.userId!);

    return res.json({
      message: 'Tarefas listadas com sucesso',
      tasks,
    });
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const task = await this.tasksService.findOne(id, req.user?.userId!);

    return res.json({
      message: 'Tarefa encontrada com sucesso',
      task,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.tasksService.update(id, updateTaskDto, req.user?.userId!);

    return res.json({
      message: 'Tarefa atualizada com sucesso',
    });
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.tasksService.remove(id, req.user?.userId!);

    return res.json({
      message: 'Tarefa removida com sucesso',
    });
  }
}
