# Punjab Floods Donation Page

Year-end donation landing page for UNITED SIKHS' Punjab flood relief efforts.

## Live Site

**Production:** https://donate.unitedsikhs.org

## Project Overview

Single-page HTML donation landing page for the 2025 Punjab floods relief campaign. Features donation tiers, impact statistics, photo gallery, and integrated Keela donation form.

## Recent Updates

### December 2, 2025
- Added country-specific donation links for tax deductibility
- Clear messaging: USA form only for US tax-deductible donations
- International donor links: Canada, Australia, UK, India
- Mobile-responsive design with flag emojis
- Maintains consistent brand styling

## Tech Stack

- **Frontend:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **Donation Form:** Keela embed (USA donations)
- **Hosting:** Vercel
- **Deployment:** Auto-deploy via GitHub integration

## Project Structure

```
punjab-floods-donation-page/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles
│   ├── js/
│   │   ├── main.js         # JavaScript functionality
│   │   └── tailwind.config.js
│   ├── images/             # Hero images, gallery, logos
│   └── videos/             # Punjab floods story video
├── DEPLOYMENT.md           # Deployment guide
├── PROJECT_STATUS.md       # Project tracking
└── README.md               # This file
```

## Key Features

- **Donation Tiers:** $100, $250, $500, $850 impact levels
- **Country-Specific Tax Receipts:** Links for Canada, Australia, UK, India donors
- **Keela Integration:** Embedded USA donation form
- **Year-End Countdown:** Urgency timer for Dec 31 tax deadline
- **Impact Statistics:** 50,000+ meals, 2,000+ rescued, 11 villages adopted
- **Photo Gallery:** Auto-scrolling relief effort images
- **Mobile Optimized:** Responsive design with sticky footer CTA
- **Social Sharing:** Facebook, Twitter/X, LinkedIn, copy link

## International Donation Pages

- 🇨🇦 **Canada:** https://unitedsikhs.org/donate/canada-donation/
- 🇦🇺 **Australia:** https://unitedsikhs.org/donate/australia-donation/
- 🇬🇧 **UK:** https://unitedsikhs.org/donate/united-humanitarian-sikh-aid-donation/
- 🇮🇳 **India:** https://unitedsikhs.org/donate/india/

## Deployment

This project auto-deploys to Vercel via GitHub integration.

### Deploy Updates

1. Make changes to `index.html` or assets
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin master
   ```
3. Vercel auto-deploys in ~30 seconds
4. Changes live on https://donate.unitedsikhs.org

### Manual Deploy

```bash
vercel --prod --yes
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guide.

## Local Development

1. Clone the repository
2. Open `index.html` in browser (no build step required)
3. Use Live Server extension for hot reload (optional)

## Git Repository

**Origin:** https://github.com/dorddis/punjab-floods-donation-page.git

## Brand Colors

- **Saffron (Primary CTA):** `#fbb03f`
- **Trust Blue:** `#18b7d0` / `#0c79be`
- **Hope Green:** Custom green for stats
- **Warm Sand (Background):** Light warm tone

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Performance

- **HTML:** ~59KB
- **Images:** ~4MB total (optimized)
- **Video:** 16MB (loads on-demand)
- **Load Time:** < 3 seconds on 3G

## Contact

**Organization:** UNITED SIKHS
**Project Maintainer:** Rahul Lalia
**Deploy Date:** November 2025
**Last Updated:** December 2, 2025

## License

© 2025 UNITED SIKHS. All rights reserved.
