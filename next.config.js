const isProduction = process.env.NODE_ENV === 'production';
const prefix = 'https://kskim625.github.io/world-calendar';

module.exports = {
  assetPrefix: isProduction ? prefix : '',
};
