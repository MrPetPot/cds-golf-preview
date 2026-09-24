const COURSES = [
  { id:'real-club-valderrama', name:"Real Club Valderrama", municipio:"Sotogrande", disenador:"R. Trent Jones Sr.", ano:1974, hoyos:"18 · 71", membresia:"Members-only", gf:"500–575", palmares:"Ryder Cup 1997 · Andalucía Masters · LIV", stars:4, lat:36.28552, lng:-5.32989 },
  { id:'real-club-de-golf-sotogrande', name:"Real Club de Golf Sotogrande", municipio:"Sotogrande", disenador:"R. Trent Jones Sr.", ano:1964, hoyos:"18 · 72 (+9)", membresia:"Members-only", gf:"350–475", palmares:"Spanish Open · Andalucía Masters 2025", stars:4, lat:36.28011, lng:-5.29194 },
  { id:'la-reserva-club-sotogrande', name:"La Reserva Club Sotogrande", municipio:"Sotogrande", disenador:"Cabell B. Robinson", ano:2003, hoyos:"18 · 72", membresia:"Semi-private", gf:"230–285", palmares:"Andalucía Masters LET · Solheim Pro-Am", stars:4, lat:36.29466, lng:-5.32832 },
  { id:'finca-cortesin-golf', name:"Finca Cortesín Golf", municipio:"Casares", disenador:"Cabell B. Robinson", ano:2006, hoyos:"18 · 72", membresia:"Resort", gf:"350–400", palmares:"Solheim Cup 2023 · Volvo World Match Play", stars:4, lat:36.39646, lng:-5.22386 },
  { id:'real-club-de-golf-las-brisas', name:"Real Club de Golf Las Brisas", municipio:"Marbella · Nueva Andalucía", disenador:"R. Trent Jones Sr.", ano:1968, hoyos:"18 · 72", membresia:"Members-only", gf:"250–310", palmares:"World Cup 1973 · Open de España LET 2024-25", stars:4, lat:36.50542, lng:-4.96799 },
  { id:'aloha-golf-club', name:"Aloha Golf Club", municipio:"Marbella · Nueva Andalucía", disenador:"Javier Arana", ano:1975, hoyos:"18 · 72 (+9)", membresia:"Members-only", gf:"200–260", palmares:"Andalucía Masters 2007", stars:3, lat:36.51157, lng:-4.96094 },
  { id:'los-naranjos-golf', name:"Los Naranjos Golf", municipio:"Marbella · Nueva Andalucía", disenador:"R. Trent Jones Sr.", ano:1977, hoyos:"18 · 72", membresia:"Private / resort", gf:"150–200", palmares:"Spanish PGA · Mediterranean Open", stars:3, lat:36.51007, lng:-4.97927 },
  { id:'real-club-de-golf-guadalmina-sur', name:"Real Club de Golf Guadalmina Sur", municipio:"San Pedro", disenador:"Javier Arana", ano:1959, hoyos:"18 · 71", membresia:"Members-only", gf:"110–150", palmares:"Mediterranean Open · Challenge Tour", stars:3, lat:36.47555, lng:-5.0026 },
  { id:'rio-real-golf', name:"Río Real Golf", municipio:"Marbella Este", disenador:"Javier Arana", ano:1965, hoyos:"18 · 72", membresia:"Resort", gf:"130–175", palmares:"Historic amateur events", stars:3, lat:36.50979, lng:-4.84406 },
  { id:'marbella-club-golf-resort', name:"Marbella Club Golf Resort", municipio:"Benahavís", disenador:"Dave Thomas", ano:1999, hoyos:"18 · 71", membresia:"Private / hotel", gf:"180–240", palmares:"—", stars:3, lat:36.49899, lng:-5.0566 },
  { id:'la-quinta-golf', name:"La Quinta Golf", municipio:"Benahavís", disenador:"Piñero & Garrido", ano:1989, hoyos:"27 · 72", membresia:"Resort", gf:"110–150", palmares:"Benahavís Senior Masters", stars:3, lat:36.51265, lng:-4.99664 },
  { id:'flamingos-villa-padierna', name:"Flamingos Villa Padierna", municipio:"Benahavís", disenador:"A. García Garrido", ano:2002, hoyos:"18 · 71", membresia:"Luxury resort", gf:"140–185", palmares:"Volvo World Match Play · Spanish Senior", stars:3, lat:36.47452, lng:-5.05606 },
  { id:'san-roque-club-old', name:"San Roque Club Old", municipio:"San Roque", disenador:"Dave Thomas + Seve", ano:1990, hoyos:"18 · 72", membresia:"Private / resort", gf:"150–200", palmares:"Spanish Open 2005-06", stars:3, lat:36.26754, lng:-5.33381 },
  { id:'la-cala-resort-asia', name:"La Cala Resort Asia", municipio:"Mijas", disenador:"Cabell B. Robinson", ano:1991, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"Spanish PGA", stars:3, lat:36.53966, lng:-4.71691 },
  { id:'mijas-golf-los-lagos', name:"Mijas Golf Los Lagos", municipio:"Mijas Costa", disenador:"R. Trent Jones Sr.", ano:1976, hoyos:"18 · 71", membresia:"Resort", gf:"90–130", palmares:"Historic Spanish Open", stars:3, lat:36.55014, lng:-4.66506 },
  { id:'golf-torrequebrada', name:"Golf Torrequebrada", municipio:"Benalmádena", disenador:"Pepe Gancedo", ano:1976, hoyos:"18 · 72", membresia:"Semi-private", gf:"110–150", palmares:"Spanish Open 1979", stars:3, lat:36.58603, lng:-4.54924 },
  { id:'la-zagaleta-old', name:"La Zagaleta Old", municipio:"Benahavís", disenador:"Bradford Benz", ano:1991, hoyos:"18 · 72", membresia:"Strictly private", gf:"Members only", palmares:"—", stars:3, lat:36.53239, lng:-5.02976 },
  { id:'la-hacienda-alcaidesa-links', name:"La Hacienda Alcaidesa Links", municipio:"La Línea", disenador:"Alliss & Clark", ano:1992, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.24353, lng:-5.32072 },
  { id:'la-hacienda-heathland', name:"La Hacienda Heathland", municipio:"La Línea", disenador:"Dave Thomas", ano:2007, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.24674, lng:-5.31579 },
  { id:'san-roque-club-new', name:"San Roque Club New", municipio:"San Roque", disenador:"Dye & Ballesteros", ano:2003, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.27047, lng:-5.32966 },
  { id:'la-canada-golf', name:"La Cañada Golf", municipio:"Sotogrande", disenador:"Trent Jones / Thomas", ano:1982, hoyos:"18 · 71", membresia:"Municipal", gf:"80–110", palmares:"Q-School · where Sergio García started", stars:2, lat:36.29483, lng:-5.31196 },
  { id:'the-alto-club-almenara', name:"The Alto Club (Almenara)", municipio:"Sotogrande Alto", disenador:"Dave Thomas", ano:1998, hoyos:"27 · 36", membresia:"Resort", gf:"100–150", palmares:"—", stars:2, lat:36.27561, lng:-5.34595 },
  { id:'dona-julia-golf', name:"Doña Julia Golf", municipio:"Casares", disenador:"A. García Garrido", ano:2005, hoyos:"18 · 71", membresia:"Public", gf:"75–110", palmares:"—", stars:2, lat:36.38813, lng:-5.2345 },
  { id:'la-duquesa-golf', name:"La Duquesa Golf", municipio:"Manilva", disenador:"R. Trent Jones Sr.", ano:1987, hoyos:"18 · 72", membresia:"Semi-private", gf:"65–95", palmares:"—", stars:2, lat:36.3578, lng:-5.23844 },
  { id:'atalaya-old', name:"Atalaya Old", municipio:"Estepona", disenador:"B. von Limburger", ano:1968, hoyos:"18 · 72", membresia:"Semi-private", gf:"90–130", palmares:"Spanish Open (70s)", stars:2, lat:36.4879, lng:-5.02248 },
  { id:'atalaya-new', name:"Atalaya New", municipio:"Estepona", disenador:"Paul Krings", ano:1990, hoyos:"18 · 72", membresia:"Semi-private", gf:"70–100", palmares:"—", stars:2, lat:36.4879, lng:-5.02248 },
  { id:'el-paraiso-golf', name:"El Paraíso Golf", municipio:"Estepona", disenador:"G. Player & R. Kirby", ano:1973, hoyos:"18 · 71", membresia:"Members-only", gf:"100–130", palmares:"—", stars:2, lat:36.47541, lng:-5.03374 },
  { id:'estepona-golf', name:"Estepona Golf", municipio:"Estepona", disenador:"J.L. López Martínez", ano:1989, hoyos:"18 · 72", membresia:"Public", gf:"65–95", palmares:"—", stars:2, lat:36.41297, lng:-5.21219 },
  { id:'valle-romano-golf', name:"Valle Romano Golf", municipio:"Estepona", disenador:"Cabell B. Robinson", ano:2010, hoyos:"18 · 71", membresia:"Resort", gf:"95–130", palmares:"Challenge Tour 2018-19", stars:2, lat:36.4277, lng:-5.19541 },
  { id:'azata-golf', name:"Azata Golf", municipio:"Estepona", disenador:"Stirling & Martin", ano:2020, hoyos:"18 · 71", membresia:"Public", gf:"75–110", palmares:"—", stars:2, lat:36.42447, lng:-5.20189 },
  { id:'los-arqueros-golf', name:"Los Arqueros Golf", municipio:"Benahavís", disenador:"Severiano Ballesteros", ano:1991, hoyos:"18 · 71", membresia:"Resort", gf:"95–130", palmares:"Spanish Senior Open", stars:2, lat:36.523, lng:-5.01 },
  { id:'alferini-villa-padierna', name:"Alferini Villa Padierna", municipio:"Benahavís", disenador:"C. Guerrero Bautista", ano:2007, hoyos:"18 · 73", membresia:"Resort", gf:"140–185", palmares:"—", stars:2, lat:36.49123, lng:-5.04838 },
  { id:'la-zagaleta-los-barrancos', name:"La Zagaleta Los Barrancos", municipio:"Benahavís", disenador:"Bradford Benz", ano:2005, hoyos:"18 · 72", membresia:"Strictly private", gf:"Members only", palmares:"—", stars:2, lat:36.53, lng:-5.022 },
  { id:'guadalmina-norte', name:"Guadalmina Norte", municipio:"San Pedro", disenador:"Folco Nardi", ano:1973, hoyos:"18 · 71", membresia:"Members-only", gf:"85–115", palmares:"—", stars:2, lat:36.47555, lng:-5.0026 },
  { id:'higueron-marbella-golf', name:"Higuerón Marbella Golf", municipio:"Marbella Este", disenador:"R. Trent Jones Jr.", ano:1989, hoyos:"18 · 72", membresia:"Resort", gf:"90–130", palmares:"formerly Marbella G&CC", stars:2, lat:36.513, lng:-4.813 },
  { id:'santa-maria-golf', name:"Santa María Golf", municipio:"Elviria", disenador:"A. García Garrido", ano:1991, hoyos:"18 · 71", membresia:"Semi-private", gf:"80–115", palmares:"—", stars:2, lat:36.50999, lng:-4.76803 },
  { id:'santa-clara-golf-marbella', name:"Santa Clara Golf Marbella", municipio:"Marbella Este", disenador:"E. Canales Busquets", ano:2001, hoyos:"18 · 71", membresia:"Public", gf:"75–110", palmares:"—", stars:2, lat:36.51087, lng:-4.82447 },
  { id:'cabopino-golf', name:"Cabopino Golf", municipio:"Cabopino", disenador:"Juan Ligués Creus", ano:1990, hoyos:"18 · 71", membresia:"Public", gf:"65–95", palmares:"—", stars:2, lat:36.49474, lng:-4.74237 },
  { id:'la-cala-resort-america', name:"La Cala Resort América", municipio:"Mijas", disenador:"Cabell B. Robinson", ano:1991, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.54083, lng:-4.72767 },
  { id:'la-cala-resort-europa', name:"La Cala Resort Europa", municipio:"Mijas", disenador:"Cabell B. Robinson", ano:2005, hoyos:"18 · 71", membresia:"Resort", gf:"100–140", palmares:"—", stars:2, lat:36.54601, lng:-4.72304 },
  { id:'mijas-golf-los-olivos', name:"Mijas Golf Los Olivos", municipio:"Mijas Costa", disenador:"R. Trent Jones Sr.", ano:1984, hoyos:"18 · 72", membresia:"Resort", gf:"80–115", palmares:"—", stars:2, lat:36.55338, lng:-4.67238 },
  { id:'santana-golf', name:"Santana Golf", municipio:"La Cala", disenador:"Cabell B. Robinson", ano:2004, hoyos:"18 · 72", membresia:"Resort", gf:"95–130", palmares:"Open de España LET", stars:2, lat:36.54351, lng:-4.70001 },
  { id:'el-chaparral-golf', name:"El Chaparral Golf", municipio:"Mijas Costa", disenador:"Pepe Gancedo", ano:1991, hoyos:"18 · 72", membresia:"Resort", gf:"80–115", palmares:"—", stars:2, lat:36.51352, lng:-4.6641 },
  { id:'calanova-golf', name:"Calanova Golf", municipio:"La Cala", disenador:"J. García Mayoral", ano:2006, hoyos:"18 · 72", membresia:"Resort", gf:"75–110", palmares:"—", stars:2, lat:36.51244, lng:-4.70529 },
  { id:'miraflores-golf', name:"Miraflores Golf", municipio:"Mijas Costa", disenador:"Folco Nardi", ano:1990, hoyos:"18 · 71", membresia:"Semi-private", gf:"65–95", palmares:"—", stars:2, lat:36.50187, lng:-4.70576 },
  { id:'parador-malaga-golf', name:"Parador Málaga Golf", municipio:"Churriana", disenador:"H.S. Colt (1925)", ano:1925, hoyos:"18+9 · 72", membresia:"Resort", gf:"75–110", palmares:"Andalucía Open Eur Tour", stars:2, lat:36.6542, lng:-4.47172 },
  { id:'real-club-guadalhorce', name:"Real Club Guadalhorce", municipio:"Campanillas", disenador:"K. Kuronen", ano:1990, hoyos:"18 · 72", membresia:"Members-only", gf:"75–110", palmares:"—", stars:2, lat:36.69937, lng:-4.52879 },
  { id:'lauro-golf', name:"Lauro Golf", municipio:"Alhaurín de la Torre", disenador:"Folco Nardi", ano:1992, hoyos:"27 · 72", membresia:"Resort", gf:"65–95", palmares:"—", stars:2, lat:36.65177, lng:-4.6285 },
  { id:'alhaurin-golf', name:"Alhaurín Golf", municipio:"Alhaurín el Grande", disenador:"Severiano Ballesteros", ano:1994, hoyos:"18 · 72", membresia:"Resort", gf:"70–100", palmares:"—", stars:2, lat:36.60887, lng:-4.70518 },
  { id:'real-club-el-candado', name:"Real Club El Candado", municipio:"Málaga Este", disenador:"C. Fernández Caleya", ano:1965, hoyos:"9 · 35", membresia:"Members-only", gf:"55–75", palmares:"—", stars:2, lat:36.71962, lng:-4.34142 },
  { id:'anoreta-golf', name:"Añoreta Golf", municipio:"Rincón Victoria", disenador:"J.M. Cañizares", ano:1990, hoyos:"18 · 71", membresia:"Resort", gf:"75–105", palmares:"—", stars:2, lat:36.72335, lng:-4.24174 },
  { id:'baviera-golf', name:"Baviera Golf", municipio:"Caleta de Vélez", disenador:"J.M. Cañizares", ano:2001, hoyos:"18 · 71", membresia:"Public", gf:"70–95", palmares:"—", stars:2, lat:36.755, lng:-4.08 },
  { id:'magna-marbella', name:"Magna Marbella", municipio:"Nueva Andalucía", disenador:"C.B. Robinson", ano:2002, hoyos:"9 · 29", membresia:"Public", gf:"30–45", palmares:"—", stars:1, lat:36.50582, lng:-4.97874 },
  { id:'greenlife-golf', name:"Greenlife Golf", municipio:"Elviria Hills", disenador:"Greenlife", ano:2000, hoyos:"9 par-3", membresia:"Public", gf:"25–40", palmares:"—", stars:1, lat:36.50539, lng:-4.77954 },
  { id:'dama-de-noche', name:"Dama de Noche", municipio:"Río Verde", disenador:"E. Canales", ano:1991, hoyos:"9 · 35", membresia:"Public", gf:"35–55", palmares:"Floodlit", stars:1, lat:36.50141, lng:-4.94846 },
  { id:'tramores-villa-padierna', name:"Tramores Villa Padierna", municipio:"Benahavís", disenador:"C. Guerrero", ano:2007, hoyos:"18 · 63", membresia:"Resort", gf:"80–110", palmares:"—", stars:1, lat:36.47837, lng:-5.04565 },
  { id:'el-higueral', name:"El Higueral", municipio:"Benahavís", disenador:"Roderick Segar", ano:2008, hoyos:"9 · 36", membresia:"Public", gf:"45–65", palmares:"—", stars:1, lat:36.50168, lng:-5.02045 },
  { id:'casares-costa-golf', name:"Casares Costa Golf", municipio:"Casares", disenador:"J.C. Martínez", ano:2002, hoyos:"9 · 34", membresia:"Public", gf:"35–50", palmares:"—", stars:1, lat:36.413, lng:-5.231 },
  { id:'la-resina-golf', name:"La Resina Golf", municipio:"Estepona", disenador:"Cooke & Smith", ano:2005, hoyos:"9 par-3", membresia:"Public", gf:"30–45", palmares:"—", stars:1, lat:36.46677, lng:-5.07559 },
  { id:'la-noria-golf', name:"La Noria Golf", municipio:"La Cala", disenador:"F. Navarro Pastor", ano:2003, hoyos:"9 · 33", membresia:"Public", gf:"35–55", palmares:"—", stars:1, lat:36.5074, lng:-4.68762 },
  { id:'la-siesta-golf', name:"La Siesta Golf", municipio:"Calahonda", disenador:"E. Canales", ano:1990, hoyos:"9 · 30", membresia:"Public", gf:"30–45", palmares:"—", stars:1, lat:36.49892, lng:-4.72417 },
];

/* Capa base del atlas · generado por src/geobase.py desde OpenStreetMap.
   Costa: vías natural=coastline simplificadas a ~133 m.
   Núcleos: nodos place= con su coordenada real. No editar a mano. */
