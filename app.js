const $ = (id) => document.getElementById(id);

const langEl = $("lang");
const countryEl = $("country");
const admin1El = $("admin1");
const cityEl = $("city");
const refreshBtn = $("refresh");
const testSoundBtn = $("testSound");

const quakeStatus = $("quakeStatus");
const quakeList = $("quakeList");
const quakeMeta = $("quakeMeta");

const wxStatus = $("wxStatus");
const wxMeta = $("wxMeta");
const wxTemp = $("wxTemp");
const wxRain = $("wxRain");
const wxWind = $("wxWind");
const wxCode = $("wxCode");

const alertAudio = $("alertSound");
$("year").textContent = new Date().getFullYear();

/* =======================
   i18n
======================= */
const I18N = {
  en: {
    title: "MM-TH Early Warning",
    sub: "Myanmar & Thailand — Weather + Earthquake (Installable)",
    L_language: "Language",
    L_country: "Country",
    L_state: "State/Region",
    L_city: "City/Town",
    L_weather: "Weather (Selected City)",
    L_quake: "Earthquakes (Nearby)",
    L_temp: "Temperature",
    L_rain: "Rain (current hour)",
    L_wind: "Wind",
    L_cond: "Condition",
    L_loading_weather: "Loading weather…",
    L_loading_quake: "Loading earthquakes…",
    L_no_quake: "No recent earthquakes nearby.",
    L_err_weather: "Weather error",
    L_err_quake: "Quake error",

    // weather summary
    S_very_hot: "Very hot",
    S_hot: "Hot",
    S_not_hot: "Not too hot",
    S_cool: "Cool",
    S_heavy_rain: "Heavy rain possible",
    S_rain_possible: "Rain possible",
    S_thunder: "Thunderstorm possible",
    S_clear: "Clear",
    S_cloudy: "Cloudy",
    S_overcast: "Overcast"
  },
  my: {
    title: "MM-TH Early Warning",
    sub: "မြန်မာ & ထိုင်း — ရာသီဥတု + ငလျင် (Installable)",
    L_language: "ဘာသာစကား",
    L_country: "နိုင်ငံ",
    L_state: "တိုင်း/ပြည်နယ်",
    L_city: "မြို့/မြို့နယ်",
    L_weather: "ရာသီဥတု (ရွေးထားသောနေရာ)",
    L_quake: "ငလျင် (အနီးအနား)",
    L_temp: "အပူချိန်",
    L_rain: "မိုး (ယခုနာရီ)",
    L_wind: "လေ",
    L_cond: "အခြေအနေ",
    L_loading_weather: "ရာသီဥတုယူနေသည်…",
    L_loading_quake: "ငလျင်ယူနေသည်…",
    L_no_quake: "အနီးအနား ငလျင်မတွေ့ပါ။",
    L_err_weather: "ရာသီဥတု အမှား",
    L_err_quake: "ငလျင် အမှား",

    // weather summary
    S_very_hot: "အရမ်းပူနိုင်သည်",
    S_hot: "ပူနိုင်သည်",
    S_not_hot: "အရမ်းမပူပါ",
    S_cool: "အေးမြနိုင်သည်",
    S_heavy_rain: "မိုးသည်းနိုင်သည်",
    S_rain_possible: "မိုးရွာနိုင်သည်",
    S_thunder: "မိုးကြိုးမုန်တိုင်းဖြစ်နိုင်သည်",
    S_clear: "မိုးကောင်းကင်ကြည်လင်",
    S_cloudy: "တိမ်ထူ",
    S_overcast: "တိမ်အုပ်"
  },
  th: {
    title: "MM-TH Early Warning",
    sub: "เมียนมา & ไทย — อากาศ + แผ่นดินไหว (ติดตั้งได้)",
    L_language: "ภาษา",
    L_country: "ประเทศ",
    L_state: "รัฐ/ภูมิภาค",
    L_city: "เมือง/อำเภอ",
    L_weather: "สภาพอากาศ (เมืองที่เลือก)",
    L_quake: "แผ่นดินไหว (ใกล้เคียง)",
    L_temp: "อุณหภูมิ",
    L_rain: "ฝน (ชั่วโมงปัจจุบัน)",
    L_wind: "ลม",
    L_cond: "สภาพ",
    L_loading_weather: "กำลังโหลดอากาศ…",
    L_loading_quake: "กำลังโหลดแผ่นดินไหว…",
    L_no_quake: "ไม่มีแผ่นดินไหวใกล้เคียง",
    L_err_weather: "ข้อผิดพลาดอากาศ",
    L_err_quake: "ข้อผิดพลาดแผ่นดินไหว",

    // weather summary
    S_very_hot: "ร้อนจัด",
    S_hot: "ร้อน",
    S_not_hot: "ไม่ร้อนมาก",
    S_cool: "เย็น",
    S_heavy_rain: "อาจมีฝนหนัก",
    S_rain_possible: "อาจมีฝน",
    S_thunder: "อาจมีพายุฝนฟ้าคะนอง",
    S_clear: "ท้องฟ้าแจ่มใส",
    S_cloudy: "มีเมฆมาก",
    S_overcast: "เมฆครึ้ม"
  }
};

