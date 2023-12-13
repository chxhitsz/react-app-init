/** @typedef {import("@reskript/settings").ProjectSettings} ProjectSettings */

const enableTrack = process.env.DEPLOY_ENV === 'online';

/**
 * @type ProjectSettings['featureMatrix']
 */
exports.featureMatrix = {
    stable: {
        track: enableTrack,
    },
    test: {
        track: enableTrack,
    },
    dev: {
        track: false,
    },
};

/**
 * @type ProjectSettings['build']
 */
exports.build = {
    appTitle: 'react-app', // TODO: 修改系统名称
    finalize: webpackConfig => {
        webpackConfig.output.publicPath = 'http://localhost:3000/assets/'; // TODO: 修改系统资源绝对路径
        return webpackConfig;
    },
};

/**
 * @type ProjectSettings['devServer']
 */
exports.devServer = {
    port: 3000, // TODO: 找一个不和其它系统冲突的端口
    apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
    defaultProxyDomain: 'localhost', // TODO: 设置后端测试联调环境域名或ip
};
