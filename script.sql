-- SQLite
INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES 
(
    1,
    'Elden Ring: Shadow of the Erdtree',
    'Shadow of the Erdtree é a expansão de Elden Ring que leva os jogadores ao Reino das Sombras. Explore novas áreas, enfrente chefes desafiadores e descubra os mistérios envolvendo Miquella em uma jornada sombria e épica.',
    '/static/img/shadowoftheerdtree.png',
    '["RPG", "Acao", "Mundo Aberto"]',
    '["PC"]',
    159.90,
    199.90,
    20
);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES 
(
    2,
    'GTA V',
    'Grand Theft Auto V acompanha a história de três criminosos em Los Santos. Michael, Franklin e Trevor se unem em grandes assaltos enquanto enfrentam o caos do submundo do crime em um enorme mundo aberto.',
    '/static/img/gtav.png',
    '["Acao"]',
    '["PC"]',
    79.90,
    119.90,
    35
),
(
    3,
    'Call of Duty MWIII',
    'Modern Warfare III acompanha a Força-Tarefa 141 contra Vladimir Makarov. O jogo entrega campanhas intensas, combate frenético e modos multiplayer explosivos.',
    '/static/img/MWIII_Capa.png',
    '["Acao"]',
    '["Playstation"]',
    199.90,
    249.90,
    20
),
(
    4,
    'Minecraft',
    'Minecraft é um jogo de sobrevivência e criatividade onde você explora mundos infinitos, constrói estruturas gigantescas e enfrenta criaturas perigosas.',
    '/static/img/minecrafcapa.jpg',
    '["Aventura"]',
    '["XBOX"]',
    74.99,
    84.99,
    10
),
(
    5,
    'Crimson Desert',
    'Em meio ao continente devastado de Pywel, Kliff luta para reencontrar seus companheiros e restaurar os lendários Grisalhos.',
    '/static/img/Crimson Desert.jpg',
    '["RPG"]',
    '["PC"]',
    249.90,
    299.90,
    17
),
(
    6,
    'Resident Evil Requiem',
    'O novo capítulo da franquia Resident Evil traz terror intenso, sobrevivência e uma experiência cinematográfica extremamente imersiva.',
    '/static/img/Resident Evil Requiem.jpg',
    '["Acao"]',
    '["Playstation"]',
    199.90,
    249.90,
    20
),
(
    7,
    'Death Stranding 2',
    'Hideo Kojima retorna com uma nova aventura emocional e cinematográfica, expandindo o universo misterioso de Death Stranding.',
    '/static/img/Death Stranding.jpg',
    '["Aventura"]',
    '["Playstation"]',
    254.90,
    299.90,
    15
),
(
    8,
    'Cyberpunk 2077',
    'Explore Night City em um RPG futurista repleto de ação, implantes cibernéticos e escolhas que alteram o destino da cidade.',
    '/static/img/cyberpunk.jpg.webp',
    '["RPG"]',
    '["PC"]',
    149.90,
    249.90,
    40
),
(
    9,
    'Spider-Man 2',
    'Peter Parker e Miles Morales enfrentam novas ameaças em uma aventura cinematográfica cheia de ação pela cidade de Nova York.',
    '/static/img/spiderman2.jpg',
    '["Aventura"]',
    '["Playstation"]',
    289.90,
    349.90,
    18
),
(
    10,
    'Civilization VI',
    'Construa um império do zero, desenvolva tecnologias e domine o mundo em um dos maiores jogos de estratégia da atualidade.',
    '/static/img/civilization.jpg',
    '["Estrategia"]',
    '["PC"]',
    139.90,
    199.90,
    30
),
(
    11,
    'Hogwarts Legacy',
    'Viva a experiência definitiva de Hogwarts em um RPG de mundo aberto repleto de magia, criaturas fantásticas e segredos antigos.',
    '/static/img/hogwarts.jpg',
    '["RPG"]',
    '["Playstation"]',
    219.90,
    279.90,
    22
),
(
    12,
    'Red Dead Redemption 2',
    'Explore o Velho Oeste em uma jornada cinematográfica intensa acompanhando Arthur Morgan e a gangue Van der Linde.',
    '/static/img/reddead.jpg',
    '["Aventura"]',
    '["XBOX"]',
    174.90,
    249.90,
    30
),
(
    13,
    'Black Myth: Wukong',
    'Inspirado na mitologia chinesa, enfrente criaturas lendárias em um RPG de ação visualmente impressionante.',
    '/static/img/blackmith.webp',
    '["Acao"]',
    '["PC"]',
    254.90,
    299.90,
    15
),
(
    14,
    'EA SPORTS FC 26',
    'Monte seu elenco dos sonhos e dispute partidas intensas com gráficos realistas e jogabilidade refinada.',
    '/static/img/fc26.webp',
    '["Estrategia"]',
    '["Playstation"]',
    314.90,
    349.90,
    10
),
(
    15,
    'Alan Wake 2',
    'Um thriller psicológico sombrio que mistura investigação, terror e narrativa cinematográfica em uma atmosfera intensa.',
    '/static/img/alanwake.webp',
    '["Acao"]',
    '["XBOX"]',
    204.90,
    249.90,
    18
),
(
    16,
    'Assassin''s Creed Shadows',
    'Explore o Japão feudal em uma aventura épica de furtividade, combate e exploração no universo Assassin''s Creed.',
    '/static/img/assasins.webp',
    '["Aventura"]',
    '["PC"]',
    224.90,
    299.90,
    25
);
UPDATE jogos SET img = '/static/img/elden.jpg' WHERE id = 1;
UPDATE jogos SET img = '/static/img/cyberpunk.jpg' WHERE id = 8;
UPDATE jogos SET img = '/static/img/spiderman2.jpg' WHERE id = 9;
