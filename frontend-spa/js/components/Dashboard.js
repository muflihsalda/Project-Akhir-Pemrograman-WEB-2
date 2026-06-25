const Dashboard = {

data() {
    return {
        totalBarang: 0,
        totalKategori: 0,
        totalSupplier: 0
    }
},

mounted() {

    this.loadData();
},

methods: {

    async loadData() {

        try {

            const barang =
                await api.get('/barang');

            const kategori =
                await api.get('/kategori');

            const supplier =
                await api.get('/supplier');

            this.totalBarang =
                barang.data.length;

            this.totalKategori =
                kategori.data.length;

            this.totalSupplier =
                supplier.data.length;

        } catch(error) {

            console.log(error);
        }
    },

    logout() {

        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');

        this.$router.push('/login');
    }
},

template: `

<div class="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

    <div class="container mx-auto p-8">

        <!-- HEADER -->

        <div class="bg-white rounded-3xl shadow-xl p-8">

            <h1 class="text-4xl font-extrabold text-gray-800">

                📊 Dashboard Admin

            </h1>

            <p class="text-gray-500 mt-2">

                Selamat datang di Sistem Manajemen Inventaris Barang

            </p>

        </div>

        <!-- STATISTIK -->

        <div class="grid md:grid-cols-3 gap-6 mt-8">

            <div class="bg-white rounded-2xl p-6 shadow-xl text-center hover:scale-105 transition">

                <div class="text-6xl">
                    📦
                </div>

                <h2 class="text-xl font-bold mt-4">
                    Total Barang
                </h2>

                <p class="text-5xl font-extrabold text-purple-600 mt-3">
                    {{ totalBarang }}
                </p>

            </div>

            <div class="bg-white rounded-2xl p-6 shadow-xl text-center hover:scale-105 transition">

                <div class="text-6xl">
                    🏷️
                </div>

                <h2 class="text-xl font-bold mt-4">
                    Total Kategori
                </h2>

                <p class="text-5xl font-extrabold text-green-600 mt-3">
                    {{ totalKategori }}
                </p>

            </div>

            <div class="bg-white rounded-2xl p-6 shadow-xl text-center hover:scale-105 transition">

                <div class="text-6xl">
                    🚚
                </div>

                <h2 class="text-xl font-bold mt-4">
                    Total Supplier
                </h2>

                <p class="text-5xl font-extrabold text-blue-600 mt-3">
                    {{ totalSupplier }}
                </p>

            </div>

        </div>

        <!-- MENU -->

        <div class="bg-white rounded-3xl shadow-xl p-8 mt-8">

            <h2 class="text-2xl font-bold text-gray-800 mb-6">

                ⚙️ Menu Pengelolaan

            </h2>

            <div class="grid md:grid-cols-3 gap-6">

                <router-link
                    to="/barang"
                    class="bg-purple-500 hover:bg-purple-600 text-white p-8 rounded-2xl text-center shadow-lg transition transform hover:scale-105"
                >

                    <div class="text-5xl">
                        📦
                    </div>

                    <h3 class="text-2xl font-bold mt-4">
                        Data Barang
                    </h3>

                    <p class="mt-2">
                        Kelola inventaris barang
                    </p>

                </router-link>

                <router-link
                    to="/kategori"
                    class="bg-green-500 hover:bg-green-600 text-white p-8 rounded-2xl text-center shadow-lg transition transform hover:scale-105"
                >

                    <div class="text-5xl">
                        🏷️
                    </div>

                    <h3 class="text-2xl font-bold mt-4">
                        Data Kategori
                    </h3>

                    <p class="mt-2">
                        Kelola kategori barang
                    </p>

                </router-link>

                <router-link
                    to="/supplier"
                    class="bg-blue-500 hover:bg-blue-600 text-white p-8 rounded-2xl text-center shadow-lg transition transform hover:scale-105"
                >

                    <div class="text-5xl">
                        🚚
                    </div>

                    <h3 class="text-2xl font-bold mt-4">
                        Data Supplier
                    </h3>

                    <p class="mt-2">
                        Kelola data supplier
                    </p>

                </router-link>

            </div>

        </div>

        <!-- LOGOUT -->

        <div class="text-center mt-8">

            <button
                @click="logout"
                class="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full shadow-xl text-lg"
            >
                🚪 Logout
            </button>

        </div>

    </div>

</div>

`
}