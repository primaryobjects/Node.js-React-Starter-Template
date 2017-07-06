Node.js Bootstrap Express React Starter Template
===

A quick and easy Node.js + Express + React 4 template project, using Twitter Bootstrap and React Router for creating a simple single page application.

Also available for [Jade](https://github.com/primaryobjects/Node.js-Bootstrap-Starter-Template).

## Usage

- Clone repository.
- Open a command prompt, navigate to the folder, and enter: `npm install`
- Navigate to the folder `client` and enter: `npm install`
- Next, run a build of the React client by entering: `npm run build`
- Launch the node server by navigating to the root folder and entering: `npm start`
- Browse to http://localhost:3000

### Development Usage

- Navigate to the folder `client` and enter: `npm start`

  This will run the React client app.

  You can make changes to the pages in `/client/src/components` and see them update live.

## Demo:

http://nodebootstrapper.herokuapp.com

## Contents:

- client/src/index.js
- client/src/App.js
- client/src/components/Header/index.js
- client/src/components/Footer/index.js
- client/src/components/Home/index.js
- client/src/components/About/index.js
- client/src/components/Contact/index.js
- client/src/components/NotFound/index.js

## Editing Pages:

Edit `client/src/components/Home/index.js` to add your content to the Home page. The default contents include:

```js
class Home extends Component {
  render() {
    return (
      <h1>Home</h1>
    )
  }
}
```

## Author
Kory Becker http://www.primaryobjects.com/kory-becker
