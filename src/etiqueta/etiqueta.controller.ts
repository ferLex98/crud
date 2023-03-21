import { Controller } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';

@Controller('etiqueta')
export class EtiquetaController {
    constructor(private etiquetaService: EtiquetaService){
    }
}
