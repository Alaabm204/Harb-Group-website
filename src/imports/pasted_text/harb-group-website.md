Create a complete, polished, production-ready public corporate website for HARB Group, a steel fabrication and engineering company.

==================================================
1. TECHNOLOGY
==================================================

The website must be designed and implemented for:

React + Next.js

IMPORTANT:
Use Next.js, NOT Vite.

Use a structure suitable for a real React + Next.js application.

Use reusable components and reusable page layouts.

The website must be structured so that its business content can later be loaded and updated through REST APIs.

Do NOT permanently hardcode business content inside UI components.

==================================================
2. BRAND IDENTITY
==================================================

Use the HARB Group logo provided with this prompt.

The entire visual identity should be inspired by the logo.

Use:

PRIMARY COLOR:
The BLUE from the HARB Group logo.

ACCENT COLOR:
The ORANGE from the HARB Group logo.

Supporting colors:
- White
- Very light gray / off-white

The overall visual style should be:

- Professional
- Modern
- Corporate
- Industrial
- Premium
- Clean
- Strong
- Technical
- Trustworthy

Avoid:
- Excessive gradients
- Neon colors
- Cartoon styling
- Gaming aesthetics
- Excessive glassmorphism
- Excessive rounded cards
- Excessive decorative elements

Use clean spacing, strong typography, subtle shadows, and a professional visual hierarchy.

==================================================
3. LANGUAGE
==================================================

The website must support BOTH:

English
Arabic

The website must have a language switcher.

IMPORTANT:

Only display the language that the user can switch TO.

When the current website language is English:
Display:

العربية

When the current website language is Arabic:
Display:

English

DO NOT display:

English | العربية

at the same time.

The language switcher should switch the entire website between English and Arabic.

==================================================
4. RTL / LTR
==================================================

English:
Use LTR.

Arabic:
Use RTL.

When Arabic is selected, properly switch the entire website layout to RTL.

This includes:

- Navbar
- Hero
- Sections
- Cards
- Buttons
- Carousels
- Sidebar
- Forms
- Footer
- Breadcrumbs
- Text alignment
- Directional icons where appropriate

Do NOT simply translate the text.

Actually change the layout direction.

When English is selected, return to LTR.

All website UI text must have Arabic and English versions.

Business content should also support separate Arabic and English values.

Do NOT use automatic translation.

==================================================
5. GLOBAL NAVBAR
==================================================

Create a modern sticky navbar.

INITIAL STATE:

Navbar background:
HARB BLUE

Desktop navbar should contain:

- HARB Group logo
- Home
- Services
- Language switcher
- Three-line menu icon

Only Home and Services should be directly visible in the main navbar.

The remaining pages should be accessible through the menu icon.

The menu / hamburger icon and language switcher should use the HARB ORANGE accent color.

==================================================
6. NAVBAR MENU
==================================================

When the three-line menu icon is clicked, open a sidebar navigation menu.

The sidebar should contain:

- Home
- About Us
- Services
- Products
- Projects
- Gallery
- Clients
- Contact Us

The sidebar should have:

- Smooth opening animation
- Smooth closing animation
- Clear close button
- Professional corporate styling

The sidebar should work correctly in both English and Arabic.

The sidebar should properly respect RTL when Arabic is selected.

==================================================
7. NAVBAR SCROLL BEHAVIOR
==================================================

At the top of the page:

Navbar background:
HARB BLUE

Navbar content:
WHITE

Menu / hamburger icon:
HARB ORANGE

Language switcher:
HARB ORANGE

When the user scrolls down:

Navbar background:
WHITE

After becoming white:

- Navigation text becomes HARB BLUE
- Icons remain HARB ORANGE
- Menu / hamburger icon remains HARB ORANGE
- Language switcher remains HARB ORANGE
- Logo remains clearly visible
- Maintain strong contrast

The transition between blue and white should be smooth.

Do not make the navbar jump between states.

==================================================
8. MOBILE NAVBAR
==================================================

On mobile screens, do NOT display Home and Services directly in the navbar.

Mobile navbar should contain:

- HARB Group logo
- Language switcher
- Three-line menu icon

