import { Item } from "src/entities/Itens.entitie";
import { ApiProperty } from '@nestjs/swagger';
import { VendedorDto } from "src/vendedor/dto/create-vendedor.dto";


export class VendaDto {
    id: number;
    @ApiProperty()
    vendedor: VendedorDto;
    @ApiProperty()
    items: Item[];
    created_at: Date;
    updated_at: Date;
}
