import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Star, Heart, MessageCircle, CheckCircle, Clock } from "lucide-react"

const models = [
  {
    id: 1,
    name: "Sofia Martinez",
    age: 24,
    location: "São Paulo, SP",
    price: "R$ 300/hora",
    rating: 4.9,
    reviews: 127,
    online: true,
    verified: true,
    vip: true,
    image: "/beautiful-latina-model-professional-photo.jpg",
    views: "12.5k",
    lastSeen: "Online agora",
    specialties: ["Ensaios", "Fashion", "Eventos"],
  },
  {
    id: 2,
    name: "Isabella Costa",
    age: 22,
    location: "Rio de Janeiro, RJ",
    price: "R$ 250/hora",
    rating: 4.8,
    reviews: 89,
    online: true,
    verified: true,
    vip: false,
    image: "/brunette-model-professional-portrait.jpg",
    views: "8.3k",
    lastSeen: "Online agora",
    specialties: ["Comercial", "Editorial"],
  },
  {
    id: 3,
    name: "Camila Oliveira",
    age: 26,
    location: "Belo Horizonte, MG",
    price: "R$ 350/hora",
    rating: 5.0,
    reviews: 215,
    online: false,
    verified: true,
    vip: true,
    image: "/blonde-model-glamour-photo.jpg",
    views: "15.7k",
    lastSeen: "há 2 horas",
    specialties: ["Luxo", "VIP", "Internacional"],
  },
  {
    id: 4,
    name: "Ana Silva",
    age: 23,
    location: "Curitiba, PR",
    price: "R$ 280/hora",
    rating: 4.7,
    reviews: 96,
    online: true,
    verified: true,
    vip: false,
    image: "/redhead-model-elegant-photo.jpg",
    views: "9.2k",
    lastSeen: "Online agora",
    specialties: ["Fitness", "Moda Praia"],
  },
  {
    id: 5,
    name: "Julia Santos",
    age: 25,
    location: "Brasília, DF",
    price: "R$ 320/hora",
    rating: 4.9,
    reviews: 143,
    online: true,
    verified: true,
    vip: true,
    image: "/dark-hair-model-studio-portrait.jpg",
    views: "11.8k",
    lastSeen: "Online agora",
    specialties: ["Alta Costura", "Campanhas"],
  },
  {
    id: 6,
    name: "Beatriz Ferreira",
    age: 21,
    location: "Porto Alegre, RS",
    price: "R$ 240/hora",
    rating: 4.6,
    reviews: 67,
    online: false,
    verified: true,
    vip: false,
    image: "/young-model-natural-beauty.jpg",
    views: "6.4k",
    lastSeen: "há 5 horas",
    specialties: ["Casual", "Lifestyle"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">🌶️</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                SPICY MODELS
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white hover:text-rose-400 transition-colors">
                Início
              </Link>
              <Link href="/models" className="text-white hover:text-rose-400 transition-colors">
                Modelos
              </Link>
              <Link href="/vip" className="text-white hover:text-rose-400 transition-colors">
                VIP
              </Link>
              <Link href="/about" className="text-white hover:text-rose-400 transition-colors">
                Sobre
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-white hover:text-rose-400 hover:bg-white/5">
                Entrar
              </Button>
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 via-black to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Encontre as Melhores{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Modelos
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Conecte-se com modelos profissionais verificadas em todo o Brasil
            </p>

            {/* Search Bar */}
            <div className="flex gap-3 max-w-2xl mx-auto mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <Input
                  placeholder="Buscar modelos..."
                  className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-rose-500"
                />
              </div>
              <Button className="h-14 px-8 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                Buscar
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="outline"
                className="border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300"
              >
                🔥 Online Agora
              </Button>
              <Button
                variant="outline"
                className="border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 hover:text-pink-300"
              >
                ⭐ Mais Avaliadas
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300"
              >
                👑 VIP
              </Button>
              <Button
                variant="outline"
                className="border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300"
              >
                ✓ Verificadas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-gray-400 mt-1">Modelos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                50k+
              </div>
              <div className="text-gray-400 mt-1">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent">
                15k+
              </div>
              <div className="text-gray-400 mt-1">Agendamentos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">
                4.9⭐
              </div>
              <div className="text-gray-400 mt-1">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Modelos em Destaque</h2>
            <Link href="/models">
              <Button variant="ghost" className="text-rose-400 hover:text-rose-300">
                Ver Todas →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Link href={`/model/${model.id}`} key={model.id}>
                <Card className="group overflow-hidden bg-white/5 border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={model.image || "/placeholder.svg"}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Top Badges */}
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

                    {/* Favorite Button */}
                    <button className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-rose-500 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>

                    {/* Bottom Info */}
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
                          <span className="text-gray-400 text-sm">({model.reviews})</span>
                        </div>
                        <div className="text-gray-400 text-sm">{model.views} views</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {model.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="text-xs bg-white/10 text-white border-0"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                            {model.price}
                          </div>
                          <div className="text-xs text-gray-400">{model.lastSeen}</div>
                        </div>

                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                          >
                            Ver Perfil
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
            >
              Carregar Mais Modelos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌶️</span>
                <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  SPICY MODELS
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                A melhor plataforma para conectar modelos profissionais com clientes em todo o Brasil.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Explorar</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/models" className="text-gray-400 hover:text-rose-400 text-sm">
                    Todas as Modelos
                  </Link>
                </li>
                <li>
                  <Link href="/vip" className="text-gray-400 hover:text-rose-400 text-sm">
                    Modelos VIP
                  </Link>
                </li>
                <li>
                  <Link href="/new" className="text-gray-400 hover:text-rose-400 text-sm">
                    Novidades
                  </Link>
                </li>
                <li>
                  <Link href="/top" className="text-gray-400 hover:text-rose-400 text-sm">
                    Top Avaliadas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-rose-400 text-sm">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-gray-400 hover:text-rose-400 text-sm">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-rose-400 text-sm">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-rose-400 text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-rose-400 text-sm">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-rose-400 text-sm">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-rose-400 text-sm">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="text-gray-400 hover:text-rose-400 text-sm">
                    Diretrizes
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Spicy Models. Todos os direitos reservados. +18 apenas.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
