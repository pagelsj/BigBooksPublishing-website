
# Big Books Publishing Co: API

The Big Books Publishing Co API was built using the Angular framework using a very simple UI styling 'framework' that built on top of the Bootstrap Grid Framework.

## Building and deploying

### Install and deploy steps

 1. Clone the repository using git-cli.

    `git clone git@github.com:pagelsj/BigBooksPublishing-Website.git`
2. Install all the needed packages using npm, or yarn.

    `npm install` or `yarn install`
3. The project and all dependencies will now be installed and ready to run.

    `ng serve`

## Assumptions
The website needed to be:
1. Maintainable
2. Make use of re-usable code
3. Extendable
4. Follow the Angular Style-guide

## Interesting parts
1. Each page is lazy loaded. The route per page is defined within the page.module file. This allows these page URLs to be updated and removed without having any effect of the project in its entirety.
2. 3rd party CSS frameworks are precompiled into the style.css file rather than being loaded in the index.html file. Leading to less HTTP requests.
3. Most of the styling is reusable and created in a way that it would be able to be built out into a custom CSS Framework.
4. There are no custom services or components imported into the app.module.ts file. Code is only included where and when it is needed.

## Improvements
1. I would have loved to add unit tests!
2. I would have built the pages using components. (This was not done however due to lack of complexity within the task. Components were not needed at this point)
3. I would have generally built the pages and the API's side-by-side. This would have allowed me to use one API to both Create and Update data.
4. I would have tested the AOT compilation to ensure it all works properly. (Didn't want to over run the 2hr time limit though)
5. I would have used TypeScript interfaces.
