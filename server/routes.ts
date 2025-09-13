import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBuyerLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create buyer lead
  app.post("/api/buyer-leads", async (req, res) => {
    try {
      const validatedData = insertBuyerLeadSchema.parse(req.body);
      const lead = await storage.createBuyerLead(validatedData);
      res.status(201).json(lead);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create buyer lead" });
    }
  });

  // Get all buyer leads
  app.get("/api/buyer-leads", async (req, res) => {
    try {
      const leads = await storage.getBuyerLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch buyer leads" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