const COSTA = [[[-4.07274,36.748],[-4.06595,36.74866],[-4.06627,36.74704],[-4.07081,36.74634],[-4.05977,36.74735]],[[-4.00138,36.73986],[-3.95746,36.72603],[-3.92644,36.73714],[-3.92127,36.74057],[-3.91066,36.74213]],[[-4.87642,36.50714],[-4.87262,36.50737],[-4.87712,36.50555],[-4.85977,36.50721]],[[-4.09754,36.73232],[-4.08455,36.7441],[-4.07274,36.748]],[[-4.94819,36.48858],[-4.94843,36.49003],[-4.93829,36.49815]],[[-4.93829,36.49815],[-4.92279,36.50088]],[[-4.92262,36.50091],[-4.91203,36.50558],[-4.8931,36.50649]],[[-4.88791,36.50573],[-4.88065,36.50658]],[[-4.88069,36.50714],[-4.87642,36.50714]],[[-4.89054,36.50617],[-4.8881,36.50624],[-4.89175,36.50487],[-4.88791,36.50573]],[[-4.23275,36.71275],[-4.17788,36.71501],[-4.15967,36.72006],[-4.11285,36.72464],[-4.10164,36.72819],[-4.09754,36.73232]],[[-4.5095,36.59938],[-4.48674,36.63267],[-4.47522,36.64632]],[[-5.22117,36.37352],[-5.21696,36.37928],[-5.21117,36.37978],[-5.20628,36.38613]],[[-4.0415,36.74405],[-4.03279,36.74237],[-4.02293,36.74401],[-4.00138,36.73986]],[[-4.5898,36.57101],[-4.58326,36.57415],[-4.56295,36.57758],[-4.5582,36.58046],[-4.54853,36.58087],[-4.53883,36.57852],[-4.53927,36.58033],[-4.53332,36.5822]],[[-4.73204,36.48646],[-4.71153,36.48739],[-4.70452,36.49043],[-4.69474,36.49016],[-4.67659,36.50339],[-4.66201,36.50683],[-4.65397,36.50551],[-4.64708,36.50735],[-4.63912,36.50673],[-4.63371,36.51374]],[[-4.31469,36.71262],[-4.30496,36.71398],[-4.29643,36.71267],[-4.28734,36.71454],[-4.24938,36.71013],[-4.23275,36.71275]],[[-5.20628,36.38613],[-5.18445,36.40899],[-5.17616,36.41479],[-5.16548,36.4165],[-5.1631,36.41342],[-5.1579,36.4128],[-5.16035,36.41423],[-5.15521,36.41624],[-5.15847,36.41169],[-5.15636,36.41189],[-5.14828,36.42098],[-5.14023,36.42612],[-5.13468,36.42812],[-5.12163,36.42857],[-5.11026,36.43287],[-5.0821,36.45026],[-5.07277,36.45211],[-5.05973,36.45002],[-5.05147,36.45223],[-5.03344,36.46127],[-5.01606,36.46183],[-5.01006,36.45908],[-5.00494,36.46001]],[[-4.05977,36.74735],[-4.0415,36.74405]],[[-4.62937,36.51902],[-4.6208,36.53775],[-4.61648,36.53856],[-4.61494,36.54078],[-4.61389,36.54323],[-4.61652,36.53887],[-4.61904,36.5398],[-4.6169,36.54037],[-4.6184,36.54092],[-4.61733,36.54279],[-4.6156,36.54226],[-4.61708,36.54495],[-4.61463,36.54571],[-4.61524,36.54771],[-4.60898,36.55735],[-4.60223,36.56365],[-4.59887,36.56267],[-4.5898,36.57101]],[[-5.00494,36.46001],[-4.97792,36.47754],[-4.97182,36.47832],[-4.9672,36.48144]],[[-5.42566,36.07704],[-5.42681,36.08309],[-5.44115,36.08626],[-5.44349,36.09152],[-5.44013,36.10279],[-5.43603,36.10602],[-5.43113,36.10599],[-5.43221,36.10926],[-5.43763,36.11236],[-5.43512,36.11864],[-5.43754,36.11724],[-5.43782,36.11907],[-5.43807,36.11767],[-5.44142,36.11841],[-5.4414,36.12129],[-5.43597,36.1227],[-5.4347,36.12182],[-5.43692,36.11883],[-5.43488,36.12055],[-5.4223,36.1199],[-5.42276,36.13284],[-5.43006,36.13332],[-5.43004,36.14364],[-5.42793,36.14757],[-5.43023,36.14364],[-5.43194,36.12802],[-5.44353,36.1274],[-5.43628,36.13097],[-5.43964,36.1328],[-5.43617,36.13488],[-5.43555,36.14834],[-5.44176,36.14758],[-5.44279,36.13112],[-5.44453,36.13093],[-5.44344,36.13763],[-5.44726,36.13869],[-5.44505,36.14911],[-5.44359,36.1492],[-5.44362,36.15714],[-5.43149,36.17198]],[[-5.41402,36.17979],[-5.40912,36.18149],[-5.40014,36.17933],[-5.40125,36.1802],[-5.3951,36.181],[-5.38923,36.18049],[-5.38891,36.17899],[-5.38507,36.17991],[-5.37989,36.17546],[-5.38348,36.17443],[-5.38178,36.17435],[-5.38148,36.17223],[-5.38319,36.17192],[-5.3773,36.17219],[-5.37708,36.17061],[-5.3822,36.16973],[-5.37549,36.16589],[-5.37655,36.1653],[-5.37303,36.16462],[-5.37088,36.16933]],[[-5.43005,36.1726],[-5.42473,36.17664],[-5.42393,36.17521],[-5.41999,36.17745],[-5.41814,36.17532],[-5.41962,36.17859],[-5.41672,36.17454],[-5.41988,36.17316],[-5.41618,36.17445],[-5.41723,36.17642],[-5.41417,36.17758],[-5.41402,36.17979]],[[-5.37088,36.16933],[-5.35885,36.16346]],[[-5.33885,36.15284],[-5.33791,36.16052]],[[-5.33948,36.14811],[-5.33885,36.15284]],[[-4.84222,36.50273],[-4.81324,36.49832],[-4.7567,36.48568],[-4.73989,36.48322],[-4.74042,36.48596],[-4.73913,36.48334],[-4.74043,36.48262],[-4.73901,36.48477],[-4.73204,36.48646]],[[-4.85977,36.50721],[-4.84794,36.50494]],[[-4.84794,36.50494],[-4.84222,36.50273]],[[-4.9557,36.48458],[-4.95295,36.48428],[-4.9544,36.48596],[-4.95012,36.4887],[-4.94933,36.48753],[-4.9524,36.48372],[-4.955,36.48308],[-4.95257,36.48323],[-4.94819,36.48858]],[[-4.9672,36.48144],[-4.95923,36.485],[-4.9557,36.48458]],[[-5.33777,36.16084],[-5.33444,36.17936]],[[-5.33444,36.17936],[-5.33297,36.18007],[-5.33586,36.17974],[-5.33527,36.18181],[-5.33166,36.1791],[-5.33368,36.18241],[-5.32498,36.20757]],[[-5.35821,36.16075],[-5.36156,36.15961],[-5.35658,36.16121],[-5.35856,36.15846],[-5.35506,36.15978],[-5.35328,36.1569],[-5.35589,36.15901],[-5.35528,36.15701],[-5.35827,36.15589],[-5.35998,36.15815],[-5.36029,36.15519],[-5.36505,36.15521],[-5.36736,36.15849],[-5.36754,36.15706],[-5.36507,36.15505],[-5.35177,36.1548]],[[-4.53332,36.5822],[-4.53018,36.58788],[-4.51969,36.59436],[-4.51513,36.59519],[-4.51238,36.59374],[-4.51342,36.59475],[-4.5112,36.59504],[-4.51456,36.59567],[-4.51401,36.59769],[-4.5107,36.59554],[-4.5112,36.59719],[-4.50888,36.5966],[-4.51382,36.59278],[-4.51207,36.59271],[-4.50764,36.59747],[-4.5095,36.59938]],[[-5.31058,36.23824],[-5.30548,36.24358],[-5.29981,36.24319],[-5.29666,36.2459],[-5.27911,36.28153],[-5.27495,36.28287],[-5.27443,36.28647],[-5.27061,36.28816],[-5.27565,36.28873],[-5.28036,36.28597],[-5.28304,36.28851],[-5.2775,36.28793],[-5.27358,36.29212],[-5.26976,36.29021],[-5.2697,36.28586],[-5.2694,36.29219],[-5.27123,36.29298],[-5.2689,36.29926],[-5.26538,36.30013],[-5.26438,36.30348],[-5.25734,36.30996],[-5.25237,36.31127]],[[-4.36642,36.71846],[-4.35294,36.71716]],[[-4.42963,36.70401],[-4.42854,36.70265],[-4.42987,36.70455],[-4.42793,36.70685],[-4.4263,36.70598],[-4.42568,36.71],[-4.42762,36.70135],[-4.41822,36.70109],[-4.42013,36.70143],[-4.41907,36.70789],[-4.42191,36.70811],[-4.4198,36.7086],[-4.42284,36.71039],[-4.42053,36.7096],[-4.41729,36.71235],[-4.42329,36.71198],[-4.41981,36.71507],[-4.41773,36.71475],[-4.41879,36.71697],[-4.41379,36.71844],[-4.41563,36.71382],[-4.41347,36.70972],[-4.41551,36.70721],[-4.41384,36.70436],[-4.41452,36.69871],[-4.41128,36.70906],[-4.41354,36.70804],[-4.41378,36.71247]],[[-5.3517,36.15216],[-5.35725,36.15165],[-5.35752,36.15323],[-5.35989,36.15023]],[[-4.63371,36.51374],[-4.62937,36.51902]],[[-4.34298,36.71362],[-4.33518,36.71213],[-4.33084,36.71328],[-4.32713,36.71145],[-4.31539,36.71245]],[[-4.45944,36.66238],[-4.45468,36.66424]],[[-4.41378,36.71247],[-4.40748,36.71864]],[[-4.40748,36.71864],[-4.40191,36.71853],[-4.39896,36.72131]],[[-4.35294,36.71716],[-4.34658,36.71547]],[[-4.38436,36.72126],[-4.37895,36.72061]],[[-4.37895,36.72061],[-4.37015,36.71928]],[[-4.46554,36.65687],[-4.45944,36.66238]],[[-4.45468,36.66424],[-4.4485,36.67464]],[[-4.4736,36.64792],[-4.46554,36.65687]],[[-4.4459,36.67987],[-4.44408,36.68214],[-4.44107,36.68194],[-4.44412,36.68329]],[[-4.43898,36.69342],[-4.4348,36.69973]],[[-5.32498,36.20757],[-5.31807,36.22623],[-5.31058,36.23824]],[[-5.25237,36.31127],[-5.24801,36.31043],[-5.24628,36.31233],[-5.23257,36.34977],[-5.22845,36.35509],[-5.23152,36.35565],[-5.22801,36.35572],[-5.22786,36.35407],[-5.22852,36.35707],[-5.22117,36.37352]]];
const TIERRA = [[-5.339479,36.14811],[-5.33563,36.177695],[-5.332972,36.180067],[-5.335859,36.17974],[-5.334212,36.181934],[-5.33172,36.178952],[-5.333684,36.182415],[-5.317231,36.227974],[-5.308239,36.241268],[-5.304656,36.243915],[-5.299687,36.243246],[-5.296046,36.246684],[-5.279115,36.281526],[-5.274952,36.282866],[-5.274434,36.286471],[-5.270612,36.288163],[-5.275653,36.288731],[-5.280359,36.285972],[-5.283042,36.288509],[-5.2775,36.28793],[-5.273577,36.292124],[-5.269762,36.290207],[-5.26973,36.285842],[-5.2694,36.292195],[-5.271226,36.292981],[-5.268474,36.299864],[-5.265377,36.300129],[-5.264099,36.303807],[-5.256562,36.310503],[-5.24702,36.310967],[-5.232572,36.349775],[-5.22845,36.355086],[-5.231516,36.355646],[-5.228006,36.355718],[-5.227863,36.35407],[-5.22838,36.357464],[-5.219371,36.376403],[-5.216292,36.379584],[-5.211171,36.379781],[-5.203147,36.390677],[-5.193853,36.39777],[-5.185739,36.407762],[-5.173818,36.415825],[-5.165481,36.416495],[-5.163101,36.413419],[-5.157899,36.412799],[-5.160349,36.414226],[-5.155214,36.416238],[-5.158468,36.411686],[-5.15636,36.411891],[-5.148278,36.420977],[-5.14023,36.426116],[-5.134682,36.428125],[-5.121996,36.428488],[-5.110265,36.432873],[-5.081206,36.450558],[-5.070396,36.45208],[-5.059726,36.450023],[-5.051465,36.452227],[-5.033441,36.461271],[-5.016059,36.461826],[-5.010057,36.459079],[-5.006265,36.459424],[-4.977919,36.477536],[-4.971818,36.478321],[-4.959233,36.485004],[-4.952952,36.484275],[-4.954402,36.48596],[-4.950121,36.488695],[-4.949328,36.487534],[-4.952399,36.483718],[-4.955002,36.483079],[-4.952572,36.483226],[-4.947817,36.48869],[-4.948427,36.490027],[-4.935826,36.499422],[-4.925914,36.499878],[-4.912026,36.505581],[-4.895719,36.507126],[-4.888246,36.506431],[-4.891745,36.504867],[-4.887714,36.504784],[-4.879444,36.507593],[-4.872623,36.507372],[-4.877116,36.505553],[-4.858616,36.507061],[-4.756699,36.485678],[-4.739886,36.483224],[-4.740367,36.485949],[-4.739133,36.483337],[-4.740429,36.48262],[-4.739013,36.484774],[-4.731174,36.486736],[-4.719559,36.486591],[-4.711527,36.487392],[-4.704523,36.490433],[-4.694741,36.490157],[-4.67604,36.503554],[-4.662009,36.50683],[-4.653972,36.505508],[-4.647078,36.507345],[-4.639115,36.506734],[-4.629371,36.519024],[-4.620797,36.537753],[-4.61561,36.539643],[-4.613886,36.543231],[-4.616517,36.538873],[-4.619038,36.539804],[-4.616904,36.540366],[-4.618403,36.54092],[-4.617325,36.542791],[-4.615605,36.542256],[-4.617077,36.544946],[-4.614913,36.545324],[-4.615243,36.547706],[-4.610516,36.555254],[-4.603574,36.562914],[-4.598865,36.562669],[-4.594378,36.567942],[-4.584911,36.573719],[-4.562952,36.577576],[-4.558597,36.580366],[-4.548533,36.580866],[-4.538834,36.578524],[-4.539746,36.579971],[-4.533437,36.582051],[-4.532189,36.585808],[-4.5256,36.591014],[-4.516683,36.5953],[-4.512375,36.593738],[-4.513416,36.594748],[-4.5112,36.595039],[-4.514562,36.595673],[-4.514012,36.597692],[-4.510696,36.595539],[-4.511195,36.597192],[-4.508877,36.5966],[-4.513822,36.592782],[-4.512068,36.59271],[-4.507644,36.597473],[-4.509797,36.598287],[-4.508005,36.602114],[-4.486743,36.632665],[-4.463991,36.658926],[-4.454375,36.664053],[-4.444708,36.681797],[-4.441074,36.681945],[-4.444068,36.682841],[-4.443699,36.684794],[-4.432815,36.702575],[-4.429633,36.704008],[-4.428545,36.702646],[-4.429872,36.704545],[-4.427927,36.706851],[-4.426296,36.705978],[-4.425679,36.709998],[-4.427618,36.701351],[-4.41822,36.701092],[-4.420133,36.701427],[-4.419068,36.707885],[-4.421914,36.708112],[-4.419802,36.708599],[-4.422843,36.710388],[-4.42053,36.7096],[-4.417285,36.712349],[-4.423286,36.711976],[-4.41981,36.715072],[-4.417728,36.714749],[-4.418791,36.716965],[-4.41379,36.718443],[-4.415626,36.713824],[-4.413473,36.709721],[-4.415508,36.707211],[-4.413839,36.704356],[-4.414518,36.698711],[-4.411279,36.709061],[-4.413537,36.708045],[-4.412459,36.714106],[-4.406246,36.719347],[-4.401914,36.718534],[-4.400607,36.72067],[-4.395012,36.722252],[-4.392867,36.720636],[-4.389827,36.722152],[-4.371451,36.720365],[-4.368065,36.718345],[-4.361151,36.718654],[-4.344321,36.714695],[-4.346138,36.713675],[-4.335181,36.712127],[-4.33084,36.713278],[-4.327311,36.711461],[-4.287341,36.714537],[-4.249377,36.710132],[-4.217127,36.713975],[-4.177878,36.71501],[-4.159671,36.720065],[-4.112852,36.724638],[-4.101636,36.728188],[-4.084546,36.744096],[-4.07227,36.74863],[-4.065953,36.748664],[-4.06627,36.747036],[-4.070814,36.746341],[-4.061315,36.747613],[-4.033086,36.742376],[-4.022935,36.744011],[-4.005202,36.741191],[-3.95746,36.72603],[-3.926441,36.737141],[-3.921274,36.740574],[-3.910658,36.742131]];
const NUCLEOS = [{"n":"Sotogrande","lat":36.28206,"lng":-5.29706,"tipo":"suburb","pob":3266,"prio":1},{"n":"Estepona","lat":36.42681,"lng":-5.14685,"tipo":"town","pob":50229,"prio":1},{"n":"Marbella","lat":36.50898,"lng":-4.88562,"tipo":"city","pob":78373,"prio":1},{"n":"Málaga","lat":36.7213,"lng":-4.42164,"tipo":"city","pob":551480,"prio":1},{"n":"Casares","lat":36.44335,"lng":-5.27289,"tipo":"village","pob":2194,"prio":2},{"n":"Benahavís","lat":36.52227,"lng":-5.04411,"tipo":"village","pob":2439,"prio":2},{"n":"Fuengirola","lat":36.53884,"lng":-4.6234,"tipo":"city","pob":84857,"prio":2},{"n":"Vélez-Málaga","lat":36.78184,"lng":-4.09881,"tipo":"town","pob":42347,"prio":2},{"n":"San Pedro","lat":36.48663,"lng":-4.99053,"tipo":"town","pob":34195,"prio":3},{"n":"Mijas","lat":36.59575,"lng":-4.63752,"tipo":"village","pob":3545,"prio":3},{"n":"Torremolinos","lat":36.62428,"lng":-4.49954,"tipo":"town","pob":71269,"prio":3},{"n":"Benalmádena","lat":36.59533,"lng":-4.52874,"tipo":"town","pob":56442,"prio":3},{"n":"Nueva Andalucía","lat":36.50598,"lng":-4.966,"tipo":"suburb","pob":22677,"prio":4},{"n":"La Cala","lat":36.50798,"lng":-4.68182,"tipo":"village","pob":5039,"prio":4},{"n":"Rincón de la Victoria","lat":36.71621,"lng":-4.27938,"tipo":"town","pob":18001,"prio":4}];

/* Fotografía de campos. `placeholder:true` = sin imagen real.
   Cada entrada lleva su crédito: las de Wikimedia Commons conservan autor y licencia
   (CC BY / CC BY-SA exigen atribución); el resto son archivo del estudio. */
