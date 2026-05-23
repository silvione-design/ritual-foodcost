import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const KEYS = {
  ingredienti: 'fc:ingredienti',
  ricette: 'fc:ricette',
  vini: 'fc:vini',
  categorie: 'fc:categorie',
};

// Dati default
const DEFAULT_INGREDIENTI = [
  {id:1,nome:'Picanha',unit:'kg',peso:1000,prezzo:19.50,dataAgg:'2026-05-22'},
  {id:2,nome:'Alcatra',unit:'kg',peso:1000,prezzo:14.50,dataAgg:'2026-05-22'},
  {id:3,nome:'Controfiletto',unit:'kg',peso:1000,prezzo:19.50,dataAgg:'2026-05-22'},
  {id:4,nome:'Costine',unit:'kg',peso:1000,prezzo:9.00,dataAgg:'2026-05-22'},
  {id:5,nome:'Latte condensato',unit:'lattina',peso:395,prezzo:1.80,dataAgg:'2026-05-22'},
  {id:6,nome:'Biscotti digestive',unit:'kg',peso:1000,prezzo:3.00,dataAgg:'2026-05-22'},
  {id:7,nome:'Limone',unit:'pz',peso:100,prezzo:0.30,dataAgg:'2026-05-22'},
  {id:8,nome:'Formaggio spalmabile',unit:'conf',peso:200,prezzo:1.50,dataAgg:'2026-05-22'},
  {id:9,nome:'Burro',unit:'kg',peso:1000,prezzo:6.00,dataAgg:'2026-05-22'},
  {id:10,nome:'Colla di pesce',unit:'kg',peso:1000,prezzo:20.00,dataAgg:'2026-05-22'},
  {id:11,nome:'Panna',unit:'lt',peso:1000,prezzo:2.50,dataAgg:'2026-05-22'},
  {id:12,nome:'Feijoada (fagioli neri)',unit:'kg',peso:1000,prezzo:8.00,dataAgg:'2026-05-22'},
  {id:13,nome:'Riso',unit:'kg',peso:1000,prezzo:3.00,dataAgg:'2026-05-22'},
  {id:14,nome:'Farofa',unit:'kg',peso:1000,prezzo:3.00,dataAgg:'2026-05-22'},
  {id:15,nome:'Vinagrette',unit:'kg',peso:1000,prezzo:5.00,dataAgg:'2026-05-22'},
  {id:16,nome:'Tavolette pietra (consumo)',unit:'pz',peso:1,prezzo:0.30,dataAgg:'2026-05-22'},
  {id:17,nome:'Vodka',unit:'lt',peso:1000,prezzo:13.00,dataAgg:'2026-05-22'},
  {id:18,nome:'Cachaça',unit:'lt',peso:1000,prezzo:13.00,dataAgg:'2026-05-22'},
  {id:19,nome:'Lime',unit:'kg',peso:1000,prezzo:4.00,dataAgg:'2026-05-22'},
  {id:20,nome:'Zucchero',unit:'kg',peso:1000,prezzo:1.50,dataAgg:'2026-05-22'},
  {id:21,nome:'Cioccolato',unit:'kg',peso:1000,prezzo:12.00,dataAgg:'2026-05-22'},
  {id:22,nome:'Latte di cocco',unit:'lt',peso:1000,prezzo:3.00,dataAgg:'2026-05-22'},
  {id:23,nome:'Gamberi',unit:'kg',peso:1000,prezzo:30.00,dataAgg:'2026-05-22'},
  {id:24,nome:'Patate',unit:'kg',peso:1000,prezzo:1.50,dataAgg:'2026-05-22'},
  {id:25,nome:'Manioca',unit:'kg',peso:1000,prezzo:2.40,dataAgg:'2026-05-22'},
  {id:26,nome:'Fragole',unit:'kg',peso:1000,prezzo:12.00,dataAgg:'2026-05-22'},
  {id:27,nome:'Pane',unit:'kg',peso:1000,prezzo:6.00,dataAgg:'2026-05-22'},
  {id:28,nome:'Ceci',unit:'conf',peso:500,prezzo:1.63,dataAgg:'2026-05-22'},
  {id:29,nome:'Lonza',unit:'kg',peso:1000,prezzo:6.90,dataAgg:'2026-05-22'},
  {id:30,nome:'Pancetta',unit:'kg',peso:1000,prezzo:8.20,dataAgg:'2026-05-22'},
];

