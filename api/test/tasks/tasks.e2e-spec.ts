import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import { App } from 'supertest/types';

describe('TasksController (e2e)', () => {
  let app: INestApplication<App>;
  let token: string;
  let createdTaskId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    await request(app.getHttpServer()).post('/auth/register').send({
      name: 'test',
      email: 'test@example.com',
      password: 'test',
    });

    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'test',
      });

    token = loginResponse.body.token;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/tasks (POST)', () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Task',
      })
      .expect(201);
  });

  it('/tasks (GET)', async () => {
    const tasks = await request(app.getHttpServer())
      .get('/tasks')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    createdTaskId = tasks.body.tasks[0].id;
    expect(createdTaskId).toBeDefined();
  });

  it('/tasks/:id (GET)', async () => {
    const task = await request(app.getHttpServer())
      .get(`/tasks/${createdTaskId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(task.body.task.id).toBe(createdTaskId);
  });

  it('/tasks/:id (PATCH)', async () => {
    await request(app.getHttpServer())
      .patch(`/tasks/${createdTaskId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        completed: true,
      })
      .expect(200);
  });

  it('/tasks/:id (DELETE)', async () => {
    await request(app.getHttpServer())
      .delete(`/tasks/${createdTaskId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('should not update a task that does not exist', () => {
    return request(app.getHttpServer())
      .patch(`/tasks/123`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        completed: true,
      })
      .expect(404);
  });

  it('should not delete a task that does not exist', () => {
    return request(app.getHttpServer())
      .delete(`/tasks/123`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);
  });
});
