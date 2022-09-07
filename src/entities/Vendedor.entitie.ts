import { Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
import { Venda } from './Venda.entitie';

@Entity()
export class Vendedor {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String;

    @Column()
    cpf: number;

    @Column()
    email: string;

    @Column()
    telefone: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    vendas: Venda[];
}