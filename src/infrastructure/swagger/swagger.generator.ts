import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from 'process';
import { tags } from './swagger.tags';

const document = new DocumentBuilder()
  .setTitle(`Reservation API`)
  .setDescription(`Reservation API docs`)
  .setContact('ECE-Developers', 'www.ece.kr', 'marsboy0619@gmail.com')
  .setVersion('0.0.1');

tags.forEach((tag) => document.addTag(tag.name, tag.description));

export default function generateSwaggerDocument(app) {
  return SwaggerModule.createDocument(app, document.build());
}
