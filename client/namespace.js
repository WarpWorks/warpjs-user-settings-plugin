import packageJson from './../package.json';

const NAMESPACE = packageJson.name;

export default (actionType) => `${NAMESPACE}.${actionType}`.replace(/@/g, '').replace(/[/_]/g, '-').toUpperCase();
