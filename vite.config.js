import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:3000,

    proxy:{
      '/api':
      {
        target:'http://localhost:8000',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')

        /*

        rewrite: (path) => path.replace(/^\/api/, ''): 
        This function rewrites the URL path before forwarding it to the target server. 
        It removes the /api prefix from the request URL. For example, 
        if a request is made to /api/users, it will be rewritten to /users before being sent to http://localhost:8000
         */
      }
    }
  } //this is a config file 
})
