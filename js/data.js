/**
 * Minecity Roleplay - Official Master Documentation Database
 * Comprehensive guides, command registry, permissions matrix, and PAPI placeholders.
 */

const MINECITY_DATA = {
  version: "1.21.11-R0.1",
  coreVersion: "MinecitySuite v1.0.0 & MinecityFixerAddon v1.0.4",
  platform: "Purpur 1.21.11 / Java 21",
  resourceLink: "https://builtbybit.com/resources/minecity-roleplay-gta-minecraft-setup.22823/",
  videos: [
    {
      id: "minecity-trailer",
      title: "Minecity Roleplay GTA - Official Cinematic Showcase",
      youtubeId: "dQw4w9WgXcQ", // Representative embed or official link
      url: "https://builtbybit.com/resources/minecity-roleplay-gta-minecraft-setup.22823/",
      description: "Explore the vast metropolis, 3D custom animated vehicles, high-stakes police chases, immersive jobs, and bank heists.",
      category: "Cinematic"
    },
    {
      id: "vehicles-showcase",
      title: "Vehicles & Helicopter Flight Controls System",
      youtubeId: "",
      url: "https://builtbybit.com/resources/minecity-roleplay-gta-minecraft-setup.22823/",
      description: "How to buy, drive, refuel, lock, and fly helicopters with the custom elevation and inversion patch.",
      category: "Vehicles"
    },
    {
      id: "police-ems-showcase",
      title: "Law Enforcement & Emergency Medical Services (EMS)",
      youtubeId: "",
      url: "https://builtbybit.com/resources/minecity-roleplay-gta-minecraft-setup.22823/",
      description: "Wanted stars system, arrest stick, handcuffs, diseases, surgery, and emergency resuscitation.",
      category: "Public Safety"
    }
  ],
  commands: [
    // Real Estate / MCRP-Properties
    { command: "/apartments", aliases: "/properties, /apartamentos", permission: "None (Everyone)", category: "Real Estate", plugin: "MinecitySuite", desc: "Opens the interactive properties menu to browse, rent, buy, or manage owned homes." },
    { command: "/rent", aliases: "/alquiler", permission: "None (Everyone)", category: "Real Estate", plugin: "MinecitySuite", desc: "Quick access shortcut to the rental apartments and temporary suites browser." },
    { command: "/buy", aliases: "/houses, /comprar", permission: "None (Everyone)", category: "Real Estate", plugin: "MinecitySuite", desc: "Quick access shortcut to permanent houses and luxury villas for sale." },
    { command: "/arm rent <region>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Rents an apartment or business region directly." },
    { command: "/arm buy <region>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Purchases a permanent property plot." },
    { command: "/arm addmember <region> <player>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Adds a roommate or friend with access to your apartment." },
    { command: "/arm removemember <region> <player>", aliases: "-", permission: "arm.use", category: "Real Estate", plugin: "ARM", desc: "Revokes access to a player from your property." },
    
    // Vehicles & Transportation
    { command: "/vehicle model get <vehicle_name>", aliases: "/vmodel", permission: "minecity.vehicle.model", category: "Vehicles", plugin: "MinecityFixerAddon", desc: "Staff command to obtain a physical QAV 3D vehicle model item for showroom decoration." },
    { command: "/qav garage", aliases: "/garage", permission: "qav.garage", category: "Vehicles", plugin: "QualityArmoryVehicles", desc: "Opens your personal virtual garage to spawn your purchased cars, helicopters, and bikes." },
    { command: "/qav despawn", aliases: "/despawnvehicle", permission: "qav.use", category: "Vehicles", plugin: "QualityArmoryVehicles", desc: "Despawns and stores your currently active vehicle back into your garage." },
    { command: "/mtv garage", aliases: "/mtv", permission: "mtv.garage", category: "Vehicles", plugin: "MTVehicles", desc: "Opens the MTVehicles garage to view owned vehicles and keys." },
    { command: "/mtv refill", aliases: "-", permission: "mtv.refill", category: "Vehicles", plugin: "MTVehicles", desc: "Refills the fuel tank of the vehicle you are driving." },
    { command: "/mtv lock", aliases: "/car lock", permission: "mtv.lock", category: "Vehicles", plugin: "MTVehicles", desc: "Locks or unlocks your vehicle doors to prevent carjacking." },

    // Public Safety - Police
    { command: "/police help", aliases: "/pd, /policia", permission: "None (Everyone)", category: "Police", plugin: "MinecitySuite", desc: "Displays available police system commands based on your rank." },
    { command: "/police top", aliases: "-", permission: "None (Everyone)", category: "Police", plugin: "MinecitySuite", desc: "Displays the top most wanted criminal fugitives in the city." },
    { command: "/police status", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Inspects a suspect's wanted stars, criminal history, and offenses." },
    { command: "/police addstars <player> <amount>", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Adds 1-5 wanted stars (★) to a criminal suspect." },
    { command: "/police removestars <player> <amount>", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Reduces or clears a citizen's wanted level." },
    { command: "/police jailstick", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Equips the official Police Arrest Baton (requires 2 hits to arrest)." },
    { command: "/police handcuffs", aliases: "-", permission: "police.handcuffs", category: "Police", plugin: "MinecitySuite", desc: "Equips handcuffs to restrain and escort suspects." },
    { command: "/police policekit", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Claims your standard officer duty equipment and ammunition." },
    { command: "/police leave", aliases: "-", permission: "police.officer", category: "Police", plugin: "MinecitySuite", desc: "Resigns from the Police Department or ends off-duty shift." },
    { command: "/police jail <player> <minutes> [reason]", aliases: "-", permission: "police.admin", category: "Police", plugin: "MinecitySuite", desc: "Sends a convicted suspect to the state penitentiary." },
    { command: "/police unjail <player>", aliases: "-", permission: "police.admin", category: "Police", plugin: "MinecitySuite", desc: "Pardons or releases an inmate from prison." },
    { command: "/police setpolice <player>", aliases: "-", permission: "police.chief", category: "Police", plugin: "MinecitySuite", desc: "Promotes a player to Police Officer." },
    { command: "/police removepolice <player>", aliases: "-", permission: "police.chief", category: "Police", plugin: "MinecitySuite", desc: "Discharges an officer from the force." },
    { command: "/police setexit", aliases: "-", permission: "police.admin", category: "Police", plugin: "MinecitySuite", desc: "Sets the release spawn location outside the police precinct." },

    // Public Safety - Paramedic & EMS
    { command: "/paramedic menu", aliases: "/ems, /medico", permission: "paramedic.duty", category: "Paramedics", plugin: "MinecitySuite", desc: "Opens the EMS dispatcher interface and emergency call list." },
    { command: "/paramedic calls", aliases: "-", permission: "paramedic.duty", category: "Paramedics", plugin: "MinecitySuite", desc: "Views active 911 medical emergency calls and patient locations." },
    { command: "/paramedic kit", aliases: "-", permission: "paramedic.duty", category: "Paramedics", plugin: "MinecitySuite", desc: "Claims the official Paramedic First Aid Kit (defibrillator, bandages, splints)." },
    { command: "/paramedic revive <player>", aliases: "-", permission: "paramedic.duty", category: "Paramedics", plugin: "MinecitySuite", desc: "Performs CPR and uses defibrillator on a downed or unconscious patient." },
    { command: "/paramedic cure <player>", aliases: "-", permission: "paramedic.duty", category: "Paramedics", plugin: "MinecitySuite", desc: "Diagnoses and cures active illnesses, fractures, or poison." },
    { command: "/paramedic diseasesinfo", aliases: "-", permission: "None (Everyone)", category: "Paramedics", plugin: "MinecitySuite", desc: "Lists all known city diseases, symptoms, and cures." },
    { command: "/pharmacy", aliases: "/farmacia, /drugstore", permission: "None (Everyone)", category: "Paramedics", plugin: "MinecitySuite", desc: "Opens the 24/7 city pharmacy store to purchase over-the-counter medicine." },
    { command: "/paramedic setparamedic <player>", aliases: "-", permission: "paramedic.chief", category: "Paramedics", plugin: "MinecitySuite", desc: "Hires a player into the Emergency Medical Services staff." },
    { command: "/paramedic removeparamedic <player>", aliases: "-", permission: "paramedic.chief", category: "Paramedics", plugin: "MinecitySuite", desc: "Removes a player from the Paramedic roster." },

    // Realistic Survival
    { command: "/survival status", aliases: "/hydration, /sed", permission: "None (Everyone)", category: "Survival", plugin: "MinecitySuite", desc: "Checks your current hydration percentage and metabolic status." },
    { command: "/survival set <player> <amount>", aliases: "-", permission: "minecity.survival.admin", category: "Survival", plugin: "MinecitySuite", desc: "Admin command to adjust a player's hydration level (0-100)." },
    { command: "/survival reset <player>", aliases: "-", permission: "minecity.survival.admin", category: "Survival", plugin: "MinecitySuite", desc: "Admin command to restore player hydration to 100%." },
    { command: "/survival reload", aliases: "-", permission: "minecity.survival.admin", category: "Survival", plugin: "MinecitySuite", desc: "Reloads `survival-config.yml` without restarting the server." },

    // Tamagotchi Pets
    { command: "/pet", aliases: "/pets, /mascota", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Opens your pet care menu (feeding, playing, hygiene, sleeping)." },
    { command: "/pet shop", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Opens the pet store to buy dogs, cats, parrots, and pet supplies." },
    { command: "/pet call", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Summons your active pet to your current position." },
    { command: "/pet hide", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Puts your pet into resting mode (hides from world)." },
    { command: "/pet name <new_name>", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Customizes your pet's official display name." },
    { command: "/pet sell <player> <price>", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Offers your trained pet for sale to another citizen." },
    { command: "/pet accept", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Accepts an incoming pet trade or adoption offer." },
    { command: "/pet release", aliases: "-", permission: "None (Everyone)", category: "Pets", plugin: "MinecitySuite", desc: "Releases your pet back into adoption." },

    // Smartphone, GPS & Roleplay Tools
    { command: "/phone", aliases: "/telefono", permission: "None (Everyone)", category: "Communication", plugin: "PhoneConnect", desc: "Opens your 3D interactive smartphone GUI." },
    { command: "/gps to <destination>", aliases: "/gps", permission: "gps.use", category: "Navigation", plugin: "GPS", desc: "Starts visual particle arrow route navigation to any city landmark." },
    { command: "/gps stop", aliases: "-", permission: "gps.use", category: "Navigation", plugin: "GPS", desc: "Cancels active GPS navigation route." },
    { command: "/card show", aliases: "/dni", permission: "None (Everyone)", category: "Roleplay", plugin: "T-RPTools", desc: "Shows your citizen ID card to the player directly in front of you." },
    { command: "/card view", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "T-RPTools", desc: "Inspects your personal identification card." },
    { command: "/me <action>", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "T-RPTools", desc: "Performs an in-character roleplay physical action within proximity." },
    { command: "/do <environment>", aliases: "-", permission: "None (Everyone)", category: "Roleplay", plugin: "T-RPTools", desc: "Describes an environmental or situational occurrence." },
    { command: "/ooc <message>", aliases: "/b", permission: "None (Everyone)", category: "Roleplay", plugin: "T-RPTools", desc: "Speaks Out-Of-Character in local proximity." },
    { command: "/sit", aliases: "/lay, /bellyflop, /crawl", permission: "gsit.sit", category: "Roleplay", plugin: "GSit", desc: "Sits down on any block, chair, hospital bed, or crawls on the ground." },

    // Economy, Banking & Jobs
    { command: "/bank", aliases: "/banco, /atm", permission: "bank.use", category: "Economy", plugin: "Bank Lite", desc: "Opens the ATM banking interface to deposit, withdraw, or wire funds." },
    { command: "/salary", aliases: "/salario", permission: "salary.check", category: "Economy", plugin: "SalaryManager", desc: "Checks your next paycheck countdown and current civil job salary." },
    { command: "/ah", aliases: "/auctionhouse", permission: "auctionhouse.use", category: "Economy", plugin: "AuctionHouse", desc: "Opens the player-to-player global auction market." },
    { command: "/emf shop", aliases: "/fish", permission: "emf.use", category: "Jobs", plugin: "EvenMoreFish", desc: "Sells caught rare fish to the fishmonger market." },
    { command: "/realmines list", aliases: "/mines", permission: "realmines.list", category: "Jobs", plugin: "RealMines", desc: "Views active public mining quarry zones and reset timers." },

    // Underworld, Gangs & Crime
    { command: "/drugs", aliases: "/drogas", permission: "drugs.use", category: "Crime", plugin: "Drugs", desc: "Browses underground chemical and herbal contraband recipes." },
    { command: "/clan create <name>", aliases: "/gang", permission: "clans.create", category: "Crime", plugin: "ClansPlus", desc: "Found a new street gang, cartel, or syndicate." },
    { command: "/clan invite <player>", aliases: "-", permission: "clans.invite", category: "Crime", plugin: "ClansPlus", desc: "Invites a citizen into your gang organization." },
    { command: "/robbank", aliases: "/heist", permission: "koyarobbery.rob", category: "Crime", plugin: "KoyaRobbery", desc: "Initiates a bank vault robbery (triggers automated 911 police silent alarms)." },

    // Testing & Minecity Administration
    { command: "/ms adddummy <name>", aliases: "/minesuite", permission: "minesuite.admin", category: "Admin", plugin: "MinecitySuite", desc: "Spawns an interactive dummy NPC for arrest, CPR, and combat tests." },
    { command: "/ms removedummy <name>", aliases: "-", permission: "minesuite.admin", category: "Admin", plugin: "MinecitySuite", desc: "Removes an active testing dummy." },
    { command: "/ms dummycontrol <name>", aliases: "-", permission: "minesuite.admin", category: "Admin", plugin: "MinecitySuite", desc: "Toggles a dummy player between sitting, laying, and standing." },
    { command: "/ms listdummies", aliases: "-", permission: "minesuite.admin", category: "Admin", plugin: "MinecitySuite", desc: "Lists all active testing dummy entities." },
    { command: "/lp user <player> permission set <node>", aliases: "-", permission: "luckperms.admin", category: "Admin", plugin: "LuckPerms", desc: "Grants a permission node to a citizen." },
    { command: "/autorank check", aliases: "/ar check", permission: "autorank.check", category: "Admin", plugin: "Autorank", desc: "Inspects your current progression path, hours played, and next rank requirements." }
  ],
  permissions: [
    // Civil Permissions
    { node: "arm.use", desc: "Allows players to browse, rent, and buy apartments and houses via ARM.", group: "Default (Civilian)", default: "true" },
    { node: "qav.use", desc: "Allows driving, boarding, and parking owned vehicles.", group: "Default (Civilian)", default: "true" },
    { node: "qav.garage", desc: "Access to the personal vehicle storage garage.", group: "Default (Civilian)", default: "true" },
    { node: "phone.use", desc: "Allows using the smartphone, calls, text messages, and emergency dialing.", group: "Default (Civilian)", default: "true" },
    { node: "gps.use", desc: "Allows starting particle arrow waypoint navigation.", group: "Default (Civilian)", default: "true" },
    { node: "bank.use", desc: "Access to ATM machines and bank branches.", group: "Default (Civilian)", default: "true" },
    { node: "gsit.sit", desc: "Allows sitting on stairs, chairs, and laying in beds.", group: "Default (Civilian)", default: "true" },
    
    // Police Force
    { node: "police.officer", desc: "Core officer permission: add/remove stars, check status, equip jailstick and policekit.", group: "Police Officer", default: "false" },
    { node: "police.handcuffs", desc: "Permits handcuffing and dragging detained suspects.", group: "Police Officer", default: "false" },
    { node: "police.chief", desc: "Allows Police Chiefs to hire and fire police officers via `/police setpolice`.", group: "Police Chief", default: "op" },
    { node: "police.admin", desc: "Full police administration: unjail, forcejail, set exit spawn, customize kits.", group: "Police Admin", default: "op" },

    // Paramedics / EMS
    { node: "paramedic.duty", desc: "On-duty EMT permission: receive 911 calls, use medical kit, CPR revival, disease curing.", group: "Paramedic", default: "false" },
    { node: "paramedic.chief", desc: "Allows EMS Chiefs to manage the paramedic roster.", group: "EMS Chief", default: "op" },
    { node: "paramedic.admin", desc: "Full paramedic control: disease editor, kit editor, emergency respawn setup.", group: "EMS Admin", default: "op" },

    // Survival & Fixer Admin
    { node: "minecity.survival.admin", desc: "Allows setting and resetting player hydration and hunger levels.", group: "Administrator", default: "op" },
    { node: "minecity.vehicle.model", desc: "Permits spawning physical 3D vehicle items with `/vehicle model get`.", group: "Administrator", default: "op" },
    { node: "minesuite.admin", desc: "Permits spawning, managing, and controlling testing dummy players.", group: "Administrator", default: "op" }
  ],
  placeholders: [
    { placeholder: "%minecity_hydration%", desc: "Player's current hydration level percentage (e.g. 85%).", plugin: "MinecitySuite", example: "85%" },
    { placeholder: "%minecity_wanted_stars%", desc: "Visual formatted police wanted stars (e.g. ★★★☆☆).", plugin: "MinecitySuite", example: "★★★☆☆" },
    { placeholder: "%minecity_wanted_level%", desc: "Raw numeric police wanted stars count (0 to 5).", plugin: "MinecitySuite", example: "3" },
    { placeholder: "%minecity_is_jailed%", desc: "Returns 'true' if the player is currently imprisoned, 'false' otherwise.", plugin: "MinecitySuite", example: "false" },
    { placeholder: "%minecity_jail_time_left%", desc: "Remaining jail time formatted in minutes and seconds.", plugin: "MinecitySuite", example: "04:32" },
    { placeholder: "%minecity_is_police%", desc: "Returns whether the player is an active police officer.", plugin: "MinecitySuite", example: "true" },
    { placeholder: "%minecity_is_paramedic%", desc: "Returns whether the player is an active on-duty paramedic.", plugin: "MinecitySuite", example: "false" },
    { placeholder: "%minecity_active_disease%", desc: "Name of the player's active illness (or 'Healthy').", plugin: "MinecitySuite", example: "Flu" },
    { placeholder: "%minecity_pet_name%", desc: "Name of the player's active summoned Tamagotchi pet.", plugin: "MinecitySuite", example: "Buddy" },
    { placeholder: "%minecity_pet_hunger%", desc: "Pet's food satisfaction percentage.", plugin: "MinecitySuite", example: "90%" },
    { placeholder: "%vault_eco_balance_formatted%", desc: "Formatted bank cash balance with currency symbols.", plugin: "Vault", example: "$12,450.00" },
    { placeholder: "%arm_user_regions%", desc: "Number of properties and apartments owned or rented by the player.", plugin: "ARM", example: "2" },
    { placeholder: "%autorank_current_rank%", desc: "Current citizenship level or social rank.", plugin: "Autorank", example: "Level 2" },
    { placeholder: "%phone_number%", desc: "Unique 5-digit cellular phone number.", plugin: "PhoneConnect", example: "49201" }
  ]
};
