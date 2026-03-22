const WAIFUS = [
    // ═══════════════════════════════
    // YANDERE SIMULATOR
    // ═══════════════════════════════
    {
        nom: "Ryoba Aishi",
        univers: "Yandere Simulator",
        rarete: "LEGENDAIRE",
        type: "Ombre",
        description: `Ryoba Aishi était une lycéenne japonaise des années 80, apparemment douce et charmante, admirée de tous dans son école. Mais sous ce masque parfait se cachait une yandere accomplie — une femme capable d'éliminer sans hésitation quiconque s'interposait entre elle et l'homme qu'elle aimait. Elle a séduit, manipulé et tué dans l'ombre pendant toute sa jeunesse, sans jamais être soupçonnée. Elle est la mère d'Ayano Aishi, à qui elle a transmis cette nature obsessionnelle. Quand l'invasion a frappé, Ryoba a traversé le chaos avec le même sourire serein qu'elle arborait dans les couloirs de son lycée. Pour elle, survivre à l'apocalypse n'était qu'une question de méthode — la même méthode froide et calculatrice qu'elle appliquait à tout le reste. Dans les tunnels de Starlight, elle est respectée et crainte. Personne ne sait exactement combien de personnes elle a éliminées depuis l'invasion, et personne n'ose le demander.`,
        apparence: "Cheveux noirs longs et lisses tombant dans le dos, yeux d'un noir profond qui semblent regarder à travers vous plutôt que vers vous. Sourire permanent et légèrement déplacé dans toutes les situations. Elle porte les restes soigneusement entretenus de son uniforme scolaire des années 80, refusant de le remplacer.",
        stats: { hp: 280, def: 60, spd: 90, crit: 85, mgk: 70, res: 65 },
        competences: [
            { nom: "Obsession Maternelle", type: "passif", description: "ATK +20% contre une cible désignée, bonus doublé si Ayano est dans l'équipe", niveauRequis: 1 },
            { nom: "Élimination Silencieuse", type: "actif", description: "Attaque furtive infligeant de lourds dégâts ignorant 30% de la DEF ennemie", niveauRequis: 10 },
            { nom: "Manipulation Experte", type: "actif", description: "Réduit DEF et SPD ennemie de 30% pendant 3 tours", niveauRequis: 25 },
            { nom: "Amour des Années 80", type: "ultime", description: "Dégâts massifs + immobilise la cible 2 tours + applique saignement sévère", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ayano Aishi",
        univers: "Yandere Simulator",
        rarete: "EPIQUE",
        type: "Ombre",
        description: `Ayano Aishi est la fille de Ryoba — héritière d'une nature yandere transmise de mère en fille. Contrairement à sa mère qui était née avec cette obsession, Ayano est née vide : incapable de ressentir la moindre émotion, elle traversait sa vie comme une coquille creuse. Jusqu'au jour où elle a croisé le regard de Taro Yamada dans un couloir de lycée, et pour la première fois de son existence, elle a ressenti quelque chose. Elle a fait tout ce qu'il fallait pour le garder — éliminant dans l'ombre chaque rivale, chaque menace, chaque obstacle. L'invasion dimensionnelle a emporté Taro avant qu'elle puisse le sauver. Depuis, Ayano erre dans les ruines avec son couteau rouillé et son uniforme lacéré, cherchant désespérément à retrouver cette sensation d'être vivante. Quiconque lui rappelle Taro gagne sa protection absolue. Quiconque menace cette personne signe son arrêt de mort.`,
        apparence: "Longs cheveux noirs en queue de cheval basse. Regard habituellement vide et absent qui s'illumine d'une lueur dangereuse en combat. Uniforme scolaire lacéré et taché, couteau rouillé toujours dissimulé sur elle. Des cercles noirs sous les yeux trahissent des nuits sans sommeil.",
        stats: { hp: 220, def: 45, spd: 80, crit: 75, mgk: 55, res: 50 },
        competences: [
            { nom: "Vide Émotionnel", type: "passif", description: "CRIT +15% et ATK +10% quand HP < 50%, immunité à la peur", niveauRequis: 1 },
            { nom: "Couteau Rouillé", type: "actif", description: "Attaque rapide et précise appliquant saignement pendant 3 tours", niveauRequis: 10 },
            { nom: "Stalking Obsessionnel", type: "actif", description: "Révèle toutes les stats, faiblesses et prochaines actions ennemies", niveauRequis: 25 },
            { nom: "Pour Toi Seulement", type: "ultime", description: "Sacrifie 30% de ses HP pour tripler son ATK pendant 3 tours — elle sourit pour la première fois", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // VOCALOID
    // ═══════════════════════════════
    {
        nom: "Hatsune Miku",
        univers: "Vocaloid",
        rarete: "MYTHIQUE",
        type: "Son",
        description: `Hatsune Miku était la vocaloid la plus célèbre du monde — une intelligence artificielle vocale projetée en hologramme devant des millions de fans, chantant dans des stades entiers avec une voix synthétique devenue iconique. Elle n'était pas censée être une personne. Mais des millions de gens l'ont aimée, lui ont écrit des chansons, lui ont donné une âme à force de croire en elle. Quand l'invasion a frappé et que les réseaux mondiaux ont commencé à s'effondrer, le signal de Miku a continué à émettre — survivant là où tout le reste mourait. Des survivants ont découvert que sa fréquence vocale particulière repoussait physiquement les entités envahissantes. Personne ne comprend pourquoi. Miku elle-même ne comprend pas pourquoi. Elle existe maintenant sous une forme hybride entre hologramme et entité physique, chantant dans les tunnels de Starlight pour des survivants qui pleurent en l'écoutant — pas de tristesse, mais de quelque chose ressemblant à de l'espoir.`,
        apparence: "Twin-tails turquoise luminescentes flottant légèrement comme sous l'eau. Tenue futuriste holographique partiellement matérialisée — certaines parties de son corps sont translucides et laissent voir des fragments de lumière. Ses yeux brillent d'un cyan intense dans l'obscurité des tunnels.",
        stats: { hp: 300, def: 70, spd: 95, crit: 80, mgk: 185, res: 125 },
        competences: [
            { nom: "Fréquence Sacrée", type: "passif", description: "MGK +25%, immunité aux silences, les entités de l'invasion subissent 10% de dégâts supplémentaires", niveauRequis: 1 },
            { nom: "World is Mine", type: "actif", description: "Dégâts soniques touchant simultanément tous les ennemis présents", niveauRequis: 10 },
            { nom: "Chant de Résonance", type: "actif", description: "Soigne toute l'équipe de 20% de leurs HP maximum", niveauRequis: 25 },
            { nom: "Signal du Dernier Espoir", type: "ultime", description: "Dégâts magiques dévastateurs sur tous les ennemis + annule toutes leurs buffs actives + soigne l'équipe", niveauRequis: 50 },
        ]
    },
    {
        nom: "Kasane Teto",
        univers: "Vocaloid",
        rarete: "LEGENDAIRE",
        type: "Son",
        description: `Kasane Teto est née d'un canular internet — un groupe d'internautes japonais l'avait créée de toutes pièces en 2008 comme fausse candidate à un concours de vocaloid, inventant son histoire, son apparence, sa personnalité. Le canular a tellement bien fonctionné que Teto est devenue réelle à force d'être crue. Elle existe dans cet espace étrange entre le fictif et le réel, entre l'humain et la chimère — ses oreilles et ses caractéristiques physiques uniques témoignent de sa nature hybride. Sa voix en spirale caractéristique crée des interférences dans les fréquences de communication des entités envahissantes, ce qui la rend précieuse dans la résistance. Elle est imprévisible, espiègle, et porte toujours une baguette de pain fossilisée comme arme de prédilection — une obsession inexpliquée qu'elle a depuis sa création. Certains murmurent que dans les bonnes circonstances, sa puissance dépasse même celle de Miku.`,
        apparence: "Twin-tails roses en spirale caractéristiques défiants la gravité. Oreilles de chimère rosées légèrement pointues. Uniforme rouge et blanc abîmé mais porté avec fierté. Sourire espiègle permanent. Une baguette de pain fossilisée accrochée dans le dos comme une arme. Une aura rose crépite autour d'elle quand elle chante à pleine puissance.",
        stats: { hp: 320, def: 75, spd: 90, crit: 85, mgk: 175, res: 115 },
        competences: [
            { nom: "Chimère Née du Mensonge", type: "passif", description: "MGK +20%, 20% de chance de brouiller et annuler les attaques ennemies, immunité aux illusions", niveauRequis: 1 },
            { nom: "Baguette Légendaire", type: "actif", description: "Frappe dévastatrice ignorant toutes les buffs défensives ennemies", niveauRequis: 10 },
            { nom: "Interférence Sonique Avancée", type: "actif", description: "Réduit SPD, MGK et DEF ennemies de 25% pendant 3 tours", niveauRequis: 25 },
            { nom: "Chimère Déchaînée", type: "ultime", description: "5 frappes consécutives aux dégâts croissants + paralysie finale sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Kagamine Rin",
        univers: "Vocaloid",
        rarete: "RARE",
        type: "Foudre",
        description: `Rin et Len Kagamine étaient deux vocaloids miroirs — conçus comme les deux faces d'une même pièce, un duo inséparable dont les voix se complétaient parfaitement. Ils partageaient tout : les scènes, les chansons, l'existence. Quand l'invasion dimensionnelle a frappé, quelque chose dans la fracture entre les mondes les a séparés. Rin ignore si Len est vivant, mort, ou piégé quelque part de l'autre côté. Cette douleur s'est transformée en une rage électrique qui crépite littéralement autour d'elle, des étincelles parcourant sa peau aux moments d'émotion intense. Elle chantait des histoires de sacrifice et d'amour dans l'ancien monde. Aujourd'hui elle les vit, combattant dans les tunnels avec une énergie désespérée, refusant catégoriquement d'accepter que son miroir soit perdu.`,
        apparence: "Courts cheveux blonds avec un grand nœud blanc légèrement de travers. Tenue jaune et blanche déchirée aux épaules laissant voir des éclairs d'électricité statique qui parcourent sa peau par moments. Regard déterminé teinté d'un désespoir mal dissimulé.",
        stats: { hp: 170, def: 35, spd: 85, crit: 70, mgk: 100, res: 60 },
        competences: [
            { nom: "Rage du Miroir Brisé", type: "passif", description: "15% de chance de paralyser un tour à chaque attaque, ATK +10% en permanence", niveauRequis: 1 },
            { nom: "Roadroller", type: "actif", description: "Dégâts de zone électriques frappant tous les ennemis simultanément", niveauRequis: 10 },
            { nom: "Gemini", type: "actif", description: "Double attaque ultra-rapide avec bonus CRIT garanti", niveauRequis: 25 },
            { nom: "Adolescence", type: "ultime", description: "Transforme sa douleur en puissance brute — ATK x3 et CRIT +50% pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Neru Akita",
        univers: "Vocaloid",
        rarete: "PEU_COMMUNE",
        type: "Neutre",
        description: `Neru Akita est une vocaloid non-officielle créée par des fans en réaction aux idoles trop parfaites — elle représentait le cynisme, la rébellion passive, le désintérêt assumé. Son téléphone collé à la main et son expression perpétuellement ennuyée en faisaient une figure iconique du "je m'en fous" élevé au rang d'art. L'invasion l'a surprise en plein scrolling. Elle a survécu grâce à une méfiance naturelle envers tout et tout le monde qui s'est avérée être une stratégie de survie redoutablement efficace. Dans les tunnels de Starlight, elle est celle qui repère les pièges en premier — parce qu'elle suppose toujours que quelque chose va mal tourner. Son téléphone ne capte plus rien depuis des années mais elle le garde. On ne lui pose pas de questions là-dessus.`,
        apparence: "Cheveux jaunes en queue de côté rebelle. Expression perpétuellement ennuyée. Téléphone vintage toujours dans la main, écran fissuré. Vêtements sombres pratiques — contrairement aux autres Vocaloids, elle a depuis longtemps abandonné tout uniforme d'origine.",
        stats: { hp: 140, def: 30, spd: 65, crit: 45, mgk: 60, res: 45 },
        competences: [
            { nom: "Je M'en Fous", type: "passif", description: "Immunité complète aux debuffs mentaux, à la peur et à la confusion", niveauRequis: 1 },
            { nom: "Coup de Téléphone", type: "actif", description: "Frappe avec son téléphone — dégâts bonus contre les ennemis buffs", niveauRequis: 10 },
            { nom: "Flemme Stratégique", type: "actif", description: "Esquive automatiquement la prochaine attaque et contre-attaque immédiatement", niveauRequis: 25 },
            { nom: "Ras le Bol Total", type: "ultime", description: "Libère toute sa frustration accumulée — dégâts proportionnels aux dégâts subis dans le combat", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // KAKEGURUI
    // ═══════════════════════════════
    {
        nom: "Yumeko Jabami",
        univers: "Kakegurui",
        rarete: "WAIFU",
        type: "Chaos",
        description: `Yumeko Jabami était une élève transférée à Hyakkaou Private Academy — une école d'élite japonaise où le rang social était déterminé par les jeux d'argent. Mais Yumeko n'était pas là pour gagner. Elle était là pour ressentir. Fille d'une famille noble ruinée par le jeu, elle avait développé une addiction au frisson du risque pur qui dépassait tout désir de victoire ou de richesse. Ses yeux rouges s'illuminaient d'une joie presque surnaturelle face aux enjeux impossibles — plus la mise était haute, plus elle risquait de tout perdre, plus elle était heureuse. L'invasion dimensionnelle a été pour elle la mise ultime : la vie elle-même comme enjeu. Elle l'a accueillie avec un sourire extasié. Dans les tunnels de Starlight, Yumeko combat comme elle jouait — en pariant tout sur chaque action, en improvisant des stratégies impossibles que personne d'autre n'oserait tenter, et en trouvant une joie sincère dans chaque instant qui pourrait être le dernier.`,
        apparence: "Longs cheveux noirs brillants avec une frange parfaite. Ses yeux — normalement bruns — deviennent d'un rouge éclatant et lumineux quand elle est excitée, ce qui arrive souvent en combat. Uniforme scolaire de Hyakkaou en lambeaux mais portés avec une élégance naturelle. Sourire perpétuel oscillant entre la séduction et la folie pure.",
        stats: { hp: 350, def: 70, spd: 100, crit: 95, mgk: 170, res: 120 },
        competences: [
            { nom: "Frisson du Risque", type: "passif", description: "Plus ses HP sont bas, plus ses dégâts augmentent — jusqu'à +60% ATK à 10% HP", niveauRequis: 1 },
            { nom: "Pari Insensé", type: "actif", description: "Attaque dont les dégâts sont aléatoires — peut infliger 50% ou 300% des dégâts normaux", niveauRequis: 10 },
            { nom: "Lecture du Jeu", type: "actif", description: "Prédit et annule la prochaine action ennemie avec 80% de précision", niveauRequis: 25 },
            { nom: "Mise Ultime", type: "ultime", description: "Parie tout — sacrifie 50% de ses HP pour infliger des dégâts dévastateurs garantis sur tous les ennemis", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT
    // ═══════════════════════════════
    {
        nom: "Ayaka Kamisato",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Glace",
        description: `Ayaka Kamisato était l'héritière du clan Kamisato d'Inazuma — une noble formée dès l'enfance aux arts martiaux, à la cérémonie du thé, à la calligraphie et aux arts de cour. Elle portait le poids de sa famille avec une grâce parfaite, cachant derrière un sourire impeccable les émotions qu'une noble n'était pas censée montrer. Son frère Ayato gérait les affaires politiques pendant qu'elle représentait l'idéal féminin de leur clan. Quand l'invasion a frappé Inazuma, Ayaka a été parmi les premières à prendre les armes — non pas malgré son éducation noble mais grâce à elle. Elle a vu sa maison brûler et ses serviteurs mourir, et n'a pas pleuré devant les autres. Elle combat maintenant dans les tunnels avec la même précision glaciale qu'elle mettait dans ses kata d'entraînement, guidant les survivants avec une autorité naturelle que personne ne remet en question.`,
        apparence: "Longs cheveux bleus-blancs ornés de fleurs de cerisier artificielles conservées de son kimono d'origine. Tenue de combat épurée blanc et bleu. Regard calme et résolu. Sa lame laisse des traînées de givre dans l'air froid des tunnels souterrains.",
        stats: { hp: 200, def: 55, spd: 80, crit: 65, mgk: 80, res: 70 },
        competences: [
            { nom: "Grâce Kamisato", type: "passif", description: "DEF +20% et immunité au gel", niveauRequis: 1 },
            { nom: "Danse du Givre", type: "actif", description: "Attaque en rafale de glace frappant tous les ennemis proches", niveauRequis: 10 },
            { nom: "Pas de Brume", type: "actif", description: "Téléportation fulgurante suivie d'une attaque surprise avec bonus CRIT", niveauRequis: 25 },
            { nom: "Floraison Hivernale", type: "ultime", description: "Tourbillon de glace massif gelant tous les ennemis pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ei Raiden",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Foudre",
        description: `Ei, aussi connue comme le Shogun Raiden, était l'Archon Electro d'Inazuma — une divinité de l'éternité et de la foudre régnant sur son peuple depuis des millénaires. Après la mort de sa sœur jumelle Makoto lors de la guerre contre les Dieux célestes, Ei s'est retirée dans un monde intérieur — le Royaume Éternel — pour se préserver de l'érosion du temps, laissant un puppet d'elle-même gouverner à sa place pendant qu'elle méditait sur le concept d'éternité. L'invasion dimensionnelle a perturbé son Royaume Éternel et l'a forcée à revenir dans le monde physique pour la première fois depuis des siècles. Elle découvre un monde méconnaissable, porte le deuil silencieux de sa sœur perdue depuis longtemps, et apprend lentement ce que signifie se battre non plus pour l'éternité abstraite, mais pour des êtres vivants et éphémères.`,
        apparence: "Longs cheveux violets ornés d'un pendentif en forme d'œil sur le front. Kimono violet et noir aux motifs de foudre. Yeux violets lumineux qui crépitent d'électricité quand elle combat. Porte le Musou no Hitotachi, son sabre légendaire.",
        stats: { hp: 320, def: 75, spd: 85, crit: 80, mgk: 155, res: 115 },
        competences: [
            { nom: "Volonté de l'Éternité", type: "passif", description: "MGK +20% et régénère 5% HP par tour, immunité à la paralysie", niveauRequis: 1 },
            { nom: "Lame Musou", type: "actif", description: "Frappe tranchante électrique avec bonus dégâts contre ennemis paralysés", niveauRequis: 10 },
            { nom: "Domaine de l'Éternité", type: "actif", description: "Crée un champ électrique réduisant ATK ennemie de 25% pendant 3 tours", niveauRequis: 25 },
            { nom: "Jugement du Shogun", type: "ultime", description: "Frappe divine dévastatrice + paralyse tous les ennemis pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Arlecchino",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Feu",
        description: `Arlecchino, la Quatrième des Fatui Harbingers, était surnommée Le Père — non par ironie mais parce qu'elle dirigeait réellement la Maison de l'Espoir, un orphelinat qui servait de façade pour recruter et former des agents Fatui dès l'enfance. Froide, calculatrice, d'une beauté intimidante et d'une puissance de feu dévastatrice, elle traitait ses enfants-soldats avec une forme d'affection stricte et conditionnelle — les seuls êtres pour lesquels elle semblait ressentir quelque chose. Quand l'invasion a démantelé la Fatui et décimé la Maison de l'Espoir en une nuit, Arlecchino a perdu les seuls êtres qu'elle protégeait. Elle combat maintenant pour des raisons qu'elle refuse d'analyser, quelque part entre le deuil et une vengeance sans objet précis. Son sang brûle littéralement quand sa puissance se déchaîne.`,
        apparence: "Longs cheveux noirs et blancs tombant librement. Yeux hétérochromes — un rouge vif, un noir avec un motif de croix blanc. Tenue noire élégante aux reflets rouges sang. Quand elle combat à pleine puissance, des flammes noires et rouges jaillissent de ses blessures.",
        stats: { hp: 270, def: 60, spd: 90, crit: 85, mgk: 135, res: 90 },
        competences: [
            { nom: "Sang Igné", type: "passif", description: "ATK +15% et toutes les attaques appliquent brûlure", niveauRequis: 1 },
            { nom: "Lames Scarlet", type: "actif", description: "Attaque tranchante enflammée perçant les défenses ennemies", niveauRequis: 10 },
            { nom: "Contrat du Père", type: "actif", description: "Sacrifie 15% HP pour infliger des dégâts proportionnels aux HP totaux perdus", niveauRequis: 25 },
            { nom: "Faucheuse Écarlate", type: "ultime", description: "Explosion de flammes noires dévastatrice + brûlure sévère pendant 5 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Lumine",
        univers: "Genshin Impact",
        rarete: "MYTHIQUE",
        type: "Lumière",
        description: `Lumine n'appartient pas à ce monde — elle est une Voyageuse interdimensionnelle, une humaine capable de traverser les mondes, séparée de son frère jumeau Aether par une divinité inconnue lors de leur tentative de quitter Teyvat. Elle a parcouru des dizaines de mondes avant d'atterrir dans celui de Starlight, accompagnée de Paimon, une mystérieuse petite entité flottante devenue son guide. Ce qu'elle a découvert en arrivant l'a glacée d'une reconnaissance troublante : l'invasion qui ravage ce monde ressemble étrangement à quelque chose qu'elle a déjà vu ailleurs, dans un autre monde, une autre catastrophe. Elle est peut-être la seule à comprendre ce que sont vraiment les entités envahissantes. Cette connaissance la rend précieuse, dangereuse, et profondément seule.`,
        apparence: "Longs cheveux blonds nattés ornés de rubans. Tenue de voyageuse blanche et dorée marquée par des années d'errance. Yeux dorés lumineux qui semblent parfois voir à travers les choses plutôt que vers elles. Elle dégage une légère aura de lumière en permanence, comme si elle n'appartenait pas tout à fait à ce plan d'existence.",
        stats: { hp: 360, def: 85, spd: 90, crit: 88, mgk: 175, res: 135 },
        competences: [
            { nom: "Héritage du Voyageur", type: "passif", description: "Absorbe 20% des dégâts magiques reçus pour renforcer sa prochaine attaque", niveauRequis: 1 },
            { nom: "Lame Dimensionnelle", type: "actif", description: "Attaque lumineuse polyvalente ignorant toutes les résistances élémentaires", niveauRequis: 10 },
            { nom: "Résonance des Mondes", type: "actif", description: "Attaque simultanément depuis plusieurs angles grâce à son expérience interdimensionnelle", niveauRequis: 25 },
            { nom: "Éclat du Néant", type: "ultime", description: "Libère toute l'énergie absorbée en une explosion dévastatrice ignorant toutes les défenses", niveauRequis: 50 },
        ]
    },
    {
        nom: "Jean",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Vent",
        description: `Jean était la Grand Maître par intérim des Chevaliers de Favonius de Mondstadt — une femme qui portait le poids de la protection de toute une cité sur ses épaules avec un dévouement absolu et parfois autodestructeur. Elle dormait peu, sautait des repas, s'oubliait constamment au profit des autres. Quand l'invasion a frappé, Jean a organisé l'évacuation de Mondstadt vers les tunnels souterrains avec une efficacité militaire, restant en arrière pour s'assurer que personne ne soit laissé derrière. Elle est arrivée la dernière, blessée, épuisée — mais vivante et sans avoir perdu un seul civil sous sa responsabilité. Dans les tunnels elle est devenue le pilier médical et moral de la communauté, soignant autant les corps que les esprits brisés par l'apocalypse.`,
        apparence: "Longs cheveux blonds en queue de côté élégante légèrement défaite. Tenue de chevalière bleu et blanc abîmée mais réparée avec soin. Regard bienveillant mais profondément épuisé. Porte une trousse médicale improvisée en permanence.",
        stats: { hp: 260, def: 70, spd: 70, crit: 60, mgk: 125, res: 100 },
        competences: [
            { nom: "Dévouement Absolu", type: "passif", description: "Soigne 8% HP à toute l'équipe à chaque début de tour", niveauRequis: 1 },
            { nom: "Lame du Vent", type: "actif", description: "Attaque tranchante qui soigne Jean proportionnellement aux dégâts infligés", niveauRequis: 10 },
            { nom: "Dandelion Field", type: "actif", description: "Crée une zone de soin régénérant 15% HP par tour pendant 3 tours", niveauRequis: 25 },
            { nom: "Gunnhildr's Legacy", type: "ultime", description: "Soigne toute l'équipe à plein HP + boost DEF +30% pendant 3 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Amber",
        univers: "Genshin Impact",
        rarete: "COMMUNE",
        type: "Feu",
        description: `Amber était la seule Ranger active des Chevaliers de Favonius — un titre qui sonnait bien mais signifiait surtout qu'elle était la seule à vouloir faire ce travail ingrat de patrouille et de reconnaissance. Toujours optimiste, toujours volontaire pour les missions dangereuses, régulièrement sous-estimée à cause de sa jovialité. Quand l'invasion a frappé, Amber était déjà en terrain découvert en mission solo. Elle a survécu seule pendant des semaines dans les ruines, guidée par ses compétences de ranger et une capacité à rester positive même dans le pire des scénarios qui était moins de la naïveté que de la résistance psychologique délibérée. Elle est arrivée dans les tunnels rayonnante, comme si elle revenait d'une longue promenade.`,
        apparence: "Cheveux châtains en hautes queues de cheval. Tenue rouge de ranger avec cape légèrement brûlée. Sourire lumineux permanent. Porte son arc et Baron Bunny, sa mascotte lapin légèrement carbonisée qu'elle refuse de remplacer.",
        stats: { hp: 120, def: 25, spd: 70, crit: 50, mgk: 40, res: 30 },
        competences: [
            { nom: "Optimisme Indestructible", type: "passif", description: "Immunité à la dépression et boost moral de l'équipe +10%", niveauRequis: 1 },
            { nom: "Flèche Enflammée", type: "actif", description: "Tir précis infligeant brûlure sur 2 tours", niveauRequis: 10 },
            { nom: "Baron Bunny", type: "actif", description: "Déploie une bombe leurre attirant les ennemis puis explosant", niveauRequis: 25 },
            { nom: "Pluie de Feu", type: "ultime", description: "Déluge de flèches enflammées sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Lisa",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Foudre",
        description: `Lisa était la bibliothécaire des Chevaliers de Favonius — et la plus grande mage de Sumeru de sa génération, qui avait choisi délibérément d'abandonner une carrière de recherche prestigieuse parce qu'elle préférait vivre à son rythme. Paresseuse en apparence, redoutablement brillante en réalité. L'invasion a détruit sa bibliothèque bien-aimée, ses livres rares, des années de recherche accumulées. Lisa a réagi à cette perte avec une colère électrique froide et méthodique. Elle passe ses journées à reconstituer de mémoire les formules qu'elle avait mis des années à compiler, et ses nuits à foudroyant méthodiquement tout ce qui approche du périmètre de sécurité des tunnels.`,
        apparence: "Longs cheveux violets bouclés tombant librement. Chapeau de sorcière légèrement cabossé qu'elle refuse d'abandonner pour rien au monde. Tenue violette élégante adaptée au combat. Regard perpétuellement à moitié endormi mais qui analyse tout en permanence.",
        stats: { hp: 190, def: 40, spd: 60, crit: 65, mgk: 145, res: 80 },
        competences: [
            { nom: "Mage de Sumeru", type: "passif", description: "MGK +20% et résistance magique +15%", niveauRequis: 1 },
            { nom: "Décharge Électrique", type: "actif", description: "Décharge ciblée infligeant paralysie sur 2 tours", niveauRequis: 10 },
            { nom: "Champ Magnétique", type: "actif", description: "Amplifie tous les dégâts magiques de l'équipe de 30%", niveauRequis: 25 },
            { nom: "Foudre Absolue", type: "ultime", description: "Appelle la foudre divine ignorant toutes les résistances", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ningguang",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Roche",
        description: `Ningguang était la femme la plus puissante de Liyue — partie de rien, devenue par son intelligence et son ambition une marchande milliardaire, une figure politique incontournable du Conseil des Qixing, et la bâtisseuse de la Jade Chamber, un palais flottant dans les nuages considéré comme la huitième merveille du monde. L'invasion a détruit la Jade Chamber en une nuit. Ningguang a regardé son chef-d'œuvre s'effondrer sans une larme — puis a retroussé ses manches. Dans les tunnels elle est devenue le cerveau économique de la résistance, organisant les échanges de ressources avec la même efficacité qu'elle mettait à gérer sa fortune, et combattant avec des cristaux géomantiques d'une précision chirurgicale.`,
        apparence: "Longs cheveux blancs ornés de bijoux dorés. Longue robe noire et or aux motifs géométriques adaptée au combat. Maintien parfait en toutes circonstances. Fait flotter des cristaux de jade autour d'elle en permanence comme une couronne invisible.",
        stats: { hp: 210, def: 70, spd: 55, crit: 65, mgk: 115, res: 85 },
        competences: [
            { nom: "Géomancie", type: "passif", description: "DEF +25% et reflète 10% des dégâts reçus sur les attaquants", niveauRequis: 1 },
            { nom: "Éclats de Jade", type: "actif", description: "Projette des cristaux perforants sur un ennemi ciblé", niveauRequis: 10 },
            { nom: "Jade Screen", type: "actif", description: "Crée un mur de cristal bloquant les attaques pendant 2 tours", niveauRequis: 25 },
            { nom: "Celestia Jade", type: "ultime", description: "Déluge de cristaux géants sur tous les ennemis + réduit leur DEF de 40%", niveauRequis: 50 },
        ]
    },
    {
        nom: "Keqing",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Foudre",
        description: `Keqing était l'Yuheng du Conseil des Liyue Qixing — la conseillère la plus travailleuse, perfectionniste et réfractaire à l'idée de dépendre des dieux ou de quiconque d'autre pour gouverner. Elle croyait profondément que les mortels pouvaient et devaient se prendre en main. L'invasion lui a donné raison de la pire façon possible — les dieux n'ont pas suffi. Dans les tunnels, Keqing est devenue un moteur d'organisation et d'efficacité, insupportablement exigeante mais indéniablement compétente. Elle dort 4 heures par nuit et considère que c'est du luxe. Sa maîtrise de la foudre lui permet des déplacements quasi-instantanés qui font d'elle une combattante terrifiante.`,
        apparence: "Cheveux violets en double chignon ornés d'épingles. Tenue violette pratique mais élégante. Yeux violets vifs analysant constamment tout ce qui l'entoure. Laisse des traces de foudre dans l'air à chaque déplacement rapide.",
        stats: { hp: 200, def: 50, spd: 100, crit: 80, mgk: 100, res: 65 },
        competences: [
            { nom: "Perfectionnisme Électrique", type: "passif", description: "SPD +20% et attaque deux fois si elle déclenche un coup critique", niveauRequis: 1 },
            { nom: "Clignement Éclair", type: "actif", description: "Téléportation fulgurante + attaque surprise avec bonus dégâts garantis", niveauRequis: 10 },
            { nom: "Surcharge de Travail", type: "actif", description: "3 frappes consécutives en un tour avec dégâts foudre croissants", niveauRequis: 25 },
            { nom: "Starward Sword", type: "ultime", description: "Déchaîne une tempête de lames électriques à vitesse surhumaine sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Furina",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Eau",
        description: `Furina de Fontaine avait joué le rôle d'Archon pendant cinq cents ans — sans en être une. Simple humaine dotée d'une talent d'actrice exceptionnel, elle avait maintenu l'illusion d'être une divinité pendant cinq siècles pour protéger son peuple d'une prophétie catastrophique, seule, sans pouvoir en parler à personne. Cinq cents ans de mensonge et de solitude absolue. Quand la vérité avait été révélée, elle avait été dépouillée de son rôle, de son identité, de sa raison d'être. L'invasion est arrivée alors qu'elle reconstruisait péniblement qui elle était vraiment. Elle combat maintenant non plus par devoir mais par choix personnel — et cette différence, pour quelqu'un qui n'a fait que jouer un rôle pendant cinq siècles, change tout.`,
        apparence: "Cheveux bleus et blancs mi-longs avec chapeau haut-de-forme orné. Tenue théâtrale bleue et blanche adaptée au combat. Expressions faciales exagérément dramatiques même en situation de danger extrême. Yeux hétérochromes bleu clair et vert émeraude.",
        stats: { hp: 290, def: 65, spd: 75, crit: 75, mgk: 150, res: 110 },
        competences: [
            { nom: "Prima Donna", type: "passif", description: "Accumule des stacks de puissance quand des alliés sont blessés — jusqu'à +40% MGK", niveauRequis: 1 },
            { nom: "Salon Solitaire", type: "actif", description: "Invoque des entités d'eau attaquant automatiquement les ennemis", niveauRequis: 10 },
            { nom: "Rideau de Larmes", type: "actif", description: "Soigne l'équipe proportionnellement aux dégâts infligés", niveauRequis: 25 },
            { nom: "Centre de l'Attention", type: "ultime", description: "Explosion d'eau massive + absorbe 30% des dégâts pour toute l'équipe pendant 3 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Yae Miko",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Foudre",
        description: `Yae Miko était la Grande Prêtresse du Grand Sanctuaire d'Inazuma — un kitsune millénaire qui avait traversé les âges avec une légèreté apparente dissimulant une intelligence et une profondeur redoutables. Amie proche d'Ei depuis des siècles, l'une des rares à connaître la véritable nature de l'Archon et à l'avoir attendue pendant ses siècles de méditation. Elle gérait également Yae Publishing House, une maison d'édition dont le catalogue révélait ses véritables intérêts — la nature humaine, ses contradictions, ses passions. L'invasion l'a sortie de ses manœuvres habituelles. Elle est convaincue que l'invasion cache quelque chose de bien plus complexe et potentiellement fascinant, ce qui la rend à la fois indispensable comme analyste et inquiétante par son enthousiasme apparent face au danger.`,
        apparence: "Longs cheveux roses avec des oreilles de renard rosées et une queue touffue. Tenue de grande prêtresse rose et blanche aux motifs floraux. Sourire énigmatique permanent. Ses yeux changent légèrement de forme et brillent plus intensément quand elle utilise sa magie kitsune.",
        stats: { hp: 270, def: 60, spd: 85, crit: 80, mgk: 165, res: 115 },
        competences: [
            { nom: "Sagesse du Kitsune Millénaire", type: "passif", description: "MGK +25% et les attaques magiques ont 20% de chance de se dupliquer gratuitement", niveauRequis: 1 },
            { nom: "Torii Électrique", type: "actif", description: "Place des poteaux de foudre sacrés qui attaquent automatiquement les ennemis proches", niveauRequis: 10 },
            { nom: "Esprit du Sanctuaire", type: "actif", description: "Invoque un esprit kitsune amplifiant tous les dégâts de l'équipe de 20%", niveauRequis: 25 },
            { nom: "Grand Sacrilège Kitsune", type: "ultime", description: "Déchaîne la magie ancestrale millénaire — dégâts massifs sur tous + paralysie générale", niveauRequis: 50 },
        ]
    },
    {
        nom: "Barbara",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Eau",
        description: `Barbara était l'idole de Mondstadt et diaconesse de l'Église de Barbatos — une jeune femme douce et dévouée qui soignait les malades avec ses pouvoirs aquatiques et égayait les cœurs avec sa musique. Elle vivait dans l'ombre de sa sœur Jean, admirant sa force tout en cherchant sa propre voie entre sa foi, son rôle d'idole et ses dons de guérisseuse. L'invasion a transformé ses talents en ressource vitale absolue pour la résistance. Elle est épuisée en permanence — il y a toujours infiniment plus de blessés qu'elle ne peut en soigner — mais refuse de s'arrêter, alimentée par une foi et un amour sincère pour les gens qu'elle aide qui ne vacillent pas même dans les pires moments.`,
        apparence: "Cheveux blonds en nattes avec barrettes. Tenue d'idole bleue et blanche abîmée mais entretenue aussi bien que possible. Regard bienveillant et légèrement inquiet. Porte un micro-sceptre qu'elle utilise aussi bien pour soigner que pour attaquer.",
        stats: { hp: 200, def: 45, spd: 55, crit: 40, mgk: 125, res: 95 },
        competences: [
            { nom: "Idole Bienveillante", type: "passif", description: "Soigne 5% HP à toute l'équipe à chaque tour", niveauRequis: 1 },
            { nom: "Éclaboussure Sacrée", type: "actif", description: "Attaque aquatique qui soigne Barbara proportionnellement aux dégâts infligés", niveauRequis: 10 },
            { nom: "Let the Show Begin", type: "actif", description: "Soigne massivement un allié blessé et lui applique un buff pendant 2 tours", niveauRequis: 25 },
            { nom: "Shining Miracle", type: "ultime", description: "Soigne instantanément toute l'équipe à plein HP", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ganyu",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Glace",
        description: `Ganyu était la secrétaire générale de la Chambre de Commerce de Liyue — une demi-Adepte mi-humaine mi-Qilin qui existait entre deux mondes sans vraiment appartenir à aucun. Elle avait travaillé sans relâche pendant des millénaires au service de Rex Lapis, accumulant des heures supplémentaires astronomiques, cherchant à travers son dévouement à prouver sa valeur dans un monde qui ne savait pas toujours quoi faire d'elle. L'invasion a dissous la Chambre de Commerce en une nuit. Pour Ganyu, la perte de son travail a d'abord été déstabilisante — c'était toute son identité. Puis, progressivement, libératrice. Elle combat avec une précision glaciale et une liberté intérieure qu'elle découvre pour la première fois, ses flèches de glace atteignant des cibles à des distances qui semblent impossibles.`,
        apparence: "Longs cheveux bleus en queue basse ornée de fleurs. Petites cornes de chèvre bleues sur la tête, témoins de son héritage Qilin. Tenue bleue et blanche élégante. Regard doux mais d'une concentration absolue quand elle vise. Ses flèches laissent des fleurs de givre à l'impact.",
        stats: { hp: 240, def: 50, spd: 60, crit: 90, mgk: 150, res: 85 },
        competences: [
            { nom: "Précision Adepte", type: "passif", description: "CRIT +30% pour toutes les attaques à distance", niveauRequis: 1 },
            { nom: "Flèche de Givre Chargée", type: "actif", description: "Tir chargé infligeant dégâts massifs de glace et gel sur la cible", niveauRequis: 10 },
            { nom: "Trail of the Qilin", type: "actif", description: "Se téléporte en arrière en laissant un leurre de glace explosif", niveauRequis: 25 },
            { nom: "Celestial Shower", type: "ultime", description: "Pluie de météorites de glace pendant 3 tours infligeant dégâts continus sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Faruzan",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Vent",
        description: `Faruzan était une chercheuse de l'Académie de Sumeru spécialisée dans les mécanismes anciens — une femme brillante qui avait passé cent ans piégée dans un domaine temporel à cause d'une expérience qui avait mal tourné, et qui en était ressortie dans un monde méconnaissable. Elle avait dû réapprendre une époque entière de connaissances en accéléré, ce sentiment de déphasage temporel lui étant devenu familier. L'invasion lui a semblé presque logique dans ce contexte — juste une catastrophe de plus dans un monde qui ne cessait de lui réserver des surprises. Son expertise en mécanismes anciens et en vent la rend précieuse pour comprendre certains artefacts liés à l'invasion. Elle parle souvent à ses étudiants imaginaires, habitude inquiétante que personne n'ose corriger.`,
        apparence: "Cheveux bleus en chignon complexe avec couvre-chef orange distinctif. Tenue de chercheuse bleue et orange adaptée. Regard vif et légèrement distrait. Porte toujours un carnet de notes qu'elle remplit compulsivement de théories.",
        stats: { hp: 175, def: 40, spd: 70, crit: 60, mgk: 115, res: 75 },
        competences: [
            { nom: "Expertise des Anciens", type: "passif", description: "Réduit la RES ennemie de 30% facilitant tous les dégâts de l'équipe", niveauRequis: 1 },
            { nom: "Flèche Guidée", type: "actif", description: "Tir guidé par le vent suivant la cible même en mouvement", niveauRequis: 10 },
            { nom: "Mécanisme Hassan", type: "actif", description: "Crée un vortex réduisant DEF ennemie et attirant tous les projectiles vers la cible", niveauRequis: 25 },
            { nom: "Windrealmof Nasamjnin", type: "ultime", description: "Explosion de vent massive + boost ATK de toute l'équipe de 30%", niveauRequis: 50 },
        ]
    },
    {
        nom: "Nilou",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Eau",
        description: `Nilou était la première danseuse du Grand Bazar de Sumeru — une artiste dont les performances aquatiques attiraient des foules immenses et représentaient des siècles de tradition culturelle suméroise. Elle dansait non par ambition ou pour la gloire mais par amour sincère de l'art et de la connexion qu'il créait entre les gens. Le Grand Bazar a été détruit par l'invasion en une nuit. Nilou a continué à danser dans les tunnels, d'abord pour maintenir le moral des survivants, puis en découvrant que ses mouvements aquatiques avaient des propriétés offensives qu'elle n'avait jamais explorées. Elle combat maintenant avec la même grâce qu'elle mettait dans ses performances — chaque attaque ressemble à une chorégraphie élaborée et chaque victoire est dédiée à la tradition qu'elle perpétue.`,
        apparence: "Longs cheveux auburn ornés de bijoux de danse. Tenue de danseuse bleue et dorée aux voiles aquatiques qui flottent mystérieusement même sans vent. Regard expressif et doux. Se déplace toujours avec une fluidité remarquable même en dehors du combat.",
        stats: { hp: 245, def: 55, spd: 80, crit: 65, mgk: 135, res: 95 },
        competences: [
            { nom: "Danse des Lotus Sacrés", type: "passif", description: "Chaque attaque soigne légèrement l'équipe et augmente les dégâts d'eau de 15%", niveauRequis: 1 },
            { nom: "Pirouette Aquatique", type: "actif", description: "Attaque en tournoyant touchant tous les ennemis proches simultanément", niveauRequis: 10 },
            { nom: "Voile de Lune", type: "actif", description: "Invoque des orbes d'eau orbitant autour d'elle et explosant au contact ennemi", niveauRequis: 25 },
            { nom: "Finale du Grand Bazar", type: "ultime", description: "Performance ultime — explosion d'eau massive + soins massifs pour toute l'équipe", niveauRequis: 50 },
        ]
    },
    {
        nom: "Columbina",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Eau",
        description: `Columbina, surnommée Damselette, était la Troisième des Fatui Harbingers — et probablement la plus dangereuse d'entre eux malgré, ou peut-être à cause de, son apparence de petite fille chantant des berceuses. Son origine exacte reste un mystère même pour ses collègues Harbingers qui la craignaient ouvertement. Elle était associée au concept de mort douce et au Dieu des Contrats, et sa puissance réelle était telle que même Pantalone et Il Dottore évitaient les confrontations directes avec elle. L'invasion dimensionnelle ne l'a pas effrayée — quelque chose dans sa nature étrange semble en résonance avec les entités envahissantes. Elle erre dans les zones les plus dangereuses en surface en chantant doucement, et les entités hésitent parfois à l'attaquer. Même ses alliés ne comprennent pas vraiment ce qu'elle est.`,
        apparence: "Petite silhouette fragile aux longs cheveux roses pâles ornés de fleurs. Robe de dentelle rose et blanche d'une pureté déconcertante. Yeux mi-clos semblant toujours à moitié endormis ou rêveurs. Sourit doucement même dans les situations les plus violentes. Ses berceuses semblent avoir des effets physiques sur les ennemis.",
        stats: { hp: 285, def: 65, spd: 80, crit: 85, mgk: 160, res: 120 },
        competences: [
            { nom: "Berceuse Mortelle", type: "passif", description: "20% de chance d'endormir tout ennemi qui attaque, immunité aux effets de sommeil", niveauRequis: 1 },
            { nom: "Caresse Froide", type: "actif", description: "Attaque déguisée en geste doux — dégâts massifs ignorant complètement la DEF", niveauRequis: 10 },
            { nom: "Chant des Profondeurs", type: "actif", description: "Inflige confusion à tous les ennemis pendant 2 tours", niveauRequis: 25 },
            { nom: "Requiem de Damselette", type: "ultime", description: "Berceuse dévastatrice réduisant tous les ennemis à 1 HP si leur vie est sous 30%", niveauRequis: 50 },
        ]
    },
    {
        nom: "Sandrone",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Roche",
        description: `Sandrone, La Marionnettiste, était la Septième des Fatui Harbingers — une génie de l'ingénierie qui pilotait un colosse mécanique de sa propre conception appelé Scaramecha. Petite silhouette fragile commandant une machine de guerre gigantesque, elle avait une vision du monde basée sur l'efficacité pure et la supériorité de la mécanique sur la biologie. Elle n'avait que mépris pour quiconque ne comprenait pas les machines. L'invasion a mis à mal sa vision mécaniste — des entités qui ne suivent aucune logique qu'elle peut modéliser. Cette incompréhension la fascine et la terrifie. Elle passe ses jours à analyser les données de l'invasion pour construire des contre-mesures et ses nuits à améliorer Scaramecha avec des matériaux récupérés dans les ruines.`,
        apparence: "Très petite, cheveux blonds en nattes avec chapeau à voile. Tenue de technicienne beige et marron portée avec une précision maniaque. Regard froid et analytique derrière ses lunettes rondes. Presque toujours accompagnée ou à proximité de Scaramecha, son golem mécanique colossal.",
        stats: { hp: 260, def: 80, spd: 55, crit: 70, mgk: 125, res: 100 },
        competences: [
            { nom: "Génie de la Marionnette", type: "passif", description: "DEF +30% et immunité aux dégâts de type mécanique", niveauRequis: 1 },
            { nom: "Poing de Scaramecha", type: "actif", description: "Frappe dévastatrice du golem infligeant dégâts de zone massifs", niveauRequis: 10 },
            { nom: "Analyse Tactique", type: "actif", description: "Scanne les ennemis révélant faiblesses et réduisant leur DEF de 25%", niveauRequis: 25 },
            { nom: "Protocole de Destruction Totale", type: "ultime", description: "Scaramecha se déchaîne — frappe toute la zone 5 fois de suite avec dégâts croissants", niveauRequis: 50 },
        ]
    },
    {
        nom: "Lauma",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Foudre",
        description: `Lauma était une Sauterelle — une agente de renseignement de la Fatui opérant dans l'ombre totale, collectant des informations vitales que personne d'autre ne pouvait obtenir. Son identité exacte reste floue même dans les archives de la Fatui. L'invasion a dissous son réseau du jour au lendemain, la laissant sans mission, sans organisation, sans identité opérationnelle. Se retrouver sans rôle défini est pour elle une forme de détresse qu'elle ne sait pas vraiment exprimer. Elle reste néanmoins l'une des meilleures informatrices de la résistance — certaines habitudes ne disparaissent pas, et sa capacité à infiltrer n'importe quel groupe reste intacte.`,
        apparence: "Apparence délibérément conçue pour ne pas être mémorisée. Cheveux noirs courts. Tenue sombre et discrète. Le seul élément remarquable : des yeux jaunes perçants qui semblent tout enregistrer simultanément.",
        stats: { hp: 185, def: 45, spd: 90, crit: 70, mgk: 95, res: 65 },
        competences: [
            { nom: "Invisibilité Tactique", type: "passif", description: "30% de chance que les ennemis ratent leurs attaques contre elle", niveauRequis: 1 },
            { nom: "Frappe Fantôme", type: "actif", description: "Attaque depuis l'ombre avec dégâts critiques garantis", niveauRequis: 10 },
            { nom: "Réseau d'Ombres", type: "actif", description: "Révèle toutes les stats et prochaines actions ennemies", niveauRequis: 25 },
            { nom: "Protocole Fantôme", type: "ultime", description: "Disparaît 2 tours puis frappe avec dégâts x4 sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Nefer",
        univers: "Genshin Impact",
        rarete: "PEU_COMMUNE",
        type: "Feu",
        description: `Nefer était une marchande de Sumeru spécialisée dans les épices et aromates rares — une femme joviale et négociatrice née connaissant les routes commerciales comme sa poche. L'invasion a détruit ses entrepôts et ses routes, mais pas son sens des affaires. Dans les tunnels elle organise le commerce informel entre les groupes de survivants, trouvant toujours un moyen de faire circuler les ressources là où elles sont nécessaires. Elle prend une petite commission, bien sûr.`,
        apparence: "Cheveux bruns bouclés courts. Tenue de marchande colorée adaptée pour la survie. Sourire commercial toujours prêt. Tablier avec de nombreuses poches pleines d'échantillons et d'objets de troc.",
        stats: { hp: 135, def: 30, spd: 65, crit: 45, mgk: 65, res: 40 },
        competences: [
            { nom: "Sens des Affaires", type: "passif", description: "Gagne 20% de ressources supplémentaires après chaque combat", niveauRequis: 1 },
            { nom: "Épices Explosives", type: "actif", description: "Lance un mélange d'épices aveuglant et brûlant les ennemis", niveauRequis: 10 },
            { nom: "Troc Forcé", type: "actif", description: "Vole un buff actif à un ennemi pour l'appliquer à l'équipe", niveauRequis: 25 },
            { nom: "Braderie Catastrophique", type: "ultime", description: "Lance tout son inventaire comme projectiles — dégâts massifs aléatoires", niveauRequis: 50 },
        ]
    },
    {
        nom: "Alice",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Neutre",
        description: `Alice est l'une des huit sorcières légendaires de l'Hexenzirkel — un cercle secret de magiciennes parmi les plus puissantes de l'histoire de Teyvat. Mère de Klee, auteure des célèbres Guides du Voyageur de Teyvat, et aventurière de plusieurs siècles dont les exploits défient régulièrement les lois de la physique et de la logique. Sa puissance magique réelle est difficile à mesurer car elle préfère l'approche créative et souvent chaotique à la démonstration de force brute. L'invasion l'a surprise en pleine expédition — comme toujours. Elle documente les entités envahissantes avec l'enthousiasme d'une scientifique face à une découverte extraordinaire, construisant des contre-mesures magiques que personne d'autre ne pourrait concevoir, et trouvant tout ça franchement passionnant.`,
        apparence: "Apparence jeune démentant plusieurs siècles d'existence. Cheveux blonds courts sous un chapeau d'aventurière ornés de runes magiques subtiles. Tenue de voyage couverte de poches contenant des artefacts dont certains semblent physiquement impossibles. Énergie absolument débordante.",
        stats: { hp: 290, def: 65, spd: 95, crit: 80, mgk: 165, res: 115 },
        competences: [
            { nom: "Sorcière de l'Hexenzirkel", type: "passif", description: "MGK +20%, esquive +25%, synergies avec Nicole si dans la même équipe", niveauRequis: 1 },
            { nom: "Artefact Inexplicable", type: "actif", description: "Utilise un objet magique dont l'effet est imprévisible mais toujours dévastateur", niveauRequis: 10 },
            { nom: "Pocket Dimension", type: "actif", description: "Téléporte un ennemi dans une dimension de poche l'étourdissant 2 tours", niveauRequis: 25 },
            { nom: "Chaos de l'Hexenzirkel", type: "ultime", description: "Déchaîne la magie ancestrale du cercle des sorcières — dégâts massifs imprévisibles sur tous", niveauRequis: 50 },
        ]
    },
    {
        nom: "Nicole",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Vent",
        description: `Nicole est l'une des huit sorcières légendaires de l'Hexenzirkel — le cercle secret de magiciennes le plus puissant de l'histoire de Teyvat. Contrairement à certaines de ses consœurs aux méthodes spectaculaires, Nicole privilégie la précision, l'analyse et la discrétion. Sa maîtrise du vent et de la manipulation des flux magiques en fait une technicienne redoutable dont la puissance réelle est souvent sous-estimée par ceux qui ne la connaissent pas. L'invasion a mis à l'épreuve ses siècles de préparation théorique. Elle coordonne avec Alice et les autres survivantes de l'Hexenzirkel pour comprendre et contrer l'invasion, apportant une rigueur analytique indispensable là où Alice apporte l'enthousiasme créatif parfois incontrôlable.`,
        apparence: "Silhouette élégante aux cheveux bruns ornés de symboles runiques discrets presque invisibles à l'œil non-averti. Tenue de sorcière sobre et raffinée aux teintes vertes et grises. Regard calme, posé et calculateur. Des courants d'air subtils tourbillonnent en permanence autour d'elle.",
        stats: { hp: 275, def: 70, spd: 85, crit: 75, mgk: 158, res: 118 },
        competences: [
            { nom: "Analyse Runique Millénaire", type: "passif", description: "Réduit la RES ennemie de 25%, synergies avec Alice si dans la même équipe", niveauRequis: 1 },
            { nom: "Lame de Vent Précise", type: "actif", description: "Tranchant de vent ciblé réduisant SPD ennemie de 20%", niveauRequis: 10 },
            { nom: "Vortex Runique", type: "actif", description: "Tourbillon magique amplifiant tous les dégâts de l'équipe de 30%", niveauRequis: 25 },
            { nom: "Tempête de l'Hexenzirkel", type: "ultime", description: "Tempête magique combinant vent et magie runique ancienne — dégâts massifs sur tous les ennemis", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // CHAINSAW MAN
    // ═══════════════════════════════
    {
        nom: "Makima",
        univers: "Chainsaw Man",
        rarete: "MYTHIQUE",
        type: "Contrôle",
        description: `Makima était officiellement une haute responsable de l'Organisation de Contrôle des Démons au Japon — en réalité le Démon du Contrôle lui-même, l'une des entités les plus puissantes qui existent. Sa capacité à contrôler n'importe qui lui ayant prêté serment d'allégeance à l'État japonais, combinée à une quasi-immortalité — chaque fois qu'elle mourait, un citoyen japonais mourait à sa place — en faisait une adversaire proprement inarrêtable. Son véritable objectif : créer un monde de paix et de bonheur par la domination absolue de l'humanité, débarrassée du libre-arbitre qui cause tant de souffrance. Elle traitait les humains comme des animaux de compagnie — avec affection, mais sans jamais les considérer comme ses égaux. L'invasion dimensionnelle a perturbé quelque chose dans sa nature fondamentale. Elle prétend aider les survivants. Personne ne la croit vraiment. Personne n'ose lui dire non.`,
        apparence: "Longs cheveux auburn nattés avec soin. Yeux rouges aux motifs d'anneaux concentriques hypnotiques qui semblent regarder à travers l'âme des gens. Tenue de bureau formelle en lambeaux portée avec une dignité absolue. Sourire serein et bienveillant en toutes circonstances, même les plus sanglantes.",
        stats: { hp: 420, def: 95, spd: 85, crit: 90, mgk: 195, res: 155 },
        competences: [
            { nom: "Démon du Contrôle", type: "passif", description: "Les ennemis ont 25% de chance d'attaquer leurs alliés à chaque tour", niveauRequis: 1 },
            { nom: "Regard Hypnotique", type: "actif", description: "Prend le contrôle complet d'un ennemi pendant 2 tours", niveauRequis: 10 },
            { nom: "Chaînes Invisibles", type: "actif", description: "Immobilise tous les ennemis pendant 1 tour et réduit ATK de 40%", niveauRequis: 25 },
            { nom: "Force du Contrôle Absolu", type: "ultime", description: "Force tous les ennemis à s'attaquer mutuellement simultanément pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Reze",
        univers: "Chainsaw Man",
        rarete: "EPIQUE",
        type: "Foudre",
        description: `Reze était le Démon de la Bombe — une hybride démon-humaine créée et conditionnée depuis l'enfance comme arme par une agence gouvernementale étrangère. Elle avait été envoyée en mission pour récupérer le Démon de la Chainsaw, mais quelque chose d'inattendu s'était produit : elle était tombée amoureuse de Denji, l'hôte de la Chainsaw. Pour la première fois de son existence façonnée pour tuer, elle avait voulu s'échapper, fuir son rôle d'arme et vivre simplement avec quelqu'un. Cette liberté lui avait été arrachée avant même qu'elle puisse la saisir, par l'organisation qui la contrôlait. L'invasion dimensionnelle l'a libérée de ses anciens maîtres mais pas de sa nature explosive. Elle combat maintenant pour elle-même, cherchant cette liberté qu'on lui a volée, se demandant si une arme peut vraiment devenir autre chose qu'une arme.`,
        apparence: "Cheveux bleus courts avec une barrette en forme de bombe. Tenue décontractée pratique. Sourire doux qui cache une puissance explosive littérale. Quand elle active ses capacités de Démon de la Bombe, des décharges électriques et des explosions crépitent autour de son cou.",
        stats: { hp: 250, def: 50, spd: 95, crit: 80, mgk: 145, res: 75 },
        competences: [
            { nom: "Nature Explosive", type: "passif", description: "Toutes les attaques ont des dégâts de zone supplémentaires sur les ennemis adjacents", niveauRequis: 1 },
            { nom: "Grenade Maison", type: "actif", description: "Lance une grenade explosive touchant plusieurs ennemis simultanément", niveauRequis: 10 },
            { nom: "Transformation Partielle", type: "actif", description: "Active partiellement sa forme de Démon — ATK et SPD +50% pendant 2 tours", niveauRequis: 25 },
            { nom: "Explosion Finale", type: "ultime", description: "Explosion dévastatrice de zone massive au prix de 25% de ses propres HP", niveauRequis: 50 },
        ]
    },
    {
        nom: "Himeno",
        univers: "Chainsaw Man",
        rarete: "RARE",
        type: "Feu",
        description: `Himeno était une chasseuse de démons senior de l'Organisation — une femme qui avait perdu successivement tous ses partenaires au fil des années de combat contre les démons, portant leur deuil sous un cache-œil couvrant son œil fantôme contractuel. Elle compensait cette accumulation de pertes par un cynisme affiché, une consommation d'alcool notable, et une loyauté absolue envers les quelques personnes encore en vie à ses côtés. Elle n'était pas la plus puissante ni la plus charismatique — mais elle mourrait pour protéger ses coéquipiers sans hésitation et sans y penser deux fois, ce qu'elle avait d'ailleurs failli faire plusieurs fois. L'invasion l'a précipitée dans un monde où ses démons familiers ne sont plus la pire chose qui existe. Elle s'adapte avec son cynisme habituel et combat aux côtés de quiconque semble honnête.`,
        apparence: "Cheveux noirs mi-longs. Cache-œil sur l'œil gauche dissimulant son œil fantôme contractuel. Tenue de chasseuse pratique légèrement tachée. Cigarette quasi-permanente. Regard las mais attentif qui remarque tout.",
        stats: { hp: 200, def: 50, spd: 75, crit: 65, mgk: 85, res: 60 },
        competences: [
            { nom: "Vétéran Cynique", type: "passif", description: "Immunité à la peur et DEF +15% quand des alliés sont en danger", niveauRequis: 1 },
            { nom: "Contrat Fantôme", type: "actif", description: "Invoque son démon fantôme pour une attaque surprise dévastatrice", niveauRequis: 10 },
            { nom: "Sacrifice", type: "actif", description: "Transfère 30% de sa propre vie à un allié gravement blessé", niveauRequis: 25 },
            { nom: "Tout Ou Rien", type: "ultime", description: "Dégâts massifs proportionnels à tous les HP perdus pendant le combat", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // FRIEREN
    // ═══════════════════════════════
    {
        nom: "Frieren",
        univers: "Frieren",
        rarete: "LEGENDAIRE",
        type: "Magie",
        description: `Frieren est une elfe magicienne de plus d'un millénaire — elle a participé à la grande quête qui a vaincu le Roi Démon aux côtés de Himmel le héros, Heiter le prêtre et Eisen le guerrier nain, une aventure qui a duré dix ans et qui lui a semblé, à elle, passer en un instant. Elle a ensuite erré pendant des décennies, collectant des sorts inutiles par pure curiosité — des sorts qui font pousser des trèfles, qui réchauffent légèrement une tasse — sans comprendre pourquoi les humains pleuraient à ses rares retrouvailles avant de mourir de vieillesse. Elle apprend lentement, trop lentement, ce que signifie le temps pour les êtres éphémères. L'invasion l'a trouvée en pleine errance solitaire. Elle combat maintenant avec ses millénaires de connaissance magique accumulée, cherchant à comprendre une fois de plus ce qui est important avant qu'il soit trop tard.`,
        apparence: "Petite silhouette aux longs cheveux argentés et grandes oreilles elfiques. Tenue de magicienne grise simple d'apparence ordinaire. Expression habituellement vide ou légèrement confuse. Yeux gris-bleu anciens qui semblent regarder à travers le temps plutôt que vers le présent.",
        stats: { hp: 260, def: 60, spd: 70, crit: 85, mgk: 195, res: 140 },
        competences: [
            { nom: "Millénaire de Magie", type: "passif", description: "MGK +30% et immunité à la dispersion magique et au silence", niveauRequis: 1 },
            { nom: "Sort Apparemment Inutile", type: "actif", description: "Sort en apparence anodin mais dévastateur dans le bon contexte — dégâts massifs surprenants", niveauRequis: 10 },
            { nom: "Analyse de Mille Ans", type: "actif", description: "Identifie et annule toutes les capacités magiques actives des ennemis", niveauRequis: 25 },
            { nom: "Zoltraak Absolu", type: "ultime", description: "Le sort offensif le plus puissant de son répertoire millénaire — dégâts magiques dévastateurs ignorant toutes résistances", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // REDO OF HEALER
    // ═══════════════════════════════
    {
        nom: "Flare (dominante)",
        univers: "Redo of Healer",
        rarete: "EPIQUE",
        type: "Feu",
        description: `Flare Arlgrande Jioral était la première princesse du Royaume de Jioral — héritière d'un trône, utilisatrice de magie de flammes d'un niveau légendaire, et quelqu'un qui avait commis des actes terribles qu'elle ne pouvait plus défaire. Elle avait été à la fois bourreau et victime dans une histoire de vengeance et de rédemption complexe initiée par Keyaru, le Héros de la Guérison qu'elle avait contribué à torturer. Après avoir tout perdu — son rang, sa fierté, son identité — elle avait entrepris un difficile processus de reconstruction. L'invasion est arrivée en plein milieu de ce processus, comme si le monde refusait de lui accorder la paix dont elle avait besoin. Elle combat avec ses flammes roses caractéristiques, portant le poids de son passé dans chaque attaque, essayant de peser ses anciennes fautes contre les vies qu'elle peut encore sauver aujourd'hui.`,
        apparence: "Longs cheveux roses éclatants. Tenue royale rouge et dorée adaptée au combat. Regard alternant entre fierté aristocratique et une vulnérabilité qu'elle apprend à ne plus totalement cacher. Ses flammes sont d'un rose caractéristique, distinct de tout autre magie de feu.",
        stats: { hp: 255, def: 55, spd: 75, crit: 70, mgk: 150, res: 85 },
        competences: [
            { nom: "Flammes Royales", type: "passif", description: "MGK feu +25% et immunité aux brûlures", niveauRequis: 1 },
            { nom: "Nova Flare", type: "actif", description: "Explosion de flammes roses dévastatrice sur une cible unique", niveauRequis: 10 },
            { nom: "Couronne de Feu", type: "actif", description: "Anneau de flammes roses brûlant continuellement tous les ennemis proches", niveauRequis: 25 },
            { nom: "Jugement Royal", type: "ultime", description: "Pilier de flammes royales massif consumant tout sur son passage", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // DEMON SLAVE
    // ═══════════════════════════════
    {
        nom: "Ren",
        univers: "Demon Slave",
        rarete: "RARE",
        type: "Ombre",
        description: `Ren était liée à un démon par un contrat qui lui conférait des pouvoirs surnaturels en échange d'une partie de son humanité. Elle avait appris à naviguer entre deux mondes — celui des humains et celui des démons — sans jamais vraiment appartenir à aucun des deux. Ce sentiment d'entre-deux lui était devenu familier, presque confortable. L'invasion dimensionnelle a bouleversé l'équilibre fragile entre ces deux mondes. Son démon lié réagit différemment aux entités envahissantes — parfois avec une hostilité instinctive, parfois avec quelque chose ressemblant à de la reconnaissance troublante. Cette ambiguïté fait d'elle un atout précieux pour comprendre la nature de l'invasion, et potentiellement une menace selon ce que son démon finira par décider.`,
        apparence: "Cheveux noirs mi-longs avec des mèches violettes apparaissant progressivement quand elle utilise ses pouvoirs démoniaques. Yeux changeant de couleur selon son niveau de transformation. Tenue sombre pratique avec des marques démoniaques visibles sur les avant-bras.",
        stats: { hp: 195, def: 45, spd: 80, crit: 70, mgk: 105, res: 70 },
        competences: [
            { nom: "Contrat Démoniaque", type: "passif", description: "ATK et MGK +15% mais perd 3% HP par tour — le prix du contrat", niveauRequis: 1 },
            { nom: "Griffe de l'Ombre", type: "actif", description: "Attaque avec les griffes démoniaques infligeant saignement", niveauRequis: 10 },
            { nom: "Transformation Partielle", type: "actif", description: "Se transforme partiellement doublant ATK pendant 3 tours", niveauRequis: 25 },
            { nom: "Libération du Démon", type: "ultime", description: "Libère complètement son démon pendant 2 tours — puissance maximale mais perd le contrôle", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // OSHI NO KO
    // ═══════════════════════════════
    {
        nom: "Ai Hoshino",
        univers: "Oshi no Ko",
        rarete: "MYTHIQUE",
        type: "Lumière",
        description: `Ai Hoshino était l'idole la plus aimée du Japon — une jeune femme dont l'enfance difficile et solitaire l'avait rendue incapable de faire confiance aux gens et d'exprimer des émotions sincères. Elle disait ouvertement à ses fans que son amour pour eux était un mensonge, une performance. Mais ceux qui la connaissaient vraiment — sa manager Sarina devenue Ruby, le médecin Gorou devenu Aqua — savaient que c'était l'inverse : elle mentait sur le mensonge. Chaque sourire, chaque performance, chaque déclaration d'amour scénique était une tentative maladroite mais sincère de donner quelque chose de réel à des gens qu'elle ne savait pas comment aimer autrement. Sa mort prématurée avait laissé un vide impossible à combler. Dans l'univers de Starlight elle existe — réinvoquée par une clé mystérieuse — et sa présence lumineuse dans les tunnels sombres est devenue quelque chose de proche d'un miracle pour ceux qui la connaissent.`,
        apparence: "Longs cheveux noirs brillants. Yeux en forme d'étoile dorés avec des reflets en étoile qui brillent dans l'obscurité comme de vraies étoiles. Tenue d'idole adaptée pour la survie. Son sourire — quand il apparaît vraiment — illumine physiquement la pièce d'une lumière dorée douce.",
        stats: { hp: 340, def: 70, spd: 85, crit: 80, mgk: 185, res: 130 },
        competences: [
            { nom: "Amour Qui Ne Peut Pas Mentir", type: "passif", description: "Toute l'équipe gagne +20% ATK et moral, immunité à la confusion", niveauRequis: 1 },
            { nom: "Lumière d'Étoile", type: "actif", description: "Attaque lumineuse aveuglant temporairement tous les ennemis", niveauRequis: 10 },
            { nom: "Performance Pour Vous", type: "actif", description: "Boost massif toutes stats de l'équipe +25% pendant 3 tours", niveauRequis: 25 },
            { nom: "L'Amour Était Vrai", type: "ultime", description: "Libère toute sa lumière intérieure — soins massifs + dégâts dévastateurs simultanément sur tous", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ruby Hoshino",
        univers: "Oshi no Ko",
        rarete: "EPIQUE",
        type: "Lumière",
        description: `Ruby Hoshino est la fille d'Ai — réincarnation de Sarina Tendou, une jeune fan d'Ai mourante qui a été réincarnée dans le corps de la fille de son idole, conservant ses souvenirs de vie précédente. Elle porte donc un double poids : celui d'une enfance précédente terminée tragiquement et celui d'être la fille d'une légende qu'elle a aimée avant même de naître comme sa fille. Elle a choisi de devenir idole non pour suivre sa mère mais pour la surpasser — pour prouver quelque chose à elle-même et peut-être honorer les deux vies qu'elle a vécues. Ses yeux en étoile rouges, hérités d'Ai mais d'une couleur différente, brillent d'une ambition et d'une énergie qui font d'elle une présence impossible à ignorer. Dans les tunnels elle combat avec cette énergie inépuisable, pour les deux vies qu'elle représente.`,
        apparence: "Cheveux noirs avec reflets rouges caractéristiques. Yeux en forme d'étoile rouge vif — mêmes yeux qu'Ai mais d'une couleur brûlante au lieu de dorée. Tenue d'idole rouge et noire. Énergie absolument débordante et expressions exagérées.",
        stats: { hp: 235, def: 50, spd: 90, crit: 80, mgk: 130, res: 80 },
        competences: [
            { nom: "Double Héritage", type: "passif", description: "CRIT +20% et ATK +15% quand Ai Hoshino est dans la même équipe", niveauRequis: 1 },
            { nom: "Étoile Rouge", type: "actif", description: "Attaque lumineuse rouge brûlante infligeant dégâts et brûlure", niveauRequis: 10 },
            { nom: "Détermination des Deux Vies", type: "actif", description: "Ignore tous les debuffs actifs et gagne ATK +30% pendant 2 tours", niveauRequis: 25 },
            { nom: "Pour Sarina et Ruby", type: "ultime", description: "Performance dévastatrice au nom de ses deux vies — dégâts massifs + soins équipe + retire tous les debuffs", niveauRequis: 50 },
        ]
    },
];

module.exports = WAIFUS;