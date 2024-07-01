// Core
import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

describe('MessagesService', () => {
  let service: MessagesService;
  let repository: MessagesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessagesService,
        {
          provide: MessagesRepository,
          useValue: {
            findAll: jest.fn().mockResolvedValue(['message1', 'message2']),
            findOne: jest.fn().mockResolvedValue('message1'),
            create: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    service = module.get<MessagesService>(MessagesService);
    repository = module.get<MessagesRepository>(MessagesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all messages', async () => {
    expect(await service.findAll()).toEqual(['message1', 'message2']);
  });

  it('should return one message', async () => {
    expect(await service.findOne('1')).toEqual('message1');
  });

  it('should create a message', async () => {
    await service.create('New message');
    expect(repository.create).toHaveBeenCalledWith('New message');
  });
});
