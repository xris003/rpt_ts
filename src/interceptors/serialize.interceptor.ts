import { 
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { UserDto } from 'src/users/dtos/user.dto';

interface ClassConstructor {
    new (...args: any[]): {}
}
export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor {
   constructor(private dto: any) {}
   
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        
        console.log('I am running before the handler', context);

        return handler.handle().pipe(
            map((data: any) => {
              // Run something  
              console.log('Running before response is sent out', data);
                return plainToClass(UserDto, data, {
                   excludeExtraneousValues: true,  
                })
            })
        )
    }
}