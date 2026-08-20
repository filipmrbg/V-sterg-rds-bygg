# 🛠️ Antigravity Master Prompt Library (Svenska Hantverkar- & Bygghemsidor)

Detta är din officiella **Standard Operating Procedure (SOP)** och **Prompt Library** för att snabbt producera och anpassa högpresterande hemsidor till svenska bygg- och hantverksföretag.

Filen är byggd för att läggas i roten på varje grundmall.

---

## ⚡ TVÅ ARBETSSÄTT:

| Metod | När den används | Vad den gör |
| :--- | :--- | :--- |
| **🚀 Metod A: "All-in-One Mega-Brick"** | När du sätter upp en helt ny kunddemo från en grundmall. | Uppdaterar **hela sajten i ett enda drag** (texter, Allabolag-förädling, logga, favicon, absolut OG-delningsbild för iMessage/SMS, hero, om oss-bild, galleri, 3-mannateam och sociala länkar). |
| **🧱 Metod B: Modulära Byggstenar (Brick 1–7)** | När du vill göra snabba deländringar eller justera enskilda sektioner. | Steg-för-steg-kontroll över enskilda sektioner. |

---

# 🚀 METOD A: All-in-One Mega-Brick (Snabbstart Demo)

Kopiera hela blocket nedan, klistra in dina uppgifter direkt efter kolonet `:` (luftig layout med gott om utrymme för långa bildlänkar!), klistra in i chatten och tryck Enter:

```text
Konfigurera hela webbplatsen för denna kunddemo utifrån uppgifterna nedan.

REGLER FÖR AI:
1. Förädla Allabolag-texten till modern, säljande och förtroendeingivande svensk hantverkscopy utan stelt juridiskt bolagsspråk.
2. Logotypen ska göras transparent i headern så att den smälter in snyggt utan vit bakgrundsplatta.
3. FÖRHANDSVISNING / OPEN GRAPH (KRITISKT FÖR IMESSAGE/SMS):
   - <meta property="og:image"> och <meta name="twitter:image"> i index.html MÅSTE ALLTID ha en fullständig absolut URL (börjar med https://...) – t.ex. den direkta URL:en till logotypen eller https://[Demo-URL]/logo.png. Använd ALDRIG enbart relativa sökvägar som "/logo.png" då sociala medier och iMessage annars visar en tom/svart ruta.
   - Sätt <meta name="twitter:card" content="summary_large_image" /> samt <link rel="icon"> och <link rel="apple-touch-icon"> till logotypen.
4. Sätt alltid upp teamet i About.tsx som 3 personer: Ägaren/VD som huvudperson + 2 yrkeshantverkare.
5. Behåll mallens förinställda tjänstekortsbilder för de 4 rena kärntjänsterna (Nybyggnation, Renovering, Tillbyggnad, Totalentreprenad).
6. Om Instagram-inlägg lämnas tomma nedan, dölj de 3 embed-korten och visa istället en ren, modern "Följ oss"-banner.
7. Rensa bort gamla oanvända logotyper och filer ur projektet.

================ 1. KUNDUPPGIFTER ================
Företagsnamn: 

Nisch: 

Ort / Område: 

Telefon: 

E-post: 

Besöksadress: 

Organisationsnummer: 

Ägare / VD: 

Slogan (valfritt): 

Demo / Vercel URL (valfritt): 


================ 2. ALLABOLAG / RÅTEXT ================
[Klistra in råtext här]


================ 3. LOGO & MEDIA ================
Logotyp URL: 

Hero Video/Bild URL: 

Om Oss Bild URL: 


================ 4. BILDGALLERI (4-6 BILDER) ================
Galleri Bild 1 URL: 

Galleri Bild 2 URL: 

Galleri Bild 3 URL: 

Galleri Bild 4 URL: 

Galleri Bild 5 URL (valfritt): 

Galleri Bild 6 URL (valfritt): 


================ 5. SOCIALA MEDIER & INSTAGRAM ================
Instagram Profil URL: 

Facebook Sida URL: 

Instagram Inlägg 1 URL: 

Instagram Inlägg 2 URL: 

Instagram Inlägg 3 URL: 
```

---

# 🧱 METOD B: Modulära Byggstenar (Brick 1–7)