const FOTOS_CAMPO = {
 "valle-romano-golf": {
   "src": "../images/golf/valle-romano-golf.jpg",
   "pie": "The 3rd green beside the lake.",
   "credito": "Malashpina archive",
   "url": null
 },
 "santana-golf": {
   "src": "../images/golf/santana-golf.jpg",
   "pie": "The sea of bunkers at the 15th, with the sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-duquesa-golf": {
   "src": "../images/golf/la-duquesa-golf.jpg",
   "pie": "A fountain lake in front of the clubhouse.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-cala-resort-europa": {
   "src": "../images/golf/la-cala-resort-europa.jpg",
   "pie": "The course through the hills, with the Mijas sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "casares-costa-golf": {
   "src": "../images/golf/casares-costa-golf.jpg",
   "pie": "The 18th green in front of the clubhouse.",
   "credito": "Malashpina archive",
   "url": null
 },
 "tramores-villa-padierna": {
   "src": "../images/golf/tramores-villa-padierna.jpg",
   "pie": "A green ringed by jacarandas in flower.",
   "credito": "Malashpina archive",
   "url": null
 },
 "santa-clara-golf-marbella": {
   "src": "../images/golf/santa-clara-golf-marbella.jpg",
   "pie": "A fountain lake among the palms, into the light.",
   "credito": "Malashpina archive",
   "url": null
 },
 "miraflores-golf": {
   "src": "../images/golf/miraflores-golf.jpg",
   "pie": "Green and fairway above the valley, with the sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-siesta-golf": {
   "src": "../images/golf/la-siesta-golf.jpg",
   "pie": "A wooded fairway, with the sea beyond.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-noria-golf": {
   "src": "../images/golf/la-noria-golf.jpg",
   "pie": "A fountain lake beside the green.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-canada-golf": {
   "src": "../images/golf/la-canada-golf.jpg",
   "pie": "Aerial view of the course and its lake.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-cala-resort-america": {
   "src": "../images/golf/la-cala-resort-america.jpg",
   "pie": "A tee shot towards the lake, with the Mijas sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-hacienda-alcaidesa-links": {
   "src": "../images/golf/la-hacienda-alcaidesa-links.jpg",
   "pie": "A links green, with the Rock of Gibraltar behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "greenlife-golf": {
   "src": "../images/golf/greenlife-golf.jpg",
   "pie": "A fountain lake, between the fairways.",
   "credito": "Malashpina archive",
   "url": null
 },
 "dona-julia-golf": {
   "src": "../images/golf/dona-julia-golf.jpg",
   "pie": "A fairway running down towards the sea.",
   "credito": "Malashpina archive",
   "url": null
 },
 "el-chaparral-golf": {
   "src": "../images/golf/el-chaparral-golf.jpg",
   "pie": "A green among the pines, with the Mediterranean beyond.",
   "credito": "Malashpina archive",
   "url": null
 },
 "calanova-golf": {
   "src": "../images/golf/calanova-golf.jpg",
   "pie": "An open fairway across the hills of La Cala.",
   "credito": "Malashpina archive",
   "url": null
 },
 "baviera-golf": {
   "src": "../images/golf/baviera-golf.jpg",
   "pie": "The lake in front of the clubhouse, with the Axarquía behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "azata-golf": {
   "src": "../images/golf/azata-golf.jpg",
   "pie": "A green beside the lake at dusk, with the sea behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "the-alto-club-almenara": {
   "src": "../images/golf/the-alto-club-almenara.jpg",
   "pie": "Sunrise over the course, among the cork oaks.",
   "credito": "Malashpina archive",
   "url": null
 },
 "el-paraiso-golf": {
   "src": "../images/golf/el-paraiso-golf.jpg",
   "pie": "A fountain lake between fairways, with La Concha behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "magna-marbella": {
   "src": "../images/golf/magna-marbella.jpg",
   "pie": "Green and fairway, with the Nueva Andalucía sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "guadalmina-norte": {
   "src": "../images/golf/guadalmina-norte.jpg",
   "pie": "Greenside bunker, with San Pedro behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "el-higueral": {
   "src": "../images/golf/el-higueral.jpg",
   "pie": "A green ringed by water, with the Benahavís sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "dama-de-noche": {
   "src": "../images/golf/dama-de-noche.jpg",
   "pie": "A green at dusk: the course is floodlit and also played at night.",
   "credito": "Malashpina archive",
   "url": null
 },
 "los-arqueros-golf": {
   "src": "../images/golf/los-arqueros-golf.jpg",
   "pie": "A green beside the lake, framed by palms.",
   "credito": "Malashpina archive",
   "url": null
 },
 "alferini-villa-padierna": {
   "src": "../images/golf/alferini-villa-padierna.jpg",
   "pie": "A fairway falling down the valley, through the hills of Benahavís.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-zagaleta-los-barrancos": {
   "src": "../images/golf/la-zagaleta-los-barrancos.jpg",
   "pie": "Fairway with lake and palms; beyond, the sea and Africa.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-zagaleta-old": {
   "src": "../images/golf/la-zagaleta-old.jpg",
   "pie": "The La Zagaleta valley at dusk, fairways dropping away through the pines.",
   "credito": "Malashpina archive",
   "url": null
 },
 "flamingos-villa-padierna": {
   "src": "../images/golf/flamingos-villa-padierna.jpg",
   "pie": "Aerial view with the Villa Padierna hotel.",
   "credito": "Malashpina archive",
   "url": null
 },
 "san-roque-club-new": {
   "src": "../images/golf/san-roque-club-new.jpg",
   "pie": "A green beside the lake at dusk.",
   "credito": "Malashpina archive",
   "url": null
 },
 "san-roque-club-old": {
   "src": "../images/golf/san-roque-club-old.jpg",
   "pie": "The climb to the farmhouse clubhouse, through cork oaks.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-quinta-golf": {
   "src": "../images/golf/la-quinta-golf.jpg",
   "pie": "A lake with palms, and La Concha behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "alhaurin-golf": {
   "src": "../images/golf/alhaurin-golf.jpg",
   "pie": "The course lake, with the sierra behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "atalaya-new": {
   "src": "../images/golf/atalaya-new.jpg",
   "pie": "A lake at Atalaya (the source does not say whether Old or New).",
   "credito": "Wikimedia Commons · CC BY-SA 3.0 · R-E-AL",
   "url": "https://commons.wikimedia.org/wiki/File:2009-03-12-Atalaya-1.JPG"
 },
 "parador-malaga-golf": {
   "src": "../images/golf/parador-malaga-golf.jpg",
   "pie": "The green in front of the Parador building.",
   "credito": "Wikimedia Commons · CC BY-SA 4.0 · Paradores",
   "url": "https://commons.wikimedia.org/wiki/File:Parador_de_M%C3%A1laga_Golf4.jpg"
 },
 "mijas-golf-los-olivos": {
   "src": "../images/golf/mijas-golf-los-olivos.jpg",
   "pie": "The Los Olivos fairway, with the development behind.",
   "credito": "Wikimedia Commons · CC BY 3.0 · Roger Husvik (Panoramio)",
   "url": "https://commons.wikimedia.org/wiki/File:Los_Olivos_-_panoramio.jpg"
 },
 "estepona-golf": {
   "src": "../images/golf/estepona-golf.jpg",
   "pie": "From the 10th tee, the club’s signature hole.",
   "credito": "Wikimedia Commons · CC BY 3.0 · TheLegalEditor",
   "url": "https://commons.wikimedia.org/wiki/File:View_from_10th_Tee.jpg"
 },
 "real-club-valderrama": {
  "src": "../images/golf/real-club-valderrama.jpg",
  "pie": "A green and its bunkers.",
  "credito": "Wikimedia Commons · CC BY 2.0 · Pablo Herrero",
  "url": "https://commons.wikimedia.org/wiki/File%3AReal_Club_Valderrama_-_2008_%281%29.jpg"
 },
 "la-reserva-club-sotogrande": {
  "src": "../images/golf/la-reserva-club-sotogrande.jpg",
  "pie": "The course, with the clubhouse behind.",
  "credito": "Wikimedia Commons · CC BY 4.0 · sotogrande",
  "url": "https://commons.wikimedia.org/wiki/File%3ASotogrande-lareserva.jpg"
 },
 "los-naranjos-golf": {
  "src": "../images/golf/los-naranjos-golf.jpg",
  "pie": "Fairway and clubhouse, with La Concha behind.",
  "credito": "Wikimedia Commons · CC BY-SA 3.0 · FalGordo",
  "url": "https://commons.wikimedia.org/wiki/File%3ALos_Naranjos_Golf_Club.JPG"
 },
 "golf-torrequebrada": {
  "src": "../images/golf/golf-torrequebrada.jpg",
  "pie": "The course lake and its palms.",
  "credito": "Wikimedia Commons · CC BY-SA 4.0 · Beata77",
  "url": "https://commons.wikimedia.org/wiki/File%3ABenalmadena-golf-costa-del-sol-torrequebrada.jpg"
 },
 "atalaya-old": {
  "src": "../images/golf/atalaya-old.jpg",
  "pie": "The course at dusk.",
  "credito": "Wikimedia Commons · CC BY-SA 4.0 · ANAGSPC",
  "url": "https://commons.wikimedia.org/wiki/File%3AAtalaya_Golf_%26_Country_Club_en_Estepona.jpg"
 },
 "mijas-golf-los-lagos": {
   "src": "../images/golf/mijas-golf-los-lagos.jpg",
   "pie": "Aerial view of the lakes the course is named after.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-hacienda-heathland": {
  "src": "../images/golf/la-hacienda-heathland.jpg",
  "pie": "The coastal links at Heathland.",
  "credito": "Wikimedia Commons · CC BY 3.0 · Jose Luis Filpo Cabana",
  "url": "https://commons.wikimedia.org/wiki/File%3AAlcaidesa_Heathland.jpg"
 },
 "real-club-el-candado": {
   "src": "../images/golf/real-club-el-candado.jpg",
   "pie": "Green and bunker, with the sea beyond.",
   "credito": "Malashpina archive",
   "url": null
 },
 "real-club-guadalhorce": {
   "src": "../images/golf/real-club-guadalhorce.jpg",
   "pie": "Fairway towards the clubhouse, through the palms.",
   "credito": "Malashpina archive",
   "url": null
 },
 "rio-real-golf": {
  "src": "../images/golf/rio-real-golf.jpg",
  "pie": "Javier Arana’s course beside the sea.",
  "credito": "Malashpina archive",
  "url": null
 },
 "real-club-de-golf-sotogrande": {
  "src": "../images/golf/real-club-de-golf-sotogrande.jpg",
  "pie": "A green between palms and lake.",
  "credito": "© golfsotogrande.com",
  "url": "https://golfsotogrande.com"
 },
 "finca-cortesin-golf": {
   "src": "../images/golf/finca-cortesin-golf.jpg",
   "pie": "Fairways and bunkers, with the Sierra Bermeja behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "real-club-de-golf-las-brisas": {
   "src": "../images/golf/real-club-de-golf-las-brisas.jpg",
   "pie": "A green among the palms, with La Concha behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "aloha-golf-club": {
  "src": "../images/golf/aloha-golf-club.jpg",
  "pie": "Bunker and fairway at dusk.",
  "credito": "© clubdegolfaloha.com",
  "url": "https://clubdegolfaloha.com"
 },
 "real-club-de-golf-guadalmina-sur": {
  "src": "../images/golf/real-club-de-golf-guadalmina-sur.jpg",
  "pie": "Aerial view of the course.",
  "credito": "© guadalminagolf.com",
  "url": "https://guadalminagolf.com"
 },
 "marbella-club-golf-resort": {
  "src": "../images/golf/marbella-club-golf-resort.jpg",
  "pie": "The 18th, beside the lake.",
  "credito": "© marbellaclub.com",
  "url": "https://marbellaclub.com"
 },
 "la-cala-resort-asia": {
  "src": "../images/golf/la-cala-resort-asia.jpg",
  "pie": "The 18th on the Asia course, with the Mijas sierra behind.",
  "credito": "© lacala.com",
  "url": "https://lacala.com"
 },
 "lauro-golf": {
  "src": "../images/golf/lauro-golf.jpg",
  "pie": "Fairway with holm oaks and the sierra behind.",
  "credito": "Malashpina archive",
  "url": null
 },
 "higueron-marbella-golf": {
  "src": "../images/golf/higueron-marbella-golf.jpg",
  "pie": "Aerial view of the course, formerly Marbella G&CC.",
  "credito": "Malashpina archive",
  "url": null
 },
 "santa-maria-golf": {
  "src": "../images/golf/santa-maria-golf.jpg",
  "pie": "A broad green against the Elviria pines.",
  "credito": "Malashpina archive",
  "url": null
 },
 "cabopino-golf": {
  "src": "../images/golf/cabopino-golf.jpg",
  "pie": "A green above the sea at Cabopino.",
  "credito": "Malashpina archive",
  "url": null
 },
 "anoreta-golf": {
  "src": "../images/golf/anoreta-golf.jpg",
  "pie": "Lake and palm grove, with the Mediterranean beyond.",
  "credito": "Malashpina archive",
  "url": null
 },
 "la-resina-golf": {
  "src": "../images/golf/la-resina-golf.jpg",
  "pie": "Fairway between the lake and a line of cypresses.",
  "credito": "Malashpina archive",
  "url": null
 }
};

/* Segunda imagen de un campo: la que se usa en la ficha de la promoción. */

/* Segunda imagen de un campo: la que se usa en la ficha de la promoción. */

/* Segunda imagen de un campo: la que se usa en la ficha de la promoción. */

/* Segunda imagen de un campo: la que se usa en la ficha de la promoción. */
const FOTOS_FICHA = {
 "calanova-golf": {
   "src": "../images/golf/calanova-golf-ficha.jpg",
   "pie": "The course lake, with the sea beyond.",
   "credito": "Malashpina archive",
   "url": null
 },
 "guadalmina-norte": {
   "src": "../images/golf/guadalmina-norte-ficha.jpg",
   "pie": "A fairway with the village behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-canada-golf": {
   "src": "../images/golf/la-canada-golf-ficha.jpg",
   "pie": "Fairway with the sierra and the bay behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "la-quinta-golf": {
   "src": "../images/golf/la-quinta-golf-ficha.jpg",
   "pie": "A green beside the lake, with the village behind.",
   "credito": "Malashpina archive",
   "url": null
 },
 "santa-clara-golf-marbella": {
   "src": "../images/golf/santa-clara-golf-marbella-ficha.jpg",
   "pie": "Aerial view of the course and its clubhouse.",
   "credito": "Malashpina archive",
   "url": null
 }
};

const PROMOS = [

  { id:'villas-alamos', render:{ dominio:"sotograndehome.com", pie:"Villa with pool and garden." }, name:'Las Villas de los Álamos', sub:'ACCIONA Inmobiliaria',
    municipio:'Sotogrande (Cádiz)', zona:'Sotogrande Alto · Los Álamos', lat:36.29192, lng:-5.31299,
    image:'../images/promos/villas-alamos.jpg',
    promotor:'ACCIONA Inmobiliaria', estudio:'Torras y Sierra', estudioFuente:'inmobiliaria.acciona.com', derechosGolf:null,
    tipologia:'Three- to four-bedroom villas and townhouses', unidades:49,
    precio:'€830,000 – €3,500,000', precioDesde:'€830,000', precioEstimado:false, eurM2:8500,
    estado:'Under construction', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['la-canada-golf',1,''],['real-club-valderrama',6,''],['la-reserva-club-sotogrande',7,''],['san-roque-club-old',8,''],['the-alto-club-almenara',8,''],['san-roque-club-new',10,''],['real-club-de-golf-sotogrande',11,''],['la-hacienda-alcaidesa-links',12,''],['la-hacienda-heathland',14,'']],
    d:{ a5:0,  a5why:'In Sotogrande Alto, not inside a golf resort. Valderrama is 6 minutes away, but it is a members\' club.',
        a6:5,  a6why:'Direct exit onto the A-7 via Sotogrande, with no town centres to cross.',
        b1:7,  b1why:'Torras y Sierra, an established Spanish practice; no international brand.',
        b4:7,  b4why:'Private garden and pool to every house, plus a padel court; no clubhouse or beach club of its own.' },
    tags:['Torras y Sierra','49 homes','Valderrama 6 min away'],
    rationale:'<strong>This profile was corrected for the current edition.</strong> The development is not inside La Reserva, as previously recorded: ACCIONA places it in Sotogrande Alto, and its published coordinate puts it 1.2 km from Valderrama. It loses the resort bonus — it is inside none — but three elite courses are within reach: Valderrama at six minutes, La Reserva at seven and RCG Sotogrande at eleven. That Valderrama and RCG are members\' clubs is precisely what the access coefficient discounts.' },

  { id:'village-verde', render:{ dominio:"villageverdesotogrande.com", pie:"The resort at dusk." }, name:'Village Verde', sub:'La Reserva de Sotogrande',
    municipio:'Sotogrande (Cádiz)', zona:'La Reserva Club', lat:36.28943, lng:-5.32142,
    image:'../images/promos/village-verde.jpg',
    promotor:'Sotogrande SA', estudio:'L35 Architects', estudioFuente:'l35.com',
    derechosGolf:'Membership of La Reserva Club is taken out separately: it is not included in the purchase. An 18-hole green fee starts at €199.', derechosFuente:'lareservaclubsotogrande.com',
    tipologia:'Two- to four-bedroom sustainable apartments and penthouses', unidades:124,
    precio:'€830,000 – €2,400,000', precioDesde:'€830,000', precioEstimado:false, eurM2:7500,
    estado:'Phase 1 delivered · Phase 2 under way', entrega:'2024–2025',
    campoPropio:'la-reserva-club-sotogrande', campoPropioPendiente:null,
    cursos:[['la-reserva-club-sotogrande',0,'In-resort'],['real-club-valderrama',3,''],['la-canada-golf',4,''],['the-alto-club-almenara',6,''],['san-roque-club-old',7,''],['san-roque-club-new',8,''],['real-club-de-golf-sotogrande',9,''],['la-hacienda-alcaidesa-links',10,''],['la-hacienda-heathland',12,'']],
    d:{ a5:10, a5why:'Inside La Reserva Club (its own ★★★★).',
        a6:5,  a6why:'The same road access as Los Álamos.',
        b1:7,  b1why:'Certified sustainable design; no documented international signature.',
        b4:10, b4why:'Full access to the facilities at La Reserva Club.' },
    tags:['In-resort 4★','Sustainable','Wellness'],
    rationale:'Sotogrande SA\'s most ambitious residential scheme, with architecture by L35 and BREEAM certification. It is the only development in the ranking genuinely inside La Reserva Club, and its own ★★★★ course makes up the difference: the other two elite courses within reach are members-only. It falls short of first place on size: 124 units pull down its exclusivity score.' },

  { id:'marea-missoni', render:{ dominio:"marea-marbella.com", pie:"Pool and terrace above the sea." }, name:'MAREA by Missoni', sub:'Finca Cortesín · Hotel · Golf · Spa',
    municipio:'Casares', zona:'Finca Cortesín Resort', lat:36.379, lng:-5.224,
    image:'../images/promos/marea-missoni.jpg',
    promotor:'Dar Global', estudio:'HCP Arquitectos', estudioFuente:'hcparquitectos.com',
    derechosGolf:null, derechosNota:'Dar Global does not publish any golf rights for owners at Finca Cortesín.',
    tipologia:'Two- to four-bedroom branded residences', unidades:64,
    precio:'€1,000,000 – €3,560,000', precioDesde:'€1,000,000', precioEstimado:false, eurM2:14000,
    estado:'Under construction', entrega:'2027',
    campoPropio:'finca-cortesin-golf', campoPropioPendiente:null,
    cursos:[['finca-cortesin-golf',0,'In-resort'],['dona-julia-golf',4,''],['la-duquesa-golf',6,''],['azata-golf',12,''],['casares-costa-golf',12,''],['estepona-golf',12,''],['valle-romano-golf',14,'']],
    d:{ a5:10, a5why:'Inside Finca Cortesín (its own ★★★★, resort access and bookable).',
        a6:5,  a6why:'Direct access to the A-7 via Casares Costa.',
        b1:10, b1why:'A Missoni Casa branded residence — an established name, delivered with the property.',
        b4:10, b4why:'Five-star GL hotel, spa, beach club, four restaurants, concierge.' },
    tags:['Missoni branded','In-resort 4★','2023 Solheim Cup','Beach club'],
    rationale:'<strong>A new number one.</strong> Finca Cortesín is <strong>one of only two ★★★★ courses that can be played without a membership</strong> and the only one inside a resort. Host to the 2023 Solheim Cup and the Volvo World Match Play, it underpins a proposition that pairs a branded residence with one of the highest development scores in the guide.' },

  { id:'quercus', render:{ dominio:"realdelaquinta.com", pie:"The lake at Real de La Quinta." }, name:'Real de La Quinta · Quercus', sub:'Future Banyan Tree Residences',
    municipio:'Benahavís', zona:'Real de La Quinta Resort', lat:36.515, lng:-5.000,
    image:'../images/promos/quercus.jpg',
    promotor:'Grupo La Quinta', estudio:'González & Jacobson', estudioFuente:'gjarquitectura.com',
    derechosGolf:null, derechosNota:'El Lago Club is described as being for residents, but the developer does not state whether purchase includes membership.',
    tipologia:'Two- to four-bedroom apartments and penthouses', unidades:102, unidadesNota:'Phases I and II complete, 18 blocks (González & Jacobson).',
    precio:'€1,300,000 – €3,000,000', precioDesde:'€1,300,000', precioEstimado:false, eurM2:9000,
    estado:'Under construction', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:'El Lago Club · Jack Nicklaus Design — in development, not yet open',
    marcaPendiente:true,
    cursos:[['la-quinta-golf',1,''],['los-arqueros-golf',6,''],['los-naranjos-golf',6,''],['magna-marbella',7,''],['aloha-golf-club',9,''],['el-higueral',9,''],['real-club-de-golf-las-brisas',9,''],['guadalmina-norte',12,''],['real-club-de-golf-guadalmina-sur',12,''],['alferini-villa-padierna',13,''],['atalaya-new',13,''],['atalaya-old',13,''],['el-paraiso-golf',14,''],['la-zagaleta-old',14,''],['dama-de-noche',15,'']],
    d:{ a5:0,  a5why:'Its own course (El Lago Club) is not yet open: under rule v1.1 it does not score until delivery.',
        a6:3,  a6why:'A hill road down to the A-7; good, but not direct.',
        b1:7,  b1why:'Banyan Tree announced for 2026 but not delivered: capped at 7 under the pending-brand rule.',
        b4:10, b4why:'A navigable lake, sports club, spa and beach club set out in the masterplan.' },
    tags:['Banyan Tree 2026','Golf Valley','102 units'],
    rationale:'Strictness costs it dearly: it forfeits the own-course bonus because El Lago is not yet open, and its access to Golf Valley is discounted because Las Brisas, Aloha and Guadalmina Sur are all members-only. What holds the position is a full resort facilities offer, in spite of the development\'s 102 units.' },

  { id:'epic-fendi', render:{ dominio:"epicmarbella.com", pie:"The scheme with La Concha behind." }, name:'EPIC Marbella by Fendi', sub:'Casa Branded Residences',
    municipio:'Marbella', zona:'Golden Mile · Nagüeles', lat:36.516, lng:-4.911,
    image:'../images/promos/epic-fendi.jpg',
    promotor:'Sierra Blanca Estates', estudio:null, estudioNota:'Comprobado en epicmarbella.com y sierrablancaestates.com: no acreditan estudio de arquitectura. Fendi Casa y The One Atelier firman interiorismo y mobiliario, no el edificio.', derechosGolf:null, derechosNota:'Checked at epicmarbella.com: golf appears only as a nearby amenity, with no rights for owners.',
    tipologia:'Branded apartments and penthouses', unidades:56,
    precio:'€1,750,000 – €4,450,000', precioDesde:'€1,750,000', precioEstimado:false, eurM2:15000,
    estado:'Phased · under construction', entrega:'2024–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['dama-de-noche',8,''],['aloha-golf-club',10,''],['los-naranjos-golf',13,''],['real-club-de-golf-las-brisas',13,''],['rio-real-golf',13,''],['santa-maria-golf',13,''],['magna-marbella',14,'']],
    d:{ a5:0,  a5why:'Neither in a resort nor on a course.',
        a6:1,  a6why:'Dependent on the Marbella centre corridor — the worst stretch for congestion on the coast.',
        b1:10, b1why:'Fendi Casa: an established international name, with the interiors delivered as part of the property.',
        b4:10, b4why:'Spa, gym, cinema, 24-hour concierge, premium pools, hotel service.' },
    tags:['Fendi Casa','Golden Mile','€15k/m²'],
    rationale:'It overtakes Tiara by three points after a correction to its count of ★★★+ courses, which was wrong in the previous edition. Its golf is within reach rather than on the doorstep: four ★★★+ courses between 10 and 13 minutes, and what sits at eight minutes is a nine-hole course. Here golf is an amenity; what you are paying for is Fendi and the €15,000 per square metre.' },

  { id:'tiara', render:{ dominio:"nvoga.com", pie:"Stepped terraces above the valley." }, name:'Tiara', sub:'La Quinta · NVOGA',
    municipio:'Benahavís', zona:'La Quinta', lat:36.52034, lng:-5.00014,
    image:'../images/promos/tiara.jpg',
    promotor:'NVOGA Marbella Realty', estudio:null, estudioNota:'Checked at nvoga.com: no architectural practice documented.', derechosGolf:null,
    tipologia:'Three- to four-bedroom apartments and penthouses', unidades:56,
    precio:'€1,550,000 – €2,300,000', precioDesde:'€1,550,000', precioEstimado:false, eurM2:8500,
    estado:'Pre-sales · under construction', entrega:'2026+',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['la-quinta-golf',4,''],['los-arqueros-golf',4,''],['los-naranjos-golf',7,''],['magna-marbella',8,''],['el-higueral',9,''],['aloha-golf-club',10,''],['real-club-de-golf-las-brisas',10,''],['la-zagaleta-old',11,''],['guadalmina-norte',12,''],['real-club-de-golf-guadalmina-sur',12,''],['atalaya-new',13,''],['atalaya-old',13,''],['la-zagaleta-los-barrancos',13,''],['alferini-villa-padierna',14,''],['dama-de-noche',15,''],['el-paraiso-golf',15,'']],
    d:{ a5:5,  a5why:'On the edge of La Quinta Golf’s 27 holes, without being in-resort.',
        a6:3,  a6why:'Good access via the Benahavís road; occasional congestion at San Pedro.',
        b1:4,  b1why:'A considered NVOGA product; no international signature.',
        b4:7,  b4why:'Spa, gym, piscinas, zonas comunes; sin club house ni beach club propios.' },
    tags:['A pie La Quinta','Golf Valley','Boutique NVOGA'],
    rationale:'Uno de los mejores bloques A fuera de Sotogrande y Cortesín: 30 sobre 60, con La Quinta Golf a cuatro minutos y de acceso resort. Queda séptima por el bloque B: sin marca, sin beach club y con 56 unidades, Fendi le saca doce puntos en la mitad que puntúa el proyecto.' },

  { id:'mc-hills', render:{ dominio:"marbellaclubhills.com", pie:"Aerial view towards the sea." }, name:'Marbella Club Hills', sub:'Phase 2',
    municipio:'Benahavís', zona:'Carretera del Madroñal', lat:36.495, lng:-5.045,
    image:'../images/promos/mc-hills.jpg',
    promotor:'Mena Capital · Marbella Club', estudio:'Villarroel Torrico', estudioFuente:'marbellaclubhills.com',
    derechosGolf:'Stated access to Marbella Club Golf and the equestrian centre; no terms or green fees published.', derechosFuente:'marbellaclubhills.com',
    tipologia:'Apartments and semi-detached villas', unidades:120,
    precio:'€690,000 – €1,350,000+', precioDesde:'€690,000', precioEstimado:false, eurM2:6500,
    estado:'Phased construction', entrega:'2026+',
    campoPropio:'marbella-club-golf-resort', campoPropioPendiente:null,
    cursos:[['marbella-club-golf-resort',0,'In-resort'],['alferini-villa-padierna',2,''],['el-higueral',7,''],['atalaya-new',9,''],['atalaya-old',9,''],['flamingos-villa-padierna',10,''],['el-paraiso-golf',13,''],['guadalmina-norte',14,''],['la-quinta-golf',14,''],['los-arqueros-golf',14,''],['real-club-de-golf-guadalmina-sur',14,''],['tramores-villa-padierna',15,'']],
    d:{ a5:7,  a5why:'In-resort at Marbella Club Golf Resort (its own ★★★, hotel access).',
        a6:3,  a6why:'The Madroñal road down to the A-7.',
        b1:7,  b1why:'The Marbella Club hotel name; no documented architectural practice.',
        b4:10, b4why:'Marbella Club Hotel privileges, spa, clubhouse and the hotel\'s beach club.' },
    tags:['In-resort 3★','Marbella Club brand','Villa Padierna 5 min away'],
    rationale:'Nine of its twelve courses take bookings, starting with its own: Marbella Club Golf, Flamingos, Alferini and Tramores. It offers the best ratio of playable golf to entry price in the ranking. The ceiling is its rating: of the twelve courses within fifteen minutes, the best reaches ★★★.' },

  { id:'zew', render:{ dominio:"Concept Homes · NVOGA", pie:"The entrance to ZEW at dusk.", origen:'render del promotor · brochure ZEW (Malashpina)' }, name:'ZEW', sub:'by Concept Homes',
    municipio:'Marbella', zona:'Elviria West', lat:36.503, lng:-4.810,
    image:'../images/promos/zew.jpg',
    promotor:'Concept Homes · NVOGA', estudio:null, estudioNota:'Concept Homes / NVOGA catalogue v19: no architectural practice documented.', derechosGolf:null,
    tipologia:'Residencias boutique 3–4 dorm.', unidades:20,
    precio:'€1,500,000 – €2,800,000 (estimado)', precioDesde:'€1,500,000', precioEstimado:true, eurM2:10000,
    estado:'Pre-sales · under construction', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['higueron-marbella-golf',4,''],['rio-real-golf',4,''],['greenlife-golf',7,''],['santa-clara-golf-marbella',7,''],['cabopino-golf',11,''],['santa-maria-golf',11,''],['dama-de-noche',12,''],['aloha-golf-club',14,''],['la-siesta-golf',14,''],['miraflores-golf',15,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:5,  a6why:'Direct slip road onto the A-7 at Elviria.',
        b1:4,  b1why:'Producto boutique cuidado; sin firma internacional.',
        b4:7,  b4why:'Piscina, gym, zonas comunes premium; sin resort propio.' },
    tags:['20 unidades','Boutique','A-7 directa','Conflicto declarado'],
    rationale:'Diez campos en quince minutos y ninguno de ★★★★, pero nueve de acceso público o resort: es golf diario, equilibrado y escalable. Máxima exclusividad de la lista con 20 residencias. <strong>Declared conflict of interest</strong>: su catálogo fue aportado por Malashpina Creativos. Su precio es una estimación: el promotor no lo publica.' },

  { id:'soul-marbella', render:{ dominio:"aedashomes.com", pie:"Piscina del resort." }, name:'Soul Marbella Sunlife', sub:'Santa Clara Resort',
    municipio:'Marbella', zona:'Marbella Este · Santa Clara', lat:36.495, lng:-4.823,
    image:'../images/promos/soul-marbella.jpg',
    promotor:'AEDAS Homes', promotorGrupo:'Grupo Neinor Homes',
    promotorNota:'AEDAS Homes has been a subsidiary of Neinor Homes since March 2026, when the takeover left the group holding 96.83% of the capital. The development appears here under the original developer’s name.',
    estudio:'González & Jacobson + Manuel Burgos', estudioFuente:'gjarquitectura.com',
    derechosGolf:null, derechosNota:'AEDAS publishes no golf rights over Santa Clara for owners.',
    tipologia:'Apartments, penthouses and villas', unidades:200, unidadesNota:'Soul Marbella completo: 5 fases, 200 viviendas (AEDAS Homes).',
    precio:'€1,294,000 – €1,790,000', precioDesde:'€1,294,000', precioEstimado:false, eurM2:8000,
    estado:'Sunlife entregada · Fase II en marcha', entrega:'2025',
    campoPropio:'santa-clara-golf-marbella', campoPropioPendiente:null,
    cursos:[['santa-clara-golf-marbella',0,'In-resort'],['rio-real-golf',5,''],['higueron-marbella-golf',7,''],['greenlife-golf',10,''],['santa-maria-golf',12,''],['cabopino-golf',13,''],['dama-de-noche',13,''],['aloha-golf-club',14,'']],
    d:{ a5:4,  a5why:'In-resort at Santa Clara Golf (its own ★★, public access).',
        a6:5,  a6why:'Immediate access to the A-7 via Marbella Este.',
        b1:4,  b1why:'A proven AEDAS product; no international signature.',
        b4:7,  b4why:'Sky lounge, spa, gym, piscinas; sin club house propio.' },
    tags:['In-resort','AEDAS','Sky lounge','Mixed property types'],
    rationale:'Siete de sus ocho campos son jugables y ninguno pasa de ★★★. El valor está en la ejecución residencial —mezcla de apartamentos y villas, poco habitual— más que en el golf. Es la promoción de esta lista que un golfista compra por comodidad: el golf entra en el lote y la decisión se toma en la casa.' },

  { id:'higueron-valley', render:{ dominio:"higueron-valley.com", pie:"Terrace overlooking the bay." }, name:'Higuerón Valley', sub:'Higuerón Resort',
    municipio:'Fuengirola', zona:'El Higuerón', lat:36.553, lng:-4.595,
    image:'../images/promos/higueron-valley.jpg',
    promotor:'Higuerón Resort', estudio:null, estudioNota:'Checked at higueronvalley.com: no architectural practice documented.',
    derechosGolf:'Resort membership included — Nagomi Spa, gym, Wave Beach Club and restaurants. No golf rights: Higuerón has no course of its own.', derechosFuente:'higueronvalley.com',
    tipologia:'Two- to three-bedroom apartments and penthouses', unidades:224,
    precio:'€595,000 – €1,950,000', precioDesde:'€595,000', precioEstimado:false, eurM2:8000,
    estado:'Phased construction', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['golf-torrequebrada',11,''],['mijas-golf-los-lagos',12,''],['calanova-golf',14,''],['el-chaparral-golf',15,''],['mijas-golf-los-olivos',15,'']],
    d:{ a5:0,  a5why:'Higuerón Resort no tiene campo propio.',
        a6:5,  a6why:'Its own link to the AP-7 and the A-7.',
        b1:4,  b1why:'A sound resort product; no international signature.',
        b4:10, b4why:'Hilton Curio, Nagomi Wellness Spa, beach club, siete restaurantes, club deportivo.' },
    tags:['Hilton Curio','Nagomi Spa','AP-7 directa','Beach club'],
    rationale:'Dos campos ★★★ jugables alrededor y el amenity deck más completo del este de la costa. Le penaliza la escala —224 unidades— y no tener campo propio. Es la puerta de entrada más barata del top 10 y la que menos depende del golf para justificarse.' },

  { id:'velaya', render:{ dominio:"velaya.stonewegliving.com", pie:"El conjunto beachfront." }, name:'Vélaya Estepona', sub:'Stoneweg Living',
    municipio:'Estepona', zona:'Beachfront New Golden Mile', lat:36.473, lng:-5.005,
    image:'../images/promos/velaya.jpg',
    promotor:'Stoneweg Living', estudio:null, estudioNota:'Checked at stonewegliving.com: no architectural practice documented. Developed by Stoneweg and Jamsa.', derechosGolf:null,
    tipologia:'Apartments, penthouses, townhouses and villas', unidades:38,
    precio:'€792,000 – €2,500,000', precioDesde:'€792,000', precioEstimado:false, eurM2:8000,
    estado:'Entrega en curso', entrega:'2024–2025',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['guadalmina-norte',5,''],['real-club-de-golf-guadalmina-sur',5,''],['atalaya-new',7,''],['atalaya-old',7,''],['el-paraiso-golf',8,''],['el-higueral',10,''],['la-quinta-golf',11,''],['los-naranjos-golf',11,''],['magna-marbella',11,''],['real-club-de-golf-las-brisas',11,''],['aloha-golf-club',12,''],['dama-de-noche',12,''],['los-arqueros-golf',12,''],['alferini-villa-padierna',13,''],['tramores-villa-padierna',13,''],['flamingos-villa-padierna',14,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:3,  a6why:'The A-7 runs alongside the development; summer congestion on the New Golden Mile.',
        b1:4,  b1why:'Producto beachfront cuidado; sin firma internacional.',
        b4:7,  b4why:'Spa, gym, piscinas, acceso directo a playa.' },
    tags:['Beachfront','38 unidades','Mixed property types'],
    rationale:'Queda por delante de The View, que pierde más que ella al aplicar el coeficiente de acceso. Su entorno es amplio pero desigual: dieciséis campos en quince minutos y cinco de ellos, de socios. Beachfront con 38 unidades y cuatro tipologías; el golf acompaña a la compra y el mar la explica.' },

  { id:'the-view', render:{ dominio:"marbella-ev.com", pie:"A residential block above Las Colinas." }, name:'The View Marbella', sub:'Las Colinas de Marbella',
    municipio:'Benahavís', zona:'Las Colinas', lat:36.510, lng:-4.97,
    image:'../images/promos/the-view.jpg',
    promotor:'The View Companies', estudio:'Teodoro Cabrilla + González & Jacobson', estudioFuente:'gjarquitectura.com', derechosGolf:null,
    tipologia:'Two- to four-bedroom apartments and penthouses', unidades:119,
    precio:'€799,000 – €2,499,000', precioDesde:'€799,000', precioEstimado:false, eurM2:6500,
    estado:'Phase 1 delivered · Phase 2 under way', entrega:'2024–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['los-naranjos-golf',2,''],['aloha-golf-club',3,''],['magna-marbella',3,''],['real-club-de-golf-las-brisas',5,''],['la-quinta-golf',7,''],['dama-de-noche',13,''],['guadalmina-norte',13,''],['los-arqueros-golf',13,''],['real-club-de-golf-guadalmina-sur',13,''],['atalaya-new',15,''],['atalaya-old',15,''],['el-higueral',15,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:3,  a6why:'A hill road down to the A-7.',
        b1:4,  b1why:'Producto comercial cuidado; sin firma internacional.',
        b4:4,  b4why:'Piscinas, gym, zonas comunes; amenity deck limitado.' },
    tags:['Vistas Golf Valley','119 unidades'],
    rationale:'La mayor caída del recálculo: seis puntos. Comparte entorno con Tiara y Quercus, pero la mitad de ese entorno son clubes de socios y su bloque B, 15 sobre 40, solo mejora al de Calanova. Excelente vista sobre Golf Valley; menos golf del que la vista sugiere.' },

  { id:'calanova', render:{ dominio:"avantespacia.com", pie:"The scheme at dusk, from the pool." }, name:'Calanova Collection', sub:'Avantespacia',
    municipio:'Mijas', zona:'La Cala de Mijas', lat:36.520, lng:-4.692,
    image:'../images/promos/calanova.jpg',
    promotor:'Avantespacia', estudio:null, estudioNota:'Checked at avantespacia.com: no architectural practice documented. Built by Ferrovial.', derechosGolf:null,
    tipologia:'Apartamentos 2–3 dorm.', unidades:154,
    precio:'€520,000 – €710,000', precioDesde:'€520,000', precioEstimado:false, eurM2:5000,
    estado:'Under construction', entrega:'2025–2026',
    campoPropio:'calanova-golf', campoPropioPendiente:null,
    cursos:[['calanova-golf',0,'In-resort'],['la-noria-golf',5,''],['el-chaparral-golf',12,''],['miraflores-golf',12,''],['santana-golf',12,''],['la-cala-resort-asia',13,''],['cabopino-golf',14,''],['la-cala-resort-europa',14,''],['la-siesta-golf',14,''],['la-cala-resort-america',15,'']],
    d:{ a5:4,  a5why:'In-resort en Calanova Golf (★★ propio, de resort).',
        a6:3,  a6why:'The A-7 five minutes away via La Cala.',
        b1:2,  b1why:'Standard commercial product.',
        b4:4,  b4why:'Piscinas, gym, zonas comunes.' },
    tags:['In-resort','9 campos en 15\'','Entry level premium'],
    rationale:'Diez campos en quince minutos y todos jugables: ninguna promoción de la guía tiene una proporción mejor. Ninguno pasa de ★★★. Para quien juega tres veces por semana y no le importa el palmarés, es objetivamente la mejor compra de la lista — y la más barata.' },

  { id:'quintessence', render:{ dominio:"quintessencemarbella.com", pie:"The scheme with its central pool." }, name:'Quintessence Marbella', sub:'Altos de Los Monteros',
    municipio:'Marbella', zona:'Marbella Este', lat:36.499, lng:-4.787,
    image:'../images/promos/quintessence.jpg',
    promotor:'Grupo Insur', estudio:'DPYA Arquitectura', estudioFuente:'dpya.com',
    derechosGolf:null, derechosNota:'Grupo Insur publishes no golf rights for owners.',
    tipologia:'Apartamentos 2–3 dorm.', unidades:96,
    precio:'€575,000 – €1,350,000', precioDesde:'€575,000', precioEstimado:false, eurM2:6500,
    estado:'Under construction', entrega:'Q4 2025',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['greenlife-golf',3,''],['higueron-marbella-golf',6,''],['rio-real-golf',6,''],['cabopino-golf',10,''],['santa-clara-golf-marbella',10,''],['santa-maria-golf',13,''],['dama-de-noche',14,''],['la-siesta-golf',14,''],['miraflores-golf',14,''],['la-noria-golf',15,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:3,  a6why:'Access to the A-7 through Los Monteros.',
        b1:4,  b1why:'Producto correcto; sin firma diferenciada.',
        b4:4,  b4why:'Piscinas, gym, zonas comunes.' },
    tags:['7 campos en 15\'','Valor precio/m²'],
    rationale:'Diez campos accesibles y todos jugables, pero dominados por la categoría ★★ — y el más cercano, Greenlife, es un par 3 de nueve hoyos que la matriz v1.1 ya no computa para la distancia mínima. Buena relación precio-localización sin argumento golfístico propio.' },

  /* ââ Incorporadas en el barrido del 23/09/2026 âââââââââââââââââââââââââ
     Cuatro promociones que cumplian los requisitos y nunca se habian mirado.
     Salen del primer longlist documentado (LONGLIST.md) y entran con el techo
     de precio suprimido. Sus tiempos son OSRM medidos, no declarados. */

  { id:'bentley-puente-romano', barrido:true, render:null, foto:null, image:null,
    name:'Mirador de Puente Romano', sub:'Furnished by Bentley Home',
    municipio:'Marbella', zona:'Golden Mile', lat:36.504509, lng:-4.9241547,
    promotor:'RGZ Developers', estudio:null, estudioNota:'Interiors by Bentley Home with Luxury Living Group; the architectural practice is not documented.',
    derechosGolf:null, derechosNota:'No course of its own and no published golf rights: the Golden Mile does not offer them.',
    tipologia:'Three- to four-bedroom branded duplexes', unidades:8,
    precio:'€3,450,000 – €4,150,000', precioDesde:'€3,450,000', precioEstimado:false, eurM2:9900,
    eurM2Nota:'€/m² derived from the entry price against the smallest unit (350 m²); the developer does not publish the figure.',
    estado:'For sale', entrega:null,
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['dama-de-noche',5,''],['aloha-golf-club',6,''],['real-club-de-golf-las-brisas',8,''],['magna-marbella',9,''],['los-naranjos-golf',9,''],['real-club-de-golf-guadalmina-sur',11,''],['guadalmina-norte',11,''],['rio-real-golf',12,''],['santa-maria-golf',12,''],['la-quinta-golf',13,''],['atalaya-old',13,''],['atalaya-new',13,''],['los-arqueros-golf',14,''],['el-paraiso-golf',14,''],['el-higueral',15,''],['higueron-marbella-golf',15,'']],
    d:{ a5:0,  a5why:'On the Golden Mile, 50 m from Puente Romano, not in a golf resort.',
        a6:2,  a6why:'Dependent on the Golden Mile boulevard, the urban stretch most prone to summer congestion.',
        b1:10, b1why:'Bentley Home: an international name, with the interiors delivered as part of the property.',
        b4:7,  b4why:'Private terraces with pools and exclusive access; no clubhouse or resort of its own.' },
    tags:['Bentley branded','8 units','Golden Mile'],
    rationale:'<strong>The most exclusive entry on the list</strong>: eight duplexes, fewer even than ZEW\'s twenty. The brand scores near the top and so does the price per square metre. The golf is what lets it down: sixteen courses within fifteen minutes, but the only ★★★★ among them is Las Brisas, members-only, as is Aloha. It sits surrounded by golf that, for the most part, it can only look at.' },

  { id:'lagerfeld-villas', barrido:true, render:null, foto:null, image:null,
    name:'Karl Lagerfeld Villas', sub:'Sierra Blanca Estates',
    municipio:'Marbella', zona:'Golden Mile', lat:36.5065204, lng:-4.9192157,
    coordNota:'Coordinate taken on the Golden Mile level with Marbella Club: the developer publishes the area and the 9,000 m² plot, not the exact point.',
    promotor:'Sierra Blanca Estates', estudio:null, estudioNota:'Designed in collaboration with Karl Lagerfeld; the architectural practice is not documented.',
    derechosGolf:null, derechosNota:'No course of its own and no published golf rights.',
    tipologia:'Branded villas', unidades:5,
    precio:'€16,500,000 (Villa St. Germain)', precioDesde:'€16,500,000', precioEstimado:false, eurM2:20000,
    eurM2Nota:'€/m² estimated: a price is published for only one of the five villas, and not its built area. Above €10,000 the scale tops out, so the estimate does not change the score.',
    estado:'Under construction', entrega:'2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['dama-de-noche',5,''],['aloha-golf-club',7,''],['real-club-de-golf-las-brisas',9,''],['magna-marbella',10,''],['los-naranjos-golf',10,''],['rio-real-golf',11,''],['santa-maria-golf',11,''],['real-club-de-golf-guadalmina-sur',12,''],['guadalmina-norte',12,''],['la-quinta-golf',14,''],['atalaya-old',14,''],['atalaya-new',14,''],['higueron-marbella-golf',14,''],['los-arqueros-golf',15,''],['santa-clara-golf-marbella',15,''],['el-paraiso-golf',15,'']],
    d:{ a5:0,  a5why:'On the Golden Mile, not in a golf resort and not on a course.',
        a6:2,  a6why:'The same Golden Mile boulevard, and the same summer congestion.',
        b1:10, b1why:'The first Karl Lagerfeld residential project anywhere, delivered with the property.',
        b4:7,  b4why:'A 9,000 m² plot and luxury service to each villa; no clubhouse or beach club of its own.' },
    tags:['Lagerfeld branded','5 villas','Golden Mile'],
    rationale:'<strong>The highest-priced development in the guide</strong> and one of only two full marks for brand. It shares a setting with the Bentley development, and it shares the problem: the nearest ★★★★ is Las Brisas, which is members-only. The access coefficient gives no credit for courses next door that cannot be booked, and that is what holds it down despite a Block B that is very nearly full.' },

  { id:'tierra-viva', barrido:true, render:null, foto:null, image:null,
    name:'Tierra Viva', sub:'by Automobili Lamborghini',
    municipio:'Benahavís', zona:'La Alquería', lat:36.4936707, lng:-5.0210685,
    promotor:'Dar Global', estudio:null, estudioNota:'Design inspired by Automobili Lamborghini; the architectural practice is not documented.',
    derechosGolf:null, derechosNota:'No course of its own and no published golf rights.',
    tipologia:'Four- to six-bedroom villas', unidades:53,
    precio:'desde €8,488,653', precioDesde:'€8,488,653', precioEstimado:false, eurM2:10400,
    eurM2Nota:'€/m² derived from the entry price against the smallest villa (819 m²).',
    estado:'Under construction', entrega:'2028',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['atalaya-old',5,''],['atalaya-new',5,''],['el-higueral',6,''],['el-paraiso-golf',9,''],['alferini-villa-padierna',9,''],['real-club-de-golf-guadalmina-sur',10,''],['guadalmina-norte',10,''],['la-quinta-golf',13,''],['marbella-club-golf-resort',13,''],['los-arqueros-golf',13,''],['tramores-villa-padierna',14,''],['flamingos-villa-padierna',15,''],['magna-marbella',15,''],['los-naranjos-golf',15,''],['real-club-de-golf-las-brisas',15,'']],
    d:{ a5:0,  a5why:'In La Alquería, not in a golf resort and not on a course.',
        a6:3,  a6why:'The La Alquería road down to the A-7; good, but not direct.',
        b1:9,  b1why:'Automobili Lamborghini as a design collaboration, delivered with the property; this is not branded interior design in the way Fendi or Missoni are.',
        b4:10, b4why:'Pool with a relaxation area, steam room, sauna and home cinema to every villa.' },
    tags:['Lamborghini branded','53 villas','La Alquería'],
    rationale:'From Dar Global, the same developer as the winner, and at the opposite end of the matrix: here golf is where you live, not why you buy. Fifteen courses within fifteen minutes, but the only ★★★★ among them sits at the far edge of that range and is members-only. Completion in 2028, the latest date on the list.' },

  { id:'spinto-hills', barrido:true, render:null, foto:null, image:null,
    name:'Spinto Hills', sub:'Casares Costa',
    municipio:'Casares', zona:'Camarate', lat:36.381273, lng:-5.2108077,
    coordNota:'Coordinate taken on Casares Costa: the sources place the villas in the Camarate area, some 2 km from the beach, without publishing the exact point.',
    promotor:null, promotorNota:'Developer not documented in the sources consulted.',
    estudio:'Cacopardo Arquitectos', estudioFuente:'spintohills.homes',
    derechosGolf:null, derechosNota:'Views over Finca Cortesín, with no golf rights on the course.',
    tipologia:'Four- to five-bedroom villas', unidades:17,
    precio:'€2,150,000 – €2,900,000', precioDesde:'€2,150,000', precioEstimado:false, eurM2:5400,
    eurM2Nota:'€/m² estimated against a built area of around 400 m²: the sources do not publish the figure.',
    estado:'For sale', entrega:null,
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['finca-cortesin-golf',5,'Vistas'],['dona-julia-golf',5,''],['la-duquesa-golf',7,''],['estepona-golf',10,''],['casares-costa-golf',10,''],['azata-golf',10,''],['valle-romano-golf',12,'']],
    d:{ a5:0,  a5why:'Overlooking Finca Cortesín, not inside it: seeing a course is not the same as playing it.',
        a6:4,  a6why:'Exit onto the A-7 via Casares Costa, including the climb up to Camarate.',
        b1:4,  b1why:'Cacopardo Arquitectos, an established local practice; no international brand.',
        b4:4,  b4why:'Private garden, pool and roof terrace to every villa; no resort communal areas.' },
    tags:['Finca Cortesín 5 min away','17 villas','Cacopardo'],
    rationale:'The <strong>closest bookable ★★★★ in the whole guide after the two in-resort entries</strong>: Finca Cortesín at five minutes, with resort access and no membership required. It is held back by a thin setting — seven courses within fifteen minutes, the lowest density on the list — and by a Block B with no brand behind it. First-rate golf nearby; a second-tier residential proposition.' },

  /* ââ Segunda tanda del barrido Â· 23/09/2026 âââââââââââââââââââââââââââ
     Las tres de las catorce restantes que pasan el suelo de 500.000 â¬ y
     tienen precio publicado. El resto queda fuera o aplazado, con su motivo
     escrito en LONGLIST.md. */

  { id:'tyrian-residences', barrido:true, render:null, foto:null, image:null,
    name:'Tyrian Residences', sub:'Prestige Expo · BZH',
    municipio:'Estepona', zona:'Beachfront', lat:36.4268068, lng:-5.1468484,
    coordNota:'Coordinate on Estepona town centre: the sources place the building beside the boulevard, on the seafront, without publishing the exact point.',
    promotor:'Prestige Expo Group + Grupo BZH', estudio:'Yodezeen + Arata Arquitectura', estudioFuente:'ejeprime.com',
    derechosGolf:null, derechosNota:'No course of its own and no published golf rights.',
    tipologia:'Villas en altura 300–1.060 m²', unidades:40,
    precio:'€3,500,000 – €6,900,000', precioDesde:'€3,500,000', precioEstimado:false, eurM2:11700,
    eurM2Nota:'€/m² derived from the entry price against the smallest unit (300 m²).',
    estado:'Under construction · 60% sold', entrega:'2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['valle-romano-golf',13,''],['azata-golf',13,''],['estepona-golf',14,'']],
    d:{ a5:0,  a5why:'Beachfront in Estepona, not in a golf resort.',
        a6:5,  a6why:'Direct exit onto the A-7 through Estepona town.',
        b1:9,  b1why:'Branded residences with hotel operation by Besaya and architecture by Yodezeen; a service brand, not a fashion or automotive one.',
        b4:10, b4why:'Spa, hotel-style service and collector garages.' },
    tags:['Branded · Besaya','40 unidades','Beachfront'],
    rationale:'El proyecto con el bloque de proyecto más completo de la costa este de la guía y, a la vez, el de peor entorno de golf: <strong>three courses within fifteen minutes and none better than ★★</strong>. Estar en primera línea de playa en el centro de Estepona aleja de todo lo demas. Es la prueba de que la matriz no premia el lujo por si solo.' },

  { id:'aurea-villas', barrido:true, render:null, foto:null, image:null,
    name:'Aurea Villas', sub:'Estepona Golf',
    municipio:'Estepona', zona:'Estepona Golf', lat:36.4129726, lng:-5.2121882,
    promotor:null, promotorNota:'Developer not documented in the sources consulted.',
    estudio:null, estudioNota:'Architectural practice not documented in the sources consulted.',
    derechosGolf:null, derechosNota:'On the edge of Estepona Golf, with no golf rights published for owners.',
    tipologia:'Three-bedroom villas with basement', unidades:10,
    precio:'€1,440,000 – €1,850,000', precioDesde:'€1,440,000', precioEstimado:false, eurM2:3600,
    eurM2Nota:'€/m² derived from the entry price against the 400 m² built area the sources publish.',
    estado:'Under construction', entrega:'2026',
    campoPropio:'estepona-golf', campoPropioPendiente:null,
    cursos:[['estepona-golf',0,'A pie de campo'],['azata-golf',9,''],['valle-romano-golf',11,''],['finca-cortesin-golf',12,''],['dona-julia-golf',12,''],['la-duquesa-golf',14,'']],
    d:{ a5:5,  a5why:'On the edge of Estepona Golf, without being in-resort.',
        a6:5,  a6why:'Direct exit onto the A-7 from Estepona Golf.',
        b1:3,  b1why:'No documented practice and no brand: the product sells on plot and floor area.',
        b4:3,  b4why:'Pool and customisable basement to each villa; no resort communal areas.' },
    tags:['A pie de campo','10 villas','Estepona Golf'],
    rationale:'Diez villas a pie del campo, con Finca Cortesín ★★★★ a doce minutos y seis campos en el radio. La exclusividad de la escala le da el maximo, pero el bloque de proyecto se queda corto: sin firma, sin marca y sin zonas comunes. <strong>Very playable golf, with a product that has no story</strong>.' },

  { id:'altura-160', barrido:true, render:null, foto:null, image:null,
    name:'Altura 160', sub:'Señorío de Cifuentes',
    municipio:'Benahavís', zona:'La Hacienda del Señorío de Cifuentes', lat:36.4870132, lng:-5.0425696,
    coordNota:'Coordinate on Cerro de los Jaralillos, which is the published reference for the development.',
    promotor:'Taylor Wimpey España', estudio:null, estudioNota:'Architectural practice not documented in the sources consulted.',
    derechosGolf:null, derechosNota:'No course of its own and no published golf rights.',
    tipologia:'Two- to three-bedroom apartments and penthouses', unidades:60,
    precio:'desde €585,000', precioDesde:'€585,000', precioEstimado:false, eurM2:4900,
    eurM2Nota:'€/m² estimated against around 120 m² built: the sources publish the price but not the average floor area.',
    estado:'For sale', entrega:null,
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['la-quinta-golf',9,''],['los-arqueros-golf',10,''],['el-higueral',11,''],['real-club-de-golf-guadalmina-sur',11,''],['guadalmina-norte',11,''],['los-naranjos-golf',11,''],['magna-marbella',12,''],['dama-de-noche',12,''],['atalaya-old',13,''],['atalaya-new',13,''],['real-club-de-golf-las-brisas',13,''],['el-paraiso-golf',14,''],['aloha-golf-club',14,'']],
    d:{ a5:0,  a5why:'Inside Señorío de Cifuentes, which is not a golf resort.',
        a6:4,  a6why:'The Benahavís road down to the A-7, short and with no towns to cross.',
        b1:4,  b1why:'Taylor Wimpey, an international volume developer; no distinctive signature.',
        b4:7,  b4why:'Four pools, gardens, a bar and a concierge inside Señorío de Cifuentes.' },
    tags:['13 campos en 15′','Taylor Wimpey','Desde €585.000'],
    rationale:'<strong>The cheapest way into the guide</strong> y con trece campos en quince minutos, el segundo entorno más denso de la lista. Le pasa factura el reparto: los buenos de ese radio —Las Brisas y Aloha— son de socios, y el producto es de volumen. Mucho golf alrededor y poco argumento propio.' }

];

/* En espera de la proxima edicion. Cumplen el criterio de inclusion pero les
   falta el dato que decide su puesto, asi que entrar ahora seria estimarlo.
   Se publican con su motivo: el hueco tambien es informacion. */
const EN_ESPERA = [
  { name:'Amenabar Cortesín', municipio:'Casares', motivo:'Inside Finca Cortesín, with no published price: sales have not opened.' },
  { name:'Azurean Marbella', municipio:'Benahavís', motivo:'A Hyatt-branded scheme in pre-launch, with no published price.' },
  { name:'Isla Bela', municipio:'Marbella', motivo:'113 homes by Gestilar in Nueva Andalucía, with no published sale price.' }
];

/* ═══════════════════════════════════════════════════════════════
   MOTOR DE PUNTUACIÓN · MATRIZ v1.1
   Nada está escrito a mano salvo A5, A6, B1 y B4 (criterios
   editoriales, cada uno con su justificación visible en la ficha).
   A1–A4, B2 y B3 se calculan aquí a partir de los datos. Cambiar un
   dato cambia el ranking: ésa es la garantía de reproducibilidad.
═══════════════════════════════════════════════════════════════ */

// Coeficiente de acceso: cuánto vale un campo que quizá no puedas reservar.
const ACCESO = {
  'Resort': 1, 'Luxury resort': 1, 'Public': 1, 'Municipal': 1, 'Semi-private': 1,
  'Private / resort': 1, 'Private / hotel': 1,
  'Members-only': 0.5, 'Privado': 0.5,
  'Strictly private': 0
};
const ACCESO_LBL = { 1: 'Bookable', 0.5: 'Members only', 0: 'Closed' };
// Código de color de la columna "Holes · membership": verde → naranja claro → naranja oscuro → rojo.
function nivelAcceso(m) {
  if (m === 'Public' || m === 'Municipal') return 'pub';
  if (m === 'Strictly private') return 'cer';
  if (m === 'Members-only' || m === 'Privado') return 'soc';
  return 'res';   // Resort, Resort de lujo, Semi-privado, Privado / resort, Privado / hotel
}

// Una regla incumplida detiene el cálculo. Preferimos no publicar a publicar mal:
// un dato que viole la matriz tiene que romper el build, no colarse en silencio.
function exigir(cond, msg) {
  if (!cond) throw new Error('Matrix · rule not met: ' + msg);
}

const CX = {};
COURSES.forEach(c => {
  // Desconocido nunca es máxima puntuación: una membresía nueva sin coeficiente
  // declarado paraba antes en 1 (acceso total) y habría inflado A2, A3 y A5.
  exigir(ACCESO[c.membresia] !== undefined, `membresía sin coeficiente de acceso declarado: "${c.membresia}" (${c.name}).`);
  exigir(c.stars >= 1 && c.stars <= 4, `estrellas fuera de escala en ${c.name}: ${c.stars}.`);
  exigir(Number.isFinite(c.lat) && Number.isFinite(c.lng), `coordenada no numérica en ${c.name}.`);
  c.acceso = ACCESO[c.membresia];
  c.foto = FOTOS_CAMPO[c.id] || null;
  exigir(!CX[c.id], `identificador de campo duplicado: ${c.id}.`);
  CX[c.id] = c;
});

const ESC_A1 = { 4: 15, 3: 10, 2: 5, 1: 2 };
const escA2 = e => e >= 3 ? 12 : e >= 2 ? 8 : e >= 1 ? 5 : e > 0 ? 2 : 0;
const escA3 = e => e >= 6 ? 10 : e >= 4 ? 7 : e >= 2 ? 4 : e >= 1 ? 2 : e > 0 ? 1 : 0;
const escA4 = t => t <= 3 ? 8 : t <= 6 ? 6 : t <= 10 ? 4 : t <= 15 ? 2 : 0;
const escB2 = u => u <= 20 ? 10 : u <= 50 ? 7 : u <= 100 ? 4 : 2;
const escB3 = e => e >= 10000 ? 10 : e >= 7000 ? 7 : e >= 5000 ? 5 : e >= 3500 ? 3 : 1;

const r1 = n => Math.round(n * 10) / 10;

PROMOS.forEach(p => {
  const vistos = new Set();
  p.campos = p.cursos.map(([id, min, nota]) => {
    const c = CX[id];
    exigir(c, `campo no encontrado en la base: ${id} (${p.name}).`);
    // Una pareja repetida contaría dos veces en A2 y A3.
    exigir(!vistos.has(id), `pareja promoción–campo duplicada: ${p.name} — ${id}.`);
    vistos.add(id);
    exigir(Number.isFinite(min) && min >= 0, `tiempo inválido de ${p.name} a ${id}: ${min}.`);
    return { ...c, min, nota };
  });
  exigir(p.unidades > 0 && Number.isFinite(p.unidades), `unidades no válidas en ${p.name}: ${p.unidades}.`);
  exigir(p.eurM2 > 0 && Number.isFinite(p.eurM2), `€/m² no válidos en ${p.name}: ${p.eurM2}.`);

  // A1 y A4 sólo consideran campos de ★★+ (fuera pitch & putt y ejecutivos):
  // en un ranking de golf, tener un par-3 de nueve hoyos en la puerta no es golf.
  const elegibles = p.campos.filter(c => c.stars >= 2);
  exigir(elegibles.length, `${p.name} no tiene ningún campo ★★+ en su entorno: no se puede calcular A1 ni A4.`);
  const cercano = elegibles.reduce((a, b) => b.min < a.min ? b : a);

  // Con los tiempos OSRM algunos campos declarados quedan a >15 min: siguen en la
  // ficha (atenuados) pero dejan de computar en los criterios de densidad.
  p.campos.forEach(c => { c.fuera = c.min > 15; });
  const en15 = p.campos.filter(c => !c.fuera);
  const ef4 = en15.filter(c => c.stars === 4).reduce((s, c) => s + c.acceso, 0);
  const ef3 = en15.filter(c => c.stars >= 3).reduce((s, c) => s + c.acceso, 0);

  p.ef4 = r1(ef4); p.ef3 = r1(ef3); p.cercano = cercano;
  p.n4 = en15.filter(c => c.stars === 4).length;
  p.n3 = en15.filter(c => c.stars >= 3).length;
  p.jugables = en15.filter(c => c.acceso === 1).length;
  p.enQuince = en15.length;

  // Las dos restricciones que la metodología anuncia como automáticas y hasta ahora
  // se cumplían a mano, más los topes de cada criterio de juicio.
  [['a5', 10], ['a6', 5], ['b1', 10], ['b4', 10]].forEach(([k, max]) => {
    const v = p.d[k];
    exigir(Number.isFinite(v) && v >= 0 && v <= max, `${k} fuera de rango en ${p.name}: ${v} (máximo ${max}).`);
  });
  exigir(p.d.a5 + p.d.a6 + p.d.b1 + p.d.b4 <= 35,
    `los cuatro criterios editoriales de ${p.name} suman ${p.d.a5 + p.d.a6 + p.d.b1 + p.d.b4}: el tope declarado es 35.`);
  // Lo no entregado no suma: sin campo propio operativo no hay bonus de integración,
  // y una marca anunciada pero no entregada no llega al máximo de firma.
  exigir(!(p.campoPropioPendiente && p.d.a5 > 0),
    `${p.name} puntúa a5=${p.d.a5} con su campo propio aún sin entregar (${p.campoPropioPendiente}).`);
  exigir(!(p.marcaPendiente && p.d.b1 > 7),
    `${p.name} puntúa b1=${p.d.b1} con la marca anunciada pero no entregada: el tope es 7.`);

  p.score = {
    a1: ESC_A1[cercano.stars], a2: escA2(ef4), a3: escA3(ef3), a4: escA4(cercano.min),
    a5: p.d.a5, a6: p.d.a6,
    b1: p.d.b1, b2: escB2(p.unidades), b3: escB3(p.eurM2), b4: p.d.b4
  };
  p.why = {
    a1: `Nearest ★★+ course: ${cercano.name} (${'★'.repeat(cercano.stars)}).`,
    a2: `${p.n4} ★★★★ course${p.n4 === 1 ? '' : 's'} within 15 min; weighted by access = ${p.ef4}.`,
    a3: `${p.n3} ★★★+ course${p.n3 === 1 ? '' : 's'} within 15 min; weighted by access = ${p.ef3}.`,
    a4: `${cercano.min === 0 ? 'In-resort' : cercano.min + ' min'} to ${cercano.name}.`,
    a5: p.d.a5why, a6: p.d.a6why, b1: p.d.b1why,
    b2: `${p.unidades} units.`,
    b3: `≈ €${p.eurM2.toLocaleString('en-GB')}/m².`,
    b4: p.d.b4why
  };
  p.A = p.score.a1 + p.score.a2 + p.score.a3 + p.score.a4 + p.score.a5 + p.score.a6;
  p.B = p.score.b1 + p.score.b2 + p.score.b3 + p.score.b4;
  p.total = p.A + p.B;
});

/* Las estrellas son la escala de campos de la guía, así que van siempre en su
   amarillo —también dentro de los textos, donde hasta ahora salían del color del
   párrafo—. Se marcan una sola vez aquí y no en cada sitio que las pinta. Las
   que van pegadas a un número (un hotel 5★, un tag 'In-resort 4★') son otra
   escala y se quedan como están. */
const marcarEstrellas = t => typeof t === 'string'
  ? t.replace(/([^0-9>]|^)(★+)/g, '$1<span class="star">$2</span>')
  : t;
PROMOS.forEach(p => {
  p.rationale = marcarEstrellas(p.rationale);
  if (p.why) Object.keys(p.why).forEach(k => { p.why[k] = marcarEstrellas(p.why[k]); });
});

/* ── Desempate en cascada ─────────────────────────────────────────
   A igualdad de total manda el golf, que es lo que esta guía mide primero:
   sesenta puntos de sus cien. No es una regla inventada para deshacer
   empates, es la tesis del documento aplicada un escalón más abajo. Si el
   bloque A también empata, decide la calidad del campo de referencia; si
   también, la cercanía; y en último extremo el alfabeto, declarado.
   Dos promociones solo comparten puesto si empatan en los cuatro. */
const desempate = (a, b) =>
  b.total - a.total ||
  b.A - a.A ||
  b.score.a1 - a.score.a1 ||
  a.cercano.min - b.cercano.min ||
  a.name.localeCompare(b.name);
const igualadas = (a, b) =>
  a.total === b.total && a.A === b.A &&
  a.score.a1 === b.score.a1 && a.cercano.min === b.cercano.min;

PROMOS.sort(desempate);
PROMOS.forEach((p, i) => {
  p.rank = (i > 0 && igualadas(p, PROMOS[i - 1])) ? PROMOS[i - 1].rank : i + 1;
  p.top10 = p.rank <= 10;
});
/* Dos promociones pueden acabar en el mismo puesto: con la misma nota la
   matriz no las separa, y el documento no va a fingir un orden que no ha
   calculado. Quien comparte puesto se marca aqui y se dice donde se ve. */
PROMOS.forEach(p => {
  p.empatadas = PROMOS.filter(x => x !== p && x.rank === p.rank && x.top10 === p.top10).map(x => x.name);
});

/* ═══════════════════════════════════
   PRUEBA DE IMPARCIALIDAD (Método) · se calcula, no se escribe
═══════════════════════════════════ */
(() => {
  const el = document.getElementById('pruebaImparcialidad');
  if (!el) return;
  const datos = PROMOS.map(p => ({ name: p.name, d: p.score.a1 + p.score.a2 + p.score.a3 + p.score.a4 + p.score.b2 + p.score.b3, total: p.total }))
    .sort((a, b) => b.d - a.d || a.name.localeCompare(b.name));
  const podioDatos = datos.slice(0, 3).map(x => x.name), podioTotal = PROMOS.slice(0, 3).map(p => p.name);
  const mismoPodio = podioDatos.every(n => podioTotal.includes(n));
  const lider = datos.filter(x => x.d === datos[0].d).map(x => x.name);
  const fmt = xs => xs.length === 1 ? xs[0] : xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1];
  el.innerHTML = `Si se anulan los cuatro criterios editoriales (a<sub>5</sub>, a<sub>6</sub>, b<sub>1</sub>, b<sub>4</sub> = 0) y se ordena solo por los 65 puntos que salen de la base de datos, `
    + `${lider.length > 1 ? `empatan en cabeza <strong>${fmt(lider)}</strong> con ${datos[0].d} puntos` : `sigue primera <strong>${lider[0]}</strong> con ${datos[0].d} puntos`}, `
    + `${mismoPodio ? 'y el podio es el mismo que el publicado' : 'y el podio cambia respecto al publicado'}: `
    + datos.slice(0, 3).map((x, i) => `${x.name} (${x.d})`).join(' · ') + '. '
    // La conclusión se ajusta a lo que el cálculo demuestra: con un empate en la base,
    // lo que acredita es que el podio aguanta, no que el ganador sea ajeno al juicio.
    + (lider.length > 1
      ? `El desempate en cabeza, por tanto, <strong>the editorial block does decide it</strong>: la base deja a ${fmt(lider)} igualadas y son los cuatro criterios de juicio los que ordenan el primer puesto. Lo que esta prueba acredita es que el podio se sostiene sobre los datos, no que el número uno sea independiente de la opinión.`
      : 'The top position is therefore not manufactured by editorial opinion: it holds up without it.');
})();

/* ═══════════════════════════════════
   AUDITORÍA DE INTEGRIDAD (automática)
═══════════════════════════════════ */
const hav = (a, b, c, d) => {
  const R = 6371, dl = (c - a) * Math.PI / 180, dg = (d - b) * Math.PI / 180;
  const x = Math.sin(dl / 2) ** 2 + Math.cos(a * Math.PI / 180) * Math.cos(c * Math.PI / 180) * Math.sin(dg / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};
const AVISOS = [];
PROMOS.forEach(p => {
  if (p.precioEstimado) AVISOS.push({ p: p.name, t: 'Price', m: 'Estimated price: the developer does not publish one.' });
  if (!p.estudio) AVISOS.push({ p: p.name, t: 'Architecture', m: p.estudioNota || 'Architectural practice not documented. B1 rests on the brand, not on the signature.' });
  if (!p.derechosGolf) AVISOS.push({ p: p.name, t: 'Golf rights', m: p.derechosNota || 'Not confirmed whether purchase includes membership or preferential green fees.' });
  if (p.unidadesNota) AVISOS.push({ p: p.name, t: 'Units', m: p.unidadesNota });
  if (p.promotorNota) AVISOS.push({ p: p.name, t: 'Developer', m: p.promotorNota });
  if (p.eurM2Nota) AVISOS.push({ p: p.name, t: 'Price per m²', m: p.eurM2Nota });
  if (p.coordNota) AVISOS.push({ p: p.name, t: 'Coordinate', m: p.coordNota });
  let placeholder = null;
  COURSES.forEach(c => { if (hav(p.lat, p.lng, c.lat, c.lng) < 0.25) placeholder = c.name; });
  if (placeholder) AVISOS.push({ p: p.name, t: 'Coordinate', m: `La coordenada de la promoción coincide con la del campo ${placeholder}: es una posición aproximada, no la parcela.` });
  p.campos.forEach(c => {
    const km = hav(p.lat, p.lng, c.lat, c.lng);
  });
});

/* ═══════════════════════════════════
   RENDER · RANKING (ordenable)
═══════════════════════════════════ */
const rankBody = document.getElementById('rankingBody');
let ordenActual = 'rank', ordenAsc = true;

function pintarRanking() {
  const datos = PROMOS.slice().sort((a, b) => {
    let d = 0;
    if (ordenActual === 'rank') d = a.rank - b.rank;
    else if (ordenActual === 'score') d = b.total - a.total;
    else if (ordenActual === 'precio') d = a.eurM2 - b.eurM2;
    else if (ordenActual === 'golf') d = b.A - a.A;
    else if (ordenActual === 'unidades') d = a.unidades - b.unidades;
    return ordenAsc ? d : -d;
  });
  rankBody.innerHTML = '';
  datos.forEach(p => {
    const stars = '★'.repeat(p.cercano.stars) + `<span class="star-off">${'★'.repeat(4 - p.cercano.stars)}</span>`;
    const row = document.createElement('div');
    row.className = 'ranking-row';
    row.innerHTML = `
      <div class="r-pos">${String(p.rank).padStart(2, '0')}</div>
      <div class="r-name">
        <div class="r-name-title">${p.name}</div>
        <div class="r-name-sub">${p.sub}</div>
      </div>
      <div class="r-loc">${p.municipio}<small>${p.zona}</small></div>
      <div class="r-stars">${stars}<small>${p.cercano.name} · ${ACCESO_LBL[p.cercano.acceso]}</small></div>
      <div class="r-price">${p.precioDesde}<small>${p.precioEstimado ? 'estimado' : 'desde'}</small></div>
      <div class="r-score">
        <div class="r-score-num">${p.total}</div>
        <div class="r-score-bar" style="--barw:${p.total}%"></div>
        <div class="r-score-lbl">/ 100</div>
      </div>`;
    row.addEventListener('click', () => {
      const card = document.getElementById('ficha-' + p.id);
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    rankBody.appendChild(row);
  });
  document.querySelectorAll('.ranking-head [data-sort]').forEach(h => {
    h.classList.toggle('sorted', h.dataset.sort === ordenActual);
    h.dataset.dir = (h.dataset.sort === ordenActual && !ordenAsc) ? 'desc' : 'asc';
  });
}
document.querySelectorAll('.ranking-head [data-sort]').forEach(h => {
  h.addEventListener('click', () => {
    if (ordenActual === h.dataset.sort) ordenAsc = !ordenAsc;
    else { ordenActual = h.dataset.sort; ordenAsc = true; }
    pintarRanking();
  });
});
if (rankBody) pintarRanking();

// Los rótulos de recuento se calculan: con empates, el top 10 puede contener más de diez.
(() => {
  const top = PROMOS.filter(p => p.top10).length;
  const num = n => String(['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'][n] || n);
  const t = document.getElementById('tituloRanking');
  // La primera posicion tiene pieza propia arriba: la lista empieza en la segunda.
  const ultima = PROMOS.filter(p => p.top10).slice(-1)[0];
  const ORD = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
    'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
  const ord = n => ORD[n] || n + 'th';
  if (t) t.innerHTML = `From second place to <em>${ord(ultima.rank)}</em>.`;
  const l = document.getElementById('ledeRanking');
  /* Con empates, la ordenacion competitiva se salta numeros: dos comparten el
     06 y la siguiente va al 08. Visto en la lista parece una errata, asi que se
     dice cuales faltan y por que. Se calcula: sin empates no aparece la frase. */
  const dd = n => String(n).padStart(2, '0');
  const ocupados = new Set(PROMOS.filter(p => p.top10).map(x => x.rank));
  const saltados = [];
  for (let n = 1; n <= ultima.rank; n++) if (!ocupados.has(n)) saltados.push(dd(n));
  // El verbo tiene que concordar con cuantos puestos falten, que no es fijo.
  const faltan = saltados.length === 1
    ? `no existe el puesto ${saltados[0]}`
    : `no existen los puestos ${saltados.slice(0, -1).join(', ')} y ${saltados[saltados.length - 1]}`;
  if (l) l.textContent =
    (saltados.length ? `Los empates comparten posición y la siguiente salta, así que ${faltan}. ` : '') +
    'Open any of them for the criterion-by-criterion breakdown, the arithmetic, and whatever remains unverified.';
  const m = document.getElementById('tituloMapaRanking');
  if (m) m.innerHTML = `All ${num(top)}, <em>on the map</em>.`;

  /* El recuento del lede tambien se calcula: tres cifras a mano en la misma
     frase es donde se cuela la contradiccion. El empate lo explican la marca
     de la tarjeta y el marcador de la ficha, que es donde se ve. */
  /* Los indicadores de portada y el pie salen de la matriz, no del teclado. */
  const kp = document.getElementById('kpiPromos');
  if (kp) kp.textContent = PROMOS.length;
  /* El suelo es el criterio de inclusion —500.000, redondo— y no el precio de la
     promocion mas barata que haya entrado: 520.000 era un accidente de quien
     ocupaba ese puesto, no lo que la guia dice cubrir. El techo si sale del dato,
     porque no hay criterio que lo fije. */
  const SUELO = 500000;
  const pr = PROMOS.map(x => Number(String(x.precioDesde).replace(/[^0-9]/g, ''))).filter(Boolean);
  const mm = n => n >= 1e6 ? (n / 1e6).toFixed(1).replace('.0', '') + 'M' : Math.round(n / 1000) + 'k';
  const kr = document.getElementById('kpiRango');
  if (kr && pr.length) kr.textContent = '\u20ac' + mm(SUELO) + '\u2013' + mm(Math.max(...pr));
  const pie = document.getElementById('pieRecuento');
  if (pie) pie.textContent = `${PROMOS.length} developments assessed \u00b7 top 10 published \u00b7 ${COURSES.length} courses`;

  const h = document.getElementById('ledeHero');
  if (h) h.textContent = `${num(PROMOS.length).replace(/^./, c => c.toUpperCase())} developments scored out of 100. Here is the top 10, in order.`;
  const f = document.getElementById('tituloFichas');
  if (f) f.innerHTML = `${num(PROMOS.length).replace(/^./, c => c.toUpperCase())} fichas, <em>criterio a criterio</em>.`;
})();

/* ═══════════════════════════════════
   RENDER · FICHAS
═══════════════════════════════════ */
const FILAS_A = [['a1', 'Quality of the nearest ★★+ course', 15], ['a2', '★★★★ courses within 15 min · weighted', 12],
  ['a3', '★★★+ courses within 15 min · weighted', 10], ['a4', 'Driving time to the nearest ★★+ course', 8],
  ['a5', 'In-resort or on-course bonus', 10], ['a6', 'Road connections', 5]];
const FILAS_B = [['b1', 'Architecture / brand', 10], ['b2', 'Exclusivity (number of units)', 10],
  ['b3', 'Positioning €/m²', 10], ['b4', 'Amenities', 10]];

const detailGrid = document.getElementById('detailGrid');
// Acordeón nativo: <details>. La cabecera con imagen es el banner cerrado y crece al abrir.
// En la página del ranking solo se publican las promociones del top 10 (las menciones se conservan en los datos).
// El campo de referencia de una promoción (el ★★+ más cercano) se ilustra en su ficha.
// Si el campo tiene segunda imagen registrada, se usa esa; si no, la misma de la página de campos.
function fotoReferencia(p) {
  const c = p.cercano;
  const f = (typeof FOTOS_FICHA !== 'undefined' && FOTOS_FICHA[c.id]) || c.foto;
  if (!f) return '';
  const cuando = c.min === 0 ? 'in-resort' : c.min + '′';
  return `<figure class="dc-ref">
      <img src="${f.src}" alt="${c.name} — ${c.municipio}" loading="lazy"/>
      <figcaption>
        <span class="dc-ref-lbl">Benchmark course</span>
        <strong>${c.name}</strong>
        <span class="dc-ref-meta">${'★'.repeat(c.stars)} · ${cuando} · ${ACCESO_LBL[c.acceso].toLowerCase()}</span>
      </figcaption>
    </figure>`;
}

const PUBLICADAS = PROMOS.filter(p => p.top10);
if (detailGrid) PUBLICADAS.forEach((p, idx) => {
  const card = document.createElement('details');
  card.className = 'detail-card promo';
  card.setAttribute('name', 'promociones');
  card.id = 'ficha-' + p.id;
  // ── La cadena: el retrato del entorno de golf que produce el bloque A ──
  // No es un mapa y no pretende serlo: aquí no hay norte ni costa. Tres
  // variables y ninguna más, para que se lea sin leyenda: el radio son los
  // minutos —el centro es el cero, así que un campo in-resort queda pegado al
  // núcleo—, el tamaño del nodo son las estrellas y el relleno dice si se
  // puede reservar sin ser socio. Cada promoción da una figura distinta porque
  // los datos son distintos, no porque se dibuje distinto.
  const adn = () => {
    const R0 = 22, R15 = 120, C = 150;           // núcleo, anillo de 15′ y centro
    const radio = m => Math.min(R0 + (m / 15) * (R15 - R0), 134);
    const rNodo = { 1: 3.6, 2: 5, 3: 6.6, 4: 8.6 };
    const campos = p.campos.slice().sort((a, b) => a.min - b.min || b.stars - a.stars);
    const paso = (Math.PI * 2) / campos.length;
    // Dos versiones del mismo renglon: una en texto plano para el aria-label y
    // otra con las estrellas marcadas como en el resto de la guia, porque el
    // pintor de estrellas solo pasa una vez al cargar y esto se escribe despues.
    const ficha = c => `${c.name} · ${c.min === 0 ? 'in-resort' : c.min + '′'} · ${'★'.repeat(c.stars)} · ${ACCESO_LBL[c.acceso].toLowerCase()}`;
    const fichaHtml = c => `<b>${c.name}</b> · ${c.min === 0 ? 'in-resort' : c.min + '′'} · <span class="star">${'★'.repeat(c.stars)}</span><span class="star-off"><span class="star">${'★'.repeat(4 - c.stars)}</span></span> · ${ACCESO_LBL[c.acceso].toLowerCase()}`;
    const nodos = campos.map((c, i) => {
      // Medio paso de desfase: así el eje vertical queda libre para las
      // etiquetas de los anillos y ningún nodo se sienta encima de ellas.
      const ang = -Math.PI / 2 + paso / 2 + i * paso;
      const r = radio(c.min), x = +(C + Math.cos(ang) * r).toFixed(1), y = +(C + Math.sin(ang) * r).toFixed(1);
      const abierto = c.acceso === 1;
      const cls = `adn-n adn-s${c.stars}${abierto ? '' : ' adn-cerrado'}${c.fuera ? ' adn-fuera' : ''}`;
      const ref = c === p.cercano ? `<circle class="adn-ref" cx="${x}" cy="${y}" r="${(rNodo[c.stars] + 4.5).toFixed(1)}"/>` : '';
      // El área de toque no es el nodo —que puede medir 3,6 px— sino un disco
      // transparente de 26: en táctil no hay puntero fino que valga.
      return `<g class="adn-g" tabindex="0" role="button" aria-label="${ficha(c)}" data-ficha="${fichaHtml(c).replace(/"/g, '&quot;')}">
        <line class="adn-l${abierto ? '' : ' adn-l-socios'}" x1="${C}" y1="${C}" x2="${x}" y2="${y}" pathLength="1"/>
        ${ref}<circle class="${cls}" cx="${x}" cy="${y}" r="${rNodo[c.stars]}"/>
        <circle class="adn-golpe" cx="${x}" cy="${y}" r="13"/>
      </g>`;
    }).join('');
    const anillos = [5, 10, 15].map(m => `<circle class="adn-anillo" cx="${C}" cy="${C}" r="${radio(m).toFixed(1)}"/>
      <text class="adn-anillo-t" x="${C + 3}" y="${(C - radio(m) + 3).toFixed(1)}">${m}′</text>`).join('');
    const resumen = `${p.name}: ${p.campos.length} campos en el entorno, ${p.jugables} reservables sin ser socio; el más cercano, ${p.cercano.name}, a ${p.cercano.min === 0 ? 'cero minutos' : p.cercano.min + ' minutos'}.`;
    return `<figure class="adn">
      <svg class="adn-svg" viewBox="0 0 300 300" role="group" aria-label="${resumen}">
        <g class="adn-base">${anillos}</g>${nodos}
        <circle class="adn-core" cx="${C}" cy="${C}" r="16"/>
        <text class="adn-core-t" x="${C}" y="${C + 4}">${p.top10 ? String(p.rank).padStart(2, '0') : p.rank}</text>
      </svg>
      <figcaption>
        <span class="adn-foco" data-reposo="${fichaHtml(p.cercano).replace(/"/g, '&quot;')}">${fichaHtml(p.cercano)}</span>
        <span class="adn-leyenda">Radius, minutes · size, stars · hollow, members-only</span>
      </figcaption>
    </figure>`;
  };

  // Cada criterio en una linea: codigo, enunciado, puntos, barra y el porque
  // debajo. Antes el porque estaba plegado dentro de un <details> y la tarjeta
  // quedaba desconectada de lo que explicaba.
  const tira = filas => filas.map(([k, lbl, mx]) => `<div class="crit">
      <span class="crit-cod">${k.toUpperCase()}</span>
      <span class="crit-lbl">${lbl}</span>
      <strong>${p.score[k]}<small>/${mx}</small></strong>
      <span class="measure-track" aria-hidden="true"><span class="measure-fill" style="--ratio:${p.score[k] / mx}"></span></span>
      <p>${p.why[k]}</p>
    </div>`).join('');
  // El campo de referencia es la prueba de la que cuelga medio bloque A, asi que
  // abre el bloque a lo ancho y con su ficha encima de la imagen, no como una
  // miniatura de 270 px en una columna.
  const heroCampo = () => {
    const c = p.cercano;
    const f = (typeof FOTOS_FICHA !== 'undefined' && FOTOS_FICHA[c.id]) || c.foto;
    const ficha = [
      '★'.repeat(c.stars) + `<span class="star-off">${'★'.repeat(4 - c.stars)}</span>`,
      c.min === 0 ? 'in-resort' : c.min + '′',
      ACCESO_LBL[c.acceso].toLowerCase(),
      c.hoyos,
      c.disenador ? c.disenador + (c.ano ? ', ' + c.ano : '') : null,
      c.gf ? 'green fee €' + c.gf : null
    ].filter(Boolean).join(' · ');
    return `<figure class="golf-hero${f ? '' : ' sin-img'}">
      ${f ? `<img src="${f.src}" alt="${c.name} — ${c.municipio}" loading="lazy" onerror="this.closest('.golf-hero').classList.add('sin-img')"/>` : ''}
      <figcaption>
        <span class="gh-lbl">Benchmark course</span>
        <h4 class="gh-nombre">${c.name}</h4>
        <span class="gh-meta">${ficha}</span>
        ${c.palmares && c.palmares !== '—' ? `<span class="gh-palmares">${c.palmares}</span>` : ''}
      </figcaption>
    </figure>`;
  };

  // Cuatro pases en la cabecera. Hoy solo hay un render por promocion, asi que
  // los tres restantes se quedan en un hueco gris con el nombre y su numero: se
  // iran sustituyendo segun lleguen las imagenes, sin tocar el codigo. En cuanto
  // FOTOS_PROMO traiga mas de una para una promocion, entran por orden.
  const PASES = 4;
  const galeria = () => {
    const reales = (typeof FOTOS_PROMO !== 'undefined' && FOTOS_PROMO[p.id]) ||
      (media.src ? [{ src: media.src, pie: media.pie, cred: media.tag }] : []);
    return Array.from({ length: Math.max(PASES, reales.length) }, (_, i) => reales[i] || null);
  };
  const media = p.render
    ? { src: p.image, tag: '© ' + p.render.dominio, pie: p.render.pie, nota: 'Render del promotor · pendiente de autorización' }
    : (p.foto
      ? { src: p.foto.src, tag: 'Area image', pie: p.foto.pie, nota: 'Not an image of the development' }
      : { src: p.image, tag: 'Placeholder image', pie: null, nota: null });
  card.innerHTML = `
    <summary class="promo-banner">
    <div class="dc-flip">
      <div class="dc-flip-inner">
        <div class="dc-face dc-front">
          <span class="dc-f-linea">
            <span class="dc-f-label">${p.top10 ? '#' + String(p.rank).padStart(2, '0') : '#' + p.rank + ' · Mención'}</span>
            <span class="dc-f-name">${p.name}</span>
            <span class="dc-f-estrellas">${'★'.repeat(p.cercano.stars)}<span class="star-off">${'★'.repeat(4 - p.cercano.stars)}</span></span>
            <span class="dc-f-loc">${p.municipio}</span>
            ${p.empatadas.length ? '<span class="dc-empate" title="Tie: same score as ' + p.empatadas.join(' y ') + '">empate</span>' : ''}
          </span>
          <span class="dc-f-nota">${p.total}<small>/100</small></span>
        </div>
        <div class="dc-face dc-back" aria-hidden="true">
          <span class="dc-f-nota">${p.total}<small>/100</small></span>
          <div class="dc-b-prueba">
            <span class="dc-f-label">Benchmark course</span>
            <span class="dc-f-prueba">${p.cercano.name} · ${p.cercano.min === 0 ? 'in-resort' : p.cercano.min + '′'} · ${'★'.repeat(p.cercano.stars)}<span class="star-off">${'★'.repeat(4 - p.cercano.stars)}</span> · ${ACCESO_LBL[p.cercano.acceso].toLowerCase()}</span>
          </div>
        </div>
      </div>
      <span class="dc-f-plus" aria-hidden="true">+</span>
    </div>
    <header class="dc-head">
      <div class="dc-slides">${galeria().map((g, i) => g
        ? `<figure class="dc-slide${i ? '' : ' is-on'}"><img src="${g.src}" alt="${(g.pie || p.name + ' — ' + p.municipio).replace(/"/g, '&quot;')}"${i ? ' loading="lazy"' : ''}
             onerror="this.closest('.dc-slide').classList.add('sin-img')"/></figure>`
        : `<figure class="dc-slide dc-hueco${i ? '' : ' is-on'}" aria-label="Imagen ${i + 1} pendiente"><span class="dc-hueco-n">${String(i + 1).padStart(2, '0')}</span><span class="dc-hueco-t">${p.name}</span></figure>`).join('')}</div>
      <div class="dc-pases">
        <button type="button" class="dc-pase-b" data-paso="-1" aria-label="Imagen anterior">‹</button>
        <span class="dc-pase-n" aria-live="polite">1 / ${galeria().length}</span>
        <button type="button" class="dc-pase-b" data-paso="1" aria-label="Imagen siguiente">›</button>
      </div>
      <div class="dc-head-inner">
        <h3 class="dc-title"><span class="dc-t-rank">${p.top10 ? '#' + String(p.rank).padStart(2, '0') : '#' + p.rank + ' · Mención'}</span> <span class="dc-t-name">${p.name}</span> <span class="dc-t-loc">${p.municipio}</span></h3>
        <div class="dc-loc"><span class="dc-loc-extra">${p.zona} · ${p.sub}</span></div>
      </div>
      <div class="dc-score-overlay">${p.total}<small>/ 100</small></div>
    </header>
    </summary>
    <div class="dc-body compact-body">

      <section class="fb fb-proyecto">
        <header class="fb-cab">
          <span class="account-step">01 · The development</span>
          <span class="fb-tit">What you are buying, and what counts towards the score</span>
          <span class="fb-nota">${p.B}<small>/40</small></span>
          <span class="measure-track" aria-hidden="true"><span class="measure-fill" style="--ratio:${p.B / 40}"></span></span>
        </header>
        <dl class="project-data">
          <div><dt>Developer</dt><dd>${p.promotor || 'Not documented'}${p.promotorGrupo ? `<small>${p.promotorGrupo}</small>` : ''}</dd></div><div><dt>Architecture</dt><dd>${p.estudio || 'No acreditada'}</dd></div>
          <div><dt>Property type</dt><dd>${p.tipologia}</dd></div><div><dt>Status</dt><dd>${p.estado} · ${p.entrega}</dd></div>
          <div><dt>From</dt><dd>${p.precioDesde}${p.precioEstimado ? '<small>Estimated price</small>' : '<small>Guide price</small>'}</dd></div>
          <div><dt>Price range</dt><dd class="dd-texto">${p.precio}</dd></div>
          <div><dt>Positioning</dt><dd>€${p.eurM2.toLocaleString('en-GB')}<small>per m²</small></dd></div>
          <div><dt>Units</dt><dd>${p.unidades}${p.unidadesNota ? '<small>' + p.unidadesNota + '</small>' : '<small>whole development</small>'}</dd></div>
        </dl>
        <div class="crit-tira">${tira(FILAS_B)}</div>
        <div class="fb-pie">
          <p class="project-rights"><strong>Golf rights.</strong> ${p.derechosGolf || p.derechosNota || 'Not published by the developer.'}</p>
          <div class="fb-rasgos">
            <span class="cm-lbl">What sets it apart</span>
            <div class="dc-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          </div>
        </div>
      </section>

      <section class="fb fb-golf">
        <header class="fb-cab">
          <span class="account-step">02 · The golf</span>
          <span class="fb-tit">The setting that scores, and the course that proves it</span>
          <span class="fb-nota">${p.A}<small>/60</small></span>
          <span class="measure-track" aria-hidden="true"><span class="measure-fill" style="--ratio:${p.A / 60}"></span></span>
        </header>
        ${heroCampo()}
        <div class="fb-golf-top">
          ${adn()}
          <div class="fb-golf-col">
            <dl class="quick-facts">
              <div><dt>Distance to the benchmark</dt><dd>${p.cercano.min === 0 ? 'In-resort' : p.cercano.min + '′'}<small>${ACCESO_LBL[p.cercano.acceso].toLowerCase()} · ${'★'.repeat(p.cercano.stars)}</small></dd></div>
              <div><dt>★★★+ courses within 15 min</dt><dd>${p.n3}<small>of ${p.enQuince} inside the threshold</small></dd></div>
              <div><dt>Bookable without membership</dt><dd>${p.jugables}<small>of ${p.enQuince}</small></dd></div>
            </dl>
            <div class="crit-tira">${tira(FILAS_A)}</div>
          </div>
        </div>
      </section>

      <section class="fb fb-cuenta">
        <span class="account-step">03 · The arithmetic</span>
        <div class="cm">
          <div class="cm-partes">
            <div class="cm-parte is-golf">
              <span class="cm-lbl">A · Golf setting</span>
              <strong>${p.A}<small>/60</small></strong>
              <span class="measure-track" aria-hidden="true"><span class="measure-fill" style="--ratio:${p.A / 60}"></span></span>
            </div>
            <div class="cm-parte">
              <span class="cm-lbl">B · Development quality</span>
              <strong>${p.B}<small>/40</small></strong>
              <span class="measure-track" aria-hidden="true"><span class="measure-fill" style="--ratio:${p.B / 40}"></span></span>
            </div>
          </div>
          <div class="cm-total">
            <strong>${p.total}<small>/100</small></strong>
            <span class="cm-lbl">${p.top10 ? 'Position ' + String(p.rank).padStart(2, '0') + ' of ' + PUBLICADAS.length : 'Mención honorífica'}</span>
            ${p.empatadas.length ? `<span class="cm-empate">Empate técnico con ${p.empatadas.join(' y ')}: same score, ${p.total} out of 100.</span>` : ''}
          </div>
        </div>
      </section>

      <div class="promo-sections">
      <details class="promo-section" name="lectura-${p.id}"><summary><span>01</span>Courses within fifteen minutes<small>${p.enQuince} inside the threshold</small></summary><div class="promo-section-body dc-courses">
        <div class="dc-courses-title">Courses within 15 minutes by car</div>
        ${p.campos.slice().sort((a, b) => a.min - b.min).map(c => {
          const t = c.nota === 'In-resort' ? 'In-resort' : c.min + ' min' + (c.fuera ? ' · fuera de 15′' : '');
          const nota = c.nota && !['In-resort', 'A pie'].includes(c.nota) ? ` <em>· ${c.nota}</em>` : '';
          return `<div class="course-mini${c.fuera ? ' pendiente' : ''}">
            <div class="course-mini-name">${c.name}${nota}<span class="acc acc-${String(c.acceso).replace('.', '')}">${ACCESO_LBL[c.acceso]}</span></div>
            <div class="course-mini-time">${t}</div>
            <div class="course-mini-stars">${'★'.repeat(c.stars)}<span class="star-off">${'★'.repeat(4 - c.stars)}</span></div>
          </div>`;
        }).join('')}
        ${p.campoPropioPendiente ? `<div class="course-mini pendiente"><div class="course-mini-name">${p.campoPropioPendiente}</div><div class="course-mini-time">—</div><div class="course-mini-stars">—</div></div>` : ''}
        <p class="account-footnote">OSRM driving times; they do not model congestion. Beyond 15 min: visible, but it does not count towards the densities.</p>
      </div></details>
      <details class="promo-section" name="lectura-${p.id}"><summary><span>02</span>Editorial view<small>Context and caveats</small></summary><div class="promo-section-body">
        <div class="dc-rationale">${p.rationale}</div>
        <ul class="project-warnings">${AVISOS.filter(a => a.p === p.name && a.t !== 'Image').map(a => `<li><strong>${a.t}:</strong> ${a.m}</li>`).join('')}</ul>
      </div></details>
      </div>
      <nav class="ficha-pie" aria-label="Back to the ranking">
        ${idx > 0 ? `<button type="button" class="fp-ant" data-ir-ficha="${PUBLICADAS[idx - 1].id}">← Previous · #${String(PUBLICADAS[idx - 1].rank).padStart(2, '0')} ${PUBLICADAS[idx - 1].name}</button>` : '<span class="fp-ant fp-ant-vacio"></span>'}
        <button type="button" class="fp-cta fp-vuelta" data-cerrar-ficha><small>← Back to</small><b>The ranking</b></button>
        ${PUBLICADAS[idx + 1]
          ? `<button type="button" class="fp-cta fp-sig" data-ir-ficha="${PUBLICADAS[idx + 1].id}"><small>Next in the ranking</small><b>#${String(PUBLICADAS[idx + 1].rank).padStart(2, '0')} · ${PUBLICADAS[idx + 1].name}</b></button>`
          : `<a class="fp-cta fp-sig" href="fuentes.html"><small>And to check it</small><b>The sources →</b></a>`}
      </nav>
    </div>`;
  detailGrid.appendChild(card);
});

/* ═══════════════════════════════════
   LA GANADORA, CON PIEZA PROPIA
   El documento anuncia un veredicto durante tres páginas y lo soltaba como
   primera fila de once tarjetas iguales. Aquí el primer puesto tiene su
   escenario —banda con imagen, nombre a tamaño de portada y la nota como
   cifra grande— y la lista arranca en el segundo.
   No se invierte el orden: en un ranking puntuado el primero fija la escala,
   y quien manda sobre el scroll es el lector. Lo que faltaba no era suspense,
   era ceremonia.
   Todo sale de PROMOS, así que si cambia un dato cambia la pieza sola.
═══════════════════════════════════ */
(function () {
  const destino = document.getElementById('ganadora');
  if (!destino || !PUBLICADAS.length) return;

  const p = PUBLICADAS[0], segunda = PUBLICADAS[1], c = p.cercano;
  const dosCifras = n => String(n).padStart(2, '0');
  const pct = (v, max) => Math.round(v / max * 100);
  const enumerar = xs => xs.length === 1 ? xs[0] : xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1];
  const estrellas = n =>
    `<span class="star">${'★'.repeat(n)}</span>` +
    (n < 4 ? `<span class="star-off"><span class="star">${'★'.repeat(4 - n)}</span></span>` : '');

  /* ── El editorial, a la cabecera de la sección ────────────────────
     El texto ya viene con su primera frase en <strong>: es el titular de la
     pieza, no una negrita decorativa. Se saca de ahí y sube a tamaño de
     display, y lo que queda —la prueba— corre al lado como cuerpo. Una
     afirmación grande y su respaldo, que es la jerarquía que el texto ya
     tenía escrita. */
  const corte = p.rationale.match(/^\s*<strong>(.*?)<\/strong>\s*([\s\S]*)$/);
  const titular = corte ? corte[1].replace(/\.$/, '') : '';
  /* Prueba 24/09: el editorial vive dentro de la banda de imagen, arriba a
     la derecha, sobre el velo. La pieza abre por la foto y no por un bloque
     gris de texto, y se ahorra la altura de ese bloque sin esconder nada. */
  const entradilla = `
      <div class="gana-editorial">
        <span class="gana-lbl">First place · Edition #01</span>
        ${titular ? `<p class="ver-titular">${titular}</p>` : ''}
        <p class="ver-cuerpo">${corte ? corte[2] : p.rationale}</p>
      </div>`;

  /* ── Por qué gana ────────────────────────────────────────
     La frase se construye desde los datos y no se escribe a mano: si mañana
     cambia quién encabeza cada bloque, cambia el texto con él. */
  const lidera = PUBLICADAS.slice().sort((a, b) => b.A - a.A)[0];
  const techoB = Math.max(...PUBLICADAS.map(x => x.B));
  const empatadas = PUBLICADAS.filter(x => x.B === techoB && x !== p).map(x => x.name);
  const ventaja = p.total - segunda.total;
  const CIFRA = ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
  const enPuntos = n => n === 1 ? 'un punto' : (CIFRA[n] || n) + ' puntos';

  let razon;
  if (lidera !== p && p.B === techoB) {
    razon = `<strong>The highest development score in the ranking:</strong> ${p.B} de 40` +
      (empatadas.length ? `, empatada con ${enumerar(empatadas)}` : '') + '. ' +
      `En golf suma ${p.A} de 60, por detrás de los ${lidera.A} de ${lidera.name}; ` +
      `la ventaja de ${enPuntos(ventaja)} sobre la segunda sale de la otra mitad de la matriz.`;
  } else if (p.A === Math.max(...PUBLICADAS.map(x => x.A)) && p.B === techoB) {
    razon = `<strong>It wins both blocks.</strong> ${p.A} de 60 en entorno de golf y ${p.B} de 40 en proyecto: ` +
      `nadie más encabeza las dos mitades de la matriz. ${enPuntos(ventaja).replace(/^./, c => c.toUpperCase())} sobre la segunda.`;
  } else {
    razon = `<strong>${p.A} de 60 en entorno de golf y ${p.B} de 40 en proyecto.</strong> ` +
      `${enPuntos(ventaja).replace(/^./, c => c.toUpperCase())} sobre ${segunda.name}, que es la segunda.`;
  }

  /* Descompone el total en sus dos mitades: al ir las dos barras sobre el
     mismo ancho se ve cuál de los dos bloques rinde más en proporción, que
     es justo lo que cuenta el texto de al lado. */
  const mitades = `
    <figure class="gfx">
      <figcaption class="gana-rot">Where the ${p.total} comes from</figcaption>
      <div class="gfx-mitades">
        <div class="gfx-fila">
          <span class="gfx-lbl">Golf setting</span>
          <span class="gfx-cifra">${p.A}<small>/60</small></span>
          <span class="gfx-track"><span class="gfx-fill gfx-golf" style="width:${pct(p.A, 60)}%"></span></span>
        </div>
        <div class="gfx-fila">
          <span class="gfx-lbl">The development</span>
          <span class="gfx-cifra">${p.B}<small>/40</small></span>
          <span class="gfx-track"><span class="gfx-fill gfx-proy" style="width:${pct(p.B, 40)}%"></span></span>
        </div>
      </div>
      <p class="gfx-pie">As a share of the maximum available, the development scores ${pct(p.B, 40)}% and the golf setting ${pct(p.A, 60)}%.</p>
    </figure>`;

  /* Cada dato con su etiqueta, en la misma rejilla que la ficha del proyecto:
     una línea de datos seguidos no dice qué es cada cosa. */
  const dato = (t, v, sub) => v ? `<div><dt>${t}</dt><dd>${v}${sub ? `<small>${sub}</small>` : ''}</dd></div>` : '';
  const tecnica = [
    dato('Developer', p.promotor || 'Not documented', p.promotorGrupo),
    dato('Architecture', p.estudio),
    dato('Property type', p.tipologia),
    dato('Units', p.unidades, 'desarrollo completo'),
    dato('Status', p.estado, p.entrega ? 'entrega ' + p.entrega : ''),
    dato('From', p.precioDesde, p.precio),
    dato('Positioning', '€' + p.eurM2.toLocaleString('en-GB'), 'por m²'),
    dato('Benchmark course', estrellas(c.stars),
      `${c.name} · ${c.min === 0 ? 'in-resort' : c.min + '′'}`)
  ].join('');

  const foto = (typeof FOTOS_PROMO !== 'undefined' && FOTOS_PROMO[p.id] && FOTOS_PROMO[p.id][0]) || null;

  destino.innerHTML = `
    <div class="gana">
      <figure class="gana-banda">
        <img src="${foto ? foto.src : p.image}" alt="${p.name} — ${p.municipio}" loading="eager"/>
        ${entradilla}
        <figcaption class="gana-cuerpo">
          <div>
            <h3 class="gana-nombre"><span class="gana-puesto">#${dosCifras(p.rank)}</span> ${p.name}</h3>
            <span class="gana-loc">${p.municipio}${p.zona ? ' · ' + p.zona : ''}</span>
          </div>
          <div class="gana-marcador">${p.total}<small>/100</small></div>
        </figcaption>
      </figure>

      <div class="gana-intro">
        ${mitades}
      </div>

      <div class="gana-acciones">
        <a class="gana-cta" href="#f/${p.id}" data-abrir-ganadora="${p.id}">
          <b>See the full profile</b>
          <span>All ten criteria, one by one →</span>
        </a>
      </div>
    </div>`;

  /* La tarjeta del primero sale de la lista pero se queda en el DOM: abierta
     sigue siendo la capa a pantalla completa de siempre, y la llamada de
     arriba la necesita entera para poder abrirla. */
  const tarjeta = document.getElementById('ficha-' + p.id);
  if (tarjeta) tarjeta.classList.add('gana-fuera');

  destino.addEventListener('click', e => {
    if (!e.target.closest('[data-abrir-ganadora]') || !tarjeta) return;
    e.preventDefault();
    // El 'toggle' que convierte la tarjeta en capa llega en una tarea aparte y
    // el navegador puede pintar antes: durante ese instante la tarjeta salia
    // en flujo, bajo la pieza de la ganadora. Se fija el estado de capa en el
    // mismo clic; el 'toggle' posterior solo lo confirma.
    const raiz = document.documentElement;
    raiz.style.setProperty('--barra', (window.innerWidth - raiz.clientWidth) + 'px');
    tarjeta.open = true;
    raiz.classList.add('ficha-abierta');
    tarjeta.scrollTop = 0;
  });
})();

/* ═══════════════════════════════════
   LA FICHA ABIERTA, A PANTALLA COMPLETA
   Una ficha mide unas 2.100 px: desplegada dentro de la lista empujaba diez
   pantallas de contenido entre un puesto y el siguiente y se perdia el sitio.
   Abierta pasa a capa fija con scroll propio; la lista se queda debajo, quieta,
   y al cerrar apareces donde estabas. El <details> sigue siendo el mecanismo:
   sin JS y sin CSS esto sigue siendo un acordeon.
════════════════════════════════════ */
(function () {
  if (!detailGrid) return;
  const raiz = document.documentElement;
  const abierta = () => detailGrid.querySelector('details.promo[open]');

  /* Volver debe devolverte donde estabas. Al abrir, el documento se desplaza
     medio millar de pixeles y al cerrar se quedaba ahi, asi que salias de la
     ficha en un punto de la lista que no habias elegido. Se guarda la ultima
     posicion con la lista a la vista —no la del momento de abrir, que ya
     llega movida— y se restituye al cerrar. */
  let vuelta = 0;
  window.addEventListener('scroll', () => {
    if (!raiz.classList.contains('ficha-abierta')) vuelta = window.scrollY;
  }, { passive: true });

  const sincronizar = () => {
    const d = abierta();
    if (d && !raiz.classList.contains('ficha-abierta'))
      raiz.style.setProperty('--barra', (window.innerWidth - raiz.clientWidth) + 'px');
    raiz.classList.toggle('ficha-abierta', !!d);
    if (d) d.scrollTop = 0;
    else raiz.style.removeProperty('--barra');
  };

  detailGrid.addEventListener('toggle', e => {
    if (!e.target.matches('details.promo')) return;
    sincronizar();
    const d = abierta();
    if (d) {
      history.replaceState(null, '', '#f/' + d.id.replace('ficha-', ''));
      d.querySelector('summary').focus({ preventScroll: true });
    } else if (location.hash.startsWith('#f/')) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }, true);

  const cerrar = () => {
    const d = abierta();
    if (!d) return;
    d.open = false;
    sincronizar();
    d.querySelector('summary').focus({ preventScroll: true });
    window.scrollTo({ top: vuelta, behavior: 'instant' });
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && abierta()) { e.preventDefault(); cerrar(); }
  });

  detailGrid.addEventListener('click', e => {
    const volver = e.target.closest('[data-cerrar-ficha]');
    if (volver) { e.preventDefault(); cerrar(); return; }
    const ir = e.target.closest('[data-ir-ficha]');
    if (!ir) return;
    e.preventDefault();
    const destino = document.getElementById('ficha-' + ir.dataset.irFicha);
    if (!destino) return;
    const actual = abierta();
    if (actual) actual.open = false;
    destino.open = true;      // el name= del <details> ya excluye a las demas
    sincronizar();
  });

  // Enlace directo: ranking.html#f/marea-missoni
  const m = /^#f\/(.+)$/.exec(location.hash);
  const primera = m && document.getElementById('ficha-' + m[1]);
  if (primera) { primera.open = true; sincronizar(); }
})();

/* ═══════════════════════════════════
   PASES DE LA CABECERA · el clic no debe abrir ni cerrar la ficha
   Los botones viven dentro del <summary>, asi que cualquier clic suyo llegaria
   al acordeon: hay que pararlo antes de que lo haga.
════════════════════════════════════ */
(function () {
  document.addEventListener('click', e => {
    const b = e.target.closest?.('.dc-pase-b');
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    const head = b.closest('.dc-head');
    const pases = [...head.querySelectorAll('.dc-slide')];
    const i = pases.findIndex(s => s.classList.contains('is-on'));
    const n = (i + Number(b.dataset.paso) + pases.length) % pases.length;
    pases.forEach((s, j) => s.classList.toggle('is-on', j === n));
    head.querySelector('.dc-pase-n').textContent = (n + 1) + ' / ' + pases.length;
  }, true);
})();

/* ═══════════════════════════════════
   LA CADENA · señalar un campo escribe su ficha debajo del dibujo
   El nombre no va rotulado junto a cada nodo: con dieciséis campos el dibujo
   se vuelve ilegible. Va a un renglón fijo bajo el gráfico, que en reposo
   muestra el campo de referencia. En táctil el disco de 26 px hace de botón y
   con teclado responde a Enter o Espacio, porque este motor no dispara eventos
   de foco sobre los <g> de un SVG.
════════════════════════════════════ */
(function () {
  const escribir = (svg, html) => {
    const foco = svg.parentElement.querySelector('.adn-foco');
    if (foco) foco.innerHTML = html || foco.dataset.reposo;   // datos propios, no entrada de nadie
  };
  const marcar = (g, on) => {
    const svg = g.ownerSVGElement;
    svg.classList.toggle('adn-activo', on);
    svg.querySelectorAll('.adn-g').forEach(o => o.classList.toggle('adn-on', on && o === g));
    escribir(svg, on ? g.dataset.ficha : null);
  };
  document.addEventListener('pointerover', e => {
    const g = e.target.closest?.('.adn-g');
    if (g) marcar(g, true);
  });
  document.addEventListener('pointerout', e => {
    const g = e.target.closest?.('.adn-g');
    if (g && !g.contains(e.relatedTarget)) marcar(g, false);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const g = document.activeElement?.closest?.('.adn-g');
    if (!g) return;
    e.preventDefault();
    marcar(g, !g.classList.contains('adn-on'));
  });
})();

/* ═══════════════════════════════════
   CRÉDITOS DE IMAGEN · centralizados fuera de las fichas
════════════════════════════════════ */
const creditosImagenes = document.getElementById('creditosImagenes');
if (creditosImagenes) {
  const vistos = new Set();
  const camposCred = [];
  const sumarCredito = (id, f, uso) => {
    if (!f || vistos.has(f.src)) return;
    vistos.add(f.src);
    camposCred.push({ id, uso, ...f });
  };
  Object.entries(FOTOS_CAMPO).forEach(([id, f]) => sumarCredito(id, f, 'Course profile'));
  if (typeof FOTOS_FICHA !== 'undefined') Object.entries(FOTOS_FICHA).forEach(([id, f]) => sumarCredito(id, f, 'Benchmark course'));
  const credito = f => f.url
    ? `<a href="${f.url}" target="_blank" rel="noopener">${f.credito}</a>`
    : f.credito;
  const promocionesCred = PROMOS.map(p => {
    if (p.render) return `<li><strong>${p.name}</strong><span>Render del promotor · ${p.render.dominio}</span></li>`;
    if (p.foto) return `<li><strong>${p.name}</strong><span>${credito(p.foto)}</span></li>`;
    return `<li><strong>${p.name}</strong><span>Archive image</span></li>`;
  }).join('');
  creditosImagenes.innerHTML = `
    <details class="image-credits">
      <summary>See credits and provenance <small>${camposCred.length} imágenes de campo · ${PROMOS.length} promociones</small></summary>
      <div class="image-credit-groups">
        <section><h3>Developments</h3><ul>${promocionesCred}</ul></section>
        <section><h3>Golf courses</h3><ul>${camposCred.map(f => `<li><strong>${(CX[f.id] && CX[f.id].name) || f.id}</strong><span>${credito(f)} · ${f.uso}</span></li>`).join('')}</ul></section>
      </div>
    </details>`;
}

/* ═══════════════════════════════════
   RENDER · TABLA DE CAMPOS + FILTRO
═══════════════════════════════════ */
const golfBody = document.getElementById('golfBody');
const CAT_LABEL = { 4: 'Elite', 3: 'Premium', 2: 'Commercial', 1: 'Functional' };

function renderGolf(filter) {
  golfBody.innerHTML = '';
  const data = filter === 'all' ? COURSES.slice() : COURSES.filter(c => c.stars === parseInt(filter));
  data.sort((a, b) => b.stars - a.stars || a.municipio.localeCompare(b.municipio));
  data.forEach(c => {
    const stars = '★'.repeat(c.stars) + `<span class="star-off">${'★'.repeat(4 - c.stars)}</span>`;
    const f = c.foto;
    const etiqueta = '';
    const imagen = f
      ? `<img src="${f.src}" alt="${c.name} — ${c.municipio}" loading="lazy"/>`
      : `<div class="cc-sin"><b>${c.name}</b><span>No photograph</span></div>`;
    // El credito deja de rotularse en la tarjeta salvo cuando la licencia lo
    // exige: las de Wikimedia Commons son CC BY o CC BY-SA y la atribucion es
    // condicion de uso. El material de archivo y los cedidos por los clubes no
    // llevan nota.
    const exige = f && /Commons/.test(f.credito || '');
    const credito = exige ? `<span class="cc-cred">${f.url ? `<a href="${f.url}" target="_blank" rel="noopener">${f.credito}</a>` : f.credito}</span>` : '';
    const card = document.createElement('article');
    card.className = `cc cc-${c.stars}`;
    card.dataset.courseId = c.id;
    card.innerHTML = `
      <div class="cc-img">${imagen}${etiqueta}<span class="cc-cat">${CAT_LABEL[c.stars]}</span></div>
      <div class="cc-body">
        <div class="cc-stars">${stars}</div>
        <h3 class="cc-name">${c.name}</h3>
        <div class="cc-meta">${c.municipio} · ${c.disenador}, ${c.ano}</div>
        <dl class="cc-datos">
          <div><dt>Holes</dt><dd>${c.hoyos}</dd></div>
          <div><dt>Green fee</dt><dd>€${c.gf}</dd></div>
          <div class="cc-acceso"><dt>Access</dt><dd><span class="mem mem-${nivelAcceso(c.membresia)}">${c.membresia}</span></dd></div>
        </dl>
        <p class="cc-palmares">${c.palmares}</p>
        ${credito}
      </div>`;
    golfBody.appendChild(card);
  });
}
if (golfBody) {
  renderGolf('all');
}

document.querySelectorAll('#golfFilter button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#golfFilter button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGolf(btn.dataset.f);
  });
});

/* ═══════════════════════════════════
   RENDER · QUÉ ESTÁ VERIFICADO Y QUÉ NO
═══════════════════════════════════ */
const avisosBox = document.getElementById('avisosBody');
if (avisosBox) {
  const porPromo = {};
  AVISOS.forEach(a => { (porPromo[a.p] = porPromo[a.p] || []).push(a); });
  document.getElementById('avisosCount').textContent = AVISOS.length;
  avisosBox.innerHTML = Object.entries(porPromo).map(([nombre, lista]) => `
    <div class="aviso">
      <div class="aviso-promo">${nombre}</div>
      <ul>${lista.map(a => `<li><span>${a.t}</span> ${a.m}</li>`).join('')}</ul>
    </div>`).join('');
}

/* ═══════════════════════════════════
   ATLAS · las relaciones, no las carreteras
   Lienzo propio, sin teselas ni API de terceros: las mismas coordenadas del
   archivo que alimentan la puntuación, proyectadas sin deformar. Cada línea es
   una relación promoción→campo con sus minutos de OSRM; ninguna es una ruta.
   La capa base (costa y núcleos) sale de OpenStreetMap vía src/geobase.py.
═══════════════════════════════════ */
const SVGNS = 'http://www.w3.org/2000/svg';
function sv(tag, attrs) {
  const n = document.createElementNS(SVGNS, tag);
  for (const k in attrs) if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
  return n;
}

function initAtlas(el) {
  const W = 1000, H = 500, M = 40;
  // Dos modos con el mismo motor: en el ranking se dibujan las promociones y sus
  // relaciones; en la pagina de campos, solo la rejilla de campos. Quien cita a
  // cada campo se sigue calculando en los dos, porque el panel lo cuenta igual.
  const soloCampos = el.dataset.modo === 'campos';
  const campos = COURSES.filter(c => typeof c.lat === 'number' && typeof c.lng === 'number');
  const conCoord = PUBLICADAS.filter(p => typeof p.lat === 'number' && typeof p.lng === 'number');
  const promos = soloCampos ? [] : conCoord;
  const nucleos = typeof NUCLEOS !== 'undefined' ? NUCLEOS : [];
  const costa = typeof COSTA !== 'undefined' ? COSTA : [];
  const tierra = typeof TIERRA !== 'undefined' ? TIERRA : [];
  if (!campos.length) return;

  // Proyección equirectangular con corrección de latitud y escala única en los dos
  // ejes: la forma del territorio no se deforma para rellenar el lienzo. El encuadre
  // lo fijan los datos propios y las etiquetas; la costa se sale y el lienzo la recorta.
  const pts = campos.concat(promos, nucleos);
  const laMin = Math.min(...pts.map(p => p.lat)), laMax = Math.max(...pts.map(p => p.lat));
  const lnMin = Math.min(...pts.map(p => p.lng)), lnMax = Math.max(...pts.map(p => p.lng));
  const kLat = Math.cos((laMin + laMax) / 2 * Math.PI / 180);
  const esc = Math.min((W - 2 * M) / ((lnMax - lnMin) * kLat), (H - 2 * M) / (laMax - laMin));
  const lnMid = (lnMin + lnMax) / 2, laMid = (laMin + laMax) / 2;
  const X = ln => W / 2 + (ln - lnMid) * kLat * esc;
  const Y = la => H / 2 - (la - laMid) * esc;

  // Relación inversa: qué promociones citan cada campo. No existía en la pieza.
  const citadoPor = {};
  conCoord.forEach(p => p.campos.forEach(c => (citadoPor[c.id] = citadoPor[c.id] || []).push(p)));

  // role="group" y no "img": con "img" los lectores de pantalla podan el subárbol
  // y los nodos navegables por teclado dejarían de existir para ellos.
  const svg = sv('svg', {
    viewBox: `0 0 ${W} ${H}`, class: 'atlas-svg',
    role: 'group', 'aria-label': soloCampos
      ? `Mapa de los ${campos.length} campos de golf de la guía. Cada nodo abre su ficha con Intro.`
      : `Mapa de relaciones: ${promos.length} promociones y ${campos.length} campos de golf. Cada nodo abre su detalle con Intro.`
  });
  const gTierra = sv('g', { class: 'at-tierra', 'aria-hidden': 'true' });
  const gRejilla = sv('g', { class: 'at-rejilla', 'aria-hidden': 'true' });
  const gCosta = sv('g', { class: 'at-costa', 'aria-hidden': 'true' });
  const gSitios = sv('g', { class: 'at-sitios', 'aria-hidden': 'true' });
  const gLineas = sv('g', { class: 'at-lineas' });
  const gCampos = sv('g', { class: 'at-campos' });
  const gPromos = sv('g', { class: 'at-promos' });
  svg.append(gTierra, gRejilla, gCosta, gSitios, gLineas, gCampos, gPromos);

  // La tierra: el litoral continuo cerrado por fuera del lienzo hacia el norte, que
  // es donde está. Los únicos puntos reales son los del litoral; las tres esquinas
  // son un recurso de dibujo y quedan fuera del encuadre, recortadas por el viewBox.
  if (tierra.length > 2) {
    const borde = 400;
    const p0 = tierra[0], pN = tierra[tierra.length - 1];
    const puntos = tierra.map(([ln, la]) => `${X(ln).toFixed(1)},${Y(la).toFixed(1)}`);
    puntos.push(`${(X(pN[0]) + borde).toFixed(1)},${Y(pN[1]).toFixed(1)}`);
    puntos.push(`${(X(pN[0]) + borde).toFixed(1)},${-borde}`);
    puntos.push(`${(X(p0[0]) - borde).toFixed(1)},${-borde}`);
    puntos.push(`${(X(p0[0]) - borde).toFixed(1)},${Y(p0[1]).toFixed(1)}`);
    gTierra.append(sv('polygon', { points: puntos.join(' ') }));
  }

  for (let i = 1; i < 10; i++) {
    gRejilla.append(sv('line', { x1: W / 10 * i, y1: 0, x2: W / 10 * i, y2: H }));
    if (i < 5) gRejilla.append(sv('line', { x1: 0, y1: H / 5 * i, x2: W, y2: H / 5 * i }));
  }

  costa.forEach(tramo => {
    gCosta.append(sv('polyline', { points: tramo.map(([ln, la]) => `${X(ln).toFixed(1)},${Y(la).toFixed(1)}`).join(' ') }));
  });

  // ── Núcleos de población: coordenada real de OSM, rótulo según entidad.
  const rotulos = [];
  nucleos.slice().sort((a, b) => a.prio - b.prio).forEach(n => {
    const grande = n.tipo === 'city' || n.pob >= 40000;
    const g = sv('g', { class: 'at-nucleo' + (grande ? ' at-nucleo-may' : '') });
    const marca = sv('rect', { x: X(n.lng) - 2.5, y: Y(n.lat) - 2.5, width: 5, height: 5, class: 'at-nucleo-m' });
    const t = sv('text', { x: X(n.lng), y: Y(n.lat) - 8, class: 'at-sitio' });
    t.textContent = n.n.toUpperCase();
    g.append(marca, t);
    gSitios.append(g);
    rotulos.push({ marca, t, x: X(n.lng), y: Y(n.lat), letras: n.n.length });
  });

  // Quince rótulos no caben en el encuadre completo: se colocan por prioridad
  // editorial y se oculta el que pise a otro ya colocado. Al ampliar hay sitio y
  // van apareciendo solos.
  function ordenarRotulos() {
    const puestos = [];
    const anchoV = W / zoom;
    const izq = vistaX - anchoV / 2 + 4, der = vistaX + anchoV / 2 - 4;
    rotulos.forEach(r => {
      const alto = 11 / escala;
      const ancho = r.letras * alto * .78;
      // Contra el borde, el rótulo se recuesta en vez de recortarse.
      const cx = Math.min(der - ancho / 2, Math.max(izq + ancho / 2, r.x));
      const caja = { x1: cx - ancho / 2, x2: cx + ancho / 2, y1: r.y - 8 / escala - alto, y2: r.y - 8 / escala };
      const choca = puestos.some(q => !(caja.x2 < q.x1 || caja.x1 > q.x2 || caja.y2 < q.y1 || caja.y1 > q.y2));
      r.t.setAttribute('x', cx);
      r.t.style.display = choca ? 'none' : '';
      if (!choca) puestos.push(caja);
    });
  }
  const mar = sv('text', { x: W * .74, y: H - 44, class: 'at-mar' });
  mar.textContent = 'MEDITERRANEAN';
  gSitios.append(mar);

  // ── Nodos de campo: tamaño por estrellas, relleno sólo si se puede reservar.
  const nodoCampo = {}, circCampo = [];
  campos.forEach(c => {
    const r = c.stars === 4 ? 6 : c.stars === 3 ? 5 : c.stars === 2 ? 4 : 3.2;
    const reservable = c.acceso === 1;
    const g = sv('g', {
      class: `at-campo at-s${c.stars}${reservable ? '' : ' at-cerrado'}`,
      tabindex: '0', role: 'button',
      'aria-label': `${c.name}, ${c.municipio}. ${c.stars} estrellas. ${ACCESO_LBL[c.acceso]}.`
    });
    const punto = sv('circle', { cx: X(c.lng), cy: Y(c.lat), r, class: 'at-campo-p' });
    const golpe = sv('circle', { cx: X(c.lng), cy: Y(c.lat), r: r + 7, class: 'at-golpe' });
    // El nombre solo aparece al fijar: rotular sesenta y un campos a la vez
    // convertiria el mapa en un listado.
    const rot = sv('text', { x: X(c.lng), y: Y(c.lat) - r - 4, class: 'at-campo-t', 'aria-hidden': 'true' });
    rot.textContent = c.name;
    g.append(punto, rot, golpe);
    circCampo.push({ punto, golpe, rot, r, y: Y(c.lat) });
    nodoCampo[c.id] = g;
    g.__at = { t: 'c', v: c };
    g.addEventListener('mouseenter', () => { if (!fijado) verCampo(c); });
    g.addEventListener('click', () => fijarCampo(c));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fijarCampo(c); } });
    gCampos.append(g);
  });

  // ── Líneas. En reposo se insinúan todas: el dibujo ya dice "esto es una red".
  const lineas = [];
  promos.forEach(p => p.campos.forEach(c => {
    const l = sv('line', {
      x1: X(p.lng), y1: Y(p.lat), x2: X(c.lng), y2: Y(c.lat),
      class: `at-linea${c.fuera ? ' at-fuera' : ''}`,
      'stroke-width': c.stars >= 3 ? 1.5 : 1
    });
    l.dataset.promo = p.id; l.dataset.campo = c.id;
    lineas.push(l); gLineas.append(l);
  }));

  // ── Nodos de promoción. Once caben en quince kilómetros de costa, así que los
  // anillos se separan hasta poder leerse y una línea guía los ata a su coordenada
  // real, que no se mueve: se desplaza la etiqueta, nunca el dato. Al ampliar, la
  // separación necesaria se reduce y los anillos vuelven solos a su sitio.
  const nodoPromo = {}, sitios = [];
  promos.forEach(p => {
    const g = sv('g', {
      class: 'at-promo', tabindex: '0', role: 'button',
      'aria-label': `${p.rank}. ${p.name}, ${p.municipio}. ${p.total} puntos sobre 100.`
    });
    const guia = sv('line', { x1: X(p.lng), y1: Y(p.lat), x2: X(p.lng), y2: Y(p.lat), class: 'at-guia' });
    const ancla = sv('circle', { cx: X(p.lng), cy: Y(p.lat), r: 2.4, class: 'at-ancla' });
    const anillo = sv('circle', { cx: X(p.lng), cy: Y(p.lat), r: 13, class: 'at-promo-p' });
    const num = sv('text', { x: X(p.lng), y: Y(p.lat) + 4.5, class: 'at-promo-n' });
    num.textContent = String(p.rank).padStart(2, '0');
    g.append(guia, ancla, anillo, num);
    nodoPromo[p.id] = g;
    sitios.push({ p, x0: X(p.lng), y0: Y(p.lat), x: X(p.lng), y: Y(p.lat), guia, ancla, anillo, num });
    g.__at = { t: 'p', v: p };
    // Con algo fijado el raton no roba la seleccion: al ampliar, el mapa se
    // mueve bajo el cursor y el puntero acababa encima de otro numero, que
    // borraba las lineas y los rotulos recien aparecidos sin tocar nada.
    g.addEventListener('mouseenter', () => { if (!fijado) verPromo(p); });
    g.addEventListener('click', () => fijarPromo(p));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fijarPromo(p); } });
    gPromos.append(g);
  });

  function colocarPromos() {
    const sep = 34 / escala;                     // en unidades del lienzo
    sitios.forEach(s => { s.x = s.x0; s.y = s.y0; });
    for (let it = 0; it < 260; it++) {
      for (let i = 0; i < sitios.length; i++) for (let j = i + 1; j < sitios.length; j++) {
        const a = sitios[i], b = sitios[j];
        let dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || .01;
        if (d < sep) {
          const f = (sep - d) / d * .5;
          dx *= f; dy *= f;
          a.x -= dx; a.y -= dy; b.x += dx; b.y += dy;
        }
      }
      sitios.forEach(q => { q.x += (q.x0 - q.x) * .05; q.y += (q.y0 - q.y) * .05; });
    }
    sitios.forEach(s => {
      const desviado = Math.hypot(s.x - s.x0, s.y - s.y0) > 1.5 / escala;
      s.guia.setAttribute('x2', s.x); s.guia.setAttribute('y2', s.y);
      s.guia.style.display = desviado ? '' : 'none';
      s.ancla.style.display = desviado ? '' : 'none';
      s.anillo.setAttribute('cx', s.x); s.anillo.setAttribute('cy', s.y);
      s.num.setAttribute('x', s.x); s.num.setAttribute('y', s.y + 4.5 / escala);
    });
  }

  // ── Ampliación. Cambia el viewBox y compensa el tamaño de nodos y rótulos para
  // que no crezcan con él: lo que se amplía es el territorio, no la tipografía.
  let zoom = 1, vistaX = W / 2, vistaY = H / 2, escala = 1;
  const ZMAX = 8;

  function encuadrar() {
    const anchoV = W / zoom, altoV = H / zoom;
    vistaX = Math.min(W - anchoV / 2, Math.max(anchoV / 2, vistaX));
    vistaY = Math.min(H - altoV / 2, Math.max(altoV / 2, vistaY));
    svg.setAttribute('viewBox', `${vistaX - anchoV / 2} ${vistaY - altoV / 2} ${anchoV} ${altoV}`);
    // Nodos y rótulos se miden contra lo que ocupa el lienzo en pantalla, no contra
    // el sistema de coordenadas: en un móvil el mapa cabe en 330 px y, sin esto, los
    // puntos saldrían a 8 px y no habría forma de acertarles con el dedo.
    const ancho = svg.getBoundingClientRect().width || W;
    const base = Math.min(2.6, Math.max(1, W / ancho));
    escala = zoom / base;
    const z = escala;
    circCampo.forEach(({ punto, golpe, rot, r, y }) => {
      punto.setAttribute('r', r / z);
      golpe.setAttribute('r', (r + 7) / z);
      // El halo tambien se contraescala: sin eso, a dos aumentos el trazo media
      // tres cuartos del cuerpo de la letra y se comia el nombre.
      if (rot) {
        rot.setAttribute('y', y - (r + 6) / z);
        rot.style.fontSize = (10 / z) + 'px';
        rot.style.strokeWidth = (2.6 / z) + 'px';
      }
    });
    sitios.forEach(s => {
      s.anillo.setAttribute('r', 13 / z);
      s.ancla.setAttribute('r', 2.4 / z);
      s.num.style.fontSize = (13 / z) + 'px';
    });
    rotulos.forEach(({ marca, t, x, y }) => {
      const lado = 5 / z;
      marca.setAttribute('x', x - lado / 2); marca.setAttribute('y', y - lado / 2);
      marca.setAttribute('width', lado); marca.setAttribute('height', lado);
      t.setAttribute('y', y - 8 / z);
      t.style.fontSize = (11 / z) + 'px';
    });
    mar.style.fontSize = (26 / zoom) + 'px';
    mar.style.display = z > 2 ? 'none' : '';
    svg.style.setProperty('--at-z', z);
    ordenarRotulos();
    colocarPromos();
    if (botonMenos) botonMenos.disabled = zoom <= 1;
    if (botonMas) botonMas.disabled = zoom >= ZMAX;
  }

  function ampliar(factor, haciaX, haciaY) {
    const antes = zoom;
    zoom = Math.min(ZMAX, Math.max(1, zoom * factor));
    if (zoom === antes) return;
    if (haciaX !== undefined) {
      // Mantiene bajo el cursor el punto señalado
      vistaX = haciaX - (haciaX - vistaX) * (antes / zoom);
      vistaY = haciaY - (haciaY - vistaY) * (antes / zoom);
    }
    encuadrar();
  }

  const controles = document.createElement('div');
  const volver = document.createElement('button');
  volver.type = 'button';
  volver.className = 'atlas-volver';
  volver.hidden = true;
  volver.innerHTML = '<span aria-hidden="true">✕</span> Vista general';
  volver.addEventListener('click', soltar);

  controles.className = 'atlas-zoom';
  const botonMas = document.createElement('button');
  botonMas.type = 'button'; botonMas.textContent = '+';
  botonMas.setAttribute('aria-label', 'Zoom in');
  const botonMenos = document.createElement('button');
  botonMenos.type = 'button'; botonMenos.textContent = '−';
  botonMenos.setAttribute('aria-label', 'Zoom out');
  const botonTodo = document.createElement('button');
  botonTodo.type = 'button'; botonTodo.textContent = '⤢';
  botonTodo.setAttribute('aria-label', 'See the whole map');
  botonMas.addEventListener('click', () => ampliar(1.6));
  botonMenos.addEventListener('click', () => ampliar(1 / 1.6));
  botonTodo.addEventListener('click', () => { zoom = 1; vistaX = W / 2; vistaY = H / 2; encuadrar(); });
  controles.append(botonMas, botonMenos, botonTodo);

  // Arrastre para desplazar cuando hay ampliación.
  // El arrastre no se captura al pulsar sino al mover de verdad. Capturar en el
  // pointerdown redirigia el click posterior al <svg>, asi que en cuanto el mapa
  // estaba ampliado —zoom > 1— los nodos dejaban de responder al raton: el
  // navegador entregaba el click al elemento con la captura y no al circulo.
  // El umbral de cuatro pixeles evita ademas que el temblor de un clic cuente
  // como arrastre.
  let pendiente = null, arrastre = null, arrastrado = false, rafDrag = 0, ultimo = null;
  svg.addEventListener('pointerdown', e => {
    if (zoom <= 1) return;
    pendiente = { id: e.pointerId, x: e.clientX, y: e.clientY, vx: vistaX, vy: vistaY };
  });
  svg.addEventListener('pointermove', e => {
    if (pendiente && !arrastre) {
      if (Math.hypot(e.clientX - pendiente.x, e.clientY - pendiente.y) < 4) return;
      arrastre = pendiente;
      try { svg.setPointerCapture(arrastre.id); } catch (_) { /* puntero ya suelto */ }
      svg.classList.add('at-arrastrando');
    }
    if (!arrastre) return;
    ultimo = { x: e.clientX, y: e.clientY };
    // Un reencuadre por fotograma: el pointermove dispara mas de cien veces por
    // segundo y cada encuadre recoloca los rotulos de las once promociones.
    if (rafDrag) return;
    rafDrag = requestAnimationFrame(() => {
      rafDrag = 0;
      if (!arrastre || !ultimo) return;
      const caja = svg.getBoundingClientRect();
      const porPx = (W / zoom) / caja.width;
      vistaX = arrastre.vx - (ultimo.x - arrastre.x) * porPx;
      vistaY = arrastre.vy - (ultimo.y - arrastre.y) * porPx;
      encuadrar();
    });
  });
  ['pointerup', 'pointercancel'].forEach(ev => svg.addEventListener(ev, e => {
    if (arrastre) {
      try { svg.releasePointerCapture(arrastre.id); } catch (_) { /* ya liberado */ }
      // El click llega despues del pointerup: la marca sobrevive un tick para que
      // soltar el arrastre encima de un nodo no lo seleccione.
      arrastrado = true;
      setTimeout(() => { arrastrado = false; }, 0);
    }
    pendiente = null; arrastre = null; ultimo = null;
    svg.classList.remove('at-arrastrando');
  }));

  const panel = document.getElementById('atlasPanel');
  // Con el panel lateral la ficha puede no caber en la altura del mapa. Se marca
  // el desborde para pintar un degradado al pie —solo cuando hay más contenido
  // por debajo— y se retira al llegar al final. La barra la decide el navegador.
  function marcarDesborde() {
    if (!panel) return;
    const sobra = panel.scrollHeight - panel.clientHeight > 2;
    const alFinal = sobra && panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 2;
    panel.classList.toggle('ap-desborda', sobra && !alFinal);
  }
  if (panel) {
    panel.addEventListener('scroll', marcarDesborde, { passive: true });
    window.addEventListener('resize', marcarDesborde, { passive: true });
  }
  let fijado = null;

  // Los <g> de SVG reciben el foco pero este motor no despacha ningún evento de
  // foco sobre ellos, ni capturado en document. Así que con el tabulador el foco
  // se ve por CSS (:focus-visible) y es Intro o Espacio quien abre el detalle;
  // cada nodo lleva su aria-label completo, de modo que un lector de pantalla ya
  // anuncia el contenido al llegar sin necesidad de activarlo.
  svg.addEventListener('focusin', e => {
    const n = e.target.closest && e.target.closest('.at-promo, .at-campo');
    if (!n || !n.__at || fijado) return;
    n.__at.t === 'p' ? verPromo(n.__at.v) : verCampo(n.__at.v);
  });

  function limpiar() {
    svg.classList.remove('at-activo', 'at-fijado');
    lineas.forEach(l => l.classList.remove('at-on'));
    Object.values(nodoCampo).forEach(g => g.classList.remove('at-on'));
    Object.values(nodoPromo).forEach(g => g.classList.remove('at-on'));
  }

  function verPromo(p) {
    limpiar();
    svg.classList.add('at-activo');
    nodoPromo[p.id].classList.add('at-on');
    p.campos.forEach(c => nodoCampo[c.id] && nodoCampo[c.id].classList.add('at-on'));
    lineas.forEach(l => { if (l.dataset.promo === p.id) l.classList.add('at-on'); });
    pintarPanelPromo(p);
  }

  function verCampo(c) {
    limpiar();
    svg.classList.add('at-activo');
    nodoCampo[c.id].classList.add('at-on');
    const suyas = citadoPor[c.id] || [];
    suyas.forEach(p => nodoPromo[p.id] && nodoPromo[p.id].classList.add('at-on'));
    lineas.forEach(l => { if (l.dataset.campo === c.id) l.classList.add('at-on'); });
    pintarPanelCampo(c, suyas);
  }

  // Al fijar una promocion el encuadre se ajusta a su racimo, no a un factor
  // fijo: los racimos van de 27 unidades de ancho (MAREA) a 229 (Soul Marbella),
  // asi que una misma ampliacion o deja aire de sobra o corta campos. Se calcula
  // la caja que contiene la promocion y sus campos, se le deja margen para los
  // rotulos y se limita entre el cierre minimo y el maximo del mapa.
  const CIERRE = 0.7 / (1.3 * 1.3);
  function encuadrePromo(p) {
    const xs = [X(p.lng)], ys = [Y(p.lat)];
    p.campos.forEach(c => { xs.push(X(c.lng)); ys.push(Y(c.lat)); });
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const ancho = Math.max(x1 - x0, 14) * 1.38, alto = Math.max(y1 - y0, 14) * 1.5;
    const z = Math.min(ZMAX, Math.max(1 / CIERRE, Math.min(W / ancho, H / alto)));
    return { z, x: (x0 + x1) / 2, y: (y0 + y1) / 2 };
  }
  let tween;
  function irA(zDestino, xDestino, yDestino) {
    cancelAnimationFrame(tween);
    const z0 = zoom, x0 = vistaX, y0 = vistaY, t0 = performance.now();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      zoom = zDestino; vistaX = xDestino; vistaY = yDestino; encuadrar(); return;
    }
    const paso = ahora => {
      const r = Math.min(1, (ahora - t0) / 420);
      const e = 1 - Math.pow(1 - r, 3);
      zoom = z0 + (zDestino - z0) * e;
      vistaX = x0 + (xDestino - x0) * e;
      vistaY = y0 + (yDestino - y0) * e;
      encuadrar();
      if (r < 1) tween = requestAnimationFrame(paso);
    };
    tween = requestAnimationFrame(paso);
  }

  function fijarPromo(p) {
    if (arrastrado) return;
    fijado = { t: 'p', v: p };
    verPromo(p);
    svg.classList.add('at-fijado');
    volver.hidden = false;
    const e = encuadrePromo(p);
    irA(e.z, e.x, e.y);
  }
  function fijarCampo(c) { if (arrastrado) return; fijado = { t: 'c', v: c }; verCampo(c); svg.classList.add('at-fijado'); volver.hidden = false; }
  function soltar() { fijado = null; volver.hidden = true; limpiar(); pintarPanelInicio(); irA(1, W / 2, H / 2); }

  el.addEventListener('mouseleave', () => {
    if (fijado) { fijado.t === 'p' ? verPromo(fijado.v) : verCampo(fijado.v); svg.classList.add('at-fijado'); }
    else { limpiar(); pintarPanelInicio(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && fijado) soltar(); });

  function pintarPanelInicio() {
    if (!panel) return;
    const enlaces = promos.reduce((s, p) => s + p.campos.length, 0);
    if (soloCampos) {
      const elite = campos.filter(c => c.stars === 4).length;
      const jugables = campos.filter(c => c.acceso === 1).length;
      panel.innerHTML = `
        <div class="ap-cols ap-cols-reposo">
          <div class="ap-bloque">
            <div class="ap-tag">The map at rest</div>
            <p class="ap-intro">All <strong>${campos.length} courses</strong> in the guide, on their real coordinates,
              from Sotogrande to Vélez-Málaga. The size and tone of each dot give its rating;
              the hollow ones require membership.</p>
          </div>
          <div class="ap-bloque">
            <p class="ap-intro">Hover over any course — or tap it to pin it — and you will see its details
              and which ranked developments count it in their setting. The corner buttons zoom;
              drag to pan.</p>
          </div>
          <dl class="ap-cifras">
            <div><dt>Campos</dt><dd>${campos.length}</dd></div>
            <div><dt>Elite</dt><dd>${elite}</dd></div>
            <div><dt>Bookable</dt><dd>${jugables}</dd></div>
          </dl>
        </div>`;
      panel.scrollTop = 0; marcarDesborde();
      return;
    }
    panel.innerHTML = `
      <div class="ap-cols ap-cols-reposo">
        <div class="ap-bloque">
          <div class="ap-tag">The map at rest</div>
          <p class="ap-intro">Each dot is a course and each number a top 10 development.
            The lines are the <strong>${enlaces} relationships</strong> that hold up the score:
            from a development to the courses around it, with their measured driving times.</p>
        </div>
        <div class="ap-bloque">
          <p class="ap-intro">Hover over any node — or tap it to pin it — and its network is isolated.
            The corner buttons zoom; drag to pan.</p>
        </div>
        <dl class="ap-cifras">
          <div><dt>Campos</dt><dd>${campos.length}</dd></div>
          <div><dt>Developments</dt><dd>${promos.length}</dd></div>
          <div><dt>Relaciones</dt><dd>${enlaces}</dd></div>
        </dl>
      </div>`;
    panel.scrollTop = 0; marcarDesborde();
  }

  function pintarPanelPromo(p) {
    if (!panel) return;
    const en15 = p.campos.filter(c => !c.fuera);
    const reservables = en15.filter(c => c.acceso === 1).length;
    const fuera = p.campos.length - en15.length;
    panel.innerHTML = `
      <div class="ap-cols">
        <div class="ap-bloque ap-ident">
          <div class="ap-tag">${String(p.rank).padStart(2, '0')} / ${p.municipio}</div>
          <h3 class="ap-nombre">${p.name}</h3>
        </div>
        <div class="ap-bloque ap-marcador">
          <div class="ap-nota"><strong>${p.total}</strong><span>puntos<br>sobre 100</span></div>
          <p class="ap-split">${p.A} golf + ${p.B} proyecto</p>
        </div>
        <ul class="ap-hechos">
          <li><strong>${en15.length}</strong> campo${en15.length === 1 ? '' : 's'} en quince minutos.</li>
          <li><strong>${reservables}</strong> admite${reservables === 1 ? '' : 'n'} reserva sin ser socio.</li>
          <li>The nearest, <strong>${p.cercano.name}</strong>${p.cercano.min === 0 ? ', in-resort' : `, ${p.cercano.min}′`}.</li>
          ${fuera ? `<li class="ap-fuera">${fuera} declarado${fuera === 1 ? '' : 's'} beyond fifteen minutes: does not score${fuera === 1 ? '' : 'n'}.</li>` : ''}
        </ul>
        <div class="ap-bloque ap-accion">
          <button type="button" class="ap-cta" data-ficha="${p.id}">Open the full arithmetic <span aria-hidden="true">↗</span></button>
        </div>
      </div>`;
    const b = panel.querySelector('.ap-cta');
    if (b) b.addEventListener('click', () => {
      const ficha = document.getElementById('ficha-' + p.id);
      if (!ficha) return;
      ficha.open = true;
      ficha.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    panel.scrollTop = 0; marcarDesborde();
  }

  function pintarPanelCampo(c, suyas) {
    if (!panel) return;
    const lista = suyas.slice().sort((a, b) => a.rank - b.rank);
    panel.innerHTML = `
      <div class="ap-cols ap-cols-campo">
        <div class="ap-bloque ap-ident">
          <div class="ap-tag">Campo · ${c.municipio}</div>
          <h3 class="ap-nombre">${c.name}</h3>
          <p class="ap-estrellas">${'★'.repeat(c.stars)}<span class="ap-off">${'★'.repeat(4 - c.stars)}</span>
            <span class="ap-acceso">${ACCESO_LBL[c.acceso]}</span></p>
        </div>
        <ul class="ap-hechos">
          <li>${c.hoyos} · ${c.disenador}${c.ano ? ' · ' + c.ano : ''}</li>
          <li>Green fee ${c.gf ? '€' + c.gf : 'no publicado'}.</li>
        </ul>
        <div class="ap-bloque ap-citado">
          ${lista.length
            ? `<p class="ap-citas">Lo cuenta${lista.length === 1 ? '' : 'n'} en su entorno ${lista.length === 1 ? 'una promoción' : lista.length + ' promociones'}:</p>
               <ul class="ap-quien">${lista.map(p => {
                 const e = p.campos.find(x => x.id === c.id);
                 return `<li><span>${String(p.rank).padStart(2, '0')}</span><b>${p.name}</b><em>${e.min === 0 ? 'in-resort' : e.min + '′'}${e.fuera ? ' · fuera' : ''}</em></li>`;
               }).join('')}</ul>`
            : '<p class="ap-citas">No top 10 development counts it in its setting.</p>'}
        </div>
      </div>`;
    panel.scrollTop = 0; marcarDesborde();
  }

  const lienzo = el.querySelector('.atlas-lienzo') || el;
  lienzo.querySelectorAll('noscript').forEach(n => n.remove());
  lienzo.append(svg);
  lienzo.append(controles);
  lienzo.append(volver);
  encuadrar();
  // Al cambiar el ancho cambia la escala física de nodos y rótulos.
  let reencuadre;
  window.addEventListener('resize', () => {
    clearTimeout(reencuadre);
    reencuadre = setTimeout(encuadrar, 160);
  }, { passive: true });
  pintarPanelInicio();
}

/* ═══════════════════════════════════
   MAPA · LEAFLET (patrón defensivo) — sólo la rejilla de campos
═══════════════════════════════════ */
let mapReady = false;
function initMap() {
  if (mapReady) return;
  const atlas = document.querySelector('.atlas');
  if (atlas) { mapReady = true; initAtlas(atlas); return; }
  const el = document.getElementById('bigMap');
  if (!el) return;
  const soloCampos = el.dataset.modo === 'campos';
  if (typeof L === 'undefined') {
    document.getElementById('mapFallback').style.display = 'block';
    el.style.display = 'none';
    return;
  }
  mapReady = true;

  const map = L.map('bigMap', { center: [36.50, -4.95], zoom: 10, scrollWheelZoom: false, zoomControl: true });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> · <a href="https://carto.com">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map).on('tileerror', () => { document.getElementById('mapFallback').style.display = 'block'; });

  [150, 600, 1500].forEach(ms => setTimeout(() => map.invalidateSize(), ms));
  window.addEventListener('scroll', function onScroll() { map.invalidateSize(); window.removeEventListener('scroll', onScroll); }, { once: true });
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting && map.invalidateSize())).observe(el);

  if (!soloCampos) PUBLICADAS.forEach(p => {
    const icon = L.divIcon({
      html: `<div class="pin-promo-num">${p.rank}</div>`,
      className: 'pin-promo', iconSize: [28, 28], iconAnchor: [14, 14]
    });
    L.marker([p.lat, p.lng], { icon, zIndexOffset: 1000 }).addTo(map)
      .bindPopup(`<b>${p.name}</b><br/><span class="pop-sub">${p.sub} · ${p.municipio}</span><br/><span class="pop-score">SCORE ${p.total}/100 · DESDE ${p.precioDesde}</span>`);

    // Polylines a los campos ★★★+ — resueltas por id, no por nombre.
    p.campos.filter(c => c.stars >= 3).forEach(c => {
      L.polyline([[p.lat, p.lng], [c.lat, c.lng]], {
        color: c.acceso === 1 ? 'rgba(85,128,37,.48)' : 'rgba(85,128,37,.18)',
        weight: 1.2, dashArray: c.acceso === 1 ? null : '3 5'
      }).addTo(map);
    });
  });

  COURSES.forEach(c => {
    const size = c.stars === 4 ? 16 : (c.stars === 3 ? 12 : c.stars === 2 ? 10 : 8);
    const icon = L.divIcon({
      html: '',
      className: 'pin-campo pin-campo-' + c.stars, iconSize: [size, size], iconAnchor: [size / 2, size / 2]
    });
    L.marker([c.lat, c.lng], { icon }).addTo(map)
      .bindPopup(`<b>${c.name}</b><br/><span class="pop-sub">${c.municipio}</span><br/><span class="pop-stars">${'★'.repeat(c.stars)}</span> · ${c.hoyos} · <span class="mute">${c.membresia}</span>`);
  });
}
initMap();
window.addEventListener('load', function () { initMap(); setTimeout(initMap, 800); });



/* ═══════════════════════════════════
   ESTRELLAS · una sola regla para todo el documento
   Envuelve cada ★ del texto —titulares, tablas, tags, metodología, leyendas—
   para que la puntuación se lea siempre en amarillo, no sólo en los bloques.
═══════════════════════════════════ */
function pintarEstrellas(raiz) {
  const w = document.createTreeWalker(raiz || document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      if (n.nodeValue.indexOf('★') === -1) return NodeFilter.FILTER_REJECT;
      const p = n.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'TEXTAREA', 'TITLE'].indexOf(p.tagName) > -1) return NodeFilter.FILTER_REJECT;
      if (p.closest('.star') || p.closest('svg')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodos = [];
  let n; while ((n = w.nextNode())) nodos.push(n);
  nodos.forEach(nodo => {
    const frag = document.createDocumentFragment();
    nodo.nodeValue.split(/(★+)/).forEach(trozo => {
      if (!trozo) return;
      if (trozo.charAt(0) === '★') {
        const s = document.createElement('span');
        s.className = 'star'; s.textContent = trozo;
        frag.appendChild(s);
      } else frag.appendChild(document.createTextNode(trozo));
    });
    nodo.parentNode.replaceChild(frag, nodo);
  });
}
pintarEstrellas();

/* ═══════════════════════════════════
   FORMULARIOS DE CONTACTO
   La guia es un sitio estatico: no hay servidor que reciba un POST. Mientras
   no lo haya, el formulario compone el correo y lo abre en el cliente del
   visitante, que funciona en cualquier parte y no mete a un tercero entre
   medias. El dia que haya endpoint —Formspree, Basin, una funcion propia—
   se rellena ENVIO y pasa a enviarse por fetch sin tocar nada mas.
════════════════════════════════════ */
(function () {
  const ENVIO = '';                       // endpoint https://… o '' para correo
  const BUZON = 'nicetomeetyou@primeandgolf.com';
  const lead = document.getElementById('formLead');
  const pro = document.getElementById('formPro');
  if (!lead && !pro) return;

  /* El desplegable de promociones sale del ranking, no de una lista a mano:
     asi nunca ofrece una promocion que ya no este ni deja otra fuera. */
  const sel = document.getElementById('selectPromos');
  if (sel && typeof PROMOS !== 'undefined') {
    PROMOS.forEach(p => {
      const o = document.createElement('option');
      o.textContent = (p.top10 ? '#' + String(p.rank).padStart(2, '0') + ' · ' : '') +
        p.name + ' · ' + p.municipio;
      sel.appendChild(o);
    });
  }

  const ROTULO = {
    nombre: 'Name', email: 'Email', telefono: 'Telephone', promocion: 'Development',
    presupuesto: 'Budget', empresa: 'Developer or agency', motivo: 'Reason', mensaje: 'Message'
  };

  const cuerpoDe = form => {
    const lineas = [];
    new FormData(form).forEach((v, k) => {
      if (k === 'consentimiento' || !String(v).trim()) return;
      lineas.push((ROTULO[k] || k) + ': ' + v);
    });
    lineas.push('', '—', 'Sent from the PRIMEandGOLF guide · ' + location.href);
    return lineas.join('\n');
  };

  const preparar = (form, asunto) => {
    const estado = form.querySelector('.form-estado');
    const boton = form.querySelector('.form-enviar');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      form.classList.add('tocado');
      estado.className = 'form-estado';
      if (!form.checkValidity()) {
        estado.classList.add('mal');
        estado.textContent = 'Required fields are missing, or one is not correctly filled in.';
        const primero = form.querySelector(':invalid');
        if (primero) primero.focus();
        return;
      }
      if (ENVIO) {
        boton.disabled = true;
        estado.textContent = 'Enviando…';
        try {
          const r = await fetch(ENVIO, {
            method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form)
          });
          if (!r.ok) throw new Error(r.status);
          form.reset(); form.classList.remove('tocado');
          estado.classList.add('ok');
          estado.textContent = 'Recibido. Te contestamos en cuanto lo revisemos.';
        } catch (err) {
          estado.classList.add('mal');
          estado.textContent = 'It could not be sent. Write to us at ' + BUZON + ' y lo vemos.';
        } finally { boton.disabled = false; }
        return;
      }
      location.href = 'mailto:' + BUZON + '?subject=' + encodeURIComponent(asunto) +
        '&body=' + encodeURIComponent(cuerpoDe(form));
      estado.classList.add('ok');
      estado.textContent = 'Your email application has opened with the enquiry ready to send. ' +
        'If it did not open, write to us at ' + BUZON + '.';
    });
  };

  if (lead) preparar(lead, 'PRIMEandGOLF · Consulta general');
  if (pro) preparar(pro, 'PRIMEandGOLF · Developer submission');
})();

/* ═══════════════════════════════════
   ESTADO DE LA EDICIÓN
   El ranking vive por ediciones, pero eso no se veía en ninguna parte: las
   fechas estaban enterradas en el pie y lo que se quedaba fuera no se
   contaba. Aquí se dice el embudo entero, de dónde salió cada promoción y
   qué espera turno. Todo sale de los datos menos el censo del barrido, que
   vive en LONGLIST.md y entra por data-localizadas.
════════════════════════════════════ */
(function () {
  const caja = document.getElementById('estadoEdicion');
  if (!caja || typeof PROMOS === 'undefined') return;

  const d = caja.dataset;
  const top = PROMOS.filter(p => p.top10);
  const puestos = Math.max(...top.map(p => p.rank));
  const barrido = PROMOS.filter(p => p.barrido);
  const espera = typeof EN_ESPERA !== 'undefined' ? EN_ESPERA : [];
  // Con empates, el numero de fichas y el de puestos no tienen por que coincidir:
  // se dice cuantas los comparten y no se da por hecho que se note.
  const compartidas = top.filter(p => p.empatadas.length).length;

  const fila = (p) => `<li><b>${p.name}</b> <span>· ${p.municipio}</span>` +
    (p.top10 ? ` <span>· position ${String(p.rank).padStart(2, '0')}</span>` : ' <span>· mention</span>') + '</li>';

  caja.innerHTML = `
    <div class="ed-panel">
    <dl class="ed-embudo">
      <div class="ed-paso"><dt>Identified</dt>
        <dd>${d.localizadas}<small>Developments found in the market sweep</small></dd></div>
      <div class="ed-paso"><dt>Assessed</dt>
        <dd>${PROMOS.length}<small>They meet the four requirements and have the data to be scored</small></dd></div>
      <div class="ed-paso"><dt>Positions</dt>
        <dd>${puestos}<small>${top.length} profiles published${compartidas ? `, of which ${compartidas} share a position with another` : ''}</small></dd></div>
    </dl>

    <div class="ed-columnas">
      <div class="ed-bloque ed-ancho">
        <h3>Added in the sweep</h3>
        <ul class="ed-lista">${barrido.map(fila).join('')}</ul>
      </div>
      <div class="ed-bloque">
        <h3>Queued for the next edition</h3>
        <ul class="ed-lista">${espera.map(e =>
          `<li><b>${e.name}</b> <span>· ${e.municipio}</span><em>${e.motivo}</em></li>`).join('')}</ul>
      </div>
    </div>
    </div>

    <p class="ed-cierre">Data closed on <b>${d.fecha}</b> under matrix <b>${d.matriz}</b>.
    Next revision: <b>${d.proxima}</b>. Changing one figure recalculates the entire ranking, so
    positions can move between editions. What is left out, and why, is set out on the
    <a href="fuentes.html">sources page</a>.</p>`;
})();


/* Menú desplegable del nav */
(function () {
  const btn = document.querySelector('.topnav-toggle'), menu = document.getElementById('menuPaginas');
  if (!btn || !menu) return;
  const abrir = v => { menu.hidden = !v; btn.setAttribute('aria-expanded', String(v)); };
  btn.addEventListener('click', () => abrir(menu.hidden));
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.topnav-menu')) abrir(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { abrir(false); btn.focus(); } });
})();

/* Cards desplegables de la función: apertura y cierre animados (altura), sin JS siguen funcionando como <details> */
(function () {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('animate' in document.body)) return;
  const grupos = [[...document.querySelectorAll('details.formula-item')], [...document.querySelectorAll('details.nota-item')]];
  const opts = { duration: 340, easing: 'cubic-bezier(.25,.46,.45,.94)' };
  const cerrar = d => {
    const det = d.querySelector('.fi-detalle, .ni-detalle');
    if (!d.open || !det) return;
    if (d._anim) d._anim.cancel();
    det.style.overflow = 'hidden';
    d._anim = det.animate([{ height: det.offsetHeight + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], opts);
    d._anim.onfinish = () => { d.open = false; det.style.height = det.style.overflow = ''; d._anim = null; };
  };
  const abrir = d => {
    const det = d.querySelector('.fi-detalle, .ni-detalle');
    if (d.open || !det) return;
    if (d._anim) d._anim.cancel();
    d.open = true;
    det.style.overflow = 'hidden';
    const h = det.offsetHeight;
    d._anim = det.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], opts);
    d._anim.onfinish = () => { det.style.height = det.style.overflow = ''; d._anim = null; };
  };
  grupos.forEach(items => items.forEach(d => {
    const sum = d.querySelector('summary');
    if (!sum) return;
    sum.addEventListener('click', e => {
      e.preventDefault();
      if (d.open) { cerrar(d); return; }
      items.forEach(o => { if (o !== d) cerrar(o); });   // solo una abierta por grupo: la anterior se retrae
      abrir(d);
    });
  }));
})();

/* Reveal on scroll — defensivo: el contenido es visible sin JS */
(function () {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || prefersReduced) return;
  document.documentElement.classList.add('js-reveal-armed');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 2000);
})();
