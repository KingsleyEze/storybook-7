## Storybook version 7 sample project

This project was created with:
* [Create React App](https://github.com/facebook/create-react-app)
* [Storybook](https://storybook.js.org/)

Consider checking out the following links before starting the assignment:
* [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)
* [Storybook Guides](https://www.learnstorybook.com/)


Implement a `Button` component and a set of `Storybook` stories that reflect
its different possible states.

<img alt="image" src="https://user-images.githubusercontent.com/67847653/155375518-871132e0-1016-4b5e-97a9-f6ca017dda44.png">

Consider taking a look at our [Figma](https://figma.com) [design file](.resources/Assignment.fig) to be able to inspect the component styles carefully.

> You'll need to download the design file and open it in figma, see [this help page](https://help.figma.com/hc/en-us/articles/360041003114-Import-files-into-Figma#Drag_and_Drop_Files) for more info.

Pointers provided below are just a guidance, feel free to rename/add/remove properties and create separate components (e.g. `IconButton`) as you see fit.

`Button` component may have following properties:
- `text` The text displayed on the button
- `icon` Some buttons have an icon
- `disabled` (default: false) If the button is disabled
- `theme` A property to determine the theme (styling) of the button
- `caret` If the button shows a caret to its right, or not.

# Important Scripts

In the project directory, you can run:

### `yarn` or `npm i`

to install dependencies, (you'll need [yarn](https://yarnpkg.com/) installed). Feel free to use `npm` instead of `yarn` if you wish.

### `yarn start` or `npm start`

Will run storybook on your computer

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

# Other Scripts

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) and this [storybook guide](https://www.learnstorybook.com/intro-to-storybook/react/en/test/) about testing UI components for more information.

