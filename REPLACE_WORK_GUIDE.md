# How to Replace Concept Projects with Your Real Portfolio Work

This portfolio website is built with a clean, decoupled data architecture (`src/data/portfolioData.js`). You can replace, edit, or add your actual client work and design files without altering any React component logic.

---

## 📁 1. Asset Storage
Place all your high-resolution PNG, JPG, or WEBP design images inside:
```
public/assets/images/
```
For example:
- `public/assets/images/my_real_branding.jpg`
- `public/assets/images/my_real_thumbnail_1.jpg`
- `public/assets/images/Alok_Pandey_Resume.pdf` (for your PDF resume download)

---

## 📝 2. Editing Portfolio Content (`src/data/portfolioData.js`)

Open `src/data/portfolioData.js`. You will find structured arrays for each section.

### A. Replacing a Project Case Study (Branding, Social Media, Posters, etc.)
Locate the `portfolioCategories` array in `src/data/portfolioData.js`:

```javascript
{
  id: "branding",
  number: "01",
  title: "BRANDING",
  description: "Your custom category summary...",
  badge: "CLIENT / REAL BRANDING CASE STUDY", // Change label here
  heroImage: "/assets/images/my_real_branding.jpg", // Update image path
  projects: [
    {
      id: "my-real-project",
      title: "CLIENT NAME — Brand Identity Title",
      type: "CLIENT PROJECT", // Change from "CONCEPT PROJECT"
      tagline: "Your actual tagline describing the project.",
      overview: "Detailed project overview...",
      brief: "What the client needed...",
      idea: "Your core design solution...",
      approach: "How you executed typography, color, and grids...",
      designSystem: {
        typography: "e.g., Helvetica Neue & Syne",
        colors: ["#111111", "#FF0000", "#FFFFFF"],
        composition: "Grid rules used",
        imagery: "Style of photos/mockups used"
      },
      deliverables: ["Logo Design", "Packaging", "Brand Guide PDF"],
      image: "/assets/images/my_real_branding.jpg",
      reflection: "Key learnings or impact of the design."
    }
  ]
}
```

### B. Updating YouTube Thumbnails
Locate the `thumbnails` array inside the `thumbnails` category object in `portfolioData.js`:

```javascript
{
  id: "thumb-1",
  title: "MY REAL YOUTUBE VIDEO THUMBNAIL",
  niche: "Business & Strategy",
  ctrFocus: "High Emotional Contrast & Big Typography",
  concept: "Key visual strategy used",
  text: "TEXT ON THUMBNAIL",
  image: "/assets/images/my_real_thumbnail.jpg"
}
```

### C. Updating Personal Info & Resume PDF
Update the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "ALOK PANDEY",
  title: "GRAPHIC DESIGNER",
  phone: "+91-8172855008",
  email: "alokpandey2813@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/alok023",
    youtube: "https://youtube.com/@thealokpandeyxperience",
    behance: "https://behance.net/yourprofile",
    instagram: "https://instagram.com/yourprofile"
  },
  resumePdfUrl: "/assets/images/Alok_Pandey_Resume.pdf" // Direct link to PDF
};
```

---

## 🚀 3. Running Locally & Deploying

To start the local development server:
```bash
npm run dev
```

To build for production (Vercel, Netlify, GitHub Pages):
```bash
npm run build
```
The output will be generated inside the `dist/` folder, ready for instant hosting.
