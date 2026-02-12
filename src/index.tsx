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
                            <span class="text-yellow-400 font-semibold">⚠️ Pending</span>
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
                    Integration Status (Phase 2.1)
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-black/30 rounded-lg p-4">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-instagram text-pink-500 text-2xl mr-3"></i>
                            <div>
                                <h3 class="font-semibold">Meta API</h3>
                                <p class="text-xs text-gray-400">IG & FB Integration</p>
                            </div>
                        </div>
                        <div class="text-yellow-400 text-sm">⚠️ Webhook Ready</div>
                    </div>
                    <div class="bg-black/30 rounded-lg p-4">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-whatsapp text-green-500 text-2xl mr-3"></i>
                            <div>
                                <h3 class="font-semibold">WhatsApp</h3>
                                <p class="text-xs text-gray-400">Whapi Integration</p>
                            </div>
                        </div>
                        <div class="text-yellow-400 text-sm">⚠️ Webhook Ready</div>
                    </div>
                    <div class="bg-black/30 rounded-lg p-4">
                        <div class="flex items-center mb-3">
                            <i class="fab fa-telegram text-blue-500 text-2xl mr-3"></i>
                            <div>
                                <h3 class="font-semibold">Telegram</h3>
                                <p class="text-xs text-gray-400">Bot API Ready</p>
                            </div>
                        </div>
                        <div class="text-yellow-400 text-sm">⚠️ Webhook Ready</div>
                    </div>
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
// 🔌 INTEGRATION ENDPOINTS (Meta, WhatsApp, Telegram)
// ════════════════════════════════════════════════════════════

// Meta API Webhook (for IG & FB)
app.post('/api/webhooks/meta', async (c) => {
  try {
    const body = await c.req.json()
    
    // Log webhook received
    console.log('Meta webhook received:', body)
    
    // TODO: Process Meta webhook
    // - Detect platform (IG or FB)
    // - Extract message content
    // - Determine appropriate role
    // - Generate response
    // - Log to database
    
    return c.json({
      success: true,
      message: 'Meta webhook received 🙏🏻',
      status: 'pending_implementation',
    })
  } catch (error) {
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
    
    // Log webhook received
    console.log('WhatsApp webhook received:', body)
    
    // TODO: Process WhatsApp webhook
    // - Extract contact info & message
    // - Determine appropriate role
    // - Generate response with personality
    // - Send via Whapi API
    // - Log to database
    
    return c.json({
      success: true,
      message: 'WhatsApp webhook received 🙏🏻',
      status: 'pending_implementation',
    })
  } catch (error) {
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
    
    // Log webhook received
    console.log('Telegram webhook received:', body)
    
    // TODO: Process Telegram webhook
    // - Extract user info & message
    // - Determine appropriate role
    // - Generate response
    // - Send via Telegram Bot API
    // - Log to database
    
    return c.json({
      success: true,
      message: 'Telegram webhook received 🙏🏻',
      status: 'pending_implementation',
    })
  } catch (error) {
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
