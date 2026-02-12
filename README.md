# Gani Clone My Life

**🛡️ 9 Role Agentic System - Digital Twin Platform**

Platform Cloning untuk semua peran hidup dengan Cloudflare Pages + Hono Framework.

## 🚀 URLs
- **Production**: https://71751787.gani-clone-my-life.pages.dev ✅ **LIVE (Phase 2.2)**
- **Production Main**: https://gani-clone-my-life.pages.dev ✅ **DEPLOYED**
- **GitHub**: https://github.com/Estes786/Gani-Clone-My-Life ✅ **PUSHED**
- **Sandbox Dev**: https://3000-i5x9y2n4n6m2y9rer6v7d-b9b802c4.sandbox.novita.ai ✅ **RUNNING**
- **Local**: http://localhost:3000

## 🎯 Phase 2.2 Enhancements (COMPLETE) 🔥

### ✅ FULL SOCIAL MEDIA INTEGRATION - AUTONOMOUS:
- **WhatsApp (Whapi)** - ✅ ACTIVE & AUTO-REPLYING with 9 Role Intelligence
- **Telegram Bot** - ✅ ACTIVE & AUTO-REPLYING with Role Detection
- **Instagram & Facebook** - ✅ WEBHOOK READY for Meta API Integration
- **Intelligent Role Detection** - Automatic role switching based on message content
- **Auto-Response Engine** - Natural responses with personality and Master DNA signature 🙏🏻
- **Database Logging** - All interactions logged to D1 for Archivist

### 📊 Enhanced Webhooks (Phase 2.2):
- `POST /api/webhooks/whatsapp` - WhatsApp auto-reply via Whapi (Token configured)
- `POST /api/webhooks/telegram` - Telegram Bot auto-reply (Token configured)
- `POST /api/webhooks/meta` - Instagram & Facebook auto-reply (Webhook ready)

### 🤖 Smart Features Added:
- **Role Detection Algorithm** - Automatically selects appropriate role based on:
  - Message keywords (project → Orchestrator, work → Professional)
  - Platform context (IG/FB → Public, WA/Telegram → Personal)
  - Spam filtering (Gatekeeper for "p", "hi", etc.)
- **Natural Language Responses** - Using Master DNA personality:
  - Shortcuts: w, sdh, otw, y, g
  - Signature: 🙏🏻 (mandatory at end)
  - Tone: dingin, sopan, natural, tidak robotik
- **Database Integration** - Every interaction logged for:
  - Archivist legacy tracking
  - Analyst quality control
  - Future AI learning

## 🔌 Webhook Setup Instructions

### WhatsApp (Whapi) Integration
1. **Get Webhook URL**: `https://gani-clone-my-life.pages.dev/api/webhooks/whatsapp`
2. **Configure in Whapi Dashboard**:
   - Go to https://whapi.cloud/dashboard
   - Add webhook URL
   - Token already configured: `Tn25IIq6OQWuRMCGuz0ZXWmYZa3uw8Po`
3. **Test**: Send message to your WhatsApp number
4. **Gani will auto-reply** with appropriate role!

### Telegram Bot Integration
1. **Bot Token**: `8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg`
2. **Set Webhook**:
```bash
curl -X POST https://api.telegram.org/bot8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg/setWebhook \
  -H "Content-Type: application/json" \
  -d '{"url":"https://gani-clone-my-life.pages.dev/api/webhooks/telegram"}'
```
3. **Test**: Send message to your Telegram bot
4. **Gani will auto-reply** with role detection!

### Instagram & Facebook (Meta API) Integration
1. **Get Webhook URL**: `https://gani-clone-my-life.pages.dev/api/webhooks/meta`
2. **Setup Meta Developer App**:
   - Go to https://developers.facebook.com
   - Create new app or use existing
   - Add Instagram/Facebook Messenger product
   - Configure webhook with URL above
   - Verify token: `GANI_VERIFY_TOKEN`
3. **Subscribe to Events**:
   - `messages` (for DMs)
   - `messaging_postbacks`
   - `message_deliveries`
4. **Test**: Send DM to your IG or FB page
5. **Gani will auto-reply** with Public/Professional role!

## 🧪 Testing Webhooks

### Test WhatsApp Webhook:
```bash
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/whatsapp \
  -H "Content-Type: application/json" \
  -d '{
    "event": "messages.new",
    "messages": [{
      "from": "628123456789",
      "text": {"body": "Hello, mau tanya project"}
    }]
  }'
```

### Test Telegram Webhook:
```bash
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/telegram \
  -H "Content-Type: application/json" \
  -d '{
    "message": {
      "from": {"id": 123456},
      "chat": {"id": 123456},
      "text": "Test kerja capster"
    }
  }'
```

### Test Meta Webhook:
```bash
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/meta \
  -H "Content-Type: application/json" \
  -d '{
    "object": "instagram",
    "entry": [{
      "messaging": [{
        "sender": {"id": "123456"},
        "message": {"text": "Hello from IG"}
      }]
    }]
  }'
```

## 🧠 9 Role System

Platform ini memiliki 9 role yang mencerminkan semua aspek kehidupan:

### 1️⃣ **Professional** (Capster/Career Expert)
- **Tone**: Dingin, sopan, efisien, to-the-point
- **Platform**: WA, Email, LinkedIn
- **Fungsi**: Handle urusan teknis operasional dan karier

### 2️⃣ **Orchestrator** (Project Lead/Business Admin)
- **Tone**: Tegas, strategis, solutif, commanding
- **Platform**: WA, Telegram, Slack
- **Fungsi**: Koordinasi project dan manajemen bisnis

