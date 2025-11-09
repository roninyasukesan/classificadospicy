import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Star, Heart, CheckCircle, Clock, Filter } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function ModelsPage() {
  const supabase = await createClient()

  const { data: models } = await supabase
    .from("models")
    .select(`
      *,
      model_images(image_url, is_primary)
    `)
    .order("rating", { ascending: false })

  const processedModels =
    models?.map((model) => ({
      ...model,
      primaryImage:
        model.model_images?.find((img: any) => img.is_primary)?.image_url ||
        model.model_images?.[0]?.image_url ||
        "/placeholder.svg?height=500&width=350",
    })) || []

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">🌶️</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                SPICY MODELS
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-white hover:text-rose-400 hover:bg-white/5">
                  Entrar
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                  Cadastrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Todas as Modelos</h1>
          <p className="text-gray-400 mb-6">Encontre a modelo perfeita para seu projeto</p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                placeholder="Buscar por nome, localização ou especialidade..."
                className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-rose-500"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {processedModels.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">Nenhuma modelo disponível no momento.</p>
              <p className="text-gray-500 mt-2">Por favor, volte mais tarde!</p>
            </div>
          ) : (
            processedModels.map((model) => (
              <Link href={`/model/${model.id}`} key={model.id}>
                <Card className="group overflow-hidden bg-white/5 border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={model.primaryImage || "/placeholder.svg"}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3 flex gap-2">
                      {model.online && (
                        <Badge className="bg-green-500 text-white border-0">
                          <Clock className="w-3 h-3 mr-1" />
                          Online
                        </Badge>
                      )}
                      {model.verified && (
                        <Badge className="bg-blue-500 text-white border-0">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verificada
                        </Badge>
                      )}
                      {model.vip && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          👑 VIP
                        </Badge>
                      )}
                    </div>

                    <button className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-rose-500 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {model.name}, {model.age}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                        <MapPin className="w-4 h-4" />
                        {model.location}
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-white font-semibold">{model.rating}</span>
                          <span className="text-gray-400 text-sm">({model.total_reviews})</span>
                        </div>
                      </div>

                      <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                        R$ {model.price_per_hour}/hora
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
