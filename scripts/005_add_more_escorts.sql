-- Add more diverse escorts/companions to the database
-- Delete existing if re-running
DELETE FROM model_images WHERE model_id IN (
  SELECT id FROM models WHERE user_id IN (
    SELECT id FROM profiles WHERE email LIKE '%escort%'
  )
);

DELETE FROM services WHERE model_id IN (
  SELECT id FROM models WHERE user_id IN (
    SELECT id FROM profiles WHERE email LIKE '%escort%'
  )
);

DELETE FROM models WHERE user_id IN (
  SELECT id FROM profiles WHERE email LIKE '%escort%'
);

DELETE FROM profiles WHERE email LIKE '%escort%';

-- Insert 20 diverse escorts from different cities
INSERT INTO profiles (id, email, display_name, role) VALUES
  ('e1000000-0000-0000-0000-000000000001', 'escort1@spicy.com', 'Luna Santos', 'model'),
  ('e1000000-0000-0000-0000-000000000002', 'escort2@spicy.com', 'Valentina Costa', 'model'),
  ('e1000000-0000-0000-0000-000000000003', 'escort3@spicy.com', 'Isabela Ferreira', 'model'),
  ('e1000000-0000-0000-0000-000000000004', 'escort4@spicy.com', 'Sophia Oliveira', 'model'),
  ('e1000000-0000-0000-0000-000000000005', 'escort5@spicy.com', 'Amanda Rodrigues', 'model'),
  ('e1000000-0000-0000-0000-000000000006', 'escort6@spicy.com', 'Melissa Alves', 'model'),
  ('e1000000-0000-0000-0000-000000000007', 'escort7@spicy.com', 'Rafaela Lima', 'model'),
  ('e1000000-0000-0000-0000-000000000008', 'escort8@spicy.com', 'Letícia Souza', 'model'),
  ('e1000000-0000-0000-0000-000000000009', 'escort9@spicy.com', 'Camila Martins', 'model'),
  ('e1000000-0000-0000-0000-000000000010', 'escort10@spicy.com', 'Natalia Pereira', 'model'),
  ('e1000000-0000-0000-0000-000000000011', 'escort11@spicy.com', 'Bianca Silva', 'model'),
  ('e1000000-0000-0000-0000-000000000012', 'escort12@spicy.com', 'Victoria Rocha', 'model'),
  ('e1000000-0000-0000-0000-000000000013', 'escort13@spicy.com', 'Lorena Cardoso', 'model'),
  ('e1000000-0000-0000-0000-000000000014', 'escort14@spicy.com', 'Helena Ribeiro', 'model'),
  ('e1000000-0000-0000-0000-000000000015', 'escort15@spicy.com', 'Mariana Dias', 'model'),
  ('e1000000-0000-0000-0000-000000000016', 'escort16@spicy.com', 'Gabriela Nunes', 'model'),
  ('e1000000-0000-0000-0000-000000000017', 'escort17@spicy.com', 'Nicole Araujo', 'model'),
  ('e1000000-0000-0000-0000-000000000018', 'escort18@spicy.com', 'Yasmin Castro', 'model'),
  ('e1000000-0000-0000-0000-000000000019', 'escort19@spicy.com', 'Alice Barbosa', 'model'),
  ('e1000000-0000-0000-0000-000000000020', 'escort20@spicy.com', 'Carolina Melo', 'model');

