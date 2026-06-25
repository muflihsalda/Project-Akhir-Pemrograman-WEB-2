const Barang = {

data() {
    return {

        barang: [],
        kategori: [],
        supplier: [],

        nama_barang: '',
        stok: '',
        harga: '',
        kategori_id: '',
        supplier_id: '',

        editMode: false,
        editId: null

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

            this.barang = barang.data;
            this.kategori = kategori.data;
            this.supplier = supplier.data;

        } catch(error) {

            console.log(error);

            alert('Gagal mengambil data');

        }

    },

    async simpan() {

        if(this.nama_barang.trim() == ''){

            alert('Nama barang wajib diisi');

            return;

        }

        if(this.stok == ''){

            alert('Stok wajib diisi');

            return;

        }

        if(this.harga == ''){

            alert('Harga wajib diisi');

            return;

        }

        if(this.kategori_id == ''){

            alert('Kategori harus dipilih');

            return;

        }

        if(this.supplier_id == ''){

            alert('Supplier harus dipilih');

            return;

        }

        const data = {

            nama_barang: this.nama_barang,
            stok: this.stok,
            harga: this.harga,
            kategori_id: this.kategori_id,
            supplier_id: this.supplier_id

        };

        try {

            if(this.editMode){

                await api.put(

                    `/barang/${this.editId}`,

                    data

                );

                alert('Barang berhasil diupdate');

            }else{

                await api.post(

                    '/barang',

                    data

                );

                alert('Barang berhasil ditambahkan');

            }

            this.resetForm();

            this.loadData();

        }catch(error){

            console.log(error);

            alert('Terjadi kesalahan');

        }

    },

    edit(item){

        this.editMode = true;

        this.editId = item.id;

        this.nama_barang =
            item.nama_barang;

        this.stok =
            item.stok;

        this.harga =
            item.harga;

        this.kategori_id =
            item.kategori_id;

        this.supplier_id =
            item.supplier_id;

        window.scrollTo({

            top:0,

            behavior:'smooth'

        });

    },

    async hapus(id){

        if(

            !confirm(
                'Yakin ingin menghapus barang ini?'
            )

        ){

            return;

        }

        try{

            await api.delete(

                `/barang/${id}`

            );

            alert('Barang berhasil dihapus');

            this.loadData();

        }catch(error){

            console.log(error);

            alert('Gagal menghapus data');

        }

    },

    resetForm(){

        this.nama_barang='';

        this.stok='';

        this.harga='';

        this.kategori_id='';

        this.supplier_id='';

        this.editMode=false;

        this.editId=null;

    },

    formatRupiah(angka){

        if(!angka) return '-';

        return 'Rp ' +

            Number(angka).toLocaleString(

                'id-ID'

            );

    }

},