Menu icon:
HARB ORANGE

Language switcher:
HARB ORANGE

All navigation options should appear inside the sidebar:

- Home
- About Us
- Services
- Products
- Projects
- Gallery
- Clients
- Contact Us

The mobile menu must be touch-friendly.

==================================================
9. HOME PAGE
==================================================

Create the Home page with this structure:

1. Hero
2. About Us
3. Services
4. Products
5. Projects
6. Clients
7. Contact CTA
8. Footer

==================================================
10. HERO SECTION
==================================================

Use the HERO BACKGROUND IMAGE attached to this prompt.

IMPORTANT:

The attached image is the initial hero background.

The hero background should be treated as dynamic content that can be replaced later.

Do NOT permanently hardcode the image as unchangeable website content.

--------------------------------------------------
HERO BACKGROUND BEHAVIOR
--------------------------------------------------

The Hero background image must remain FIXED while the user scrolls through the Hero section.

Use a fixed / subtle parallax-style background effect where the Hero background image stays visually fixed while the page content moves over it.

The background should NOT scroll normally with the Hero content.

Maintain:

- Background image fixed in position
- Dark semi-transparent overlay fixed with the background
- Hero content layered above the background and overlay

Keep the effect subtle, smooth, and professional.

Do NOT create an aggressive parallax movement.

--------------------------------------------------
HERO OVERLAY
--------------------------------------------------

Add a dark semi-transparent overlay over the background image.

The overlay should be:

- Dark
- Semi-transparent
- Subtle
- Strong enough to make the text readable
- Transparent enough to keep the background visible

Do NOT use an opaque black overlay.

--------------------------------------------------
HERO LAYOUT
--------------------------------------------------

The hero content must NOT be centered.

Place the content toward one side of the hero.

Use a strong cinematic corporate composition.

Hero content:

TITLE:
HARB ORANGE.

SUBTITLE:
WHITE.

Do NOT make the subtitle orange.

Under the subtitle, add two CTA buttons:

1. Services
2. Contact Us

One button:
- HARB ORANGE filled

The other:
- Transparent / outlined

Use the HARB brand colors.

Both buttons must have smooth hover states.

Hover should change:
- Background
- Border
- Text/icon color where appropriate

Use subtle transitions.

CTA navigation:

Services → /services

Contact Us → /contact

--------------------------------------------------
HERO ENTRANCE ANIMATION
--------------------------------------------------

When the page first loads, the hero content should appear with a subtle smooth animation.

Use something like:

- Fade in
- Slight horizontal or vertical movement

The animation should be:

- Smooth
- Short
- Elegant
- Professional

Do NOT use aggressive animations.

==================================================
11. ABOUT US SECTION
==================================================

Section title:

About Us

Arabic:

من نحن

Background:
HARB BLUE

Content:
WHITE

The content should be positioned toward one side, NOT centered.

Show a short overview of the company.

At the end of the overview, add:

Read More →

The text and arrow should be HARB ORANGE.

Add a subtle hover animation.

IMPORTANT:

Clicking Read More should navigate to:

/contact

This specific behavior is intentional.

Do NOT make the entire About Us section orange.

==================================================
12. ABOUT US PAGE
==================================================

Create a dedicated About Us page.

Page title:

About Us
من نحن

The page should contain the company's complete information.

Include appropriate sections for:

- Company Overview
- Vision
- Mission
- Why Choose Us
- Company Statistics

The content should support both English and Arabic.

Use professional corporate layouts.

Do not use excessive decorative elements.

Section headings on light backgrounds should use HARB BLUE.

==================================================
13. GENERAL HOME PAGE SECTION STYLE
==================================================

For the remaining Home page sections:

- Center the main content
- Use white or very light gray/off-white backgrounds

The sections should alternate subtly between white and very light gray to create visual separation.

Do not introduce unrelated colors.

Keep the visual system consistent across the entire website.

IMPORTANT:

Section titles on white/light-gray backgrounds should be HARB BLUE.

Do NOT use HARB ORANGE as the default color for section titles.

Examples:

