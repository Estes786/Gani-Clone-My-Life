# 🔌 Gani Clone My Life - Webhook Configuration Guide

**Phase 2.2 - Complete Social Media Integration**

Platform ini sekarang bisa auto-reply messages dari **WhatsApp, Telegram, Instagram, dan Facebook** menggunakan 9 Role Agentic System! 🔥🙏🏻

---

## 📱 1. WhatsApp Integration (Whapi.Cloud)

### ✅ Status: ACTIVE & CONFIGURED

### Configuration Details:
- **Service**: Whapi.Cloud
- **Token**: `Tn25IIq6OQWuRMCGuz0ZXWmYZa3uw8Po` (already configured in code)
- **Webhook URL**: `https://gani-clone-my-life.pages.dev/api/webhooks/whatsapp`

### Setup Steps:

#### 1. Login to Whapi Dashboard
```
Go to: https://whapi.cloud/dashboard
Login with your account
```

#### 2. Configure Webhook
```
Navigate to: Settings → Webhooks
Add New Webhook:
  - URL: https://gani-clone-my-life.pages.dev/api/webhooks/whatsapp
  - Events: messages.new, messages.ack
  - Method: POST
Save configuration
```

#### 3. Test WhatsApp
```bash
# Send message to your WhatsApp number
# Or test manually:
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/whatsapp \
  -H "Content-Type: application/json" \
  -d '{
    "event": "messages.new",
    "messages": [{
      "from": "628123456789",
      "text": {"body": "Hello, test project message"}
    }]
  }'
```

### Expected Behavior:
- Gani akan detect role berdasarkan message content
- Auto-reply dengan tone yang sesuai role
- Log conversation ke D1 Database
- Response selalu diakhiri dengan 🙏🏻

---

## 🤖 2. Telegram Bot Integration

### ✅ Status: ACTIVE & CONFIGURED

### Configuration Details:
- **Bot Token**: `8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg` (already configured)
- **Webhook URL**: `https://gani-clone-my-life.pages.dev/api/webhooks/telegram`
- **Bot Username**: @YourBotUsername (check with @BotFather)

### Setup Steps:

#### 1. Set Webhook via Telegram API
```bash
curl -X POST "https://api.telegram.org/bot8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://gani-clone-my-life.pages.dev/api/webhooks/telegram",
    "allowed_updates": ["message", "edited_message"]
  }'
```

#### 2. Verify Webhook Status
```bash
curl "https://api.telegram.org/bot8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg/getWebhookInfo"
```

#### 3. Test Bot
```bash
# Method 1: Send message via Telegram app to your bot
# Method 2: Test webhook directly
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/telegram \
  -H "Content-Type: application/json" \
  -d '{
    "message": {
      "from": {"id": 123456, "first_name": "Test"},
      "chat": {"id": 123456, "type": "private"},
      "text": "Test kerja capster"
    }
  }'
```

### Expected Behavior:
- Gani detects role from message keywords
- Replies automatically via Telegram Bot API
- Logs to database with role classification
- Natural response dengan Master DNA signature 🙏🏻

---

## 📷 3. Instagram Integration (Meta API)

### ⚠️ Status: WEBHOOK READY - Manual Setup Required

### Configuration Details:
- **Webhook URL**: `https://gani-clone-my-life.pages.dev/api/webhooks/meta`
- **Verify Token**: `GANI_VERIFY_TOKEN`
- **Platform**: Instagram Business/Professional Account

### Setup Steps:

#### 1. Convert Instagram Account
```
1. Open Instagram app
2. Go to Settings → Account
3. Switch to Professional Account
4. Choose category: Digital Creator or Business
```

#### 2. Create Facebook Page (Required)
```
1. Go to https://facebook.com/pages/create
2. Create page (name: "Haidar Command Center" or your brand)
3. Connect Instagram account to this page
4. Settings → Instagram → Connect Account
```

#### 3. Create Meta Developer App
```
1. Go to https://developers.facebook.com
2. Click "My Apps" → "Create App"
3. Choose "Business" type
4. App Name: "Gani Clone Bot"
5. Add Products:
   - Instagram → Messenger API
   - Facebook → Webhooks
```

#### 4. Configure Webhook
```
1. In Meta App Dashboard → Webhooks
2. Add Callback URL: https://gani-clone-my-life.pages.dev/api/webhooks/meta
3. Verify Token: GANI_VERIFY_TOKEN
4. Subscribe to fields:
   - messages
   - messaging_postbacks
   - message_deliveries
5. Save & Test
```

