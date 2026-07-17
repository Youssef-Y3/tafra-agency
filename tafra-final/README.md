# 🔥 TAFRA — Creative Tech Agency (2026 Edition)

**Cairo-Based · We Solve. You Profit.**

موقع Single-Page كامل، احترافي، سريع، متجاوب — جاهز للنشر على أي استضافة مجانية.

---

## 📦 محتويات المشروع

```
tafra/
├── index.html              ← الصفحة الرئيسية
├── css/style.css           ← كل الاستايلات
├── js/main.js              ← كل الـ JavaScript
├── js/pricing-data.js      ← بيانات كل الأسعار (من TAFRA_Pricing_Palette_Full_2026.pdf)
├── works/works.js          ← ملف الأعمال (زوّده لما تعمل شغل جديد)
├── assets/favicon.svg      ← الفافيكون
├── images/                 ← فولدر لصور أعمالك المحلية
└── README.md
```

---

## 🚨 خطوة واحدة أساسية قبل النشر (5 دقايق)

### ربط الفورم بـ Web3Forms — الرسايل توصلك على `youssef.y3e@gmail.com` مباشرة

1. ادخل: **https://web3forms.com**
2. اكتب إيميلك: `youssef.y3e@gmail.com` واضغط **Create Access Key**
3. هيوصلك إيميل من `Web3Forms` فيه **Access Key** (سطر شكله: `abc12345-de67-...`)
4. افتح `index.html` بأي محرر (VS Code / Notepad)
5. اضغط `Ctrl + F` ودور على: `REPLACE_WITH_WEB3FORMS_KEY`
6. استبدله بالـ Key اللي وصلك
7. Save ✓

**النتيجة:**
- أي حد يعبّي الفورم → رسالة كاملة تيجيلك على إيميلك في ثواني
- Web3Forms مجاني للأبد (250 رسالة/شهر)
- بيمنع الـ Spam تلقائياً (Honeypot موجود)

---

## 🎯 كل حاجة اتظبطت لك جاهزة

| الميزة | الحالة | التفاصيل |
|--------|--------|----------|
| 📧 إيميل الاستقبال | ✅ | `youssef.y3e@gmail.com` |
| 📱 واتساب | ✅ | `+20 106 069 0384` (زرار عائم + في الفورم + في الفوتر) |
| 💰 الأسعار | ✅ | USD (افتراضي) + EGP (toggle) — 82 خدمة كاملة من الـ PDF |
| 📊 الباقات | ✅ | Starter $75 / Growth $180 / Domination $380 |
| 🔗 السوشيال | ✅ | Behance / LinkedIn / FB / Instagram / Vimeo — كلها لينكاتك الحقيقية |
| 🖼️ Portfolio | ✅ | 9 أعمال جاهزة + فلترة (Design/Video/AI/Branding) |
| 🎨 UI/UX | ✅ | Preloader + Custom Cursor + Marquee + Noise + Perspective Grid |
| 📱 Responsive | ✅ | من 320px لـ 4K |
| ⚡ Performance | ✅ | Static HTML/CSS/JS · بيشتغل بدون Backend |

---

## 🌐 النشر على Cloudflare Pages (توصيتي — Free Forever)

### الطريقة الأسهل (3 دقائق):

1. اضغط الفولدر `tafra/` كامل → `tafra.zip`
2. ادخل: **https://dash.cloudflare.com** (سجّل مجاناً)
3. من القائمة اليسار: `Workers & Pages` → `Create` → `Pages` → `Upload assets`
4. اسم البروجكت: `tafra`
5. اسحب `tafra.zip` → **Deploy**
6. ✅ بعد 30 ثانية موقعك على: **`tafra.pages.dev`**

### ليه Cloudflare Pages؟

- ♾️ **Bandwidth غير محدود** (حتى لو جالك مليون زيارة)
- 🌍 **CDN في 300+ موقع** (أسرع من أي حد)
- 🔒 **HTTPS مجاني** تلقائي
- 🛡️ **DDoS Protection** مدمج
- 🆓 **Free Forever** — مفيش خدع

---

## 🌐 استضافات مجانية بديلة (بالترتيب)

| # | الاستضافة | الميزة | URL |
|---|-----------|--------|-----|
| 🥇 | **Cloudflare Pages** | Bandwidth غير محدود | https://pages.cloudflare.com |
| 🥈 | **Netlify** | Drag & Drop حرفياً | https://app.netlify.com/drop |
| 🥉 | **Vercel** | الأسرع في الأداء | https://vercel.com |
| 4 | **GitHub Pages** | لو بتحب Git | https://pages.github.com |
| 5 | **Surge.sh** | سطر واحد CLI | https://surge.sh |

---

## 🔗 ربط دومين مخصص (`tafra.agency` أو أي دومين)

1. اشتري الدومين من **Namecheap** (~$10/سنة) — [namecheap.com](https://namecheap.com)
2. في Cloudflare Pages → `Custom domains` → `Set up a custom domain`
3. اكتب `tafra.agency` → اتبع تعليمات DNS (خطوتين بس)
4. بعد 5 دقايق ✓ + HTTPS مجاني

---

## ➕ إضافة عمل جديد (30 ثانية)

افتح `works/works.js` وضيف الأوبجيكت ده **فوق** في الـ Array:

```js
{
  title: "اسم المشروع",
  category: "design",   // design | video | ai | branding
  description: "وصف قصير للمشروع",
  image: "images/my-project.jpg",   // ضع الصورة في فولدر images/
  link: "https://www.behance.net/gallery/xxx"
}
```

Save → Refresh → ظاهر تلقائياً مع الفلتر بتاعه ✨

**💡 لصور أخف:** استخدم [Squoosh.app](https://squoosh.app) لضغطها بصيغة WebP.

---

## 💵 تعديل الأسعار

- **أسعار الباقات:** في `index.html` — دور على `data-usd="180"` وغيّر
- **أسعار الخدمات المفردة:** في `js/pricing-data.js` — كل خدمة ليها `egp` و `usd`

---

## 📞 معلومات الاتصال (كلها مضبوطة في الموقع)

- 📧 **Email:** youssef.y3e@gmail.com
- 📱 **WhatsApp:** +20 106 069 0384
- 🎨 **Behance:** [behance.net/youssefessam27](https://www.behance.net/youssefessam27)
- 💼 **LinkedIn:** [linkedin.com/in/youssef-essam-y3](https://www.linkedin.com/in/youssef-essam-y3)
- 📷 **Instagram:** [@youssef_essam.y3](https://www.instagram.com/youssef_essam.y3/)
- 🎬 **Vimeo:** [vimeo.com/user230013481](https://vimeo.com/user230013481)

---

## 🚀 خطواتك الأخيرة

- [ ] فعّل Web3Forms (خطوة 5 دقايق فوق)
- [ ] اضغط الفولدر ZIP
- [ ] ارفعه على Cloudflare Pages
- [ ] (اختياري) اشتري دومين واربطه
- [ ] احتفل — الموقع live 🎉

---

**Made with 🔴 by Youssef Essam · TAFRA 2026**
