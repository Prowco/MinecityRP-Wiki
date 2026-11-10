/**
 * Minecity Roleplay - Master Knowledge Base & Data Engine
 * Full content for English and Spanish (plus extended languages),
 * 17 Playlist Videos, Commands, Permissions, Placeholders, and Guides.
 */

const MINECITY_DATA = {
  version: "1.21.11-R0.1",
  coreVersion: "MinecitySuite v1.0.0 & MinecityFixerAddon v1.0.4",
  platform: "Purpur 1.21.11 / Java 21",
  serverStyle: "GTA V / GTA VI Roleplay",
  resourceLink: "https://builtbybit.com/resources/minecity-roleplay-gta-minecraft-setup.22823/",
  playlistUrl: "https://www.youtube.com/playlist?list=PLiSeaxIUvacnIqTX89JWHoUzzBK4XznnD",

  // 17 Real Minecity Videos from User's YouTube Playlist
  videos: [
    {
      id: "apartment-guide",
      title: "How to rent an apartment in Minecraft! | Minecity GTA Setup",
      title_es: "¡Cómo alquilar un apartamento en Minecraft! | Minecity GTA",
      youtubeId: "7f8Suj8XlIw",
      url: "https://www.youtube.com/watch?v=7f8Suj8XlIw",
      description: "Complete guide on finding, renting, and purchasing apartments, penthouses, and houses using the MCRP-Properties menu.",
      description_es: "Guía completa para encontrar, alquilar y comprar apartamentos, áticos y casas mediante el menú de MCRP-Properties.",
      category: "Real Estate"
    },
    {
      id: "vehicles-guide",
      title: "3D Vehicles in Minecraft without mods! | Minecity GTA Setup",
      title_es: "¡Vehículos 3D en Minecraft sin mods! | Minecity GTA",
      youtubeId: "lq8u-JcET-g",
      url: "https://www.youtube.com/watch?v=lq8u-JcET-g",
      description: "Showcase of 3D animated sports cars, motorbikes, helicopters, virtual garage storage, and gas stations.",
      description_es: "Muestra de autos deportivos 3D animados, motos, helicópteros, garaje virtual y estaciones de combustible.",
      category: "Vehicles"
    },
    {
      id: "guns-guide",
      title: "Guns in Minecraft without mods! | Minecity GTA Setup",
      title_es: "¡Armas en Minecraft sin mods! | Minecity GTA",
      youtubeId: "5dHoEsEqK2Y",
      url: "https://www.youtube.com/watch?v=5dHoEsEqK2Y",
      description: "Overview of custom 3D firearms (pistols, rifles, shotguns, snipers), ballistic ammo, and shootouts.",
      description_es: "Demostración de armas de fuego personalizadas 3D (pistolas, rifles, escopetas, francotiradores) y tiroteos.",
      category: "Weapons"
    },
    {
      id: "bank-robbery",
      title: "Were we able to rob the bank in Minecraft? | Minecity GTA Setup",
      title_es: "¿Pudimos robar el banco en Minecraft? | Minecity GTA",
      youtubeId: "KZPMHXyRVds",
      url: "https://www.youtube.com/watch?v=KZPMHXyRVds",
      description: "High-stakes bank vault robbery, automated 911 police silent alarms, police response, and escaping with the loot.",
      description_es: "Atraco de alto riesgo a la bóveda central del banco, alarma silenciosa al 911, respuesta policial y huida con el botín.",
      category: "Crime & Heists"
    },
    {
      id: "hospital-guide",
      title: "Hospital and Diseases in Minecraft! | Minecity GTA Setup",
      title_es: "¡Hospital y Enfermedades en Minecraft! | Minecity GTA",
      youtubeId: "2ccipy7nn_k",
      url: "https://www.youtube.com/watch?v=2ccipy7nn_k",
      description: "Detailed tour of the city hospital, contracting realistic diseases, fractured bones, medicine, and paramedic treatments.",
      description_es: "Recorrido detallado del hospital municipal, contagio de enfermedades, fracturas de huesos, farmacia y paramédicos.",
      category: "EMS & Hospital"
    },
    {
      id: "casino-guide",
      title: "We become MILLIONAIRES in the Minecraft casino! | Minecity GTA",
      title_es: "¡Nos hacemos MILLONARIOS en el casino de Minecraft! | Minecity GTA",
      youtubeId: "OTSsf7QewjM",
      url: "https://www.youtube.com/watch?v=OTSsf7QewjM",
      description: "Gambling, video poker, casino games, roulette tables, and lottery tickets in the luxury entertainment district.",
      description_es: "Juegos de azar, ruletas, máquinas tragamonedas, póker y billetes de lotería en el distrito de entretenimiento.",
      category: "Entertainment"
    },
    {
      id: "bank-guide",
      title: "How does a bank work in Minecraft? | Minecity GTA Setup",
      title_es: "¿Cómo funciona un banco en Minecraft? | Minecity GTA",
      youtubeId: "r4HPhE_R2nA",
      url: "https://www.youtube.com/watch?v=r4HPhE_R2nA",
      description: "How to open bank accounts, use ATM machines across the city, deposit paychecks, and wire money.",
      description_es: "Cómo abrir cuentas bancarias, usar cajeros automáticos (ATM), cobrar sueldos y transferir dinero a otros jugadores.",
      category: "Economy"
    },
    {
      id: "fisher-job",
      title: "Fisher Job | MINECRAFT ROLEPLAY | Minecity GTA",
      title_es: "Trabajo de Pescador | MINECRAFT ROLEPLAY | Minecity GTA",
      youtubeId: "Tu8a5rsJJ2U",
      url: "https://www.youtube.com/watch?v=Tu8a5rsJJ2U",
      description: "Civilian fishing career, catching custom fish species, participating in fishing tournaments, and selling to markets.",
      description_es: "Carrera civil de pescador, captura de especies personalizadas, torneos de pesca y venta en lonjas portuarias.",
      category: "Jobs"
    },
    {
      id: "miner-job",
      title: "Miner Job | MINECRAFT ROLEPLAY | Minecity GTA",
      title_es: "Trabajo de Minero | MINECRAFT ROLEPLAY | Minecity GTA",
      youtubeId: "frLu3F9IGZw",
      url: "https://www.youtube.com/watch?v=frLu3F9IGZw",
      description: "Working inside the industrial mining quarry, collecting precious ores, and earning your first fortune.",
      description_es: "Trabajo en la cantera minera industrial, recolección de minerales y materias primas para forjar tu fortuna.",
      category: "Jobs"
    },
    {
      id: "truck-job-1",
      title: "Truck Driver Job | MINECRAFT ROLEPLAY | Minecity GTA",
      title_es: "Trabajo de Camionero | MINECRAFT ROLEPLAY | Minecity GTA",
      youtubeId: "-8Ui40Sgr1A",
      url: "https://www.youtube.com/watch?v=-8Ui40Sgr1A",
      description: "Commercial logistics, delivering heavy cargo freight across highways, and earning high transport paychecks.",
      description_es: "Logística comercial pesada, entrega de mercancías por autopistas y cobro de altas bonificaciones de transporte.",
      category: "Jobs"
    },
    {
      id: "truck-job-2",
      title: "Truck Driver Job Minecity Roleplay | 2026 Edition",
      title_es: "Trabajo de Camionero en Minecity Roleplay | Edición 2026",
      youtubeId: "Gx1BC-TEeBM",
      url: "https://www.youtube.com/watch?v=Gx1BC-TEeBM",
      description: "Updated walkthrough of truck delivery routes, trailer hitching, and transport logistics.",
      description_es: "Guía actualizada de rutas de reparto en camión, enganche de remolques y logística avanzada de carga.",
      category: "Jobs"
    },
    {
      id: "bus-job",
      title: "Bus Driver Job | MINECRAFT ROLEPLAY | Minecity GTA",
      title_es: "Trabajo de Conductor de Autobús | MINECRAFT ROLEPLAY | Minecity GTA",
      youtubeId: "H9VgeG_uJlY",
      url: "https://www.youtube.com/watch?v=H9VgeG_uJlY",
      description: "Public transit bus routes, picking up citizens at designated bus stops, and operating city transit lines.",
      description_es: "Rutas de transporte público, recogida de pasajeros en paradas urbanas y operación de líneas metropolitanas.",
      category: "Jobs"
    },
    {
      id: "server-tutorial-1",
      title: "Tutorial Guide Minecity GTA Server Setup 2026",
      title_es: "Guía Tutorial Minecity GTA Server Setup 2026",
      youtubeId: "Pu4ijeTxCA8",
      url: "https://www.youtube.com/watch?v=Pu4ijeTxCA8",
      description: "Comprehensive newcomer walkthrough covering spawn arrival, city orientation, smartphone setup, and first steps.",
      description_es: "Tutorial completo para nuevos jugadores: llegada a la terminal, orientación, smartphone y primeros pasos.",
      category: "Tutorials"
    },
    {
      id: "server-guide-1",
      title: "Minecity RP Setup | Minecraft Server GTA 5 | Updated Guide",
      title_es: "Minecity RP Setup | Servidor Minecraft GTA 5 | Guía Completa",
      youtubeId: "tqgprEd5LGY",
      url: "https://www.youtube.com/watch?v=tqgprEd5LGY",
      description: "Full in-depth feature overview of the entire Minecity Roleplay Grand Theft Auto server package.",
      description_es: "Visión general detallada de todas las funciones del setup completo Minecity estilo Grand Theft Auto.",
      category: "Showcase"
    },
    {
      id: "server-guide-2",
      title: "Minecity RP Setup | Minecraft Server | Guide | Tutorial",
      title_es: "Minecity RP Setup | Servidor Minecraft | Guía y Tutorial",
      youtubeId: "JXYf6U3_8WI",
      url: "https://www.youtube.com/watch?v=JXYf6U3_8WI",
      description: "Setup walkthrough, configuration breakdown, and server administrator quick start.",
      description_es: "Paseo por el setup, desglose de configuraciones e inicio rápido para administradores del servidor.",
      category: "Showcase"
    },
    {
      id: "server-update-1",
      title: "Minecity RP Setup | Minecraft Server GTA 6 | New Update",
      title_es: "Minecity RP Setup | Servidor GTA 6 | Nueva Actualización",
      youtubeId: "gzTH18xT6rU",
      url: "https://www.youtube.com/watch?v=gzTH18xT6rU",
      description: "Showcase of the next-generation GTA 6 themed updates, expanded city map, and new vehicle mechanics.",
      description_es: "Presentación de las novedades temáticas estilo GTA 6, mapa urbano ampliado y nuevas físicas de conducción.",
      category: "Showcase"
    },
    {
      id: "server-update-2",
      title: "Minecity RP Setup New Update | Minecraft Server GTA 6 Edition",
      title_es: "Minecity RP Setup Nueva Actualización | Edición GTA 6",
      youtubeId: "pkEeNNJyTh0",
      url: "https://www.youtube.com/watch?v=pkEeNNJyTh0",
      description: "Review of latest improvements, performance optimizations, and roleplay feature additions.",
      description_es: "Revisión de las últimas optimizaciones de rendimiento y mejoras añadidas al ecosistema de rol.",
      category: "Showcase"
    }
  ],

  // Commands Matrix (Both English and Spanish descriptions)
  commands: [
    // Real Estate
    { command: "/apartments", aliases: "/properties, /apartamentos", permission: "None (Everyone)", category: "Real Estate", plugin: "MinecitySuite", desc: "Opens the interactive properties menu to browse, rent, buy, or manage owned homes.", desc_es: "Abre el menú interactivo para explorar, alquilar, comprar o gestionar propiedades." },
    { command: "/rent", aliases: "/alquiler", permission: "None (Everyone)", category: "Real Estate", plugin: "MinecitySuite", desc: "Quick access shortcut to the rental apartments and temporary suites browser.", desc_es: "Acceso rápido directo al catálogo de apartamentos y suites de alquiler temporal." },
    { command: "/buy", aliases: "/houses, /comprar", permission: "None (Everyone)", category: "Real Estate", plugin: "MinecitySuite", desc: "Quick access shortcut to permanent houses and luxury villas for sale.", desc_es: "Acceso rápido al catálogo de casas permanentes y mansiones de lujo en venta." },
    { command: "/arm rent <region>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Rents an apartment or business region directly.", desc_es: "Alquila una región de apartamento o negocio de forma directa." },
    { command: "/arm buy <region>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Purchases a permanent property plot.", desc_es: "Compra una parcela de propiedad permanente." },
    { command: "/arm addmember <region> <player>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Adds a roommate or friend with access to your apartment.", desc_es: "Añade a un compañero o amigo con permiso de acceso a tus puertas." },
    { command: "/arm removemember <region> <player>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Revokes access to a player from your property.", desc_es: "Revoca el acceso a un jugador de tu propiedad." },

    // Vehicles & Transport
    { command: "/qav garage", aliases: "/garage, /garaje", permission: "None (Everyone)", category: "Vehicles", plugin: "QualityArmoryVehicles", desc: "Opens your personal virtual garage to spawn or store owned cars and helicopters.", desc_es: "Abre tu garaje virtual personal para invocar o guardar tus vehículos y helicópteros." },
    { command: "/vehicle model get <name>", aliases: "-", permission: "minecityfixer.admin", category: "Vehicles", plugin: "MinecityFixerAddon", desc: "Gives staff a decorative 3D vehicle item for dealership showroom displays.", desc_es: "Otorga al staff el ítem decorativo 3D para exhibir en concesionarios." },
    { command: "/qav give <player> <vehicle>", aliases: "-", permission: "qualityarmoryvehicles.admin", category: "Vehicles", plugin: "QualityArmoryVehicles", desc: "Directly awards a vehicle model to a player's inventory/garage.", desc_es: "Otorga un modelo de vehículo directamente a un jugador." },

    // Police Department
    { command: "/police cuff <player>", aliases: "/cuff, /esposar", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Handcuffs a suspect after landing 2 consecutive hits with the arrest baton.", desc_es: "Esposa a un sospechoso tras asestar 2 golpes seguidos con la porra policial." },
    { command: "/police uncuff <player>", aliases: "/uncuff", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Removes handcuffs from a compliant citizen or detainee.", desc_es: "Retira las esposas a un ciudadano o detenido." },
    { command: "/police jail <player> <minutes> <reason>", aliases: "/jail, /encarcelar", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Books an arrested criminal into the city state penitentiary.", desc_es: "Ingresa a un criminal arrestado a la prisión estatal de la ciudad." },
    { command: "/police unjail <player>", aliases: "/unjail", permission: "police.chief", category: "Police", plugin: "MinecitySuite", desc: "Grants early release or pardons an inmate from prison.", desc_es: "Otorga libertad condicional o perdón judicial a un recluso." },
    { command: "/wanted set <player> <1-5>", aliases: "/estrellas", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Sets a player's active criminal wanted stars level (★).", desc_es: "Establece el nivel de búsqueda criminal de un jugador (1 a 5 estrellas ★)." },
    { command: "/wanted clear <player>", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Clears all wanted stars from a citizen.", desc_es: "Elimina todas las estrellas de búsqueda de un ciudadano." },

    // Paramedics & Hospital
    { command: "/paramedic revive <player>", aliases: "/revive, /reanimar", permission: "paramedic.duty", category: "EMS & Hospital", plugin: "MinecitySuite", desc: "Performs emergency CPR resuscitation on an unconscious downed citizen.", desc_es: "Aplica reanimación cardiopulmonar (RCP) de emergencia a un caído." },
    { command: "/paramedic heal <player>", aliases: "/curar", permission: "paramedic.duty", category: "EMS & Hospital", plugin: "MinecitySuite", desc: "Treats active bacterial illnesses and stabilizes fractured bones.", desc_es: "Trata enfermedades bacterianas activas y estabiliza huesos rotos." },
    { command: "/pharmacy", aliases: "/farmacia", permission: "None (Everyone)", category: "EMS & Hospital", plugin: "MinecitySuite", desc: "Opens the pharmacy GUI to purchase splints, bandages, antibiotics, and first aid.", desc_es: "Abre el mostrador de farmacia para comprar férulas, vendajes y medicinas." },

    // Survival & Thirst
    { command: "/survival status", aliases: "/thirst, /sed", permission: "None (Everyone)", category: "Survival", plugin: "MinecitySuite", desc: "Displays your current hydration percentage, body fatigue, and symptoms.", desc_es: "Muestra tu porcentaje actual de hidratación, fatiga corporal y síntomas." },
    { command: "/survival setthirst <player> <0-100>", aliases: "-", permission: "survival.admin", category: "Survival", plugin: "MinecitySuite", desc: "Admin command to adjust a player's hydration level.", desc_es: "Comando de staff para ajustar el nivel de hidratación de un jugador." },

    // Tamagotchi Pets
    { command: "/pet shop", aliases: "/tiendamascotas", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Opens the pet store to adopt dogs, cats, parrots, and purchase food.", desc_es: "Abre la tienda de mascotas para adoptar perros, gatos y comprar comida." },
    { command: "/pet", aliases: "/mascota", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Opens the pet care dashboard (feed, wash, play, status).", desc_es: "Abre el panel de cuidado de tu mascota (alimentar, lavar, jugar, estado)." },
    { command: "/pet call", aliases: "/llamarpet", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Summons your active pet to your side or makes it ride inside your vehicle.", desc_es: "Invoca a tu mascota activa a tu lado o la sube al asiento de tu vehículo." },

    // Citizen ID, Phone & GPS
    { command: "/card show", aliases: "/dni", permission: "None (Everyone)", category: "Identity", plugin: "MinecitySuite", desc: "Presents your Citizen ID card to the player you are looking at.", desc_es: "Muestra tu documento de identidad (DNI) al jugador que tengas enfrente." },
    { command: "/card view", aliases: "-", permission: "None (Everyone)", category: "Identity", plugin: "MinecitySuite", desc: "Inspects your own citizen credentials and social security number.", desc_es: "Inspecciona tus propias credenciales ciudadanas y número de registro." },
    { command: "/phone", aliases: "/telefono, /celular", permission: "None (Everyone)", category: "Communication", plugin: "MinecitySuite", desc: "Opens your smartphone interface (contacts, calls, SMS, 911 dispatch, bank app).", desc_es: "Abre tu teléfono móvil (contactos, llamadas, SMS, 911 y banca móvil)." },
    { command: "/gps to <destination>", aliases: "-", permission: "gps.use", category: "Navigation", plugin: "GPS", desc: "Generates glowing particle arrows guiding you along city streets to a landmark.", desc_es: "Genera flechas de partículas guía por las calles hasta el destino indicado." },
    { command: "/gps stop", aliases: "-", permission: "gps.use", category: "Navigation", plugin: "GPS", desc: "Cancels active street navigation arrows.", desc_es: "Cancela las flechas de navegación activa del GPS." },

    // Roleplay Communication & Emotes
    { command: "/me <action>", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "MinecitySuite", desc: "Describes a physical in-character action (15-block proximity).", desc_es: "Describe una acción física de tu personaje (radio de 15 bloques)." },
    { command: "/do <context>", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "MinecitySuite", desc: "Establishes environmental surroundings or scene details.", desc_es: "Establece el entorno o detalles contextuales de una escena de rol." },
    { command: "/ooc <message>", aliases: "/b", permission: "None (Everyone)", category: "Roleplay", plugin: "MinecitySuite", desc: "Out of Character communication channel.", desc_es: "Canal fuera de personaje (Out of Character)." },
    { command: "/sit", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "GSit", desc: "Sits down on the block or furniture you are targeting.", desc_es: "Se sienta en el bloque o mueble al que estés apuntando." },
    { command: "/lay", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "GSit", desc: "Lies down on the ground or hospital bed.", desc_es: "Se acuesta en el suelo o en una camilla de hospital." },
    { command: "/crawl", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "GSit", desc: "Initiates crawling mode under tight spaces.", desc_es: "Inicia el modo de gateo bajo espacios reducidos." },

    // Admin & Test Dummies
    { command: "/ms adddummy <name>", aliases: "-", permission: "minecitysuite.admin", category: "Administration", plugin: "MinecitySuite", desc: "Spawns a controllable test dummy player for arrest & CPR training.", desc_es: "Genera un dummy de pruebas controlable para entrenar arrestos y RCP." },
    { command: "/ms dummycontrol <name>", aliases: "-", permission: "minecitysuite.admin", category: "Administration", plugin: "MinecitySuite", desc: "Toggles dummy posture (standing, sitting, downed bed state).", desc_es: "Alterna la postura del dummy (de pie, sentado, tumbado)." },
    { command: "/ms removedummy <name>", aliases: "-", permission: "minecitysuite.admin", category: "Administration", plugin: "MinecitySuite", desc: "Safely removes a test dummy from the world.", desc_es: "Elimina de forma segura un dummy de pruebas del mundo." },
    { command: "/minecityfixer reload", aliases: "/mcf reload", permission: "minecityfixer.admin", category: "Administration", plugin: "MinecityFixerAddon", desc: "Hot-reloads MinecityFixerAddon configurations and vehicle hooks.", desc_es: "Recarga en caliente las configuraciones y parches de MinecityFixerAddon." },
    { command: "/ms reload", aliases: "-", permission: "minecitysuite.admin", category: "Administration", plugin: "MinecitySuite", desc: "Hot-reloads all MinecitySuite modules and language files.", desc_es: "Recarga en caliente todos los módulos y archivos de idioma de MinecitySuite." }
  ],

  // Permissions Matrix
  permissions: [
    { node: "minecity.player", group: "default", defaultState: "True", desc: "Base access to ID card, proximity RP chat, survival, and properties.", desc_es: "Acceso base a DNI, chat de rol, supervivencia y compra de propiedades." },
    { node: "arm.use", group: "default", defaultState: "True", desc: "Allows renting and buying apartment regions with ARM.", desc_es: "Permite alquilar y comprar parcelas de apartamentos con ARM." },
    { node: "gps.use", group: "default", defaultState: "True", desc: "Allows starting particle GPS navigation to landmarks.", desc_es: "Permite usar el GPS de navegación por partículas hacia destinos urbanos." },
    { node: "gsit.sit", group: "default", defaultState: "True", desc: "Allows sitting on stairs, sofas, and stools.", desc_es: "Permite sentarse en escaleras, sofás y taburetes." },
    { node: "gsit.lay", group: "default", defaultState: "True", desc: "Allows lying down on beds and surfaces.", desc_es: "Permite acostarse en camas, camillas y superficies." },
    { node: "police.officer", group: "police_officer", defaultState: "False", desc: "Grants arrest baton, handcuffs, wanted stars inspection, and jailing.", desc_es: "Otorga porra de arresto, esposas, control de estrellas y encarcelamiento." },
    { node: "police.chief", group: "police_chief", defaultState: "False", desc: "Grants unjail pardons, precinct locker management, and SWAT armory.", desc_es: "Otorga indultos, gestión de taquillas y acceso a armería SWAT." },
    { node: "paramedic.duty", group: "paramedic_duty", defaultState: "False", desc: "Grants CPR defibrillator resuscitation, disease treatments, and ambulance drive.", desc_es: "Permite reanimación con desfibrilador/RCP, cura de enfermedades y ambulancia." },
    { node: "paramedic.chief", group: "paramedic_chief", defaultState: "False", desc: "Full administrative access to hospital departments and pharmacy stocks.", desc_es: "Acceso administrativo a salas de hospital y existencias de farmacia." },
    { node: "minecityfixer.admin", group: "admin", defaultState: "False", desc: "Allows spawning 3D vehicle display models and reloading fixer hooks.", desc_es: "Permite generar modelos 3D de exhibición y recargar parches del addon." },
    { node: "minecitysuite.admin", group: "admin", defaultState: "False", desc: "Full administrative control over dummies, economic configs, and survival.", desc_es: "Control total de dummies de prueba, economía y supervivencia." }
  ],

  // PAPI Placeholders
  placeholders: [
    { placeholder: "%minecity_wanted_stars%", plugin: "MinecitySuite", desc: "Displays player's wanted level as colored stars (e.g. ★★★☆☆).", desc_es: "Muestra el nivel de búsqueda del jugador en estrellas coloreadas (ej. ★★★☆☆).", example: "★★★☆☆" },
    { placeholder: "%minecity_wanted_number%", plugin: "MinecitySuite", desc: "Numeric wanted stars level (0 - 5).", desc_es: "Nivel numérico de estrellas de búsqueda (0 a 5).", example: "3" },
    { placeholder: "%minecity_thirst%", plugin: "MinecitySuite", desc: "Current hydration percentage (0% to 100%).", desc_es: "Porcentaje actual de hidratación (0% a 100%).", example: "84%" },
    { placeholder: "%minecity_thirst_bar%", plugin: "MinecitySuite", desc: "Visual color progress bar representing hydration status.", desc_es: "Barra visual de progreso con colores representando la hidratación.", example: "■■■■■■■□□□" },
    { placeholder: "%minecity_pet_name%", plugin: "MinecitySuite", desc: "Name of the player's active pet companion.", desc_es: "Nombre de la mascota activa del jugador.", example: "Chop" },
    { placeholder: "%minecity_pet_level%", plugin: "MinecitySuite", desc: "Training experience level of active pet.", desc_es: "Nivel de entrenamiento y experiencia de la mascota.", example: "Lv. 4" },
    { placeholder: "%minecity_hospital_illness%", plugin: "MinecitySuite", desc: "Active contracted disease (or 'Healthy').", desc_es: "Enfermedad activa contraída (o 'Saludable').", example: "Influenza" },
    { placeholder: "%minecity_card_id%", plugin: "MinecitySuite", desc: "Citizen permanent registration serial code.", desc_es: "Código de registro permanente del DNI ciudadano.", example: "MCRP-84920" }
  ]
};