-- Insert models with diverse characteristics
INSERT INTO models (
  id, user_id, name, age, location, city, state, about, price_per_hour,
  rating, total_reviews, online, verified, vip, specialties, languages,
  availability, total_views, years_active
) VALUES
  (
    'e2000000-0000-0000-0000-000000000001', 'e1000000-0000-0000-0000-000000000001',
    'Luna Santos', 23, 'São Paulo - SP', 'São Paulo', 'SP',
    'Acompanhante premium de luxo em São Paulo. Disponível para jantares, eventos sociais e viagens. Discrição e elegância garantidas.',
    500, 4.9, 128, true, true, true,
    ARRAY['Acompanhante de Luxo', 'Eventos Sociais', 'Viagens', 'Jantares'],
    ARRAY['Português', 'Inglês', 'Espanhol'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    15420, 3
  ),
  (
    'e2000000-0000-0000-0000-000000000002', 'e1000000-0000-0000-0000-000000000002',
    'Valentina Costa', 25, 'Rio de Janeiro - RJ', 'Rio de Janeiro', 'RJ',
    'Modelo internacional e acompanhante VIP. Especialista em eventos corporativos e viagens internacionais.',
    800, 5.0, 94, true, true, true,
    ARRAY['Viagens Internacionais', 'Eventos Corporativos', 'Alto Padrão', 'Fluente em 4 idiomas'],
    ARRAY['Português', 'Inglês', 'Francês', 'Italiano'],
    ARRAY['Sob Agendamento'],
    22340, 5
  ),
  (
    'e2000000-0000-0000-0000-000000000003', 'e1000000-0000-0000-0000-000000000003',
    'Isabela Ferreira', 22, 'Brasília - DF', 'Brasília', 'DF',
    'Acompanhante sofisticada disponível para eventos, jantares e momentos especiais na capital federal.',
    400, 4.8, 76, true, true, false,
    ARRAY['Eventos', 'Jantares', 'Acompanhante Social'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Segunda', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    9850, 2
  ),
  (
    'e2000000-0000-0000-0000-000000000004', 'e1000000-0000-0000-0000-000000000004',
    'Sophia Oliveira', 26, 'Belo Horizonte - MG', 'Belo Horizonte', 'MG',
    'Modelo fitness e acompanhante. Perfeita para eventos esportivos, viagens e programas especiais.',
    350, 4.7, 112, false, true, false,
    ARRAY['Fitness', 'Esportes', 'Viagens', 'Eventos'],
    ARRAY['Português'],
    ARRAY['Terça', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    13200, 3
  ),
  (
    'e2000000-0000-0000-0000-000000000005', 'e1000000-0000-0000-0000-000000000005',
    'Amanda Rodrigues', 24, 'Curitiba - PR', 'Curitiba', 'PR',
    'Acompanhante elegante e discreta. Ideal para executivos e eventos corporativos em Curitiba.',
    450, 4.9, 89, true, true, true,
    ARRAY['Executivos', 'Eventos Corporativos', 'Jantares de Negócios'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    11780, 4
  ),
  (
    'e2000000-0000-0000-0000-000000000006', 'e1000000-0000-0000-0000-000000000006',
    'Melissa Alves', 27, 'Porto Alegre - RS', 'Porto Alegre', 'RS',
    'Acompanhante experiente com foco em viagens e eventos de longa duração. Companhia inteligente e agradável.',
    380, 4.8, 145, true, true, false,
    ARRAY['Viagens', 'Eventos', 'Longa Duração', 'Intelectual'],
    ARRAY['Português', 'Inglês', 'Espanhol'],
    ARRAY['Sob Agendamento'],
    18950, 6
  ),
  (
    'e2000000-0000-0000-0000-000000000007', 'e1000000-0000-0000-0000-000000000007',
    'Rafaela Lima', 21, 'Fortaleza - CE', 'Fortaleza', 'CE',
    'Modelo de praia e acompanhante para eventos e festas. Alegre, carismática e muito fotogênica.',
    300, 4.6, 67, true, true, false,
    ARRAY['Festas', 'Eventos de Praia', 'Fotografia', 'Social'],
    ARRAY['Português'],
    ARRAY['Quinta', 'Sexta', 'Sábado', 'Domingo'],
    8340, 2
  ),
  (
    'e2000000-0000-0000-0000-000000000008', 'e1000000-0000-0000-0000-000000000008',
    'Letícia Souza', 28, 'Salvador - BA', 'Salvador', 'BA',
    'Acompanhante de luxo com vasta experiência em eventos VIP e viagens internacionais pela Bahia e Brasil.',
    550, 4.9, 156, false, true, true,
    ARRAY['VIP', 'Eventos Premium', 'Viagens', 'Festas Exclusivas'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Sob Agendamento'],
    21400, 7
  ),
  (
    'e2000000-0000-0000-0000-000000000009', 'e1000000-0000-0000-0000-000000000009',
    'Camila Martins', 23, 'Recife - PE', 'Recife', 'PE',
    'Universitária e modelo. Disponível para jantares, eventos culturais e companhia durante viagens.',
    320, 4.7, 54, true, true, false,
    ARRAY['Universitária', 'Cultura', 'Arte', 'Jantares'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    6720, 1
  ),
  (
    'e2000000-0000-0000-0000-000000000010', 'e1000000-0000-0000-0000-000000000010',
    'Natalia Pereira', 29, 'Manaus - AM', 'Manaus', 'AM',
    'Acompanhante experiente especializada em turismo ecológico e eventos na região Norte do Brasil.',
    400, 4.8, 98, true, true, false,
    ARRAY['Ecoturismo', 'Aventura', 'Natureza', 'Guia Turística'],
    ARRAY['Português', 'Inglês', 'Espanhol'],
    ARRAY['Sob Agendamento'],
    12300, 5
  ),
  (
    'e2000000-0000-0000-0000-000000000011', 'e1000000-0000-0000-0000-000000000011',
    'Bianca Silva', 24, 'Goiânia - GO', 'Goiânia', 'GO',
    'Modelo e acompanhante para eventos sertanejos, shows e festas. Autêntica e muito divertida.',
    280, 4.6, 71, true, true, false,
    ARRAY['Eventos Sertanejos', 'Shows', 'Festas', 'Baladas'],
    ARRAY['Português'],
    ARRAY['Quinta', 'Sexta', 'Sábado'],
    9120, 2
  ),
  (
    'e2000000-0000-0000-0000-000000000012', 'e1000000-0000-0000-0000-000000000012',
    'Victoria Rocha', 26, 'Campinas - SP', 'Campinas', 'SP',
    'Acompanhante de alto nível para eventos corporativos, convenções e viagens de negócios.',
    480, 4.9, 134, true, true, true,
    ARRAY['Corporativo', 'Convenções', 'Negócios', 'Executiva'],
    ARRAY['Português', 'Inglês', 'Alemão'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    17650, 4
  ),
  (
    'e2000000-0000-0000-0000-000000000013', 'e1000000-0000-0000-0000-000000000013',
    'Lorena Cardoso', 25, 'Florianópolis - SC', 'Florianópolis', 'SC',
    'Surfista e modelo de praia. Perfeita para eventos ao ar livre, esportes aquáticos e viagens costeiras.',
    350, 4.7, 82, true, true, false,
    ARRAY['Surf', 'Praia', 'Esportes Aquáticos', 'Outdoor'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Sábado', 'Domingo'],
    10840, 3
  ),
  (
    'e2000000-0000-0000-0000-000000000014', 'e1000000-0000-0000-0000-000000000014',
    'Helena Ribeiro', 30, 'São Paulo - SP', 'São Paulo', 'SP',
    'Acompanhante de elite com MBA e experiência internacional. Especialista em eventos high society.',
    700, 5.0, 187, false, true, true,
    ARRAY['Elite', 'High Society', 'Internacional', 'Intelectual'],
    ARRAY['Português', 'Inglês', 'Francês', 'Mandarim'],
    ARRAY['Sob Agendamento'],
    28940, 8
  ),
  (
    'e2000000-0000-0000-0000-000000000015', 'e1000000-0000-0000-0000-000000000015',
    'Mariana Dias', 22, 'Rio de Janeiro - RJ', 'Rio de Janeiro', 'RJ',
    'Dançarina profissional e acompanhante. Especializada em festas, eventos de gala e shows.',
    420, 4.8, 93, true, true, false,
    ARRAY['Dança', 'Festas', 'Gala', 'Shows'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Quinta', 'Sexta', 'Sábado', 'Domingo'],
    13560, 3
  ),
  (
    'e2000000-0000-0000-0000-000000000016', 'e1000000-0000-0000-0000-000000000016',
    'Gabriela Nunes', 27, 'Brasília - DF', 'Brasília', 'DF',
    'Jornalista e acompanhante VIP. Ideal para eventos políticos, jantares diplomáticos e convenções.',
    520, 4.9, 118, true, true, true,
    ARRAY['Política', 'Diplomacia', 'Jornalismo', 'VIP'],
    ARRAY['Português', 'Inglês', 'Espanhol'],
    ARRAY['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    16780, 5
  ),
  (
    'e2000000-0000-0000-0000-000000000017', 'e1000000-0000-0000-0000-000000000017',
    'Nicole Araujo', 24, 'Belo Horizonte - MG', 'Belo Horizonte', 'MG',
    'Modelo alternativa e artista. Perfeita para eventos culturais, exposições e festas temáticas.',
    340, 4.7, 64, true, true, false,
    ARRAY['Arte', 'Cultura', 'Alternativa', 'Festas Temáticas'],
    ARRAY['Português'],
    ARRAY['Sexta', 'Sábado', 'Domingo'],
    8920, 2
  ),
  (
    'e2000000-0000-0000-0000-000000000018', 'e1000000-0000-0000-0000-000000000018',
    'Yasmin Castro', 23, 'Curitiba - PR', 'Curitiba', 'PR',
    'Estudante de gastronomia e sommelier em formação. Ideal para jantares sofisticados e degustações.',
    380, 4.8, 76, true, true, false,
    ARRAY['Gastronomia', 'Vinhos', 'Jantares Finos', 'Culinária'],
    ARRAY['Português', 'Francês'],
    ARRAY['Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    9650, 2
  ),
  (
    'e2000000-0000-0000-0000-000000000019', 'e1000000-0000-0000-0000-000000000019',
    'Alice Barbosa', 26, 'Porto Alegre - RS', 'Porto Alegre', 'RS',
    'Personal trainer e modelo fitness. Disponível para eventos esportivos e programas wellness.',
    320, 4.7, 88, true, true, false,
    ARRAY['Fitness', 'Personal', 'Wellness', 'Esportes'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Segunda', 'Quarta', 'Sexta', 'Domingo'],
    11240, 3
  ),
  (
    'e2000000-0000-0000-0000-000000000020', 'e1000000-0000-0000-0000-000000000020',
    'Carolina Melo', 28, 'Salvador - BA', 'Salvador', 'BA',
    'Cantora profissional e acompanhante. Especializada em eventos musicais, shows e festas de luxo.',
    450, 4.9, 142, false, true, true,
    ARRAY['Música', 'Shows', 'Eventos Premium', 'Cantora'],
    ARRAY['Português', 'Inglês'],
    ARRAY['Quinta', 'Sexta', 'Sábado', 'Domingo'],
    19830, 6
  );

-- Insert images for escorts
INSERT INTO model_images (id, model_id, image_url, is_primary, display_order) VALUES
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000001', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000002', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000003', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000004', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000005', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000006', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000007', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000008', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000009', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000010', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000011', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000012', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000013', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000014', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000015', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000016', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000017', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000018', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000019', '/placeholder.svg?height=600&width=400', true, 1),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000020', '/placeholder.svg?height=600&width=400', true, 1);

-- Insert services for escorts
INSERT INTO services (id, model_id, name, description, duration, price) VALUES
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000001', 'Jantar Romântico', 'Companhia para jantar em restaurante fino', '2 horas', 800),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000001', 'Evento Social', 'Acompanhamento em eventos e festas', '4 horas', 1800),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000001', 'Pernoite', 'Companhia durante a noite toda', '12 horas', 4500),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000002', 'Viagem Internacional', 'Acompanhamento em viagens pelo mundo', 'Por dia', 5000),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000002', 'Evento Corporativo', 'Presença em eventos empresariais', '4 horas', 2800),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000003', 'City Tour', 'Companhia para passeios pela cidade', '3 horas', 900),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000004', 'Personal Training', 'Treino personalizado e companhia', '2 horas', 500),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000005', 'Reunião de Negócios', 'Acompanhamento em jantares executivos', '3 horas', 1200),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000006', 'Fim de Semana', 'Companhia para o fim de semana completo', '2 dias', 6000),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000007', 'Festa na Praia', 'Acompanhamento em eventos de praia', '4 horas', 1000),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000008', 'Carnaval VIP', 'Companhia exclusiva durante o carnaval', 'Por dia', 3500),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000009', 'Programa Cultural', 'Visita a museus, teatros e exposições', '3 horas', 750),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000010', 'Turismo Ecológico', 'Aventuras na floresta amazônica', 'Por dia', 2000),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000011', 'Show Sertanejo', 'Companhia para shows e rodeios', '4 horas', 900),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000012', 'Convenção', 'Presença em convenções e feiras', '6 horas', 2400),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000013', 'Dia de Surf', 'Aulas de surf e dia na praia', '4 horas', 1100),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000014', 'Gala Internacional', 'Presença em eventos de alta sociedade', '5 horas', 3200),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000015', 'Noite de Dança', 'Show de dança e companhia em festas', '3 horas', 1500),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000016', 'Evento Diplomático', 'Acompanhamento em eventos oficiais', '4 horas', 1900),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000017', 'Exposição de Arte', 'Visita a galerias e vernissages', '2 horas', 600),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000018', 'Degustação', 'Experiência gastronômica premium', '3 horas', 1100),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000019', 'Wellness Day', 'Dia completo de atividades fitness', '6 horas', 1500),
  (gen_random_uuid(), 'e2000000-0000-0000-0000-000000000020', 'Show Privado', 'Performance musical exclusiva', '2 horas', 1600);
