import { reactive, readonly } from "vue";

const state = reactive({
  clicked: null,
  animelist: [
    {
      id: 1, season: "Season 1", nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Ação, Fantasia, Comédia", episodios: "24 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "Segunda-feira", img: "https://animeanime.global/wp-content/uploads/2021/09/431140.jpg", vid: "https://www.youtube-nocookie.com/embed/5vIGYsurv3Y?enablejsapi=1", sinopse: "Música é a luz que ilumina o coração das pessoas -- e esta 'luz' de repente é roubada do mundo. O mundo mudou na noite que o Meteorito negro Kuroya caiu do céu. Monstros grotescos conhecidos como D2 emergiram do meteorito e começaram a dominar a terra e as pessoas. Ao passo que os D2 foram atraídos pelas melodias tocadas pelas pessoas, aos poucos a própria música foi se tornando um tabu. Mas, aqueles que se opõem aos monstros apareceram. São 'Musicarts', garotas que extraem poder da música. Elas possuem as grandes óperas e partituras musicais da história humana e as usam contra os D2.",
    },

    {
      id: 2, season: "Season 1", nomejp: "Mieruko-chan", nomeing: "Mieruko-chan", disponibilidade: "Funimation", genero: "Comédia, Horror", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/mieruko-chan/?qid=", epnovo: "segunda", img: "https://static.zerochan.net/Mieruko-chan.600.3391309.jpg", vid: "https://www.youtube-nocookie.com/embed/GfR0u_71jRA?enablejsapi=1", sinopse: "A Miko poder ver espíritos, mas ela decidiu nunca, sob nenhuma condição, reconhecer a presença dos horríveis fantasmas. Esse foi o plano escolhido por ela, mas os resultados podem ser assustadores e...hilários.",
    },

    {
      id: 3, season: "Season 1", nomejp: "Hepburn: Eiti Shikkusuy", nomeing: "86 EIGHTY-SIX", disponibilidade: "Crunchyroll", genero: "Drama", episodios: "23 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/86-eighty-six", epnovo: "segunda", img: "https://cdn.myanimelist.net/images/anime/1987/117507.jpg", vid: "https://www.youtube-nocookie.com/embed/fQoxKVLkrEY?enablejsapi=1", sinopse: "Juggernauts, os drones não-tripulados de guerra, desenvolvidos pela República de San Magnolia para conter os ataques dos Legion, os drones autônomos do fronteiriço Império de Giad. Mas os Juggernauts são não-tripulados apenas para a mídia. Na realidade, eles são pilotados pelos Eighty-sixers - humanos tratados como inferiores, e usados como meras ferramentas. Shin é o capitão do Esquadrão Spearhead, lutando num campo de batalha onde apenas a morte o espera. Lena é uma soldada de elite, encarregada das operações de campo e determinada a tratar os Eighty-sixers com humanidade.",
    },

    {
      id: 4, season: "Season 1", nomejp: "Guranburu", nomeing: "Grand Blue Dreaming", disponibilidade: "Amazon Prime", genero: "Comédia", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.primevideo.com/detail/0R9VJMVT7G1I5K03IUINLFHRBO/ref=atv_hm_hom_1_c_7d0kid_2_1", epnovo: "Finalizado", img: "https://animefire.net/img/animes/grand-blue-large.webp?v=1", vid: "https://www.youtube-nocookie.com/embed/7ygvyKSnmkI?enablejsapi=1", sinopse: "Quando Iori Kitahara vai para a faculdade, ele decide morar na Azul Grandioso, a loja de mergulho de seu tio em Izu. Iori quer vivenciar a vida na faculdade cercado pelo estrondo das ondas, sol ardente e sua prima fofinha que mora com ele! Porém, Iori esbarra em um grupo de valentões jogando pedra-papel-e-tesoura de strip-tease e acaba entrando no Peek-a-Boo, o clube de mergulho da faculdade!",
    },

    {
      id: 5, season: "Season 1", nomejp: "Saihate no Paladin", nomeing: "The Faraway Paladin", disponibilidade: "Crunchyroll", genero: "Aventura, Fantasia", episodios: "Unknown", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/the-faraway-paladin", epnovo: "segunda", img: "https://m.media-amazon.com/images/M/MV5BYjAwMTU3YTEtNTQ1NS00MzY5LTlmYzItNmI5OTRiZDIxZTdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", vid: "https://www.youtube-nocookie.com/embed/OfEv9N-E0wE?enablejsapi=1", sinopse: "Uma cidade dos mortos, destruída há muito tempo... Nesta cidade afastada de todos, há uma única criança viva, Will. O menino é criado por três mortos vivos: Blood, um espadachim esqueleto; Mary, uma freira múmia; e Gus, um mago fantasma. Ele é criado por eles recebendo ensinamentos e amor. Mas um dia o jovem começa a ter dúvidas. 'Quem é este 'eu'?' Assim os mistérios dessa cidade longínqua passam a ser desvendados por Will. O amor e a misericórdia dos deuses bons. A paranóia e a loucura dos deuses maus. E ao saber de tudo isso, o jovem começa o caminho rumo a se tornar um paladino.",
    },

    {
      id: 6, season: "Season 1", nomejp: "Maburavu orutaneitivu", nomeing: "Muv-Luv Alternative", disponibilidade: "Crunchyroll", genero: "Mecha, Militar", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/muv-luv-alternative", epnovo: "segunda", img: "https://cdn.myanimelist.net/images/anime/1916/118439.jpg", vid: "https://www.youtube-nocookie.com/embed/ftuD73sXiHU?enablejsapi=1", sinopse: "Uma história dos laços entre aqueles que lutam, em um mundo pressionado aos seus limites. Em um dos inúmeros mundos paralelos que existem ao longo do tempo espacial, a humanidade travou uma guerra de décadas contra os BETA, invasores extraterrestres hostis, utilizando máquinas humanóides de combate chamadas Tactical Surface Fighters. Esta é uma história de como a humanidade vive e morre enquanto está à beira da extinção.",
    },

    {
      id: 7, season: "Season 1", nomejp: "Sekai Saikō no Ansatsusha", nomeing: "The World's Best Assassin", disponibilidade: "Crunchyroll", genero: "Ação", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat", epnovo: "segunda", img: "https://blogs.opovo.com.br/tomodachinerds/wp-content/uploads/sites/102/2021/02/ansatsukizoku01.jpg", vid: "https://www.youtube-nocookie.com/embed/0PzC2F-tiME?enablejsapi=1", sinopse: "O assassino número um do mundo foi reencarnado como o filho mais velho de uma família de assassinos aristocratas. Em troca de reencarnar em outro mundo, uma deusa lhe impôs uma condição. 'Mate o Herói que pela profecia destruirá o mundo'. Esta deveria ser a missão em sua nova vida. O efeito sinérgico do vasto conhecimento e experiência que ele adquiriu e que tornou possível todo tipo de assassinatos no mundo moderno, e as técnicas secretas e mágicas da família de assassinos mais poderosa do mundo da fantasia o transformam no maior assassino de todos os tempos.",
    },

    {
      id: 8, season: "Season 1", nomejp: "Kobayashi-san Chi no Maid Dragon", nomeing: "Miss Kobayashi's Dragon Maid", disponibilidade: "Crunchyroll", genero: "Romance, Comédia, Fantasia", episodios: "25 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/miss-kobayashis-dragon-maid", epnovo: "segunda", img: "https://cdn.myanimelist.net/images/anime/5/85434.jpg", vid: "https://www.youtube-nocookie.com/embed/YVAnyHveq6E?enablejsapi=1", sinopse: "A Srta. Kobayashi é uma funcionária comum que leva uma vida bem banal e mora sozinha em um pequeno apartamento - até que ela salva a vida de um dragão fêmea em apuros. Esse dragão, chamado Tohru, é capaz de se transformar numa adorável garota humana (com chifres e um longo rabo) que fará de tudo para retribuir seu gesto, queira a Srta. Kobayashi ou não! Com esse persistente e amoroso dragão como colega de apartamento, tudo fica mais difícil, e a vida normal da Srta. Kobayashi está prestes a ir pelos ares!",
    },

    {
      id: 9, season: "Season 1", nomejp: "Shinka no Mi", nomeing: "The Fruit of Evolution", disponibilidade: "Crunchyroll", genero: "Fantasia, Romance", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/the-fruit-of-evolution-before-i-knew-it-my-life-had-it-made", epnovo: "segunda", img: "https://animesbr.biz/wp-content/uploads/2021/10/jiJZan11JtZcR76bihEtwjsLOBM.jpg", vid: "https://www.youtube-nocookie.com/embed/P441kTYtx1Q?enablejsapi=1", sinopse: "O estudante colegial Hiiragi Seiichi sofre bullying de seus colegas por ser um 'perdedor'. Um dia, toda a escola é subitamente transportada para um mundo de video game com espadas e magia. Quando ele acidentalmente come o 'Fruto da Evolução', sua vida de sucesso como um 'vencedor' começa.",
    },

    {
      id: 10, season: "Season 1", nomejp: "Bokutachi no Rimeiku", nomeing: "Remake Our Life!", disponibilidade: "Crunchyroll", genero: "Drama, Romance", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/remake-our-life", epnovo: "Finalizado", img: "https://m.media-amazon.com/images/M/MV5BNjJmNDU0MzUtOWY3ZS00MDQ5LTg3OTQtODRiYWNmNzkxZTNiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", vid: "https://www.youtube-nocookie.com/embed/T1kzGVmqdmY?enablejsapi=1", sinopse: "Kyoya Hashiba é um diretor de videogames sem rumo. Sua empresa faliu, seu projeto foi cancelado, e ele está desempregado. Após sonhar envolto nas obras dos grandes criadores, ele acordou e se viu dez anos no passado, ainda na época de faculdade. Ele decide tomar outro rumo em sua carreira, se matriculando num curso de arte e passando a morar numa república com mais três pessoas, num esforço para refazer sua vida!",
    },

    {
      id: 11, season: "Season 1", nomejp: "Tōkyō Ribenjāzu", nomeing: "Tokyo Revengers", disponibilidade: "Crunchyroll", genero: "Drama, Ação", episodios: "24 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/tokyo-revengers", epnovo: "Finalizado", img: "https://cdn.aprendejaponeshoy.com/19815/tokyo-revengers-tv-anime-official-guide-book.jpg", vid: "https://www.youtube-nocookie.com/embed/ZUzQQAZZqO4?enablejsapi=1", sinopse: "Takemichi Hanagaki é um desempregado que sobrevive de bicos e está na fossa. Ele descobriu que Hinata Tachibana, sua primeira e última namorada, com quem namorou no fundamental, foi morta pela impiedosa Gangue Manji de Tóquio. No dia seguinte à notícia, ele está na beira da plataforma do trem e é empurrado pela multidão. Ele fecha os olhos se preparando para morrer, mas ao abrir, ele voltou no tempo para quando tinha 12 anos de idade. Agora que ele está na melhor época de sua vida, Takemichi decide se vingar de sua vida, salvando sua namorada e parando de fugir de si mesmo.",
    },

    {
      id: 12, season: "Season 5", nomejp: "Boku no Hīrō Akademia", nomeing: "My Hero Academia", disponibilidade: "Crunchyroll", genero: "Ação", episodios: "25 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/my-hero-academia", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1911/113611.jpg", vid: "https://www.youtube-nocookie.com/embed/zkGSYFke1oE?enablejsapi=1", sinopse: "Por toda a sua vida, Izuku sonhou ser um heroi — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.",
    },

    {
      id: 13, season: "Season 1", nomejp: "Tonikaku Kawaii", nomeing: "TONIKAWA: Over The Moon For You", disponibilidade: "Crunchyroll", genero: "Romance, Comédia", episodios: "13 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/tonikawa-over-the-moon-for-you", epnovo: "Finalizado", img: "https://m.media-amazon.com/images/M/MV5BZmI0OTI1OWQtYzRkNy00NGVlLWFhYzAtNzAzNWRkNjE0ZThiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", vid: "https://www.youtube-nocookie.com/embed/oEfNqrkatII?enablejsapi=1", sinopse: "A comédia sobre a vida de casados criada por Kenjiro Hata, autor de 'Hayate the Combat Butler', é finalmente adaptada para anime! Após um encontro com a misteriosa Tsukasa, Nasa Yuzaki se apaixona à primeira vista. Nasa decide se declarar pra garota, mas ela responde: 'Só vou sair com você se a gente se casar.' Assim começa a vida cativante e amorosa destes dois recém-casados!",
    },

    {
      id: 14, season: "Season 1", nomejp: "Ao-chan wa Benkyō ga Dekinai", nomeing: "Ao-chan Can't Study!", disponibilidade: "Crunchyroll", genero: "Finalizado", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/ao-chan-cant-study", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1718/98214.jpg", vid: "https://www.youtube-nocookie.com/embed/qN17SimWp0U?enablejsapi=1", sinopse: "Ao Horie é filha de um autor de ficção, que escolheu seu nome porque A significa 'apple/maçã' e O significa 'orgia'! Tentando a todo custo fugir de seu legado paternal e entrar numa universidade de prestígio, Ao deixa o romance de lado para se focar nos estudos. Só tem um problema: Kijima, um belo colega de classe, se declarou para a garota! E pra piorar, ela não consegue parar de pensar sacanagem com ele! Parece que fugir da influência do pai não será nada fácil...",
    },

    {
      id: 15, season: "Movie", nomejp: "BLACKFOX", nomeing: "BLACKFOX", disponibilidade: "Crunchyroll", genero: "Ação, Drama", episodios: "1 Episódio", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/blackfox", epnovo: "Finalizado", img: "https://m.media-amazon.com/images/M/MV5BZTc3Y2ZhYTAtMjRlZS00YTY2LWIyOWMtMmYxYjUyNzA3NzVlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", vid: "https://www.youtube-nocookie.com/embed/6Q1cIHo7SdQ?enablejsapi=1", sinopse: "Em uma residência ninja num canto escondido de uma cidade futurista, vive Rikka, a filha mais velha do clã ninja e fã apaixonada de seu pai pesquisador. Certo dia, sua vida rotineira é interrompida quando sua casa é atacada e se vê numa situação sem saída. Como ela vai superar essa crise? Corte a escuridão ao meio e torne-se 'BLACK!'",
    },

    {
      id: 16, season: "Season 1", nomejp: "Mushoku Tensei: Isekai Ittara Honki Dasu", nomeing: "Mushoku Tensei: Jobless Reincarnation", disponibilidade: "Funimation", genero: "Drama, Fantasia, Ação, Ecchi", episodios: "24 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/mushoku-tensei-jobless-reincarnation-p2/?qid=", epnovo: "Domingo", img: "https://cdn.myanimelist.net/images/anime/1028/117777.jpg", vid: "https://www.youtube-nocookie.com/embed/DTfgyQU-CDw?enablejsapi=1", sinopse: "Um fracassado de 34 anos é atropelado por um ônibus, mas sua história não acaba. Reencarnado como uma criança, ele embarcará em uma aventura épica.",
    },

    {
      id: 17, season: "Season 1", nomejp: "Nichijou", nomeing: "Nichijou - My Ordinary Life", disponibilidade: "Funimation", genero: "Comédia, Slice of Life", episodios: "26 Episódios", temporada: "Abril 2011", link: "https://www.funimation.com/shows/nichijou-my-ordinary-life/?qid=", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/3/75617.jpg", vid: "https://www.youtube-nocookie.com/embed/3od3pc8LOPs?enablejsapi=1", sinopse: "Siga as aventuras de três garotas enquanto aprendem suas lições mais importantes da maneira mais difícil. Enquanto isso, um professor dificulta a vida de um robô que só quer ser normal.",
    },

    {
      id: 18, season: "Season 1", nomejp: "Rogu Horaizun", nomeing: "Log Horizon", disponibilidade: "Funimation", genero: "Ação, Aventura, Fantasia, Isekai", episodios: "25 Episódios", temporada: "Outubro 2013", link: "https://www.crunchyroll.com/pt-br/log-horizon", epnovo: "Finalizado", img: "https://image.tmdb.org/t/p/w342/gsQCqqjUUDKcKEgWdJE4SlSNbPg.jpg", vid: "https://www.youtube-nocookie.com/embed/IG1VhJ75r8k?enablejsapi=1", sinopse: "Um dia, enquanto jogava o jogo online Elder Tales, 30.000 jogadores perceberam que estavam travados dentro do mundo do jogo. Lá, também está o jogador experiente de oito anos, Shiroe. Os jogadores travados ainda estão vivos, mas continuam lutando com os monstros. Os jogadores ainda não entenderam o que houve com eles, e voam para Akiba, a maior cidade em Tóquio, onde o caos reina.",
    },

    {
      id: 19, season: "Season 1", nomejp: "Vivy: Fluorite Eye's Song", nomeing: "Vivy: Fluorite Eye's Song", disponibilidade: "Funimation", genero: "Ação, Sci-Fi, Suspense", episodios: "13 Episódios", temporada: "Abril 2021", link: "https://www.funimation.com/shows/vivy-fluorite-eyes-song-/?qid=", epnovo: "Finalizado", img: "https://m.media-amazon.com/images/M/MV5BZjMwOWJmNDQtNWRkMC00ODhjLTgyMGEtYzI0MjU3ZjBlNTUzXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg", vid: "https://www.youtube-nocookie.com/embed/Y653dJQ_ecs?enablejsapi=1", sinopse: "Um IA chamado Matsumoto aparece antes de Vivy, a primeira IA humanoide autônoma do mundo. A missão de Matsumoto é reescrever a história junto com Vivy e impedir a guerra entre os IAs e os humanos que acontecerá um século depois.",
    },

    {
      id: 20, season: "Season 1", nomejp: "Shadō Hausu", nomeing: "Shadows House", disponibilidade: "Funimation", genero: "Slice of Life, Mistério, Sobrenatural", episodios: "13 Episódios", temporada: "Abril 2021", link: "https://www.funimation.com/shows/shadows-house/?qid=", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1424/113342.jpg", vid: "https://www.youtube-nocookie.com/embed/t7lGIJGAMm0?enablejsapi=1", sinopse: "Emilico é uma boneca viva que trabalha na Casa dos Shadows, lar de um clã misterioso e sem rosto que expressa suas emoções através dos criados.",
    },

    {
      id: 21, season: "Season 1", nomejp: "Tsuki to Laika to Nosferatu", nomeing: "Irina: The Vampire Cosmonaut", disponibilidade: "Funimation", genero: "Sci-fi, Fantasia", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/irina-the-vampire-cosmonaut/?qid=", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1393/118374.jpg", vid: "https://www.youtube-nocookie.com/embed/XaD3ebxrxqk?enablejsapi=1", sinopse: "A corrida espacial de duas superpotências dá surgimento a um projeto secreto. Um supervisor humano e uma cobaia vampiro devem alcançar uma missão experimental até as estrelas.",
    },

    {
      id: 22, season: "Season 1", nomejp: "Hori-san and Miyamura-kun", nomeing: "Horimiya", disponibilidade: "Funimation", genero: "Comédia, Romance, Slice of Life", episodios: "13 Episódios", temporada: "Janeiro 2021", link: "https://www.funimation.com/shows/horimiya/?qid=", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg", vid: "https://www.youtube-nocookie.com/embed/ELx4f6Kge3k?enablejsapi=1", sinopse: "Quando a popular Hori e o melancólico Miyamura se encontram, eles revelam seus lados ocultos. Isso pode ser o começo de algo novo?",
    },

    {
      id: 23, season: "Season 1", nomejp: "Wārudo Torigā", nomeing: "World Trigger", disponibilidade: "Crunchyroll", genero: "Ação, Sci-Fi, Sobrenatural", episodios: "73 Episódios", temporada: "Outubro 2014", link: "https://www.crunchyroll.com/world-trigger", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1783/106843.jpg", vid: "https://www.youtube-nocookie.com/embed/pqc0AS1nFlA?enablejsapi=1", sinopse: "Um portal de outra dimensão apareceu e tem saído gigantescas criaturas invencíveis de lá, as quais ameaçam toda a humanidade. A única defesa que a Terra tem é um grupo de guerreiros que vai utilizar a mesma tecnologia alienígena para revidar!",
    },

    {
      id: 24, season: "Season 1", nomejp: "Taishou Otome Otogibanashi", nomeing: "Taishou Maiden Fairytale", disponibilidade: "Funimation", genero: "Comédia, Romance, Slice of Life", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/taisho-otome-fairy-tale/", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1662/118849.jpg", vid: "https://www.youtube-nocookie.com/embed/9Gztgc8BFLU?enablejsapi=1", sinopse: "Tamahiko Shima foi exilado para o interior por causa de sua deficiência, mas a chegada repentina de uma noiva arranjada causa uma reviravolta em sua vida solitária.",
    },

    {
      id: 25, season: "Season 1", nomejp: "Komi-san wa, Comyushou desu.", nomeing: "Komi-san wa, Communication Shougai desu.", disponibilidade: "Netflix", genero: "Comédia, Slice of Life", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.netflix.com/br/title/81228573", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1899/117237.jpg", vid: "https://www.youtube-nocookie.com/embed/5ERiF9VmIUg?enablejsapi=1", sinopse: "Komi é linda, mas é tímida e antissocial. Na escola, ela conta com a ajuda de Tadano para resolver esse problema e estabelece uma meta ambiciosa: fazer 100 amigos.",
    },

    {
      id: 26, season: "Season 1", nomejp: "Purachina Endo", nomeing: "Platinum End", disponibilidade: "Crunchyroll", genero: "Drama, Sobrenatural", episodios: "24 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/platinum-end", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1992/116576.jpg", vid: "https://www.youtube-nocookie.com/embed/Lj5oHNCz8Ng?enablejsapi=1", sinopse: "O seguinte programa contém temas adultos e cenas de violência e suicídio que podem não ser adequadas para alguns espectadores e são inapropriadas para crianças. O conteúdo do programa é direcionado apenas para públicos adultos. Se você ou alguém próximo precisa de alguém para conversar, entre em contato com um centro de ajuda na sua região. 'Eu vou te dar esperança de viver' Mirai Kakehashi perdeu os pais em um acidente e viveu em tristeza com os parentes que o adoraram. Tendo perdido a esperança, ele pulou do telhado de um prédio no dia da sua formatura. Foi aí que conheceu um anjo.",
    },

    {
      id: 27, season: "Season 1", nomejp: "Senpai ga Uzai Kouhai no Hanashi", nomeing: "My Senpai is Annoying", disponibilidade: "Funimation", genero: "Comédia, Romance, Slice of Life", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/my-senpai-is-annoying/", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1619/118820.jpg", vid: "https://www.youtube-nocookie.com/embed/NsungpZlxrM?enablejsapi=1", sinopse: "Ser vista como uma vendedora plena não é fácil para Igarashi Futaba, pois seu veterano, Harumi, a trata como criança.",
    },

    {
      id: 28, season: "Season 1", nomejp: "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita", nomeing: "Banished from the Hero's Party, I Decided to Live a Quiet Life in the Countryside", disponibilidade: "Funimation", genero: "Aventura, Fantasia, Romance, Slice of Life", episodios: "13 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/banished-from-the-heros-party-i-decided-to-live-a-quiet-life-in-the-countryside", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1723/117854.jpg", vid: "https://www.youtube-nocookie.com/embed/KgYqDy84WGY?enablejsapi=1", sinopse: "Após ser traído pelos Heróis, Red espera poder recomeçar em uma pequena cidade... mas manter segredo de seu passado não será fácil.",
    },

    {
      id: 29, season: "Season 2", nomejp: "Isekai Shokudou 2", nomeing: "Restaurant to Another World 2", disponibilidade: "Crunchyroll", genero: "Fantasia, Comida, Slice of Life", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/restaurant-to-another-world", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1777/117885.jpg", vid: "https://www.youtube-nocookie.com/embed/hJrAOvmzMlo?enablejsapi=1", sinopse: "No subsolo de um prédio de vários andares, na esquina de uma rua comercial perto do distrito comercial, existe um certo restaurante. Um restaurante histórico, de 70 anos de idade, conhecido pela placa com a imagem de um gato: o Culinária Ocidental Nekoya. Durante a semana, é um restaurante como qualquer outro; contudo, aos sábados, ele abre apenas para alguns clientes bastantes diferentes. Nesse horário, portas para várias áreas de um mundo paralelo se abrem, e clientes de várias raças e culturas diferentes adentram o lugar.",
    },

    {
      id: 30, season: "Season 1", nomejp: "Burū Piriodo", nomeing: "Blue Period", disponibilidade: "Netflix", genero: "Drama, Slice of Life", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.netflix.com/br/title/81318842", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1757/116931.jpg", vid: "https://www.youtube-nocookie.com/embed/IV0-SYn3YuM?enablejsapi=1", sinopse: "Entediado com a vida, o adolescente Yatora Yaguchi mergulha no maravilhoso mundo da arte depois de encontrar inspiração em um quadro.",
    },
    {
      id: 31, season: "Season 1", nomejp: "Tasogare Otome x Amnesia", nomeing: "Dusk Maiden of Amnesia", disponibilidade: "Animefire", genero: "Horror, Mistério, Romance, Sobrenatural", episodios: "12 Episódios", temporada: "Abril 2012", link: "https://animefire.net/animes/tasogare-otome-x-amnesia-todos-os-episodios", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/6/65883.jpg", vid: "https://www.youtube-nocookie.com/embed/gNtHkMTYvUk?enablejsapi=1", sinopse: "Na Escola Saikyo, há um rumor de uma garota fantasma (Yurei) que assombra a escola, 'Yuuko-san' que na sua adolescência, foi abandonada para morrer no edifício do antigo prédio. Niiya Teiichi visita o edifício e conhece a bela e misteriosa garota, chamada Yuuko Kanoe e descobre que ela é o fantasma das histórias, que morreu 60 anos atrás. Ela não tem memória alguma do passado que viveu então Teiichi e o Clube de Investigações Paranormais, fundado por Okonogi, Teiichi, Yuuko e Kirie começam a investigar o mistério.",
    },
  ],
  sugest: [
    {
      id: 16, season: "Season 1", nomejp: "Mushoku Tensei: Isekai Ittara Honki Dasu", nomeing: "Mushoku Tensei: Jobless Reincarnation", disponibilidade: "Funimation", genero: "Drama, Fantasia, Ação, Ecchi", episodios: "24 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/mushoku-tensei-jobless-reincarnation-p2/?qid=", epnovo: "Domingo", img: "https://cdn.myanimelist.net/images/anime/1028/117777.jpg", vid: "https://www.youtube-nocookie.com/embed/DTfgyQU-CDw?enablejsapi=1",
    },

    {
      id: 3, season: "Season 1", nomejp: "Hepburn: Eiti Shikkusuy", nomeing: "86 EIGHTY-SIX", disponibilidade: "Crunchyroll", genero: "Drama", episodios: "23 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/86-eighty-six", epnovo: "segunda", img: "https://cdn.myanimelist.net/images/anime/1987/117507.jpg", vid: "https://www.youtube-nocookie.com/embed/fQoxKVLkrEY",
    },

    {
      id: 23, season: "Season 1", nomejp: "Wārudo Torigā", nomeing: "World Trigger", disponibilidade: "Crunchyroll", genero: "Ação, Sci-Fi, Sobrenatural", episodios: "73 Episódios", temporada: "Outubro 2014", link: "https://www.crunchyroll.com/world-trigger", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1783/106843.jpg", vid: "https://www.youtube-nocookie.com/embed/pqc0ASeason 1nFlA",
    },

    {
      id: 1, season: "Season 1", nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Ação", episodios: "24 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "Segunda-feira", img: "https://animeanime.global/wp-content/uploads/2021/09/431140.jpg", vid: "https://www.youtube-nocookie.com/embed/0lNjes4la9U",
    },

    {
      id: 16, season: "Season 1", nomejp: "Sekai Saikō no Ansatsusha", nomeing: "The World's Best Assassin", disponibilidade: "Crunchyroll", genero: "Ação", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat", epnovo: "segunda", img: "https://blogs.opovo.com.br/tomodachinerds/wp-content/uploads/sites/102/2021/02/ansatsukizoku01.jpg", vid: "https://www.youtube-nocookie.com/embed/0PzC2F-tiME",
    },

    {
      id: 2, season: "Season 1", nomejp: "Mieruko-chan", nomeing: "Mieruko-chan", disponibilidade: "Funimation", genero: "Comédia, Horror", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/mieruko-chan/?qid=", epnovo: "segunda", img: "https://static.zerochan.net/Mieruko-chan.600.3391309.jpg", vid: "https://www.youtube-nocookie.com/embed/?enablejsapi=1",
    },

    {
      id: 18, season: "Season 1", nomejp: "Rogu Horaizun", nomeing: "Log Horizon", disponibilidade: "Funimation", genero: "Ação, Aventura, Fantasia, Isekai", episodios: "25 Episódios", temporada: "Outubro 2013", link: "https://www.funimation.com/shows/log-horizon-destruction-of-the-round-table/?qid=", epnovo: "Finalizado", img: "https://image.tmdb.org/t/p/w342/gsQCqqjUUDKcKEgWdJE4SlSNbPg.jpg", vid: "https://www.youtube-nocookie.com/embed/IG1VhJ75r8k",
    },

    {
      id: 21, season: "Season 1", nomejp: "Tsuki to Laika to Nosferatu", nomeing: "Irina: The Vampire Cosmonaut", disponibilidade: "Funimation", genero: "Sci-fi, Fantasia", episodios: "12 Episódios", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/irina-the-vampire-cosmonaut/?qid=", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1393/118374.jpg", vid: "https://www.youtube-nocookie.com/embed/XaD3ebxrxqk",
    },

    {
      id: 22, season: "Season 1", nomejp: "Hori-san and Miyamura-kun", nomeing: "Horimiya", disponibilidade: "Funimation", genero: "Comédia, Romance, Slice of Life", episodios: "13 Episódios", temporada: "Janeiro 2021", link: "https://www.funimation.com/shows/horimiya/?qid=", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg", vid: "https://www.youtube-nocookie.com/embed/CNSeason 2IZQZcyI",
    },

    {
      id: 23, season: "Season 1", nomejp: "Wārudo Torigā", nomeing: "World Trigger", disponibilidade: "Crunchyroll", genero: "Ação, Sci-Fi, Sobrenatural", episodios: "73 Episódios", temporada: "Outubro 2014", link: "https://www.crunchyroll.com/world-trigger", epnovo: "Finalizado", img: "https://cdn.myanimelist.net/images/anime/1783/106843.jpg", vid: "https://www.youtube-nocookie.com/embed/pqc0ASeason 1nFlA",
    },
  ],
  status: [
    {
      id: 1, nome: "Assistindo",
    },
    {
      id: 2, nome: "Pausei",
    },
    {
      id: 3, nome: "Larguei, não gostei",
    },
    {
      id: 4, nome: "Pretendo ver",
    },
    {
      id: 5, nome: "Finalizado",
    },
  ],
});

const actions = {};

const mutations = {
  setClicked(card) {
    state.clicked = card;
  },
};

export default function useCards() {
  return readonly({
    state,
    actions,
    mutations,
  });
}
