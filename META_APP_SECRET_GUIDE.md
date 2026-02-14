# 🔐 META APP SECRET - How to Get It

## ⚠️ Current Issue:
**App Secret yang diberikan TIDAK VALID!**

Credential yang diberikan:
- `TtjdCLYka5MVepAtB-h9LUebtXw` → Ini adalah **App Token**, bukan App Secret
- Format `922959703616504|TtjdCLYka5MVepAtB-h9LUebtXw` → Ini adalah **App Access Token**

## ✅ How to Get REAL App Secret:

### Step 1: Go to Meta Developers Dashboard
1. Open: https://developers.facebook.com/apps/
2. Login dengan akun Anda
3. Pilih app: **clone-my-self-1-setup** (App ID: 922959703616504)

### Step 2: Navigate to App Settings
1. Klik **Settings** di sidebar kiri
2. Klik **Basic** (Settings → Basic)

### Step 3: Get App Secret
1. Scroll down sampai bagian **App Secret**
2. Klik tombol **Show** di sebelah App Secret
3. Facebook akan meminta konfirmasi password
4. Setelah confirm, Anda akan lihat **App Secret asli** (format hex string panjang)

### Step 4: Copy App Secret
**App Secret** biasanya berupa:
- String random sepanjang 32-40 karakter
- Contoh format: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`
- **BUKAN** format `AppID|Token` seperti yang sekarang

## 🔧 Once You Have App Secret:

### Option 1: Update .bashrc_cloudflare
```bash
cd /home/user/webapp
nano .bashrc_cloudflare

# Ganti line:
export FACEBOOK_APP_SECRET="TtjdCLYka5MVepAtB-h9LUebtXw"

# Dengan App Secret yang ASLI:
export FACEBOOK_APP_SECRET="<YOUR_REAL_APP_SECRET_HERE>"

# Save (Ctrl+O, Enter, Ctrl+X)

# Reload
source .bashrc_cloudflare
```

### Option 2: Tell Me Directly
Kirim App Secret yang baru ke saya, format:
```
App Secret: <paste_here>
```

Maka saya akan langsung convert semua tokens Anda ke long-lived tokens (60 days)! 🔥

## 📊 Why We Need This:
- **Short-lived tokens** hanya valid 1-2 jam
- **Long-lived tokens** valid sampai 60 hari
- Tanpa App Secret yang valid, kita **TIDAK BISA** exchange tokens
- Semua Meta API integration (FB, IG, Threads, WA) **BUTUH** long-lived token

## 🚨 Security Notes:
1. **JANGAN** share App Secret di public (GitHub, screenshots publik, etc)
2. **HANYA** simpan di environment variables atau secret manager
3. Cloudflare akan store di **Cloudflare Secrets** (aman!)
4. Di local, simpan di `.bashrc_cloudflare` atau `.dev.vars` (sudah di .gitignore)

## ✨ Alternative: Use Access Tokens Directly
Jika Anda kesulitan mendapat App Secret, kita bisa:
1. Generate **Page Access Tokens** langsung dari Facebook Developer Console
2. Use **User Access Tokens** dengan permissions yang sesuai
3. Skip token exchange dan langsung pakai tokens yang ada

**TAPI**, dengan cara ini tokens akan expire lebih cepat dan perlu manual refresh.

## 📋 Next Steps:
1. ✅ Dapatkan App Secret asli dari Meta Developer Dashboard
2. ✅ Update credential di `.bashrc_cloudflare`
3. ✅ Saya akan convert semua tokens ke long-lived
4. ✅ Semua Meta integrations akan berfungsi sempurna!

**Need help?** Just paste App Secret dan saya handle sisanya! 🙏🏻
