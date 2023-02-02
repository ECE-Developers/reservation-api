import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { tags } from './swagger.tags';

const document = new DocumentBuilder()
  .setTitle(`Reservation API`)
  .setDescription(`Reservation API docs`)
  .setContact('ECE-Developers', 'www.ece.kr', 'marsboy0619@gmail.com')
  .setVersion('0.0.1')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'access_token',
  );

tags.forEach((tag) => document.addTag(tag.name, tag.description));

export default function generateSwaggerDocument(app) {
  return SwaggerModule.createDocument(app, document.build());
}