Services → HARB BLUE
Products → HARB BLUE
Projects → HARB BLUE
Clients → HARB BLUE

==================================================
14. SERVICES SECTION — HOME
==================================================

Create a Services section on the Home page.

The content should be centered.

Show only a small number of service images in a horizontal slider/carousel.

Do NOT display all services on the Home page.

After the slider, add:

→ More

The More link should navigate to:

/services

The More text and arrow may use HARB ORANGE as an accent.

--------------------------------------------------
SERVICE IMAGE HOVER
--------------------------------------------------

Use the SAME interaction on:

- Services section on Home
- Services page

When hovering over a service image:

1. Image scales up slightly.
2. A subtle dark transparent overlay appears.
3. Service name appears.
4. Service name enters smoothly from the side.

Use smooth, short, professional motion.

Do NOT make the image scale too much.

Do NOT make the overlay too dark.

Clicking a service:

→ Service Details page

==================================================
15. SERVICES PAGE
==================================================

Create:

/services

Display all services.

Use a clean responsive image-based grid.

Each service should display:

- Image
- Service Name

Hover behavior:

- Slight image scale
- Dark transparent overlay
- Service name appears
- Service name enters from the side with smooth motion

Clicking a service:

→ Service Details

Use HARB BLUE for page and section headings.

==================================================
16. SERVICE DETAILS PAGE
==================================================

Create:

/services/[id]

Display:

- Service Name
- Service Image
- Full Service Description

Use a polished corporate layout.

The content must support both English and Arabic.

Use HARB BLUE for headings on light backgrounds.

==================================================
17. PRODUCTS SECTION — HOME
==================================================

Create a Products section on the Home page.

Use a horizontal slider/carousel similar to Services.

Show only a limited number of featured products.

Each product card should contain:

- Product Image
- Product Name
- Short Description

On hover:

- Slight image scale
- Subtle professional hover effect

IMPORTANT:

Do NOT add a "View Details" button inside the product card.

Clicking anywhere on the product card should navigate to:

Product Details

Use HARB BLUE for the Products section title.

==================================================
18. PRODUCTS PAGE
==================================================

Create:

/products

Display all products in a clean responsive grid.

Each product card contains:

- Product Image
- Product Name
- Short Description

Hover:
- Slight image scale

Click anywhere on card:
→ Product Details

Do NOT add a View Details button.

Use HARB BLUE for headings.

==================================================
19. PRODUCT DETAILS PAGE
==================================================

Create:

/products/[id]

Display:

- Product Name
- Product Images
- Full Description
- Specifications

Use a polished image gallery for multiple product images.

The page must support both English and Arabic.

Use HARB BLUE for headings on light backgrounds.

==================================================
20. PROJECTS SECTION — HOME
==================================================

Create a Projects section on the Home page.

This must be an automatically moving carousel.

The movement should be:

- Smooth
- Moderate
- Not too fast
- Professional

The carousel contains project image cards.

--------------------------------------------------
CENTER CARD
--------------------------------------------------

The project card currently in the CENTER should be slightly larger.

Cards toward the left and right:

- Slightly smaller
- Have a subtle blur effect

The center card should clearly feel like the visual focus.

Do NOT make the difference too extreme.

Do NOT make the blur too strong.

--------------------------------------------------
PROJECT HOVER
--------------------------------------------------

When hovering over a project:

- Show a subtle dark transparent overlay
- Show the project name
- Animate the project name smoothly

The effect should feel similar to the Hero overlay.

The image must remain visible underneath.

The project name should use WHITE over the dark overlay unless an accent treatment is visually appropriate.

==================================================
21. PROJECT CAROUSEL CONTROLS
==================================================

The user must also be able to manually control the carousel.

Support:

- Swipe on mobile
- Drag where appropriate
- Previous / Next controls where appropriate
- Clicking project cards

When the user interacts with the carousel:

Pause or appropriately adjust the automatic movement.

Clicking any project card:

→ Project Details

==================================================
22. PROJECTS PAGE
==================================================

Create:

/projects

Display the company's projects.

Each project card contains:

- Cover Image
- Project Name

Hover:

