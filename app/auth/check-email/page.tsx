import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/5 border-white/10 p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-rose-500/20 rounded-full">
            <Mail className="w-12 h-12 text-rose-400" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-4">Verifique seu Email</h1>

        <p className="text-gray-400 mb-6">
          Enviamos um link de confirmação para seu email. Clique no link para ativar sua conta.
        </p>

        <Link href="/auth/login">
          <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 h-12">
            Voltar para Login
          </Button>
        </Link>
      </Card>
    </div>
  )
}
