# cyberligent
> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description
This is a website that allows users to:
- Ask for a link, a phone number, job post, email body or address to be verified if it is legitimate or a scam
- It allows people to login and rate or upvote scams by giving testimony that they were scammed by the same entity

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages & Components 
> pages

- index: This is the landing page of the app, here you can find a hero/landing component and the gallery of all reported scams(use the logo to navigate home)



> Components included
components/
- Navbar: The component for navigation and linking pages
- Hero: The banner for the landing page
- Footer: A footer component (logo and text navigates home when clicked)

## Folders
pages/

public/

styles

:NOTE:
No use of environment variables 


Links

:TO_DO:
- [ ] : create a design of the application
- [ ] : implement nextAuth
- [ ] : create a navbar
- [ ] : create a landuing page
- [ ] : ceate a CMS
- [ ] : buy the site's domain
- [ ] : 

user 
|
v
site
|
v
landing page:
- list of popular scam post and their votings
- search button to search scams using a keyword
- login button
- links to other pages

when logged in
|
v
- can comment(give testimony)
- upvote
- submit a scam to be reviewed and shared