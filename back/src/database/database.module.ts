import { Module } from '@nestjs/common';
import { DATABASE_PROVIDER, DatabaseAsyncProvider } from './database.service';

@Module({
  providers: [...DATABASE_PROVIDER],
  exports: [DatabaseAsyncProvider],
})
export class DatabaseModule { }
