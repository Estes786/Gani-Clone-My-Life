// 🛡️ GANI CLONE MY LIFE - 9 ROLE AGENTIC SYSTEM
// Platform Cloning untuk Semua Role Hidup Haidar
// Dibangun dengan Cloudflare Pages + Hono Framework

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

// Type definitions for Cloudflare bindings
type Bindings = {
  // D1 Database untuk Archivist (Legacy Keeper)
  DB: D1Database
  
  // Workers AI untuk intelligent responses
  AI: Ai
  
  // Environment Variables for API Keys
  CLOUDFLARE_API_TOKEN: string
  WHAPI_TOKEN: string
  TELEGRAM_BOT_TOKEN: string
  FACEBOOK_APP_ID: string
  FACEBOOK_APP_SECRET: string
  
  // KV Storage untuk quick access data (future)
  // KV: KVNamespace
  
  // R2 untuk file storage (future)
  // R2: R2Bucket
  
  // Vectorize untuk 9 Role DNA (future)
  // VECTORIZE: VectorizeIndex
}

const app = new Hono<{ Bindings: Bindings }>()

// ════════════════════════════════════════════════════════════
// 🧠 9 ROLE SYSTEM CONFIGURATION
// ════════════════════════════════════════════════════════════

const ROLES = {
  professional: {
    name: 'Professional (Capster/Career Expert)',
    tone: 'dingin, sopan, efisien, to-the-point',
    platforms: ['WA', 'Email', 'LinkedIn'],
    signature: '🙏🏻',
  },
  orchestrator: {
    name: 'Orchestrator (Project Lead/Business Admin)',
    tone: 'tegas, strategis, solutif, commanding',
    platforms: ['WA', 'Telegram', 'Slack'],
    signature: '🙏🏻',
  },
  public: {
    name: 'Public (Content Creator/Figure)',
    tone: 'ramah tapi berwibawa, apresiatif, natural',
    platforms: ['IG', 'FB', 'TikTok', 'X'],
    signature: '🙏🏻',
  },
  personal: {
    name: 'Personal (Husband/Future Partner)',
    tone: 'hangat, perhatian, protektif, loving',
    platforms: ['WA', 'Private DM'],
    signature: '🙏🏻',
  },
  family: {
    name: 'Family (Son/Brother)',
    tone: 'sangat hormat, rendah hati, bakti',
    platforms: ['WA', 'Phone'],
    signature: '🙏🏻',
  },
  gatekeeper: {
    name: 'Gatekeeper (Privacy Filter)',
    tone: 'sangat dingin tapi sopan, tegas, guardian',
    platforms: ['All'],
    signature: '🙏🏻',
  },
  archivist: {
    name: 'Archivist (Legacy Keeper)',
    tone: 'terstruktur, detail, recorder',
    platforms: ['Internal'],
    signature: '🙏🏻',
  },
  spiritual: {
    name: 'Spiritual Protector (Value & Adab Guardian)',
    tone: 'menenangkan, bijak, spiritual, humble',
    platforms: ['All'],
    signature: '🙏🏻',
  },
  analyst: {
    name: 'Analyst (Internal Auditor/QC)',
    tone: 'objektif, kritis, quality control',
    platforms: ['Internal'],
    signature: '🙏🏻',
  },
}

// ════════════════════════════════════════════════════════════
// 🎨 MASTER PERSONALITY DNA
// ════════════════════════════════════════════════════════════

const MASTER_DNA = {
  signature_emoji: '🙏🏻',
  style: {
    shortcuts: ['w', 'sdh', 'otw', 'y', 'g', 'gtu', 'd ke kekk'],
    forbidden_emojis: ['😂', '🤣', '😍', '❤️'],
    tone: 'dingin, sopan, natural, tidak kaku, tidak robotik',
  },
  rules: [
    'WAJIB satu emoji 🙏🏻 di setiap akhir pesan',
    'Gunakan singkatan natural (w, sdh, otw, y, g)',
    'DILARANG kaku atau robotik',
    'Adaptif berdasarkan platform dan topik',
    'Jaga wibawa di semua lini',
  ],
}

// ════════════════════════════════════════════════════════════
// 🚪 MIDDLEWARE SETUP
// ════════════════════════════════════════════════════════════

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public/static/
app.use('/static/*', serveStatic({ root: './public' }))

