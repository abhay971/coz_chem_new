# Static Website with Contact Form - Backend Implementation Guide

This guide explains how to create a minimal backend for a static website that only needs a contact form feature, using components from the existing COZ Club backend.

---

## 📋 Overview

**Use Case:** Static website with a single contact form that:
- Accepts user details (name, email, phone, message)
- Stores submissions in a database
- Sends email notifications to admin
- Provides confirmation to the user

---

## 🛠️ Minimal Tech Stack Required

### From Current COZ Club Backend

You'll need these core components:

#### **Essential Dependencies**
```json
{
  "dependencies": {
    "fastify": "^5.4.0",              // Web server framework
    "@fastify/cors": "^11.1.0",        // CORS handling
    "@fastify/rate-limit": "^10.3.0",  // Prevent spam
    "@prisma/client": "^6.13.0",       // Database ORM
    "zod": "^4.0.17",                  // Form validation
    "nodemailer": "^7.0.5",            // Email sending
    "dotenv": "^17.2.1",               // Environment variables
    "pino": "^9.8.0",                  // Logging
    "pino-pretty": "^13.1.1"           // Pretty logs
  },
  "devDependencies": {
    "@types/node": "^24.2.1",
    "prisma": "^6.13.0",
    "tsx": "^4.20.3",                  // TypeScript execution
    "typescript": "^5.9.2"
  }
}
```

#### **NOT Required**
These can be removed for a simple contact form:
- ❌ AWS S3 SDK (no file uploads needed)
- ❌ Razorpay (no payments)
- ❌ Jose/Argon2 (no authentication)
- ❌ @fastify/cookie (no sessions)
- ❌ @fastify/helmet (optional for simple use)

---

## 📊 Database Schema

### Minimal Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model ContactSubmission {
  id          String   @id @default(uuid())
  name        String
  email       String
  phone       String?
  company     String?
  subject     String?
  message     String
  status      String   @default("new") // new, read, responded
  createdAt   DateTime @default(now())

  @@index([createdAt])
  @@index([status])
}
```

---

## 🏗️ Project Structure

```
static-website-backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── config/
│   │   └── env.ts            # Environment config
│   ├── routes/
│   │   └── contact.ts        # Contact form route
│   ├── services/
│   │   └── email.service.ts  # Email sending logic
│   ├── db/
│   │   └── prisma.ts         # Prisma client
│   └── server.ts             # Main server file
├── .env                       # Environment variables
├── package.json
└── tsconfig.json
```

---

## 📝 Implementation Files

### 1. Environment Configuration

**File: `.env`**
```env
# Server
NODE_ENV=development
PORT=3001
CORS_ORIGIN=https://yourwebsite.com

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/contact_db"

# Email (Using Gmail SMTP as example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@yourwebsite.com
ADMIN_EMAIL=admin@yourcompany.com

# Rate Limiting
RATE_LIMIT_MAX=5              # Max 5 submissions per time window
RATE_LIMIT_TIME_WINDOW=900000 # 15 minutes in milliseconds
```

---

### 2. Database Client

**File: `src/db/prisma.ts`**
```typescript
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});
```

---

### 3. Environment Config

**File: `src/config/env.ts`**
```typescript
import dotenv from "dotenv";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "3001"),
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",

  // Database
  databaseUrl: process.env.DATABASE_URL!,

  // Email
  smtp: {
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  },
  emailFrom: process.env.SMTP_FROM!,
  adminEmail: process.env.ADMIN_EMAIL!,

  // Rate limiting
  rateLimit: {
    max: parseInt(process.env.RATE_LIMIT_MAX || "5"),
    timeWindow: parseInt(process.env.RATE_LIMIT_TIME_WINDOW || "900000"),
  },
};
```

---

### 4. Email Service

**File: `src/services/email.service.ts`**
```typescript
import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const transporter = nodemailer.createTransport(env.smtp);

export const EmailService = {
  // Send notification to admin
  async sendAdminNotification(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject?: string;
    message: string;
  }) {
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    await transporter.sendMail({
      from: env.emailFrom,
      to: env.adminEmail,
      subject: `New Contact Form: ${data.subject || "No Subject"}`,
      html,
    });
  },

  // Send confirmation to user
  async sendUserConfirmation(email: string, name: string) {
    const html = `
      <h2>Thank you for contacting us!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you shortly.</p>
      <p>Best regards,<br>Your Company Team</p>
    `;

    await transporter.sendMail({
      from: env.emailFrom,
      to: email,
      subject: "We received your message",
      html,
    });
  },
};
```

---

### 5. Contact Form Route

**File: `src/routes/contact.ts`**
```typescript
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../db/prisma.js";
import { EmailService } from "../services/email.service.js";

// Validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20).optional(),
  company: z.string().max(100).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(2000),
});

