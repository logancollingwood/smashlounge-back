import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Char } from './char.entity';
import { Gif } from '../gif/gif.entity';

@Injectable()
export class CharService {
  constructor(
        @InjectRepository(Char)
        private readonly charRepository: Repository<Char>,
        @InjectRepository(Gif)
        private readonly gifRepository: Repository<Gif>,
    ) {}

    charGifTypeId: number = 0;

    async findAll(): Promise<Char[]> {
        return await this.charRepository.find();
    }

    async find(id): Promise<Char> {

        const char: Char = await this.charRepository.findOne(id);

        const charGifs = await createQueryBuilder(Gif)
             .where(`dataid = :charId AND typeid = :typeId`, {
                 charId: char.id,
                 typeId: this.charGifTypeId,
            }).getMany();

        char.gifs = charGifs;

        return char;
    }
}