#### 5. Get Page Access Token
```
1. Go to Graph API Explorer: https://developers.facebook.com/tools/explorer
2. Select your app
3. Get Token → Page Access Token
4. Grant permissions:
   - pages_messaging
   - instagram_basic
   - instagram_manage_messages
5. Copy token (will be needed for production)
```

### Expected Behavior:
- Instagram DMs → Auto-reply dengan Role Public/Professional
- Facebook Messages → Auto-reply dengan Role Professional
- Comments → Logged but manual reply (API limitation)
- All logged to D1 Database

---

## 📊 4. Testing & Monitoring

### Test All Webhooks:
```bash
# WhatsApp Test
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/whatsapp \
  -H "Content-Type: application/json" \
  -d '{"event":"messages.new","messages":[{"from":"628123456789","text":{"body":"Test project message"}}]}'

# Telegram Test  
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/telegram \
  -H "Content-Type: application/json" \
  -d '{"message":{"from":{"id":123},"chat":{"id":123},"text":"Test kerja"}}'

# Meta Test
curl -X POST https://gani-clone-my-life.pages.dev/api/webhooks/meta \
  -H "Content-Type: application/json" \
  -d '{"object":"instagram","entry":[{"messaging":[{"sender":{"id":"123"},"message":{"text":"Hi"}}]}]}'
```

### Check Database Stats:
```bash
curl https://gani-clone-my-life.pages.dev/api/stats
```

### Monitor Interactions:
```bash
# Local development
pm2 logs gani-clone --nostream

# Production logs
npx wrangler pages deployment tail
```

---

## 🛡️ Role Detection Logic

Gani automatically selects role based on message analysis:

### Keywords Mapping:
- **"project", "bisnis", "meeting", "deadline"** → Orchestrator Role
- **"kerja", "capster", "potong", "barber"** → Professional Role
- **"p", "hi", "hello aja", "hai"** → Gatekeeper (spam filter)
- **Platform IG/FB** → Public Role (content creator vibe)
- **Platform WA/Telegram (default)** → Personal Role

### Response Examples:

#### Orchestrator Response:
```
"W terima pesannya. Untuk urusan project atau bisnis, w koordinasi dulu y. Nanti w update 🙏🏻"
```

#### Professional Response:
```
"Untuk urusan kerja/teknis, noted. W cek dulu dan kabarin y 🙏🏻"
```

#### Public Response (IG/FB):
```
"Terima kasih ya udah reach out! Seneng banget bisa connect. W follow up secepatnya 🙏🏻"
```

#### Gatekeeper Response (spam):
```
"Maaf, untuk chat yang lebih efektif, tolong sertakan tujuan atau pertanyaan yang jelas y. Terima kasih 🙏🏻"
```

---

## 🔐 Security & API Tokens

### Configured Tokens (In Code):
- **WhatsApp (Whapi)**: `Tn25IIq6OQWuRMCGuz0ZXWmYZa3uw8Po`
- **Telegram Bot**: `8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg`

### For Production (Recommended):
Move tokens to Cloudflare Secrets:
```bash
# Set WhatsApp token
npx wrangler pages secret put WHAPI_TOKEN --project-name gani-clone-my-life

# Set Telegram token
npx wrangler pages secret put TELEGRAM_TOKEN --project-name gani-clone-my-life

# Update code to use: c.env.WHAPI_TOKEN instead of hardcoded
```

---

## 🎯 What's Next? (Phase 3)

### Upcoming Enhancements:
1. **Vectorize Integration** - AI-powered context memory for each role
2. **Advanced Role Switching** - ML-based role prediction
3. **Sentiment Analysis** - Detect emotion and adjust tone
4. **Multi-language Support** - Auto-detect and respond in user's language
5. **Scheduled Messages** - Proactive outreach capability
6. **Analytics Dashboard** - Real-time interaction insights

---

## 💡 Usage Tips

### For Chief (Decision Maker):
- **Dashboard**: https://gani-clone-my-life.pages.dev (monitor all integrations)
- **Stats**: https://gani-clone-my-life.pages.dev/api/stats (check activity)
- **All platforms auto-handled** - Focus on strategic decisions only!

### For Development:
- **Local testing**: http://localhost:3000
- **PM2 logs**: `pm2 logs gani-clone --nostream`
- **Database check**: `npm run db:console:local -- --command="SELECT * FROM interactions ORDER BY created_at DESC LIMIT 10"`

---

## 🙏🏻 Master Signature

Semua response dari Gani di semua platform WAJIB diakhiri dengan 🙏🏻 untuk menjaga konsistensi wibawa dan kesopanan Chief!

**GGSSEKEUN! Phase 2.2 Complete!** 🔥🚀💎🛡️