template: `

<div class="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-10">

<div class="container mx-auto px-5">

    <!-- HEADER -->

    <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">

        <div class="flex justify-between items-center">

            <div>

                <h1 class="text-4xl font-extrabold text-gray-800">

                    📦 Data Barang

                </h1>

                <p class="text-gray-500 mt-2">

                    Kelola seluruh data barang inventaris.

                </p>

            </div>

            <div
                class="hidden md:block text-7xl"
            >
                📦
            </div>

        </div>

    </div>

    <!-- CARD STATISTIK -->

    <div
        class="grid md:grid-cols-3 gap-6 mb-8"
    >

        <div
            class="bg-white rounded-3xl shadow-xl p-6 text-center"
        >

            <div class="text-5xl">

                📦

            </div>

            <h2
                class="text-gray-600 mt-3"
            >
                Total Barang
            </h2>

            <p
                class="text-4xl font-extrabold text-blue-600 mt-2"
            >
                {{ barang.length }}
            </p>

        </div>

        <div
            class="bg-white rounded-3xl shadow-xl p-6 text-center"
        >

            <div class="text-5xl">

                🏷️

            </div>

            <h2
                class="text-gray-600 mt-3"
            >
                Total Kategori
            </h2>

            <p
                class="text-4xl font-extrabold text-green-600 mt-2"
            >
                {{ kategori.length }}
            </p>

        </div>

        <div
            class="bg-white rounded-3xl shadow-xl p-6 text-center"
        >

            <div class="text-5xl">

                🚚

            </div>

            <h2
                class="text-gray-600 mt-3"
            >
                Total Supplier
            </h2>

            <p
                class="text-4xl font-extrabold text-purple-600 mt-2"
            >
                {{ supplier.length }}
            </p>

        </div>

    </div>

    <!-- FORM -->

    <div
        class="bg-white rounded-3xl shadow-xl p-8 mb-8"
    >

        <h2
            class="text-2xl font-bold text-gray-700 mb-6"
        >

            {{ editMode ? '✏️ Edit Barang' : '➕ Tambah Barang' }}

        </h2>

        <div
            class="grid md:grid-cols-2 gap-5"
        >

            <!-- Nama Barang -->

            <div>

                <label
                    class="font-semibold text-gray-700"
                >

                    Nama Barang

                </label>

                <input

                    v-model="nama_barang"

                    type="text"

                    placeholder="Masukkan nama barang"

                    class="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"

                >

            </div>

            <!-- Stok -->

            <div>

                <label
                    class="font-semibold text-gray-700"
                >

                    Jumlah Stok

                </label>

                <input

                    v-model="stok"

                    type="number"

                    placeholder="Masukkan stok"

                    class="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"

                >

            </div>

            <!-- Harga -->

            <div>

                <label
                    class="font-semibold text-gray-700"
                >

                    Harga Barang

                </label>

                <input

                    v-model="harga"

                    type="number"

                    placeholder="Masukkan harga"

                    class="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"

                >

            </div>

            <!-- Kategori -->

            <div>

                <label
                    class="font-semibold text-gray-700"
                >

                    Pilih Kategori

                </label>

                <select

                    v-model="kategori_id"

                    class="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"

                >

                    <option value="">

                        -- Pilih Kategori --

                    </option>

                    <option

                        v-for="item in kategori"

                        :value="item.id"

                    >

                        {{ item.nama_kategori }}

                    </option>

                </select>

            </div>

            <!-- Supplier -->

            <div class="md:col-span-2">

                <label
                    class="font-semibold text-gray-700"
                >

                    Pilih Supplier

                </label>

                <select

                    v-model="supplier_id"

                    class="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"

                >

                    <option value="">

                        -- Pilih Supplier --

                    </option>

                    <option

                        v-for="item in supplier"

                        :value="item.id"

                    >

                        {{ item.nama_supplier }}

                    </option>

                </select>

            </div>

        </div>

        <div
            class="mt-8"
        >

            <button

                @click="simpan"

                class="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition"

            >

                {{ editMode ? '💾 Update Barang' : '➕ Tambah Barang' }}

            </button>

        </div>

    </div>

        <!-- TABEL -->

    <div
        class="bg-white rounded-3xl shadow-xl p-8"
    >

        <h2
            class="text-2xl font-bold text-gray-700 mb-6"
        >

            📋 Daftar Barang

        </h2>

        <div class="overflow-x-auto">

            <table class="min-w-full">

                <thead>

                    <tr class="bg-blue-600 text-white">

                        <th class="p-4 rounded-l-xl">
                            No
                        </th>

                        <th class="p-4">
                            Nama Barang
                        </th>

                        <th class="p-4">
                            Harga
                        </th>

                        <th class="p-4">
                            Stok
                        </th>

                        <th class="p-4">
                            Kategori
                        </th>

                        <th class="p-4">
                            Supplier
                        </th>

                        <th class="p-4 rounded-r-xl">
                            Aksi
                        </th>

                    </tr>

                </thead>

                <tbody>

                    <tr

                        v-for="(item,index) in barang"

                        :key="item.id"

                        class="border-b hover:bg-gray-100 transition"

                    >

                        <td class="p-4 text-center">

                            {{ index+1 }}

                        </td>

                        <td class="p-4 font-semibold">

                            {{ item.nama_barang }}

                        </td>

                        <td class="p-4 text-green-600 font-bold">

                            {{ formatRupiah(item.harga) }}

                        </td>

                        <td class="p-4 text-center">

                            {{ item.stok }}

                        </td>

                        <td class="p-4">

                            <span
                                class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                            >

                                {{ item.nama_kategori }}

                            </span>

                        </td>

                        <td class="p-4">

                            <span
                                class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
                            >

                                {{ item.nama_supplier }}

                            </span>

                        </td>

                        <td class="p-4 text-center">

                            <button

                                @click="edit(item)"

                                class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2"

                            >

                                ✏️

                            </button>

                            <button

                                @click="hapus(item.id)"

                                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"

                            >

                                🗑️

                            </button>

                        </td>

                    </tr>

                    <tr
                        v-if="barang.length==0"
                    >

                        <td

                            colspan="7"

                            class="text-center p-8 text-gray-500"

                        >

                            Belum ada data barang.

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    </div>

    <!-- BUTTON -->

    <div
        class="flex justify-between mt-8"
    >

        <router-link

            to="/dashboard"

            class="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl shadow-lg"

        >

            ⬅️ Dashboard

        </router-link>

    </div>

</div>

</div>

`
}
