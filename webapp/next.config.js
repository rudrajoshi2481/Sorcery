/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["http://localhost:6000/*"]
  },
  httpAgentOptions:{
    keepAlive:false
  }

}

module.exports = nextConfig
