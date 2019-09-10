# Flick Gallery

## Description
This project is to display images for cities from Flickr. Different cities can be configured to display inside src/config.json
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Future Scope:

* Provide swiping capability for Carousel for touch devices. Could have utilized hooks provided from swipeable library.
* Lazyloading the images.
* Pagination or infinite scrolling.
* Better Unit Coverage.
* More robust Grid as didn't spend a lot of time on getting Grid running.
* Gestures for touch devices.
* Code splitting (I didn't see it as very important because bundle is quiet small).

## Features Added
* Grid for images.
* Flickr API call integration.
* Used React as Adobe also uses React.
* Created Carousel that navigates between previous and next image. Also enabled lazy loading and loaded neighboring
images for better experience.
* Used accessibility attributes.
* Used SVG for icons.
* Wrote unit tests for some of the components.
* Added key navigation for Carousel.
* Added transition for desktop breakpoint for image on hover.
* Leveraged Flex for desktop for creating Grid and centering image for Carousel.
* Hosted experience on Firebase.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

