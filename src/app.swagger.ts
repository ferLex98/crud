import { INestApplication } from "@nestjs/common";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";

//Instanciamos la aplicacion
export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
    .setTitle('CRUD-Persona')
    .setDescription('Pats de CRUD persona')
    .build();
    //Instanciamos el documento
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/docs', app, document);   //Va a estar escuchando dessde la ruta docs
};

