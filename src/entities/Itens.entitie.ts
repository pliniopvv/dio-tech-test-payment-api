import { ManyToOne, Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
import { Venda } from './Venda.entitie';
import { Vendedor } from './Vendedor.entitie';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    quantidade: number;

    @Column()
    valor: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne((type) => Venda, (venda) => venda.items)
    vendas: Venda[];
}