const DEFAULT_RICETTE = [
  {
    id:1, nome:'Cheesecake Limone Rodrigo', porzioni:14,
    ricarico:250, costoFisso:0, categoria:'Dessert',
    dataCreazione:'2026-05-22',
    ingredienti:[
      {ingId:5,qta:1,unit:'lattina',note:'1 lattina latte condensato'},
      {ingId:6,qta:300,unit:'g',note:'base biscotto'},
      {ingId:7,qta:6,unit:'pz',note:'6 limoni'},
      {ingId:8,qta:3,unit:'conf',note:'3 conf 200g'},
      {ingId:9,qta:50,unit:'g',note:''},
      {ingId:10,qta:50,unit:'g',note:'colla di pesce'},
      {ingId:11,qta:100,unit:'ml',note:'panna'},
    ]
  }
];

const DEFAULT_VINI = [
  {id:1,nome:'Barbera Molino',cat:'Vino',costo:6.33,molt:2.80,storico:[]},
  {id:2,nome:'Barbera Despet',cat:'Vino',costo:7.00,molt:2.60,storico:[]},
  {id:3,nome:'Nebbiolo Blagheur',cat:'Vino',costo:8.00,molt:2.80,storico:[]},
  {id:4,nome:'Malbec Osado',cat:'Vino',costo:13.50,molt:2.59,storico:[]},
  {id:5,nome:'Prosecco Maschio dei Cavalieri',cat:'Vino',costo:7.83,molt:2.80,storico:[]},
  {id:6,nome:'Chardonnay Pescaja',cat:'Vino',costo:7.29,molt:3.00,storico:[]},
  {id:7,nome:'Rosé Frappo',cat:'Vino',costo:7.90,molt:2.80,storico:[]},
  {id:8,nome:'Vino della casa/lt',cat:'Vino',costo:1.91,molt:8.57,storico:[]},
  {id:9,nome:'Barbaresco Castello di Neive 1997',cat:'Vino',costo:33.00,molt:7.58,storico:[]},
  {id:10,nome:'Arneis Molino',cat:'Vino',costo:6.33,molt:2.80,storico:[]},
  {id:11,nome:'Malbec Badron Hormiga Negra',cat:'Vino',costo:4.90,molt:4.50,storico:[]},
  {id:12,nome:'Alta Langa Brut Grimaldi',cat:'Vino',costo:15.50,molt:2.58,storico:[]},
];

const DEFAULT_CATEGORIE = [
  {id:1,nome:'Carne',fcTarget:35},
  {id:2,nome:'Dessert',fcTarget:25},
  {id:3,nome:'Contorni',fcTarget:20},
  {id:4,nome:'Cocktail',fcTarget:22},
  {id:5,nome:'Delivery',fcTarget:30},
  {id:6,nome:'Vini',fcTarget:40},
  {id:7,nome:'Altro',fcTarget:30},
];

async function getOrInit(key, defaultVal) {
  let data = await redis.get(key);
  if (!data) {
    await redis.set(key, JSON.stringify(defaultVal));
    return defaultVal;
  }
  if (typeof data === 'string') return JSON.parse(data);
  return data;
}

