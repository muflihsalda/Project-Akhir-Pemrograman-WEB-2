const Home = {

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
    }
},

template: `

<div class="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

    <div class="container mx-auto px-6 py-12">

        <!-- HERO -->

        <div class="text-center text-white">

            <h1 class="text-5xl font-extrabold mb-4">

                📦 E-INVENTORY

            </h1>

            <h2 class="text-2xl font-semibold">

                Sistem Manajemen Inventaris Barang

            </h2>

            <p class="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">

                Aplikasi berbasis CodeIgniter 4 REST API,
                VueJS SPA, Axios dan TailwindCSS
                untuk mengelola data barang,
                kategori dan supplier secara modern.

            </p>

        </div>

        <!-- STATISTIK -->

        <div class="grid md:grid-cols-3 gap-6 mt-12">

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">

                <div class="text-6xl">
                    📦
                </div>

                <h2 class="text-xl font-bold mt-4 text-gray-700">
                    Total Barang
                </h2>

                <p class="text-5xl font-extrabold text-purple-600 mt-3">
                    {{ totalBarang }}
                </p>

            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">

                <div class="text-6xl">
                    🏷️
                </div>

                <h2 class="text-xl font-bold mt-4 text-gray-700">
                    Total Kategori
                </h2>

                <p class="text-5xl font-extrabold text-green-600 mt-3">
                    {{ totalKategori }}
                </p>

            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">

                <div class="text-6xl">
                    🚚
                </div>

                <h2 class="text-xl font-bold mt-4 text-gray-700">
                    Total Supplier
                </h2>

                <p class="text-5xl font-extrabold text-blue-600 mt-3">
                    {{ totalSupplier }}
                </p>

            </div>

        </div>

        <!-- FITUR -->

        <div class="bg-white rounded-2xl shadow-xl mt-12 p-8">

            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">

                ✨ Fitur Aplikasi

            </h2>

            <div class="grid md:grid-cols-3 gap-6">

                <div class="bg-purple-100 p-6 rounded-xl">

                    <h3 class="font-bold text-lg text-purple-700">
                        📦 Kelola Barang
                    </h3>

                    <p class="mt-2 text-gray-600">
                        Menambah, mengubah dan menghapus data barang inventaris.
                    </p>

                </div>

                <div class="bg-green-100 p-6 rounded-xl">

                    <h3 class="font-bold text-lg text-green-700">
                        🏷️ Kelola Kategori
                    </h3>

                    <p class="mt-2 text-gray-600">
                        Mengatur kategori barang agar data lebih terstruktur.
                    </p>

                </div>

                <div class="bg-blue-100 p-6 rounded-xl">

                    <h3 class="font-bold text-lg text-blue-700">
                        🚚 Kelola Supplier
                    </h3>

                    <p class="mt-2 text-gray-600">
                        Menyimpan informasi supplier penyedia barang.
                    </p>

                </div>

            </div>

        </div>

        <!-- LOGIN -->

        <div class="text-center mt-12">

            <router-link
                to="/login"
                class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full shadow-xl text-lg"
            >
                🔐 Login Administrator
            </router-link>

        </div>

        <!-- FOOTER -->

        <div class="text-center text-white mt-16">

            <p class="text-sm">

                © 2026 Sistem Manajemen Inventaris Barang
                
            </p>

            
            <p class="text-sm mt-2">

                UAS Pemrograman Web 2

            </p>

            <p class="text-sm mt-2">
                
                Universitas Pelita Bangsa

            </p>

        </div>

    </div>

</div>

`
}