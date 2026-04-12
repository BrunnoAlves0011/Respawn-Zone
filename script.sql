-- SQLite
-- INSERT INTO jogos (id, nome, `desc`, img, preco, precod, desconto)
-- VALUES (1, 'GTA V', 'Grand Theft Auto V acompanha a história de três criminosos com vidas bem diferentes em Los Santos. Michael (um ex-assaltante rico), Franklin (um jovem em busca de grana) e Trevor (um psicopata imprevisível) se unem. Juntos, eles planejam e executam uma série de grandes e perigosos assaltos para garantir a própria sobrevivência. O jogo mistura ação intensa, um vasto mundo aberto para explorar e uma forte crítica à sociedade moderna.', '/static/img/gtav.png', 79.90, 79.90, 0);

-- INSERT INTO jogos (id, nome, `desc`, img, preco, precod, desconto)
-- VALUES (2, 'Call of Duty', 'Modern Warfare 3 acompanha a Força-Tarefa 141 na caçada implacável contra o terrorista Vladimir Makarov. O capitão Price e sua equipe lutam para impedir uma Terceira Guerra Mundial que ameaça consumir o planeta. O jogo entrega uma campanha intensa com batalhas urbanas e missões de combate aberto muito mais dinâmicas. É o desfecho explosivo de uma das sagas mais icônicas e cheias de ação do mundo dos jogos de tiro.', '/static/img/MWIII_Capa.png', 199.90, 199.90, 0);

-- INSERT INTO jogos (id, nome, `desc`, img, preco, precod, desconto)
-- VALUES (3, 'Minecraft', 'Minecraft é um jogo de mundo aberto onde tudo é feito de blocos que podem ser quebrados e reconstruídos. Sem regras fixas, você pode explorar cenários infinitos, coletar recursos e criar ferramentas para sobreviver. O foco do jogo varia entre erguer construções grandiosas e enfrentar criaturas perigosas que surgem à noite. No fim das contas, o verdadeiro objetivo é usar a criatividade para moldar o próprio universo.', '/static/img/minecrafcapa.jpg', 74.99, 74.99, 0);

-- INSERT INTO jogos (id, nome, `desc`, img, preco, precod, desconto)
-- VALUES (4, 'Crimson Desert', 'Durante um ataque brutal dos Ursos Negros, Kliff perde seus camaradas Grisalhos, sua família em tudo, exceto no nome. Em meio à turbulência que domina o continente de Pywel, ele parte em busca dos sobreviventes dispersos, para reconstruir os caídos Grisalhos e reconquistar a terra natal que um dia chamaram de sua.', '/static/img/Crimson Desert.jpg', 249.90, 299.90, 17);

-- INSERT INTO jogos (id, nome, `desc`, img, preco, precod, desconto)
-- VALUES (5, 'Resident Evil Requiem', 'Resident Evil Réquiem é o nono título da série principal de Resident Evil. Prepare-se para escapar da morte em uma experiência de tirar o fôlego que irá arrepiar você até o âmago. Avanços tecnológicos combinados com a vasta experiência da equipe de desenvolvimento se unem em uma história com personagens ricos e uma jogabilidade mais imersiva do que nunca.', '/static/img/Resident Evil Requiem.jpg', 199.90, 249.90, 20);

-- INSERT INTO jogos (id, nome, `desc`, img, preco, precod, desconto)
-- VALUES (6, 'Death Stranding 2', 'Do lendário criador de jogos Hideo Kojima vem uma evolução carregada de emoção desta experiência que desafia gêneros. Ao trazer este título para o PC, a KOJIMA PRODUCTIONS trabalhou com a Nixxes Software para entregar a versão definitiva do lançamento aclamado pela crítica nos consoles.', '/static/img/Death Stranding.jpg', 254.90, 299.90, 15);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES (2, 'GTA V', 'Grand Theft Auto V acompanha a história de três criminosos com vidas bem diferentes em Los Santos. Michael (um ex-assaltante rico), Franklin (um jovem em busca de grana) e Trevor (um psicopata imprevisível) se unem. Juntos, eles planejam e executam uma série de grandes e perigosos assaltos para garantir a própria sobrevivência. O jogo mistura ação intensa, um vasto mundo aberto para explorar e uma forte crítica à sociedade moderna.', '/static/img/gtav.png', '["Acao", "Aventura"]', '["PC", "Playstation", "XBOX"]', 79.90, 79.90, 0);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES (3, 'Call of Duty', 'Modern Warfare 3 acompanha a Força-Tarefa 141 na caçada implacável contra o terrorista Vladimir Makarov. O capitão Price e sua equipe lutam para impedir uma Terceira Guerra Mundial que ameaça consumir o planeta. O jogo entrega uma campanha intensa com batalhas urbanas e missões de combate aberto muito mais dinâmicas. É o desfecho explosivo de uma das sagas mais icônicas e cheias de ação do mundo dos jogos de tiro.', '/static/img/MWIII_Capa.png', '["Acao"]', '["PC", "Playstation", "XBOX"]', 199.90, 199.90, 0);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES (4, 'Minecraft', 'Minecraft é um jogo de mundo aberto onde tudo é feito de blocos que podem ser quebrados e reconstruídos. Sem regras fixas, você pode explorar cenários infinitos, coletar recursos e criar ferramentas para sobreviver. O foco do jogo varia entre erguer construções grandiosas e enfrentar criaturas perigosas que surgem à noite. No fim das contas, o verdadeiro objetivo é usar a criatividade para moldar o próprio universo.', '/static/img/minecrafcapa.jpg', '["Aventura", "Estrategia"]', '["PC", "Playstation", "XBOX"]', 74.99, 74.99, 0);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES (5, 'Crimson Desert', 'Durante um ataque brutal dos Ursos Negros, Kliff perde seus camaradas Grisalhos, sua família em tudo, exceto no nome. Em meio à turbulência que domina o continente de Pywel, ele parte em busca dos sobreviventes dispersos, para reconstruir os caídos Grisalhos e reconquistar a terra natal que um dia chamaram de sua.', '/static/img/Crimson Desert.jpg', '["Acao", "RPG"]', '["PC", "Playstation", "XBOX"]', 299.90, 249.90, 17);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES (6, 'Resident Evil Requiem', 'Resident Evil Réquiem é o nono título da série principal de Resident Evil. Prepare-se para escapar da morte em uma experiência de tirar o fôlego que irá arrepiar você até o âmago. Avanços tecnológicos combinados com a vasta experiência da equipe de desenvolvimento se unem em uma história com personagens ricos e uma jogabilidade mais imersiva do que nunca.', '/static/img/Resident Evil Requiem.jpg', '["Acao", "Aventura"]', '["PC", "Playstation", "XBOX"]', 249.90, 199.90, 20);

INSERT INTO jogos (id, nome, `desc`, img, categoria, plataforma, preco, precod, desconto)
VALUES (7, 'Death Stranding 2', 'Do lendário criador de jogos Hideo Kojima vem uma evolução carregada de emoção desta experiência que desafia gêneros. Ao trazer este título para o PC, a KOJIMA PRODUCTIONS trabalhou com a Nixxes Software para entregar a versão definitiva do lançamento aclamado pela crítica nos consoles.', '/static/img/Death Stranding.jpg', '["Aventura"]', '["PC", "Playstation"]', 299.90, 254.90, 15);


UPDATE jogos
    SET preco = 299.90,
        precod = 254.90
    WHERE id = 7