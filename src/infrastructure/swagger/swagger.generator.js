"use strict";
exports.__esModule = true;
var swagger_1 = require("@nestjs/swagger");
var swagger_tags_1 = require("./swagger.tags");
var document = new swagger_1.DocumentBuilder()
    .setTitle("Reservation API")
    .setDescription("Reservation API docs")
    .setContact('ECE-Developers', 'www.ece.kr', 'marsboy0619@gmail.com')
    .setVersion('0.0.1');
swagger_tags_1.tags.forEach(function (tag) { return document.addTag(tag.name, tag.description); });
function generateSwaggerDocument(app) {
    return swagger_1.SwaggerModule.createDocument(app, document.build());
}
exports["default"] = generateSwaggerDocument;
