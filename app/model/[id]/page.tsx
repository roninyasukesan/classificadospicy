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
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"

export default async function ModelProfilePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const resolvedParams = await params

  const { data: model, error: modelError } = await supabase
    .from("models")
    .select(`
      *,
      model_images(image_url, is_primary, display_order),
      services(*)
    `)
    .eq("id", resolvedParams.id)
    .single()

  if (modelError || !model) {
    notFound()
  }

  const { data: reviews } = await supabase
    .from("reviews")
    .select(`
      *,
      profiles!reviews_client_id_fkey(display_name)
    `)
    .eq("model_id", resolvedParams.id)
    .order("created_at", { ascending: false })
    .limit(3)

  // Sort images by display order
  const sortedImages = model.model_images?.sort((a: any, b: any) => a.display_order - b.display_order) || []
  const primaryImage = sortedImages.find((img: any) => img.is_primary) ||
    sortedImages[0] || {
      image_url: "/placeholder.svg?height=800&width=600",
    }

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
                src={primaryImage?.image_url || "/placeholder.svg"}
                alt={model.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {model.online && (
                  <Badge className="bg-green-500 text-white border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    Online Agora
                  </Badge>
                )}
                {model.verified && (
                  <Badge className="bg-blue-500 text-white border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verificada
                  </Badge>
                )}
                {model.vip && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">👑 VIP</Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            {sortedImages.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {sortedImages.slice(1, 7).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    <img
                      src={image.image_url || "/placeholder.svg"}
                      alt={`${model.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

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
                  Avaliações ({model.total_reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card className="bg-white/5 border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Sobre Mim</h3>
                  <p className="text-gray-300 mb-6">{model.about}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Especialidades</div>
                      <div className="flex flex-wrap gap-2">
                        {model.specialties?.map((specialty: string) => (
                          <Badge key={specialty} variant="secondary" className="bg-rose-500/20 text-rose-300 border-0">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Idiomas</div>
                      <div className="flex flex-wrap gap-2">
                        {model.languages?.map((lang: string) => (
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
                      {model.availability?.map((day: string) => (
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
                    {model.services?.map((service: any) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div>
                          <div className="font-semibold text-white mb-1">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                          {service.description && (
                            <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                            R$ {service.price}
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
                      <span className="text-2xl font-bold text-white">{model.rating}</span>
                      <span className="text-gray-400">({model.total_reviews} avaliações)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {reviews && reviews.length > 0 ? (
                      reviews.map((review: any) => (
                        <div key={review.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold text-white">
                                {review.profiles?.display_name || "Usuário"}
                              </div>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                              </div>
                            </div>
                            <div className="text-sm text-gray-400">
                              {new Date(review.created_at).toLocaleDateString("pt-BR")}
                            </div>
                          </div>
                          <p className="text-gray-300">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-center py-8">Nenhuma avaliação ainda</p>
                    )}
                  </div>

                  {reviews && reviews.length > 0 && (
                    <Button
                      variant="outline"
                      className="w-full mt-6 border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      Ver Todas as Avaliações
                    </Button>
                  )}
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Info & Actions */}
          <div className="space-y-4">
            <Card className="bg-white/5 border-white/10 p-6 sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {model.name}, {model.age}
                </h1>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4" />
                  {model.location}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="text-white font-bold text-lg">{model.rating}</span>
                    <span className="text-gray-400">({model.total_reviews} avaliações)</span>
                  </div>
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  R$ {model.price_per_hour}/hora
                </div>
                <div className="text-sm text-gray-400 mb-6">{model.online ? "Online agora" : "Offline"}</div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Link href={`/booking/${model.id}`}>
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 h-12 text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Agora
                  </Button>
                </Link>
                <Link href={`/messages?model=${model.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 h-12 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </Link>
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
                    <span className="text-xl font-bold text-white">{model.total_bookings}</span>
                  </div>
                  <div className="text-xs text-gray-400">Agendamentos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Eye className="w-4 h-4 text-pink-400 mr-1" />
                    <span className="text-xl font-bold text-white">{(model.total_views / 1000).toFixed(1)}k</span>
                  </div>
                  <div className="text-xs text-gray-400">Visualizações</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 text-purple-400 mr-1" />
                    <span className="text-xl font-bold text-white">{model.response_time_minutes} min</span>
                  </div>
                  <div className="text-xs text-gray-400">Tempo Resposta</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-xl font-bold text-white">{model.repeat_clients_percentage}%</span>
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