function t() {
  return I18N[langEl.value] || I18N.en;
}

function applyLangUI() {
  const L = t();
  const map = {
    t_title: L.title,
    t_sub: L.sub,
    t_lang: L.L_language,
    t_country: L.L_country,
    t_state: L.L_state,
    t_city: L.L_city,
    t_weather: "🌦 " + L.L_weather,
    t_quakes: "🌍 " + L.L_quake,
    t_temp: L.L_temp,
    t_rain: L.L_rain,
    t_wind: L.L_wind,
    t_condition: L.L_cond
  };
  for (const id of Object.keys(map)) {
    const el = document.getElementById(id);
    if (el) el.textContent = map[id];
  }
}

langEl.addEventListener("change", () => {
  applyLangUI();
  refreshAll();
});

/* =======================
   Thresholds
======================= */
const THRESHOLDS = {
  hotC: 38,
  warmC: 32,
  heavyRainMm: 10,
  quakeRadiusKm: 500
};

const thresholdText = document.getElementById("thresholdText");
if (thresholdText) {
  thresholdText.textContent =
    `hot ≥ ${THRESHOLDS.hotC}°C • rain ≥ ${THRESHOLDS.heavyRainMm}mm/h • quake radius: ${THRESHOLDS.quakeRadiusKm}km`;
}

/* =======================
   City Database (dropdown)
======================= */
const DATABASE = {
  MM: {
    "Yangon Region": [
      "တာမွေ","သင်္ဃန်းကျွန်း","သာကေတ","ဒဂုံမြို့သစ်",
      "သန်လျင်","ကျောက်တန်း","အင်းစိန်","မင်္ဂလာဒုံ",
      "ရွှေပြည်သာ","လှိုင်သာယာ","လှိုင်","ကမာရွတ်",
      "မရမ်းကုန်း","ဗဟန်း","မင်္ဂလာတောင်ညွန့်",
      "ရန်ကုန်"
    ],
    "Magway Region": [
      "မကွေး","မင်းဘူး","စလင်း","ငဖဲ","ဆိပ်ဖြူ","ဂန့်ဂေါ",
      "ထီးလင်း","ပခုက္ကူ","မြိုင်","ရေစကြို","ချောက်",
      "မင်းလှ","တောင်တွင်းကြီး","နတ်မောက်"
    ],
    "Mandalay Region": [
      "မန္တလေး","အမရပူရ","ပြင်ဦးလွင်",
      "ကျောက်ဆည်","မိတ္ထီလာ","မြင်းခြံ"
    ],
    "Nay Pyi Taw": [
      "နေပြည်တော်","ဇမ္ဗူသီရိ","ဒက္ခိဏသီရိ",
      "ပျဉ်းမနား","လယ်ဝေး"
    ],
    "Shan State": [
      "လားရှိုး","နောင်ချို","တောင်ကြီး","ကလော"
    ],
    "Kayin State": [
      "ဘားအံ","မြဝတီ"
    ],
    "Bago Region": [
      "ပဲခူး","တောင်ငူ","ပြည်"
    ]
  },
  TH: {
    "Capital": ["Bangkok"],
    "East / Coastal": ["Pattaya","Chonburi","Rayong"],
    "North": ["Chiang Mai","Chiang Rai","Lampang"],
    "Northeast (Isan)": ["Khon Kaen","Udon Thani","Ubon Ratchathani","Nakhon Ratchasima"],
    "South": ["Phuket","Hat Yai","Surat Thani","Krabi"]
  }
};

