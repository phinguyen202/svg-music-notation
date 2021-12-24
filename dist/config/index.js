export const defaultConfig = {
    scale: 0.5,
    fontSize: 96,
    padding: 50,
    barline: {
        strokeWidth: 0.5,
    },
    stave: {
        marginLeft: 0.5
    }
};
export let GlobalConfig;
export function setGlobalConfig(config) {
    if (config) {
        GlobalConfig = config;
    }
}
