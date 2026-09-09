const COURSES = [
  { id:'real-club-valderrama', name:"Real Club Valderrama", municipio:"Sotogrande", disenador:"R. Trent Jones Sr.", ano:1974, hoyos:"18 · 71", membresia:"Privado de socios", gf:"500–575", palmares:"Ryder Cup 1997 · Andalucía Masters · LIV", stars:4, lat:36.28552, lng:-5.32989 },
  { id:'real-club-de-golf-sotogrande', name:"Real Club de Golf Sotogrande", municipio:"Sotogrande", disenador:"R. Trent Jones Sr.", ano:1964, hoyos:"18 · 72 (+9)", membresia:"Privado de socios", gf:"350–475", palmares:"Spanish Open · Andalucía Masters 2025", stars:4, lat:36.28011, lng:-5.29194 },
  { id:'la-reserva-club-sotogrande', name:"La Reserva Club Sotogrande", municipio:"Sotogrande", disenador:"Cabell B. Robinson", ano:2003, hoyos:"18 · 72", membresia:"Semi-privado", gf:"230–285", palmares:"Andalucía Masters LET · Solheim Pro-Am", stars:4, lat:36.29466, lng:-5.32832 },
  { id:'finca-cortesin-golf', name:"Finca Cortesín Golf", municipio:"Casares", disenador:"Cabell B. Robinson", ano:2006, hoyos:"18 · 72", membresia:"Resort", gf:"350–400", palmares:"Solheim Cup 2023 · Volvo World Match Play", stars:4, lat:36.39646, lng:-5.22386 },
  { id:'real-club-de-golf-las-brisas', name:"Real Club de Golf Las Brisas", municipio:"Marbella · Nueva Andalucía", disenador:"R. Trent Jones Sr.", ano:1968, hoyos:"18 · 72", membresia:"Privado de socios", gf:"250–310", palmares:"World Cup 1973 · Open de España LET 2024-25", stars:4, lat:36.50542, lng:-4.96799 },
  { id:'aloha-golf-club', name:"Aloha Golf Club", municipio:"Marbella · Nueva Andalucía", disenador:"Javier Arana", ano:1975, hoyos:"18 · 72 (+9)", membresia:"Privado de socios", gf:"200–260", palmares:"Andalucía Masters 2007", stars:3, lat:36.51157, lng:-4.96094 },
  { id:'los-naranjos-golf', name:"Los Naranjos Golf", municipio:"Marbella · Nueva Andalucía", disenador:"R. Trent Jones Sr.", ano:1977, hoyos:"18 · 72", membresia:"Privado / resort", gf:"150–200", palmares:"Spanish PGA · Mediterranean Open", stars:3, lat:36.51007, lng:-4.97927 },
  { id:'real-club-de-golf-guadalmina-sur', name:"Real Club de Golf Guadalmina Sur", municipio:"San Pedro", disenador:"Javier Arana", ano:1959, hoyos:"18 · 71", membresia:"Privado de socios", gf:"110–150", palmares:"Mediterranean Open · Challenge Tour", stars:3, lat:36.47555, lng:-5.0026 },
  { id:'rio-real-golf', name:"Río Real Golf", municipio:"Marbella Este", disenador:"Javier Arana", ano:1965, hoyos:"18 · 72", membresia:"Resort", gf:"130–175", palmares:"Eventos amateur históricos", stars:3, lat:36.50979, lng:-4.84406 },
  { id:'marbella-club-golf-resort', name:"Marbella Club Golf Resort", municipio:"Benahavís", disenador:"Dave Thomas", ano:1999, hoyos:"18 · 71", membresia:"Privado / hotel", gf:"180–240", palmares:"—", stars:3, lat:36.49899, lng:-5.0566 },
  { id:'la-quinta-golf', name:"La Quinta Golf", municipio:"Benahavís", disenador:"Piñero & Garrido", ano:1989, hoyos:"27 · 72", membresia:"Resort", gf:"110–150", palmares:"Benahavís Senior Masters", stars:3, lat:36.51265, lng:-4.99664 },
  { id:'flamingos-villa-padierna', name:"Flamingos Villa Padierna", municipio:"Benahavís", disenador:"A. García Garrido", ano:2002, hoyos:"18 · 71", membresia:"Resort de lujo", gf:"140–185", palmares:"Volvo World Match Play · Spanish Senior", stars:3, lat:36.47452, lng:-5.05606 },
  { id:'san-roque-club-old', name:"San Roque Club Old", municipio:"San Roque", disenador:"Dave Thomas + Seve", ano:1990, hoyos:"18 · 72", membresia:"Privado / resort", gf:"150–200", palmares:"Spanish Open 2005-06", stars:3, lat:36.26754, lng:-5.33381 },
  { id:'la-cala-resort-asia', name:"La Cala Resort Asia", municipio:"Mijas", disenador:"Cabell B. Robinson", ano:1991, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"Spanish PGA", stars:3, lat:36.53966, lng:-4.71691 },
  { id:'mijas-golf-los-lagos', name:"Mijas Golf Los Lagos", municipio:"Mijas Costa", disenador:"R. Trent Jones Sr.", ano:1976, hoyos:"18 · 71", membresia:"Resort", gf:"90–130", palmares:"Spanish Open histórico", stars:3, lat:36.55014, lng:-4.66506 },
  { id:'golf-torrequebrada', name:"Golf Torrequebrada", municipio:"Benalmádena", disenador:"Pepe Gancedo", ano:1976, hoyos:"18 · 72", membresia:"Semi-privado", gf:"110–150", palmares:"Spanish Open 1979", stars:3, lat:36.58603, lng:-4.54924 },
  { id:'la-zagaleta-old', name:"La Zagaleta Old", municipio:"Benahavís", disenador:"Bradford Benz", ano:1991, hoyos:"18 · 72", membresia:"Estrict. privado", gf:"Solo socios", palmares:"—", stars:3, lat:36.53239, lng:-5.02976 },
  { id:'la-hacienda-alcaidesa-links', name:"La Hacienda Alcaidesa Links", municipio:"La Línea", disenador:"Alliss & Clark", ano:1992, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.24353, lng:-5.32072 },
  { id:'la-hacienda-heathland', name:"La Hacienda Heathland", municipio:"La Línea", disenador:"Dave Thomas", ano:2007, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.24674, lng:-5.31579 },
  { id:'san-roque-club-new', name:"San Roque Club New", municipio:"San Roque", disenador:"Dye & Ballesteros", ano:2003, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.27047, lng:-5.32966 },
  { id:'la-canada-golf', name:"La Cañada Golf", municipio:"Sotogrande", disenador:"Trent Jones / Thomas", ano:1982, hoyos:"18 · 71", membresia:"Municipal", gf:"80–110", palmares:"Q-School · cuna Sergio García", stars:2, lat:36.29483, lng:-5.31196 },
  { id:'the-alto-club-almenara', name:"The Alto Club (Almenara)", municipio:"Sotogrande Alto", disenador:"Dave Thomas", ano:1998, hoyos:"27 · 36", membresia:"Resort", gf:"100–150", palmares:"—", stars:2, lat:36.27561, lng:-5.34595 },
  { id:'dona-julia-golf', name:"Doña Julia Golf", municipio:"Casares", disenador:"A. García Garrido", ano:2005, hoyos:"18 · 71", membresia:"Público", gf:"75–110", palmares:"—", stars:2, lat:36.38813, lng:-5.2345 },
  { id:'la-duquesa-golf', name:"La Duquesa Golf", municipio:"Manilva", disenador:"R. Trent Jones Sr.", ano:1987, hoyos:"18 · 72", membresia:"Semi-privado", gf:"65–95", palmares:"—", stars:2, lat:36.3578, lng:-5.23844 },
  { id:'atalaya-old', name:"Atalaya Old", municipio:"Estepona", disenador:"B. von Limburger", ano:1968, hoyos:"18 · 72", membresia:"Semi-privado", gf:"90–130", palmares:"Spanish Open (70s)", stars:2, lat:36.4879, lng:-5.02248 },
  { id:'atalaya-new', name:"Atalaya New", municipio:"Estepona", disenador:"Paul Krings", ano:1990, hoyos:"18 · 72", membresia:"Semi-privado", gf:"70–100", palmares:"—", stars:2, lat:36.4879, lng:-5.02248 },
  { id:'el-paraiso-golf', name:"El Paraíso Golf", municipio:"Estepona", disenador:"G. Player & R. Kirby", ano:1973, hoyos:"18 · 71", membresia:"Privado de socios", gf:"100–130", palmares:"—", stars:2, lat:36.47541, lng:-5.03374 },
  { id:'estepona-golf', name:"Estepona Golf", municipio:"Estepona", disenador:"J.L. López Martínez", ano:1989, hoyos:"18 · 72", membresia:"Público", gf:"65–95", palmares:"—", stars:2, lat:36.41297, lng:-5.21219 },
  { id:'valle-romano-golf', name:"Valle Romano Golf", municipio:"Estepona", disenador:"Cabell B. Robinson", ano:2010, hoyos:"18 · 71", membresia:"Resort", gf:"95–130", palmares:"Challenge Tour 2018-19", stars:2, lat:36.4277, lng:-5.19541 },
  { id:'azata-golf', name:"Azata Golf", municipio:"Estepona", disenador:"Stirling & Martin", ano:2020, hoyos:"18 · 71", membresia:"Público", gf:"75–110", palmares:"—", stars:2, lat:36.42447, lng:-5.20189 },
  { id:'los-arqueros-golf', name:"Los Arqueros Golf", municipio:"Benahavís", disenador:"Severiano Ballesteros", ano:1991, hoyos:"18 · 71", membresia:"Resort", gf:"95–130", palmares:"Spanish Senior Open", stars:2, lat:36.523, lng:-5.01 },
  { id:'alferini-villa-padierna', name:"Alferini Villa Padierna", municipio:"Benahavís", disenador:"C. Guerrero Bautista", ano:2007, hoyos:"18 · 73", membresia:"Resort", gf:"140–185", palmares:"—", stars:2, lat:36.49123, lng:-5.04838 },
  { id:'la-zagaleta-los-barrancos', name:"La Zagaleta Los Barrancos", municipio:"Benahavís", disenador:"Bradford Benz", ano:2005, hoyos:"18 · 72", membresia:"Estrict. privado", gf:"Solo socios", palmares:"—", stars:2, lat:36.53, lng:-5.022 },
  { id:'guadalmina-norte', name:"Guadalmina Norte", municipio:"San Pedro", disenador:"Folco Nardi", ano:1973, hoyos:"18 · 71", membresia:"Privado de socios", gf:"85–115", palmares:"—", stars:2, lat:36.47555, lng:-5.0026 },
  { id:'higueron-marbella-golf', name:"Higuerón Marbella Golf", municipio:"Marbella Este", disenador:"R. Trent Jones Jr.", ano:1989, hoyos:"18 · 72", membresia:"Resort", gf:"90–130", palmares:"ex Marbella G&CC", stars:2, lat:36.513, lng:-4.813 },
  { id:'santa-maria-golf', name:"Santa María Golf", municipio:"Elviria", disenador:"A. García Garrido", ano:1991, hoyos:"18 · 71", membresia:"Semi-privado", gf:"80–115", palmares:"—", stars:2, lat:36.50999, lng:-4.76803 },
  { id:'santa-clara-golf-marbella', name:"Santa Clara Golf Marbella", municipio:"Marbella Este", disenador:"E. Canales Busquets", ano:2001, hoyos:"18 · 71", membresia:"Público", gf:"75–110", palmares:"—", stars:2, lat:36.51087, lng:-4.82447 },
  { id:'cabopino-golf', name:"Cabopino Golf", municipio:"Cabopino", disenador:"Juan Ligués Creus", ano:1990, hoyos:"18 · 71", membresia:"Público", gf:"65–95", palmares:"—", stars:2, lat:36.49474, lng:-4.74237 },
  { id:'la-cala-resort-america', name:"La Cala Resort América", municipio:"Mijas", disenador:"Cabell B. Robinson", ano:1991, hoyos:"18 · 72", membresia:"Resort", gf:"110–150", palmares:"—", stars:2, lat:36.54083, lng:-4.72767 },
  { id:'la-cala-resort-europa', name:"La Cala Resort Europa", municipio:"Mijas", disenador:"Cabell B. Robinson", ano:2005, hoyos:"18 · 71", membresia:"Resort", gf:"100–140", palmares:"—", stars:2, lat:36.54601, lng:-4.72304 },
  { id:'mijas-golf-los-olivos', name:"Mijas Golf Los Olivos", municipio:"Mijas Costa", disenador:"R. Trent Jones Sr.", ano:1984, hoyos:"18 · 72", membresia:"Resort", gf:"80–115", palmares:"—", stars:2, lat:36.55338, lng:-4.67238 },
  { id:'santana-golf', name:"Santana Golf", municipio:"La Cala", disenador:"Cabell B. Robinson", ano:2004, hoyos:"18 · 72", membresia:"Resort", gf:"95–130", palmares:"Open de España LET", stars:2, lat:36.54351, lng:-4.70001 },
  { id:'el-chaparral-golf', name:"El Chaparral Golf", municipio:"Mijas Costa", disenador:"Pepe Gancedo", ano:1991, hoyos:"18 · 72", membresia:"Resort", gf:"80–115", palmares:"—", stars:2, lat:36.51352, lng:-4.6641 },
  { id:'calanova-golf', name:"Calanova Golf", municipio:"La Cala", disenador:"J. García Mayoral", ano:2006, hoyos:"18 · 72", membresia:"Resort", gf:"75–110", palmares:"—", stars:2, lat:36.51244, lng:-4.70529 },
  { id:'miraflores-golf', name:"Miraflores Golf", municipio:"Mijas Costa", disenador:"Folco Nardi", ano:1990, hoyos:"18 · 71", membresia:"Semi-privado", gf:"65–95", palmares:"—", stars:2, lat:36.50187, lng:-4.70576 },
  { id:'parador-malaga-golf', name:"Parador Málaga Golf", municipio:"Churriana", disenador:"H.S. Colt (1925)", ano:1925, hoyos:"18+9 · 72", membresia:"Resort", gf:"75–110", palmares:"Andalucía Open Eur Tour", stars:2, lat:36.6542, lng:-4.47172 },
  { id:'real-club-guadalhorce', name:"Real Club Guadalhorce", municipio:"Campanillas", disenador:"K. Kuronen", ano:1990, hoyos:"18 · 72", membresia:"Privado de socios", gf:"75–110", palmares:"—", stars:2, lat:36.69937, lng:-4.52879 },
  { id:'lauro-golf', name:"Lauro Golf", municipio:"Alhaurín de la Torre", disenador:"Folco Nardi", ano:1992, hoyos:"27 · 72", membresia:"Resort", gf:"65–95", palmares:"—", stars:2, lat:36.65177, lng:-4.6285 },
  { id:'alhaurin-golf', name:"Alhaurín Golf", municipio:"Alhaurín el Grande", disenador:"Severiano Ballesteros", ano:1994, hoyos:"18 · 72", membresia:"Resort", gf:"70–100", palmares:"—", stars:2, lat:36.60887, lng:-4.70518 },
  { id:'real-club-el-candado', name:"Real Club El Candado", municipio:"Málaga Este", disenador:"C. Fernández Caleya", ano:1965, hoyos:"9 · 35", membresia:"Privado de socios", gf:"55–75", palmares:"—", stars:2, lat:36.71962, lng:-4.34142 },
  { id:'anoreta-golf', name:"Añoreta Golf", municipio:"Rincón Victoria", disenador:"J.M. Cañizares", ano:1990, hoyos:"18 · 71", membresia:"Resort", gf:"75–105", palmares:"—", stars:2, lat:36.72335, lng:-4.24174 },
  { id:'baviera-golf', name:"Baviera Golf", municipio:"Caleta de Vélez", disenador:"J.M. Cañizares", ano:2001, hoyos:"18 · 71", membresia:"Público", gf:"70–95", palmares:"—", stars:2, lat:36.755, lng:-4.08 },
  { id:'magna-marbella', name:"Magna Marbella", municipio:"Nueva Andalucía", disenador:"C.B. Robinson", ano:2002, hoyos:"9 · 29", membresia:"Público", gf:"30–45", palmares:"—", stars:1, lat:36.50582, lng:-4.97874 },
  { id:'greenlife-golf', name:"Greenlife Golf", municipio:"Elviria Hills", disenador:"Greenlife", ano:2000, hoyos:"9 par-3", membresia:"Público", gf:"25–40", palmares:"—", stars:1, lat:36.50539, lng:-4.77954 },
  { id:'dama-de-noche', name:"Dama de Noche", municipio:"Río Verde", disenador:"E. Canales", ano:1991, hoyos:"9 · 35", membresia:"Público", gf:"35–55", palmares:"Iluminación nocturna", stars:1, lat:36.50141, lng:-4.94846 },
  { id:'tramores-villa-padierna', name:"Tramores Villa Padierna", municipio:"Benahavís", disenador:"C. Guerrero", ano:2007, hoyos:"18 · 63", membresia:"Resort", gf:"80–110", palmares:"—", stars:1, lat:36.47837, lng:-5.04565 },
  { id:'el-higueral', name:"El Higueral", municipio:"Benahavís", disenador:"Roderick Segar", ano:2008, hoyos:"9 · 36", membresia:"Público", gf:"45–65", palmares:"—", stars:1, lat:36.50168, lng:-5.02045 },
  { id:'casares-costa-golf', name:"Casares Costa Golf", municipio:"Casares", disenador:"J.C. Martínez", ano:2002, hoyos:"9 · 34", membresia:"Público", gf:"35–50", palmares:"—", stars:1, lat:36.413, lng:-5.231 },
  { id:'la-resina-golf', name:"La Resina Golf", municipio:"Estepona", disenador:"Cooke & Smith", ano:2005, hoyos:"9 par-3", membresia:"Público", gf:"30–45", palmares:"—", stars:1, lat:36.46677, lng:-5.07559 },
  { id:'la-noria-golf', name:"La Noria Golf", municipio:"La Cala", disenador:"F. Navarro Pastor", ano:2003, hoyos:"9 · 33", membresia:"Público", gf:"35–55", palmares:"—", stars:1, lat:36.5074, lng:-4.68762 },
  { id:'la-siesta-golf', name:"La Siesta Golf", municipio:"Calahonda", disenador:"E. Canales", ano:1990, hoyos:"9 · 30", membresia:"Público", gf:"30–45", palmares:"—", stars:1, lat:36.49892, lng:-4.72417 },
];

