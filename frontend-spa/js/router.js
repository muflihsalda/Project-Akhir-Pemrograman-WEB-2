const routes = [

{
    path: '/',
    component: Home
},

{
    path: '/login',
    component: Login
},

{
    path: '/dashboard',
    component: Dashboard,
    meta: {
        requiresAuth: true
    }
},

{
    path: '/kategori',
    component: Kategori,
    meta: {
        requiresAuth: true
    }
},

{
    path: '/supplier',
    component: Supplier,
    meta: {
        requiresAuth: true
    }
},
{
    path: '/barang',
    component: Barang,
    meta: {
        requiresAuth: true
    }
}


];


const router = VueRouter.createRouter({

    history: VueRouter.createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {

    const loggedIn =
        localStorage.getItem('isLoggedIn');

    if (
        to.meta.requiresAuth &&
        !loggedIn
    ) {
        next('/login');
    }
    else {
        next();
    }
    

});
router.afterEach((to, from) => {

    console.log(
        'PINDAH ROUTE:',
        from.fullPath,
        '->',
        to.fullPath
    );

});
