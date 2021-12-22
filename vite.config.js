import react from '@vitejs/plugin-react'

export default ({ command }) => {
  return {
    server: {
      port: 9000,
      open: '/index.html'
    },
    plugins: [
      react()
    ]
  }
}