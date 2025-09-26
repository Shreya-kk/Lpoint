# LPOINT - Static Website for GoDaddy Hosting

This is the static HTML/CSS/JS version of the LPOINT website, optimized for GoDaddy hosting.

## Files Structure

```
static-build/
├── index.html              # Homepage
├── get-started.html         # Contact/consultation page
├── mock-interview.html      # AI Mock Interview service
├── face-attendance.html     # Face Recognition Attendance service
├── employee-management.html # AI Employee Management service
├── enrollment.html          # Python course enrollment
├── internships.html         # AI internship program
├── styles/
│   └── main.css            # All styles combined
├── js/
│   └── main.js             # JavaScript functionality
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
├── .htaccess               # Apache server configuration
└── README.md               # This file
```

## Installation Instructions for GoDaddy

### Step 1: Upload Files
1. Login to your GoDaddy hosting account
2. Go to File Manager or use FTP client
3. Navigate to the `public_html` folder (or your domain's root folder)
4. Upload all files from the `static-build` folder to your hosting directory

### Step 2: Set Up Domain
1. Ensure your domain is pointing to your GoDaddy hosting
2. The `.htaccess` file will handle URL redirects and clean URLs
3. Your site will be accessible at `https://yourdomain.com`

### Step 3: Test Features
- Test all navigation links
- Verify forms work (you may need to set up form handling)
- Check that all pages load correctly
- Test mobile responsiveness

## Features Included

### SEO Optimized
- Meta tags for all pages
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Clean URLs via .htaccess

### Responsive Design
- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly navigation

### Performance Optimized
- Compressed CSS and JS
- Optimized images
- Browser caching via .htaccess
- Fast loading times

### Clean URLs
The `.htaccess` file enables clean URLs:
- `/get-started` instead of `/get-started.html`
- `/mock-interview` instead of `/mock-interview.html`
- etc.

## Form Handling

The contact forms currently have placeholder action attributes. For production use, you'll need to:

1. Set up server-side form processing (PHP, etc.)
2. Or use a third-party form service like Formspree, Netlify Forms, etc.
3. Update the form `action` attributes in the HTML files

## Customization

### Colors and Styling
- Edit `styles/main.css` to modify colors, fonts, or layout
- The design system uses CSS custom properties for easy theming

### Content Updates
- Edit the respective HTML files to update content
- All text content is in plain HTML for easy editing

### Adding Pages
1. Create new HTML file following the existing structure
2. Add navigation links in all other pages
3. Update sitemap.xml with new page URL

## Browser Support

Supports all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

The static site is optimized for:
- Fast loading times (< 3 seconds)
- Good Core Web Vitals scores
- Mobile performance
- SEO rankings

## Support

For any issues with the website:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Test .htaccess functionality
4. Contact your hosting provider for server-specific issues

## Updates

To update content:
1. Edit the appropriate HTML file
2. Upload changed files to your hosting
3. Clear any caching if changes don't appear immediately

---

© 2024 LPOINT. All rights reserved.