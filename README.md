# SOLÉNE PRIVATE ISLAND — student website starter

A responsive, English-language concept website for a fictional luxury private-island resort. Built with plain HTML, CSS and JavaScript for GitHub Pages.

## Files
- `index.html` — website content and sections
- `style.css` — layout, typography, colours and responsive styles
- `script.js` — mobile navigation, travel-partner link and demo enquiry form

## Before publishing
1. Replace the illustrative room names, prices and text as your group decides.
2. In `script.js`, set `TRAVEL_PARTNER_URL` to the real GitHub Pages URL for the travel partner group's website.
3. The enquiry form is only a demo. It opens an email draft and does not store or send information to a database. Replace the demo email address if your project has an approved contact email, or remove the form if not needed.
4. Images are loaded from Unsplash URLs and Google Fonts are loaded online, so those assets need an internet connection.
5. The hotel and its rates are fictional, for an academic project.

## Publish on GitHub Pages
1. Sign in to GitHub and create a new public repository, e.g. `solene-private-island`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository's root folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the Pages URL to appear on the same settings page. Open it and check links on desktop and mobile.

## Business Intelligence later
Suggested Google Sheets table fields:
`Booking_ID, Booking_Date, Check_In, Check_Out, Room_Type, Guests, Nights, Room_Rate, Booking_Channel, Booking_Status, Revenue, Estimated_Cost, Gross_Profit`

Example formulas (assuming columns A–L and row 2):
- Nights in G2: `=F2-E2` (if E = Check_In and F = Check_Out; adjust to actual column positions)
- Revenue: `=Nights*Room_Rate`
- Gross Profit: `=Revenue-Estimated_Cost`

For the final project, create synthetic sample bookings (clearly label them as mock data), connect the Sheet to Looker Studio, and make scorecards for Revenue, Bookings, Occupancy or Nights Sold, and Gross Profit; add a revenue trend and revenue by room type. Use only the fields that the group actually includes in its dataset.