- Slight image scale
- Dark transparent overlay
- Project name with smooth motion

Click:

→ Project Details

Use HARB BLUE for page and section headings.

==================================================
23. PROJECT DETAILS PAGE
==================================================

Create:

/projects/[id]

Display:

- Project Name
- Full Description
- Completion Year
- Client Name
- Multiple Project Images

Use a professional project presentation.

Multiple images should be displayed in a polished gallery.

Support both English and Arabic.

Use HARB BLUE for headings on light backgrounds.

==================================================
24. CLIENTS SECTION — HOME
==================================================

Create a Clients section on the Home page.

Display client company logos.

Use an automatically moving horizontal carousel.

Movement should be:

- Smooth
- Slow
- Continuous
- Professional

Do not use distracting animations.

Maintain the original proportions of every logo.

Do NOT distort logos.

Use HARB BLUE for the Clients section title.

==================================================
25. CLIENTS PAGE
==================================================

Create:

/clients

Display the full collection of client logos in a clean responsive layout.

Keep the page minimal and professional.

Use HARB BLUE for the page heading.

==================================================
26. GALLERY PAGE
==================================================

Create:

/gallery

Display company images in a responsive visual grid.

When an image is clicked:

Open a larger image preview/lightbox.

The lightbox should support:

- Close
- Previous
- Next

Use smooth transitions.

Use HARB BLUE for the page heading.

==================================================
27. CONTACT US PAGE
==================================================

Create:

/contact

The page must contain a professional contact form.

Fields:

- Name
- Email
- Phone
- Subject
- Message

Button:

Send Message

The form should support:

- Required field validation
- Loading state
- Success state
- Error state

The form should be designed so submitted messages can be sent to a REST API later.

Visitors can send messages without creating an account.

Use HARB BLUE for the page heading.

Use HARB BLUE or neutral styling for normal form elements.

HARB ORANGE should be used only as an accent or for intentional CTA emphasis.

==================================================
28. CONTACT INFORMATION
==================================================

The Contact Us page should also display:

- Address
- Phone Numbers
- Email
- Google Maps
- Social Media Links
- Working Hours where appropriate

Use a professional layout.

These values should be treated as dynamic content that can later be loaded from an API.

==================================================
29. FLOATING MESSAGE BUTTON
==================================================

Add a floating message icon near the bottom side of the website.

It should be:

- Fixed
- Visible while browsing
- Responsive
- Not covering important content

Use a clean message/chat icon.

The icon may use HARB ORANGE as an accent.

When clicked:

→ Navigate to /contact

This is simply a shortcut to the contact form.

Do NOT create a live chat system.

Do NOT create an in-page messaging system.

==================================================
30. CONTACT CTA
==================================================

Before the Footer, create a Contact CTA section.

Keep the content centered.

Use HARB brand colors.

Provide a clear call-to-action leading to:

/contact

Keep it visually distinct but consistent with the rest of the website.

Do NOT make the entire CTA orange.

Use HARB BLUE as the primary color where appropriate and HARB ORANGE only as an accent.

==================================================
31. FOOTER
==================================================

Footer background:

HARB BLUE

Footer content:

WHITE

Create a standard premium corporate footer.

Include:

- HARB Group branding
- Short company description
- Navigation links
- Services
- Products
- Projects
- Contact information
- Social media links
- Copyright

All primary Footer text and headings should be WHITE.

Footer navigation links should be WHITE.

Footer icons should generally be WHITE.

Use HARB ORANGE only for subtle accent or hover states where appropriate.

Do NOT make the entire Footer content orange.

On mobile:

Stack the footer content cleanly.

==================================================
32. COLOR USAGE RULES
==================================================

IMPORTANT:

Do NOT use HARB ORANGE as the general text color throughout the website.

HARB ORANGE is an ACCENT COLOR only.

Use HARB BLUE as the primary color for:

- Section titles
- Page headings
- Primary headings
- Navigation elements where appropriate
- Primary UI elements on light backgrounds

--------------------------------------------------
HARB ORANGE SHOULD ONLY BE USED FOR:
--------------------------------------------------

Use HARB ORANGE specifically for elements where it is intentionally requested, including:

