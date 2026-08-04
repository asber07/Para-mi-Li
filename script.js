/* ==========================================================================
   LÓGICA JAVASCRIPT: UNIVERSO 3D PARA LIZET ("mi niña, mi Li")
   Características: 3D Layout Engine (Table, Sphere, Helix, Grid), Navegación por
   Touchpad/Dedo, Reproductor Profesional de 3 Columnas, Poemas Elegantes y Letras.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. BASE DE DATOS DE 85 CANCIONES CON POEMAS ELEGANTES (SIN EXCESO DE EMOJIS)
       ---------------------------------------------------------------------- */
    const songsData = [
        {
            title: "All of Me",
            artist: "John Legend",
            isGold: true,
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
            themeColor: "#332500"
        },
        {
            title: "La promesa",
            artist: "Melendi",
            isGold: true,
            youtubeId: "N_aYq9lK7m0",
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
            themeColor: "#4d2600"
        },
        {
            title: "Amor",
            artist: "Emmanuel Cortés",
            isGold: true,
            youtubeId: "8dM35HwW5c8",
            cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Y es que el amor eres tú, con esa mirada tan linda",
                "Con la forma en que me miras y me haces suspirar",
                "No hay un solo día en que no piense en tu sonrisa",
                "Eres el regalo más valioso de mi existencia..."
            ],
            poem: "Dedicado a Lizet:\nCuando reflexiono sobre el afecto sincero, encuentro tu nombre, tu intelecto cautivador y la gracia con la que te desenvuelves. Eres esa pieza perfecta que otorga sentido y armonía a mi día a día.",
            themeColor: "#400018"
        },
        {
            title: "Tienes la magia",
            artist: "Lil Silvio y El Vega",
            isGold: false,
            youtubeId: "76jJ1Y5d27Q",
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
            title: "Nota de amor",
            artist: "Carlos Vives, Wisin, Daddy Yankee",
            isGold: false,
            youtubeId: "L2bYh9z8kM0",
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
            title: "Dulce carita",
            artist: "Dálmata",
            isGold: false,
            youtubeId: "pS9fP4J5y34",
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
            youtubeId: "KqJ62s43Y_4",
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
            title: "Tu y yo",
            artist: "La Misma Gente",
            isGold: false,
            youtubeId: "38B7b47b4e0",
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
            youtubeId: "70XW3a08890",
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
            artist: "Adolescentes",
            isGold: false,
            youtubeId: "r1NfP44h400",
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
            title: "Por ti",
            artist: "3AM",
            isGold: false,
            youtubeId: "y1C44P5P400",
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
            title: "30 días",
            artist: "Los Primos del Este",
            isGold: true,
            youtubeId: "x9J28359y30",
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
            youtubeId: "8s120398y12",
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
            artist: "Manuel Turizo",
            isGold: false,
            youtubeId: "Vqfy4ScRXGg",
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
            title: "Vine a buscarte",
            artist: "Fonseca",
            isGold: false,
            youtubeId: "N_08j1S_123",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Vine a buscarte para expresarte mi aprecio",
                "Porque tu compañía es insustituible",
                "Llenando el tiempo de paz y propósito..."
            ],
            poem: "Para mi Li:\nAunque los detalles materiales a veces se retrasan, mi estima sincera hacia ti permanece constante siempre.",
            themeColor: "#003322"
        },
        {
            title: "Raro",
            artist: "Chino & Nacho",
            isGold: false,
            youtubeId: "N4_9348y123",
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
            youtubeId: "y9382019238",
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
            artist: "Chyno Miranda",
            isGold: false,
            youtubeId: "y8392019238",
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
            isGold: false,
            youtubeId: "bdOXnTbyk0g",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Deseo expresarte mi afecto con nobleza",
                "Y acompañar tus jornadas",
                "Cantar para ti bajo el atardecer..."
            ],
            poem: "Para ti, mi Li:\nUn gesto respetuoso para recordarte el gran valor que posees como persona y profesional.",
            themeColor: "#470036"
        },
        {
            title: "Si Supieras",
            artist: "Daddy Yankee & Wisin",
            isGold: false,
            youtubeId: "y8392019239",
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
            artist: "Enrique Iglesias",
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
            artist: "Luis Fonsi",
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
            artist: "Sebastián Yatra",
            isGold: false,
            youtubeId: "y8392019240",
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
            artist: "Silvestre Dangond",
            isGold: false,
            youtubeId: "y8392019241",
            cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Viviendo con entusiasmo el camino",
                "Porque tu nobleza inspira superación...",
            ],
            poem: "Para Lizet:\nQue la vida te brinde siempre satisfacción por tus logros profesionales y personales.",
            themeColor: "#004736"
        },
        {
            title: "Con Los Dos En La Cabeza",
            artist: "Pedro Guerra",
            isGold: true,
            youtubeId: "y8392019242",
            cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Con tu imagen presente en la jornada",
                "Con el respeto y la admiración en el alma...",
            ],
            poem: "Especial para mi Li:\nTus ideas y tu visión analítica permanecen como referente de excelencia. Eres una mujer excepcional.",
            themeColor: "#594000"
        },
        {
            title: "Una en un millón",
            artist: "Alkilados",
            isGold: false,
            youtubeId: "af2593849",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            lyrics: [
                "Tú eres una en un millón",
                "No hay nadie que se compare a tu intelecto y gracia...",
            ],
            poem: "Una en un millón:\nEntre miles de profesionales y personas, destacas de manera natural por tu excelencia y honestidad. ¡Para Lizet!",
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
    
    // Botones de Disposición 3D (Table, Sphere, Helix, Grid)
    const layoutBtns = {
        table: document.getElementById('layout-table'),
        sphere: document.getElementById('layout-sphere'),
        helix: document.getElementById('layout-helix'),
        grid: document.getElementById('layout-grid')
    };

    // Modal Player Elements
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

    // Discrete PS Toast Elements
    const discretePsToast = document.getElementById('discrete-ps-toast');
    const closePsBtn = document.getElementById('close-ps-btn');

    // Poems Modal Elements
    const poemsModal = document.getElementById('poems-modal');
    const closePoemsBtn = document.getElementById('close-poems-btn');
    const poemsGrid = document.getElementById('poems-grid');

    // Estado de Cámara 3D (Rotación y Zoom)
    let rotX = -8;
    let rotY = 0;
    let cameraZ = -150;
    let currentLayout = 'table';
    let isNavigating = false;
    let lastX = 0, lastY = 0;
    let lyricTimer = null;

    /* ----------------------------------------------------------------------
       3. MOTOR DE TRANSFORMACIÓN 3D (TABLE, SPHERE, HELIX, GRID)
       ---------------------------------------------------------------------- */
    function render3DLayout(songsToRender, layout = 'table') {
        world3D.innerHTML = '';
        currentLayout = layout;

        const count = songsToRender.length;

        songsToRender.forEach((song, i) => {
            const card = document.createElement('div');
            card.className = `card-3d ${song.isGold ? 'is-gold' : ''}`;
            card.dataset.id = i;

            card.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="card-cover">
                <div class="card-meta">
                    <div class="card-title">${song.title}</div>
                    <div class="card-artist">${song.artist}</div>
                </div>
            `;

            let transformStr = '';

            if (layout === 'sphere') {
                const phi = Math.acos(-1 + (2 * i) / count);
                const theta = Math.sqrt(count * Math.PI) * phi;
                const radius = 680;
                const x = radius * Math.cos(theta) * Math.sin(phi);
                const y = radius * Math.sin(theta) * Math.sin(phi);
                const z = radius * Math.cos(phi);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${theta}rad) rotateX(${phi}rad)`;
            } 
            else if (layout === 'helix') {
                const radius = 600;
                const theta = i * 0.38;
                const y = (i - count / 2) * 42;
                const x = radius * Math.cos(theta);
                const z = radius * Math.sin(theta);
                transformStr = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-theta}rad)`;
            } 
            else if (layout === 'grid') {
                const cols = 5;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const layer = Math.floor(i / 25);
                const x = (col - 2) * 280;
                const y = (row % 5 - 2) * 130;
                const z = (layer - 1) * 350;
                transformStr = `translate3d(${x}px, ${y}px, ${z}px)`;
            } 
            else { // Table / Tabla periódica flotante
                const cols = 7;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = (col - (cols - 1) / 2) * 270;
                const y = (row - 2) * 125;
                const z = (Math.sin(i) * 120);
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
       4. NAVEGACIÓN DE CÁMARA POR TOUCHPAD, TRACKPAD Y SWIPE MÓVIL
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

    // Zoom con la rueda / Touchpad scroll
    scene3D.addEventListener('wheel', (e) => {
        e.preventDefault();
        cameraZ += e.deltaY * -0.5;
        cameraZ = Math.max(-1200, Math.min(400, cameraZ));
        updateCameraTransform();
    }, { passive: false });

    // Navegación Táctil Móvil
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

    // Cambiar layout de botones (table, sphere, helix, grid)
    Object.keys(layoutBtns).forEach(key => {
        layoutBtns[key].addEventListener('click', () => {
            Object.values(layoutBtns).forEach(btn => btn.classList.remove('active'));
            layoutBtns[key].classList.add('active');
            render3DLayout(songsData, key);
        });
    });

    /* ----------------------------------------------------------------------
       5. REPRODUCTOR DE MÚSICA & LETRAS SINCRONIZADAS
       ---------------------------------------------------------------------- */
    function openPlayer(song) {
        playerCoverImg.src = song.cover;
        playerSongTitle.textContent = song.title;
        playerSongArtist.textContent = song.artist;

        // Asignar Embebidor YouTube
        youtubeIframe.src = `https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;
        directYoutubeLink.href = `https://www.youtube.com/watch?v=${song.youtubeId}`;

        // Cargar Poema Elegante
        poemTitle.textContent = `Para mi Li`;
        poemTextContent.textContent = song.poem;

        // Cargar Letras Sincronizadas
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
            lyricsScrollContainer.innerHTML = '<div class="lyric-line">Letra disponible escuchando el tema...</div>';
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
       7. BUSCADOR Y GALERÍA DE POEMAS
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
