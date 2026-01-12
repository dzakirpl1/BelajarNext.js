import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Book, Search, Star, Users, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-200">
            <Book className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-800">E-LIB</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#" className="hover:text-emerald-600 transition-colors">Koleksi</Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">Penulis</Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">Kategori</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold hover:text-emerald-600 transition-colors">
            Masuk
          </Link>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-6 shadow-md shadow-emerald-100">
            <Link href="/register">Mulai Membaca</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-16 pb-24 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-5%] right-[5%] w-[30%] h-[30%] bg-emerald-50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[5%] left-[5%] w-[25%] h-[25%] bg-teal-50 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold text-emerald-700 mb-10 uppercase tracking-widest">
            <Star size={14} fill="currentColor" /> Perpustakaan Digital No. 1 di Indonesia
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
            Selamat datang di  <br />
            E-Lib <span className="italic text-emerald-600">Muhamad Dzaki</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            E-LIB memudahkan Anda menemukan referensi terbaik untuk kuliah, hobi, hingga pengembangan diri dengan antarmuka yang modern dan cepat.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto p-2 rounded-[2rem] sm:border sm:bg-white sm:shadow-xl sm:shadow-slate-200/50">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                placeholder="Cari buku, penulis, atau ISBN..." 
                className="pl-12 h-14 border-none shadow-none focus-visible:ring-0 text-base"
              />
            </div>
            <Button size="lg" className="h-12 sm:h-12 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 w-full sm:w-auto font-bold">
              Cari
            </Button>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-800">15K+</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Koleksi Buku</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">50K+</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Pembaca Aktif</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-slate-800">200+</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Penerbit Ternama</div>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Section Singkat */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Zap size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Pencarian Kilat</h3>
            <p className="text-slate-500 text-sm">Cari buku favoritmu hanya dalam hitungan detik tanpa hambatan.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Komunitas Pembaca</h3>
            <p className="text-slate-500 text-sm">Berbagi ulasan dan rekomendasi buku dengan pembaca lainnya.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Star size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Kurasi Terbaik</h3>
            <p className="text-slate-500 text-sm">Buku yang kami sajikan telah dikurasi oleh tim ahli perpustakaan.</p>
          </div>
        </div>
      </section>
    </div>
  )
}