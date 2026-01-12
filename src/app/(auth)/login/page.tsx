"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Book } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // State untuk menangkap input user
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulasi delay proses login
    setTimeout(() => {
      // 1. Ambil data user yang tersimpan di localStorage (dari proses Register)
      const savedUser = localStorage.getItem("user")

      if (savedUser) {
        const userData = JSON.parse(savedUser)

        // 2. Cek apakah email dan password cocok
        if (userData.email === email && userData.password === password) {
          setIsLoading(false)
          router.push("/dashboard") // Berhasil masuk
        } else {
          setIsLoading(false)
          setError("Email atau password salah!")
        }
      } else {
        setIsLoading(false)
        setError("Akun tidak ditemukan. Silakan daftar dulu.")
      }
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-t-emerald-600">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
              <Book size={24} />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Selamat Datang</CardTitle>
          <CardDescription className="text-center">
            Gunakan akun yang sudah kamu daftarkan sebelumnya
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleLogin}>
          <CardContent className="grid gap-4">
            {/* Alert Error jika login gagal */}
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100 text-center">
                {error}
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="nama@email.com" 
                className="focus-visible:ring-emerald-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs text-emerald-600 hover:underline">
                  Lupa password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="focus-visible:ring-emerald-600"
              />
            </div>

            <Button disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2">
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Masuk...</>
              ) : (
                "Masuk Sekarang"
              )}
            </Button>
          </CardContent>
        </form>

        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground text-center border-t pt-4 w-full">
            Belum punya akun?{" "}
            <Link href="/register" className="text-emerald-600 font-semibold hover:underline">
              Daftar Gratis
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}