function fillStates() {
  admin1El.innerHTML = "";
  const db = DATABASE[countryEl.value];
  Object.keys(db).forEach((state) => {
    const opt = document.createElement("option");
    opt.value = state;
    opt.textContent = state;
    admin1El.appendChild(opt);
  });
}

function fillCities() {
  cityEl.innerHTML = "";
  const db = DATABASE[countryEl.value];
  const cities = db[admin1El.value] || [];
  cities.forEach((city) => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    cityEl.appendChild(opt);
  });
}

/* =======================
   Geocode Fix
   - For the listed townships: use English alias to geocode reliably
   - If still fails: fallback coordinates
======================= */

// ✅ Burmese -> English aliases (for your "Location not found" list)
const MM_ALIAS = {
  "မင်းဘူး": "Minbu, Myanmar",
  "စလင်း": "Salin, Myanmar",
  "ငဖဲ": "Ngape, Myanmar",
  "ဆိပ်ဖြူ": "Seikphyu, Myanmar",
  "ဂန့်ဂေါ": "Gangaw, Myanmar",
  "ထီးလင်း": "Htilin, Myanmar",
  "မြိုင်": "Myaing, Myanmar",
  "ရေစကြို": "Yesagyo, Myanmar",
  "မင်းလှ": "Minhla, Myanmar",
  "တောင်တွင်းကြီး": "Taungdwingyi, Myanmar",
  "နတ်မောက်": "Natmauk, Myanmar",

  "အမရပူရ": "Amarapura, Myanmar",
  "ကျောက်ဆည်": "Kyaukse, Myanmar",
  "မြင်းခြံ": "Myingyan, Myanmar",

  "ဇမ္ဗူသီရိ": "Zabuthiri, Nay Pyi Taw, Myanmar",
  "ဒက္ခိဏသီရိ": "Dekkhinathiri, Nay Pyi Taw, Myanmar",
  "လယ်ဝေး": "Lewe, Myanmar",

  "ကလော": "Kalaw, Myanmar"
};

// ✅ fallback coordinates (backup) — best-effort, enough for weather/quakes
const COORD_FALLBACK_MM = {
  "ရန်ကုန်": { lat: 16.8409, lon: 96.1735 },
  "တာမွေ": { lat: 16.8105, lon: 96.1737 },
  "သင်္ဃန်းကျွန်း": { lat: 16.8150, lon: 96.1990 },
  "သာကေတ": { lat: 16.7850, lon: 96.1770 },
  "ဒဂုံမြို့သစ်": { lat: 16.8500, lon: 96.2000 },
  "သန်လျင်": { lat: 16.7680, lon: 96.2450 },
  "ကျောက်တန်း": { lat: 16.7160, lon: 96.2600 },
  "အင်းစိန်": { lat: 16.9070, lon: 96.0950 },
  "မင်္ဂလာဒုံ": { lat: 16.9075, lon: 96.1350 },
  "ရွှေပြည်သာ": { lat: 16.8700, lon: 96.0600 },
  "လှိုင်သာယာ": { lat: 16.8550, lon: 96.0600 },
  "လှိုင်": { lat: 16.8200, lon: 96.1300 },
  "ကမာရွတ်": { lat: 16.8210, lon: 96.1350 },
  "မရမ်းကုန်း": { lat: 16.8340, lon: 96.1460 },
  "ဗဟန်း": { lat: 16.8060, lon: 96.1600 },
  "မင်္ဂလာတောင်ညွန့်": { lat: 16.7840, lon: 96.1750 },

  "မကွေး": { lat: 20.1496, lon: 94.9320 },
  "မင်းဘူး": { lat: 20.1800, lon: 94.8800 },
  "စလင်း": { lat: 20.5700, lon: 94.7000 },
  "ငဖဲ": { lat: 20.1400, lon: 94.1900 },
  "ဆိပ်ဖြူ": { lat: 20.9000, lon: 94.6500 },
  "ဂန့်ဂေါ": { lat: 22.1700, lon: 94.1400 },
  "ထီးလင်း": { lat: 21.6900, lon: 94.1000 },
  "မြိုင်": { lat: 21.6200, lon: 94.8700 },
  "ရေစကြို": { lat: 21.4100, lon: 95.1000 },
  "မင်းလှ": { lat: 19.8600, lon: 95.0200 },
  "တောင်တွင်းကြီး": { lat: 20.0100, lon: 95.5400 },
  "နတ်မောက်": { lat: 20.1900, lon: 94.9500 },

  "မန္တလေး": { lat: 21.9588, lon: 96.0891 },
  "အမရပူရ": { lat: 21.9000, lon: 96.0700 },
  "ကျောက်ဆည်": { lat: 21.6100, lon: 96.1300 },
  "မြင်းခြံ": { lat: 21.4600, lon: 95.3900 },

  "နေပြည်တော်": { lat: 19.7633, lon: 96.0785 },
  "ဇမ္ဗူသီရိ": { lat: 19.7700, lon: 96.1200 },
  "ဒက္ခိဏသီရိ": { lat: 19.6900, lon: 96.1200 },
  "လယ်ဝေး": { lat: 19.6200, lon: 96.1000 },
  "ပျဉ်းမနား": { lat: 19.7430, lon: 96.2070 },

  "လားရှိုး": { lat: 22.9359, lon: 97.7498 },
  "နောင်ချို": { lat: 22.3220, lon: 96.7990 },
  "တောင်ကြီး": { lat: 20.7892, lon: 97.0378 },
  "ကလော": { lat: 20.6300, lon: 96.5600 },

  "ဘားအံ": { lat: 16.8896, lon: 97.6348 },
  "မြဝတီ": { lat: 16.6903, lon: 98.5078 },

  "ပဲခူး": { lat: 17.3369, lon: 96.4797 },
  "တောင်ငူ": { lat: 18.9429, lon: 96.4341 },
  "ပြည်": { lat: 18.8240, lon: 95.2220 }
};

