const debug = process.env.NODE_ENV !== 'production';
const name = 'world-calendar';

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
};
