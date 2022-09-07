import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/entities/Itens.entitie';
import { VendaDto } from 'src/venda/dto/create-venda.dto';

export class ItemDto extends Item {
    id: number;

    @ApiProperty()
    nome: string;
    @ApiProperty()
    quantidade: number;
    @ApiProperty()
    valor: number;
    created_at: Date;
    updated_at: Date;
}
