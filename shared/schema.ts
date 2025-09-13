import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const buyerLeads = pgTable("buyer_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  country: text("country").notNull(),
  volume: text("volume").notNull(),
  email: text("email").notNull(),
  origins: text("origins").array(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBuyerLeadSchema = createInsertSchema(buyerLeads).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertBuyerLead = z.infer<typeof insertBuyerLeadSchema>;
export type BuyerLead = typeof buyerLeads.$inferSelect;
