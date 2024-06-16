// Core
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// DTO
import { CreateMessageDto } from './DTO/create-message.dto';

@Controller('messages') // class decorator
export class MessagesController {
  @Get() // method decorator
  listMessages() {
    return 'Messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return body;
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
