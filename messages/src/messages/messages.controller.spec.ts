// Core
import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { NotFoundException } from '@nestjs/common';

describe('MessagesController', () => {
  let controller: MessagesController;
  let service: MessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [
        {
          provide: MessagesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(['message1', 'message2']),
            findOne: jest.fn().mockResolvedValue('message1'),
            create: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
    service = module.get<MessagesService>(MessagesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all messages', async () => {
    expect(await controller.listMessages()).toEqual(['message1', 'message2']);
  });

  it('should return one message', async () => {
    expect(await controller.getMessages('1')).toEqual('message1');
  });

  it('should create a message', async () => {
    const createMessageDto = { content: 'New message' };
    await controller.createMessage(createMessageDto);
    expect(service.create).toHaveBeenCalledWith('New message');
  });

  it('should throw NotFoundException if message not found', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(null);
    await expect(controller.getMessages('1')).rejects.toThrow(
      NotFoundException,
    );
  });
});