- Hero title
- "Read More" text in the About Us section
- Arrow next to "Read More"
- Orange CTA button where specified
- Important accent elements
- Appropriate hover states
- Language switcher control/icon
- Menu / hamburger icon
- Floating message icon where appropriate

Do NOT make all section headings orange.

Do NOT make normal body text orange.

Do NOT make all buttons orange.

Do NOT use orange excessively.

--------------------------------------------------
SECTION TITLES
--------------------------------------------------

For sections displayed on WHITE or LIGHT GRAY backgrounds:

Section titles should be:

HARB BLUE

Examples:

Services
Products
Projects
Clients

Their normal text color should be HARB BLUE.

--------------------------------------------------
DARK / BLUE SECTIONS
--------------------------------------------------

For sections with HARB BLUE backgrounds:

Use WHITE for the main text and headings.

Use HARB ORANGE only for the specific accent elements intentionally designated as orange.

For example:

About Us:
- Background: HARB BLUE
- Main title/content: WHITE
- "Read More": HARB ORANGE
- Arrow: HARB ORANGE

--------------------------------------------------
FOOTER
--------------------------------------------------

The Footer background must be:

HARB BLUE

All primary Footer text and headings should be:

WHITE

Footer navigation links should be WHITE.

Footer icons should generally be WHITE.

Use HARB ORANGE only for subtle accent/hover states where appropriate.

Do NOT make the entire Footer content orange.

==================================================
33. DYNAMIC CONTENT REQUIREMENT
==================================================

All business and website content must be treated as dynamic data.

Do NOT hardcode business content directly into reusable UI components.

The frontend must be structured so that content can later be replaced by data returned from REST APIs without changing the UI components or redesigning the pages.

The website should be able to display updated business content without requiring changes to the visual components.

The public website should only READ and DISPLAY this data.

--------------------------------------------------
HERO DATA
--------------------------------------------------

Hero should support:

- image
- titleEn
- titleAr
- subtitleEn
- subtitleAr

The Hero image and text are dynamic content and may change later.

--------------------------------------------------
ABOUT US DATA
--------------------------------------------------

About Us should support:

- overviewEn
- overviewAr
- visionEn
- visionAr
- missionEn
- missionAr
- whyChooseUsEn
- whyChooseUsAr
- statistics

--------------------------------------------------
SERVICES DATA
--------------------------------------------------

Each service should support:

- id
- nameEn
- nameAr
- descriptionEn
- descriptionAr
- image
- displayOrder

--------------------------------------------------
PRODUCTS DATA
--------------------------------------------------

Each product should support:

- id
- nameEn
- nameAr
- shortDescriptionEn
- shortDescriptionAr
- descriptionEn
- descriptionAr
- specificationsEn
- specificationsAr
- images
- displayOrder

--------------------------------------------------
PROJECTS DATA
--------------------------------------------------

Each project should support:

- id
- nameEn
- nameAr
- descriptionEn
- descriptionAr
- completionYear
- clientNameEn
- clientNameAr
- coverImage
- images
- displayOrder

--------------------------------------------------
CLIENTS DATA
--------------------------------------------------

Each client should support:

- id
- name
- logo
- displayOrder

--------------------------------------------------
GALLERY DATA
--------------------------------------------------

Each gallery item should support:

- id
- image
- titleEn
- titleAr
- displayOrder

--------------------------------------------------
COMPANY DATA
--------------------------------------------------

Company information should support:

- companyNameEn
- companyNameAr
- descriptionEn
- descriptionAr
- addressEn
- addressAr
- phone
- email
- googleMapsUrl
- workingHours
- socialLinks

==================================================
34. API-READY FRONTEND ARCHITECTURE
==================================================

The website will eventually receive its content from a REST API.

The frontend must have a clear separation between:

1. Data fetching
2. Data transformation / localization
3. UI components

The intended architecture is:

REST API
↓
Data fetching layer
↓
Page / Server Component
↓
Reusable UI Components
↓
Displayed Content

Do NOT mix business data directly into reusable presentation components.

For example:

GOOD:

<ServiceCard service={service} />

