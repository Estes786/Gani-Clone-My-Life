// PM2 Configuration for Gani Clone My Life Platform
// Enhanced with D1 Database Support
module.exports = {
  apps: [
    {
      name: 'gani-clone',
      script: 'npx',
      args: 'wrangler pages dev dist --d1=gani-clone-production --local --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        CLOUDFLARE_API_TOKEN: 'fqHKTVctMcj2_b6BbzQNgktPyKpi_q4Bmv26Hy_j'
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