/* Fotografía de campos. `placeholder:true` = sin imagen real.
   `licPendiente:true` = pendiente de autorización escrita antes de publicar. */
const FOTOS_CAMPO = {
 "real-club-valderrama": {
  "src": "images/golf/real-club-valderrama.jpg",
  "pie": "Green y bunkers del campo.",
  "credito": "Wikimedia Commons · CC BY 2.0 · Pablo Herrero",
  "url": "https://commons.wikimedia.org/wiki/File%3AReal_Club_Valderrama_-_2008_%281%29.jpg"
 },
 "la-reserva-club-sotogrande": {
  "src": "images/golf/la-reserva-club-sotogrande.jpg",
  "pie": "Vista del campo con el club house al fondo.",
  "credito": "Wikimedia Commons · CC BY 4.0 · sotogrande",
  "url": "https://commons.wikimedia.org/wiki/File%3ASotogrande-lareserva.jpg"
 },
 "los-naranjos-golf": {
  "src": "images/golf/los-naranjos-golf.jpg",
  "pie": "Calle y club house con La Concha al fondo.",
  "credito": "Wikimedia Commons · CC BY-SA 3.0 · FalGordo",
  "url": "https://commons.wikimedia.org/wiki/File%3ALos_Naranjos_Golf_Club.JPG"
 },
 "golf-torrequebrada": {
  "src": "images/golf/golf-torrequebrada.jpg",
  "pie": "Lago y palmeras del recorrido.",
  "credito": "Wikimedia Commons · CC BY-SA 4.0 · Beata77",
  "url": "https://commons.wikimedia.org/wiki/File%3ABenalmadena-golf-costa-del-sol-torrequebrada.jpg"
 },
 "atalaya-old": {
  "src": "images/golf/atalaya-old.jpg",
  "pie": "El recorrido al atardecer.",
  "credito": "Wikimedia Commons · CC BY-SA 4.0 · ANAGSPC",
  "url": "https://commons.wikimedia.org/wiki/File%3AAtalaya_Golf_%26_Country_Club_en_Estepona.jpg"
 },
 "mijas-golf-los-lagos": {
  "src": "images/golf/mijas-golf-los-lagos.jpg",
  "pie": "Acceso y edificio de club.",
  "credito": "Wikimedia Commons · CC BY-SA 3.0 · Tyk",
  "url": "https://commons.wikimedia.org/wiki/File%3AEl_Green_Andaluz%2C_Mijas_Golf_07.jpg"
 },
 "la-hacienda-heathland": {
  "src": "images/golf/la-hacienda-heathland.jpg",
  "pie": "Links costero de Heathland.",
  "credito": "Wikimedia Commons · CC BY 3.0 · Jose Luis Filpo Cabana",
  "url": "https://commons.wikimedia.org/wiki/File%3AAlcaidesa_Heathland.jpg"
 },
 "rio-real-golf": {
  "src": "images/golf/rio-real-golf.jpg",
  "pie": "El recorrido de Javier Arana junto al mar.",
  "credito": "Archivo Malashpina",
  "url": null
 },
 "real-club-de-golf-sotogrande": {
  "src": "images/golf/real-club-de-golf-sotogrande.jpg",
  "pie": "Green entre palmeras y lago.",
  "credito": "© golfsotogrande.com · pendiente de autorización",
  "url": "https://golfsotogrande.com",
  "licPendiente": true
 },
 "finca-cortesin-golf": {
  "src": "images/golf/finca-cortesin-golf.jpg",
  "pie": null,
  "credito": "Placeholder · pedir press kit al club",
  "url": null,
  "placeholder": true
 },
 "real-club-de-golf-las-brisas": {
  "src": "images/golf/real-club-de-golf-las-brisas.jpg",
  "pie": null,
  "credito": "Placeholder · pedir press kit al club",
  "url": null,
  "placeholder": true
 },
 "aloha-golf-club": {
  "src": "images/golf/aloha-golf-club.jpg",
  "pie": "Búnker y calle al atardecer.",
  "credito": "© clubdegolfaloha.com · pendiente de autorización",
  "url": "https://clubdegolfaloha.com",
  "licPendiente": true
 },
 "real-club-de-golf-guadalmina-sur": {
  "src": "images/golf/real-club-de-golf-guadalmina-sur.jpg",
  "pie": "Vista aérea del recorrido.",
  "credito": "© guadalminagolf.com · pendiente de autorización",
  "url": "https://guadalminagolf.com",
  "licPendiente": true
 },
 "marbella-club-golf-resort": {
  "src": "images/golf/marbella-club-golf-resort.jpg",
  "pie": "El hoyo 18, junto al lago.",
  "credito": "© marbellaclub.com · pendiente de autorización",
  "url": "https://marbellaclub.com",
  "licPendiente": true
 },
 "la-cala-resort-asia": {
  "src": "images/golf/la-cala-resort-asia.jpg",
  "pie": "El 18 del Asia con la sierra de Mijas al fondo.",
  "credito": "© lacala.com · pendiente de autorización",
  "url": "https://lacala.com",
  "licPendiente": true
 },
 "lauro-golf": {
  "src": "images/golf/lauro-golf.jpg",
  "pie": "Calle con encinas y la sierra al fondo.",
  "credito": "Archivo del proyecto v5 · origen por verificar",
  "url": null,
  "licPendiente": true
 },
 "higueron-marbella-golf": {
  "src": "images/golf/higueron-marbella-golf.jpg",
  "pie": "Vista aérea del recorrido, ex Marbella G&CC.",
  "credito": "Archivo del proyecto v5 · origen por verificar",
  "url": null,
  "licPendiente": true
 },
 "santa-maria-golf": {
  "src": "images/golf/santa-maria-golf.jpg",
  "pie": "Green amplio con pinar de Elviria.",
  "credito": "Archivo del proyecto v5 · origen por verificar",
  "url": null,
  "licPendiente": true
 },
 "cabopino-golf": {
  "src": "images/golf/cabopino-golf.jpg",
  "pie": "Green sobre el mar en Cabopino.",
  "credito": "Archivo del proyecto v5 · origen por verificar",
  "url": null,
  "licPendiente": true
 }
};