export default async function contactRoutes(app: FastifyInstance) {
  // Submit contact form
  app.post("/contact", async (req, reply) => {
    try {
      // Validate input
      const parsed = ContactFormSchema.safeParse(req.body);

      if (!parsed.success) {
        return reply.code(400).send({
          error: "Validation failed",
          details: parsed.error.flatten(),
        });
      }

      const data = parsed.data;

      // Save to database
      const submission = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          subject: data.subject || null,
          message: data.message,
          status: "new",
        },
      });

      // Send emails (don't wait for completion)
      Promise.all([
        EmailService.sendAdminNotification(data),
        EmailService.sendUserConfirmation(data.email, data.name),
      ]).catch((err) => {
        app.log.error("Failed to send emails:", err);
      });

      return reply.code(201).send({
        success: true,
        message: "Your message has been sent successfully!",
        id: submission.id,
      });
    } catch (error) {
      app.log.error("Contact form error:", error);
      return reply.code(500).send({
        error: "Failed to submit form. Please try again later.",
      });
    }
  });

  // Health check endpoint
  app.get("/health", async () => {
    return { status: "ok", timestamp: new Date().toISOString() };
  });
}
```

---

### 6. Main Server File

**File: `src/server.ts`**
```typescript
import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contact.js";

const app = Fastify({
  logger: {
    level: env.nodeEnv === "development" ? "info" : "warn",
    transport:
      env.nodeEnv === "development"
        ? { target: "pino-pretty" }
        : undefined,
  },
});

// CORS
await app.register(cors, {
  origin: env.corsOrigin,
  credentials: false,
});

// Rate limiting (prevent spam)
await app.register(rateLimit, {
  max: env.rateLimit.max,
  timeWindow: env.rateLimit.timeWindow,
  errorResponseBuilder: () => ({
    error: "Too many requests. Please try again later.",
  }),
});

// Routes
await app.register(contactRoutes, { prefix: "/api" });

