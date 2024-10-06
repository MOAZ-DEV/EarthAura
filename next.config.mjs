import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Other Next.js configurations can be added here
  reactStrictMode: true, // Enable React Strict Mode
  swcMinify: true,       // Enable SWC-based minification
  // Add other settings as needed
}
 
const withMDX = createMDX({
  // Add any MDX-specific options or plugins here
  extension: /\.mdx?$/,  // Define MDX file extensions
  options: {
    remarkPlugins: [],   // Optional: add remark plugins for MDX parsing
    rehypePlugins: [],   // Optional: add rehype plugins for MDX rendering
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
