import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

// users.service.spec.ts
// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersService } from './users.service';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './user.entity';

// describe('UsersService', () => {
//   let service: UsersService;
//   let repo: Partial<Record<keyof Repository<User>, jest.Mock>>;

//   beforeEach(async () => {
//     repo = {
//       findOneBy: jest.fn().mockResolvedValue({ id: 1, email: 'test@example.com', password: 'pass' }),
//       save: jest.fn().mockResolvedValue({ id: 1, email: 'updated@example.com', password: 'pass' }),
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UsersService,
//         {
//           provide: getRepositoryToken(User),
//           useValue: repo,
//         },
//       ],
//     }).compile();

//     service = module.get<UsersService>(UsersService);
//   });

//   it('should update a user', async () => {
//     const updatedUser = await service.update(1, { email: 'updated@example.com' });

//     expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
//     expect(repo.save).toHaveBeenCalled();
//     expect(updatedUser.email).toBe('updated@example.com');
//   });
// });