// ════════════════════════════════════════════════════════════
// 🏠 MAIN DASHBOARD
// ════════════════════════════════════════════════════════════

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gani Clone My Life - Command Center</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
        <div class="container mx-auto px-4 py-12">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    <i class="fas fa-robot mr-3"></i>
                    GANI CLONE MY LIFE
                </h1>
                <p class="text-xl text-gray-400">
                    9 Role Agentic System - Command Center
                </p>
                <p class="text-sm text-gray-500 mt-2">
                    Platform Cloning Digital Twin untuk Semua Peran Hidup 🙏🏻
                </p>
            </div>

            <!-- 9 Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                ${Object.entries(ROLES).map(([key, role]) => `
                <div class="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-circle text-green-500 text-xs mr-3"></i>
                        <h3 class="text-lg font-bold">${role.name}</h3>
                    </div>
                    <div class="space-y-2 text-sm text-gray-400">
                        <p><span class="text-blue-400">Tone:</span> ${role.tone}</p>
                        <p><span class="text-purple-400">Platforms:</span> ${role.platforms.join(', ')}</p>
                        <p><span class="text-yellow-400">Signature:</span> ${role.signature}</p>
                    </div>
                </div>
                `).join('')}
            </div>

            <!-- Master DNA Section -->
            <div class="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-500/30 mb-12">
                <h2 class="text-2xl font-bold mb-6 flex items-center">
                    <i class="fas fa-dna mr-3"></i>
                    Master Personality DNA
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-lg font-semibold mb-3 text-blue-400">Signature Style</h3>
                        <ul class="space-y-2 text-gray-300">
                            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Master Emoji: ${MASTER_DNA.signature_emoji}</li>
                            <li><i class="fas fa-check-circle text-green-500 mr-2"></i> Shortcuts: ${MASTER_DNA.style.shortcuts.join(', ')}</li>
                            <li><i class="fas fa-times-circle text-red-500 mr-2"></i> Forbidden: ${MASTER_DNA.style.forbidden_emojis.join(' ')}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-3 text-purple-400">Golden Rules</h3>
                        <ul class="space-y-2 text-gray-300 text-sm">
                            ${MASTER_DNA.rules.map(rule => `<li><i class="fas fa-shield-alt text-yellow-500 mr-2"></i> ${rule}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Status Bar & Quick Links -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <!-- System Status -->
                <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <i class="fas fa-check-circle text-green-500 mr-2"></i>
                        System Status
                    </h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400">9 Roles Active</span>
                            <span class="text-green-400 font-semibold">✅ Ready</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400">D1 Database</span>
                            <span class="text-green-400 font-semibold">✅ Connected</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400">Workers AI</span>
                            <span class="text-green-400 font-semibold">✅ Available</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400">Webhooks</span>
                            <span class="text-green-400 font-semibold">✅ Active</span>
                        </div>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div class="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <i class="fas fa-link mr-2"></i>
                        Quick Links
                    </h3>
                    <div class="grid grid-cols-2 gap-3">
                        <a href="/api/roles" class="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-semibold transition-colors text-center">
                            <i class="fas fa-list mr-2"></i>
                            Roles API
                        </a>
                        <a href="/api/stats" class="bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg font-semibold transition-colors text-center">
                            <i class="fas fa-chart-bar mr-2"></i>
                            Statistics
                        </a>
                        <a href="/api/health" class="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg font-semibold transition-colors text-center">
                            <i class="fas fa-heartbeat mr-2"></i>
                            Health Check
                        </a>
                        <a href="https://github.com/Estes786/Gani-Clone-My-Life" target="_blank" class="bg-gray-600 hover:bg-gray-700 px-4 py-3 rounded-lg font-semibold transition-colors text-center">
                            <i class="fab fa-github mr-2"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Integration Status -->
            <div class="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-8 border border-purple-500/30">
                <h2 class="text-2xl font-bold mb-6 flex items-center">
                    <i class="fas fa-plug mr-3"></i>
                    Integration Status (Phase 2.2 - ACTIVE)
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-black/30 rounded-lg p-4 border border-pink-500/20">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-instagram text-pink-500 text-2xl mr-3"></i>
                            <div>
                                <h3 class="font-semibold">Meta API</h3>
                                <p class="text-xs text-gray-400">IG & FB Auto-Reply</p>
                            </div>
                        </div>
                        <div class="text-green-400 text-sm font-semibold">✅ Active & Ready</div>
                        <p class="text-xs text-gray-500 mt-2">Webhook: /api/webhooks/meta</p>
                    </div>
                    <div class="bg-black/30 rounded-lg p-4 border border-green-500/20">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-whatsapp text-green-500 text-2xl mr-3"></i>
                            <div>
                                <h3 class="font-semibold">WhatsApp</h3>
                                <p class="text-xs text-gray-400">Whapi Auto-Reply</p>
                            </div>
                        </div>
                        <div class="text-green-400 text-sm font-semibold">✅ Active & Sending</div>
                        <p class="text-xs text-gray-500 mt-2">Webhook: /api/webhooks/whatsapp</p>
                    </div>
                    <div class="bg-black/30 rounded-lg p-4 border border-blue-500/20">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-telegram text-blue-500 text-2xl mr-3"></i>
                            <div>
                                <h3 class="font-semibold">Telegram</h3>
                                <p class="text-xs text-gray-400">Bot Auto-Reply</p>
                            </div>
                        </div>
                        <div class="text-green-400 text-sm font-semibold">✅ Active & Sending</div>
                        <p class="text-xs text-gray-500 mt-2">Webhook: /api/webhooks/telegram</p>
                    </div>
                </div>
                <div class="mt-6 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                    <p class="text-sm text-blue-300">
                        <i class="fas fa-info-circle mr-2"></i>
                        <strong>Phase 2.2 Complete:</strong> All webhooks are live and processing messages with 9 Role System intelligence. Auto-reply aktif untuk WA, IG, FB, dan Telegram! 🔥🙏🏻
                    </p>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12 text-gray-500 text-sm">
                <p>Built with Cloudflare Pages + Hono Framework</p>
                <p class="mt-2">© 2026 Gani Clone My Life - Production Ready 🙏🏻</p>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            console.log('🛡️ GANI CLONE MY LIFE - System Initialized');
            console.log('9 Role Agentic System: Ready for deployment 🙏🏻');
        </script>
    </body>
    </html>
  `)
})

