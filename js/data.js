/**
 * Minecity Roleplay - Master Server Data Registry
 * Grounded in ALL 76 Server Plugins, Configurations & Real Bytecode
 * 323 Commands • 113 Placeholders • 363 Permissions
 */

const MINECITY_DATA = {
  // 17 YouTube Showcase Videos Playlist
  videos: [
{
    "id": "apartment-guide",
    "youtubeId": "7f8Suj8XlIw",
    "url": "https://www.youtube.com/watch?v=7f8Suj8XlIw",
    "category": "Real Estate",
    "titles": {
      "en": "How to rent an apartment in Minecraft! | Minecity GTA Setup",
      "es": "¡Cómo alquilar un apartamento en Minecraft! | Minecity GTA",
      "de": "Wie man eine Wohnung in Minecraft mietet! | Minecity GTA",
      "fr": "Comment louer un appartement dans Minecraft ! | Minecity GTA",
      "it": "Come affittare un appartamento in Minecraft! | Minecity GTA",
      "pt": "Como alugar um apartamento no Minecraft! | Minecity GTA",
      "zh": "如何在 Minecraft 中租用公寓套房！| Minecity GTA",
      "ko": "마인크래프트에서 아파트 임대하는 법! | Minecity GTA",
      "ru": "Как арендовать квартиру в Minecraft! | Minecity GTA"
    },
    "descs": {
      "en": "Complete guide on finding, renting, and purchasing apartments, penthouses, and houses using the MCRP-Properties menu.",
      "es": "Guía completa para encontrar, alquilar y comprar apartamentos, áticos y casas mediante el menú de MCRP-Properties.",
      "de": "Vollständiger Leitfaden zum Mieten und Kaufen von Wohnungen und Penthäusern mit dem MCRP-Properties-Menü.",
      "fr": "Guide complet pour trouver, louer et acheter des appartements et des penthouses via le menu MCRP-Properties.",
      "it": "Guida completa per affittare e comprare appartamenti e attici con il menu MCRP-Properties.",
      "pt": "Guia completo para encontrar, alugar e comprar apartamentos e mansões no menu MCRP-Properties.",
      "zh": "通过 MCRP-Properties 菜单寻找、租赁和购买公寓、顶层豪宅及独栋别墅的完整指南。",
      "ko": "MCRP-Properties 메뉴를 통해 아파트, 펜트하우스 및 주택을 임대하고 구매하는 완전 공략.",
      "ru": "Полный гайд по поиску, аренде и покупке квартир и пентхаусов через меню MCRP-Properties."
    }
  },
  {
    "id": "vehicles-guide",
    "youtubeId": "lq8u-JcET-g",
    "url": "https://www.youtube.com/watch?v=lq8u-JcET-g",
    "category": "Vehicles",
    "titles": {
      "en": "3D Vehicles in Minecraft without mods! | Minecity GTA Setup",
      "es": "¡Vehículos 3D en Minecraft sin mods! | Minecity GTA",
      "de": "3D-Fahrzeuge in Minecraft ohne Mods! | Minecity GTA",
      "fr": "Véhicules 3D dans Minecraft sans mods ! | Minecity GTA",
      "it": "Veicoli 3D in Minecraft senza mod! | Minecity GTA",
      "pt": "Veículos 3D no Minecraft sem mods! | Minecity GTA",
      "zh": "无需 Mod 的 3D 拟真载具！| Minecity GTA",
      "ko": "모드 없이 즐기는 마인크래프트 3D 차량! | Minecity GTA",
      "ru": "3D-машины в Minecraft без модов! | Minecity GTA"
    },
    "descs": {
      "en": "Showcase of 3D animated sports cars, motorbikes, helicopters, virtual garage storage, and gas stations.",
      "es": "Muestra de autos deportivos 3D animados, motos, helicópteros, garaje virtual y estaciones de combustible.",
      "de": "Präsentation von animierten 3D-Sportwagen, Motorrädern, Helikoptern und Garagen.",
      "fr": "Présentation de voitures de sport 3D, motos, hélicoptères et garages virtuels.",
      "it": "Vetrina di auto sportive 3D, moto, elicotteri e garage virtuale.",
      "pt": "Demonstração de carros esportivos 3D, motos, helicópteros e postos de combustível.",
      "zh": "3D 跑车、街头摩托、直升机、虚拟车库以及加油站系统的全景演示。",
      "ko": "3D 애니메이션 스포츠카, 바이크, 헬리콥터, 가상 차고 및 주유소 시스템 쇼케이스.",
      "ru": "Обзор анимированных 3D-спорткаров, мотоциклов, вертолетов и системы заправок."
    }
  },
  {
    "id": "guns-guide",
    "youtubeId": "5dHoEsEqK2Y",
    "url": "https://www.youtube.com/watch?v=5dHoEsEqK2Y",
    "category": "Weapons",
    "titles": {
      "en": "Guns in Minecraft without mods! | Minecity GTA Setup",
      "es": "¡Armas en Minecraft sin mods! | Minecity GTA",
      "de": "Waffen in Minecraft ohne Mods! | Minecity GTA",
      "fr": "Armes dans Minecraft sans mods ! | Minecity GTA",
      "it": "Armi in Minecraft senza mod! | Minecity GTA",
      "pt": "Armas no Minecraft sem mods! | Minecity GTA",
      "zh": "无需 Mod 的 3D 枪械系统！| Minecity GTA",
      "ko": "모드 없는 마인크래프트 총기 시스템! | Minecity GTA",
      "ru": "Огнестрельное оружие в Minecraft без модов! | Minecity GTA"
    },
    "descs": {
      "en": "Overview of custom 3D firearms (pistols, rifles, shotguns, snipers), ballistic ammo, and shootouts.",
      "es": "Demostración de armas de fuego personalizadas 3D (pistolas, rifles, escopetas, francotiradores) y tiroteos.",
      "de": "Überblick über 3D-Feuerwaffen, ballistische Munition und Schießereien.",
      "fr": "Aperçu des armes à feu 3D, des munitions balistiques et des fusillades urbaines.",
      "it": "Panoramica sulle armi da fuoco 3D personalizzate e sparatorie.",
      "pt": "Visão geral de armas 3D (pistolas, fuzis, snipers) e tiroteios.",
      "zh": "手枪、AK-47步枪、霰弹枪、高精度狙击步枪与弹道射击对决全览。",
      "ko": "커스텀 3D 권총, 라이플, 샷건, 저격총 및 탄도 물리 시스템 안내.",
      "ru": "Обзор 3D-оружия (пистолеты, винтовки, дробовики, снайперки) и баллистики."
    }
  },
  {
    "id": "bank-robbery",
    "youtubeId": "KZPMHXyRVds",
    "url": "https://www.youtube.com/watch?v=KZPMHXyRVds",
    "category": "Crime & Heists",
    "titles": {
      "en": "Were we able to rob the bank in Minecraft? | Minecity GTA Setup",
      "es": "¿Pudimos robar el banco en Minecraft? | Minecity GTA",
      "de": "Konnten wir die Bank in Minecraft ausrauben? | Minecity GTA",
      "fr": "Avons-nous réussi à braquer la banque dans Minecraft ? | Minecity GTA",
      "it": "Siamo riusciti a rapinare la banca in Minecraft? | Minecity GTA",
      "pt": "Conseguimos roubar o banco no Minecraft? | Minecity GTA",
      "zh": "我们成功抢劫了 Minecraft 中的中央银行吗？| Minecity GTA",
      "ko": "마인크래프트 은행 털기에 성공했을까? | Minecity GTA",
      "ru": "Смогли ли мы ограбить банк в Minecraft? | Minecity GTA"
    },
    "descs": {
      "en": "High-stakes bank vault robbery, automated 911 police silent alarms, police response, and escaping with the loot.",
      "es": "Atraco de alto riesgo a la bóveda central del banco, alarma silenciosa al 911, respuesta policial y huida con el botín.",
      "de": "Banküberfall mit stiller 911-Alarmierung, Polizeiverfolgung und Flucht mit der Beute.",
      "fr": "Braquage de la chambre forte, alarme 911 silencieuse et fuite avec le butin.",
      "it": "Rapina al caveau della banca, allarme silenzioso 911 e inseguimento.",
      "pt": "Assalto arriscado ao cofre do banco, alarme 911 e fuga com o dinheiro.",
      "zh": "高风险中央银行金库爆破、911静默报警、警方围捕与携款突围逃逸。",
      "ko": "초고위험 은행 금고 침투, 911 무소음 경보, 경찰 포위망 돌파 및 전리품 탈출기.",
      "ru": "Ограбление банковского хранилища, тихая тревога 911, погоня и побег с добычей."
    }
  },
  {
    "id": "hospital-guide",
    "youtubeId": "2ccipy7nn_k",
    "url": "https://www.youtube.com/watch?v=2ccipy7nn_k",
    "category": "EMS & Hospital",
    "titles": {
      "en": "Hospital and Diseases in Minecraft! | Minecity GTA Setup",
      "es": "¡Hospital y Enfermedades en Minecraft! | Minecity GTA",
      "de": "Krankenhaus und Krankheiten in Minecraft! | Minecity GTA",
      "fr": "Hôpital et maladies dans Minecraft ! | Minecity GTA",
      "it": "Ospedale e malattie in Minecraft! | Minecity GTA",
      "pt": "Hospital e doenças no Minecraft! | Minecity GTA",
      "zh": "市立医院与传染疾病系统！| Minecity GTA",
      "ko": "마인크래프트 종합병원과 전염병 시스템! | Minecity GTA",
      "ru": "Больница и реалистичные болезни в Minecraft! | Minecity GTA"
    },
    "descs": {
      "en": "Detailed tour of the city hospital, contracting realistic diseases, fractured bones, medicine, and paramedic treatments.",
      "es": "Recorrido detallado del hospital municipal, contagio de enfermedades, fracturas de huesos, farmacia y paramédicos.",
      "de": "Detaillierte Tour durch das Krankenhaus, Knochenbrüche, Medizin und Sanitäter.",
      "fr": "Visite de l'hôpital, gestion des maladies, fractures et soins d'urgence.",
      "it": "Tour dell'ospedale cittadino, malattie realistiche e trattamenti d'emergenza.",
      "pt": "Tour pelo hospital, contaminação de doenças, ossos quebrados e médicos.",
      "zh": "市立综合医院深度探访：病菌感染、高处摔落骨折、二十四小时药房与急救。",
      "ko": "종합병원 투어, 현실적 질병 감염, 골절 치료, 약국 및 응급 처치 가이드.",
      "ru": "Тур по городской больнице, заражение болезнями, переломы и реанимация."
    }
  },
  {
    "id": "casino-guide",
    "youtubeId": "OTSsf7QewjM",
    "url": "https://www.youtube.com/watch?v=OTSsf7QewjM",
    "category": "Entertainment",
    "titles": {
      "en": "We become MILLIONAIRES in the Minecraft casino! | Minecity GTA",
      "es": "¡Nos hacemos MILLONARIOS en el casino de Minecraft! | Minecity GTA",
      "de": "Wir werden MILLIONÄRE im Minecraft Casino! | Minecity GTA",
      "fr": "On devient MILLIONNAIRES au casino dans Minecraft ! | Minecity GTA",
      "it": "Diventiamo MILIONARI al casinò di Minecraft! | Minecity GTA",
      "pt": "Ficamos MILIONÁRIOS no cassino do Minecraft! | Minecity GTA",
      "zh": "我们在赌场中成为百万富翁！| Minecity GTA",
      "ko": "카지노에서 백만장자가 되다! | Minecity GTA",
      "ru": "Становимся МИЛЛИОНЕРАМИ в казино Minecraft! | Minecity GTA"
    },
    "descs": {
      "en": "Gambling, video poker, casino games, roulette tables, and lottery tickets in the luxury entertainment district.",
      "es": "Juegos de azar, ruletas, máquinas tragamonedas, póker y billetes de lotería en el distrito de entretenimiento.",
      "de": "Glücksspiel, Video-Poker, Roulette und Lotterie im Unterhaltungsviertel.",
      "fr": "Jeux de hasard, poker, roulettes et loteries dans le quartier des plaisirs.",
      "it": "Giochi d'azzardo, roulette e lotteria nel quartiere del lusso.",
      "pt": "Jogos de azar, roleta, pôquer e bilhetes premiados no cassino.",
      "zh": "豪华娱乐街区的轮盘赌桌、视频扑克机、角子老虎机与高额彩票。",
      "ko": "호화 카지노 구역의 룰렛 테이블, 비디오 포커, 슬롯머신 및 복권 체험.",
      "ru": "Азартные игры, рулетка, видеопокер и лотерея в развлекательном районе."
    }
  },
  {
    "id": "bank-guide",
    "youtubeId": "r4HPhE_R2nA",
    "url": "https://www.youtube.com/watch?v=r4HPhE_R2nA",
    "category": "Economy",
    "titles": {
      "en": "How does a bank work in Minecraft? | Minecity GTA Setup",
      "es": "¿Cómo funciona un banco en Minecraft? | Minecity GTA",
      "de": "Wie funktioniert eine Bank in Minecraft? | Minecity GTA",
      "fr": "Comment fonctionne une banque dans Minecraft ? | Minecity GTA",
      "it": "Come funziona una banca in Minecraft? | Minecity GTA",
      "pt": "Como funciona um banco no Minecraft? | Minecity GTA",
      "zh": "银行与ATM系统如何在服务器中运作？| Minecity GTA",
      "ko": "마인크래프트에서 은행은 어떻게 작동할까? | Minecity GTA",
      "ru": "Как работает банк в Minecraft? | Minecity GTA"
    },
    "descs": {
      "en": "How to open bank accounts, use ATM machines across the city, deposit paychecks, and wire money.",
      "es": "Cómo abrir cuentas bancarias, usar cajeros automáticos (ATM), cobrar sueldos y transferir dinero a otros jugadores.",
      "de": "Eröffnung von Bankkonten, Geldautomaten und Überweisungen.",
      "fr": "Ouvrir un compte bancaire, utiliser les distributeurs et virer de l'argent.",
      "it": "Come aprire conti bancari, usare sportelli bancomat e inviare bonifici.",
      "pt": "Abertura de contas, uso de caixas eletrônicos (ATM) e transferências.",
      "zh": "开设个人银行账户、全城 ATM 存取款、支票入账以及市民间即时转账。",
      "ko": "은행 계좌 개설, 도시 전역의 ATM 기기 이용, 급여 입금 및 계좌 이체 방법.",
      "ru": "Открытие счетов, банкоматы по всему городу, зарплаты и переводы."
    }
  },
  {
    "id": "fisher-job",
    "youtubeId": "Tu8a5rsJJ2U",
    "url": "https://www.youtube.com/watch?v=Tu8a5rsJJ2U",
    "category": "Jobs",
    "titles": {
      "en": "Fisher Job | MINECRAFT ROLEPLAY | Minecity GTA",
      "es": "Trabajo de Pescador | MINECRAFT ROLEPLAY | Minecity GTA",
      "de": "Fischer-Beruf | MINECRAFT ROLEPLAY | Minecity GTA",
      "fr": "Métier de Pêcheur | MINECRAFT ROLEPLAY | Minecity GTA",
      "it": "Lavoro Pescatore | MINECRAFT ROLEPLAY | Minecity GTA",
      "pt": "Trabalho de Pescador | MINECRAFT ROLEPLAY | Minecity GTA",
      "zh": "渔民职业实机演示 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ko": "어부 직업 체험 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ru": "Профессия Рыболова | MINECRAFT ROLEPLAY | Minecity GTA"
    },
    "descs": {
      "en": "Civilian fishing career, catching custom fish species, participating in fishing tournaments, and selling to markets.",
      "es": "Carrera civil de pescador, captura de especies personalizadas, torneos de pesca y venta en lonjas portuarias.",
      "de": "Zivile Fischerkarriere, seltene Fischarten fangen und verkaufen.",
      "fr": "Carrière de pêcheur, capture d'espèces rares et vente aux criées.",
      "it": "Carriera di pescatore, specie speciali e vendita al porto.",
      "pt": "Carreira de pescador, torneios de pesca e venda em mercados marítimos.",
      "zh": "沿海码头垂钓稀有定制鱼种、参与钓鱼锦标赛并前往水产市场批发售卖。",
      "ko": "희귀 어종 포획, 낚시 토너먼트 참가 및 수산물 시장 판매 가이드.",
      "ru": "Ловля редкой рыбы, рыболовные турниры и торговля на рынке."
    }
  },
  {
    "id": "miner-job",
    "youtubeId": "frLu3F9IGZw",
    "url": "https://www.youtube.com/watch?v=frLu3F9IGZw",
    "category": "Jobs",
    "titles": {
      "en": "Miner Job | MINECRAFT ROLEPLAY | Minecity GTA",
      "es": "Trabajo de Minero | MINECRAFT ROLEPLAY | Minecity GTA",
      "de": "Bergmann-Beruf | MINECRAFT ROLEPLAY | Minecity GTA",
      "fr": "Métier de Mineur | MINECRAFT ROLEPLAY | Minecity GTA",
      "it": "Lavoro Minatore | MINECRAFT ROLEPLAY | Minecity GTA",
      "pt": "Trabalho de Minerador | MINECRAFT ROLEPLAY | Minecity GTA",
      "zh": "矿工采矿职业实机演示 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ko": "광부 직업 체험 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ru": "Профессия Шахтера | MINECRAFT ROLEPLAY | Minecity GTA"
    },
    "descs": {
      "en": "Working inside the industrial mining quarry, collecting precious ores, and earning your first fortune.",
      "es": "Trabajo en la cantera minera industrial, recolección de minerales y materias primas para forjar tu fortuna.",
      "de": "Arbeit im Steinbruch, Erzabbau und erster Wohlstand.",
      "fr": "Travail dans la carrière industrielle et extraction de minerais précieux.",
      "it": "Lavoro nella cava industriale per estrarre minerali preziosi.",
      "pt": "Trabalho na pedreira industrial minerando minérios e ganhando dinheiro.",
      "zh": "深入工业采石矿场开采高价值金属矿产，赚取人生第一桶金。",
      "ko": "산업 채석장 광석 채굴 및 초기 자본 축적을 위한 광부 가이드.",
      "ru": "Добыча руды в карьере и заработок первого состояния."
    }
  },
  {
    "id": "truck-job-1",
    "youtubeId": "-8Ui40Sgr1A",
    "url": "https://www.youtube.com/watch?v=-8Ui40Sgr1A",
    "category": "Jobs",
    "titles": {
      "en": "Truck Driver Job | MINECRAFT ROLEPLAY | Minecity GTA",
      "es": "Trabajo de Camionero | MINECRAFT ROLEPLAY | Minecity GTA",
      "de": "LKW-Fahrer-Beruf | MINECRAFT ROLEPLAY | Minecity GTA",
      "fr": "Métier de Routier | MINECRAFT ROLEPLAY | Minecity GTA",
      "it": "Lavoro Camionista | MINECRAFT ROLEPLAY | Minecity GTA",
      "pt": "Trabalho de Caminhoneiro | MINECRAFT ROLEPLAY | Minecity GTA",
      "zh": "卡车货运司机职业 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ko": "트럭 운전사 직업 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ru": "Профессия Дальнобойщика | MINECRAFT ROLEPLAY | Minecity GTA"
    },
    "descs": {
      "en": "Commercial logistics, delivering heavy cargo freight across highways, and earning high transport paychecks.",
      "es": "Logística comercial pesada, entrega de mercancías por autopistas y cobro de altas bonificaciones de transporte.",
      "de": "Schwertransporte über Highways mit hohen Auszahlungen.",
      "fr": "Logistique commerciale et livraison de marchandises sur autoroutes.",
      "it": "Logistica su ruote, trasporti pesanti e compensi elevati.",
      "pt": "Transporte de cargas pesadas por rodovias ganhando altos salários.",
      "zh": "驾驶重型集装箱卡车跨越城际公路运送工业货品，赚取丰厚物流运费。",
      "ko": "고속도로 화물 운송 물류 네트워크 및 장거리 운송 보너스 획득.",
      "ru": "Грузоперевозки по шоссе с крупными выплатами за доставку."
    }
  },
  {
    "id": "truck-job-2",
    "youtubeId": "Gx1BC-TEeBM",
    "url": "https://www.youtube.com/watch?v=Gx1BC-TEeBM",
    "category": "Jobs",
    "titles": {
      "en": "Truck Driver Job Minecity Roleplay | 2026 Edition",
      "es": "Trabajo de Camionero en Minecity Roleplay | Edición 2026",
      "de": "LKW-Fahrer Minecity Roleplay | 2026 Edition",
      "fr": "Routier Minecity Roleplay | Édition 2026",
      "it": "Camionista Minecity Roleplay | Edizione 2026",
      "pt": "Caminhoneiro no Minecity Roleplay | Edição 2026",
      "zh": "卡车司机运送新路线 | 2026 最新版",
      "ko": "트럭 기사 직업 공략 | 2026 최신 개정판",
      "ru": "Дальнобойщик в Minecity RP | Издание 2026"
    },
    "descs": {
      "en": "Updated walkthrough of truck delivery routes, trailer hitching, and transport logistics.",
      "es": "Guía actualizada de rutas de reparto en camión, enganche de remolques y logística avanzada de carga.",
      "de": "Aktualisierter Leitfaden zu Lieferrouten und Anhängerkupplung.",
      "fr": "Guide mis à jour des itinéraires de livraison et attelage de remorques.",
      "it": "Guida aggiornata su rotte di consegna e rimorchi pesanti.",
      "pt": "Guia atualizado de rotas de entrega e engate de carretas.",
      "zh": "货车挂车连接操作、最新运输线路与物流装卸全流程指引。",
      "ko": "트레일러 연결 및 최적의 고속도로 배송 루트 공략 가이드.",
      "ru": "Обновленный маршрут перевозок и сцепка прицепов."
    }
  },
  {
    "id": "bus-job",
    "youtubeId": "H9VgeG_uJlY",
    "url": "https://www.youtube.com/watch?v=H9VgeG_uJlY",
    "category": "Jobs",
    "titles": {
      "en": "Bus Driver Job | MINECRAFT ROLEPLAY | Minecity GTA",
      "es": "Trabajo de Conductor de Autobús | MINECRAFT ROLEPLAY | Minecity GTA",
      "de": "Busfahrer-Beruf | MINECRAFT ROLEPLAY | Minecity GTA",
      "fr": "Métier de Chauffeur de Bus | MINECRAFT ROLEPLAY | Minecity GTA",
      "it": "Lavoro Autista Autobus | MINECRAFT ROLEPLAY | Minecity GTA",
      "pt": "Trabalho de Motorista de Ônibus | MINECRAFT ROLEPLAY | Minecity GTA",
      "zh": "城市公交巴士司机职业 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ko": "버스 운전기사 직업 | MINECRAFT ROLEPLAY | Minecity GTA",
      "ru": "Водитель Городского Автобуса | MINECRAFT ROLEPLAY | Minecity GTA"
    },
    "descs": {
      "en": "Public transit bus routes, picking up citizens at designated bus stops, and operating city transit lines.",
      "es": "Rutas de transporte público, recogida de pasajeros en paradas urbanas y operación de líneas metropolitanas.",
      "de": "Öffentlicher Nahverkehr, Passagierabholung an Haltestellen.",
      "fr": "Lignes de bus métropolitaines et transport de passagers aux arrêts.",
      "it": "Linee di trasporto pubblico urbano con fermate dedicate.",
      "pt": "Linhas de transporte metropolitano e paradas de ônibus oficiais.",
      "zh": "遵循市内交通时刻表接送市民乘客，稳定获取公共交通服务报酬。",
      "ko": "대중교통 노선 정류장 승객 수송 및 도시 교통망 운행.",
      "ru": "Маршруты общественного транспорта и перевозка пассажиров."
    }
  },
  {
    "id": "server-tutorial-1",
    "youtubeId": "Pu4ijeTxCA8",
    "url": "https://www.youtube.com/watch?v=Pu4ijeTxCA8",
    "category": "Tutorials",
    "titles": {
      "en": "Tutorial Guide Minecity GTA Server Setup 2026",
      "es": "Guía Tutorial Minecity GTA Server Setup 2026",
      "de": "Server-Tutorial Minecity GTA Setup 2026",
      "fr": "Tutoriel Guide Minecity GTA 2026",
      "it": "Tutorial Minecity GTA Setup 2026",
      "pt": "Guia Tutorial Minecity GTA Setup 2026",
      "zh": "Minecity GTA 服务器新玩家全面入门教学 2026",
      "ko": "마인시티 GTA 서버 튜토리얼 완전 정복 2026",
      "ru": "Гайд по Серверу Minecity GTA 2026"
    },
    "descs": {
      "en": "Comprehensive newcomer walkthrough covering spawn arrival, city orientation, smartphone setup, and first steps.",
      "es": "Tutorial completo para nuevos jugadores: llegada a la terminal, orientación, smartphone y primeros pasos.",
      "de": "Neulings-Guide zu Orientierung, Smartphone und ersten Schritten.",
      "fr": "Guide du débutant : arrivée, smartphone et premiers pas.",
      "it": "Guida per principianti: arrivo, smartphone e primi passi.",
      "pt": "Passo a passo inicial para novatos com smartphone e orientação.",
      "zh": "初入城市机场大厅、城市地标导览、激活手机及新手发展建议。",
      "ko": "신규 유저 입국 공략, 스마트폰 세팅 및 초기 정착 가이드.",
      "ru": "Полное руководство для новичков: спавн, ориентация и телефон."
    }
  },
  {
    "id": "server-guide-1",
    "youtubeId": "tqgprEd5LGY",
    "url": "https://www.youtube.com/watch?v=tqgprEd5LGY",
    "category": "Showcase",
    "titles": {
      "en": "Minecity RP Setup | Minecraft Server GTA 5 | Updated Guide",
      "es": "Minecity RP Setup | Servidor Minecraft GTA 5 | Guía Completa",
      "de": "Minecity RP Setup | GTA 5 Server Guide",
      "fr": "Minecity RP Setup | Guide Complet GTA 5",
      "it": "Minecity RP Setup | Guida Aggiornata GTA 5",
      "pt": "Minecity RP Setup | Guia Completo GTA 5",
      "zh": "Minecity RP 完整架构与 GTA 玩法深度指南",
      "ko": "마인시티 RP 세팅 완벽 가이드 | GTA 5 에디션",
      "ru": "Minecity RP Сборка | Полный Гайд GTA 5"
    },
    "descs": {
      "en": "Full in-depth feature overview of the entire Minecity Roleplay Grand Theft Auto server package.",
      "es": "Visión general detallada de todas las funciones del setup completo Minecity estilo Grand Theft Auto.",
      "de": "Detaillierte Übersicht aller Funktionen des GTA-Server-Setups.",
      "fr": "Aperçu complet des fonctionnalités du setup GTA Minecity.",
      "it": "Panoramica dettagliata di tutte le feature del setup.",
      "pt": "Visão geral aprofundada de todos os sistemas e mecânicas.",
      "zh": "全方位剖析 Minecity Grand Theft Auto 核心配置包功能特性。",
      "ko": "마인시티 롤플레이 GTA 패키지 전 기능에 대한 심층 개요.",
      "ru": "Глубокий разбор всех функций сборки сервера в стиле GTA."
    }
  },
  {
    "id": "server-guide-2",
    "youtubeId": "JXYf6U3_8WI",
    "url": "https://www.youtube.com/watch?v=JXYf6U3_8WI",
    "category": "Showcase",
    "titles": {
      "en": "Minecity RP Setup | Minecraft Server | Guide | Tutorial",
      "es": "Minecity RP Setup | Servidor Minecraft | Guía y Tutorial",
      "de": "Minecity RP Setup | Server Tutorial",
      "fr": "Minecity RP Setup | Tutoriel Serveur",
      "it": "Minecity RP Setup | Guida e Tutorial",
      "pt": "Minecity RP Setup | Guia e Tutorial",
      "zh": "Minecity RP 配置教程与服务器管理者快速入门",
      "ko": "마인시티 RP 세팅 가이드 & 관리자 튜토리얼",
      "ru": "Minecity RP Сборка | Руководство и Обучение"
    },
    "descs": {
      "en": "Setup walkthrough, configuration breakdown, and server administrator quick start.",
      "es": "Paseo por el setup, desglose de configuraciones e inicio rápido para administradores del servidor.",
      "de": "Setup-Durchgang und Schnellstart für Server-Administratoren.",
      "fr": "Configuration et démarrage rapide pour administrateurs.",
      "it": "Configurazione e avvio rapido per amministratori di server.",
      "pt": "Visão técnica e início rápido para administradores.",
      "zh": "服务器配置拆解、后台参数调试及管理员快速部署手册。",
      "ko": "환경 설정 분석 및 서버 관리자 퀵스타트 튜토리얼.",
      "ru": "Разбор конфигураций и быстрый старт для администраторов."
    }
  },
  {
    "id": "server-update-1",
    "youtubeId": "gzTH18xT6rU",
    "url": "https://www.youtube.com/watch?v=gzTH18xT6rU",
    "category": "Showcase",
    "titles": {
      "en": "Minecity RP Setup | Minecraft Server GTA 6 | New Update",
      "es": "Minecity RP Setup | Servidor GTA 6 | Nueva Actualización",
      "de": "Minecity RP Setup | GTA 6 Update",
      "fr": "Minecity RP Setup | Mise à jour GTA 6",
      "it": "Minecity RP Setup | Nuovo Aggiornamento GTA 6",
      "pt": "Minecity RP Setup | Nova Atualização GTA 6",
      "zh": "Minecity RP GTA 6 主题重磅重大更新实机展示",
      "ko": "마인시티 RP 세팅 | GTA 6 신규 대규모 업데이트",
      "ru": "Minecity RP | Обновление в стиле GTA 6"
    },
    "descs": {
      "en": "Showcase of the next-generation GTA 6 themed updates, expanded city map, and new vehicle mechanics.",
      "es": "Presentación de las novedades temáticas estilo GTA 6, mapa urbano ampliado y nuevas físicas de conducción.",
      "de": "Präsentation des neuen GTA 6-Themenupdates und neuer Mechaniken.",
      "fr": "Présentation des nouveautés GTA 6 et de la carte agrandie.",
      "it": "Presentazione dell'aggiornamento a tema GTA 6 e nuova mappa.",
      "pt": "Apresentação de novidades temáticas e mapa expandido.",
      "zh": "次世代 GTA 6 概念更新演示：扩展城市地图、新物理引擎与全新载具。",
      "ko": "차세대 GTA 6 테마 업데이트, 확장된 도시 맵 및 신규 메커니즘 쇼케이스.",
      "ru": "Презентация обновления GTA 6, расширенная карта и транспорт."
    }
  },
  {
    "id": "server-update-2",
    "youtubeId": "pkEeNNJyTh0",
    "url": "https://www.youtube.com/watch?v=pkEeNNJyTh0",
    "category": "Showcase",
    "titles": {
      "en": "Minecity RP Setup New Update | Minecraft Server GTA 6 Edition",
      "es": "Minecity RP Setup Nueva Actualización | Edición GTA 6",
      "de": "Minecity RP Setup Neues Update | GTA 6 Edition",
      "fr": "Minecity RP Setup Nouvelle Mise à Jour | Édition GTA 6",
      "it": "Minecity RP Setup Nuovo Update | Edizione GTA 6",
      "pt": "Minecity RP Setup Nova Atualização | Edição GTA 6",
      "zh": "Minecity RP 最新版本升级与优化特性汇总",
      "ko": "마인시티 RP 최신 업데이트 리포트 | GTA 6 에디션",
      "ru": "Minecity RP Новое Обновление | GTA 6 Edition"
    },
    "descs": {
      "en": "Review of latest improvements, performance optimizations, and roleplay feature additions.",
      "es": "Revisión de las últimas optimizaciones de rendimiento y mejoras añadidas al ecosistema de rol.",
      "de": "Überblick über Leistungsverbesserungen und neue Features.",
      "fr": "Bilan des dernières optimisations de performances et ajouts.",
      "it": "Riepilogo delle ultime ottimizzazioni e nuove funzioni.",
      "pt": "Resumo das últimas melhorias e otimizações de desempenho.",
      "zh": "服务器最新性能优化策略总结及新增角色扮演系统深度测评。",
      "ko": "최신 성능 최적화 내역 및 신규 추가 기능 종합 리뷰.",
      "ru": "Обзор последних улучшений производительности и новинок."
    }
  }
  ],

  // 76 Server Plugins Registry
  plugins: [
    {
        "id": "MinecitySuite",
        "name": "MinecitySuite",
        "jar": "MinecitySuite.jar",
        "category": "Core & Roleplay",
        "version": "1.0.0",
        "desc": "Custom GTA core engine: Police (stars/arrests), Paramedics (revive/diseases), Survival (hydration), Pets & Dummies."
    },
    {
        "id": "MinecityFixerAddon",
        "name": "MinecityFixerAddon",
        "jar": "MinecityFixerAddon.jar",
        "category": "Core & Roleplay",
        "version": "1.0.0",
        "desc": "Vehicle physics and collision bridge integrating QAV with Purpur 1.21.11."
    },
    {
        "id": "QualityArmoryVehicles2",
        "name": "QualityArmoryVehicles",
        "jar": "QualityArmoryVehicles.jar",
        "category": "Vehicles & Transport",
        "version": "2.0.86",
        "desc": "3D drivable sports cars, bikes, trucks, helicopters, personal garages and gas pumps."
    },
    {
        "id": "MTVehicles",
        "name": "MTVehicles",
        "jar": "MTVehicles.jar",
        "category": "Vehicles & Transport",
        "version": "2.4.4",
        "desc": "Advanced vehicle license plates, speed curves, fuel economy and custom vehicle models."
    },
    {
        "id": "Elevator",
        "name": "Elevator",
        "jar": "Elevator.jar",
        "category": "Vehicles & Transport",
        "version": "3.13.0",
        "desc": "Functional elevators for city skyscrapers, hospitals, and parking garages."
    },
    {
        "id": "QualityArmory",
        "name": "QualityArmory",
        "jar": "QualityArmory.jar",
        "category": "Firearms & Weapons",
        "version": "2.0.2c",
        "desc": "Realistic 3D firearms (pistols, SMGs, rifles, shotguns, snipers), ammo magazines and armor."
    },
    {
        "id": "ExecutableItems",
        "name": "ExecutableItems",
        "jar": "ExecutableItems.jar",
        "category": "Firearms & Weapons",
        "version": "5.3.3",
        "desc": "Custom interactive roleplay items, weapons, badges, and usable city tools."
    },
    {
        "id": "SCore",
        "name": "SCore",
        "jar": "SCore.jar",
        "category": "Firearms & Weapons",
        "version": "5.3.3",
        "desc": "Core library for ExecutableItems and custom damage mechanics."
    },
    {
        "id": "CommandItems",
        "name": "CommandItems",
        "jar": "CommandItems.jar",
        "category": "Firearms & Weapons",
        "version": "2.1.0",
        "desc": "Items with embedded executable commands on right/left click."
    },
    {
        "id": "AdvancedRegionMarket",
        "name": "AdvancedRegionMarket (ARM)",
        "jar": "ARM.jar",
        "category": "Real Estate & Housing",
        "version": "3.3.2",
        "desc": "Apartments, penthouses, and commercial shops for rent or sale with auto-reset schematics."
    },
    {
        "id": "WorldGuard",
        "name": "WorldGuard",
        "jar": "WG.jar",
        "category": "Real Estate & Housing",
        "version": "7.0.12",
        "desc": "City zoning, anti-griefing, safezones, bank robbery vaults, and hospital protection."
    },
    {
        "id": "WorldEdit",
        "name": "WorldEdit",
        "jar": "WE.jar",
        "category": "Real Estate & Housing",
        "version": "7.3.9",
        "desc": "City construction, schematic management, and metropolitan terrain modeling."
    },
    {
        "id": "Bank",
        "name": "Bank Lite",
        "jar": "Bank Lite.jar",
        "category": "Economy & Commerce",
        "version": "4.6.0",
        "desc": "Personal bank accounts, ATM machines, deposits, withdrawals, interest rates, and loans."
    },
    {
        "id": "CoreBankApi",
        "name": "CoreBankApi",
        "jar": "CoreBankApi.jar",
        "category": "Economy & Commerce",
        "version": "1.0.0",
        "desc": "Bank transaction logging and financial infrastructure."
    },
    {
        "id": "AuctionHouse",
        "name": "AuctionHouse",
        "jar": "AuctionHouse.jar",
        "category": "Economy & Commerce",
        "version": "2.3.8",
        "desc": "Metropolitan player-to-player marketplace, auction listings, bidding and instant buy."
    },
    {
        "id": "SalaryManager",
        "name": "SalaryManager",
        "jar": "SalaryManager.jar",
        "category": "Economy & Commerce",
        "version": "1.2.1",
        "desc": "Automated paychecks and periodic salaries for city jobs, police, and EMS."
    },
    {
        "id": "dtlTraders",
        "name": "dtlTraders",
        "jar": "DtlTraders.jar",
        "category": "Economy & Commerce",
        "version": "6.2.3",
        "desc": "Interactive NPC store merchants with custom buy/sell GUIs and dynamic pricing."
    },
    {
        "id": "Shopkeepers",
        "name": "Shopkeepers",
        "jar": "Shopkeepers.jar",
        "category": "Economy & Commerce",
        "version": "2.19.0",
        "desc": "Player-owned vendor stalls and custom trade shops in the shopping district."
    },
    {
        "id": "Vault",
        "name": "Vault",
        "jar": "Vault.jar",
        "category": "Economy & Commerce",
        "version": "1.7.3",
        "desc": "Universal economy, permissions, and chat abstraction API."
    },
    {
        "id": "KoyaRobbery",
        "name": "KoyaRobbery",
        "jar": "KoyaRobbery.jar",
        "category": "Crime & Gangs",
        "version": "1.8.4",
        "desc": "Bank heists, convenience store holdups, vault cracking, and robbery crew management."
    },
    {
        "id": "ExcellentGangs",
        "name": "ExcellentGangs",
        "jar": "ExcellentGangs.jar",
        "category": "Crime & Gangs",
        "version": "1.3.0",
        "desc": "Street gangs, turf wars, gang vaults, gang ranks, friendly fire toggle, and gang bank."
    },
    {
        "id": "ClansPlus",
        "name": "ClansPlus",
        "jar": "ClansPlus.jar",
        "category": "Crime & Gangs",
        "version": "1.4.6",
        "desc": "Mafia syndicates, crime families, alliances, clan wars, and territory scoring."
    },
    {
        "id": "Drugs",
        "name": "Drugs",
        "jar": "Drugs.jar",
        "category": "Crime & Gangs",
        "version": "2.2.0",
        "desc": "Illegal contraband cultivation, chemical processing, drug effects, and black market trade."
    },
    {
        "id": "CustomDeathDrops",
        "name": "CustomDeathDrops",
        "jar": "CustomDeathDrops.jar",
        "category": "Crime & Gangs",
        "version": "1.1.0",
        "desc": "Controlled item drops and wallet cash forfeiture upon criminal death."
    },
    {
        "id": "PhoneV2",
        "name": "PhoneConnect",
        "jar": "PhoneConnect.jar",
        "category": "Communication & GPS",
        "version": "2.0.0",
        "desc": "Interactive smartphone: SIM cards, voice calls, SMS, contacts, and 911 emergency dispatch."
    },
    {
        "id": "GPS",
        "name": "GPS",
        "jar": "GPS.jar",
        "category": "Communication & GPS",
        "version": "3.1.0",
        "desc": "Particle street navigation leading players directly to hospitals, dealerships, and jobs."
    },
    {
        "id": "GPS-Quests",
        "name": "GPS-Quests",
        "jar": "GPSQuests.jar",
        "category": "Communication & GPS",
        "version": "1.0.0",
        "desc": "Waypoint navigation guidance for active delivery missions and quest targets."
    },
    {
        "id": "TAB",
        "name": "TAB",
        "jar": "TAB.jar",
        "category": "Communication & GPS",
        "version": "5.0.4",
        "desc": "Roleplay scoreboard HUD, bossbar alerts, custom nametags, and player list styling."
    },
    {
        "id": "ChatManager",
        "name": "ChatManager / EChat",
        "jar": "EChat.jar",
        "category": "Communication & GPS",
        "version": "1.0.0",
        "desc": "Proximity local chat, shout, whisper, OOC channels, and anti-spam filters."
    },
    {
        "id": "RPTools",
        "name": "RPTools",
        "jar": "T-RPTools.jar",
        "category": "Communication & GPS",
        "version": "1.2.0",
        "desc": "Roleplay character identity cards (/card), dice roll (/roll), /me, /do, and emotes."
    },
    {
        "id": "DecentHolograms",
        "name": "DecentHolograms",
        "jar": "DecentHolograms.jar",
        "category": "Communication & GPS",
        "version": "2.8.12",
        "desc": "Floating interactive 3D text billboards, price tags, and tutorial guidance."
    },
    {
        "id": "HolographicDisplays",
        "name": "HolographicDisplays",
        "jar": "HolographicDisplays.jar",
        "category": "Communication & GPS",
        "version": "3.0.4",
        "desc": "High-visibility informational holograms in spawn terminals and bank lobbies."
    },
    {
        "id": "ImageFrame",
        "name": "ImageFrame",
        "jar": "ImageFrame.jar",
        "category": "Communication & GPS",
        "version": "1.7.5",
        "desc": "Custom HD billboards, advertisements, highway road signs, and posters on item frames."
    },
    {
        "id": "Images",
        "name": "Images",
        "jar": "Images.jar",
        "category": "Communication & GPS",
        "version": "2.1.4",
        "desc": "In-game PNG/JPEG image rendering for custom city graphics."
    },
    {
        "id": "Quests",
        "name": "Quests (QuestsMinecity)",
        "jar": "QuestsMinecity.jar",
        "category": "Jobs & Missions",
        "version": "4.0.0",
        "desc": "Civilian job center: delivery courier, taxi, mining, lumberjack, and criminal contracts."
    },
    {
        "id": "Autorank",
        "name": "Autorank",
        "jar": "Autorank.jar",
        "category": "Jobs & Missions",
        "version": "4.4.4",
        "desc": "Playtime-based citizenship progression, unlocking city privileges and tax brackets."
    },
    {
        "id": "ProSkillAPI",
        "name": "ProSkillAPI",
        "jar": "ProSkillApi.jar",
        "category": "Jobs & Missions",
        "version": "1.1.8",
        "desc": "RPG skill trees, stamina attributes, driving proficiency, and physical perks."
    },
    {
        "id": "ProMCCore",
        "name": "ProMCCore",
        "jar": "ProCore.jar",
        "category": "Jobs & Missions",
        "version": "1.0.5",
        "desc": "Underlying engine powering skill mechanics and RPG stats."
    },
    {
        "id": "RealMines",
        "name": "RealMines",
        "jar": "RealMines.jar",
        "category": "Jobs & Missions",
        "version": "1.6.0",
        "desc": "Automated resetting quarries and mines for legal industrial mining jobs."
    },
    {
        "id": "MineResetLite",
        "name": "MineResetLite",
        "jar": "MineResetLite.jar",
        "category": "Jobs & Missions",
        "version": "0.6.0",
        "desc": "Sub-quarry area resets for construction resource collection."
    },
    {
        "id": "ServerTutorialPlus",
        "name": "ServerTutorialPlus",
        "jar": "ServerTutorialPlus.jar",
        "category": "Jobs & Missions",
        "version": "2.1.0",
        "desc": "Interactive newcomer city tour guiding new citizens from the airport to city hall."
    },
    {
        "id": "EvenMoreFish",
        "name": "EvenMoreFish",
        "jar": "EvenMoreFish.jar",
        "category": "Entertainment & Casino",
        "version": "1.7.2",
        "desc": "Marina fishing tournaments, custom fish species, bait, fish monger economy."
    },
    {
        "id": "Roulette",
        "name": "Roulette",
        "jar": "Roulette.jar",
        "category": "Entertainment & Casino",
        "version": "1.2.0",
        "desc": "Authentic casino roulette tables with real-time wheel spins and chip betting."
    },
    {
        "id": "VideoPoker",
        "name": "VideoPoker",
        "jar": "VideoPoker.jar",
        "category": "Entertainment & Casino",
        "version": "1.0.0",
        "desc": "Casino video poker terminals with Texas Hold'em card payouts."
    },
    {
        "id": "Lottery",
        "name": "Lottery",
        "jar": "Lottery.jar",
        "category": "Entertainment & Casino",
        "version": "1.0.1",
        "desc": "Daily and hourly city lottery jackpots funded by citizen ticket purchases."
    },
    {
        "id": "BlockBall",
        "name": "BlockBall",
        "jar": "BlockBall.jar",
        "category": "Entertainment & Casino",
        "version": "6.28.0",
        "desc": "Full soccer / football minigame with goals, balls, and teams in the city stadium."
    },
    {
        "id": "Gameboy",
        "name": "Gameboy Emulator",
        "jar": "JameboyEmulator.jar",
        "category": "Entertainment & Casino",
        "version": "1.1.0",
        "desc": "Playable GameBoy handheld console emulator rendered on in-game maps."
    },
    {
        "id": "PocketGames",
        "name": "PocketGames",
        "jar": "PocketGames.jar",
        "category": "Entertainment & Casino",
        "version": "2.2.0",
        "desc": "GUI arcade games: 2048, Snake, Flappy Bird, Connect 4, and Tic-Tac-Toe."
    },
    {
        "id": "JukeBox",
        "name": "JukeBox",
        "jar": "Jukebox.jar",
        "category": "Entertainment & Casino",
        "version": "2.1.0",
        "desc": "City radio stations, nightclub jukebox music, and custom ambient songs."
    },
    {
        "id": "NoteBlockAPI",
        "name": "NoteBlockAPI",
        "jar": "NoteBlockAPI.jar",
        "category": "Entertainment & Casino",
        "version": "1.6.2",
        "desc": "Audio playback engine for custom MIDI/NBS radio tracks."
    },
    {
        "id": "GSit",
        "name": "GSit",
        "jar": "GSit.jar",
        "category": "Entertainment & Casino",
        "version": "1.9.0",
        "desc": "Roleplay poses: sit on chairs/stairs (/sit), lay on beds (/lay), crawl (/crawl)."
    },
    {
        "id": "GadgetsMenu",
        "name": "GadgetsMenu",
        "jar": "GadgetsMenu.jar",
        "category": "Entertainment & Casino",
        "version": "5.3.2",
        "desc": "Civic cosmetics: hats, suits, particle trails, mystery dust, and celebratory fireworks."
    },
    {
        "id": "Gizmo",
        "name": "Gizmo",
        "jar": "Gizmo.jar",
        "category": "Entertainment & Casino",
        "version": "1.2.0",
        "desc": "Interactive physical gadgets and decorative urban elements."
    },
    {
        "id": "Citizens",
        "name": "Citizens",
        "jar": "Citizens-2.0.41-b4129.jar",
        "category": "NPCs & City Staff",
        "version": "2.0.41",
        "desc": "Interactive NPCs: bank tellers, car dealers, quest givers, and police officers."
    },
    {
        "id": "Denizen",
        "name": "Denizen",
        "jar": "Denizen.jar",
        "category": "NPCs & City Staff",
        "version": "1.2.9",
        "desc": "Scripting engine for complex NPC dialogue, cinematic scenes, and interactive triggers."
    },
    {
        "id": "UltimateFood",
        "name": "UltimateFood",
        "jar": "UltimateFoods.jar",
        "category": "Survival & Food",
        "version": "2.1.0",
        "desc": "Gourmet restaurant dishes, burgers, coffee, sodas, and hunger/thirst restoration."
    },
    {
        "id": "ExcellentCrates",
        "name": "ExcellentCrates",
        "jar": "ExcellentCrates.jar",
        "category": "Rewards & VIP",
        "version": "5.2.0",
        "desc": "Custom loot crates, key vouchers, milestone rewards, and opening animations."
    },
    {
        "id": "PlayerKits2",
        "name": "PlayerKits2",
        "jar": "PlayerKits2.jar",
        "category": "Rewards & VIP",
        "version": "2.0.0",
        "desc": "Civilian starter kits, daily kits, and VIP donor care packages."
    },
    {
        "id": "TheRewards",
        "name": "TheRewards",
        "jar": "TheRewards.jar",
        "category": "Rewards & VIP",
        "version": "1.5.0",
        "desc": "Daily streak rewards and hourly playtime reward vouchers."
    },
    {
        "id": "DeluxeMenus",
        "name": "DeluxeMenus",
        "jar": "DeluxeMenus.jar",
        "category": "Menus & Interface",
        "version": "1.14.0",
        "desc": "Custom GUI menus: City Services, Job Agency, Fast Travel, and Dealerships."
    },
    {
        "id": "MyCommand",
        "name": "MyCommand",
        "jar": "MyCommand.jar",
        "category": "Menus & Interface",
        "version": "5.7.3",
        "desc": "Custom commands & aliases: /car, /carcall, /carsit1-3, /car-drive, /crew, /wiki."
    },
    {
        "id": "EssentialsWarpGUI",
        "name": "EssentialsWarpGUI",
        "jar": "WarpGUI.jar",
        "category": "Menus & Interface",
        "version": "1.4.0",
        "desc": "Visual warp navigation menu with category icons and teleport previews."
    },
    {
        "id": "Essentials",
        "name": "EssentialsX / ECore",
        "jar": "ECore.jar",
        "category": "Core & Admin",
        "version": "2.21.0",
        "desc": "Core server suite: economy (/bal, /pay), teleports (/spawn, /home), and moderation."
    },
    {
        "id": "EssentialsSpawn",
        "name": "EssentialsSpawn",
        "jar": "ESpawn.jar",
        "category": "Core & Admin",
        "version": "2.21.0",
        "desc": "Spawn point handling for airport arrivals and respawns."
    },
    {
        "id": "LuckPerms",
        "name": "LuckPerms",
        "jar": "LuckPerms.jar",
        "category": "Core & Admin",
        "version": "5.4.145",
        "desc": "Permission nodes, group inheritance, and staff/civilian role hierarchy."
    },
    {
        "id": "PlaceholderAPI",
        "name": "PlaceholderAPI",
        "jar": "PlaceholderAPI.jar",
        "category": "Core & Admin",
        "version": "2.11.6",
        "desc": "Universal variable bridging system for scoreboards, HUDs, menus, and chat."
    },
    {
        "id": "PlayerReport",
        "name": "PlayerReport",
        "jar": "PlayerReport.jar",
        "category": "Core & Admin",
        "version": "1.3.0",
        "desc": "Civilian report system to notify active police and moderators of rule breaches."
    },
    {
        "id": "Chunky",
        "name": "Chunky",
        "jar": "O-Chunky.jar",
        "category": "Performance & Fixes",
        "version": "1.4.10",
        "desc": "World pre-generator ensuring zero lag spikes during high-speed vehicle chases."
    },
    {
        "id": "LagFixer",
        "name": "LagFixer",
        "jar": "LagFixer.jar",
        "category": "Performance & Fixes",
        "version": "2.8.0",
        "desc": "Entity limiter, chunk unloader, and server tick rate stabilizer."
    },
    {
        "id": "RoseStacker",
        "name": "RoseStacker",
        "jar": "O-RoseStacker.jar",
        "category": "Performance & Fixes",
        "version": "1.5.0",
        "desc": "Item and mob stacker preventing FPS drops in crowded downtown areas."
    },
    {
        "id": "Pl-Hide-Free",
        "name": "Pl-Hide",
        "jar": "Pl-Hide.jar",
        "category": "Security & Network",
        "version": "1.6.0",
        "desc": "Command whitelist masking server backend internals from unauthorized players."
    },
    {
        "id": "ForcePack",
        "name": "ForcePack",
        "jar": "Forcepack.jar",
        "category": "Security & Network",
        "version": "3.1.0",
        "desc": "Mandatory server resource pack enforcement for 3D vehicles and custom guns."
    },
    {
        "id": "ViaVersion",
        "name": "ViaVersion",
        "jar": "ViaVersion-5.12.1.jar",
        "category": "Security & Network",
        "version": "5.12.1",
        "desc": "Multi-version client compatibility layer allowing modern Minecraft clients to join."
    },
    {
        "id": "ViaBackwards",
        "name": "ViaBackwards",
        "jar": "ViaBackwards-5.12.1.jar",
        "category": "Security & Network",
        "version": "5.12.1",
        "desc": "Backward compatibility support for older Minecraft versions."
    },
    {
        "id": "ProtocolLib",
        "name": "ProtocolLib",
        "jar": "ProtocolLib.jar",
        "category": "Security & Network",
        "version": "5.3.0",
        "desc": "Packet-level packet manipulation library for 3D vehicles and custom animations."
    },
    {
        "id": "Packetevents",
        "name": "Packetevents",
        "jar": "Packetevents.jar",
        "category": "Security & Network",
        "version": "2.5.0",
        "desc": "Modern cross-platform networking event handler for Purpur 1.21.11."
    }
],

  // 323 Master Commands Directory (All Server Plugins)
  commands: [
    {
        "command": "/apartments",
        "aliases": "/apartment, /aparments, /properties",
        "permission": "minecity.apartments",
        "category": "Real Estate",
        "plugin": "MinecitySuite & ARM",
        "desc": {
            "en": "Opens the visual real estate menu to rent apartments, buy penthouses, or manage owned properties.",
            "es": "Abre el menú interactivo para alquilar apartamentos, comprar mansiones o gestionar propiedades."
        }
    },
    {
        "command": "/rent",
        "aliases": "/rents, /alquiler",
        "permission": "minecity.apartments",
        "category": "Real Estate",
        "plugin": "MinecitySuite & ARM",
        "desc": {
            "en": "Quick shortcut to view all available apartments and hotel rooms currently for rent.",
            "es": "Acceso directo para ver todos los apartamentos y habitaciones disponibles para alquilar."
        }
    },
    {
        "command": "/buy",
        "aliases": "/houses, /buyhouse, /comprar",
        "permission": "minecity.apartments",
        "category": "Real Estate",
        "plugin": "MinecitySuite & ARM",
        "desc": {
            "en": "Quick shortcut to view all permanent luxury houses, commercial shops, and villas for sale.",
            "es": "Acceso directo para consultar casas de lujo, locales comerciales y villas en venta permanente."
        }
    },
    {
        "command": "/arm",
        "aliases": "/regionmarket",
        "permission": "arm.help",
        "category": "Real Estate",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Displays the AdvancedRegionMarket master menu, rented region info, and time extensions.",
            "es": "Muestra el menú principal de ARM, información de regiones alquiladas y extensión de tiempo."
        }
    },
    {
        "command": "/arm rent",
        "aliases": "/arm r",
        "permission": "arm.use",
        "category": "Real Estate",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Rents the region you are currently standing in if available.",
            "es": "Alquila la región donde estás parado si se encuentra disponible."
        }
    },
    {
        "command": "/arm buy",
        "aliases": "/arm b",
        "permission": "arm.use",
        "category": "Real Estate",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Purchases the region you are currently standing in permanently.",
            "es": "Compra de forma permanente la región o propiedad donde te encuentras."
        }
    },
    {
        "command": "/arm extend",
        "aliases": "/arm ext",
        "permission": "arm.use",
        "category": "Real Estate",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Extends the rental duration of your active apartment.",
            "es": "Extiende el tiempo de alquiler de tu departamento antes de que expire."
        }
    },
    {
        "command": "/arm unrent",
        "aliases": "/arm terminate",
        "permission": "arm.use",
        "category": "Real Estate",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Cancels your active lease agreement and returns the property to the market.",
            "es": "Cancela el contrato de alquiler y devuelve la propiedad al mercado inmobiliario."
        }
    },
    {
        "command": "/elevator",
        "aliases": "/elevators, /se",
        "permission": "elevator.use",
        "category": "Real Estate",
        "plugin": "Elevator",
        "desc": {
            "en": "Configures and teleports across floors using building elevator blocks.",
            "es": "Permite desplazarse verticalmente entre pisos en rascacielos mediante bloques elevadores."
        }
    },
    {
        "command": "/car",
        "aliases": "/qav garage, /garage",
        "permission": "None (Everyone)",
        "category": "Vehicles",
        "plugin": "MyCommand & QAV",
        "desc": {
            "en": "Opens your personal vehicle garage GUI to browse, select, and spawn your owned cars.",
            "es": "Abre el menú interactivo de tu garaje para ver y sacar cualquiera de tus vehículos."
        }
    },
    {
        "command": "/carcall",
        "aliases": "/qav callback",
        "permission": "None (Everyone)",
        "category": "Vehicles",
        "plugin": "MyCommand & QAV",
        "desc": {
            "en": "Saves and stores your active vehicle back into your garage to prevent theft or impound.",
            "es": "Guarda y almacena tu vehículo activo de vuelta en el garaje para evitar robos."
        }
    },
    {
        "command": "/carsit1",
        "aliases": "/carsit2, /carsit3",
        "permission": "None (Everyone)",
        "category": "Vehicles",
        "plugin": "MyCommand & QAV",
        "desc": {
            "en": "Seats you as a passenger in seat 1, 2, or 3 of a nearby vehicle.",
            "es": "Te sienta como pasajero en el asiento 1, 2 o 3 de un vehículo cercano."
        }
    },
    {
        "command": "/car-drive",
        "aliases": "/qav setaspassager -1",
        "permission": "None (Everyone)",
        "category": "Vehicles",
        "plugin": "MyCommand & QAV",
        "desc": {
            "en": "Switches your passenger seat position back to the driver seat.",
            "es": "Te regresa de copiloto al asiento del conductor para manejar el vehículo."
        }
    },
    {
        "command": "/qav shop",
        "aliases": "/vehicleshop",
        "permission": "qav.shop",
        "category": "Vehicles",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Opens the city vehicle dealership catalog to preview prices and test drives.",
            "es": "Abre el catálogo del concesionario para consultar precios y modelos de autos."
        }
    },
    {
        "command": "/mtv vehicle",
        "aliases": "/mtv",
        "permission": "mtvehicles.use",
        "category": "Vehicles",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Displays MTVehicles stats: license plate, fuel percentage, trunk space, and max speed.",
            "es": "Muestra estadísticas del vehículo: matrícula, combustible, baúl y velocidad punta."
        }
    },
    {
        "command": "/mtv refuel",
        "aliases": "/refuel",
        "permission": "mtvehicles.refuel",
        "category": "Vehicles",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Refuels the active vehicle using a handheld fuel canister or at a gas pump.",
            "es": "Llena el tanque de combustible con un bidón de gasolina o en el surtidor."
        }
    },
    {
        "command": "/police",
        "aliases": "/policia, /pd",
        "permission": "minecity.police",
        "category": "Police",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Master police command to manage on-duty status, jail suspects, check wanted stars, or issue tickets.",
            "es": "Comando principal de policía para ponerse de servicio, arrestar sospechosos y ver estrellas."
        }
    },
    {
        "command": "/police top",
        "aliases": "/policetop",
        "permission": "None (Everyone)",
        "category": "Police",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Displays the public leaderboard of top law enforcement officers with the most arrests.",
            "es": "Muestra la clasificación pública de los policías con mayor número de arrestos."
        }
    },
    {
        "command": "/police status",
        "aliases": "/wantedstatus",
        "permission": "None (Everyone)",
        "category": "Police",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Displays your current wanted level, criminal record, and remaining sentence if jailed.",
            "es": "Muestra tu nivel de búsqueda actual, antecedentes y tiempo restante de condena."
        }
    },
    {
        "command": "/police jail <player> <minutes>",
        "aliases": "/arrest <player>",
        "permission": "minecity.police.jail",
        "category": "Police",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Books a handcuffed criminal into the county state penitentiary for the specified sentence.",
            "es": "Encarcela a un criminal esposado en la prisión estatal por los minutos asignados."
        }
    },
    {
        "command": "/police addstars <player> <amount>",
        "aliases": "/addstars",
        "permission": "minecity.police.admin",
        "category": "Police",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Manually increases the wanted stars level (1 to 6) of a fugitive player.",
            "es": "Aumenta manualmente las estrellas de búsqueda (1 a 6) de un jugador fugitivo."
        }
    },
    {
        "command": "/police removestars <player> <amount>",
        "aliases": "/clearstars",
        "permission": "minecity.police.admin",
        "category": "Police",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Pardons or reduces the wanted stars level of a citizen.",
            "es": "Reduce o elimina las estrellas de búsqueda de un ciudadano."
        }
    },
    {
        "command": "/paramedic",
        "aliases": "/ems, /medic",
        "permission": "minecity.paramedic",
        "category": "EMS & Hospital",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Master paramedic command to toggle on-duty status, view emergency 911 calls, and treat patients.",
            "es": "Comando principal de paramédicos para entrar de servicio, ver llamadas 911 y atender pacientes."
        }
    },
    {
        "command": "/paramedic revive <player>",
        "aliases": "/revive <player>",
        "permission": "minecity.paramedic.revive",
        "category": "EMS & Hospital",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Revives a downed player using a Restoration Vaccine. Patient must accept prompt to save inventory.",
            "es": "Reanima a un herido inconsciente con Restoration Vaccine. El paciente debe aceptar para no perder cosas."
        }
    },
    {
        "command": "/paramedic duty",
        "aliases": "/emsduty",
        "permission": "minecity.paramedic.duty",
        "category": "EMS & Hospital",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Toggles paramedic active duty status, activating emergency dispatch notifications.",
            "es": "Activa o desactiva el servicio de paramédico para recibir alertas de emergencias 911."
        }
    },
    {
        "command": "/pharmacy",
        "aliases": "/farmacia",
        "permission": "None (Everyone)",
        "category": "EMS & Hospital",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens the municipal pharmacy store to purchase medicines for fractures, bleeding, and fever.",
            "es": "Abre la farmacia municipal para comprar medicamentos contra fracturas, sangrado y fiebre."
        }
    },
    {
        "command": "/survival",
        "aliases": "/thirst, /sed",
        "permission": "minecity.survival",
        "category": "Survival",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Displays your exact hydration percentage, hunger level, and physical fatigue indicators.",
            "es": "Muestra tu porcentaje exacto de hidratación, nivel de hambre e indicadores físicos."
        }
    },
    {
        "command": "/pet",
        "aliases": "/pets, /mascota",
        "permission": "minecity.pets",
        "category": "Pets",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens the Tamagotchi pet GUI to feed, name, care for, and level up your companion dog or cat.",
            "es": "Abre el menú de mascotas Tamagotchi para alimentar, nombrar y cuidar a tu compañero."
        }
    },
    {
        "command": "/ultimatefood",
        "aliases": "/uf",
        "permission": "ultimatefood.use",
        "category": "Survival",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Displays the restaurant gourmet recipe book, custom beverages, and nutritional values.",
            "es": "Muestra el recetario de comida gourmet, bebidas personalizadas y valores nutricionales."
        }
    },
    {
        "command": "/qa",
        "aliases": "/QualityArmory",
        "permission": "qualityarmory.use",
        "category": "Weapons",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Opens the QualityArmory weapons catalog, ammo crafting, attachments, and gun shop.",
            "es": "Abre el catálogo de armas de fuego 3D, compra de munición, accesorios y armería."
        }
    },
    {
        "command": "/qa craft",
        "aliases": "/armorycraft",
        "permission": "qualityarmory.craft",
        "category": "Weapons",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Opens the specialized firearm assembly bench to craft ammunition and tactical attachments.",
            "es": "Abre la mesa de ensamblaje balístico para fabricar cargadores y miras tácticas."
        }
    },
    {
        "command": "/ei",
        "aliases": "/executableitems",
        "permission": "executableitems.use",
        "category": "Weapons",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows interaction with custom RPG weapons, badges, and special roleplay equipment.",
            "es": "Permite interactuar con objetos ejecutables personalizados, insignias y equipo especial."
        }
    },
    {
        "command": "/crew",
        "aliases": "/robbery crew",
        "permission": "None (Everyone)",
        "category": "Crime & Gangs",
        "plugin": "MyCommand & KoyaRobbery",
        "desc": {
            "en": "Manages your heist crew for bank robberies, jewelry store holdups, and loot division.",
            "es": "Gestiona tu equipo de atraco para asaltar bancos, joyerías y repartir el botín."
        }
    },
    {
        "command": "/robbery",
        "aliases": "/heist",
        "permission": "koyarobbery.use",
        "category": "Crime & Gangs",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Displays active robbery targets, vault hacking status, police response timers, and cooldowns.",
            "es": "Muestra los objetivos de atraco activos, estado de cajas fuertes y tiempos de respuesta."
        }
    },
    {
        "command": "/gang",
        "aliases": "/gangs",
        "permission": "excellentgangs.player",
        "category": "Crime & Gangs",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Opens the street gang management menu: member roster, territory turf wars, and gang vault.",
            "es": "Abre el menú de pandillas: lista de miembros, guerras de territorio y baúl de banda."
        }
    },
    {
        "command": "/gang create <name>",
        "aliases": "/gang new",
        "permission": "excellentgangs.create",
        "category": "Crime & Gangs",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Founds an official new street gang recognized across the city underworld.",
            "es": "Funda una nueva pandilla callejera oficial en la ciudad."
        }
    },
    {
        "command": "/gang vault",
        "aliases": "/gang chest",
        "permission": "excellentgangs.vault",
        "category": "Crime & Gangs",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Opens your shared gang safe to store illegal weapons, narcotics, and heist cash.",
            "es": "Abre la caja fuerte compartida de la pandilla para guardar armas y dinero negro."
        }
    },
    {
        "command": "/gang bank",
        "aliases": "/gang deposit",
        "permission": "excellentgangs.bank",
        "category": "Crime & Gangs",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Manages the shared gang bank account to finance turf upgrades and weapon deliveries.",
            "es": "Gestiona la cuenta bancaria de la pandilla para financiar guerras y suministros."
        }
    },
    {
        "command": "/clan",
        "aliases": "/clans",
        "permission": "clansplus.player",
        "category": "Crime & Gangs",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Opens the crime syndicate clan menu: hierarchy ranks, clan warpoints, and syndicate base.",
            "es": "Abre el menú de sindicatos criminales y clanes: rangos, puntos de guerra y base."
        }
    },
    {
        "command": "/drugs",
        "aliases": "/contraband",
        "permission": "drugs.use",
        "category": "Crime & Gangs",
        "plugin": "Drugs",
        "desc": {
            "en": "Displays recipes for cultivating and processing illegal contraband on the black market.",
            "es": "Muestra recetas para cultivar y procesar sustancias ilegales en el mercado negro."
        }
    },
    {
        "command": "/drugbook",
        "aliases": "/drugsguide",
        "permission": "drugs.use",
        "category": "Crime & Gangs",
        "plugin": "Drugs",
        "desc": {
            "en": "Gives the illustrated chemical handbook explaining drug crafting and physical side effects.",
            "es": "Entrega la guía ilustrada de química para elaboración y efectos secundarios de drogas."
        }
    },
    {
        "command": "/bank",
        "aliases": "/atm",
        "permission": "bank.use",
        "category": "Economy",
        "plugin": "Bank Lite",
        "desc": {
            "en": "Opens the interactive ATM banking GUI to deposit clean cash, withdraw money, or view interest.",
            "es": "Abre el cajero automático (ATM) para depositar dinero, retirar efectivo y ver intereses."
        }
    },
    {
        "command": "/balance",
        "aliases": "/bal, /money",
        "permission": "essentials.balance",
        "category": "Economy",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Checks your active cash on hand in your wallet.",
            "es": "Consulta la cantidad de dinero en efectivo que tienes en tu billetera."
        }
    },
    {
        "command": "/pay <player> <amount>",
        "aliases": "/transfer",
        "permission": "essentials.pay",
        "category": "Economy",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Transfers cash directly to another nearby player on the spot.",
            "es": "Transfiere dinero en efectivo a otro jugador inmediatamente."
        }
    },
    {
        "command": "/balancetop",
        "aliases": "/baltop",
        "permission": "essentials.balancetop",
        "category": "Economy",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Displays the public city Forbes list of wealthiest citizens and tycoons.",
            "es": "Muestra la lista de los ciudadanos más ricos y magnates de la ciudad."
        }
    },
    {
        "command": "/ah",
        "aliases": "/auction, /auctionhouse",
        "permission": "auctionhouse.use",
        "category": "Economy",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Opens the city auction house market to buy items, sell merchandise, and place bids.",
            "es": "Abre el mercado de subastas de la ciudad para comprar y vender artículos entre jugadores."
        }
    },
    {
        "command": "/ah sell <price>",
        "aliases": "/auction sell",
        "permission": "auctionhouse.sell",
        "category": "Economy",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Lists the item currently in your main hand on the global Auction House for sale.",
            "es": "Pone a la venta en la casa de subastas global el objeto que sostienes en tu mano."
        }
    },
    {
        "command": "/salary",
        "aliases": "/payday",
        "permission": "salarymanager.next",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Displays your employment wage breakdown and exact time until your next direct deposit paycheck.",
            "es": "Muestra el desglose de tu salario laboral y el tiempo exacto para tu próximo pago."
        }
    },
    {
        "command": "/shopkeeper",
        "aliases": "/shopkeepers",
        "permission": "shopkeepers.player",
        "category": "Economy",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Manages player-owned merchant shops and trades in designated market stalls.",
            "es": "Gestiona puestos comerciales y tiendas de intercambio en los mercados de la ciudad."
        }
    },
    {
        "command": "/phone",
        "aliases": "/smartphone, /celular",
        "permission": "phone.use",
        "category": "Communication",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Opens your interactive 3D smartphone: contacts, text messaging, voice calls, and 911 dispatch.",
            "es": "Abre tu smartphone: agenda de contactos, mensajes SMS, llamadas de voz y alertas 911."
        }
    },
    {
        "command": "/hang",
        "aliases": "/hangup",
        "permission": "None (Everyone)",
        "category": "Communication",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Ends and disconnects your active cellular phone call.",
            "es": "Cuelga y finaliza la llamada telefónica en curso."
        }
    },
    {
        "command": "/gps",
        "aliases": "/compass",
        "permission": "gps.use",
        "category": "Communication",
        "plugin": "GPS",
        "desc": {
            "en": "Opens the city GPS navigation menu to set particle trail paths to dealerships, hospitals, and banks.",
            "es": "Abre el menú GPS con flechas de partículas hacia hospitales, bancos y concesionarios."
        }
    },
    {
        "command": "/gps stop",
        "aliases": "/gps cancel",
        "permission": "gps.use",
        "category": "Communication",
        "plugin": "GPS",
        "desc": {
            "en": "Clears and stops the active GPS navigation trail.",
            "es": "Cancela y apaga la ruta de navegación GPS activa."
        }
    },
    {
        "command": "/card",
        "aliases": "/dni, /id",
        "permission": "None (Everyone)",
        "category": "Identity",
        "plugin": "RPTools",
        "desc": {
            "en": "Opens and presents your civilian ID card (name, nationality, age, criminal record) to others.",
            "es": "Muestra tu tarjeta de identidad y DNI civil (nombre, edad, nacionalidad y antecedentes)."
        }
    },
    {
        "command": "/roll",
        "aliases": "/dice",
        "permission": "None (Everyone)",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Rolls an authentic random 6-sided dice for proximity roleplay dispute resolution.",
            "es": "Lanza un dado al azar del 1 al 6 para resolver situaciones de rol por proximidad."
        }
    },
    {
        "command": "/me <action>",
        "aliases": "/action",
        "permission": "None (Everyone)",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Performs a third-person physical roleplay action visible to nearby players.",
            "es": "Describe una acción física en tercera persona visible para jugadores cercanos."
        }
    },
    {
        "command": "/do <state>",
        "aliases": "/entorno",
        "permission": "None (Everyone)",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Describes the ambient environmental context or physical state of your character.",
            "es": "Describe el entorno o estado de tu personaje en el chat de proximidad."
        }
    },
    {
        "command": "/shout <message>",
        "aliases": "/gritar",
        "permission": "None (Everyone)",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Shouts a message with amplified hearing distance across city street blocks.",
            "es": "Grita un mensaje aumentando el radio de audición por varias calles."
        }
    },
    {
        "command": "/whisper <player> <message>",
        "aliases": "/susurrar",
        "permission": "None (Everyone)",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Whispers a private discreet message in close proximity (1-2 blocks).",
            "es": "Susurra un mensaje discreto a corta distancia (1-2 bloques)."
        }
    },
    {
        "command": "/sit",
        "aliases": "/gsit",
        "permission": "gsit.sit",
        "category": "Roleplay",
        "plugin": "GSit",
        "desc": {
            "en": "Sits down realistically on any stair, slab, bench, or flat ground.",
            "es": "Sienta a tu personaje de forma realista en sillas, bancos o en el suelo."
        }
    },
    {
        "command": "/lay",
        "aliases": "/glay",
        "permission": "gsit.lay",
        "category": "Roleplay",
        "plugin": "GSit",
        "desc": {
            "en": "Lays down on a bed, couch, or pavement to relax or simulate unconsciousness.",
            "es": "Acuesta a tu personaje en una cama, sofá o suelo para relajarse o fingir desmayo."
        }
    },
    {
        "command": "/crawl",
        "aliases": "/gcrawl",
        "permission": "gsit.crawl",
        "category": "Roleplay",
        "plugin": "GSit",
        "desc": {
            "en": "Toggles swimming/crawling animation on dry land to squeeze through 1-block crawlspaces.",
            "es": "Permite arrastrarse por el suelo para pasar por conductos y huecos de 1 bloque."
        }
    },
    {
        "command": "/job",
        "aliases": "/jobs, /quests, /q",
        "permission": "quests.quest",
        "category": "Jobs",
        "plugin": "Quests & MyCommand",
        "desc": {
            "en": "Opens the city employment board to pick up courier deliveries, mining, lumberjack, or taxi jobs.",
            "es": "Abre la bolsa de empleo para iniciar trabajos de repartidor, minero, leñador o taxista."
        }
    },
    {
        "command": "/jobcancel",
        "aliases": "/quest quit",
        "permission": "quests.quest",
        "category": "Jobs",
        "plugin": "Quests & MyCommand",
        "desc": {
            "en": "Abandons your currently active delivery mission or job task.",
            "es": "Cancela y abandona la misión o encargo de trabajo que tengas activo."
        }
    },
    {
        "command": "/autorank",
        "aliases": "/ar, /level",
        "permission": "autorank.check",
        "category": "Jobs",
        "plugin": "Autorank",
        "desc": {
            "en": "Checks your citizenship playtime, current civic tier, and requirements for the next civic rank.",
            "es": "Consulta tus horas jugadas, rango de ciudadanía y requisitos para ascender de nivel."
        }
    },
    {
        "command": "/class",
        "aliases": "/skills, /professions",
        "permission": "skillapi.basic",
        "category": "Jobs",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Opens your character RPG skill tree to allocate attribute points and unlock physical perks.",
            "es": "Abre el árbol de habilidades para asignar puntos de fuerza, agilidad y resistencia."
        }
    },
    {
        "command": "/roulette",
        "aliases": "/casino",
        "permission": "roulette.use",
        "category": "Entertainment",
        "plugin": "Roulette",
        "desc": {
            "en": "Joins an active casino roulette table, places chip bets on colors/numbers, and spins.",
            "es": "Permite jugar en las mesas de ruleta del casino apostando fichas a números y colores."
        }
    },
    {
        "command": "/videopoker",
        "aliases": "/poker",
        "permission": "videopoker.use",
        "category": "Entertainment",
        "plugin": "VideoPoker",
        "desc": {
            "en": "Opens a video poker terminal to play 5-card draw with cash payouts.",
            "es": "Abre una terminal de video póker para jugar manos de póker y ganar dinero."
        }
    },
    {
        "command": "/lottery",
        "aliases": "/lotto",
        "permission": "lottery.buy",
        "category": "Entertainment",
        "plugin": "Lottery",
        "desc": {
            "en": "Buys tickets for the metropolitan daily lottery jackpot pool.",
            "es": "Compra billetes para el sorteo del bote acumulado de la lotería municipal."
        }
    },
    {
        "command": "/blockball",
        "aliases": "/bb",
        "permission": "blockball.user",
        "category": "Entertainment",
        "plugin": "BlockBall",
        "desc": {
            "en": "Joins or leaves an active soccer match in the Los Santos city stadium.",
            "es": "Permite unirse o salir de los partidos de fútbol en el estadio de la ciudad."
        }
    },
    {
        "command": "/gameboy",
        "aliases": "/jameboy",
        "permission": "gameboy.use",
        "category": "Entertainment",
        "plugin": "Gameboy",
        "desc": {
            "en": "Launches the playable handheld GameBoy emulator on an interactive map screen.",
            "es": "Inicia el emulador interactivo de GameBoy en un mapa portátil."
        }
    },
    {
        "command": "/pocketgames",
        "aliases": "/pg",
        "permission": "pocketgames.play",
        "category": "Entertainment",
        "plugin": "PocketGames",
        "desc": {
            "en": "Opens the arcade GUI to play Flappy Bird, Snake, 2048, and Connect 4 with other citizens.",
            "es": "Abre juegos arcade en menú GUI: Snake, 2048, Flappy Bird y Conecta 4."
        }
    },
    {
        "command": "/music",
        "aliases": "/jukebox, /radio",
        "permission": "music.command",
        "category": "Entertainment",
        "plugin": "JukeBox",
        "desc": {
            "en": "Opens the city radio and nightclub jukebox player to select ambient music tracks.",
            "es": "Abre el menú de radio y música de clubes nocturnos para sintonizar canciones."
        }
    },
    {
        "command": "/emf",
        "aliases": "/fish, /pesca",
        "permission": "evenmorefish.player",
        "category": "Entertainment",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Opens the marina fishing guide, contest standings, and fish market sell shop.",
            "es": "Abre la guía de pesca deportiva, torneos de la marina y venta de capturas."
        }
    },
    {
        "command": "/kit",
        "aliases": "/kits",
        "permission": "playerkits.use",
        "category": "Rewards",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Opens the kit selection menu to claim your daily civilian supplies or VIP donor kits.",
            "es": "Abre el menú de kits para reclamar tus suministros diarios o paquetes VIP."
        }
    },
    {
        "command": "/crate",
        "aliases": "/crates",
        "permission": "excellentcrates.use",
        "category": "Rewards",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Previews loot crate contents, chances, and unboxes rewards using crate keys.",
            "es": "Previsualiza contenidos y abre cajas de recompensas con llaves."
        }
    },
    {
        "command": "/rewards",
        "aliases": "/daily",
        "permission": "therewards.use",
        "category": "Rewards",
        "plugin": "TheRewards",
        "desc": {
            "en": "Claims daily login streak rewards and playtime bonus cash vouchers.",
            "es": "Reclama recompensas por racha de conexión diaria y tiempo de juego."
        }
    },
    {
        "command": "/spawn",
        "aliases": "/aeropuerto",
        "permission": "essentials.spawn",
        "category": "Teleport",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Teleports back to the airport arrivals lobby in the safezone.",
            "es": "Teletransporta a la terminal de llegadas del aeropuerto en zona segura."
        }
    },
    {
        "command": "/warp",
        "aliases": "/warps",
        "permission": "essentials.warp",
        "category": "Teleport",
        "plugin": "EssentialsWarpGUI",
        "desc": {
            "en": "Opens the graphical city travel menu to warp to the Hospital, Police Dept, Marina, or Bank.",
            "es": "Abre el menú visual de viajes rápidos hacia Hospital, Comisaría, Banco o Marina."
        }
    },
    {
        "command": "/home",
        "aliases": "/homes",
        "permission": "essentials.home",
        "category": "Teleport",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Teleports to your registered apartment or private home.",
            "es": "Teletransporta a tu apartamento o casa guardada."
        }
    },
    {
        "command": "/sethome [name]",
        "aliases": "/sethome",
        "permission": "essentials.sethome",
        "category": "Teleport",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Registers your current location inside an owned apartment as a personal home point.",
            "es": "Guarda tu ubicación actual dentro de tu vivienda como punto de casa."
        }
    },
    {
        "command": "/tpa <player>",
        "aliases": "/tpask",
        "permission": "essentials.tpa",
        "category": "Teleport",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Sends a polite request to teleport to another citizen's location.",
            "es": "Envía una solicitud para teletransportarte junto a otro ciudadano."
        }
    },
    {
        "command": "/tpaccept",
        "aliases": "/tpyes",
        "permission": "essentials.tpaccept",
        "category": "Teleport",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Accepts an incoming teleportation request.",
            "es": "Acepta la solicitud de teletransporte entrante de un jugador."
        }
    },
    {
        "command": "/report <player> <reason>",
        "aliases": "/reportar",
        "permission": "None (Everyone)",
        "category": "Administration",
        "plugin": "PlayerReport",
        "desc": {
            "en": "Submits a formal rule-breaking report to all active online moderators.",
            "es": "Envía una denuncia formal sobre un jugador a los moderadores conectados."
        }
    },
    {
        "command": "/ms",
        "aliases": "/minesuite",
        "permission": "minecity.admin",
        "category": "Administration",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Admin testing suite: spawns controllable NPC target dummies to test weapons, batons, and CPR.",
            "es": "Comando de administración para spawnear dummies y probar armas, porras y RCP."
        }
    },
    {
        "command": "/lp",
        "aliases": "/luckperms",
        "permission": "luckperms.admin",
        "category": "Administration",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Master LuckPerms permission hierarchy command: user groups, node editing, and web editor.",
            "es": "Comando maestro de LuckPerms para gestionar rangos, permisos y el editor web."
        }
    },
    {
        "command": "/rg",
        "aliases": "/region",
        "permission": "worldguard.region",
        "category": "Administration",
        "plugin": "WorldGuard",
        "desc": {
            "en": "WorldGuard protection manager: defines safezones, disables PvP, and manages city boundaries.",
            "es": "Gestor de regiones de WorldGuard: define zonas seguras, banderas y perímetros de la ciudad."
        }
    },
    {
        "command": "//wand",
        "aliases": "//wand",
        "permission": "worldedit.wand",
        "category": "Administration",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Provides the WorldEdit selection wand tool for architects and builders.",
            "es": "Entrega la herramienta hacha de selección para arquitectos del servidor."
        }
    },
    {
        "command": "/dh",
        "aliases": "/decentholograms",
        "permission": "dh.admin",
        "category": "Administration",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Creates and edits floating 3D text holograms in street intersections and shops.",
            "es": "Crea y edita hologramas flotantes 3D en esquinas, tiendas y accesos."
        }
    },
    {
        "command": "/tab",
        "aliases": "/tablist",
        "permission": "tab.admin",
        "category": "Administration",
        "plugin": "TAB",
        "desc": {
            "en": "Reloads and debugs the scoreboard HUD, bossbar text, and custom nametags.",
            "es": "Recarga y configura el HUD del scoreboard, la bossbar y los nametags."
        }
    },
    {
        "command": "/chunky",
        "aliases": "/cy",
        "permission": "chunky.command",
        "category": "Administration",
        "plugin": "Chunky",
        "desc": {
            "en": "Pre-generates metropolitan chunks ahead of time to guarantee seamless vehicle performance.",
            "es": "Pre-genera los chunks del mapa para garantizar fluidez absoluta al conducir."
        }
    },
    {
        "command": "/astools",
        "aliases": "/ast",
        "permission": "armorstandtools.astools",
        "category": "Administration",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Give yourself the armor stand tools",
            "es": "[ArmorStandTools] Give yourself the armor stand tools"
        }
    },
    {
        "command": "/ascmd",
        "aliases": "-",
        "permission": "armorstandtools.ascmd",
        "category": "Administration",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "List/Add/Remove commands assigned to the nearest armor stand",
            "es": "[ArmorStandTools] List/Add/Remove commands assigned to the nearest armor stand"
        }
    },
    {
        "command": "/trait",
        "aliases": "-",
        "permission": "citizens.trait.help",
        "category": "NPCs & City Staff",
        "plugin": "Citizens",
        "desc": {
            "en": "Trait commands",
            "es": "[Citizens] Trait commands"
        }
    },
    {
        "command": "/citizens",
        "aliases": "-",
        "permission": "citizens.citizens.help",
        "category": "NPCs & City Staff",
        "plugin": "Citizens",
        "desc": {
            "en": "Administration commands",
            "es": "[Citizens] Administration commands"
        }
    },
    {
        "command": "/npc",
        "aliases": "-",
        "permission": "citizens.npc.help",
        "category": "NPCs & City Staff",
        "plugin": "Citizens",
        "desc": {
            "en": "Basic commands for all NPC-related things",
            "es": "[Citizens] Basic commands for all NPC-related things"
        }
    },
    {
        "command": "/template",
        "aliases": "/tpl",
        "permission": "citizens.templates.help",
        "category": "NPCs & City Staff",
        "plugin": "Citizens",
        "desc": {
            "en": "Template commands",
            "es": "[Citizens] Template commands"
        }
    },
    {
        "command": "/waypoints",
        "aliases": "/wp",
        "permission": "citizens.waypoints.help",
        "category": "NPCs & City Staff",
        "plugin": "Citizens",
        "desc": {
            "en": "Waypoint commands",
            "es": "[Citizens] Waypoint commands"
        }
    },
    {
        "command": "/clanadmin",
        "aliases": "-",
        "permission": "clansplus.clanadmin",
        "category": "Crime & Gangs",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Executes /clanadmin command from ClansPlus.",
            "es": "[ClansPlus] Executes /clanadmin command from ClansPlus."
        }
    },
    {
        "command": "/commanditems",
        "aliases": "/cmditems, /ci",
        "permission": "commanditems.commanditems",
        "category": "Weapons",
        "plugin": "CommandItems",
        "desc": {
            "en": "Main command for CommandItems",
            "es": "[CommandItems] Main command for CommandItems"
        }
    },
    {
        "command": "/customdeathdrops",
        "aliases": "-",
        "permission": "customdeathdrops.customdeathdrops",
        "category": "Crime & Gangs",
        "plugin": "CustomDeathDrops",
        "desc": {
            "en": "Reloads the plugin!",
            "es": "[CustomDeathDrops] Reloads the plugin!"
        }
    },
    {
        "command": "/deluxemenus",
        "aliases": "/dm, /deluxemenu, /dmenu",
        "permission": "deluxemenus.deluxemenus",
        "category": "Menus & Aliases",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "DeluxeMenus main commands",
            "es": "[DeluxeMenus] DeluxeMenus main commands"
        }
    },
    {
        "command": "/denizen",
        "aliases": "-",
        "permission": "denizen.basic",
        "category": "NPCs & City Staff",
        "plugin": "Denizen",
        "desc": {
            "en": "Lists denizen commands.",
            "es": "[Denizen] Lists denizen commands."
        }
    },
    {
        "command": "/denizenclickable",
        "aliases": "-",
        "permission": "denizen.clickable",
        "category": "NPCs & City Staff",
        "plugin": "Denizen",
        "desc": {
            "en": "Executes a Denizen clickable command.",
            "es": "[Denizen] Executes a Denizen clickable command."
        }
    },
    {
        "command": "/ex",
        "aliases": "-",
        "permission": "denizen.ex",
        "category": "NPCs & City Staff",
        "plugin": "Denizen",
        "desc": {
            "en": "Executes a Denizen script command.",
            "es": "[Denizen] Executes a Denizen script command."
        }
    },
    {
        "command": "/exs",
        "aliases": "-",
        "permission": "denizen.ex",
        "category": "NPCs & City Staff",
        "plugin": "Denizen",
        "desc": {
            "en": "Executes a Denizen script command in a sustained queue.",
            "es": "[Denizen] Executes a Denizen script command in a sustained queue."
        }
    },
    {
        "command": "/drl",
        "aliases": "-",
        "permission": "drugs.drl",
        "category": "Crime & Gangs",
        "plugin": "Drugs",
        "desc": {
            "en": "Reloads your Plugin.",
            "es": "[Drugs] Reloads your Plugin."
        }
    },
    {
        "command": "/dsc",
        "aliases": "-",
        "permission": "drugs.dsc",
        "category": "Crime & Gangs",
        "plugin": "Drugs",
        "desc": {
            "en": "Server Count",
            "es": "[Drugs] Server Count"
        }
    },
    {
        "command": "/dtltraders",
        "aliases": "/traders, /dtl",
        "permission": "dtltraders.dtltraders",
        "category": "Economy",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Executes /dtltraders command from dtlTraders.",
            "es": "[dtlTraders] Executes /dtltraders command from dtlTraders."
        }
    },
    {
        "command": "/toggleshout",
        "aliases": "/etoggleshout",
        "permission": "essentialschat.toggleshout",
        "category": "Communication",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Toggles whether you are talking in shout mode",
            "es": "[EssentialsChat] Toggles whether you are talking in shout mode"
        }
    },
    {
        "command": "/afk",
        "aliases": "/eafk, /away, /eaway",
        "permission": "essentials.afk",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Marks you as away-from-keyboard.",
            "es": "[Essentials] Marks you as away-from-keyboard."
        }
    },
    {
        "command": "/antioch",
        "aliases": "/eantioch, /grenade, /egrenade, /tnt, /etnt",
        "permission": "essentials.antioch",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "A little surprise for operators.",
            "es": "[Essentials] A little surprise for operators."
        }
    },
    {
        "command": "/anvil",
        "aliases": "/eanvil",
        "permission": "essentials.anvil",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up an Anvil.",
            "es": "[Essentials] Opens up an Anvil."
        }
    },
    {
        "command": "/back",
        "aliases": "/eback, /return, /ereturn",
        "permission": "essentials.back",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleports you to your location prior to tp/spawn/warp.",
            "es": "[Essentials] Teleports you to your location prior to tp/spawn/warp."
        }
    },
    {
        "command": "/backup",
        "aliases": "/ebackup",
        "permission": "essentials.backup",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Runs the backup if configured.",
            "es": "[Essentials] Runs the backup if configured."
        }
    },
    {
        "command": "/ban",
        "aliases": "/eban",
        "permission": "essentials.ban",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Bans a player.",
            "es": "[Essentials] Bans a player."
        }
    },
    {
        "command": "/banip",
        "aliases": "/ebanip",
        "permission": "essentials.banip",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Bans an IP address.",
            "es": "[Essentials] Bans an IP address."
        }
    },
    {
        "command": "/beezooka",
        "aliases": "/ebeezooka, /beecannon, /ebeecannon",
        "permission": "essentials.beezooka",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Throw an exploding bee at your opponent.",
            "es": "[Essentials] Throw an exploding bee at your opponent."
        }
    },
    {
        "command": "/book",
        "aliases": "/ebook",
        "permission": "essentials.book",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows reopening and editing of sealed books.",
            "es": "[Essentials] Allows reopening and editing of sealed books."
        }
    },
    {
        "command": "/bottom",
        "aliases": "/ebottom",
        "permission": "essentials.bottom",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to the lowest block at your current position.",
            "es": "[Essentials] Teleport to the lowest block at your current position."
        }
    },
    {
        "command": "/break",
        "aliases": "/ebreak",
        "permission": "essentials.break",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Breaks the block you are looking at.",
            "es": "[Essentials] Breaks the block you are looking at."
        }
    },
    {
        "command": "/broadcast",
        "aliases": "/bc, /ebc, /bcast, /ebcast, /ebroadcast, /shout, /eshout",
        "permission": "essentials.broadcast",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Broadcasts a message to the entire server.",
            "es": "[Essentials] Broadcasts a message to the entire server."
        }
    },
    {
        "command": "/broadcastworld",
        "aliases": "/bcw, /ebcw, /bcastw, /ebcastw, /ebroadcastworld, /shoutworld, /eshoutworld",
        "permission": "essentials.broadcastworld",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Broadcasts a message to a world.",
            "es": "[Essentials] Broadcasts a message to a world."
        }
    },
    {
        "command": "/bigtree",
        "aliases": "/ebigtree, /largetree, /elargetree",
        "permission": "essentials.bigtree",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawn a big tree where you are looking.",
            "es": "[Essentials] Spawn a big tree where you are looking."
        }
    },
    {
        "command": "/burn",
        "aliases": "/eburn",
        "permission": "essentials.burn",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Set a player on fire.",
            "es": "[Essentials] Set a player on fire."
        }
    },
    {
        "command": "/cartographytable",
        "aliases": "/ecartographytable, /carttable, /ecarttable",
        "permission": "essentials.cartographytable",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a cartography table.",
            "es": "[Essentials] Opens up a cartography table."
        }
    },
    {
        "command": "/clearinventory",
        "aliases": "/ci, /eci, /clean, /eclean, /clear, /eclear, /clearinvent, /eclearinvent, /eclearinventory",
        "permission": "essentials.clearinventory",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Clear all items in your inventory.",
            "es": "[Essentials] Clear all items in your inventory."
        }
    },
    {
        "command": "/clearinventoryconfirmtoggle",
        "aliases": "/eclearinventoryconfirmtoggle, /clearinventoryconfirmoff, /eclearinventoryconfirmoff, /clearconfirmoff, /eclearconfirmoff, /clearconfirmon, /eclearconfirmon, /clearconfirm, /eclearconfirm",
        "permission": "essentials.clearinventoryconfirmtoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles whether you are prompted to confirm inventory clears.",
            "es": "[Essentials] Toggles whether you are prompted to confirm inventory clears."
        }
    },
    {
        "command": "/condense",
        "aliases": "/econdense, /compact, /ecompact, /blocks, /eblocks, /toblocks, /etoblocks",
        "permission": "essentials.condense",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Condenses items into a more compact blocks.",
            "es": "[Essentials] Condenses items into a more compact blocks."
        }
    },
    {
        "command": "/compass",
        "aliases": "/ecompass, /direction, /edirection",
        "permission": "essentials.compass",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Describes your current bearing.",
            "es": "[Essentials] Describes your current bearing."
        }
    },
    {
        "command": "/createkit",
        "aliases": "/kitcreate, /createk, /kc, /ck",
        "permission": "essentials.createkit",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Create a kit in game!",
            "es": "[Essentials] Create a kit in game!"
        }
    },
    {
        "command": "/customtext",
        "aliases": "-",
        "permission": "essentials.customtext",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows you to create custom text commands.",
            "es": "[Essentials] Allows you to create custom text commands."
        }
    },
    {
        "command": "/delhome",
        "aliases": "/edelhome, /remhome, /eremhome, /rmhome, /ermhome",
        "permission": "essentials.delhome",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Removes a home.",
            "es": "[Essentials] Removes a home."
        }
    },
    {
        "command": "/deljail",
        "aliases": "/edeljail, /remjail, /eremjail, /rmjail, /ermjail",
        "permission": "essentials.deljail",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Removes a jail.",
            "es": "[Essentials] Removes a jail."
        }
    },
    {
        "command": "/delkit",
        "aliases": "/edelkit, /remkit, /eremkit, /rmkit, /ermkit, /deletekit, /edeletekit",
        "permission": "essentials.delkit",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Deletes the specified kit.",
            "es": "[Essentials] Deletes the specified kit."
        }
    },
    {
        "command": "/delwarp",
        "aliases": "/edelwarp, /remwarp, /eremwarp, /rmwarp, /ermwarp",
        "permission": "essentials.delwarp",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Deletes the specified warp.",
            "es": "[Essentials] Deletes the specified warp."
        }
    },
    {
        "command": "/depth",
        "aliases": "/edepth, /height, /eheight",
        "permission": "essentials.depth",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "States current depth, relative to sea level.",
            "es": "[Essentials] States current depth, relative to sea level."
        }
    },
    {
        "command": "/disposal",
        "aliases": "/edisposal, /trash, /etrash",
        "permission": "essentials.disposal",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens a portable disposal menu.",
            "es": "[Essentials] Opens a portable disposal menu."
        }
    },
    {
        "command": "/eco",
        "aliases": "/eeco, /economy, /eeconomy",
        "permission": "essentials.eco",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Manages the server economy.",
            "es": "[Essentials] Manages the server economy."
        }
    },
    {
        "command": "/enchant",
        "aliases": "/eenchant, /enchantment, /eenchantment",
        "permission": "essentials.enchant",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Enchants the item the user is holding.",
            "es": "[Essentials] Enchants the item the user is holding."
        }
    },
    {
        "command": "/enderchest",
        "aliases": "/echest, /eechest, /eenderchest, /endersee, /eendersee, /ec, /eec",
        "permission": "essentials.enderchest",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Lets you see inside an enderchest.",
            "es": "[Essentials] Lets you see inside an enderchest."
        }
    },
    {
        "command": "/essentials",
        "aliases": "/eessentials, /ess, /eess, /essversion",
        "permission": "essentials.essentials",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Reloads essentials.",
            "es": "[Essentials] Reloads essentials."
        }
    },
    {
        "command": "/exp",
        "aliases": "/eexp, /xp",
        "permission": "essentials.exp",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Give, set, reset, or look at a players experience.",
            "es": "[Essentials] Give, set, reset, or look at a players experience."
        }
    },
    {
        "command": "/ext",
        "aliases": "/eext, /extinguish, /eextinguish",
        "permission": "essentials.ext",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Extinguish players.",
            "es": "[Essentials] Extinguish players."
        }
    },
    {
        "command": "/feed",
        "aliases": "/eat, /eeat, /efeed",
        "permission": "essentials.feed",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Satisfy the hunger.",
            "es": "[Essentials] Satisfy the hunger."
        }
    },
    {
        "command": "/fly",
        "aliases": "/efly",
        "permission": "essentials.fly",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Take off, and soar!",
            "es": "[Essentials] Take off, and soar!"
        }
    },
    {
        "command": "/fireball",
        "aliases": "/efireball, /fireentity, /efireentity, /fireskull, /efireskull",
        "permission": "essentials.fireball",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Throw a fireball or other assorted projectiles.",
            "es": "[Essentials] Throw a fireball or other assorted projectiles."
        }
    },
    {
        "command": "/firework",
        "aliases": "/efirework",
        "permission": "essentials.firework",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows you to modify a stack of fireworks.",
            "es": "[Essentials] Allows you to modify a stack of fireworks."
        }
    },
    {
        "command": "/gamemode",
        "aliases": "/adventure, /eadventure, /adventuremode, /eadventuremode, /creative, /ecreative, /eecreative, /creativemode, /ecreativemode, /egamemode, /gm, /egm, /gma, /egma, /gmc, /egmc, /gms, /egms, /gmt, /egmt, /survival, /esurvival, /survivalmode, /esurvivalmode, /gmsp, /sp, /egmsp, /spec, /spectator",
        "permission": "essentials.gamemode",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Change player gamemode.",
            "es": "[Essentials] Change player gamemode."
        }
    },
    {
        "command": "/gc",
        "aliases": "/lag, /elag, /egc, /mem, /emem, /memory, /ememory, /uptime, /euptime, /tps, /etps, /entities, /eentities",
        "permission": "essentials.gc",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Reports memory, uptime and tick info.",
            "es": "[Essentials] Reports memory, uptime and tick info."
        }
    },
    {
        "command": "/getpos",
        "aliases": "/coords, /egetpos, /position, /eposition, /whereami, /ewhereami, /getlocation, /egetlocation, /getloc, /egetloc",
        "permission": "essentials.getpos",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Get your current coordinates or those of a player.",
            "es": "[Essentials] Get your current coordinates or those of a player."
        }
    },
    {
        "command": "/give",
        "aliases": "/egive",
        "permission": "essentials.give",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Give a player an item.",
            "es": "[Essentials] Give a player an item."
        }
    },
    {
        "command": "/god",
        "aliases": "/egod, /godmode, /egodmode, /tgm, /etgm",
        "permission": "essentials.god",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Enables your godly powers.",
            "es": "[Essentials] Enables your godly powers."
        }
    },
    {
        "command": "/grindstone",
        "aliases": "/egrindstone",
        "permission": "essentials.grindstone",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a grindstone.",
            "es": "[Essentials] Opens up a grindstone."
        }
    },
    {
        "command": "/hat",
        "aliases": "/ehat, /head, /ehead",
        "permission": "essentials.hat",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Get some cool new headgear.",
            "es": "[Essentials] Get some cool new headgear."
        }
    },
    {
        "command": "/heal",
        "aliases": "/eheal",
        "permission": "essentials.heal",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Heals you or the given player.",
            "es": "[Essentials] Heals you or the given player."
        }
    },
    {
        "command": "/help",
        "aliases": "/ehelp",
        "permission": "essentials.help",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Views a list of available commands.",
            "es": "[Essentials] Views a list of available commands."
        }
    },
    {
        "command": "/helpop",
        "aliases": "/ac, /eac, /amsg, /eamsg, /ehelpop",
        "permission": "essentials.helpop",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Message online admins.",
            "es": "[Essentials] Message online admins."
        }
    },
    {
        "command": "/ice",
        "aliases": "/eice, /efreeze",
        "permission": "essentials.ice",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Cools a player off.",
            "es": "[Essentials] Cools a player off."
        }
    },
    {
        "command": "/ignore",
        "aliases": "/eignore, /unignore, /eunignore, /delignore, /edelignore, /remignore, /eremignore, /rmignore, /ermignore",
        "permission": "essentials.ignore",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Ignore or unignore other players.",
            "es": "[Essentials] Ignore or unignore other players."
        }
    },
    {
        "command": "/info",
        "aliases": "/about, /eabout, /ifo, /eifo, /einfo, /inform, /einform, /news, /enews",
        "permission": "essentials.info",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Shows information set by the server owner.",
            "es": "[Essentials] Shows information set by the server owner."
        }
    },
    {
        "command": "/invsee",
        "aliases": "/einvsee",
        "permission": "essentials.invsee",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "See the inventory of other players.",
            "es": "[Essentials] See the inventory of other players."
        }
    },
    {
        "command": "/item",
        "aliases": "/i, /eitem, /ei",
        "permission": "essentials.item",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawn an item.",
            "es": "[Essentials] Spawn an item."
        }
    },
    {
        "command": "/itemdb",
        "aliases": "/dura, /edura, /durability, /edurability, /eitemdb, /itemno, /eitemno",
        "permission": "essentials.itemdb",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Searches for an item.",
            "es": "[Essentials] Searches for an item."
        }
    },
    {
        "command": "/itemlore",
        "aliases": "/lore, /elore, /ilore, /eilore, /eitemlore",
        "permission": "essentials.itemlore",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Edit the lore of an item.",
            "es": "[Essentials] Edit the lore of an item."
        }
    },
    {
        "command": "/itemname",
        "aliases": "/iname, /einame, /eitemname, /itemrename, /irename, /eitemrename, /eirename",
        "permission": "essentials.itemname",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Names an item.",
            "es": "[Essentials] Names an item."
        }
    },
    {
        "command": "/jailedplayers",
        "aliases": "/ejailedplayers, /ejailed, /ejp",
        "permission": "essentials.jailedplayers",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "List all jailed players.",
            "es": "[Essentials] List all jailed players."
        }
    },
    {
        "command": "/jails",
        "aliases": "/ejails",
        "permission": "essentials.jails",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "List all jails.",
            "es": "[Essentials] List all jails."
        }
    },
    {
        "command": "/jump",
        "aliases": "/j, /ej, /ejump, /jumpto, /ejumpto",
        "permission": "essentials.jump",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Jumps to the nearest block in the line of sight.",
            "es": "[Essentials] Jumps to the nearest block in the line of sight."
        }
    },
    {
        "command": "/kick",
        "aliases": "/ekick",
        "permission": "essentials.kick",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Kicks a specified player with a reason.",
            "es": "[Essentials] Kicks a specified player with a reason."
        }
    },
    {
        "command": "/kickall",
        "aliases": "/ekickall",
        "permission": "essentials.kickall",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Kicks all players off the server except the issuer.",
            "es": "[Essentials] Kicks all players off the server except the issuer."
        }
    },
    {
        "command": "/kill",
        "aliases": "/ekill",
        "permission": "essentials.kill",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Kills specified player.",
            "es": "[Essentials] Kills specified player."
        }
    },
    {
        "command": "/kitreset",
        "aliases": "/ekitreset, /kitr, /ekitr, /resetkit, /eresetkit",
        "permission": "essentials.kitreset",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Resets the cooldown on the specified kit.",
            "es": "[Essentials] Resets the cooldown on the specified kit."
        }
    },
    {
        "command": "/kittycannon",
        "aliases": "/ekittycannon",
        "permission": "essentials.kittycannon",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Throw an exploding kitten at your opponent.",
            "es": "[Essentials] Throw an exploding kitten at your opponent."
        }
    },
    {
        "command": "/lightning",
        "aliases": "/elightning, /shock, /eshock, /smite, /esmite, /strike, /estrike, /thor, /ethor",
        "permission": "essentials.lightning",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "The power of Thor. Strike at cursor or player.",
            "es": "[Essentials] The power of Thor. Strike at cursor or player."
        }
    },
    {
        "command": "/list",
        "aliases": "/elist, /online, /eonline, /playerlist, /eplayerlist, /plist, /eplist, /who, /ewho",
        "permission": "essentials.list",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "List all online players.",
            "es": "[Essentials] List all online players."
        }
    },
    {
        "command": "/loom",
        "aliases": "/eloom",
        "permission": "essentials.loom",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a loom.",
            "es": "[Essentials] Opens up a loom."
        }
    },
    {
        "command": "/mail",
        "aliases": "/email, /eemail, /memo, /ememo",
        "permission": "essentials.mail",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Manages inter-player, intra-server mail.",
            "es": "[Essentials] Manages inter-player, intra-server mail."
        }
    },
    {
        "command": "/more",
        "aliases": "/emore",
        "permission": "essentials.more",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Fills the item stack in hand to specified amount, or to maximum size if none is specified.",
            "es": "[Essentials] Fills the item stack in hand to specified amount, or to maximum size if none is specified."
        }
    },
    {
        "command": "/motd",
        "aliases": "/emotd",
        "permission": "essentials.motd",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Views the Message Of The Day.",
            "es": "[Essentials] Views the Message Of The Day."
        }
    },
    {
        "command": "/msg",
        "aliases": "/w, /m, /t, /pm, /emsg, /epm, /tell, /etell, /whisper, /ewhisper",
        "permission": "essentials.msg",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Sends a private message to the specified player.",
            "es": "[Essentials] Sends a private message to the specified player."
        }
    },
    {
        "command": "/msgtoggle",
        "aliases": "/emsgtoggle",
        "permission": "essentials.msgtoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Blocks receiving all private messages.",
            "es": "[Essentials] Blocks receiving all private messages."
        }
    },
    {
        "command": "/mute",
        "aliases": "/emute, /silence, /esilence, /unmute, /eunmute",
        "permission": "essentials.mute",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Mutes or unmutes a player.",
            "es": "[Essentials] Mutes or unmutes a player."
        }
    },
    {
        "command": "/near",
        "aliases": "/enear, /nearby, /enearby",
        "permission": "essentials.near",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Lists the players near by or around a player.",
            "es": "[Essentials] Lists the players near by or around a player."
        }
    },
    {
        "command": "/nick",
        "aliases": "/enick, /nickname, /enickname",
        "permission": "essentials.nick",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Change your nickname or that of another player.",
            "es": "[Essentials] Change your nickname or that of another player."
        }
    },
    {
        "command": "/nuke",
        "aliases": "/enuke",
        "permission": "essentials.nuke",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "May death rain upon them.",
            "es": "[Essentials] May death rain upon them."
        }
    },
    {
        "command": "/tpoffline",
        "aliases": "/otp, /offlinetp, /tpoff, /tpoffline, /etpoffline",
        "permission": "essentials.tpoffline",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to a player's last known logout location",
            "es": "[Essentials] Teleport to a player's last known logout location"
        }
    },
    {
        "command": "/paytoggle",
        "aliases": "/epaytoggle, /payoff, /epayoff, /payon, /epayon",
        "permission": "essentials.paytoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles whether you are accepting payments.",
            "es": "[Essentials] Toggles whether you are accepting payments."
        }
    },
    {
        "command": "/payconfirmtoggle",
        "aliases": "/epayconfirmtoggle, /payconfirmoff, /epayconfirmoff, /payconfirmon, /epayconfirmon, /payconfirm, /epayconfirm",
        "permission": "essentials.payconfirmtoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles whether you are prompted to confirm payments.",
            "es": "[Essentials] Toggles whether you are prompted to confirm payments."
        }
    },
    {
        "command": "/ping",
        "aliases": "/echo, /eecho, /eping, /pong, /epong",
        "permission": "essentials.ping",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Pong!",
            "es": "[Essentials] Pong!"
        }
    },
    {
        "command": "/playtime",
        "aliases": "/eplaytime",
        "permission": "essentials.playtime",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Shows a player's time played in game",
            "es": "[Essentials] Shows a player's time played in game"
        }
    },
    {
        "command": "/potion",
        "aliases": "/epotion, /elixer, /eelixer",
        "permission": "essentials.potion",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Adds custom potion effects to a potion.",
            "es": "[Essentials] Adds custom potion effects to a potion."
        }
    },
    {
        "command": "/powertool",
        "aliases": "/epowertool, /pt, /ept",
        "permission": "essentials.powertool",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Assigns a command to the item in hand.",
            "es": "[Essentials] Assigns a command to the item in hand."
        }
    },
    {
        "command": "/powertoollist",
        "aliases": "/epowertoollist, /ptlist, /eptlist",
        "permission": "essentials.powertoollist",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Lists all current powertools.",
            "es": "[Essentials] Lists all current powertools."
        }
    },
    {
        "command": "/powertooltoggle",
        "aliases": "/epowertooltoggle, /ptt, /eptt, /pttoggle, /epttoggle",
        "permission": "essentials.powertooltoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Enables or disables all current powertools.",
            "es": "[Essentials] Enables or disables all current powertools."
        }
    },
    {
        "command": "/ptime",
        "aliases": "/playertime, /eplayertime, /eptime",
        "permission": "essentials.ptime",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Adjust player's client time. Add @ prefix to fix.",
            "es": "[Essentials] Adjust player's client time. Add @ prefix to fix."
        }
    },
    {
        "command": "/pweather",
        "aliases": "/playerweather, /eplayerweather, /epweather",
        "permission": "essentials.pweather",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Adjust a player's weather",
            "es": "[Essentials] Adjust a player's weather"
        }
    },
    {
        "command": "/r",
        "aliases": "/er, /reply, /ereply",
        "permission": "essentials.r",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Quickly reply to the last player to message you.",
            "es": "[Essentials] Quickly reply to the last player to message you."
        }
    },
    {
        "command": "/rtoggle",
        "aliases": "/ertoggle, /replytoggle, /ereplytoggle",
        "permission": "essentials.rtoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Change whether the recipient of the reply is last recipient or last sender",
            "es": "[Essentials] Change whether the recipient of the reply is last recipient or last sender"
        }
    },
    {
        "command": "/realname",
        "aliases": "/erealname",
        "permission": "essentials.realname",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Displays the username of a user based on nick.",
            "es": "[Essentials] Displays the username of a user based on nick."
        }
    },
    {
        "command": "/recipe",
        "aliases": "/formula, /eformula, /method, /emethod, /erecipe, /recipes, /erecipes",
        "permission": "essentials.recipe",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Displays how to craft items.",
            "es": "[Essentials] Displays how to craft items."
        }
    },
    {
        "command": "/remove",
        "aliases": "/eremove, /butcher, /ebutcher, /killall, /ekillall, /mobkill, /emobkill",
        "permission": "essentials.remove",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Removes entities in your world.",
            "es": "[Essentials] Removes entities in your world."
        }
    },
    {
        "command": "/renamehome",
        "aliases": "/erenamehome",
        "permission": "essentials.renamehome",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Renames a home.",
            "es": "[Essentials] Renames a home."
        }
    },
    {
        "command": "/repair",
        "aliases": "/fix, /efix, /erepair",
        "permission": "essentials.repair",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Repairs the durability of one or all items.",
            "es": "[Essentials] Repairs the durability of one or all items."
        }
    },
    {
        "command": "/rest",
        "aliases": "/erest",
        "permission": "essentials.rest",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Rests you or the given player.",
            "es": "[Essentials] Rests you or the given player."
        }
    },
    {
        "command": "/rules",
        "aliases": "/erules",
        "permission": "essentials.rules",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Views the server rules.",
            "es": "[Essentials] Views the server rules."
        }
    },
    {
        "command": "/seen",
        "aliases": "/eseen, /ealts, /alts",
        "permission": "essentials.seen",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Shows the last logout time of a player.",
            "es": "[Essentials] Shows the last logout time of a player."
        }
    },
    {
        "command": "/sell",
        "aliases": "/esell",
        "permission": "essentials.sell",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Sells the item currently in your hand.",
            "es": "[Essentials] Sells the item currently in your hand."
        }
    },
    {
        "command": "/setjail",
        "aliases": "/esetjail, /createjail, /ecreatejail",
        "permission": "essentials.setjail",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Creates a jail where you specified named [jailname].",
            "es": "[Essentials] Creates a jail where you specified named [jailname]."
        }
    },
    {
        "command": "/settpr",
        "aliases": "/esettpr, /settprandom, /esettprandom",
        "permission": "essentials.settpr",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Set the random teleport location and parameters.",
            "es": "[Essentials] Set the random teleport location and parameters."
        }
    },
    {
        "command": "/setwarp",
        "aliases": "/createwarp, /ecreatewarp, /esetwarp",
        "permission": "essentials.setwarp",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Creates a new warp.",
            "es": "[Essentials] Creates a new warp."
        }
    },
    {
        "command": "/setworth",
        "aliases": "/esetworth",
        "permission": "essentials.setworth",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Set the sell value of an item.",
            "es": "[Essentials] Set the sell value of an item."
        }
    },
    {
        "command": "/showkit",
        "aliases": "/kitpreview, /preview, /kitshow",
        "permission": "essentials.showkit",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Show contents of a kit.",
            "es": "[Essentials] Show contents of a kit."
        }
    },
    {
        "command": "/editsign",
        "aliases": "/sign, /esign, /eeditsign",
        "permission": "essentials.editsign",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Edits a sign in the world.",
            "es": "[Essentials] Edits a sign in the world."
        }
    },
    {
        "command": "/skull",
        "aliases": "/eskull, /playerskull, /eplayerskull, /head, /ehead",
        "permission": "essentials.skull",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Set the owner of a player skull",
            "es": "[Essentials] Set the owner of a player skull"
        }
    },
    {
        "command": "/smithingtable",
        "aliases": "/esmithingtable, /smithtable, /esmithtable",
        "permission": "essentials.smithingtable",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a smithing table.",
            "es": "[Essentials] Opens up a smithing table."
        }
    },
    {
        "command": "/socialspy",
        "aliases": "/esocialspy",
        "permission": "essentials.socialspy",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles if you can see msg/mail commands in chat.",
            "es": "[Essentials] Toggles if you can see msg/mail commands in chat."
        }
    },
    {
        "command": "/spawner",
        "aliases": "/changems, /echangems, /espawner, /mobspawner, /emobspawner",
        "permission": "essentials.spawner",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Change the mob type of a spawner.",
            "es": "[Essentials] Change the mob type of a spawner."
        }
    },
    {
        "command": "/spawnmob",
        "aliases": "/mob, /emob, /spawnentity, /espawnentity, /espawnmob",
        "permission": "essentials.spawnmob",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawns a mob.",
            "es": "[Essentials] Spawns a mob."
        }
    },
    {
        "command": "/speed",
        "aliases": "/flyspeed, /eflyspeed, /fspeed, /efspeed, /espeed, /walkspeed, /ewalkspeed, /wspeed, /ewspeed",
        "permission": "essentials.speed",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Change your speed limits.",
            "es": "[Essentials] Change your speed limits."
        }
    },
    {
        "command": "/stonecutter",
        "aliases": "/estonecutter",
        "permission": "essentials.stonecutter",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a stonecutter.",
            "es": "[Essentials] Opens up a stonecutter."
        }
    },
    {
        "command": "/sudo",
        "aliases": "/esudo",
        "permission": "essentials.sudo",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Make another user perform a command.",
            "es": "[Essentials] Make another user perform a command."
        }
    },
    {
        "command": "/suicide",
        "aliases": "/esuicide",
        "permission": "essentials.suicide",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Causes you to perish.",
            "es": "[Essentials] Causes you to perish."
        }
    },
    {
        "command": "/tempban",
        "aliases": "/etempban",
        "permission": "essentials.tempban",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Temporary ban a user.",
            "es": "[Essentials] Temporary ban a user."
        }
    },
    {
        "command": "/tempbanip",
        "aliases": "/etempbanip",
        "permission": "essentials.tempbanip",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Temporarily ban an IP Address.",
            "es": "[Essentials] Temporarily ban an IP Address."
        }
    },
    {
        "command": "/thunder",
        "aliases": "/ethunder",
        "permission": "essentials.thunder",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Enable/disable thunder.",
            "es": "[Essentials] Enable/disable thunder."
        }
    },
    {
        "command": "/time",
        "aliases": "/day, /eday, /night, /enight, /etime",
        "permission": "essentials.time",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Display/Change the world time. Defaults to current world.",
            "es": "[Essentials] Display/Change the world time. Defaults to current world."
        }
    },
    {
        "command": "/togglejail",
        "aliases": "/jail, /ejail, /tjail, /etjail, /etogglejail, /unjail, /eunjail",
        "permission": "essentials.togglejail",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Jails/Unjails a player, TPs them to the jail specified.",
            "es": "[Essentials] Jails/Unjails a player, TPs them to the jail specified."
        }
    },
    {
        "command": "/top",
        "aliases": "/etop",
        "permission": "essentials.top",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to the highest block at your current position.",
            "es": "[Essentials] Teleport to the highest block at your current position."
        }
    },
    {
        "command": "/tp",
        "aliases": "/tele, /etele, /teleport, /eteleport, /etp, /tp2p, /etp2p",
        "permission": "essentials.tp",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to a player.",
            "es": "[Essentials] Teleport to a player."
        }
    },
    {
        "command": "/tpaall",
        "aliases": "/etpaall",
        "permission": "essentials.tpaall",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Requests all players online to teleport to you.",
            "es": "[Essentials] Requests all players online to teleport to you."
        }
    },
    {
        "command": "/tpahere",
        "aliases": "/etpahere",
        "permission": "essentials.tpahere",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Request that the specified player teleport to you.",
            "es": "[Essentials] Request that the specified player teleport to you."
        }
    },
    {
        "command": "/tpall",
        "aliases": "/etpall",
        "permission": "essentials.tpall",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport all online players to another player.",
            "es": "[Essentials] Teleport all online players to another player."
        }
    },
    {
        "command": "/tpauto",
        "aliases": "/etpauto",
        "permission": "essentials.tpauto",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Automatically accept teleportation requests.",
            "es": "[Essentials] Automatically accept teleportation requests."
        }
    },
    {
        "command": "/tpacancel",
        "aliases": "/etpacancel",
        "permission": "essentials.tpacancel",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Cancel all outstanding teleport requests. Specify [player] to cancel requests with them.",
            "es": "[Essentials] Cancel all outstanding teleport requests. Specify [player] to cancel requests with them."
        }
    },
    {
        "command": "/tpdeny",
        "aliases": "/etpdeny, /tpno, /etpno",
        "permission": "essentials.tpdeny",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Rejects teleport requests.",
            "es": "[Essentials] Rejects teleport requests."
        }
    },
    {
        "command": "/tphere",
        "aliases": "/s, /etphere",
        "permission": "essentials.tphere",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport a player to you.",
            "es": "[Essentials] Teleport a player to you."
        }
    },
    {
        "command": "/tpo",
        "aliases": "/etpo",
        "permission": "essentials.tpo",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport override for tptoggle.",
            "es": "[Essentials] Teleport override for tptoggle."
        }
    },
    {
        "command": "/tpohere",
        "aliases": "/etpohere",
        "permission": "essentials.tpohere",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport here override for tptoggle.",
            "es": "[Essentials] Teleport here override for tptoggle."
        }
    },
    {
        "command": "/tppos",
        "aliases": "/etppos",
        "permission": "essentials.tppos",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to coordinates.",
            "es": "[Essentials] Teleport to coordinates."
        }
    },
    {
        "command": "/tpr",
        "aliases": "/etpr, /tprandom, /etprandom",
        "permission": "essentials.tpr",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport randomly.",
            "es": "[Essentials] Teleport randomly."
        }
    },
    {
        "command": "/tptoggle",
        "aliases": "/etptoggle",
        "permission": "essentials.tptoggle",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Blocks all forms of teleportation.",
            "es": "[Essentials] Blocks all forms of teleportation."
        }
    },
    {
        "command": "/tree",
        "aliases": "/etree",
        "permission": "essentials.tree",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawn a tree where you are looking.",
            "es": "[Essentials] Spawn a tree where you are looking."
        }
    },
    {
        "command": "/unban",
        "aliases": "/pardon, /eunban, /epardon",
        "permission": "essentials.unban",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Unbans the specified player.",
            "es": "[Essentials] Unbans the specified player."
        }
    },
    {
        "command": "/unbanip",
        "aliases": "/eunbanip, /pardonip, /epardonip",
        "permission": "essentials.unbanip",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Unbans the specified IP address.",
            "es": "[Essentials] Unbans the specified IP address."
        }
    },
    {
        "command": "/unlimited",
        "aliases": "/eunlimited, /ul, /unl, /eul, /eunl",
        "permission": "essentials.unlimited",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows the unlimited placing of items.",
            "es": "[Essentials] Allows the unlimited placing of items."
        }
    },
    {
        "command": "/vanish",
        "aliases": "/v, /ev, /evanish",
        "permission": "essentials.vanish",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Hide yourself from other players.",
            "es": "[Essentials] Hide yourself from other players."
        }
    },
    {
        "command": "/warpinfo",
        "aliases": "/ewarpinfo",
        "permission": "essentials.warpinfo",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Finds location information for a specified warp.",
            "es": "[Essentials] Finds location information for a specified warp."
        }
    },
    {
        "command": "/weather",
        "aliases": "/rain, /erain, /sky, /esky, /storm, /estorm, /sun, /esun, /eweather",
        "permission": "essentials.weather",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Sets the weather.",
            "es": "[Essentials] Sets the weather."
        }
    },
    {
        "command": "/whois",
        "aliases": "/ewhois",
        "permission": "essentials.whois",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Determine basic information about the specified player.",
            "es": "[Essentials] Determine basic information about the specified player."
        }
    },
    {
        "command": "/workbench",
        "aliases": "/craft, /ecraft, /wb, /ewb, /wbench, /ewbench, /eworkbench",
        "permission": "essentials.workbench",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a workbench.",
            "es": "[Essentials] Opens up a workbench."
        }
    },
    {
        "command": "/world",
        "aliases": "/eworld",
        "permission": "essentials.world",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Switch between worlds.",
            "es": "[Essentials] Switch between worlds."
        }
    },
    {
        "command": "/worth",
        "aliases": "/eprice, /price, /eworth",
        "permission": "essentials.worth",
        "category": "Core & Teleport",
        "plugin": "Essentials",
        "desc": {
            "en": "Calculates the worth of items in hand or as specified.",
            "es": "[Essentials] Calculates the worth of items in hand or as specified."
        }
    },
    {
        "command": "/setspawn",
        "aliases": "/esetspawn",
        "permission": "essentialsspawn.setspawn",
        "category": "Teleport",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Sets the spawn point to your current position.",
            "es": "[EssentialsSpawn] Sets the spawn point to your current position."
        }
    },
    {
        "command": "/elevatoradmin",
        "aliases": "/simpleelevatorsadmin, /elevatorsadmin, /elevatoradmin, /sea",
        "permission": "elevator.elevatoradmin",
        "category": "Real Estate",
        "plugin": "Elevator",
        "desc": {
            "en": "Admin elevator commands",
            "es": "[Elevator] Admin elevator commands"
        }
    },
    {
        "command": "/globalpositioningsystem",
        "aliases": "/gps",
        "permission": "gps.globalpositioningsystem",
        "category": "Communication",
        "plugin": "GPS",
        "desc": {
            "en": "GPS",
            "es": "[GPS] GPS"
        }
    },
    {
        "command": "/gpsconfigurator",
        "aliases": "/gpsconfig, /gpsconf, /gpscon, /gpsc",
        "permission": "gps.gpsconfigurator",
        "category": "Communication",
        "plugin": "GPS",
        "desc": {
            "en": "Ingame GPS configurator",
            "es": "[GPS] Ingame GPS configurator"
        }
    },
    {
        "command": "/gpsadmin",
        "aliases": "/gpsad, /gpsa",
        "permission": "gps.gpsadmin",
        "category": "Communication",
        "plugin": "GPS",
        "desc": {
            "en": "GPS Admin commands",
            "es": "[GPS] GPS Admin commands"
        }
    },
    {
        "command": "/gadgetsmenu",
        "aliases": "/gmenu",
        "permission": "gadgetsmenu.gadgetsmenu",
        "category": "Entertainment",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "GadgetsMenu main command.",
            "es": "[GadgetsMenu] GadgetsMenu main command."
        }
    },
    {
        "command": "/gmysteryboxes",
        "aliases": "/gmysterybox, /gmb",
        "permission": "gadgetsmenu.gmysteryboxes",
        "category": "Entertainment",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "GadgetsMenu mystery boxes command.",
            "es": "[GadgetsMenu] GadgetsMenu mystery boxes command."
        }
    },
    {
        "command": "/mysterydust",
        "aliases": "/dust",
        "permission": "gadgetsmenu.mysterydust",
        "category": "Entertainment",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "GadgetsMenu mystery dust command.",
            "es": "[GadgetsMenu] GadgetsMenu mystery dust command."
        }
    },
    {
        "command": "/gizmo",
        "aliases": "/g",
        "permission": "gizmo.gizmo",
        "category": "Entertainment",
        "plugin": "Gizmo",
        "desc": {
            "en": "Executes /gizmo command from Gizmo.",
            "es": "[Gizmo] Executes /gizmo command from Gizmo."
        }
    },
    {
        "command": "/imageframe",
        "aliases": "/iframe, /if, /frame",
        "permission": "imageframe.imageframe",
        "category": "Communication",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Plugin main command",
            "es": "[ImageFrame] Plugin main command"
        }
    },
    {
        "command": "/image",
        "aliases": "/customimage, /images, /img",
        "permission": "images.image",
        "category": "Communication",
        "plugin": "Images",
        "desc": {
            "en": "Manage custom images.",
            "es": "[Images] Manage custom images."
        }
    },
    {
        "command": "/adminmusic",
        "aliases": "/amusic",
        "permission": "music.command.admin",
        "category": "Entertainment",
        "plugin": "JukeBox",
        "desc": {
            "en": "Admin command for musics",
            "es": "[JukeBox] Admin command for musics"
        }
    },
    {
        "command": "/luckperms",
        "aliases": "/lp, /perm, /perms, /permission, /permissions",
        "permission": "luckperms.luckperms",
        "category": "Administration",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Manage permissions",
            "es": "[LuckPerms] Manage permissions"
        }
    },
    {
        "command": "/minetopiavehicles",
        "aliases": "/mtv, /minetopiav, /mtvehicles, /mtvehicle, /vehicle",
        "permission": "mtvehicles.minetopiavehicles",
        "category": "Vehicles",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Executes /minetopiavehicles command from MTVehicles.",
            "es": "[MTVehicles] Executes /minetopiavehicles command from MTVehicles."
        }
    },
    {
        "command": "/vehicle",
        "aliases": "-",
        "permission": "minecityfixeraddon.vehicle",
        "category": "Core & Roleplay",
        "plugin": "MinecityFixerAddon",
        "desc": {
            "en": "Obtain a physical QAV vehicle model item for decoration",
            "es": "[MinecityFixerAddon] Obtain a physical QAV vehicle model item for decoration"
        }
    },
    {
        "command": "/mycommand",
        "aliases": "-",
        "permission": "mycommand.mycommand",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Credits command.",
            "es": "[MyCommand] Credits command."
        }
    },
    {
        "command": "/mycmd",
        "aliases": "-",
        "permission": "mycommand.mycmd",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Main help and utilities",
            "es": "[MyCommand] Main help and utilities"
        }
    },
    {
        "command": "/mycmd-reload",
        "aliases": "-",
        "permission": "mycommand.reload",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Reload config files.",
            "es": "[MyCommand] Reload config files."
        }
    },
    {
        "command": "/mycmd-edit",
        "aliases": "-",
        "permission": "mycommand.edit",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "In-Game config editor.",
            "es": "[MyCommand] In-Game config editor."
        }
    },
    {
        "command": "/mycmd-runas",
        "aliases": "-",
        "permission": "mycommand.runas",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Run commands as someone else",
            "es": "[MyCommand] Run commands as someone else"
        }
    },
    {
        "command": "/mycmd-itemset",
        "aliases": "-",
        "permission": "mycommand.item.set",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Set-up commands to be run through items.",
            "es": "[MyCommand] Set-up commands to be run through items."
        }
    },
    {
        "command": "/mycmd-blockset",
        "aliases": "-",
        "permission": "mycommand.block.set",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Set-up commands to be run through blocks.",
            "es": "[MyCommand] Set-up commands to be run through blocks."
        }
    },
    {
        "command": "/mycmd-signset",
        "aliases": "-",
        "permission": "mycommand.sign.set",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Create list's who can be run through the signs.",
            "es": "[MyCommand] Create list's who can be run through the signs."
        }
    },
    {
        "command": "/mycmd-scheduler",
        "aliases": "-",
        "permission": "mycommand.scheduler",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Manage the Scheduler.",
            "es": "[MyCommand] Manage the Scheduler."
        }
    },
    {
        "command": "/mycmd-variables",
        "aliases": "-",
        "permission": "mycommand.variables",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Create and manage new variables or placeholders.",
            "es": "[MyCommand] Create and manage new variables or placeholders."
        }
    },
    {
        "command": "/mycmd-playerdata",
        "aliases": "-",
        "permission": "mycommand.playerdata",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Manage custom database for players.",
            "es": "[MyCommand] Manage custom database for players."
        }
    },
    {
        "command": "/mycmd-npcs",
        "aliases": "-",
        "permission": "mycommand.npcs",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Run commands through NPC's.",
            "es": "[MyCommand] Run commands through NPC's."
        }
    },
    {
        "command": "/emptycommand",
        "aliases": "-",
        "permission": "mycommand.emptycommand",
        "category": "Menus & Aliases",
        "plugin": "MyCommand",
        "desc": {
            "en": "Used to cancel the console event",
            "es": "[MyCommand] Used to cancel the console event"
        }
    },
    {
        "command": "/givesim",
        "aliases": "-",
        "permission": "phone.givesim",
        "category": "Communication",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Executes /givesim command from PhoneV2.",
            "es": "[PhoneV2] Executes /givesim command from PhoneV2."
        }
    },
    {
        "command": "/customsim",
        "aliases": "-",
        "permission": "phone.customsim",
        "category": "Communication",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Executes /customsim command from PhoneV2.",
            "es": "[PhoneV2] Executes /customsim command from PhoneV2."
        }
    },
    {
        "command": "/plhide",
        "aliases": "-",
        "permission": "pl-hide-free.plhide",
        "category": "Administration",
        "plugin": "Pl-Hide-Free",
        "desc": {
            "en": "Reloads the Pl-Hide Plugin",
            "es": "[Pl-Hide-Free] Reloads the Pl-Hide Plugin"
        }
    },
    {
        "command": "/placeholderapi",
        "aliases": "/papi",
        "permission": "placeholderapi.placeholderapi",
        "category": "Administration",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "PlaceholderAPI Command",
            "es": "[PlaceholderAPI] PlaceholderAPI Command"
        }
    },
    {
        "command": "/reports",
        "aliases": "-",
        "permission": "playerreport.reports",
        "category": "Administration",
        "plugin": "PlayerReport",
        "desc": {
            "en": "Displays the reports made by players.",
            "es": "[PlayerReport] Displays the reports made by players."
        }
    },
    {
        "command": "/pocketgamesadmin",
        "aliases": "/pga, /pocketa, /pocketga, /pgamesa",
        "permission": "pocketgames.admin",
        "category": "Entertainment",
        "plugin": "PocketGames",
        "desc": {
            "en": "Pocket Games Admin Commands.",
            "es": "[PocketGames] Pocket Games Admin Commands."
        }
    },
    {
        "command": "/protocol",
        "aliases": "-",
        "permission": "protocol.admin",
        "category": "Administration",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Performs administrative tasks regarding ProtocolLib.",
            "es": "[ProtocolLib] Performs administrative tasks regarding ProtocolLib."
        }
    },
    {
        "command": "/packet",
        "aliases": "-",
        "permission": "protocol.admin",
        "category": "Administration",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Add or remove a simple packet listener.",
            "es": "[ProtocolLib] Add or remove a simple packet listener."
        }
    },
    {
        "command": "/filter",
        "aliases": "/packet_filter",
        "permission": "protocol.admin",
        "category": "Administration",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Add or remove programmable filters to the packet listeners.",
            "es": "[ProtocolLib] Add or remove programmable filters to the packet listeners."
        }
    },
    {
        "command": "/packetlog",
        "aliases": "-",
        "permission": "protocol.admin",
        "category": "Administration",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Logs hex representations of packets to a file or console",
            "es": "[ProtocolLib] Logs hex representations of packets to a file or console"
        }
    },
    {
        "command": "/QualityArmory",
        "aliases": "/qa",
        "permission": "qualityarmory.QualityArmory",
        "category": "Weapons",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Main command for QA",
            "es": "[QualityArmory] Main command for QA"
        }
    },
    {
        "command": "/QualityArmoryVehicles",
        "aliases": "/qav",
        "permission": "qualityarmoryvehicles2.QualityArmoryVehicles",
        "category": "Vehicles",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "The main plugin command to manage vehicles",
            "es": "[QualityArmoryVehicles2] The main plugin command to manage vehicles"
        }
    },
    {
        "command": "/garage",
        "aliases": "-",
        "permission": "qualityarmoryvehicles2.garage",
        "category": "Vehicles",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Open the garage",
            "es": "[QualityArmoryVehicles2] Open the garage"
        }
    },
    {
        "command": "/quests",
        "aliases": "/qs",
        "permission": "quests.quests",
        "category": "Jobs",
        "plugin": "Quests",
        "desc": {
            "en": "Quests command",
            "es": "[Quests] Quests command"
        }
    },
    {
        "command": "/questadmin",
        "aliases": "/questsadmin, /qa",
        "permission": "quests.admin",
        "category": "Jobs",
        "plugin": "Quests",
        "desc": {
            "en": "Quests admin command",
            "es": "[Quests] Quests admin command"
        }
    },
    {
        "command": "/quest",
        "aliases": "/q, /job",
        "permission": "quests.quest",
        "category": "Jobs",
        "plugin": "Quests",
        "desc": {
            "en": "Quest command",
            "es": "[Quests] Quest command"
        }
    },
    {
        "command": "/score",
        "aliases": "-",
        "permission": "score.score",
        "category": "Weapons",
        "plugin": "SCore",
        "desc": {
            "en": "score command",
            "es": "[SCore] score command"
        }
    },
    {
        "command": "/salarypay",
        "aliases": "-",
        "permission": "salarymanager.pay",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Pay all online players",
            "es": "[SalaryManager] Pay all online players"
        }
    },
    {
        "command": "/salarylist",
        "aliases": "/listslary",
        "permission": "salarymanager.list",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "List salaries of groups or players",
            "es": "[SalaryManager] List salaries of groups or players"
        }
    },
    {
        "command": "/salarysetperiod",
        "aliases": "-",
        "permission": "salarymanager.setperiod",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Set the period in seconds",
            "es": "[SalaryManager] Set the period in seconds"
        }
    },
    {
        "command": "/salarynext",
        "aliases": "/payday, /nextsalary",
        "permission": "salarymanager.next",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "When is your next payday",
            "es": "[SalaryManager] When is your next payday"
        }
    },
    {
        "command": "/salaryreload",
        "aliases": "-",
        "permission": "salarymanager.reload",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Reload the config",
            "es": "[SalaryManager] Reload the config"
        }
    },
    {
        "command": "/salaryfrom",
        "aliases": "-",
        "permission": "salarymanager.from",
        "category": "Economy",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Setup an account where the money comes from",
            "es": "[SalaryManager] Setup an account where the money comes from"
        }
    },
    {
        "command": "/servertutorial",
        "aliases": "/st",
        "permission": "servertutorialplus.servertutorial",
        "category": "Jobs",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "All the servertutorial plus commands",
            "es": "[ServerTutorialPlus] All the servertutorial plus commands"
        }
    },
    {
        "command": "/ooc",
        "aliases": "-",
        "permission": "rptools.ooc",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Toggles OOC",
            "es": "[RPTools] Toggles OOC"
        }
    },
    {
        "command": "/rp",
        "aliases": "-",
        "permission": "rptools.rp",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Toggles RP",
            "es": "[RPTools] Toggles RP"
        }
    },
    {
        "command": "/acard",
        "aliases": "-",
        "permission": "rptools.acard",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "An admin command.",
            "es": "[RPTools] An admin command."
        }
    },
    {
        "command": "/w",
        "aliases": "-",
        "permission": "rptools.w",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Allows you to whisper to a nearby character.",
            "es": "[RPTools] Allows you to whisper to a nearby character."
        }
    },
    {
        "command": "/s",
        "aliases": "-",
        "permission": "rptools.s",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Allows you to shout to a nearby character.",
            "es": "[RPTools] Allows you to shout to a nearby character."
        }
    },
    {
        "command": "/graylist",
        "aliases": "-",
        "permission": "rptools.graylist",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Allows admins to graylist players.",
            "es": "[RPTools] Allows admins to graylist players."
        }
    },
    {
        "command": "/rptools",
        "aliases": "-",
        "permission": "rptools.rptools",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Starting point for players and admins.",
            "es": "[RPTools] Starting point for players and admins."
        }
    },
    {
        "command": "/discord",
        "aliases": "-",
        "permission": "rptools.discord",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Shows the servers discord link.",
            "es": "[RPTools] Shows the servers discord link."
        }
    },
    {
        "command": "/website",
        "aliases": "-",
        "permission": "rptools.website",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Shows the servers website link.",
            "es": "[RPTools] Shows the servers website link."
        }
    },
    {
        "command": "/countdown",
        "aliases": "-",
        "permission": "rptools.countdown",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Starts a countdown with a desired amount of seconds.",
            "es": "[RPTools] Starts a countdown with a desired amount of seconds."
        }
    },
    {
        "command": "/scene",
        "aliases": "-",
        "permission": "rptools.scene",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Allows for a global description of a custom scene.",
            "es": "[RPTools] Allows for a global description of a custom scene."
        }
    },
    {
        "command": "/skill",
        "aliases": "-",
        "permission": "rptools.skill",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "A set of skill commands.",
            "es": "[RPTools] A set of skill commands."
        }
    },
    {
        "command": "/enchanter",
        "aliases": "-",
        "permission": "rptools.enchanter",
        "category": "Roleplay",
        "plugin": "RPTools",
        "desc": {
            "en": "Opens the enchanting table.",
            "es": "[RPTools] Opens the enchanting table."
        }
    },
    {
        "command": "/uf",
        "aliases": "-",
        "permission": "ultimatefood.uf",
        "category": "Survival",
        "plugin": "UltimateFood",
        "desc": {
            "en": "The Ultimate Food plugin ;)",
            "es": "[UltimateFood] The Ultimate Food plugin ;)"
        }
    },
    {
        "command": "/vault-info",
        "aliases": "-",
        "permission": "vault.admin",
        "category": "Economy",
        "plugin": "Vault",
        "desc": {
            "en": "Displays information about Vault",
            "es": "[Vault] Displays information about Vault"
        }
    },
    {
        "command": "/vault-convert",
        "aliases": "-",
        "permission": "vault.admin",
        "category": "Economy",
        "plugin": "Vault",
        "desc": {
            "en": "Converts all data in economy1 and dumps it into economy2",
            "es": "[Vault] Converts all data in economy1 and dumps it into economy2"
        }
    },
    {
        "command": "/viaversion",
        "aliases": "/viaver, /vvbukkit",
        "permission": "viaversion.command # The permission is also referenced here to filter root suggestions (/via<tab>)",
        "category": "Administration",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Shows ViaVersion Version and more.",
            "es": "[ViaVersion] Shows ViaVersion Version and more."
        }
    },
    {
        "command": "/warpcfg",
        "aliases": "/warpconfig, /warpscfg, /warpsconfig",
        "permission": "essentialswarpgui.warpcfg",
        "category": "Teleport",
        "plugin": "EssentialsWarpGUI",
        "desc": {
            "en": "Modify the look-and-feel of the warps",
            "es": "[EssentialsWarpGUI] Modify the look-and-feel of the warps"
        }
    }
],

  // 113 Master Placeholders Directory (PAPI & All Plugins)
  placeholders: [
    {
        "placeholder": "%mcrppolice_stars%",
        "plugin": "MinecitySuite",
        "example": "3",
        "desc": {
            "en": "Raw integer count of player's active wanted stars (0 to 6).",
            "es": "Número entero de estrellas de búsqueda activas del jugador (0 a 6)."
        }
    },
    {
        "placeholder": "%mcrppolice_stars_colored%",
        "plugin": "MinecitySuite",
        "example": "§6★★★§8☆☆☆",
        "desc": {
            "en": "Full visual 6-star gauge with gold active stars and gray inactive stars.",
            "es": "Barra visual completa de 6 estrellas con estrellas doradas y vacías."
        }
    },
    {
        "placeholder": "%mcrppolice_stars_display%",
        "plugin": "MinecitySuite",
        "example": "★★★",
        "desc": {
            "en": "Visual display showing only the active earned stars.",
            "es": "Muestra visual únicamente de las estrellas activas obtenidas."
        }
    },
    {
        "placeholder": "%mcrppolice_max_stars%",
        "plugin": "MinecitySuite",
        "example": "6",
        "desc": {
            "en": "Maximum allowed wanted stars configured on the server (6).",
            "es": "Máximo número de estrellas configurado en el servidor (6)."
        }
    },
    {
        "placeholder": "%mcrppolice_is_wanted%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Returns Yes or No indicating if the player is actively pursued by police.",
            "es": "Devuelve Yes o No según si el jugador es buscado por la policía."
        }
    },
    {
        "placeholder": "%mcrppolice_wanted_status%",
        "plugin": "MinecitySuite",
        "example": "§c§lWANTED (3★)",
        "desc": {
            "en": "Formatted red bold wanted banner suitable for scoreboard HUDs.",
            "es": "Texto formateado en rojo y negrita ideal para el scoreboard."
        }
    },
    {
        "placeholder": "%mcrppolice_is_jailed%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Boolean indicating whether the player is currently serving a prison sentence.",
            "es": "Indica si el jugador se encuentra actualmente preso en la cárcel."
        }
    },
    {
        "placeholder": "%mcrppolice_jail_time_formatted%",
        "plugin": "MinecitySuite",
        "example": "04m 32s",
        "desc": {
            "en": "Remaining jail sentence formatted in minutes and seconds.",
            "es": "Tiempo restante de condena en prisión formateado en minutos y segundos."
        }
    },
    {
        "placeholder": "%mcrppolice_is_police%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Checks if the player is an authorized law enforcement officer.",
            "es": "Comprueba si el jugador es un agente de policía oficial."
        }
    },
    {
        "placeholder": "%mcrpparamedic_is_paramedic%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Checks if the player belongs to the emergency medical rescue service.",
            "es": "Comprueba si el jugador forma parte del cuerpo de paramédicos."
        }
    },
    {
        "placeholder": "%mcrpparamedic_is_on_duty%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Boolean indicating if the paramedic is clocked in and active on duty.",
            "es": "Indica si el paramédico está de servicio activo para recibir emergencias."
        }
    },
    {
        "placeholder": "%mcrpparamedic_is_sick%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Indicates if the player is infected with a contagious disease or fracture.",
            "es": "Indica si el jugador tiene alguna enfermedad, sangrado o fractura."
        }
    },
    {
        "placeholder": "%mcrpparamedic_disease_formatted%",
        "plugin": "MinecitySuite",
        "example": "§cBroken Leg",
        "desc": {
            "en": "Name of active disease (Stomach Ache, Broken Leg, Sepsis) formatted with color.",
            "es": "Nombre coloreado de la enfermedad que padece el paciente."
        }
    },
    {
        "placeholder": "%mcrpparamedic_is_downed%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Indicates if the player is in the 60-second crawling incapacitated state.",
            "es": "Indica si el jugador está inconsciente en el suelo esperando reanimación."
        }
    },
    {
        "placeholder": "%mcrpparamedic_downed_seconds%",
        "plugin": "MinecitySuite",
        "example": "42",
        "desc": {
            "en": "Countdown seconds remaining before the downed player bleeds out permanently.",
            "es": "Segundos restantes de reanimación antes de que el jugador muera."
        }
    },
    {
        "placeholder": "%mcrpparamedic_active_calls%",
        "plugin": "MinecitySuite",
        "example": "2",
        "desc": {
            "en": "Number of outstanding 911 medical emergency calls waiting for EMS.",
            "es": "Número de llamadas de emergencia 911 activas esperando respuesta médica."
        }
    },
    {
        "placeholder": "%mcrpsurvival_hydration%",
        "plugin": "MinecitySuite",
        "example": "85.0",
        "desc": {
            "en": "Current hydration decimal percentage (0.0% to 100.0%).",
            "es": "Porcentaje decimal exacto de hidratación del jugador (0.0% a 100.0%)."
        }
    },
    {
        "placeholder": "%mcrpsurvival_hydration_percentage%",
        "plugin": "MinecitySuite",
        "example": "85%",
        "desc": {
            "en": "Rounded hydration percentage with percent sign.",
            "es": "Porcentaje redondeado de hidratación con símbolo %."
        }
    },
    {
        "placeholder": "%mcrpsurvival_hydration_bar%",
        "plugin": "MinecitySuite",
        "example": "■■■■■■■■□□",
        "desc": {
            "en": "Visual 10-segment water hydration bar for actionbars and scoreboards.",
            "es": "Barra visual de 10 segmentos de agua para actionbar o HUD."
        }
    },
    {
        "placeholder": "%mcrpsurvival_is_dehydrated%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Returns true when hydration drops to 0%, triggering damage ticks.",
            "es": "Indica si el jugador está al 0% de hidratación sufriendo deshidratación severa."
        }
    },
    {
        "placeholder": "%mcrpsurvival_is_starving%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Returns true when hunger reaches 0%, triggering collapse damage.",
            "es": "Indica si el jugador está famélico al 0% de comida sufriendo daño."
        }
    },
    {
        "placeholder": "%vault_eco_balance%",
        "plugin": "Vault & Essentials",
        "example": "15420.50",
        "desc": {
            "en": "Player's total active cash balance in their pocket/wallet.",
            "es": "Balance total de dinero en efectivo que lleva el jugador encima."
        }
    },
    {
        "placeholder": "%vault_eco_balance_formatted%",
        "plugin": "Vault & Essentials",
        "example": "$15,420.50",
        "desc": {
            "en": "Formatted wallet balance with dollar symbol and commas.",
            "es": "Saldo en efectivo con símbolo de dólar y separador de miles."
        }
    },
    {
        "placeholder": "%vault_prefix%",
        "plugin": "Vault & LuckPerms",
        "example": "§7[Citizen] ",
        "desc": {
            "en": "Primary group chat/tab prefix assigned by permissions.",
            "es": "Prefijo principal asignado al jugador por su rango en LuckPerms."
        }
    },
    {
        "placeholder": "%vault_suffix%",
        "plugin": "Vault & LuckPerms",
        "example": "§f",
        "desc": {
            "en": "Primary group suffix assigned by permissions.",
            "es": "Sufijo del rango de permisos del jugador."
        }
    },
    {
        "placeholder": "%vault_group%",
        "plugin": "Vault & LuckPerms",
        "example": "citizen",
        "desc": {
            "en": "Primary LuckPerms permission group name.",
            "es": "Nombre del grupo de permisos principal del jugador."
        }
    },
    {
        "placeholder": "%bank_balance%",
        "plugin": "Bank Lite",
        "example": "150000.00",
        "desc": {
            "en": "Total savings securely deposited in the city bank account.",
            "es": "Total de dinero seguro depositado en la cuenta de ahorros del banco."
        }
    },
    {
        "placeholder": "%bank_items_count_<material>%",
        "plugin": "Bank Lite",
        "example": "12",
        "desc": {
            "en": "Count of physical bullion or items stored inside safe deposit boxes.",
            "es": "Cantidad de lingotes o items guardados en la caja fuerte del banco."
        }
    },
    {
        "placeholder": "%salarymanager_salary%",
        "plugin": "SalaryManager",
        "example": "$500",
        "desc": {
            "en": "Amount of cash earned per paycheck in your current job.",
            "es": "Monto de dinero a recibir en el próximo cheque salarial de tu empleo."
        }
    },
    {
        "placeholder": "%salarymanager_time_remaining%",
        "plugin": "SalaryManager",
        "example": "14m 20s",
        "desc": {
            "en": "Countdown time until the next municipal payroll payout.",
            "es": "Tiempo restante para el cobro automático de la próxima nómina."
        }
    },
    {
        "placeholder": "%arm_region%",
        "plugin": "AdvancedRegionMarket",
        "example": "Apartment_4B",
        "desc": {
            "en": "Identifier of the property region the player is currently standing inside.",
            "es": "Identificador de la propiedad o apartamento donde está parado el jugador."
        }
    },
    {
        "placeholder": "%arm_price%",
        "plugin": "AdvancedRegionMarket",
        "example": "2500",
        "desc": {
            "en": "Rental or purchase price of the current property region.",
            "es": "Precio de venta o costo de alquiler de la propiedad actual."
        }
    },
    {
        "placeholder": "%arm_renttime%",
        "plugin": "AdvancedRegionMarket",
        "example": "6d 12h",
        "desc": {
            "en": "Remaining rental duration before the property lease expires.",
            "es": "Tiempo de alquiler restante antes de que venza el contrato."
        }
    },
    {
        "placeholder": "%arm_owner%",
        "plugin": "AdvancedRegionMarket",
        "example": "AlexRider",
        "desc": {
            "en": "Name of the citizen who currently owns or leases the property.",
            "es": "Nombre del ciudadano que posee o alquila actualmente la propiedad."
        }
    },
    {
        "placeholder": "%mtv_vehicle_name%",
        "plugin": "MTVehicles",
        "example": "Ferrari 488",
        "desc": {
            "en": "Name of the vehicle the player is currently operating.",
            "es": "Nombre del vehículo en el que se encuentra subido el jugador."
        }
    },
    {
        "placeholder": "%mtv_vehicle_licensePlate%",
        "plugin": "MTVehicles",
        "example": "LS-492-RP",
        "desc": {
            "en": "Official state vehicle registration license plate.",
            "es": "Matrícula oficial de registro vehicular emitida por el estado."
        }
    },
    {
        "placeholder": "%mtv_vehicle_fuel%",
        "plugin": "MTVehicles",
        "example": "78.5 %",
        "desc": {
            "en": "Current gas tank fuel percentage.",
            "es": "Porcentaje actual de combustible en el tanque de gasolina."
        }
    },
    {
        "placeholder": "%mtv_vehicle_speed%",
        "plugin": "MTVehicles",
        "example": "85.4 blocks/sec",
        "desc": {
            "en": "Real-time velocity speed of the vehicle.",
            "es": "Velocidad en tiempo real del vehículo en bloques por segundo."
        }
    },
    {
        "placeholder": "%gang_name%",
        "plugin": "ExcellentGangs",
        "example": "Ballas 104",
        "desc": {
            "en": "Name of the street gang the player belongs to.",
            "es": "Nombre de la pandilla callejera a la que pertenece el jugador."
        }
    },
    {
        "placeholder": "%gang_level_name%",
        "plugin": "ExcellentGangs",
        "example": "Tier 3 Syndicate",
        "desc": {
            "en": "Gang level name reflecting territorial influence and unlocked perks.",
            "es": "Nivel de la pandilla según su influencia territorial y mejoras."
        }
    },
    {
        "placeholder": "%gang_vault_size%",
        "plugin": "ExcellentGangs",
        "example": "54",
        "desc": {
            "en": "Slot capacity of the shared gang contraband storage vault.",
            "es": "Capacidad de ranuras del baúl de contrabando de la banda."
        }
    },
    {
        "placeholder": "%clanplus_clan_name%",
        "plugin": "ClansPlus",
        "example": "Corleone Family",
        "desc": {
            "en": "Name of the player's crime family or syndicate clan.",
            "es": "Nombre de la familia criminal o clan del jugador."
        }
    },
    {
        "placeholder": "%clanplus_player_rank%",
        "plugin": "ClansPlus",
        "example": "Caporegime",
        "desc": {
            "en": "Player's official rank inside the crime family hierarchy.",
            "es": "Rango oficial del jugador en la jerarquía de la familia criminal."
        }
    },
    {
        "placeholder": "%clanplus_clan_warpoint%",
        "plugin": "ClansPlus",
        "example": "1450",
        "desc": {
            "en": "Warpoints scored by the clan during turf skirmishes and battles.",
            "es": "Puntos de guerra acumulados en enfrentamientos por el control de zonas."
        }
    },
    {
        "placeholder": "%phone_number%",
        "plugin": "PhoneV2",
        "example": "555-0194",
        "desc": {
            "en": "Player's personal assigned mobile phone number.",
            "es": "Número de teléfono celular personal asignado al jugador."
        }
    },
    {
        "placeholder": "%phone_battery%",
        "plugin": "PhoneV2",
        "example": "92%",
        "desc": {
            "en": "Smartphone battery charge percentage.",
            "es": "Porcentaje de batería restante del smartphone."
        }
    },
    {
        "placeholder": "%autorank_local_time%",
        "plugin": "Autorank",
        "example": "18h 45m",
        "desc": {
            "en": "Total time played in the city by the player.",
            "es": "Tiempo total acumulado jugado en la ciudad por el usuario."
        }
    },
    {
        "placeholder": "%autorank_current_rank%",
        "plugin": "Autorank",
        "example": "Resident Citizen",
        "desc": {
            "en": "Current unlocked citizenship civil rank.",
            "es": "Rango de ciudadanía actual desbloqueado en la ciudad."
        }
    },
    {
        "placeholder": "%autorank_next_rank%",
        "plugin": "Autorank",
        "example": "Elite Citizen",
        "desc": {
            "en": "Next citizenship rank in the progression tree.",
            "es": "Siguiente rango cívico en el árbol de progresión."
        }
    },
    {
        "placeholder": "%quests_player_quest_points%",
        "plugin": "Quests",
        "example": "125",
        "desc": {
            "en": "Total quest reputation points earned from municipal delivery jobs.",
            "es": "Puntos de reputación obtenidos completando trabajos y misiones."
        }
    },
    {
        "placeholder": "%quests_player_has_journal%",
        "plugin": "Quests",
        "example": "true / false",
        "desc": {
            "en": "Indicates if the player carries their official mission ledger.",
            "es": "Indica si el jugador tiene su cuaderno de misiones y entregas."
        }
    },
    {
        "placeholder": "%emf_competition_time_left%",
        "plugin": "EvenMoreFish",
        "example": "03m 45s",
        "desc": {
            "en": "Time remaining in the current active marina fishing tournament.",
            "es": "Tiempo restante en el torneo de pesca deportiva de la marina."
        }
    },
    {
        "placeholder": "%emf_competition_place_1_player%",
        "plugin": "EvenMoreFish",
        "example": "CaptainDan",
        "desc": {
            "en": "Current first-place leader in the active fishing contest.",
            "es": "Jugador que va en primer lugar en el torneo de pesca actual."
        }
    },
    {
        "placeholder": "%blockball_player_teamDisplayName%",
        "plugin": "BlockBall",
        "example": "Red Strikers",
        "desc": {
            "en": "Display name of the soccer team the player is currently playing for.",
            "es": "Nombre del equipo de fútbol en el que juega actualmente el usuario."
        }
    },
    {
        "placeholder": "%crate_effective_cooldown%",
        "plugin": "ExcellentCrates",
        "example": "01h 30m",
        "desc": {
            "en": "Cooldown time remaining before claiming the next free reward crate.",
            "es": "Tiempo de espera para abrir la siguiente caja de recompensas gratis."
        }
    },
    {
        "placeholder": "%auctionhouse_active_listings%",
        "plugin": "AuctionHouse",
        "example": "4",
        "desc": {
            "en": "Number of active auctions currently listed by the player.",
            "es": "Número de artículos puestos a la venta por el jugador en subastas."
        }
    },
    {
        "placeholder": "%tab_tabprefix%",
        "plugin": "TAB",
        "example": "§9[Police] ",
        "desc": {
            "en": "Full formatted player prefix in the tablist.",
            "es": "Prefijo formateado del jugador en la lista de jugadores (Tab)."
        }
    },
    {
        "placeholder": "%tab_scoreboard_name%",
        "plugin": "TAB",
        "example": "scoreboard-1.20.3+",
        "desc": {
            "en": "Identifier of the active scoreboard layout being rendered.",
            "es": "Identificador del diseño de scoreboard activo que se muestra."
        }
    },
    {
        "placeholder": "%worldguard_region_name%",
        "plugin": "WorldGuard",
        "example": "City_Downtown_Bank",
        "desc": {
            "en": "Name of the WorldGuard region the player is currently located in.",
            "es": "Nombre de la zona protegida de WorldGuard donde está el jugador."
        }
    },
    {
        "placeholder": "%localtime_time%",
        "plugin": "LocalTime",
        "example": "18:04",
        "desc": {
            "en": "Real server clock time formatted in 24-hour format.",
            "es": "Hora local real del servidor en formato de 24 horas."
        }
    },
    {
        "placeholder": "%server_tps_1_colored%",
        "plugin": "PlaceholderAPI",
        "example": "§a20.0",
        "desc": {
            "en": "Server tick-rate performance indicator colored green/yellow/red.",
            "es": "Rendimiento de TPS del servidor coloreado en verde, amarillo o rojo."
        }
    },
    {
        "placeholder": "%server_online%",
        "plugin": "PlaceholderAPI",
        "example": "48",
        "desc": {
            "en": "Current count of online citizens connected to Minecity.",
            "es": "Cantidad actual de ciudadanos conectados en línea en el servidor."
        }
    },
    {
        "placeholder": "%server_uptime%",
        "plugin": "PlaceholderAPI",
        "example": "2d 14h 12m",
        "desc": {
            "en": "Time elapsed since the last server startup.",
            "es": "Tiempo transcurrido desde el último reinicio del servidor."
        }
    },
    {
        "placeholder": "%player_name%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "AlexPlayer",
        "desc": {
            "en": "Player's exact Minecraft username.",
            "es": "Nombre de usuario exacto del jugador."
        }
    },
    {
        "placeholder": "%player_displayname%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "§9[Police] §fAlex",
        "desc": {
            "en": "Player's display name including prefix/nickname.",
            "es": "Nombre mostrado incluyendo prefijo y apodo."
        }
    },
    {
        "placeholder": "%player_uuid%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "550e8400-e29b...",
        "desc": {
            "en": "Player's unique UUID string.",
            "es": "Identificador único UUID del jugador."
        }
    },
    {
        "placeholder": "%player_health%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "20",
        "desc": {
            "en": "Current player health points (0 to 20).",
            "es": "Puntos de vida actuales del jugador (0 a 20)."
        }
    },
    {
        "placeholder": "%player_max_health%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "20",
        "desc": {
            "en": "Player's maximum health points.",
            "es": "Vida máxima actual del jugador."
        }
    },
    {
        "placeholder": "%player_food_level%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "20",
        "desc": {
            "en": "Vanilla hunger level (0 to 20).",
            "es": "Nivel de hambre actual (0 a 20)."
        }
    },
    {
        "placeholder": "%player_ping%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "34",
        "desc": {
            "en": "Network connection latency in milliseconds.",
            "es": "Latencia de conexión en milisegundos (ms)."
        }
    },
    {
        "placeholder": "%player_colored_ping%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "§a34ms",
        "desc": {
            "en": "Ping colored green/yellow/red based on quality.",
            "es": "Ping coloreado en verde/amarillo/rojo según calidad."
        }
    },
    {
        "placeholder": "%player_world%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "Minecity",
        "desc": {
            "en": "Name of the world the player is currently in.",
            "es": "Nombre del mundo en el que se encuentra el jugador."
        }
    },
    {
        "placeholder": "%player_x%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "1024",
        "desc": {
            "en": "Current X block coordinate.",
            "es": "Coordenada espacial X del jugador."
        }
    },
    {
        "placeholder": "%player_y%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "64",
        "desc": {
            "en": "Current Y altitude coordinate.",
            "es": "Coordenada de altura Y del jugador."
        }
    },
    {
        "placeholder": "%player_z%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "-482",
        "desc": {
            "en": "Current Z block coordinate.",
            "es": "Coordenada espacial Z del jugador."
        }
    },
    {
        "placeholder": "%player_level%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "12",
        "desc": {
            "en": "Player experience level.",
            "es": "Nivel de experiencia del jugador."
        }
    },
    {
        "placeholder": "%player_gamemode%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "SURVIVAL",
        "desc": {
            "en": "Player's active Minecraft gamemode.",
            "es": "Modo de juego actual del jugador."
        }
    },
    {
        "placeholder": "%player_ip%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "127.0.0.1",
        "desc": {
            "en": "Player's connection IP address (Admin only).",
            "es": "Dirección IP de conexión (Solo Admins)."
        }
    },
    {
        "placeholder": "%server_name%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "Minecity RP",
        "desc": {
            "en": "Configured server name.",
            "es": "Nombre configurado del servidor."
        }
    },
    {
        "placeholder": "%server_max_players%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "250",
        "desc": {
            "en": "Maximum server player slot limit.",
            "es": "Límite máximo de jugadores del servidor."
        }
    },
    {
        "placeholder": "%server_ram_used%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "6144",
        "desc": {
            "en": "Server JVM RAM memory currently used (MB).",
            "es": "Memoria RAM utilizada actualmente (MB)."
        }
    },
    {
        "placeholder": "%server_ram_max%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "16384",
        "desc": {
            "en": "Maximum allocated JVM RAM memory (MB).",
            "es": "Memoria RAM máxima asignada al servidor (MB)."
        }
    },
    {
        "placeholder": "%server_tps_1%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "20.0",
        "desc": {
            "en": "1-minute average server TPS.",
            "es": "TPS promedio del servidor en el último minuto."
        }
    },
    {
        "placeholder": "%server_tps_5%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "19.98",
        "desc": {
            "en": "5-minute average server TPS.",
            "es": "TPS promedio en los últimos 5 minutos."
        }
    },
    {
        "placeholder": "%server_tps_15%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "19.95",
        "desc": {
            "en": "15-minute average server TPS.",
            "es": "TPS promedio en los últimos 15 minutos."
        }
    },
    {
        "placeholder": "%server_unique_joins%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "14520",
        "desc": {
            "en": "Total unique citizens who have joined since launch.",
            "es": "Total de jugadores únicos históricos registrados."
        }
    },
    {
        "placeholder": "%luckperms_prefix%",
        "plugin": "LuckPerms",
        "example": "§7[Citizen] ",
        "desc": {
            "en": "Player's active chat/tab prefix from LuckPerms.",
            "es": "Prefijo activo asignado en LuckPerms."
        }
    },
    {
        "placeholder": "%luckperms_suffix%",
        "plugin": "LuckPerms",
        "example": " §6[VIP]",
        "desc": {
            "en": "Player's active suffix from LuckPerms.",
            "es": "Sufijo activo asignado en LuckPerms."
        }
    },
    {
        "placeholder": "%luckperms_primary_group_name%",
        "plugin": "LuckPerms",
        "example": "citizen",
        "desc": {
            "en": "Primary group name of the player.",
            "es": "Nombre del grupo de rango primario."
        }
    },
    {
        "placeholder": "%luckperms_highest_group_by_weight%",
        "plugin": "LuckPerms",
        "example": "police",
        "desc": {
            "en": "Highest weighted permission group inherited.",
            "es": "Rango de mayor peso jerárquico heredado."
        }
    },
    {
        "placeholder": "%luckperms_in_group_<group>%",
        "plugin": "LuckPerms",
        "example": "yes / no",
        "desc": {
            "en": "Checks if player is directly in a specific group.",
            "es": "Comprueba si el usuario pertenece al grupo indicado."
        }
    },
    {
        "placeholder": "%luckperms_inherits_group_<group>%",
        "plugin": "LuckPerms",
        "example": "yes / no",
        "desc": {
            "en": "Checks if player inherits a specific rank group.",
            "es": "Comprueba si el usuario hereda permisos del grupo."
        }
    },
    {
        "placeholder": "%luckperms_check_permission_<perm>%",
        "plugin": "LuckPerms",
        "example": "yes / no",
        "desc": {
            "en": "Checks whether player holds a specific permission node.",
            "es": "Evalúa si el jugador tiene un nodo de permiso."
        }
    },
    {
        "placeholder": "%essentials_nickname%",
        "plugin": "EssentialsX",
        "example": "~MayorBob",
        "desc": {
            "en": "Player's custom roleplay nickname.",
            "es": "Apodo personalizado de rol en Essentials."
        }
    },
    {
        "placeholder": "%essentials_vanished%",
        "plugin": "EssentialsX",
        "example": "no",
        "desc": {
            "en": "Indicates whether staff member is currently vanished.",
            "es": "Indica si un miembro del staff está oculto (vanish)."
        }
    },
    {
        "placeholder": "%essentials_afk%",
        "plugin": "EssentialsX",
        "example": "no",
        "desc": {
            "en": "Indicates whether citizen is currently AFK.",
            "es": "Indica si el ciudadano está ausente (AFK)."
        }
    },
    {
        "placeholder": "%essentials_afk_player_count%",
        "plugin": "EssentialsX",
        "example": "3",
        "desc": {
            "en": "Total count of currently AFK players.",
            "es": "Cantidad de jugadores actualmente ausentes."
        }
    },
    {
        "placeholder": "%essentials_homes_set%",
        "plugin": "EssentialsX",
        "example": "2",
        "desc": {
            "en": "Number of homes registered by the player.",
            "es": "Número de casas o departamentos guardados."
        }
    },
    {
        "placeholder": "%essentials_homes_max%",
        "plugin": "EssentialsX",
        "example": "5",
        "desc": {
            "en": "Maximum allowed homes for player's rank.",
            "es": "Límite máximo de hogares permitidos para su rango."
        }
    },
    {
        "placeholder": "%essentials_kit_is_available_<kit>%",
        "plugin": "EssentialsX",
        "example": "yes / no",
        "desc": {
            "en": "Checks if a kit cooldown is ready to be claimed.",
            "es": "Comprueba si el kit está disponible para reclamar."
        }
    },
    {
        "placeholder": "%essentials_jailed_time_remaining%",
        "plugin": "EssentialsX",
        "example": "4m 10s",
        "desc": {
            "en": "Remaining Essentials jail sentence time.",
            "es": "Tiempo restante de condena en prisión Essentials."
        }
    },
    {
        "placeholder": "%skillapi_level%",
        "plugin": "ProSkillAPI",
        "example": "14",
        "desc": {
            "en": "Player's active RPG profession level.",
            "es": "Nivel actual de la profesión RPG del personaje."
        }
    },
    {
        "placeholder": "%skillapi_points%",
        "plugin": "ProSkillAPI",
        "example": "5",
        "desc": {
            "en": "Unspent skill points available to upgrade perks.",
            "es": "Puntos de habilidad disponibles para gastar."
        }
    },
    {
        "placeholder": "%skillapi_max_mana%",
        "plugin": "ProSkillAPI",
        "example": "100",
        "desc": {
            "en": "Maximum stamina/mana pool capacity.",
            "es": "Capacidad máxima de energía o estamina."
        }
    },
    {
        "placeholder": "%skillapi_attribute_points%",
        "plugin": "ProSkillAPI",
        "example": "3",
        "desc": {
            "en": "Available character attribute points.",
            "es": "Puntos de atributo de personaje disponibles."
        }
    },
    {
        "placeholder": "%key_balance%",
        "plugin": "ExcellentCrates",
        "example": "4",
        "desc": {
            "en": "Total crate keys carried by the player.",
            "es": "Cantidad de llaves de cajas que posee el usuario."
        }
    },
    {
        "placeholder": "%crate_milestones_repeatable%",
        "plugin": "ExcellentCrates",
        "example": "12",
        "desc": {
            "en": "Count of crate opening milestone rewards reached.",
            "es": "Progreso acumulado de recompensas por abrir cajas."
        }
    },
    {
        "placeholder": "%therewards_player_available_rewards%",
        "plugin": "TheRewards",
        "example": "2",
        "desc": {
            "en": "Number of unclaimed daily/playtime rewards ready.",
            "es": "Cantidad de recompensas diarias listas para reclamar."
        }
    },
    {
        "placeholder": "%gsit_is_sitting%",
        "plugin": "GSit",
        "example": "true / false",
        "desc": {
            "en": "Indicates if player is sitting down.",
            "es": "Indica si el jugador se encuentra sentado."
        }
    },
    {
        "placeholder": "%gsit_is_crawling%",
        "plugin": "GSit",
        "example": "true / false",
        "desc": {
            "en": "Indicates if player is crawling.",
            "es": "Indica si el jugador está arrastrándose por el suelo."
        }
    },
    {
        "placeholder": "%citizens_selected_npc_name%",
        "plugin": "Citizens",
        "example": "Officer Jenkins",
        "desc": {
            "en": "Name of currently selected NPC.",
            "es": "Nombre del NPC seleccionado actualmente."
        }
    },
    {
        "placeholder": "%citizens_nearest_npc_id%",
        "plugin": "Citizens",
        "example": "42",
        "desc": {
            "en": "ID number of nearest NPC entity.",
            "es": "ID numérico del NPC más cercano al jugador."
        }
    },
    {
        "placeholder": "%jukebox_active_title%",
        "plugin": "JukeBox",
        "example": "Los Santos FM",
        "desc": {
            "en": "Name of currently playing radio music track.",
            "es": "Título de la pista musical o radio reproduciéndose."
        }
    }
],

  // 363 Master Permissions Matrix (LuckPerms & All Plugins)
  permissions: [
    {
        "node": "minecity.player",
        "group": "default",
        "defaultState": "True",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Base access to citizen ID card, roleplay chat, survival stats, and phone.",
            "es": "Acceso base a DNI, chat de rol, estadísticas de supervivencia y teléfono."
        }
    },
    {
        "node": "minecity.apartments",
        "group": "default",
        "defaultState": "True",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows browsing, renting apartments, and purchasing houses.",
            "es": "Permite ver el catálogo, alquilar apartamentos y comprar casas."
        }
    },
    {
        "node": "minecity.pets",
        "group": "default",
        "defaultState": "True",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows adopting, naming, and feeding Tamagotchi companion pets.",
            "es": "Permite adoptar, nombrar y cuidar mascotas de compañía."
        }
    },
    {
        "node": "minecity.survival",
        "group": "default",
        "defaultState": "True",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access to check personal hydration, hunger, and fatigue status.",
            "es": "Permite consultar niveles de sed, hambre y estado físico."
        }
    },
    {
        "node": "arm.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows clicking ARM signs to rent or buy property regions.",
            "es": "Permite interactuar con carteles de ARM para alquilar o comprar."
        }
    },
    {
        "node": "bank.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "Bank Lite",
        "desc": {
            "en": "Access to ATM banking interfaces, cash deposits, and withdrawals.",
            "es": "Permite usar cajeros automáticos, depositar y retirar dinero."
        }
    },
    {
        "node": "auctionhouse.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Allows viewing and bidding on items in the player auction house.",
            "es": "Permite consultar y pujar por artículos en la casa de subastas."
        }
    },
    {
        "node": "auctionhouse.sell",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Allows listing owned items for sale on the auction market.",
            "es": "Permite publicar artículos propios a la venta en el mercado."
        }
    },
    {
        "node": "phone.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Access to operate the personal smartphone, dial numbers, and send SMS.",
            "es": "Permite usar el smartphone para llamar, enviar mensajes y ver contactos."
        }
    },
    {
        "node": "gps.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "GPS",
        "desc": {
            "en": "Enables turn-by-turn particle road guidance across city streets.",
            "es": "Permite activar rutas de navegación con partículas por la ciudad."
        }
    },
    {
        "node": "koyarobbery.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Allows joining robbery crews and attempting bank/store holdups.",
            "es": "Permite participar en asaltos y robos organizados con un equipo."
        }
    },
    {
        "node": "excellentgangs.player",
        "group": "default",
        "defaultState": "True",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Allows joining street gangs, accessing gang chat, and gang vaults.",
            "es": "Permite unirse a bandas, usar el chat de pandilla y su baúl."
        }
    },
    {
        "node": "clansplus.player",
        "group": "default",
        "defaultState": "True",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Allows joining crime syndicates, participating in wars, and scoring.",
            "es": "Permite formar parte de familias criminales y participar en guerras."
        }
    },
    {
        "node": "drugs.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "Drugs",
        "desc": {
            "en": "Allows harvesting, brewing, consuming, and dealing contraband drugs.",
            "es": "Permite cosechar, fabricar, consumir y comerciar sustancias ilegales."
        }
    },
    {
        "node": "qualityarmory.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Allows firing, reloading, and maintaining 3D firearms.",
            "es": "Permite disparar, recargar y usar armas de fuego 3D."
        }
    },
    {
        "node": "qualityarmory.craft",
        "group": "default",
        "defaultState": "True",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Allows crafting ammo magazines and attachments on weapon workbenches.",
            "es": "Permite fabricar munición y cargadores en bancos de trabajo."
        }
    },
    {
        "node": "mtvehicles.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Allows operating personal sports cars, motorbikes, and helicopters.",
            "es": "Permite conducir vehículos deportivos, motos y volar helicópteros."
        }
    },
    {
        "node": "mtvehicles.refuel",
        "group": "default",
        "defaultState": "True",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Allows purchasing fuel at gas stations and filling vehicle tanks.",
            "es": "Permite abastecer combustible en gasolineras o con bidones."
        }
    },
    {
        "node": "quests.quest",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "Allows accepting and completing civilian job delivery contracts.",
            "es": "Permite aceptar y completar encargos y contratos laborales."
        }
    },
    {
        "node": "autorank.check",
        "group": "default",
        "defaultState": "True",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows checking personal civic rank progression requirements.",
            "es": "Permite revisar horas jugadas y requisitos de ascenso civil."
        }
    },
    {
        "node": "gsit.sit",
        "group": "default",
        "defaultState": "True",
        "plugin": "GSit",
        "desc": {
            "en": "Allows sitting down on stairs, benches, chairs, and rugs.",
            "es": "Permite sentarse en escaleras, bancos, sillas y alfombras."
        }
    },
    {
        "node": "gsit.lay",
        "group": "default",
        "defaultState": "True",
        "plugin": "GSit",
        "desc": {
            "en": "Allows laying down on beds or flat pavement surfaces.",
            "es": "Permite recostarse en camas o en el suelo."
        }
    },
    {
        "node": "gsit.crawl",
        "group": "default",
        "defaultState": "True",
        "plugin": "GSit",
        "desc": {
            "en": "Allows crawling through narrow 1-block shafts and tunnels.",
            "es": "Permite arrastrarse por huecos de un bloque de altura."
        }
    },
    {
        "node": "roulette.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "Roulette",
        "desc": {
            "en": "Allows placing chip bets on casino roulette tables.",
            "es": "Permite apostar fichas en las mesas de ruleta del casino."
        }
    },
    {
        "node": "videopoker.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "VideoPoker",
        "desc": {
            "en": "Allows playing video poker terminals in casino lounges.",
            "es": "Permite jugar en terminales de video póker."
        }
    },
    {
        "node": "lottery.buy",
        "group": "default",
        "defaultState": "True",
        "plugin": "Lottery",
        "desc": {
            "en": "Allows purchasing lottery jackpot tickets at convenience stores.",
            "es": "Permite comprar billetes de lotería en tiendas de conveniencia."
        }
    },
    {
        "node": "blockball.user",
        "group": "default",
        "defaultState": "True",
        "plugin": "BlockBall",
        "desc": {
            "en": "Allows joining soccer games and kicking the ball in city stadiums.",
            "es": "Permite jugar al fútbol y patear el balón en el estadio."
        }
    },
    {
        "node": "gameboy.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "Gameboy",
        "desc": {
            "en": "Allows playing on handheld GameBoy consoles in game maps.",
            "es": "Permite jugar en consolas GameBoy dentro del juego."
        }
    },
    {
        "node": "pocketgames.play",
        "group": "default",
        "defaultState": "True",
        "plugin": "PocketGames",
        "desc": {
            "en": "Allows playing Snake, Flappy Bird, and 2048 in GUI menus.",
            "es": "Permite jugar a minijuegos arcade desde la interfaz."
        }
    },
    {
        "node": "music.command",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows selecting radio stations and jukebox music tracks.",
            "es": "Permite elegir estaciones de radio y pistas musicales en clubes."
        }
    },
    {
        "node": "evenmorefish.player",
        "group": "default",
        "defaultState": "True",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Allows catching custom fish species and entering tournaments.",
            "es": "Permite pescar peces especiales y participar en competencias."
        }
    },
    {
        "node": "playerkits.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Allows claiming civilian starter and daily supply kits.",
            "es": "Permite reclamar kits de inicio y raciones diarias de ciudadano."
        }
    },
    {
        "node": "therewards.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "TheRewards",
        "desc": {
            "en": "Allows claiming daily login streak vouchers and playtime rewards.",
            "es": "Permite reclamar recompensas diarias por racha de conexión."
        }
    },
    {
        "node": "essentials.spawn",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Allows teleporting to the airport arrivals safezone spawn point.",
            "es": "Permite volver al punto de spawn del aeropuerto en zona segura."
        }
    },
    {
        "node": "essentials.home",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Allows teleporting to your registered private home location.",
            "es": "Permite teletransportarse a la vivienda registrada."
        }
    },
    {
        "node": "essentials.sethome",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Allows setting a home point inside owned apartment regions.",
            "es": "Permite fijar un punto de casa en un apartamento propio."
        }
    },
    {
        "node": "essentials.tpa",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Allows sending teleport requests to other citizens.",
            "es": "Permite enviar solicitudes de teletransporte a otros jugadores."
        }
    },
    {
        "node": "essentials.pay",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Allows transferring cash directly to other players.",
            "es": "Permite transferir dinero directamente a otros jugadores."
        }
    },
    {
        "node": "essentials.balance",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Allows checking wallet cash balance.",
            "es": "Permite ver el saldo de efectivo en la cartera."
        }
    },
    {
        "node": "minecity.police",
        "group": "police",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Base access to police tools: baton, handcuffs, and patrol car.",
            "es": "Acceso base a herramientas policiales: porra, esposas y patrulla."
        }
    },
    {
        "node": "minecity.police.jail",
        "group": "police",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows incarcerating handcuffed criminals in state prison cells.",
            "es": "Permite encarcelar criminales esposados en las celdas de prisión."
        }
    },
    {
        "node": "minecity.police.duty",
        "group": "police",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows clocking in on-duty to receive 911 dispatch calls.",
            "es": "Permite ponerse de servicio oficial y recibir alertas 911."
        }
    },
    {
        "node": "minecity.police.frisk",
        "group": "police",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows conducting physical pat-downs for contraband firearms and drugs.",
            "es": "Permite registrar e incautar armas y drogas a sospechosos."
        }
    },
    {
        "node": "minecity.paramedic",
        "group": "paramedic",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Base access to paramedic emergency kit and municipal ambulance.",
            "es": "Acceso base al kit de paramédico y ambulancia municipal."
        }
    },
    {
        "node": "minecity.paramedic.revive",
        "group": "paramedic",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows reviving downed players using the Restoration Vaccine.",
            "es": "Permite reanimar jugadores inconscientes con la vacuna médica."
        }
    },
    {
        "node": "minecity.paramedic.duty",
        "group": "paramedic",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows clocking in on-duty to receive 911 medical alerts.",
            "es": "Permite ponerse de servicio de emergencias médicas 911."
        }
    },
    {
        "node": "minecity.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Full administrative override for dummy simulation, police, and EMS.",
            "es": "Acceso total administrativo para dummies, policía y servicios médicos."
        }
    },
    {
        "node": "luckperms.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Full administrative access to manage groups, users, and permissions.",
            "es": "Acceso administrativo para gestionar rangos, permisos y el editor web."
        }
    },
    {
        "node": "worldguard.region",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Allows defining, redefining, and flagging city protection regions.",
            "es": "Permite crear, redefinir y configurar banderas de regiones en la ciudad."
        }
    },
    {
        "node": "worldedit.wand",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Allows using the selection wand to modify metropolitan architecture.",
            "es": "Permite usar la varita de selección para construir y editar mapas."
        }
    },
    {
        "node": "arm.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows creating new rentable apartments and restoring schematics.",
            "es": "Permite crear nuevos apartamentos en alquiler y restaurar schematics."
        }
    },
    {
        "node": "dh.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows creating, moving, and editing floating 3D text holograms.",
            "es": "Permite crear, mover y editar hologramas de texto flotante en 3D."
        }
    },
    {
        "node": "chunky.command",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Allows executing chunk pre-generation tasks to eliminate driving lag.",
            "es": "Permite pre-generar chunks del mapa para eliminar tirones al conducir."
        }
    },
    {
        "node": "tab.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows reloading, configuring, and parsing scoreboard HUD layouts.",
            "es": "Permite recargar y depurar el scoreboard, la bossbar y los nametags."
        }
    },
    {
        "node": "arm.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Give access to all commands of AdvancedRegionMarket",
            "es": "[AdvancedRegionMarket] Give access to all commands of AdvancedRegionMarket"
        }
    },
    {
        "node": "arm.member.*",
        "group": "default",
        "defaultState": "True",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Give access to all commands for normal players without subregion commands and halp commands",
            "es": "[AdvancedRegionMarket] Give access to all commands for normal players without subregion commands and halp commands"
        }
    },
    {
        "node": "arm.subregion.*",
        "group": "default",
        "defaultState": "True",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Give access to all commands for subregions",
            "es": "[AdvancedRegionMarket] Give access to all commands for subregions"
        }
    },
    {
        "node": "arm.admin.setinactivityreset",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows to enable and disable inactivityreset for specific regions",
            "es": "[AdvancedRegionMarket] Allows to enable and disable inactivityreset for specific regions"
        }
    },
    {
        "node": "arm.admin.stoptime",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Stops/Starts all region-contdowns",
            "es": "[AdvancedRegionMarket] Stops/Starts all region-contdowns"
        }
    },
    {
        "node": "arm.admin.addtime",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Extends a sold region for a specific amount of time",
            "es": "[AdvancedRegionMarket] Extends a sold region for a specific amount of time"
        }
    },
    {
        "node": "arm.admin.settplocation",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows admins to set a teleport-location for all regions",
            "es": "[AdvancedRegionMarket] Allows admins to set a teleport-location for all regions"
        }
    },
    {
        "node": "arm.admin.setprotectionofcontinuance",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows to enable the protection of continuance for specific regions",
            "es": "[AdvancedRegionMarket] Allows to enable the protection of continuance for specific regions"
        }
    },
    {
        "node": "auctionhouse.reload",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /auctionhouse reload command",
            "es": "[AuctionHouse] Enables the /auctionhouse reload command"
        }
    },
    {
        "node": "auctionhouse.menu",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah menu command",
            "es": "[AuctionHouse] Enables the /ah menu command"
        }
    },
    {
        "node": "auctionhouse.search",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah search command",
            "es": "[AuctionHouse] Enables the /ah search command"
        }
    },
    {
        "node": "auctionhouse.selling",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah selling command",
            "es": "[AuctionHouse] Enables the /ah selling command"
        }
    },
    {
        "node": "auctionhouse.sold",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah sold command",
            "es": "[AuctionHouse] Enables the /ah sold command"
        }
    },
    {
        "node": "auctionhouse.trigger.block",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables triggering menu on interaction with named block",
            "es": "[AuctionHouse] Enables triggering menu on interaction with named block"
        }
    },
    {
        "node": "auctionhouse.trigger.entity",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables triggering menu on interaction with named entity",
            "es": "[AuctionHouse] Enables triggering menu on interaction with named entity"
        }
    },
    {
        "node": "auctionhouse.trigger.sign",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables triggering menu on interaction with sign",
            "es": "[AuctionHouse] Enables triggering menu on interaction with sign"
        }
    },
    {
        "node": "auctionhouse.expired",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah expired command",
            "es": "[AuctionHouse] Enables the /ah expired command"
        }
    },
    {
        "node": "auctionhouse.cancel",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah cancel command",
            "es": "[AuctionHouse] Enables the /ah cancel command"
        }
    },
    {
        "node": "auctionhouse.return",
        "group": "default",
        "defaultState": "True",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah return command",
            "es": "[AuctionHouse] Enables the /ah return command"
        }
    },
    {
        "node": "auctionhouse.expire.others",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables expiring other's listing",
            "es": "[AuctionHouse] Enables expiring other's listing"
        }
    },
    {
        "node": "auctionhouse.cancel.others",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables cancelling other's listing",
            "es": "[AuctionHouse] Enables cancelling other's listing"
        }
    },
    {
        "node": "auctionhouse.list",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah list command",
            "es": "[AuctionHouse] Enables the /ah list command"
        }
    },
    {
        "node": "auctionhouse.ulist",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah ulist command",
            "es": "[AuctionHouse] Enables the /ah ulist command"
        }
    },
    {
        "node": "auctionhouse.pick",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables picking items from the auction for inspection",
            "es": "[AuctionHouse] Enables picking items from the auction for inspection"
        }
    },
    {
        "node": "auctionhouse.purge",
        "group": "admin",
        "defaultState": "False",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Enables the /ah purge <player> command",
            "es": "[AuctionHouse] Enables the /ah purge <player> command"
        }
    },
    {
        "node": "autorank.add",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows adding to playtimes.",
            "es": "[Autorank] Allows adding to playtimes."
        }
    },
    {
        "node": "autorank.backup.data",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows a player to backup storage files",
            "es": "[Autorank] Allows a player to backup storage files"
        }
    },
    {
        "node": "autorank.checkothers",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows checking the recommended rank of other players.",
            "es": "[Autorank] Allows checking the recommended rank of other players."
        }
    },
    {
        "node": "autorank.choose",
        "group": "default",
        "defaultState": "True",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows choosing ranking paths",
            "es": "[Autorank] Allows choosing ranking paths"
        }
    },
    {
        "node": "autorank.complete",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows a player to do /ar complete",
            "es": "[Autorank] Allows a player to do /ar complete"
        }
    },
    {
        "node": "autorank.deactivate",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows a player to deactivate a path",
            "es": "[Autorank] Allows a player to deactivate a path"
        }
    },
    {
        "node": "autorank.debug",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Displays debugging information.",
            "es": "[Autorank] Displays debugging information."
        }
    },
    {
        "node": "autorank.editor.complete.path",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows a player to complete a path for another player.",
            "es": "[Autorank] Allows a player to complete a path for another player."
        }
    },
    {
        "node": "citizens.citizens.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.citizens.help).",
            "es": "[Citizens] Permission node for Citizens (citizens.citizens.help)."
        }
    },
    {
        "node": "citizens.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.admin).",
            "es": "[Citizens] Permission node for Citizens (citizens.admin)."
        }
    },
    {
        "node": "citizens.npc.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.npc.help).",
            "es": "[Citizens] Permission node for Citizens (citizens.npc.help)."
        }
    },
    {
        "node": "citizens.npc.info",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.npc.info).",
            "es": "[Citizens] Permission node for Citizens (citizens.npc.info)."
        }
    },
    {
        "node": "citizens.npc.activationrange",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.npc.activationrange).",
            "es": "[Citizens] Permission node for Citizens (citizens.npc.activationrange)."
        }
    },
    {
        "node": "citizens.npc.age",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.npc.age).",
            "es": "[Citizens] Permission node for Citizens (citizens.npc.age)."
        }
    },
    {
        "node": "citizens.npc.aggressive",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.npc.aggressive).",
            "es": "[Citizens] Permission node for Citizens (citizens.npc.aggressive)."
        }
    },
    {
        "node": "citizens.npc.ai",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Citizens",
        "desc": {
            "en": "Permission node for Citizens (citizens.npc.ai).",
            "es": "[Citizens] Permission node for Citizens (citizens.npc.ai)."
        }
    },
    {
        "node": "dh.default",
        "group": "default",
        "defaultState": "True",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to see the version after using '/decentholograms'.",
            "es": "[DecentHolograms] Allows player to see the version after using '/decentholograms'."
        }
    },
    {
        "node": "dh.command",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use all commands of DecentHolograms",
            "es": "[DecentHolograms] Allows player to use all commands of DecentHolograms"
        }
    },
    {
        "node": "dh.command.decentholograms",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use the command '/decentholograms",
            "es": "[DecentHolograms] Allows player to use the command '/decentholograms"
        }
    },
    {
        "node": "dh.command.version",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use the command '/dh version",
            "es": "[DecentHolograms] Allows player to use the command '/dh version"
        }
    },
    {
        "node": "dh.command.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use the command '/dh reload",
            "es": "[DecentHolograms] Allows player to use the command '/dh reload"
        }
    },
    {
        "node": "dh.command.list",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use the command '/dh list [page]",
            "es": "[DecentHolograms] Allows player to use the command '/dh list [page]"
        }
    },
    {
        "node": "dh.command.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use the command '/dh help",
            "es": "[DecentHolograms] Allows player to use the command '/dh help"
        }
    },
    {
        "node": "dh.command.convert",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Allows player to use the command '/dh convert <plugin>",
            "es": "[DecentHolograms] Allows player to use the command '/dh convert <plugin>"
        }
    },
    {
        "node": "deluxemenus.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "admin commands",
            "es": "[DeluxeMenus] admin commands"
        }
    },
    {
        "node": "deluxemenus.open",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "open a menu with /dm open <menu>",
            "es": "[DeluxeMenus] open a menu with /dm open <menu>"
        }
    },
    {
        "node": "deluxemenus.open.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "open a menu with /dm open <menu> <player>",
            "es": "[DeluxeMenus] open a menu with /dm open <menu> <player>"
        }
    },
    {
        "node": "deluxemenus.open.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "attempt to open a menu for a viewer skipping view requirement checking for the player",
            "es": "[DeluxeMenus] attempt to open a menu for a viewer skipping view requirement checking for the player"
        }
    },
    {
        "node": "deluxemenus.menu.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "permission for all menus",
            "es": "[DeluxeMenus] permission for all menus"
        }
    },
    {
        "node": "deluxemenus.openrequirement.bypass.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Allows the viewer to bypass all menu open requirements",
            "es": "[DeluxeMenus] Allows the viewer to bypass all menu open requirements"
        }
    },
    {
        "node": "deluxemenus.placeholdersfor",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "permission to parse menu placeholders with /dm open <menu> p:<player>",
            "es": "[DeluxeMenus] permission to parse menu placeholders with /dm open <menu> p:<player>"
        }
    },
    {
        "node": "deluxemenus.placeholdersfor.exempt",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "exempt from placeholders being parsed when targeted with /dm open <menu p:<player> for players with this permission",
            "es": "[DeluxeMenus] exempt from placeholders being parsed when targeted with /dm open <menu p:<player> for players with this permission"
        }
    },
    {
        "node": "denizen.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Denizen",
        "desc": {
            "en": "Gives access to Denizen commands",
            "es": "[Denizen] Gives access to Denizen commands"
        }
    },
    {
        "node": "denizen.npc.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Denizen",
        "desc": {
            "en": "Gives access to the /npc commands added by Denizen",
            "es": "[Denizen] Gives access to the /npc commands added by Denizen"
        }
    },
    {
        "node": "essentials.chat.color",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending color codes in chat",
            "es": "[EssentialsChat] Allows access to sending color codes in chat"
        }
    },
    {
        "node": "essentials.chat.format",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending format codes in chat",
            "es": "[EssentialsChat] Allows access to sending format codes in chat"
        }
    },
    {
        "node": "essentials.chat.magic",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending magic codes in chat",
            "es": "[EssentialsChat] Allows access to sending magic codes in chat"
        }
    },
    {
        "node": "essentials.chat.rgb",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending RGB codes in chat",
            "es": "[EssentialsChat] Allows access to sending RGB codes in chat"
        }
    },
    {
        "node": "essentials.chat.url",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending URLs in chat",
            "es": "[EssentialsChat] Allows access to sending URLs in chat"
        }
    },
    {
        "node": "essentials.toggleshout",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to the /toggleshout command",
            "es": "[EssentialsChat] Allows access to the /toggleshout command"
        }
    },
    {
        "node": "essentials.toggleshout.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to the /toggleshout command for other players",
            "es": "[EssentialsChat] Allows access to the /toggleshout command for other players"
        }
    },
    {
        "node": "essentials.chat.question",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending global questions in chat when chat radius is enabled",
            "es": "[EssentialsChat] Allows access to sending global questions in chat when chat radius is enabled"
        }
    },
    {
        "node": "essentials.chat.shout",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending shout messages",
            "es": "[EssentialsChat] Allows access to sending shout messages"
        }
    },
    {
        "node": "essentials.chat.local",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to sending local chat messages",
            "es": "[EssentialsChat] Allows access to sending local chat messages"
        }
    },
    {
        "node": "essentials.chat.receive.local",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to receiving local chat messages",
            "es": "[EssentialsChat] Allows access to receiving local chat messages"
        }
    },
    {
        "node": "essentials.chat.receive.shout",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to receiving shout chat messages",
            "es": "[EssentialsChat] Allows access to receiving shout chat messages"
        }
    },
    {
        "node": "essentials.chat.receive.question",
        "group": "default",
        "defaultState": "True",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Allows access to receiving global question chat messages",
            "es": "[EssentialsChat] Allows access to receiving global question chat messages"
        }
    },
    {
        "node": "essentials.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Give players with op everything by default",
            "es": "[Essentials] Give players with op everything by default"
        }
    },
    {
        "node": "essentials.afk",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows access to the /afk command",
            "es": "[Essentials] Allows access to the /afk command"
        }
    },
    {
        "node": "essentials.afk.message",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows the player to set a custom AFK message",
            "es": "[Essentials] Allows the player to set a custom AFK message"
        }
    },
    {
        "node": "essentials.afk.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows the player to set another player's AFK status",
            "es": "[Essentials] Allows the player to set another player's AFK status"
        }
    },
    {
        "node": "essentials.afk.auto",
        "group": "admin",
        "defaultState": "False",
        "plugin": "Essentials",
        "desc": {
            "en": "Players with this permission will be set to afk after a period of inaction as defined in the config file",
            "es": "[Essentials] Players with this permission will be set to afk after a period of inaction as defined in the config file"
        }
    },
    {
        "node": "essentials.afk.kickexempt",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Players with this permission will not be kicked for being AFK",
            "es": "[Essentials] Players with this permission will not be kicked for being AFK"
        }
    },
    {
        "node": "essentials.antioch",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows access to the /antioch command",
            "es": "[Essentials] Allows access to the /antioch command"
        }
    },
    {
        "node": "essentials.back",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows access to the /back command",
            "es": "[Essentials] Allows access to the /back command"
        }
    },
    {
        "node": "essentials.spawn.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Allows access to the /spawn command for other players",
            "es": "[EssentialsSpawn] Allows access to the /spawn command for other players"
        }
    },
    {
        "node": "essentials.setspawn",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Allows access to the /setspawn command",
            "es": "[EssentialsSpawn] Allows access to the /setspawn command"
        }
    },
    {
        "node": "essentials.spawn-on-join.exempt",
        "group": "admin",
        "defaultState": "False",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Bypass spawn teleportation on join when spawn-on-join is true",
            "es": "[EssentialsSpawn] Bypass spawn teleportation on join when spawn-on-join is true"
        }
    },
    {
        "node": "elevator.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to use commands.",
            "es": "[Elevator] Permission to use commands."
        }
    },
    {
        "node": "elevator.commands.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to use the help command.",
            "es": "[Elevator] Permission to use the help command."
        }
    },
    {
        "node": "elevator.commands.create",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to use the create command.",
            "es": "[Elevator] Permission to use the create command."
        }
    },
    {
        "node": "elevator.commands.list",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to use the list command.",
            "es": "[Elevator] Permission to use the list command."
        }
    },
    {
        "node": "elevator.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to use admin commands.",
            "es": "[Elevator] Permission to use admin commands."
        }
    },
    {
        "node": "elevator.update",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to receive update notifications.",
            "es": "[Elevator] Permission to receive update notifications."
        }
    },
    {
        "node": "elevator.bypass.cooldown",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to bypass cooldown.",
            "es": "[Elevator] Permission to bypass cooldown."
        }
    },
    {
        "node": "elevator.bypass.distance",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to bypass distance.",
            "es": "[Elevator] Permission to bypass distance."
        }
    },
    {
        "node": "elevator.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "Elevator",
        "desc": {
            "en": "Permission to use elevators.",
            "es": "[Elevator] Permission to use elevators."
        }
    },
    {
        "node": "ei.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "ExecutableItems permission",
            "es": "[ExecutableItems] ExecutableItems permission"
        }
    },
    {
        "node": "ei.item.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows you to use all ExecutableItems",
            "es": "[ExecutableItems] Allows you to use all ExecutableItems"
        }
    },
    {
        "node": "ei.cmds",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows ExecutableItems commands",
            "es": "[ExecutableItems] Allows ExecutableItems commands"
        }
    },
    {
        "node": "ei.cmd.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows the command /ei reload",
            "es": "[ExecutableItems] Allows the command /ei reload"
        }
    },
    {
        "node": "ei.cmd.give",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows the command /ei give {PlayerName} {ItemID} {quantity}",
            "es": "[ExecutableItems] Allows the command /ei give {PlayerName} {ItemID} {quantity}"
        }
    },
    {
        "node": "ei.cmd.giveusage",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows the command /ei giveusage {PlayerName} {ItemID} {quantity} {usage}",
            "es": "[ExecutableItems] Allows the command /ei giveusage {PlayerName} {ItemID} {quantity} {usage}"
        }
    },
    {
        "node": "ei.cmd.giveallusage",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows the command /ei giveallusage {ItemID} {quantity} [world] {usage}",
            "es": "[ExecutableItems] Allows the command /ei giveallusage {ItemID} {quantity} [world] {usage}"
        }
    },
    {
        "node": "ei.cmd.giveslot",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Allows the command /ei giveslot {playername} {id} {quantity} {slot} [usage]",
            "es": "[ExecutableItems] Allows the command /ei giveslot {playername} {id} {quantity} {slot} [usage]"
        }
    },
    {
        "node": "gps.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Required to be able to use any command.",
            "es": "[GPS] Required to be able to use any command."
        }
    },
    {
        "node": "gps.commands.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the help command.",
            "es": "[GPS] Permission to use the help command."
        }
    },
    {
        "node": "gps.commands.start",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the start command.",
            "es": "[GPS] Permission to use the start command."
        }
    },
    {
        "node": "gps.commands.move",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the move command.",
            "es": "[GPS] Permission to use the move command."
        }
    },
    {
        "node": "gps.commands.list",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the list command.",
            "es": "[GPS] Permission to use the list command."
        }
    },
    {
        "node": "gps.commands.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use commands as others.",
            "es": "[GPS] Permission to use commands as others."
        }
    },
    {
        "node": "gps.commands.stop",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the stop command.",
            "es": "[GPS] Permission to use the stop command."
        }
    },
    {
        "node": "gps.commands.toggle",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the toggle command.",
            "es": "[GPS] Permission to use the toggle command."
        }
    },
    {
        "node": "gps.commands.show",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Permission to use the show command.",
            "es": "[GPS] Permission to use the show command."
        }
    },
    {
        "node": "gps.commands.configurator",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Allows usage of /gpsc.",
            "es": "[GPS] Allows usage of /gpsc."
        }
    },
    {
        "node": "gps.commands.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Allows usage og /gpsa.",
            "es": "[GPS] Allows usage og /gpsa."
        }
    },
    {
        "node": "gps.update",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Receive notifications of new update.",
            "es": "[GPS] Receive notifications of new update."
        }
    },
    {
        "node": "gps.hunger.ignore",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Disable hunger usage when the GPS is active.",
            "es": "[GPS] Disable hunger usage when the GPS is active."
        }
    },
    {
        "node": "gps.startonrespawn",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GPS",
        "desc": {
            "en": "Start the Compass targetting your death location when you respawn.",
            "es": "[GPS] Start the Compass targetting your death location when you respawn."
        }
    },
    {
        "node": "GSit.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GSit",
        "desc": {
            "en": "OP-Permission for all Commands and Functions for GSit",
            "es": "[GSit] OP-Permission for all Commands and Functions for GSit"
        }
    },
    {
        "node": "GSit.Toggle",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GSit",
        "desc": {
            "en": "Toggle Sit-Ability | Permission",
            "es": "[GSit] Toggle Sit-Ability | Permission"
        }
    },
    {
        "node": "GSit.Kick",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GSit",
        "desc": {
            "en": "Seat-Kick | Permission",
            "es": "[GSit] Seat-Kick | Permission"
        }
    },
    {
        "node": "GSit.Update",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GSit",
        "desc": {
            "en": "Get-Update-Notification | Permission",
            "es": "[GSit] Get-Update-Notification | Permission"
        }
    },
    {
        "node": "GSit.GSitReload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GSit",
        "desc": {
            "en": "Config-Reload-Command | Permission",
            "es": "[GSit] Config-Reload-Command | Permission"
        }
    },
    {
        "node": "gadgetsmenu.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Permission node for GadgetsMenu (gadgetsmenu.*).",
            "es": "[GadgetsMenu] Permission node for GadgetsMenu (gadgetsmenu.*)."
        }
    },
    {
        "node": "gadgetsmenu.cosmetics.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Permission node for GadgetsMenu (gadgetsmenu.cosmetics.*).",
            "es": "[GadgetsMenu] Permission node for GadgetsMenu (gadgetsmenu.cosmetics.*)."
        }
    },
    {
        "node": "gadgetsmenu.commands.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all GadgetsMenu commands.",
            "es": "[GadgetsMenu] Let a player to use all GadgetsMenu commands."
        }
    },
    {
        "node": "gadgetsmenu.autoequip.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Automatic equip cosmetic item.",
            "es": "[GadgetsMenu] Automatic equip cosmetic item."
        }
    },
    {
        "node": "gadgetsmenu.bypassduration.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Allows a player to bypass the song duration.",
            "es": "[GadgetsMenu] Allows a player to bypass the song duration."
        }
    },
    {
        "node": "gadgetsmenu.mysteryboxes.open.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Allows a player to open all mystery boxes.",
            "es": "[GadgetsMenu] Allows a player to open all mystery boxes."
        }
    },
    {
        "node": "gadgetsmenu.animations.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Allows a player to access all mystery vault animations.",
            "es": "[GadgetsMenu] Allows a player to access all mystery vault animations."
        }
    },
    {
        "node": "gadgetsmenu.multipleboxes.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Allows a player to open multiple mystery boxes at one time.",
            "es": "[GadgetsMenu] Allows a player to open multiple mystery boxes at one time."
        }
    },
    {
        "node": "gadgetsmenu.discount.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Allows a player to discount the item cost.",
            "es": "[GadgetsMenu] Allows a player to discount the item cost."
        }
    },
    {
        "node": "gadgetsmenu.hats.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Hats.",
            "es": "[GadgetsMenu] Let a player to use all Hats."
        }
    },
    {
        "node": "gadgetsmenu.animatedhats.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all animated Hats.",
            "es": "[GadgetsMenu] Let a player to use all animated Hats."
        }
    },
    {
        "node": "gadgetsmenu.particles.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Particles.",
            "es": "[GadgetsMenu] Let a player to use all Particles."
        }
    },
    {
        "node": "gadgetsmenu.suits.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Suits.",
            "es": "[GadgetsMenu] Let a player to use all Suits."
        }
    },
    {
        "node": "gadgetsmenu.gadgets.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all gadgets.",
            "es": "[GadgetsMenu] Let a player to use all gadgets."
        }
    },
    {
        "node": "gadgetsmenu.pets.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Pets.",
            "es": "[GadgetsMenu] Let a player to use all Pets."
        }
    },
    {
        "node": "gadgetsmenu.morphs.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Morphs.",
            "es": "[GadgetsMenu] Let a player to use all Morphs."
        }
    },
    {
        "node": "gadgetsmenu.banners.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Banners.",
            "es": "[GadgetsMenu] Let a player to use all Banners."
        }
    },
    {
        "node": "gadgetsmenu.emotes.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Emotes.",
            "es": "[GadgetsMenu] Let a player to use all Emotes."
        }
    },
    {
        "node": "gadgetsmenu.cloaks.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Let a player to use all Emotes.",
            "es": "[GadgetsMenu] Let a player to use all Emotes."
        }
    },
    {
        "node": "imageframe.create",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to create new image maps",
            "es": "[ImageFrame] Allow players to create new image maps"
        }
    },
    {
        "node": "imageframe.create.animated",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to create new animated image maps",
            "es": "[ImageFrame] Allow players to create new animated image maps"
        }
    },
    {
        "node": "imageframe.create.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to create image maps for other players, applies to overlay and clone, bypasses owning limit",
            "es": "[ImageFrame] Allow players to create image maps for other players, applies to overlay and clone, bypasses owning limit"
        }
    },
    {
        "node": "imageframe.overlay",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to overlay images on Vanilla maps",
            "es": "[ImageFrame] Allow players to overlay images on Vanilla maps"
        }
    },
    {
        "node": "imageframe.clone",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to make deep copies of their own image maps",
            "es": "[ImageFrame] Allow players to make deep copies of their own image maps"
        }
    },
    {
        "node": "imageframe.playback",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to pause or set position of playback of their own animated image maps",
            "es": "[ImageFrame] Allow players to pause or set position of playback of their own animated image maps"
        }
    },
    {
        "node": "imageframe.select",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to select item frames",
            "es": "[ImageFrame] Allow players to select item frames"
        }
    },
    {
        "node": "imageframe.marker",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allow players to add and remove markers on image maps",
            "es": "[ImageFrame] Allow players to add and remove markers on image maps"
        }
    },
    {
        "node": "music.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "JukeBox",
        "desc": {
            "en": "Give access to JukeBox whole",
            "es": "[JukeBox] Give access to JukeBox whole"
        }
    },
    {
        "node": "music.random",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to play random song",
            "es": "[JukeBox] Allows player to play random song"
        }
    },
    {
        "node": "music.radio",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to listen to the Radio",
            "es": "[JukeBox] Allows player to listen to the Radio"
        }
    },
    {
        "node": "music.favorites",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to listen and manage their Favorites playlist",
            "es": "[JukeBox] Allows player to listen and manage their Favorites playlist"
        }
    },
    {
        "node": "music.particles",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to enable particles effect",
            "es": "[JukeBox] Allows player to enable particles effect"
        }
    },
    {
        "node": "music.play-on-join",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to enable the \"play on join\" option",
            "es": "[JukeBox] Allows player to enable the \"play on join\" option"
        }
    },
    {
        "node": "music.shuffle",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to enable the \"shuffle\" option",
            "es": "[JukeBox] Allows player to enable the \"shuffle\" option"
        }
    },
    {
        "node": "music.loop",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows player to enable the \"loop\" option",
            "es": "[JukeBox] Allows player to enable the \"loop\" option"
        }
    },
    {
        "node": "music.save-datas",
        "group": "default",
        "defaultState": "True",
        "plugin": "JukeBox",
        "desc": {
            "en": "Required for the plugin to save player's data after logout",
            "es": "[JukeBox] Required for the plugin to save player's data after logout"
        }
    },
    {
        "node": "music.command.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "JukeBox",
        "desc": {
            "en": "Give access to /adminmusic",
            "es": "[JukeBox] Give access to /adminmusic"
        }
    },
    {
        "node": "music.adminItem",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "JukeBox",
        "desc": {
            "en": "Changes item format",
            "es": "[JukeBox] Changes item format"
        }
    },
    {
        "node": "robbery.use",
        "group": "default",
        "defaultState": "True",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Allows players to use robbery commands",
            "es": "[KoyaRobbery] Allows players to use robbery commands"
        }
    },
    {
        "node": "robbery.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Allows players to use admin commands",
            "es": "[KoyaRobbery] Allows players to use admin commands"
        }
    },
    {
        "node": "minecity.vehicle.model",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecityFixerAddon",
        "desc": {
            "en": "Allows obtaining physical vehicle model items for decoration via /vehicle model get",
            "es": "[MinecityFixerAddon] Allows obtaining physical vehicle model items for decoration via /vehicle model get"
        }
    },
    {
        "node": "minesuite.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Permission to spawn, remove, and control MinecitySuite dummy players (/ms)",
            "es": "[MinecitySuite] Permission to spawn, remove, and control MinecitySuite dummy players (/ms)"
        }
    },
    {
        "node": "police.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Full admin access to all /police commands (createkit, unjail, forcejail, jail, setpolice, setexit, setjail, etc.)",
            "es": "[MinecitySuite] Full admin access to all /police commands (createkit, unjail, forcejail, jail, setpolice, setexit, setjail, etc.)"
        }
    },
    {
        "node": "police.chief",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Police Chief permission to promote/remove police officers (setpolice, removepolice) and manage police",
            "es": "[MinecitySuite] Police Chief permission to promote/remove police officers (setpolice, removepolice) and manage police"
        }
    },
    {
        "node": "police.officer",
        "group": "admin",
        "defaultState": "False",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Standard Police Officer permission (addstars, removestars, status, policekit, jailstick, handcuffs)",
            "es": "[MinecitySuite] Standard Police Officer permission (addstars, removestars, status, policekit, jailstick, handcuffs)"
        }
    },
    {
        "node": "police.handcuffs",
        "group": "admin",
        "defaultState": "False",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Permission to use Police Handcuffs",
            "es": "[MinecitySuite] Permission to use Police Handcuffs"
        }
    },
    {
        "node": "minecity.survival.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Permission to manage player hydration and hunger (/survival set, /survival reset, /survival reload)",
            "es": "[MinecitySuite] Permission to manage player hydration and hunger (/survival set, /survival reset, /survival reload)"
        }
    },
    {
        "node": "paramedic.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Full admin access to Paramedic commands (/paramedic revive, editkit, cure, reload)",
            "es": "[MinecitySuite] Full admin access to Paramedic commands (/paramedic revive, editkit, cure, reload)"
        }
    },
    {
        "node": "paramedic.chief",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Paramedic Chief permission to hire and fire paramedics (setparamedic, removeparamedic)",
            "es": "[MinecitySuite] Paramedic Chief permission to hire and fire paramedics (setparamedic, removeparamedic)"
        }
    },
    {
        "node": "paramedic.duty",
        "group": "admin",
        "defaultState": "False",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Paramedic on-duty permission to respond to emergencies and treat patients",
            "es": "[MinecitySuite] Paramedic on-duty permission to respond to emergencies and treat patients"
        }
    },
    {
        "node": "chunky.command.border",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.border).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.border)."
        }
    },
    {
        "node": "chunky.command.cancel",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.cancel).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.cancel)."
        }
    },
    {
        "node": "chunky.command.center",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.center).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.center)."
        }
    },
    {
        "node": "chunky.command.confirm",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.confirm).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.confirm)."
        }
    },
    {
        "node": "chunky.command.continue",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.continue).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.continue)."
        }
    },
    {
        "node": "chunky.command.corners",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.corners).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.corners)."
        }
    },
    {
        "node": "chunky.command.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.help).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.help)."
        }
    },
    {
        "node": "chunky.command.pattern",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Chunky",
        "desc": {
            "en": "Permission node for Chunky (chunky.command.pattern).",
            "es": "[Chunky] Permission node for Chunky (chunky.command.pattern)."
        }
    },
    {
        "node": "rosestacker.basecommand",
        "group": "default",
        "defaultState": "True",
        "plugin": "RoseStacker",
        "desc": {
            "en": "The base command permission for being able to see the RoseStacker command",
            "es": "[RoseStacker] The base command permission for being able to see the RoseStacker command"
        }
    },
    {
        "node": "rosestacker.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Inherits all plugin permissions",
            "es": "[RoseStacker] Inherits all plugin permissions"
        }
    },
    {
        "node": "rosestacker.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the reload command",
            "es": "[RoseStacker] Allows using the reload command"
        }
    },
    {
        "node": "rosestacker.give",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the give command",
            "es": "[RoseStacker] Allows using the give command"
        }
    },
    {
        "node": "rosestacker.clearall",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the clearall command",
            "es": "[RoseStacker] Allows using the clearall command"
        }
    },
    {
        "node": "rosestacker.stats",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the stats command",
            "es": "[RoseStacker] Allows using the stats command"
        }
    },
    {
        "node": "rosestacker.translate",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the translate command",
            "es": "[RoseStacker] Allows using the translate command"
        }
    },
    {
        "node": "rosestacker.stacktool",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the stacking tool",
            "es": "[RoseStacker] Allows using the stacking tool"
        }
    },
    {
        "node": "rosestacker.stacktool.give",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows using the stacktool command",
            "es": "[RoseStacker] Allows using the stacktool command"
        }
    },
    {
        "node": "rosestacker.silktouch",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows picking up spawners with silk touch",
            "es": "[RoseStacker] Allows picking up spawners with silk touch"
        }
    },
    {
        "node": "rosestacker.spawnerconvert",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows converting spawners with mob spawn eggs",
            "es": "[RoseStacker] Allows converting spawners with mob spawn eggs"
        }
    },
    {
        "node": "rosestacker.killentirestack",
        "group": "admin",
        "defaultState": "False",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Allows killing an entire stack of mobs at once",
            "es": "[RoseStacker] Allows killing an entire stack of mobs at once"
        }
    },
    {
        "node": "phone.police",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Allows players to use police functions.",
            "es": "[PhoneV2] Allows players to use police functions."
        }
    },
    {
        "node": "phone.firefighter",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Allows players to use firefighter functions.",
            "es": "[PhoneV2] Allows players to use firefighter functions."
        }
    },
    {
        "node": "phone.medic",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Allows players to use medic functions.",
            "es": "[PhoneV2] Allows players to use medic functions."
        }
    },
    {
        "node": "placeholderapi.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Ability to use all PAPI commands",
            "es": "[PlaceholderAPI] Ability to use all PAPI commands"
        }
    },
    {
        "node": "placeholderapi.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Ability to use all PAPI commands",
            "es": "[PlaceholderAPI] Ability to use all PAPI commands"
        }
    },
    {
        "node": "placeholderapi.ecloud.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Ability to use all PAPI ecloud commands",
            "es": "[PlaceholderAPI] Ability to use all PAPI ecloud commands"
        }
    },
    {
        "node": "placeholderapi.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Allows you to view the list of PAPI commands",
            "es": "[PlaceholderAPI] Allows you to view the list of PAPI commands"
        }
    },
    {
        "node": "placeholderapi.info",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Allows you to view expansion information",
            "es": "[PlaceholderAPI] Allows you to view expansion information"
        }
    },
    {
        "node": "placeholderapi.list",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Allows you to list active expansions",
            "es": "[PlaceholderAPI] Allows you to list active expansions"
        }
    },
    {
        "node": "placeholderapi.ecloud",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Allows you to access PAPI eCloud",
            "es": "[PlaceholderAPI] Allows you to access PAPI eCloud"
        }
    },
    {
        "node": "placeholderapi.parse",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Allows you to parse placeholders",
            "es": "[PlaceholderAPI] Allows you to parse placeholders"
        }
    },
    {
        "node": "pocketgames.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Required to be able to use any command.",
            "es": "[PocketGames] Required to be able to use any command."
        }
    },
    {
        "node": "pocketgames.commands.list",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the list command.",
            "es": "[PocketGames] Permission to use the list command."
        }
    },
    {
        "node": "pocketgames.commands.menu",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the menu command.",
            "es": "[PocketGames] Permission to use the menu command."
        }
    },
    {
        "node": "pocketgames.commands.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the help command.",
            "es": "[PocketGames] Permission to use the help command."
        }
    },
    {
        "node": "pocketgames.commands.check",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the check command.",
            "es": "[PocketGames] Permission to use the check command."
        }
    },
    {
        "node": "pocketgames.commands.multiplayer",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the multiplayer command.",
            "es": "[PocketGames] Permission to use the multiplayer command."
        }
    },
    {
        "node": "pocketgames.commands.duel",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the duel command.",
            "es": "[PocketGames] Permission to use the duel command."
        }
    },
    {
        "node": "pocketgames.bypass.enabled",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Bypass disabled games.",
            "es": "[PocketGames] Bypass disabled games."
        }
    },
    {
        "node": "pocketgames.bypass.world",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Bypass disabled games.",
            "es": "[PocketGames] Bypass disabled games."
        }
    },
    {
        "node": "pocketgames.restart",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use the game restart button.",
            "es": "[PocketGames] Permission to use the game restart button."
        }
    },
    {
        "node": "pocketgames.sudo",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to execute commands for other people.",
            "es": "[PocketGames] Permission to execute commands for other people."
        }
    },
    {
        "node": "pocketgames.spectate",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to specate other active games.",
            "es": "[PocketGames] Permission to specate other active games."
        }
    },
    {
        "node": "pocketgames.multiplayer",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to open the multiplayer menu.",
            "es": "[PocketGames] Permission to open the multiplayer menu."
        }
    },
    {
        "node": "pocketgames.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "PocketGames",
        "desc": {
            "en": "Permission to use admin commnads.",
            "es": "[PocketGames] Permission to use admin commnads."
        }
    },
    {
        "node": "pocketgames.update",
        "group": "admin",
        "defaultState": "False",
        "plugin": "PocketGames",
        "desc": {
            "en": "Receive notifications of new updates.",
            "es": "[PocketGames] Receive notifications of new updates."
        }
    },
    {
        "node": "skillapi.basic",
        "group": "default",
        "defaultState": "True",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to skill trees and using skills",
            "es": "[ProSkillAPI] access to skill trees and using skills"
        }
    },
    {
        "node": "skillapi.reset",
        "group": "default",
        "defaultState": "True",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to resetting your class",
            "es": "[ProSkillAPI] access to resetting your class"
        }
    },
    {
        "node": "skillapi.exp",
        "group": "default",
        "defaultState": "True",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to gaining exp",
            "es": "[ProSkillAPI] access to gaining exp"
        }
    },
    {
        "node": "skillapi.level",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to using the level and exp commands",
            "es": "[ProSkillAPI] access to using the level and exp commands"
        }
    },
    {
        "node": "skillapi.mana",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to using the mana command",
            "es": "[ProSkillAPI] access to using the mana command"
        }
    },
    {
        "node": "skillapi.points",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to using the points command",
            "es": "[ProSkillAPI] access to using the points command"
        }
    },
    {
        "node": "skillapi.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to using the reload command",
            "es": "[ProSkillAPI] access to using the reload command"
        }
    },
    {
        "node": "skillapi.class",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to all classes",
            "es": "[ProSkillAPI] access to all classes"
        }
    },
    {
        "node": "skillapi.skill",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to all skills",
            "es": "[ProSkillAPI] access to all skills"
        }
    },
    {
        "node": "skillapi.lore",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to all lore commands",
            "es": "[ProSkillAPI] access to all lore commands"
        }
    },
    {
        "node": "skillapi.force",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to force commands",
            "es": "[ProSkillAPI] access to force commands"
        }
    },
    {
        "node": "skillapi.attrib",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to giving attribute points",
            "es": "[ProSkillAPI] access to giving attribute points"
        }
    },
    {
        "node": "skillapi.gui",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to GUI editor menu",
            "es": "[ProSkillAPI] access to GUI editor menu"
        }
    },
    {
        "node": "skillapi.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "access to all commands and features",
            "es": "[ProSkillAPI] access to all commands and features"
        }
    },
    {
        "node": "protocol.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Gives access to everything.",
            "es": "[ProtocolLib] Gives access to everything."
        }
    },
    {
        "node": "protocol.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Able to initiate the update process, and can configure debug mode.",
            "es": "[ProtocolLib] Able to initiate the update process, and can configure debug mode."
        }
    },
    {
        "node": "protocol.info",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Can read update notifications and error reports.",
            "es": "[ProtocolLib] Can read update notifications and error reports."
        }
    },
    {
        "node": "qualityarmory.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Gives access to all QualityArmory commands",
            "es": "[QualityArmory] Gives access to all QualityArmory commands"
        }
    },
    {
        "node": "qualityarmory.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Gives access to all admin commands for QA",
            "es": "[QualityArmory] Gives access to all admin commands for QA"
        }
    },
    {
        "node": "qualityarmory.default",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Gives access to all QualityArmory default commands such as shooting crafting and shopping",
            "es": "[QualityArmory] Gives access to all QualityArmory default commands such as shooting crafting and shopping"
        }
    },
    {
        "node": "qualityarmoryvehicles.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Gives access to all QAV perms",
            "es": "[QualityArmoryVehicles2] Gives access to all QAV perms"
        }
    },
    {
        "node": "qualityarmoryvehicles.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Gives access to all QAV admin perms",
            "es": "[QualityArmoryVehicles2] Gives access to all QAV admin perms"
        }
    },
    {
        "node": "qualityarmoryvehicles.tracks.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Allows admins to configure tram/underground tracks",
            "es": "[QualityArmoryVehicles2] Allows admins to configure tram/underground tracks"
        }
    },
    {
        "node": "qualityarmoryvehicles.default",
        "group": "default",
        "defaultState": "True",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Default to all QAV perms",
            "es": "[QualityArmoryVehicles2] Default to all QAV perms"
        }
    },
    {
        "node": "quests.questinfo",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "View information about a quest",
            "es": "[Quests] View information about a quest"
        }
    },
    {
        "node": "quests.quests",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "Display plugin help",
            "es": "[Quests] Display plugin help"
        }
    },
    {
        "node": "quests.list",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "List available quests",
            "es": "[Quests] List available quests"
        }
    },
    {
        "node": "quests.take",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "Accept a quest via command",
            "es": "[Quests] Accept a quest via command"
        }
    },
    {
        "node": "quests.quit",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "Quit a current quest",
            "es": "[Quests] Quit a current quest"
        }
    },
    {
        "node": "quests.stats",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "View quest statistics",
            "es": "[Quests] View quest statistics"
        }
    },
    {
        "node": "quests.top",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "View plugin leaderboards",
            "es": "[Quests] View plugin leaderboards"
        }
    },
    {
        "node": "quests.info",
        "group": "default",
        "defaultState": "True",
        "plugin": "Quests",
        "desc": {
            "en": "View plugin information",
            "es": "[Quests] View plugin information"
        }
    },
    {
        "node": "score.*",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SCore",
        "desc": {
            "en": "SCore permission",
            "es": "[SCore] SCore permission"
        }
    },
    {
        "node": "score.cmds",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SCore",
        "desc": {
            "en": "Allows SCore commands",
            "es": "[SCore] Allows SCore commands"
        }
    },
    {
        "node": "score.cmd.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SCore",
        "desc": {
            "en": "Allows the command /score reload",
            "es": "[SCore] Allows the command /score reload"
        }
    },
    {
        "node": "score.cmd.inspect-loop",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SCore",
        "desc": {
            "en": "Allows the command /score inspect-loop",
            "es": "[SCore] Allows the command /score inspect-loop"
        }
    },
    {
        "node": "score.cmd.particles-toggle",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SCore",
        "desc": {
            "en": "Allows the command /score particles-toggle (self)",
            "es": "[SCore] Allows the command /score particles-toggle (self)"
        }
    },
    {
        "node": "salarymanager.set",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow seting of salaries",
            "es": "[SalaryManager] Allow seting of salaries"
        }
    },
    {
        "node": "salarymanager.set.offline",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow seting of offline salaries",
            "es": "[SalaryManager] Allow seting of offline salaries"
        }
    },
    {
        "node": "salarymanager.pay",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow paying of salaries",
            "es": "[SalaryManager] Allow paying of salaries"
        }
    },
    {
        "node": "salarymanager.get",
        "group": "default",
        "defaultState": "True",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow seting of salaries",
            "es": "[SalaryManager] Allow seting of salaries"
        }
    },
    {
        "node": "salarymanager.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow reloading the config",
            "es": "[SalaryManager] Allow reloading the config"
        }
    },
    {
        "node": "salarymanager.list",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow listing the salaries",
            "es": "[SalaryManager] Allow listing the salaries"
        }
    },
    {
        "node": "salarymanager.setperiod",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow setting of the period",
            "es": "[SalaryManager] Allow setting of the period"
        }
    },
    {
        "node": "salarymanager.notify",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Get notified of payments same (totals and nr of people getting paid)",
            "es": "[SalaryManager] Get notified of payments same (totals and nr of people getting paid)"
        }
    },
    {
        "node": "salarymanager.from",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allow changing the money source",
            "es": "[SalaryManager] Allow changing the money source"
        }
    },
    {
        "node": "servertutorialplus.command.*",
        "group": "admin",
        "defaultState": "False",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to use administrative ST+ commands.",
            "es": "[ServerTutorialPlus] Allows you to use administrative ST+ commands."
        }
    },
    {
        "node": "servertutorialplus.command.help",
        "group": "default",
        "defaultState": "True",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to view ST+ help.",
            "es": "[ServerTutorialPlus] Allows you to view ST+ help."
        }
    },
    {
        "node": "servertutorialplus.command.create",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to create ST+ tutorials.",
            "es": "[ServerTutorialPlus] Allows you to create ST+ tutorials."
        }
    },
    {
        "node": "servertutorialplus.command.remove",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to remove ST+ tutorials.",
            "es": "[ServerTutorialPlus] Allows you to remove ST+ tutorials."
        }
    },
    {
        "node": "servertutorialplus.command.addpoint",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to add a point in an existing ST+ tutorial.",
            "es": "[ServerTutorialPlus] Allows you to add a point in an existing ST+ tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.removepoint",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to remove a point in an existing ST+ tutorial.",
            "es": "[ServerTutorialPlus] Allows you to remove a point in an existing ST+ tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.play",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to play an existing ST+ tutorial.",
            "es": "[ServerTutorialPlus] Allows you to play an existing ST+ tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.player",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you view the ST+ stats of a player.",
            "es": "[ServerTutorialPlus] Allows you view the ST+ stats of a player."
        }
    },
    {
        "node": "servertutorialplus.command.quit",
        "group": "default",
        "defaultState": "True",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to quit the current tutorial.",
            "es": "[ServerTutorialPlus] Allows you to quit the current tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.playpoint",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to play a single point of an existing ST+ tutorial.",
            "es": "[ServerTutorialPlus] Allows you to play a single point of an existing ST+ tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.setblock",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to set a block which will play an existing ST+ tutorial.",
            "es": "[ServerTutorialPlus] Allows you to set a block which will play an existing ST+ tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.edit",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to modify settings for an entire ST+ tutorial.",
            "es": "[ServerTutorialPlus] Allows you to modify settings for an entire ST+ tutorial."
        }
    },
    {
        "node": "servertutorialplus.command.npc",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to create, modify, and delete ST+ NPCs.",
            "es": "[ServerTutorialPlus] Allows you to create, modify, and delete ST+ NPCs."
        }
    },
    {
        "node": "servertutorialplus.command.info",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to list all ST+ tutorials, or info on a specific one.",
            "es": "[ServerTutorialPlus] Allows you to list all ST+ tutorials, or info on a specific one."
        }
    },
    {
        "node": "servertutorialplus.command.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to reload the ST+ config, overwriting pending changes.",
            "es": "[ServerTutorialPlus] Allows you to reload the ST+ config, overwriting pending changes."
        }
    },
    {
        "node": "servertutorialplus.command.save",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows you to overwrite the config with the current state.",
            "es": "[ServerTutorialPlus] Allows you to overwrite the config with the current state."
        }
    },
    {
        "node": "shopkeeper.help",
        "group": "default",
        "defaultState": "True",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Display the command help",
            "es": "[Shopkeepers] Display the command help"
        }
    },
    {
        "node": "shopkeeper.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Reload the plugin",
            "es": "[Shopkeepers] Reload the plugin"
        }
    },
    {
        "node": "shopkeeper.debug",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Toggle debug mode and access debugging commands",
            "es": "[Shopkeepers] Toggle debug mode and access debugging commands"
        }
    },
    {
        "node": "shopkeeper.delete-unspawnable-shopkeepers",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Delete unspawnable shopkeepers via command",
            "es": "[Shopkeepers] Delete unspawnable shopkeepers via command"
        }
    },
    {
        "node": "shopkeeper.cleanup-citizen-shopkeepers",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Delete invalid Citizen shopkeepers via command",
            "es": "[Shopkeepers] Delete invalid Citizen shopkeepers via command"
        }
    },
    {
        "node": "shopkeeper.list.own",
        "group": "default",
        "defaultState": "True",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "List your own player shops",
            "es": "[Shopkeepers] List your own player shops"
        }
    },
    {
        "node": "shopkeeper.list.others",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "List the player shops of other players",
            "es": "[Shopkeepers] List the player shops of other players"
        }
    },
    {
        "node": "shopkeeper.list.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "List the admin shops",
            "es": "[Shopkeepers] List the admin shops"
        }
    },
    {
        "node": "tab.tabcomplete",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to complete all TAB commands",
            "es": "[TAB] Allows player to complete all TAB commands"
        }
    },
    {
        "node": "tab.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab reload",
            "es": "[TAB] Allows player to run /tab reload"
        }
    },
    {
        "node": "tab.cpu",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab cpu",
            "es": "[TAB] Allows player to run /tab cpu"
        }
    },
    {
        "node": "tab.dump",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab dump <player>",
            "es": "[TAB] Allows player to run /tab dump <player>"
        }
    },
    {
        "node": "tab.groupinfo",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab group <group>",
            "es": "[TAB] Allows player to run /tab group <group>"
        }
    },
    {
        "node": "tab.grouplist",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab groups",
            "es": "[TAB] Allows player to run /tab groups"
        }
    },
    {
        "node": "tab.parse",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab parse <player> <placeholder>",
            "es": "[TAB] Allows player to run /tab parse <player> <placeholder>"
        }
    },
    {
        "node": "tab.setcollision",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TAB",
        "desc": {
            "en": "Allows player to run /tab setcollision <player> <true/false>",
            "es": "[TAB] Allows player to run /tab setcollision <player> <true/false>"
        }
    },
    {
        "node": "therewards.addons",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "You will be able to manage installed addons",
            "es": "[TheRewards] You will be able to manage installed addons"
        }
    },
    {
        "node": "therewards.forceclaim",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "You may force the claiming of a reward from a player.",
            "es": "[TheRewards] You may force the claiming of a reward from a player."
        }
    },
    {
        "node": "therewards.help",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "You will be able to get general help for the plugin, such as its command list.",
            "es": "[TheRewards] You will be able to get general help for the plugin, such as its command list."
        }
    },
    {
        "node": "therewards.export",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Save database data in a json file",
            "es": "[TheRewards] Save database data in a json file"
        }
    },
    {
        "node": "therewards.import",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Import json file to mysql or sqlite",
            "es": "[TheRewards] Import json file to mysql or sqlite"
        }
    },
    {
        "node": "therewards.reset",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "May remove streak or rewards (cooldown or more).",
            "es": "[TheRewards] May remove streak or rewards (cooldown or more)."
        }
    },
    {
        "node": "therewards.transfer",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Transferring data from one player to another",
            "es": "[TheRewards] Transferring data from one player to another"
        }
    },
    {
        "node": "therewards.info",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Obtain information on player rewards.",
            "es": "[TheRewards] Obtain information on player rewards."
        }
    },
    {
        "node": "therewards.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Reload the plugin configuration",
            "es": "[TheRewards] Reload the plugin configuration"
        }
    },
    {
        "node": "therewards.remove",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Eliminating a player's streak or rewards",
            "es": "[TheRewards] Eliminating a player's streak or rewards"
        }
    },
    {
        "node": "therewards.removeall",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "Eliminates all the player's rewards as well as his streak.",
            "es": "[TheRewards] Eliminates all the player's rewards as well as his streak."
        }
    },
    {
        "node": "therewards.updatechecker",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "You will be notified of updates when you log in to the server.",
            "es": "[TheRewards] You will be notified of updates when you log in to the server."
        }
    },
    {
        "node": "therewards.set",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "TheRewards",
        "desc": {
            "en": "You will be notified of updates when you log in to the server.",
            "es": "[TheRewards] You will be notified of updates when you log in to the server."
        }
    },
    {
        "node": "vault.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "Vault",
        "desc": {
            "en": "Notifies the player when vault is in need of an update.",
            "es": "[Vault] Notifies the player when vault is in need of an update."
        }
    },
    {
        "node": "viaversion.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Permission node for ViaVersion (viaversion.admin).",
            "es": "[ViaVersion] Permission node for ViaVersion (viaversion.admin)."
        }
    },
    {
        "node": "warpcfg.cfg",
        "group": "admin",
        "defaultState": "Op Only",
        "plugin": "EssentialsWarpGUI",
        "desc": {
            "en": "Grants access to the \\\"/warpcfg\\\" command",
            "es": "[EssentialsWarpGUI] Grants access to the \\\"/warpcfg\\\" command"
        }
    }
]
};
