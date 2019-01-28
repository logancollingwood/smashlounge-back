import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Char } from './char.entity';

@Injectable()
export class CharService {
  constructor(
        @InjectRepository(Char)
        private readonly charRepository: Repository<Char>,
    ) {}

    charGifTypeId: number = 0;

    async findAll(): Promise<Char[]> {
        return await this.charRepository.find();
    }

    async find(id: number): Promise<Char> {

        const queryBuilder = await createQueryBuilder(Char)
            .where('Char.id = :charId', {charId: id})
            .leftJoinAndMapMany('charinfo.gifs', 'gifs', 'gif', '"Char"."id"="gif"."dataid"');

        return queryBuilder.getOne();
    }
}
