// vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'static/service-worker.js',
            // ...other Workbox options...
        }
    }
}