import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

// CORS 설정 (필요시)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Example API endpoint
app.get('/api/welcome', (req, res) => {
  res.json({
    message: 'Welcome to BNI KOREA',
    version: '1.0.0',
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

