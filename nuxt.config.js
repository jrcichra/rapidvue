export default {
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', 'moment'],
    components: true,
    moment: {
        timezone: true
    }, buildModules: [
        '@nuxtjs/fontawesome',
    ],
    fontawesome: {
        icons: {
            solid: true,
            regular: true,
        }
    },
    // router: {
    //     base: '/dist/'
    // }
}