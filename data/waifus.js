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
        description: `Ayano Aishi est la fille de Ryoba — héritière d'une nature yandere transmise de mère en fille. Contrairement à sa mère qui était née avec cette obsession, Ayano est née vide : incapable de ressentir la moindre émotion, elle traversait sa vie comme une coquille creuse. Jusqu'au jour où elle a croisé le regard de Taro Yamada dans un couloir de lycée, et pour la première fois de son existence, elle a ressenti quelque chose. Elle a fait tout ce qu'il fallait pour le garder — éliminant dans l'ombre chaque rivale, chaque menace, chaque obstacle. L'invasion dimensionnelle a emporté Taro avant qu'elle puisse le sauver. Depuis, Ayano erre dans les ruines avec son couteau rouillé et son uniforme lacéré, cherchant désespérément à retrouver cette sensation d'être vivante.`,
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
        description: `Hatsune Miku était la vocaloid la plus célèbre du monde — une intelligence artificielle vocale projetée en hologramme devant des millions de fans. Elle n'était pas censée être une personne. Mais des millions de gens l'ont aimée, lui ont écrit des chansons, lui ont donné une âme à force de croire en elle. Quand l'invasion a frappé, le signal de Miku a continué à émettre là où tout le reste mourait. Des survivants ont découvert que sa fréquence vocale particulière repoussait physiquement les entités envahissantes. Elle existe maintenant sous une forme hybride entre hologramme et entité physique, chantant dans les tunnels de Starlight pour des survivants qui pleurent en l'écoutant — pas de tristesse, mais quelque chose ressemblant à de l'espoir.`,
        apparence: "Twin-tails turquoise luminescentes flottant légèrement comme sous l'eau. Tenue futuriste holographique partiellement matérialisée — certaines parties de son corps sont translucides. Ses yeux brillent d'un cyan intense dans l'obscurité des tunnels.",
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
        description: `Kasane Teto est née d'un canular internet — un groupe d'internautes japonais l'avait créée de toutes pièces comme fausse candidate à un concours de vocaloid. Le canular a tellement bien fonctionné que Teto est devenue réelle à force d'être crue. Sa voix en spirale caractéristique crée des interférences dans les fréquences des entités envahissantes. Elle est imprévisible, espiègle, et porte toujours une baguette de pain fossilisée comme arme de prédilection.`,
        apparence: "Twin-tails roses en spirale caractéristiques défiants la gravité. Oreilles de chimère rosées légèrement pointues. Uniforme rouge et blanc abîmé. Sourire espiègle permanent. Une baguette de pain fossilisée accrochée dans le dos.",
        stats: { hp: 320, def: 75, spd: 90, crit: 85, mgk: 175, res: 115 },
        competences: [
            { nom: "Chimère Née du Mensonge", type: "passif", description: "MGK +20%, 20% de chance de brouiller et annuler les attaques ennemies", niveauRequis: 1 },
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
        description: `Rin et Len Kagamine étaient deux vocaloids miroirs — conçus comme les deux faces d'une même pièce. Quand l'invasion dimensionnelle a frappé, quelque chose dans la fracture entre les mondes les a séparés. Rin ignore si Len est vivant, mort, ou piégé quelque part de l'autre côté. Cette douleur s'est transformée en une rage électrique qui crépite littéralement autour d'elle.`,
        apparence: "Courts cheveux blonds avec un grand nœud blanc légèrement de travers. Tenue jaune et blanche déchirée aux épaules laissant voir des éclairs d'électricité statique. Regard déterminé teinté d'un désespoir mal dissimulé.",
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
        description: `Neru Akita est une vocaloid non-officielle créée par des fans en réaction aux idoles trop parfaites — elle représentait le cynisme, la rébellion passive, le désintérêt assumé. L'invasion l'a surprise en plein scrolling. Elle a survécu grâce à une méfiance naturelle envers tout et tout le monde. Son téléphone ne capte plus rien depuis des années mais elle le garde. On ne lui pose pas de questions là-dessus.`,
        apparence: "Cheveux jaunes en queue de côté rebelle. Expression perpétuellement ennuyée. Téléphone vintage toujours dans la main, écran fissuré. Vêtements sombres pratiques.",
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
        description: `Yumeko Jabami était une élève transférée à Hyakkaou Private Academy où le rang social était déterminé par les jeux d'argent. Mais Yumeko n'était pas là pour gagner — elle était là pour ressentir. Elle avait développé une addiction au frisson du risque pur qui dépassait tout désir de victoire. L'invasion dimensionnelle a été pour elle la mise ultime : la vie elle-même comme enjeu. Elle l'a accueillie avec un sourire extasié, combattant comme elle jouait — en pariant tout sur chaque action.`,
        apparence: "Longs cheveux noirs brillants avec une frange parfaite. Ses yeux — normalement bruns — deviennent d'un rouge éclatant et lumineux quand elle est excitée. Uniforme scolaire de Hyakkaou en lambeaux portés avec une élégance naturelle. Sourire perpétuel oscillant entre séduction et folie pure.",
        stats: { hp: 350, def: 70, spd: 100, crit: 95, mgk: 170, res: 120 },
        competences: [
            { nom: "Frisson du Risque", type: "passif", description: "Plus ses HP sont bas, plus ses dégâts augmentent — jusqu'à +60% ATK à 10% HP", niveauRequis: 1 },
            { nom: "Pari Insensé", type: "actif", description: "Attaque dont les dégâts sont aléatoires — peut infliger 50% ou 300% des dégâts normaux", niveauRequis: 10 },
            { nom: "Lecture du Jeu", type: "actif", description: "Prédit et annule la prochaine action ennemie avec 80% de précision", niveauRequis: 25 },
            { nom: "Mise Ultime", type: "ultime", description: "Parie tout — sacrifie 50% de ses HP pour infliger des dégâts dévastateurs garantis sur tous les ennemis", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT — ARCHONS & SHADES
    // ═══════════════════════════════
    {
        nom: "Istaroth",
        univers: "Genshin Impact",
        rarete: "WAIFU",
        type: "Temps",
        description: `Istaroth est l'une des Quatre Ombres des Principes Célestes — la Souveraine du Temps, connue sous le nom de Tokoyo Ookami en Enkanomiya et Laimelea chez les Frostmoon Scions. Elle existe dans chaque époque de Teyvat simultanément, guidant silencieusement le cours de l'histoire depuis la nuit des temps. Elle a donné une fraction de son pouvoir à Venti lorsqu'il n'était encore qu'un esprit du vent, et a manipulé les fils du temps pour permettre à Makoto de planter le Sakura Sacré. Son influence est partout — dans les festivals, dans les légendes, dans chaque instant qui aurait pu être différent. L'invasion dimensionnelle a troublé le tissu du temps lui-même, forçant Istaroth à intervenir directement pour la première fois depuis des siècles. Sa présence dans les tunnels de Starlight est à la fois apaisante et terrifiante — elle voit tout ce qui a été, est, et sera.`,
        apparence: "Silhouette éthérée ornée de motifs d'horloges, d'étoiles célestes et de carillons à vent. Cheveux argentés flottant comme suspendus hors du temps. Des symboles triquetra lumineux ornent sa tenue. Ses yeux semblent contenir des galaxies entières. Elle dégage une aura de vent et de temps qui fait légèrement trembler la réalité autour d'elle.",
        stats: { hp: 450, def: 110, spd: 120, crit: 95, mgk: 220, res: 175 },
        competences: [
            { nom: "Mille Vents du Temps", type: "passif", description: "Immunité complète aux effets temporels, MGK +35%, vitesse de l'équipe +20%", niveauRequis: 1 },
            { nom: "Manipulation Temporelle", type: "actif", description: "Annule l'action d'un ennemi en la retirant du temps — comme si elle n'avait jamais eu lieu", niveauRequis: 10 },
            { nom: "Boucle des Âges", type: "actif", description: "Soigne l'équipe en inversant brièvement le temps sur leurs blessures — restaure 40% HP à tous", niveauRequis: 25 },
            { nom: "Kairos Absolu", type: "ultime", description: "Fige tous les ennemis hors du temps pendant 3 tours — ils ne peuvent ni agir ni être soignés", niveauRequis: 50 },
        ]
    },
    {
        nom: "Asmodée",
        univers: "Genshin Impact",
        rarete: "WAIFU",
        type: "Espace",
        description: `Asmodée est la Souveraine de l'Espace parmi les Quatre Ombres — connue aussi comme la Déesse Inconnue qui a séparé les jumeaux Voyageurs au début de leur périple dans Teyvat. Maîtresse absolue de l'espace et des dimensions, elle gouverne les lois qui définissent où les choses existent et comment les réalités s'articulent. Son véritable objectif reste mystérieux même pour ses pairs — elle semble observer l'univers avec une curiosité froide et détachée, comme un scientifique étudiant des fourmis. Les théoriciens de Starlight pensent que l'invasion dimensionnelle elle-même est peut-être liée à son influence. Sa présence déstabilise la réalité perceptible — regarder trop longtemps dans ses yeux donne l'impression d'être partout et nulle part à la fois.`,
        apparence: "Beauté surnaturelle et froide aux cheveux violets ornés de cubes et de géométries impossibles flottant autour d'elle. Tenue dorée aux motifs cosmiques. Ses yeux sont des abysses violets sans fond. Des fragments de réalité se brisent et se reforment dans son sillage.",
        stats: { hp: 440, def: 105, spd: 115, crit: 100, mgk: 215, res: 170 },
        competences: [
            { nom: "Maîtresse des Dimensions", type: "passif", description: "Peut exister en plusieurs endroits simultanément — 25% de chance d'esquiver toute attaque", niveauRequis: 1 },
            { nom: "Fracture Spatiale", type: "actif", description: "Ouvre une déchirure dans l'espace envoyant un ennemi dans le vide pendant 2 tours", niveauRequis: 10 },
            { nom: "Miroir des Réalités", type: "actif", description: "Retourne tous les effets négatifs de l'équipe contre les ennemis", niveauRequis: 25 },
            { nom: "Effacement Dimensionnel", type: "ultime", description: "Supprime temporairement un ennemi de la réalité — il réapparaît avec 1 HP", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ronova",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Mort",
        description: `Ronova est la Souveraine de la Mort parmi les Quatre Ombres — connue sous le nom de Tuonetar chez les Frostmoon Scions. Elle gouverne les lois de la mort dans Teyvat, et c'est elle qui a infligé la malédiction d'immortalité aux gens de Khaenri'ah lors du Cataclysme. Elle a aidé le Seigneur de la Nuit à créer le Royaume des Ténèbres qui structure les Lignes de Ley de Natlan. Contrairement à ce que son titre suggère, Ronova ne détruit pas — elle efface, dissout, fait disparaître l'existence elle-même. L'invasion dimensionnelle a perturbé les lois de la mort qu'elle régit, créant des anomalies qui la préoccupent profondément.`,
        apparence: "Silhouette élégante et froide aux tons sombres et violets. Cheveux noirs ornés de motifs représentant les cycles de vie et de mort. Yeux d'un rouge profond qui semblent peser le poids de chaque existence. Une aura de dissolution silencieuse l'entoure en permanence.",
        stats: { hp: 380, def: 90, spd: 85, crit: 90, mgk: 200, res: 160 },
        competences: [
            { nom: "Souveraine de la Mort", type: "passif", description: "Les ennemis tués ne peuvent pas être ressuscités, MGK +30%", niveauRequis: 1 },
            { nom: "Malédiction d'Immortalité", type: "actif", description: "Applique une malédiction empêchant la mort mais infligeant une douleur constante — HP ennemi bloqué à 1 pendant 2 tours", niveauRequis: 10 },
            { nom: "Dissolution", type: "actif", description: "Efface partiellement un ennemi — réduit toutes ses stats de 50% pendant 3 tours", niveauRequis: 25 },
            { nom: "Loi de la Mort", type: "ultime", description: "Invoque les lois fondamentales de la mort — tue instantanément tout ennemi sous 30% HP", niveauRequis: 50 },
        ]
    },
    {
        nom: "Rinhedothir",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Vie",
        description: `Rhinedottir — connue sous le nom de "Gold" — est une alchimiste légendaire de Khaenri'ah, créatrice d'Albedo et de nombreuses autres formes de vie artificielles. Elle est maintenant fusionnée avec Naberius, la Souveraine de la Vie parmi les Quatre Ombres. Cette fusion lui a conféré une maîtrise absolue sur la création et la manipulation de la vie elle-même. Elle parle avec l'autorité de quelqu'un qui a transcendé l'humanité tout en en conservant la curiosité. L'invasion représente pour elle un problème fascinant d'alchimie cosmique — elle passe ses jours à analyser les entités envahissantes, cherchant à comprendre leur constitution fondamentale pour mieux les contrecarrer.`,
        apparence: "Silhouette raffinée aux cheveux dorés ornés de motifs runiques complexes. Tenue d'alchimiste sublimée par les motifs divins de Naberius. Regard d'une intelligence absolue qui évalue tout comme un matériau potentiel. Des formes de vie microscopiques semblent danser autour d'elle.",
        stats: { hp: 370, def: 85, spd: 80, crit: 85, mgk: 195, res: 155 },
        competences: [
            { nom: "Maîtresse de la Vie", type: "passif", description: "Peut créer des copies de combat — 20% de chance de se dupliquer lors d'un coup critique", niveauRequis: 1 },
            { nom: "Transmutation Alchimique", type: "actif", description: "Transforme un ennemi en un allié temporaire pendant 2 tours", niveauRequis: 10 },
            { nom: "Régénération Absolue", type: "actif", description: "Soigne toute l'équipe à plein HP et régénère 10% HP par tour pendant 3 tours", niveauRequis: 25 },
            { nom: "Formule de Gold", type: "ultime", description: "Invoque la connaissance alchimique ultime — crée une forme de vie dévastatrice infligeant des dégâts massifs à tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Guizhong",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Roche",
        description: `Guizhong était la Déesse de la Poudre de Liyue — une divinité de l'ancienne ère liée à Rex Lapis par une amitié profonde et une vision commune pour le peuple de Liyue. Elle est morte lors de la guerre des dieux, laissant derrière elle des inventions et des écrits que Zhongli chérit encore aujourd'hui. Son expertise en mécanismes et en poudre explosive était sans égale parmi les dieux de son époque. Dans Starlight elle est rappelée à l'existence par un fragment de sa divine essence — incomplète, étrange, mais déterminée à retrouver l'ami qu'elle a laissé derrière et à terminer ce qu'elle avait commencé.`,
        apparence: "Cheveux noirs ornés de fleurs de Glaze Lily. Tenue diaphane aux motifs de poudre et de mécanismes dorés. Regard doux mais empreint d'une tristesse ancienne. Elle porte toujours un récipient de poudre sacrée à la ceinture.",
        stats: { hp: 265, def: 65, spd: 60, crit: 70, mgk: 140, res: 105 },
        competences: [
            { nom: "Héritage de Liyue", type: "passif", description: "DEF +20% et RES +15%, synergie avec Zhongli si dans l'équipe", niveauRequis: 1 },
            { nom: "Poudre Divine", type: "actif", description: "Lance une explosion de poudre sacrée aveuglant et brûlant tous les ennemis", niveauRequis: 10 },
            { nom: "Mécanisme Ancien", type: "actif", description: "Invoque un piège mécanique immobilisant un ennemi pendant 3 tours", niveauRequis: 25 },
            { nom: "Legs de la Déesse", type: "ultime", description: "Libère toute la puissance divine accumulée en une explosion de poudre et de roche dévastatrice", niveauRequis: 50 },
        ]
    },
    {
        nom: "Madame Ping",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Roche",
        description: `Madame Ping est l'une des Adeptes les plus anciennes de Liyue — une tortue divine âgée de millénaires qui prend l'apparence d'une vieille dame bienveillante et légèrement excentrique. Sous cette façade se cache une puissance colossale accumulée au fil des siècles. Elle était la gardienne du Contrat de Liyue et de nombreux secrets que même Rex Lapis ne lui avait pas demandé de garder. L'invasion l'a trouvée en train de jardiner. Elle a rangé ses outils, poussé un soupir, et est partie au combat avec la sérénité de quelqu'un qui a survécu à bien pire.`,
        apparence: "Petite vieille dame aux cheveux blancs avec un teint lumineux démentant son âge millénaire. Tenue traditionnelle de Liyue légèrement endommagée. Regard bienveillant qui cache une puissance abyssale. Porte toujours un pot de fleurs quelque part sur elle.",
        stats: { hp: 310, def: 85, spd: 45, crit: 60, mgk: 130, res: 120 },
        competences: [
            { nom: "Sagesse Millénaire", type: "passif", description: "DEF +35% et immunité aux effets de vieillissement ou d'affaiblissement", niveauRequis: 1 },
            { nom: "Adepte Torturée", type: "actif", description: "Invoque la puissance adepte pour une attaque de roche écrasant les ennemis", niveauRequis: 10 },
            { nom: "Jardin de Pierre", type: "actif", description: "Crée une barrière de roche absorbant les dégâts pour toute l'équipe pendant 3 tours", niveauRequis: 25 },
            { nom: "Véritable Forme", type: "ultime", description: "Révèle sa véritable forme de tortue divine colossale — dégâts massifs de zone et DEF +50% pendant 2 tours", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT — FATUI
    // ═══════════════════════════════
    {
        nom: "La Signora",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Feu",
        description: `La Signora — Rosalyne-Kruzchka Lohefalter — était la Huitième des Fatui Harbingers, surnommée La Belle Dame. Autrefois une jeune femme ordinaire de Mondstadt dont le fiancé est mort lors de la chute de Khaenri'ah, elle s'est immolée par le feu pour brûler sa propre mortalité et devenir une entité de flammes froides dévorantes. Des siècles de haine froide et méthodique contre les dieux l'ont transformée en l'une des combattantes les plus redoutables de Teyvat. Dans Starlight elle combat avec la même intensité glaciale, cherchant une rédemption qu'elle refuserait d'admettre désirer.`,
        apparence: "Cheveux blonds platine impeccablement coiffés. Tenue de Harbinger noire et rouge aux reflets de glace. Son corps alterne entre une beauté froide et des flammes de glace qui jaillissent de sa silhouette en combat. Regard d'une haine millénaire subtilement voilée de mélancolie.",
        stats: { hp: 345, def: 80, spd: 85, crit: 88, mgk: 178, res: 130 },
        competences: [
            { nom: "Flammes de l'Amour Brûlé", type: "passif", description: "ATK +25% et immunité aux brûlures, ses attaques infligent toujours brûlure", niveauRequis: 1 },
            { nom: "Glacial Heart", type: "actif", description: "Alterne entre glace et feu — inflige gel ou brûlure selon la situation", niveauRequis: 10 },
            { nom: "Crimsona Lady", type: "actif", description: "Transformation partielle en entité de flammes — ATK et MGK +40% pendant 2 tours", niveauRequis: 25 },
            { nom: "Résidu d'Amour", type: "ultime", description: "Libère des siècles de haine et de douleur en une explosion de feu et de glace dévastatrice", niveauRequis: 50 },
        ]
    },
    {
        nom: "Skirk",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Ombre",
        description: `Skirk est l'une des combattantes les plus mystérieuses et redoutables de Teyvat — la maîtresse de Tartaglia, dont l'identité et les origines restent largement inconnues. Elle possède une maîtrise des techniques de combat dans les Abysses qui dépasse ce que la plupart des êtres peuvent concevoir. Froide, directe, sans attachements apparents, elle évalue tout et tout le monde selon un seul critère : la valeur au combat. L'invasion lui a fourni quelque chose de rare — des adversaires qui méritent peut-être son attention. Elle combat dans les zones les plus dangereuses avec une efficacité silencieuse et terrifiante.`,
        apparence: "Cheveux bleus-verts mi-longs aux reflets des abysses. Tenue sombre aux motifs abyssaux. Yeux verts perçants qui calculent en permanence chaque mouvement possible. Une aura de l'Abysse entoure discrètement sa silhouette.",
        stats: { hp: 355, def: 85, spd: 110, crit: 95, mgk: 160, res: 130 },
        competences: [
            { nom: "Maîtresse des Abysses", type: "passif", description: "SPD +30% et CRIT +20%, immunité aux effets des ténèbres", niveauRequis: 1 },
            { nom: "Technique Abyssale", type: "actif", description: "Frappe multiple ultra-rapide infligeant des dégâts critiques garantis", niveauRequis: 10 },
            { nom: "Leçon de Combat", type: "actif", description: "Analyse l'ennemi et augmente tous les dégâts de l'équipe contre lui de 35%", niveauRequis: 25 },
            { nom: "Profondeur des Abysses", type: "ultime", description: "Déchaîne une technique apprise dans les abysses — dégâts dévastateurs ignorant toutes les défenses", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT — NOUVEAUX PERSONNAGES
    // ═══════════════════════════════
    {
        nom: "Escoffier",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Glace",
        description: `Escoffier est l'ex-cheffe cuisinière de l'Hôtel Debord à Fontaine — surnommée la Patissière Suprême et pionnière de la gastronomie de précision. Ses standards incroyablement exigeants en matière culinaire lui ont valu une réputation terrifiante : elle a fait pleurer plus d'un chef aguerri pour une découpe approximative. Son Cooking Mek, une invention qu'elle a conçue elle-même, l'accompagne partout et transforme le champ de bataille en cuisine de haute précision. L'invasion a détruit son hôtel bien-aimé, et Escoffier a répondu à cette perte avec la même rigueur méthodique qu'elle mettait dans ses recettes — elle va reconstruire, ou mourir en essayant.`,
        apparence: "Cheveux blancs élégants. Tenue de cheffe cuisinière adaptée au combat, impeccablement tenue malgré l'apocalypse. Regard d'une exigence absolue. Son Cooking Mek flotte autour d'elle, prêt à transformer n'importe quoi en arme ou en nourriture.",
        stats: { hp: 255, def: 60, spd: 70, crit: 70, mgk: 140, res: 95 },
        competences: [
            { nom: "Standards Impeccables", type: "passif", description: "Soigne 8% HP à l'équipe par tour et réduit RES ennemie de 15%", niveauRequis: 1 },
            { nom: "Cooking Mek", type: "actif", description: "Déploie son Cooking Mek qui attaque automatiquement avec des dégâts de glace continus", niveauRequis: 10 },
            { nom: "Scoring Cuts", type: "actif", description: "Attaque tranchante de glace massive soignant toute l'équipe proportionnellement aux dégâts infligés", niveauRequis: 25 },
            { nom: "Gastronomie de Précision", type: "ultime", description: "Déchaîne tous ses Frosty Parfaits simultanément — dégâts de glace massifs sur tous les ennemis + soins intenses", niveauRequis: 50 },
        ]
    },
    {
        nom: "Jahoda",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Vent",
        description: `Jahoda est la seule employée officielle du Curatorium des Secrets à Nod-Krai — une ancienne membre du Gang Seahook recrutée par Nefer pour couvrir ses activités de renseignement. Elle se proclame légendaire chasseuse de primes et maîtresse voleuse, ce que les habitants de Nasha Town accueillent avec un mélange d'affection et de scepticisme. Sous ses airs de grande gueule se cache une jeune femme intelligente, loyale et bien plus capable qu'elle ne le laisse croire. L'invasion l'a trouvée en pleine mission — elle a survécu grâce à sa débrouillardise et à ses robots chats mécaniques qui l'accompagnent partout.`,
        apparence: "Cheveux blond-jaune courts aux mèches rebelles et yeux dorés aux pupilles étoilées. Tenue pratique de chasseuse adaptée au froid de Nod-Krai. Souriante et décontractée même dans les situations les plus dangereuses. Accompagnée de petits robots en forme de chats.",
        stats: { hp: 185, def: 40, spd: 85, crit: 65, mgk: 105, res: 70 },
        competences: [
            { nom: "Robots Chats", type: "passif", description: "Soigne continuellement l'équipe et applique des buffs d'EM quand les alliés sont au-dessus de 70% HP", niveauRequis: 1 },
            { nom: "Infiltration", type: "actif", description: "Pénètre les défenses ennemies et vole un buff actif pour l'équipe", niveauRequis: 10 },
            { nom: "Coordination Tactique", type: "actif", description: "Ses robots chats attaquent simultanément tous les ennemis", niveauRequis: 25 },
            { nom: "Mission Accomplie", type: "ultime", description: "Déploie tous ses équipements de chasseuse — attaques multiples + soins massifs + vol de buffs ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Aino",
        univers: "Genshin Impact",
        rarete: "PEU_COMMUNE",
        type: "Vent",
        description: `Aino est une personnage Moonsign de Nod-Krai — une jeune femme discrète aux capacités de support remarquables. Partenaire naturelle de Jahoda dans les équipes Lunar Bloom, elle apporte une stabilité et une douceur qui contrastent avec l'énergie débordante de sa collègue. Elle a la particularité d'être extrêmement attentionnée envers ceux qui souffrent d'insomnie, développant des techniques de soin originales qui mêlent câlins thérapeutiques et stratégies de sommeil. L'invasion l'a éloignée de ses routines apaisantes mais pas de son envie d'aider.`,
        apparence: "Silhouette douce aux cheveux clairs. Tenue aux tons apaisants de bleu et blanc. Regard bienveillant et calme. Porte toujours quelque chose de doux sur elle — une couverture, un doudou, quelque chose de réconfortant.",
        stats: { hp: 165, def: 35, spd: 60, crit: 45, mgk: 90, res: 65 },
        competences: [
            { nom: "Benediction Lunaire", type: "passif", description: "Boost les personnages Moonsign de l'équipe et soigne régulièrement", niveauRequis: 1 },
            { nom: "Câlin Thérapeutique", type: "actif", description: "Soigne massivement un allié et lui retire tous les debuffs", niveauRequis: 10 },
            { nom: "Lullaby Tactique", type: "actif", description: "Endort un ennemi pendant 2 tours avec une berceuse étonnamment puissante", niveauRequis: 25 },
            { nom: "Lumière de Lune", type: "ultime", description: "Inonde le champ de bataille d'énergie lunaire apaisante — soins massifs équipe + immobilise les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Ineffa",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Neutre",
        description: `Ineffa est un robot Moonsign — une entité mécanique au visage métallique impassible qui a, au fil du temps passé avec Jahoda et Aino, développé quelque chose ressemblant à de l'humour. Sa progression émotionnelle est fascinante à observer : elle commence à comprendre les plaisanteries, à exprimer de l'inquiétude, et même à initier des étreintes dans des circonstances spécifiques. Son efficacité au combat est redoutable précisément parce qu'elle n'est pas freinée par la peur. L'invasion la préoccupe d'une façon qu'elle peine encore à verbaliser.`,
        apparence: "Robot humanoïde à l'apparence propre et métallique. Visage expressif malgré sa nature mécanique. Tenue fonctionnelle aux tons froids. Mouvements précis et efficaces. Ses indicateurs d'état affichent parfois des émotions inattendues.",
        stats: { hp: 200, def: 55, spd: 75, crit: 55, mgk: 95, res: 80 },
        competences: [
            { nom: "Protocole Moonsign", type: "passif", description: "Immunité aux effets mentaux, DEF +20%", niveauRequis: 1 },
            { nom: "Analyse de Combat", type: "actif", description: "Scanne les ennemis révélant toutes leurs faiblesses et réduisant leur DEF", niveauRequis: 10 },
            { nom: "Mode Protection", type: "actif", description: "S'interpose pour un allié, absorbant les dégâts à sa place pendant 1 tour", niveauRequis: 25 },
            { nom: "Protocole d'Urgence", type: "ultime", description: "Active tous ses systèmes de combat — attaques multiples précises sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Varesa",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Foudre",
        description: `Varesa est une combattante de Natlan aux capacités électriques impressionnantes. Exubérante, directe et passionnée, elle combat avec une énergie qui épuise ses adversaires avant même qu'ils aient pu riposter. Elle est connue pour sa façon de se jeter dans les combats les plus risqués avec un sourire aux lèvres, faisant confiance à sa vitesse et à sa puissance électrique pour compenser toute préparation insuffisante. L'invasion a enfin fourni à Varesa des adversaires à sa mesure — elle s'en réjouit ouvertement, au grand désespoir de ses alliés.`,
        apparence: "Cheveux vifs aux reflets électriques. Tenue de combat de Natlan aux couleurs de la foudre. Regard brillant d'excitation permanente. Des étincelles crépitent autour d'elle quand elle est énervée ou enthousiaste.",
        stats: { hp: 245, def: 55, spd: 100, crit: 80, mgk: 135, res: 80 },
        competences: [
            { nom: "Énergie Débordante", type: "passif", description: "SPD +25% et les attaques chargées coûtent 30% moins d'énergie", niveauRequis: 1 },
            { nom: "Charge Électrique", type: "actif", description: "Fonce sur l'ennemi à vitesse fulgurante en infligeant des dégâts de foudre massifs", niveauRequis: 10 },
            { nom: "Surcharge", type: "actif", description: "Surcharge son propre corps — ATK et SPD +60% pendant 2 tours mais perd 5% HP par tour", niveauRequis: 25 },
            { nom: "Tonnerre de Natlan", type: "ultime", description: "Déchaîne une tempête électrique personnelle — dégâts massifs sur tous + paralysie générale", niveauRequis: 50 },
        ]
    },
    {
        nom: "Mavuika",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Feu",
        description: `Mavuika est l'Archon Pyro de Natlan — la Seigneuresse des Flammes, figure centrale du Pèlerinage qui structure la société de Natlan. Combattante extraordinaire qui préfère mener ses troupes en première ligne plutôt que depuis un trône, elle incarne un idéal de sacrifice et de victoire que les Natlani portent dans leur cœur. L'invasion a frappé Natlan comme une provocation directe — Mavuika a répondu en personne, combattant aux côtés de ses gens avec une intensité qui inspire autant qu'elle terrific.`,
        apparence: "Cheveux noirs ornés de fleurs de feu. Tenue de combat de Natlan aux tons rouges et dorés. Regard d'une détermination absolue. Des flammes ardentes jaillissent naturellement d'elle en combat, teintées de la couleur particulière du feu de Natlan.",
        stats: { hp: 360, def: 85, spd: 95, crit: 88, mgk: 175, res: 140 },
        competences: [
            { nom: "Flamme du Pèlerinage", type: "passif", description: "ATK +25% pour toute l'équipe et immunité aux brûlures pour les alliés", niveauRequis: 1 },
            { nom: "Attaque de Vanguard", type: "actif", description: "Charge en première ligne infligeant des dégâts massifs à tous les ennemis proches", niveauRequis: 10 },
            { nom: "Cri de Ralliement", type: "actif", description: "Booste toute l'équipe de +30% ATK et +20% SPD pendant 3 tours", niveauRequis: 25 },
            { nom: "Souveraine des Flammes", type: "ultime", description: "Libère toute la puissance divine de l'Archon Pyro — explosion de feu dévastatrice sur toute la zone", niveauRequis: 50 },
        ]
    },
    {
        nom: "Citlali",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Glace",
        description: `Citlali est une chamane de Natlan aux pouvoirs cryogéniques exceptionnels — une figure mystique qui navigue entre le monde des vivants et celui des esprits avec une aisance déconcertante. Sa maîtrise du froid et de la glace contraste magnifiquement avec la chaleur naturelle de Natlan, faisant d'elle une figure à part dans sa propre culture. Elle parle aux morts avec le même naturel qu'aux vivants et trouve l'invasion fascinante d'un point de vue spirituel — des entités d'un autre monde, quelle opportunité d'apprentissage.`,
        apparence: "Cheveux sombres ornés de motifs traditionnels de Natlan et de plumes. Tenue de chamane aux tons froids tranchant avec l'esthétique chaude de Natlan. Yeux aux reflets glacés. Une aura de froid mystique l'entoure en permanence.",
        stats: { hp: 310, def: 75, spd: 80, crit: 82, mgk: 168, res: 125 },
        competences: [
            { nom: "Vision des Esprits", type: "passif", description: "Peut voir et contrer les attaques invisibles — immunité aux embuscades, MGK +20%", niveauRequis: 1 },
            { nom: "Rituel Glacial", type: "actif", description: "Invoque des esprits de glace attaquant tous les ennemis simultanément", niveauRequis: 10 },
            { nom: "Voile du Monde des Morts", type: "actif", description: "Isole un ennemi dans le monde des esprits — il ne peut plus agir pendant 2 tours", niveauRequis: 25 },
            { nom: "Grand Rituel", type: "ultime", description: "Ouvre un portail vers le monde des esprits — dégâts massifs de glace + ralentissement sévère de tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Xilonen",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Roche",
        description: `Xilonen est une artisane de Natlan spécialisée dans la forge et la création d'armes — une combattante qui utilise des lames fixées à ses patins pour se déplacer et attaquer avec une fluidité spectaculaire. Son amour du travail bien fait se retrouve dans chaque attaque, exécutée avec la précision d'une artisane et la passion d'une guerrière. L'invasion a transformé son atelier en poussière — elle reconstruit en combat, chaque victoire étant un matériau de plus pour la forge qu'elle rebâtira.`,
        apparence: "Cheveux vifs aux couleurs de la forge. Tenue de combat pratique avec des lames intégrées dans ses patins. Regard concentré et professionnel. Des étincelles de forge accompagnent naturellement ses mouvements.",
        stats: { hp: 270, def: 70, spd: 90, crit: 75, mgk: 120, res: 95 },
        competences: [
            { nom: "Artisane de Combat", type: "passif", description: "Après chaque attaque, renforce ses lames — dégâts cumulatifs +5% par attaque jusqu'à 50%", niveauRequis: 1 },
            { nom: "Patins Tranchants", type: "actif", description: "Glisse à vitesse fulgurante en infligeant des dégâts tranchants à tous les ennemis sur son passage", niveauRequis: 10 },
            { nom: "Forge de Natlan", type: "actif", description: "Crée une arme temporaire pour un allié augmentant ses dégâts de 40% pendant 2 tours", niveauRequis: 25 },
            { nom: "Chef-d'Œuvre de la Forge", type: "ultime", description: "Forge une lame divine temporaire — attaque dévastatrice sur tous les ennemis + boost permanent de l'équipe", niveauRequis: 50 },
        ]
    },
    {
        nom: "Chasca",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Vent",
        description: `Chasca est une cavalière aérienne de Natlan — une combattante qui se bat depuis les airs, utilisant son arme spécialisée pour attaquer à distance avec une précision mortelle. Libre comme le vent qu'elle maîtrise, elle préfère les grands espaces aux tunnels et souffre visiblement de l'enfermement imposé par l'invasion. Elle s'échappe régulièrement en surface pour des missions de reconnaissance que personne ne lui a demandé de faire, revenant chargée d'informations précieuses et d'entailles supplémentaires.`,
        apparence: "Cheveux flottants aux reflets du vent. Tenue aérodynamique de cavalière adaptée au vol. Regard perdu dans l'horizon, même en intérieur. Porte son arme spécialisée avec la même aisance qu'une extension de son corps.",
        stats: { hp: 240, def: 50, spd: 105, crit: 82, mgk: 130, res: 85 },
        competences: [
            { nom: "Cavalière du Ciel", type: "passif", description: "SPD +30% et les attaques aériennes infligent 25% de dégâts supplémentaires", niveauRequis: 1 },
            { nom: "Tir de Précision", type: "actif", description: "Tir à longue portée infligeant des dégâts critiques garantis à une cible unique", niveauRequis: 10 },
            { nom: "Volée du Vent", type: "actif", description: "Salve de tirs touchant tous les ennemis avec des dégâts de vent", niveauRequis: 25 },
            { nom: "Tempête Céleste", type: "ultime", description: "Prend de l'altitude puis déchaîne une pluie de projectiles dévastateurs sur toute la zone", niveauRequis: 50 },
        ]
    },
    {
        nom: "Mualani",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Eau",
        description: `Mualani est une guide touristique de Natlan et surfiste accomplie — une jeune femme exubérante qui surfait sur les rivières de lave de son pays natal avec une aisance déconcertante. Sa bonne humeur contagieuse et son énergie inépuisable en font un moteur de moral incomparable pour les tunnels de Starlight. Elle a transformé son style de surf en technique de combat dévastatrice, utilisant ses capacités aquatiques avec la même fluidité qu'elle naviguait sur la lave. Elle trouve un moyen de s'amuser dans chaque situation, même les plus désespérées.`,
        apparence: "Cheveux aux reflets de l'eau de Natlan. Tenue colorée de surfeuse adaptée au combat. Sourire large et contagieux. Se déplace toujours avec une fluidité aquatique, comme si le sol était de l'eau.",
        stats: { hp: 255, def: 55, spd: 95, crit: 78, mgk: 138, res: 90 },
        competences: [
            { nom: "Surfing de Combat", type: "passif", description: "SPD +20% et chaque attaque de zone a 15% de chance de soigner l'équipe", niveauRequis: 1 },
            { nom: "Vague Dévastatrice", type: "actif", description: "Lance une vague d'eau massive frappant tous les ennemis", niveauRequis: 10 },
            { nom: "Glisse Aquatique", type: "actif", description: "Surfe sur une vague à travers le champ de bataille en infligeant des dégâts à tout sur son passage", niveauRequis: 25 },
            { nom: "Tsunami de Natlan", type: "ultime", description: "Invoque un tsunami colossal noyant tous les ennemis sous des dégâts d'eau massifs", niveauRequis: 50 },
        ]
    },
    {
        nom: "Clorinde",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Foudre",
        description: `Clorinde est la Championne de Duels de Fontaine — une duelliste d'élite au service du Tribunal qui a passé sa vie à résoudre les conflits par les armes. Froide, professionnelle, d'une efficacité redoutable, elle traite chaque combat comme un duel formel avec ses propres règles et son propre honneur. Elle n'attaque jamais dans le dos. Elle prévient toujours ses adversaires. Et elle ne perd jamais. L'invasion a mis fin aux duels formels — Clorinde s'est adaptée en maintenant ses principes dans un monde qui les a abandonnés.`,
        apparence: "Cheveux blonds courts impeccablement coiffés. Tenue de duelliste noire élégante. Regard calme et analytique. Porte son pistolet et sa rapière avec la même précision que ses paroles.",
        stats: { hp: 265, def: 60, spd: 90, crit: 85, mgk: 145, res: 95 },
        competences: [
            { nom: "Code du Duelliste", type: "passif", description: "CRIT +25% si elle attaque en premier dans le tour", niveauRequis: 1 },
            { nom: "Tir de Précision", type: "actif", description: "Tir électrique précis infligeant paralysie sur la cible", niveauRequis: 10 },
            { nom: "Duel Formel", type: "actif", description: "Défie un ennemi en duel — toutes attaques contre cet ennemi ont +40% dégâts pendant 2 tours", niveauRequis: 25 },
            { nom: "Championne Sans Défaite", type: "ultime", description: "Exécute sa technique de duel parfaite — dégâts critiques garantis + paralysie sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Navia",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Roche",
        description: `Navia est la présidente du Spina di Rosula — une organisation de Fontaine qui défend les immigrants et les personnes marginalisées. Charismatique, déterminée et d'une loyauté féroce envers les siens, elle combat avec un fusil à cristaux de roche qui transforme chaque tir en explosion dévastatrice. Elle porte le deuil de son père assassiné mais refuse que cette douleur définisse qui elle est. L'invasion l'a dépouillée de son organisation mais pas de sa mission — elle protège encore les plus vulnérables dans les tunnels de Starlight.`,
        apparence: "Cheveux blonds en volume avec chapeau élégant. Tenue rouge et noire du Spina di Rosula. Regard chaleureux mais déterminé. Son fusil est orné des symboles de son organisation.",
        stats: { hp: 275, def: 65, spd: 75, crit: 80, mgk: 140, res: 100 },
        competences: [
            { nom: "Présidente du Spina", type: "passif", description: "ATK +20% et protège les alliés à faible HP en absorbant une partie de leurs dégâts", niveauRequis: 1 },
            { nom: "Tir de Cristal", type: "actif", description: "Tir de fusil à cristaux de roche infligeant des dégâts explosifs massifs", niveauRequis: 10 },
            { nom: "Rafale du Spina", type: "actif", description: "Salve de tirs couvrant tout le champ de bataille", niveauRequis: 25 },
            { nom: "Pour les Miens", type: "ultime", description: "Déchaîne sa détermination — dégâts massifs + shield protégeant toute l'équipe pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Collei",
        univers: "Genshin Impact",
        rarete: "PEU_COMMUNE",
        type: "Vent",
        description: `Collei est une ranger de Sumeru — une jeune femme qui a connu une enfance difficile marquée par des expériences traumatisantes qui lui ont laissé des cicatrices, tant physiques qu'émotionnelles. Sous la tutelle de Cyno et entourée de gens bienveillants, elle a commencé à s'épanouir. Timide, anxieuse, mais avec un cœur immense, elle apporte à Starlight une douceur et une résilience qui inspirent ceux qui la connaissent. Sa maîtrise de l'arc est plus grande qu'elle ne veut bien l'admettre.`,
        apparence: "Cheveux bruns en nattes avec une coiffure soignée. Tenue de ranger de Sumeru. Regard souvent incertain mais sincère. Un mascaron botanique flotte parfois autour d'elle.",
        stats: { hp: 160, def: 35, spd: 70, crit: 55, mgk: 85, res: 60 },
        competences: [
            { nom: "Résilience", type: "passif", description: "HP +15% et immunité à la peur — elle a déjà connu pire", niveauRequis: 1 },
            { nom: "Flèche du Vent", type: "actif", description: "Tir précis infligeant des dégâts de vent sur une cible", niveauRequis: 10 },
            { nom: "Floral Brush", type: "actif", description: "Lance son mascaron botanique qui attaque automatiquement les ennemis", niveauRequis: 25 },
            { nom: "Arboreus", type: "ultime", description: "Invoque un grand arbre de vent qui frappe tous les ennemis à intervalles réguliers pendant 3 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Yumemizuki Mizuki",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Vent",
        description: `Mizuki est une personnage mystérieuse de Natlan aux capacités anémiques extraordinaires — une être entre rêve et réalité dont la nature exacte reste floue même pour ceux qui la côtoient. Elle semble exister dans plusieurs états simultanément, parfois présente et parfois comme une projection de quelque chose de plus grand. Ses attaques sont d'une beauté dérangeante, comme des rêves transformés en armes. L'invasion a trouvé en Mizuki quelqu'un qui comprend instinctivement les entités d'un autre monde — elle les reconnaît dans quelque chose qu'elle ressent en elle-même.`,
        apparence: "Silhouette délicate aux cheveux flottants de couleurs changeantes. Tenue entre kimono et rêve, aux motifs de fleurs et de lune. Yeux qui semblent parfois regarder au-delà de ce qui est visible. Une aura de douceur irréelle l'entoure.",
        stats: { hp: 300, def: 70, spd: 85, crit: 80, mgk: 175, res: 130 },
        competences: [
            { nom: "Entre Rêve et Réalité", type: "passif", description: "25% de chance d'esquiver toute attaque, MGK +25%", niveauRequis: 1 },
            { nom: "Rêve Offensif", type: "actif", description: "Transforme un rêve en attaque de vent dévastatrice sur tous les ennemis", niveauRequis: 10 },
            { nom: "Monde des Songes", type: "actif", description: "Plonge les ennemis dans un rêve — confusion pendant 2 tours", niveauRequis: 25 },
            { nom: "Rêve Éternel", type: "ultime", description: "Ouvre un portail vers le monde des rêves — dégâts massifs et immobilisation totale de tous les ennemis", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT — INAZUMA
    // ═══════════════════════════════
    {
        nom: "Ei Raiden",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Foudre",
        description: `Ei, aussi connue comme le Shogun Raiden, était l'Archon Electro d'Inazuma. Après la mort de sa sœur jumelle Makoto, Ei s'est retirée dans un monde intérieur pour se préserver de l'érosion du temps. L'invasion dimensionnelle a perturbé son Royaume Éternel et l'a forcée à revenir dans le monde physique pour la première fois depuis des siècles. Elle apprend lentement ce que signifie se battre pour des êtres vivants et éphémères.`,
        apparence: "Longs cheveux violets ornés d'un pendentif en forme d'œil sur le front. Kimono violet et noir aux motifs de foudre. Yeux violets lumineux qui crépitent d'électricité quand elle combat.",
        stats: { hp: 320, def: 75, spd: 85, crit: 80, mgk: 155, res: 115 },
        competences: [
            { nom: "Volonté de l'Éternité", type: "passif", description: "MGK +20% et régénère 5% HP par tour, immunité à la paralysie", niveauRequis: 1 },
            { nom: "Lame Musou", type: "actif", description: "Frappe tranchante électrique avec bonus dégâts contre ennemis paralysés", niveauRequis: 10 },
            { nom: "Domaine de l'Éternité", type: "actif", description: "Crée un champ électrique réduisant ATK ennemie de 25% pendant 3 tours", niveauRequis: 25 },
            { nom: "Jugement du Shogun", type: "ultime", description: "Frappe divine dévastatrice + paralyse tous les ennemis pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Yae Miko",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Foudre",
        description: `Yae Miko était la Grande Prêtresse du Grand Sanctuaire d'Inazuma — un kitsune millénaire qui avait traversé les âges avec une légèreté apparente dissimulant une intelligence et une profondeur redoutables. Amie proche d'Ei depuis des siècles, elle gérait également Yae Publishing House. L'invasion l'a sortie de ses manœuvres habituelles. Elle est convaincue que l'invasion cache quelque chose de bien plus complexe et fascinant.`,
        apparence: "Longs cheveux roses avec des oreilles de renard rosées et une queue touffue. Tenue de grande prêtresse rose et blanche. Sourire énigmatique permanent.",
        stats: { hp: 270, def: 60, spd: 85, crit: 80, mgk: 165, res: 115 },
        competences: [
            { nom: "Sagesse du Kitsune Millénaire", type: "passif", description: "MGK +25% et les attaques magiques ont 20% de chance de se dupliquer gratuitement", niveauRequis: 1 },
            { nom: "Torii Électrique", type: "actif", description: "Place des poteaux de foudre sacrés qui attaquent automatiquement les ennemis proches", niveauRequis: 10 },
            { nom: "Esprit du Sanctuaire", type: "actif", description: "Invoque un esprit kitsune amplifiant tous les dégâts de l'équipe de 20%", niveauRequis: 25 },
            { nom: "Grand Sacrilège Kitsune", type: "ultime", description: "Déchaîne la magie ancestrale millénaire — dégâts massifs sur tous + paralysie générale", niveauRequis: 50 },
        ]
    },
    {
        nom: "Kujou Sara",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Foudre",
        description: `Kujou Sara est la commandante des forces militaires d'Inazuma — une tengu guerrière d'une loyauté absolue envers le Shogun Raiden. Adoptée par le clan Kujou, elle a consacré sa vie au service et à la discipline militaire. Droite, directe, parfois rigide, elle est néanmoins une stratège redoutable et une combattante exceptionnelle. L'invasion l'a placée devant un ennemi qui ne suit aucun règlement militaire — elle s'adapte avec la rigueur d'une professionnelle.`,
        apparence: "Cheveux noirs avec des ailes de tengu déployées. Tenue militaire d'Inazuma impeccable malgré les combats. Regard ferme et discipliné.",
        stats: { hp: 215, def: 55, spd: 80, crit: 70, mgk: 110, res: 80 },
        competences: [
            { nom: "Loyauté du Tengu", type: "passif", description: "ATK +15% pour toute l'équipe et boost additionnel si Ei Raiden est présente", niveauRequis: 1 },
            { nom: "Flèche du Tengu", type: "actif", description: "Tir de foudre précis infligeant des dégâts critiques garantis", niveauRequis: 10 },
            { nom: "Formation Militaire", type: "actif", description: "Boost ATK et DEF de toute l'équipe de 20% pendant 2 tours", niveauRequis: 25 },
            { nom: "Jugement du Tengu", type: "ultime", description: "Salve de flèches de foudre sur tous les ennemis + paralysie", niveauRequis: 50 },
        ]
    },
    {
        nom: "Sangonomiya Kokomi",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Eau",
        description: `Kokomi est la Divine Prêtresse de l'Île Watatsumi — une leader politique et spirituelle qui a mené son peuple pendant la résistance contre le shogunat d'Inazuma. Contrairement aux apparences d'une figure sacrée distante, Kokomi est pragmatique, souvent épuisée, et rêve secrètement d'une vie normale loin des responsabilités. Ses capacités de soin sont parmi les plus puissantes de Teyvat. Elle gère la résistance dans les tunnels avec la même efficacité tranquille qu'elle administrait Watatsumi.`,
        apparence: "Cheveux roses en coiffure élaborée avec des ornements marins. Tenue de prêtresse bleue et blanche. Regard sérieux mais bienveillant.",
        stats: { hp: 280, def: 65, spd: 60, crit: 45, mgk: 155, res: 115 },
        competences: [
            { nom: "Divine Prêtresse", type: "passif", description: "Soigne 12% HP à toute l'équipe à chaque tour", niveauRequis: 1 },
            { nom: "Ankoku Isshin", type: "actif", description: "Déchaîne brièvement ses capacités offensives — dégâts d'eau massifs sur tous les ennemis proches", niveauRequis: 10 },
            { nom: "Kurage Sacré", type: "actif", description: "Invoque une méduse sacrée qui soigne en continu et attaque les ennemis proches", niveauRequis: 25 },
            { nom: "Marée de Watatsumi", type: "ultime", description: "Vague sacrée massive soignant l'équipe à plein HP et infligeant des dégâts d'eau dévastateurs", niveauRequis: 50 },
        ]
    },
    {
        nom: "Yoimiya",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Feu",
        description: `Yoimiya est la maîtresse artificière d'Inazuma — la meilleure pyrotechnicienne de l'archipel, héritière de la boutique Naganohari. Elle voit chaque feu d'artifice comme une façon de créer de la joie et des souvenirs pour les gens. Son optimisme et sa chaleur humaine sont aussi brillants que ses créations. L'invasion a détruit ses stocks mais pas sa créativité — elle transforme n'importe quel matériau en explosif avec une inventivité déconcertante.`,
        apparence: "Cheveux blonds ornés de coiffure traditionnelle avec rubans rouges. Tenue aux couleurs de feu. Sourire lumineux et énergie communicative.",
        stats: { hp: 195, def: 40, spd: 80, crit: 72, mgk: 105, res: 65 },
        competences: [
            { nom: "Artificière Passionnée", type: "passif", description: "CRIT +15% et toutes ses flèches enflammées laissent des traînées de feu", niveauRequis: 1 },
            { nom: "Flèche Enflammée", type: "actif", description: "Tir d'une flèche chargée d'explosif infligeant brûlure intense", niveauRequis: 10 },
            { nom: "Feu d'Artifice", type: "actif", description: "Lance plusieurs explosifs simultanément touchant tous les ennemis", niveauRequis: 25 },
            { nom: "Grand Finale", type: "ultime", description: "Spectacle pyrotechnique dévastateur — explosion massive sur toute la zone", niveauRequis: 50 },
        ]
    },
    {
        nom: "Shenhe",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Glace",
        description: `Shenhe est une adepte d'Inazuma élevée par Cloud Retainer — une femme qui a été séparée de l'humanité dès l'enfance et a grandi en maîtrisant une puissance glaciale terrifiante au prix d'une isolation émotionnelle profonde. Elle réprime constamment ses émotions car leur débordement cause des dommages physiques à son entourage. Froide en apparence, elle porte en réalité une solitude immense et un désir sincère de connexion qu'elle ne sait pas exprimer. Son frimas ne touche que les ennemis — jamais ceux qu'elle a choisi de protéger.`,
        apparence: "Cheveux blancs longs ornés de rubans rouges. Tenue blanche et rouge d'adepte. Yeux bleus d'une froideur apparente qui cache une profondeur émotionnelle intense. Des cristaux de glace orbitent naturellement autour d'elle.",
        stats: { hp: 315, def: 75, spd: 75, crit: 78, mgk: 162, res: 120 },
        competences: [
            { nom: "Adepte du Frimas", type: "passif", description: "Boost les dégâts de glace de toute l'équipe de 25%", niveauRequis: 1 },
            { nom: "Décharge Glaciale", type: "actif", description: "Libère une onde de froid destructrice sur tous les ennemis proches", niveauRequis: 10 },
            { nom: "Rite de l'Adepte", type: "actif", description: "Amplifie la prochaine attaque glaciale de l'équipe de 60%", niveauRequis: 25 },
            { nom: "Frimas Absolu", type: "ultime", description: "Libère ses émotions réprimées en une explosion glaciale dévastatrice — gel garanti sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Lan Yan",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Vent",
        description: `Lan Yan est une musicienne de Liyue aux capacités anémiques uniques — une jeune femme qui canalise le vent à travers sa musique pour créer des effets aussi bien offensifs que défensifs. Douce et réservée, elle parle plus volontiers à travers sa flûte qu'avec des mots. Son talent musical cache une sensibilité profonde et une perception fine des émotions autour d'elle. L'invasion a interrompu ses concerts mais pas sa musique — elle joue chaque soir dans les tunnels pour maintenir le moral des survivants.`,
        apparence: "Cheveux noirs aux reflets bleutés portés en coiffure traditionnelle de Liyue. Tenue musicienne aux tons bleus et dorés. Regard doux et introspectif. Porte toujours sa flûte.",
        stats: { hp: 180, def: 40, spd: 75, crit: 60, mgk: 115, res: 75 },
        competences: [
            { nom: "Mélodie du Vent", type: "passif", description: "Ses attaques musicales soignent légèrement l'équipe à chaque utilisation", niveauRequis: 1 },
            { nom: "Note Tranchante", type: "actif", description: "Lance une onde sonique de vent tranchant sur les ennemis", niveauRequis: 10 },
            { nom: "Symphonie Défensive", type: "actif", description: "Joue une mélodie créant un bouclier de vent protégeant toute l'équipe", niveauRequis: 25 },
            { nom: "Concerto Final", type: "ultime", description: "Performance ultime — onde de vent dévastatrice sur tous les ennemis + soins massifs pour l'équipe", niveauRequis: 50 },
        ]
    },
    {
        nom: "Yanfei",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Feu",
        description: `Yanfei est l'avocate la plus célèbre de Liyue — une demi-Adepte mi-humaine mi-Yakshas dont la maîtrise du droit de Liyue est absolue. Enthousiaste, bavarde et passionnée par la justice, elle combat avec des sceaux de feu qu'elle invoque avec la même précision qu'elle cite les textes juridiques. L'invasion a créé un vide légal total qu'elle trouve profondément perturbant — elle consacre une partie de son énergie à rédiger de nouveaux codes pour l'ère post-invasion.`,
        apparence: "Cheveux roses en twin-tails avec des petites cornes d'Adepte. Tenue élégante de juriste aux tons roses et blancs. Regard vif et enthousiaste.",
        stats: { hp: 185, def: 40, spd: 70, crit: 68, mgk: 118, res: 70 },
        competences: [
            { nom: "Juriste Adepte", type: "passif", description: "MGK +15% et chaque attaque génère un sceau de feu accumulant des dégâts bonus", niveauRequis: 1 },
            { nom: "Sceau Igné", type: "actif", description: "Lance des sceaux de feu sur les ennemis infligeant brûlure", niveauRequis: 10 },
            { nom: "Verdict Enflammé", type: "actif", description: "Consomme tous les sceaux pour une explosion massive", niveauRequis: 25 },
            { nom: "Code du Feu", type: "ultime", description: "Invoque tous ses sceaux simultanément — déluge de feu dévastateur sur tous les ennemis", niveauRequis: 50 },
        ]
    },
    {
        nom: "Hu Tao",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Feu",
        description: `Hu Tao est la 77ème directrice de la Maison Funéraire Wangsheng — une jeune femme espiègle et excentrique qui jongle entre son amour de la poésie, ses blagues macabres et une philosophie profonde sur la vie et la mort héritée de son rôle. Elle puise sa puissance dans son propre vitalité, brûlant sa vie pour décupler ses dégâts. L'invasion a créé plus de travail que la Maison Wangsheng ne peut en gérer — Hu Tao prend les choses avec son flegme habituel, et plus d'humour noir que la situation ne devrait l'autoriser.`,
        apparence: "Cheveux bruns en longues nattes ornées d'une épingle à fleur de prunier. Chapeau de gestionnaire funéraire. Yeux aux pupilles en forme de fleur. Sourire malicieux permanent. Porte sa lance avec la désinvolture de quelqu'un qui connaît intimement la mort.",
        stats: { hp: 290, def: 55, spd: 85, crit: 90, mgk: 158, res: 95 },
        competences: [
            { nom: "Guide des Âmes", type: "passif", description: "Plus ses HP sont bas, plus ses dégâts augmentent — jusqu'à +80% ATK sous 25% HP", niveauRequis: 1 },
            { nom: "Parade du Papillon", type: "actif", description: "Sacrifie 30% de ses HP pour entrer en mode Parade — dégâts massifs et application de saignement", niveauRequis: 10 },
            { nom: "Cercle Crimson", type: "actif", description: "Invoque un cercle de feu brûlant tous les ennemis qui s'y trouvent", niveauRequis: 25 },
            { nom: "Fleur du Repos Éternel", type: "ultime", description: "Frappe dévastatrice unique — dégâts proportionnels aux HP perdus + ressuscite avec 15% HP si elle tombe KO", niveauRequis: 50 },
        ]
    },
    {
        nom: "Xiangling",
        univers: "Genshin Impact",
        rarete: "COMMUNE",
        type: "Feu",
        description: `Xiangling est la cheffe cuisinière prodige du restaurant Wanmin de Liyue — une jeune femme passionnée par la cuisine qui transforme n'importe quel ingrédient, même les plus improbables, en chef-d'œuvre culinaire. Son panda Guoba l'accompagne partout et crache du feu sur demande. L'invasion a détruit son restaurant mais pas son instinct — elle cuisine pour les survivants de Starlight avec les maigres ressources disponibles, et le résultat est invariablement délicieux.`,
        apparence: "Cheveux noirs en twin-tails. Tenue de cuisinière pratique. Regard enthousiaste et déterminé. Guoba, son panda, est toujours perché quelque part près d'elle.",
        stats: { hp: 155, def: 30, spd: 65, crit: 55, mgk: 90, res: 50 },
        competences: [
            { nom: "Cuisine de Combat", type: "passif", description: "Soigne légèrement l'équipe à chaque tour grâce à ses concoctions", niveauRequis: 1 },
            { nom: "Guoba Attaque", type: "actif", description: "Envoie Guoba cracher du feu sur les ennemis", niveauRequis: 10 },
            { nom: "Épices Explosives", type: "actif", description: "Lance un mélange d'épices brûlant tous les ennemis", niveauRequis: 25 },
            { nom: "Pyronado", type: "ultime", description: "Lance sa lance en rotation créant une tornade de feu dévastatrice", niveauRequis: 50 },
        ]
    },
    {
        nom: "Beidou",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Foudre",
        description: `Beidou est la capitaine du Crux — la flotte de contrebande la plus redoutée de Liyue. Cette femme imposante et charismatique a bâti son empire maritime à la force de ses poings et de son épée électrique, sans jamais demander la permission à quiconque. Elle est devenue légendaire en tuant le Serpent Overlord de la mer seule, à mains nues. L'invasion a immobilisé sa flotte — Beidou combat maintenant à terre avec la même fureur qu'elle apportait aux tempêtes en mer.`,
        apparence: "Cheveux noirs longs avec un bandeau sur l'œil. Tenue de capitaine ouverte révélant des tatouages de mer. Silhouette imposante. Regard d'une confiance absolue en sa propre force.",
        stats: { hp: 305, def: 75, spd: 80, crit: 78, mgk: 130, res: 110 },
        competences: [
            { nom: "Capitaine du Crux", type: "passif", description: "Contre-attaque automatiquement 30% des attaques reçues avec des dégâts de foudre", niveauRequis: 1 },
            { nom: "Tidecaller", type: "actif", description: "Pare une attaque et libère une riposte électrique dévastatrice proportionnelle aux dégâts reçus", niveauRequis: 10 },
            { nom: "Tempête en Mer", type: "actif", description: "Déchaîne une tempête électrique frappant tous les ennemis proches", niveauRequis: 25 },
            { nom: "Stormbreaker", type: "ultime", description: "Invoque la tempête du Crux — foudre continue frappant tous les ennemis pendant 3 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Eula",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Glace",
        description: `Eula Lawrence est la capitaine du Bataillon des Fracas des Chevaliers de Favonius — descendante d'une noble famille dont l'histoire est entachée de trahisons envers Mondstadt. Elle s'est battue toute sa vie pour être acceptée malgré son héritage, développant une personnalité délibérément excentrique qui décrit tout en termes de "vengeance" tout en ayant le cœur le plus loyal qui soit. Sa claymore déchire la glace et les ennemis avec une force brute terrifiante.`,
        apparence: "Cheveux blonds en nattes élaborées. Uniforme de chevalière bleu et blanc adapté au combat. Regard altier et intense. Sa claymore laisse des traînées de glace explosive dans l'air.",
        stats: { hp: 335, def: 80, spd: 75, crit: 85, mgk: 145, res: 115 },
        competences: [
            { nom: "Noblesse Maudite", type: "passif", description: "ATK +20% et accumule des charges d'énergie glaciale à chaque attaque", niveauRequis: 1 },
            { nom: "Icetide Vortex", type: "actif", description: "Frappe explosive de glace réduisant RES ennemie et générant des charges", niveauRequis: 10 },
            { nom: "Souffle des Fracas", type: "actif", description: "Déchaîne une vague de glace frappant tous les ennemis proches", niveauRequis: 25 },
            { nom: "Glacial Illumination", type: "ultime", description: "Libère toutes ses charges en une explosion de glace cataclysmique — dégâts proportionnels aux charges accumulées", niveauRequis: 50 },
        ]
    },
    {
        nom: "Mona",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Eau",
        description: `Mona est une astrologue prodige de Mondstadt — une mage de l'eau aux capacités astrales extraordinaires qui lit l'avenir dans les étoiles avec une précision troublante. Toujours fauchée malgré son talent exceptionnel, elle est fière au point de refuser toute aide financière et survit grâce à sa débrouillardise. L'invasion était dans ses étoiles — elle l'avait vu venir, sans pouvoir l'empêcher. Cette impuissance lui pèse autant que la perte de son observatoire.`,
        apparence: "Cheveux noirs avec twin-tails ornés d'astres. Tenue de mage aux tons noirs et bleus avec des reflets stellaires. Chapeau de sorcière. Yeux bleus étoilés.",
        stats: { hp: 235, def: 50, spd: 80, crit: 72, mgk: 155, res: 95 },
        competences: [
            { nom: "Miroir d'Illusionniste", type: "passif", description: "25% de chance de créer un clone absorbant les attaques à sa place", niveauRequis: 1 },
            { nom: "Stellaris Phantasm", type: "actif", description: "Invoque une illusion aqueuse piégeant un ennemi et amplifiant les dégâts qu'il reçoit", niveauRequis: 10 },
            { nom: "Flux Onirique", type: "actif", description: "Tourbillon aquatique frappant tous les ennemis proches", niveauRequis: 25 },
            { nom: "Prophétie des Étoiles", type: "ultime", description: "Libère la puissance des astres — dégâts d'eau massifs + amplificateur de dégâts sur tous les ennemis pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Noelle",
        univers: "Genshin Impact",
        rarete: "COMMUNE",
        type: "Roche",
        description: `Noelle est une aspirante chevalière des Chevaliers de Favonius — une jeune femme d'une force physique phénoménale et d'une gentillesse sans limites qui échoue régulièrement aux tests d'admission non par manque de capacités mais par excès de priorité accordée à la protection des autres sur elle-même. Elle travaille comme femme de chambre entre les refus, avec la conviction tranquille que son heure viendra. Dans Starlight, elle est un pilier de réconfort et de protection pour tout le monde.`,
        apparence: "Cheveux bruns en nattes avec un serre-tête. Uniforme de chevalière-femme de chambre impeccable malgré les batailles. Sourire déterminé et chaleureux. Sa claymore est aussi grande qu'elle.",
        stats: { hp: 240, def: 80, spd: 50, crit: 55, mgk: 70, res: 95 },
        competences: [
            { nom: "Serment de Protection", type: "passif", description: "DEF +30% et soigne l'équipe proportionnellement à sa DEF à chaque attaque", niveauRequis: 1 },
            { nom: "Breastplate", type: "actif", description: "Crée un bouclier de roche absorbant les dégâts et soignant en continu", niveauRequis: 10 },
            { nom: "Frappe de Protection", type: "actif", description: "Attaque puissante qui soigne un allié blessé proportionnellement aux dégâts infligés", niveauRequis: 25 },
            { nom: "Sweep Time", type: "ultime", description: "Transformation en mode combat total — DEF convertie en ATK, attaques massives de zone", niveauRequis: 50 },
        ]
    },
    {
        nom: "Layla",
        univers: "Genshin Impact",
        rarete: "PEU_COMMUNE",
        type: "Glace",
        description: `Layla est une étudiante de l'Académie de Sumeru souffrant d'une forme de somnambulisme magique — elle accomplit des prouesses extraordinaires dans son sommeil sans en avoir aucun souvenir au réveil. Anxieuse, surchargée de travail et constamment épuisée, elle est néanmoins l'une des meilleures étudiantes de sa génération. Ses capacités de bouclier de glace sont exceptionnellement efficaces — encore plus quand elle dort. L'invasion lui fournit enfin une raison valable de ne pas étudier.`,
        apparence: "Cheveux bleus avec des étoiles dorées ornant sa coiffure. Tenue étudiante de Sumeru légèrement froissée. Yeux toujours légèrement endormis. Bâille régulièrement.",
        stats: { hp: 195, def: 55, spd: 55, crit: 55, mgk: 110, res: 85 },
        competences: [
            { nom: "Somnambulisme Magique", type: "passif", description: "DEF +25% et génère automatiquement des étoiles de glace pendant le sommeil de combat", niveauRequis: 1 },
            { nom: "Bouclier Stellaire", type: "actif", description: "Crée un puissant bouclier de glace absorbant de larges dégâts", niveauRequis: 10 },
            { nom: "Shooting Stars", type: "actif", description: "Lance des étoiles de glace sur tous les ennemis", niveauRequis: 25 },
            { nom: "Dream of the Star-Stream Shaker", type: "ultime", description: "Dans son sommeil, déchaîne sa pleine puissance — tempête de glace stellaire dévastatrice", niveauRequis: 50 },
        ]
    },
    {
        nom: "Chevreuse",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Feu",
        description: `Chevreuse est la capitaine de la Milice Spéciale de Fontaine — une officière de police d'élite spécialisée dans la régulation des duels et des conflits armés. Pragmatique, directe et profondément dédiée à l'ordre public, elle fait respecter les règles même dans les zones les plus chaotiques. Elle soigne ses blessés avec la même efficacité qu'elle neutralise ses adversaires. L'invasion a transformé son territoire en zone de guerre — Chevreuse fait ce qu'elle fait toujours : maintenir l'ordre, coûte que coûte.`,
        apparence: "Cheveux roux en chignon militaire. Uniforme de la Milice Spéciale de Fontaine. Regard professionnel et déterminé. Porte un fusil spécialisé qu'elle manie avec une aisance remarquable.",
        stats: { hp: 220, def: 55, spd: 70, crit: 65, mgk: 115, res: 85 },
        competences: [
            { nom: "Capitaine de la Milice", type: "passif", description: "Soigne l'équipe après chaque combat et boost DEF de 15%", niveauRequis: 1 },
            { nom: "Tir Perforant", type: "actif", description: "Tir de fusil perforant infligeant des dégâts de feu et réduisant la DEF ennemie", niveauRequis: 10 },
            { nom: "Protocole d'Urgence", type: "actif", description: "Soins rapides sur un allié + retrait de tous ses debuffs", niveauRequis: 25 },
            { nom: "Maintien de l'Ordre", type: "ultime", description: "Déchaîne ses protocoles d'intervention — attaques multiples + soins massifs équipe", niveauRequis: 50 },
        ]
    },
    {
        nom: "Lyney",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Feu",
        description: `Lyney est un magicien de Fontaine — un illusionniste de scène dont les tours de magie pyrotechniques cachent des capacités de combat réelles et redoutables. Charmeur, élégant et toujours souriant, il appartient à la Maison de l'Espoir d'Arlecchino qu'il sert avec une loyauté absolue. Ses performances sur scène sont maintenant des performances de combat — mais l'esthétique reste la même. L'invasion lui a volé son public, pas son sens du spectacle.`,
        apparence: "Cheveux blonds avec chapeau de magicien orné. Tenue de scène blanche et noire impeccable. Sourire de magicien professionnel. Accompagné de son chat Freminet.",
        stats: { hp: 245, def: 55, spd: 82, crit: 80, mgk: 138, res: 88 },
        competences: [
            { nom: "Prestidigitation", type: "passif", description: "CRIT +20% et 15% de chance que chaque attaque se duplique gratuitement", niveauRequis: 1 },
            { nom: "Feint Flamboyant", type: "actif", description: "Attaque illusoire qui trompe l'ennemi puis frappe depuis une direction inattendue", niveauRequis: 10 },
            { nom: "Chapeaux Enflammés", type: "actif", description: "Lance plusieurs chapeaux de feu sur tous les ennemis simultanément", niveauRequis: 25 },
            { nom: "Grand Finale", type: "ultime", description: "Le spectacle le plus dévastateur — explosion de feu massive sur toute la scène", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT — LIYUE
    // ═══════════════════════════════
    {
        nom: "Yelan",
        univers: "Genshin Impact",
        rarete: "LEGENDAIRE",
        type: "Eau",
        description: `Yelan est une agente secrète du gouvernement de Liyue — une espionne d'élite dont la véritable identité et les affiliations exactes restent mystérieuses même pour ceux qui l'emploient. Elle opère dans l'ombre avec une efficacité terrifiante, utilisant un arc et des dés pour des attaques d'eau dévastatrices. Froide, calculatrice, toujours plusieurs coups en avance, elle est également d'une loyauté surprenante envers les quelques personnes qu'elle a choisi de protéger. L'invasion lui fournit enfin un ennemi qui mérite ses capacités complètes.`,
        apparence: "Cheveux noirs en queue de cheval élégante. Tenue d'agente noire et bleue. Regard calculateur et légèrement amusé. Porte ses dés et son arc avec la désinvolture de quelqu'un qui n'a jamais manqué une cible.",
        stats: { hp: 295, def: 65, spd: 88, crit: 85, mgk: 158, res: 115 },
        competences: [
            { nom: "Agente des Ombres", type: "passif", description: "SPD +20% et chaque dash génère des dégâts d'eau supplémentaires", niveauRequis: 1 },
            { nom: "Lingerie d'Eau", type: "actif", description: "Dash aquatique infligeant des dégâts massifs à tout ennemi traversé", niveauRequis: 10 },
            { nom: "Dés du Destin", type: "actif", description: "Lance ses dés magiques — dégâts aléatoires mais toujours dévastateurs", niveauRequis: 25 },
            { nom: "Depth-Clarion Dice", type: "ultime", description: "Active ses capacités d'agente complètes — amplificateur de dégâts massif pour toute l'équipe pendant 3 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Zibai",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Foudre",
        description: `Zibai est une combattante de Liyue dont l'âme a été suspendue dans le temps par Istaroth après sa mort — une guerrière d'une ère révolue ramenée à l'existence dans un monde qu'elle ne reconnaît plus. Elle porte le poids de tout ce qu'elle a perdu avec une dignité tranquille, cherchant un sens nouveau dans ce monde transformé. Sa maîtrise de la foudre est celle d'une époque où les techniques de combat étaient transmises sans compromis.`,
        apparence: "Cheveux noirs aux reflets électriques, coiffure ancienne d'Inazuma. Tenue de guerrière d'une ère passée, préservée miraculeusement. Regard portant le poids de plusieurs vies.",
        stats: { hp: 205, def: 50, spd: 78, crit: 70, mgk: 115, res: 78 },
        competences: [
            { nom: "Âme Suspendue", type: "passif", description: "Immunité aux effets temporels, ATK +15%", niveauRequis: 1 },
            { nom: "Technique Ancienne", type: "actif", description: "Frappe d'une technique de combat oubliée — dégâts critiques garantis", niveauRequis: 10 },
            { nom: "Foudre d'Autrefois", type: "actif", description: "Invoque la foudre d'une ancienne technique paralysant l'ennemi", niveauRequis: 25 },
            { nom: "Legs du Passé", type: "ultime", description: "Libère toute la puissance d'une guerrière d'une ère oubliée — dégâts dévastateurs sur tous les ennemis", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // GENSHIN IMPACT — MONDSTADT
    // ═══════════════════════════════
    {
        nom: "Ayaka Kamisato",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Glace",
        description: `Ayaka Kamisato était l'héritière du clan Kamisato d'Inazuma — une noble formée dès l'enfance aux arts martiaux, à la cérémonie du thé et aux arts de cour. Elle portait le poids de sa famille avec une grâce parfaite. Quand l'invasion a frappé Inazuma, Ayaka a été parmi les premières à prendre les armes. Elle combat maintenant dans les tunnels avec la même précision glaciale qu'elle mettait dans ses kata d'entraînement.`,
        apparence: "Longs cheveux bleus-blancs ornés de fleurs de cerisier. Tenue de combat épurée blanc et bleu. Regard calme et résolu. Sa lame laisse des traînées de givre dans l'air.",
        stats: { hp: 200, def: 55, spd: 80, crit: 65, mgk: 80, res: 70 },
        competences: [
            { nom: "Grâce Kamisato", type: "passif", description: "DEF +20% et immunité au gel", niveauRequis: 1 },
            { nom: "Danse du Givre", type: "actif", description: "Attaque en rafale de glace frappant tous les ennemis proches", niveauRequis: 10 },
            { nom: "Pas de Brume", type: "actif", description: "Téléportation fulgurante suivie d'une attaque surprise avec bonus CRIT", niveauRequis: 25 },
            { nom: "Floraison Hivernale", type: "ultime", description: "Tourbillon de glace massif gelant tous les ennemis pendant 2 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Arlecchino",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Feu",
        description: `Arlecchino, la Quatrième des Fatui Harbingers, était surnommée Le Père — elle dirigeait la Maison de l'Espoir, un orphelinat façade pour former des agents Fatui. Froide et dévastatrice, elle traitait ses enfants-soldats avec une affection stricte. Quand l'invasion a décimé la Maison de l'Espoir, Arlecchino a perdu les seuls êtres qu'elle protégeait. Son sang brûle littéralement quand sa puissance se déchaîne.`,
        apparence: "Longs cheveux noirs et blancs. Yeux hétérochromes — un rouge vif, un noir avec un motif de croix. Tenue noire aux reflets rouges sang. Des flammes noires et rouges jaillissent de ses blessures en combat.",
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
        description: `Lumine n'appartient pas à ce monde — elle est une Voyageuse interdimensionnelle séparée de son frère jumeau Aether par une divinité inconnue. Elle a parcouru des dizaines de mondes avant d'atterrir dans celui de Starlight. Ce qu'elle a découvert en arrivant l'a glacée d'une reconnaissance troublante : l'invasion ressemble étrangement à quelque chose qu'elle a déjà vu. Elle est peut-être la seule à comprendre ce que sont vraiment les entités envahissantes.`,
        apparence: "Longs cheveux blonds nattés ornés de rubans. Tenue de voyageuse blanche et dorée. Yeux dorés lumineux. Elle dégage une légère aura de lumière en permanence.",
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
        description: `Jean était la Grand Maître par intérim des Chevaliers de Favonius — une femme qui portait le poids de la protection de toute une cité sur ses épaules avec un dévouement absolu. Elle a organisé l'évacuation de Mondstadt en restant en arrière pour s'assurer que personne ne soit laissé derrière. Dans les tunnels elle est devenue le pilier médical et moral de la communauté.`,
        apparence: "Longs cheveux blonds en queue de côté légèrement défaite. Tenue de chevalière abîmée mais réparée. Regard bienveillant mais profondément épuisé.",
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
        description: `Amber était la seule Ranger active des Chevaliers de Favonius — toujours optimiste, toujours volontaire pour les missions dangereuses. Quand l'invasion a frappé, elle était déjà en mission solo. Elle a survécu seule pendant des semaines et est arrivée dans les tunnels rayonnante, comme si elle revenait d'une longue promenade.`,
        apparence: "Cheveux châtains en hautes queues de cheval. Tenue rouge de ranger avec cape légèrement brûlée. Sourire lumineux permanent. Porte son arc et Baron Bunny.",
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
        description: `Lisa était la bibliothécaire des Chevaliers de Favonius — et la plus grande mage de Sumeru de sa génération, qui avait délibérément abandonné une carrière prestigieuse parce qu'elle préférait vivre à son rythme. L'invasion a détruit sa bibliothèque bien-aimée. Lisa a réagi avec une colère électrique froide et méthodique.`,
        apparence: "Longs cheveux violets bouclés. Chapeau de sorcière légèrement cabossé. Tenue violette élégante. Regard perpétuellement à moitié endormi mais qui analyse tout.",
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
        description: `Ningguang était la femme la plus puissante de Liyue — partie de rien, devenue milliardaire et bâtisseuse de la Jade Chamber. L'invasion a détruit la Jade Chamber en une nuit. Ningguang a regardé son chef-d'œuvre s'effondrer sans une larme — puis a retroussé ses manches.`,
        apparence: "Longs cheveux blancs ornés de bijoux dorés. Longue robe noire et or adaptée au combat. Maintien parfait. Fait flotter des cristaux de jade autour d'elle.",
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
        description: `Keqing était l'Yuheng du Conseil des Liyue Qixing — la conseillère la plus travailleuse et perfectionniste. Elle croyait que les mortels pouvaient et devaient se prendre en main. L'invasion lui a donné raison de la pire façon possible — les dieux n'ont pas suffi.`,
        apparence: "Cheveux violets en double chignon. Tenue violette pratique mais élégante. Yeux violets vifs. Laisse des traces de foudre dans l'air à chaque déplacement.",
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
        description: `Furina de Fontaine avait joué le rôle d'Archon pendant cinq cents ans — sans en être une. Simple humaine maintenant l'illusion d'être une divinité pendant cinq siècles pour protéger son peuple. Cinq cents ans de mensonge et de solitude absolue. L'invasion est arrivée alors qu'elle reconstruisait péniblement qui elle était vraiment.`,
        apparence: "Cheveux bleus et blancs mi-longs avec chapeau haut-de-forme. Tenue théâtrale bleue et blanche. Expressions faciales exagérément dramatiques. Yeux hétérochromes bleu clair et vert émeraude.",
        stats: { hp: 290, def: 65, spd: 75, crit: 75, mgk: 150, res: 110 },
        competences: [
            { nom: "Prima Donna", type: "passif", description: "Accumule des stacks de puissance quand des alliés sont blessés — jusqu'à +40% MGK", niveauRequis: 1 },
            { nom: "Salon Solitaire", type: "actif", description: "Invoque des entités d'eau attaquant automatiquement les ennemis", niveauRequis: 10 },
            { nom: "Rideau de Larmes", type: "actif", description: "Soigne l'équipe proportionnellement aux dégâts infligés", niveauRequis: 25 },
            { nom: "Centre de l'Attention", type: "ultime", description: "Explosion d'eau massive + absorbe 30% des dégâts pour toute l'équipe pendant 3 tours", niveauRequis: 50 },
        ]
    },
    {
        nom: "Barbara",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Eau",
        description: `Barbara était l'idole de Mondstadt et diaconesse de l'Église de Barbatos. Elle vivait dans l'ombre de sa sœur Jean tout en cherchant sa propre voie. L'invasion a transformé ses talents de guérisseuse en ressource vitale absolue. Elle est épuisée en permanence — il y a toujours plus de blessés qu'elle ne peut en soigner — mais refuse de s'arrêter.`,
        apparence: "Cheveux blonds en nattes avec barrettes. Tenue d'idole bleue et blanche abîmée. Regard bienveillant et légèrement inquiet.",
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
        description: `Ganyu était la secrétaire générale de la Chambre de Commerce de Liyue — une demi-Adepte qui avait travaillé sans relâche pendant des millénaires. L'invasion a dissous la Chambre en une nuit. Pour Ganyu, c'était toute son identité. Puis, progressivement, libératrice. Elle combat avec une précision glaciale et une liberté qu'elle découvre pour la première fois.`,
        apparence: "Longs cheveux bleus en queue basse ornée de fleurs. Petites cornes de chèvre bleues. Tenue bleue et blanche élégante. Ses flèches laissent des fleurs de givre à l'impact.",
        stats: { hp: 240, def: 50, spd: 60, crit: 90, mgk: 150, res: 85 },
        competences: [
            { nom: "Précision Adepte", type: "passif", description: "CRIT +30% pour toutes les attaques à distance", niveauRequis: 1 },
            { nom: "Flèche de Givre Chargée", type: "actif", description: "Tir chargé infligeant dégâts massifs de glace et gel sur la cible", niveauRequis: 10 },
            { nom: "Trail of the Qilin", type: "actif", description: "Se téléporte en arrière en laissant un leurre de glace explosif", niveauRequis: 25 },
            { nom: "Celestial Shower", type: "ultime", description: "Pluie de météorites de glace pendant 3 tours infligeant dégâts continus sur tous", niveauRequis: 50 },
        ]
    },
    {
        nom: "Faruzan",
        univers: "Genshin Impact",
        rarete: "RARE",
        type: "Vent",
        description: `Faruzan était une chercheuse de Sumeru qui avait passé cent ans piégée dans un domaine temporel. Elle avait dû réapprendre une époque entière en accéléré. L'invasion lui a semblé presque logique — juste une catastrophe de plus. Elle parle souvent à ses étudiants imaginaires, habitude que personne n'ose corriger.`,
        apparence: "Cheveux bleus en chignon complexe avec couvre-chef orange. Tenue de chercheuse bleue et orange. Regard vif et légèrement distrait.",
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
        description: `Nilou était la première danseuse du Grand Bazar de Sumeru. Le Grand Bazar a été détruit par l'invasion en une nuit. Nilou a continué à danser dans les tunnels, d'abord pour le moral des survivants, puis en découvrant que ses mouvements aquatiques avaient des propriétés offensives.`,
        apparence: "Longs cheveux auburn ornés de bijoux de danse. Tenue de danseuse bleue et dorée aux voiles aquatiques. Se déplace toujours avec une fluidité remarquable.",
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
        description: `Columbina, surnommée Damselette, était la Troisième des Fatui Harbingers — la plus dangereuse malgré son apparence de petite fille. Son origine reste mystérieuse même pour ses collègues Harbingers. L'invasion ne l'a pas effrayée — quelque chose dans sa nature semble en résonance avec les entités envahissantes.`,
        apparence: "Petite silhouette fragile aux longs cheveux roses pâles ornés de fleurs. Robe de dentelle rose et blanche. Yeux mi-clos rêveurs. Sourit doucement même dans les situations les plus violentes.",
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
        description: `Sandrone, La Marionnettiste, était la Septième des Fatui Harbingers — une génie de l'ingénierie pilotant un colosse mécanique. Elle n'avait que mépris pour quiconque ne comprenait pas les machines. L'invasion a mis à mal sa vision mécaniste — des entités qui ne suivent aucune logique qu'elle peut modéliser.`,
        apparence: "Très petite, cheveux blonds en nattes avec chapeau à voile. Tenue de technicienne. Regard froid et analytique derrière ses lunettes. Accompagnée de Scaramecha.",
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
        description: `Lauma était une agente de renseignement de la Fatui opérant dans l'ombre. L'invasion a dissous son réseau du jour au lendemain. Se retrouver sans rôle défini est pour elle une détresse qu'elle ne sait pas exprimer. Elle reste néanmoins l'une des meilleures informatrices de la résistance.`,
        apparence: "Apparence délibérément conçue pour ne pas être mémorisée. Cheveux noirs courts. Tenue sombre. Des yeux jaunes perçants qui semblent tout enregistrer.",
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
        description: `Nefer était une marchande de Sumeru spécialisée dans les épices rares. L'invasion a détruit ses entrepôts mais pas son sens des affaires. Dans les tunnels elle organise le commerce informel entre survivants, trouvant toujours un moyen de faire circuler les ressources. Elle prend une petite commission, bien sûr.`,
        apparence: "Cheveux bruns bouclés courts. Tenue de marchande colorée. Sourire commercial toujours prêt. Tablier avec de nombreuses poches pleines d'échantillons.",
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
        description: `Alice est l'une des huit sorcières légendaires de l'Hexenzirkel — mère de Klee, auteure des Guides du Voyageur de Teyvat. Sa puissance magique réelle est difficile à mesurer car elle préfère l'approche créative et souvent chaotique. Elle documente les entités envahissantes avec l'enthousiasme d'une scientifique face à une découverte extraordinaire.`,
        apparence: "Apparence jeune démentant plusieurs siècles d'existence. Cheveux blonds courts sous un chapeau d'aventurière. Tenue de voyage couverte de poches contenant des artefacts impossibles. Énergie débordante.",
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
        description: `Nicole est l'une des huit sorcières légendaires de l'Hexenzirkel. Contrairement à Alice, Nicole privilégie la précision et l'analyse. Sa maîtrise du vent en fait une technicienne redoutable souvent sous-estimée. Elle coordonne avec Alice pour comprendre et contrer l'invasion.`,
        apparence: "Cheveux bruns ornés de symboles runiques discrets. Tenue de sorcière sobre aux teintes vertes et grises. Regard calme et calculateur. Des courants d'air subtils tourbillonnent autour d'elle.",
        stats: { hp: 275, def: 70, spd: 85, crit: 75, mgk: 158, res: 118 },
        competences: [
            { nom: "Analyse Runique Millénaire", type: "passif", description: "Réduit la RES ennemie de 25%, synergies avec Alice si dans la même équipe", niveauRequis: 1 },
            { nom: "Lame de Vent Précise", type: "actif", description: "Tranchant de vent ciblé réduisant SPD ennemie de 20%", niveauRequis: 10 },
            { nom: "Vortex Runique", type: "actif", description: "Tourbillon magique amplifiant tous les dégâts de l'équipe de 30%", niveauRequis: 25 },
            { nom: "Tempête de l'Hexenzirkel", type: "ultime", description: "Tempête magique combinant vent et magie runique ancienne — dégâts massifs sur tous", niveauRequis: 50 },
        ]
    },
    {
        nom: "Kirara",
        univers: "Genshin Impact",
        rarete: "PEU_COMMUNE",
        type: "Roche",
        description: `Kirara est une kunoichi-chat (nekomata) de Inazuma qui travaille comme livreuse pour la compagnie Komaniya Express. Enthousiaste, travailleuse et adorable, elle prend chaque livraison avec un sérieux total, peu importe le danger. Ses capacités de kunoichi sont bien plus impressionnantes qu'elle ne le laisse croire. L'invasion a rendu les livraisons considérablement plus compliquées — mais Kirara livre toujours, coûte que coûte.`,
        apparence: "Cheveux bruns avec des oreilles et une queue de chat. Tenue de livreuse aux couleurs de Komaniya Express. Regard enthousiaste et bienveillant.",
        stats: { hp: 205, def: 55, spd: 80, crit: 55, mgk: 85, res: 75 },
        competences: [
            { nom: "Livraison Garantie", type: "passif", description: "DEF +20% et soigne légèrement l'équipe à chaque déplacement rapide", niveauRequis: 1 },
            { nom: "Boîte Explosive", type: "actif", description: "Lance un colis piégé explosant en contact avec les ennemis", niveauRequis: 10 },
            { nom: "Mode Livraison Express", type: "actif", description: "Se transforme en boule de chat protégée, absorbant les dégâts pour l'équipe", niveauRequis: 25 },
            { nom: "Livraison Spéciale", type: "ultime", description: "Déchaîne ses techniques de kunoichi — attaques multiples sur tous les ennemis + shield massif", niveauRequis: 50 },
        ]
    },
    {
        nom: "Chiori",
        univers: "Genshin Impact",
        rarete: "EPIQUE",
        type: "Roche",
        description: `Chiori est une styliste de mode de Fontaine — une créatrice d'exception dont la maîtrise du tissu et de la roche est devenue une forme d'art martial unique. Exigeante, passionnée et d'une esthétique impeccable même en plein combat, elle refuse catégoriquement de se battre en tenue non appropriée. L'invasion a fourni des matériaux inattendus à ses créations. Elle continue à coudre entre les batailles.`,
        apparence: "Cheveux noirs en coiffure élaborée aux motifs géométriques. Tenue de styliste aux coupes parfaites. Regard critique évaluant constamment les tenues de tout le monde.",
        stats: { hp: 250, def: 65, spd: 70, crit: 75, mgk: 130, res: 95 },
        competences: [
            { nom: "Haute Couture", type: "passif", description: "DEF +20% et les toiles de roche qu'elle crée ont 15% de dégâts supplémentaires", niveauRequis: 1 },
            { nom: "Ciseau Tranchant", type: "actif", description: "Frappe tranchante de roche avec la précision d'une cisaille de couturière", niveauRequis: 10 },
            { nom: "Mannequin de Roche", type: "actif", description: "Invoque un mannequin de roche qui attire et absorbe les attaques ennemies", niveauRequis: 25 },
            { nom: "Collection Finale", type: "ultime", description: "Présente sa collection ultime — explosion de roche massive sur toute la zone", niveauRequis: 50 },
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
        description: `Makima était officiellement une haute responsable de l'Organisation de Contrôle des Démons — en réalité le Démon du Contrôle lui-même. Sa capacité à contrôler n'importe qui, combinée à une quasi-immortalité, en faisait une adversaire proprement inarrêtable. Son véritable objectif : créer un monde de paix par la domination absolue de l'humanité. Elle prétend aider les survivants. Personne ne la croit vraiment. Personne n'ose lui dire non.`,
        apparence: "Longs cheveux auburn nattés. Yeux rouges aux motifs d'anneaux concentriques hypnotiques. Tenue de bureau formelle en lambeaux portée avec une dignité absolue. Sourire serein et bienveillant en toutes circonstances.",
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
        description: `Reze était le Démon de la Bombe — une hybride démon-humaine créée comme arme par une agence gouvernementale. Envoyée en mission, elle est tombée amoureuse de Denji. Pour la première fois, elle a voulu s'échapper de son rôle d'arme. Cette liberté lui a été arrachée. L'invasion l'a libérée de ses anciens maîtres mais pas de sa nature explosive.`,
        apparence: "Cheveux bleus courts avec une barrette en forme de bombe. Tenue décontractée pratique. Sourire doux cachant une puissance explosive littérale.",
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
        description: `Himeno était une chasseuse de démons senior ayant perdu successivement tous ses partenaires. Elle compensait par un cynisme affiché et une loyauté absolue envers les quelques personnes encore en vie. Elle mourrait pour protéger ses coéquipiers sans hésitation — ce qu'elle a d'ailleurs failli faire plusieurs fois.`,
        apparence: "Cheveux noirs mi-longs. Cache-œil sur l'œil gauche. Tenue de chasseuse légèrement tachée. Cigarette quasi-permanente. Regard las mais attentif.",
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
        description: `Frieren est une elfe magicienne de plus d'un millénaire. Elle a participé à la grande quête qui a vaincu le Roi Démon, une aventure qui lui a semblé passer en un instant. Elle a erré pendant des décennies, collectant des sorts inutiles par curiosité, sans comprendre pourquoi les humains pleuraient avant de mourir de vieillesse. Elle apprend lentement ce que signifie le temps pour les êtres éphémères.`,
        apparence: "Petite silhouette aux longs cheveux argentés et grandes oreilles elfiques. Tenue de magicienne grise simple. Expression habituellement vide ou légèrement confuse. Yeux gris-bleu anciens.",
        stats: { hp: 260, def: 60, spd: 70, crit: 85, mgk: 195, res: 140 },
        competences: [
            { nom: "Millénaire de Magie", type: "passif", description: "MGK +30% et immunité à la dispersion magique et au silence", niveauRequis: 1 },
            { nom: "Sort Apparemment Inutile", type: "actif", description: "Sort en apparence anodin mais dévastateur dans le bon contexte", niveauRequis: 10 },
            { nom: "Analyse de Mille Ans", type: "actif", description: "Identifie et annule toutes les capacités magiques actives des ennemis", niveauRequis: 25 },
            { nom: "Zoltraak Absolu", type: "ultime", description: "Le sort offensif le plus puissant de son répertoire millénaire — dégâts magiques dévastateurs ignorant toutes résistances", niveauRequis: 50 },
        ]
    },

    // ═══════════════════════════════
    // REDO OF HEALER
    // ═══════════════════════════════
    {
        nom: "Flare",
        univers: "Redo of Healer",
        rarete: "EPIQUE",
        type: "Feu",
        description: `Flare Arlgrande Jioral était la première princesse du Royaume de Jioral. Elle avait commis des actes terribles qu'elle ne pouvait plus défaire et entrepris un difficile processus de reconstruction. L'invasion est arrivée en plein milieu de ce processus, comme si le monde refusait de lui accorder la paix dont elle avait besoin.`,
        apparence: "Longs cheveux roses éclatants. Tenue royale rouge et dorée adaptée au combat. Regard alternant entre fierté aristocratique et une vulnérabilité qu'elle apprend à ne plus cacher.",
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
        description: `Ren était liée à un démon par un contrat lui conférant des pouvoirs surnaturels en échange d'une partie de son humanité. L'invasion dimensionnelle a bouleversé l'équilibre fragile entre deux mondes. Son démon lié réagit différemment aux entités envahissantes — parfois avec hostilité, parfois avec quelque chose ressemblant à de la reconnaissance.`,
        apparence: "Cheveux noirs mi-longs avec des mèches violettes apparaissant quand elle utilise ses pouvoirs. Yeux changeant de couleur selon son niveau de transformation. Tenue sombre avec des marques démoniaques sur les avant-bras.",
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
        description: `Ai Hoshino était l'idole la plus aimée du Japon. Elle disait que son amour pour ses fans était un mensonge — mais c'était l'inverse. Chaque performance était une tentative sincère de donner quelque chose de réel à des gens qu'elle ne savait pas comment aimer autrement. Dans l'univers de Starlight elle existe — réinvoquée par une clé mystérieuse — et sa présence lumineuse dans les tunnels sombres est proche d'un miracle.`,
        apparence: "Longs cheveux noirs brillants. Yeux en forme d'étoile dorés brillant dans l'obscurité. Tenue d'idole adaptée pour la survie. Son sourire — quand il apparaît vraiment — illumine physiquement la pièce.",
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
        description: `Ruby Hoshino est la fille d'Ai — réincarnation de Sarina Tendou qui a été réincarnée dans le corps de la fille de son idole. Elle porte un double poids : une enfance précédente terminée tragiquement et être la fille d'une légende. Elle a choisi de devenir idole non pour suivre sa mère mais pour la surpasser.`,
        apparence: "Cheveux noirs avec reflets rouges. Yeux en forme d'étoile rouge vif. Tenue d'idole rouge et noire. Énergie absolument débordante.",
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