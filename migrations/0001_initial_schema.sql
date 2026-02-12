-- ════════════════════════════════════════════════════════════
-- 🗄️ GANI CLONE MY LIFE - DATABASE SCHEMA
-- ════════════════════════════════════════════════════════════
-- Migration: 0001 - Initial Schema for 9 Role Agentic System
-- Created: 2026-02-12
-- Purpose: Store all interactions, legacy data, and role analytics
-- ════════════════════════════════════════════════════════════

-- 👤 Users Table - Store all contacts across platforms
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  platform_id TEXT NOT NULL UNIQUE, -- WA number, IG username, FB ID, etc
  platform TEXT NOT NULL, -- 'WA', 'IG', 'FB', 'Telegram', etc
  name TEXT NOT NULL,
  role_preference TEXT, -- Which role should handle this user by default
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 💬 Interactions Table - Store all conversations (Archivist)
CREATE TABLE IF NOT EXISTS interactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  platform TEXT NOT NULL,
  role TEXT NOT NULL, -- Which role handled this interaction
  message_in TEXT NOT NULL, -- Incoming message
  message_out TEXT, -- Gani's response
  sentiment TEXT, -- 'positive', 'negative', 'neutral'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 📊 Role Analytics - Track role performance (Analyst)
CREATE TABLE IF NOT EXISTS role_analytics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  role TEXT NOT NULL,
  platform TEXT NOT NULL,
  total_interactions INTEGER DEFAULT 0,
  positive_interactions INTEGER DEFAULT 0,
  negative_interactions INTEGER DEFAULT 0,
  last_used DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 🛡️ Gatekeeper Logs - Track filtered/blocked interactions
CREATE TABLE IF NOT EXISTS gatekeeper_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  platform_id TEXT NOT NULL,
  platform TEXT NOT NULL,
  message TEXT NOT NULL,
  filter_reason TEXT NOT NULL, -- 'spam', 'inappropriate', 'suspicious', etc
  action TEXT NOT NULL, -- 'blocked', 'flagged', 'ignored'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 📝 Archivist Daily Summary - Daily legacy records
CREATE TABLE IF NOT EXISTS daily_summaries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATE NOT NULL UNIQUE,
  total_interactions INTEGER DEFAULT 0,
  platforms_active TEXT, -- JSON array of platforms used
  roles_active TEXT, -- JSON array of roles used
  highlights TEXT, -- Important events of the day
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 🔗 Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_platform ON users(platform, platform_id);
CREATE INDEX IF NOT EXISTS idx_interactions_user ON interactions(user_id);
CREATE INDEX IF NOT EXISTS idx_interactions_role ON interactions(role);
CREATE INDEX IF NOT EXISTS idx_interactions_created ON interactions(created_at);
CREATE INDEX IF NOT EXISTS idx_gatekeeper_platform ON gatekeeper_logs(platform_id);
CREATE INDEX IF NOT EXISTS idx_daily_summaries_date ON daily_summaries(date);

-- ════════════════════════════════════════════════════════════
-- ✅ MIGRATION COMPLETE
-- ════════════════════════════════════════════════════════════
-- All tables created successfully for Gani Clone My Life
-- Ready for Archivist, Analyst, and Gatekeeper roles 🙏🏻
-- ════════════════════════════════════════════════════════════
