import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemphisModule } from 'memphis-dev/nest';
@Module({
  imports: [MemphisModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