Använd dessa när du vill göra specifika deluppdateringar:

---

### 🧱 BRICK 1: Företagsinformation & Allabolag-Text
```text
Uppdatera företagsinformationen och texterna över hela webbplatsen. Förädla råtexten till modern hantverkssvenska.

Företagsnamn: 
Ort / Område: 
Telefon: 
E-post: 
Besöksadress: 
Ägare / VD: 
Slogan (valfritt): 

Allabolag / Råtext:

```

---

### 🧱 BRICK 2: Logotyp, Favicon & Absolut Förhandsvisningsbild
```text
Uppdatera logotypen på hela webbplatsen:
1. Ersätt logotypen i Navbar (transparent utan vit kant), Footer och Om oss.
2. Uppdatera <link rel="icon"> och <link rel="apple-touch-icon"> i index.html.
3. Uppdatera <meta property="og:image"> och <meta name="twitter:image"> i index.html med FULLSTÄNDIG ABSOLUT URL (https://...) så att förhandsvisningsbilden i iMessage/SMS/sociala medier fungerar felfritt.
4. Rensa bort gamla logotypfiler ur projektet.

Logotyp URL: 
Demo / Vercel URL (valfritt): 
```

---

### 🧱 BRICK 3: Hero Media (Video eller Bakgrundsbild)
```text
Byt ut bakgrundsmediat i Hero-sektionen på startsidan. Behåll layout, overlay och läsbarhet intakt.

Hero Media URL: 
```

---

### 🧱 BRICK 4: De 4 Kärntjänsterna (Korta & Rena Rubriker)
```text
Uppdatera tjänsteutbudet i src/data/services.ts och på startsidan till följande 4 rena kärntjänster:

1. Nybyggnation
- Kort text: Kundanpassade lösvirkeshus, fritidshus, attefallshus och garage från grund till nyckelfärdigt hem.
- Slug: nybyggnation

2. Renovering
- Kort text: Omfattande renoveringar av hus, lägenheter, kök och badrum som höjer standarden och trivseln.
- Slug: renovering

3. Tillbyggnad
- Kort text: Utöka boytan med harmoniska utbyggnader, vinkelutbyggnader och taklyft.
- Slug: tillbyggnad

4. Totalentreprenad
- Kort text: En enda kontaktperson och ett samlat ansvar från idé och ritning till nyckelfärdigt och besiktigat resultat.
- Slug: totalentreprenad
```

---

### 🧱 BRICK 5: "Om Oss"-Bild & Team-sektion (Fast 3-mannateam)
```text
Uppdatera Om oss-bilden och konfigurera teamet till ett stilrent 3-mannateam (ägaren + 2 anställda).

Om Oss Bild URL (firmabil / snickare / eller skriv "logga"): 

Ägare / VD Namn: 

Anställd 1 (valfritt): 

Anställd 2 (valfritt): 
```

---

### 🧱 BRICK 6: Bildgalleri / Våra Arbeten (Luftig Layout)
```text
Uppdatera bildgalleriet "Våra Arbeten" med följande bildlänkar:

Galleri Bild 1 URL: 

Galleri Bild 2 URL: 

Galleri Bild 3 URL: 

Galleri Bild 4 URL: 

Galleri Bild 5 URL: 

Galleri Bild 6 URL: 
```

---

### 🧱 BRICK 7: Sociala Medier & Instagram-banner
```text
Uppdatera länkarna till sociala medier. Om inläggslänkar lämnas tomma, visa en ren Följ-banner.

Instagram Profil: 

Facebook Sida: 

Instagram Inlägg 1: 

Instagram Inlägg 2: 

Instagram Inlägg 3: 
```

---

# 📚 NISCH-KATALOG (Certifikat & Data per Bransch)

---

### 🔨 1. Byggföretag / Snickare & Totalentreprenad
- **Tjänster:** Nybyggnation | Renovering | Tillbyggnad | Totalentreprenad
- **Certifikat & Tryggheter:** Medlem i Byggföretagen, ID06 Legitimerad Personal, Bas-P & Bas-U Certifiering, Byggfelsförsäkring & Färdigställandeförsäkring, Fast pris enligt Hantverkarformuläret 12 / ABS 18, Fullt ROT-avdrag (30%).
- **Offertval:** Nybyggnation, Tillbyggnad / Utbyggnad, Totalrenovering, Kök & Badrum, Altan / Uterum, Totalentreprenad, Övrigt snickeri.

