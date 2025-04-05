import { 
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        

        console.log('I am running before the handler', context);

        return handler.handle().pipe(
            map((data: any) => {
              // Run something  
              console.log('Running before response is sent out', data);
            })
        )
    }
}