export default function UserForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            nama: formData.get("nama"),
            email: formData.get("email"),
            tanggalLahir: formData.get("tanggalLahir")
        };
        console.log("User Data:", data);
        alert(`User ${data.nama} berhasil ditambahkan!`);
        e.target.reset();
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                            Form Component
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Tambah User</h2>
                    <p className="text-gray-500 text-sm mt-2">Silakan isi data user di bawah ini</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nama Field */}
                    <div>
                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="nama"
                            name="nama"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                            placeholder="Masukkan nama lengkap"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all outline-none text-gray-900 placeholder:text-gray-400"
                            placeholder="user@example.com"
                        />
                    </div>

                    {/* Tanggal Lahir Field */}
                    <div>
                        <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Lahir
                        </label>
                        <input
                            type="date"
                            id="tanggalLahir"
                            name="tanggalLahir"
                            required
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all outline-none text-gray-900"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Simpan User
                    </button>
                </form>
            </div>
        </div>
    );
}