BAD:

<ServiceCard name="Hardcoded Service Name" description="Hardcoded business content" />

The same UI components must be able to render different data returned by the backend.

==================================================
35. MOCK DATA
==================================================

If a real API is not available, use realistic mock data only for demonstration.

Keep mock data clearly separated from UI components.

Do NOT embed mock business content directly inside JSX or reusable components.

Organize mock data conceptually as a separate data layer that can later be replaced by API calls.

The UI should not need to be redesigned when mock data is replaced by real API data.

==================================================
36. BACKEND READINESS
==================================================

Do NOT build the backend.

Do NOT invent real API endpoints.

Do NOT create a database.

Only prepare the frontend architecture and data structures so that a real REST API can be connected later.

The public website should consume API data and display it.

If website content is changed externally and the API returns the updated values, the public website should display the updated content without requiring changes to the UI code.

==================================================
37. MULTILINGUAL DATA
==================================================

All content that appears in both languages should support separate localized values.

For example:

Hero Title:
- titleEn
- titleAr

Hero Subtitle:
- subtitleEn
- subtitleAr

Service:
- nameEn
- nameAr
- descriptionEn
- descriptionAr

Product:
- nameEn
- nameAr
- descriptionEn
- descriptionAr
- specificationsEn
- specificationsAr

Project:
- nameEn
- nameAr
- descriptionEn
- descriptionAr
- clientNameEn
- clientNameAr

Company:
- companyNameEn
- companyNameAr
- descriptionEn
- descriptionAr
- addressEn
- addressAr

When the user switches language, display the corresponding localized content.

Do NOT automatically translate content.

==================================================
38. LOADING / ERROR / EMPTY STATES
==================================================

Because content will eventually come from APIs, provide polished states for dynamic sections.

Loading:
Use subtle skeleton loaders.

Empty:
Examples:

No services available.

No products available.

No projects available.

No gallery images available.

Error:
Something went wrong.
Please try again.

Keep these states consistent with the website design.

==================================================
39. RESPONSIVE DESIGN
==================================================

Create intentional responsive designs for:

- Desktop
- Tablet
- Mobile

Do NOT simply shrink the desktop version.

DESKTOP:

- Full navbar
- Side-aligned hero
- Horizontal sliders
- Multi-column layouts
- Spacious sections

TABLET:

- Adaptive grids
- Responsive carousels
- Adjusted typography
- Flexible spacing

MOBILE:

- Logo
- Language switcher
- Menu icon
- All navigation inside sidebar
- Home and Services inside sidebar
- Stacked sections
- Touch-friendly carousels
- Responsive cards
- Stacked contact form
- Responsive footer
- Floating message button remains accessible

==================================================
40. ACCESSIBILITY
==================================================

Ensure:

- Strong color contrast
- Clear focus states
- Accessible buttons
- Accessible form labels
- Adequate touch targets
- Keyboard-friendly navigation
- Accessible menu controls
- Appropriate image alt text
- Do not rely only on color to communicate information

==================================================
41. ANIMATION SYSTEM
==================================================

Use a consistent animation language throughout the website.

Animations should be:

- Smooth
- Short
- Subtle
- Professional

Use animation for:

- Hero entrance
- Navbar transition
- Sidebar
- Buttons
- Image hover
- Service name reveal
- Project name reveal
- Carousels
- Lightbox

Avoid:

- Aggressive motion
- Excessive bouncing
- Long animations
- Distracting effects
- Excessive parallax

The Hero fixed background effect should remain subtle and should NOT behave like an aggressive parallax animation.

==================================================
42. DESIGN SYSTEM
==================================================

Use a consistent design system.

Colors:

HARB BLUE
Primary brand color.

HARB ORANGE
Accent color only.

WHITE
Main background and primary text on blue sections.

LIGHT GRAY / OFF-WHITE
Secondary backgrounds.

Typography must support BOTH:

English
Arabic

Use a modern professional font with proper Arabic support.

Maintain consistent:

- Typography hierarchy
- Spacing
- Buttons
- Cards
- Shadows
- Border radius
- Icons
- Section spacing

