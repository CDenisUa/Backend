// Core
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
// DTO
import { CreateMessageDto } from './DTO/create-message.dto';
// Services
import { MessagesService } from './messages.service';

@Controller('messages') // class decorator
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get() // method decorator
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
