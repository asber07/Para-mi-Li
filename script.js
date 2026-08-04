/* ==========================================================================
   LÓGICA JAVASCRIPT COMPLETA: UNIVERSO 3D PARA LIZET ("mi niña, mi Li")
   - Tarjetas 3D con Estructura Doble Cara Real (.card-front y .card-back)
   - Clickabilidad Total en Front y Back
   - Banner Destacado P.D. de las Flores
   - Poemas Ajustados al Tono Exacto: Bondad, risa, enojos tiernos, ojos cautivadores.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. BASE DE DATOS DE 86 CANCIONES CON POEMAS DEL TONO EXACTO
       ---------------------------------------------------------------------- */
    const songsData = [
        {
            title: "All of Me",
            artist: "John Legend",
            isGold: true,
            isPrimary: true,
            youtubeId: "450p7goxZqg",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nHay algo en tu forma de ser que cautiva sin esfuerzo. Me encanta tu bondad, tu risa contagiosa y hasta esos momentos en los que pones tu carita seria o reniegas un poquito, porque sigues viéndote hermosísima en cualquier estado de ánimo. Pero por encima de todo, tus ojos tienen un brillo tan bonito que simplemente hipnotiza.",
            themeColor: "#3d2d00"
        },
        {
            title: "La Promesa",
            artist: "Melendi",
            isGold: true,
            isPrimary: true,
            youtubeId: "7XPmRUp_Yf4",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nPrometo sacarte siempre una sonrisa y valorar cada detalle de tu personalidad. Me fascina lo inteligente que eres, lo graciosa que te pones al bromear y esa mirada única con la que me cautivas cada día.",
            themeColor: "#4d2800"
        },
        {
            title: "Amor",
            artist: "Emmanuel Cortés",
            isGold: true,
            isPrimary: true,
            youtubeId: "TX-1dI8t6WM",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Dedicado a Lizet:\nTus ojos poseen esa mirada profunda que tranquiliza e hipnotiza. Eres bella cuando sonríes, bella cuando te concentras y preciosa en cada uno de tus momentos.",
            themeColor: "#4a001a"
        },
        {
            title: "Tienes la Magia",
            artist: "Lil Silvio & El Vega",
            isGold: false,
            youtubeId: "XpPRXTAUw_o",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTienes una magia natural en tu mirar y una chispa graciosa que alegra cualquier momento. Qué lindo es conocer a alguien tan auténtica como tú.",
            themeColor: "#33004d"
        },
        {
            title: "Nota de Amor",
            artist: "Carlos Vives, Wisin & Daddy Yankee",
            isGold: false,
            youtubeId: "wZRWpr1G1Qw",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Especial para Lizet:\nUna nota sincera para recordarte lo bonita que eres, tu bondad genuina y esa linda energía que transmites siempre.",
            themeColor: "#00332b"
        },
        {
            title: "Dulce Carita",
            artist: "Dálmata",
            isGold: false,
            youtubeId: "TDkYk--TW-8",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi dulce Li:\nEsa expresión tuya es inigualable. Ya estés feliz, pensativa o renegando un poquito, tu carita siempre refleja una dulzura encantadora.",
            themeColor: "#3d2d00"
        },
        {
            title: "3AM",
            artist: "ALMA",
            isGold: true,
            youtubeId: "s21TuGnO5lM",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "En la calma de la noche:\nPensar en ti es recordar la luz de tus ojos y tu manera tan bonita de sonreír. Es imposible no admirar tu esencia.",
            themeColor: "#594000"
        },
        {
            title: "Tú y Yo",
            artist: "La Misma Gente",
            isGold: false,
            youtubeId: "pf7_auXRrYE",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nMe encanta tu sentido del humor y lo inteligente que eres al conversar. Haces que cualquier rato sea especial.",
            themeColor: "#330015"
        },
        {
            title: "Coqueta",
            artist: "Grupo Frontera",
            isGold: false,
            youtubeId: "G4-grGfxVoY",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTu elegancia y esa mirada cautivadora hacen que sea imposible no prestarte toda la atención. Eres realmente preciosa.",
            themeColor: "#3d0024"
        },
        {
            title: "Virgen",
            artist: "Adolescent's Orquesta",
            isGold: false,
            youtubeId: "pz9O3UeM_o0",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nAdmiro tu bondad y la nobleza con la que tratas a los demás. Eres una persona de inmenso valor.",
            themeColor: "#240047"
        },
        {
            title: "Por Ti",
            artist: "3AM",
            isGold: false,
            youtubeId: "yv_VOxdd8ac",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Por mi niña Li:\nPor sacarte una sonrisa sincera y ver la luz de tus ojos, vale la pena cada detalle preparado aquí.",
            themeColor: "#002447"
        },
        {
            title: "30 Días",
            artist: "Los Primos del Este, Santa Fe Klan",
            isGold: true,
            youtubeId: "Vl6xoVstJRw",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Con el paso del tiempo:\nPueden pasar los días y mi fascinación por tus ojos y tu forma graciosa de ser seguirá siendo la misma.",
            themeColor: "#4a3300"
        },
        {
            title: "Mami",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "FVvRzyXJcv8",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nPosees una gracia y un estilo que cautivan desde lejos. Eres hermosa en todos los sentidos.",
            themeColor: "#593e00"
        },
        {
            title: "Una Lady Como Tú",
            artist: "MTZ Manuel Turizo",
            isGold: false,
            youtubeId: "VYtJAuoZxcc",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            poem: "Para una chica genial:\nUna combinación de inteligencia, belleza y un toque divertido muy especial.",
            themeColor: "#1a0033"
        },
        {
            title: "Vine a Buscarte",
            artist: "Fonseca feat. Alexis & Fido",
            isGold: true,
            youtubeId: "cX_KMJlqFos",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nVine a recordarte lo especial que eres. Y aunque las flores verdaderas se hayan demorado, este detalle está floreciendo para ti.",
            themeColor: "#594000"
        },
        {
            title: "Raro",
            artist: "Nacho, Chyno Miranda & Chino & Nacho",
            isGold: false,
            youtubeId: "Zj6f_JQLcyY",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Extraordinaria Lizet:\nQué bonito encontrar a alguien que logre cautivar tanto con una sola mirada.",
            themeColor: "#470024"
        },
        {
            title: "More",
            artist: "Barboza",
            isGold: true,
            youtubeId: "GEGer49wRAI",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nCada faceta tuya, ya sea alegre o seria, demuestra lo asombrosa y linda que eres.",
            themeColor: "#593b00"
        },
        {
            title: "Quédate Conmigo",
            artist: "Chyno Miranda ft. Wisin & Gente de Zona",
            isGold: false,
            youtubeId: "XA8XogjPcmI",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu compañía transmite una tranquilidad única. Eres genial.",
            themeColor: "#382400"
        },
        {
            title: "Darte un Beso",
            artist: "Prince Royce",
            isGold: true,
            youtubeId: "bdOXnTbyk0g",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Dedicado a ti, mi Li:\nUn detalle sincero para sacarte una sonrisa y decirte lo bonita que te ves hoy.",
            themeColor: "#594000"
        },
        {
            title: "Si Supieras",
            artist: "Daddy Yankee & Wisin y Yandel",
            isGold: false,
            youtubeId: "av2yfDokA6k",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nSi supieras lo bien que se siente conversar contigo y ver tus hermosos ojos hipnotizantes...",
            themeColor: "#002436"
        },
        {
            title: "Bailando",
            artist: "Enrique Iglesias ft. Descemer Bueno",
            isGold: false,
            youtubeId: "NUsoVlDFqZg",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Alegría pura:\nTu risa y tu buena vibra contagian felicidad de inmediato.",
            themeColor: "#591200"
        },
        {
            title: "Despacito",
            artist: "Luis Fonsi ft. Daddy Yankee",
            isGold: false,
            youtubeId: "kJQP7kiw5Fk",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Paso a paso:\nConocerte mejor y apreciar tu personalidad tan genuina es genial.",
            themeColor: "#59001e"
        },
        {
            title: "Chica Ideal",
            artist: "Sebastián Yatra & Guaynaa",
            isGold: false,
            youtubeId: "t_Fi3J4UTlg",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Ideal:\nInteligencia, gracia, bondad y unos ojos preciosos.",
            themeColor: "#2b0059"
        },
        {
            title: "Vivir Bailando",
            artist: "Silvestre Dangond & Maluma",
            isGold: false,
            youtubeId: "dUtEIYj4BHs",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nQue la alegría y el éxito te acompañen siempre.",
            themeColor: "#004736"
        },
        {
            title: "Con los Dos en la Cabeza",
            artist: "Pedro Guerra, Cruzzi",
            isGold: true,
            youtubeId: "O9825iugYPM",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña Li:\nTus palabras y tus ojos deslumbrantes se quedan grabados de la mejor manera.",
            themeColor: "#594000"
        },
        {
            title: "Loco Enamorado",
            artist: "Abraham Mateo, Farruko",
            isGold: false,
            youtubeId: "cmIKUyUrKl4",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu elegancia y esa mirada hipnotizante cautivan a cualquiera.",
            themeColor: "#470036"
        },
        {
            title: "Quiéreme (Remix)",
            artist: "Jacob Forever, Farruko",
            isGold: false,
            youtubeId: "9walz0NcB78",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Aprecio sincero:\nTu buen trato y amabilidad valen muchísimo.",
            themeColor: "#380000"
        },
        {
            title: "Por Fin Te Encontré",
            artist: "Cali y El Dandee ft. Juan Magán",
            isGold: false,
            youtubeId: "_kxz7WX4mLU",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nQué gran gusto haber coincidido con una chica tan linda como tú.",
            themeColor: "#003847"
        },
        {
            title: "Como Tú No Hay Dos",
            artist: "BUXXI",
            isGold: false,
            youtubeId: "xhPykGmB0dk",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Incomparable:\nNo existe nadie con tu sentido del humor, tu bondad y tus ojos cautivadores. Eres única.",
            themeColor: "#4a3c00"
        },
        {
            title: "Como Tú",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "Z0MzSY5RTYI",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nNadie más brinda la serenidad que tú transmites.",
            themeColor: "#38004a"
        },
        {
            title: "Piel",
            artist: "Tiago PZK & Ke Personajes",
            isGold: false,
            youtubeId: "DI71FIdguUs",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu soltura y la dulzura con la que caminas por la vida son admirables.",
            themeColor: "#120047"
        },
        {
            title: "El Amor de Mi Vida",
            artist: "Los Ángeles Azules & María Becerra",
            isGold: false,
            youtubeId: "CaSCapHZhc0",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para ti:\nUn detalle sincero preparado con aprecio genuino.",
            themeColor: "#59003e"
        },
        {
            title: "No Hay Nadie Más",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "sD9_l3oDOag",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Brillo único:\nNo hay nadie más que ilumine el ambiente con tanta naturalidad como tú.",
            themeColor: "#003e59"
        },
        {
            title: "Mi Persona Favorita",
            artist: "Río Roma",
            isGold: false,
            youtubeId: "x-0KoCAV4mc",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Estimada Li:\nGracias por tu forma bonita de ser y tu linda sonrisa.",
            themeColor: "#594700"
        },
        {
            title: "La Mujer Perfecta",
            artist: "Kurt",
            isGold: false,
            youtubeId: "QD0aSAe67CI",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Virtudes nobles:\nBondad, inteligencia, chispa graciosa y unos ojos hermosos.",
            themeColor: "#470024"
        },
        {
            title: "Confieso",
            artist: "Humbe",
            isGold: false,
            youtubeId: "4Ja6WLrZlAE",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Confesión sincera:\nConfieso que fue un gusto inmenso preparar este espacio para ti.",
            themeColor: "#240038"
        },
        {
            title: "Brillas",
            artist: "León Larregui",
            isGold: false,
            youtubeId: "Mcj75l2gJcY",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Brillo propio:\nTus ojos brillan con una luz preciosa que hipnotiza a cualquiera.",
            themeColor: "#594c00"
        },
        {
            title: "Bajo el Agua",
            artist: "Manuel Medrano",
            isGold: false,
            youtubeId: "zLX_GcXt2pI",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nContigo la serenidad fluye con mucha paz.",
            themeColor: "#003859"
        },
        {
            title: "Seguro Te Pierdo",
            artist: "KID FLEX & Sergi",
            isGold: false,
            youtubeId: "Zd1Flawc1-I",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nUna valía humana tan grande como la tuya se aprecia siempre.",
            themeColor: "#472400"
        },
        {
            title: "Te Voy a Amar",
            artist: "Axel",
            isGold: false,
            youtubeId: "KZh60U1PqSE",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Apoyo constante:\nMantendré mi aprecio sincero hacia tu forma de ser.",
            themeColor: "#590024"
        },
        {
            title: "Nuestra Canción",
            artist: "Monsieur Periné ft. Vicente García",
            isGold: false,
            youtubeId: "2vODuvIdQvU",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Armonía:\nEste detalle es un saludo constante dedicado a ti.",
            themeColor: "#380024"
        },
        {
            title: "Mon Amour",
            artist: "Aitana & Zzoilo",
            isGold: false,
            youtubeId: "o2tdLOK7-PE",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nTu inteligencia y carisma deslumbrante merecen todo aplauso.",
            themeColor: "#590059"
        },
        {
            title: "Estoy Enamorado",
            artist: "Wisin & Yandel",
            isGold: true,
            youtubeId: "whBcmlaSLJM",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nLa dulzura de tu mirar hace que admirarte sea algo automático.",
            themeColor: "#594000"
        },
        {
            title: "No Me Digas Que No",
            artist: "Enrique Iglesias ft. Wisin & Yandel",
            isGold: false,
            isRedTheme: true, // CANCIÓN 44: ROJA ESPECIAL
            youtubeId: "zyqt2avPkoA",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Pasión (Canción 44 Especial en Rojo):\nResaltada en rojo brillante por esa chispa única, tus lindos ojos y esa determinación genial que tienes.",
            themeColor: "#800000"
        },
        {
            title: "Cuando Me Enamoro",
            artist: "Enrique Iglesias & Juan Luis Guerra",
            isGold: false,
            youtubeId: "4DO8GsIYfhQ",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Ojos cautivadores:\nTus ojos reflejan una dulzura e inteligencia asombrosas.",
            themeColor: "#592b00"
        },
        {
            title: "Colgando en Tus Manos",
            artist: "Carlos Baute",
            isGold: false,
            youtubeId: "qExd-3oCTl4",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Con afecto:\nUn espacio digital creado exclusivamente para tu agrado.",
            themeColor: "#59002d"
        },
        {
            title: "El Doctorado",
            artist: "Tony Dize",
            isGold: false,
            youtubeId: "szPIgrYCxSY",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Gran mente:\nTienes una agudeza mental que merece los mejores elogios.",
            themeColor: "#003838"
        },
        {
            title: "Héroe Favorito",
            artist: "Romeo Santos",
            isGold: false,
            youtubeId: "Ktq4zATPFsI",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nSiempre listo para apoyarte en lo que necesites.",
            themeColor: "#33004a"
        },
        {
            title: "Quiéreme",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "KazUvN4Y9O4",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Perspectiva:\nConversar contigo es genial y muy enriquecedor.",
            themeColor: "#4a0031"
        },
        {
            title: "Quédate Conmigo",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "hdlmy0nZ9l8",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTu tiempo es valioso y tus comentarios siempre son geniales.",
            themeColor: "#3d2400"
        },
        {
            title: "Te Amaré",
            artist: "William Luna",
            isGold: false,
            youtubeId: "HSVsRIeHYMY",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Constancia:\nUn aprecio genuino que se mantiene constante.",
            themeColor: "#243800"
        },
        {
            title: "Cómo Has Hecho",
            artist: "Dúo Hermanos Gaitán Castro",
            isGold: false,
            youtubeId: "OFKyMaXdt1Y",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Estilo único:\nEs genial ver cómo logras destacar con tanta naturalidad.",
            themeColor: "#381c00"
        },
        {
            title: "De la Nada",
            artist: "William Luna",
            isGold: false,
            youtubeId: "4glI-KAt56c",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Luz nueva:\nTu presencia trajo una bonita claridad.",
            themeColor: "#4a3800"
        },
        {
            title: "Dónde Está el Amor",
            artist: "Afrodisíaco",
            isGold: false,
            youtubeId: "d2ePHppbXPU",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para Lizet:\nLa alta consideración se refleja en cada detalle respetuoso hacia ti.",
            themeColor: "#4a0024"
        },
        {
            title: "Cuando Te Enamoras",
            artist: "Orquesta Candela",
            isGold: false,
            youtubeId: "4NUiK3O4SLI",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Claridad:\nTus ideas están respaldadas por una mente brillante.",
            themeColor: "#590000"
        },
        {
            title: "Me Gusta Todo de Ti",
            artist: "Gran Orquesta Internacional",
            isGold: false,
            youtubeId: "rqMdesRXJpc",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Admiración:\nAdmiro tu sentido del humor, tu amabilidad y tus deslumbrantes ojos.",
            themeColor: "#592400"
        },
        {
            title: "Historia Entre Tus Dedos",
            artist: "LOS 4",
            isGold: false,
            youtubeId: "8DlJh8HRkug",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Éxito:\nEstás construyendo un gran camino guiado por tu talento.",
            themeColor: "#240024"
        },
        {
            title: "Qué Locura Enamorarme de Ti",
            artist: "Eddie Santiago",
            isGold: false,
            youtubeId: "ML-f7nwdDIM",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Inspiración:\nTu buena actitud inspira a dar lo mejor en todo momento.",
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
            poem: "Distinción:\nReunir un rostro tan bonito con una risa sincera es un privilegio.",
            themeColor: "#590024"
        },
        {
            title: "Te Quiero",
            artist: "Flex",
            isGold: false,
            youtubeId: "BQ6_hjFir70",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi Li:\nTe expreso mi más sincera estima y buen apoyo.",
            themeColor: "#4a3800"
        },
        {
            title: "Te Amo Tanto",
            artist: "Nigga",
            isGold: true,
            youtubeId: "bdVcc_8-TB8",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Especial dorada:\nTu ser le otorga un estándar de nobleza y luz a mi vida.",
            themeColor: "#594700"
        },
        {
            title: "Entre Mis Brazos",
            artist: "Nigga",
            isGold: true,
            youtubeId: "UPEHkLH4apc",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Paz:\nUn rincón seguro donde tu alegría y serenidad sean valoradas siempre.",
            themeColor: "#524000"
        },
        {
            title: "Hecho para Ti",
            artist: "LATIN MAFIA x Omar Apollo",
            isGold: false,
            youtubeId: "LKs4eq6dwJQ",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "A tu medida:\nEste trabajo web fue programado pensando exclusivamente en hacerte sonreír.",
            themeColor: "#120024"
        },
        {
            title: "Ayayay",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "MMxHDM83nF8",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "Gracia natural:\nTu desenvolvimiento y alegría contagiosa son geniales.",
            themeColor: "#382400"
        },
        {
            title: "Lo Que Me Pidas",
            artist: "Headphones",
            isGold: false,
            youtubeId: "foSS-zqES_I",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Dedicación:\nCada detalle que sugieras será atendido con mucho gusto.",
            themeColor: "#003838"
        },
        {
            title: "RUFF",
            artist: "Kapo",
            isGold: false,
            youtubeId: "92XmX19e0O8",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Criterio proprio:\nTienes una personalidad auténtica que se hace querer.",
            themeColor: "#2b0047"
        },
        {
            title: "ASTROS",
            artist: "Estrategia Norteña",
            isGold: true,
            youtubeId: "ThSnDDn4068",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Luz de Astros:\nTus ojos brillan como astros deslumbrantes en el firmamento.",
            themeColor: "#665200"
        },
        {
            title: "IMU",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "4Tupj8IMOlY",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Agudeza:\nCada palabra tuya demuestra una forma muy inteligente de ver las cosas.",
            themeColor: "#470024"
        },
        {
            title: "Mi Vida Eres Tú",
            artist: "Sonyk El Dragón",
            isGold: false,
            youtubeId: "DRdeAbYihDk",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Motivación:\nTu linda presencia inspira a dar lo mejor.",
            themeColor: "#593600"
        },
        {
            title: "Tus Recuerdos Son Mi Dios",
            artist: "Pipe Calderón",
            isGold: false,
            youtubeId: "XHr4ivlBCZI",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Recuerdos valiosos:\nCada rato compartido permanece guardado con inmenso aprecio.",
            themeColor: "#380038"
        },
        {
            title: "Suiza",
            artist: "Calle 24",
            isGold: true,
            youtubeId: "CCc-3jTUrA8",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Precisión y dulzura:\nCombinas una mente aguda con una dulzura hermosa.",
            themeColor: "#002447"
        },
        {
            title: "Como Antes",
            artist: "Llane",
            isGold: false,
            youtubeId: "1fk4HGeeIjw",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Valores:\nAdmiro tus principios y tu integridad.",
            themeColor: "#470018"
        },
        {
            title: "Dutty Love",
            artist: "Don Omar ft. Natti Natasha",
            isGold: false,
            youtubeId: "x622Sqjub-s",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Energía pura:\nTu dinamismo le pone buena vibra al día.",
            themeColor: "#240000"
        },
        {
            title: "Love Is a Day",
            artist: "Cuco",
            isGold: false,
            youtubeId: "9wiEM0s4aCQ",
            cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80",
            poem: "Para mi niña Li:\nCada día es ideal para admirar tu linda risa y tus hermosos ojos.",
            themeColor: "#330047"
        },
        {
            title: "Amor de Subida",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "yY3VW4saUxs",
            cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80",
            poem: "En ascenso:\nTu camino personal sigue una curva brillante.",
            themeColor: "#592b00"
        },
        {
            title: "Me Enamoré",
            artist: "Ángel y Kriz",
            isGold: true,
            youtubeId: "2ubn0UHKbMQ",
            cover: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
            poem: "Especial dorada:\nMe enamoré de tu manera tan auténtica de ser, tus chistes graciosos y la mirada cautivadora que tienes.",
            themeColor: "#665200"
        },
        {
            title: "With or Without You",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "KazUvN4Y9O4",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
            poem: "Firmeza:\nMi respeto hacia ti es constante.",
            themeColor: "#4a0024"
        },
        {
            title: "Robarte un Beso",
            artist: "Carlos Vives",
            isGold: false,
            youtubeId: "Mtau4v6foHA",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            poem: "Gratitud:\nGracias por tu sonrisa alegre y por ser como eres.",
            themeColor: "#590024"
        },
        {
            title: "Te Vi",
            artist: "Piso 21 & Micro TDH",
            isGold: false,
            youtubeId: "0yruvXjYoUo",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            poem: "Desde el principio:\nTe vi y me deslumbró la luz tan bonita que transmiten tus ojos.",
            themeColor: "#003e59"
        },
        {
            title: "Bésame",
            artist: "Valentino ft. Manuel Turizo",
            isGold: false,
            youtubeId: "RiF3l0ZZeeU",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            poem: "Dulzura:\nTu trato suave demuestra lo hermosa que es tu alma.",
            themeColor: "#2b0047"
        },
        {
            title: "Sensación del Bloque",
            artist: "De La Ghetto & Randy",
            isGold: false,
            youtubeId: "YTwT2b7SG6c",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            poem: "Sensación genial:\nElegancia, soltura y una mirada que destaca en todo lugar.",
            themeColor: "#4a0031"
        },
        {
            title: "Te Amo",
            artist: "Paulo Londra & Piso 21",
            isGold: false,
            youtubeId: "nP8ZVJxiJlU",
            cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
            poem: "Afecto puro:\nMi más sincera admiración hacia tu intelecto y tus lindos sentimientos.",
            themeColor: "#4a3800"
        },
        {
            title: "Pareja del Año",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "SRm2Ch4oFWs",
            cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
            poem: "Mérito propio:\nTus logros son el fruto de tu gran talento.",
            themeColor: "#00384a"
        },
        {
            title: "Una en un Millón",
            artist: "Alex y Fido",
            isGold: false,
            youtubeId: "HLODpE__LZE",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            poem: "Una en un millón:\nEntre millones de personas en este planeta, tú sobresales por tus hermosos ojos hipnotizantes, tu risa graciosa y tu bondad genuina. ¡Para Lizet!",
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

    // Banner P.D. de las Flores
    const prominentPsBanner = document.getElementById('prominent-ps-banner');
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
       3. MOTOR DE DISPOSICIÓN 3D CON TARJETAS DOBLE CARA REAL
       ---------------------------------------------------------------------- */
    function render3DLayout(songsToRender, layout = 'table') {
        world3D.innerHTML = '';
        currentLayout = layout;
        const count = songsToRender.length;

        songsToRender.forEach((song, i) => {
            const cardContainer = document.createElement('div');
            cardContainer.className = `card-3d ${song.isGold ? 'is-gold' : ''} ${song.isPrimary ? 'is-primary' : ''} ${song.isRedTheme ? 'is-red-theme' : ''}`;
            cardContainer.dataset.id = i;

            // ESTRUCTURA DOBLE CARA REAL (.card-front y .card-back)
            const htmlContent = `
                <div class="card-face card-front">
                    <img src="${song.cover}" alt="${song.title}" class="card-cover">
                    <div class="card-meta">
                        <div class="card-title">${song.title}</div>
                        <div class="card-artist">${song.artist}</div>
                    </div>
                </div>
                <div class="card-face card-back">
                    <img src="${song.cover}" alt="${song.title}" class="card-cover">
                    <div class="card-meta">
                        <div class="card-title">${song.title}</div>
                        <div class="card-artist">${song.artist}</div>
                    </div>
                </div>
            `;
            cardContainer.innerHTML = htmlContent;

            let transformStr = '';

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
            else { // Table
                const cols = 8;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = (col - (cols - 1) / 2) * 280;
                const y = (row - 5) * 130;
                const z = (Math.sin(i * 0.5) * 140);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px)`;
            }

            cardContainer.style.transform = transformStr;

            // Abrir reproductor al hacer clic en cualquier cara o recuadro
            cardContainer.addEventListener('click', (e) => {
                e.stopPropagation();
                openPlayer(song);
            });

            world3D.appendChild(cardContainer);
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
       5. REPRODUCTOR DE MÚSICA & POEMA LINDO (MODAL 2 COLUMNAS)
       ---------------------------------------------------------------------- */
    function openPlayer(song) {
        playerCoverImg.src = song.cover;
        playerSongTitle.textContent = song.title;
        playerSongArtist.textContent = song.artist;

        // Reproductor de YouTube en vivo sin nocookie
        youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;
        directYoutubeLink.href = `https://www.youtube.com/watch?v=${song.youtubeId}`;

        // Poema Dedicado
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
       6. BANNER P.D. DE LAS FLORES (CERRAR AVISO)
       ---------------------------------------------------------------------- */
    if (closePsBtn && prominentPsBanner) {
        closePsBtn.addEventListener('click', () => {
            prominentPsBanner.style.display = 'none';
        });
    }

    /* ----------------------------------------------------------------------
       7. MODAL LISTA DE CANCIONES (86 TEMAS)
       ---------------------------------------------------------------------- */
    function renderSonglistModal() {
        songlistContainer.innerHTML = '';
        songsData.forEach(song => {
            const item = document.createElement('div');
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