IMPORTANT COLOR BALANCE:

The overall website should feel predominantly:

BLUE + WHITE + LIGHT GRAY

with ORANGE used sparingly for emphasis.

The orange should feel like an accent rather than the dominant text color.

==================================================
43. PAGE ROUTES
==================================================

Create these public website routes:

/
Home

/about
About Us

/services
Services

/services/[id]
Service Details

/products
Products

/products/[id]
Product Details

/projects
Projects

/projects/[id]
Project Details

/gallery
Gallery

/clients
Clients

/contact
Contact Us

Use a structure suitable for Next.js App Router.

IMPORTANT:
React + Next.js.
NOT Vite.

==================================================
44. REUSABLE COMPONENTS
==================================================

Create reusable components such as:

Navbar
MobileMenu
SidebarMenu
LanguageSwitcher
HeroSection
SectionHeader
AboutSection
ServiceCard
ServiceCarousel
ProductCard
ProductCarousel
ProjectCard
ProjectCarousel
ClientLogoCarousel
GalleryGrid
ImageLightbox
ContactCTA
ContactForm
ContactInfo
Footer
FloatingMessageButton
Breadcrumbs

Keep components reusable and consistent.

==================================================
45. IMAGE BEHAVIOR
==================================================

Use appropriate image handling for Next.js.

Maintain image aspect ratios.

Avoid layout shifts.

Use object-fit appropriately.

Hero background should cover the hero area while preserving the intended visual composition.

Hero background should remain fixed according to the Hero Background Behavior requirements.

Cards should maintain consistent image proportions.

Client logos must never be distorted.

==================================================
46. IMPORTANT VISUAL INTERACTION SUMMARY
==================================================

HERO:
- Attached background image
- Fixed background behavior
- Dark transparent overlay
- Side-aligned content
- Orange title
- White subtitle
- Orange button
- Transparent button
- Smooth entrance animation
- Hover states

ABOUT:
- Blue background
- White content
- Side-aligned
- Orange Read More + arrow
- Read More → Contact Us

SERVICES:
- Home slider
- Limited featured services
- More → Services page
- Slight image scale
- Dark transparent overlay
- Service name enters from side
- Click → Service Details

PRODUCTS:
- Home slider
- Limited featured products
- Image + name + short description
- Slight hover scale
- Click anywhere → Product Details
- No View Details button

PROJECTS:
- Automatic carousel
- Moderate speed
- Center card larger
- Side cards smaller and slightly blurred
- User can manually control
- Hover overlay
- Project name reveal
- Click → Project Details

CLIENTS:
- Automatic logo carousel
- Slow smooth movement

GALLERY:
- Responsive grid
- Image lightbox

CONTACT:
- Contact form
- Contact information
- Google Maps
- Social links
- API-ready form submission

FLOATING MESSAGE:
- Fixed message icon
- Click → Contact Us

NAVBAR:
- Blue at top
- White on scroll
- Blue text after scroll
- Orange menu icon
- Orange language switcher
- Desktop: Home + Services + language + menu
- Mobile: Logo + language + menu
- Remaining navigation in sidebar

LANGUAGE:
- English → show العربية
- Arabic → show English
- Never show both simultaneously
- Full RTL/LTR support

COLORS:
- Blue = primary
- White = main neutral
- Light gray = secondary neutral
- Orange = limited accent only

==================================================
47. FINAL DESIGN GOAL
==================================================

The final result should look like a real premium corporate website for a steel fabrication and engineering company.

It should feel:

- Industrial
- Corporate
- Modern
- Premium
- Professional
- Trustworthy
- Strong

It should NOT look like:

- A generic website template
- An e-commerce website
- A SaaS dashboard
- A startup landing page
- A collection of unrelated UI sections

The entire website must feel like ONE coherent HARB Group brand experience.

Use the HARB logo, HARB BLUE, and HARB ORANGE consistently.

Use the attached Hero background image.

Build the complete public website in both English and Arabic with proper RTL/LTR behavior.

React + Next.js only.

The public website must be data-driven and API-ready so that business content can be updated externally later without requiring changes to the website's UI components or page design.