-- Insert sample models (these would normally be created through sign up)
-- Note: In production, user_id should reference actual auth.users entries

INSERT INTO models (
  user_id, name, age, location, city, state, price_per_hour, rating, total_reviews,
  online, verified, vip, total_views, about, languages, availability, specialties,
  total_bookings, response_time_minutes, repeat_clients_percentage, years_active
) VALUES
  (
    '00000000-0000-0000-0000-000000000001', 'Sofia Martinez', 24, 'São Paulo, SP', 'São Paulo', 'SP', 300, 4.9, 127,
    true, true, true, 12500, 
    'Modelo profissional com mais de 5 anos de experiência no mercado. Especializada em ensaios fotográficos, desfiles e eventos corporativos.',
    ARRAY['Português', 'Inglês', 'Espanhol'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    ARRAY['Ensaios', 'Fashion', 'Eventos', 'Comercial', 'Editorial'],
    342, 2, 85, 5
  ),
  (
    '00000000-0000-0000-0000-000000000002', 'Isabella Costa', 22, 'Rio de Janeiro, RJ', 'Rio de Janeiro', 'RJ', 250, 4.8, 89,
    true, true, false, 8300,
    'Modelo especializada em trabalhos comerciais e editoriais. Disponível para ensaios e eventos.',
    ARRAY['Português', 'Inglês'],
    ARRAY['Segunda', 'Terça', 'Quinta', 'Sexta', 'Sábado'],
    ARRAY['Comercial', 'Editorial', 'Ensaios'],
    215, 5, 78, 3
  ),
  (
    '00000000-0000-0000-0000-000000000003', 'Camila Oliveira', 26, 'Belo Horizonte, MG', 'Belo Horizonte', 'MG', 350, 5.0, 215,
    false, true, true, 15700,
    'Modelo internacional com experiência em alta costura. Especializada em trabalhos VIP e campanhas de luxo.',
    ARRAY['Português', 'Inglês', 'Francês'],
    ARRAY['Segunda', 'Quarta', 'Sexta'],
    ARRAY['Luxo', 'VIP', 'Internacional', 'Alta Costura'],
    428, 1, 92, 8
  ),
  (
    '00000000-0000-0000-0000-000000000004', 'Ana Silva', 23, 'Curitiba, PR', 'Curitiba', 'PR', 280, 4.7, 96,
    true, true, false, 9200,
    'Modelo fitness especializada em moda praia e campanhas esportivas.',
    ARRAY['Português'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    ARRAY['Fitness', 'Moda Praia', 'Esportivo'],
    187, 3, 72, 4
  ),
  (
    '00000000-0000-0000-0000-000000000005', 'Julia Santos', 25, 'Brasília, DF', 'Brasília', 'DF', 320, 4.9, 143,
    true, true, true, 11800,
    'Especialista em alta costura e campanhas publicitárias de grande porte.',
    ARRAY['Português', 'Inglês'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta'],
    ARRAY['Alta Costura', 'Campanhas', 'Editorial'],
    298, 2, 88, 6
  ),
  (
    '00000000-0000-0000-0000-000000000006', 'Beatriz Ferreira', 21, 'Porto Alegre, RS', 'Porto Alegre', 'RS', 240, 4.6, 67,
    false, true, false, 6400,
    'Modelo jovem com foco em trabalhos casuais e lifestyle.',
    ARRAY['Português'],
    ARRAY['Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    ARRAY['Casual', 'Lifestyle', 'Comercial'],
    124, 10, 65, 2
  );

-- Insert model images
INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/beautiful-latina-model-professional-photo.jpg', true, 0
FROM models WHERE name = 'Sofia Martinez';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/brunette-model-professional-portrait.jpg', true, 0
FROM models WHERE name = 'Isabella Costa';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/blonde-model-glamour-photo.jpg', true, 0
FROM models WHERE name = 'Camila Oliveira';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/redhead-model-elegant-photo.jpg', true, 0
FROM models WHERE name = 'Ana Silva';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/dark-hair-model-studio-portrait.jpg', true, 0
FROM models WHERE name = 'Julia Santos';

INSERT INTO model_images (model_id, image_url, is_primary, display_order)
SELECT id, '/young-model-natural-beauty.jpg', true, 0
FROM models WHERE name = 'Beatriz Ferreira';

-- Insert services for models
INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Ensaio Fotográfico', 'Ensaio profissional com looks variados', '2 horas', 600
FROM models WHERE name = 'Sofia Martinez';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Evento Corporativo', 'Presença em eventos empresariais', '4 horas', 1200
FROM models WHERE name = 'Sofia Martinez';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Desfile de Moda', 'Desfile profissional', '1 dia', 2500
FROM models WHERE name = 'Sofia Martinez';

INSERT INTO services (model_id, name, description, duration, price)
SELECT id, 'Campanha Publicitária', 'Campanha completa com exclusividade', 'A combinar', 3000
FROM models WHERE name = 'Sofia Martinez';