const PROMOS = [

  { id:'villas-alamos', render:{ dominio:"sotograndehome.com", pie:"Villa con piscina y jardín." }, name:'Las Villas de los Álamos', sub:'ACCIONA Inmobiliaria',
    municipio:'Sotogrande (Cádiz)', zona:'Sotogrande Alto · Los Álamos', lat:36.29192, lng:-5.31299,
    image:'images/promos/villas-alamos.jpg',
    promotor:'ACCIONA Inmobiliaria', estudio:'Torras y Sierra', estudioFuente:'inmobiliaria.acciona.com', derechosGolf:null,
    tipologia:'Villas y townhouses 3–4 dorm.', unidades:49,
    precio:'€830.000 – €3.500.000', precioDesde:'€830.000', precioEstimado:false, eurM2:8500,
    estado:'En construcción', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['la-canada-golf',1,''],['real-club-valderrama',6,''],['la-reserva-club-sotogrande',7,''],['san-roque-club-old',8,''],['the-alto-club-almenara',8,''],['san-roque-club-new',10,''],['real-club-de-golf-sotogrande',11,''],['la-hacienda-alcaidesa-links',12,''],['la-hacienda-heathland',14,'']],
    d:{ a5:0,  a5why:'En Sotogrande Alto, no dentro de un resort de golf. Valderrama queda a 3 minutos, pero es club de socios.',
        a6:5,  a6why:'Salida directa a la A-7 por Sotogrande, sin travesías urbanas.',
        b1:7,  b1why:'Torras y Sierra, estudio nacional de trayectoria; sin marca internacional.',
        b4:7,  b4why:'Jardín privado y piscina en cada casa, pista de pádel; sin club house ni beach club propios.' },
    tags:['Torras y Sierra','49 viviendas','Valderrama a 3′'],
    rationale:'<strong>Ficha corregida en esta edición.</strong> La promoción no está dentro de La Reserva, como figuraba: ACCIONA la sitúa en <strong>Sotogrande Alto</strong>, y su coordenada publicada la deja a 1,2 km de Valderrama. Pierde el bonus de resort —no está dentro de ninguno— pero gana el mejor acceso del ranking a golf de élite: Valderrama a tres minutos, RCG Sotogrande y San Roque Old a siete. Que ambos sean clubes de socios es justo lo que el coeficiente de jugabilidad descuenta.' },

  { id:'village-verde', render:{ dominio:"villageverdesotogrande.com", pie:"El resort al atardecer." }, name:'Village Verde', sub:'La Reserva de Sotogrande',
    municipio:'Sotogrande (Cádiz)', zona:'La Reserva Club', lat:36.28943, lng:-5.32142,
    image:'images/promos/village-verde.jpg',
    promotor:'Sotogrande SA', estudio:'L35 Architects', estudioFuente:'l35.com',
    derechosGolf:'La membresía de La Reserva Club se contrata aparte: no va incluida en la compra. Green fee de 18 hoyos desde 199 €.', derechosFuente:'lareservaclubsotogrande.com',
    tipologia:'Apartamentos y áticos sostenibles 2–4 dorm.', unidades:124,
    precio:'€830.000 – €2.400.000', precioDesde:'€830.000', precioEstimado:false, eurM2:7500,
    estado:'Fase 1 entregada · Fase 2 en marcha', entrega:'2024–2025',
    campoPropio:'la-reserva-club-sotogrande', campoPropioPendiente:null,
    cursos:[['la-reserva-club-sotogrande',0,'In-resort'],['real-club-valderrama',3,''],['la-canada-golf',4,''],['the-alto-club-almenara',6,''],['san-roque-club-old',7,''],['san-roque-club-new',8,''],['real-club-de-golf-sotogrande',9,''],['la-hacienda-alcaidesa-links',10,''],['la-hacienda-heathland',12,'']],
    d:{ a5:10, a5why:'Dentro de La Reserva Club (★★★★ propio).',
        a6:5,  a6why:'Mismo acceso viario que Los Álamos.',
        b1:7,  b1why:'Diseño sostenible certificado; sin firma internacional acreditada.',
        b4:10, b4why:'Acceso pleno a los servicios de La Reserva Club.' },
    tags:['In-resort 4★','Sostenible','Wellness'],
    rationale:'La operación residencial más ambiciosa de Sotogrande SA, con arquitectura de L35 y certificación BREEAM. Es la única del podio que sí está dentro de La Reserva Club, y su ★★★★ propio lo compensa: dos de los otros tres campos de élite que tiene a mano son de socios. Pierde el podio por escala — 122 unidades hunden su factor exclusividad.' },

  { id:'marea-missoni', render:{ dominio:"marea-marbella.com", pie:"Piscina y terraza sobre el mar." }, name:'MAREA by Missoni', sub:'Finca Cortesín · Hotel · Golf · Spa',
    municipio:'Casares', zona:'Finca Cortesín Resort', lat:36.379, lng:-5.224,
    image:'images/promos/marea-missoni.jpg',
    promotor:'Dar Global', estudio:'HCP Arquitectos', estudioFuente:'hcparquitectos.com',
    derechosGolf:null, derechosNota:'Dar Global no publica derechos de golf sobre Finca Cortesín para propietarios.',
    tipologia:'Branded residences 2–4 dorm.', unidades:64,
    precio:'€1.000.000 – €3.560.000', precioDesde:'€1.000.000', precioEstimado:false, eurM2:14000,
    estado:'En construcción', entrega:'2027',
    campoPropio:'finca-cortesin-golf', campoPropioPendiente:null,
    cursos:[['finca-cortesin-golf',0,'In-resort'],['dona-julia-golf',4,''],['la-duquesa-golf',6,''],['azata-golf',12,''],['casares-costa-golf',12,''],['estepona-golf',12,''],['valle-romano-golf',14,'']],
    d:{ a5:10, a5why:'Dentro de Finca Cortesín (★★★★ propio, de resort y reservable).',
        a6:5,  a6why:'Acceso directo a la A-7 por Casares Costa.',
        b1:10, b1why:'Branded residence Missoni Casa — marca reconocida, entregada con el proyecto.',
        b4:10, b4why:'Hotel 5★ GL, spa, beach club, cuatro restaurantes, concierge.' },
    tags:['Branded Missoni','In-resort 4★','Solheim Cup 2023','Beach club'],
    rationale:'<strong>Nuevo número uno.</strong> Su ★★★★ es el <strong>único del ranking que un propietario puede jugar sin ser socio</strong>. Sede de la Solheim Cup 2023 y del Volvo World Match Play, con residencia de marca y el mejor bloque B de la lista. Casares le sigue costando densidad, pero ya no le cuesta el podio.' },

  { id:'quercus', render:{ dominio:"realdelaquinta.com", pie:"El lago de Real de La Quinta." }, name:'Real de La Quinta · Quercus', sub:'Future Banyan Tree Residences',
    municipio:'Benahavís', zona:'Real de La Quinta Resort', lat:36.515, lng:-5.000,
    image:'images/promos/quercus.jpg',
    promotor:'Grupo La Quinta', estudio:'González & Jacobson', estudioFuente:'gjarquitectura.com',
    derechosGolf:null, derechosNota:'El Lago Club se describe para residentes, pero el promotor no publica si la compra incluye membresía (realdelaquinta.com).',
    tipologia:'Apartamentos y áticos 2–4 dorm.', unidades:102, unidadesNota:'Fases I+II completas, 18 bloques (González & Jacobson). La ficha de mayo puntuaba sólo 36 de la fase comercializada.',
    precio:'€1.300.000 – €3.000.000', precioDesde:'€1.300.000', precioEstimado:false, eurM2:9000,
    estado:'En construcción', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:'El Lago Club · Jack Nicklaus Design — en desarrollo, no operativo',
    cursos:[['la-quinta-golf',1,''],['los-arqueros-golf',6,''],['los-naranjos-golf',6,''],['magna-marbella',7,''],['aloha-golf-club',9,''],['el-higueral',9,''],['real-club-de-golf-las-brisas',9,''],['guadalmina-norte',12,''],['real-club-de-golf-guadalmina-sur',12,''],['alferini-villa-padierna',13,''],['atalaya-new',13,''],['atalaya-old',13,''],['el-paraiso-golf',14,''],['la-zagaleta-old',14,''],['dama-de-noche',15,'']],
    d:{ a5:0,  a5why:'Su campo propio (El Lago Club) no está operativo: por regla v1.1 no puntúa hasta la entrega.',
        a6:3,  a6why:'Carretera de sierra hasta la A-7; buena pero no directa.',
        b1:7,  b1why:'Banyan Tree anunciada para 2026 pero no entregada: tope de 7 por regla de marca pendiente.',
        b4:10, b4why:'Lago navegable, club deportivo, spa y beach club previstos en el masterplan.' },
    tags:['Banyan Tree 2026','Golf Valley','36 unidades'],
    rationale:'Sigue cuarto, pero le cuesta caro el rigor: pierde el bonus de campo propio (El Lago no existe todavía) y su acceso a Golf Valley se descuenta porque Las Brisas, Aloha y Guadalmina Sur son de socios. Lo que sostiene la posición es la exclusividad — 36 unidades — y un amenity deck de resort completo.' },

  { id:'epic-fendi', render:{ dominio:"epicmarbella.com", pie:"El conjunto con La Concha al fondo." }, name:'EPIC Marbella by Fendi', sub:'Casa Branded Residences',
    municipio:'Marbella', zona:'Golden Mile · Nagüeles', lat:36.516, lng:-4.911,
    image:'images/promos/epic-fendi.jpg',
    promotor:'Sierra Blanca Estates', estudio:null, estudioNota:'Comprobado en epicmarbella.com y sierrablancaestates.com: no acreditan estudio de arquitectura. Fendi Casa y The One Atelier firman interiorismo y mobiliario, no el edificio.', derechosGolf:null, derechosNota:'Comprobado en epicmarbella.com: el golf sólo aparece como amenidad cercana, sin derechos para propietarios.',
    tipologia:'Branded apartments y áticos', unidades:56,
    precio:'€1.750.000 – €4.450.000', precioDesde:'€1.750.000', precioEstimado:false, eurM2:15000,
    estado:'En fases · construcción', entrega:'2024–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['dama-de-noche',8,''],['aloha-golf-club',10,''],['los-naranjos-golf',13,''],['real-club-de-golf-las-brisas',13,''],['rio-real-golf',13,''],['santa-maria-golf',13,''],['magna-marbella',14,'']],
    d:{ a5:0,  a5why:'No está en resort ni a pie de campo.',
        a6:1,  a6why:'Depende del eje Marbella centro — el peor tramo de congestión de la costa.',
        b1:10, b1why:'Fendi Casa: marca internacional reconocida, interiorismo entregado con la unidad.',
        b4:10, b4why:'Spa, gym, cine, concierge 24h, piscinas premium, servicio de hotel.' },
    tags:['Fendi Casa','Golden Mile','€15k/m²'],
    rationale:'Adelanta a Tiara por un punto tras corregirse el recuento de campos ★★★+ que tenía mal en la edición anterior. Su golf es de acceso, no de puerta: seis campos ★★★+ entre 8 y 14 minutos, pero el más cercano de 18 hoyos está a ocho. Aquí el golf es amenity; lo que paga es Fendi y los €15.000/m².' },

  { id:'tiara', render:{ dominio:"nvoga.com", pie:"Terrazas escalonadas sobre el valle." }, name:'Tiara', sub:'La Quinta · NVOGA',
    municipio:'Benahavís', zona:'La Quinta', lat:36.52034, lng:-5.00014,
    image:'images/promos/tiara.jpg',
    promotor:'NVOGA Marbella Realty', estudio:null, estudioNota:'Comprobado en nvoga.com: no acredita estudio de arquitectura.', derechosGolf:null,
    tipologia:'Apartamentos y áticos 3–4 dorm.', unidades:56,
    precio:'€1.550.000 – €2.300.000', precioDesde:'€1.550.000', precioEstimado:false, eurM2:8500,
    estado:'Pre-venta · construcción', entrega:'2026+',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['la-quinta-golf',4,''],['los-arqueros-golf',4,''],['los-naranjos-golf',7,''],['magna-marbella',8,''],['el-higueral',9,''],['aloha-golf-club',10,''],['real-club-de-golf-las-brisas',10,''],['la-zagaleta-old',11,''],['guadalmina-norte',12,''],['real-club-de-golf-guadalmina-sur',12,''],['atalaya-new',13,''],['atalaya-old',13,''],['la-zagaleta-los-barrancos',13,''],['alferini-villa-padierna',14,''],['dama-de-noche',15,''],['el-paraiso-golf',15,'']],
    d:{ a5:5,  a5why:'A pie del 27 hoyos de La Quinta Golf, sin ser in-resort.',
        a6:3,  a6why:'Buen acceso por la carretera de Benahavís; congestión puntual en San Pedro.',
        b1:4,  b1why:'Producto cuidado de NVOGA, sin firma internacional.',
        b4:7,  b4why:'Spa, gym, piscinas, zonas comunes; sin club house ni beach club propios.' },
    tags:['A pie La Quinta','Golf Valley','Boutique NVOGA'],
    rationale:'El mejor bloque A fuera de Sotogrande y Cortesín: 35 sobre 60, con La Quinta Golf a dos minutos andando y de acceso resort. Pierde el sexto puesto por bloque B — sin marca, sin beach club y con 56 unidades no compite con Fendi en la mitad que no es golf.' },

  { id:'mc-hills', render:{ dominio:"marbellaclubhills.com", pie:"Vista aérea hacia el mar." }, name:'Marbella Club Hills', sub:'Fase 2',
    municipio:'Benahavís', zona:'Carretera del Madroñal', lat:36.495, lng:-5.045,
    image:'images/promos/mc-hills.jpg',
    promotor:'Mena Capital · Marbella Club', estudio:'Villarroel Torrico', estudioFuente:'marbellaclubhills.com',
    derechosGolf:'Acceso declarado al Marbella Club Golf y al centro ecuestre; sin condiciones ni green fees publicados.', derechosFuente:'marbellaclubhills.com',
    tipologia:'Apartamentos y semi-detached villas', unidades:120,
    precio:'€690.000 – €1.350.000+', precioDesde:'€690.000', precioEstimado:false, eurM2:6500,
    estado:'Construcción por fases', entrega:'2026+',
    campoPropio:'marbella-club-golf-resort', campoPropioPendiente:null,
    cursos:[['marbella-club-golf-resort',0,'In-resort'],['alferini-villa-padierna',2,''],['el-higueral',7,''],['atalaya-new',9,''],['atalaya-old',9,''],['flamingos-villa-padierna',10,''],['el-paraiso-golf',13,''],['guadalmina-norte',14,''],['la-quinta-golf',14,''],['los-arqueros-golf',14,''],['real-club-de-golf-guadalmina-sur',14,''],['tramores-villa-padierna',15,'']],
    d:{ a5:7,  a5why:'In-resort en Marbella Club Golf Resort (★★★ propio, acceso de hotel).',
        a6:3,  a6why:'Carretera del Madroñal hasta la A-7.',
        b1:7,  b1why:'Marca hotelera Marbella Club; sin estudio de arquitectura acreditado.',
        b4:10, b4why:'Privilegios del Marbella Club Hotel, spa, club house, beach club del hotel.' },
    tags:['In-resort 3★','Brand Marbella Club','Villa Padierna a 5\''],
    rationale:'La única promoción del top 10 cuyo entorno es íntegramente jugable: Marbella Club Golf, Flamingos, Alferini y Tramores admiten reserva. No tiene ningún ★★★★ en quince minutos y por eso no sube más, pero es la mejor relación entre golf real y precio de entrada del ranking.' },

  { id:'zew', render:{ dominio:"Concept Homes · NVOGA", pie:"La entrada de ZEW al atardecer.", origen:'render del promotor · brochure ZEW (Malashpina)' }, name:'ZEW', sub:'by Concept Homes',
    municipio:'Marbella', zona:'Elviria West', lat:36.503, lng:-4.810,
    image:'images/promos/zew.jpg',
    promotor:'Concept Homes · NVOGA', estudio:null, estudioNota:'Catálogo v19 de Concept Homes / NVOGA: no acredita estudio de arquitectura.', derechosGolf:null,
    tipologia:'Residencias boutique 3–4 dorm.', unidades:20,
    precio:'€1.500.000 – €2.800.000 (estimado)', precioDesde:'€1.500.000', precioEstimado:true, eurM2:10000,
    estado:'Pre-venta · construcción', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['higueron-marbella-golf',4,''],['rio-real-golf',4,''],['greenlife-golf',7,''],['santa-clara-golf-marbella',7,''],['cabopino-golf',11,''],['santa-maria-golf',11,''],['dama-de-noche',12,''],['aloha-golf-club',14,''],['la-siesta-golf',14,''],['miraflores-golf',15,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:5,  a6why:'Incorporación directa a la A-7 en Elviria.',
        b1:4,  b1why:'Producto boutique cuidado; sin firma internacional.',
        b4:7,  b4why:'Piscina, gym, zonas comunes premium; sin resort propio.' },
    tags:['20 unidades','Boutique','A-7 directa','Conflicto declarado'],
    rationale:'Ocho campos accesibles y ninguno ★★★★, pero todos de acceso público o resort: es golf diario, no golf de palmarés. Máxima exclusividad de la lista con 20 residencias. <strong>Conflicto de interés declarado</strong>: su catálogo fue aportado por Malashpina Creativos. Su precio es estimación y su tiempo a Cabopino está pendiente de recomprobar — los dos datos que más le puntúan.' },

  { id:'soul-marbella', render:{ dominio:"aedashomes.com", pie:"Piscina del resort." }, name:'Soul Marbella Sunlife', sub:'Santa Clara Resort',
    municipio:'Marbella', zona:'Marbella Este · Santa Clara', lat:36.495, lng:-4.823,
    image:'images/promos/soul-marbella.jpg',
    promotor:'AEDAS Homes', estudio:'González & Jacobson + Manuel Burgos', estudioFuente:'gjarquitectura.com',
    derechosGolf:null, derechosNota:'AEDAS no publica derechos de golf sobre Santa Clara para propietarios.',
    tipologia:'Apartamentos, áticos y villas', unidades:200, unidadesNota:'Soul Marbella completo: 5 fases, 200 viviendas (AEDAS Homes). La ficha de mayo puntuaba las 68 de la fase Sunlife.',
    precio:'€1.294.000 – €1.790.000', precioDesde:'€1.294.000', precioEstimado:false, eurM2:8000,
    estado:'Sunlife entregada · Fase II en marcha', entrega:'2025',
    campoPropio:'santa-clara-golf-marbella', campoPropioPendiente:null,
    cursos:[['santa-clara-golf-marbella',0,'In-resort'],['rio-real-golf',5,''],['higueron-marbella-golf',7,''],['greenlife-golf',10,''],['santa-maria-golf',12,''],['cabopino-golf',13,''],['dama-de-noche',13,''],['aloha-golf-club',14,'']],
    d:{ a5:4,  a5why:'In-resort en Santa Clara Golf (★★ propio, público).',
        a6:5,  a6why:'Acceso inmediato a la A-7 por Marbella Este.',
        b1:4,  b1why:'Producto AEDAS de calidad contrastada; sin firma internacional.',
        b4:7,  b4why:'Sky lounge, spa, gym, piscinas; sin club house propio.' },
    tags:['In-resort','AEDAS','Sky lounge','Mix tipologías'],
    rationale:'Todo su entorno es jugable pero ninguno pasa de ★★★. El valor está en la ejecución residencial —mezcla de apartamentos y villas, poco habitual— más que en el golf. Es la promoción de esta lista que un golfista compra por comodidad, no por campo.' },

  { id:'higueron-valley', render:{ dominio:"higueron-valley.com", pie:"Terraza con vistas a la bahía." }, name:'Higuerón Valley', sub:'Higuerón Resort',
    municipio:'Fuengirola', zona:'El Higuerón', lat:36.553, lng:-4.595,
    image:'images/promos/higueron-valley.jpg',
    promotor:'Higuerón Resort', estudio:null, estudioNota:'Comprobado en higueronvalley.com: no acredita estudio de arquitectura.',
    derechosGolf:'Membresía del resort incluida — Nagomi Spa, gimnasio, Wave Beach Club y restaurantes. Sin derechos de golf: Higuerón no tiene campo propio.', derechosFuente:'higueronvalley.com',
    tipologia:'Apartamentos y áticos 2–3 dorm.', unidades:224,
    precio:'€595.000 – €1.950.000', precioDesde:'€595.000', precioEstimado:false, eurM2:8000,
    estado:'Construcción por fases', entrega:'2025–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['golf-torrequebrada',11,''],['mijas-golf-los-lagos',12,''],['calanova-golf',14,''],['el-chaparral-golf',15,''],['mijas-golf-los-olivos',15,'']],
    d:{ a5:0,  a5why:'Higuerón Resort no tiene campo propio.',
        a6:5,  a6why:'Enlace propio con la AP-7 y la A-7.',
        b1:4,  b1why:'Producto de resort correcto; sin firma internacional.',
        b4:10, b4why:'Hilton Curio, Nagomi Wellness Spa, beach club, siete restaurantes, club deportivo.' },
    tags:['Hilton Curio','Nagomi Spa','AP-7 directa','Beach club'],
    rationale:'Tres campos ★★★ jugables alrededor y el amenity deck más completo del este de la costa. Le penaliza la escala —224 unidades— y no tener campo propio. Es la puerta de entrada más barata del top 10 y la que menos depende del golf para justificarse.' },

  { id:'velaya', render:{ dominio:"velaya.stonewegliving.com", pie:"El conjunto beachfront." }, name:'Vélaya Estepona', sub:'Stoneweg Living',
    municipio:'Estepona', zona:'Beachfront New Golden Mile', lat:36.473, lng:-5.005,
    image:'images/promos/velaya.jpg',
    promotor:'Stoneweg Living', estudio:null, estudioNota:'Comprobado en stonewegliving.com: no acredita estudio de arquitectura. Promueven Stoneweg y Jamsa.', derechosGolf:null,
    tipologia:'Apartamentos, áticos, townhouses, villas', unidades:38,
    precio:'€792.000 – €2.500.000', precioDesde:'€792.000', precioEstimado:false, eurM2:8000,
    estado:'Entrega en curso', entrega:'2024–2025',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['guadalmina-norte',5,''],['real-club-de-golf-guadalmina-sur',5,''],['atalaya-new',7,''],['atalaya-old',7,''],['el-paraiso-golf',8,''],['el-higueral',10,''],['la-quinta-golf',11,''],['los-naranjos-golf',11,''],['magna-marbella',11,''],['real-club-de-golf-las-brisas',11,''],['aloha-golf-club',12,''],['dama-de-noche',12,''],['los-arqueros-golf',12,''],['alferini-villa-padierna',13,''],['tramores-villa-padierna',13,''],['flamingos-villa-padierna',14,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:3,  a6why:'A-7 a pie de promoción; congestión estival en la Nueva Milla de Oro.',
        b1:4,  b1why:'Producto beachfront cuidado; sin firma internacional.',
        b4:7,  b4why:'Spa, gym, piscinas, acceso directo a playa.' },
    tags:['Beachfront','38 unidades','Mix tipologías'],
    rationale:'Sube a la primera mención por descarte ajeno: The View pierde más que ella al aplicar el coeficiente de acceso. Su entorno es modesto en categoría pero íntegramente reservable. Beachfront con 38 unidades y cuatro tipologías; el golf aquí es contexto, no argumento.' },

  { id:'the-view', render:{ dominio:"marbella-ev.com", pie:"Bloque residencial sobre Las Colinas." }, name:'The View Marbella', sub:'Las Colinas de Marbella',
    municipio:'Benahavís', zona:'Las Colinas', lat:36.510, lng:-4.97,
    image:'images/promos/the-view.jpg',
    promotor:'The View Companies', estudio:'Teodoro Cabrilla + González & Jacobson', estudioFuente:'gjarquitectura.com', derechosGolf:null,
    tipologia:'Apartamentos y áticos 2–4 dorm.', unidades:119,
    precio:'€799.000 – €2.499.000', precioDesde:'€799.000', precioEstimado:false, eurM2:6500,
    estado:'Fase 1 entregada · Fase 2 en marcha', entrega:'2024–2026',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['los-naranjos-golf',2,''],['aloha-golf-club',3,''],['magna-marbella',3,''],['real-club-de-golf-las-brisas',5,''],['la-quinta-golf',7,''],['dama-de-noche',13,''],['guadalmina-norte',13,''],['los-arqueros-golf',13,''],['real-club-de-golf-guadalmina-sur',13,''],['atalaya-new',15,''],['atalaya-old',15,''],['el-higueral',15,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:3,  a6why:'Acceso de sierra hasta la A-7.',
        b1:4,  b1why:'Producto comercial cuidado; sin firma internacional.',
        b4:4,  b4why:'Piscinas, gym, zonas comunes; amenity deck limitado.' },
    tags:['Vistas Golf Valley','119 unidades'],
    rationale:'La mayor caída del recálculo: seis puntos. Comparte entorno con Tiara y Quercus, pero la mitad de ese entorno son clubes de socios y su bloque B es el más flojo del ranking —15 sobre 40—. Excelente vista sobre Golf Valley; menos golf del que la vista sugiere.' },

  { id:'calanova', render:{ dominio:"avantespacia.com", pie:"El conjunto al atardecer, desde la piscina." }, name:'Calanova Collection', sub:'Avantespacia',
    municipio:'Mijas', zona:'La Cala de Mijas', lat:36.520, lng:-4.692,
    image:'images/promos/calanova.jpg',
    promotor:'Avantespacia', estudio:null, estudioNota:'Comprobado en avantespacia.com: no acredita estudio de arquitectura. Construye Ferrovial.', derechosGolf:null,
    tipologia:'Apartamentos 2–3 dorm.', unidades:154,
    precio:'€520.000 – €710.000', precioDesde:'€520.000', precioEstimado:false, eurM2:5000,
    estado:'En construcción', entrega:'2025–2026',
    campoPropio:'calanova-golf', campoPropioPendiente:null,
    cursos:[['calanova-golf',0,'In-resort'],['la-noria-golf',5,''],['el-chaparral-golf',12,''],['miraflores-golf',12,''],['santana-golf',12,''],['la-cala-resort-asia',13,''],['cabopino-golf',14,''],['la-cala-resort-europa',14,''],['la-siesta-golf',14,''],['la-cala-resort-america',15,'']],
    d:{ a5:4,  a5why:'In-resort en Calanova Golf (★★ propio, de resort).',
        a6:3,  a6why:'A-7 a cinco minutos por La Cala.',
        b1:2,  b1why:'Producto comercial estándar.',
        b4:4,  b4why:'Piscinas, gym, zonas comunes.' },
    tags:['In-resort','9 campos en 15\'','Entry level premium'],
    rationale:'Nueve campos en quince minutos y todos jugables: la mayor densidad de golf reservable de la guía. Ninguno pasa de ★★★. Para quien juega tres veces por semana y no le importa el palmarés, es objetivamente la mejor compra de la lista — y la más barata.' },

  { id:'quintessence', render:{ dominio:"quintessencemarbella.com", pie:"El conjunto residencial con la piscina central." }, name:'Quintessence Marbella', sub:'Altos de Los Monteros',
    municipio:'Marbella', zona:'Marbella Este', lat:36.499, lng:-4.787,
    image:'images/promos/quintessence.jpg',
    promotor:'Grupo Insur', estudio:'DPYA Arquitectura', estudioFuente:'dpya.com',
    derechosGolf:null, derechosNota:'Grupo Insur no publica derechos de golf para propietarios.',
    tipologia:'Apartamentos 2–3 dorm.', unidades:96,
    precio:'€575.000 – €1.350.000', precioDesde:'€575.000', precioEstimado:false, eurM2:6500,
    estado:'En construcción', entrega:'Q4 2025',
    campoPropio:null, campoPropioPendiente:null,
    cursos:[['greenlife-golf',3,''],['higueron-marbella-golf',6,''],['rio-real-golf',6,''],['cabopino-golf',10,''],['santa-clara-golf-marbella',10,''],['santa-maria-golf',13,''],['dama-de-noche',14,''],['la-siesta-golf',14,''],['miraflores-golf',14,''],['la-noria-golf',15,'']],
    d:{ a5:0,  a5why:'Ni in-resort ni a pie de campo.',
        a6:3,  a6why:'Acceso por Los Monteros a la A-7.',
        b1:4,  b1why:'Producto correcto; sin firma diferenciada.',
        b4:4,  b4why:'Piscinas, gym, zonas comunes.' },
    tags:['7 campos en 15\'','Valor precio/m²'],
    rationale:'Siete campos accesibles y todos jugables, pero dominados por la categoría ★★ — y el más cercano, Greenlife, es un par 3 de nueve hoyos que la matriz v1.1 ya no computa para la distancia mínima. Buena relación precio-localización sin argumento golfístico propio.' }
];

