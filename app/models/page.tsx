"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Star, Heart, CheckCircle, Clock, Filter, X, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

export default function ModelsPage() {
  const [models, setModels] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)

  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedState, setSelectedState] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [onlineOnly, setOnlineOnly] = useState(false)
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [vipOnly, setVipOnly] = useState(false)
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState("rating")

  useEffect(() => {
    fetchModels()
  }, [searchQuery, selectedCity, selectedState, priceRange, onlineOnly, verifiedOnly, vipOnly, minRating, sortBy])

  async function fetchModels() {
    setLoading(true)
    const supabase = createClient()

    let query = supabase.from("models").select(`
        *,
        model_images(image_url, is_primary)
      `)

    // Apply filters
    if (searchQuery) {
      query = query.or(`name.ilike.%${searchQuery}%,location.ilike.%${searchQuery}%,specialties.cs.{${searchQuery}}`)
    }

    if (selectedCity !== "all") {
      query = query.eq("city", selectedCity)
    }

    if (selectedState !== "all") {
      query = query.eq("state", selectedState)
    }

    if (onlineOnly) {
      query = query.eq("online", true)
    }

    if (verifiedOnly) {
      query = query.eq("verified", true)
    }

    if (vipOnly) {
      query = query.eq("vip", true)
    }

    query = query.gte("price_per_hour", priceRange[0]).lte("price_per_hour", priceRange[1])

    query = query.gte("rating", minRating)

    // Apply sorting
    switch (sortBy) {
      case "rating":
        query = query.order("rating", { ascending: false })
        break
      case "price_low":
        query = query.order("price_per_hour", { ascending: true })
        break
      case "price_high":
        query = query.order("price_per_hour", { ascending: false })
        break
      case "reviews":
        query = query.order("total_reviews", { ascending: false })
        break
      case "views":
        query = query.order("total_views", { ascending: false })
        break
    }

    const { data, error } = await query

    if (error) {
      console.error("[v0] Error fetching models:", error)
    }

    const processedModels =
      data?.map((model) => ({
        ...model,
        primaryImage:
          model.model_images?.find((img: any) => img.is_primary)?.image_url ||
          model.model_images?.[0]?.image_url ||
          "/placeholder.svg?height=500&width=350",
      })) || []

    setModels(processedModels)
    setLoading(false)
  }

  function clearFilters() {
    setSearchQuery("")
    setSelectedCity("all")
    setSelectedState("all")
    setPriceRange([0, 1000])
    setOnlineOnly(false)
    setVerifiedOnly(false)
    setVipOnly(false)
    setMinRating(0)
    setSortBy("rating")
  }

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
        {/* Search and Quick Actions */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Todas as Acompanhantes</h1>
          <p className="text-gray-400 mb-6">
            Encontre a acompanhante perfeita para você - {models.length} perfis disponíveis
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                placeholder="Buscar por nome, cidade ou especialidade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-rose-500"
              />
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 h-12 bg-white/5 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Melhor Avaliadas</SelectItem>
                <SelectItem value="price_low">Menor Preço</SelectItem>
                <SelectItem value="price_high">Maior Preço</SelectItem>
                <SelectItem value="reviews">Mais Reviews</SelectItem>
                <SelectItem value="views">Mais Visualizadas</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 px-6 border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filtros
              {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
            </Button>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => setOnlineOnly(!onlineOnly)}
              className={`border-green-500/30 ${
                onlineOnly ? "bg-green-500/20 text-green-300" : "bg-green-500/10 text-green-400"
              } hover:bg-green-500/20 hover:text-green-300`}
            >
              <Clock className="w-4 h-4 mr-2" />
              Online Agora
            </Button>
            <Button
              variant="outline"
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`border-blue-500/30 ${
                verifiedOnly ? "bg-blue-500/20 text-blue-300" : "bg-blue-500/10 text-blue-400"
              } hover:bg-blue-500/20 hover:text-blue-300`}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Verificadas
            </Button>
            <Button
              variant="outline"
              onClick={() => setVipOnly(!vipOnly)}
              className={`border-yellow-500/30 ${
                vipOnly ? "bg-yellow-500/20 text-yellow-300" : "bg-yellow-500/10 text-yellow-400"
              } hover:bg-yellow-500/20 hover:text-yellow-300`}
            >
              👑 VIP
            </Button>
            <Button
              variant="outline"
              onClick={clearFilters}
              className="border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300"
            >
              <X className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <Card className="p-6 mb-8 bg-white/5 border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Filtros Avançados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Location Filters */}
              <div>
                <Label className="text-white mb-2 block">Estado</Label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Estados</SelectItem>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    <SelectItem value="PR">Paraná</SelectItem>
                    <SelectItem value="SC">Santa Catarina</SelectItem>
                    <SelectItem value="BA">Bahia</SelectItem>
                    <SelectItem value="CE">Ceará</SelectItem>
                    <SelectItem value="PE">Pernambuco</SelectItem>
                    <SelectItem value="DF">Distrito Federal</SelectItem>
                    <SelectItem value="GO">Goiás</SelectItem>
                    <SelectItem value="AM">Amazonas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-white mb-2 block">Cidade</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Cidades</SelectItem>
                    <SelectItem value="São Paulo">São Paulo</SelectItem>
                    <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
                    <SelectItem value="Belo Horizonte">Belo Horizonte</SelectItem>
                    <SelectItem value="Porto Alegre">Porto Alegre</SelectItem>
                    <SelectItem value="Curitiba">Curitiba</SelectItem>
                    <SelectItem value="Florianópolis">Florianópolis</SelectItem>
                    <SelectItem value="Salvador">Salvador</SelectItem>
                    <SelectItem value="Fortaleza">Fortaleza</SelectItem>
                    <SelectItem value="Recife">Recife</SelectItem>
                    <SelectItem value="Brasília">Brasília</SelectItem>
                    <SelectItem value="Goiânia">Goiânia</SelectItem>
                    <SelectItem value="Manaus">Manaus</SelectItem>
                    <SelectItem value="Campinas">Campinas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-white mb-2 block">
                  Faixa de Preço: R$ {priceRange[0]} - R$ {priceRange[1]}/hora
                </Label>
                <Slider
                  min={0}
                  max={1000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
              </div>

              {/* Rating Filter */}
              <div>
                <Label className="text-white mb-2 block">Avaliação Mínima: {minRating} ⭐</Label>
                <Slider min={0} max={5} step={0.5} value={[minRating]} onValueChange={(v) => setMinRating(v[0])} />
              </div>

              {/* Status Filters */}
              <div className="space-y-3">
                <Label className="text-white block">Status</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="online" checked={onlineOnly} onCheckedChange={setOnlineOnly} />
                  <Label htmlFor="online" className="text-gray-300 cursor-pointer">
                    Online Agora
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
                  <Label htmlFor="verified" className="text-gray-300 cursor-pointer">
                    Verificadas
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vip" checked={vipOnly} onCheckedChange={setVipOnly} />
                  <Label htmlFor="vip" className="text-gray-300 cursor-pointer">
                    VIP Apenas
                  </Label>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Models Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
            <p className="text-gray-400 mt-4">Carregando acompanhantes...</p>
          </div>
        ) : models.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhuma acompanhante encontrada com esses filtros.</p>
            <Button onClick={clearFilters} className="mt-4 bg-rose-500 hover:bg-rose-600">
              Limpar Filtros
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {models.map((model) => (
              <Link href={`/model/${model.id}`} key={model.id}>
                <Card className="group overflow-hidden bg-white/5 border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={model.primaryImage || "/placeholder.svg"}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap max-w-[calc(100%-80px)]">
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

                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-rose-500 transition-colors"
                    >
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

                      <div className="flex flex-wrap gap-2 mb-3">
                        {model.specialties?.slice(0, 2).map((specialty: string) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="text-xs bg-white/10 text-white border-0"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                        R$ {model.price_per_hour}/hora
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
