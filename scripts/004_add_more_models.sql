-- Add 10 more diverse Brazilian models to the database

-- Insert additional profiles
INSERT INTO profiles (id, email, display_name, role, created_at, updated_at) VALUES
  ('00000000-0000-0000-0000-000000000007', 'maria.rodrigues@spicy.com', 'Maria Rodrigues', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000008', 'fernanda.lima@spicy.com', 'Fernanda Lima', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000009', 'carolina.alves@spicy.com', 'Carolina Alves', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000010', 'patricia.gomes@spicy.com', 'Patricia Gomes', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000011', 'luciana.mendes@spicy.com', 'Luciana Mendes', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000012', 'amanda.rocha@spicy.com', 'Amanda Rocha', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000013', 'bianca.carvalho@spicy.com', 'Bianca Carvalho', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000014', 'daniela.cruz@spicy.com', 'Daniela Cruz', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000015', 'larissa.teixeira@spicy.com', 'Larissa Teixeira', 'model', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000016', 'vanessa.cardoso@spicy.com', 'Vanessa Cardoso', 'model', NOW(), NOW());

-- Insert additional models
INSERT INTO models (
  user_id, name, age, location, city, state, price_per_hour, rating, total_reviews,
  online, verified, vip, total_views, about, languages, availability, specialties,
  total_bookings, response_time_minutes, repeat_clients_percentage, years_active
) VALUES
  (
    '00000000-0000-0000-0000-000000000007', 'Maria Rodrigues', 27, 'São Paulo, SP', 'São Paulo', 'SP', 380, 4.9, 178,
    true, true, true, 14200,
    'Modelo profissional com experiência internacional. Especializada em campanhas de luxo e alta costura.',
    ARRAY['Português', 'Inglês', 'Italiano'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    ARRAY['Luxo', 'Alta Costura', 'Internacional', 'Editorial'],
    456, 1, 90, 7
  ),
  (
    '00000000-0000-0000-0000-000000000008', 'Fernanda Lima', 23, 'Rio de Janeiro, RJ', 'Rio de Janeiro', 'RJ', 290, 4.7, 112,
    true, true, false, 9800,
    'Modelo focada em trabalhos de moda praia e lifestyle. Disponível para ensaios ao ar livre.',
    ARRAY['Português'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    ARRAY['Moda Praia', 'Lifestyle', 'Outdoor', 'Fitness'],
    267, 4, 76, 4
  ),
  (
    '00000000-0000-0000-0000-000000000009', 'Carolina Alves', 25, 'Fortaleza, CE', 'Fortaleza', 'CE', 270, 4.8, 94,
    false, true, false, 8100,
    'Modelo especializada em trabalhos comerciais e publicitários. Experiência com marcas nacionais.',
    ARRAY['Português', 'Inglês'],
    ARRAY['Terça', 'Quarta', 'Quinta', 'Sexta'],
    ARRAY['Comercial', 'Publicitário', 'Catálogo'],
    198, 3, 74, 3
  ),
  (
    '00000000-0000-0000-0000-000000000010', 'Patricia Gomes', 29, 'Salvador, BA', 'Salvador', 'BA', 330, 5.0, 156,
    true, true, true, 12900,
    'Modelo sênior com vasta experiência. Especializada em trabalhos editoriais e campanhas de alto padrão.',
    ARRAY['Português', 'Inglês', 'Espanhol'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta'],
    ARRAY['Editorial', 'Campanhas', 'Luxo', 'VIP'],
    389, 2, 87, 9
  ),
  (
    '00000000-0000-0000-0000-000000000011', 'Luciana Mendes', 24, 'Recife, PE', 'Recife', 'PE', 260, 4.6, 78,
    true, true, false, 7200,
    'Modelo jovem e versátil. Trabalhos em moda, beleza e lifestyle.',
    ARRAY['Português'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    ARRAY['Moda', 'Beleza', 'Lifestyle', 'Comercial'],
    156, 5, 70, 2
  ),
  (
    '00000000-0000-0000-0000-000000000012', 'Amanda Rocha', 26, 'Campinas, SP', 'Campinas', 'SP', 310, 4.8, 134,
    false, true, false, 10500,
    'Modelo fitness e wellness. Especializada em campanhas de saúde e bem-estar.',
    ARRAY['Português', 'Inglês'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    ARRAY['Fitness', 'Wellness', 'Saúde', 'Esportivo'],
    278, 3, 81, 5
  ),
  (
    '00000000-0000-0000-0000-000000000013', 'Bianca Carvalho', 22, 'Florianópolis, SC', 'Florianópolis', 'SC', 275, 4.7, 89,
    true, true, false, 8600,
    'Modelo especializada em moda praia e surf. Trabalhos naturais e lifestyle.',
    ARRAY['Português'],
    ARRAY['Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    ARRAY['Moda Praia', 'Surf', 'Natural', 'Lifestyle'],
    167, 6, 73, 3
  ),
  (
    '00000000-0000-0000-0000-000000000014', 'Daniela Cruz', 28, 'Manaus, AM', 'Manaus', 'AM', 340, 4.9, 145,
    true, true, true, 11300,
    'Modelo internacional com trabalhos na Europa e América. Especializada em alta moda.',
    ARRAY['Português', 'Inglês', 'Francês'],
    ARRAY['Segunda', 'Terça', 'Quarta'],
    ARRAY['Alta Moda', 'Internacional', 'Editorial', 'Luxo'],
    334, 2, 85, 6
  ),
  (
    '00000000-0000-0000-0000-000000000015', 'Larissa Teixeira', 21, 'Goiânia, GO', 'Goiânia', 'GO', 230, 4.5, 56,
    true, true, false, 5800,
    'Modelo iniciante com grande potencial. Focada em trabalhos comerciais e catálogo.',
    ARRAY['Português'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    ARRAY['Comercial', 'Catálogo', 'Casual'],
    98, 8, 62, 1
  ),
  (
    '00000000-0000-0000-0000-000000000016', 'Vanessa Cardoso', 30, 'São Paulo, SP', 'São Paulo', 'SP', 400, 5.0, 234,
    false, true, true, 18500,
    'Top model com mais de 10 anos de carreira. Especializada em trabalhos de luxo e campanhas internacionais.',
    ARRAY['Português', 'Inglês', 'Espanhol', 'Italiano'],
    ARRAY['Segunda', 'Terça', 'Quarta'],
    ARRAY['Luxo', 'Internacional', 'VIP', 'Alta Costura', 'Campanhas Premium'],
    567, 1, 95, 10
  );

-- Insert model images for new models
INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Maria Rodrigues';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Fernanda Lima';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Carolina Alves';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Patricia Gomes';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Luciana Mendes';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Amanda Rocha';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Bianca Carvalho';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Daniela Cruz';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Larissa Teixeira';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/placeholder.svg?height=500&width=350', true, 0
FROM models WHERE name = 'Vanessa Cardoso';

-- Insert services for new models
INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Campanha Internacional', 'Trabalho internacional exclusivo', 'A combinar', 4500
FROM models WHERE name = 'Maria Rodrigues';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Editorial de Luxo', 'Editorial para revista de alto padrão', '4 horas', 1520
FROM models WHERE name = 'Maria Rodrigues';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Ensaio Praia', 'Ensaio em locação de praia', '3 horas', 870
FROM models WHERE name = 'Fernanda Lima';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Lifestyle Outdoor', 'Ensaio lifestyle ao ar livre', '2 horas', 580
FROM models WHERE name = 'Fernanda Lima';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Campanha Comercial', 'Campanha para marca regional', 'A combinar', 2700
FROM models WHERE name = 'Carolina Alves';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Catálogo', 'Produção de catálogo de produtos', '1 dia', 2160
FROM models WHERE name = 'Carolina Alves';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Editorial Premium', 'Editorial de alta qualidade', '5 horas', 1650
FROM models WHERE name = 'Patricia Gomes';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Campanha VIP', 'Campanha exclusiva marca de luxo', 'A combinar', 5500
FROM models WHERE name = 'Patricia Gomes';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Ensaio Beleza', 'Ensaio focado em beleza', '2 horas', 520
FROM models WHERE name = 'Luciana Mendes';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Trabalho Comercial', 'Trabalho comercial básico', '2 horas', 520
FROM models WHERE name = 'Luciana Mendes';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Campanha Fitness', 'Campanha para marca fitness', 'A combinar', 3100
FROM models WHERE name = 'Amanda Rocha';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Ensaio Wellness', 'Ensaio wellness e saúde', '3 horas', 930
FROM models WHERE name = 'Amanda Rocha';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Ensaio Surf', 'Ensaio temático de surf', '3 horas', 825
FROM models WHERE name = 'Bianca Carvalho';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Lifestyle Natural', 'Ensaio natural e despojado', '2 horas', 550
FROM models WHERE name = 'Bianca Carvalho';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Desfile Internacional', 'Desfile internacional', '1 dia', 4500
FROM models WHERE name = 'Daniela Cruz';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Editorial Internacional', 'Editorial para revista internacional', '5 horas', 1700
FROM models WHERE name = 'Daniela Cruz';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Ensaio Catálogo', 'Ensaio para catálogo de produtos', '2 horas', 460
FROM models WHERE name = 'Larissa Teixeira';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Trabalho Comercial', 'Trabalho comercial simples', '2 horas', 460
FROM models WHERE name = 'Larissa Teixeira';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Campanha Premium Internacional', 'Campanha internacional de luxo', 'A combinar', 8000
FROM models WHERE name = 'Vanessa Cardoso';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Alta Costura Premium', 'Trabalho exclusivo alta costura', '1 dia', 6000
FROM models WHERE name = 'Vanessa Cardoso';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Editorial Vogue', 'Editorial para revista de luxo internacional', '1 dia', 5000
FROM models WHERE name = 'Vanessa Cardoso';