/* ═══════════════════════════════════════════════════════════════
   MOTOR DE PUNTUACIÓN · MATRIZ v1.1
   Nada está escrito a mano salvo A5, A6, B1 y B4 (criterios
   editoriales, cada uno con su justificación visible en la ficha).
   A1–A4, B2 y B3 se calculan aquí a partir de los datos. Cambiar un
   dato cambia el ranking: ésa es la garantía de reproducibilidad.
═══════════════════════════════════════════════════════════════ */

// Coeficiente de jugabilidad: cuánto vale un campo que quizá no puedas jugar.
const ACCESO = {
  'Resort': 1, 'Resort de lujo': 1, 'Público': 1, 'Municipal': 1, 'Semi-privado': 1,
  'Privado / resort': 1, 'Privado / hotel': 1,
  'Privado de socios': 0.5, 'Privado': 0.5,
  'Estrict. privado': 0
};
const ACCESO_LBL = { 1: 'Reservable', 0.5: 'Socios', 0: 'Cerrado' };

const CX = {};
COURSES.forEach(c => {
  c.acceso = ACCESO[c.membresia] !== undefined ? ACCESO[c.membresia] : 1;
  c.foto = FOTOS_CAMPO[c.id] || null;
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
  p.campos = p.cursos.map(([id, min, nota]) => {
    const c = CX[id];
    if (!c) throw new Error('Campo no encontrado en la base: ' + id);
    return { ...c, min, nota };
  });

  // A1 y A4 sólo consideran campos de ★★+ (fuera pitch & putt y ejecutivos):
  // en un ranking de golf, tener un par-3 de nueve hoyos en la puerta no es golf.
  const elegibles = p.campos.filter(c => c.stars >= 2);
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

  p.score = {
    a1: ESC_A1[cercano.stars], a2: escA2(ef4), a3: escA3(ef3), a4: escA4(cercano.min),
    a5: p.d.a5, a6: p.d.a6,
    b1: p.d.b1, b2: escB2(p.unidades), b3: escB3(p.eurM2), b4: p.d.b4
  };
  p.why = {
    a1: `Campo ★★+ más próximo: ${cercano.name} (${'★'.repeat(cercano.stars)}).`,
    a2: `${p.n4} campo${p.n4 === 1 ? '' : 's'} ★★★★ en 15′; ponderado${p.n4 === 1 ? '' : 's'} por acceso = ${p.ef4}.`,
    a3: `${p.n3} campo${p.n3 === 1 ? '' : 's'} ★★★+ en 15′; ponderado${p.n3 === 1 ? '' : 's'} por acceso = ${p.ef3}.`,
    a4: `${cercano.min === 0 ? 'In-resort' : cercano.min + ' min'} hasta ${cercano.name}.`,
    a5: p.d.a5why, a6: p.d.a6why, b1: p.d.b1why,
    b2: `${p.unidades} unidades.`,
    b3: `≈ €${p.eurM2.toLocaleString('es-ES')}/m².`,
    b4: p.d.b4why
  };
  p.A = p.score.a1 + p.score.a2 + p.score.a3 + p.score.a4 + p.score.a5 + p.score.a6;
  p.B = p.score.b1 + p.score.b2 + p.score.b3 + p.score.b4;
  p.total = p.A + p.B;
});

