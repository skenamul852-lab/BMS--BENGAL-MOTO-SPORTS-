# BENGAL MOTO SPORTS — Modern Website Starter

A responsive, bilingual (English/Bengali) static website starter for BMS.

## Included
- Official BMS logo integrated in header and footer
- Modern responsive landing page
- English / বাংলা language switch
- About, community values, membership call-to-action
- Rider membership application UI
- Mobile navigation

## Run locally
Open `index.html` in a browser. For a local development server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a new GitHub repository, for example `bengal-moto-sports`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. GitHub will show the published website URL in the Pages section.

## Important before launch
This is the front-end starter, not a production membership system.
- The application form currently does not send or store submitted data.
- Real mobile OTP login requires a trusted authentication provider and server-side verification.
- An admin panel must use server-side authentication and database access. Do not put admin passwords, API secrets, or service credentials in browser JavaScript.
- A secure backend and privacy notice/consent are needed before collecting rider personal information.
- The hero image currently loads from Unsplash and therefore needs an internet connection. Replace it with a licensed BMS image when available.

## Suggested next build steps
1. Confirm BMS logo, contact details and social links.
2. Connect a free-tier backend/authentication provider (check current limits and terms).
3. Implement OTP login and secure membership submission.
4. Build role-protected admin dashboard for reviewing applications.
5. Test bilingual content, mobile layout and accessibility.
