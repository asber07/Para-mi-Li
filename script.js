/* ==========================================================================
   LÓGICA JAVASCRIPT COMPLETA: UNIVERSO 3D PARA LIZET ("mi niña, mi Li")
   86 Canciones con IDs de YouTube verificados, Lista de Músicas en Menú,
   Navegación 3D (Table, Sphere, Helix, Grid) por Touchpad/Dedo, y Poemas Elegantes.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. BASE DE DATOS DE 86 CANCIONES (URLS Y YOUTUBE IDS DE USUARIO)
       ---------------------------------------------------------------------- */
    const songsData = [
        {
            title: "All of Me",
            artist: "John Legend",
            isGold: true,
            isPrimary: true,
            youtubeId: "450p7goxZqg",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "What would I do without your smart mouth?",
                "Drawing me in, and you kicking me out",
                "You've got my head spinning, no kidding, I can't pin you down",
                "What's going on in that beautiful mind?",
                "I'm on your magical mystery ride",
                "And I'm so dizzy, don't know what hit me, but I'll be alright",
                "Cause all of me loves all of you",
                "Love your curves and all your edges",
                "All your perfect imperfections",
                "Give your all to me, I'll give my all to you",
                "You're my end and my beginning",
                "Even when I lose I'm winning",
                "Cause I give you all of me",
                "And you give me all of you"
            ],
            poem: "Para mi niña, mi Li:\nSi me dieran a elegir entre todo el universo y tu presencia, elegiría sin dudarlo la calidez de tu mirada. Tus ojos poseen esa luz sutil que ilumina mis pensamientos más profundos. Eres hermosa, brillante y verdaderamente inolvidable.",
            themeColor: "#3d2d00"
        },
        {
            title: "La Promesa",
            artist: "Melendi",
            isGold: true,
            isPrimary: true,
            youtubeId: "7XPmRUp_Yf4",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Yo prometo no dejarte de mirar",
                "Te prometo no aburrirte nunca más",
                "Y ser la luz de tu camino en la oscuridad",
                "Prometo no juzgarte por tu pasado",
                "Cuidar de ti cuando estés a mi lado",
                "Regalarte momentos inolvidables",
                "Y ser el guardián de tus mejores recuerdos..."
            ],
            poem: "Para Lizet:\nTe prometo estar presente cada vez que lo necesites, admirar tu crecimiento intelectual y recordarte cada día lo maravillosa y talentosa que eres. Gracias por traer serenidad a mi vida.",
            themeColor: "#4d2800"
        },
        {
            title: "Amor",
            artist: "Emmanuel Cortés",
            isGold: true,
            isPrimary: true,
            youtubeId: "TX-1dI8t6WM",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Y es que el amor eres tú, con esa mirada tan linda",
                "Con la forma en que me miras y me haces suspirar",
                "No hay un solo día en que no piense en tu sonrisa",
                "Eres el regalo más valioso de mi existencia..."
            ],
            poem: "Dedicado a Lizet:\nCuando reflexiono sobre el afecto sincero, encuentro tu nombre, tu intelecto cautivador y la gracia con la que te desenvuelves. Eres esa pieza perfecta que otorga sentido y armonía a mi día a día.",
            themeColor: "#4a001a"
        },
        {
            title: "Tienes la Magia",
            artist: "Lil Silvio & El Vega",
            isGold: false,
            youtubeId: "XpPRXTAUw_o",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tienes la magia que me enamora",
                "Esa mirada que a mí me atrapa",
                "Cuando estás cerca el tiempo se detiene",
                "Eres la dueña de mi serenidad..."
            ],
            poem: "Para mi Li:\nTienes un magnetismo natural en la mirada que transmite paz absoluta. Tu elegancia y tu forma de expresarte me demuestran lo extraordinaria que eres.",
            themeColor: "#33004d"
        },
        {
            title: "Nota de Amor",
            artist: "Carlos Vives, Wisin & Daddy Yankee",
            isGold: false,
            youtubeId: "wZRWpr1G1Qw",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Te preparé una nota de amor",
                "Que dice que te aprecio y que pienso en ti",
                "Una melodía dedicada a tu alma",
                "Para recordarte lo valiosa que eres..."
            ],
            poem: "Especial para Lizet:\nCada rincón de este espacio digital es una nota dedicada a tu belleza intelectual y a tu carisma inigualable.",
            themeColor: "#00332b"
        },
        {
            title: "Dulce Carita",
            artist: "Dálmata",
            isGold: false,
            youtubeId: "TDkYk--TW-8",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Esa dulce expresión que tienes me encanta",
                "Cuando sonríes la vida cobra sentido",
                "Tienes ese rasgo único y especial",
                "Una ternura que me acompaña siempre..."
            ],
            poem: "Para mi dulce Li:\nPosees la expresión más auténtica y bella. Cuando tu sonrisa ilumina el espacio, todo adquiere una perspectiva mucho más luminosa.",
            themeColor: "#3d2d00"
        },
        {
            title: "3AM",
            artist: "ALMA",
            isGold: true,
            youtubeId: "s21TuGnO5lM",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Pensando en ti en la quietud de la noche",
                "Recordando tu risa y tu bonita mirada",
                "No hay instante en el que no estés presente",
                "Eres la tranquilidad que me acompaña..."
            ],
            poem: "En cualquier instante del día:\nSin importar la hora, siempre existe un pensamiento dedicado a admirar tu inteligencia, tu calidez y la belleza de tu ser.",
            themeColor: "#594000"
        },
        {
            title: "Tú y Yo",
            artist: "La Misma Gente",
            isGold: false,
            youtubeId: "pf7_auXRrYE",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tú y yo, compartiendo momentos bajo las estrellas",
                "Construyendo una historia singular",
                "Con la certeza de un aprecio sincero..."
            ],
            poem: "Para Lizet:\nCompartir ideas contigo es una de las experiencias más gratificantes. Admiro tu agudeza mental y la elegancia de tu personalidad.",
            themeColor: "#330015"
        },
        {
            title: "Coqueta",
            artist: "Grupo Frontera",
            isGold: false,
            youtubeId: "G4-grGfxVoY",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tan distinguida y tan bella",
                "Que con una sola mirada transmites paz",
                "Sonriendo de forma sincera a cada instante..."
            ],
            poem: "Para ti, mi Li:\nTu elegancia natural y la calidez de tu mirada alegran cualquier jornada. Eres una persona verdaderamente inolvidable.",
            themeColor: "#3d0024"
        },
        {
            title: "Virgen",
            artist: "Adolescent's Orquesta",
            isGold: false,
            youtubeId: "pz9O3UeM_o0",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Te guardo en mi memoria como algo muy valioso",
                "Con el respeto y la admiración más pura",
                "Brillando como una luz constante en la distancia..."
            ],
            poem: "Para Lizet:\nLa autenticidad de tu alma y tu integridad intelectual son cualidades de inmenso valor. Jamás pierdas esa luz tan singular.",
            themeColor: "#240047"
        },
        {
            title: "Por Ti",
            artist: "3AM",
            isGold: false,
            youtubeId: "yv_VOxdd8ac",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Por ti mantengo la constancia",
                "Por contemplar tu mirada una vez más",
                "Avanzando juntos con serenidad..."
            ],
            poem: "Por mi Li:\nTu bienestar y tu felicidad son prioridades fundamentales. Ver tu sonrisa es la mayor recompensa.",
            themeColor: "#002447"
        },
        {
            title: "30 Días",
            artist: "Los Primos del Este, Santa Fe Klan",
            isGold: true,
            youtubeId: "Vl6xoVstJRw",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Pasan los días y sigo admirando tu ser",
                "En lo bella que te ves en cada momento",
                "Apreciando cada conversación contigo..."
            ],
            poem: "El paso del tiempo y la eternidad:\nPodrían transcurrir años, y mi admiración hacia tu intelecto y belleza se mantendría intacta e inalterable.",
            themeColor: "#4a3300"
        },
        {
            title: "Mami",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "FVvRzyXJcv8",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Eres el centro de mi atención",
                "La persona que inspira mi pensamiento",
                "Con tu distinción y tu sonrisa de luz..."
            ],
            poem: "Para Lizet:\nPosees la gracia y la elegancia que transforman cualquier conversación en un momento gratificante.",
            themeColor: "#593e00"
        },
        {
            title: "Una Lady Como Tú",
            artist: "MTZ Manuel Turizo",
            isGold: false,
            youtubeId: "VYtJAuoZxcc",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Buscando una dama con tu distinción",
                "Que aporte luz y conocimiento",
                "Dedicándote estas notas de admiración..."
            ],
            poem: "Para una mujer distinguida:\nUna persona con tu educación, tu perspicacia y tu distinción es verdaderamente excepcional. Eres admirable.",
            themeColor: "#1a0033"
        },
        {
            title: "Vine a Buscarte",
            artist: "Fonseca feat. Alexis & Fido",
            isGold: true,
            youtubeId: "cX_KMJlqFos",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Vine a buscarte para expresarte mi aprecio",
                "Porque tu compañía es insustituible",
                "Llenando el tiempo de paz y propósito..."
            ],
            poem: "Para mi Li:\nAunque los detalles materiales a veces se retrasan, mi estima sincera hacia ti permanece constante siempre.",
            themeColor: "#594000"
        },
        {
            title: "Raro",
            artist: "Nacho, Chyno Miranda & Chino & Nacho",
            isGold: false,
            youtubeId: "Zj6f_JQLcyY",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Qué extraordinario es esto que siento",
                "Tan noble, claro y real",
                "Como una certeza en el camino..."
            ],
            poem: "Para Lizet:\nEs admirable cómo tu presencia otorga claridad y positivismo a cualquier entorno.",
            themeColor: "#470024"
        },
        {
            title: "More",
            artist: "Barboza",
            isGold: true,
            youtubeId: "GEGer49wRAI",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Contigo cada instante adquiere valor",
                "Tu expresión transmite serenidad",
                "Valorando este tiempo profundamente..."
            ],
            poem: "Para mi Li:\nCada faceta de tu personalidad y tu agudeza analítica son motivo de constante respeto e inspiración.",
            themeColor: "#593b00"
        },
        {
            title: "Quédate Conmigo",
            artist: "Chyno Miranda ft. Wisin & Gente de Zona",
            isGold: false,
            youtubeId: "XA8XogjPcmI",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Quédate conmigo para compartir el tiempo",
                "Porque a tu lado las horas son fructíferas",
                "Llenando mi pensamiento de armonía..."
            ],
            poem: "Para Lizet:\nA tu lado las conversaciones fluyen con inteligencia y calidez. Tu presencia es altamente apreciada.",
            themeColor: "#382400"
        },
        {
            title: "Darte un Beso",
            artist: "Prince Royce",
            isGold: true,
            youtubeId: "bdOXnTbyk0g",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Deseo expresarte mi afecto con nobleza",
                "Y acompañar tus jornadas",
                "Cantar para ti bajo el atardecer..."
            ],
            poem: "Para ti, mi Li:\nUn gesto respetuoso para recordarte el gran valor que posees como persona y profesional.",
            themeColor: "#594000"
        },
        {
            title: "Si Supieras",
            artist: "Daddy Yankee & Wisin y Yandel",
            isGold: false,
            youtubeId: "av2yfDokA6k",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Si supieras cuánto me fascina tu intelecto",
                "Y la elegancia con la que te expresas...",
            ],
            poem: "Para Lizet:\nSi supieras lo edificante que resulta conversar contigo, comprenderías por qué dedico este trabajo a tu persona.",
            themeColor: "#002436"
        },
        {
            title: "Bailando",
            artist: "Enrique Iglesias ft. Descemer Bueno",
            isGold: false,
            youtubeId: "NUsoVlDFqZg",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Bailando con alegría y ritmo",
                "Superando cualquier distancia con optimismo...",
            ],
            poem: "Para Lizet:\nTu dinamismo y tu actitud positiva transmiten motivación a quienes te rodean.",
            themeColor: "#591200"
        },
        {
            title: "Despacito",
            artist: "Luis Fonsi ft. Daddy Yankee",
            isGold: false,
            youtubeId: "kJQP7kiw5Fk",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Paso a paso construyendo entendimiento",
                "Para que la constancia marque el camino...",
            ],
            poem: "Progreso constante, mi Li:\nConocerte mejor con el tiempo es un proceso enriquecedor. Admiro profundamente tus metas.",
            themeColor: "#59001e"
        },
        {
            title: "Chica Ideal",
            artist: "Sebastián Yatra & Guaynaa",
            isGold: false,
            youtubeId: "t_Fi3J4UTlg",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Ella es la persona ideal",
                "La que reúne brillantez e integridad...",
            ],
            poem: "Para una mujer excepcional:\nInteligente, educada, perspicaz y elegante. Reúnes las cualidades de una mente brillante.",
            themeColor: "#2b0059"
        },
        {
            title: "Vivir Bailando",
            artist: "Silvestre Dangond & Maluma",
            isGold: false,
            youtubeId: "dUtEIYj4BHs",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Viviendo con entusiasmo el camino",
                "Porque tu nobleza inspira superación...",
            ],
            poem: "Para Lizet:\nQue la vida te brinde siempre satisfacción por tus logros profesionales y personales.",
            themeColor: "#004736"
        },
        {
            title: "Con los Dos en la Cabeza",
            artist: "Pedro Guerra, Cruzzi",
            isGold: true,
            youtubeId: "O9825iugYPM",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con tu imagen presente en la jornada",
                "Con el respeto y la admiración en el alma...",
            ],
            poem: "Especial para mi Li:\nTus ideas y tu visión analítica permanecen como referente de excelencia. Eres una mujer excepcional.",
            themeColor: "#594000"
        },
        {
            title: "Loco Enamorado",
            artist: "Abraham Mateo, Farruko",
            isGold: false,
            youtubeId: "cmIKUyUrKl4",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Capturado por tu inteligencia y elegancia",
                "Por tu manera tan noble de expresarte...",
            ],
            poem: "Para Lizet:\nTu perspicacia y tu agudeza mental son profundamente atractivas. Eres una mujer brillante.",
            themeColor: "#470036"
        },
        {
            title: "Quiéreme (Remix)",
            artist: "Jacob Forever, Farruko",
            isGold: false,
            youtubeId: "9walz0NcB78",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Valorando tu compañía sincera",
                "Construyendo un entendimiento permanente...",
            ],
            poem: "Para ti, mi niña:\nTu amabilidad y tu respeto generan un ambiente de confianza excepcional.",
            themeColor: "#380000"
        },
        {
            title: "Por Fin Te Encontré",
            artist: "Cali y El Dandee ft. Juan Magán",
            isGold: false,
            youtubeId: "_kxz7WX4mLU",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Por fin encontré una persona con tu integridad",
                "Que aporta luz y perspectiva a mi entorno...",
            ],
            poem: "Para Lizet:\nUna gran satisfacción haber coincidido contigo. Le sumas valor y sentido a mi vida.",
            themeColor: "#003847"
        },
        {
            title: "Como Tú No Hay Dos",
            artist: "BUXXI",
            isGold: false,
            youtubeId: "xhPykGmB0dk",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Porque con tu nivel e intelecto no hay dos",
                "Eres única en tu género y desempeño...",
            ],
            poem: "Literalmente única:\nNo existe nadie con tu ética, tu intelecto y tu calidez humana. Eres irremplazable.",
            themeColor: "#4a3c00"
        },
        {
            title: "Como Tú",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "Z0MzSY5RTYI",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Nadie transmite la tranquilidad que tú",
                "Nadie comparte ideas como tú...",
            ],
            poem: "Para mi Li:\nNadie posee tu capacidad de escucha atenta y tu empatía genuina.",
            themeColor: "#38004a"
        },
        {
            title: "Piel",
            artist: "Tiago PZK & Ke Personajes",
            isGold: false,
            youtubeId: "DI71FIdguUs",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Sintiendo la armonía de tu presencia",
                "Con la serenidad que transmites...",
            ],
            poem: "Para Lizet:\nTu compostura y tu elegancia generan una sensación de paz profunda.",
            themeColor: "#120047"
        },
        {
            title: "El Amor de Mi Vida",
            artist: "Los Ángeles Azules & María Becerra",
            isGold: false,
            youtubeId: "CaSCapHZhc0",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tú eres un regalo de inmenso valor",
                "Con tu intelecto iluminando el horizonte...",
            ],
            poem: "Para una persona especial:\nUn reconocimiento sincero a quien inspira admiración constante.",
            themeColor: "#59003e"
        },
        {
            title: "No Hay Nadie Más",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "sD9_l3oDOag",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "No hay nadie más con tu distinción",
                "Brillando con luz propia y perspicacia...",
            ],
            poem: "Resplandor propio:\nTus cualidades destacan sin esfuerzo en cualquier escenario. Eres brillante.",
            themeColor: "#003e59"
        },
        {
            title: "Mi Persona Favorita",
            artist: "Río Roma",
            isGold: false,
            youtubeId: "x-0KoCAV4mc",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tú eres una persona altamente estimada",
                "La que aporta valor y alegría a la jornada...",
            ],
            poem: "Persona estimada:\nEres una de las presencias más valiosas. Gracias por tu amistad e intelecto.",
            themeColor: "#594700"
        },
        {
            title: "La Mujer Perfecta",
            artist: "Kurt",
            isGold: false,
            youtubeId: "QD0aSAe67CI",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Ella reúne las virtudes más elevadas",
                "Con su profesionalismo e integridad impecables...",
            ],
            poem: "Mujer admirable:\nEjemplo de dedicación, inteligencia y valores. Admiro tu camino.",
            themeColor: "#470024"
        },
        {
            title: "Confieso",
            artist: "Humbe",
            isGold: false,
            youtubeId: "4Ja6WLrZlAE",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Confieso la alta estima que te profeso",
                "Confieso que tu visión me inspira constantemente...",
            ],
            poem: "Confesión sincera:\nDesarrollar este homenaje fue un verdadero honor pensando en tu reconocimiento.",
            themeColor: "#240038"
        },
        {
            title: "Brillas",
            artist: "León Larregui",
            isGold: false,
            youtubeId: "Mcj75l2gJcY",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Brillas con luz de conocimiento",
                "Como una referencia firme y constante...",
            ],
            poem: "Brillo propio:\nTu agudeza intelectual destaca y guía a quienes tienen el privilegio de escucharte.",
            themeColor: "#594c00"
        },
        {
            title: "Bajo el Agua",
            artist: "Manuel Medrano",
            isGold: false,
            youtubeId: "zLX_GcXt2pI",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Avanzando hacia metas elevadas",
                "Con la tranquilidad que aporta tu presencia...",
            ],
            poem: "Para Lizet:\nContigo las ideas fluyen con naturalidad. Tu serenidad es altamente enriquecedora.",
            themeColor: "#003859"
        },
        {
            title: "Seguro Te Pierdo",
            artist: "KID FLEX & Sergi",
            isGold: false,
            youtubeId: "Zd1Flawc1-I",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Valorando la permanencia de tu amistad",
                "Porque una persona con tu valía no se encuentra de nuevo...",
            ],
            poem: "Para mi Li:\nUna valía personal tan alta merece ser respetada y cuidada siempre.",
            themeColor: "#472400"
        },
        {
            title: "Te Voy a Amar",
            artist: "Axel",
            isGold: false,
            youtubeId: "KZh60U1PqSE",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Mantendré el respeto y el apoyo constante",
                "Acompañando tus pasos profesionales...",
            ],
            poem: "Apoyo constante:\nSiempre contarás con mi respeto y respaldo en cada uno de tus proyectos futuros.",
            themeColor: "#590024"
        },
        {
            title: "Nuestra Canción",
            artist: "Monsieur Periné ft. Vicente García",
            isGold: false,
            youtubeId: "2vODuvIdQvU",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con la armonía de tu presencia",
                "Disfrutando de la música y el entendimiento...",
            ],
            poem: "Armonía:\nEste homenaje musical es un testimonio de alta estima a tu persona.",
            themeColor: "#380024"
        },
        {
            title: "Mon Amour",
            artist: "Aitana & Zzoilo",
            isGold: false,
            youtubeId: "o2tdLOK7-PE",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Apreciando la espontaneidad y clase que posees",
                "Con tu carisma destacando a cada momento...",
            ],
            poem: "Para Lizet:\nMe impresiona tu desenvoltura y la solidez de tu criterio.",
            themeColor: "#590059"
        },
        {
            title: "Estoy Enamorado",
            artist: "Wisin & Yandel",
            isGold: true,
            youtubeId: "whBcmlaSLJM",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Valorando la nobleza de tu alma",
                "De tu mirar sereno y tu sabiduría...",
            ],
            poem: "Para mi Li:\nLa serenidad de tu juicio convierte cualquier obstáculo en una oportunidad.",
            themeColor: "#594000"
        },
        {
            title: "No Me Digas Que No",
            artist: "Enrique Iglesias ft. Wisin & Yandel",
            isGold: false,
            isRedTheme: true, // CANCIÓN 44: ROJA ESPECIAL
            youtubeId: "zyqt2avPkoA",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con la pasión y la fuerza del color rojo",
                "Afirmando la importancia de este reconocimiento...",
            ],
            poem: "Fuerza y pasión (Canción 44):\nDestacada en rojo pasión por la intensidad de tu carácter e inteligencia admirable.",
            themeColor: "#800000"
        },
        {
            title: "Cuando Me Enamoro",
            artist: "Enrique Iglesias & Juan Luis Guerra",
            isGold: false,
            youtubeId: "4DO8GsIYfhQ",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Es la claridad de tus ojos inteligentes",
                "La que guía mi alta estima...",
            ],
            poem: "Claridad de juicio:\nTus ojos reflejan la agudeza de una mente analítica brillante.",
            themeColor: "#592b00"
        },
        {
            title: "Colgando en Tus Manos",
            artist: "Carlos Baute",
            isGold: false,
            youtubeId: "qExd-3oCTl4",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Te envío dedicatorias escritas con respeto",
                "Canciones que expresan alta consideración...",
            ],
            poem: "Con consideración:\nTe entrego este trabajo de desarrollo exclusivamente diseñado para tu agrado.",
            themeColor: "#59002d"
        },
        {
            title: "El Doctorado",
            artist: "Tony Dize",
            isGold: false,
            youtubeId: "szPIgrYCxSY",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Admirando tu nivel académico y perspicacia",
                "Reconociendo la excelencia de tu mente...",
            ],
            poem: "Excelencia académica:\nTienes una preparación e intelecto que merecen el máximo reconocimiento profesional.",
            themeColor: "#003838"
        },
        {
            title: "Héroe Favorito",
            artist: "Romeo Santos",
            isGold: false,
            youtubeId: "Ktq4zATPFsI",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Brindando respaldo ante cualquier desafío",
                "Protegiendo tus metas y tranquilidad...",
            ],
            poem: "Para Lizet:\nSiempre contarás con mi apoyo profesional para respaldar tus metas.",
            themeColor: "#33004a"
        },
        {
            title: "Quiéreme",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "KazUvN4Y9O4",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Manteniendo un diálogo fluido y enriquecedor",
                "Donde la perspectiva adquiere altura...",
            ],
            poem: "Perspectiva elevada:\nConversar contigo eleva el nivel de cualquier análisis. Eres admirable.",
            themeColor: "#4a0031"
        },
        {
            title: "Quédate Conmigo",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "hdlmy0nZ9l8",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Compartiendo el tiempo con propósito",
                "Construyendo recuerdos valiosos...",
            ],
            poem: "Para mi Li:\nTu tiempo es altamente apreciado y tus aportes son enriquecedores.",
            themeColor: "#3d2400"
        },
        {
            title: "Te Amaré",
            artist: "William Luna",
            isGold: false,
            youtubeId: "HSVsRIeHYMY",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Manteniendo la constancia en el tiempo",
                "Con el respeto inalterable...",
            ],
            poem: "Constancia:\nUn testimonio de respeto y aprecio sincero que se mantiene inalterable.",
            themeColor: "#243800"
        },
        {
            title: "Cómo Has Hecho",
            artist: "Dúo Hermanos Gaitán Castro",
            isGold: false,
            youtubeId: "OFKyMaXdt1Y",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Cómo logras destacar sin esfuerzo",
                "Con una mente de brillantez superior...",
            ],
            poem: "Excelencia natural:\nEs admirable cómo logras la excelencia en tus actividades manteniendo la sencillez.",
            themeColor: "#381c00"
        },
        {
            title: "De la Nada",
            artist: "William Luna",
            isGold: false,
            youtubeId: "4glI-KAt56c",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Llegaste a aportar luz y dinamismo",
                "Como una presencia renovadora...",
            ],
            poem: "Presencia valiosa:\nTu llegada aportó claridad y motivación intelectual.",
            themeColor: "#4a3800"
        },
        {
            title: "Dónde Está el Amor",
            artist: "Afrodisíaco",
            isGold: false,
            youtubeId: "d2ePHppbXPU",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "El respeto y la alta consideración",
                "Están presentes en cada detalle...",
            ],
            poem: "Para Lizet:\nLa alta consideración se manifiesta en el cuidado de los detalles.",
            themeColor: "#4a0024"
        },
        {
            title: "Cuando Te Enamoras",
            artist: "Orquesta Candela",
            isGold: false,
            youtubeId: "4NUiK3O4SLI",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Cuando la admiración guía los pasos",
                "El horizonte adquiere colores claros...",
            ],
            poem: "Colores claros:\nTus aportes otorgan claridad y vigor a cualquier proyecto.",
            themeColor: "#590000"
        },
        {
            title: "Me Gusta Todo de Ti",
            artist: "Gran Orquesta Internacional",
            isGold: false,
            youtubeId: "rqMdesRXJpc",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Admiro tu intelecto, tu educación y tu ética",
                "Tu forma profesional de desenvolverte...",
            ],
            poem: "Admiración integral:\nAdmiro tu preparación, tu ética irreprochable y tu educación destacada.",
            themeColor: "#592400"
        },
        {
            title: "Historia Entre Tus Dedos",
            artist: "LOS 4",
            isGold: false,
            youtubeId: "8DlJh8HRkug",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Escribiendo una trayectoria de éxito",
                "Paso a paso con dedicación...",
            ],
            poem: "Trayectoria de éxito:\nEstás construyendo un futuro profesional brillante paso a paso.",
            themeColor: "#240024"
        },
        {
            title: "Qué Locura Enamorarme de Ti",
            artist: "Eddie Santiago",
            isGold: false,
            youtubeId: "ML-f7nwdDIM",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Reconociendo el impacto positivo de tu intelecto",
                "En mi visión del trabajo bien hecho...",
            ],
            poem: "Impacto positivo:\nTu estándar de excelencia me motiva a superarme constantemente.",
            themeColor: "#470012"
        },
        {
            title: "Te Regalo Amores",
            artist: "RKM & Ken-Y ft. Ivy Queen",
            isGold: false,
            youtubeId: "ZgNBEZ0yylA",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Te entrego este homenaje de reconocimiento",
                "Desarrollado con dedicación técnica...",
            ],
            poem: "Reconocimiento:\nTe entrego esta plataforma digital desarrollada en tu honor.",
            themeColor: "#2d0024"
        },
        {
            title: "Déjame Entrar",
            artist: "Makano",
            isGold: true,
            youtubeId: "g3uERwX1FoU",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Permíteme formar parte de tu círculo de confianza",
                "Para aportar apoyo incondicional...",
            ],
            poem: "Para mi niña hermosa:\nUn espacio de confianza y respeto profesional permanente.",
            themeColor: "#594700"
        },
        {
            title: "¿Por Qué Dios Te Hizo Tan Bella? / Anhelo",
            artist: "Adolescent's Orquesta",
            isGold: false,
            youtubeId: "seu0bd4h15Y",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con una mente tan brillante y agraciada",
                "Destacando por tu capacidad analítica...",
            ],
            poem: "Distinción:\nReunir belleza e intelecto brillante es una virtud extraordinaria.",
            themeColor: "#590024"
        },
        {
            title: "Te Quiero",
            artist: "Flex",
            isGold: false,
            youtubeId: "BQ6_hjFir70",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Expresando una alta estima y aprecio",
                "Por tu valía personal insustituible...",
            ],
            poem: "Para mi Li:\nTe expreso mi más alta estima y respeto constante.",
            themeColor: "#4a3800"
        },
        {
            title: "Te Amo Tanto",
            artist: "Nigga",
            isGold: true,
            youtubeId: "bdVcc_8-TB8",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con una valoración profunda que trasciende",
                "Reconociendo tus virtudes excepcionales...",
            ],
            poem: "Especial dorada:\nTu existencia aporta un estándar de nobleza e inteligencia único.",
            themeColor: "#594700"
        },
        {
            title: "Entre Mis Brazos",
            artist: "Nigga",
            isGold: true,
            youtubeId: "UPEHkLH4apc",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Brindándote un respaldo firme y seguro",
                "Para apoyarte en la consecución de tus metas...",
            ],
            poem: "Respaldo constante:\nSiempre tendrás un firme respaldo para impulsar tus proyectos.",
            themeColor: "#524000"
        },
        {
            title: "Hecho para Ti",
            artist: "LATIN MAFIA x Omar Apollo",
            isGold: false,
            youtubeId: "LKs4eq6dwJQ",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Diseñado con precisión pensando en tu satisfacción",
                "Con altos estándares de calidad técnica...",
            ],
            poem: "A tu medida:\nEste trabajo de ingeniería web fue desarrollado minuciosamente para ti.",
            themeColor: "#120024"
        },
        {
            title: "Ayayay",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "MMxHDM83nF8",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con la gracia que caracteriza tu andar",
                "Transmitiendo serenidad y buen juicio...",
            ],
            poem: "Gracia natural:\nTu gracia y serenidad transmiten confianza profesional.",
            themeColor: "#382400"
        },
        {
            title: "Lo Que Me Pidas",
            artist: "Headphones",
            isGold: false,
            youtubeId: "foSS-zqES_I",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Atendiendo tus sugerencias con la máxima prioridad",
                "Para optimizar cada funcionalidad...",
            ],
            poem: "Atención al detalle:\nCada una de tus observaciones es atendida con la máxima dedicación.",
            themeColor: "#003838"
        },
        {
            title: "RUFF",
            artist: "Kapo",
            isGold: false,
            youtubeId: "92XmX19e0O8",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Avanzando con solidez y determinación",
                "Marcando un estilo propio e innovador...",
            ],
            poem: "Estilo propio:\nTu determinación y tu criterio propio son dignos de encomio.",
            themeColor: "#2b0047"
        },
        {
            title: "ASTROS",
            artist: "Estrategia Norteña",
            isGold: true,
            youtubeId: "ThSnDDn4068",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Como una alineación afortunada en el horizonte",
                "Destacando como una luz guía...",
            ],
            poem: "Luz guía:\nTu inteligencia sirve como referencia de excelencia e innovación.",
            themeColor: "#665200"
        },
        {
            title: "IMU",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "4Tupj8IMOlY",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Escuchando tus aportes con atención",
                "Donde cada palabra aporta valor...",
            ],
            poem: "Aportes valiosos:\nCada análisis que realizas demuestra una agudeza sobresaliente.",
            themeColor: "#470024"
        },
        {
            title: "Mi Vida Eres Tú",
            artist: "Sonyk El Dragón",
            isGold: false,
            youtubeId: "DRdeAbYihDk",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Reconociendo la importancia de tu presencia",
                "Como un pilar de motivación...",
            ],
            poem: "Pilar de motivación:\nTu presencia motiva a alcanzar los más altos estándares de desempeño.",
            themeColor: "#593600"
        },
        {
            title: "Tus Recuerdos Son Mi Dios",
            artist: "Pipe Calderón",
            isGold: false,
            youtubeId: "XHr4ivlBCZI",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Guardando en la memoria los momentos de colaboración",
                "Como experiencias de inestimable valor...",
            ],
            poem: "Experiencias valiosas:\nCada momento de trabajo e intercambio de ideas permanece en mi consideración.",
            themeColor: "#380038"
        },
        {
            title: "Suiza",
            artist: "Calle 24",
            isGold: true,
            youtubeId: "CCc-3jTUrA8",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con la precisión y firmeza del cristal",
                "Manteniendo la calidez en el trato...",
            ],
            poem: "Precisión y calidez:\nCombinas la precisión analítica con un trato humano excepcional.",
            themeColor: "#002447"
        },
        {
            title: "Como Antes",
            artist: "Llane",
            isGold: false,
            youtubeId: "1fk4HGeeIjw",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Conservando los principios y el respeto genuino",
                "Que fundamentan las buenas relaciones...",
            ],
            poem: "Principios sólidos:\nAdmiro la firmeza de tus principios y tu profesionalismo inquebrantable.",
            themeColor: "#470018"
        },
        {
            title: "Dutty Love",
            artist: "Don Omar ft. Natti Natasha",
            isGold: false,
            youtubeId: "x622Sqjub-s",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con el dinamismo y ritmo característico",
                "Aportando energía positiva a la labor...",
            ],
            poem: "Dinamismo positivo:\nTu energía y dinamismo enriquecen cualquier trabajo en equipo.",
            themeColor: "#240000"
        },
        {
            title: "Love Is a Day",
            artist: "Cuco",
            isGold: false,
            youtubeId: "9wiEM0s4aCQ",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Aprovechando cada jornada para avanzar",
                "Con la tranquilidad que otorga el deber cumplido...",
            ],
            poem: "Para mi niña Li:\nCada día es una oportunidad para apreciar tu intelecto y dedicación.",
            themeColor: "#330047"
        },
        {
            title: "Amor de Subida",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "yY3VW4saUxs",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "En constante trayectoria ascendente de logros",
                "Consolidando el éxito profesional...",
            ],
            poem: "Trayectoria ascendente:\nTu crecimiento personal y profesional es un ejemplo de constancia.",
            themeColor: "#592b00"
        },
        {
            title: "Me Enamoré",
            artist: "Ángel y Kriz",
            isGold: true,
            youtubeId: "2ubn0UHKbMQ",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Admirando tu forma de pensar y actuar",
                "Con la más alta estima profesional...",
            ],
            poem: "Especial dorada:\nMe enamoré de tu manera analítica de pensar, de tu inteligencia y de tu trato respetuoso.",
            themeColor: "#665200"
        },
        {
            title: "With or Without You",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "KazUvN4Y9O4",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Manteniendo la firmeza de la consideración",
                "En todo momento y circunstancia...",
            ],
            poem: "Consideración firme:\nMi alta consideración hacia tu persona permanece firme e inalterable.",
            themeColor: "#4a0024"
        },
        {
            title: "Robarte un Beso",
            artist: "Carlos Vives",
            isGold: false,
            youtubeId: "Mtau4v6foHA",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Transmitiendo un saludo respetuoso y afectuoso",
                "Que exprese gratitud por tu presencia...",
            ],
            poem: "Gratitud sincera:\nUn gesto de gratitud sincera por tu valiosa presencia en mi entorno.",
            themeColor: "#590024"
        },
        {
            title: "Te Vi",
            artist: "Piso 21 & Micro TDH",
            isGold: false,
            youtubeId: "0yruvXjYoUo",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Desde que tuve la oportunidad de conocer tu trabajo",
                "Comprendí la solidez de tus capacidades...",
            ],
            poem: "Solidez técnica:\nDesde el primer momento tu capacidad y profesionalismo fueron evidentes.",
            themeColor: "#003e59"
        },
        {
            title: "Bésame",
            artist: "Valentino ft. Manuel Turizo",
            isGold: false,
            youtubeId: "RiF3l0ZZeeU",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con la amabilidad y empatía de tu trato",
                "Que enriquecen la convivencia...",
            ],
            poem: "Empatía y amabilidad:\nTu amabilidad es un rasgo distintivo que enriquece cualquier ambiente.",
            themeColor: "#2b0047"
        },
        {
            title: "Sensación del Bloque",
            artist: "De La Ghetto & Randy",
            isGold: false,
            youtubeId: "YTwT2b7SG6c",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Destacando como una figura referente",
                "Por tu distinción y capacidad de liderazgo...",
            ],
            poem: "Liderazgo destacado:\nUn referente de capacidad analítica y distinción personal.",
            themeColor: "#4a0031"
        },
        {
            title: "Te Amo",
            artist: "Paulo Londra & Piso 21",
            isGold: false,
            youtubeId: "nP8ZVJxiJlU",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con el respeto y el aprecio más profundo",
                "Que se puede profesar a una mente brillante...",
            ],
            poem: "Aprecio profundo:\nMi más profundo respeto hacia una persona de intelecto brillante.",
            themeColor: "#4a3800"
        },
        {
            title: "Pareja del Año",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "SRm2Ch4oFWs",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Como un referente de excelencia en el tiempo",
                "Destacando por tus méritos propios...",
            ],
            poem: "Méritos propios:\nTus logros son el resultado directo de tu capacidad y dedicación impecable.",
            themeColor: "#00384a"
        },
        {
            title: "Una en un Millón",
            artist: "Alex y Fido",
            isGold: false,
            youtubeId: "HLODpE__LZE",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tú eres una en un millón",
                "No hay nadie que se compare a tu intelecto y gracia...",
            ],
            poem: "Una en un millón:\nEntre millones de personas, tú sobresales sin esfuerzo por tu inteligencia, carisma y hermosura. ¡Para Lizet!",
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

    // Modal Player
    const playerModal = document.getElementById('player-modal');
    const closePlayerBtn = document.getElementById('close-player-btn');
    const playerCoverImg = document.getElementById('player-cover-img');
    const playerSongTitle = document.getElementById('player-song-title');
    const playerSongArtist = document.getElementById('player-song-artist');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const directYoutubeLink = document.getElementById('direct-youtube-link');
    const lyricsScrollContainer = document.getElementById('lyrics-scroll-container');
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
    let lyricTimer = null;

    /* ----------------------------------------------------------------------
       3. MOTOR DE DISPOSICIÓN 3D (TABLE, SPHERE, HELIX, GRID)
       ---------------------------------------------------------------------- */
    function render3DLayout(songsToRender, layout = 'table') {
        world3D.innerHTML = '';
        currentLayout = layout;
        const count = songsToRender.length;

        songsToRender.forEach((song, i) => {
            const card = document.createElement('div');
            // Clases especiales: is-gold para doradas, is-primary para principales, is-red-theme para roja
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

            // Si es una canción principal (All of Me, La Promesa, Amor), la colocamos destacada al frente
            if (song.isPrimary && layout === 'table') {
                const pIndex = i % 3;
                const px = (pIndex - 1) * 320;
                transformStr = `translate3d(${px}px, -180px, 150px) scale(1.12)`;
            }
            else if (layout === 'sphere') {
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;
                const radius = 720;
                const x = radius * Math.cos(theta) * Math.sin(phi);
                const y = radius * Math.sin(theta) * Math.sin(phi);
                const z = radius * Math.cos(phi);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${theta}rad) rotateX(${phi}rad)`;
            } 
            else if (layout === 'helix') {
                const radius = 640;
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
                const x = (col - (cols - 1) / 2) * 280;
                const y = (row % 6 - 2.5) * 130;
                const z = (layer - 0.5) * 360;
                transformStr = `translate3d(${x}px, ${y}px, ${z}px)`;
            } 
            else { // Table / Matriz periódica amplia
                const cols = 8;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = (col - (cols - 1) / 2) * 275;
                const y = (row - 5) * 125;
                const z = (Math.sin(i * 0.5) * 140);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px)`;
            }

            card.style.transform = transformStr;

            // Abrir reproductor al hacer clic
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                openPlayer(song);
            });

            world3D.appendChild(card);
        });

        updateCameraTransform();
    }

    function updateCameraTransform() {
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
        rotX = Math.max(-75, Math.min(75, rotX));
        lastX = e.clientX;
        lastY = e.clientY;
        updateCameraTransform();
    });

    document.addEventListener('mouseup', () => { isNavigating = false; });

    scene3D.addEventListener('wheel', (e) => {
        e.preventDefault();
        cameraZ += e.deltaY * -0.55;
        cameraZ = Math.max(-1400, Math.min(500, cameraZ));
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
        rotX = Math.max(-75, Math.min(75, rotX));
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
       5. REPRODUCTOR DE MÚSICA & LETRAS KARAOKE
       ---------------------------------------------------------------------- */
    function openPlayer(song) {
        playerCoverImg.src = song.cover;
        playerSongTitle.textContent = song.title;
        playerSongArtist.textContent = song.artist;

        // Asignar Embebidor YouTube limpio con nocookie
        youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;
        directYoutubeLink.href = `https://www.youtube.com/watch?v=${song.youtubeId}`;

        // Cargar Poema Elegante
        poemTitle.textContent = `Para mi Li`;
        poemTextContent.textContent = song.poem;

        // Cargar Letra Karaoke
        renderLyricsScroll(song.lyrics);

        // Cambiar suavemente el fondo de la pantalla al color temático de la canción
        if (song.themeColor) {
            document.body.style.backgroundColor = song.themeColor;
        }

        playerModal.classList.remove('hidden');
    }

    function renderLyricsScroll(lyricsArray) {
        lyricsScrollContainer.innerHTML = '';
        if (lyricTimer) clearInterval(lyricTimer);

        if (!lyricsArray || !lyricsArray.length) {
            lyricsScrollContainer.innerHTML = '<div class="lyric-line">Letra disponible al escuchar el tema...</div>';
            return;
        }

        lyricsArray.forEach((lineText, index) => {
            const line = document.createElement('div');
            line.className = `lyric-line ${index === 0 ? 'active' : ''}`;
            line.textContent = lineText;
            lyricsScrollContainer.appendChild(line);
        });

        let currentIdx = 0;
        lyricTimer = setInterval(() => {
            const lines = lyricsScrollContainer.querySelectorAll('.lyric-line');
            if (!lines.length) return;

            lines.forEach(l => l.classList.remove('active'));
            currentIdx = (currentIdx + 1) % lines.length;
            lines[currentIdx].classList.add('active');

            lines[currentIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 3800);
    }

    function closePlayer() {
        youtubeIframe.src = '';
        if (lyricTimer) clearInterval(lyricTimer);
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
       7. MODAL LISTA DE CANCIONES (86 TEMAS)
       ---------------------------------------------------------------------- */
    function renderSonglistModal() {
        songlistContainer.innerHTML = '';
        songsData.forEach(song => {
            const item = document.createElement('div');
            item.className = `songlist-item-card ${song.isGold ? 'is-gold' : ''}`;
            item.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="songlist-cover">
                <div class="songlist-meta">
                    <h4>${song.title} ${song.isGold ? '⭐' : ''}</h4>
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
