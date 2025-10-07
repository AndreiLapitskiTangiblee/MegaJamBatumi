import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Band {
  id: string;
  name: string;
  formed: number;
  genre: string;
  origin: string;
  description: string;
}

export interface Musician {
  name: string;
  instrument: "drums" | "guitar" | "bass" | "synth" | "vocals";
}

export interface Song {
  id: string;
  bandId: string;
  title: string;
  duration: string;
  trackNumber: number;
  youtubeUrl: string;
  musicians: Musician[];
}
