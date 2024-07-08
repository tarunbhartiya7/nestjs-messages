import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { HowdiworksModule } from './howdiworks/howdiworks.module';

@Module({
  imports: [MessagesModule, HowdiworksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