// Start server
const start = async () => {
  try {
    await app.listen({ port: env.port, host: "0.0.0.0" });
    console.log(`🚀 Server running on http://localhost:${env.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
```

---

### 7. TypeScript Configuration

**File: `tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022"],
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

### 8. Package.json Scripts

**File: `package.json`**
```json
{
  "name": "static-website-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "prisma:migrate": "prisma migrate dev",
    "prisma:generate": "prisma generate",
    "prisma:studio": "prisma studio"
  }
}
```

---

## 🔄 Complete Workflow

### **Step 1: User Submits Form**
```
User fills form on website → JavaScript sends POST to /api/contact
```

### **Step 2: Backend Receives Request**
```
1. Fastify receives POST request
2. Rate limiting checks (prevent spam)
3. CORS validation (check origin)
4. Request logged (Pino)
```

### **Step 3: Validation**
```
1. Zod validates form data
2. Checks required fields (name, email, message)
3. Validates email format, length limits
4. Returns 400 error if validation fails
```

### **Step 4: Database Storage**
```
1. Prisma creates new ContactSubmission record
2. Sets status = "new"
3. Adds timestamp
4. Returns submission ID
```

### **Step 5: Email Notifications**
```
1. Nodemailer sends email to admin (with submission details)
2. Nodemailer sends confirmation to user
3. Emails sent asynchronously (doesn't block response)
```

### **Step 6: Response**
```
1. Returns 201 Created status
2. Sends success message to frontend
3. Frontend shows thank you message
```

---

## 📊 Data Flow Diagram

```
┌─────────────────┐
│  Static Website │
│  (HTML/CSS/JS)  │
└────────┬────────┘
         │ POST /api/contact
         │ { name, email, message }
         ▼
┌─────────────────────────────────┐
│     Fastify Server (Port 3001)  │
│  ┌──────────────────────────┐   │
│  │  Rate Limiting Middleware │   │
│  └───────────┬──────────────┘   │
│              ▼                   │
│  ┌──────────────────────────┐   │
│  │  CORS Validation         │   │
│  └───────────┬──────────────┘   │
│              ▼                   │
│  ┌──────────────────────────┐   │
│  │  Zod Schema Validation   │   │
│  └───────────┬──────────────┘   │
│              ▼                   │
│  ┌──────────────────────────┐   │
│  │  Contact Route Handler   │   │
│  └───────────┬──────────────┘   │
└──────────────┼──────────────────┘
               │
      ┌────────┴────────┐
      ▼                 ▼
┌──────────────┐  ┌─────────────────┐
│  PostgreSQL  │  │  Email Service  │
│   Database   │  │   (Nodemailer)  │
└──────────────┘  └────────┬────────┘
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
            ┌──────────┐      ┌──────────┐
            │  Admin   │      │   User   │
            │  Email   │      │  Email   │
            └──────────┘      └──────────┘
```

---

## 🚀 Setup Instructions

### **1. Create Project**
```bash
mkdir static-website-backend
cd static-website-backend
npm init -y
```

### **2. Install Dependencies**
```bash
npm install fastify @fastify/cors @fastify/rate-limit @prisma/client zod nodemailer dotenv pino pino-pretty

npm install -D @types/node prisma tsx typescript @types/nodemailer
```

### **3. Initialize Prisma**
```bash
npx prisma init
```

### **4. Create Files**
- Copy the files from the implementation section above
- Create `.env` file with your credentials

### **5. Setup Database**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### **6. Run Development Server**
```bash
npm run dev
```

### **7. Test API**
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message"
  }'
```

---

## 🌐 Frontend Integration

### **HTML Form Example**
```html
<form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <input type="tel" name="phone" placeholder="Phone (optional)">
  <input type="text" name="company" placeholder="Company (optional)">
  <input type="text" name="subject" placeholder="Subject">
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>

<div id="response"></div>
```

### **JavaScript (Vanilla)**
```javascript
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById('response').innerHTML =
        `<p class="success">${result.message}</p>`;
      e.target.reset();
    } else {
      document.getElementById('response').innerHTML =
        `<p class="error">${result.error}</p>`;
    }
  } catch (error) {
    document.getElementById('response').innerHTML =
      '<p class="error">Failed to send message. Please try again.</p>';
  }
});
```

---

## 🔒 Security Considerations

### **Implemented:**
✅ Rate limiting (prevent spam)
✅ CORS protection
✅ Input validation (Zod)
✅ Email validation
✅ SQL injection protection (Prisma)
✅ Request logging

### **Optional Enhancements:**
- Add reCAPTCHA for bot prevention
- Implement IP blocking for repeated abuse
- Add email verification before storing
- Use @fastify/helmet for security headers
- Set up CSP (Content Security Policy)

---

## 📧 Email Provider Options

### **Gmail SMTP** (Free, Limited)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=app-password  # Use App Password, not regular password
```

### **SendGrid** (Recommended for Production)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### **AWS SES** (Cost-effective)
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-aws-access-key
SMTP_PASS=your-aws-secret-key
```

---

## 🗄️ Database Management

### **View Submissions**
```bash
npx prisma studio
```
Opens web UI at `http://localhost:5555` to view/manage submissions

### **Export Submissions (SQL)**
```sql
SELECT * FROM "ContactSubmission"
ORDER BY "createdAt" DESC;
```

### **Mark as Read**
```sql
UPDATE "ContactSubmission"
SET status = 'read'
WHERE id = 'submission-id';
```

---

## 📈 Monitoring & Analytics

### **Logging**
All requests are logged via Pino:
- Request ID
- Response time
- Status code
- Errors

### **Database Queries**
```typescript
// Get submission count
const count = await prisma.contactSubmission.count();

// Get recent submissions
const recent = await prisma.contactSubmission.findMany({
  where: { status: 'new' },
  orderBy: { createdAt: 'desc' },
  take: 10
});

// Get submissions by date range
const filtered = await prisma.contactSubmission.findMany({
  where: {
    createdAt: {
      gte: new Date('2025-01-01'),
      lte: new Date('2025-12-31')
    }
  }
});
```

---

## 🚀 Deployment Options

### **Option 1: VPS (DigitalOcean, Linode, AWS EC2)**
```bash
# Build
npm run build

# Start with PM2
pm2 start dist/server.js --name contact-api

# Database migration
npx prisma migrate deploy
```

### **Option 2: Serverless (Vercel, Netlify)**
Convert Fastify to serverless functions

### **Option 3: Docker**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npx prisma generate
RUN npm run build
CMD ["npm", "start"]
```

---

## 💰 Cost Estimate

### **Minimal Setup (Free Tier)**
- **Database:** PostgreSQL on Supabase (Free: 500MB)
- **Hosting:** Railway/Render (Free tier available)
- **Email:** Gmail SMTP (Free, limited)
- **Total:** $0/month

### **Production Setup**
- **Database:** DigitalOcean Managed PostgreSQL ($15/month)
- **Server:** DigitalOcean Droplet ($6/month)
- **Email:** SendGrid ($20/month for 40k emails)
- **Total:** ~$41/month

---

## 📝 Summary

### **What You Need from Current Backend:**
1. ✅ Fastify server setup
2. ✅ Prisma database configuration
3. ✅ Email service (Nodemailer)
4. ✅ Validation (Zod)
5. ✅ CORS & Rate limiting
6. ✅ Environment configuration

### **What You DON'T Need:**
1. ❌ Authentication (no login required)
2. ❌ File uploads (no S3)
3. ❌ Payment processing (no Razorpay)
4. ❌ Complex routing (only 1 endpoint)
5. ❌ User management
6. ❌ OAuth/OIDC

### **Time to Implement:**
- **Setup:** 1-2 hours
- **Testing:** 30 minutes
- **Deployment:** 1 hour
- **Total:** 2-3 hours

---

**Last Updated:** 2025-10-28
