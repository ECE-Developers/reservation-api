import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { tags } from './swagger.tags';

const document = new DocumentBuilder()
  .setTitle(`ECE - Reservation API`)
  .setDescription(`Reservation API 문서입니다.`)
  .setContact('ECE-Developers', 'www.ece.kr', 'marsboy0619@gmail.com')
  .setVersion('1.0.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: '사용자의 JWT access token을 입력해주세요.',
      in: 'header',
    },
    'access_token',
  );

tags.forEach((tag) => document.addTag(tag.name, tag.description));

export default function generateSwaggerDocument(app) {
  return SwaggerModule.createDocument(app, document.build());
}
