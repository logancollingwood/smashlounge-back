import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Gif } from './gif.entity';

@Injectable()
export class GifService {
  constructor(
        @InjectRepository(Gif)
        private readonly GifRepository: Repository<Gif>,
    ) {}

    async findAll(): Promise<Gif[]> {
        return await this.GifRepository.find();
    }

    async find(id: number): Promise<Gif> {
      return await this.GifRepository.findOne(id);
    }

    async getByTypeId(typeid: number): Promise<Gif[]> {

        const typeIdGifs = await createQueryBuilder(Gif)
             .where(`typeid = :typeId`, {
                 typeId: typeid,
            }).getMany();

        return typeIdGifs;
    }
    
    async getByDataId(dataid: number): Promise<Gif[]> {
        const dataIdGifs = await createQueryBuilder(Gif)
        .where(`dataid = :dataId`, {
            dataId: dataid,
        }).getMany();

        return dataIdGifs;
    }

    async getByTypeIdAndDataId(typeid: number, dataid: number): Promise<Gif[]> {
        const typeIdAndDataId = await createQueryBuilder(Gif)
        .where(`typeid = :typeId AND dataid = :dataId`, {
            typeId: typeid,
            dataId: dataid,
        }).getMany();

        return typeIdAndDataId;
    }
  
}
