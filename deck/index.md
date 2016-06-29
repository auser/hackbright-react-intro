---
name: Introduction to react
lang:
  - bash
  - css
  - markup
  - javascript
image:
  - name: ari
theme:
  - name: dark
    color: '010101'
  - name: light
    color: 'eeeeee'
  - name: primary
    color: "009B86"
  - name: yellow
    color: 'FFE79F'
  - name: peach
    color: 'FFB47A'
  - name: red
    color: 'FF573C'
---

# Hello {textColor="light"}

# Follow along!
[http://hackbright-react.surge.sh/](http://hackbright-react.surge.sh/)

---

## This _is_ a technical talk, so break out your computers

# {}

![Me](images.ari){width="50%"}

---

## Some of our books

* [ng-newsletter](http://ng-newsletter.com)
* [ng-book](http://ng-book.com)
* [ng-book 2](http://ng-book.com/2)
* [fullstackreact.com](https://fullstackreact.com)

---

[![](http://d.pr/i/1dDOF.png){width="100%"}](http://ng-book.com/2)

---

[![](http://d.pr/i/ILhR.png){width="100%"}](https://fullstackreact.com)

---

## Tools

---

## Text Editor

[Sublime Text 2/3](http://www.sublimetext.com/)
[Textmate](https://macromates.com)
[Vim](http://www.vim.org)
[Emacs](https://www.gnu.org/software/emacs/)
[Atom](https://atom.io)

---

## Web browser

[Google Chrome](http://google.com/chrome)

---

## Web browser

[Google Chrome](http://google.com/chrome)
_Really? You're going to use anything else?_

---

## Rapid ES6 introduction

---

## ES6 classes

```{class="javascript" name="es6-classes.js"}
class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  fullName() {
    return this.first + ' ' + this.last;
  }
}
```

---

## ES6 functions

```javascript
function add(a, b) {
  return a + b;
}
// Equivalent functions, except...
const add = (a, b) => a + b;
```

---


## `this`

```javascript
var getUserComments = function(callback) {
  var numComments = 34;
  callback(numComments);
};
```

```javascript
var User = {
  first: 'Ari',

  print: function() {
    getUserComments(function(numComments) {
      console.log(`${this.first} made ${numComments} comments`);
    });
  }
};
```

```javascript
User.print(); // What do you think?
```

---

![](http://d.pr/i/1exQD.png){width="100%"}

---

## `this`

The _context_ is not set right. We need to _bind_ the function to the context.

```javascript
const User = {
  first: 'Ari',
  print: function() {
    getUserComments(function(numComments) {
      console.log(`${this.first} made ${numComments} comments`);
    }.bind(this));
  }
};
```

```javascript
// or
const User = {
  first: 'Ari',
  print: function() {
    getUserComments((numComments) => {
      console.log(`${this.first} made ${numComments} comments`);
    });
  }
};
```

---

![](http://d.pr/i/1dRLV.png){width="100%"}

---

## String interpolation

```javascript
const name = 'Ari'
const numComments = 10;
`${name} made ${numComments} comments`
```

---

![](http://d.pr/i/11IGr.png){width="100%"}

---

## Variable expansion

```javascript
const obj = {
  name: 'Ari',
  role: 'Too many hats'
}

const {name} = obj;
```

---

## Objects

```javascript
const name = 'Ari'
const obj = {name};
// object: { 'name': 'Ari' }
```

---

## Document Object Model (DOM)

---

```{name="basic_page.html" class="markup"}
<html>
  <head>
    <title>A basic page</title>
  </head>
  <body>
    <div class="notification">
      You've got mail
    </div>
    <div class="messages">
      <ul>
        <li>Message 1</li>
        <li>Message 2</li>
      </ul>
    </div>
  </body>
</html>
```


---

## Playing with the DOM

```markup
const messages = document.querySelector('.messages');
const message1 = messages.querySelector('ul li')
message1.innerHTML = 'Message 3'
```

---

![](http://d.pr/i/10TDy.png){width="100%"}

---


## A _light_ introduction to Building Apps with React

---

## React is...

- A front-end UI framework for building interfaces
- The **v** in MVC
- Declarative
- Composable
- Much much more...

---

![](http://d.pr/i/pKfV.png){width="100%"}

---

## Let's get started

---

```shell
touch index.html
```

---

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>App</title>
  </head>
  <body>
    <div id="root" />
  </body>
  <script type="text/javascript">
    const root = document.querySelector('#root');
    root.innerHTML = 'Ready to go';
  </script>
</html>
```

---

![](http://d.pr/i/1grft.png){width="100%"}

---

## This isn't realistic, Ari... come on!

---

## Job material

- build tools
- webpack
- babel/es6
- css modules
- postcss
- and more!

---

## Table of contents

- build tools
- webpack
- babel/es6
- basic React
- componentizing
- fetching from Twitter
- css modules
- postcss
- and more!

---

## Table of contents (hopefully)

- build tools
- webpack
- babel/es6
- basic React
- componentizing
- fetching from Twitter
- css modules
- postcss
- and more!

---

## Tools

---

Make sure you have `npm` installed

```shell
$ which npm
```

---

```shell
npm install -g yo
npm install -g generator-react-gen
```
![](http://d.pr/i/Fd9S.png){width="100%"}

---

## Generating our project

---

```shell
mkdir HackBrightApp && cd $_
yo react-gen
```

![](http://d.pr/i/1jSHZ.png){width="100%"}

---

Generated files

![](http://d.pr/i/1g4fF.png){width="100%"}

---

## Running

```bash
npm run start
# or
npm start
```

---

![](http://d.pr/i/1iHtH.png){width="100%"}

---

[![http://localhost:3000](http://d.pr/i/1cHlv.png){width="100%"}](http://localhost:3000)

---

## Complexity at the price of simplicity

* Hot reloading
* Babel out of the box
* Routing (we're not using this today)
* PostCSS
* Redux (we're not using this today)
* CSS modules

---

## Let us simplify & reduce

Open `src/app.js` and replace _all_ contents with:

```bash
import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './app.css'
```

---

## What's all this mean?

We are:
* importing dependencies
* including some styling

---

## Virtual DOM

---

The _idea_: interacting with the DOM is _slow_ as my mom trying to hook up her Netflix account on her iPad (no offense, mom -- hey, you have an iPad at least!).

---

![](https://www.eboxlab.com/wp-content/uploads/2014/10/grandma_PC.jpg){width="100%"}

---

## Virtual DOM

Rather than updating the DOM on every change, React builds a _virtual_ model of the DOM in memory and flushes (or changes the DOM) at the end when everything is figured out already.

---

## Virtual DOM

Rather than create _actual_ DOM instances, we'll ask React to create _virtual_ instances instead.

---

Building a React app basically means we're responsible for building these virtual DOM instances.

---

There are multiple ways to do this. The most basic:

```javascript
const App = React.createClass({
  render: function() {
    return (<div>Hello world</div>);
  }
});
```

---

Our `App` instance is a custom React object with a single function: the `render` function. The `render` function tells React what to render on the page. Except...

---

![](http://d.pr/i/1lHlA.png){width="100%"}

---

We haven't asked React to render anything yet, we've just created the virtual DOM class. We need to ask React to render our `App` into the dom.

---

```javascript
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
```

---

![](http://d.pr/i/6fPg.png){width="100%"}

---

## JSX

Although it _looks_ like HTML, it's using a language called JavaScript Syntax eXtension, or JSX for short, which compiles to JavaScript

---

## JSX

```javascript
React.createElement("div", {}, "Hello world");
```

---

## JSX

Because the `render` function returns JSX, which is JavaScript, we have to handle dynamic data differently than if it were just HTML, but we can show data variables!

---

```javascript
const App = React.createClass({
  render: function() {
    const name = "Ari";
    return (
      <div>Hello {name}</div>
    );
  }
});
```

---

![](http://d.pr/i/16iE1.png){width="100%"}

---

## Static data is _not_ very interesting

---

## Let us make this dynamic

---

## We pass _properties_ to React components

---

```javascript
ReactDOM.render(<App name="Ari" />, root);
```

---

## We can access this data through the `this.props` accessor on the component

---

```javascript
const App = React.createClass({
  render: function() {
    const name = this.props.name;
    return (
      <div>Hello {name}</div>
    );
  }
});
```

---

![](http://d.pr/i/w2vZ.png){width="100%"}

---

## We can pass all sorts of `props`

* constants
* variables
* functions
* objects
* arrays
* components
* booleans
* and more...

---

```javascript
const names = ['Ari', 'Nate', 'Ginger'];
ReactDOM.render(<App names={names} />, root);
```

---

## Using plain JavaScript, we can _map_ over the list and display them

```javascript
const App = React.createClass({
  render: function() {
    const names = this.props.names;
    return (
      <div>
        {names.map(name => (<div>Hello {name}</div>))}
      </div>
    );
  }
});
```

---

![](http://d.pr/i/10kQg.png){width="100%"}

---

## What's with that error?

_We will come back to it_

---

## Composability

---

## Just like HTML

```markup
<div>
  <h1>Hello world</h1>
</div>
```

---

## The React virtual DOM is hierarchical

```markup
<App>
  <Name>Ari</Name>
  <Name>Nate</Name>
  <Name>Ginger</Name>
</App>
```

---

## These are considered `children`

---

## Let us make a `<Name />` component

```javascript
// Second method of creating a component
// called a stateless functional component
const Name = (props) => (<div>Hello {props.name}</div>)
// Or, with ES6
const Name = ({name}) => (<div>Hello {name}</div>)
```

---

Using our `<Name />` stateless component, we can substitute our display with the component.

---

```javascript
const Name = ({name}) => (<div>Hello {name}</div>)
// App
const App = React.createClass({
  render: function() {
    const names = this.props.names;
    return (
      <div>
        {names.map(name => (<Name name={name} />))}
      </div>
    );
  }
});
```

---

## Virtual DOM tree

* `<App />`
  * `<Name />`
  * `<Name />`
  * `<Name />`

---

## Let us get rid of that error now

---

React _remembers_ the what each DOM element has what data, so it requires us to tell how to keep DOM elements unique. We do this with a special prop called `key`:

---

```javascript
const Name = ({name}) => (<div>Hello {name}</div>)
// App
const App = React.createClass({
  render: function() {
    const {names} = this.props;
    return (
    <div>
      {names.map(name => <Name key={name} name={name} />)}
    </div>
    );
  }
});
```
---

Let us _change_ the `names` variable at watch how React keeps track

---

## Interactivity

---

We can listen for events on the component using `props`. Let us add an add button here:

---

```javascript
const App = React.createClass({
  onAdd: function(evt) {
    console.log('Clicked add');
  },
  render: function() {
    const {names} = this.props;
    return (
    <div>
      <button onClick={this.onAdd}>+</button>
      {names.map(name => <Name key={name} name={name} />)}
    </div>
    );
  }
});
```

---

![](http://d.pr/i/dviw.png){width="100%"}

---

In React, we *cannot* manipulate `props` in a component.

---

## One-way data flow

`<App>` -> `<Name />`

---

Believe it or not, this makes everything much easier, as we'll see, but... to manipulate our list of items, we have to handle data in a different way.

---

## Stateful components

---

## State is kind of a big deal with React

---

We need to tell React if we want to create a stateful component using `getInitialState()`

---

```javascript
const App = React.createClass({
  getInitialState: function() {
    return {
      names: []
    }
  },
  // ...
});
```
---

Now, instead of getting the names from the `props`, we can get them from the `state`

---

```javascript
const App = React.createClass({
  // ...
  render: function() {
    const {names} = this.state;
    return (
    <div>
      <button onClick={this.onAdd}>+</button>
      {names.map(name => <Name key={name} name={name} />)}
    </div>
    );
  }
});
```

---

![After refreshing the view](http://d.pr/i/1eIqw.png){width="100%"}

---

State _can_ be manipulated at the component level, so in our `onAdd()` button click, we can change the `state` and the component automatically refreshes and updates/adds a component as necessary.

---

We can manipulate state using `setState()` on a component.

---

```javascript
const App = React.createClass({
  onAdd: function(evt) {
    console.log('Clicked add');
    this.setState({
      names: this.state.names.concat('Anand')
    });
  },
  // ...
});
```

---

![](http://d.pr/i/17UO9.png){width="100%"}

---

What happens if you try to add two names?

---

Let us create an entirely new name

---

```shell
npm install --save chance
```

---

![](http://d.pr/i/1gEU3.png){width="100%"}

---

```javascript
import Chance from 'chance';
// ...
const App = React.createClass({
  onAdd: function(evt) {
    const newName = new Chance().name()
    this.setState({
      names: this.state.names.concat(newName)
    })
  }
});
```

---

![](http://d.pr/i/16Jf2.png){width="100%"}

---


## Not very interesting, Ari...

---

## Let us do a news ticker with twitter

---

First, let's get some keys for [Twitter](http://dev.twitter.com)

---

![](http://d.pr/i/185J2.png){width="100%"}

---

And grab our keys

---

![](http://d.pr/i/128lV.png){width="100%"}

---

Using our _build chain_, let's store our keys in a non-git controlled file

---

```shell
# In config/development.config.js
APP_NAME=HackBrightApp.dev
TWITTER_KEY=MsOp2MUpMzt84COf4xQRPzU4h
```

---

Now, we can refer to these keys using the uppercased version surrounded by `__`, i.e.:

```javascript
const twitterKey = __TWITTER_KEY__;
```

---

OAuth can be a bit ugly, let's make it easier.

I've set up a proxy service using hellojs, so use my `TWITTER_KEY` from above as your own.

---

```shell
npm install --save hellojs
```

---

We need to initialize hello to work with twitter. We only need/want to do this once when the component mounts.

---

## Lifecycle callbacks

---

Every basic React component (except functional stateless components) fires lifecycle events at different stages.

---

* componentWillMount - the component is getting ready to mount
* componentDidMount - the component has mounted (DOM elements exist on page)
* componentWillUpdate - before the component is updated, but is about to be
* componentDidUpdate - after the component has updated (and DOM elements update)
* componentWillReceiveProps - the component will receive some new props

---

Let us initialize `hello` right when the `<App />` component has been mounted.

---

```javascript
const App = React.createClass({
  componentDidMount: function() {
    hello.init({
      twitter: __TWITTER_KEY__
    });
  },
  // ...
});
```

---

With hello initialized we can ask twitter to authorize our application to make requests on our behalf.

---

Let us create an authorize button for our user to press to get an oauth token from Twitter.

---

```javascript
// Third way to create a component
class AuthorizeButton extends React.Component {
  render() {
    return (
      <button>
        Authorize twitter
      </button>
    )
  }
}
```

---

We only want to show our `<AuthorizeButton />` when we're not logged in, for that we'll need to keep track of some `state` in our `<App />` component.

---

```javascript
const App = React.createClass({
  getInitialState: function() {
    return {
      statuses: [],
      loggedIn: false
    }
  },
  // ...
});
```

---

Now we can use our `loggedIn` in `state` to determine if we want to show or hide our authorize a button.

---

```javascript
const App = React.createClass({
  // ...
  const {statuses, loggedIn} = this.state;
  return (
    <div>
      {!loggedIn &&
      	(<AuthorizeButton />)}
    </div>
  );
});
```

---

Now, depending on the `state` of `<App />`, the authorize button will show or be hidden.

---

![](http://d.pr/i/194MU.png){width="100%"}

---

We want _something_ to happen with our `<AuthorizeButton />` when it's clicked. Let us create an action callback handler to be run on the button when it's clicked.

---

```javascript
// Third way to create a component
class AuthorizeButton extends React.Component {
  onClick() {
    // the button has been clicked
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>
        Authorize twitter
      </button>
    )
  }
}
```

---

Since the `<App />` knows about `hello`, but the `<AuthorizeButton />` instance does not, we'll either have to pass hello in as a prop _or_ a function to be called.

---

```javascript
const App = React.createClass({
  // ...
  const {statuses, loggedIn} = this.state;
  return (
    <div>
      {!loggedIn &&
      	(<AuthorizeButton
          onAuth={this.authorizeTwitter} />)}
    </div>
  );
});
```

---

hello has a `login()` method we can call when it's ready to call authorization.

---

```javascript
const App = React.createClass({
  authorizeTwitter: function() {
    hello('twitter').login()
    .then((res) => {
      // we have an auth token
    }, (err) => {
      console.error('An error occurred', err.error.message);
    })
  },
  // ...
});
```

---

## Exercise: store the auth token

---

```javascript
const App = React.createClass({
  authorizeTwitter: function() {
    hello('twitter').login()
    .then((res) => {
      this.setState({
        loggedIn: true,
        twitterAuth: res.authResponse
      });
    }, (err) => {
      console.error('An error occurred', err.error.message);
    })
  },
  // ...
});
```

---

## Making a call to twitter

---

We can use the `hello()` object to make an API call for us using the token

---

```javascript
const App = React.createClass({
  fetchTwitterStream: function() {
    const path = 'search/tweets.json?q=%40twitterapi'

    hello('twitter').api(path)
    .then(json => {
      this.setState({
        statuses: json.statuses
      })
    })
  },
  // ...
});
```

---

More apis can be found at:

![](http://d.pr/i/11Suo.png){width="100%"}

---

With a set of statuses, let's list them.

---

Let us list these elements in our `<App />`:

---

```javascript
const App = React.createClass({
  // ...
  const {statuses, loggedIn} = this.state;
  return (
    <div>
      {!loggedIn &&
      	(<AuthorizeButton
          onAuth={this.authorizeTwitter} />)}
      <NewsList items={statuses} />
    </div>
  );
});
```

---

## Exercise:

Create a news list component to show the new statuses (`<NewsList />`) _and_ use another component to render the news item (`<Item />`).

---

![](http://d.pr/i/1jH2o.png){width="100%"}

---

```javascript
const Item = ({item}) => (<li>{item.text}</li>)
```

---

```javascript
class NewsList extends React.Component {
  render() {
    const {items} = this.props;
    return (
      <ul>
        {items.map(i => <Item item={i} key={i.id} />)}
      </ul>
    )
  }
}
```

---

We need to go fetch some things from Twitter. Let us get the latest samples with our helper method _after_ we have a token.

---

We can run a function _after_ the state has been updated as a second argument to the `setState()` function:

---

```javascript
const App = React.createClass({
  authorizeTwitter: function() {
    hello('twitter').login()
    .then((res) => {
      this.setState({
        loggedIn: true,
        twitterAuth: res.authResponse
      // updated below here
      }, this.fetchTwitterStream);
      // updated above here
    }, (err) => {
      console.error('An error occurred', err.error.message);
    })
  },
  // ...
});
```

---

## What happens if we refresh?

---

![](http://d.pr/i/q4PD.png){width="100%"}

---

Let us fix this. `hello` stores the auth response in localStorage. We can ask for the credentials when the component mounts and use that to call twitter

---

## Question: what method can we call to run when the component mounts?

---

```javascript
const App = React.createClass({
  componentDidMount: function() {
    hello.init({twitter: __TWITTER_KEY__});
    if (this.state.twitterAuth) {
      this.fetchTwitterStream();
    }
  },
  // ...
});
```

---

But we don't have a `twitterAuth` when the component mounts, right?

---

`hello` allows us to make a fetch to get these credentials:

```javascript
const App = React.createClass({
  getInitialState: function() {
    const twitterAuth = hello('twitter').getAuthResponse();
    return {
      loggedIn: !!twitterAuth,
      statuses: [],
      twitterAuth
    }
  },
  // ...
});
```

---

## Ugly -- so ugly

---

Let us add some style

---

## CSS Modules

---

CSS is gross, does anyone like css?

---

CSS modules give us ways to break up CSS to be specific to a particular module.

---

Let us create a CSS module for the `app.js` file in a file called `app.module.css`

---

```{name="container.css" class="css" lang="css"}
.container {
  border: 1px solid blue;
}
```

---

We need to import these styles into our `app.js`.

---

```javascript
import styles from './app.module.css'
```

---

Let us use our `container` style in our app.

---

CSS modules turn our CSS file into:

```javascript
const styles = {
  container: 'src-app-module__container__1uyXF'
};
```

---

Applying this to our `<App />` container is easy:

```javascript
const App = React.createClass({
  // ...
  const {statuses, loggedIn} = this.state;
  return (
    <div className={styles.container}>
      {/* ... */}
    </div>
  );
});
```

---

![](http://d.pr/i/1hi8L.png){width="100%"}

---

Exercise: Make this look pretty

---

![](http://d.pr/i/14ECV.png){width="100%"}

---

Some helpers

---

PostCSS: css preprocessor gives us some sugar around css

---

For instance, to style a list item:

```css
.list {
  flex: 1;

  ul& {
    list-style: none;

    li {}
  }
}
```

---

We can create CSS variables too!

```css
:root {
  --item-padding: 5px;
}
li {
  padding: var(--item-padding);
}
```

---

Use `classnames` to combine and set conditional classnames

---

```shell
npm install --save classnames
```

---

```{name="classnames.js" lang="javascript"}
import classnames from 'classnames'
// ...
```

---

```{name="clock.html" lang='markup'}
<div className={classnames('fa', 'fa-clock-o')}></div>
```

# Thanks!

---

## For more info:

* [Twitter: @auser](http://twitter.com/auser)
* [Github @auser](http://github.com/auser)
* [ari@fullstack.io](mailto:ari@fullstack.io)
