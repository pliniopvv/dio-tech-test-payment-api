import { Venda } from 'src/entities/Venda.entitie';
import { Injectable } from '@nestjs/common';
import { VendaDto } from './dto/create-venda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateVendaDto } from './dto/update-venda.dto';

@Injectable()
export class VendaService {
  constructor(
    @InjectRepository(Venda)
    private vendaRepository: Repository<Venda>
   ) {}

  create(createVendaDto: VendaDto) {
    return this.vendaRepository.save(createVendaDto);
  }

  findAll() {
    return this.vendaRepository.find();
  }

  findOne(id: number) {
    return this.vendaRepository.findOne({ where: { id } });
  }

  update(id: number, updateVendaDto: UpdateVendaDto) {
    return this.vendaRepository.update({ id }, updateVendaDto);
  }

  remove(id: number) {
    return this.vendaRepository
    .createQueryBuilder()
    .delete()
    .where({id})
    .execute();
  }
}