// Orden y posición con empates (1,2,3,4,5,5,7…). El rank ya no se escribe a mano.
PROMOS.sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
PROMOS.forEach((p, i) => {
  p.rank = (i > 0 && p.total === PROMOS[i - 1].total) ? PROMOS[i - 1].rank : i + 1;
  p.top10 = p.rank <= 10;
});

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
  if (p.render) AVISOS.push({ p: p.name, t: 'Imagen', m: `Render tomado de ${p.render.dominio}: pendiente de autorización escrita del promotor antes de publicar.` });
  else if (p.foto) AVISOS.push({ p: p.name, t: 'Imagen', m: 'Fotografía de zona del archivo Malashpina, no del proyecto. Sustituir por render oficial cuando llegue.' });
  else AVISOS.push({ p: p.name, t: 'Imagen', m: 'Sin render ni fotografía de zona: la ficha usa placeholder. Pedir press kit al promotor.' });
  if (p.precioEstimado) AVISOS.push({ p: p.name, t: 'Precio', m: 'Precio estimado, no publicado por el promotor. Afecta a B3.' });
  if (!p.estudio) AVISOS.push({ p: p.name, t: 'Arquitectura', m: p.estudioNota || 'Estudio de arquitectura sin acreditar. B1 se sostiene sobre la marca, no sobre la firma.' });
  if (!p.derechosGolf) AVISOS.push({ p: p.name, t: 'Derechos de golf', m: p.derechosNota || 'Sin confirmar si la compra incluye membresía o green fees preferentes.' });
  if (p.unidadesNota) AVISOS.push({ p: p.name, t: 'Unidades', m: p.unidadesNota });
  let placeholder = null;
  COURSES.forEach(c => { if (hav(p.lat, p.lng, c.lat, c.lng) < 0.25) placeholder = c.name; });
  if (placeholder) AVISOS.push({ p: p.name, t: 'Coordenada', m: `La coordenada de la promoción coincide con la del campo ${placeholder}: es una posición aproximada, no la parcela.` });
  p.campos.forEach(c => {
    const km = hav(p.lat, p.lng, c.lat, c.lng);
    if (c.min > 0 && (km / c.min) * 60 > 70) {
      c.dudoso = true;
      AVISOS.push({ p: p.name, t: 'Tiempo', m: `${c.min} min hasta ${c.name} implican ${Math.round((km / c.min) * 60)} km/h en línea recta: revisar coordenada u origen.` });
    }
    if (c.nota === 'A pie' && km > 1.5) {
      c.dudoso = true;
      AVISOS.push({ p: p.name, t: 'A pie', m: `Declarado a pie de ${c.name}, pero la distancia entre coordenadas es de ${km.toFixed(1)} km.` });
    }
    if (c.min === 0 && km > 1.5) {
      c.dudoso = true;
      AVISOS.push({ p: p.name, t: 'In-resort', m: `Declarado in-resort en ${c.name}, pero las coordenadas distan ${km.toFixed(1)} km. Una de las dos es incorrecta.` });
    }
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
    const stars = '★'.repeat(p.cercano.stars) + `<span style="opacity:.25">${'★'.repeat(4 - p.cercano.stars)}</span>`;
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
  const top = PROMOS.filter(p => p.top10).length, men = PROMOS.length - top;
  const num = n => ['cero','una','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce'][n] || n;
  const t = document.getElementById('tituloRanking');
  if (t) t.innerHTML = `Las <em>${num(top)} del top 10</em> — y ${men === 1 ? 'la mención honorífica' : 'las ' + num(men) + ' menciones honoríficas'}.`;
  const f = document.getElementById('tituloFichas');
  if (f) f.innerHTML = `${num(PROMOS.length).replace(/^./, c => c.toUpperCase())} fichas, <em>criterio a criterio</em>.`;
})();

