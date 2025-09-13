import { users, buyerLeads, type User, type InsertUser, type BuyerLead, type InsertBuyerLead } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBuyerLead(lead: InsertBuyerLead): Promise<BuyerLead>;
  getBuyerLeads(): Promise<BuyerLead[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createBuyerLead(insertLead: InsertBuyerLead): Promise<BuyerLead> {
    const [lead] = await db
      .insert(buyerLeads)
      .values(insertLead)
      .returning();
    return lead;
  }

  async getBuyerLeads(): Promise<BuyerLead[]> {
    return await db.select().from(buyerLeads);
  }
}

export const storage = new DatabaseStorage();
