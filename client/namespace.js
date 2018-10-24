import packageJson from './../package.json';

export default packageJson.name.replace(/@/g, '').replace(/\//g, '_').toUpperCase();