/* ═══════════════════════════════════
   RENDER · FICHAS
═══════════════════════════════════ */
const FILAS_A = [['a1', 'Calidad del campo ★★+ más próximo', 15], ['a2', 'Campos ★★★★ en ≤15′ · ponderados', 12],
  ['a3', 'Campos ★★★+ en ≤15′ · ponderados', 10], ['a4', 'Distancia al campo ★★+ más próximo', 8],
  ['a5', 'Bonus in-resort / a pie de campo', 10], ['a6', 'Comunicación viaria', 5]];
const FILAS_B = [['b1', 'Firma arquitectónica / branded', 10], ['b2', 'Exclusividad (nº unidades)', 10],
  ['b3', 'Posicionamiento €/m²', 10], ['b4', 'Amenities del proyecto', 10]];

const detailGrid = document.getElementById('detailGrid');
// Acordeón nativo: <details>. La cabecera con imagen es el banner cerrado y crece al abrir.
if (detailGrid) PROMOS.forEach((p, idx) => {
  const card = document.createElement('details');
  card.className = 'detail-card promo';
  card.id = 'ficha-' + p.id;
  if (idx === 0) card.open = true;
  const desglose = (filas, tot, max) => `
    <table class="sb-table">
      ${filas.map(([k, lbl, mx]) => `<tr><th>${lbl}<span>${p.why[k]}</span></th><td>${p.score[k]}<small>/${mx}</small></td></tr>`).join('')}
      <tr class="sb-total"><th>${max === 60 ? 'Bloque A · Entorno de golf' : 'Bloque B · Calidad y exclusividad'}</th><td>${tot}<small>/${max}</small></td></tr>
    </table>`;
  const media = p.render
    ? { src: p.image, tag: '© ' + p.render.dominio, pie: p.render.pie, nota: 'Render del promotor · pendiente de autorización' }
    : (p.foto
      ? { src: p.foto.src, tag: 'Imagen de zona', pie: p.foto.pie, nota: 'No es una imagen del proyecto' }
      : { src: p.image, tag: 'Imagen placeholder', pie: null, nota: null });
  const claves = [
    `<strong>${p.cercano.name}</strong> ${p.cercano.min === 0 ? 'in-resort' : 'a ' + p.cercano.min + '′'} · ${'★'.repeat(p.cercano.stars)} · ${ACCESO_LBL[p.cercano.acceso].toLowerCase()}`,
    `<strong>${p.n3}</strong> campo${p.n3 === 1 ? '' : 's'} ★★★+ en 15′ · <strong>${p.jugables}/${p.enQuince}</strong> reservables sin ser socio`,
    `<strong>${p.unidades}</strong> unidades · desde <strong>${p.precioDesde}</strong>${p.precioEstimado ? ' (estimado)' : ''}`,
    p.estudio ? `Arquitectura: <strong>${p.estudio}</strong>` : `Arquitectura <strong>no acreditada</strong> por el promotor`,
    p.derechosGolf ? `Golf para propietarios: ${p.derechosGolf.split('.')[0]}.` : `Derechos de golf para propietarios: <strong>no publicados</strong>`
  ];
  card.innerHTML = `
    <summary class="promo-banner">
    <header class="dc-head">
      <img class="dc-head-bg" src="${media.src}" alt="${media.pie || p.name + ' — ' + p.municipio}" loading="lazy"
           onerror="this.style.display='none';this.parentElement.classList.add('sin-img')"/>
      <div class="dc-rank-badge">${p.top10 ? '#' + String(p.rank).padStart(2, '0') + ' · Top 10' : '#' + p.rank + ' · Mención'}</div>
      <div class="detail-card-placeholder-tag">${media.tag}</div>
      <div class="dc-head-inner">
        <div class="dc-eyebrow">${p.top10 ? 'Top 10 · Posición ' + p.rank : 'Mención honorífica · ' + p.rank}</div>
        <h3 class="dc-title">${p.name}</h3>
        <div class="dc-loc"><strong>${p.municipio}</strong><span class="dc-loc-extra"> · ${p.zona} · ${p.sub}</span></div>
        ${media.pie ? `<div class="dc-img-pie">${media.pie}<em>${media.nota}</em></div>` : ''}
      </div>
      <div class="dc-score-overlay">${p.total}<small>/ 100</small></div>
    </header>
    </summary>
    <div class="dc-body">
      <ul class="claves">${claves.map(c => `<li>${c}</li>`).join('')}</ul>
      <div class="dc-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>

      <div class="dc-stats">
        <div><div class="dc-stat-lbl">Promotor</div><div class="dc-stat-val" style="font-size:14px;text-transform:none;font-weight:600;letter-spacing:0;line-height:1.3">${p.promotor}</div></div>
        <div><div class="dc-stat-lbl">Arquitectura</div><div class="dc-stat-val" style="font-size:14px;text-transform:none;font-weight:600;letter-spacing:0;line-height:1.3">${p.estudio ? p.estudio + `<small style="display:block;font-family:var(--f-sans);font-weight:400;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-mute);margin-top:3px">${p.estudioFuente}</small>` : '<span style="color:var(--text-mute)">No acreditado</span>'}</div></div>
        <div><div class="dc-stat-lbl">Unidades</div><div class="dc-stat-val large">${p.unidades}</div></div>
        <div><div class="dc-stat-lbl">Precio</div><div class="dc-stat-val" style="font-size:14px;text-transform:none;font-weight:600;letter-spacing:0;line-height:1.3">${p.precio}</div></div>
        <div><div class="dc-stat-lbl">Entrega</div><div class="dc-stat-val" style="font-size:18px">${p.entrega}</div></div>
      </div>

      ${p.derechosGolf ? `<div class="dc-derechos"><span>Derechos de golf</span>${p.derechosGolf}<em>${p.derechosFuente}</em></div>` : ''}

      <div class="dc-golfbar">
        <div><span class="gb-num">${p.n3}</span> campo${p.n3 === 1 ? '' : 's'} ★★★+ en 15′</div>
        <div><span class="gb-num">${p.jugables}/${p.enQuince}</span> reservables sin ser socio</div>
        <div><span class="gb-num">${p.A}</span> puntos de golf sobre 60</div>
      </div>

      <div class="dc-cols">
      <div class="dc-courses">
        <div class="dc-courses-title">Campos en ≤15 minutos en coche</div>
        ${p.campos.slice().sort((a, b) => a.min - b.min).map(c => {
          const t = c.nota === 'In-resort' ? 'In-resort' : c.min + ' min' + (c.fuera ? ' · fuera de 15′' : '');
          const nota = c.nota && !['In-resort', 'A pie'].includes(c.nota) ? ` <em>· ${c.nota}</em>` : '';
          return `<div class="course-mini${c.fuera ? ' pendiente' : ''}">
            <div class="course-mini-name">${c.name}${nota}<span class="acc acc-${String(c.acceso).replace('.', '')}">${ACCESO_LBL[c.acceso]}</span></div>
            <div class="course-mini-time">${t}${c.dudoso ? '<sup title="Tiempo pendiente de recomprobar">*</sup>' : ''}</div>
            <div class="course-mini-stars">${'★'.repeat(c.stars)}</div>
          </div>`;
        }).join('')}
        ${p.campoPropioPendiente ? `<div class="course-mini pendiente"><div class="course-mini-name">${p.campoPropioPendiente}</div><div class="course-mini-time">—</div><div class="course-mini-stars">—</div></div>` : ''}
      </div>
      <div class="dc-rationale">${p.rationale}</div>
      </div>

      <div class="dc-score">
        ${desglose(FILAS_A, p.A, 60)}
        ${desglose(FILAS_B, p.B, 40)}
      </div>
    </div>`;
  detailGrid.appendChild(card);
});

