import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    create(email: string, password: string) {
        const user = this.repo.create({ email, password});

        return this.repo.save(user);
    
    }

    findOne(id: number) {
        if (!id) {
            return null;
        }
        return this.repo.findOneBy({id})
    }

    find(email: string) {
        return this.repo.find({where: {email} });
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);
        if(!user) {
            throw new Error('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('user not found');
        }
        return this.repo.remove(user);
    }
}

// const usersService = new UsersService({} as any);
// usersService.update(1, {email: 'maximi@gmail.com'})
 