---

### 🚜 2. Markfirma / Markentreprenad & Dränering
- **Tjänster:** Dränering | Schaktning | Stensättning | Husgrunder | Enskilt Avlopp
- **Certifikat & Tryggheter:** Diplomerad Fukt- & Dräneringsentreprenör (Isodrän / Pordrän), Maskinförarbevis, ID06, Bas-P/U, 10 års funktionsgaranti på dränering, Ansvarsförsäkring 10 MSEK.
- **Offertval:** Husdränering, Schaktning & Tomtplanering, Stensättning & Stödmurar, Husgrund / Betongplatta, Enskilt Avlopp / VA, Poolgrävning.

---

### 🚰 3. Rörmokare & VVS-Företag
- **Tjänster:** Värmepumpar | Badrums-VVS | Köksinstallation | Stambyte | Fastighetsservice
- **Certifikat & Tryggheter:** Auktoriserat VVS-företag (Säker Vatten), Certifierad Värmepumpsinstallatör (SKVP), Heta Arbeten, Säker Vatten-intyg lämnas alltid, Full ansvarsförsäkring för vattenskador.
- **Offertval:** Värmepump / Värmesystem, Badrumsrenovering & VVS, Köksinstallation & Rördragning, Stambyte / Rörbyte, Vattenburen golvvärme, Fastighetsservice / Serviceavtal.

---

### ⚡ 4. Elektriker & Elinstallation
- **Tjänster:** Laddboxar | Solceller | Centralbyte | Smarta Hem (Plejd) | Nyinstallation
- **Certifikat & Tryggheter:** Registrerat hos Elsäkerhetsverket, Auktoriserad Elinstallatör (AL), Medlem i Installatörsföretagen (IN), Certifierad Plejd- och laddboxmontör, 50% Grönt Avdrag direkt på fakturan.
- **Offertval:** Laddbox & Elbilsladdning, Solceller & Batterilagring, Byte av Elcentral / Proppskåp, Belysning & Plejd, Elinstallation vid Renovering/Nybygge, Felsökning & Elbesiktning.

---

### 🏠 5. Takläggare & Takentreprenad
- **Tjänster:** Takbyte Tegel & Betong | Papptak | Plåttak | Taktvätt & Målning | Taksäkerhet
- **Certifikat & Tryggheter:** Medlem i TIB (Takentreprenörerna), Certifierad Tätskiktsgarantier Norden (Upp till 15 års ansvarsgaranti), Heta Arbeten, Fallskyddscertifierad personal, Bas-P/U.
- **Offertval:** Takbyte (Tegel / Betongpannor), Papptak / Tätskikt, Plåttak / Bandtäckning, Taktvätt & Behandling, Takavvattning (Hängrännor), Taksäkerhet & Takstegar.

---

### 🎨 6. Måleri & Fasadmåleri
- **Tjänster:** Invändigt Måleri | Fasadmålning | Tapetsering | Fönsterrenovering | Våtrum
- **Certifikat & Tryggheter:** Medlem i Måleriföretagen i Sverige, MVK (Måleribranschens Våtrumskontroll), Miljöcertifierade färgsystem, Nöjd Kund-Garanti med slutbesiktning.
- **Offertval:** Invändig Målning & Spackling, Fasadmålning & Träskydd, Tapetsering, Fönstermålning, Våtrumsmålning, Snickerimålning.

---

### 🛁 7. Badrum & Plattsättning
- **Tjänster:** Total Badrumsrenovering | Kakel & Klinker | Microcement | Flytspackling | Golvvärme
- **Certifikat & Tryggheter:** Behörig Våtrum enligt BKR (Byggkeramikrådet), GVK Våtrumskontroll, Säker Vatten-samverkan, BKR Kvalitetsdokument & Tätskiktsgaranti lämnas alltid.
- **Offertval:** Total Badrumsrenovering, Plattsättning Kakel & Klinker, Microcement / Fogfria ytor, Golvvärme & Flytspackling, Spa / Relaxavdelning.