async function save(key, val) {
  await redis.set(key, JSON.stringify(val));
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { action } = req.query;

    // ── GET ALL ──────────────────────────────────────────────
    if (req.method === 'GET' && !action) {
      const [ingredienti, ricette, vini, categorie] = await Promise.all([
        getOrInit(KEYS.ingredienti, DEFAULT_INGREDIENTI),
        getOrInit(KEYS.ricette, DEFAULT_RICETTE),
        getOrInit(KEYS.vini, DEFAULT_VINI),
        getOrInit(KEYS.categorie, DEFAULT_CATEGORIE),
      ]);
      return res.json({ ingredienti, ricette, vini, categorie });
    }

    const body = req.body || {};

    // ── INGREDIENTI ──────────────────────────────────────────
    if (action === 'saveIngrediente') {
      const ingredienti = await getOrInit(KEYS.ingredienti, DEFAULT_INGREDIENTI);
      const ing = body;
      const today = new Date().toISOString().slice(0,10);
      if (ing.id) {
        const idx = ingredienti.findIndex(i => i.id == ing.id);
        if (idx >= 0) {
          // storico prezzo
          if (ingredienti[idx].prezzo != ing.prezzo) {
            if (!ingredienti[idx].storico) ingredienti[idx].storico = [];
            ingredienti[idx].storico.push({
              data: today,
              vecchio: ingredienti[idx].prezzo,
              nuovo: ing.prezzo
            });
          }
          ingredienti[idx] = { ...ingredienti[idx], ...ing, dataAgg: today };
        }
      } else {
        const maxId = ingredienti.reduce((m,i) => Math.max(m, i.id||0), 0);
        ingredienti.push({ ...ing, id: maxId+1, dataAgg: today, storico: [] });
      }
      await save(KEYS.ingredienti, ingredienti);
      return res.json({ ok: true });
    }

    if (action === 'deleteIngrediente') {
      const ingredienti = await getOrInit(KEYS.ingredienti, DEFAULT_INGREDIENTI);
      const filtered = ingredienti.filter(i => i.id != body.id);
      await save(KEYS.ingredienti, filtered);
      return res.json({ ok: true });
    }

    if (action === 'getStoricoPrezzo') {
      const ingredienti = await getOrInit(KEYS.ingredienti, DEFAULT_INGREDIENTI);
      const ing = ingredienti.find(i => i.id == body.id);
      return res.json({ storico: ing ? (ing.storico || []) : [] });
    }

    // ── RICETTE ──────────────────────────────────────────────
    if (action === 'saveRicetta') {
      const ricette = await getOrInit(KEYS.ricette, DEFAULT_RICETTE);
      const ric = body;
      const today = new Date().toISOString().slice(0,10);
      if (ric.id) {
        const idx = ricette.findIndex(r => r.id == ric.id);
        if (idx >= 0) ricette[idx] = { ...ric, dataCreazione: ricette[idx].dataCreazione };
      } else {
        const maxId = ricette.reduce((m,r) => Math.max(m, r.id||0), 0);
        ric.id = maxId + 1;
        ric.dataCreazione = today;
        ricette.push(ric);
      }
      await save(KEYS.ricette, ricette);
      return res.json({ ok: true, id: ric.id });
    }

    if (action === 'deleteRicetta') {
      const ricette = await getOrInit(KEYS.ricette, DEFAULT_RICETTE);
      await save(KEYS.ricette, ricette.filter(r => r.id != body.id));
      return res.json({ ok: true });
    }

    // ── VINI ─────────────────────────────────────────────────
    if (action === 'saveVino') {
      const vini = await getOrInit(KEYS.vini, DEFAULT_VINI);
      const v = body;
      if (v.id) {
        const idx = vini.findIndex(x => x.id == v.id);
        if (idx >= 0) vini[idx] = { ...vini[idx], ...v };
      } else {
        const maxId = vini.reduce((m,x) => Math.max(m, x.id||0), 0);
        vini.push({ ...v, id: maxId+1, storico: [] });
      }
      await save(KEYS.vini, vini);
      return res.json({ ok: true });
    }

    if (action === 'deleteVino') {
      const vini = await getOrInit(KEYS.vini, DEFAULT_VINI);
      await save(KEYS.vini, vini.filter(v => v.id != body.id));
      return res.json({ ok: true });
    }

    // ── CATEGORIE ────────────────────────────────────────────
    if (action === 'saveCategoria') {
      const categorie = await getOrInit(KEYS.categorie, DEFAULT_CATEGORIE);
      const cat = body;
      if (cat.id) {
        const idx = categorie.findIndex(c => c.id == cat.id);
        if (idx >= 0) categorie[idx] = cat;
      } else {
        const maxId = categorie.reduce((m,c) => Math.max(m, c.id||0), 0);
        categorie.push({ ...cat, id: maxId+1 });
      }
      await save(KEYS.categorie, categorie);
      return res.json({ ok: true });
    }

    if (action === 'deleteCategoria') {
      const categorie = await getOrInit(KEYS.categorie, DEFAULT_CATEGORIE);
      await save(KEYS.categorie, categorie.filter(c => c.id != body.id));
      return res.json({ ok: true });
    }

    // ── RESET (solo per emergenza) ───────────────────────────
    if (action === 'reset') {
      await Promise.all([
        redis.del(KEYS.ingredienti),
        redis.del(KEYS.ricette),
        redis.del(KEYS.vini),
        redis.del(KEYS.categorie),
      ]);
      return res.json({ ok: true, msg: 'Reset completato — ricarica la pagina' });
    }

    return res.status(400).json({ error: 'Azione non riconosciuta: ' + action });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
