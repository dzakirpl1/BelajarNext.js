"use client" // Wajib karena kita menggunakan fungsi navigasi (client-side)

import { useState } from "react"
import { useRouter } from "next/navigation" // Import router
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Book, Loader2 } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter() // Inisialisasi router
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulasi proses pendaftaran (misal: kirim ke database)
    // Di sini kamu bisa ganti dengan logika pendaftaran beneran nanti
    setTimeout(() => {
      setIsLoading(false)
      // Navigasi otomatis ke dashboard setelah "sukses"
      router.push("/dashboard")
    }, 1500) // Delay 1.5 detik agar terlihat ada proses
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2 mb-8 group">
        <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
          <Book className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-slate-800">E-LIB</span>
      </Link>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 w-full max-w-md border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Buat Akun Baru</h1>
          <p className="text-slate-500 text-sm mt-2">Mulai petualangan literasimu hari ini</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Nama Lengkap</label>
            <Input 
              required
              placeholder="Masukkan nama anda" 
              className="rounded-full h-12 border-slate-200 focus-visible:ring-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
            <Input 
              required
              type="email"
              placeholder="nama@email.com" 
              className="rounded-full h-12 border-slate-200 focus-visible:ring-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
            <Input 
              required
              type="password"
              placeholder="••••••••" 
              className="rounded-full h-12 border-slate-200 focus-visible:ring-emerald-500"
            />
          </div>

          <Button 
            disabled={isLoading}
            className="w-full h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold mt-4 shadow-lg shadow-emerald-200"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Mendaftarkan...
              </>
            ) : (
              "Daftar Sekarang"
            )}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-emerald-600 font-bold hover:underline">
            Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  )
}