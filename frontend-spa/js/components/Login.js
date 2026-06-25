const Login = {

data() {
    return {
        username: '',
        password: ''
    }
},

methods: {

    async login() {

        try {

            const response = await api.post(
                '/login',
                {
                    username: this.username,
                    password: this.password
                }
            );

            localStorage.setItem(
                'token',
                response.data.token
            );

            localStorage.setItem(
                'isLoggedIn',
                true
            );

            this.$router.push('/dashboard');

        } catch(error) {

            alert(
                'Username atau Password Salah'
            );

            console.log(error);
        }
    }
},

template: `

<div class="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center">

    <div class="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

        <div class="text-center">

            <div class="text-6xl mb-4">
                🔐
            </div>

            <h1 class="text-3xl font-extrabold text-gray-800">
                Login Administrator
            </h1>

            <p class="text-gray-500 mt-2">
                Silakan masuk untuk mengelola data inventaris
            </p>

        </div>

        <div class="mt-8">

            <label class="font-semibold text-gray-700">
                Username
            </label>

            <input
                v-model="username"
                type="text"
                placeholder="Masukkan Username"
                class="w-full border border-gray-300 p-3 rounded-xl mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            <label class="font-semibold text-gray-700">
                Password
            </label>

            <input
                v-model="password"
                type="password"
                placeholder="Masukkan Password"
                class="w-full border border-gray-300 p-3 rounded-xl mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

            <button
                @click="login"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition"
            >
                🚀 Login
            </button>

        </div>

        <div class="mt-6">

            <router-link
                to="/"
                class="block text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition"
            >
                🏠 Kembali ke Beranda
            </router-link>

        </div>

        <div class="text-center mt-6 text-sm text-gray-500">

            Sistem Manajemen Inventaris Barang

        </div>

    </div>

</div>

`
}