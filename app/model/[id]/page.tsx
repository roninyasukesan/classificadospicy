import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Star,
  Heart,
  MessageCircle,
  CheckCircle,
  Clock,
  Share2,
  Flag,
  Calendar,
  Users,
  Eye,
  Award,
} from "lucide-react"

const modelData = {
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
  views: "12.5k",
  lastSeen: "Online agora",
  specialties: ["Ensaios", "Fashion", "Eventos", "Comercial", "Editorial"],
  images: [
    "/beautiful-latina-model-professional-photo-1.jpg",
    "/beautiful-latina-model-professional-photo-2.jpg",
    "/beautiful-latina-model-professional-photo-3.jpg",
    "/beautiful-latina-model-professional-photo-4.jpg",
    "/beautiful-latina-model-professional-photo-5.jpg",
    "/beautiful-latina-model-professional-photo-6.jpg",
  ],
  about:
    "Modelo profissional com mais de 5 anos de experiência no mercado. Especializada em ensaios fotográficos, desfiles e eventos corporativos. Atendo em São Paulo e região, com disponibilidade para viagens.",
  stats: {
    totalBookings: 342,
    responseTime: "2 min",
    repeatClients: "85%",
    yearsActive: 5,
  },
  services: [
    { name: "Ensaio Fotográfico", duration: "2 horas", price: "R$ 600" },
    { name: "Evento Corporativo", duration: "4 horas", price: "R$ 1.200" },
    { name: "Desfile de Moda", duration: "1 dia", price: "R$ 2.500" },
    { name: "Campanha Publicitária", duration: "A combinar", price: "R$ 3.000+" },
  ],
  availability: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
  languages: ["Português", "Inglês", "Espanhol"],
}

const reviews = [
  {
    id: 1,
    author: "Carlos M.",
    rating: 5,
    date: "há 2 dias",
    comment: "Profissional excepcional! Pontual, educada e o resultado das fotos ficou incrível. Super recomendo!",
  },
  {
    id: 2,
    author: "Marina S.",
    rating: 5,
    date: "há 1 semana",
    comment:
      "Trabalhamos juntas em um evento corporativo. Sofia é muito profissional e carismática. Certamente trabalharemos juntas novamente.",
  },
  {
    id: 3,
    author: "Ricardo P.",
    rating: 4,
    date: "há 2 semanas",
    comment: "Ótima experiência! Muito dedicada ao trabalho e com excelente apresentação.",
  },
]

export default function ModelProfilePage({ params }: { params: { id: string } }) {
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

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-white hover:text-rose-400 hover:bg-white/5">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
              <Button variant="ghost" className="text-white hover:text-rose-400 hover:bg-white/5">
                <Flag className="w-4 h-4 mr-2" />
                Reportar
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-rose-400 hover:bg-white/5">
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={modelData.images[0] || "/placeholder.svg"}
                alt={modelData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {modelData.online && (
                  <Badge className="bg-green-500 text-white border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    Online Agora
                  </Badge>
                )}
                {modelData.verified && (
                  <Badge className="bg-blue-500 text-white border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verificada
                  </Badge>
                )}
                {modelData.vip && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">👑 VIP</Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {modelData.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${modelData.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="about" className="mt-8">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="about" className="data-[state=active]:bg-rose-500">
                  Sobre
                </TabsTrigger>
                <TabsTrigger value="services" className="data-[state=active]:bg-rose-500">
                  Serviços
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-rose-500">
                  Avaliações ({modelData.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Sobre Mim</h3>
                  <p className="text-gray-300 mb-6">{modelData.about}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Especialidades</div>
                      <div className="flex flex-wrap gap-2">
                        {modelData.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="bg-rose-500/20 text-rose-300 border-0">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Idiomas</div>
                      <div className="flex flex-wrap gap-2">
                        {modelData.languages.map((lang) => (
                          <Badge key={lang} variant="secondary" className="bg-blue-500/20 text-blue-300 border-0">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-sm mb-2">Disponibilidade</div>
                    <div className="flex flex-wrap gap-2">
                      {modelData.availability.map((day) => (
                        <Badge key={day} variant="outline" className="border-green-500/30 text-green-400">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="mt-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Serviços Disponíveis</h3>
                  <div className="space-y-4">
                    {modelData.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div>
                          <div className="font-semibold text-white mb-1">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                            {service.price}
                          </div>
                          <Button
                            size="sm"
                            className="mt-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                          >
                            Agendar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Avaliações</h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                      <span className="text-2xl font-bold text-white">{modelData.rating}</span>
                      <span className="text-gray-400">({modelData.reviews} avaliações)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold text-white">{review.author}</div>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <div className="text-sm text-gray-400">{review.date}</div>
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-6 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Ver Todas as Avaliações
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Info & Actions */}
          <div className="space-y-4">
            {/* Profile Card */}
            <Card className="bg-white/5 border-white/10 p-6 sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {modelData.name}, {modelData.age}
                </h1>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4" />
                  {modelData.location}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="text-white font-bold text-lg">{modelData.rating}</span>
                    <span className="text-gray-400">({modelData.reviews} avaliações)</span>
                  </div>
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {modelData.price}
                </div>
                <div className="text-sm text-gray-400 mb-6">{modelData.lastSeen}</div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 h-12 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Agora
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 h-12 bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 h-12 bg-transparent"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Adicionar aos Favoritos
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-rose-400 mr-1" />
                    <span className="text-xl font-bold text-white">{modelData.stats.totalBookings}</span>
                  </div>
                  <div className="text-xs text-gray-400">Agendamentos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Eye className="w-4 h-4 text-pink-400 mr-1" />
                    <span className="text-xl font-bold text-white">{modelData.views}</span>
                  </div>
                  <div className="text-xs text-gray-400">Visualizações</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 text-purple-400 mr-1" />
                    <span className="text-xl font-bold text-white">{modelData.stats.responseTime}</span>
                  </div>
                  <div className="text-xs text-gray-400">Tempo Resposta</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-xl font-bold text-white">{modelData.stats.repeatClients}</span>
                  </div>
                  <div className="text-xs text-gray-400">Clientes Recorrentes</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