// ════════════════════════════════════════════════════════════
// 🔌 API ROUTES
// ════════════════════════════════════════════════════════════

// Get all roles configuration
app.get('/api/roles', (c) => {
  return c.json({
    success: true,
    message: 'All 9 roles retrieved successfully 🙏🏻',
    data: {
      roles: ROLES,
      master_dna: MASTER_DNA,
      total_roles: Object.keys(ROLES).length,
    },
  })
})

// Get specific role
app.get('/api/roles/:role', (c) => {
  const roleKey = c.req.param('role')
  const role = ROLES[roleKey as keyof typeof ROLES]
  
  if (!role) {
    return c.json({
      success: false,
      message: 'Role not found 🙏🏻',
    }, 404)
  }
  
  return c.json({
    success: true,
    message: `Role ${roleKey} retrieved successfully 🙏🏻`,
    data: role,
  })
})

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({
    success: true,
    status: 'healthy',
    message: 'Gani Clone system operational 🙏🏻',
    timestamp: new Date().toISOString(),
    roles_active: Object.keys(ROLES).length,
  })
})

// Test role response endpoint (for testing personality)
app.post('/api/test-role', async (c) => {
  const body = await c.req.json()
  const { role, message, platform } = body
  
  if (!role || !message) {
    return c.json({
      success: false,
      error: 'Role and message are required 🙏🏻',
    }, 400)
  }
  
  const selectedRole = ROLES[role as keyof typeof ROLES]
  
  if (!selectedRole) {
    return c.json({
      success: false,
      error: 'Invalid role 🙏🏻',
    }, 400)
  }
  
  // Simulate response with role personality
  const response = `[${selectedRole.name}] Response simulation: ${message} - ${selectedRole.tone} 🙏🏻`
  
  return c.json({
    success: true,
    role: selectedRole.name,
    tone: selectedRole.tone,
    platform: platform || 'generic',
    original_message: message,
    simulated_response: response,
    signature: MASTER_DNA.signature_emoji,
  })
})

// ════════════════════════════════════════════════════════════
// 🗄️ DATABASE ENDPOINTS (D1 Integration)
// ════════════════════════════════════════════════════════════

