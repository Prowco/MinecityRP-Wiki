/**
 * Minecity Roleplay - Multi-Language Translation Engine
 * DEFAULT LANGUAGE: ENGLISH (en)
 * Optional Full Translations: Español (es), Deutsch (de), Français (fr),
 * Italiano (it), Português (pt), 中文 (zh), 한국어 (ko), Русский (ru).
 * All Minecraft commands, permissions, and placeholders retain exact code syntax.
 */

const I18N = {
  currentLocale: "en", // English is the primary default language!
  locales: {
    en: { name: "English", flag: "🇺🇸" },
    es: { name: "Español", flag: "🇪🇸" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    fr: { name: "Français", flag: "🇫🇷" },
    it: { name: "Italiano", flag: "🇮🇹" },
    pt: { name: "Português", flag: "🇧🇷" },
    zh: { name: "中文", flag: "🇨🇳" },
    ko: { name: "한국어", flag: "🇰🇷" },
    ru: { name: "Русский", flag: "🇷🇺" }
  },

  strings: {
    // ==========================================
    // ENGLISH (Default Primary Language)
    // ==========================================
    en: {
      siteTitle: "Minecity Roleplay | Official GTA Minecraft Wiki",
      searchPlaceholder: "Search guides, vehicles, commands, permissions... (Ctrl + K)",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      brandSubtitle: "GTA ROLEPLAY",
      heroBadge: "GTA Roleplay Minecraft Setup • Purpur 1.21.x Ready",
      heroTitle: "The Definitive Minecity Wiki",
      heroSubtitle: "The master encyclopedia for citizens, police officers, paramedics, criminal gangs, and server administrators. Comprehensive guides, 17-video showcase, interactive command directories, and technical architecture.",
      btnOpenPlayer: "📖 Citizen Roleplay Manual",
      btnOpenAdmin: "🛡️ Admin & Owner Protocols",
      btnBuiltByBit: "🔗 Official BuiltByBit Resource",
      btnWatchPlaylist: "▶️ Watch Full YouTube Playlist (17 Videos)",

      navOverview: "Overview",
      navVideos: "Video Tutorials",
      navPlayerGuide: "Player Manual",
      navAdminGuide: "Admin & Owner Guide",
      navCommands: "Master Commands",
      navPermissions: "Permissions Matrix",
      navPlaceholders: "Placeholders (PAPI)",

      navPlayerStart: "1. Welcome & Citizen ID",
      navPlayerComm: "2. RP Chat & Emotes",
      navPlayerPhone: "3. Smartphone & GPS",
      navPlayerProperties: "4. Apartments & Houses",
      navPlayerVehicles: "5. Cars, Bikes & Helis",
      navPlayerPolice: "6. Police & Wanted Stars ★",
      navPlayerEMS: "7. Hospital & Diseases",
      navPlayerSurvival: "8. Thirst & Survival",
      navPlayerPets: "9. Tamagotchi Pets",
      navPlayerCrime: "10. Weapons & Bank Heist",
      navPlayerJobs: "11. Civilian Careers",

      navAdminSuite: "1. MinecitySuite Core",
      navAdminFixer: "2. MinecityFixerAddon",
      navAdminVehicles: "3. Dealerships & Garages",
      navAdminPerms: "4. LuckPerms Permissions",
      navAdminDummies: "5. Test Dummy System",
      navAdminTroubleshoot: "6. Troubleshooting & Fixes",

      alertNotice: "INFORMATION",
      alertSuccess: "OPTIMIZATION / FIX APPLIED",
      alertWarning: "ATTENTION / ROLEPLAY RULE",
      officialEcosystemTitle: "Official Minecity GTA Ecosystem",
      officialEcosystemDesc: "Minecity is a next-generation Minecraft Roleplay server built on Purpur 1.21.11 / Java 21 requiring ZERO client-side mods. Players join using standard vanilla Minecraft clients while enjoying 3D animated vehicles, firearms, proximity voice/text chat, cellphones, interactive apartments, and synchronized public safety departments.",

      featVehiclesTitle: "3D Vehicles & Helicopters",
      featVehiclesDesc: "Custom sports cars, motorbikes, cargo haulers, and helicopters with realistic flight physics and corrected steering controls.",
      featPropertiesTitle: "Real Apartments & Houses",
      featPropertiesDesc: "Rent or buy apartments, luxury penthouses, and private estates. Automatic door locking for you and your trusted roommates.",
      featPoliceTitle: "Police & Wanted Stars",
      featPoliceDesc: "Dynamic wanted stars (★), high-speed cruiser pursuits, 2-hit arrest batons, handcuffs, and state penitentiary bookings.",
      featHospitalTitle: "Hospital & Paramedics",
      featHospitalDesc: "Realistic contagious illnesses, bone fractures from high falls, complete city pharmacy, and emergency CPR revival.",
      featPhoneTitle: "Smartphone & Guided GPS",
      featPhoneDesc: "Feature-packed smartphone with text messaging, contacts, 911 dispatch, and glowing particle GPS street navigation.",
      featSurvivalTitle: "Thirst & Realistic Survival",
      featSurvivalDesc: "Dynamic hydration and physical fatigue curves. Custom sodas, bottled mineral water, and coffee restore stamina.",

      filterAll: "All Categories",
      searchTablePlaceholder: "Filter by name or description...",
      copyText: "Copy",
      copiedText: "Copied!",
      tableCommand: "Command",
      tableAliases: "Aliases",
      tablePermission: "Permission",
      tablePlugin: "Plugin",
      tableDescription: "Description",
      tableGroup: "LuckPerms Group",
      tableDefault: "Default",
      tablePlaceholder: "Placeholder (PAPI)",
      tableExample: "Example Output",
      watchOnYouTube: "Watch on YouTube",
      videoWalkthrough: "📺 Official Video Walkthrough",
      videoShowcase: "📺 Gameplay Showcase"
    },

    // ==========================================
    // ESPAÑOL (Traducción Completa)
    // ==========================================
    es: {
      siteTitle: "Minecity Roleplay | Wiki Oficial GTA Minecraft",
      searchPlaceholder: "Buscar guías, vehículos, comandos, permisos... (Ctrl + K)",
      themeDark: "Modo Oscuro",
      themeLight: "Modo Claro",
      brandSubtitle: "ROLEPLAY GTA",
      heroBadge: "Setup GTA Roleplay Minecraft • Purpur 1.21.x",
      heroTitle: "La Wiki Oficial de Minecity",
      heroSubtitle: "La enciclopedia definitiva para ciudadanos, policías, paramédicos, mafias y administradores. Guías detalladas, catálogo de 17 videos, comandos interactivos y arquitectura técnica estilo GTA.",
      btnOpenPlayer: "📖 Manual del Ciudadano",
      btnOpenAdmin: "🛡️ Guía para Admins y Dueños",
      btnBuiltByBit: "🔗 Recurso Oficial en BuiltByBit",
      btnWatchPlaylist: "▶️ Ver Playlist en YouTube (17 Videos)",

      navOverview: "Inicio",
      navVideos: "Videos Tutoriales",
      navPlayerGuide: "Manual del Jugador",
      navAdminGuide: "Guía de Admins y Dueños",
      navCommands: "Directorio de Comandos",
      navPermissions: "Matriz de Permisos",
      navPlaceholders: "Variables (PAPI)",

      navPlayerStart: "1. Bienvenida y DNI",
      navPlayerComm: "2. Chat de Rol y Emotes",
      navPlayerPhone: "3. Smartphone y GPS",
      navPlayerProperties: "4. Apartamentos y Casas",
      navPlayerVehicles: "5. Autos, Motos y Helicópteros",
      navPlayerPolice: "6. Policía y Estrellas ★",
      navPlayerEMS: "7. Hospital y Enfermedades",
      navPlayerSurvival: "8. Sed y Supervivencia",
      navPlayerPets: "9. Mascotas Tamagotchi",
      navPlayerCrime: "10. Armas y Robo al Banco",
      navPlayerJobs: "11. Trabajos Civiles",

      navAdminSuite: "1. Núcleo MinecitySuite",
      navAdminFixer: "2. MinecityFixerAddon",
      navAdminVehicles: "3. Concesionarios y Garajes",
      navAdminPerms: "4. Permisos LuckPerms",
      navAdminDummies: "5. Dummies de Prueba",
      navAdminTroubleshoot: "6. Solución de Errores",

      alertNotice: "INFORMACIÓN",
      alertSuccess: "OPTIMIZACIÓN / FIX APLICADO",
      alertWarning: "ATENCIÓN / REGLA DE ROL",
      officialEcosystemTitle: "Ecosistema Oficial Minecity GTA",
      officialEcosystemDesc: "Minecity es un servidor de rol de nueva generación para Minecraft 1.21.11 en Purpur y Java 21. NO requiere ningún mod en el cliente: los usuarios entran con su Minecraft vanilla normal mientras disfrutan de autos 3D animados, armas de fuego, chat de proximidad, teléfonos móviles, apartamentos interactivos y servicios de emergencia coordinados.",

      featVehiclesTitle: "Vehículos 3D y Helicópteros",
      featVehiclesDesc: "Autos deportivos, motocicletas, camiones de carga y helicópteros con físicas de vuelo y dirección realista corregida.",
      featPropertiesTitle: "Apartamentos y Casas Reales",
      featPropertiesDesc: "Renta o compra departamentos, áticos de lujo y villas privadas. Llaves automáticas y puertas privadas para ti y tus compañeros.",
      featPoliceTitle: "Policía y Sistema de Estrellas",
      featPoliceDesc: "Estrellas de búsqueda (★), persecuciones en patrulla, porras con esposas a 2 golpes y sentencias en prisión estatal.",
      featHospitalTitle: "Hospital y Paramédicos",
      featHospitalDesc: "Enfermedades reales contagiosas, fracturas de huesos por caídas, farmacia completa y reanimación RCP para caídos.",
      featPhoneTitle: "Smartphone y GPS Guiado",
      featPhoneDesc: "Celular interactivo con llamadas, mensajería, alerta 911 y flechas de partículas GPS que te guían paso a paso por las avenidas.",
      featSurvivalTitle: "Sed y Supervivencia Realista",
      featSurvivalDesc: "Mecánicas de hidratación y fatiga corporal. Bebidas personalizadas, refrescos y café que restauran tu energía.",

      filterAll: "Todas las Categorías",
      searchTablePlaceholder: "Filtrar por nombre o descripción...",
      copyText: "Copiar",
      copiedText: "¡Copiado!",
      tableCommand: "Comando",
      tableAliases: "Alias",
      tablePermission: "Permiso",
      tablePlugin: "Plugin",
      tableDescription: "Descripción",
      tableGroup: "Grupo LuckPerms",
      tableDefault: "Por Defecto",
      tablePlaceholder: "Variable (PAPI)",
      tableExample: "Salida de Ejemplo",
      watchOnYouTube: "Ver en YouTube",
      videoWalkthrough: "📺 Video Tutorial Oficial",
      videoShowcase: "📺 Muestra de Jugabilidad"
    },

    // ==========================================
    // DEUTSCH (German)
    // ==========================================
    de: {
      siteTitle: "Minecity Roleplay | Offizielle GTA Minecraft Wiki",
      searchPlaceholder: "Guides, Fahrzeuge, Befehle suchen... (Strg + K)",
      themeDark: "Dunkler Modus",
      themeLight: "Heller Modus",
      brandSubtitle: "GTA ROLEPLAY",
      heroBadge: "GTA Roleplay Minecraft Setup • Purpur 1.21.x",
      heroTitle: "Das Definitive Minecity Wiki",
      heroSubtitle: "Die Meister-Enzyklopädie für Bürger, Polizisten, Sanitäter, Gangs und Administratoren.",
      btnOpenPlayer: "📖 Bürgerhandbuch",
      btnOpenAdmin: "🛡️ Admin-Leitfaden",
      btnBuiltByBit: "🔗 BuiltByBit Ressource",
      btnWatchPlaylist: "▶️ YouTube-Playlist (17 Videos)",
      navOverview: "Übersicht",
      navVideos: "Video-Tutorials",
      navPlayerGuide: "Spielerhandbuch",
      navAdminGuide: "Admin & Inhaber Leitfaden",
      navCommands: "Befehle",
      navPermissions: "Berechtigungen",
      navPlaceholders: "Platzhalter (PAPI)",
      filterAll: "Alle Kategorien",
      copyText: "Kopieren",
      copiedText: "Kopiert!",
      tableCommand: "Befehl",
      tableAliases: "Aliase",
      tablePermission: "Berechtigung",
      tablePlugin: "Plugin",
      tableDescription: "Beschreibung",
      watchOnYouTube: "Auf YouTube ansehen"
    },

    // ==========================================
    // FRANÇAIS (French)
    // ==========================================
    fr: {
      siteTitle: "Minecity Roleplay | Wiki Officiel GTA Minecraft",
      searchPlaceholder: "Rechercher guides, véhicules, commandes... (Ctrl + K)",
      themeDark: "Mode Sombre",
      themeLight: "Mode Clair",
      brandSubtitle: "GTA ROLEPLAY",
      heroBadge: "GTA Roleplay Minecraft Setup • Purpur 1.21.x",
      heroTitle: "Le Wiki Définitif de Minecity",
      heroSubtitle: "L'encyclopédie ultime pour les citoyens, policiers, médecins, gangs et administrateurs.",
      btnOpenPlayer: "📖 Manuel du Citoyen",
      btnOpenAdmin: "🛡️ Guide Administrateur",
      btnBuiltByBit: "🔗 Ressource BuiltByBit",
      btnWatchPlaylist: "▶️ Playlist YouTube (17 Vidéos)",
      navOverview: "Aperçu",
      navVideos: "Tutoriels Vidéo",
      navPlayerGuide: "Manuel du Joueur",
      navAdminGuide: "Guide Admin & Propriétaire",
      navCommands: "Commandes",
      navPermissions: "Permissions",
      navPlaceholders: "Variables (PAPI)",
      filterAll: "Toutes Catégories",
      copyText: "Copier",
      copiedText: "Copié !",
      tableCommand: "Commande",
      tableAliases: "Alias",
      tablePermission: "Permission",
      tablePlugin: "Plugin",
      tableDescription: "Description",
      watchOnYouTube: "Regarder sur YouTube"
    },

    // ==========================================
    // PORTUGUÊS (Portuguese)
    // ==========================================
    pt: {
      siteTitle: "Minecity Roleplay | Wiki Oficial GTA Minecraft",
      searchPlaceholder: "Pesquisar guias, veículos, comandos... (Ctrl + K)",
      themeDark: "Modo Escuro",
      themeLight: "Modo Claro",
      brandSubtitle: "GTA ROLEPLAY",
      heroBadge: "GTA Roleplay Minecraft Setup • Purpur 1.21.x",
      heroTitle: "A Wiki Definitiva de Minecity",
      heroSubtitle: "A enciclopédia definitiva para cidadãos, policiais, médicos, gangues e administradores.",
      btnOpenPlayer: "📖 Manual do Cidadão",
      btnOpenAdmin: "🛡️ Guia do Administrador",
      btnBuiltByBit: "🔗 Recurso BuiltByBit",
      btnWatchPlaylist: "▶️ Playlist no YouTube (17 Vídeos)",
      navOverview: "Visão Geral",
      navVideos: "Tutoriais em Vídeo",
      navPlayerGuide: "Manual do Jogador",
      navAdminGuide: "Guia de Admins & Donos",
      navCommands: "Comandos",
      navPermissions: "Permissões",
      navPlaceholders: "Placeholders (PAPI)",
      filterAll: "Todas as Categorias",
      copyText: "Copiar",
      copiedText: "Copiado!",
      tableCommand: "Comando",
      tableAliases: "Apelidos",
      tablePermission: "Permissão",
      tablePlugin: "Plugin",
      tableDescription: "Descrição",
      watchOnYouTube: "Assistir no YouTube"
    },

    // ==========================================
    // ITALIANO (Italian)
    // ==========================================
    it: {
      siteTitle: "Minecity Roleplay | Wiki Ufficiale GTA Minecraft",
      searchPlaceholder: "Cerca guide, veicoli, comandi... (Ctrl + K)",
      brandSubtitle: "GTA ROLEPLAY",
      heroTitle: "Il Wiki Definitivo di Minecity",
      navOverview: "Panoramica",
      navVideos: "Video Tutorial",
      navPlayerGuide: "Manuale Giocatore",
      navAdminGuide: "Guida Admin",
      navCommands: "Comandi",
      navPermissions: "Permessi",
      navPlaceholders: "Placeholder (PAPI)",
      watchOnYouTube: "Guarda su YouTube"
    },

    // ==========================================
    // 中文 (Chinese)
    // ==========================================
    zh: {
      siteTitle: "Minecity Roleplay | GTA 官方维基与文档",
      searchPlaceholder: "搜索指南、载具、指令、权限... (Ctrl + K)",
      brandSubtitle: "GTA 角色扮演",
      heroTitle: "Minecity 终极官方维基",
      navOverview: "概览",
      navVideos: "视频教程",
      navPlayerGuide: "玩家手册",
      navAdminGuide: "腐竹与管理员指南",
      navCommands: "指令大全",
      navPermissions: "权限矩阵",
      navPlaceholders: "变量 (PAPI)",
      watchOnYouTube: "在 YouTube 上观看"
    },

    // ==========================================
    // 한국어 (Korean)
    // ==========================================
    ko: {
      siteTitle: "Minecity Roleplay | 공식 GTA 마인크래프트 위키",
      searchPlaceholder: "가이드, 차량, 명령어, 권한 검색... (Ctrl + K)",
      brandSubtitle: "GTA 롤플레이",
      heroTitle: "마인시티 공식 완전 정복 위키",
      navOverview: "개요",
      navVideos: "영상 튜토리얼",
      navPlayerGuide: "플레이어 가이드",
      navAdminGuide: "어드민 & 서버장 가이드",
      navCommands: "명령어",
      navPermissions: "권한 목록",
      navPlaceholders: "플레이스홀더",
      watchOnYouTube: "YouTube에서 시청하기"
    },

    // ==========================================
    // РУССКИЙ (Russian)
    // ==========================================
    ru: {
      siteTitle: "Minecity Roleplay | Официальная Вики GTA Minecraft",
      searchPlaceholder: "Поиск руководств, машин, команд... (Ctrl + K)",
      brandSubtitle: "GTA ROLEPLAY",
      heroTitle: "Официальная Вики Minecity",
      navOverview: "Обзор",
      navVideos: "Видеоуроки",
      navPlayerGuide: "Руководство Игрока",
      navAdminGuide: "Гайд для Админов",
      navCommands: "Команды",
      navPermissions: "Разрешения",
      navPlaceholders: "Плейсхолдеры",
      watchOnYouTube: "Смотреть на YouTube"
    }
  },

  // ==========================================
  // FULL DETAILED GUIDES
  // English is Primary Default, Spanish is Full Localized
  // ==========================================
  guides: {
    // ------------------------------------------
    // ENGLISH GUIDES (Default)
    // ------------------------------------------
    en: {
      player: [
        {
          id: "player-start",
          title: "1. City Arrival & Citizen ID Card (DNI)",
          icon: "🪪",
          content: `
            <p>Upon connecting to Minecity for the first time, you spawn at the Los Santos International Airport terminal. A cinematic introductory tutorial will guide you through the city's key landmarks.</p>
            <div class="callout callout-info">
              <div class="callout-title">💡 Replay Tutorial Anytime</div>
              <p>If you wish to replay the guided orientation tour at any point, execute <code>/tutorial</code> or <code>/servertutorialplus start welcome</code>.</p>
            </div>
            <h3 class="section-subtitle">Your Citizen Identification Card (DNI)</h3>
            <p>Every citizen carries a permanent identification card storing your legal name, registration number, and social status. Police officers routinely request ID during traffic stops:</p>
            <ul>
              <li><code>/card show</code> — Displays your ID card on-screen to the citizen or officer you are facing.</li>
              <li><code>/card view</code> — Inspects your own personal ID credentials in your hands.</li>
            </ul>
          `
        },
        {
          id: "player-comm",
          title: "2. Roleplay Communication Channels & Body Emotes",
          icon: "💬",
          content: `
            <p>Minecity features proximity-based text channels and full bodily animations:</p>
            <ul>
              <li><strong>Local Proximity Chat (Default):</strong> Standard messages reach players within a <strong>15-block radius</strong>.</li>
              <li><strong>In-Character Physical Actions (<code>/me &lt;action&gt;</code>):</strong> Describes physical actions your character performs (e.g. <code>/me pulls the car keys and turns the ignition</code>).</li>
              <li><strong>Environmental Context (<code>/do &lt;context&gt;</code>):</strong> Establishes facts in your scene (e.g. <code>/do Heavy smoke pours from the vehicle's engine hood</code>).</li>
              <li><strong>Out of Character (<code>/ooc &lt;message&gt;</code> or <code>/b</code>):</strong> Technical questions and remarks outside the roleplay context.</li>
              <li><strong>Body Poses (<code>/sit</code>, <code>/lay</code>, <code>/crawl</code>):</strong> Sit on chairs, couches, hospital beds, or crawl through low ventilation ducts.</li>
            </ul>
          `
        },
        {
          id: "player-phone",
          title: "3. Interactive Smartphone & Live GPS Navigation",
          icon: "📱",
          content: `
            <p>Your smartphone is the ultimate command center for civilian life. Type <code>/phone</code> to open the custom device GUI:</p>
            <ul>
              <li><strong>Unique 5-Digit SIM Number:</strong> You receive a permanent phone number (e.g. <code>49201</code>). Share it with friends to make phone calls and exchange SMS text messages.</li>
              <li><strong>Emergency 911 Dispatch:</strong> Instantly sends an emergency call with your exact street coordinates to active police units and paramedics.</li>
              <li><strong>Live Particle GPS Navigation:</strong> Type <code>/gps to &lt;destination&gt;</code> (such as Hospital, Police, Dealership, Bank, Mining Quarry). Glowing particle arrows on the asphalt will guide you turn by turn. Type <code>/gps stop</code> to cancel.</li>
            </ul>
          `
        },
        {
          id: "player-properties",
          title: "4. Real Estate: Apartments, Houses & Offices",
          icon: "🏢",
          videoId: "7f8Suj8XlIw",
          videoTitle: "How to rent an apartment in Minecraft! | Minecity GTA Setup",
          content: `
            <p>Real estate is powered by <strong>MinecitySuite (MCRP-Properties)</strong> and ARM:</p>
            <ul>
              <li>Type <code>/apartments</code> (or <code>/rent</code> / <code>/buy</code>) to open the interactive property catalogue.</li>
              <li><strong>Rental Apartments:</strong> Affordable weekly or monthly leases. Doors lock automatically against strangers. When leases expire, interiors automatically reset clean for the next resident.</li>
              <li><strong>Permanent Houses & Luxury Penthouses:</strong> Estates that belong to you forever.</li>
              <li><strong>Roommates:</strong> Add trusted friends to your doors using <code>/arm addmember &lt;region&gt; &lt;player&gt;</code>.</li>
            </ul>
          `
        },
        {
          id: "player-vehicles",
          title: "5. 3D Vehicles, Dealerships & Helicopter Flight",
          icon: "🏎️",
          videoId: "lq8u-JcET-g",
          videoTitle: "3D Vehicles in Minecraft without mods! | Minecity GTA Setup",
          content: `
            <p>Minecity includes an extensive collection of custom 3D sports cars, cruisers, motorbikes, helicopters, and planes:</p>
            <div class="callout callout-success">
              <div class="callout-title">Steering & Flight Controls 100% Fixed (MinecityFixerAddon)</div>
              <p>Inverted steering has been completely resolved! Turning left turns left, and turning right turns right.<br><strong>Helicopters:</strong> Press <strong>SPACEBAR</strong> to ascend with vertical power. Pitch your view or press <strong>SHIFT</strong> to descend smoothly.</p>
            </div>
            <ul>
              <li><strong>Purchasing:</strong> Buy vehicles from NPC dealers. When purchased, your vehicle is delivered straight into your virtual <strong>Garage</strong>!</li>
              <li><strong>Virtual Garage (<code>/qav garage</code>):</strong> Spawn your vehicle in any parking zone, or click despawn to store it safely.</li>
              <li><strong>Refueling:</strong> Pull up to any gas station pump, hold the nozzle, and right-click your vehicle to refill.</li>
              <li><strong>Trunk Storage:</strong> Sneak (Shift) and right-click your vehicle's trunk to store contraband, tools, and luggage.</li>
            </ul>
          `
        },
        {
          id: "player-police",
          title: "6. Police Department, Pursuits & State Prison",
          icon: "👮",
          content: `
            <p>Law and order in Minecity is enforced by both player officers and automated security:</p>
            <ul>
              <li><strong>Wanted Stars (0 - 5 ★):</strong> Speeding, drawing weapons in public, or robbing stores raises your wanted stars level. Stars are displayed in colored text above your head, in chat, and on TAB.</li>
              <li><strong>Wanted Persistence:</strong> If you die during a shootout with police, your wanted stars persist when you respawn!</li>
              <li><strong>Arrest Baton:</strong> Officers must hit suspects <strong>twice (2 left-clicks)</strong> with the baton to immobilize and handcuff them.</li>
              <li><strong>Handcuffs:</strong> Handcuffed suspects cannot sprint or draw weapons and are escorted by the officer into the cruiser.</li>
              <li><strong>State Penitentiary:</strong> Once booked at the precinct, inmates serve time until their sentence expires or bail is posted.</li>
            </ul>
          `
        },
        {
          id: "player-ems",
          title: "7. Hospital, Diseases & Emergency Medicine",
          icon: "🚑",
          videoId: "2ccipy7nn_k",
          videoTitle: "Hospital and Diseases in Minecraft! | Minecity GTA Setup",
          content: `
            <p>Urban life carries real health risks. MinecitySuite features deep medical simulation:</p>
            <ul>
              <li><strong>Contagious Illnesses:</strong> Catching the flu or bacterial infections causes coughing, sluggish movement, and blurred vision.</li>
              <li><strong>Bone Fractures:</strong> High falls break leg bones requiring medical splints or crutches.</li>
              <li><strong>City Pharmacy (<code>/pharmacy</code>):</strong> Purchase over-the-counter medical supplies such as Bandages, Morphine, Antibiotics, and First Aid Kits.</li>
              <li><strong>CPR & Defibrillator:</strong> When a player is downed or unconscious, on-duty paramedics rush with <code>/paramedic revive &lt;player&gt;</code> to save their life!</li>
            </ul>
          `
        },
        {
          id: "player-survival",
          title: "8. Realistic Survival: Thirst & Fatigue",
          icon: "🥤",
          content: `
            <p>Your stamina and physical well-being depend on maintaining proper hydration:</p>
            <ul>
              <li>Type <code>/survival status</code> to inspect your hydration percentage and body fatigue.</li>
              <li>Sprinting long distances, carrying heavy weapons, and high fever accelerate dehydration.</li>
              <li>If hydration drops below 20%, you suffer dizziness, blurred vision, and intermittent fainting.</li>
              <li>Drink bottled water, sodas, and coffee from restaurants or vending machines to maintain optimal stamina.</li>
            </ul>
          `
        },
        {
          id: "player-pets",
          title: "9. Tamagotchi Pets System",
          icon: "🐕",
          content: `
            <p>Adopt and raise your loyal animal companion in Minecity:</p>
            <ul>
              <li>Run <code>/pet shop</code> to browse puppies, kittens, parrots, and pet treats.</li>
              <li>Use <code>/pet</code> to open the status dashboard: feed your pet, bathe it, play fetch, and put it to sleep.</li>
              <li>Use <code>/pet call</code> to summon your pet to your side or ride shotgun in your car!</li>
            </ul>
          `
        },
        {
          id: "player-crime",
          title: "10. The Underworld: Illegal Firearms & Bank Heists",
          icon: "💰",
          videoId: "KZPMHXyRVds",
          videoTitle: "Were we able to rob the bank in Minecraft? | Minecity GTA Setup",
          content: `
            <p>For those who choose the outlaw path, the city offers high-stakes criminal opportunities:</p>
            <ul>
              <li><strong>Black Market Firearms:</strong> Dealers sell custom 3D firearms (Pistols, AK-47, Shotguns, Snipers) and ballistic ammunition. Carrying unconcealed weapons triggers automatic 2-star police alerts!</li>
              <li><strong>Bank Vault Heists:</strong> Assemble a crew to breach the central bank vault. Drilling the safe triggers a silent 911 dispatch to all active officers and a citywide 5-star wanted level.</li>
              <li><strong>Loot Escape:</strong> Carry bags of cash back to your hideout to claim your payout, but escaping the police perimeter requires skilled driving.</li>
            </ul>
          `
        },
        {
          id: "player-jobs",
          title: "11. Civilian Careers & Income",
          icon: "💼",
          content: `
            <p>If you prefer an honest living, Minecity features diverse well-paying careers:</p>
            <ul>
              <li><strong>Fisher:</strong> Catch custom fish along coastal piers and sell fresh catches at the fish market.</li>
              <li><strong>Miner:</strong> Extract valuable ores and raw materials in the industrial quarry.</li>
              <li><strong>Truck Driver:</strong> Hitch heavy trailers to commercial freight trucks and deliver goods across the highway for substantial transport bonuses.</li>
              <li><strong>Bus Driver:</strong> Operate city transit lines picking up passengers at designated bus stops.</li>
            </ul>
          `
        }
      ],

      admin: [
        {
          id: "admin-suite",
          title: "1. MinecitySuite Monolithic Core Architecture",
          icon: "⚙️",
          content: `
            <p><strong>MinecitySuite</strong> is the custom roleplay core developed specifically for Minecity Roleplay. It centralizes 6 major gameplay systems into a unified Java engine:</p>
            <div class="callout callout-info">
              <div class="callout-title">📁 Configuration Structure in <code>plugins/MinecitySuite/</code></div>
              <ul>
                <li><code>config-general.yml</code>: Primary language, database storage, and debug logging.</li>
                <li><code>police-config.yml</code>: Baton hits required (2), cell vectors, wanted star decay, and fines.</li>
                <li><code>paramedic-config.yml</code>: Emergency timers, infection probabilities, and hospital respawns.</li>
                <li><code>survival-config.yml</code>: Thirst depletion curves, sprint multipliers, and beverage hydration values.</li>
                <li><code>pets-config.yml</code>: Adoption prices, hunger depletion, and skill levels.</li>
                <li><code>dummy-config.yml</code>: AI behavior and testing equipment for target dummies.</li>
              </ul>
            </div>
          `
        },
        {
          id: "admin-fixer",
          title: "2. MinecityFixerAddon: Post-World Runtime Fixer",
          icon: "🔧",
          content: `
            <p><strong>MinecityFixerAddon</strong> is an injector designed to patch bugs in closed-source plugins without modifying original JAR files:</p>
            <ul>
              <li><strong>Vehicle Steering Inversion Patch:</strong> Injects into QAV packet listeners to normalize left/right turning so vehicles turn naturally in modern 1.21.11.</li>
              <li><strong>Helicopter Elevation Control:</strong> Fixes vertical lift vectors so helicopters ascend with Spacebar and descend with Shift/Pitch.</li>
              <li><strong>Shop-to-Garage Auto Deposit:</strong> Intercepts vehicle purchases via DtlTraders and registers them directly into the player's <code>/qav garage</code>.</li>
              <li><strong>PacketEvents 1.21.11 Packet 66/67 Fix:</strong> Intercepts unmapped packets that previously caused disconnects during vehicle interactions.</li>
              <li><strong>Decorative Vehicle Models:</strong> Adds <code>/vehicle model get &lt;name&gt;</code> to spawn static 3D car models for dealership displays.</li>
              <li><strong>Multi-Language Engine:</strong> High performance dictionary covering 9 languages.</li>
            </ul>
          `
        },
        {
          id: "admin-vehicles",
          title: "3. Vehicle Showrooms & Dealership Setup",
          icon: "🚁",
          content: `
            <p>To establish an interactive car or motorcycle dealership:</p>
            <ol>
              <li>Create an NPC with Citizens (e.g. <code>/npc create Car Dealer</code>).</li>
              <li>Link a DtlTraders shop to the NPC offering vehicle vouchers.</li>
              <li>Place a decorative vehicle model on display using <code>/vehicle model get &lt;name&gt;</code>.</li>
              <li>When players buy the vehicle voucher from the NPC, <strong>MinecityFixerAddon</strong> intercepts the purchase and immediately registers the vehicle to the player's garage.</li>
            </ol>
          `
        },
        {
          id: "admin-perms",
          title: "4. LuckPerms Permissions & Group Hierarchy",
          icon: "🔑",
          content: `
            <p>The server uses LuckPerms with a structured group inheritance hierarchy:</p>
            <pre><code># Default Civilian Hierarchy
default -> lvl1 -> lvl2 -> lvl3 -> lvl4 -> lvl5 -> vip

# Emergency Services
police_officer (inherits default + police.officer, police.handcuffs)
police_chief   (inherits police_officer + police.chief)

paramedic_duty (inherits default + paramedic.duty)
paramedic_chief(inherits paramedic_duty + paramedic.chief)

# Administration Staff
helper -> moderator -> admin -> owner (grants '*')</code></pre>
          `
        },
        {
          id: "admin-dummies",
          title: "5. Testing Dummy System (<code>/ms</code>)",
          icon: "🤖",
          content: `
            <p>Admins can spawn controllable test dummies to evaluate police batons, arrest mechanics, and paramedic CPR without needing a second human player:</p>
            <ul>
              <li><code>/ms adddummy &lt;name&gt;</code> — Spawns a realistic dummy player at your target block.</li>
              <li><code>/ms dummycontrol &lt;name&gt;</code> — Toggles the dummy posture (standing, sitting, downed bed state).</li>
              <li><code>/ms removedummy &lt;name&gt;</code> — Safely deletes the dummy entity.</li>
            </ul>
          `
        },
        {
          id: "admin-troubleshoot",
          title: "6. Troubleshooting & Optimization Fixes",
          icon: "🚨",
          content: `
            <div class="callout callout-success">
              <div class="callout-title">Quests Sign Interaction Fix (Purpur 1.21.11)</div>
              <p>In modern Minecraft 1.21+, materials like <code>OAK_WALL_SIGN</code> throw <code>IllegalArgumentException: ... isn't an item</code>. <strong>QuestsMinecity.jar</strong> has been patched with <code>toBlockItemStack()</code>, cleanly mapping wall signs and wall torches to their valid item forms.</p>
            </div>
            <div class="callout callout-success">
              <div class="callout-title">Citizens Clean Shutdown Patch</div>
              <p><strong>Citizens-2.0.41-b4129.jar</strong> has been patched in <code>AbstractNPC.java</code> to ensure hologram sub-NPCs do not register listeners while disabled, completely eliminating the <code>IllegalPluginAccessException: Plugin attempted to register Spawned{true} while not enabled</code> warning during <code>/stop</code>.</p>
            </div>
          `
        }
      ]
    },

    // ------------------------------------------
    // SPANISH GUIDES (Optional switch)
    // ------------------------------------------
    es: {
      player: [
        {
          id: "player-start",
          title: "1. Llegada a la Ciudad y Documento de Identidad (DNI)",
          icon: "🪪",
          content: `
            <p>Al ingresar a Minecity por primera vez, apareces en la Terminal de Pasajeros Internacional. Se reproducirá una cinemática guiada que te mostrará los puntos neurálgicos de la ciudad.</p>
            <div class="callout callout-info">
              <div class="callout-title">💡 Repetir el Tutorial en Cualquier Momento</div>
              <p>Si deseas volver a ver la introducción turística guiada, ejecuta <code>/tutorial</code> o <code>/servertutorialplus start welcome</code>.</p>
            </div>
            <h3 class="section-subtitle">Tu Documento de Identidad Ciudadano (DNI)</h3>
            <p>Todo ciudadano porta su documento de identidad permanente con su nombre completo, número de registro y estado social. Los agentes de policía te lo solicitarán durante inspecciones de rutina:</p>
            <ul>
              <li><code>/card show</code> — Muestra tu DNI en pantalla al ciudadano o policía que tengas justo enfrente.</li>
              <li><code>/card view</code> — Abre e inspecciona tu propio documento en tus manos.</li>
            </ul>
          `
        },
        {
          id: "player-comm",
          title: "2. Comunicación de Rol, Canales y Animaciones Corporales",
          icon: "💬",
          content: `
            <p>Minecity cuenta con canales de chat basados en proximidad estricta y animaciones corporales completas:</p>
            <ul>
              <li><strong>Chat Local (Por defecto):</strong> Los mensajes normales tienen un alcance realista de <strong>15 bloques</strong> a tu alrededor.</li>
              <li><strong>Acciones Físicas (<code>/me &lt;acción&gt;</code>):</strong> Describe lo que tu personaje hace físicamente (ej. <code>/me saca las llaves del vehículo y enciende el motor</code>).</li>
              <li><strong>Entorno y Circunstancias (<code>/do &lt;contexto&gt;</code>):</strong> Expresa detalles del entorno o consecuencias objetivas (ej. <code>/do El motor del auto emite humo denso tras el choque</code>).</li>
              <li><strong>Fuera de Rol (<code>/ooc &lt;mensaje&gt;</code> o <code>/b</code>):</strong> Canal para consultas y dudas técnicas fuera de personaje.</li>
              <li><strong>Posturas y Emotes (<code>/sit</code>, <code>/lay</code>, <code>/crawl</code>):</strong> Siéntate en sillas, sofás y taburetes; acuéstate en camillas de hospital o gatea por ductos y espacios estrechos.</li>
            </ul>
          `
        },
        {
          id: "player-phone",
          title: "3. Smartphone Inteligente y Navegación GPS",
          icon: "📱",
          content: `
            <p>Tu teléfono móvil es el centro de mando de tu vida civil. Ejecuta <code>/phone</code> para abrir la interfaz táctil:</p>
            <ul>
              <li><strong>Número SIM Único:</strong> Cada jugador recibe una línea celular de 5 dígitos (ej. <code>49201</code>). Compártela para recibir llamadas de voz y mensajes SMS directos.</li>
              <li><strong>Llamada de Emergencia 911:</strong> Envía un aviso inmediato con tus coordenadas exactas tanto a la central de policía como a emergencias médicas.</li>
              <li><strong>Navegación GPS por Partículas:</strong> Escribe <code>/gps to &lt;destino&gt;</code> (ej. Hospital, Comisaría, Concesionario, Banco, Cantera). Aparecerán flechas brillantes en el pavimento guiándote intersección por intersección. Usa <code>/gps stop</code> para finalizar la ruta.</li>
            </ul>
          `
        },
        {
          id: "player-properties",
          title: "4. Bienes Raíces: Apartamentos, Casas y Oficinas",
          icon: "🏢",
          videoId: "7f8Suj8XlIw",
          videoTitle: "¡Cómo alquilar un apartamento en Minecraft! | Minecity GTA",
          content: `
            <p>El sistema de propiedades está administrado por <strong>MinecitySuite (MCRP-Properties)</strong> y ARM:</p>
            <ul>
              <li>Escribe <code>/apartments</code> (o <code>/rent</code> / <code>/buy</code>) para abrir el catálogo interactivo de propiedades en venta o alquiler.</li>
              <li><strong>Alquiler Temporal:</strong> Departamentos económicos de renta semanal o mensual. Las puertas son privadas y se bloquean automáticamente contra desconocidos. Si vence tu renta, el interior se restaura limpio para el siguiente inquilino.</li>
              <li><strong>Casas y Mansiones Permanentes:</strong> Inmuebles de propiedad perpetua que puedes decorar y asegurar a tu gusto.</li>
              <li><strong>Compañeros de Cuarto:</strong> Añade amigos a tu propiedad para que puedan entrar con el comando <code>/arm addmember &lt;region&gt; &lt;jugador&gt;</code>.</li>
            </ul>
          `
        },
        {
          id: "player-vehicles",
          title: "5. Vehículos 3D, Concesionarios y Vuelo en Helicóptero",
          icon: "🏎️",
          videoId: "lq8u-JcET-g",
          videoTitle: "¡Vehículos 3D en Minecraft sin mods! | Minecity GTA",
          content: `
            <p>Minecity cuenta con una flota impresionante de autos deportivos, motocicletas urbanas, camiones y helicópteros:</p>
            <div class="callout callout-success">
              <div class="callout-title">Dirección y Elevación 100% Corregidas (MinecityFixerAddon)</div>
              <p>¡El giro invertido ha sido solucionado totalmente! Si presionas girar a la izquierda, tu auto gira a la izquierda; si presionas girar a la derecha, gira a la derecha.<br><strong>Helicópteros:</strong> Presiona <strong>BARRA ESPACIADORA</strong> para ascender verticalmente con potencia. Ajusta la inclinación de la vista o presiona <strong>SHIFT</strong> para descender suavemente.</p>
            </div>
            <ul>
              <li><strong>Compra en Concesionarios:</strong> Habla con el dependiente NPC en los salones de venta. Al comprar el voucher de un auto, el vehículo se envía automáticamente a tu <strong>Garaje Virtual</strong>.</li>
              <li><strong>Garaje Virtual (<code>/qav garage</code>):</strong> Invoca tu vehículo en cualquier zona de estacionamiento o guárdalo con un clic para evitar robos.</li>
              <li><strong>Reabastecimiento de Combustible:</strong> Acércate a las estaciones de servicio, toma la manguera y mantén presionado el clic derecho en tu vehículo.</li>
              <li><strong>Maletero (Baúl):</strong> Agáchate (Shift) y haz clic derecho en la parte trasera del auto para abrir el maletero y guardar armas, objetos o equipaje.</li>
            </ul>
          `
        },
        {
          id: "player-police",
          title: "6. Departamento de Policía, Persecuciones y Prisión",
          icon: "👮",
          content: `
            <p>La seguridad ciudadana es gestionada por oficiales en servicio y sistemas automatizados:</p>
            <ul>
              <li><strong>Nivel de Búsqueda (0 a 5 ★):</strong> Conducir a exceso de velocidad, portar armas de fuego sin funda o asaltar comercios subirá tus estrellas de búsqueda. Tus estrellas se ven en colores sobre tu cabeza, en el chat y en la lista de jugadores (TAB).</li>
              <li><strong>Persistencia Criminal:</strong> Si caes abatido en un tiroteo con la policía, ¡tus estrellas no desaparecen mágicamente! Permanecen activas al reaparecer.</li>
              <li><strong>Porra de Arresto (Baton):</strong> Los oficiales deben golpear <strong>dos veces consecutivas (2 clics izquierdos)</strong> a un fugitivo para inmovilizarlo y colocarle las esposas.</li>
              <li><strong>Esposas Policiales:</strong> Al estar esposado no puedes correr ni sacar armas; el oficial te escoltará y te subirá a la patrulla.</li>
              <li><strong>Prisión Estatal:</strong> Tras ser fichado en comisaría, cumplirás tu sentencia en la penitenciaría hasta agotar el tiempo o pagar fianza.</li>
            </ul>
          `
        },
        {
          id: "player-ems",
          title: "7. Hospital, Enfermedades y Medicina de Urgencias",
          icon: "🚑",
          videoId: "2ccipy7nn_k",
          videoTitle: "¡Hospital y Enfermedades en Minecraft! | Minecity GTA",
          content: `
            <p>Vivir en la metrópolis conlleva riesgos físicos reales. MinecitySuite incorpora simulación médica avanzada:</p>
            <ul>
              <li><strong>Enfermedades Infecciosas:</strong> El frío o contagios provocan gripe, tos, ralentización y visión borrosa.</li>
              <li><strong>Fracturas Óseas:</strong> Caer desde alturas considerables fractura los huesos de las piernas, requiriendo férulas o muletas.</li>
              <li><strong>Farmacia Municipal (<code>/pharmacy</code>):</strong> Compra insumos médicos como vendajes, morfina, antibióticos y kits de primeros auxilios.</li>
              <li><strong>Reanimación RCP y Desfibrilador:</strong> Cuando un ciudadano cae inconsciente, los paramédicos acuden con <code>/paramedic revive &lt;jugador&gt;</code> para salvarle la vida antes de que expire el tiempo de rescate.</li>
            </ul>
          `
        },
        {
          id: "player-survival",
          title: "8. Supervivencia Realista: Hidratación y Fatiga",
          icon: "🥤",
          content: `
            <p>La salud y resistencia física de tu personaje dependen directamente de tus niveles de hidratación:</p>
            <ul>
              <li>Escribe <code>/survival status</code> para consultar tu porcentaje de hidratación y fatiga acumulada.</li>
              <li>Correr distancias largas, llevar chalecos pesados o tener fiebre alta aceleran la deshidratación.</li>
              <li>Si tu hidratación desciende por debajo del 20%, sufrirás mareos, visión nublada y desmayos repentinos.</li>
              <li>Consume botellas de agua mineral, gaseosas o café en restaurantes y máquinas expendedoras para reponer energía.</li>
            </ul>
          `
        },
        {
          id: "player-pets",
          title: "9. Sistema de Mascotas Tamagotchi",
          icon: "🐕",
          content: `
            <p>Adopta, entrena y cuida a tu fiel compañero animal en Minecity:</p>
            <ul>
              <li>Usa <code>/pet shop</code> para visitar la tienda y comprar cachorros, gatitos, loros y accesorios.</li>
              <li>Usa <code>/pet</code> para abrir el panel de control: dale galletas, báñalo, juega a la pelota y ponlo a dormir.</li>
              <li>Usa <code>/pet call</code> para llamarlo a tu posición e incluso subirlo como copiloto en tu automóvil.</li>
            </ul>
          `
        },
        {
          id: "player-crime",
          title: "10. El Bajo Mundo: Armas Ilícitas y Asalto al Banco",
          icon: "💰",
          videoId: "KZPMHXyRVds",
          videoTitle: "¿Pudimos robar el banco en Minecraft? | Minecity GTA",
          content: `
            <p>Para aquellos que eligen el camino al margen de la ley, la ciudad ofrece actividades de alto riesgo:</p>
            <ul>
              <li><strong>Tráfico de Armas:</strong> Vendedores del mercado negro ofrecen pistolas, escopetas, fusiles AK-47 y rifles francotirador 3D con munición balística. Llevar armas a la vista alertará a las autoridades con 2 estrellas inmediatas.</li>
              <li><strong>Atraco a la Bóveda del Banco:</strong> Reúne a tu banda para perforar la puerta de la bóveda central del banco. Al iniciar el taladro, sonará la alarma silenciosa del 911 a todas las patrullas activas y recibirás 5 estrellas de búsqueda instantáneas.</li>
              <li><strong>Huida con el Botín:</strong> Tras asegurar las bolsas de dinero, deberás evadir el cerco policial por las autopistas para cobrar tu recompensa en el refugio de la mafia.</li>
            </ul>
          `
        },
        {
          id: "player-jobs",
          title: "11. Trabajos Civiles y Generación de Ingresos",
          icon: "💼",
          content: `
            <p>Si prefieres una vida legal y próspera, Minecity cuenta con múltiples profesiones bien remuneradas:</p>
            <ul>
              <li><strong>Pescador:</strong> Captura especies raras en los muelles de la costa y vende tu pesca fresca en la lonja marítima.</li>
              <li><strong>Minero:</strong> Extrae minerales pesados y materias primas en la cantera industrial del condado.</li>
              <li><strong>Camionero:</strong> Engancha remolques pesados a tu camión y realiza repartos de mercancías por autopistas interurbanas para ganar cuantiosos bonos de transporte.</li>
              <li><strong>Conductor de Autobús:</strong> Cumple con las líneas de transporte metropolitano recogiendo pasajeros en cada parada de la ciudad.</li>
            </ul>
          `
        }
      ],

      admin: [
        {
          id: "admin-suite",
          title: "1. Arquitectura Central de MinecitySuite",
          icon: "⚙️",
          content: `
            <p><strong>MinecitySuite</strong> es el núcleo monolítico diseñado a medida para Minecity. Centraliza 6 subsistemas principales en un único motor de alto rendimiento:</p>
            <div class="callout callout-info">
              <div class="callout-title">📁 Estructura de Archivos en <code>plugins/MinecitySuite/</code></div>
              <ul>
                <li><code>config-general.yml</code>: Idioma principal, tipo de base de datos y nivel de registro.</li>
                <li><code>police-config.yml</code>: Golpes de porra requeridos (2), coordenadas de celdas, decaimiento de estrellas y multas.</li>
                <li><code>paramedic-config.yml</code>: Tiempos de llamada 911, tasas de contagio y reaparición en hospital.</li>
                <li><code>survival-config.yml</code>: Curvas de decaimiento de sed, multiplicadores por sprint y valores de bebidas.</li>
                <li><code>pets-config.yml</code>: Precios de adopción, desgaste de hambre y niveles de entrenamiento.</li>
                <li><code>dummy-config.yml</code>: Inteligencia artificial y equipamiento de los dummies de prueba.</li>
              </ul>
            </div>
          `
        },
        {
          id: "admin-fixer",
          title: "2. MinecityFixerAddon: Parcheador en Tiempo de Ejecución",
          icon: "🔧",
          content: `
            <p><strong>MinecityFixerAddon</strong> es un plugin inyector post-mundo diseñado para corregir errores en plugins de terceros de código cerrado sin tocar sus archivos JAR originales:</p>
            <ul>
              <li><strong>Corrección de Giro Invertido en Vehículos:</strong> Corrige los cálculos de paquetes en QualityArmoryVehicles2 para que izquierda y derecha respondan naturalmente en Minecraft 1.21.11.</li>
              <li><strong>Control Vertical en Helicópteros:</strong> Ajusta el vector de elevación para que la barra espaciadora ascienda con potencia y el pitch/shift controle el descenso.</li>
              <li><strong>Depósito Automático Tienda -> Garaje:</strong> Captura las compras en tiendas de DtlTraders y transfiere el auto directamente al <code>/qav garage</code> del jugador, evitando ítems bugeados en el inventario.</li>
              <li><strong>Parche PacketEvents para Paquetes 66/67:</strong> Intercepta paquetes no mapeados que antes desconectaban a los usuarios al interactuar con vehículos en 1.21.11.</li>
              <li><strong>Generador de Modelos Decorativos:</strong> Añade el comando <code>/vehicle model get &lt;nombre&gt;</code> para obtener ítems con el modelo 3D del auto para exhibiciones estáticas.</li>
              <li><strong>Soporte Multi-Idioma:</strong> Diccionario con traducciones para 9 idiomas.</li>
            </ul>
          `
        },
        {
          id: "admin-vehicles",
          title: "3. Creación de Concesionarios y Salones de Autos",
          icon: "🚁",
          content: `
            <p>Para montar un concesionario interactivo de automóviles o motocicletas:</p>
            <ol>
              <li>Crea un NPC con Citizens (ejemplo: <code>/npc create Vendedor de Autos</code>).</li>
              <li>Vincula una tienda de DtlTraders al NPC con los vouchers de los vehículos correspondientes.</li>
              <li>Coloca un modelo 3D decorativo en el suelo del salón usando <code>/vehicle model get &lt;nombre&gt;</code>.</li>
              <li>Cuando un jugador compre el voucher al NPC, <strong>MinecityFixerAddon</strong> interceptará la transacción y guardará automáticamente el vehículo en el garaje virtual del comprador.</li>
            </ol>
          `
        },
        {
          id: "admin-perms",
          title: "4. Jerarquía y Grupos de Permisos en LuckPerms",
          icon: "🔑",
          content: `
            <p>El servidor utiliza LuckPerms con una estructura limpia de herencia de grupos:</p>
            <pre><code># Herencia Civil Base
default -> lvl1 -> lvl2 -> lvl3 -> lvl4 -> lvl5 -> vip

# Servicios de Emergencia
police_officer (hereda default + police.officer, police.handcuffs)
police_chief   (hereda police_officer + police.chief)

paramedic_duty (hereda default + paramedic.duty)
paramedic_chief(hereda paramedic_duty + paramedic.chief)

# Equipo de Administración
helper -> moderator -> admin -> owner (posee permisos '*')</code></pre>
          `
        },
        {
          id: "admin-dummies",
          title: "5. Sistema de Dummies de Prueba (<code>/ms</code>)",
          icon: "🤖",
          content: `
            <p>Los administradores pueden generar muñecos de prueba con IA controlable para evaluar la porra policial, esposas y reanimación médica sin requerir un segundo jugador:</p>
            <ul>
              <li><code>/ms adddummy &lt;nombre&gt;</code> — Genera un dummy realista en el bloque al que apuntas.</li>
              <li><code>/ms dummycontrol &lt;nombre&gt;</code> — Alterna la postura del dummy (de pie, sentado, tumbado en cama).</li>
              <li><code>/ms removedummy &lt;nombre&gt;</code> — Elimina el dummy de forma segura.</li>
            </ul>
          `
        },
        {
          id: "admin-troubleshoot",
          title: "6. Soluciones de Optimización y Parches de Motor",
          icon: "🚨",
          content: `
            <div class="callout callout-success">
              <div class="callout-title">Parche de Carteles en Quests (Purpur 1.21.11)</div>
              <p>En Minecraft 1.21+, materiales como <code>OAK_WALL_SIGN</code> ya no son ítems de inventario y provocaban <code>IllegalArgumentException: ... isn't an item</code>. <strong>QuestsMinecity.jar</strong> ha sido optimizado con <code>toBlockItemStack()</code>, enrutando carteles y antorchas de pared a sus ítems válidos sin errores en consola.</p>
            </div>
            <div class="callout callout-success">
              <div class="callout-title">Parche de Apagado Limpio en Citizens</div>
              <p><strong>Citizens-2.0.41-b4129.jar</strong> ha sido corregido en <code>AbstractNPC.java</code> para asegurar que durante <code>/stop</code> los hologramas de texto no intenten registrar escuchas de eventos mientras el plugin se desactiva, eliminando por completo la advertencia <code>IllegalPluginAccessException: Plugin attempted to register Spawned{true} while not enabled</code>.</p>
            </div>
          `
        }
      ]
    }
  },

  t(key) {
    const loc = this.strings[this.currentLocale] || this.strings.en;
    return loc[key] || this.strings.en[key] || key;
  },

  getGuides(type) {
    const loc = this.guides[this.currentLocale] || this.guides.en;
    return loc[type] || this.guides.en[type] || [];
  },

  setLocale(locale) {
    if (this.locales[locale]) {
      this.currentLocale = locale;
      localStorage.setItem("minecity_wiki_lang", locale);
      document.dispatchEvent(new CustomEvent("minecity:language-changed", { detail: { locale } }));
    }
  },

  init() {
    const saved = localStorage.getItem("minecity_wiki_lang");
    if (saved && this.locales[saved]) {
      this.currentLocale = saved;
    } else {
      // ALWAYS DEFAULT TO ENGLISH
      this.currentLocale = "en";
    }
  }
};

I18N.init();
