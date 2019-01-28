import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(
        @InjectRepository(Group)
        private readonly GroupRepository: Repository<Group>,
    ) {}

    async findAll(): Promise<Group[]> {
        return await this.GroupRepository.find();
    }

    async find(id: number): Promise<Group> {
      return await this.GroupRepository.findOne(id);
    }
}
