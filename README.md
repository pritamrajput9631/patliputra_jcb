# Patliputra Equipment website

This is a responsive, dependency-free customer-facing dealership website shell.

## Current implementation

- Premium responsive homepage with machine catalogue filtering
- Quote, demo and finance enquiry flow with a locally generated reference ID
- Local browser storage for submitted enquiries (a development-only data adapter)
- Service booking entry point, finance/EMI estimate and mobile contact bar
- Semantic page landmarks, labels, focus styling and reduced visual complexity on mobile
- Centralized dealership contact settings, functional phone/WhatsApp/directions links, and lightweight cinematic/reveal motion
- Official JCB catalogue images stored permanently in `assets/machines`
- Tap/click machine detail drawer with Hindi and English language modes

## Architecture handoff

The UI is deliberately split into three static layers: `index.html` for semantic structure, `styles.css` for the design system/responsive rules, and `script.js` for the local data adapter and interactions. Replace the `machines` array and `localStorage` enquiry adapter in `script.js` with API calls when connecting a production backend.

For the full platform described in the brief, the recommended next build phase is Next.js + TypeScript, PostgreSQL + Prisma, authenticated role-based admin APIs, object storage for media, and a transactional-notification adapter. `dealershipSettings` in `script.js` is the interim single source of truth to replace with a CMS/database record. Inventory, claims and machine specifications should come from the CMS/database after verification.

## Run locally

Open `index.html` in a modern browser. No package installation is required.

## Publish on GitHub Pages

All machine images are included in `assets/machines`. Keep this entire folder in
the GitHub repository; the website uses relative paths such as
`assets/machines/jcb-3dx-plus.webp`, which work automatically on GitHub Pages.

1. Create a new repository on GitHub (for example, `patliputra-equipment`).
2. Upload **all** project files and folders, especially the complete `assets`
   folder. Do not upload only `index.html`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then click **Save**.
6. GitHub will provide your live website link in the Pages settings, typically:
   `https://YOUR-GITHUB-USERNAME.github.io/patliputra-equipment/`

After deployment, an individual image can be opened directly with a link like:

`https://YOUR-GITHUB-USERNAME.github.io/patliputra-equipment/assets/machines/jcb-3dx-plus.webp`

Replace `YOUR-GITHUB-USERNAME` and `patliputra-equipment` with your GitHub
username and repository name. It can take a few minutes for the first deploy to
finish.
