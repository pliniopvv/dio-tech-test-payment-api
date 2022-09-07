import { JoinColumn, OneToMany, ManyToOne, Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
import { Item } from './Itens.entitie';
import { Vendedor } from './Vendedor.entitie';

@Entity()
export class Venda {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Vendedor, (vendedor) => vendedor.vendas)
    vendedor: Vendedor;

    @OneToMany((type) => Item, (item) => item.vendas)
    @JoinColumn()
    items: Item[];

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}