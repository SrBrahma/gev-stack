// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import "server-only";

import { pgTable, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
});