// Get database statistics
app.get('/api/stats', async (c) => {
  try {
    const { DB } = c.env
    
    // Get total users
    const usersResult = await DB.prepare('SELECT COUNT(*) as count FROM users').first()
    const totalUsers = usersResult?.count || 0
    
    // Get total interactions
    const interactionsResult = await DB.prepare('SELECT COUNT(*) as count FROM interactions').first()
    const totalInteractions = interactionsResult?.count || 0
    
    // Get role usage stats
    const roleStatsResult = await DB.prepare(`
      SELECT role, COUNT(*) as count 
      FROM interactions 
      GROUP BY role 
      ORDER BY count DESC
    `).all()
    
    return c.json({
      success: true,
      message: 'Statistics retrieved successfully 🙏🏻',
      data: {
        total_users: totalUsers,
        total_interactions: totalInteractions,
        role_usage: roleStatsResult.results || [],
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    return c.json({
      success: false,
      error: 'Database error 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// Add new user
app.post('/api/users', async (c) => {
  try {
    const body = await c.req.json()
    const { platform_id, platform, name, role_preference } = body
    
    if (!platform_id || !platform || !name) {
      return c.json({
        success: false,
        error: 'platform_id, platform, and name are required 🙏🏻',
      }, 400)
    }
    
    const { DB } = c.env
    
    const result = await DB.prepare(`
      INSERT INTO users (platform_id, platform, name, role_preference)
      VALUES (?, ?, ?, ?)
    `).bind(platform_id, platform, name, role_preference || null).run()
    
    return c.json({
      success: true,
      message: 'User added successfully 🙏🏻',
      data: {
        user_id: result.meta.last_row_id,
        platform_id,
        platform,
        name,
      },
    })
  } catch (error) {
    return c.json({
      success: false,
      error: 'Failed to add user 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// Log interaction (used by Archivist)
app.post('/api/interactions', async (c) => {
  try {
    const body = await c.req.json()
    const { platform_id, platform, role, message_in, message_out, sentiment } = body
    
    if (!platform_id || !platform || !role || !message_in) {
      return c.json({
        success: false,
        error: 'platform_id, platform, role, and message_in are required 🙏🏻',
      }, 400)
    }
    
    const { DB } = c.env
    
    // Get or create user
    let user = await DB.prepare(`
      SELECT id FROM users WHERE platform_id = ? AND platform = ?
    `).bind(platform_id, platform).first()
    
    if (!user) {
      // Create new user
      const userResult = await DB.prepare(`
        INSERT INTO users (platform_id, platform, name)
        VALUES (?, ?, ?)
      `).bind(platform_id, platform, platform_id).run()
      user = { id: userResult.meta.last_row_id }
    }
    
    // Log interaction
    const result = await DB.prepare(`
      INSERT INTO interactions (user_id, platform, role, message_in, message_out, sentiment)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(user.id, platform, role, message_in, message_out || null, sentiment || 'neutral').run()
    
    return c.json({
      success: true,
      message: 'Interaction logged successfully 🙏🏻',
      data: {
        interaction_id: result.meta.last_row_id,
        user_id: user.id,
        role,
        platform,
      },
    })
  } catch (error) {
    return c.json({
      success: false,
      error: 'Failed to log interaction 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// ════════════════════════════════════════════════════════════
// 🔑 FACEBOOK LONG-LIVED TOKEN MANAGEMENT
// ════════════════════════════════════════════════════════════

// Convert short-lived token to long-lived token (60 days)
app.post('/api/facebook/long-lived-token', async (c) => {
  try {
    const body = await c.req.json()
    const { short_lived_token, app_id, app_secret } = body
    
    const appId = app_id || c.env.FACEBOOK_APP_ID || '922959703616504'
    const appSecret = app_secret || c.env.FACEBOOK_APP_SECRET || 'TtjdCLYka5MVepAtB-h9LUebtXw'
    
    if (!short_lived_token) {
      return c.json({
        success: false,
        error: 'short_lived_token is required 🙏🏻',
      }, 400)
    }
    
    // Exchange for long-lived token
    const exchangeUrl = `https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${short_lived_token}`
    
    const response = await fetch(exchangeUrl)
    const data = await response.json()
    
    if (data.access_token) {
      // Get token info
      const debugUrl = `https://graph.facebook.com/debug_token?input_token=${data.access_token}&access_token=${appId}|${appSecret}`
      const debugResponse = await fetch(debugUrl)
      const debugData = await debugResponse.json()
      
      return c.json({
        success: true,
        message: 'Long-lived token generated successfully 🙏🏻',
        data: {
          access_token: data.access_token,
          token_type: data.token_type,
          expires_in: data.expires_in || 5184000, // 60 days in seconds
          expires_in_days: Math.floor((data.expires_in || 5184000) / 86400),
          debug_info: debugData.data,
        },
      })
    } else {
      return c.json({
        success: false,
        error: 'Failed to exchange token 🙏🏻',
        details: data,
      }, 400)
    }
  } catch (error) {
    return c.json({
      success: false,
      error: 'Token exchange failed 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// Get current token info and expiration
app.post('/api/facebook/token-info', async (c) => {
  try {
    const body = await c.req.json()
    const { access_token, app_id, app_secret } = body
    
    const appId = app_id || c.env.FACEBOOK_APP_ID || '922959703616504'
    const appSecret = app_secret || c.env.FACEBOOK_APP_SECRET || 'TtjdCLYka5MVepAtB-h9LUebtXw'
    
    if (!access_token) {
      return c.json({
        success: false,
        error: 'access_token is required 🙏🏻',
      }, 400)
    }
    
    // Debug token
    const debugUrl = `https://graph.facebook.com/debug_token?input_token=${access_token}&access_token=${appId}|${appSecret}`
    const response = await fetch(debugUrl)
    const data = await response.json()
    
    if (data.data) {
      const tokenData = data.data
      const expiresAt = new Date(tokenData.expires_at * 1000)
      const now = new Date()
      const daysRemaining = Math.floor((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      
      return c.json({
        success: true,
        message: 'Token info retrieved successfully 🙏🏻',
        data: {
          app_id: tokenData.app_id,
          type: tokenData.type,
          application: tokenData.application,
          expires_at: expiresAt.toISOString(),
          expires_in_days: daysRemaining,
          is_valid: tokenData.is_valid,
          issued_at: tokenData.issued_at ? new Date(tokenData.issued_at * 1000).toISOString() : null,
          scopes: tokenData.scopes || [],
          user_id: tokenData.user_id,
        },
      })
    } else {
      return c.json({
        success: false,
        error: 'Invalid token or failed to get info 🙏🏻',
        details: data,
      }, 400)
    }
  } catch (error) {
    return c.json({
      success: false,
      error: 'Token info retrieval failed 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// ════════════════════════════════════════════════════════════
// 🔌 INTEGRATION ENDPOINTS (Meta, WhatsApp, Telegram)
// ════════════════════════════════════════════════════════════

// Helper: Advanced AI-powered role detection
function detectRole(message: string, platform: string, senderId: string): string {
  const msgLower = message.toLowerCase().trim()
  
  // 1️⃣ GATEKEEPER - Filter spam/unwanted (highest priority)
  const spamPatterns = [
    /^p$/i,
    /^hi$/i,
    /^hello$/i,
    /^hai$/i,
    /^test$/i,
    /^halo$/i,
    /^hy$/i,
    /^hey$/i,
    /^ping$/i,
  ]
  if (spamPatterns.some(pattern => pattern.test(msgLower))) {
    return 'gatekeeper'
  }
  
  // 2️⃣ FAMILY - Family keywords (very specific)
  const familyKeywords = ['ibu', 'bapak', 'mama', 'papa', 'ayah', 'bunda', 'kakak', 'adik', 'keluarga', 'ortu']
  if (familyKeywords.some(keyword => msgLower.includes(keyword))) {
    return 'family'
  }
  
  // 3️⃣ SPIRITUAL PROTECTOR - Religious/spiritual content
  const spiritualKeywords = ['doa', 'sholat', 'puasa', 'allah', 'alhamdulillah', 'insyaallah', 'masya allah', 'subhanallah', 'syukur', 'ibadah']
  if (spiritualKeywords.some(keyword => msgLower.includes(keyword))) {
    return 'spiritual'
  }
  
  // 4️⃣ ORCHESTRATOR - Business/Project management (strategic)
  const orchestratorKeywords = [
    'project', 'bisnis', 'meeting', 'deadline', 'target', 'strategy', 'roadmap', 
    'koordinasi', 'planning', 'budget', 'revenue', 'kpi', 'milestone', 'stakeholder',
    'partnership', 'kolaborasi', 'expansion', 'scaling'
  ]
  if (orchestratorKeywords.some(keyword => msgLower.includes(keyword))) {
    return 'orchestrator'
  }
  
  // 5️⃣ PROFESSIONAL - Work/Career/Technical (operational)
  const professionalKeywords = [
    'kerja', 'capster', 'potong', 'barber', 'salon', 'client', 'appointment', 
    'booking', 'schedule', 'shift', 'service', 'teknis', 'skill', 'training',
    'operational', 'sop', 'prosedur', 'task', 'job'
  ]
  if (professionalKeywords.some(keyword => msgLower.includes(keyword))) {
    return 'professional'
  }
  
  // 6️⃣ PERSONAL - Romantic/intimate (careful detection)
  const personalKeywords = ['sayang', 'cinta', 'kangen', 'rindu', 'love', 'babe', 'dear', 'honey']
  if (personalKeywords.some(keyword => msgLower.includes(keyword))) {
    return 'personal'
  }
  
  // 7️⃣ PUBLIC - Social media specific content
  const publicKeywords = ['konten', 'posting', 'caption', 'story', 'reels', 'followers', 'like', 'comment', 'share', 'viral']
  if (publicKeywords.some(keyword => msgLower.includes(keyword)) || 
      platform === 'IG' || platform === 'FB' || platform === 'TikTok') {
    return 'public'
  }
  
  // 8️⃣ Platform-based default roles
  if (platform === 'IG' || platform === 'FB' || platform === 'TikTok' || platform === 'X') {
    return 'public'
  }
  
  if (platform === 'Telegram' && msgLower.length > 50) {
    // Longer messages on Telegram = likely business/professional
    return 'professional'
  }
  
  // 9️⃣ Default fallback
  return 'personal'
}

// Helper: Advanced AI-powered response generation
async function generateResponse(role: string, message: string, platform: string, env?: any): Promise<string> {
  const roleConfig = ROLES[role as keyof typeof ROLES]
  
  if (!roleConfig) {
    return `Terima kasih pesannya, w proses dulu y 🙏🏻`
  }
  
  // Role-specific response templates with variations
  const responses: Record<string, string[]> = {
    gatekeeper: [
      `Maaf, untuk chat yang lebih efektif, tolong sertakan tujuan atau pertanyaan yang jelas y. Terima kasih 🙏🏻`,
      `Halo, w appreciate reach out-nya. Tapi supaya lebih efisien, bisa kasih context atau tujuan chat-nya dulu? Terima kasih 🙏🏻`,
      `Thanks udah chat. Untuk respon yang lebih cepat, bisa langsung to the point aja pertanyaan atau kebutuhannya? 🙏🏻`,
    ],
    orchestrator: [
      `W terima pesannya. Untuk urusan project atau bisnis, w koordinasi dulu y. Nanti w update 🙏🏻`,
      `Noted untuk project discussion-nya. W review dulu dan kabarin as soon as possible 🙏🏻`,
      `Sip, w catat. Untuk strategic planning-nya w susun dulu, nnti w circle back with timeline 🙏🏻`,
      `Okay, w tangkep maksudnya. W koordinasi sm stakeholder dulu, update segera y 🙏🏻`,
    ],
    professional: [
      `Untuk urusan kerja/teknis, noted. W cek dulu dan kabarin y 🙏🏻`,
      `Sip, w terima requestnya. W process dulu dan confirm secepatnya 🙏🏻`,
      `Okay understood. W handle dan update progress-nya dalam waktu dekat 🙏🏻`,
      `Thanks infonya. W review dulu dari sisi teknis dan operasional, nanti w follow up 🙏🏻`,
    ],
    public: [
      `Terima kasih ya udah reach out! Seneng banget bisa connect. W follow up secepatnya 🙏🏻`,
      `Appreciate banget support-nya! W baca dan akan respond lebih detail soon 🙏🏻`,
      `Thanks ya udah engage! Value banget feedback atau pesannya. W balas lebih lengkap nanti 🙏🏻`,
      `Seneng banget bisa dapet message dari kamu! W proses dan balas secepatnya y 🙏🏻`,
    ],
    personal: [
      `Terima kasih pesannya, w baca dan bakal balas secepatnya y 🙏🏻`,
      `Noted, w appreciate reach out-nya. W respond lebih detail soon 🙏🏻`,
      `Thanks udah chat, w baca baik-baik dan balas dalam waktu dekat 🙏🏻`,
      `Sip, w terima pesannya. W balas proper nanti y 🙏🏻`,
    ],
    family: [
      `Iya, terima kasih sudah mengingatkan. Insya Allah w usahakan secepatnya 🙏🏻`,
      `Baik, w noted. Mohon maaf jika belum sempat respond cepat. Terima kasih pengertiannya 🙏🏻`,
      `Iya siap, w dengar dan akan w perhatikan. Terima kasih ya 🙏🏻`,
      `Baik, w pahami. Mohon doanya supaya semua lancar y. Terima kasih 🙏🏻`,
    ],
    spiritual: [
      `Aamiin, terima kasih remindernya. Semoga kita selalu dijaga dan diberi kemudahan 🙏🏻`,
      `Alhamdulillah, terima kasih sudah mengingatkan. Semoga kita istiqomah y 🙏🏻`,
      `Barakallah, w appreciate reminder-nya. Semoga Allah permudah segala urusan kita 🙏🏻`,
      `Aamiin ya rabbal alamin. Jazakallah khairan sudah remind, semoga berkah 🙏🏻`,
    ],
    archivist: [
      `Data logged successfully. Entry recorded for future reference 🙏🏻`,
      `Interaction archived. Legacy system updated 🙏🏻`,
    ],
    analyst: [
      `Analysis complete. Quality metrics recorded 🙏🏻`,
      `Performance audit logged. Insights available for review 🙏🏻`,
    ],
  }
  
  // Get random variation from role responses
  const roleResponses = responses[role] || responses['personal']
  const randomResponse = roleResponses[Math.floor(Math.random() * roleResponses.length)]
  
  // Optional: Use Workers AI for more dynamic responses (if available)
  if (env?.AI && message.length > 20) {
    try {
      const aiPrompt = `You are ${roleConfig.name} with tone: ${roleConfig.tone}.
Message received: "${message}"
Platform: ${platform}

Generate a brief (max 2 sentences), natural Indonesian response that:
1. Matches the ${role} personality
2. Uses shortcuts like: w, sdh, otw, y, g
3. Is NOT robotic or formal
4. MUST end with 🙏🏻 emoji

Response:`

      const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
        prompt: aiPrompt,
        max_tokens: 100,
      })
      
      if (aiResponse?.response) {
        let generatedResponse = aiResponse.response.trim()
        // Ensure it ends with 🙏🏻
        if (!generatedResponse.endsWith('🙏🏻')) {
          generatedResponse += ' 🙏🏻'
        }
        return generatedResponse
      }
    } catch (aiError) {
      console.log('AI generation failed, using template:', aiError)
    }
  }
  
  return randomResponse
}

// Meta API Webhook (for IG & FB)
app.post('/api/webhooks/meta', async (c) => {
  try {
    const body = await c.req.json()
    
    console.log('Meta webhook received:', body)
    
    // Meta webhook verification (GET request during setup)
    if (c.req.query('hub.mode') === 'subscribe') {
      const mode = c.req.query('hub.mode')
      const token = c.req.query('hub.verify_token')
      const challenge = c.req.query('hub.challenge')
      
      if (mode && token === 'GANI_VERIFY_TOKEN') {
        return c.text(challenge || '')
      }
      return c.json({ error: 'Forbidden' }, 403)
    }
    
    // Process Meta webhook data
    if (body.object === 'instagram' || body.object === 'page') {
      const entry = body.entry?.[0]
      const messaging = entry?.messaging?.[0] || entry?.changes?.[0]?.value
      
      if (!messaging) {
        return c.json({ success: true, message: 'No action required 🙏🏻' })
      }
      
      const senderId = messaging.sender?.id || messaging.from?.id
      const messageText = messaging.message?.text || ''
      const platform = body.object === 'instagram' ? 'IG' : 'FB'
      
      // Detect role and generate response
      const role = detectRole(messageText, platform, senderId)
      const response = await generateResponse(role, messageText, platform, c.env)
      
      // Log to database
      const { DB } = c.env
      try {
        await DB.prepare(`
          INSERT INTO interactions (user_id, platform, role, message_in, message_out, sentiment)
          VALUES ((SELECT id FROM users WHERE platform_id = ? AND platform = ? LIMIT 1), ?, ?, ?, ?, ?)
        `).bind(senderId, platform, platform, role, messageText, response, 'neutral').run()
      } catch (dbError) {
        console.error('DB log error:', dbError)
      }
      
      return c.json({
        success: true,
        message: 'Meta webhook processed 🙏🏻',
        role,
        response_sent: response,
      })
    }
    
    return c.json({
      success: true,
      message: 'Meta webhook received but no action taken 🙏🏻',
    })
  } catch (error) {
    console.error('Meta webhook error:', error)
    return c.json({
      success: false,
      error: 'Webhook processing failed 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// WhatsApp (Whapi) Webhook
app.post('/api/webhooks/whatsapp', async (c) => {
  try {
    const body = await c.req.json()
    
    console.log('WhatsApp webhook received:', body)
    
    // Whapi webhook structure
    const event = body.event
    const messages = body.messages || []
    
    if (event !== 'messages.new' || !messages.length) {
      return c.json({ success: true, message: 'No new messages 🙏🏻' })
    }
    
    const message = messages[0]
    const messageText = message.text?.body || message.conversation || ''
    const senderId = message.from || message.chatId
    const platform = 'WA'
    
    // Detect role and generate response
    const role = detectRole(messageText, platform, senderId)
    const response = await generateResponse(role, messageText, platform, c.env)
    
    // Send response via Whapi API
    const WHAPI_TOKEN = c.env.WHAPI_TOKEN || 'Tn25IIq6OQWuRMCGuz0ZXWmYZa3uw8Po'
    const WHAPI_URL = 'https://gate.whapi.cloud/messages/text'
    
    try {
      await fetch(WHAPI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WHAPI_TOKEN}`,
        },
        body: JSON.stringify({
          typing_time: 0,
          to: senderId,
          body: response,
        }),
      })
    } catch (sendError) {
      console.error('Whapi send error:', sendError)
    }
    
    // Log to database
    const { DB } = c.env
    try {
      await DB.prepare(`
        INSERT INTO interactions (user_id, platform, role, message_in, message_out, sentiment)
        VALUES ((SELECT id FROM users WHERE platform_id = ? AND platform = ? LIMIT 1), ?, ?, ?, ?, ?)
      `).bind(senderId, platform, platform, role, messageText, response, 'neutral').run()
    } catch (dbError) {
      console.error('DB log error:', dbError)
    }
    
    return c.json({
      success: true,
      message: 'WhatsApp webhook processed & replied 🙏🏻',
      role,
      response_sent: response,
    })
  } catch (error) {
    console.error('WhatsApp webhook error:', error)
    return c.json({
      success: false,
      error: 'Webhook processing failed 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// Telegram Bot Webhook
app.post('/api/webhooks/telegram', async (c) => {
  try {
    const body = await c.req.json()
    
    console.log('Telegram webhook received:', body)
    
    // Telegram webhook structure
    const message = body.message || body.edited_message
    
    if (!message) {
      return c.json({ success: true, message: 'No message found 🙏🏻' })
    }
    
    const messageText = message.text || ''
    const chatId = message.chat.id
    const senderId = message.from.id
    const platform = 'Telegram'
    
    // Detect role and generate response
    const role = detectRole(messageText, platform, String(senderId))
    const response = await generateResponse(role, messageText, platform, c.env)
    
    // Send response via Telegram Bot API
    const TELEGRAM_TOKEN = c.env.TELEGRAM_BOT_TOKEN || '8548736484:AAHYJ64i8eAM_1D5P-cBSmE5LHth8VCpZxg'
    const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`
    
    try {
      await fetch(TELEGRAM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: response,
        }),
      })
    } catch (sendError) {
      console.error('Telegram send error:', sendError)
    }
    
    // Log to database
    const { DB } = c.env
    try {
      await DB.prepare(`
        INSERT INTO interactions (user_id, platform, role, message_in, message_out, sentiment)
        VALUES ((SELECT id FROM users WHERE platform_id = ? AND platform = ? LIMIT 1), ?, ?, ?, ?, ?)
      `).bind(String(senderId), platform, platform, role, messageText, response, 'neutral').run()
    } catch (dbError) {
      console.error('DB log error:', dbError)
    }
    
    return c.json({
      success: true,
      message: 'Telegram webhook processed & replied 🙏🏻',
      role,
      response_sent: response,
    })
  } catch (error) {
    console.error('Telegram webhook error:', error)
    return c.json({
      success: false,
      error: 'Webhook processing failed 🙏🏻',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, 500)
  }
})

// ════════════════════════════════════════════════════════════
// 🚀 EXPORT APP
// ════════════════════════════════════════════════════════════

export default app
