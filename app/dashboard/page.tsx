import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"
import { LogOut, User, Heart, Calendar, MessageCircle } from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const handleSignOut = async () => {
    "use server"
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">🌶️</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                SPICY MODELS
              </span>
            </Link>

            <form action={handleSignOut}>
              <Button variant="ghost" className="text-white hover:text-rose-400 hover:bg-white/5" type="submit">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </form>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Bem-vindo, {profile?.display_name || user.email}!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link href="/favorites">
              <Card className="bg-white/5 border-white/10 p-6 hover:border-rose-500/50 transition-colors cursor-pointer">
                <Heart className="w-8 h-8 text-rose-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Favoritos</h3>
                <p className="text-gray-400">Veja suas modelos favoritas</p>
              </Card>
            </Link>

            <Link href="/bookings">
              <Card className="bg-white/5 border-white/10 p-6 hover:border-rose-500/50 transition-colors cursor-pointer">
                <Calendar className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Agendamentos</h3>
                <p className="text-gray-400">Gerencie seus agendamentos</p>
              </Card>
            </Link>

            <Link href="/messages">
              <Card className="bg-white/5 border-white/10 p-6 hover:border-rose-500/50 transition-colors cursor-pointer">
                <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Mensagens</h3>
                <p className="text-gray-400">Suas conversas</p>
              </Card>
            </Link>

            <Link href="/profile">
              <Card className="bg-white/5 border-white/10 p-6 hover:border-rose-500/50 transition-colors cursor-pointer">
                <User className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Perfil</h3>
                <p className="text-gray-400">Edite suas informações</p>
              </Card>
            </Link>
          </div>

          <Card className="bg-white/5 border-white/10 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Informações da Conta</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-gray-400">Email:</span> {user.email}
              </p>
              <p>
                <span className="text-gray-400">Tipo:</span> {profile?.role || "client"}
              </p>
              <p>
                <span className="text-gray-400">Membro desde:</span>{" "}
                {new Date(user.created_at).toLocaleDateString("pt-BR")}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
