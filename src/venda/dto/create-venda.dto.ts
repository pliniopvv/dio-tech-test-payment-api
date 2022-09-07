import { Venda } from 'src/entities/Venda.entitie';
import { ApiProperty } from '@nestjs/swagger';
import { VendedorDto } from "src/vendedor/dto/create-vendedor.dto";
import { ItemDto } from "src/item/dto/create-item.dto";


export class VendaDto extends Venda {
    id: number;
    @ApiProperty()
    vendedor: VendedorDto;
    @ApiProperty()
    items: ItemDto[];
    status: number;
    created_at: Date;
    updated_at: Date;
}
