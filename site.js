// WhiteTree site — dark mode + language (EN/FR)
const LOGIN_URL = "http://localhost:8080/login"; // remplace par ton lien public (Cloudflare Tunnel) plus tard
const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1520998336067407944&scope=bot+applications.commands&permissions=1099780074678";
const SUPPORT_URL = "#"; // mets ton lien de serveur de support Discord

const I18N = {
  en: {
    "nav.docs":"Documentation","nav.terms":"Terms","nav.privacy":"Privacy","nav.support":"Support",
    "nav.login":"Sign in","cta.invite":"Add to Discord","cta.login":"Open dashboard",
    "hero.eyebrow":"Anti-raid protection","hero.title":"Keep your Discord safe, automatically.",
    "hero.lead":"WhiteTree blocks raids, nukes, spam and fake accounts the moment they hit — no configuration needed to start.",
    "hero.quote":"“Good protection is invisible: it acts fast, cleanly, and lets your community breathe.”",
    "feat.title":"Everything a server needs to stay clean","feat.sub":"Seven protection modules, active from the second the bot joins.",
    "f1.t":"Anti-raid","f1.d":"Detects join waves and locks the server down, raising Discord verification and slowmode automatically.",
    "f2.t":"Anti-nuke","f2.d":"Watches the audit log: mass deletions, webhooks and permission escalation get the actor quarantined.",
    "f3.t":"Anti-spam","f3.d":"Flood, duplicates, mentions, @everyone and unauthorized invites are removed and timed out.",
    "f4.t":"New accounts","f4.d":"A risk score filters fresh or suspicious accounts at the gate before they can do harm.",
    "f5.t":"Verification","f5.d":"A one-click button gate that raid bots can't pass — humans get in, bots don't.",
    "f6.t":"Anti-impersonation","f6.d":"Spots usernames copying your staff, including accents and unicode tricks.",
    "cta2.title":"Ready in one click","cta2.sub":"Invite WhiteTree, and it protects your server right away.",
    "foot.made":"Not affiliated with Discord Inc."
  },
  fr: {
    "nav.docs":"Documentation","nav.terms":"Conditions","nav.privacy":"Confidentialité","nav.support":"Support",
    "nav.login":"Se connecter","cta.invite":"Ajouter à Discord","cta.login":"Ouvrir le dashboard",
    "hero.eyebrow":"Protection anti-raid","hero.title":"Garde ton Discord en sécurité, automatiquement.",
    "hero.lead":"WhiteTree bloque les raids, les nukes, le spam et les faux comptes dès qu'ils arrivent — aucune configuration nécessaire pour démarrer.",
    "hero.quote":"“Une bonne protection est invisible : elle agit vite, proprement, et laisse ta communauté respirer.”",
    "feat.title":"Tout ce qu'il faut pour rester propre","feat.sub":"Sept modules de protection, actifs dès l'arrivée du bot.",
    "f1.t":"Anti-raid","f1.d":"Détecte les vagues d'arrivées et verrouille le serveur, en renforçant la vérification Discord et le slowmode.",
    "f2.t":"Anti-nuke","f2.d":"Surveille l'audit : suppressions massives, webhooks et escalade de droits mettent l'auteur en quarantaine.",
    "f3.t":"Anti-spam","f3.d":"Flood, doublons, mentions, @everyone et invitations non autorisées sont supprimés et sanctionnés.",
    "f4.t":"Comptes neufs","f4.d":"Un score de risque filtre les comptes récents ou suspects à l'entrée, avant qu'ils ne nuisent.",
    "f5.t":"Vérification","f5.d":"Un bouton à l'entrée que les bots de raid ne passent pas — les humains entrent, pas les bots.",
    "f6.t":"Anti-usurpation","f6.d":"Repère les pseudos qui copient ton staff, accents et unicode compris.",
    "cta2.title":"Prêt en un clic","cta2.sub":"Invite WhiteTree, et il protège ton serveur immédiatement.",
    "foot.made":"Non affilié à Discord Inc."
  }
};

function t(k){ return (I18N[state.lang]&&I18N[state.lang][k]) || I18N.en[k] || k; }
const state={ lang:"en", dark:false };

function applyLang(lang){
  if(!I18N[lang]) lang="en";
  state.lang=lang;
  try{ localStorage.setItem("wt_lang",lang); }catch(e){}
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent=t(el.getAttribute("data-i18n")); });
  document.querySelectorAll(".langpill").forEach(p=>p.textContent=lang.toUpperCase());
}
function toggleLang(){ applyLang(state.lang==="en"?"fr":"en"); }

function applyTheme(dark){
  state.dark=dark; document.body.classList.toggle("dark",dark);
  try{ localStorage.setItem("wt_dark",dark?"1":"0"); }catch(e){}
  document.querySelectorAll(".themepill").forEach(p=>p.textContent=dark?"☀":"☽");
}
function toggleTheme(){ applyTheme(!state.dark); }

function wireLinks(){
  document.querySelectorAll("[data-login]").forEach(a=>a.href=LOGIN_URL);
  document.querySelectorAll("[data-invite]").forEach(a=>a.href=INVITE_URL);
  document.querySelectorAll("[data-support]").forEach(a=>a.href=SUPPORT_URL);
}

document.addEventListener("DOMContentLoaded",()=>{
  let lang="en",dark=false;
  try{ lang=localStorage.getItem("wt_lang")||"en"; dark=localStorage.getItem("wt_dark")==="1"; }catch(e){}
  wireLinks(); applyTheme(dark); applyLang(lang);
});
