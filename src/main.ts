import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { SwaggerModule } from '@nestjs/swagger';
import generateSwaggerDocument from './infrastructure/swagger/swagger.generator';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  SwaggerModule.setup('/docs', app, generateSwaggerDocument(app), {
    swaggerOptions: { persistAuthorization: true },
  });

  app.enableCors({ origin: true, credentials: true });

  await app.listen(3000);
}
bootstrap();
