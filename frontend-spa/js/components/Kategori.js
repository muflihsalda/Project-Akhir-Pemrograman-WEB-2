const Kategori = {

data() {
    return {
        kategori: [],
        nama_kategori: '',
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

            const response =
                await api.get('/kategori');

            this.kategori = response.data;

        } catch(error) {

            console.log(error);
        }
    },

    async simpan() {

        if(this.nama_kategori.trim() == ''){

            alert('Nama kategori tidak boleh kosong');

            return;
        }

        try {

            if(this.editMode){

                await api.put(

                    `/kategori/${this.editId}`,

                    {
                        nama_kategori:
                        this.nama_kategori
                    }

                );

                alert('Kategori berhasil diupdate');

            }else{

                await api.post(

                    '/kategori',

                    {
                        nama_kategori:
                        this.nama_kategori
                    }

                );

                alert('Kategori berhasil ditambahkan');

            }

            this.nama_kategori = '';
            this.editMode = false;
            this.editId = null;

            this.loadData();

        }catch(error){

            console.log(error);

            alert('Terjadi kesalahan');
        }

    },

    edit(item){

        this.editMode = true;

        this.editId = item.id;

        this.nama_kategori =
            item.nama_kategori;

        window.scrollTo({

            top:0,

            behavior:'smooth'
        });

    },

    async hapus(id){

        if(
            !confirm(
                'Yakin ingin menghapus kategori ini?'
            )
        ){
            return;
        }

        try{

            await api.delete(
                `/kategori/${id}`
            );

            alert('Kategori berhasil dihapus');

            this.loadData();

        }catch(error){

            console.log(error);

            alert('Gagal menghapus data');
        }

    }

},

template:`

<div class="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-10">

<div class="container mx-auto px-5">

    <!-- HEADER -->

    <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">

        <h1 class="text-4xl font-extrabold text-gray-800">

            🏷️ Data Kategori

        </h1>

        <p class="text-gray-500 mt-2">

            Kelola seluruh kategori barang inventaris.

        </p>

    </div>

    <!-- FORM -->

    <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">

        <h2 class="text-2xl font-bold mb-6 text-gray-700">

            {{ editMode ? '✏️ Edit Kategori' : '➕ Tambah Kategori' }}

        </h2>

        <div class="flex flex-col md:flex-row gap-4">

            <input

                v-model="nama_kategori"

                type="text"

                placeholder="Masukkan nama kategori"

                class="flex-1 border-2 border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

            >

            <button

                @click="simpan"

                class="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow"

            >

                {{ editMode ? '💾 Update' : '➕ Tambah' }}

            </button>

        </div>

    </div>

    <!-- TABEL -->

    <div class="bg-white rounded-3xl shadow-xl p-8">

        <h2 class="text-2xl font-bold mb-6 text-gray-700">

            📋 Daftar Kategori

        </h2>

        <div class="overflow-x-auto">

        <table class="w-full">

            <thead>

                <tr class="bg-blue-600 text-white">

                    <th class="p-3 rounded-l-xl">
                        No
                    </th>

                    <th class="p-3">
                        Nama Kategori
                    </th>

                    <th class="p-3 rounded-r-xl">
                        Aksi
                    </th>

                </tr>

            </thead>

            <tbody>

                <tr

                    v-for="(item,index) in kategori"

                    :key="item.id"

                    class="border-b hover:bg-gray-100 transition"

                >

                    <td class="p-3 text-center">

                        {{ index+1 }}

                    </td>

                    <td class="p-3">

                        {{ item.nama_kategori }}

                    </td>

                    <td class="p-3 text-center">

                        <button

                            @click="edit(item)"

                            class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2"

                        >

                            ✏️ Edit

                        </button>

                        <button

                            @click="hapus(item.id)"

                            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"

                        >

                            🗑️ Hapus

                        </button>

                    </td>

                </tr>

                <tr
                    v-if="kategori.length==0"
                >

                    <td
                        colspan="3"
                        class="text-center p-6 text-gray-500"
                    >

                        Belum ada data kategori.

                    </td>

                </tr>

            </tbody>

        </table>

        </div>

    </div>

    <!-- BUTTON -->

    <div class="mt-8 flex justify-between">

        <router-link

            to="/dashboard"

            class="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl shadow"

        >

            ⬅️ Dashboard

        </router-link>

    </div>

</div>

</div>

`
}