/**
 * Minecity Roleplay - Master Server Encyclopedia Data
 * Divided cleanly into the 10 Official Server Categories
 * Grounded in all 77 Server JARs, Configs & Spigot Documentation
 * 10 System Categories • 359 Commands • 113 Placeholders • 415 Permissions
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

  // Exact 10 Official Server Categories
  categories: [
    {
        "id": "cat-core",
        "key": "Core & Roleplay",
        "icon": "⚙️",
        "title": {
            "en": "Core & Roleplay Systems",
            "es": "Core & Rol"
        },
        "pluginsList": "MinecitySuite, MinecityFixerAddon, EssentialsX / ECore, EssentialsSpawn, LuckPerms, Vault, MyCommand, DeluxeMenus, PlaceholderAPI",
        "summary": {
            "en": "The foundational architecture of Minecity Roleplay. MinecitySuite manages Police arrests/stars, EMS diseases/revival, Survival thirst/hunger, Tamagotchi Pets, and Testing Dummies (/ms). EssentialsX & LuckPerms run spawn arrivals (/spawn), homes, cash (/bal, /pay), and rank permissions, while MyCommand maps friendly shortcuts (/car, /carcall, /crew, /job) and DeluxeMenus + PlaceholderAPI drive custom GUIs and dynamic HUD variables.",
            "es": "La columna vertebral de Minecity Roleplay. MinecitySuite gestiona Policía, Paramédicos, Supervivencia (sed/hambre), Mascotas y Dummies (/ms). EssentialsX y LuckPerms manejan el aeropuerto (/spawn), dinero (/bal, /pay) y rangos de permisos; MyCommand crea atajos fáciles (/car, /carcall, /crew, /job), y DeluxeMenus junto a PlaceholderAPI conectan todos los menús e indicadores del servidor."
        },
        "highlights": [
            "Police: 6 Wanted Stars, 2-hit arrest baton, iron handcuffs, state prison cells, and 30-min officer salaries.",
            "EMS / Paramedics: 60s crawling bleedout, Shift+Right-Click with Restoration Vaccine + 30s acceptance prompt ($250 fee to keep inventory), 6 diseases & /pharmacy.",
            "Custom Aliases: /car (/qav garage), /carcall (/qav callback to store vehicle), /carsit1-3, /car-drive, /crew, /job."
        ]
    },
    {
        "id": "cat-vehicles",
        "key": "Vehicles & Transport",
        "icon": "🏎️",
        "title": {
            "en": "Vehicles & Transport",
            "es": "Vehículos y Transporte"
        },
        "pluginsList": "QualityArmoryVehicles, MTVehicles, Elevator",
        "summary": {
            "en": "Complete 3D drivable fleet requiring zero client mods: sports cars, police cruisers, ambulances, motorcycles, trucks, and helicopters. Vehicles are purchased at NPC dealerships, spawned from your personal garage (/car), safely stored away via /carcall, shared with passengers (/carsit1-3), refueled at gas stations, and parked inside skyscrapers connected by working Elevators.",
            "es": "Flota completa de vehículos 3D sin necesidad de mods: deportivos, patrullas, ambulancias, motos, camiones y helicópteros. Se compran en concesionarios, se sacan del garaje con /car, se guardan con /carcall para evitar robos, permiten pasajeros con /carsit1-3, repostan gasolina y usan ascensores funcionales (/elevator) en edificios."
        },
        "highlights": [
            "/car (Garage GUI) & /carcall (Stores active vehicle safely back into garage).",
            "/carsit1, /carsit2, /carsit3 (Passenger seats) & /car-drive (Return to driver seat).",
            "MTVehicles: /vehicle public/private, /vehicle addmember, /vehicle fuel, and building elevators (/elevator)."
        ]
    },
    {
        "id": "cat-weapons",
        "key": "Firearms & Equipment",
        "icon": "🔫",
        "title": {
            "en": "Firearms & Equipment",
            "es": "Armas y Equipamiento"
        },
        "pluginsList": "QualityArmory, ExecutableItems, SCore, CommandItems",
        "summary": {
            "en": "Authentic tactical firepower and custom interactive roleplay tools. QualityArmory renders custom 3D pistols, SMGs, assault rifles, sniper rifles, shotguns, grenades, Kevlar vests, and ammo magazines (/qa, /qa shop, /qa craft). ExecutableItems, SCore, and CommandItems power specialized badges, police tasers, medical syringes, and clickable tools.",
            "es": "Potencia de fuego táctica y equipamiento especial de rol. QualityArmory ofrece armas de fuego 3D (pistolas, subfusiles, rifles de asalto, francotiradores, escopetas), chalecos antibalas y munición (/qa, /qa shop, /qa craft). ExecutableItems, SCore y CommandItems añaden placas policiales, herramientas interactivas y consumibles ejecutables."
        },
        "highlights": [
            "3D Firearms (/qa shop, /qa craft, /qa give): Right-click zoom/iron sights, Left-click fire, F or drop to reload.",
            "Custom Tools (/ei, /ci): Executable police items, emergency kits, and custom-bound roleplay gadgets."
        ]
    },
    {
        "id": "cat-properties",
        "key": "Properties & Building",
        "icon": "🏢",
        "title": {
            "en": "Properties & Building",
            "es": "Propiedades y Construcción"
        },
        "pluginsList": "AdvancedRegionMarket (ARM), WorldGuard, WorldEdit, ArmorStandTools",
        "summary": {
            "en": "Metropolitan real estate market and city zoning protection. Citizens rent studio apartments or buy luxury mansions permanently via /apartments, /rent, /buy, or /arm. WorldGuard defines anti-PvP airport/hospital safezones and heist vaults (/rg), WorldEdit manages schematics and city construction (//wand, //set), and ArmorStandTools decorates shop interiors (/astools).",
            "es": "Mercado inmobiliario metropolitano y protección urbana. Los ciudadanos alquilan departamentos o compran mansiones permanentes mediante /apartments, /rent, /buy o /arm. WorldGuard protege zonas seguras (/rg flag), WorldEdit construye y restaura esquemas (//wand, //copy) y ArmorStandTools decora maniquíes (/astools)."
        },
        "highlights": [
            "Rent & Buy UI: /apartments, /rent, /buy, /arm info, /arm extend, /arm sellback, /arm addmember <player>.",
            "Region Protection & Building: /rg define, /rg flag, //wand, //set, //copy, //paste, //schem save/load, /astools."
        ]
    },
    {
        "id": "cat-economy",
        "key": "Economy & Banking",
        "icon": "🏦",
        "title": {
            "en": "Economy & Banking",
            "es": "Economía y Banca"
        },
        "pluginsList": "Bank Lite, CoreBankApi, AuctionHouse, SalaryManager, dtlTraders, Shopkeepers",
        "summary": {
            "en": "Multi-layered financial economy keeping cash safe from muggers and facilitating citizen commerce. Store savings in ATM bank accounts (/bank) to earn interest, sell rare weapons and car keys globally via AuctionHouse (/ah, /ah sell), receive automated paychecks via SalaryManager (/salary), and buy supplies from NPC merchants (dtlTraders & Shopkeepers).",
            "es": "Sistema financiero completo para proteger dinero y comerciar en la ciudad. Guarda efectivo en el banco/ATM (/bank) evitando perderlo al morir, comercia objetos globalmente en la Casa de Subastas (/ah, /ah sell), recibe nóminas periódicas (/salary) y compra en tiendas de comerciantes NPC (dtlTraders y Shopkeepers)."
        },
        "highlights": [
            "Bank & ATM (/bank, /bank money open): Deposits, withdrawals, item vaults, and interest payouts.",
            "Marketplace & Payroll (/ah, /ah sell <price>, /ah expired, /salary, /dtltraders, /shopkeeper)."
        ]
    },
    {
        "id": "cat-crime",
        "key": "Crime, Gangs & Heists",
        "icon": "💰",
        "title": {
            "en": "Crime, Gangs & Heists",
            "es": "Crimen, Pandillas y Atracos"
        },
        "pluginsList": "KoyaRobbery, ExcellentGangs, ClansPlus, Drugs, CustomDeathDrops",
        "summary": {
            "en": "Underworld organized crime, bank vault heists, street turf wars, and black market contraband. Assemble a heist squad with /crew and crack bank vaults with drills (/robbery), form turf street gangs with shared vaults and banks (/gang), lead crime syndicates in clan wars (/clan), and cultivate contraband narcotics (/drugs, /drugbook).",
            "es": "Crimen organizado, atracos a bancos, guerras de pandillas y contrabando ilegal. Forma una banda de atraco con /crew y perfora bóvedas (/robbery), crea pandillas callejeras con baúl y banco compartido (/gang), dirige familias criminales (/clan) y elabora drogas ilegales (/drugs, /drugbook)."
        },
        "highlights": [
            "Heists: /crew, /robbery start, /robbery accept, drill vault cracking & police wanted alerts.",
            "Gangs & Contraband: /gang create, /gang vault, /gang bank, /clan create, /clan openstorage, /drugs, /drugbook."
        ]
    },
    {
        "id": "cat-comm",
        "key": "Communication & Navigation",
        "icon": "📱",
        "title": {
            "en": "Communication & Navigation",
            "es": "Comunicación y Navegación"
        },
        "pluginsList": "PhoneConnect (PhoneV2), GPS, GPS-Quests, TAB, EChat / ChatManager, RPTools, DecentHolograms, HolographicDisplays, ImageFrame, Images",
        "summary": {
            "en": "Immersive urban connectivity and roleplay atmosphere. Use your interactive smartphone (/phone, /hang) for calls, SMS, and 911 alerts; follow glowing particle arrow navigation (/gps, /compass); showcase character ID cards and emotes (/card, /roll, /me, /do, /whisper, /shout); and read TAB HUD scoreboards, 3D holograms (/dh), and HD map billboards (/imageframe, /image).",
            "es": "Conectividad urbana e inmersión de rol. Usa el smartphone (/phone, /hang) para llamar, enviar SMS y alertar al 911; sigue rutas GPS con partículas luminosas (/gps, /compass); muestra tu tarjeta de rol (/card), dados (/roll), /me, /do, susurros y gritos; además de scoreboard HUD (TAB), hologramas (/dh) y vallas publicitarias (/imageframe, /image)."
        },
        "highlights": [
            "Mobile & GPS: /phone, /hang, /givesim, /gps, /gps stop, /compass.",
            "RP Chat & Displays: /card, /roll, /me, /do, /whisper, /shout, /ooc, /dh h create, /imageframe create."
        ]
    },
    {
        "id": "cat-jobs",
        "key": "Jobs & Progression",
        "icon": "💼",
        "title": {
            "en": "Jobs & Progression",
            "es": "Trabajos y Progreso"
        },
        "pluginsList": "Quests (QuestsMinecity), Autorank, ProSkillAPI, ProMCCore, RealMines, MineResetLite, ServerTutorialPlus",
        "summary": {
            "en": "Legal employment paths and long-term character progression. Take on courier, taxi, construction, or quarry contracts via /job and /quests, earn industrial minerals in auto-resetting quarries (RealMines / MineResetLite), advance civilian ranks automatically via playtime hours (/autorank), allocate RPG stamina/strength perks (/class, /skillapi), and take the guided airport city tour (/st play).",
            "es": "Empleos legales y evolución del personaje. Acepta misiones de repartidor, taxista o minero (/job, /quests), extrae minerales en canteras auto-reiniciables (RealMines / MineResetLite), asciende rangos de ciudadanía por horas jugadas (/autorank), mejora atributos RPG (/class, /skillapi) y recorre el tutorial guiado (/st play)."
        },
        "highlights": [
            "Employment & Quests: /job, /jobcancel, /quests, /questadmin, /rm create (quarries).",
            "Progression & Tutorial: /ar check, /ar leaderboard, /ar times, /class, /skillapi, /st play."
        ]
    },
    {
        "id": "cat-leisure",
        "key": "Casino, Sports & Leisure",
        "icon": "🎰",
        "title": {
            "en": "Casino, Sports & Leisure",
            "es": "Casino, Deportes y Ocio"
        },
        "pluginsList": "Roulette, VideoPoker, Lottery, BlockBall, EvenMoreFish, Gameboy (JameboyEmulator), PocketGames, JukeBox, NoteBlockAPI, GSit, GadgetsMenu, Gizmo",
        "summary": {
            "en": "Vibrant nightlife and recreational entertainment across Los Santos. Bet chips at live Roulette wheels (/roulette), play 5-card Video Poker (/videopoker), enter metropolitan Lottery draws (/lottery), play soccer in the stadium (/blockball), compete in marina fishing contests (/emf), play handheld GameBoy & GUI arcades (/gameboy play, /pocketgames), stream city radio (/music), strike realistic poses (/sit, /lay, /crawl), and wear cosmetics (/gmenu).",
            "es": "Vida nocturna, apuestas y entretenimiento urbano. Apuesta en mesas de Ruleta (/roulette), Video Póker (/videopoker) y Lotería (/lottery); juega fútbol en el estadio (/blockball); compite en torneos de pesca (/emf shop, /emf top); juega GameBoy portátil (/gameboy play) o arcade (/pocketgames); sintoniza la radio (/music); usa poses reales (/sit, /lay, /crawl) y cosméticos (/gmenu)."
        },
        "highlights": [
            "Casino & Fishing: /roulette, /videopoker, /lottery, /emf shop, /emf top, /emf toggle.",
            "Poses, Sports & Arcade: /blockball, /gameboy play, /pocketgames, /music, /sit, /lay, /crawl, /spin, /gmenu."
        ]
    },
    {
        "id": "cat-admin",
        "key": "NPCs, Rewards & Optimization",
        "icon": "🛡️",
        "title": {
            "en": "NPCs, Rewards & Optimization",
            "es": "NPCs, Recompensas y Optimización"
        },
        "pluginsList": "Citizens, Denizen, UltimateFood, ExcellentCrates, PlayerKits2, TheRewards, PlayerReport, Chunky, LagFixer, RoseStacker, Pl-Hide, ForcePack, ViaVersion, ViaBackwards, ProtocolLib, PacketEvents",
        "summary": {
            "en": "City population AI, daily rewards, gastronomy, moderation, and high-FPS infrastructure. Citizens & Denizen power interactive shopkeepers and quest NPCs (/npc); UltimateFood delivers realistic meals & sodas (/uf); ExcellentCrates (/crates, /cratekey), PlayerKits2 (/kit), and TheRewards (/rewards) handle loot crates and daily login streaks; PlayerReport alerts staff (/report); while Chunky, LagFixer, RoseStacker, Pl-Hide, ForcePack, ViaVersion, and ProtocolLib/PacketEvents guarantee 20.0 TPS stability.",
            "es": "Población NPC, gastronomía, cajas de botín, moderación e infraestructura de alto rendimiento. Citizens y Denizen controlan NPCs interactivos (/npc); UltimateFood añade platos gourmet (/uf); ExcellentCrates (/crates, /cratekey), PlayerKits2 (/kit) y TheRewards (/rewards) entregan recompensas; PlayerReport gestiona reportes (/report); y Chunky, LagFixer, RoseStacker, Pl-Hide, ForcePack, ViaVersion y ProtocolLib garantizan 20 TPS fluidos sin mods."
        },
        "highlights": [
            "Crates, Kits & Rewards: /crates open/preview, /cratekey balance/giveall, /kit claim/preview, /rewards, /streak.",
            "NPCs, Reports & Performance: /npc create/trait/skin, /report, /chunky start, /abyss, /rs give, /plhide, /forcepack."
        ]
    }
],

  // 359 Real Commands & Subcommands across all 10 Categories
  commands: [
    {
        "command": "/apartments",
        "aliases": "/apartment, /properties",
        "permission": "minecity.apartments",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens the apartments & luxury housing market GUI.",
            "es": "Abre el menú inmobiliario para alquilar departamentos o comprar casas."
        }
    },
    {
        "command": "/rent",
        "aliases": "/rents, /alquiler",
        "permission": "minecity.apartments",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Quick shortcut for rentable city apartments.",
            "es": "Acceso directo a los apartamentos disponibles en alquiler."
        }
    },
    {
        "command": "/buy",
        "aliases": "/houses, /comprar",
        "permission": "minecity.apartments",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Quick shortcut for houses and commercial shops for sale.",
            "es": "Acceso directo a casas de lujo y locales en venta permanente."
        }
    },
    {
        "command": "/police",
        "aliases": "/policia, /pd",
        "permission": "minecity.police",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Police hub: duty toggle, fine suspects, check wanted list.",
            "es": "Panel principal policial para servicio, multas y criminales."
        }
    },
    {
        "command": "/police top",
        "aliases": "/policetop",
        "permission": "None (Everyone)",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Displays the leaderboard of top officers by arrest count.",
            "es": "Muestra el ranking de policías con más arrestos."
        }
    },
    {
        "command": "/police status",
        "aliases": "/wantedstatus",
        "permission": "None (Everyone)",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Displays your wanted stars level and remaining jail time.",
            "es": "Consulta tus estrellas de búsqueda actuales o condena."
        }
    },
    {
        "command": "/police jail <player> <min>",
        "aliases": "/arrest",
        "permission": "minecity.police.jail",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Incarcerates a cuffed suspect in state prison for X minutes.",
            "es": "Encarcela a un sospechoso esposado por los minutos indicados."
        }
    },
    {
        "command": "/police addstars <player> <n>",
        "aliases": "/addstars",
        "permission": "mcrppolice.admin",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Increases a fugitive's wanted star level (1 to 6).",
            "es": "Añade estrellas de búsqueda policial (1 a 6) a un jugador."
        }
    },
    {
        "command": "/police removestars <player> <n>",
        "aliases": "/clearstars",
        "permission": "mcrppolice.admin",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Clears or lowers a player's active wanted stars.",
            "es": "Reduce o limpia las estrellas de búsqueda de un jugador."
        }
    },
    {
        "command": "/paramedic",
        "aliases": "/ems, /medic",
        "permission": "minecity.paramedic",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Paramedic hub: duty toggle, view active 911 emergency calls.",
            "es": "Menú de paramédicos para servicio y alertas médicas 911."
        }
    },
    {
        "command": "/paramedic revive <player>",
        "aliases": "/revive",
        "permission": "minecity.paramedic.revive",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Revives a downed citizen with Restoration Vaccine (patient must accept prompt to keep items).",
            "es": "Reanima a un herido en el suelo (el paciente debe aceptar para guardar su inventario)."
        }
    },
    {
        "command": "/paramedic menu",
        "aliases": "/emsmenu",
        "permission": "minecity.paramedic",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens paramedic medical gear shop (50% discount on vaccines & medkits).",
            "es": "Abre la tienda exclusiva médica con descuento del 50%."
        }
    },
    {
        "command": "/pharmacy",
        "aliases": "/farmacia",
        "permission": "None (Everyone)",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens municipal pharmacy to buy cures for 6 city diseases.",
            "es": "Abre la farmacia pública para curar fracturas, gripe, migraña, infección o sangrado."
        }
    },
    {
        "command": "/survival",
        "aliases": "/thirst, /sed",
        "permission": "minecity.survival",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Displays current hydration percentage, hunger, and fatigue.",
            "es": "Consulta tu nivel exacto de hidratación y hambre."
        }
    },
    {
        "command": "/pet",
        "aliases": "/pets, /mascota",
        "permission": "minecity.pets",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens Tamagotchi companion pet GUI to feed, name, and level up.",
            "es": "Abre el menú de mascotas Tamagotchi para alimentar y subir de nivel."
        }
    },
    {
        "command": "/pet shop",
        "aliases": "/petshop",
        "permission": "minecity.pets",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Opens the pet adoption center.",
            "es": "Abre la tienda de adopción de perros y gatos."
        }
    },
    {
        "command": "/ms adddummy <name>",
        "aliases": "/ms",
        "permission": "minecity.admin",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Spawns a controllable test dummy NPC to test weapons, batons, and CPR.",
            "es": "Crea un dummy de pruebas para testear armas, arrestos y RCP."
        }
    },
    {
        "command": "/ms removedummy <name>",
        "aliases": "/ms",
        "permission": "minecity.admin",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Removes a spawned test dummy.",
            "es": "Elimina un dummy de pruebas activo."
        }
    },
    {
        "command": "/lp editor",
        "aliases": "/luckperms editor",
        "permission": "luckperms.editor",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Generates a secure LuckPerms web editor session link.",
            "es": "Genera un enlace seguro para editar rangos y permisos en la web."
        }
    },
    {
        "command": "/lp user <user> info",
        "aliases": "/lp u info",
        "permission": "luckperms.user.info",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Inspects a citizen's inherited ranks and active permission nodes.",
            "es": "Inspecciona los grupos y permisos asignados a un jugador."
        }
    },
    {
        "command": "/lp user <user> parent set <group>",
        "aliases": "/lp u parent",
        "permission": "luckperms.user.parent.set",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Assigns a citizen to a LuckPerms group (e.g., police, paramedic, vip).",
            "es": "Asigna a un jugador a un rango oficial (policía, médico, vip)."
        }
    },
    {
        "command": "/lp group <group> permission set <node>",
        "aliases": "/lp g perm",
        "permission": "luckperms.group.permission.set",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Grants a permission node to a whole LuckPerms rank group.",
            "es": "Otorga un nodo de permiso a todo un rango de LuckPerms."
        }
    },
    {
        "command": "/lp verbose on",
        "aliases": "/lp verbose",
        "permission": "luckperms.verbose",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Monitors live permission checks in chat for real-time debugging.",
            "es": "Monitorea en vivo qué permisos comprueba cada plugin."
        }
    },
    {
        "command": "/spawn",
        "aliases": "/espawn",
        "permission": "essentials.spawn",
        "category": "Core & Roleplay",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Teleports to the Los Santos Airport arrivals safezone.",
            "es": "Teletransporta a la zona segura del aeropuerto de llegadas."
        }
    },
    {
        "command": "/setspawn",
        "aliases": "/esetspawn",
        "permission": "essentials.setspawn",
        "category": "Core & Roleplay",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Sets the main city arrival spawn location.",
            "es": "Establece el punto principal de aparición del servidor."
        }
    },
    {
        "command": "/home [name]",
        "aliases": "/homes",
        "permission": "essentials.home",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Teleports you to your saved apartment/home point.",
            "es": "Teletransporta a tu casa o departamento guardado."
        }
    },
    {
        "command": "/sethome [name]",
        "aliases": "/esethome",
        "permission": "essentials.sethome",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Saves your current location inside an owned property.",
            "es": "Guarda tu ubicación actual como hogar personal."
        }
    },
    {
        "command": "/warp [name]",
        "aliases": "/warps",
        "permission": "essentials.warp",
        "category": "Core & Roleplay",
        "plugin": "EssentialsWarpGUI",
        "desc": {
            "en": "Opens the visual city travel menu or teleports to a city district.",
            "es": "Abre el menú visual de warps a zonas de la ciudad (Banco, Hospital, Comisaría)."
        }
    },
    {
        "command": "/tpa <player>",
        "aliases": "/tpask",
        "permission": "essentials.tpa",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Requests permission to teleport to another citizen.",
            "es": "Envía solicitud para teletransportarte hacia otro jugador."
        }
    },
    {
        "command": "/tpaccept",
        "aliases": "/tpyes",
        "permission": "essentials.tpaccept",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Accepts an incoming teleportation request.",
            "es": "Acepta una solicitud de teletransporte entrante."
        }
    },
    {
        "command": "/back",
        "aliases": "/return",
        "permission": "essentials.back",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Returns to your previous location prior to teleportation.",
            "es": "Regresa a la última posición antes de teletransportarte."
        }
    },
    {
        "command": "/bal",
        "aliases": "/balance, /money",
        "permission": "essentials.balance",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Checks your current cash balance in your pocket.",
            "es": "Muestra el dinero en efectivo que llevas en la billetera."
        }
    },
    {
        "command": "/pay <player> <amount>",
        "aliases": "/epay",
        "permission": "essentials.pay",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Pays cash directly to another citizen.",
            "es": "Transfiere dinero en efectivo directamente a otro jugador."
        }
    },
    {
        "command": "/baltop",
        "aliases": "/balancetop",
        "permission": "essentials.balancetop",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Shows the wealthiest players leaderboard in the city.",
            "es": "Muestra la clasificación de los ciudadanos con más dinero."
        }
    },
    {
        "command": "/msg <player> <text>",
        "aliases": "/tell, /pm, /w",
        "permission": "essentials.msg",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Sends a private direct whisper/message to an online player.",
            "es": "Envía un mensaje privado directo a otro jugador."
        }
    },
    {
        "command": "/afk",
        "aliases": "/away",
        "permission": "essentials.afk",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Marks your character as Away From Keyboard.",
            "es": "Marca tu personaje como ausente (AFK)."
        }
    },
    {
        "command": "/nick <nickname>",
        "aliases": "/enick",
        "permission": "essentials.nick",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Changes your roleplay display nickname.",
            "es": "Cambia tu apodo visible en el chat y tabulador."
        }
    },
    {
        "command": "/fly",
        "aliases": "/efly",
        "permission": "essentials.fly",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Toggles flight mode (Staff / VIP).",
            "es": "Activa o desactiva el modo de vuelo."
        }
    },
    {
        "command": "/heal [player]",
        "aliases": "/eheal",
        "permission": "essentials.heal",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Restores full health and removes negative status effects.",
            "es": "Restaura la salud al máximo (Staff)."
        }
    },
    {
        "command": "/feed [player]",
        "aliases": "/eat",
        "permission": "essentials.feed",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Restores hunger bar to full.",
            "es": "Rellena la barra de hambre al máximo."
        }
    },
    {
        "command": "/vanish",
        "aliases": "/v",
        "permission": "essentials.vanish",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Makes staff invisible to normal citizens for stealth moderation.",
            "es": "Hace invisible al staff para moderar sin ser visto."
        }
    },
    {
        "command": "/invsee <player>",
        "aliases": "/einvsee",
        "permission": "essentials.invsee",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Inspects and moderates another player's inventory.",
            "es": "Inspecciona el inventario de otro ciudadano (Staff)."
        }
    },
    {
        "command": "/kick <player> [reason]",
        "aliases": "/ekick",
        "permission": "essentials.kick",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Disconnects a player from the server with a notice.",
            "es": "Expulsa a un jugador del servidor."
        }
    },
    {
        "command": "/ban <player> [reason]",
        "aliases": "/eban",
        "permission": "essentials.ban",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Permanently bans a rulebreaker from the server.",
            "es": "Banea permanentemente a un jugador infractor."
        }
    },
    {
        "command": "/mute <player> [time]",
        "aliases": "/emute",
        "permission": "essentials.mute",
        "category": "Core & Roleplay",
        "plugin": "EssentialsX",
        "desc": {
            "en": "Silences a disruptive player in chat channels.",
            "es": "Silencia a un jugador en el chat público."
        }
    },
    {
        "command": "/deluxemenus open <menu>",
        "aliases": "/dm open",
        "permission": "deluxemenus.open",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Opens custom city service GUIs and interactive menus.",
            "es": "Abre menús personalizados de servicios de la ciudad."
        }
    },
    {
        "command": "/deluxemenus reload",
        "aliases": "/dm reload",
        "permission": "deluxemenus.reload",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Reloads all custom GUI configurations.",
            "es": "Recarga las configuraciones de menús GUI."
        }
    },
    {
        "command": "/papi ecloud download <exp>",
        "aliases": "/placeholderapi",
        "permission": "placeholderapi.ecloud.download",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Downloads and installs official PlaceholderAPI expansions.",
            "es": "Descarga e instala expansiones de PlaceholderAPI."
        }
    },
    {
        "command": "/papi parse me <placeholder>",
        "aliases": "/papi parse",
        "permission": "placeholderapi.parse",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Tests and previews live placeholder output in chat.",
            "es": "Prueba y previsualiza el resultado real de cualquier variable PAPI."
        }
    },
    {
        "command": "/papi reload",
        "aliases": "/placeholderapi reload",
        "permission": "placeholderapi.reload",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Reloads PlaceholderAPI configuration and expansions.",
            "es": "Recarga las variables y expansiones de PlaceholderAPI."
        }
    },
    {
        "command": "/vault-info",
        "aliases": "-",
        "permission": "vault.admin",
        "category": "Core & Roleplay",
        "plugin": "Vault",
        "desc": {
            "en": "Displays active Vault economy and permission providers.",
            "es": "Muestra el proveedor de economía y permisos enlazado a Vault."
        }
    },
    {
        "command": "/mycmd reload",
        "aliases": "/mycommand",
        "permission": "mycommand.admin",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Reloads all custom command aliases (/car, /carcall, /crew).",
            "es": "Recarga todos los alias y comandos personalizados."
        }
    },
    {
        "command": "/car",
        "aliases": "/qav garage, /garage",
        "permission": "qualityarmoryvehicles.garage",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Opens your personal vehicle garage GUI to view and spawn owned cars.",
            "es": "Abre tu garaje personal para ver y sacar tus vehículos propios."
        }
    },
    {
        "command": "/carcall",
        "aliases": "/qav callback",
        "permission": "qualityarmoryvehicles.callback",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Saves and stores your active vehicle safely back into your garage.",
            "es": "Guarda y almacena tu vehículo activo de vuelta en el garaje para evitar robos."
        }
    },
    {
        "command": "/carsit1",
        "aliases": "/carsit2, /carsit3",
        "permission": "qualityarmoryvehicles.setaspassager",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Seats you inside passenger seat 1, 2, or 3 of a vehicle.",
            "es": "Te sienta como pasajero en los asientos 1, 2 o 3 del vehículo."
        }
    },
    {
        "command": "/car-drive",
        "aliases": "/qav setaspassager -1",
        "permission": "qualityarmoryvehicles.setaspassager",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Switches your position back into the driver's seat.",
            "es": "Te mueve de copiloto al asiento del conductor."
        }
    },
    {
        "command": "/qav shop",
        "aliases": "/vehicleshop",
        "permission": "qualityarmoryvehicles.shop",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Opens the official dealership vehicle catalog.",
            "es": "Abre el catálogo de compra de vehículos del concesionario."
        }
    },
    {
        "command": "/qav give <vehicle> <player>",
        "aliases": "/qav",
        "permission": "qualityarmoryvehicles.give",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Grants a vehicle voucher/item directly to a citizen.",
            "es": "Entrega un vehículo directamente a un ciudadano (Admin)."
        }
    },
    {
        "command": "/qav spawnVehicle <vehicle>",
        "aliases": "/qav",
        "permission": "qualityarmoryvehicles.spawn",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Spawns a physical 3D vehicle instance at your coordinates.",
            "es": "Spawnea un vehículo 3D directamente en tu ubicación (Admin)."
        }
    },
    {
        "command": "/qav callbackAll",
        "aliases": "/qav",
        "permission": "qualityarmoryvehicles.admin",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Safely recalls every active spawned vehicle on the server back to garages.",
            "es": "Recoge y devuelve al garaje todos los vehículos activos del mapa."
        }
    },
    {
        "command": "/qav removeNearbyVehicles <r>",
        "aliases": "/qav",
        "permission": "qualityarmoryvehicles.removenearbyvehicles",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles",
        "desc": {
            "en": "Clears abandoned or glitched vehicles within a radius.",
            "es": "Elimina vehículos abandonados o trabados dentro de un radio."
        }
    },
    {
        "command": "/vehicle info",
        "aliases": "/mtv info",
        "permission": "None (Everyone)",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Displays fuel percentage, license plate, owner, and speed stats.",
            "es": "Muestra matrícula, combustible, dueño y velocidad del vehículo."
        }
    },
    {
        "command": "/vehicle public",
        "aliases": "/mtv public",
        "permission": "None (Everyone)",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Allows any player to enter your vehicle as a passenger.",
            "es": "Desbloquea el vehículo para que cualquier pasajero pueda subir."
        }
    },
    {
        "command": "/vehicle private",
        "aliases": "/mtv private",
        "permission": "None (Everyone)",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Locks your vehicle so only authorized riders/members can enter.",
            "es": "Bloquea el vehículo solo para miembros autorizados."
        }
    },
    {
        "command": "/vehicle addmember <player>",
        "aliases": "/mtv addmember",
        "permission": "None (Everyone)",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Authorizes a friend to ride and access your vehicle.",
            "es": "Añade a un amigo como miembro autorizado de tu vehículo."
        }
    },
    {
        "command": "/vehicle repair",
        "aliases": "/mtv repair",
        "permission": "mtvehicles.repair",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Repairs collision damage on an owned vehicle.",
            "es": "Repara los daños mecánicos del vehículo."
        }
    },
    {
        "command": "/vehicle benzine",
        "aliases": "/mtv refuel",
        "permission": "mtvehicles.benzine",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Opens fuel canister purchase menu and refuels tank.",
            "es": "Abre el menú de bidones de gasolina y repostaje."
        }
    },
    {
        "command": "/vehicle menu",
        "aliases": "/mtv menu",
        "permission": "mtvehicles.menu",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Opens full admin catalog of all MTVehicles models.",
            "es": "Abre el catálogo maestro administrativo de modelos MTVehicles."
        }
    },
    {
        "command": "/vehicle givecar <player>",
        "aliases": "/mtv givecar",
        "permission": "mtvehicles.givecar",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Spawns and gives an MTVehicles vehicle to a player.",
            "es": "Entrega un coche de MTVehicles a un jugador (Admin)."
        }
    },
    {
        "command": "/elevator",
        "aliases": "/elevators, /se",
        "permission": "elevator.use",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Creates or lists functional elevators for multi-story buildings.",
            "es": "Lista y configura elevadores funcionales en edificios de la ciudad."
        }
    },
    {
        "command": "/elevatoradmin reload",
        "aliases": "/seadmin",
        "permission": "elevator.admin",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Reloads Elevator settings and elevator distances.",
            "es": "Recarga las configuraciones de ascensores."
        }
    },
    {
        "command": "/qa",
        "aliases": "/QualityArmory",
        "permission": "qualityarmory.default",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Main firearms hub for 3D guns, ammo, and attachments.",
            "es": "Menú principal de armas de fuego 3D y accesorios."
        }
    },
    {
        "command": "/qa shop",
        "aliases": "/gunshop",
        "permission": "qualityarmory.shop",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Opens the Ammu-Nation weapon shop GUI to buy guns and ammo.",
            "es": "Abre la armería Ammu-Nation para comprar armas, balas y chalecos."
        }
    },
    {
        "command": "/qa craft",
        "aliases": "/gunsmith",
        "permission": "qualityarmory.craft",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Opens firearm crafting bench to assemble weapons and magazines.",
            "es": "Abre la mesa de fabricación balística para crear munición."
        }
    },
    {
        "command": "/qa give <player> <item>",
        "aliases": "/qa",
        "permission": "qualityarmory.give",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Gives any custom firearm, grenade, or attachment to a player.",
            "es": "Entrega cualquier arma, granada o mira táctica (Admin)."
        }
    },
    {
        "command": "/qa giveAmmo <ammo>",
        "aliases": "/qa",
        "permission": "qualityarmory.give",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Spawns a full stack of ammunition rounds.",
            "es": "Entrega un cargador completo de munición (Admin)."
        }
    },
    {
        "command": "/qa listItemIds",
        "aliases": "/qa",
        "permission": "qualityarmory.admin",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Prints all internal firearm and ammo identifiers.",
            "es": "Lista los IDs internos de todas las armas de QualityArmory."
        }
    },
    {
        "command": "/ei editor",
        "aliases": "/executableitems",
        "permission": "ei.cmd.editor",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Opens the in-game custom executable item creator GUI.",
            "es": "Abre el editor visual para crear armas, placas y objetos personalizados."
        }
    },
    {
        "command": "/ei give <player> <item>",
        "aliases": "/ei give",
        "permission": "ei.cmd.give",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Gives a custom ExecutableItem (police badge, contraband kit, etc.).",
            "es": "Entrega un objeto ejecutable especial a un jugador."
        }
    },
    {
        "command": "/ci give <item>",
        "aliases": "/commanditems",
        "permission": "commanditems.admin",
        "category": "Firearms & Equipment",
        "plugin": "CommandItems",
        "desc": {
            "en": "Gives a clickable command-bound roleplay item.",
            "es": "Entrega un ítem con comandos vinculados al hacer clic."
        }
    },
    {
        "command": "/arm",
        "aliases": "/regionmarket",
        "permission": "arm.member.gui",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Opens the real estate region management GUI.",
            "es": "Abre el menú gráfico de gestión inmobiliaria de ARM."
        }
    },
    {
        "command": "/arm info",
        "aliases": "/arm i",
        "permission": "arm.member.info",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Shows lease status, price, owner, and expiry of current property.",
            "es": "Muestra dueño, precio y vencimiento de la propiedad donde estás."
        }
    },
    {
        "command": "/arm listregions",
        "aliases": "/arm list",
        "permission": "arm.member.listregions",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Lists all apartments and shops you currently rent or own.",
            "es": "Lista todos tus apartamentos y locales alquilados o propios."
        }
    },
    {
        "command": "/arm tp <region>",
        "aliases": "/arm teleport",
        "permission": "arm.member.tp",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Teleports directly to the front door of your rented property.",
            "es": "Te teletransporta directamente a la puerta de tu apartamento."
        }
    },
    {
        "command": "/arm extend",
        "aliases": "/arm ext",
        "permission": "arm.member.extend",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Extends the rental contract period of your apartment.",
            "es": "Renueva y extiende el tiempo de alquiler de tu vivienda."
        }
    },
    {
        "command": "/arm addmember <player>",
        "aliases": "/arm add",
        "permission": "arm.member.addmember",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Grants roommates/friends build & chest access inside your property.",
            "es": "Añade a un compañero de piso para darle acceso a cofres y puertas."
        }
    },
    {
        "command": "/arm removemember <player>",
        "aliases": "/arm remove",
        "permission": "arm.member.removemember",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Revokes a roommate's access to your property.",
            "es": "Revoca el acceso de un miembro a tu vivienda."
        }
    },
    {
        "command": "/arm sellback",
        "aliases": "/arm unrent",
        "permission": "arm.member.sellback",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Terminates your property lease or sells your house back to the city.",
            "es": "Cancela el alquiler o vende tu casa de vuelta al mercado."
        }
    },
    {
        "command": "/arm restore",
        "aliases": "/arm reset",
        "permission": "arm.member.resetregionblocks",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Restores your property interior back to its original schematic.",
            "es": "Restaura los bloques del apartamento a su diseño original."
        }
    },
    {
        "command": "/arm create <type> <region>",
        "aliases": "/arm",
        "permission": "arm.admin.create.rentregion",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Creates a new rentable or sellable ARM property region (Admin).",
            "es": "Crea una nueva propiedad en alquiler o venta en ARM (Admin)."
        }
    },
    {
        "command": "/arm setprice <region> <price>",
        "aliases": "/arm",
        "permission": "arm.admin.setprice",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Updates the purchase or rental price of a property region.",
            "es": "Modifica el precio de venta o renta de una propiedad."
        }
    },
    {
        "command": "/rg define <id>",
        "aliases": "/region define",
        "permission": "worldguard.region.define",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Defines a new protected WorldGuard city zone from WorldEdit selection.",
            "es": "Crea una zona protegida de WorldGuard con tu selección."
        }
    },
    {
        "command": "/rg flag <id> <flag> <val>",
        "aliases": "/region flag",
        "permission": "worldguard.region.flag",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Configures zone flags (e.g., pvp deny, entry, chest-access).",
            "es": "Configura banderas de seguridad (pvp deny, build, entry)."
        }
    },
    {
        "command": "/rg info [id]",
        "aliases": "/region info",
        "permission": "worldguard.region.info",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Displays protection flags, owners, and priority of current zone.",
            "es": "Muestra banderas, dueños y prioridad de la zona actual."
        }
    },
    {
        "command": "//wand",
        "aliases": "-",
        "permission": "worldedit.wand",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Gives the WorldEdit wooden axe selection wand.",
            "es": "Entrega el hacha de selección espacial de WorldEdit."
        }
    },
    {
        "command": "//set <block>",
        "aliases": "-",
        "permission": "worldedit.region.set",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Fills the selected volume with the specified block type.",
            "es": "Rellena toda la región seleccionada con un bloque."
        }
    },
    {
        "command": "//copy",
        "aliases": "-",
        "permission": "worldedit.clipboard.copy",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Copies selected building architecture to your clipboard.",
            "es": "Copia edificios o estructuras al portapapeles."
        }
    },
    {
        "command": "//paste",
        "aliases": "-",
        "permission": "worldedit.clipboard.paste",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Pastes copied architecture at your location.",
            "es": "Pega la estructura copiada en tu ubicación."
        }
    },
    {
        "command": "//undo",
        "aliases": "-",
        "permission": "worldedit.history.undo",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Reverts the last architectural edit made.",
            "es": "Deshace el último cambio de construcción realizado."
        }
    },
    {
        "command": "/astools",
        "aliases": "/ast",
        "permission": "astools.use",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Opens ArmorStand pose/equipment editor for shop mannequins.",
            "es": "Abre el editor de ArmorStands para crear maniquíes decorativos."
        }
    },
    {
        "command": "/bank",
        "aliases": "/atm",
        "permission": "banklite.use",
        "category": "Economy & Banking",
        "plugin": "Bank Lite",
        "desc": {
            "en": "Opens your interactive ATM bank account GUI for cash & savings.",
            "es": "Abre tu cuenta bancaria ATM para depositar dinero y evitar robos."
        }
    },
    {
        "command": "/bank money open",
        "aliases": "/bank deposit",
        "permission": "banklite.use",
        "category": "Economy & Banking",
        "plugin": "Bank Lite",
        "desc": {
            "en": "Opens direct money deposit/withdrawal menu.",
            "es": "Abre directamente el menú de depósitos y retiros de efectivo."
        }
    },
    {
        "command": "/bank admin",
        "aliases": "/banklite",
        "permission": "banklite.admin",
        "category": "Economy & Banking",
        "plugin": "Bank Lite",
        "desc": {
            "en": "Admin management for city bank vaults and player balances.",
            "es": "Gestión administrativa de cuentas y bóvedas bancarias."
        }
    },
    {
        "command": "/ah",
        "aliases": "/auctionhouse, /auction",
        "permission": "auctionhouse.use",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Opens the metropolitan player Auction House market.",
            "es": "Abre la Casa de Subastas global entre jugadores."
        }
    },
    {
        "command": "/ah list <price>",
        "aliases": "/ah sell <price>",
        "permission": "auctionhouse.sell",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Lists the item held in your main hand on the auction market.",
            "es": "Publica en venta en subastas el objeto que tienes en la mano."
        }
    },
    {
        "command": "/ah expired",
        "aliases": "/ah return",
        "permission": "auctionhouse.expired",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Reclaims unsold items that expired from the auction market.",
            "es": "Recupera objetos no vendidos cuyo tiempo en subasta expiró."
        }
    },
    {
        "command": "/ah cancel",
        "aliases": "-",
        "permission": "auctionhouse.cancel",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Cancels your active listings on the Auction House.",
            "es": "Cancela tus artículos actualmente publicados en subastas."
        }
    },
    {
        "command": "/salary",
        "aliases": "/salarynext, /payday",
        "permission": "salarymanager.next",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Shows your scheduled wage and time until next paycheck deposit.",
            "es": "Muestra cuánto cobrarás y cuánto falta para tu próximo sueldo."
        }
    },
    {
        "command": "/salarylist",
        "aliases": "/listsalary",
        "permission": "salarymanager.list",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Lists configured salary tiers across all city groups/jobs.",
            "es": "Lista los sueldos configurados por rango o empleo en la ciudad."
        }
    },
    {
        "command": "/salarypay",
        "aliases": "-",
        "permission": "salarymanager.pay",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Forces an immediate payroll payout to all online employees (Admin).",
            "es": "Ejecuta el pago inmediato de nómina a todos los conectados."
        }
    },
    {
        "command": "/dtltraders list",
        "aliases": "/traders, /dtl",
        "permission": "dtlTraders.commands.list",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Lists all NPC commercial shops configured across the city.",
            "es": "Lista todas las tiendas de comerciantes NPC configuradas."
        }
    },
    {
        "command": "/dtltraders editshop [name]",
        "aliases": "/dtl editshop",
        "permission": "dtlTraders.commands.edit",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Opens the GUI merchant editor to adjust buy/sell prices.",
            "es": "Abre el editor visual para cambiar precios de tiendas NPC."
        }
    },
    {
        "command": "/shopkeeper",
        "aliases": "/shopkeepers",
        "permission": "shopkeeper.create",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Creates and manages custom player villager market stalls.",
            "es": "Crea y gestiona puestos de venta propios con aldeanos."
        }
    },
    {
        "command": "/crew",
        "aliases": "/robbery crew",
        "permission": "robbery.use",
        "category": "Crime, Gangs & Heists",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Creates or joins a heist crew for bank & jewelry store robberies.",
            "es": "Crea o únete a un equipo para coordinar atracos a bancos y joyerías."
        }
    },
    {
        "command": "/robbery start",
        "aliases": "/robbery",
        "permission": "robbery.use",
        "category": "Crime, Gangs & Heists",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Initiates an armed robbery on an eligible bank vault or shop.",
            "es": "Inicia un atraco armado en una bóveda o tienda autorizada."
        }
    },
    {
        "command": "/robbery accept",
        "aliases": "/robbery help",
        "permission": "robbery.use",
        "category": "Crime, Gangs & Heists",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Accepts a robbery crew invitation from a gang leader.",
            "es": "Acepta la invitación para integrarte a un equipo de atraco."
        }
    },
    {
        "command": "/gang",
        "aliases": "/gangs",
        "permission": "excellentgangs.use",
        "category": "Crime, Gangs & Heists",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Opens street gang dashboard: roster, gang bank, vault, and turf stats.",
            "es": "Abre el panel de pandillas: miembros, banco de banda, baúl y territorio."
        }
    },
    {
        "command": "/gang create <name>",
        "aliases": "/gang new",
        "permission": "excellentgangs.use",
        "category": "Crime, Gangs & Heists",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Establishes a new street gang.",
            "es": "Funda una nueva pandilla callejera en la ciudad."
        }
    },
    {
        "command": "/gang vault",
        "aliases": "/gang chest",
        "permission": "excellentgangs.use",
        "category": "Crime, Gangs & Heists",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Opens the shared contraband chest for your street gang.",
            "es": "Abre el baúl compartido para guardar armas y botín de tu banda."
        }
    },
    {
        "command": "/clan",
        "aliases": "/clansplus, /clans",
        "permission": "None (Everyone)",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Opens the crime syndicate menu: alliance wars, upgrades & chat.",
            "es": "Abre el menú principal de sindicatos y familias criminales."
        }
    },
    {
        "command": "/clan create <name>",
        "aliases": "/clansplus create",
        "permission": "None (Everyone)",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Creates an official crime family clan.",
            "es": "Crea una nueva familia criminal o clan."
        }
    },
    {
        "command": "/clan openstorage",
        "aliases": "/clan storage",
        "permission": "None (Everyone)",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Opens the crime syndicate's shared storage vault.",
            "es": "Abre el almacén compartido del clan."
        }
    },
    {
        "command": "/clan chat",
        "aliases": "/clan pvp",
        "permission": "None (Everyone)",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Toggles private syndicate radio chat or friendly fire.",
            "es": "Activa el chat privado del clan o alterna el fuego amigo."
        }
    },
    {
        "command": "/clansplusadmin",
        "aliases": "/clanadmin",
        "permission": "clanplus.admin",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Admin tools to edit, delete, or inspect clan data and storage.",
            "es": "Herramientas de administrador para gestionar o auditar clanes."
        }
    },
    {
        "command": "/drugs",
        "aliases": "/drugbook",
        "permission": "drugs.get",
        "category": "Crime, Gangs & Heists",
        "plugin": "Drugs",
        "desc": {
            "en": "Opens contraband crafting handbook and chemical recipes.",
            "es": "Entrega la guía de elaboración y efectos de drogas ilegales."
        }
    },
    {
        "command": "/phone",
        "aliases": "/Phone",
        "permission": "phone.use",
        "category": "Communication & Navigation",
        "plugin": "PhoneConnect",
        "desc": {
            "en": "Opens interactive 3D smartphone: calls, SMS, contacts & 911.",
            "es": "Abre tu smartphone interactivo: llamadas, mensajes, contactos y 911."
        }
    },
    {
        "command": "/hang",
        "aliases": "-",
        "permission": "None (Everyone)",
        "category": "Communication & Navigation",
        "plugin": "PhoneConnect",
        "desc": {
            "en": "Hangs up and ends your current voice/phone call.",
            "es": "Cuelga la llamada telefónica activa."
        }
    },
    {
        "command": "/givesim <player>",
        "aliases": "/customsim <num>",
        "permission": "phone.givesim",
        "category": "Communication & Navigation",
        "plugin": "PhoneConnect",
        "desc": {
            "en": "Issues a SIM card or custom vanity phone number (Admin).",
            "es": "Entrega tarjetas SIM o asigna números de teléfono personalizados."
        }
    },
    {
        "command": "/gps",
        "aliases": "/compass",
        "permission": "gps.commands.start",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Opens city GPS waypoints menu to start particle street directions.",
            "es": "Abre el menú de rutas GPS con flechas de partículas por las calles."
        }
    },
    {
        "command": "/gps stop",
        "aliases": "/gps cancel",
        "permission": "gps.commands.stop",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Stops active particle road navigation.",
            "es": "Detiene y oculta la ruta de navegación GPS."
        }
    },
    {
        "command": "/gps list",
        "aliases": "/gps help",
        "permission": "gps.commands.list",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Lists all available saved city GPS landmarks.",
            "es": "Lista todos los puntos de interés guardados en el GPS."
        }
    },
    {
        "command": "/card",
        "aliases": "/card name, /card age",
        "permission": "None (Everyone)",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Displays or edits your civilian roleplay ID card profile.",
            "es": "Muestra o edita los datos de tu tarjeta de identidad / DNI de rol."
        }
    },
    {
        "command": "/roll [max]",
        "aliases": "/dice",
        "permission": "None (Everyone)",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Rolls a random roleplay dice (default 1-6).",
            "es": "Tira un dado aleatorio de rol en el chat cercano."
        }
    },
    {
        "command": "/me <action>",
        "aliases": "/do <state>",
        "permission": "None (Everyone)",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Performs third-person physical actions or ambient scene states.",
            "es": "Describe acciones físicas en tercera persona (/me) o entorno (/do)."
        }
    },
    {
        "command": "/whisper <msg>",
        "aliases": "/w, /shout <msg>",
        "permission": "None (Everyone)",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Whispers privately (2m) or shouts loudly down the block.",
            "es": "Susurra en voz baja (2m) o grita a varias calles de distancia."
        }
    },
    {
        "command": "/ooc",
        "aliases": "/rp",
        "permission": "None (Everyone)",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Toggles Out-Of-Character chat channels.",
            "es": "Activa o silencia el chat fuera de rol (OOC)."
        }
    },
    {
        "command": "/dh list",
        "aliases": "/decentholograms",
        "permission": "dh.admin",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Lists all 3D text holograms placed in the city.",
            "es": "Lista todos los hologramas 3D colocados en el servidor."
        }
    },
    {
        "command": "/dh h create <name> <text>",
        "aliases": "/dh create",
        "permission": "dh.command.hologram.create",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Creates a new floating hologram at your coordinates.",
            "es": "Crea un nuevo holograma flotante en tus coordenadas."
        }
    },
    {
        "command": "/dh reload",
        "aliases": "/dh",
        "permission": "dh.command.reload",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Reloads all holograms and display entities.",
            "es": "Recarga todos los hologramas y displays 3D."
        }
    },
    {
        "command": "/imageframe create <name> <url>",
        "aliases": "/iframe",
        "permission": "imageframe.create",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Creates HD static or animated billboards from image URLs.",
            "es": "Crea vallas publicitarias o posters HD en marcos desde una URL."
        }
    },
    {
        "command": "/image create <url>",
        "aliases": "/images",
        "permission": "images.command.create",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Places custom wall-sized PNG murals on city buildings.",
            "es": "Coloca murales y carteles personalizados de pared."
        }
    },
    {
        "command": "/tab reload",
        "aliases": "/tab cpu, /tab bossbar",
        "permission": "tab.admin",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Reloads scoreboard HUD, bossbar, and nametag configuration.",
            "es": "Recarga el HUD del scoreboard, barra superior (bossbar) y nametags."
        }
    },
    {
        "command": "/job",
        "aliases": "/quests, /quest, /q",
        "permission": "quests.quest",
        "category": "Jobs & Progression",
        "plugin": "QuestsMinecity",
        "desc": {
            "en": "Opens civilian employment GUI: courier deliveries, mining & taxi.",
            "es": "Abre la bolsa de empleo para misiones de repartidor, minero y taxi."
        }
    },
    {
        "command": "/jobcancel",
        "aliases": "/quest quit",
        "permission": "quests.quest",
        "category": "Jobs & Progression",
        "plugin": "QuestsMinecity",
        "desc": {
            "en": "Cancels your currently active delivery job contract.",
            "es": "Abandona el encargo o trabajo activo actual."
        }
    },
    {
        "command": "/questadmin give <player> <q>",
        "aliases": "/qaadmin",
        "permission": "quests.admin",
        "category": "Jobs & Progression",
        "plugin": "QuestsMinecity",
        "desc": {
            "en": "Admin command to assign, finish, or award quest points.",
            "es": "Asigna misiones o otorga puntos de misión a ciudadanos (Admin)."
        }
    },
    {
        "command": "/ar check",
        "aliases": "/autorank, /level",
        "permission": "autorank.check",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Checks your playtime hours and progress toward next civic rank.",
            "es": "Revisa tus horas jugadas y requisitos para ascender de rango."
        }
    },
    {
        "command": "/ar leaderboard",
        "aliases": "/ar times",
        "permission": "autorank.check",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Views citizens with the most active playtime hours.",
            "es": "Muestra el ranking de ciudadanos con más horas en la ciudad."
        }
    },
    {
        "command": "/class",
        "aliases": "/skillapi",
        "permission": "skillapi.basic",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Opens RPG character class, attribute points, and stamina skill tree.",
            "es": "Abre el árbol de habilidades para subir fuerza, agilidad y resistencia."
        }
    },
    {
        "command": "/rm create <name>",
        "aliases": "/realmines",
        "permission": "realmines.admin",
        "category": "Jobs & Progression",
        "plugin": "RealMines",
        "desc": {
            "en": "Creates or resets automated industrial mining quarries (Admin).",
            "es": "Crea y gestiona las canteras automáticas de minería (Admin)."
        }
    },
    {
        "command": "/st play <id>",
        "aliases": "/servertutorial",
        "permission": "servertutorialplus.command.play",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Starts the interactive guided tour of Los Santos landmarks.",
            "es": "Inicia el tour guiado oficial por los edificios de la ciudad."
        }
    },
    {
        "command": "/roulette",
        "aliases": "/casino",
        "permission": "roulette.help",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Joins a live spinning roulette table in the Las Venturas casino.",
            "es": "Permite jugar y apostar fichas en mesas de Ruleta del casino."
        }
    },
    {
        "command": "/videopoker",
        "aliases": "/poker",
        "permission": "videopoker.play",
        "category": "Casino, Sports & Leisure",
        "plugin": "VideoPoker",
        "desc": {
            "en": "Plays 5-card draw video poker at casino machines.",
            "es": "Inicia partidas en máquinas de Video Póker en el casino."
        }
    },
    {
        "command": "/lottery",
        "aliases": "/lotto",
        "permission": "lottery.gui",
        "category": "Casino, Sports & Leisure",
        "plugin": "Lottery",
        "desc": {
            "en": "Buys city lottery tickets for hourly/daily cash jackpots.",
            "es": "Compra boletos para el bote acumulado de la lotería municipal."
        }
    },
    {
        "command": "/blockball",
        "aliases": "/blockball club join",
        "permission": "blockball.command",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Joins stadium soccer matches with realistic ball physics.",
            "es": "Únete a partidos de fútbol 3D en el estadio municipal."
        }
    },
    {
        "command": "/emf shop",
        "aliases": "/emf",
        "permission": "emf.shop",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Sells custom caught marina fish for cash payouts.",
            "es": "Abre la lonja de pescado para vender capturas raras por dinero."
        }
    },
    {
        "command": "/emf top",
        "aliases": "/emf help",
        "permission": "emf.top",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Checks current leaders in active marina fishing competitions.",
            "es": "Muestra la tabla de líderes del torneo de pesca deportiva."
        }
    },
    {
        "command": "/emf toggle",
        "aliases": "-",
        "permission": "emf.toggle",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Toggles custom fish bossbars and competition announcements.",
            "es": "Activa o desactiva avisos y bossbar de torneos de pesca."
        }
    },
    {
        "command": "/emf admin competition start",
        "aliases": "/emf admin",
        "permission": "emf.admin",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Starts, stops, or reloads marina fishing competitions (Admin).",
            "es": "Inicia o gestiona competencias de pesca deportiva (Admin)."
        }
    },
    {
        "command": "/gameboy play",
        "aliases": "/gameboy stop",
        "permission": "None (Everyone)",
        "category": "Casino, Sports & Leisure",
        "plugin": "Gameboy",
        "desc": {
            "en": "Launches playable GameBoy ROMs on an interactive handheld map.",
            "es": "Inicia cartuchos jugables en una consola GameBoy dentro del juego."
        }
    },
    {
        "command": "/pocketgames",
        "aliases": "/pg",
        "permission": "pocketgames.commands.menu",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Opens GUI arcade minigames: Snake, 2048, Flappy Bird & Connect 4.",
            "es": "Abre minijuegos arcade en menú: Snake, 2048, Flappy Bird y Conecta 4."
        }
    },
    {
        "command": "/music",
        "aliases": "/jukebox, /radio",
        "permission": "music.command",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Tunes into custom city radio tracks and club jukebox playlists.",
            "es": "Abre el reproductor de radio y música ambiental de clubes."
        }
    },
    {
        "command": "/sit",
        "aliases": "/gsit",
        "permission": "GSit.Sit",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Sits realistically on chairs, stairs, benches, or ground.",
            "es": "Permite sentarse en sillas, escaleras, bancas o en el suelo."
        }
    },
    {
        "command": "/lay",
        "aliases": "/glay",
        "permission": "GSit.Lay",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Lays down horizontally on beds, couches, or pavement.",
            "es": "Acuesta al personaje sobre camas o superficies planas."
        }
    },
    {
        "command": "/crawl",
        "aliases": "/gcrawl",
        "permission": "GSit.Crawl",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Crawls prone to pass through 1-block vents and tunnels.",
            "es": "Permite arrastrarse boca abajo por conductos de 1 bloque."
        }
    },
    {
        "command": "/spin",
        "aliases": "/bellyflop, /legsup",
        "permission": "GSit.Spin",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Performs extra acrobatic roleplay poses on command.",
            "es": "Realiza poses adicionales (girar, panzazo, piernas arriba)."
        }
    },
    {
        "command": "/gmenu",
        "aliases": "/cosmetics, /gmenu main",
        "permission": "gadgetsmenu.menu",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Opens cosmetics GUI: hats, particles, suits, and gadgets.",
            "es": "Abre el menú de cosméticos: sombreros, partículas y trajes."
        }
    },
    {
        "command": "/gmysteryboxes",
        "aliases": "/mysterydust",
        "permission": "gadgetsmenu.mysteryboxes",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Opens and manages cosmetic mystery vaults and dust.",
            "es": "Gestiona cajas misteriosas cosméticas y polvo mágico."
        }
    },
    {
        "command": "/gizmo",
        "aliases": "/g",
        "permission": "gizmo.show",
        "category": "Casino, Sports & Leisure",
        "plugin": "Gizmo",
        "desc": {
            "en": "Spawns visual interactive decorative gadgets.",
            "es": "Activa accesorios visuales decorativos en el mundo."
        }
    },
    {
        "command": "/npc create <name>",
        "aliases": "/citizens",
        "permission": "citizens.npc.create",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Creates an interactive city NPC at your coordinates.",
            "es": "Crea un nuevo NPC ciudadano, cajero o vendedor."
        }
    },
    {
        "command": "/npc skin <player>",
        "aliases": "/npc look, /npc type",
        "permission": "citizens.npc.skin",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Customizes an NPC's skin, mob type, or eye-tracking behavior.",
            "es": "Personaliza la skin, tipo de entidad y mirada del NPC."
        }
    },
    {
        "command": "/npc trait <name>",
        "aliases": "/trait",
        "permission": "citizens.npc.trait",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Attaches functional plugin traits (shopkeeper, sentinel, trader).",
            "es": "Vincula funciones (vendedor, guardia, misiones) al NPC."
        }
    },
    {
        "command": "/citizens reload",
        "aliases": "/denizen, /ex",
        "permission": "citizens.admin",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens & Denizen",
        "desc": {
            "en": "Reloads all city NPCs and Denizen interactive scripts.",
            "es": "Recarga todos los NPCs y scripts interactivos de Denizen."
        }
    },
    {
        "command": "/uf",
        "aliases": "/ultimatefood",
        "permission": "uf.menu",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Opens custom gourmet food & beverage catalog.",
            "es": "Abre el catálogo de alimentos gourmet, café, sodas y hamburguesas."
        }
    },
    {
        "command": "/crates open <crate>",
        "aliases": "/crates preview",
        "permission": "excellentcrates.crates.command.open",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Opens or previews reward loot crates.",
            "es": "Abre o previsualiza los premios de las cajas de botín."
        }
    },
    {
        "command": "/crates editor",
        "aliases": "/crates give",
        "permission": "excellentcrates.crates.command.editor",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Opens live in-game crate & reward probability editor (Admin).",
            "es": "Abre el editor de cajas y probabilidades dentro del juego (Admin)."
        }
    },
    {
        "command": "/cratekey balance",
        "aliases": "/cratekey giveall",
        "permission": "excellentcrates.keys.command.balance",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Checks virtual key balance or distributes keys server-wide.",
            "es": "Consulta tu saldo de llaves o reparte llaves a todo el servidor."
        }
    },
    {
        "command": "/kit [name]",
        "aliases": "/kit claim, /kit preview",
        "permission": "playerkits.use",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Claims starter citizen gear, daily rations, or VIP kits.",
            "es": "Reclama kits iniciales de ciudadano, raciones diarias o kits VIP."
        }
    },
    {
        "command": "/rewards",
        "aliases": "/streak",
        "permission": "therewards.use",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Claims daily login streak bonuses and playtime rewards.",
            "es": "Reclama recompensas diarias por racha de conexión."
        }
    },
    {
        "command": "/report <player> <reason>",
        "aliases": "/reports",
        "permission": "None (Everyone)",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerReport",
        "desc": {
            "en": "Submits rulebreaker reports directly to online staff.",
            "es": "Envía reportes de jugadores infractores al staff conectado."
        }
    },
    {
        "command": "/chunky start",
        "aliases": "/chunky radius, /chunky pause",
        "permission": "chunky.command.start",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Pre-generates map chunks ahead of time for lag-free driving.",
            "es": "Pre-genera los chunks del mapa para evitar tirones al conducir."
        }
    },
    {
        "command": "/abyss",
        "aliases": "/lagfixer",
        "permission": "lagfixer.command",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Clears dropped clutter entities safely to maintain 20.0 TPS.",
            "es": "Limpia objetos tirados en el suelo manteniendo estables los 20 TPS."
        }
    },
    {
        "command": "/rs give",
        "aliases": "/rosestacker",
        "permission": "rosestacker.give",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Manages stacked items/entities to preserve FPS in downtown areas.",
            "es": "Gestiona el apilado de ítems y entidades para proteger tus FPS."
        }
    },
    {
        "command": "/plhide reload",
        "aliases": "/forcepack",
        "permission": "plhide.reload",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Pl-Hide & ForcePack",
        "desc": {
            "en": "Reloads command security mask and mandatory 3D resource pack.",
            "es": "Recarga el ocultamiento de comandos y el paquete de texturas 3D."
        }
    },
    {
        "command": "/autorank",
        "aliases": "/ar, /rank, /level",
        "permission": "autorank.autorank",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Master command of AutoRank",
            "es": "[Jobs & Progression] Master command of AutoRank"
        }
    },
    {
        "command": "/trait",
        "aliases": "-",
        "permission": "citizens.trait.help",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Trait commands",
            "es": "[NPCs, Rewards & Optimization] Trait commands"
        }
    },
    {
        "command": "/template",
        "aliases": "/tpl",
        "permission": "citizens.templates.help",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Template commands",
            "es": "[NPCs, Rewards & Optimization] Template commands"
        }
    },
    {
        "command": "/waypoints",
        "aliases": "/wp",
        "permission": "citizens.waypoints.help",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Waypoint commands",
            "es": "[NPCs, Rewards & Optimization] Waypoint commands"
        }
    },
    {
        "command": "/clanadmin",
        "aliases": "-",
        "permission": "clansplus.clanadmin",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Executes /clanadmin command.",
            "es": "[Crime, Gangs & Heists] Executes /clanadmin command."
        }
    },
    {
        "command": "/commanditems",
        "aliases": "/cmditems, /ci",
        "permission": "commanditems.commanditems",
        "category": "Firearms & Equipment",
        "plugin": "CommandItems",
        "desc": {
            "en": "Main command for CommandItems",
            "es": "[Firearms & Equipment] Main command for CommandItems"
        }
    },
    {
        "command": "/customdeathdrops",
        "aliases": "-",
        "permission": "customdeathdrops.customdeathdrops",
        "category": "Crime, Gangs & Heists",
        "plugin": "CustomDeathDrops",
        "desc": {
            "en": "Reloads the plugin!",
            "es": "[Crime, Gangs & Heists] Reloads the plugin!"
        }
    },
    {
        "command": "/denizen",
        "aliases": "-",
        "permission": "denizen.basic",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Lists denizen commands.",
            "es": "[NPCs, Rewards & Optimization] Lists denizen commands."
        }
    },
    {
        "command": "/denizenclickable",
        "aliases": "-",
        "permission": "denizen.clickable",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Executes a Denizen clickable command.",
            "es": "[NPCs, Rewards & Optimization] Executes a Denizen clickable command."
        }
    },
    {
        "command": "/ex",
        "aliases": "-",
        "permission": "denizen.ex",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Executes a Denizen script command.",
            "es": "[NPCs, Rewards & Optimization] Executes a Denizen script command."
        }
    },
    {
        "command": "/exs",
        "aliases": "-",
        "permission": "denizen.ex",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Executes a Denizen script command in a sustained queue.",
            "es": "[NPCs, Rewards & Optimization] Executes a Denizen script command in a sustained queue."
        }
    },
    {
        "command": "/drugbook",
        "aliases": "-",
        "permission": "drugs.drugbook",
        "category": "Crime, Gangs & Heists",
        "plugin": "Drugs",
        "desc": {
            "en": "Gives you the Drugbook to receive Drugs/craft Drugs.",
            "es": "[Crime, Gangs & Heists] Gives you the Drugbook to receive Drugs/craft Drugs."
        }
    },
    {
        "command": "/drl",
        "aliases": "-",
        "permission": "drugs.drl",
        "category": "Crime, Gangs & Heists",
        "plugin": "Drugs",
        "desc": {
            "en": "Reloads your Plugin.",
            "es": "[Crime, Gangs & Heists] Reloads your Plugin."
        }
    },
    {
        "command": "/dsc",
        "aliases": "-",
        "permission": "drugs.dsc",
        "category": "Crime, Gangs & Heists",
        "plugin": "Drugs",
        "desc": {
            "en": "Server Count",
            "es": "[Crime, Gangs & Heists] Server Count"
        }
    },
    {
        "command": "/toggleshout",
        "aliases": "/etoggleshout",
        "permission": "essentialschat.toggleshout",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Toggles whether you are talking in shout mode",
            "es": "[Communication & Navigation] Toggles whether you are talking in shout mode"
        }
    },
    {
        "command": "/antioch",
        "aliases": "/eantioch, /grenade, /egrenade, /tnt, /etnt",
        "permission": "essentials.antioch",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "A little surprise for operators.",
            "es": "[Core & Roleplay] A little surprise for operators."
        }
    },
    {
        "command": "/anvil",
        "aliases": "/eanvil",
        "permission": "essentials.anvil",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up an Anvil.",
            "es": "[Core & Roleplay] Opens up an Anvil."
        }
    },
    {
        "command": "/backup",
        "aliases": "/ebackup",
        "permission": "essentials.backup",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Runs the backup if configured.",
            "es": "[Core & Roleplay] Runs the backup if configured."
        }
    },
    {
        "command": "/balance",
        "aliases": "/bal, /ebal, /ebalance, /money, /emoney",
        "permission": "essentials.balance",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "States the current balance of a player.",
            "es": "[Core & Roleplay] States the current balance of a player."
        }
    },
    {
        "command": "/balancetop",
        "aliases": "/ebalancetop, /baltop, /ebaltop",
        "permission": "essentials.balancetop",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Gets the top balance values.",
            "es": "[Core & Roleplay] Gets the top balance values."
        }
    },
    {
        "command": "/banip",
        "aliases": "/ebanip",
        "permission": "essentials.banip",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Bans an IP address.",
            "es": "[Core & Roleplay] Bans an IP address."
        }
    },
    {
        "command": "/beezooka",
        "aliases": "/ebeezooka, /beecannon, /ebeecannon",
        "permission": "essentials.beezooka",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Throw an exploding bee at your opponent.",
            "es": "[Core & Roleplay] Throw an exploding bee at your opponent."
        }
    },
    {
        "command": "/book",
        "aliases": "/ebook",
        "permission": "essentials.book",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows reopening and editing of sealed books.",
            "es": "[Core & Roleplay] Allows reopening and editing of sealed books."
        }
    },
    {
        "command": "/bottom",
        "aliases": "/ebottom",
        "permission": "essentials.bottom",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to the lowest block at your current position.",
            "es": "[Core & Roleplay] Teleport to the lowest block at your current position."
        }
    },
    {
        "command": "/break",
        "aliases": "/ebreak",
        "permission": "essentials.break",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Breaks the block you are looking at.",
            "es": "[Core & Roleplay] Breaks the block you are looking at."
        }
    },
    {
        "command": "/broadcast",
        "aliases": "/bc, /ebc, /bcast, /ebcast, /ebroadcast, /shout, /eshout",
        "permission": "essentials.broadcast",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Broadcasts a message to the entire server.",
            "es": "[Core & Roleplay] Broadcasts a message to the entire server."
        }
    },
    {
        "command": "/broadcastworld",
        "aliases": "/bcw, /ebcw, /bcastw, /ebcastw, /ebroadcastworld, /shoutworld, /eshoutworld",
        "permission": "essentials.broadcastworld",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Broadcasts a message to a world.",
            "es": "[Core & Roleplay] Broadcasts a message to a world."
        }
    },
    {
        "command": "/bigtree",
        "aliases": "/ebigtree, /largetree, /elargetree",
        "permission": "essentials.bigtree",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawn a big tree where you are looking.",
            "es": "[Core & Roleplay] Spawn a big tree where you are looking."
        }
    },
    {
        "command": "/burn",
        "aliases": "/eburn",
        "permission": "essentials.burn",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Set a player on fire.",
            "es": "[Core & Roleplay] Set a player on fire."
        }
    },
    {
        "command": "/cartographytable",
        "aliases": "/ecartographytable, /carttable, /ecarttable",
        "permission": "essentials.cartographytable",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a cartography table.",
            "es": "[Core & Roleplay] Opens up a cartography table."
        }
    },
    {
        "command": "/clearinventory",
        "aliases": "/ci, /eci, /clean, /eclean, /clear, /eclear, /clearinvent, /eclearinvent, /eclearinventory",
        "permission": "essentials.clearinventory",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Clear all items in your inventory.",
            "es": "[Core & Roleplay] Clear all items in your inventory."
        }
    },
    {
        "command": "/clearinventoryconfirmtoggle",
        "aliases": "/eclearinventoryconfirmtoggle, /clearinventoryconfirmoff, /eclearinventoryconfirmoff, /clearconfirmoff, /eclearconfirmoff, /clearconfirmon, /eclearconfirmon, /clearconfirm, /eclearconfirm",
        "permission": "essentials.clearinventoryconfirmtoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles whether you are prompted to confirm inventory clears.",
            "es": "[Core & Roleplay] Toggles whether you are prompted to confirm inventory clears."
        }
    },
    {
        "command": "/condense",
        "aliases": "/econdense, /compact, /ecompact, /blocks, /eblocks, /toblocks, /etoblocks",
        "permission": "essentials.condense",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Condenses items into a more compact blocks.",
            "es": "[Core & Roleplay] Condenses items into a more compact blocks."
        }
    },
    {
        "command": "/compass",
        "aliases": "/ecompass, /direction, /edirection",
        "permission": "essentials.compass",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Describes your current bearing.",
            "es": "[Core & Roleplay] Describes your current bearing."
        }
    },
    {
        "command": "/createkit",
        "aliases": "/kitcreate, /createk, /kc, /ck",
        "permission": "essentials.createkit",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Create a kit in game!",
            "es": "[Core & Roleplay] Create a kit in game!"
        }
    },
    {
        "command": "/customtext",
        "aliases": "-",
        "permission": "essentials.customtext",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows you to create custom text commands.",
            "es": "[Core & Roleplay] Allows you to create custom text commands."
        }
    },
    {
        "command": "/delhome",
        "aliases": "/edelhome, /remhome, /eremhome, /rmhome, /ermhome",
        "permission": "essentials.delhome",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Removes a home.",
            "es": "[Core & Roleplay] Removes a home."
        }
    },
    {
        "command": "/deljail",
        "aliases": "/edeljail, /remjail, /eremjail, /rmjail, /ermjail",
        "permission": "essentials.deljail",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Removes a jail.",
            "es": "[Core & Roleplay] Removes a jail."
        }
    },
    {
        "command": "/delkit",
        "aliases": "/edelkit, /remkit, /eremkit, /rmkit, /ermkit, /deletekit, /edeletekit",
        "permission": "essentials.delkit",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Deletes the specified kit.",
            "es": "[Core & Roleplay] Deletes the specified kit."
        }
    },
    {
        "command": "/delwarp",
        "aliases": "/edelwarp, /remwarp, /eremwarp, /rmwarp, /ermwarp",
        "permission": "essentials.delwarp",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Deletes the specified warp.",
            "es": "[Core & Roleplay] Deletes the specified warp."
        }
    },
    {
        "command": "/depth",
        "aliases": "/edepth, /height, /eheight",
        "permission": "essentials.depth",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "States current depth, relative to sea level.",
            "es": "[Core & Roleplay] States current depth, relative to sea level."
        }
    },
    {
        "command": "/disposal",
        "aliases": "/edisposal, /trash, /etrash",
        "permission": "essentials.disposal",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens a portable disposal menu.",
            "es": "[Core & Roleplay] Opens a portable disposal menu."
        }
    },
    {
        "command": "/eco",
        "aliases": "/eeco, /economy, /eeconomy",
        "permission": "essentials.eco",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Manages the server economy.",
            "es": "[Core & Roleplay] Manages the server economy."
        }
    },
    {
        "command": "/enchant",
        "aliases": "/eenchant, /enchantment, /eenchantment",
        "permission": "essentials.enchant",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Enchants the item the user is holding.",
            "es": "[Core & Roleplay] Enchants the item the user is holding."
        }
    },
    {
        "command": "/enderchest",
        "aliases": "/echest, /eechest, /eenderchest, /endersee, /eendersee, /ec, /eec",
        "permission": "essentials.enderchest",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Lets you see inside an enderchest.",
            "es": "[Core & Roleplay] Lets you see inside an enderchest."
        }
    },
    {
        "command": "/essentials",
        "aliases": "/eessentials, /ess, /eess, /essversion",
        "permission": "essentials.essentials",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Reloads essentials.",
            "es": "[Core & Roleplay] Reloads essentials."
        }
    },
    {
        "command": "/exp",
        "aliases": "/eexp, /xp",
        "permission": "essentials.exp",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Give, set, reset, or look at a players experience.",
            "es": "[Core & Roleplay] Give, set, reset, or look at a players experience."
        }
    },
    {
        "command": "/ext",
        "aliases": "/eext, /extinguish, /eextinguish",
        "permission": "essentials.ext",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Extinguish players.",
            "es": "[Core & Roleplay] Extinguish players."
        }
    },
    {
        "command": "/fireball",
        "aliases": "/efireball, /fireentity, /efireentity, /fireskull, /efireskull",
        "permission": "essentials.fireball",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Throw a fireball or other assorted projectiles.",
            "es": "[Core & Roleplay] Throw a fireball or other assorted projectiles."
        }
    },
    {
        "command": "/firework",
        "aliases": "/efirework",
        "permission": "essentials.firework",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows you to modify a stack of fireworks.",
            "es": "[Core & Roleplay] Allows you to modify a stack of fireworks."
        }
    },
    {
        "command": "/gamemode",
        "aliases": "/adventure, /eadventure, /adventuremode, /eadventuremode, /creative, /ecreative, /eecreative, /creativemode, /ecreativemode, /egamemode, /gm, /egm, /gma, /egma, /gmc, /egmc, /gms, /egms, /gmt, /egmt, /survival, /esurvival, /survivalmode, /esurvivalmode, /gmsp, /sp, /egmsp, /spec, /spectator",
        "permission": "essentials.gamemode",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Change player gamemode.",
            "es": "[Core & Roleplay] Change player gamemode."
        }
    },
    {
        "command": "/gc",
        "aliases": "/lag, /elag, /egc, /mem, /emem, /memory, /ememory, /uptime, /euptime, /tps, /etps, /entities, /eentities",
        "permission": "essentials.gc",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Reports memory, uptime and tick info.",
            "es": "[Core & Roleplay] Reports memory, uptime and tick info."
        }
    },
    {
        "command": "/getpos",
        "aliases": "/coords, /egetpos, /position, /eposition, /whereami, /ewhereami, /getlocation, /egetlocation, /getloc, /egetloc",
        "permission": "essentials.getpos",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Get your current coordinates or those of a player.",
            "es": "[Core & Roleplay] Get your current coordinates or those of a player."
        }
    },
    {
        "command": "/give",
        "aliases": "/egive",
        "permission": "essentials.give",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Give a player an item.",
            "es": "[Core & Roleplay] Give a player an item."
        }
    },
    {
        "command": "/god",
        "aliases": "/egod, /godmode, /egodmode, /tgm, /etgm",
        "permission": "essentials.god",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Enables your godly powers.",
            "es": "[Core & Roleplay] Enables your godly powers."
        }
    },
    {
        "command": "/grindstone",
        "aliases": "/egrindstone",
        "permission": "essentials.grindstone",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a grindstone.",
            "es": "[Core & Roleplay] Opens up a grindstone."
        }
    },
    {
        "command": "/hat",
        "aliases": "/ehat, /head, /ehead",
        "permission": "essentials.hat",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Get some cool new headgear.",
            "es": "[Core & Roleplay] Get some cool new headgear."
        }
    },
    {
        "command": "/help",
        "aliases": "/ehelp",
        "permission": "essentials.help",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Views a list of available commands.",
            "es": "[Core & Roleplay] Views a list of available commands."
        }
    },
    {
        "command": "/helpop",
        "aliases": "/ac, /eac, /amsg, /eamsg, /ehelpop",
        "permission": "essentials.helpop",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Message online admins.",
            "es": "[Core & Roleplay] Message online admins."
        }
    },
    {
        "command": "/ice",
        "aliases": "/eice, /efreeze",
        "permission": "essentials.ice",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Cools a player off.",
            "es": "[Core & Roleplay] Cools a player off."
        }
    },
    {
        "command": "/ignore",
        "aliases": "/eignore, /unignore, /eunignore, /delignore, /edelignore, /remignore, /eremignore, /rmignore, /ermignore",
        "permission": "essentials.ignore",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Ignore or unignore other players.",
            "es": "[Core & Roleplay] Ignore or unignore other players."
        }
    },
    {
        "command": "/info",
        "aliases": "/about, /eabout, /ifo, /eifo, /einfo, /inform, /einform, /news, /enews",
        "permission": "essentials.info",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Shows information set by the server owner.",
            "es": "[Core & Roleplay] Shows information set by the server owner."
        }
    },
    {
        "command": "/item",
        "aliases": "/i, /eitem, /ei",
        "permission": "essentials.item",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawn an item.",
            "es": "[Core & Roleplay] Spawn an item."
        }
    },
    {
        "command": "/itemdb",
        "aliases": "/dura, /edura, /durability, /edurability, /eitemdb, /itemno, /eitemno",
        "permission": "essentials.itemdb",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Searches for an item.",
            "es": "[Core & Roleplay] Searches for an item."
        }
    },
    {
        "command": "/itemlore",
        "aliases": "/lore, /elore, /ilore, /eilore, /eitemlore",
        "permission": "essentials.itemlore",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Edit the lore of an item.",
            "es": "[Core & Roleplay] Edit the lore of an item."
        }
    },
    {
        "command": "/itemname",
        "aliases": "/iname, /einame, /eitemname, /itemrename, /irename, /eitemrename, /eirename",
        "permission": "essentials.itemname",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Names an item.",
            "es": "[Core & Roleplay] Names an item."
        }
    },
    {
        "command": "/jailedplayers",
        "aliases": "/ejailedplayers, /ejailed, /ejp",
        "permission": "essentials.jailedplayers",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "List all jailed players.",
            "es": "[Core & Roleplay] List all jailed players."
        }
    },
    {
        "command": "/jails",
        "aliases": "/ejails",
        "permission": "essentials.jails",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "List all jails.",
            "es": "[Core & Roleplay] List all jails."
        }
    },
    {
        "command": "/jump",
        "aliases": "/j, /ej, /ejump, /jumpto, /ejumpto",
        "permission": "essentials.jump",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Jumps to the nearest block in the line of sight.",
            "es": "[Core & Roleplay] Jumps to the nearest block in the line of sight."
        }
    },
    {
        "command": "/kickall",
        "aliases": "/ekickall",
        "permission": "essentials.kickall",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Kicks all players off the server except the issuer.",
            "es": "[Core & Roleplay] Kicks all players off the server except the issuer."
        }
    },
    {
        "command": "/kill",
        "aliases": "/ekill",
        "permission": "essentials.kill",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Kills specified player.",
            "es": "[Core & Roleplay] Kills specified player."
        }
    },
    {
        "command": "/kitreset",
        "aliases": "/ekitreset, /kitr, /ekitr, /resetkit, /eresetkit",
        "permission": "essentials.kitreset",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Resets the cooldown on the specified kit.",
            "es": "[Core & Roleplay] Resets the cooldown on the specified kit."
        }
    },
    {
        "command": "/kittycannon",
        "aliases": "/ekittycannon",
        "permission": "essentials.kittycannon",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Throw an exploding kitten at your opponent.",
            "es": "[Core & Roleplay] Throw an exploding kitten at your opponent."
        }
    },
    {
        "command": "/lightning",
        "aliases": "/elightning, /shock, /eshock, /smite, /esmite, /strike, /estrike, /thor, /ethor",
        "permission": "essentials.lightning",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "The power of Thor. Strike at cursor or player.",
            "es": "[Core & Roleplay] The power of Thor. Strike at cursor or player."
        }
    },
    {
        "command": "/list",
        "aliases": "/elist, /online, /eonline, /playerlist, /eplayerlist, /plist, /eplist, /who, /ewho",
        "permission": "essentials.list",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "List all online players.",
            "es": "[Core & Roleplay] List all online players."
        }
    },
    {
        "command": "/loom",
        "aliases": "/eloom",
        "permission": "essentials.loom",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a loom.",
            "es": "[Core & Roleplay] Opens up a loom."
        }
    },
    {
        "command": "/mail",
        "aliases": "/email, /eemail, /memo, /ememo",
        "permission": "essentials.mail",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Manages inter-player, intra-server mail.",
            "es": "[Core & Roleplay] Manages inter-player, intra-server mail."
        }
    },
    {
        "command": "/more",
        "aliases": "/emore",
        "permission": "essentials.more",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Fills the item stack in hand to specified amount, or to maximum size if none is specified.",
            "es": "[Core & Roleplay] Fills the item stack in hand to specified amount, or to maximum size if none is specified."
        }
    },
    {
        "command": "/motd",
        "aliases": "/emotd",
        "permission": "essentials.motd",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Views the Message Of The Day.",
            "es": "[Core & Roleplay] Views the Message Of The Day."
        }
    },
    {
        "command": "/msgtoggle",
        "aliases": "/emsgtoggle",
        "permission": "essentials.msgtoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Blocks receiving all private messages.",
            "es": "[Core & Roleplay] Blocks receiving all private messages."
        }
    },
    {
        "command": "/near",
        "aliases": "/enear, /nearby, /enearby",
        "permission": "essentials.near",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Lists the players near by or around a player.",
            "es": "[Core & Roleplay] Lists the players near by or around a player."
        }
    },
    {
        "command": "/nuke",
        "aliases": "/enuke",
        "permission": "essentials.nuke",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "May death rain upon them.",
            "es": "[Core & Roleplay] May death rain upon them."
        }
    },
    {
        "command": "/tpoffline",
        "aliases": "/otp, /offlinetp, /tpoff, /tpoffline, /etpoffline",
        "permission": "essentials.tpoffline",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to a player's last known logout location",
            "es": "[Core & Roleplay] Teleport to a player's last known logout location"
        }
    },
    {
        "command": "/paytoggle",
        "aliases": "/epaytoggle, /payoff, /epayoff, /payon, /epayon",
        "permission": "essentials.paytoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles whether you are accepting payments.",
            "es": "[Core & Roleplay] Toggles whether you are accepting payments."
        }
    },
    {
        "command": "/payconfirmtoggle",
        "aliases": "/epayconfirmtoggle, /payconfirmoff, /epayconfirmoff, /payconfirmon, /epayconfirmon, /payconfirm, /epayconfirm",
        "permission": "essentials.payconfirmtoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles whether you are prompted to confirm payments.",
            "es": "[Core & Roleplay] Toggles whether you are prompted to confirm payments."
        }
    },
    {
        "command": "/ping",
        "aliases": "/echo, /eecho, /eping, /pong, /epong",
        "permission": "essentials.ping",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Pong!",
            "es": "[Core & Roleplay] Pong!"
        }
    },
    {
        "command": "/playtime",
        "aliases": "/eplaytime",
        "permission": "essentials.playtime",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Shows a player's time played in game",
            "es": "[Core & Roleplay] Shows a player's time played in game"
        }
    },
    {
        "command": "/potion",
        "aliases": "/epotion, /elixer, /eelixer",
        "permission": "essentials.potion",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Adds custom potion effects to a potion.",
            "es": "[Core & Roleplay] Adds custom potion effects to a potion."
        }
    },
    {
        "command": "/powertool",
        "aliases": "/epowertool, /pt, /ept",
        "permission": "essentials.powertool",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Assigns a command to the item in hand.",
            "es": "[Core & Roleplay] Assigns a command to the item in hand."
        }
    },
    {
        "command": "/powertoollist",
        "aliases": "/epowertoollist, /ptlist, /eptlist",
        "permission": "essentials.powertoollist",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Lists all current powertools.",
            "es": "[Core & Roleplay] Lists all current powertools."
        }
    },
    {
        "command": "/powertooltoggle",
        "aliases": "/epowertooltoggle, /ptt, /eptt, /pttoggle, /epttoggle",
        "permission": "essentials.powertooltoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Enables or disables all current powertools.",
            "es": "[Core & Roleplay] Enables or disables all current powertools."
        }
    },
    {
        "command": "/ptime",
        "aliases": "/playertime, /eplayertime, /eptime",
        "permission": "essentials.ptime",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Adjust player's client time. Add @ prefix to fix.",
            "es": "[Core & Roleplay] Adjust player's client time. Add @ prefix to fix."
        }
    },
    {
        "command": "/pweather",
        "aliases": "/playerweather, /eplayerweather, /epweather",
        "permission": "essentials.pweather",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Adjust a player's weather",
            "es": "[Core & Roleplay] Adjust a player's weather"
        }
    },
    {
        "command": "/r",
        "aliases": "/er, /reply, /ereply",
        "permission": "essentials.r",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Quickly reply to the last player to message you.",
            "es": "[Core & Roleplay] Quickly reply to the last player to message you."
        }
    },
    {
        "command": "/rtoggle",
        "aliases": "/ertoggle, /replytoggle, /ereplytoggle",
        "permission": "essentials.rtoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Change whether the recipient of the reply is last recipient or last sender",
            "es": "[Core & Roleplay] Change whether the recipient of the reply is last recipient or last sender"
        }
    },
    {
        "command": "/realname",
        "aliases": "/erealname",
        "permission": "essentials.realname",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Displays the username of a user based on nick.",
            "es": "[Core & Roleplay] Displays the username of a user based on nick."
        }
    },
    {
        "command": "/recipe",
        "aliases": "/formula, /eformula, /method, /emethod, /erecipe, /recipes, /erecipes",
        "permission": "essentials.recipe",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Displays how to craft items.",
            "es": "[Core & Roleplay] Displays how to craft items."
        }
    },
    {
        "command": "/remove",
        "aliases": "/eremove, /butcher, /ebutcher, /killall, /ekillall, /mobkill, /emobkill",
        "permission": "essentials.remove",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Removes entities in your world.",
            "es": "[Core & Roleplay] Removes entities in your world."
        }
    },
    {
        "command": "/renamehome",
        "aliases": "/erenamehome",
        "permission": "essentials.renamehome",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Renames a home.",
            "es": "[Core & Roleplay] Renames a home."
        }
    },
    {
        "command": "/repair",
        "aliases": "/fix, /efix, /erepair",
        "permission": "essentials.repair",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Repairs the durability of one or all items.",
            "es": "[Core & Roleplay] Repairs the durability of one or all items."
        }
    },
    {
        "command": "/rest",
        "aliases": "/erest",
        "permission": "essentials.rest",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Rests you or the given player.",
            "es": "[Core & Roleplay] Rests you or the given player."
        }
    },
    {
        "command": "/rules",
        "aliases": "/erules",
        "permission": "essentials.rules",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Views the server rules.",
            "es": "[Core & Roleplay] Views the server rules."
        }
    },
    {
        "command": "/seen",
        "aliases": "/eseen, /ealts, /alts",
        "permission": "essentials.seen",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Shows the last logout time of a player.",
            "es": "[Core & Roleplay] Shows the last logout time of a player."
        }
    },
    {
        "command": "/sell",
        "aliases": "/esell",
        "permission": "essentials.sell",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Sells the item currently in your hand.",
            "es": "[Core & Roleplay] Sells the item currently in your hand."
        }
    },
    {
        "command": "/setjail",
        "aliases": "/esetjail, /createjail, /ecreatejail",
        "permission": "essentials.setjail",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Creates a jail where you specified named [jailname].",
            "es": "[Core & Roleplay] Creates a jail where you specified named [jailname]."
        }
    },
    {
        "command": "/settpr",
        "aliases": "/esettpr, /settprandom, /esettprandom",
        "permission": "essentials.settpr",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Set the random teleport location and parameters.",
            "es": "[Core & Roleplay] Set the random teleport location and parameters."
        }
    },
    {
        "command": "/setwarp",
        "aliases": "/createwarp, /ecreatewarp, /esetwarp",
        "permission": "essentials.setwarp",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Creates a new warp.",
            "es": "[Core & Roleplay] Creates a new warp."
        }
    },
    {
        "command": "/setworth",
        "aliases": "/esetworth",
        "permission": "essentials.setworth",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Set the sell value of an item.",
            "es": "[Core & Roleplay] Set the sell value of an item."
        }
    },
    {
        "command": "/showkit",
        "aliases": "/kitpreview, /preview, /kitshow",
        "permission": "essentials.showkit",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Show contents of a kit.",
            "es": "[Core & Roleplay] Show contents of a kit."
        }
    },
    {
        "command": "/editsign",
        "aliases": "/sign, /esign, /eeditsign",
        "permission": "essentials.editsign",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Edits a sign in the world.",
            "es": "[Core & Roleplay] Edits a sign in the world."
        }
    },
    {
        "command": "/skull",
        "aliases": "/eskull, /playerskull, /eplayerskull, /head, /ehead",
        "permission": "essentials.skull",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Set the owner of a player skull",
            "es": "[Core & Roleplay] Set the owner of a player skull"
        }
    },
    {
        "command": "/smithingtable",
        "aliases": "/esmithingtable, /smithtable, /esmithtable",
        "permission": "essentials.smithingtable",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a smithing table.",
            "es": "[Core & Roleplay] Opens up a smithing table."
        }
    },
    {
        "command": "/socialspy",
        "aliases": "/esocialspy",
        "permission": "essentials.socialspy",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Toggles if you can see msg/mail commands in chat.",
            "es": "[Core & Roleplay] Toggles if you can see msg/mail commands in chat."
        }
    },
    {
        "command": "/spawner",
        "aliases": "/changems, /echangems, /espawner, /mobspawner, /emobspawner",
        "permission": "essentials.spawner",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Change the mob type of a spawner.",
            "es": "[Core & Roleplay] Change the mob type of a spawner."
        }
    },
    {
        "command": "/spawnmob",
        "aliases": "/mob, /emob, /spawnentity, /espawnentity, /espawnmob",
        "permission": "essentials.spawnmob",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawns a mob.",
            "es": "[Core & Roleplay] Spawns a mob."
        }
    },
    {
        "command": "/speed",
        "aliases": "/flyspeed, /eflyspeed, /fspeed, /efspeed, /espeed, /walkspeed, /ewalkspeed, /wspeed, /ewspeed",
        "permission": "essentials.speed",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Change your speed limits.",
            "es": "[Core & Roleplay] Change your speed limits."
        }
    },
    {
        "command": "/stonecutter",
        "aliases": "/estonecutter",
        "permission": "essentials.stonecutter",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a stonecutter.",
            "es": "[Core & Roleplay] Opens up a stonecutter."
        }
    },
    {
        "command": "/sudo",
        "aliases": "/esudo",
        "permission": "essentials.sudo",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Make another user perform a command.",
            "es": "[Core & Roleplay] Make another user perform a command."
        }
    },
    {
        "command": "/suicide",
        "aliases": "/esuicide",
        "permission": "essentials.suicide",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Causes you to perish.",
            "es": "[Core & Roleplay] Causes you to perish."
        }
    },
    {
        "command": "/tempban",
        "aliases": "/etempban",
        "permission": "essentials.tempban",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Temporary ban a user.",
            "es": "[Core & Roleplay] Temporary ban a user."
        }
    },
    {
        "command": "/tempbanip",
        "aliases": "/etempbanip",
        "permission": "essentials.tempbanip",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Temporarily ban an IP Address.",
            "es": "[Core & Roleplay] Temporarily ban an IP Address."
        }
    },
    {
        "command": "/thunder",
        "aliases": "/ethunder",
        "permission": "essentials.thunder",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Enable/disable thunder.",
            "es": "[Core & Roleplay] Enable/disable thunder."
        }
    },
    {
        "command": "/time",
        "aliases": "/day, /eday, /night, /enight, /etime",
        "permission": "essentials.time",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Display/Change the world time. Defaults to current world.",
            "es": "[Core & Roleplay] Display/Change the world time. Defaults to current world."
        }
    },
    {
        "command": "/togglejail",
        "aliases": "/jail, /ejail, /tjail, /etjail, /etogglejail, /unjail, /eunjail",
        "permission": "essentials.togglejail",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Jails/Unjails a player, TPs them to the jail specified.",
            "es": "[Core & Roleplay] Jails/Unjails a player, TPs them to the jail specified."
        }
    },
    {
        "command": "/top",
        "aliases": "/etop",
        "permission": "essentials.top",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to the highest block at your current position.",
            "es": "[Core & Roleplay] Teleport to the highest block at your current position."
        }
    },
    {
        "command": "/tp",
        "aliases": "/tele, /etele, /teleport, /eteleport, /etp, /tp2p, /etp2p",
        "permission": "essentials.tp",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to a player.",
            "es": "[Core & Roleplay] Teleport to a player."
        }
    },
    {
        "command": "/tpaall",
        "aliases": "/etpaall",
        "permission": "essentials.tpaall",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Requests all players online to teleport to you.",
            "es": "[Core & Roleplay] Requests all players online to teleport to you."
        }
    },
    {
        "command": "/tpahere",
        "aliases": "/etpahere",
        "permission": "essentials.tpahere",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Request that the specified player teleport to you.",
            "es": "[Core & Roleplay] Request that the specified player teleport to you."
        }
    },
    {
        "command": "/tpall",
        "aliases": "/etpall",
        "permission": "essentials.tpall",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport all online players to another player.",
            "es": "[Core & Roleplay] Teleport all online players to another player."
        }
    },
    {
        "command": "/tpauto",
        "aliases": "/etpauto",
        "permission": "essentials.tpauto",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Automatically accept teleportation requests.",
            "es": "[Core & Roleplay] Automatically accept teleportation requests."
        }
    },
    {
        "command": "/tpacancel",
        "aliases": "/etpacancel",
        "permission": "essentials.tpacancel",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Cancel all outstanding teleport requests. Specify [player] to cancel requests with them.",
            "es": "[Core & Roleplay] Cancel all outstanding teleport requests. Specify [player] to cancel requests with them."
        }
    },
    {
        "command": "/tpdeny",
        "aliases": "/etpdeny, /tpno, /etpno",
        "permission": "essentials.tpdeny",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Rejects teleport requests.",
            "es": "[Core & Roleplay] Rejects teleport requests."
        }
    },
    {
        "command": "/tphere",
        "aliases": "/s, /etphere",
        "permission": "essentials.tphere",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport a player to you.",
            "es": "[Core & Roleplay] Teleport a player to you."
        }
    },
    {
        "command": "/tpo",
        "aliases": "/etpo",
        "permission": "essentials.tpo",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport override for tptoggle.",
            "es": "[Core & Roleplay] Teleport override for tptoggle."
        }
    },
    {
        "command": "/tpohere",
        "aliases": "/etpohere",
        "permission": "essentials.tpohere",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport here override for tptoggle.",
            "es": "[Core & Roleplay] Teleport here override for tptoggle."
        }
    },
    {
        "command": "/tppos",
        "aliases": "/etppos",
        "permission": "essentials.tppos",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport to coordinates.",
            "es": "[Core & Roleplay] Teleport to coordinates."
        }
    },
    {
        "command": "/tpr",
        "aliases": "/etpr, /tprandom, /etprandom",
        "permission": "essentials.tpr",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Teleport randomly.",
            "es": "[Core & Roleplay] Teleport randomly."
        }
    },
    {
        "command": "/tptoggle",
        "aliases": "/etptoggle",
        "permission": "essentials.tptoggle",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Blocks all forms of teleportation.",
            "es": "[Core & Roleplay] Blocks all forms of teleportation."
        }
    },
    {
        "command": "/tree",
        "aliases": "/etree",
        "permission": "essentials.tree",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Spawn a tree where you are looking.",
            "es": "[Core & Roleplay] Spawn a tree where you are looking."
        }
    },
    {
        "command": "/unban",
        "aliases": "/pardon, /eunban, /epardon",
        "permission": "essentials.unban",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Unbans the specified player.",
            "es": "[Core & Roleplay] Unbans the specified player."
        }
    },
    {
        "command": "/unbanip",
        "aliases": "/eunbanip, /pardonip, /epardonip",
        "permission": "essentials.unbanip",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Unbans the specified IP address.",
            "es": "[Core & Roleplay] Unbans the specified IP address."
        }
    },
    {
        "command": "/unlimited",
        "aliases": "/eunlimited, /ul, /unl, /eul, /eunl",
        "permission": "essentials.unlimited",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Allows the unlimited placing of items.",
            "es": "[Core & Roleplay] Allows the unlimited placing of items."
        }
    },
    {
        "command": "/warpinfo",
        "aliases": "/ewarpinfo",
        "permission": "essentials.warpinfo",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Finds location information for a specified warp.",
            "es": "[Core & Roleplay] Finds location information for a specified warp."
        }
    },
    {
        "command": "/weather",
        "aliases": "/rain, /erain, /sky, /esky, /storm, /estorm, /sun, /esun, /eweather",
        "permission": "essentials.weather",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Sets the weather.",
            "es": "[Core & Roleplay] Sets the weather."
        }
    },
    {
        "command": "/whois",
        "aliases": "/ewhois",
        "permission": "essentials.whois",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Determine basic information about the specified player.",
            "es": "[Core & Roleplay] Determine basic information about the specified player."
        }
    },
    {
        "command": "/workbench",
        "aliases": "/craft, /ecraft, /wb, /ewb, /wbench, /ewbench, /eworkbench",
        "permission": "essentials.workbench",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Opens up a workbench.",
            "es": "[Core & Roleplay] Opens up a workbench."
        }
    },
    {
        "command": "/world",
        "aliases": "/eworld",
        "permission": "essentials.world",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Switch between worlds.",
            "es": "[Core & Roleplay] Switch between worlds."
        }
    },
    {
        "command": "/worth",
        "aliases": "/eprice, /price, /eworth",
        "permission": "essentials.worth",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Calculates the worth of items in hand or as specified.",
            "es": "[Core & Roleplay] Calculates the worth of items in hand or as specified."
        }
    },
    {
        "command": "/globalpositioningsystem",
        "aliases": "/gps",
        "permission": "gps.globalpositioningsystem",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "GPS",
            "es": "[Communication & Navigation] GPS"
        }
    },
    {
        "command": "/gpsconfigurator",
        "aliases": "/gpsconfig, /gpsconf, /gpscon, /gpsc",
        "permission": "gps.gpsconfigurator",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Ingame GPS configurator",
            "es": "[Communication & Navigation] Ingame GPS configurator"
        }
    },
    {
        "command": "/gpsadmin",
        "aliases": "/gpsad, /gpsa",
        "permission": "gps.gpsadmin",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "GPS Admin commands",
            "es": "[Communication & Navigation] GPS Admin commands"
        }
    },
    {
        "command": "/gadgetsmenu",
        "aliases": "/gmenu",
        "permission": "gadgetsmenu.gadgetsmenu",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "GadgetsMenu main command.",
            "es": "[Casino, Sports & Leisure] GadgetsMenu main command."
        }
    },
    {
        "command": "/mysterydust",
        "aliases": "/dust",
        "permission": "gadgetsmenu.mysterydust",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "GadgetsMenu mystery dust command.",
            "es": "[Casino, Sports & Leisure] GadgetsMenu mystery dust command."
        }
    },
    {
        "command": "/adminmusic",
        "aliases": "/amusic",
        "permission": "music.command.admin",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Admin command for musics",
            "es": "[Casino, Sports & Leisure] Admin command for musics"
        }
    },
    {
        "command": "/luckperms",
        "aliases": "/lp, /perm, /perms, /permission, /permissions",
        "permission": "luckperms.luckperms",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Manage permissions",
            "es": "[Core & Roleplay] Manage permissions"
        }
    },
    {
        "command": "/minetopiavehicles",
        "aliases": "/mtv, /minetopiav, /mtvehicles, /mtvehicle, /vehicle",
        "permission": "mtvehicles.minetopiavehicles",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Executes /minetopiavehicles command.",
            "es": "[Vehicles & Transport] Executes /minetopiavehicles command."
        }
    },
    {
        "command": "/customsim",
        "aliases": "-",
        "permission": "phone.customsim",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Executes /customsim command.",
            "es": "[Communication & Navigation] Executes /customsim command."
        }
    },
    {
        "command": "/placeholderapi",
        "aliases": "/papi",
        "permission": "placeholderapi.placeholderapi",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "PlaceholderAPI Command",
            "es": "[Core & Roleplay] PlaceholderAPI Command"
        }
    },
    {
        "command": "/pocketgamesadmin",
        "aliases": "/pga, /pocketa, /pocketga, /pgamesa",
        "permission": "pocketgames.admin",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Pocket Games Admin Commands.",
            "es": "[Casino, Sports & Leisure] Pocket Games Admin Commands."
        }
    },
    {
        "command": "/protocol",
        "aliases": "-",
        "permission": "protocol.admin",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Performs administrative tasks regarding ProtocolLib.",
            "es": "[NPCs, Rewards & Optimization] Performs administrative tasks regarding ProtocolLib."
        }
    },
    {
        "command": "/packet",
        "aliases": "-",
        "permission": "protocol.admin",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Add or remove a simple packet listener.",
            "es": "[NPCs, Rewards & Optimization] Add or remove a simple packet listener."
        }
    },
    {
        "command": "/filter",
        "aliases": "/packet_filter",
        "permission": "protocol.admin",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Add or remove programmable filters to the packet listeners.",
            "es": "[NPCs, Rewards & Optimization] Add or remove programmable filters to the packet listeners."
        }
    },
    {
        "command": "/packetlog",
        "aliases": "-",
        "permission": "protocol.admin",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Logs hex representations of packets to a file or console",
            "es": "[NPCs, Rewards & Optimization] Logs hex representations of packets to a file or console"
        }
    },
    {
        "command": "/QualityArmory",
        "aliases": "/qa",
        "permission": "qualityarmory.QualityArmory",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Main command for QA",
            "es": "[Firearms & Equipment] Main command for QA"
        }
    },
    {
        "command": "/QualityArmoryVehicles",
        "aliases": "/qav",
        "permission": "qualityarmoryvehicles2.QualityArmoryVehicles",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "The main plugin command to manage vehicles",
            "es": "[Vehicles & Transport] The main plugin command to manage vehicles"
        }
    },
    {
        "command": "/garage",
        "aliases": "-",
        "permission": "qualityarmoryvehicles2.garage",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Open the garage",
            "es": "[Vehicles & Transport] Open the garage"
        }
    },
    {
        "command": "/score",
        "aliases": "-",
        "permission": "score.score",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "score command",
            "es": "[Firearms & Equipment] score command"
        }
    },
    {
        "command": "/salarysetperiod",
        "aliases": "-",
        "permission": "salarymanager.setperiod",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Set the period in seconds",
            "es": "[Economy & Banking] Set the period in seconds"
        }
    },
    {
        "command": "/salarynext",
        "aliases": "/payday, /nextsalary",
        "permission": "salarymanager.next",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "When is your next payday",
            "es": "[Economy & Banking] When is your next payday"
        }
    },
    {
        "command": "/salaryreload",
        "aliases": "-",
        "permission": "salarymanager.reload",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Reload the config",
            "es": "[Economy & Banking] Reload the config"
        }
    },
    {
        "command": "/salaryfrom",
        "aliases": "-",
        "permission": "salarymanager.from",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Setup an account where the money comes from",
            "es": "[Economy & Banking] Setup an account where the money comes from"
        }
    },
    {
        "command": "/servertutorial",
        "aliases": "/st",
        "permission": "servertutorialplus.servertutorial",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "All the servertutorial plus commands",
            "es": "[Jobs & Progression] All the servertutorial plus commands"
        }
    },
    {
        "command": "/ultimatefood",
        "aliases": "-",
        "permission": "ultimatefood.ultimatefood",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "The Ultimate Food plugin ;)",
            "es": "[NPCs, Rewards & Optimization] The Ultimate Food plugin ;)"
        }
    },
    {
        "command": "/vault-convert",
        "aliases": "-",
        "permission": "vault.admin",
        "category": "Core & Roleplay",
        "plugin": "Vault",
        "desc": {
            "en": "Converts all data in economy1 and dumps it into economy2",
            "es": "[Core & Roleplay] Converts all data in economy1 and dumps it into economy2"
        }
    },
    {
        "command": "/viaversion",
        "aliases": "/viaver, /vvbukkit",
        "permission": "viaversion.command # The permission is also referenced here to filter root suggestions (/via<tab>)",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Shows ViaVersion Version and more.",
            "es": "[NPCs, Rewards & Optimization] Shows ViaVersion Version and more."
        }
    },
    {
        "command": "/warpcfg",
        "aliases": "/warpconfig, /warpscfg, /warpsconfig",
        "permission": "essentialswarpgui.warpcfg",
        "category": "Core & Roleplay",
        "plugin": "EssentialsWarpGUI",
        "desc": {
            "en": "Modify the look-and-feel of the warps",
            "es": "[Core & Roleplay] Modify the look-and-feel of the warps"
        }
    }
],

  // 113 Verified PlaceholderAPI Variables
  placeholders: [
    {
        "placeholder": "%mcrppolice_stars%",
        "plugin": "MinecitySuite",
        "example": "3",
        "desc": {
            "en": "Raw integer count of player's active wanted stars (0 to 6).",
            "es": "Número entero de estrellas de búsqueda activas del jugador (0 a 6)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_stars_colored%",
        "plugin": "MinecitySuite",
        "example": "§6★★★§8☆☆☆",
        "desc": {
            "en": "Full visual 6-star gauge with gold active stars and gray inactive stars.",
            "es": "Barra visual completa de 6 estrellas con estrellas doradas y vacías."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_stars_display%",
        "plugin": "MinecitySuite",
        "example": "★★★",
        "desc": {
            "en": "Visual display showing only the active earned stars.",
            "es": "Muestra visual únicamente de las estrellas activas obtenidas."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_max_stars%",
        "plugin": "MinecitySuite",
        "example": "6",
        "desc": {
            "en": "Maximum allowed wanted stars configured on the server (6).",
            "es": "Máximo número de estrellas configurado en el servidor (6)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_is_wanted%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Returns Yes or No indicating if the player is actively pursued by police.",
            "es": "Devuelve Yes o No según si el jugador es buscado por la policía."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_wanted_status%",
        "plugin": "MinecitySuite",
        "example": "§c§lWANTED (3★)",
        "desc": {
            "en": "Formatted red bold wanted banner suitable for scoreboard HUDs.",
            "es": "Texto formateado en rojo y negrita ideal para el scoreboard."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_is_jailed%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Boolean indicating whether the player is currently serving a prison sentence.",
            "es": "Indica si el jugador se encuentra actualmente preso en la cárcel."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_jail_time_formatted%",
        "plugin": "MinecitySuite",
        "example": "04m 32s",
        "desc": {
            "en": "Remaining jail sentence formatted in minutes and seconds.",
            "es": "Tiempo restante de condena en prisión formateado en minutos y segundos."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrppolice_is_police%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Checks if the player is an authorized law enforcement officer.",
            "es": "Comprueba si el jugador es un agente de policía oficial."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_is_paramedic%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Checks if the player belongs to the emergency medical rescue service.",
            "es": "Comprueba si el jugador forma parte del cuerpo de paramédicos."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_is_on_duty%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Boolean indicating if the paramedic is clocked in and active on duty.",
            "es": "Indica si el paramédico está de servicio activo para recibir emergencias."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_is_sick%",
        "plugin": "MinecitySuite",
        "example": "Yes / No",
        "desc": {
            "en": "Indicates if the player is infected with a contagious disease or fracture.",
            "es": "Indica si el jugador tiene alguna enfermedad, sangrado o fractura."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_disease_formatted%",
        "plugin": "MinecitySuite",
        "example": "§cBroken Leg",
        "desc": {
            "en": "Name of active disease (Stomach Ache, Broken Leg, Sepsis) formatted with color.",
            "es": "Nombre coloreado de la enfermedad que padece el paciente."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_is_downed%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Indicates if the player is in the 60-second crawling incapacitated state.",
            "es": "Indica si el jugador está inconsciente en el suelo esperando reanimación."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_downed_seconds%",
        "plugin": "MinecitySuite",
        "example": "42",
        "desc": {
            "en": "Countdown seconds remaining before the downed player bleeds out permanently.",
            "es": "Segundos restantes de reanimación antes de que el jugador muera."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpparamedic_active_calls%",
        "plugin": "MinecitySuite",
        "example": "2",
        "desc": {
            "en": "Number of outstanding 911 medical emergency calls waiting for EMS.",
            "es": "Número de llamadas de emergencia 911 activas esperando respuesta médica."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpsurvival_hydration%",
        "plugin": "MinecitySuite",
        "example": "85.0",
        "desc": {
            "en": "Current hydration decimal percentage (0.0% to 100.0%).",
            "es": "Porcentaje decimal exacto de hidratación del jugador (0.0% a 100.0%)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpsurvival_hydration_percentage%",
        "plugin": "MinecitySuite",
        "example": "85%",
        "desc": {
            "en": "Rounded hydration percentage with percent sign.",
            "es": "Porcentaje redondeado de hidratación con símbolo %."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpsurvival_hydration_bar%",
        "plugin": "MinecitySuite",
        "example": "■■■■■■■■□□",
        "desc": {
            "en": "Visual 10-segment water hydration bar for actionbars and scoreboards.",
            "es": "Barra visual de 10 segmentos de agua para actionbar o HUD."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpsurvival_is_dehydrated%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Returns true when hydration drops to 0%, triggering damage ticks.",
            "es": "Indica si el jugador está al 0% de hidratación sufriendo deshidratación severa."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%mcrpsurvival_is_starving%",
        "plugin": "MinecitySuite",
        "example": "true / false",
        "desc": {
            "en": "Returns true when hunger reaches 0%, triggering collapse damage.",
            "es": "Indica si el jugador está famélico al 0% de comida sufriendo daño."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%vault_eco_balance%",
        "plugin": "Vault & Essentials",
        "example": "15420.50",
        "desc": {
            "en": "Player's total active cash balance in their pocket/wallet.",
            "es": "Balance total de dinero en efectivo que lleva el jugador encima."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%vault_eco_balance_formatted%",
        "plugin": "Vault & Essentials",
        "example": "$15,420.50",
        "desc": {
            "en": "Formatted wallet balance with dollar symbol and commas.",
            "es": "Saldo en efectivo con símbolo de dólar y separador de miles."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%vault_prefix%",
        "plugin": "Vault & LuckPerms",
        "example": "§7[Citizen] ",
        "desc": {
            "en": "Primary group chat/tab prefix assigned by permissions.",
            "es": "Prefijo principal asignado al jugador por su rango en LuckPerms."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%vault_suffix%",
        "plugin": "Vault & LuckPerms",
        "example": "§f",
        "desc": {
            "en": "Primary group suffix assigned by permissions.",
            "es": "Sufijo del rango de permisos del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%vault_group%",
        "plugin": "Vault & LuckPerms",
        "example": "citizen",
        "desc": {
            "en": "Primary LuckPerms permission group name.",
            "es": "Nombre del grupo de permisos principal del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%bank_balance%",
        "plugin": "Bank Lite",
        "example": "150000.00",
        "desc": {
            "en": "Total savings securely deposited in the city bank account.",
            "es": "Total de dinero seguro depositado en la cuenta de ahorros del banco."
        },
        "category": "Economy & Banking"
    },
    {
        "placeholder": "%bank_items_count_<material>%",
        "plugin": "Bank Lite",
        "example": "12",
        "desc": {
            "en": "Count of physical bullion or items stored inside safe deposit boxes.",
            "es": "Cantidad de lingotes o items guardados en la caja fuerte del banco."
        },
        "category": "Economy & Banking"
    },
    {
        "placeholder": "%salarymanager_salary%",
        "plugin": "SalaryManager",
        "example": "$500",
        "desc": {
            "en": "Amount of cash earned per paycheck in your current job.",
            "es": "Monto de dinero a recibir en el próximo cheque salarial de tu empleo."
        },
        "category": "Economy & Banking"
    },
    {
        "placeholder": "%salarymanager_time_remaining%",
        "plugin": "SalaryManager",
        "example": "14m 20s",
        "desc": {
            "en": "Countdown time until the next municipal payroll payout.",
            "es": "Tiempo restante para el cobro automático de la próxima nómina."
        },
        "category": "Economy & Banking"
    },
    {
        "placeholder": "%arm_region%",
        "plugin": "AdvancedRegionMarket",
        "example": "Apartment_4B",
        "desc": {
            "en": "Identifier of the property region the player is currently standing inside.",
            "es": "Identificador de la propiedad o apartamento donde está parado el jugador."
        },
        "category": "Properties & Building"
    },
    {
        "placeholder": "%arm_price%",
        "plugin": "AdvancedRegionMarket",
        "example": "2500",
        "desc": {
            "en": "Rental or purchase price of the current property region.",
            "es": "Precio de venta o costo de alquiler de la propiedad actual."
        },
        "category": "Properties & Building"
    },
    {
        "placeholder": "%arm_renttime%",
        "plugin": "AdvancedRegionMarket",
        "example": "6d 12h",
        "desc": {
            "en": "Remaining rental duration before the property lease expires.",
            "es": "Tiempo de alquiler restante antes de que venza el contrato."
        },
        "category": "Properties & Building"
    },
    {
        "placeholder": "%arm_owner%",
        "plugin": "AdvancedRegionMarket",
        "example": "AlexRider",
        "desc": {
            "en": "Name of the citizen who currently owns or leases the property.",
            "es": "Nombre del ciudadano que posee o alquila actualmente la propiedad."
        },
        "category": "Properties & Building"
    },
    {
        "placeholder": "%mtv_vehicle_name%",
        "plugin": "MTVehicles",
        "example": "Ferrari 488",
        "desc": {
            "en": "Name of the vehicle the player is currently operating.",
            "es": "Nombre del vehículo en el que se encuentra subido el jugador."
        },
        "category": "Vehicles & Transport"
    },
    {
        "placeholder": "%mtv_vehicle_licensePlate%",
        "plugin": "MTVehicles",
        "example": "LS-492-RP",
        "desc": {
            "en": "Official state vehicle registration license plate.",
            "es": "Matrícula oficial de registro vehicular emitida por el estado."
        },
        "category": "Vehicles & Transport"
    },
    {
        "placeholder": "%mtv_vehicle_fuel%",
        "plugin": "MTVehicles",
        "example": "78.5 %",
        "desc": {
            "en": "Current gas tank fuel percentage.",
            "es": "Porcentaje actual de combustible en el tanque de gasolina."
        },
        "category": "Vehicles & Transport"
    },
    {
        "placeholder": "%mtv_vehicle_speed%",
        "plugin": "MTVehicles",
        "example": "85.4 blocks/sec",
        "desc": {
            "en": "Real-time velocity speed of the vehicle.",
            "es": "Velocidad en tiempo real del vehículo en bloques por segundo."
        },
        "category": "Vehicles & Transport"
    },
    {
        "placeholder": "%gang_name%",
        "plugin": "ExcellentGangs",
        "example": "Ballas 104",
        "desc": {
            "en": "Name of the street gang the player belongs to.",
            "es": "Nombre de la pandilla callejera a la que pertenece el jugador."
        },
        "category": "Crime, Gangs & Heists"
    },
    {
        "placeholder": "%gang_level_name%",
        "plugin": "ExcellentGangs",
        "example": "Tier 3 Syndicate",
        "desc": {
            "en": "Gang level name reflecting territorial influence and unlocked perks.",
            "es": "Nivel de la pandilla según su influencia territorial y mejoras."
        },
        "category": "Crime, Gangs & Heists"
    },
    {
        "placeholder": "%gang_vault_size%",
        "plugin": "ExcellentGangs",
        "example": "54",
        "desc": {
            "en": "Slot capacity of the shared gang contraband storage vault.",
            "es": "Capacidad de ranuras del baúl de contrabando de la banda."
        },
        "category": "Crime, Gangs & Heists"
    },
    {
        "placeholder": "%clanplus_clan_name%",
        "plugin": "ClansPlus",
        "example": "Corleone Family",
        "desc": {
            "en": "Name of the player's crime family or syndicate clan.",
            "es": "Nombre de la familia criminal o clan del jugador."
        },
        "category": "Crime, Gangs & Heists"
    },
    {
        "placeholder": "%clanplus_player_rank%",
        "plugin": "ClansPlus",
        "example": "Caporegime",
        "desc": {
            "en": "Player's official rank inside the crime family hierarchy.",
            "es": "Rango oficial del jugador en la jerarquía de la familia criminal."
        },
        "category": "Crime, Gangs & Heists"
    },
    {
        "placeholder": "%clanplus_clan_warpoint%",
        "plugin": "ClansPlus",
        "example": "1450",
        "desc": {
            "en": "Warpoints scored by the clan during turf skirmishes and battles.",
            "es": "Puntos de guerra acumulados en enfrentamientos por el control de zonas."
        },
        "category": "Crime, Gangs & Heists"
    },
    {
        "placeholder": "%phone_number%",
        "plugin": "PhoneV2",
        "example": "555-0194",
        "desc": {
            "en": "Player's personal assigned mobile phone number.",
            "es": "Número de teléfono celular personal asignado al jugador."
        },
        "category": "Communication & Navigation"
    },
    {
        "placeholder": "%phone_battery%",
        "plugin": "PhoneV2",
        "example": "92%",
        "desc": {
            "en": "Smartphone battery charge percentage.",
            "es": "Porcentaje de batería restante del smartphone."
        },
        "category": "Communication & Navigation"
    },
    {
        "placeholder": "%autorank_local_time%",
        "plugin": "Autorank",
        "example": "18h 45m",
        "desc": {
            "en": "Total time played in the city by the player.",
            "es": "Tiempo total acumulado jugado en la ciudad por el usuario."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%autorank_current_rank%",
        "plugin": "Autorank",
        "example": "Resident Citizen",
        "desc": {
            "en": "Current unlocked citizenship civil rank.",
            "es": "Rango de ciudadanía actual desbloqueado en la ciudad."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%autorank_next_rank%",
        "plugin": "Autorank",
        "example": "Elite Citizen",
        "desc": {
            "en": "Next citizenship rank in the progression tree.",
            "es": "Siguiente rango cívico en el árbol de progresión."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%quests_player_quest_points%",
        "plugin": "Quests",
        "example": "125",
        "desc": {
            "en": "Total quest reputation points earned from municipal delivery jobs.",
            "es": "Puntos de reputación obtenidos completando trabajos y misiones."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%quests_player_has_journal%",
        "plugin": "Quests",
        "example": "true / false",
        "desc": {
            "en": "Indicates if the player carries their official mission ledger.",
            "es": "Indica si el jugador tiene su cuaderno de misiones y entregas."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%emf_competition_time_left%",
        "plugin": "EvenMoreFish",
        "example": "03m 45s",
        "desc": {
            "en": "Time remaining in the current active marina fishing tournament.",
            "es": "Tiempo restante en el torneo de pesca deportiva de la marina."
        },
        "category": "Casino, Sports & Leisure"
    },
    {
        "placeholder": "%emf_competition_place_1_player%",
        "plugin": "EvenMoreFish",
        "example": "CaptainDan",
        "desc": {
            "en": "Current first-place leader in the active fishing contest.",
            "es": "Jugador que va en primer lugar en el torneo de pesca actual."
        },
        "category": "Casino, Sports & Leisure"
    },
    {
        "placeholder": "%blockball_player_teamDisplayName%",
        "plugin": "BlockBall",
        "example": "Red Strikers",
        "desc": {
            "en": "Display name of the soccer team the player is currently playing for.",
            "es": "Nombre del equipo de fútbol en el que juega actualmente el usuario."
        },
        "category": "Casino, Sports & Leisure"
    },
    {
        "placeholder": "%crate_effective_cooldown%",
        "plugin": "ExcellentCrates",
        "example": "01h 30m",
        "desc": {
            "en": "Cooldown time remaining before claiming the next free reward crate.",
            "es": "Tiempo de espera para abrir la siguiente caja de recompensas gratis."
        },
        "category": "NPCs, Rewards & Optimization"
    },
    {
        "placeholder": "%auctionhouse_active_listings%",
        "plugin": "AuctionHouse",
        "example": "4",
        "desc": {
            "en": "Number of active auctions currently listed by the player.",
            "es": "Número de artículos puestos a la venta por el jugador en subastas."
        },
        "category": "Economy & Banking"
    },
    {
        "placeholder": "%tab_tabprefix%",
        "plugin": "TAB",
        "example": "§9[Police] ",
        "desc": {
            "en": "Full formatted player prefix in the tablist.",
            "es": "Prefijo formateado del jugador en la lista de jugadores (Tab)."
        },
        "category": "Communication & Navigation"
    },
    {
        "placeholder": "%tab_scoreboard_name%",
        "plugin": "TAB",
        "example": "scoreboard-1.20.3+",
        "desc": {
            "en": "Identifier of the active scoreboard layout being rendered.",
            "es": "Identificador del diseño de scoreboard activo que se muestra."
        },
        "category": "Communication & Navigation"
    },
    {
        "placeholder": "%worldguard_region_name%",
        "plugin": "WorldGuard",
        "example": "City_Downtown_Bank",
        "desc": {
            "en": "Name of the WorldGuard region the player is currently located in.",
            "es": "Nombre de la zona protegida de WorldGuard donde está el jugador."
        },
        "category": "Properties & Building"
    },
    {
        "placeholder": "%localtime_time%",
        "plugin": "LocalTime",
        "example": "18:04",
        "desc": {
            "en": "Real server clock time formatted in 24-hour format.",
            "es": "Hora local real del servidor en formato de 24 horas."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_tps_1_colored%",
        "plugin": "PlaceholderAPI",
        "example": "§a20.0",
        "desc": {
            "en": "Server tick-rate performance indicator colored green/yellow/red.",
            "es": "Rendimiento de TPS del servidor coloreado en verde, amarillo o rojo."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_online%",
        "plugin": "PlaceholderAPI",
        "example": "48",
        "desc": {
            "en": "Current count of online citizens connected to Minecity.",
            "es": "Cantidad actual de ciudadanos conectados en línea en el servidor."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_uptime%",
        "plugin": "PlaceholderAPI",
        "example": "2d 14h 12m",
        "desc": {
            "en": "Time elapsed since the last server startup.",
            "es": "Tiempo transcurrido desde el último reinicio del servidor."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_name%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "AlexPlayer",
        "desc": {
            "en": "Player's exact Minecraft username.",
            "es": "Nombre de usuario exacto del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_displayname%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "§9[Police] §fAlex",
        "desc": {
            "en": "Player's display name including prefix/nickname.",
            "es": "Nombre mostrado incluyendo prefijo y apodo."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_uuid%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "550e8400-e29b...",
        "desc": {
            "en": "Player's unique UUID string.",
            "es": "Identificador único UUID del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_health%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "20",
        "desc": {
            "en": "Current player health points (0 to 20).",
            "es": "Puntos de vida actuales del jugador (0 a 20)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_max_health%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "20",
        "desc": {
            "en": "Player's maximum health points.",
            "es": "Vida máxima actual del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_food_level%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "20",
        "desc": {
            "en": "Vanilla hunger level (0 to 20).",
            "es": "Nivel de hambre actual (0 a 20)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_ping%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "34",
        "desc": {
            "en": "Network connection latency in milliseconds.",
            "es": "Latencia de conexión en milisegundos (ms)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_colored_ping%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "§a34ms",
        "desc": {
            "en": "Ping colored green/yellow/red based on quality.",
            "es": "Ping coloreado en verde/amarillo/rojo según calidad."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_world%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "Minecity",
        "desc": {
            "en": "Name of the world the player is currently in.",
            "es": "Nombre del mundo en el que se encuentra el jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_x%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "1024",
        "desc": {
            "en": "Current X block coordinate.",
            "es": "Coordenada espacial X del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_y%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "64",
        "desc": {
            "en": "Current Y altitude coordinate.",
            "es": "Coordenada de altura Y del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_z%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "-482",
        "desc": {
            "en": "Current Z block coordinate.",
            "es": "Coordenada espacial Z del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_level%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "12",
        "desc": {
            "en": "Player experience level.",
            "es": "Nivel de experiencia del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_gamemode%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "SURVIVAL",
        "desc": {
            "en": "Player's active Minecraft gamemode.",
            "es": "Modo de juego actual del jugador."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%player_ip%",
        "plugin": "PlaceholderAPI (Player)",
        "example": "127.0.0.1",
        "desc": {
            "en": "Player's connection IP address (Admin only).",
            "es": "Dirección IP de conexión (Solo Admins)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_name%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "Minecity RP",
        "desc": {
            "en": "Configured server name.",
            "es": "Nombre configurado del servidor."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_max_players%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "250",
        "desc": {
            "en": "Maximum server player slot limit.",
            "es": "Límite máximo de jugadores del servidor."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_ram_used%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "6144",
        "desc": {
            "en": "Server JVM RAM memory currently used (MB).",
            "es": "Memoria RAM utilizada actualmente (MB)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_ram_max%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "16384",
        "desc": {
            "en": "Maximum allocated JVM RAM memory (MB).",
            "es": "Memoria RAM máxima asignada al servidor (MB)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_tps_1%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "20.0",
        "desc": {
            "en": "1-minute average server TPS.",
            "es": "TPS promedio del servidor en el último minuto."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_tps_5%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "19.98",
        "desc": {
            "en": "5-minute average server TPS.",
            "es": "TPS promedio en los últimos 5 minutos."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_tps_15%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "19.95",
        "desc": {
            "en": "15-minute average server TPS.",
            "es": "TPS promedio en los últimos 15 minutos."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%server_unique_joins%",
        "plugin": "PlaceholderAPI (Server)",
        "example": "14520",
        "desc": {
            "en": "Total unique citizens who have joined since launch.",
            "es": "Total de jugadores únicos históricos registrados."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_prefix%",
        "plugin": "LuckPerms",
        "example": "§7[Citizen] ",
        "desc": {
            "en": "Player's active chat/tab prefix from LuckPerms.",
            "es": "Prefijo activo asignado en LuckPerms."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_suffix%",
        "plugin": "LuckPerms",
        "example": " §6[VIP]",
        "desc": {
            "en": "Player's active suffix from LuckPerms.",
            "es": "Sufijo activo asignado en LuckPerms."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_primary_group_name%",
        "plugin": "LuckPerms",
        "example": "citizen",
        "desc": {
            "en": "Primary group name of the player.",
            "es": "Nombre del grupo de rango primario."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_highest_group_by_weight%",
        "plugin": "LuckPerms",
        "example": "police",
        "desc": {
            "en": "Highest weighted permission group inherited.",
            "es": "Rango de mayor peso jerárquico heredado."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_in_group_<group>%",
        "plugin": "LuckPerms",
        "example": "yes / no",
        "desc": {
            "en": "Checks if player is directly in a specific group.",
            "es": "Comprueba si el usuario pertenece al grupo indicado."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_inherits_group_<group>%",
        "plugin": "LuckPerms",
        "example": "yes / no",
        "desc": {
            "en": "Checks if player inherits a specific rank group.",
            "es": "Comprueba si el usuario hereda permisos del grupo."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%luckperms_check_permission_<perm>%",
        "plugin": "LuckPerms",
        "example": "yes / no",
        "desc": {
            "en": "Checks whether player holds a specific permission node.",
            "es": "Evalúa si el jugador tiene un nodo de permiso."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_nickname%",
        "plugin": "EssentialsX",
        "example": "~MayorBob",
        "desc": {
            "en": "Player's custom roleplay nickname.",
            "es": "Apodo personalizado de rol en Essentials."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_vanished%",
        "plugin": "EssentialsX",
        "example": "no",
        "desc": {
            "en": "Indicates whether staff member is currently vanished.",
            "es": "Indica si un miembro del staff está oculto (vanish)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_afk%",
        "plugin": "EssentialsX",
        "example": "no",
        "desc": {
            "en": "Indicates whether citizen is currently AFK.",
            "es": "Indica si el ciudadano está ausente (AFK)."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_afk_player_count%",
        "plugin": "EssentialsX",
        "example": "3",
        "desc": {
            "en": "Total count of currently AFK players.",
            "es": "Cantidad de jugadores actualmente ausentes."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_homes_set%",
        "plugin": "EssentialsX",
        "example": "2",
        "desc": {
            "en": "Number of homes registered by the player.",
            "es": "Número de casas o departamentos guardados."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_homes_max%",
        "plugin": "EssentialsX",
        "example": "5",
        "desc": {
            "en": "Maximum allowed homes for player's rank.",
            "es": "Límite máximo de hogares permitidos para su rango."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_kit_is_available_<kit>%",
        "plugin": "EssentialsX",
        "example": "yes / no",
        "desc": {
            "en": "Checks if a kit cooldown is ready to be claimed.",
            "es": "Comprueba si el kit está disponible para reclamar."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%essentials_jailed_time_remaining%",
        "plugin": "EssentialsX",
        "example": "4m 10s",
        "desc": {
            "en": "Remaining Essentials jail sentence time.",
            "es": "Tiempo restante de condena en prisión Essentials."
        },
        "category": "Core & Roleplay"
    },
    {
        "placeholder": "%skillapi_level%",
        "plugin": "ProSkillAPI",
        "example": "14",
        "desc": {
            "en": "Player's active RPG profession level.",
            "es": "Nivel actual de la profesión RPG del personaje."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%skillapi_points%",
        "plugin": "ProSkillAPI",
        "example": "5",
        "desc": {
            "en": "Unspent skill points available to upgrade perks.",
            "es": "Puntos de habilidad disponibles para gastar."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%skillapi_max_mana%",
        "plugin": "ProSkillAPI",
        "example": "100",
        "desc": {
            "en": "Maximum stamina/mana pool capacity.",
            "es": "Capacidad máxima de energía o estamina."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%skillapi_attribute_points%",
        "plugin": "ProSkillAPI",
        "example": "3",
        "desc": {
            "en": "Available character attribute points.",
            "es": "Puntos de atributo de personaje disponibles."
        },
        "category": "Jobs & Progression"
    },
    {
        "placeholder": "%key_balance%",
        "plugin": "ExcellentCrates",
        "example": "4",
        "desc": {
            "en": "Total crate keys carried by the player.",
            "es": "Cantidad de llaves de cajas que posee el usuario."
        },
        "category": "NPCs, Rewards & Optimization"
    },
    {
        "placeholder": "%crate_milestones_repeatable%",
        "plugin": "ExcellentCrates",
        "example": "12",
        "desc": {
            "en": "Count of crate opening milestone rewards reached.",
            "es": "Progreso acumulado de recompensas por abrir cajas."
        },
        "category": "NPCs, Rewards & Optimization"
    },
    {
        "placeholder": "%therewards_player_available_rewards%",
        "plugin": "TheRewards",
        "example": "2",
        "desc": {
            "en": "Number of unclaimed daily/playtime rewards ready.",
            "es": "Cantidad de recompensas diarias listas para reclamar."
        },
        "category": "NPCs, Rewards & Optimization"
    },
    {
        "placeholder": "%gsit_is_sitting%",
        "plugin": "GSit",
        "example": "true / false",
        "desc": {
            "en": "Indicates if player is sitting down.",
            "es": "Indica si el jugador se encuentra sentado."
        },
        "category": "Casino, Sports & Leisure"
    },
    {
        "placeholder": "%gsit_is_crawling%",
        "plugin": "GSit",
        "example": "true / false",
        "desc": {
            "en": "Indicates if player is crawling.",
            "es": "Indica si el jugador está arrastrándose por el suelo."
        },
        "category": "Casino, Sports & Leisure"
    },
    {
        "placeholder": "%citizens_selected_npc_name%",
        "plugin": "Citizens",
        "example": "Officer Jenkins",
        "desc": {
            "en": "Name of currently selected NPC.",
            "es": "Nombre del NPC seleccionado actualmente."
        },
        "category": "NPCs, Rewards & Optimization"
    },
    {
        "placeholder": "%citizens_nearest_npc_id%",
        "plugin": "Citizens",
        "example": "42",
        "desc": {
            "en": "ID number of nearest NPC entity.",
            "es": "ID numérico del NPC más cercano al jugador."
        },
        "category": "NPCs, Rewards & Optimization"
    },
    {
        "placeholder": "%jukebox_active_title%",
        "plugin": "JukeBox",
        "example": "Los Santos FM",
        "desc": {
            "en": "Name of currently playing radio music track.",
            "es": "Título de la pista musical o radio reproduciéndose."
        },
        "category": "Casino, Sports & Leisure"
    }
],

  // 415 Real Permissions across all 10 Categories & LuckPerms Groups
  permissions: [
    {
        "node": "minecity.player",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Base civilian roleplay access (ID, chat, survival stats).",
            "es": "Acceso civil base a DNI, chat y estadísticas."
        }
    },
    {
        "node": "minecity.apartments",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows browsing and renting/buying apartments via /apartments.",
            "es": "Permite ver, alquilar y comprar viviendas con /apartments."
        }
    },
    {
        "node": "minecity.pets",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows adopting, naming, and training Tamagotchi pets.",
            "es": "Permite adoptar y cuidar mascotas."
        }
    },
    {
        "node": "minecity.police",
        "group": "police",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access to police baton, cuffs, patrol gear, and arrest commands.",
            "es": "Acceso a equipamiento policial, porra, esposas y arrestos."
        }
    },
    {
        "node": "minecity.police.jail",
        "group": "police",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows jailing suspects inside penitentiary cells.",
            "es": "Permite encarcelar criminales en la prisión."
        }
    },
    {
        "node": "minecity.paramedic",
        "group": "paramedic",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access to paramedic uniform, ambulances, and 911 medical calls.",
            "es": "Acceso al uniforme médico, ambulancias y alertas 911."
        }
    },
    {
        "node": "minecity.paramedic.revive",
        "group": "paramedic",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Allows reviving downed citizens with Restoration Vaccine.",
            "es": "Permite reanimar jugadores inconscientes con la vacuna."
        }
    },
    {
        "node": "minecity.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Full admin bypass, dummy spawning (/ms), and module control.",
            "es": "Acceso total administrativo y dummies (/ms)."
        }
    },
    {
        "node": "luckperms.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "LuckPerms",
        "desc": {
            "en": "Full LuckPerms rank & permission management.",
            "es": "Gestión total de rangos y permisos en LuckPerms."
        }
    },
    {
        "node": "qualityarmoryvehicles.default",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Default access to enter vehicles, open garage (/car), and use /carcall.",
            "es": "Acceso base a vehículos, abrir garaje (/car) y usar /carcall."
        }
    },
    {
        "node": "qualityarmoryvehicles.shop",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Allows purchasing vehicles from dealerships.",
            "es": "Permite comprar vehículos en concesionarios."
        }
    },
    {
        "node": "qualityarmoryvehicles.vehiclelimit.1",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Allows spawning 1 active vehicle simultaneously.",
            "es": "Permite tener 1 vehículo activo al mismo tiempo."
        }
    },
    {
        "node": "qualityarmoryvehicles.unlimitedvehicles",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Bypasses active vehicle spawn limit.",
            "es": "Anula el límite de vehículos activos simultáneos."
        }
    },
    {
        "node": "qualityarmoryvehicles.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Full vehicle admin spawning, cleanup, and callbacks.",
            "es": "Administración total de vehículos QAV."
        }
    },
    {
        "node": "Cars.type.*",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Allows driving all standard ground cars.",
            "es": "Permite conducir todos los coches terrestres."
        }
    },
    {
        "node": "Helicopters.type.*",
        "group": "vip",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Allows piloting city helicopters.",
            "es": "Permite pilotar helicópteros en la ciudad."
        }
    },
    {
        "node": "mtvehicles.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Admin editing, giving cars, and fuel settings.",
            "es": "Administración total de MTVehicles."
        }
    },
    {
        "node": "elevator.use",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Allows riding building elevators between floors.",
            "es": "Permite usar los elevadores en rascacielos y garajes."
        }
    },
    {
        "node": "qualityarmory.usegun",
        "group": "default",
        "defaultState": "True",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Allows firing and reloading 3D firearms.",
            "es": "Permite disparar y recargar armas 3D."
        }
    },
    {
        "node": "qualityarmory.shop",
        "group": "default",
        "defaultState": "True",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Allows buying guns and ammunition in /qa shop.",
            "es": "Permite comprar armas y balas en /qa shop."
        }
    },
    {
        "node": "qualityarmory.craft",
        "group": "default",
        "defaultState": "True",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Allows crafting ammo and weapon parts in /qa craft.",
            "es": "Permite fabricar cargadores en /qa craft."
        }
    },
    {
        "node": "qualityarmory.give",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Allows giving firearms/ammo via /qa give.",
            "es": "Permite entregar armas mediante comandos."
        }
    },
    {
        "node": "ei.cmd.editor",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Opens custom ExecutableItems creator.",
            "es": "Permite editar objetos ejecutables especiales."
        }
    },
    {
        "node": "arm.member.gui",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows using /arm GUI and managing owned regions.",
            "es": "Permite usar el menú de propiedades /arm."
        }
    },
    {
        "node": "arm.member.buy",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows renting and buying properties via ARM.",
            "es": "Permite alquilar y comprar viviendas y locales."
        }
    },
    {
        "node": "arm.member.extend",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows extending apartment rent durations.",
            "es": "Permite extender el contrato de alquiler."
        }
    },
    {
        "node": "arm.member.sellback",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows terminating leases or selling property back.",
            "es": "Permite cancelar alquiler o vender tu vivienda."
        }
    },
    {
        "node": "arm.admin.create.rentregion",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Allows creating new rentable apartment regions.",
            "es": "Permite crear nuevas regiones en alquiler."
        }
    },
    {
        "node": "arm.admin.bypasslimit",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Bypasses maximum property ownership limit.",
            "es": "Anula el límite máximo de propiedades por jugador."
        }
    },
    {
        "node": "worldguard.region.define",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Allows creating new WorldGuard protection zones.",
            "es": "Permite definir nuevas regiones de protección WorldGuard."
        }
    },
    {
        "node": "worldedit.wand",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Allows using //wand and architecture tools.",
            "es": "Permite usar la varita de construcción WorldEdit."
        }
    },
    {
        "node": "banklite.use",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access to ATM banking deposits, withdrawals & interest.",
            "es": "Acceso al banco ATM para depósitos, retiros e intereses."
        }
    },
    {
        "node": "bank.tabs.1",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Grants 1 personal safe-deposit storage tab in the bank.",
            "es": "Otorga 1 pestaña de bóveda personal en el banco."
        }
    },
    {
        "node": "auctionhouse.use",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Allows browsing and purchasing from the Auction House (/ah).",
            "es": "Permite usar y comprar en la Casa de Subastas (/ah)."
        }
    },
    {
        "node": "auctionhouse.sell",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Allows listing items for sale via /ah sell.",
            "es": "Permite poner objetos en venta mediante /ah sell."
        }
    },
    {
        "node": "salarymanager.next",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Allows checking time until next paycheck (/salary).",
            "es": "Permite consultar cuándo llega el próximo sueldo (/salary)."
        }
    },
    {
        "node": "salarymanager.pay",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Forces payroll payout to all online workers.",
            "es": "Fuerza el pago salarial a los trabajadores conectados."
        }
    },
    {
        "node": "shopkeeper.create",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Allows creating player shopkeeper trade stalls.",
            "es": "Permite abrir tiendas de aldeanos propias."
        }
    },
    {
        "node": "robbery.use",
        "group": "default",
        "defaultState": "True",
        "category": "Crime, Gangs & Heists",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Allows joining heist crews (/crew) and robbing banks/shops.",
            "es": "Permite participar en atracos a bancos y tiendas (/crew)."
        }
    },
    {
        "node": "robbery.use.drill",
        "group": "default",
        "defaultState": "True",
        "category": "Crime, Gangs & Heists",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Allows using thermal drills to crack bank vaults.",
            "es": "Permite usar taladros para abrir cajas fuertes de bancos."
        }
    },
    {
        "node": "robbery.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "KoyaRobbery",
        "desc": {
            "en": "Configures heist locations, timers, and vault loot.",
            "es": "Configura los puntos de atraco y botín."
        }
    },
    {
        "node": "excellentgangs.use",
        "group": "default",
        "defaultState": "True",
        "category": "Crime, Gangs & Heists",
        "plugin": "ExcellentGangs",
        "desc": {
            "en": "Allows joining street gangs, gang banks, and vaults (/gang).",
            "es": "Permite unirse a pandillas, usar su banco y baúl (/gang)."
        }
    },
    {
        "node": "clanplus.setspawn",
        "group": "default",
        "defaultState": "True",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Allows clan leaders to set their syndicate base spawn.",
            "es": "Permite fijar el punto base del sindicato/clan."
        }
    },
    {
        "node": "clanplus.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Full administrative management of all server clans.",
            "es": "Administración total de clanes en ClansPlus."
        }
    },
    {
        "node": "drugs.get",
        "group": "default",
        "defaultState": "True",
        "category": "Crime, Gangs & Heists",
        "plugin": "Drugs",
        "desc": {
            "en": "Allows viewing drug crafting recipes (/drugbook).",
            "es": "Permite consultar recetas ilegales (/drugbook)."
        }
    },
    {
        "node": "phone.use",
        "group": "default",
        "defaultState": "True",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Allows opening and operating personal smartphone (/phone).",
            "es": "Permite usar el teléfono celular (/phone) para llamadas y SMS."
        }
    },
    {
        "node": "phone.police",
        "group": "police",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Routes incoming 911 police dispatch alerts to officer's phone.",
            "es": "Recibe llamadas 911 policiales directamente en el celular."
        }
    },
    {
        "node": "phone.medic",
        "group": "paramedic",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Routes incoming 911 medical emergencies to paramedic's phone.",
            "es": "Recibe alertas médicas 911 en el teléfono."
        }
    },
    {
        "node": "gps.commands.start",
        "group": "default",
        "defaultState": "True",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Allows activating turn-by-turn particle street guidance.",
            "es": "Permite activar rutas de navegación GPS por la ciudad."
        }
    },
    {
        "node": "dh.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Full hologram creation & display entity editing.",
            "es": "Permite crear y editar todos los hologramas 3D."
        }
    },
    {
        "node": "imageframe.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Allows generating custom HD billboards and posters.",
            "es": "Permite crear vallas y carteles HD con imágenes."
        }
    },
    {
        "node": "tab.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Allows reloading scoreboard HUD, bossbar, and nametags.",
            "es": "Permite recargar el HUD del scoreboard y nametags."
        }
    },
    {
        "node": "quests.quest",
        "group": "default",
        "defaultState": "True",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Allows accepting and completing civilian delivery/job contracts.",
            "es": "Permite aceptar trabajos y misiones en /job."
        }
    },
    {
        "node": "quests.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Allows editing quests, stages, and assigning points.",
            "es": "Permite editar misiones y asignar puntos (Admin)."
        }
    },
    {
        "node": "autorank.check",
        "group": "default",
        "defaultState": "True",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Allows checking playtime progression ranks (/ar check).",
            "es": "Permite ver tu progreso de rango por horas (/ar check)."
        }
    },
    {
        "node": "skillapi.basic",
        "group": "default",
        "defaultState": "True",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Allows using RPG skill points and perks (/class).",
            "es": "Permite asignar puntos de habilidad RPG (/class)."
        }
    },
    {
        "node": "realmines.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "RealMines",
        "desc": {
            "en": "Allows configuring auto-resetting quarry mines.",
            "es": "Permite crear y configurar las minas de trabajo."
        }
    },
    {
        "node": "servertutorialplus.command.play",
        "group": "default",
        "defaultState": "True",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Allows replaying the city onboarding tour (/st play).",
            "es": "Permite iniciar el recorrido tutorial por la ciudad."
        }
    },
    {
        "node": "roulette.help",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Allows participating in casino roulette tables.",
            "es": "Permite jugar en las mesas de ruleta del casino."
        }
    },
    {
        "node": "videopoker.play",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "VideoPoker",
        "desc": {
            "en": "Allows playing casino video poker terminals.",
            "es": "Permite jugar máquinas de video póker."
        }
    },
    {
        "node": "lottery.gui",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "Lottery",
        "desc": {
            "en": "Allows buying metropolitan lottery tickets.",
            "es": "Permite comprar billetes de lotería."
        }
    },
    {
        "node": "blockball.command",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Allows joining soccer matches in city stadiums.",
            "es": "Permite jugar partidos de fútbol en el estadio."
        }
    },
    {
        "node": "emf.shop",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Allows selling custom caught fish at the marina shop.",
            "es": "Permite vender capturas en la tienda de pesca (/emf shop)."
        }
    },
    {
        "node": "emf.top",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Allows viewing fishing tournament leaderboards.",
            "es": "Permite ver la tabla de líderes de torneos de pesca."
        }
    },
    {
        "node": "emf.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Allows starting/stopping fishing contests & reloading fish configs.",
            "es": "Permite iniciar torneos de pesca y recargar configuración."
        }
    },
    {
        "node": "GSit.Sit",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Allows sitting on chairs/stairs or using /sit.",
            "es": "Permite sentarse en sillas, escaleras y usar /sit."
        }
    },
    {
        "node": "GSit.Lay",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Allows using /lay pose on beds and floors.",
            "es": "Permite acostarse usando /lay."
        }
    },
    {
        "node": "GSit.Crawl",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Allows crawling through 1-block spaces (/crawl).",
            "es": "Permite arrastrarse por conductos (/crawl)."
        }
    },
    {
        "node": "music.command",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Allows listening and changing radio tracks (/music).",
            "es": "Permite cambiar la música de radio con /music."
        }
    },
    {
        "node": "gadgetsmenu.menu",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Allows opening cosmetic hats & particle menu (/gmenu).",
            "es": "Permite abrir el menú de cosméticos (/gmenu)."
        }
    },
    {
        "node": "citizens.npc.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Allows spawning and configuring NPC shopkeepers and staff.",
            "es": "Permite crear y configurar NPCs vendedores y policías."
        }
    },
    {
        "node": "excellentcrates.crates.command.open",
        "group": "default",
        "defaultState": "True",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Allows opening reward crates with keys (/crates open).",
            "es": "Permite abrir cajas de botín con llaves (/crates open)."
        }
    },
    {
        "node": "excellentcrates.crates.command.editor",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Opens the live in-game crates editor.",
            "es": "Abre el editor de cajas y recompensas dentro del juego."
        }
    },
    {
        "node": "playerkits.use",
        "group": "default",
        "defaultState": "True",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Allows claiming starter and daily kits (/kit).",
            "es": "Permite reclamar kits de inicio y diarios (/kit)."
        }
    },
    {
        "node": "therewards.use",
        "group": "default",
        "defaultState": "True",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Allows claiming daily login streaks (/rewards).",
            "es": "Permite reclamar recompensas por racha diaria (/rewards)."
        }
    },
    {
        "node": "chunky.command.start",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Runs pre-generation chunk tasks for lag-free roads.",
            "es": "Ejecuta la pre-generación de chunks para carreteras sin lag."
        }
    },
    {
        "node": "lagfixer.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Manages automatic dropped item cleanup (/abyss).",
            "es": "Gestiona limpieza de entidades tiradas para mantener 20 TPS."
        }
    },
    {
        "node": "forcepack.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ForcePack",
        "desc": {
            "en": "Allows bypassing mandatory 3D resource pack check.",
            "es": "Permite omitir la verificación obligatoria del texture pack."
        }
    },
    {
        "node": "arm.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Access permission for AdvancedRegionMarket (arm.*).",
            "es": "[Properties & Building] Permiso de AdvancedRegionMarket (arm.*)."
        }
    },
    {
        "node": "arm.admin.addmember",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Access permission for AdvancedRegionMarket (arm.admin.addmember).",
            "es": "[Properties & Building] Permiso de AdvancedRegionMarket (arm.admin.addmember)."
        }
    },
    {
        "node": "arm.admin.addtime",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Access permission for AdvancedRegionMarket (arm.admin.addtime).",
            "es": "[Properties & Building] Permiso de AdvancedRegionMarket (arm.admin.addtime)."
        }
    },
    {
        "node": "arm.admin.buildeverywhere",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Access permission for AdvancedRegionMarket (arm.admin.buildeverywhere).",
            "es": "[Properties & Building] Permiso de AdvancedRegionMarket (arm.admin.buildeverywhere)."
        }
    },
    {
        "node": "arm.admin.bypassteleportercooldown",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Access permission for AdvancedRegionMarket (arm.admin.bypassteleportercooldown).",
            "es": "[Properties & Building] Permiso de AdvancedRegionMarket (arm.admin.bypassteleportercooldown)."
        }
    },
    {
        "node": "arm.admin.create.contractregion",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "AdvancedRegionMarket",
        "desc": {
            "en": "Access permission for AdvancedRegionMarket (arm.admin.create.contractregion).",
            "es": "[Properties & Building] Permiso de AdvancedRegionMarket (arm.admin.create.contractregion)."
        }
    },
    {
        "node": "astools.ascmd.add.bungee",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Access permission for ArmorStandTools (astools.ascmd.add.bungee).",
            "es": "[Properties & Building] Permiso de ArmorStandTools (astools.ascmd.add.bungee)."
        }
    },
    {
        "node": "astools.ascmd.add.console",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Access permission for ArmorStandTools (astools.ascmd.add.console).",
            "es": "[Properties & Building] Permiso de ArmorStandTools (astools.ascmd.add.console)."
        }
    },
    {
        "node": "astools.ascmd.add.player",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Access permission for ArmorStandTools (astools.ascmd.add.player).",
            "es": "[Properties & Building] Permiso de ArmorStandTools (astools.ascmd.add.player)."
        }
    },
    {
        "node": "astools.ascmd.cooldown",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Access permission for ArmorStandTools (astools.ascmd.cooldown).",
            "es": "[Properties & Building] Permiso de ArmorStandTools (astools.ascmd.cooldown)."
        }
    },
    {
        "node": "astools.ascmd.execute",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Access permission for ArmorStandTools (astools.ascmd.execute).",
            "es": "[Properties & Building] Permiso de ArmorStandTools (astools.ascmd.execute)."
        }
    },
    {
        "node": "astools.ascmd.list",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "ArmorStandTools",
        "desc": {
            "en": "Access permission for ArmorStandTools (astools.ascmd.list).",
            "es": "[Properties & Building] Permiso de ArmorStandTools (astools.ascmd.list)."
        }
    },
    {
        "node": "auctionhouse.cancel",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Access permission for AuctionHouse (auctionhouse.cancel).",
            "es": "[Economy & Banking] Permiso de AuctionHouse (auctionhouse.cancel)."
        }
    },
    {
        "node": "auctionhouse.cancel.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Access permission for AuctionHouse (auctionhouse.cancel.others).",
            "es": "[Economy & Banking] Permiso de AuctionHouse (auctionhouse.cancel.others)."
        }
    },
    {
        "node": "auctionhouse.expire.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Access permission for AuctionHouse (auctionhouse.expire.others).",
            "es": "[Economy & Banking] Permiso de AuctionHouse (auctionhouse.expire.others)."
        }
    },
    {
        "node": "auctionhouse.expired",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Access permission for AuctionHouse (auctionhouse.expired).",
            "es": "[Economy & Banking] Permiso de AuctionHouse (auctionhouse.expired)."
        }
    },
    {
        "node": "auctionhouse.list",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Access permission for AuctionHouse (auctionhouse.list).",
            "es": "[Economy & Banking] Permiso de AuctionHouse (auctionhouse.list)."
        }
    },
    {
        "node": "auctionhouse.menu",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "AuctionHouse",
        "desc": {
            "en": "Access permission for AuctionHouse (auctionhouse.menu).",
            "es": "[Economy & Banking] Permiso de AuctionHouse (auctionhouse.menu)."
        }
    },
    {
        "node": "autorank.add",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Access permission for Autorank (autorank.add).",
            "es": "[Jobs & Progression] Permiso de Autorank (autorank.add)."
        }
    },
    {
        "node": "autorank.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Access permission for Autorank (autorank.admin).",
            "es": "[Jobs & Progression] Permiso de Autorank (autorank.admin)."
        }
    },
    {
        "node": "autorank.backup.data",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Access permission for Autorank (autorank.backup.data).",
            "es": "[Jobs & Progression] Permiso de Autorank (autorank.backup.data)."
        }
    },
    {
        "node": "autorank.backup.storage",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Access permission for Autorank (autorank.backup.storage).",
            "es": "[Jobs & Progression] Permiso de Autorank (autorank.backup.storage)."
        }
    },
    {
        "node": "autorank.checkothers",
        "group": "default",
        "defaultState": "True",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Access permission for Autorank (autorank.checkothers).",
            "es": "[Jobs & Progression] Permiso de Autorank (autorank.checkothers)."
        }
    },
    {
        "node": "autorank.choose",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Autorank",
        "desc": {
            "en": "Access permission for Autorank (autorank.choose).",
            "es": "[Jobs & Progression] Permiso de Autorank (autorank.choose)."
        }
    },
    {
        "node": "bank.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access permission for Bank (bank.admin).",
            "es": "[Economy & Banking] Permiso de Bank (bank.admin)."
        }
    },
    {
        "node": "bank.admin.block",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access permission for Bank (bank.admin.block).",
            "es": "[Economy & Banking] Permiso de Bank (bank.admin.block)."
        }
    },
    {
        "node": "bank.admin.block.add",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access permission for Bank (bank.admin.block.add).",
            "es": "[Economy & Banking] Permiso de Bank (bank.admin.block.add)."
        }
    },
    {
        "node": "bank.admin.block.remove",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access permission for Bank (bank.admin.block.remove).",
            "es": "[Economy & Banking] Permiso de Bank (bank.admin.block.remove)."
        }
    },
    {
        "node": "bank.admin.debug",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access permission for Bank (bank.admin.debug).",
            "es": "[Economy & Banking] Permiso de Bank (bank.admin.debug)."
        }
    },
    {
        "node": "bank.admin.debug.item",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Bank",
        "desc": {
            "en": "Access permission for Bank (bank.admin.debug.item).",
            "es": "[Economy & Banking] Permiso de Bank (bank.admin.debug.item)."
        }
    },
    {
        "node": "blockball.cloud",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Access permission for BlockBall (blockball.cloud).",
            "es": "[Casino, Sports & Leisure] Permiso de BlockBall (blockball.cloud)."
        }
    },
    {
        "node": "blockball.command.staff",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Access permission for BlockBall (blockball.command.staff).",
            "es": "[Casino, Sports & Leisure] Permiso de BlockBall (blockball.command.staff)."
        }
    },
    {
        "node": "blockball.edit",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Access permission for BlockBall (blockball.edit).",
            "es": "[Casino, Sports & Leisure] Permiso de BlockBall (blockball.edit)."
        }
    },
    {
        "node": "blockball.referee.join",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Access permission for BlockBall (blockball.referee.join).",
            "es": "[Casino, Sports & Leisure] Permiso de BlockBall (blockball.referee.join)."
        }
    },
    {
        "node": "blockball.shycommandsigns.add",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Access permission for BlockBall (blockball.shycommandsigns.add).",
            "es": "[Casino, Sports & Leisure] Permiso de BlockBall (blockball.shycommandsigns.add)."
        }
    },
    {
        "node": "blockball.shycommandsigns.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "BlockBall",
        "desc": {
            "en": "Access permission for BlockBall (blockball.shycommandsigns.command).",
            "es": "[Casino, Sports & Leisure] Permiso de BlockBall (blockball.shycommandsigns.command)."
        }
    },
    {
        "node": "citizens.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Access permission for Citizens (citizens.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Citizens (citizens.*)."
        }
    },
    {
        "node": "citizens.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Access permission for Citizens (citizens.admin).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Citizens (citizens.admin)."
        }
    },
    {
        "node": "citizens.admin.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Access permission for Citizens (citizens.admin.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Citizens (citizens.admin.*)."
        }
    },
    {
        "node": "citizens.admin.avoid-limits",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Access permission for Citizens (citizens.admin.avoid-limits).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Citizens (citizens.admin.avoid-limits)."
        }
    },
    {
        "node": "citizens.admin.remove.all",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Access permission for Citizens (citizens.admin.remove.all).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Citizens (citizens.admin.remove.all)."
        }
    },
    {
        "node": "citizens.citizens.help",
        "group": "default",
        "defaultState": "True",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Citizens",
        "desc": {
            "en": "Access permission for Citizens (citizens.citizens.help).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Citizens (citizens.citizens.help)."
        }
    },
    {
        "node": "clanplus.setpermission",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Access permission for ClansPlus (clanplus.setpermission).",
            "es": "[Crime, Gangs & Heists] Permiso de ClansPlus (clanplus.setpermission)."
        }
    },
    {
        "node": "items.reset.lore",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Access permission for ClansPlus (items.reset.lore).",
            "es": "[Crime, Gangs & Heists] Permiso de ClansPlus (items.reset.lore)."
        }
    },
    {
        "node": "items.reset.name",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Access permission for ClansPlus (items.reset.name).",
            "es": "[Crime, Gangs & Heists] Permiso de ClansPlus (items.reset.name)."
        }
    },
    {
        "node": "items.reset.slot",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Access permission for ClansPlus (items.reset.slot).",
            "es": "[Crime, Gangs & Heists] Permiso de ClansPlus (items.reset.slot)."
        }
    },
    {
        "node": "items.reset.type",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Access permission for ClansPlus (items.reset.type).",
            "es": "[Crime, Gangs & Heists] Permiso de ClansPlus (items.reset.type)."
        }
    },
    {
        "node": "items.reset.value",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "ClansPlus",
        "desc": {
            "en": "Access permission for ClansPlus (items.reset.value).",
            "es": "[Crime, Gangs & Heists] Permiso de ClansPlus (items.reset.value)."
        }
    },
    {
        "node": "craftorithm.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Craftorithm",
        "desc": {
            "en": "Access permission for Craftorithm (craftorithm.command).",
            "es": "[Core & Roleplay] Permiso de Craftorithm (craftorithm.command)."
        }
    },
    {
        "node": "craftorithm.command.openmenu",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Craftorithm",
        "desc": {
            "en": "Access permission for Craftorithm (craftorithm.command.openmenu).",
            "es": "[Core & Roleplay] Permiso de Craftorithm (craftorithm.command.openmenu)."
        }
    },
    {
        "node": "craftorithm.command.recipebook",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Craftorithm",
        "desc": {
            "en": "Access permission for Craftorithm (craftorithm.command.recipebook).",
            "es": "[Core & Roleplay] Permiso de Craftorithm (craftorithm.command.recipebook)."
        }
    },
    {
        "node": "craftorithm.command.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Craftorithm",
        "desc": {
            "en": "Access permission for Craftorithm (craftorithm.command.reload).",
            "es": "[Core & Roleplay] Permiso de Craftorithm (craftorithm.command.reload)."
        }
    },
    {
        "node": "craftorithm.command.script",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Craftorithm",
        "desc": {
            "en": "Access permission for Craftorithm (craftorithm.command.script).",
            "es": "[Core & Roleplay] Permiso de Craftorithm (craftorithm.command.script)."
        }
    },
    {
        "node": "craftorithm.command.version",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Craftorithm",
        "desc": {
            "en": "Access permission for Craftorithm (craftorithm.command.version).",
            "es": "[Core & Roleplay] Permiso de Craftorithm (craftorithm.command.version)."
        }
    },
    {
        "node": "customdeathdrops.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Crime, Gangs & Heists",
        "plugin": "CustomDeathDrops",
        "desc": {
            "en": "Access permission for CustomDeathDrops (customdeathdrops.reload).",
            "es": "[Crime, Gangs & Heists] Permiso de CustomDeathDrops (customdeathdrops.reload)."
        }
    },
    {
        "node": "dh.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Access permission for DecentHolograms (dh.command).",
            "es": "[Communication & Navigation] Permiso de DecentHolograms (dh.command)."
        }
    },
    {
        "node": "dh.command.convert",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Access permission for DecentHolograms (dh.command.convert).",
            "es": "[Communication & Navigation] Permiso de DecentHolograms (dh.command.convert)."
        }
    },
    {
        "node": "dh.command.decentholograms",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Access permission for DecentHolograms (dh.command.decentholograms).",
            "es": "[Communication & Navigation] Permiso de DecentHolograms (dh.command.decentholograms)."
        }
    },
    {
        "node": "dh.command.displays",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Access permission for DecentHolograms (dh.command.displays).",
            "es": "[Communication & Navigation] Permiso de DecentHolograms (dh.command.displays)."
        }
    },
    {
        "node": "dh.command.displays.attribute",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Access permission for DecentHolograms (dh.command.displays.attribute).",
            "es": "[Communication & Navigation] Permiso de DecentHolograms (dh.command.displays.attribute)."
        }
    },
    {
        "node": "dh.command.displays.center",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "DecentHolograms",
        "desc": {
            "en": "Access permission for DecentHolograms (dh.command.displays.center).",
            "es": "[Communication & Navigation] Permiso de DecentHolograms (dh.command.displays.center)."
        }
    },
    {
        "node": "deluxemenus.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Access permission for DeluxeMenus (deluxemenus.admin).",
            "es": "[Core & Roleplay] Permiso de DeluxeMenus (deluxemenus.admin)."
        }
    },
    {
        "node": "deluxemenus.list",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Access permission for DeluxeMenus (deluxemenus.list).",
            "es": "[Core & Roleplay] Permiso de DeluxeMenus (deluxemenus.list)."
        }
    },
    {
        "node": "deluxemenus.menu.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Access permission for DeluxeMenus (deluxemenus.menu.*).",
            "es": "[Core & Roleplay] Permiso de DeluxeMenus (deluxemenus.menu.*)."
        }
    },
    {
        "node": "deluxemenus.open",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Access permission for DeluxeMenus (deluxemenus.open).",
            "es": "[Core & Roleplay] Permiso de DeluxeMenus (deluxemenus.open)."
        }
    },
    {
        "node": "deluxemenus.open.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Access permission for DeluxeMenus (deluxemenus.open.bypass).",
            "es": "[Core & Roleplay] Permiso de DeluxeMenus (deluxemenus.open.bypass)."
        }
    },
    {
        "node": "deluxemenus.open.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "DeluxeMenus",
        "desc": {
            "en": "Access permission for DeluxeMenus (deluxemenus.open.others).",
            "es": "[Core & Roleplay] Permiso de DeluxeMenus (deluxemenus.open.others)."
        }
    },
    {
        "node": "denizen.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Access permission for Denizen (denizen.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Denizen (denizen.*)."
        }
    },
    {
        "node": "denizen.basic",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Access permission for Denizen (denizen.basic).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Denizen (denizen.basic)."
        }
    },
    {
        "node": "denizen.debug",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Access permission for Denizen (denizen.debug).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Denizen (denizen.debug)."
        }
    },
    {
        "node": "denizen.dscript",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Access permission for Denizen (denizen.dscript).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Denizen (denizen.dscript)."
        }
    },
    {
        "node": "denizen.ex",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Access permission for Denizen (denizen.ex).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Denizen (denizen.ex)."
        }
    },
    {
        "node": "denizen.npc.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Denizen",
        "desc": {
            "en": "Access permission for Denizen (denizen.npc.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Denizen (denizen.npc.*)."
        }
    },
    {
        "node": "commands.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Access permission for dtlTraders (commands.create).",
            "es": "[Economy & Banking] Permiso de dtlTraders (commands.create)."
        }
    },
    {
        "node": "commands.delete",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Access permission for dtlTraders (commands.delete).",
            "es": "[Economy & Banking] Permiso de dtlTraders (commands.delete)."
        }
    },
    {
        "node": "commands.edit",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Access permission for dtlTraders (commands.edit).",
            "es": "[Economy & Banking] Permiso de dtlTraders (commands.edit)."
        }
    },
    {
        "node": "commands.help",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Access permission for dtlTraders (commands.help).",
            "es": "[Economy & Banking] Permiso de dtlTraders (commands.help)."
        }
    },
    {
        "node": "commands.info",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Access permission for dtlTraders (commands.info).",
            "es": "[Economy & Banking] Permiso de dtlTraders (commands.info)."
        }
    },
    {
        "node": "commands.list",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "dtlTraders",
        "desc": {
            "en": "Access permission for dtlTraders (commands.list).",
            "es": "[Economy & Banking] Permiso de dtlTraders (commands.list)."
        }
    },
    {
        "node": "essentials.chat.color",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Access permission for EssentialsChat (essentials.chat.color).",
            "es": "[Communication & Navigation] Permiso de EssentialsChat (essentials.chat.color)."
        }
    },
    {
        "node": "essentials.chat.format",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Access permission for EssentialsChat (essentials.chat.format).",
            "es": "[Communication & Navigation] Permiso de EssentialsChat (essentials.chat.format)."
        }
    },
    {
        "node": "essentials.chat.local",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Access permission for EssentialsChat (essentials.chat.local).",
            "es": "[Communication & Navigation] Permiso de EssentialsChat (essentials.chat.local)."
        }
    },
    {
        "node": "essentials.chat.magic",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Access permission for EssentialsChat (essentials.chat.magic).",
            "es": "[Communication & Navigation] Permiso de EssentialsChat (essentials.chat.magic)."
        }
    },
    {
        "node": "essentials.chat.question",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Access permission for EssentialsChat (essentials.chat.question).",
            "es": "[Communication & Navigation] Permiso de EssentialsChat (essentials.chat.question)."
        }
    },
    {
        "node": "essentials.chat.receive.local",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "EssentialsChat",
        "desc": {
            "en": "Access permission for EssentialsChat (essentials.chat.receive.local).",
            "es": "[Communication & Navigation] Permiso de EssentialsChat (essentials.chat.receive.local)."
        }
    },
    {
        "node": "essentials.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Access permission for Essentials (essentials.*).",
            "es": "[Core & Roleplay] Permiso de Essentials (essentials.*)."
        }
    },
    {
        "node": "essentials.afk",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Access permission for Essentials (essentials.afk).",
            "es": "[Core & Roleplay] Permiso de Essentials (essentials.afk)."
        }
    },
    {
        "node": "essentials.afk.auto",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Access permission for Essentials (essentials.afk.auto).",
            "es": "[Core & Roleplay] Permiso de Essentials (essentials.afk.auto)."
        }
    },
    {
        "node": "essentials.afk.kickexempt",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Access permission for Essentials (essentials.afk.kickexempt).",
            "es": "[Core & Roleplay] Permiso de Essentials (essentials.afk.kickexempt)."
        }
    },
    {
        "node": "essentials.afk.message",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Access permission for Essentials (essentials.afk.message).",
            "es": "[Core & Roleplay] Permiso de Essentials (essentials.afk.message)."
        }
    },
    {
        "node": "essentials.afk.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Essentials",
        "desc": {
            "en": "Access permission for Essentials (essentials.afk.others).",
            "es": "[Core & Roleplay] Permiso de Essentials (essentials.afk.others)."
        }
    },
    {
        "node": "essentials.setspawn",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Access permission for EssentialsSpawn (essentials.setspawn).",
            "es": "[Core & Roleplay] Permiso de EssentialsSpawn (essentials.setspawn)."
        }
    },
    {
        "node": "essentials.spawn",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Access permission for EssentialsSpawn (essentials.spawn).",
            "es": "[Core & Roleplay] Permiso de EssentialsSpawn (essentials.spawn)."
        }
    },
    {
        "node": "essentials.spawn-on-join.exempt",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Access permission for EssentialsSpawn (essentials.spawn-on-join.exempt).",
            "es": "[Core & Roleplay] Permiso de EssentialsSpawn (essentials.spawn-on-join.exempt)."
        }
    },
    {
        "node": "essentials.spawn.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "EssentialsSpawn",
        "desc": {
            "en": "Access permission for EssentialsSpawn (essentials.spawn.others).",
            "es": "[Core & Roleplay] Permiso de EssentialsSpawn (essentials.spawn.others)."
        }
    },
    {
        "node": "elevator.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Access permission for Elevator (elevator.admin).",
            "es": "[Vehicles & Transport] Permiso de Elevator (elevator.admin)."
        }
    },
    {
        "node": "elevator.bypass.cooldown",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Access permission for Elevator (elevator.bypass.cooldown).",
            "es": "[Vehicles & Transport] Permiso de Elevator (elevator.bypass.cooldown)."
        }
    },
    {
        "node": "elevator.bypass.distance",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Access permission for Elevator (elevator.bypass.distance).",
            "es": "[Vehicles & Transport] Permiso de Elevator (elevator.bypass.distance)."
        }
    },
    {
        "node": "elevator.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Access permission for Elevator (elevator.commands).",
            "es": "[Vehicles & Transport] Permiso de Elevator (elevator.commands)."
        }
    },
    {
        "node": "elevator.commands.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Access permission for Elevator (elevator.commands.create).",
            "es": "[Vehicles & Transport] Permiso de Elevator (elevator.commands.create)."
        }
    },
    {
        "node": "elevator.commands.help",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "Elevator",
        "desc": {
            "en": "Access permission for Elevator (elevator.commands.help).",
            "es": "[Vehicles & Transport] Permiso de Elevator (elevator.commands.help)."
        }
    },
    {
        "node": "emf.admin.debug.database",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Access permission for EvenMoreFish (emf.admin.debug.database).",
            "es": "[Casino, Sports & Leisure] Permiso de EvenMoreFish (emf.admin.debug.database)."
        }
    },
    {
        "node": "emf.admin.migrate",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Access permission for EvenMoreFish (emf.admin.migrate).",
            "es": "[Casino, Sports & Leisure] Permiso de EvenMoreFish (emf.admin.migrate)."
        }
    },
    {
        "node": "emf.admin.update.notify",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Access permission for EvenMoreFish (emf.admin.update.notify).",
            "es": "[Casino, Sports & Leisure] Permiso de EvenMoreFish (emf.admin.update.notify)."
        }
    },
    {
        "node": "emf.applybaits",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Access permission for EvenMoreFish (emf.applybaits).",
            "es": "[Casino, Sports & Leisure] Permiso de EvenMoreFish (emf.applybaits)."
        }
    },
    {
        "node": "emf.gui",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Access permission for EvenMoreFish (emf.gui).",
            "es": "[Casino, Sports & Leisure] Permiso de EvenMoreFish (emf.gui)."
        }
    },
    {
        "node": "emf.help",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "EvenMoreFish",
        "desc": {
            "en": "Access permission for EvenMoreFish (emf.help).",
            "es": "[Casino, Sports & Leisure] Permiso de EvenMoreFish (emf.help)."
        }
    },
    {
        "node": "auto.redeem",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Access permission for ExcellentCrates (auto.redeem).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ExcellentCrates (auto.redeem)."
        }
    },
    {
        "node": "balance.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Access permission for ExcellentCrates (balance.others).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ExcellentCrates (balance.others)."
        }
    },
    {
        "node": "block.place",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Access permission for ExcellentCrates (block.place).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ExcellentCrates (block.place)."
        }
    },
    {
        "node": "block.remove",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Access permission for ExcellentCrates (block.remove).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ExcellentCrates (block.remove)."
        }
    },
    {
        "node": "crates.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Access permission for ExcellentCrates (crates.commands).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ExcellentCrates (crates.commands)."
        }
    },
    {
        "node": "giveall.included",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ExcellentCrates",
        "desc": {
            "en": "Access permission for ExcellentCrates (giveall.included).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ExcellentCrates (giveall.included)."
        }
    },
    {
        "node": "ei.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Access permission for ExecutableItems (ei.*).",
            "es": "[Firearms & Equipment] Permiso de ExecutableItems (ei.*)."
        }
    },
    {
        "node": "ei.cmd.actionbar",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Access permission for ExecutableItems (ei.cmd.actionbar).",
            "es": "[Firearms & Equipment] Permiso de ExecutableItems (ei.cmd.actionbar)."
        }
    },
    {
        "node": "ei.cmd.clear",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Access permission for ExecutableItems (ei.cmd.clear).",
            "es": "[Firearms & Equipment] Permiso de ExecutableItems (ei.cmd.clear)."
        }
    },
    {
        "node": "ei.cmd.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Access permission for ExecutableItems (ei.cmd.create).",
            "es": "[Firearms & Equipment] Permiso de ExecutableItems (ei.cmd.create)."
        }
    },
    {
        "node": "ei.cmd.customprojectiles",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Access permission for ExecutableItems (ei.cmd.customprojectiles).",
            "es": "[Firearms & Equipment] Permiso de ExecutableItems (ei.cmd.customprojectiles)."
        }
    },
    {
        "node": "ei.cmd.delete",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "ExecutableItems",
        "desc": {
            "en": "Access permission for ExecutableItems (ei.cmd.delete).",
            "es": "[Firearms & Equipment] Permiso de ExecutableItems (ei.cmd.delete)."
        }
    },
    {
        "node": "gps.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Access permission for GPS (gps.commands).",
            "es": "[Communication & Navigation] Permiso de GPS (gps.commands)."
        }
    },
    {
        "node": "gps.commands.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Access permission for GPS (gps.commands.admin).",
            "es": "[Communication & Navigation] Permiso de GPS (gps.commands.admin)."
        }
    },
    {
        "node": "gps.commands.configurator",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Access permission for GPS (gps.commands.configurator).",
            "es": "[Communication & Navigation] Permiso de GPS (gps.commands.configurator)."
        }
    },
    {
        "node": "gps.commands.help",
        "group": "default",
        "defaultState": "True",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Access permission for GPS (gps.commands.help).",
            "es": "[Communication & Navigation] Permiso de GPS (gps.commands.help)."
        }
    },
    {
        "node": "gps.commands.list",
        "group": "default",
        "defaultState": "True",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Access permission for GPS (gps.commands.list).",
            "es": "[Communication & Navigation] Permiso de GPS (gps.commands.list)."
        }
    },
    {
        "node": "gps.commands.move",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "GPS",
        "desc": {
            "en": "Access permission for GPS (gps.commands.move).",
            "es": "[Communication & Navigation] Permiso de GPS (gps.commands.move)."
        }
    },
    {
        "node": "GSit.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Access permission for GSit (GSit.*).",
            "es": "[Casino, Sports & Leisure] Permiso de GSit (GSit.*)."
        }
    },
    {
        "node": "GSit.GSitReload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Access permission for GSit (GSit.GSitReload).",
            "es": "[Casino, Sports & Leisure] Permiso de GSit (GSit.GSitReload)."
        }
    },
    {
        "node": "GSit.Kick",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Access permission for GSit (GSit.Kick).",
            "es": "[Casino, Sports & Leisure] Permiso de GSit (GSit.Kick)."
        }
    },
    {
        "node": "GSit.Toggle",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Access permission for GSit (GSit.Toggle).",
            "es": "[Casino, Sports & Leisure] Permiso de GSit (GSit.Toggle)."
        }
    },
    {
        "node": "GSit.Update",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GSit",
        "desc": {
            "en": "Access permission for GSit (GSit.Update).",
            "es": "[Casino, Sports & Leisure] Permiso de GSit (GSit.Update)."
        }
    },
    {
        "node": "gadgetsmenu.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Access permission for GadgetsMenu (gadgetsmenu.*).",
            "es": "[Casino, Sports & Leisure] Permiso de GadgetsMenu (gadgetsmenu.*)."
        }
    },
    {
        "node": "gadgetsmenu.animatedhats.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Access permission for GadgetsMenu (gadgetsmenu.animatedhats.*).",
            "es": "[Casino, Sports & Leisure] Permiso de GadgetsMenu (gadgetsmenu.animatedhats.*)."
        }
    },
    {
        "node": "gadgetsmenu.animations.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Access permission for GadgetsMenu (gadgetsmenu.animations.*).",
            "es": "[Casino, Sports & Leisure] Permiso de GadgetsMenu (gadgetsmenu.animations.*)."
        }
    },
    {
        "node": "gadgetsmenu.animations.random",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Access permission for GadgetsMenu (gadgetsmenu.animations.random).",
            "es": "[Casino, Sports & Leisure] Permiso de GadgetsMenu (gadgetsmenu.animations.random)."
        }
    },
    {
        "node": "gadgetsmenu.autoequip.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Access permission for GadgetsMenu (gadgetsmenu.autoequip.*).",
            "es": "[Casino, Sports & Leisure] Permiso de GadgetsMenu (gadgetsmenu.autoequip.*)."
        }
    },
    {
        "node": "gadgetsmenu.autoequip.foundloot",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "GadgetsMenu",
        "desc": {
            "en": "Access permission for GadgetsMenu (gadgetsmenu.autoequip.foundloot).",
            "es": "[Casino, Sports & Leisure] Permiso de GadgetsMenu (gadgetsmenu.autoequip.foundloot)."
        }
    },
    {
        "node": "gizmo.fade",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Gizmo",
        "desc": {
            "en": "Access permission for Gizmo (gizmo.fade).",
            "es": "[Casino, Sports & Leisure] Permiso de Gizmo (gizmo.fade)."
        }
    },
    {
        "node": "gizmo.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Gizmo",
        "desc": {
            "en": "Access permission for Gizmo (gizmo.reload).",
            "es": "[Casino, Sports & Leisure] Permiso de Gizmo (gizmo.reload)."
        }
    },
    {
        "node": "gizmo.show",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Gizmo",
        "desc": {
            "en": "Access permission for Gizmo (gizmo.show).",
            "es": "[Casino, Sports & Leisure] Permiso de Gizmo (gizmo.show)."
        }
    },
    {
        "node": "imageframe.adminbypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Access permission for ImageFrame (imageframe.adminbypass).",
            "es": "[Communication & Navigation] Permiso de ImageFrame (imageframe.adminbypass)."
        }
    },
    {
        "node": "imageframe.admindelete",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Access permission for ImageFrame (imageframe.admindelete).",
            "es": "[Communication & Navigation] Permiso de ImageFrame (imageframe.admindelete)."
        }
    },
    {
        "node": "imageframe.adminmigrate",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Access permission for ImageFrame (imageframe.adminmigrate).",
            "es": "[Communication & Navigation] Permiso de ImageFrame (imageframe.adminmigrate)."
        }
    },
    {
        "node": "imageframe.adminsetcreator",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Access permission for ImageFrame (imageframe.adminsetcreator).",
            "es": "[Communication & Navigation] Permiso de ImageFrame (imageframe.adminsetcreator)."
        }
    },
    {
        "node": "imageframe.clone",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Access permission for ImageFrame (imageframe.clone).",
            "es": "[Communication & Navigation] Permiso de ImageFrame (imageframe.clone)."
        }
    },
    {
        "node": "imageframe.create.animated",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "ImageFrame",
        "desc": {
            "en": "Access permission for ImageFrame (imageframe.create.animated).",
            "es": "[Communication & Navigation] Permiso de ImageFrame (imageframe.create.animated)."
        }
    },
    {
        "node": "image.command.resize",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Access permission for Images (image.command.resize).",
            "es": "[Communication & Navigation] Permiso de Images (image.command.resize)."
        }
    },
    {
        "node": "image.command.size",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Access permission for Images (image.command.size).",
            "es": "[Communication & Navigation] Permiso de Images (image.command.size)."
        }
    },
    {
        "node": "images.cimg",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Access permission for Images (images.cimg).",
            "es": "[Communication & Navigation] Permiso de Images (images.cimg)."
        }
    },
    {
        "node": "images.command.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Access permission for Images (images.command.create).",
            "es": "[Communication & Navigation] Permiso de Images (images.command.create)."
        }
    },
    {
        "node": "images.command.create.url",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Access permission for Images (images.command.create.url).",
            "es": "[Communication & Navigation] Permiso de Images (images.command.create.url)."
        }
    },
    {
        "node": "images.command.delete",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "Images",
        "desc": {
            "en": "Access permission for Images (images.command.delete).",
            "es": "[Communication & Navigation] Permiso de Images (images.command.delete)."
        }
    },
    {
        "node": "music.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Access permission for JukeBox (music.*).",
            "es": "[Casino, Sports & Leisure] Permiso de JukeBox (music.*)."
        }
    },
    {
        "node": "music.adminItem",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Access permission for JukeBox (music.adminItem).",
            "es": "[Casino, Sports & Leisure] Permiso de JukeBox (music.adminItem)."
        }
    },
    {
        "node": "music.command.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Access permission for JukeBox (music.command.admin).",
            "es": "[Casino, Sports & Leisure] Permiso de JukeBox (music.command.admin)."
        }
    },
    {
        "node": "music.favorites",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Access permission for JukeBox (music.favorites).",
            "es": "[Casino, Sports & Leisure] Permiso de JukeBox (music.favorites)."
        }
    },
    {
        "node": "music.loop",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Access permission for JukeBox (music.loop).",
            "es": "[Casino, Sports & Leisure] Permiso de JukeBox (music.loop)."
        }
    },
    {
        "node": "music.particles",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "JukeBox",
        "desc": {
            "en": "Access permission for JukeBox (music.particles).",
            "es": "[Casino, Sports & Leisure] Permiso de JukeBox (music.particles)."
        }
    },
    {
        "node": "lagfixer.updater",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Access permission for LagFixer (lagfixer.updater).",
            "es": "[NPCs, Rewards & Optimization] Permiso de LagFixer (lagfixer.updater)."
        }
    },
    {
        "node": "main.command_aliases",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Access permission for LagFixer (main.command_aliases).",
            "es": "[NPCs, Rewards & Optimization] Permiso de LagFixer (main.command_aliases)."
        }
    },
    {
        "node": "main.config_formatter",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Access permission for LagFixer (main.config_formatter).",
            "es": "[NPCs, Rewards & Optimization] Permiso de LagFixer (main.config_formatter)."
        }
    },
    {
        "node": "main.errors_reporter",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Access permission for LagFixer (main.errors_reporter).",
            "es": "[NPCs, Rewards & Optimization] Permiso de LagFixer (main.errors_reporter)."
        }
    },
    {
        "node": "main.monitor.map.enabled",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Access permission for LagFixer (main.monitor.map.enabled).",
            "es": "[NPCs, Rewards & Optimization] Permiso de LagFixer (main.monitor.map.enabled)."
        }
    },
    {
        "node": "main.monitor.map.id",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "LagFixer",
        "desc": {
            "en": "Access permission for LagFixer (main.monitor.map.id).",
            "es": "[NPCs, Rewards & Optimization] Permiso de LagFixer (main.monitor.map.id)."
        }
    },
    {
        "node": "lottery.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Lottery",
        "desc": {
            "en": "Access permission for Lottery (lottery.admin).",
            "es": "[Casino, Sports & Leisure] Permiso de Lottery (lottery.admin)."
        }
    },
    {
        "node": "lottery.draw",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Lottery",
        "desc": {
            "en": "Access permission for Lottery (lottery.draw).",
            "es": "[Casino, Sports & Leisure] Permiso de Lottery (lottery.draw)."
        }
    },
    {
        "node": "mtvehicles.anwb",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Access permission for MTVehicles (mtvehicles.anwb).",
            "es": "[Vehicles & Transport] Permiso de MTVehicles (mtvehicles.anwb)."
        }
    },
    {
        "node": "mtvehicles.benzine",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Access permission for MTVehicles (mtvehicles.benzine).",
            "es": "[Vehicles & Transport] Permiso de MTVehicles (mtvehicles.benzine)."
        }
    },
    {
        "node": "mtvehicles.benzinesize",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Access permission for MTVehicles (mtvehicles.benzinesize).",
            "es": "[Vehicles & Transport] Permiso de MTVehicles (mtvehicles.benzinesize)."
        }
    },
    {
        "node": "mtvehicles.benzineval",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Access permission for MTVehicles (mtvehicles.benzineval).",
            "es": "[Vehicles & Transport] Permiso de MTVehicles (mtvehicles.benzineval)."
        }
    },
    {
        "node": "mtvehicles.buycar",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Access permission for MTVehicles (mtvehicles.buycar).",
            "es": "[Vehicles & Transport] Permiso de MTVehicles (mtvehicles.buycar)."
        }
    },
    {
        "node": "mtvehicles.buyvoucher",
        "group": "default",
        "defaultState": "True",
        "category": "Vehicles & Transport",
        "plugin": "MTVehicles",
        "desc": {
            "en": "Access permission for MTVehicles (mtvehicles.buyvoucher).",
            "es": "[Vehicles & Transport] Permiso de MTVehicles (mtvehicles.buyvoucher)."
        }
    },
    {
        "node": "minecity.vehicle.model",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecityFixerAddon",
        "desc": {
            "en": "Access permission for MinecityFixerAddon (minecity.vehicle.model).",
            "es": "[Core & Roleplay] Permiso de MinecityFixerAddon (minecity.vehicle.model)."
        }
    },
    {
        "node": "arm.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access permission for MinecitySuite (arm.admin).",
            "es": "[Core & Roleplay] Permiso de MinecitySuite (arm.admin)."
        }
    },
    {
        "node": "arm.admin.remove",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access permission for MinecitySuite (arm.admin.remove).",
            "es": "[Core & Roleplay] Permiso de MinecitySuite (arm.admin.remove)."
        }
    },
    {
        "node": "broadcast.on-arrest",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access permission for MinecitySuite (broadcast.on-arrest).",
            "es": "[Core & Roleplay] Permiso de MinecitySuite (broadcast.on-arrest)."
        }
    },
    {
        "node": "jail.blacklisted-items",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access permission for MinecitySuite (jail.blacklisted-items).",
            "es": "[Core & Roleplay] Permiso de MinecitySuite (jail.blacklisted-items)."
        }
    },
    {
        "node": "jail.blocked-commands",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access permission for MinecitySuite (jail.blocked-commands).",
            "es": "[Core & Roleplay] Permiso de MinecitySuite (jail.blocked-commands)."
        }
    },
    {
        "node": "jail.exit-location.pitch",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MinecitySuite",
        "desc": {
            "en": "Access permission for MinecitySuite (jail.exit-location.pitch).",
            "es": "[Core & Roleplay] Permiso de MinecitySuite (jail.exit-location.pitch)."
        }
    },
    {
        "node": "mycmd.log",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Access permission for MyCommand (mycmd.log).",
            "es": "[Core & Roleplay] Permiso de MyCommand (mycmd.log)."
        }
    },
    {
        "node": "mycommand.antitab.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Access permission for MyCommand (mycommand.antitab.).",
            "es": "[Core & Roleplay] Permiso de MyCommand (mycommand.antitab.)."
        }
    },
    {
        "node": "mycommand.antitab.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Access permission for MyCommand (mycommand.antitab.admin).",
            "es": "[Core & Roleplay] Permiso de MyCommand (mycommand.antitab.admin)."
        }
    },
    {
        "node": "mycommand.block.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Access permission for MyCommand (mycommand.block.).",
            "es": "[Core & Roleplay] Permiso de MyCommand (mycommand.block.)."
        }
    },
    {
        "node": "mycommand.block.all.use",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Access permission for MyCommand (mycommand.block.all.use).",
            "es": "[Core & Roleplay] Permiso de MyCommand (mycommand.block.all.use)."
        }
    },
    {
        "node": "mycommand.block.break",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "MyCommand",
        "desc": {
            "en": "Access permission for MyCommand (mycommand.block.break).",
            "es": "[Core & Roleplay] Permiso de MyCommand (mycommand.block.break)."
        }
    },
    {
        "node": "colors.old",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Nightcore",
        "desc": {
            "en": "Access permission for Nightcore (colors.old).",
            "es": "[Core & Roleplay] Permiso de Nightcore (colors.old)."
        }
    },
    {
        "node": "nightcore.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Nightcore",
        "desc": {
            "en": "Access permission for Nightcore (nightcore.*).",
            "es": "[Core & Roleplay] Permiso de Nightcore (nightcore.*)."
        }
    },
    {
        "node": "nightcore.command.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Nightcore",
        "desc": {
            "en": "Access permission for Nightcore (nightcore.command.).",
            "es": "[Core & Roleplay] Permiso de Nightcore (nightcore.command.)."
        }
    },
    {
        "node": "nightcore.command.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Nightcore",
        "desc": {
            "en": "Access permission for Nightcore (nightcore.command.*).",
            "es": "[Core & Roleplay] Permiso de Nightcore (nightcore.command.*)."
        }
    },
    {
        "node": "nightcore.command.checkperm",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "Nightcore",
        "desc": {
            "en": "Access permission for Nightcore (nightcore.command.checkperm).",
            "es": "[Core & Roleplay] Permiso de Nightcore (nightcore.command.checkperm)."
        }
    },
    {
        "node": "nightcore.command.dumpitem",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Nightcore",
        "desc": {
            "en": "Access permission for Nightcore (nightcore.command.dumpitem).",
            "es": "[Core & Roleplay] Permiso de Nightcore (nightcore.command.dumpitem)."
        }
    },
    {
        "node": "chunky.chunky",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Access permission for Chunky (chunky.chunky).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Chunky (chunky.chunky)."
        }
    },
    {
        "node": "chunky.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Access permission for Chunky (chunky.command).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Chunky (chunky.command)."
        }
    },
    {
        "node": "chunky.command.border",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Access permission for Chunky (chunky.command.border).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Chunky (chunky.command.border)."
        }
    },
    {
        "node": "chunky.command.cancel",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Access permission for Chunky (chunky.command.cancel).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Chunky (chunky.command.cancel)."
        }
    },
    {
        "node": "chunky.command.center",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Access permission for Chunky (chunky.command.center).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Chunky (chunky.command.center)."
        }
    },
    {
        "node": "chunky.command.confirm",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Chunky",
        "desc": {
            "en": "Access permission for Chunky (chunky.command.confirm).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Chunky (chunky.command.confirm)."
        }
    },
    {
        "node": "rosegarden.rwd",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Access permission for RoseStacker (rosegarden.rwd).",
            "es": "[NPCs, Rewards & Optimization] Permiso de RoseStacker (rosegarden.rwd)."
        }
    },
    {
        "node": "rosegarden.updates",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Access permission for RoseStacker (rosegarden.updates).",
            "es": "[NPCs, Rewards & Optimization] Permiso de RoseStacker (rosegarden.updates)."
        }
    },
    {
        "node": "rosestacker.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Access permission for RoseStacker (rosestacker.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de RoseStacker (rosestacker.*)."
        }
    },
    {
        "node": "rosestacker.basecommand",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Access permission for RoseStacker (rosestacker.basecommand).",
            "es": "[NPCs, Rewards & Optimization] Permiso de RoseStacker (rosestacker.basecommand)."
        }
    },
    {
        "node": "rosestacker.clearall",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Access permission for RoseStacker (rosestacker.clearall).",
            "es": "[NPCs, Rewards & Optimization] Permiso de RoseStacker (rosestacker.clearall)."
        }
    },
    {
        "node": "rosestacker.give",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "RoseStacker",
        "desc": {
            "en": "Access permission for RoseStacker (rosestacker.give).",
            "es": "[NPCs, Rewards & Optimization] Permiso de RoseStacker (rosestacker.give)."
        }
    },
    {
        "node": "phone.customsim",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Access permission for PhoneV2 (phone.customsim).",
            "es": "[Communication & Navigation] Permiso de PhoneV2 (phone.customsim)."
        }
    },
    {
        "node": "phone.firefighter",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Access permission for PhoneV2 (phone.firefighter).",
            "es": "[Communication & Navigation] Permiso de PhoneV2 (phone.firefighter)."
        }
    },
    {
        "node": "phone.givesim",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "PhoneV2",
        "desc": {
            "en": "Access permission for PhoneV2 (phone.givesim).",
            "es": "[Communication & Navigation] Permiso de PhoneV2 (phone.givesim)."
        }
    },
    {
        "node": "plhide.bypass.pl-message",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Pl-Hide-Free",
        "desc": {
            "en": "Access permission for Pl-Hide-Free (plhide.bypass.pl-message).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Pl-Hide-Free (plhide.bypass.pl-message)."
        }
    },
    {
        "node": "plhide.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Pl-Hide-Free",
        "desc": {
            "en": "Access permission for Pl-Hide-Free (plhide.reload).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Pl-Hide-Free (plhide.reload)."
        }
    },
    {
        "node": "user.home",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "Pl-Hide-Free",
        "desc": {
            "en": "Access permission for Pl-Hide-Free (user.home).",
            "es": "[NPCs, Rewards & Optimization] Permiso de Pl-Hide-Free (user.home)."
        }
    },
    {
        "node": "placeholderapi.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Access permission for PlaceholderAPI (placeholderapi.*).",
            "es": "[Core & Roleplay] Permiso de PlaceholderAPI (placeholderapi.*)."
        }
    },
    {
        "node": "placeholderapi.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Access permission for PlaceholderAPI (placeholderapi.admin).",
            "es": "[Core & Roleplay] Permiso de PlaceholderAPI (placeholderapi.admin)."
        }
    },
    {
        "node": "placeholderapi.ecloud",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Access permission for PlaceholderAPI (placeholderapi.ecloud).",
            "es": "[Core & Roleplay] Permiso de PlaceholderAPI (placeholderapi.ecloud)."
        }
    },
    {
        "node": "placeholderapi.ecloud.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Access permission for PlaceholderAPI (placeholderapi.ecloud.).",
            "es": "[Core & Roleplay] Permiso de PlaceholderAPI (placeholderapi.ecloud.)."
        }
    },
    {
        "node": "placeholderapi.ecloud.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Access permission for PlaceholderAPI (placeholderapi.ecloud.*).",
            "es": "[Core & Roleplay] Permiso de PlaceholderAPI (placeholderapi.ecloud.*)."
        }
    },
    {
        "node": "placeholderapi.ecloud.clear",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "PlaceholderAPI",
        "desc": {
            "en": "Access permission for PlaceholderAPI (placeholderapi.ecloud.clear).",
            "es": "[Core & Roleplay] Permiso de PlaceholderAPI (placeholderapi.ecloud.clear)."
        }
    },
    {
        "node": "display.cooldown",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Access permission for PlayerKits2 (display.cooldown).",
            "es": "[NPCs, Rewards & Optimization] Permiso de PlayerKits2 (display.cooldown)."
        }
    },
    {
        "node": "display.default",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Access permission for PlayerKits2 (display.default).",
            "es": "[NPCs, Rewards & Optimization] Permiso de PlayerKits2 (display.default)."
        }
    },
    {
        "node": "display.no_permission",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Access permission for PlayerKits2 (display.no_permission).",
            "es": "[NPCs, Rewards & Optimization] Permiso de PlayerKits2 (display.no_permission)."
        }
    },
    {
        "node": "display.one_time",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Access permission for PlayerKits2 (display.one_time).",
            "es": "[NPCs, Rewards & Optimization] Permiso de PlayerKits2 (display.one_time)."
        }
    },
    {
        "node": "display.one_time_requirements",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Access permission for PlayerKits2 (display.one_time_requirements).",
            "es": "[NPCs, Rewards & Optimization] Permiso de PlayerKits2 (display.one_time_requirements)."
        }
    },
    {
        "node": "requirements.actions_on_buy",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "PlayerKits2",
        "desc": {
            "en": "Access permission for PlayerKits2 (requirements.actions_on_buy).",
            "es": "[NPCs, Rewards & Optimization] Permiso de PlayerKits2 (requirements.actions_on_buy)."
        }
    },
    {
        "node": "pocketgames.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Access permission for PocketGames (pocketgames.admin).",
            "es": "[Casino, Sports & Leisure] Permiso de PocketGames (pocketgames.admin)."
        }
    },
    {
        "node": "pocketgames.bypass.enabled",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Access permission for PocketGames (pocketgames.bypass.enabled).",
            "es": "[Casino, Sports & Leisure] Permiso de PocketGames (pocketgames.bypass.enabled)."
        }
    },
    {
        "node": "pocketgames.bypass.world",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Access permission for PocketGames (pocketgames.bypass.world).",
            "es": "[Casino, Sports & Leisure] Permiso de PocketGames (pocketgames.bypass.world)."
        }
    },
    {
        "node": "pocketgames.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Access permission for PocketGames (pocketgames.commands).",
            "es": "[Casino, Sports & Leisure] Permiso de PocketGames (pocketgames.commands)."
        }
    },
    {
        "node": "pocketgames.commands.check",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Access permission for PocketGames (pocketgames.commands.check).",
            "es": "[Casino, Sports & Leisure] Permiso de PocketGames (pocketgames.commands.check)."
        }
    },
    {
        "node": "pocketgames.commands.duel",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "PocketGames",
        "desc": {
            "en": "Access permission for PocketGames (pocketgames.commands.duel).",
            "es": "[Casino, Sports & Leisure] Permiso de PocketGames (pocketgames.commands.duel)."
        }
    },
    {
        "node": "conditions.list",
        "group": "default",
        "defaultState": "True",
        "category": "Core & Roleplay",
        "plugin": "ProCore",
        "desc": {
            "en": "Access permission for ProCore (conditions.list).",
            "es": "[Core & Roleplay] Permiso de ProCore (conditions.list)."
        }
    },
    {
        "node": "core.lang",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "ProCore",
        "desc": {
            "en": "Access permission for ProCore (core.lang).",
            "es": "[Core & Roleplay] Permiso de ProCore (core.lang)."
        }
    },
    {
        "node": "fcore.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "ProCore",
        "desc": {
            "en": "Access permission for ProCore (fcore.admin).",
            "es": "[Core & Roleplay] Permiso de ProCore (fcore.admin)."
        }
    },
    {
        "node": "skillapi.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Access permission for ProSkillAPI (skillapi.*).",
            "es": "[Jobs & Progression] Permiso de ProSkillAPI (skillapi.*)."
        }
    },
    {
        "node": "skillapi.attrib",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Access permission for ProSkillAPI (skillapi.attrib).",
            "es": "[Jobs & Progression] Permiso de ProSkillAPI (skillapi.attrib)."
        }
    },
    {
        "node": "skillapi.backup",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Access permission for ProSkillAPI (skillapi.backup).",
            "es": "[Jobs & Progression] Permiso de ProSkillAPI (skillapi.backup)."
        }
    },
    {
        "node": "skillapi.class",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Access permission for ProSkillAPI (skillapi.class).",
            "es": "[Jobs & Progression] Permiso de ProSkillAPI (skillapi.class)."
        }
    },
    {
        "node": "skillapi.exp",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Access permission for ProSkillAPI (skillapi.exp).",
            "es": "[Jobs & Progression] Permiso de ProSkillAPI (skillapi.exp)."
        }
    },
    {
        "node": "skillapi.force",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ProSkillAPI",
        "desc": {
            "en": "Access permission for ProSkillAPI (skillapi.force).",
            "es": "[Jobs & Progression] Permiso de ProSkillAPI (skillapi.force)."
        }
    },
    {
        "node": "disconnect.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Access permission for ProtocolLib (disconnect.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ProtocolLib (disconnect.*)."
        }
    },
    {
        "node": "protocol.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Access permission for ProtocolLib (protocol.*).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ProtocolLib (protocol.*)."
        }
    },
    {
        "node": "protocol.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Access permission for ProtocolLib (protocol.admin).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ProtocolLib (protocol.admin)."
        }
    },
    {
        "node": "protocol.info",
        "group": "default",
        "defaultState": "True",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ProtocolLib",
        "desc": {
            "en": "Access permission for ProtocolLib (protocol.info).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ProtocolLib (protocol.info)."
        }
    },
    {
        "node": "categories.crafting",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Access permission for QualityArmory (categories.crafting).",
            "es": "[Firearms & Equipment] Permiso de QualityArmory (categories.crafting)."
        }
    },
    {
        "node": "categories.shop",
        "group": "default",
        "defaultState": "True",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Access permission for QualityArmory (categories.shop).",
            "es": "[Firearms & Equipment] Permiso de QualityArmory (categories.shop)."
        }
    },
    {
        "node": "qualityarmory.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Access permission for QualityArmory (qualityarmory.*).",
            "es": "[Firearms & Equipment] Permiso de QualityArmory (qualityarmory.*)."
        }
    },
    {
        "node": "qualityarmory.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Access permission for QualityArmory (qualityarmory.admin).",
            "es": "[Firearms & Equipment] Permiso de QualityArmory (qualityarmory.admin)."
        }
    },
    {
        "node": "qualityarmory.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Access permission for QualityArmory (qualityarmory.create).",
            "es": "[Firearms & Equipment] Permiso de QualityArmory (qualityarmory.create)."
        }
    },
    {
        "node": "qualityarmory.createnewitem",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "QualityArmory",
        "desc": {
            "en": "Access permission for QualityArmory (qualityarmory.createnewitem).",
            "es": "[Firearms & Equipment] Permiso de QualityArmory (qualityarmory.createnewitem)."
        }
    },
    {
        "node": "qualityarmoryvehicles.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Access permission for QualityArmoryVehicles2 (qualityarmoryvehicles.*).",
            "es": "[Vehicles & Transport] Permiso de QualityArmoryVehicles2 (qualityarmoryvehicles.*)."
        }
    },
    {
        "node": "qualityarmoryvehicles.addvehicle",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Access permission for QualityArmoryVehicles2 (qualityarmoryvehicles.addvehicle).",
            "es": "[Vehicles & Transport] Permiso de QualityArmoryVehicles2 (qualityarmoryvehicles.addvehicle)."
        }
    },
    {
        "node": "qualityarmoryvehicles.callback",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Access permission for QualityArmoryVehicles2 (qualityarmoryvehicles.callback).",
            "es": "[Vehicles & Transport] Permiso de QualityArmoryVehicles2 (qualityarmoryvehicles.callback)."
        }
    },
    {
        "node": "qualityarmoryvehicles.callbackAll",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Access permission for QualityArmoryVehicles2 (qualityarmoryvehicles.callbackAll).",
            "es": "[Vehicles & Transport] Permiso de QualityArmoryVehicles2 (qualityarmoryvehicles.callbackAll)."
        }
    },
    {
        "node": "qualityarmoryvehicles.candrive.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Access permission for QualityArmoryVehicles2 (qualityarmoryvehicles.candrive.).",
            "es": "[Vehicles & Transport] Permiso de QualityArmoryVehicles2 (qualityarmoryvehicles.candrive.)."
        }
    },
    {
        "node": "qualityarmoryvehicles.craft",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Vehicles & Transport",
        "plugin": "QualityArmoryVehicles2",
        "desc": {
            "en": "Access permission for QualityArmoryVehicles2 (qualityarmoryvehicles.craft).",
            "es": "[Vehicles & Transport] Permiso de QualityArmoryVehicles2 (qualityarmoryvehicles.craft)."
        }
    },
    {
        "node": "quests.actions.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Access permission for Quests (quests.actions.*).",
            "es": "[Jobs & Progression] Permiso de Quests (quests.actions.*)."
        }
    },
    {
        "node": "quests.actions.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Access permission for Quests (quests.actions.create).",
            "es": "[Jobs & Progression] Permiso de Quests (quests.actions.create)."
        }
    },
    {
        "node": "quests.actions.delete",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Access permission for Quests (quests.actions.delete).",
            "es": "[Jobs & Progression] Permiso de Quests (quests.actions.delete)."
        }
    },
    {
        "node": "quests.actions.edit",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Access permission for Quests (quests.actions.edit).",
            "es": "[Jobs & Progression] Permiso de Quests (quests.actions.edit)."
        }
    },
    {
        "node": "quests.actions.editor",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Access permission for Quests (quests.actions.editor).",
            "es": "[Jobs & Progression] Permiso de Quests (quests.actions.editor)."
        }
    },
    {
        "node": "quests.admin.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "Quests",
        "desc": {
            "en": "Access permission for Quests (quests.admin.*).",
            "es": "[Jobs & Progression] Permiso de Quests (quests.admin.*)."
        }
    },
    {
        "node": "private.platform-width",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "RealMines",
        "desc": {
            "en": "Access permission for RealMines (private.platform-width).",
            "es": "[Core & Roleplay] Permiso de RealMines (private.platform-width)."
        }
    },
    {
        "node": "private.shell-bounds",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "RealMines",
        "desc": {
            "en": "Access permission for RealMines (private.shell-bounds).",
            "es": "[Core & Roleplay] Permiso de RealMines (private.shell-bounds)."
        }
    },
    {
        "node": "realmines.privatemines",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "RealMines",
        "desc": {
            "en": "Access permission for RealMines (realmines.privatemines).",
            "es": "[Core & Roleplay] Permiso de RealMines (realmines.privatemines)."
        }
    },
    {
        "node": "realmines.privatemines.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "RealMines",
        "desc": {
            "en": "Access permission for RealMines (realmines.privatemines.admin).",
            "es": "[Core & Roleplay] Permiso de RealMines (realmines.privatemines.admin)."
        }
    },
    {
        "node": "realmines.privatemines.free",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "RealMines",
        "desc": {
            "en": "Access permission for RealMines (realmines.privatemines.free).",
            "es": "[Core & Roleplay] Permiso de RealMines (realmines.privatemines.free)."
        }
    },
    {
        "node": "reset.commands",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "RealMines",
        "desc": {
            "en": "Access permission for RealMines (reset.commands).",
            "es": "[Core & Roleplay] Permiso de RealMines (reset.commands)."
        }
    },
    {
        "node": "roulette.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Access permission for Roulette (roulette.create).",
            "es": "[Casino, Sports & Leisure] Permiso de Roulette (roulette.create)."
        }
    },
    {
        "node": "roulette.delete",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Access permission for Roulette (roulette.delete).",
            "es": "[Casino, Sports & Leisure] Permiso de Roulette (roulette.delete)."
        }
    },
    {
        "node": "roulette.delete.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Access permission for Roulette (roulette.delete.others).",
            "es": "[Casino, Sports & Leisure] Permiso de Roulette (roulette.delete.others)."
        }
    },
    {
        "node": "roulette.edit",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Access permission for Roulette (roulette.edit).",
            "es": "[Casino, Sports & Leisure] Permiso de Roulette (roulette.edit)."
        }
    },
    {
        "node": "roulette.edit.others",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Access permission for Roulette (roulette.edit.others).",
            "es": "[Casino, Sports & Leisure] Permiso de Roulette (roulette.edit.others)."
        }
    },
    {
        "node": "roulette.force",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Casino, Sports & Leisure",
        "plugin": "Roulette",
        "desc": {
            "en": "Access permission for Roulette (roulette.force).",
            "es": "[Casino, Sports & Leisure] Permiso de Roulette (roulette.force)."
        }
    },
    {
        "node": "score.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "Access permission for SCore (score.*).",
            "es": "[Firearms & Equipment] Permiso de SCore (score.*)."
        }
    },
    {
        "node": "score.cmd.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "Access permission for SCore (score.cmd.).",
            "es": "[Firearms & Equipment] Permiso de SCore (score.cmd.)."
        }
    },
    {
        "node": "score.cmd.inspect-loop",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "Access permission for SCore (score.cmd.inspect-loop).",
            "es": "[Firearms & Equipment] Permiso de SCore (score.cmd.inspect-loop)."
        }
    },
    {
        "node": "score.cmd.particles-toggle",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "Access permission for SCore (score.cmd.particles-toggle).",
            "es": "[Firearms & Equipment] Permiso de SCore (score.cmd.particles-toggle)."
        }
    },
    {
        "node": "score.cmd.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "Access permission for SCore (score.cmd.reload).",
            "es": "[Firearms & Equipment] Permiso de SCore (score.cmd.reload)."
        }
    },
    {
        "node": "score.cmds",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Firearms & Equipment",
        "plugin": "SCore",
        "desc": {
            "en": "Access permission for SCore (score.cmds).",
            "es": "[Firearms & Equipment] Permiso de SCore (score.cmds)."
        }
    },
    {
        "node": "salary.got",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Access permission for SalaryManager (salary.got).",
            "es": "[Economy & Banking] Permiso de SalaryManager (salary.got)."
        }
    },
    {
        "node": "salary.list-group-item",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Access permission for SalaryManager (salary.list-group-item).",
            "es": "[Economy & Banking] Permiso de SalaryManager (salary.list-group-item)."
        }
    },
    {
        "node": "salary.list-none-found",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Access permission for SalaryManager (salary.list-none-found).",
            "es": "[Economy & Banking] Permiso de SalaryManager (salary.list-none-found)."
        }
    },
    {
        "node": "salary.list-player-item",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Access permission for SalaryManager (salary.list-player-item).",
            "es": "[Economy & Banking] Permiso de SalaryManager (salary.list-player-item)."
        }
    },
    {
        "node": "salary.list-start",
        "group": "default",
        "defaultState": "True",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Access permission for SalaryManager (salary.list-start).",
            "es": "[Economy & Banking] Permiso de SalaryManager (salary.list-start)."
        }
    },
    {
        "node": "salary.no-player-or-group",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "SalaryManager",
        "desc": {
            "en": "Access permission for SalaryManager (salary.no-player-or-group).",
            "es": "[Economy & Banking] Permiso de SalaryManager (salary.no-player-or-group)."
        }
    },
    {
        "node": "npc.retry-time",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Access permission for ServerTutorialPlus (npc.retry-time).",
            "es": "[Jobs & Progression] Permiso de ServerTutorialPlus (npc.retry-time)."
        }
    },
    {
        "node": "servertutorial.tutorial.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Access permission for ServerTutorialPlus (servertutorial.tutorial.bypass).",
            "es": "[Jobs & Progression] Permiso de ServerTutorialPlus (servertutorial.tutorial.bypass)."
        }
    },
    {
        "node": "servertutorialplus.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Access permission for ServerTutorialPlus (servertutorialplus.command).",
            "es": "[Jobs & Progression] Permiso de ServerTutorialPlus (servertutorialplus.command)."
        }
    },
    {
        "node": "servertutorialplus.command.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Access permission for ServerTutorialPlus (servertutorialplus.command.*).",
            "es": "[Jobs & Progression] Permiso de ServerTutorialPlus (servertutorialplus.command.*)."
        }
    },
    {
        "node": "servertutorialplus.command.addpoint",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Access permission for ServerTutorialPlus (servertutorialplus.command.addpoint).",
            "es": "[Jobs & Progression] Permiso de ServerTutorialPlus (servertutorialplus.command.addpoint)."
        }
    },
    {
        "node": "servertutorialplus.command.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Jobs & Progression",
        "plugin": "ServerTutorialPlus",
        "desc": {
            "en": "Access permission for ServerTutorialPlus (servertutorialplus.command.create).",
            "es": "[Jobs & Progression] Permiso de ServerTutorialPlus (servertutorialplus.command.create)."
        }
    },
    {
        "node": "# shopkeeper.entity.<mob-type>",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Access permission for Shopkeepers (# shopkeeper.entity.<mob-type>).",
            "es": "[Economy & Banking] Permiso de Shopkeepers (# shopkeeper.entity.<mob-type>)."
        }
    },
    {
        "node": "shopkeeper.*",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Access permission for Shopkeepers (shopkeeper.*).",
            "es": "[Economy & Banking] Permiso de Shopkeepers (shopkeeper.*)."
        }
    },
    {
        "node": "shopkeeper.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Access permission for Shopkeepers (shopkeeper.admin).",
            "es": "[Economy & Banking] Permiso de Shopkeepers (shopkeeper.admin)."
        }
    },
    {
        "node": "shopkeeper.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Access permission for Shopkeepers (shopkeeper.bypass).",
            "es": "[Economy & Banking] Permiso de Shopkeepers (shopkeeper.bypass)."
        }
    },
    {
        "node": "shopkeeper.citizen",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Access permission for Shopkeepers (shopkeeper.citizen).",
            "es": "[Economy & Banking] Permiso de Shopkeepers (shopkeeper.citizen)."
        }
    },
    {
        "node": "shopkeeper.cleanup-citizen-shopkeepers",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Economy & Banking",
        "plugin": "Shopkeepers",
        "desc": {
            "en": "Access permission for Shopkeepers (shopkeeper.cleanup-citizen-shopkeepers).",
            "es": "[Economy & Banking] Permiso de Shopkeepers (shopkeeper.cleanup-citizen-shopkeepers)."
        }
    },
    {
        "node": "rptools.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Access permission for RPTools (rptools.admin).",
            "es": "[Communication & Navigation] Permiso de RPTools (rptools.admin)."
        }
    },
    {
        "node": "rptools.enchanter",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Access permission for RPTools (rptools.enchanter).",
            "es": "[Communication & Navigation] Permiso de RPTools (rptools.enchanter)."
        }
    },
    {
        "node": "rptools.graylist.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Access permission for RPTools (rptools.graylist.bypass).",
            "es": "[Communication & Navigation] Permiso de RPTools (rptools.graylist.bypass)."
        }
    },
    {
        "node": "rptools.skill.",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Access permission for RPTools (rptools.skill.).",
            "es": "[Communication & Navigation] Permiso de RPTools (rptools.skill.)."
        }
    },
    {
        "node": "rptools.skill.volley",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "RPTools",
        "desc": {
            "en": "Access permission for RPTools (rptools.skill.volley).",
            "es": "[Communication & Navigation] Permiso de RPTools (rptools.skill.volley)."
        }
    },
    {
        "node": "errors.log",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Access permission for TAB (errors.log).",
            "es": "[Communication & Navigation] Permiso de TAB (errors.log)."
        }
    },
    {
        "node": "tab.announce.bar",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Access permission for TAB (tab.announce.bar).",
            "es": "[Communication & Navigation] Permiso de TAB (tab.announce.bar)."
        }
    },
    {
        "node": "tab.announce.scoreboard",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Access permission for TAB (tab.announce.scoreboard).",
            "es": "[Communication & Navigation] Permiso de TAB (tab.announce.scoreboard)."
        }
    },
    {
        "node": "tab.bossbar.toggle",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Access permission for TAB (tab.bossbar.toggle).",
            "es": "[Communication & Navigation] Permiso de TAB (tab.bossbar.toggle)."
        }
    },
    {
        "node": "tab.bossbar.toggle.other",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Access permission for TAB (tab.bossbar.toggle.other).",
            "es": "[Communication & Navigation] Permiso de TAB (tab.bossbar.toggle.other)."
        }
    },
    {
        "node": "tab.bypass",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Communication & Navigation",
        "plugin": "TAB",
        "desc": {
            "en": "Access permission for TAB (tab.bypass).",
            "es": "[Communication & Navigation] Permiso de TAB (tab.bypass)."
        }
    },
    {
        "node": "inventories.streak.rewards.days",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Access permission for TheRewards (inventories.streak.rewards.days).",
            "es": "[NPCs, Rewards & Optimization] Permiso de TheRewards (inventories.streak.rewards.days)."
        }
    },
    {
        "node": "require_permission.enabled",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Access permission for TheRewards (require_permission.enabled).",
            "es": "[NPCs, Rewards & Optimization] Permiso de TheRewards (require_permission.enabled)."
        }
    },
    {
        "node": "require_permission.message",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Access permission for TheRewards (require_permission.message).",
            "es": "[NPCs, Rewards & Optimization] Permiso de TheRewards (require_permission.message)."
        }
    },
    {
        "node": "require_permission.permission",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Access permission for TheRewards (require_permission.permission).",
            "es": "[NPCs, Rewards & Optimization] Permiso de TheRewards (require_permission.permission)."
        }
    },
    {
        "node": "therewards.addons",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Access permission for TheRewards (therewards.addons).",
            "es": "[NPCs, Rewards & Optimization] Permiso de TheRewards (therewards.addons)."
        }
    },
    {
        "node": "therewards.export",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "TheRewards",
        "desc": {
            "en": "Access permission for TheRewards (therewards.export).",
            "es": "[NPCs, Rewards & Optimization] Permiso de TheRewards (therewards.export)."
        }
    },
    {
        "node": "uf.create",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Access permission for UltimateFood (uf.create).",
            "es": "[NPCs, Rewards & Optimization] Permiso de UltimateFood (uf.create)."
        }
    },
    {
        "node": "uf.edit",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Access permission for UltimateFood (uf.edit).",
            "es": "[NPCs, Rewards & Optimization] Permiso de UltimateFood (uf.edit)."
        }
    },
    {
        "node": "uf.get",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Access permission for UltimateFood (uf.get).",
            "es": "[NPCs, Rewards & Optimization] Permiso de UltimateFood (uf.get)."
        }
    },
    {
        "node": "uf.menu",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Access permission for UltimateFood (uf.menu).",
            "es": "[NPCs, Rewards & Optimization] Permiso de UltimateFood (uf.menu)."
        }
    },
    {
        "node": "uf.reload",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "UltimateFood",
        "desc": {
            "en": "Access permission for UltimateFood (uf.reload).",
            "es": "[NPCs, Rewards & Optimization] Permiso de UltimateFood (uf.reload)."
        }
    },
    {
        "node": "vault.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Vault",
        "desc": {
            "en": "Access permission for Vault (vault.admin).",
            "es": "[Core & Roleplay] Permiso de Vault (vault.admin)."
        }
    },
    {
        "node": "vault.update",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "Vault",
        "desc": {
            "en": "Access permission for Vault (vault.update).",
            "es": "[Core & Roleplay] Permiso de Vault (vault.update)."
        }
    },
    {
        "node": "generic.armor",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Access permission for ViaVersion (generic.armor).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ViaVersion (generic.armor)."
        }
    },
    {
        "node": "viaversion.admin",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Access permission for ViaVersion (viaversion.admin).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ViaVersion (viaversion.admin)."
        }
    },
    {
        "node": "viaversion.command",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Access permission for ViaVersion (viaversion.command).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ViaVersion (viaversion.command)."
        }
    },
    {
        "node": "viaversion.command.autoteam",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Access permission for ViaVersion (viaversion.command.autoteam).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ViaVersion (viaversion.command.autoteam)."
        }
    },
    {
        "node": "viaversion.command.debug",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Access permission for ViaVersion (viaversion.command.debug).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ViaVersion (viaversion.command.debug)."
        }
    },
    {
        "node": "viaversion.command.displayleaks",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "NPCs, Rewards & Optimization",
        "plugin": "ViaVersion",
        "desc": {
            "en": "Access permission for ViaVersion (viaversion.command.displayleaks).",
            "es": "[NPCs, Rewards & Optimization] Permiso de ViaVersion (viaversion.command.displayleaks)."
        }
    },
    {
        "node": "videopoker.play.player",
        "group": "default",
        "defaultState": "True",
        "category": "Casino, Sports & Leisure",
        "plugin": "VideoPoker",
        "desc": {
            "en": "Access permission for VideoPoker (videopoker.play.player).",
            "es": "[Casino, Sports & Leisure] Permiso de VideoPoker (videopoker.play.player)."
        }
    },
    {
        "node": "groups.admins.permissions",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Access permission for WorldEdit (groups.admins.permissions).",
            "es": "[Properties & Building] Permiso de WorldEdit (groups.admins.permissions)."
        }
    },
    {
        "node": "groups.default.permissions",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Access permission for WorldEdit (groups.default.permissions).",
            "es": "[Properties & Building] Permiso de WorldEdit (groups.default.permissions)."
        }
    },
    {
        "node": "permissions.groups",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Access permission for WorldEdit (permissions.groups).",
            "es": "[Properties & Building] Permiso de WorldEdit (permissions.groups)."
        }
    },
    {
        "node": "permissions.users",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Access permission for WorldEdit (permissions.users).",
            "es": "[Properties & Building] Permiso de WorldEdit (permissions.users)."
        }
    },
    {
        "node": "resolvers.disabled",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Access permission for WorldEdit (resolvers.disabled).",
            "es": "[Properties & Building] Permiso de WorldEdit (resolvers.disabled)."
        }
    },
    {
        "node": "resolvers.enabled",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldEdit",
        "desc": {
            "en": "Access permission for WorldEdit (resolvers.enabled).",
            "es": "[Properties & Building] Permiso de WorldEdit (resolvers.enabled)."
        }
    },
    {
        "node": "flag.regions",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Access permission for WorldGuard (flag.regions).",
            "es": "[Properties & Building] Permiso de WorldGuard (flag.regions)."
        }
    },
    {
        "node": "region.claim",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Access permission for WorldGuard (region.claim).",
            "es": "[Properties & Building] Permiso de WorldGuard (region.claim)."
        }
    },
    {
        "node": "region.define",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Access permission for WorldGuard (region.define).",
            "es": "[Properties & Building] Permiso de WorldGuard (region.define)."
        }
    },
    {
        "node": "region.list",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Access permission for WorldGuard (region.list).",
            "es": "[Properties & Building] Permiso de WorldGuard (region.list)."
        }
    },
    {
        "node": "region.list.own",
        "group": "default",
        "defaultState": "True",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Access permission for WorldGuard (region.list.own).",
            "es": "[Properties & Building] Permiso de WorldGuard (region.list.own)."
        }
    },
    {
        "node": "region.load",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Properties & Building",
        "plugin": "WorldGuard",
        "desc": {
            "en": "Access permission for WorldGuard (region.load).",
            "es": "[Properties & Building] Permiso de WorldGuard (region.load)."
        }
    },
    {
        "node": "warpcfg.cfg",
        "group": "admin",
        "defaultState": "Op Only",
        "category": "Core & Roleplay",
        "plugin": "EssentialsWarpGUI",
        "desc": {
            "en": "Access permission for EssentialsWarpGUI (warpcfg.cfg).",
            "es": "[Core & Roleplay] Permiso de EssentialsWarpGUI (warpcfg.cfg)."
        }
    }
]
};
