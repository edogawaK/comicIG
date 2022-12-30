import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MockService } from './mock.service';
import { CreateMockDto } from './dto/create-mock.dto';
import { UpdateMockDto } from './dto/update-mock.dto';
import { Request } from 'express';
import { reportDetail } from './data/report-detail.data';

@Controller('api/v1/surveys/report')
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Post()
  create(@Body() createMockDto: CreateMockDto) {
    return this.mockService.create(createMockDto);
  }

  @Get()
  findAll() {
    return this.mockService.findAll();
  }

  @Get('/:employee_id')
  findOne(@Req() request: Request) {
    const { params, query } = request;
    const employeeId = params.employee_id;
    const year = query.year;
    return reportDetail;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMockDto: UpdateMockDto) {
    return this.mockService.update(+id, updateMockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mockService.remove(+id);
  }
}