/* ═══════════════════════════════════
   RENDER · GALERÍA DE CAMPOS
═══════════════════════════════════ */
const galeria = document.getElementById('galeriaCampos');
if (galeria) {
  const conFoto = COURSES.filter(c => c.foto).sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name));
  galeria.innerHTML = conFoto.map(c => `
    <figure class="gc">
      <div class="gc-img">
        <img src="${c.foto.src}" alt="${c.name} — ${c.municipio}" loading="lazy"/>
        ${c.foto.placeholder ? '<span class="gc-ph">Placeholder</span>' : (c.foto.licPendiente ? '<span class="gc-ph">© pendiente</span>' : '')}
        <span class="gc-stars">${'★'.repeat(c.stars)}</span>
      </div>
      <figcaption>
        <strong>${c.name}</strong>
        <span class="gc-meta">${c.municipio} · ${c.disenador}, ${c.ano}</span>
        ${c.foto.pie ? `<span class="gc-pie">${c.foto.pie}</span>` : ''}
        <span class="gc-cred">${c.foto.url ? `<a href="${c.foto.url}" target="_blank" rel="noopener">${c.foto.credito}</a>` : c.foto.credito}</span>
      </figcaption>
    </figure>`).join('');
  const n = conFoto.filter(c => !c.foto.placeholder).length;
  const pend = conFoto.filter(c => c.foto.licPendiente).length;
  const g = document.getElementById('galeriaNota');
  if (g) g.textContent = `${n} de los 61 campos tienen fotografía: ${n - pend} de licencia libre verificada o de archivo propio, y ${pend} pendientes de autorización escrita — de la web oficial del club o de archivo con origen sin confirmar. Los ${61 - n} restantes esperan press kit.`;
}

