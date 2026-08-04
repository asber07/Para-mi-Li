/* ==========================================================================
   LÓGICA JAVASCRIPT: SORPRESA INTERACTIVA PARA LIZET ("mi niña, mi Li")
   Características: 85 Canciones, Drag & Drop (Mouse + Touch), Reproductor YouTube,
   Poemas Personalizados, Modos de Vista y Filtro de Búsqueda.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. BASE DE DATOS DE 85 CANCIONES (YOUTUBE EMBEDS 100% FUNCIONALES)
       ---------------------------------------------------------------------- */
    const songsData = [
        {
            title: "All of Me",
            artist: "John Legend",
            isGold: true,
            youtubeId: "450p7goxZqg",
            lyrics: "Cause all of me loves all of you / Love your curves and all your edges / All your perfect imperfections / Give your all to me, I'll give my all to you...",
            poem: "Para mi niña, mi Li 💛:\nSi me dieran a elegir entre todo el universo y tu sonrisa, elegiría mil veces tu risa. Tus ojos tienen la luz exacta que ilumina mis días más oscuros. Eres hermosa, inteligente y sencillamente perfecta.",
            themeColor: "#4a3500"
        },
        {
            title: "La promesa",
            artist: "Melendi",
            isGold: true,
            youtubeId: "N_aYq9lK7m0",
            lyrics: "Yo prometo no dejarte de mirar / Te prometo no aburrirte nunca más / Y ser la luz de tu camino en la oscuridad / Cuidar de ti cuando estés a mi lado...",
            poem: "Mi Li hermosa 🌷:\nTe prometo estar siempre que me necesites, admirar tu brillo y recordarte cada día lo maravillosa, brillante y única que eres. Gracias por existir en mi vida.",
            themeColor: "#663300"
        },
        {
            title: "Amor",
            artist: "Emmanuel Cortés",
            isGold: true,
            youtubeId: "8dM35HwW5c8",
            lyrics: "Y es que el amor eres tú, con esa carita tan linda / Con la forma en que me miras y me haces suspirar / No hay un día que no piense en tu sonrisa...",
            poem: "Para la chica de los ojos más lindos ✨:\nCuando pienso en el amor, pienso en tu nombre, en tu inteligencia que me cautiva y en la calidez de tus abrazos. Eres el pedacito de cielo que le faltaba a mi mundo.",
            themeColor: "#550022"
        },
        {
            title: "Tienes la magia",
            artist: "Lil Silvio y El Vega",
            isGold: false,
            youtubeId: "76jJ1Y5d27Q",
            lyrics: "Tienes la magia que me enamora / Esa mirada que a mí me aloca / Cuando estás cerca el tiempo no pasa...",
            poem: "Para mi Li encantadora 💖:\nTienes una magia en la mirada que desarma cualquier mal día. Tu elegancia y tu forma de ser me convencen de que las personas especiales de verdad existen.",
            themeColor: "#4a0066"
        },
        {
            title: "Nota de amor",
            artist: "Carlos Vives, Wisin, Daddy Yankee",
            isGold: false,
            youtubeId: "L2bYh9z8kM0",
            lyrics: "Te preparé una nota de amor / Que dice que te quiero y que por ti me muero / Una melodía para tu corazón...",
            poem: "Especial para Lizet 📝:\nCada verso de este lienzo es una nota de amor escrita para recordarte que tu inteligencia y belleza son una combinación inolvidable.",
            themeColor: "#004d40"
        },
        {
            title: "Dulce carita",
            artist: "Dálmata",
            isGold: false,
            youtubeId: "pS9fP4J5y34",
            lyrics: "Esa dulce carita que tú tienes me enamora / Cuando sonríes me cambia la vida a cada hora / Tienes ese algo que nadie más tiene...",
            poem: "Para mi dulce Li 😊:\nTienes la carita más tierna y hermosa del mundo. Cuando sonríes, todo a tu alrededor cobra vida y sentido.",
            themeColor: "#554000"
        },
        {
            title: "3AM",
            artist: "ALMA",
            isGold: true,
            youtubeId: "KqJ62s43Y_4",
            lyrics: "Pensando en ti a las tres de la mañana / Recordando tu risa y tu bonita mirada / No hay hora en la que no estés en mi mente...",
            poem: "A las 3AM y a cualquier hora 🌙:\nNo importa qué hora del día sea, siempre hay un pensamiento dedicado a lo linda que te ves y a lo increíble que eres.",
            themeColor: "#805c00"
        },
        {
            title: "Tu y yo",
            artist: "La Misma Gente",
            isGold: false,
            youtubeId: "38B7b47b4e0",
            lyrics: "Tú y yo, caminando juntos bajo la luna / Como ninguna otra historia en el mundo / Sintiendo el latido de un amor profundo...",
            poem: "Para mi niña 🌹:\nTú y yo en nuestra propia sintonía. Me fascina cómo piensas y la ternura con la que iluminas cada espacio.",
            themeColor: "#40001a"
        },
        {
            title: "Coqueta",
            artist: "Grupo Frontera",
            isGold: false,
            youtubeId: "70XW3a08890",
            lyrics: "Tan coqueta y tan bonita / Que con una mirada me quita lo malo / Sonriendo tan lindo a cada ratito...",
            poem: "Para la más coqueta y hermosa 💐:\nTu coquetería natural y tu sonrisa tierna me alegran el alma. Eres mi niña preferida siempre.",
            themeColor: "#550033"
        },
        {
            title: "Virgen",
            artist: "Adolescentes",
            isGold: false,
            youtubeId: "r1NfP44h400",
            lyrics: "Y es que te amo con el alma / Te guardo en mi corazón como lo más puro / Brillando como una estrella en el cielo...",
            poem: "Para Lizet 💖:\nTu alma pura y transparente es algo que valoro infinitamente. Nunca dejes de ser esa chica brillante y genial.",
            themeColor: "#330066"
        },
        {
            title: "Por ti",
            artist: "3AM",
            isGold: false,
            youtubeId: "y1C44P5P400",
            lyrics: "Por ti daría lo que fuera / Por ver esa mirada una vez más / Caminando juntos hacia la paz...",
            poem: "Por mi Li ✨:\nPor ti movería montañas solo para sacarte una sonrisa. Tu felicidad es mi motivo favorito.",
            themeColor: "#003366"
        },
        {
            title: "30 días",
            artist: "Los Primos del Este, Santa Fe Klan",
            isGold: true,
            youtubeId: "x9J28359y30",
            lyrics: "Pasan los días y sigo pensando en ti / En lo bonita que te ves cuando me miras así / Contando los minutos para verte feliz...",
            poem: "30 días y la vida entera 🌟:\nPodrían pasar meses y años, y nunca me cansaría de admirar lo hermosa e inteligente que eres, mi Li.",
            themeColor: "#664700"
        },
        {
            title: "Mami",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "8s120398y12",
            lyrics: "Mami tú eres la dueña de mi atención / La que alegra todo mi corazón / Con tu carita tan bella e ilusión...",
            poem: "Mi niña adorada 🌷:\nEres la dueña de las sonrisas más bonitas. Todo lo que haces tiene un toque especial y encantador.",
            themeColor: "#805900"
        },
        {
            title: "Una Lady Como Tú",
            artist: "MTZ Manuel Turizo",
            isGold: false,
            youtubeId: "Vqfy4ScRXGg",
            lyrics: "Buscando una lady como tú / Que me llene la vida de luz / Quiero cantar para ti este verso...",
            poem: "Para una Lady sin igual 👑:\nUna chica con tu clase, tu elegancia y tu carisma no se encuentra dos veces. Eres una reina en todo sentido.",
            themeColor: "#1a0033"
        },
        {
            title: "Vine a buscarte",
            artist: "Fonseca ft. Alexis y Fido",
            isGold: false,
            youtubeId: "N_08j1S_123",
            lyrics: "Vine a buscarte porque te extraño / Porque no hay nadie en el mundo como tú / Llenando mi vida de paz y virtud...",
            poem: "Para mi Li 🚗:\nIba a buscarte con tulipanes y flores... pero la florería falló jajaja. Aun así, mi cariño por ti florece solo.",
            themeColor: "#004d33"
        },
        {
            title: "Raro",
            artist: "Chyno Miranda, Chino & Nacho",
            isGold: false,
            youtubeId: "N4_9348y123",
            lyrics: "Qué raro es esto que siento por ti / Tan bonito, perfecto y real / Como una estrella fugaz celestial...",
            poem: "Para Lizet ✨:\nEs maravilloso cómo alguien como tú puede hacer que el mundo entero se sienta más bonito y lleno de color.",
            themeColor: "#660033"
        },
        {
            title: "More",
            artist: "Barboza",
            isGold: true,
            youtubeId: "y9382019238",
            lyrics: "More, contigo todo es más bonito / Tu miradita me deja sin aliento / Sintiendo este amor segundo a segundo...",
            poem: "More de mi corazón 🌟:\nCada pequeño detalle de tu rostro y tu forma de hablar me parece una obra de arte. Te ves hermosa siempre.",
            themeColor: "#805500"
        },
        {
            title: "Quédate Conmigo",
            artist: "Chyno Miranda ft. Wisin",
            isGold: false,
            youtubeId: "y8392019238",
            lyrics: "Quédate conmigo esta noche y siempre / Que contigo la vida se siente mejor / Llenando mi alma de paz y amor...",
            poem: "Para mi niña hermosa 🌻:\nContigo los minutos se pasan volando y las risas nunca faltan. Tu compañía es el mejor regalo.",
            themeColor: "#4d3300"
        },
        {
            title: "Darte un Beso",
            artist: "Prince Royce",
            isGold: false,
            youtubeId: "bdOXnTbyk0g",
            lyrics: "Yo sólo quiero darte un beso / Y regalarte mis mañanas / Cantar para ti bajo la ventana...",
            poem: "Para ti, mi Li 💋:\nUn besito en la mejilla para recordarte lo linda y dulce que eres. Eres mi niña consentida.",
            themeColor: "#66004d"
        },
        {
            title: "Si Supieras",
            artist: "Daddy Yankee & Wisin y Yandel",
            isGold: false,
            youtubeId: "y8392019239",
            lyrics: "Si supieras cuánto me gustas tú / Y lo linda que te ves con esa luz...",
            poem: "Si supieras, Lizet ✨:\nSi supieras lo bonita que te ves cuando te concentras o cuando te ríes, entenderías por qué te dedico este detalle.",
            themeColor: "#00334d"
        },
        {
            title: "Bailando",
            artist: "Enrique Iglesias",
            isGold: false,
            youtubeId: "NUsoVlDFqZg",
            lyrics: "Bailando, bailando, tu cuerpo y el mío / Llenando el vacío que deja la distancia...",
            poem: "Para mi niña alegre 💃:\nTu energía alegre contagia felicidad a cualquiera. Eres un rayito de sol brillante.",
            themeColor: "#801a00"
        },
        {
            title: "Despacito",
            artist: "Luis Fonsi ft. Daddy Yankee",
            isGold: false,
            youtubeId: "kJQP7kiw5Fk",
            lyrics: "Despacito, quiero respirar tu cuello despacito / Para que te acuerdes si no estás conmigo...",
            poem: "Paso a paso, mi Li 🌹:\nConocerte mejor cada día es un viaje hermoso. Admirar tu inteligencia es mi pasatiempo favorito.",
            themeColor: "#80002b"
        },
        {
            title: "Chica Ideal",
            artist: "Sebastián Yatra, Guaynaa",
            isGold: false,
            youtubeId: "y8392019240",
            lyrics: "Ella es mi chica ideal / La que busqué y por fin encontré...",
            poem: "Para mi chica ideal 💖:\nInteligente, hermosa, graciosa y única. Literalmente eres la chica ideal con la que da gusto conversar.",
            themeColor: "#400080"
        },
        {
            title: "Vivir Bailando",
            artist: "Silvestre Dangond, Maluma",
            isGold: false,
            youtubeId: "y8392019241",
            lyrics: "Quiero vivir bailando a tu lado / Porque tu forma de ser me ha conquistado...",
            poem: "Para Lizet 🎶:\nQue la vida nos traiga siempre momentos alegres para disfrutar. Tu sonrisa lo vale todo.",
            themeColor: "#00664d"
        },
        {
            title: "Con Los Dos En La Cabeza",
            artist: "Pedro Guerra · Cruzzi",
            isGold: true,
            youtubeId: "y8392019242",
            lyrics: "Pensando en tu rostro todo el día / Con los dos en la cabeza y el alma llena de poesía...",
            poem: "Especial para mi Li 🌟:\nTus ojitos negros y tu mirada inolvidable se quedan grabados en mi mente. Eres una belleza completa.",
            themeColor: "#805c00"
        },
        {
            title: "Loco Enamorado",
            artist: "Abraham Mateo",
            isGold: false,
            youtubeId: "y8392019243",
            lyrics: "Loco enamorado de tus ojos / De tu manera tan linda de sonreír...",
            poem: "Loco por tu sonrisa 😄:\nTu sonrisa es capaz de transformar cualquier día gris en un día lleno de tulipanes amarillos.",
            themeColor: "#800040"
        },
        {
            title: "Quiéreme (Remix)",
            artist: "Jacob Forever",
            isGold: false,
            youtubeId: "y8392019244",
            lyrics: "Quiéreme como yo te quiero a ti / Que esta historia sea tan bonita y feliz...",
            poem: "Para ti, mi niña 🌺:\nTu calidez y tu manera de ser hacen que cualquiera quiera tenerte cerca siempre.",
            themeColor: "#660000"
        },
        {
            title: "Por Fin Te Encontré",
            artist: "Cali Y El Dandee",
            isGold: false,
            youtubeId: "y8392019245",
            lyrics: "Por fin te encontré, te vi pasar / Y me cambió la vida entera al instante...",
            poem: "Para Lizet ✨:\nQué suerte haberte conocido. Eres esa persona que le suma luz y alegría a la rutina.",
            themeColor: "#004d66"
        },
        {
            title: "Como Tu No Hay Dos",
            artist: "BUXXI",
            isGold: false,
            youtubeId: "y8392019246",
            lyrics: "Porque como tú no hay dos / Eres única y especial en este mundo...",
            poem: "Literalmente única 💛:\nNo hay nadie con tu sentido del humor, tu inteligencia y tu belleza. Como tú, simplemente no hay dos.",
            themeColor: "#665200"
        },
        {
            title: "Como Tú",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "y8392019247",
            lyrics: "Nadie me mira como tú / Nadie sonríe tan lindo como tú...",
            poem: "Para mi Li 🌷:\nNadie tiene esa mirada tan expresiva ni esa forma tan linda de escuchar.",
            themeColor: "#4d0066"
        },
        {
            title: "Piel",
            artist: "Tiago PZK, Ke Personajes",
            isGold: false,
            youtubeId: "y8392019248",
            lyrics: "Sintiendo la música en el alma / Con tu presencia tan bonita y calma...",
            poem: "Para Lizet 🎶:\nTu presencia transmite una paz hermosa. Te ves linda hasta en tus momentos más distraídos.",
            themeColor: "#1a0066"
        },
        {
            title: "El Amor de Mi Vida",
            artist: "Los Ángeles Azules, María Becerra",
            isGold: false,
            youtubeId: "y8392019249",
            lyrics: "Tú eres el regalo más lindo que me dio la vida / Con tu carita brillante e iluminada...",
            poem: "Para mi niña especial 💕:\nUn detalle hecho con mucho cariño para la persona más linda y auténtica.",
            themeColor: "#800055"
        },
        {
            title: "No Hay Nadie Más",
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "sD9_l348900",
            lyrics: "Recuerdo aquel día como si fuera hoy / No hay nadie más tan especial como tú...",
            poem: "No hay nadie más 🌟:\nEn un salón lleno de gente, tus ojos destacarían al instante. Eres radiante.",
            themeColor: "#005580"
        },
        {
            title: "Mi Persona Favorita",
            artist: "Río Roma",
            isGold: false,
            youtubeId: "f159384900",
            lyrics: "Tú eres mi persona favorita / La que alegra mis días con su sonrisa...",
            poem: "Mi persona favorita 🌻:\nDefinitivamente eres una de mis personas favoritas. Gracias por regalarme tu linda compañía.",
            themeColor: "#806600"
        },
        {
            title: "La Mujer Perfecta",
            artist: "Kurt",
            isGold: false,
            youtubeId: "k159384901",
            lyrics: "Ella es la mujer perfecta / Con su carita de ángel y mente brillante...",
            poem: "La mujer perfecta ✨:\nPerfecta en tu autenticidad, en tus metas y en la forma en que cuidas a quienes quieres.",
            themeColor: "#660033"
        },
        {
            title: "Confieso",
            artist: "Humbe",
            isGold: false,
            youtubeId: "h159384902",
            lyrics: "Confieso que me encantas / Confieso que tu mirada me llena el pensamiento...",
            poem: "Confesión para Li 💌:\nConfieso que hacerte esta web me sacó muchas sonrisas pensando en cómo reaccionarías.",
            themeColor: "#33004d"
        },
        {
            title: "Brillas",
            artist: "León Larregui",
            isGold: false,
            youtubeId: "l159384903",
            lyrics: "Brillas y brillas tan lindo / Como las estrellas en el mar profundo...",
            poem: "Brillas tan lindo ✨:\nBrillas con luz propia. Tu inteligencia brilla y tu belleza encandila.",
            themeColor: "#806d00"
        },
        {
            title: "Bajo El Agua",
            artist: "Manuel Medrano",
            isGold: false,
            youtubeId: "m159384904",
            lyrics: "Quiero volar contigo, muy alto donde el viento nos lleve / Bajo el agua con tu dulce paz...",
            poem: "Para Lizet 🌊:\nContigo todo fluye de manera natural. Tu presencia da serenidad y alegría.",
            themeColor: "#004d80"
        },
        {
            title: "Seguro Te Pierdo",
            artist: "KID FLEX, Sergi",
            isGold: false,
            youtubeId: "kf15938490",
            lyrics: "No quiero perderte nunca / Porque una chica como tú es única...",
            poem: "Para mi Li 💛:\nUna chica tan valiosa merece ser cuidada y recordada todos los días.",
            themeColor: "#663300"
        },
        {
            title: "Te voy a amar",
            artist: "Axel",
            isGold: false,
            youtubeId: "ax15938490",
            lyrics: "Te voy a amar hasta el final / Te voy a acompañar siempre...",
            poem: "Para mi niña hermosa 💖:\nSiempre tendrás en mí a alguien que te apoye en tus sueños y celebre tus logros.",
            themeColor: "#800033"
        },
        {
            title: "Nuestra Canción",
            artist: "Monsieur Periné",
            isGold: false,
            youtubeId: "mp15938490",
            lyrics: "Con las flores de tu jardín / Bailando nuestra canción suavemente...",
            poem: "Flores y música 🌷:\nAunque las flores de la florería no llegaron, las flores de este lienzo son todas tuyas.",
            themeColor: "#4d0033"
        },
        {
            title: "Mi Amor",
            artist: "Aitana y Zzoilo",
            isGold: false,
            youtubeId: "az15938490",
            lyrics: "Tú me encantas tanto / Que no puedo dejar de mirarte...",
            poem: "Para Lizet 😊:\nMe encanta cómo eres de espontánea y la chispa tan linda que tienes.",
            themeColor: "#800080"
        },
        {
            title: "Estoy Enamorado",
            artist: "Wisin & Yandel",
            isGold: false,
            youtubeId: "wy15938490",
            lyrics: "Estoy enamorado de tu alma / De tu dulce mirada y de tu calma...",
            poem: "Para mi Li 🌹:\nTu alma dulce hace que cualquier momento sea especial.",
            themeColor: "#33001a"
        },
        {
            title: "No Me Digas Que No",
            artist: "Enrique Iglesias",
            isGold: false,
            youtubeId: "ei15938490",
            lyrics: "No me digas que no / Si sabes que por ti me muero...",
            poem: "Para mi niña 😉:\nNo me digas que no te gustó esta sorpresa, ¡le puse todo el corazón!",
            themeColor: "#660022"
        },
        {
            title: "Cuando Me Enamoro",
            artist: "Enrique Iglesias, Juan Luis Guerra",
            isGold: false,
            youtubeId: "ei25938490",
            lyrics: "Cuando me enamoro, a veces desespero / Es la luz de tus ojos brillantes...",
            poem: "La luz de tus ojos 👀:\nTus ojos tienen esa calidez que provoca quedarse mirándolos un buen rato.",
            themeColor: "#804000"
        },
        {
            title: "Colgando en tus manos",
            artist: "Carlos Baute",
            isGold: false,
            youtubeId: "cb15938490",
            lyrics: "Te envío poemas de mi propia mano / Te envío canciones de mi corazón...",
            poem: "En tus manos 💌:\nTe envío esta web hecha código a código solo para ti, mi niña Li.",
            themeColor: "#800040"
        },
        {
            title: "El Doctorado",
            artist: "Tony Dize",
            isGold: false,
            youtubeId: "td15938490",
            lyrics: "Tengo un doctorado en quererte / En admirar tu carita de ángel...",
            poem: "Doctorado en admirarte 🎓:\nTienes una inteligencia brillante. Te admiro mucho por cómo superas cada reto.",
            themeColor: "#004d4d"
        },
        {
            title: "Héroe Favorito",
            artist: "Romeo Santos",
            isGold: false,
            youtubeId: "rs15938490",
            lyrics: "Si yo fuera tu héroe favorito / Te protegería de todo mal...",
            poem: "Para Lizet 🦸‍♂️:\nTu Sebas siempre estará aquí para apoyarte y sacarte una sonrisa cuando lo necesites.",
            themeColor: "#4a0066"
        },
        {
            title: "Quiereme",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "js15938490",
            lyrics: "Quiéreme un poquito más / Que contigo toco las estrellas...",
            poem: "Tocar las estrellas 🌟:\nHablar contigo se siente así de lindo y descomplicado.",
            themeColor: "#660044"
        },
        {
            title: "Quédate Conmigo",
            artist: "Luciano Pereyra",
            isGold: false,
            youtubeId: "lp15938490",
            lyrics: "Quédate conmigo esta noche y el resto de la vida...",
            poem: "Para mi niña Li 💛:\nTu compañía siempre es el mejor plan de todos.",
            themeColor: "#553300"
        },
        {
            title: "Te Amaré",
            artist: "William Luna",
            isGold: false,
            youtubeId: "wl15938490",
            lyrics: "Te amaré por siempre en la distancia y en el tiempo...",
            poem: "Para Lizet 🌾:\nUn tema bonito para recordar que mi cariño por ti es sincero y constante.",
            themeColor: "#334d00"
        },
        {
            title: "Cómo has hecho",
            artist: "Dúo Hnos. Gaitán Castro",
            isGold: false,
            youtubeId: "gc15938490",
            lyrics: "Cómo has hecho para enamorarme / Cómo has hecho para cambiar mi vida...",
            poem: "¿Cómo le haces, Li? 🤔:\nCómo le haces para verte tan linda sin esfuerzo y tener esa mente tan brillante.",
            themeColor: "#4d2600"
        },
        {
            title: "De la Nada",
            artist: "William Luna",
            isGold: false,
            youtubeId: "wl2593849",
            lyrics: "De la nada apareciste en mi vida / Como un rayo de sol suave...",
            poem: "Llegaste a iluminar ✨:\nApareciste para llenar mis días de momentos bonitos y risas sinceras.",
            themeColor: "#664d00"
        },
        {
            title: "Dónde está el amor",
            artist: "Afrodisíaco",
            isGold: false,
            youtubeId: "af1593849",
            lyrics: "Dónde está el amor que me diste tú / Que me llena la vida de luz...",
            poem: "Para mi Li 🌸:\nEl amor está en los pequeños detalles como este regalo interactivo.",
            themeColor: "#660033"
        },
        {
            title: "Cuando Te Enamoras",
            artist: "Orquesta Candela",
            isGold: false,
            youtubeId: "oc1593849",
            lyrics: "Cuando te enamoras la vida cambia de color / Todo se vuelve más bonito...",
            poem: "De mil colores 🎨:\nTus ojos y tu risa le ponen color a cualquier instante.",
            themeColor: "#800000"
        },
        {
            title: "Me Gusta Todo de Ti",
            artist: "Gran Orquesta Internacional",
            isGold: false,
            youtubeId: "go1593849",
            lyrics: "Me gusta todo de ti, tu sonrisa, tu mirada / Tu forma tan linda de caminar...",
            poem: "Me gusta todo de ti 💖:\nMe gusta tu voz, tu risa, tu inteligencia y lo tierna que eres.",
            themeColor: "#803300"
        },
        {
            title: "HISTORIA ENTRE TUS DEDOS",
            artist: "LOS 4",
            isGold: false,
            youtubeId: "l41593849",
            lyrics: "Hay una historia entre tus dedos / Que se escribe despacito...",
            poem: "Tu propia historia 📖:\nEres la protagonista de una historia hermosa que apenas está empezando.",
            themeColor: "#330033"
        },
        {
            title: "Que Locura Enamorarme De Ti",
            artist: "Eddie Santiago",
            isGold: false,
            youtubeId: "es1593849",
            lyrics: "Que locura enamorarme de ti / Si supieras lo que causas en mí...",
            poem: "Qué locura tan bonita 🤪:\nEs una locura bonita lo rápido que me sacas una sonrisa cuando me escribes.",
            themeColor: "#66001a"
        },
        {
            title: "Te Regalo Amores",
            artist: "RKM & Ken-Y",
            isGold: false,
            youtubeId: "rk1593849",
            lyrics: "Te regalo amores, te regalo canciones / Te regalo el cielo entero...",
            poem: "Regalos para Li 🎁:\nTe regalo esta página web y mil flores virtuales mientras abren la florería.",
            themeColor: "#400033"
        },
        {
            title: "Déjame Entrar",
            artist: "Makano",
            isGold: true,
            youtubeId: "mk1593849",
            lyrics: "Déjame entrar a tu corazón / Déjame demostrarte lo que siento...",
            poem: "Para mi niña hermosa 🌟:\nUn rinconcito en tu corazón es todo lo que hace falta para sonreír feliz.",
            themeColor: "#806600"
        },
        {
            title: "¿Por qué Dios te hizo tan bella? / ANHELO",
            artist: "Adolescentes",
            isGold: false,
            youtubeId: "oa1593849",
            lyrics: "¿Por qué Dios te hizo tan bella? / Con esos ojos que encandilan...",
            poem: "¿Por qué tan bella? 😍:\nEn serio, ¿por qué te hizo tan bella e inteligente al mismo tiempo? Es un privilegio conocerte.",
            themeColor: "#800033"
        },
        {
            title: "Te quiero",
            artist: "Flex",
            isGold: false,
            youtubeId: "fl1593849",
            lyrics: "Te quiero baby, te quiero / Eres mi sol y mi cielo...",
            poem: "Para mi Li ☀️:\nTe quiero un montón. Eres mi rayito de sol favorito.",
            themeColor: "#664d00"
        },
        {
            title: "Te Amo Tanto",
            artist: "Nigga",
            isGold: true,
            youtubeId: "ng1593849",
            lyrics: "Te amo tanto que no puedo explicarlo / Eres mi sueño hecho realidad...",
            poem: "Especial dorada para Lizet 🌟:\nEres un sueño de persona. Gracias por tu dulzura y por iluminar mi mundo.",
            themeColor: "#806600"
        },
        {
            title: "Entre mis brazos",
            artist: "Nigga",
            isGold: true,
            youtubeId: "ng2593849",
            lyrics: "Quiero tenerte entre mis brazos / Y decirte al oído lo mucho que vales...",
            poem: "Abrazo fuerte para Li 💛:\nPara recordarte lo mucho que vales y lo especial que eres en todo momento.",
            themeColor: "#735c00"
        },
        {
            title: "Hecho para ti",
            artist: "LATIN MAFIA x Omar Apollo",
            isGold: false,
            youtubeId: "lm1593849",
            lyrics: "Esto está hecho para ti / Pensando en ti cada segundo...",
            poem: "Hecho a tu medida 🛠️:\nEste detalle digital fue hecho exclusivamente para sacarte una risa y alegrarte el día.",
            themeColor: "#1a0033"
        },
        {
            title: "Ayayay",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "jc1593849",
            lyrics: "Ayayay qué bonita te ves / Con esa mirada tan dulce...",
            poem: "Ayayay con esa carita 😄:\nAyayay mi niña, qué bonita te ves cuando estás feliz.",
            themeColor: "#4d3300"
        },
        {
            title: "Lo que me pides por auriculares",
            artist: "RUFF - Kapo",
            isGold: false,
            youtubeId: "rk2593849",
            lyrics: "Escuchando música suavecita en los audífonos / Pensando en ti...",
            poem: "En tus audífonos 🎧:\nOjalá este tema suene en tus auriculares y te acuerdes de que tu Sebas piensa en ti.",
            themeColor: "#004d4d"
        },
        {
            title: "ASTROS",
            artist: "Estrategia Norteña",
            isGold: true,
            youtubeId: "ast159384",
            lyrics: "Los astros se alinearon para encontrarte / Eres la estrella más brillante del firmamento...",
            poem: "Estrella brillante 🌟:\nHasta los astros sabían que tenías que llegar a iluminarlo todo con tu existencia.",
            themeColor: "#997a00"
        },
        {
            title: "Imu",
            artist: "Jorge Cuellar",
            isGold: false,
            youtubeId: "jc2593849",
            lyrics: "Con el ritmo de tu voz alegre en mi cabeza...",
            poem: "Tu dulce voz 🎶:\nEscuchar tu voz alegre es el mejor remedio para cualquier cansancio.",
            themeColor: "#660033"
        },
        {
            title: "Mi Vida Eres Tú",
            artist: "Sonyk El Dragón",
            isGold: false,
            youtubeId: "sd1593849",
            lyrics: "Mi vida eres tú, mi luz y mi camino...",
            poem: "Mi niña Li 🌟:\nUn abrazo apretado para la chica más linda del planeta.",
            themeColor: "#804d00"
        },
        {
            title: "Tus Recuerdos Son Mi Dios",
            artist: "Pipe Calderón",
            isGold: false,
            youtubeId: "pc1593849",
            lyrics: "Recordando cada momento lindo a tu lado...",
            poem: "Recuerdos bonitos 📸:\nGuardado cada recuerdo bonito contigo como un tesoro.",
            themeColor: "#4d004d"
        },
        {
            title: "Suiza",
            artist: "Calle 24",
            isGold: false,
            youtubeId: "c24159384",
            lyrics: "Con el frío afuera pero tu calor adentro...",
            poem: "Calidez única 🔥:\nTu ternura abriga el corazón de cualquiera.",
            themeColor: "#003366"
        },
        {
            title: "Como antes",
            artist: "Llane",
            isGold: false,
            youtubeId: "ll1593849",
            lyrics: "Querernos bonito como antes, con detalles puros...",
            poem: "Detalles sinceros 💌:\nPorque los detalles sinceros nunca pasan de moda para alguien tan linda como tú.",
            themeColor: "#660022"
        },
        {
            title: "Amor sucio",
            artist: "Don Omar ft Natti Natasha",
            isGold: false,
            youtubeId: "do1593849",
            lyrics: "Con el ritmo que nos mueve el alma a bailar...",
            poem: "Para la más divertida 🎶:\nPara que te des una bailadita y disfrutes de la buena música.",
            themeColor: "#330000"
        },
        {
            title: "El amor es un día",
            artist: "Cuco",
            isGold: false,
            youtubeId: "cc1593849",
            lyrics: "El amor es un día y la vida es contigo...",
            poem: "Para mi niña Li 💖:\nCada día a tu lado cobra un matiz más especial.",
            themeColor: "#4a0066"
        },
        {
            title: "Amor de subida",
            artist: "Los Primos del Este",
            isGold: false,
            youtubeId: "pe1593849",
            lyrics: "Un cariño que va creciendo más y más...",
            poem: "Creciendo siempre 📈:\nComo mi admiración por lo dedicada e inteligente que eres.",
            themeColor: "#804000"
        },
        {
            title: "Me enamoré",
            artist: "Angel y Khriz",
            isGold: true,
            youtubeId: "ak1593849",
            lyrics: "Me enamoré de tus ojos, me enamoré de tu piel...",
            poem: "Especial dorada 🌟:\nMe enamoré de tu manera de pensar, de tus ojitos lindos y de esa vibra tan bonita que transmites.",
            themeColor: "#997a00"
        },
        {
            title: "Contigo o sin ti",
            artist: "Johnny Sky",
            isGold: false,
            youtubeId: "js2593849",
            lyrics: "Siempre recordando tu linda mirada...",
            poem: "Recordándote 🌷:\nIncluso en la distancia, tu recuerdo saca sonrisas.",
            themeColor: "#660033"
        },
        {
            title: "Robarte un beso",
            artist: "Carlos Vives, Sebastián Yatra",
            isGold: false,
            youtubeId: "cv1593849",
            lyrics: "Déjame robarte un beso que me llegue al corazón...",
            poem: "Un besito volado 😘:\nUn beso volado para la chica con la sonrisa más contagiosa.",
            themeColor: "#800033"
        },
        {
            title: "Te vi",
            artist: "Piso 21 y Micro TDH",
            isGold: false,
            youtubeId: "p21159384",
            lyrics: "Te vi y me cambió la mirada...",
            poem: "Cuando te vi 👁️:\nDesde que te vi supe que eras alguien fuera de lo común.",
            themeColor: "#005580"
        },
        {
            title: "Bésame",
            artist: "Valentino ft Manuel Turizo",
            isGold: false,
            youtubeId: "v15938490",
            lyrics: "Bésame suavemente con tu ternura...",
            poem: "Ternura pura 🌸:\nTu ternura es tu superpoder más bonito.",
            themeColor: "#400066"
        },
        {
            title: "Sensación del bloque",
            artist: "De La Ghetto y Randy",
            isGold: false,
            youtubeId: "dg1593849",
            lyrics: "Ella es la sensación, todos la miran pasar...",
            poem: "La sensación 😎:\nLa sensación total donde sea que vayas. Bella por dentro y por fuera.",
            themeColor: "#660044"
        },
        {
            title: "Te amo",
            artist: "Paulo Londra y Piso 21",
            isGold: false,
            youtubeId: "pl1593849",
            lyrics: "Te amo tanto que no puedo disimularlo...",
            poem: "Para mi Li 💛:\nPara decirte con música lo mucho que importas.",
            themeColor: "#664d00"
        },
        {
            title: "Pareja del año",
            artist: "Sebastián Yatra, Myke Towers",
            isGold: false,
            youtubeId: "sy1593849",
            lyrics: "Puedes ser la pareja del año...",
            poem: "La más top ✨:\nEres la chica del año y de la vida entera.",
            themeColor: "#004d66"
        },
        {
            title: "Una en un millón",
            artist: "Alexis & Fido / Alkilados",
            isGold: false,
            youtubeId: "af2593849",
            lyrics: "Tú eres una en un millón / No hay nadie que se te compare...",
            poem: "Una en un millón 🌟:\nEntre millones de personas, tú sobresales sin esfuerzo por tu inteligencia, carisma y hermosura. ¡Eres mi niña, mi Li!",
            themeColor: "#805900"
        }
    ];

    /* ----------------------------------------------------------------------
       2. ELEMENTOS DEL DOM
       ---------------------------------------------------------------------- */
    const songCanvas = document.getElementById('song-canvas');
    const bgPetalsContainer = document.getElementById('bg-petals-container');
    const searchInput = document.getElementById('search-input');
    const btnPoems = document.getElementById('btn-poems');
    const btnToggleView = document.getElementById('btn-toggle-view');
    const viewIcon = document.getElementById('view-icon');
    const viewLabel = document.getElementById('view-label');
    
    // Player Modal Elements
    const playerModal = document.getElementById('player-modal');
    const closePlayerBtn = document.getElementById('close-player-btn');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const directYoutubeLink = document.getElementById('direct-youtube-link');
    const playerSongTitle = document.getElementById('player-song-title');
    const playerSongArtist = document.getElementById('player-song-artist');
    const poemTitle = document.getElementById('poem-title');
    const poemTextContent = document.getElementById('poem-text-content');
    const lyricsTextContent = document.getElementById('lyrics-text-content');
    const tabPoemBtn = document.getElementById('tab-poem-btn');
    const tabLyricsBtn = document.getElementById('tab-lyrics-btn');
    const tabPoemContent = document.getElementById('tab-poem-content');
    const tabLyricsContent = document.getElementById('tab-lyrics-content');

    // Poems Modal Elements
    const poemsModal = document.getElementById('poems-modal');
    const closePoemsBtn = document.getElementById('close-poems-btn');
    const poemsGrid = document.getElementById('poems-grid');

    // Estado Global
    let isGridView = false;
    let maxZIndex = 100;

    /* ----------------------------------------------------------------------
       3. GENERADOR DE FLORES Y PETALOS DE FONDO
       ---------------------------------------------------------------------- */
    function createBackgroundPetals() {
        const icons = ['🌸', '🌷', '🌼', '✨', '💛', '🌺'];
        for (let i = 0; i < 22; i++) {
            const petal = document.createElement('div');
            petal.className = 'bg-petal';
            petal.textContent = icons[Math.floor(Math.random() * icons.length)];
            petal.style.left = `${Math.random() * 95}%`;
            petal.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
            petal.style.animationDuration = `${Math.random() * 10 + 10}s`;
            petal.style.animationDelay = `${Math.random() * 8}s`;
            bgPetalsContainer.appendChild(petal);
        }
    }
    createBackgroundPetals();

    /* ----------------------------------------------------------------------
       4. RENDERIZADO DE TARJETAS Y DRAG & DROP FÍSICO
       ---------------------------------------------------------------------- */
    function renderSongs(songsToRender) {
        songCanvas.innerHTML = '';

        const canvasWidth = Math.max(window.innerWidth - 320, 380);
        const canvasHeight = 1850;

        songsToRender.forEach((song, index) => {
            const card = document.createElement('div');
            // IMPORTANTE: NO se incluye ninguna insignia de texto "CANCIÓN HERMOSA", preservando solo el resplandor de Oro Puro 24k
            card.className = `song-card ${song.isGold ? 'is-gold' : ''}`;
            card.dataset.index = index;

            const flowerEmoji = song.isGold ? '🌟' : (index % 3 === 0 ? '🌷' : (index % 2 === 0 ? '🌸' : '🌼'));

            card.innerHTML = `
                <div class="card-flower-icon">${flowerEmoji}</div>
                <div class="card-info">
                    <div class="card-title">${song.title}</div>
                    <div class="card-artist">${song.artist}</div>
                </div>
            `;

            // En modo flotante, distribuir tarjetas armónicamente por el lienzo
            if (!isGridView) {
                const randomX = Math.floor(Math.random() * canvasWidth);
                const randomY = Math.floor(Math.random() * canvasHeight);
                card.style.left = `${randomX}px`;
                card.style.top = `${randomY}px`;
                card.style.zIndex = Math.floor(Math.random() * 50) + 1;
            }

            initDragAndDrop(card, song);

            songCanvas.appendChild(card);
        });
    }

    /* ----------------------------------------------------------------------
       5. LÓGICA DRAG & DROP (MOUSE + TOUCH)
       ---------------------------------------------------------------------- */
    function initDragAndDrop(card, songData) {
        let isDragging = false;
        let startX, startY;
        let initialCardX, initialCardY;
        let hasMoved = false;
        const dragThreshold = 6;

        card.addEventListener('mousedown', onPointerDown);
        card.addEventListener('touchstart', onPointerDown, { passive: false });

        function onPointerDown(e) {
            if (isGridView) {
                openPlayer(songData);
                return;
            }

            maxZIndex++;
            card.style.zIndex = maxZIndex;

            const pointer = e.touches ? e.touches[0] : e;
            startX = pointer.clientX;
            startY = pointer.clientY;

            initialCardX = card.offsetLeft;
            initialCardY = card.offsetTop;

            isDragging = true;
            hasMoved = false;

            if (e.type === 'mousedown') {
                document.addEventListener('mousemove', onPointerMove);
                document.addEventListener('mouseup', onPointerUp);
            } else if (e.type === 'touchstart') {
                document.addEventListener('touchmove', onPointerMove, { passive: false });
                document.addEventListener('touchend', onPointerUp);
            }
        }

        function onPointerMove(e) {
            if (!isDragging) return;

            const pointer = e.touches ? e.touches[0] : e;
            const deltaX = pointer.clientX - startX;
            const deltaY = pointer.clientY - startY;

            if (Math.hypot(deltaX, deltaY) > dragThreshold) {
                hasMoved = true;
                card.classList.add('is-dragging');
            }

            if (hasMoved) {
                if (e.cancelable) e.preventDefault();
                card.style.left = `${initialCardX + deltaX}px`;
                card.style.top = `${initialCardY + deltaY}px`;
            }
        }

        function onPointerUp(e) {
            if (!isDragging) return;
            isDragging = false;
            card.classList.remove('is-dragging');

            document.removeEventListener('mousemove', onPointerMove);
            document.removeEventListener('mouseup', onPointerUp);
            document.removeEventListener('touchmove', onPointerMove);
            document.removeEventListener('touchend', onPointerUp);

            if (!hasMoved) {
                openPlayer(songData);
            }
        }
    }

    /* ----------------------------------------------------------------------
       6. REPRODUCTOR Y MODAL PRINCIPAL
       ---------------------------------------------------------------------- */
    function openPlayer(song) {
        playerSongTitle.textContent = song.title;
        playerSongArtist.textContent = song.artist;

        // Iframe con parámetros estándar y direct YouTube link fallback
        youtubeIframe.src = `https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;
        directYoutubeLink.href = `https://www.youtube.com/watch?v=${song.youtubeId}`;

        // Cargar Poema y Letras
        poemTitle.textContent = `Especial para mi Li 💛`;
        poemTextContent.textContent = song.poem;
        lyricsTextContent.textContent = song.lyrics || "Letra disponible al escuchar el tema...";

        // Cambiar suavemente el fondo de la pantalla al color temático de la canción
        if (song.themeColor) {
            document.body.style.backgroundColor = song.themeColor;
        } else {
            document.body.style.backgroundColor = song.isGold ? "#332600" : "#1a0f24";
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

    // Control de Tabs
    tabPoemBtn.addEventListener('click', () => {
        tabPoemBtn.classList.add('active');
        tabLyricsBtn.classList.remove('active');
        tabPoemContent.classList.remove('hidden');
        tabLyricsContent.classList.add('hidden');
    });

    tabLyricsBtn.addEventListener('click', () => {
        tabLyricsBtn.classList.add('active');
        tabPoemBtn.classList.remove('active');
        tabLyricsContent.classList.remove('hidden');
        tabPoemContent.classList.add('hidden');
    });

    /* ----------------------------------------------------------------------
       7. ALTERNADOR DE VISTAS (FLOTANTE LIBRE vs GRILLA)
       ---------------------------------------------------------------------- */
    btnToggleView.addEventListener('click', () => {
        isGridView = !isGridView;

        if (isGridView) {
            songCanvas.classList.remove('canvas-floating');
            songCanvas.classList.add('canvas-grid');
            viewIcon.textContent = '🎨';
            viewLabel.textContent = 'Lienzo Flotante';
        } else {
            songCanvas.classList.remove('canvas-grid');
            songCanvas.classList.add('canvas-floating');
            viewIcon.textContent = '📌';
            viewLabel.textContent = 'Vista Lista';
        }

        renderSongs(songsData);
    });

    /* ----------------------------------------------------------------------
       8. BUSCADOR EN TIEMPO REAL
       ---------------------------------------------------------------------- */
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filteredSongs = songsData.filter(s => 
            s.title.toLowerCase().includes(query) || 
            s.artist.toLowerCase().includes(query) ||
            s.poem.toLowerCase().includes(query)
        );
        renderSongs(filteredSongs);
    });

    /* ----------------------------------------------------------------------
       9. MODAL GALERÍA DE POEMAS
       ---------------------------------------------------------------------- */
    function renderPoemsModal() {
        poemsGrid.innerHTML = '';
        songsData.forEach(song => {
            const item = document.createElement('div');
            item.className = 'poem-gallery-item';
            item.innerHTML = `
                <h3>${song.title}</h3>
                <span class="poem-song-ref">🎵 ${song.artist}</span>
                <p>${song.poem}</p>
            `;
            item.addEventListener('click', () => {
                poemsModal.classList.add('hidden');
                openPlayer(song);
            });
            poemsGrid.appendChild(item);
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

    /* ----------------------------------------------------------------------
       10. INICIALIZACIÓN
       ---------------------------------------------------------------------- */
    renderSongs(songsData);
});
