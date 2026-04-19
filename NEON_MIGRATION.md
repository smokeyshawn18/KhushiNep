# Neon Migration Guide

## What Changed

Your app has been migrated from Supabase to Neon PostgreSQL. Here's what was updated:

### 1. **Replaced Dependencies**

- ❌ Removed: `@supabase/supabase-js`
- ✅ Added: `@neondatabase/serverless`

### 2. **Database Client** (`utils/supabaseClient.js`)

- Changed from Supabase client to Neon's serverless PostgreSQL pool
- Now uses the `DATABASE_URL` environment variable

### 3. **API Routes**

- **`/api/contact/route.js`** - Updated to use SQL queries with Neon
- **`/api/messages/route.js`** - New endpoint to fetch all messages
- **`/api/messages/[id]/route.js`** - New endpoint to delete messages

### 4. **Admin Dashboard** (`app/adminkhushi-2025/page.jsx`)

- Updated to call the new API endpoints instead of using Supabase client directly

---

## Setup Instructions

### Step 1: Get Your Neon Connection String

1. Go to [console.neon.tech](https://console.neon.tech) and sign up/login
2. Create a new project
3. Copy your connection string (looks like: `postgresql://user:password@host/dbname`)

### Step 2: Update Environment Variables

Create or update your `.env.local` file with:

```
DATABASE_URL=postgresql://your_username:your_password@your_host/your_database
```

### Step 3: Create Database Tables

Run this SQL query in your Neon dashboard's SQL editor:

```sql
CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Test Your Setup

1. Start your dev server: `npm run dev`
2. Test the contact form by submitting a message
3. Check the admin dashboard to verify messages appear

---

## Environment Variables Required

- `DATABASE_URL` - Your Neon PostgreSQL connection string

## API Endpoints

### POST `/api/contact`

Inserts a new message into the database.

**Request body:**

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

### GET `/api/messages`

Fetches all messages ordered by creation date (newest first).

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "message": "Hello...",
    "created_at": "2024-02-08T10:00:00Z"
  }
]
```

### DELETE `/api/messages/[id]`

Deletes a message by ID.

---

## Troubleshooting

**Issue**: "Connection refused"

- Make sure your `DATABASE_URL` is correct
- Check that your Neon project is active

**Issue**: "table messages does not exist"

- Run the SQL table creation query in Neon dashboard

**Issue**: "no rows were returned"

- Make sure you've submitted a message through the contact form first

---

## References

- [Neon Documentation](https://neon.tech/docs)
- [Neon Serverless Driver](https://neon.tech/docs/serverless/serverless-driver)
