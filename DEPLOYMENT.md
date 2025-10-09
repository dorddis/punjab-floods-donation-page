# Rebuild Punjab Landing Page - Deployment Guide

## 🚀 Quick Deploy to Vercel (5 Minutes)

### **Option A: Deploy from GitHub (Recommended)**

1. **Push to GitHub** (if not already):
   ```bash
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/punjab-floods-donation.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: **"Other"** (it's just HTML)
   - Build Command: Leave empty
   - Output Directory: Leave empty (root)
   - Click "Deploy"

3. **Done!**
   - URL: `https://your-project.vercel.app`
   - Auto-deploys on every git push
   - Free SSL certificate included

---

### **Option B: Drag & Drop (2 Minutes)**

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login (free)

2. **Deploy**:
   - Click "Add New" → "Project"
   - Drag the entire `punjab_floods_donation_page` folder
   - Click "Deploy"

3. **Done!**
   - Gets URL instantly: `rebuild-punjab-XXXXX.vercel.app`

---

### **Option C: Vercel CLI (For Developers)**

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project folder
cd punjab_floods_donation_page

# Deploy
vercel

# Follow prompts:
# - Login to Vercel
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: rebuild-punjab
# - Directory: ./
# - Override settings: No

# Done! You'll get a URL
```

---

## 📁 What Gets Deployed

```
punjab_floods_donation_page/
├── index.html           ← Main page (deployed)
├── assets/              ← All images/videos (deployed)
│   ├── images/
│   └── videos/
├── IMAGE_SOURCES.md     ← Documentation (not public)
└── versions/            ← Backups (not public)
```

**Public files:**
- `index.html`
- Everything in `assets/`

**Private files** (not served publicly):
- `IMAGE_SOURCES.md`
- `versions/`
- `.git/`
- Any dotfiles

---

## 🌐 Custom Domain Setup (After Deployment)

### On Vercel:
1. Go to project settings
2. Domains tab
3. Add custom domain: `rebuild.theglobalsikhs.org`
4. Follow DNS instructions

### DNS Records to Add:
```
Type: CNAME
Name: rebuild
Value: cname.vercel-dns.com
```

**OR** if using subdomain on existing theglobalsikhs.org:
```
Type: A
Name: rebuild
Value: 76.76.21.21 (Vercel's IP)
```

---

## ⚡ Performance Optimizations (Before Launch)

### Current Status:
- ✅ HTML: ~30KB (excellent)
- ✅ Images: ~4MB total
- ⚠️ Video: 16MB (loads on-demand, OK)

### Optional Optimizations:
1. **Compress Video** (if needed):
   ```bash
   # Reduce 16MB → ~8MB with minimal quality loss
   ffmpeg -i punjab-floods-story.mp4 -c:v libx264 -crf 28 -preset slow punjab-floods-optimized.mp4
   ```

2. **Convert Images to WebP** (30% smaller):
   ```bash
   # Not critical, but nice to have
   # Vercel can do this automatically in paid tier
   ```

3. **Add Image Lazy Loading**:
   - Already using `loading="lazy"` attribute would help
   - Not critical for this page size

---

## 🔐 Environment Variables (For Future Payment Integration)

When adding payment backend:

```env
# Razorpay (Indian payments)
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxxxx

# Stripe (International)
STRIPE_PUBLIC_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx

# Database
DATABASE_URL=postgresql://xxxxx

# Email Service (SendGrid/Mailgun)
SENDGRID_API_KEY=xxxxx
```

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional):
Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics (Recommended):
- Free with Vercel
- Enable in project settings
- Tracks: Visitors, page views, performance

---

## 🐛 Troubleshooting

### Video Not Playing:
1. Check file path: `assets/videos/punjab-floods-story.mp4`
2. Try different browser
3. Check browser console for errors
4. Ensure video file uploaded correctly

### Images Not Loading:
1. Verify folder structure: `assets/images/`
2. Check image paths in HTML
3. Clear browser cache (Ctrl+Shift+R)
4. Check Vercel deployment logs

### Page Not Loading:
1. Check Vercel build logs
2. Ensure `index.html` is in root folder
3. Try redeploying

---

## 📱 Testing Before Launch

### Desktop:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile:
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] Test all CTAs
- [ ] Test video modal
- [ ] Test donation form

### Key Features to Test:
- [ ] Video modal opens and closes
- [ ] All donation amounts work
- [ ] Sticky footer appears on scroll (mobile)
- [ ] Share buttons work
- [ ] All images load
- [ ] Mobile captions visible (flood gallery)
- [ ] Form validation

---

## 🔄 Updating After Deployment

```bash
# Make changes to index.html
# Commit and push
git add .
git commit -m "Update: [your change]"
git push

# Vercel auto-deploys in ~30 seconds
```

---

## 💰 Cost

### Vercel:
- **Free Tier**: Perfect for this project
  - 100GB bandwidth/month
  - Unlimited requests
  - Auto SSL
  - GitHub integration

### Future Costs (When Scaling):
- Custom domain: $0 (use existing theglobalsikhs.org)
- Payment processing: 2-3% per transaction (Razorpay/Stripe)
- Backend hosting: $0-25/month (when adding payment API)

---

## 🎯 Next Steps After Launch

1. **Add Google Analytics** - Track conversions
2. **Set up A/B testing** - Test different headlines
3. **Integrate payment gateway** - Razorpay for Indian users
4. **Add backend API** - Process donations, send receipts
5. **Connect WhatsApp Business API** - Auto-updates
6. **Set up email automation** - Thank you emails
7. **Add admin dashboard** - Track donations in real-time

---

## 📞 Support

### Vercel Support:
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

### Emergency Contact:
- Developer: [Your contact]
- Client: United Sikhs / Global Sikhs

---

## ✅ Pre-Launch Checklist

- [ ] All images load correctly
- [ ] Video plays on all devices
- [ ] Mobile layout perfect
- [ ] All CTAs scroll to donation form
- [ ] Social share buttons work
- [ ] SEO meta tags present
- [ ] Favicon loads
- [ ] Logo displays correctly
- [ ] Test on slow 3G connection
- [ ] No console errors
- [ ] Legal: Image attribution documented
- [ ] Custom domain connected (if applicable)
- [ ] Analytics tracking enabled
- [ ] Backup copy saved

---

**Created**: October 9, 2025
**Version**: 1.0 (Production Ready)
**Deployment Status**: Ready for immediate launch
