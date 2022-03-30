const isProduction = process.env.NODE_ENV === 'production';
const productionUrl = 'https://kskim625.github.io';
const productionPath = '/world-calendar';

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: isProduction ? productionUrl : '',
  },
  assetPrefix: isProduction ? productionPath : '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
};
