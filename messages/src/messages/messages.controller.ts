// Core
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages') // class decorator
export class MessagesController {
  @Get() // method decorator
  listMessages() {
    return 'Messages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
