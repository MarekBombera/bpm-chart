# Heart Rate Chart Visualization

This project demonstrates how to create a simple heart rate chart using Next.js 13, Styled Components, TypeScript, and CSS. The chart is designed to be lightweight, with no dependencies on heavy data visualization libraries like D3.js, Fusion Charts, or Chart.js.

## Deployment

-   Deployed on  [Vercel](https://vercel.com/)

## Tech Stack

#### [](https://github.com/SHWDWN/shwdwn-frontend#languages)Languages

-   [Typescript](https://www.typescriptlang.org/docs/)

#### [](https://github.com/SHWDWN/shwdwn-frontend#react-framework)React Framework

-   [Next.js](https://nextjs.org/)

#### [](https://github.com/SHWDWN/shwdwn-frontend#styling)Styling

-   [Styled-components](https://www.styled-components.com/docs)  CSS-in-JS


## Prerequisites

-   `node`
-   `yarn`

## Usage

**Firstly, install all necessary dependencies:**

    yarn install

**To start a development server:**

    yarn dev

**To build the app for production:**

    yarn build
    yarn start

## Customization

-   To modify the appearance of the chart, update the styles in the `src/components/HeartRateChart/styled.ts` file.
-   To change the data used for the chart, update the 			  `heartRateData` array in the 	`src/components/HeartRateChart/index.tsx` file.
-   If you wish to add animations or tooltips to the chart, you can do so by extending the existing code in the `src/components/HeartRateChart/index.tsx` file.
