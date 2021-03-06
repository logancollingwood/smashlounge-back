import { Controller, Get, Param } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './group.entity';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAll(): Promise<Group[]> {
    return await this.groupService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Group> {
      return await this.groupService.find(id);
  }
}
