This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

###### Demo can be seen at: [`https://greenspark-test.vercel.app/`](https://greenspark-test.vercel.app/).

# Project Overview

Comments can be found throughout the project

## Routes

There is only one route in this application (without the API route)

###### Index Route:

pages\index.tsx
This route fetches product data and passes it to the ProductWidgetContainer component.

###### API Route

pages\api\getProducts.ts
This route fetches product data but is not utilized in the project; it exists for testing purposes.

## Components

###### ProductWidgetContainer

Main container component for product widgets.
Fetches product data, manages the state for the selected product, and renders ProductWidget components for each product.

###### ProductWidget

Represents a single product widget.
Receives a product object and a function to set the selected product as props.
Manages the state for the widget color and renders product information and controls for linking to the public profile, changing the badge color, and activating the badge.

###### LinkCheckbox

Represents a checkbox for linking to the public profile of a product.
Receives the linked status and the product id as props.

###### ColourBadge

Represents a control for changing the badge color of a product widget.
Receives the selected color, the color object, and a function to set the widget color as props.

###### BadgeSwitch

Represents a switch for activating the badge of a product widget.
Receives the active status and a function to set the active status as props.

###### Logo

Represents the logo of a product.
Receives the color as a prop.
This could have been an image but I have taken the liberty of turning it into a component so we can change the color when used on the wdigets.

###### TooltipWrapper

Wraps another component and displays a tooltip with the provided text when the wrapped component is hovered over.

## Other Files

###### next.config.mjs

Configuration for the Next.js application.
Disables React's strict mode and enables server-side rendering for styled-components.

###### pages_app.tsx

Contains the main application component that wraps all pages in the application.
Applies global styles and a Google font.

###### pages_document.tsx

Customizes the HTML document structure of the application, we also wrap the stylesheeet to preload Styled components here

## Service for fetching product data.

###### \_types\product.type.ts

TypeScript types for product data

###### config\colors.ts and config\images.ts

Configuration files for colors and images used in the application.
I prefer keeping these in config file, so I can make changes and swap them out in one place if I have to in the future.

###### styles\globals.css

Global styles for the application.
Basic styles, not using them for components.
