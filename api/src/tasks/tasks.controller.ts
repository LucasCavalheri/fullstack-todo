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
import { JwtAuthGuard } from '../auth/jwt.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiCreatedResponse({ description: 'Tarefa criada com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
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

  @ApiOkResponse({ description: 'Tarefas listadas com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const tasks = await this.tasksService.findAll(req.user?.userId!);

    return res.json({
      message: 'Tarefas listadas com sucesso',
      tasks,
    });
  }

  @ApiOkResponse({ description: 'Tarefa encontrada com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
  @ApiNotFoundResponse({ description: 'Tarefa não encontrada' })
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

  @ApiOkResponse({ description: 'Tarefa atualizada com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
  @ApiNotFoundResponse({ description: 'Tarefa não encontrada' })
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

  @ApiOkResponse({ description: 'Tarefa removida com sucesso' })
  @ApiUnauthorizedResponse({ description: 'Usuário não autenticado' })
  @ApiNotFoundResponse({ description: 'Tarefa não encontrada' })
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