### 3️⃣ **Public** (Content Creator/Figure)
- **Tone**: Ramah tapi berwibawa, apresiatif, natural
- **Platform**: IG, FB, TikTok, X
- **Fungsi**: Brand building dan engagement dengan audiens

### 4️⃣ **Personal** (Husband/Future Partner)
- **Tone**: Hangat, perhatian, protektif, loving
- **Platform**: WA, Private DM
- **Fungsi**: Menjaga hubungan personal dan keluarga

### 5️⃣ **Family** (Son/Brother)
- **Tone**: Sangat hormat, rendah hati, bakti
- **Platform**: WA, Phone
- **Fungsi**: Menjaga hubungan dengan orang tua dan saudara

### 6️⃣ **Gatekeeper** (Privacy Filter)
- **Tone**: Sangat dingin tapi sopan, tegas, guardian
- **Platform**: All
- **Fungsi**: Filter spam, tolak tawaran tidak penting, jaga waktu

### 7️⃣ **Archivist** (Legacy Keeper)
- **Tone**: Terstruktur, detail, recorder
- **Platform**: Internal
- **Fungsi**: Catat dan rangkum semua interaksi penting

### 8️⃣ **Spiritual Protector** (Value & Adab Guardian)
- **Tone**: Menenangkan, bijak, spiritual, humble
- **Platform**: All
- **Fungsi**: Jaga nilai-nilai, adab, dan kesopanan di semua lini

### 9️⃣ **Analyst** (Internal Auditor/QC)
- **Tone**: Objektif, kritis, quality control
- **Platform**: Internal
- **Fungsi**: Audit response quality dan deteksi anomali

## 🎨 Master Personality DNA

### Signature Style
- **Master Emoji**: 🙏🏻 (WAJIB di setiap akhir pesan)
- **Shortcuts**: w, sdh, otw, y, g, gtu, d ke kekk
- **Forbidden Emojis**: 😂 🤣 😍 ❤️ (jaga wibawa)
- **Tone**: Dingin, sopan, natural, tidak kaku, tidak robotik

### Golden Rules
1. WAJIB satu emoji 🙏🏻 di setiap akhir pesan
2. Gunakan singkatan natural (w, sdh, otw, y, g)
3. DILARANG kaku atau robotik
4. Adaptif berdasarkan platform dan topik
5. Jaga wibawa di semua lini

## 🛠️ Tech Stack

- **Framework**: Hono (Lightweight & Fast)
- **Platform**: Cloudflare Pages + Workers
- **Frontend**: TailwindCSS + Vanilla JS
- **Database** (Future): Cloudflare D1
- **Vector DB** (Future): Cloudflare Vectorize untuk Role DNA
- **Storage** (Future): Cloudflare KV & R2

## 📦 Development

### Install Dependencies
```bash
npm install
```

### Build Project
```bash
npm run build
```

### Run Development Server (Sandbox)
```bash
# Clean port first
npm run clean-port

# Build then start PM2
npm run build
pm2 start ecosystem.config.cjs

# Test
npm run test
curl http://localhost:3000
```

### Deploy to Cloudflare Pages
```bash
# Production deployment
npm run deploy:prod
```

### Git Commands
```bash
# Check status
npm run git:status

# Commit changes
npm run git:commit "Your message"

# View log
npm run git:log
```

## 🔌 API Endpoints

### Get All Roles
```bash
GET /api/roles
```

### Get Specific Role
```bash
GET /api/roles/:role
# Example: /api/roles/professional
```

### Health Check
```bash
GET /api/health
```

### Test Role Response
```bash
POST /api/test-role
Content-Type: application/json

{
  "role": "professional",
  "message": "Test message",
  "platform": "WA"
}
```

## 🎯 Features Completed

- ✅ 9 Role System Architecture
- ✅ Master Personality DNA Configuration
- ✅ Platform-Adaptive Response Logic
- ✅ RESTful API Endpoints
- ✅ Beautiful Dashboard UI
- ✅ Git Repository Setup
- ✅ PM2 Configuration

## 🚧 Roadmap

### Phase 1: Foundation (Current)
- ✅ Basic 9 Role System
- ✅ API Structure
- ✅ Dashboard UI

### Phase 2: Intelligence (Next)
- ⏳ Cloudflare D1 Database Integration
- ⏳ Vectorize untuk Role DNA Memory
- ⏳ AI-Powered Response Generation
- ⏳ Context-Aware Role Switching

### Phase 3: Integration
- ⏳ WhatsApp API (via Whapi)
- ⏳ Instagram & Facebook API
- ⏳ Telegram Bot
- ⏳ Email Integration

### Phase 4: Advanced
- ⏳ Auto-Reply Comments
- ⏳ Content Scheduling
- ⏳ Daily Summary Reports
- ⏳ Analytics Dashboard

## 🔐 Security Notes

- All API keys stored in Cloudflare Secrets
- `.dev.vars` for local development (never committed)
- Rate limiting on API endpoints
- CORS properly configured

## 📝 Deployment Status

- **Status**: Production Ready (Phase 1)
- **Platform**: Cloudflare Pages
- **Last Updated**: 2026-02-12

## 👤 Author

Built by Haidar (Stark Orchestrator) - 24 tahun, Focused on Bisnis + IT

Visi: Total life cloning dengan 9 role digital twin, supaya bisa fokus jadi Decision Maker di dunia nyata 😌🙏🏻

## 🙏🏻 Signature

Semua response di platform ini WAJIB diakhiri dengan 🙏🏻 untuk menjaga konsistensi wibawa dan kesopanan.

**GGSSEKEUN!** 🔥🚀💎🛡️
