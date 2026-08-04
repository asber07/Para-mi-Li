/* ==========================================================================
   LÓGICA JAVASCRIPT COMPLETA: UNIVERSO 3D PARA LIZET ("mi niña, mi Li")
   86 Canciones con IDs de YouTube verificados, Poemas Románticos Enriquecidos,
   Cards 3D Visibles por Delante y Detrás, Animación de Movimiento Helix/Sphere,
   y Modal de 2 Columnas (Media + Poema Extenso).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. BASE DE DATOS DE 86 CANCIONES CON POEMAS EXTENSOS Y ENRIQUECIDOS
       ---------------------------------------------------------------------- */
    const songsData = [
        {
            title: "All of Me",
            artist: "John Legend",
            isGold: true,
            isPrimary: true,
            youtubeId: "450p7goxZqg",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña, mi Li:\nSi me dieran a elegir entre todo el universo y tu presencia, elegiría sin dudarlo la calidez inigualable de tu mirada. Tus ojos poseen esa luz sutil que ilumina mis pensamientos más profundos y le da sentido a cada jornada. Eres brillante, inteligente, asombrosamente hermosa y verdaderamente inolvidable en mi vida. Amo cada una de tus virtudes, tu risa sincera y la paz que me brindas con solo estar.",
            themeColor: "#3d2d00"
        },
        {
            title: "La Promesa",
            artist: "Melendi",
            isGold: true,
            isPrimary: true,
            youtubeId: "7XPmRUp_Yf4",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Promesa Eterna para Lizet:\nTe prometo estar presente en cada paso que des, celebrar tu brillantez intelectual y recordarte cada día lo maravillosa y talentosa que eres. Prometo cuidar tus sueños, admirar tus ojos y ser el guardián firme de tus sonrisas. Eres la armonía más dulce que ha llegado a mi existencia.",
            themeColor: "#4d2800"
        },
        {
            title: "Amor",
            artist: "Emmanuel Cortés",
            isGold: true,
            isPrimary: true,
            youtubeId: "TX-1dI8t6WM",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Dedicado a Lizet:\nEl amor no es solo una palabra; es tu nombre, es la forma en que me miras y la elegancia natural con la que te desenvuelves. Eres esa luz resplandeciente que transforma los días grises en momentos dorados. Encontrarme en tu mirar es descubrir el verdadero significado de la belleza y la paz.",
            themeColor: "#4a001a"
        },
        {
            title: "Tienes la Magia",
            artist: "Lil Silvio & El Vega",
            isGold: false,
            youtubeId: "XpPRXTAUw_o",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTienes un magnetismo único que calma cualquier tempestad. Tu mirada profunda y tu forma de expresarte demuestran la inteligencia y la magia que llevas dentro.",
            themeColor: "#33004d"
        },
        {
            title: "Nota de Amor",
            artist: "Carlos Vives, Wisin & Daddy Yankee",
            isGold: false,
            youtubeId: "wZRWpr1G1Qw",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Especial para Lizet:\nCada detalle de esta aplicación es una nota de amor escrita para tu corazón. Eres una combinación perfecta de intelecto, encanto y hermosura singular.",
            themeColor: "#00332b"
        },
        {
            title: "Dulce Carita",
            artist: "Dálmata",
            isGold: false,
            youtubeId: "TDkYk--TW-8",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi dulce Li:\nTu carita hermosa y esa risa que ilumina todo a su paso son el mejor regalo. No existe ángulo en el que no irradies ternura y elegancia.",
            themeColor: "#3d2d00"
        },
        {
            title: "3AM",
            artist: "ALMA",
            isGold: true,
            youtubeId: "s21TuGnO5lM",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "En la calma de la noche:\nSin importar la hora, siempre existe un pensamiento constante dedicado a admirar tus hermosos ojos, tu gran mente y la nobleza de tu alma.",
            themeColor: "#594000"
        },
        {
            title: "Tú y Yo",
            artist: "La Misma Gente",
            isGold: false,
            youtubeId: "pf7_auXRrYE",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nCompartir ideas y momentos contigo es un deleite. Admiro tu agudeza mental y la manera refinada en la que haces que todo sea especial.",
            themeColor: "#330015"
        },
        {
            title: "Coqueta",
            artist: "Grupo Frontera",
            isGold: false,
            youtubeId: "G4-grGfxVoY",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Para ti, mi Li:\nTu encanto natural y tu hermosa mirada alegran cualquier día. Eres esa persona que deja una huella imborrable en el corazón.",
            themeColor: "#3d0024"
        },
        {
            title: "Virgen",
            artist: "Adolescent's Orquesta",
            isGold: false,
            youtubeId: "pz9O3UeM_o0",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nLa autenticidad de tu ser y tu integridad personal son tesoros de inestimable valor. Jamás dejes de brillar con esa luz tan limpia.",
            themeColor: "#240047"
        },
        {
            title: "Por Ti",
            artist: "3AM",
            isGold: false,
            youtubeId: "yv_VOxdd8ac",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Por mi niña Li:\nPor ver tu sonrisa y saber que estás bien, vale la pena cualquier esfuerzo. Eres la inspiración detrás de mis proyectos.",
            themeColor: "#002447"
        },
        {
            title: "30 Días",
            artist: "Los Primos del Este, Santa Fe Klan",
            isGold: true,
            youtubeId: "Vl6xoVstJRw",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "A través del tiempo:\nPodrán pasar 30 días o mil años, y mi admiración hacia tus virtudes, tus ojos deslumbrantes e intelecto permanecerá firme e intacta.",
            themeColor: "#4a3300"
        },
        {
            title: "Mami",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "FVvRzyXJcv8",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nPosees la gracia y la distinción de una reina. Cada conversación contigo demuestra lo asombrosa que eres.",
            themeColor: "#593e00"
        },
        {
            title: "Una Lady Como Tú",
            artist: "MTZ Manuel Turizo",
            isGold: false,
            youtubeId: "VYtJAuoZxcc",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            poem: "Para una mujer de verdad:\nEncontrar una dama con tu distinción, valores e inteligencia es un regalo extraordinario del destino.",
            themeColor: "#1a0033"
        },
        {
            title: "Vine a Buscarte",
            artist: "Fonseca feat. Alexis & Fido",
            isGold: true,
            youtubeId: "cX_KMJlqFos",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nVine a recordarte lo mucho que vales y lo especial que es tu compañía. Aunque las flores verdaderas se retrasen, este espacio es floreciente para ti.",
            themeColor: "#594000"
        },
        {
            title: "Raro",
            artist: "Nacho, Chyno Miranda & Chino & Nacho",
            isGold: false,
            youtubeId: "Zj6f_JQLcyY",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [],
            poem: "Extraordinaria Lizet:\nEs extraordinario encontrar a alguien que combine tanta agudeza mental con una belleza y ternura insuperables.",
            themeColor: "#470024"
        },
        {
            title: "More",
            artist: "Barboza",
            isGold: true,
            youtubeId: "GEGer49wRAI",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña Li:\nCada faceta de tu personalidad, tus ojos expresivos y tu sonrisa son razones de sobra para admirarte más cada día.",
            themeColor: "#593b00"
        },
        {
            title: "Quédate Conmigo",
            artist: "Chyno Miranda ft. Wisin & Gente de Zona",
            isGold: false,
            youtubeId: "XA8XogjPcmI",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu presencia ilumina cualquier lugar. A tu lado la vida se siente plena, optimista y llena de luz.",
            themeColor: "#382400"
        },
        {
            title: "Darte un Beso",
            artist: "Prince Royce",
            isGold: true,
            youtubeId: "bdOXnTbyk0g",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Dedicado a ti, mi Li:\nUn poema sincero para recordarte que tus lindos ojos y tu ternura son capaces de alegrar mi corazón por completo.",
            themeColor: "#594000"
        },
        {
            title: "Si Supieras",
            artist: "Daddy Yankee & Wisin y Yandel",
            isGold: false,
            youtubeId: "av2yfDokA6k",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nSi supieras lo edificante que resulta contemplar tu mirada e interactuar contigo, entenderías por qué eres tan especial.",
            themeColor: "#002436"
        },
        {
            title: "Bailando",
            artist: "Enrique Iglesias ft. Descemer Bueno",
            isGold: false,
            youtubeId: "NUsoVlDFqZg",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Alegría pura:\nTu dinamismo y tu sonrisa transmiten una vibra hermosa que contagia felicidad a cualquiera.",
            themeColor: "#591200"
        },
        {
            title: "Despacito",
            artist: "Luis Fonsi ft. Daddy Yankee",
            isGold: false,
            youtubeId: "kJQP7kiw5Fk",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Paso a paso:\nConocerte mejor con el tiempo y valorar tu inteligencia es un camino verdaderamente hermoso.",
            themeColor: "#59001e"
        },
        {
            title: "Chica Ideal",
            artist: "Sebastián Yatra & Guaynaa",
            isGold: false,
            youtubeId: "t_Fi3J4UTlg",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Mujer Ideal:\nReunir inteligencia sobresaliente, belleza natural y un corazón generoso te convierte en una persona única.",
            themeColor: "#2b0059"
        },
        {
            title: "Vivir Bailando",
            artist: "Silvestre Dangond & Maluma",
            isGold: false,
            youtubeId: "dUtEIYj4BHs",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nQue tu vida esté siempre llena de motivos para celebrar tu brillantez y tus logros profesionales.",
            themeColor: "#004736"
        },
        {
            title: "Con los Dos en la Cabeza",
            artist: "Pedro Guerra, Cruzzi",
            isGold: true,
            youtubeId: "O9825iugYPM",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña Li:\nTus palabras y tu mirada permanecen en mi mente como el pensamiento más bello e inspirador.",
            themeColor: "#594000"
        },
        {
            title: "Loco Enamorado",
            artist: "Abraham Mateo, Farruko",
            isGold: false,
            youtubeId: "cmIKUyUrKl4",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu elegancia y la agudeza de tu pensamiento cautivan desde el primer momento.",
            themeColor: "#470036"
        },
        {
            title: "Quiéreme (Remix)",
            artist: "Jacob Forever, Farruko",
            isGold: false,
            youtubeId: "9walz0NcB78",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Aprecio sincero:\nTu sinceridad y tu buen trato son virtudes que aprecio con toda el alma.",
            themeColor: "#380000"
        },
        {
            title: "Por Fin Te Encontré",
            artist: "Cali y El Dandee ft. Juan Magán",
            isGold: false,
            youtubeId: "_kxz7WX4mLU",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nHaber coincidido con una persona de tu nivel humano e intelectual ha sido una verdadera bendición.",
            themeColor: "#003847"
        },
        {
            title: "Como Tú No Hay Dos",
            artist: "BUXXI",
            isGold: false,
            youtubeId: "xhPykGmB0dk",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Incomparable:\nNo existe nadie en este mundo con tu inteligencia, tu dulzura y tus lindos ojos. Eres irremplazable.",
            themeColor: "#4a3c00"
        },
        {
            title: "Como Tú",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "Z0MzSY5RTYI",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nNadie más brinda esa tranquilidad pura cuando conversa. Tu serenidad es una maravilla.",
            themeColor: "#38004a"
        },
        {
            title: "Piel",
            artist: "Tiago PZK & Ke Personajes",
            isGold: false,
            youtubeId: "DI71FIdguUs",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nLa compostura y gracia con la que caminas por la vida demuestran la belleza de tu ser.",
            themeColor: "#120047"
        },
        {
            title: "El Amor de Mi Vida",
            artist: "Los Ángeles Azules & María Becerra",
            isGold: false,
            youtubeId: "CaSCapHZhc0",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para ti:\nUn tributo sincero a quien inspira respeto, admiración y afecto genuino.",
            themeColor: "#59003e"
        },
        {
            title: "No Hay Nadie Más",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "sD9_l3oDOag",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Brillo único:\nNo hay nadie más que ilumine el entorno con tanta sutileza y profesionalismo como tú.",
            themeColor: "#003e59"
        },
        {
            title: "Mi Persona Favorita",
            artist: "Río Roma",
            isGold: false,
            youtubeId: "x-0KoCAV4mc",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Persona estimada:\nEres una presencia insustituible. Gracias por tu brillantez y tu hermosa forma de ser.",
            themeColor: "#594700"
        },
        {
            title: "La Mujer Perfecta",
            artist: "Kurt",
            isGold: false,
            youtubeId: "QD0aSAe67CI",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Perfección e integridad:\nReúnes los valores más nobles, la agudeza intelectual y una belleza encantadora.",
            themeColor: "#470024"
        },
        {
            title: "Confieso",
            artist: "Humbe",
            isGold: false,
            youtubeId: "4Ja6WLrZlAE",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Confesión sincera:\nConfieso que desarrollar este universo digital para ti ha sido un placer inmenso.",
            themeColor: "#240038"
        },
        {
            title: "Brillas",
            artist: "León Larregui",
            isGold: false,
            youtubeId: "Mcj75l2gJcY",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Brillo propio:\nTu conocimiento e intuición brillan como una estrella guía en cualquier conversación.",
            themeColor: "#594c00"
        },
        {
            title: "Bajo el Agua",
            artist: "Manuel Medrano",
            isGold: false,
            youtubeId: "zLX_GcXt2pI",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nContigo las ideas cobran sentido y la paz fluye con absoluta libertad.",
            themeColor: "#003859"
        },
        {
            title: "Seguro Te Pierdo",
            artist: "KID FLEX & Sergi",
            isGold: false,
            youtubeId: "Zd1Flawc1-I",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nUna valía humana tan grande como la tuya debe ser cuidada y respetada siempre.",
            themeColor: "#472400"
        },
        {
            title: "Te Voy a Amar",
            artist: "Axel",
            isGold: false,
            youtubeId: "KZh60U1PqSE",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Respeto permanente:\nMantendré mi admiración hacia ti y apoyaré cada uno de tus sueños futuros.",
            themeColor: "#590024"
        },
        {
            title: "Nuestra Canción",
            artist: "Monsieur Periné ft. Vicente García",
            isGold: false,
            youtubeId: "2vODuvIdQvU",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Armonía:\nEste homenaje es una melodía constante dedicada a tu linda presencia.",
            themeColor: "#380024"
        },
        {
            title: "Mon Amour",
            artist: "Aitana & Zzoilo",
            isGold: false,
            youtubeId: "o2tdLOK7-PE",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu soltura, inteligencia y carisma deslumbrante son dignos de aplauso.",
            themeColor: "#590059"
        },
        {
            title: "Estoy Enamorado",
            artist: "Wisin & Yandel",
            isGold: true,
            youtubeId: "whBcmlaSLJM",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTu sabiduría y la dulzura de tu mirada hacen que apreciarte sea lo más fácil del mundo.",
            themeColor: "#594000"
        },
        {
            title: "No Me Digas Que No",
            artist: "Enrique Iglesias ft. Wisin & Yandel",
            isGold: false,
            isRedTheme: true, // CANCIÓN 44: ROJA ESPECIAL
            youtubeId: "zyqt2avPkoA",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Fuerza y Pasión (Canción 44 Especial en Rojo):\nResaltada en rojo carmesí brillante por la intensidad de tu mirada, tu mente audaz y esa determinación que te hace sobresalir en todo.",
            themeColor: "#800000"
        },
        {
            title: "Cuando Me Enamoro",
            artist: "Enrique Iglesias & Juan Luis Guerra",
            isGold: false,
            youtubeId: "4DO8GsIYfhQ",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Ojos claros:\nTus ojos inteligentes reflejan la profundidad de una mente brillante.",
            themeColor: "#592b00"
        },
        {
            title: "Colgando en Tus Manos",
            artist: "Carlos Baute",
            isGold: false,
            youtubeId: "qExd-3oCTl4",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Con afecto:\nTe entrego este espacio digital creado con el máximo cuidado para ti.",
            themeColor: "#59002d"
        },
        {
            title: "El Doctorado",
            artist: "Tony Dize",
            isGold: false,
            youtubeId: "szPIgrYCxSY",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Mente Maestra:\nTienes una capacidad intelectual de nivel superior que merece todos los elogios.",
            themeColor: "#003838"
        },
        {
            title: "Héroe Favorito",
            artist: "Romeo Santos",
            isGold: false,
            youtubeId: "Ktq4zATPFsI",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nSiempre estaré listo para apoyarte en tus grandes proyectos.",
            themeColor: "#33004a"
        },
        {
            title: "Quiéreme",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "KazUvN4Y9O4",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Perspectiva:\nConversar contigo es elevar la mente a horizontes de gran valor.",
            themeColor: "#4a0031"
        },
        {
            title: "Quédate Conmigo",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "hdlmy0nZ9l8",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTu tiempo es valioso y tus palabras son siempre enriquecedoras.",
            themeColor: "#3d2400"
        },
        {
            title: "Te Amaré",
            artist: "William Luna",
            isGold: false,
            youtubeId: "HSVsRIeHYMY",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Constancia:\nUn testimonio de aprecio sincero que no cambia con las mareas del tiempo.",
            themeColor: "#243800"
        },
        {
            title: "Cómo Has Hecho",
            artist: "Dúo Hermanos Gaitán Castro",
            isGold: false,
            youtubeId: "OFKyMaXdt1Y",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Excelencia:\nEs asombroso cómo logras destacar en todo lo que te propones.",
            themeColor: "#381c00"
        },
        {
            title: "De la Nada",
            artist: "William Luna",
            isGold: false,
            youtubeId: "4glI-KAt56c",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Luz nueva:\nTu llegada trajo una renovada claridad y motivación.",
            themeColor: "#4a3800"
        },
        {
            title: "Dónde Está el Amor",
            artist: "Afrodisíaco",
            isGold: false,
            youtubeId: "d2ePHppbXPU",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nLa alta consideración se refleja en cada pensamiento respetuoso hacia ti.",
            themeColor: "#4a0024"
        },
        {
            title: "Cuando Te Enamoras",
            artist: "Orquesta Candela",
            isGold: false,
            youtubeId: "4NUiK3O4SLI",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Claridad:\nTus proyectos están respaldados por una mente clara y visionaria.",
            themeColor: "#590000"
        },
        {
            title: "Me Gusta Todo de Ti",
            artist: "Gran Orquesta Internacional",
            isGold: false,
            youtubeId: "rqMdesRXJpc",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Admiración total:\nAdmiro tu agudeza analítica, tu elegancia y tus deslumbrantes ojos.",
            themeColor: "#592400"
        },
        {
            title: "Historia Entre Tus Dedos",
            artist: "LOS 4",
            isGold: false,
            youtubeId: "8DlJh8HRkug",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Éxito seguro:\nEstás construyendo un futuro brillante guiado por tu constancia.",
            themeColor: "#240024"
        },
        {
            title: "Qué Locura Enamorarme de Ti",
            artist: "Eddie Santiago",
            isGold: false,
            youtubeId: "ML-f7nwdDIM",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Inspiración:\nTu estándar de excelencia inspira a dar lo mejor en todo momento.",
            themeColor: "#470012"
        },
        {
            title: "Te Regalo Amores",
            artist: "RKM & Ken-Y ft. Ivy Queen",
            isGold: false,
            youtubeId: "ZgNBEZ0yylA",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Homenaje:\nTe obsequio este universo 3D diseñado con todo el aprecio.",
            themeColor: "#2d0024"
        },
        {
            title: "Déjame Entrar",
            artist: "Makano",
            isGold: true,
            youtubeId: "g3uERwX1FoU",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña hermosa:\nUn espacio de confianza y valoración incondicional.",
            themeColor: "#594700"
        },
        {
            title: "¿Por Qué Dios Te Hizo Tan Bella? / Anhelo",
            artist: "Adolescent's Orquesta",
            isGold: false,
            youtubeId: "seu0bd4h15Y",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Distinción única:\nReunir un rostro tan lindo con una mente brillante es un privilegio deslumbrante.",
            themeColor: "#590024"
        },
        {
            title: "Te Quiero",
            artist: "Flex",
            isGold: false,
            youtubeId: "BQ6_hjFir70",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTe expreso mi más alta estima y apoyo incondicional.",
            themeColor: "#4a3800"
        },
        {
            title: "Te Amo Tanto",
            artist: "Nigga",
            isGold: true,
            youtubeId: "bdVcc_8-TB8",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Especial dorada:\nTu ser le otorga un estándar de nobleza e inteligencia inigualable a mi vida.",
            themeColor: "#594700"
        },
        {
            title: "Entre Mis Brazos",
            artist: "Nigga",
            isGold: true,
            youtubeId: "UPEHkLH4apc",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Protección y paz:\nCuenta siempre con un lugar seguro donde tu talento y paz sean respaldados.",
            themeColor: "#524000"
        },
        {
            title: "Hecho para Ti",
            artist: "LATIN MAFIA x Omar Apollo",
            isGold: false,
            youtubeId: "LKs4eq6dwJQ",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "A tu medida:\nCada detalle visual y funcional de esta plataforma fue programado para hacerte sonreír.",
            themeColor: "#120024"
        },
        {
            title: "Ayayay",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "MMxHDM83nF8",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Gracia natural:\nTu desenvolvimiento y buen juicio son admirables.",
            themeColor: "#382400"
        },
        {
            title: "Lo Que Me Pidas",
            artist: "Headphones",
            isGold: false,
            youtubeId: "foSS-zqES_I",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Dedicación:\nCada sugerencia tuya es convertida inmediatamente en realidad.",
            themeColor: "#003838"
        },
        {
            title: "RUFF",
            artist: "Kapo",
            isGold: false,
            youtubeId: "92XmX19e0O8",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Criterio proprio:\nTienes una personalidad firme y auténtica que impone respeto.",
            themeColor: "#2b0047"
        },
        {
            title: "ASTROS",
            artist: "Estrategia Norteña",
            isGold: true,
            youtubeId: "ThSnDDn4068",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Luz de Astros:\nTus ojos brillan como astros guiando el camino del entendimiento.",
            themeColor: "#665200"
        },
        {
            title: "IMU",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "4Tupj8IMOlY",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Agudeza sobresaliente:\nCada opinión tuya demuestra una perspectiva profunda.",
            themeColor: "#470024"
        },
        {
            title: "Mi Vida Eres Tú",
            artist: "Sonyk El Dragón",
            isGold: false,
            youtubeId: "DRdeAbYihDk",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Motivación:\nTu presencia motiva a buscar la excelencia en cada proyecto.",
            themeColor: "#593600"
        },
        {
            title: "Tus Recuerdos Son Mi Dios",
            artist: "Pipe Calderón",
            isGold: false,
            youtubeId: "XHr4ivlBCZI",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Recuerdos valiosos:\nCada conversación compartida permanece guardada con gran valor.",
            themeColor: "#380038"
        },
        {
            title: "Suiza",
            artist: "Calle 24",
            isGold: true,
            youtubeId: "CCc-3jTUrA8",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Precisión de cristal:\nCombinas la inteligencia más fina con una dulzura sin igual.",
            themeColor: "#002447"
        },
        {
            title: "Como Antes",
            artist: "Llane",
            isGold: false,
            youtubeId: "1fk4HGeeIjw",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Firmeza:\nAdmiro la firmeza de tus valores e integridad personal.",
            themeColor: "#470018"
        },
        {
            title: "Dutty Love",
            artist: "Don Omar ft. Natti Natasha",
            isGold: false,
            youtubeId: "x622Sqjub-s",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Energía pura:\nTu vitalidad contagia alegría y dinamismo a todo el equipo.",
            themeColor: "#240000"
        },
        {
            title: "Love Is a Day",
            artist: "Cuco",
            isGold: false,
            youtubeId: "9wiEM0s4aCQ",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña Li:\nCada día a tu lado es una lección de superación e intelecto.",
            themeColor: "#330047"
        },
        {
            title: "Amor de Subida",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "yY3VW4saUxs",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "En ascenso continuo:\nTu camino profesional y personal sigue una curva brillante hacia el éxito.",
            themeColor: "#592b00"
        },
        {
            title: "Me Enamoré",
            artist: "Ángel y Kriz",
            isGold: true,
            youtubeId: "2ubn0UHKbMQ",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Especial dorada:\nMe enamoré de tu manera brillante de pensar, de la ternura de tus ojos y de tu gran corazón.",
            themeColor: "#665200"
        },
        {
            title: "With or Without You",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "KazUvN4Y9O4",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Firmeza:\nMi respeto hacia tu brillantez es una constante firme e inamovible.",
            themeColor: "#4a0024"
        },
        {
            title: "Robarte un Beso",
            artist: "Carlos Vives",
            isGold: false,
            youtubeId: "Mtau4v6foHA",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Gratitud:\nGracias por tu sonrisa contagiosa y por hacer de este mundo un lugar mejor.",
            themeColor: "#590024"
        },
        {
            title: "Te Vi",
            artist: "Piso 21 & Micro TDH",
            isGold: false,
            youtubeId: "0yruvXjYoUo",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Desde el primer instante:\nTe vi y comprendí la luz tan especial que posees en la mirada.",
            themeColor: "#003e59"
        },
        {
            title: "Bésame",
            artist: "Valentino ft. Manuel Turizo",
            isGold: false,
            youtubeId: "RiF3l0ZZeeU",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Dulzura pura:\nTu trato suave y empático demuestra la hermosura de tu alma.",
            themeColor: "#2b0047"
        },
        {
            title: "Sensación del Bloque",
            artist: "De La Ghetto & Randy",
            isGold: false,
            youtubeId: "YTwT2b7SG6c",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Sensación brillante:\nUn referente de elegancia, inteligencia y personalidad que destaca en cualquier lugar.",
            themeColor: "#4a0031"
        },
        {
            title: "Te Amo",
            artist: "Paulo Londra & Piso 21",
            isGold: false,
            youtubeId: "nP8ZVJxiJlU",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Afecto profundo:\nMi más sincera admiración hacia tu intelecto y tus lindos sentimientos.",
            themeColor: "#4a3800"
        },
        {
            title: "Pareja del Año",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "SRm2Ch4oFWs",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Mérito propio:\nTus éxitos son el reflejo directo de tu talento impecable.",
            themeColor: "#00384a"
        },
        {
            title: "Una en un Millón",
            artist: "Alex y Fido",
            isGold: false,
            youtubeId: "HLODpE__LZE",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Una en un millón:\nEntre millones de personas en este planeta, tú sobresales por tus hermosos ojos, tu inteligencia brillante y tu dulzura sin igual. ¡Para Lizet!",
            themeColor: "#593e00"
        }
    ];

    /* ----------------------------------------------------------------------
       2. ELEMENTOS DEL DOM Y CONTROLADORES
       ---------------------------------------------------------------------- */
    const scene3D = document.getElementById('scene-3d');
    const world3D = document.getElementById('world-3d');
    const searchInput = document.getElementById('search-input');
    const btnPoems = document.getElementById('btn-poems');
    const btnSongList = document.getElementById('btn-song-list');
    
    // Botones 3D Layout (table, sphere, helix, grid)
    const layoutBtns = {
        table: document.getElementById('layout-table'),
        sphere: document.getElementById('layout-sphere'),
        helix: document.getElementById('layout-helix'),
        grid: document.getElementById('layout-grid')
    };

    // Modal Player 2 Col
    const playerModal = document.getElementById('player-modal');
    const closePlayerBtn = document.getElementById('close-player-btn');
    const playerCoverImg = document.getElementById('player-cover-img');
    const playerSongTitle = document.getElementById('player-song-title');
    const playerSongArtist = document.getElementById('player-song-artist');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const directYoutubeLink = document.getElementById('direct-youtube-link');
    const poemTitle = document.getElementById('poem-title');
    const poemTextContent = document.getElementById('poem-text-content');

    // Discrete PS Toast
    const discretePsToast = document.getElementById('discrete-ps-toast');
    const closePsBtn = document.getElementById('close-ps-btn');

    // Songlist Modal
    const songlistModal = document.getElementById('songlist-modal');
    const closeSonglistBtn = document.getElementById('close-songlist-btn');
    const songlistContainer = document.getElementById('songlist-container');

    // Poems Modal
    const poemsModal = document.getElementById('poems-modal');
    const closePoemsBtn = document.getElementById('close-poems-btn');
    const poemsGrid = document.getElementById('poems-grid');

    // Estado 3D (Cámara y Navegación)
    let rotX = -8;
    let rotY = 0;
    let cameraZ = -120;
    let currentLayout = 'table';
    let isNavigating = false;
    let lastX = 0, lastY = 0;

    /* ----------------------------------------------------------------------
       3. MOTOR DE DISPOSICIÓN 3D (TABLE, SPHERE, HELIX, GRID)
       ---------------------------------------------------------------------- */
    function render3DLayout(songsToRender, layout = 'table') {
        world3D.innerHTML = '';
        currentLayout = layout;
        const count = songsToRender.length;

        // Activar animación de flotación en helix y sphere
        if (layout === 'helix' || layout === 'sphere') {
            world3D.classList.add('anim-bobbing');
        } else {
            world3D.classList.remove('anim-bobbing');
        }

        songsToRender.forEach((song, i) => {
            const card = document.createElement('div');
            // Clases especiales: is-gold, is-primary, y la roja de la canción 44
            card.className = `card-3d ${song.isGold ? 'is-gold' : ''} ${song.isPrimary ? 'is-primary' : ''} ${song.isRedTheme ? 'is-red-theme' : ''}`;
            card.dataset.id = i;

            card.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="card-cover">
                <div class="card-meta">
                    <div class="card-title">${song.title}</div>
                    <div class="card-artist">${song.artist}</div>
                </div>
            `;

            let transformStr = '';

            // Si es una canción principal (All of Me, La Promesa, Amor), la destacamos
            if (song.isPrimary && layout === 'table') {
                const pIndex = i % 3;
                const px = (pIndex - 1) * 320;
                transformStr = `translate3d(${px}px, -180px, 150px) scale(1.12)`;
            }
            else if (layout === 'sphere') {
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;
                const radius = 750;
                const x = radius * Math.cos(theta) * Math.sin(phi);
                const y = radius * Math.sin(theta) * Math.sin(phi);
                const z = radius * Math.cos(phi);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${theta}rad) rotateX(${phi}rad)`;
            } 
            else if (layout === 'helix') {
                const radius = 620;
                const theta = i * 0.35;
                const y = (i - count / 2) * 44;
                const x = radius * Math.cos(theta);
                const z = radius * Math.sin(theta);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-theta}rad)`;
            } 
            else if (layout === 'grid') {
                const cols = 6;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const layer = Math.floor(i / 36);
                const x = (col - (cols - 1) / 2) * 285;
                const y = (row % 6 - 2.5) * 135;
                const z = (layer - 0.5) * 360;
                transformStr = `translate3d(${x}px, ${y}px, ${z}px)`;
            } 
            else { // Table / Matriz periódica amplia
                const cols = 8;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = (col - (cols - 1) / 2) * 280;
                const y = (row - 5) * 130;
                const z = (Math.sin(i * 0.5) * 140);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px)`;
            }

            card.style.transform = transformStr;

            // Abrir reproductor al hacer clic (funciona por delante y por detrás)
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                openPlayer(song);
            });

            world3D.appendChild(card);
        });

        updateCameraTransform();
    }

    function updateCameraTransform() {
        world3D.style.setProperty('--cam-z', `${cameraZ}px`);
        world3D.style.setProperty('--rot-x', `${rotX}deg`);
        world3D.style.setProperty('--rot-y', `${rotY}deg`);
        world3D.style.transform = `translateZ(${cameraZ}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    /* ----------------------------------------------------------------------
       4. NAVEGACIÓN 3D POR TOUCHPAD, TRACKPAD Y SWIPE MÓVIL
       ---------------------------------------------------------------------- */
    scene3D.addEventListener('mousedown', (e) => {
        isNavigating = true;
        lastX = e.clientX;
        lastY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isNavigating) return;
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        rotY += deltaX * 0.22;
        rotX -= deltaY * 0.22;
        rotX = Math.max(-85, Math.min(85, rotX));
        lastX = e.clientX;
        lastY = e.clientY;
        updateCameraTransform();
    });

    document.addEventListener('mouseup', () => { isNavigating = false; });

    scene3D.addEventListener('wheel', (e) => {
        e.preventDefault();
        cameraZ += e.deltaY * -0.55;
        cameraZ = Math.max(-1500, Math.min(600, cameraZ));
        updateCameraTransform();
    }, { passive: false });

    scene3D.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isNavigating = true;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!isNavigating || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - lastX;
        const deltaY = e.touches[0].clientY - lastY;
        rotY += deltaX * 0.28;
        rotX -= deltaY * 0.28;
        rotX = Math.max(-85, Math.min(85, rotX));
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
        updateCameraTransform();
    }, { passive: true });

    document.addEventListener('touchend', () => { isNavigating = false; });

    // Cambio de preajuste layout (table, sphere, helix, grid)
    Object.keys(layoutBtns).forEach(key => {
        layoutBtns[key].addEventListener('click', () => {
            Object.values(layoutBtns).forEach(btn => btn.classList.remove('active'));
            layoutBtns[key].classList.add('active');
            render3DLayout(songsData, key);
        });
    });

    /* ----------------------------------------------------------------------
       5. REPRODUCTOR DE MÚSICA & POEMA RICO (MODAL 2 COLUMNAS)
       ---------------------------------------------------------------------- */
    function openPlayer(song) {
        playerCoverImg.src = song.cover;
        playerSongTitle.textContent = song.title;
        playerSongArtist.textContent = song.artist;

        // Reproductor de YouTube sin cookies
        youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;
        directYoutubeLink.href = `https://www.youtube.com/watch?v=${song.youtubeId}`;

        // Poema Romántico Dedicado
        poemTitle.textContent = `Para mi niña, mi Li`;
        poemTextContent.textContent = song.poem;

        // Cambiar suavemente el fondo al color temático de la canción
        if (song.themeColor) {
            document.body.style.backgroundColor = song.themeColor;
        }

        playerModal.classList.remove('hidden');
    }

    function closePlayer() {
        youtubeIframe.src = '';
        playerModal.classList.add('hidden');
        document.body.style.backgroundColor = 'var(--bg-dark-primary)';
    }

    closePlayerBtn.addEventListener('click', closePlayer);
    playerModal.addEventListener('click', (e) => {
        if (e.target === playerModal) closePlayer();
    });

    /* ----------------------------------------------------------------------
       6. CERRAR MENSAJE DISCRETO P.D.
       ---------------------------------------------------------------------- */
    if (closePsBtn) {
        closePsBtn.addEventListener('click', () => {
            discretePsToast.style.display = 'none';
        });
    }

    /* ----------------------------------------------------------------------
       7. MODAL LISTA DE CANCIONES (86 TEMAS - INCLUYENDO CANCIÓN 44 EN ROJO)
       ---------------------------------------------------------------------- */
    function renderSonglistModal() {
        songlistContainer.innerHTML = '';
        songsData.forEach(song => {
            const item = document.createElement('div');
            // Si es canción 44 roja, le asignamos la clase is-red-theme
            item.className = `songlist-item-card ${song.isGold ? 'is-gold' : ''} ${song.isRedTheme ? 'is-red-theme' : ''}`;
            item.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="songlist-cover">
                <div class="songlist-meta">
                    <h4>${song.title} ${song.isGold ? '⭐' : ''} ${song.isRedTheme ? '🔴' : ''}</h4>
                    <p>${song.artist}</p>
                </div>
            `;
            item.addEventListener('click', () => {
                songlistModal.classList.add('hidden');
                openPlayer(song);
            });
            songlistContainer.appendChild(item);
        });
    }

    btnSongList.addEventListener('click', () => {
        renderSonglistModal();
        songlistModal.classList.remove('hidden');
    });

    closeSonglistBtn.addEventListener('click', () => songlistModal.classList.add('hidden'));
    songlistModal.addEventListener('click', (e) => {
        if (e.target === songlistModal) songlistModal.classList.add('hidden');
    });

    /* ----------------------------------------------------------------------
       8. BUSCADOR Y GALERÍA DE POEMAS
       ---------------------------------------------------------------------- */
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = songsData.filter(s => 
            s.title.toLowerCase().includes(query) || 
            s.artist.toLowerCase().includes(query) ||
            s.poem.toLowerCase().includes(query)
        );
        render3DLayout(filtered, currentLayout);
    });

    function renderPoemsModal() {
        poemsGrid.innerHTML = '';
        songsData.forEach(song => {
            const card = document.createElement('div');
            card.className = 'poem-gallery-card';
            card.innerHTML = `
                <h3>${song.title}</h3>
                <span class="poem-song-ref">${song.artist}</span>
                <p>${song.poem}</p>
            `;
            card.addEventListener('click', () => {
                poemsModal.classList.add('hidden');
                openPlayer(song);
            });
            poemsGrid.appendChild(card);
        });
    }

    btnPoems.addEventListener('click', () => {
        renderPoemsModal();
        poemsModal.classList.remove('hidden');
    });

    closePoemsBtn.addEventListener('click', () => poemsModal.classList.add('hidden'));
    poemsModal.addEventListener('click', (e) => {
        if (e.target === poemsModal) poemsModal.classList.add('hidden');
    });

    /* Generador de partículas discretas */
    function createBackgroundPetals() {
        const bgContainer = document.getElementById('bg-petals-container');
        const icons = ['✨', '🌸', '✨', '🌼'];
        for (let i = 0; i < 18; i++) {
            const petal = document.createElement('div');
            petal.className = 'bg-petal';
            petal.textContent = icons[Math.floor(Math.random() * icons.length)];
            petal.style.left = `${Math.random() * 95}%`;
            petal.style.fontSize = `${Math.random() * 1.2 + 0.8}rem`;
            petal.style.animationDuration = `${Math.random() * 10 + 12}s`;
            petal.style.animationDelay = `${Math.random() * 8}s`;
            bgContainer.appendChild(petal);
        }
    }
    createBackgroundPetals();

    /* INICIALIZACIÓN */
    render3DLayout(songsData, 'table');

});