/* ═══════════════════════════════════
   RENDER · TABLA DE CAMPOS + FILTRO
═══════════════════════════════════ */
const golfBody = document.getElementById('golfBody');
const CAT_LABEL = { 4: 'Élite', 3: 'Premium', 2: 'Comercial', 1: 'Funcional' };

function renderGolf(filter) {
  golfBody.innerHTML = '';
  const data = filter === 'all' ? COURSES.slice() : COURSES.filter(c => c.stars === parseInt(filter));
  data.sort((a, b) => b.stars - a.stars || a.municipio.localeCompare(b.municipio));
  data.forEach(c => {
    const stars = '★'.repeat(c.stars) + `<span style="opacity:.2">${'★'.repeat(4 - c.stars)}</span>`;
    const row = document.createElement('div');
    row.className = 'golf-tr';
    row.innerHTML = `
      <div><div class="golf-tr-name">${c.name}</div><div class="golf-tr-meta">${c.municipio}</div></div>
      <div style="font-size:12px;color:var(--text-mid);line-height:1.4">${c.disenador}<br/><span style="color:var(--text-mute);font-size:11px">${c.ano}</span></div>
      <div style="font-size:12px;color:var(--text-mid);line-height:1.4">${c.hoyos}<br/><span class="acc acc-${String(c.acceso).replace('.', '')}">${c.membresia}</span></div>
      <div style="font-size:12px;color:var(--text-mid);font-weight:600">€${c.gf}</div>
      <div style="font-size:11px;color:var(--text-mute);line-height:1.45;font-style:italic">${c.palmares}</div>
      <div class="golf-tr-stars">${stars}<small>${CAT_LABEL[c.stars]}</small></div>`;
    golfBody.appendChild(row);
  });
}
if (golfBody) renderGolf('all');

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
   MAPA · LEAFLET (patrón defensivo)
═══════════════════════════════════ */
let mapReady = false;
function initMap() {
  if (mapReady) return;
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

  if (!soloCampos) PROMOS.forEach(p => {
    const icon = L.divIcon({
      html: `<div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#2C5384,#7FA3C9);border:2.5px solid #fff;box-shadow:0 2px 10px rgba(15,23,38,.42);display:flex;align-items:center;justify-content:center;font-family:Antonio,sans-serif;font-size:14px;font-weight:700;color:#FFFFFF">${p.rank}</div>`,
      className: '', iconSize: [28, 28], iconAnchor: [14, 14]
    });
    L.marker([p.lat, p.lng], { icon, zIndexOffset: 1000 }).addTo(map)
      .bindPopup(`<b>${p.name}</b><br/><span style="color:#374151">${p.sub} · ${p.municipio}</span><br/><span style="color:#1E3A5F;font-size:11px;font-weight:700;letter-spacing:.04em">SCORE ${p.total}/100 · DESDE ${p.precioDesde}</span>`);

    // Polylines a los campos ★★★+ — resueltas por id, no por nombre.
    p.campos.filter(c => c.stars >= 3).forEach(c => {
      L.polyline([[p.lat, p.lng], [c.lat, c.lng]], {
        color: c.acceso === 1 ? 'rgba(85,128,37,.48)' : 'rgba(85,128,37,.18)',
        weight: 1.2, dashArray: c.acceso === 1 ? null : '3 5'
      }).addTo(map);
    });
  });

  const colors = { 4: '#88A53C', 3: '#6E9130', 2: '#558025', 1: '#3E5F1C' };
  const strokes = { 4: '#0F1726', 3: '#0F1726', 2: '#FFFFFF', 1: '#FFFFFF' };
  COURSES.forEach(c => {
    const size = c.stars === 4 ? 16 : (c.stars === 3 ? 12 : c.stars === 2 ? 10 : 8);
    const icon = L.divIcon({
      html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${colors[c.stars]};border:2px solid ${strokes[c.stars]};box-shadow:0 1px 4px rgba(15,23,38,.35)"></div>`,
      className: '', iconSize: [size, size], iconAnchor: [size / 2, size / 2]
    });
    L.marker([c.lat, c.lng], { icon }).addTo(map)
      .bindPopup(`<b>${c.name}</b><br/><span style="color:#374151">${c.municipio}</span><br/><span style="color:#F2BB16;font-weight:700">${'★'.repeat(c.stars)}</span> · ${c.hoyos} · <span style="color:#6B7280">${c.membresia}</span>`);
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
