const app = Vue.createApp({
mounted() {
        console.log('APP DIMUAT');
    },

    template: `
        <router-view></router-view>
    `
});

app.use(router);

app.mount('#app');