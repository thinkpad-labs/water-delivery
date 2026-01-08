import { Inject, Injectable } from '@nestjs/common';
import { DatabaseAsyncProvider } from './database/database.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from 'schema';

@Injectable()
export class AppService {
  constructor(
    @Inject(DatabaseAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}
  getHello() {
    return this.db.query.users.findMany();
  }
}
