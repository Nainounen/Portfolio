# Creating Your Open Graph Preview Image

To make your portfolio show a nice preview when shared on social media, you need to create an Open Graph (OG) image.

## Quick Steps:

### Option 1: Take a Screenshot (Easiest)

1. **Run your dev server**: `npm run dev`
2. **Open in browser**: Go to `http://localhost:3000`
3. **Take a screenshot** of your hero section:
   - On Mac: `Cmd + Shift + 4` then drag to select the hero area
   - Make sure it captures the full hero section with your name
4. **Resize the image** to 1200x630 pixels:
   - Use Preview.app: Tools → Adjust Size
   - Or use an online tool like [iloveimg.com/resize-image](https://www.iloveimg.com/resize-image)
   - Set dimensions to: Width: 1200px, Height: 630px
5. **Save as**: `og-image.png` in the `/public` folder
6. **Done!** The metadata is already configured in `app/layout.tsx`

### Option 2: Design a Custom Image

Create a 1200x630px image with:
- Your name: "NINO MEIER"
- Title: "Application Developer Apprentice"
- Swisscom branding
- Your papaya orange accent color (#ff8c42)
- Dark background (#141414)

Tools you can use:
- Canva (canva.com)
- Figma (figma.com)
- Photoshop
- Any design tool

Save as `og-image.png` in `/public` folder.

### Option 3: Use OG Image Generator (Automated)

Use [og-image.vercel.app](https://og-image.vercel.app) or similar services to generate a dynamic OG image.

## Requirements:

- **Dimensions**: 1200 x 630 pixels (required for optimal display)
- **File name**: `og-image.png`
- **Location**: `/public/og-image.png`
- **Format**: PNG or JPG

## Testing Your OG Image:

After adding the image, test how it looks:

1. **Facebook Debugger**: [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
2. **Twitter Card Validator**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn Inspector**: [linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)

## What's Already Configured:

The metadata in `app/layout.tsx` includes:
- ✅ Open Graph tags (Facebook, LinkedIn, Discord, etc.)
- ✅ Twitter Card tags
- ✅ Image dimensions (1200x630)
- ✅ Alt text for accessibility

Just add the `og-image.png` file and you're done!

## Update Your Domain:

In `app/layout.tsx`, line 31, update:
```typescript
url: "https://ninomeier.dev", // Update with your actual domain
```

Replace `ninomeier.dev` with your actual domain when deployed.