async function geocode(city) {
  // 1) Myanmar: try alias first for your failing townships
  if (countryEl.value === "MM" && MM_ALIAS[city]) {
    try {
      const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(MM_ALIAS[city])}` +
        `&count=1&language=en&format=json`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.results && data.results.length > 0) return data.results[0];
    } catch (_) {
      // ignore and continue to fallback
    }
  }

  // 2) Myanmar: fallback coordinates (works even if geocoding fails)
  if (countryEl.value === "MM" && COORD_FALLBACK_MM[city]) {
    return { latitude: COORD_FALLBACK_MM[city].lat, longitude: COORD_FALLBACK_MM[city].lon };
  }

  // 3) Normal geocoding
  const url =
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}` +
    `&count=1&language=en&format=json`;

  const res = await fetch(url);
  const data = await res.json();
  if (!data.results || data.results.length === 0) throw new Error("Location not found");
  return data.results[0];
}

/* =======================
   Weather
======================= */
function weatherCodeToText(code) {
  const map = new Map([
    [0, "Clear"], [1, "Mainly clear"], [2, "Partly cloudy"], [3, "Overcast"],
    [45, "Fog"], [48, "Rime fog"],
    [51, "Light drizzle"], [53, "Moderate drizzle"], [55, "Dense drizzle"],
    [61, "Slight rain"], [63, "Moderate rain"], [65, "Heavy rain"],
    [80, "Rain showers (slight)"], [81, "Rain showers (moderate)"], [82, "Rain showers (violent)"],
    [95, "Thunderstorm"], [96, "Thunderstorm + hail"], [99, "Thunderstorm + heavy hail"]
  ]);
  return map.get(code) ?? `Code ${code}`;
}

function weatherSummary(temp, rainNow, wcode) {
  const L = t();

  // thunder first
  if (wcode === 95 || wcode === 96 || wcode === 99) return L.S_thunder;

  // heavy rain (mm/h)
  if (typeof rainNow === "number" && rainNow >= THRESHOLDS.heavyRainMm) return L.S_heavy_rain;

  // rain codes
  const rainCodes = new Set([51,53,55,61,63,65,80,81,82]);
  if (rainCodes.has(wcode)) return L.S_rain_possible;

  // temperature
  if (typeof temp === "number") {
    if (temp >= THRESHOLDS.hotC) return L.S_very_hot;
    if (temp >= THRESHOLDS.warmC) return L.S_hot;
    if (temp <= 20) return L.S_cool;
    return L.S_not_hot;
  }

  // sky condition fallback
  if (wcode === 0 || wcode === 1) return L.S_clear;
  if (wcode === 2) return L.S_cloudy;
  if (wcode === 3) return L.S_overcast;

  return L.S_not_hot;
}

async function loadWeather(lat, lon, displayName) {
  wxStatus.textContent = t().L_loading_weather;

  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,wind_speed_10m,weather_code&hourly=rain&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather HTTP ${res.status}`);
  const data = await res.json();

  const temp = data.current?.temperature_2m;
  const wind = data.current?.wind_speed_10m;
  const wcode = data.current?.weather_code;

  let rainNow = null;
  if (data.hourly?.rain && Array.isArray(data.hourly.rain)) {
    rainNow = data.hourly.rain[0];
  }

  wxMeta.textContent = `${displayName} • lat ${Number(lat).toFixed(3)}, lon ${Number(lon).toFixed(3)}`;
  wxTemp.textContent = (typeof temp === "number") ? `${temp.toFixed(1)} °C` : "—";
  wxWind.textContent = (typeof wind === "number") ? `${wind.toFixed(1)} km/h` : "—";
  wxRain.textContent = (typeof rainNow === "number") ? `${rainNow.toFixed(1)} mm` : "—";
  wxCode.textContent = (typeof wcode === "number") ? weatherCodeToText(wcode) : "—";

  // ✅ Replace "Loaded." with weather state/summary
  wxStatus.textContent = weatherSummary(temp, rainNow, wcode);

  // sound alert only for critical thresholds
  if ((typeof temp === "number" && temp >= THRESHOLDS.hotC) ||
      (typeof rainNow === "number" && rainNow >= THRESHOLDS.heavyRainMm) ||
      (wcode === 95 || wcode === 96 || wcode === 99)) {
    playAlert();
  }
}

/* =======================
   Earthquake
======================= */
function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function loadQuakes(lat, lon, displayName) {
  quakeStatus.textContent = t().L_loading_quake;
  quakeMeta.textContent = `${displayName} • within ${THRESHOLDS.quakeRadiusKm}km • last 24h`;
  quakeList.innerHTML = "";

  const res = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
  if (!res.ok) throw new Error(`Quake HTTP ${res.status}`);
  const data = await res.json();

  const items = [];
  for (const f of (data.features || [])) {
    const p = f.properties || {};
    const coords = f.geometry?.coordinates;
    if (!Array.isArray(coords) || coords.length < 3) continue;

    const qLon = coords[0], qLat = coords[1];
    const mag = typeof p.mag === "number" ? p.mag : null;
    if (mag === null) continue;

    const dist = haversineKm(lat, lon, qLat, qLon);
    if (dist > THRESHOLDS.quakeRadiusKm) continue;

    items.push({ mag, place: p.place || "Unknown location", dist });
  }

  items.sort((a,b) => b.mag - a.mag);

  if (!items.length) {
    quakeStatus.textContent = t().L_no_quake;
    quakeList.innerHTML = `<div class="item">${t().L_no_quake}</div>`;
    return;
  }

  quakeStatus.textContent = ""; // keep it clean; list is enough

  for (const q of items.slice(0, 12)) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `M ${q.mag.toFixed(1)} - ${q.place} (${Math.round(q.dist)}km)`;
    quakeList.appendChild(div);
  }
}

/* =======================
   Sound
======================= */
function playAlert() {
  alertAudio.currentTime = 0;
  alertAudio.play().catch(() => {});
}
testSoundBtn.addEventListener("click", playAlert);

/* =======================
   Main
======================= */
async function refreshAll() {
  const city = cityEl.value;
  if (!city) return;

  $("lastUpdated").textContent =
    `Last updated: ${new Date().toLocaleString(undefined, { hour12: true })}`;

  try {
    const loc = await geocode(city);
    await Promise.all([
      loadWeather(loc.latitude, loc.longitude, city),
      loadQuakes(loc.latitude, loc.longitude, city)
    ]);
  } catch (e) {
    wxStatus.textContent = `${t().L_err_weather}: ${e.message}`;
    quakeStatus.textContent = `${t().L_err_quake}: ${e.message}`;
  }
}

function init() {
  applyLangUI();

  fillStates();
  fillCities();

  countryEl.addEventListener("change", () => {
    fillStates();
    fillCities();
    refreshAll();
  });

  admin1El.addEventListener("change", () => {
    fillCities();
    refreshAll();
  });

  cityEl.addEventListener("change", refreshAll);
  refreshBtn.addEventListener("click", refreshAll);

  setInterval(refreshAll, 5 * 60 * 1000);
  refreshAll();
}

init();
