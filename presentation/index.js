// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Code,
  Fill, Heading, Image, Layout, Link, ListItem,
  List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom components
// import Interactive from "../assets/interactive";

const {geolocation} = window.navigator;

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require('prismjs')
require('prismjs/themes/prism-tomorrow.css');
require('prismjs/components/prism-bash.js');
require('prismjs/components/prism-css.js');
require('prismjs/components/prism-markup.js');
require('prismjs/components/prism-javascript.js');


const images = {
  ari: require('../assets/ari.png'),
};

preloader(images);

const styles = {};

const theme = createTheme({
    dark: '#010101',
    light: '#eeeeee',
    primary: '#009B86',
    yellow: '#FFE79F',
    peach: '#FFB47A',
    red: '#FF573C',
  });

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {}
    }
  }

  componentWillMount() {
    geolocation.getCurrentPosition(pos => {
      this.setState({
        currentLocation: pos
      })
    });
  }

  render() {
    return (
      <Spectacle theme={theme}>
      <Deck transition={[]} textSize={20} transitionDuration={500} progress='none'>

          <Slide  id="hello" textColor="light"><Heading size={1} id="hello" textColor="light">Hello</Heading>
          
          </Slide>
          <Slide  id="follow-along"><Heading size={1} id="follow-along">Follow along!</Heading>
          
          <Link href="http://hackbright.surge.sh/">http://hackbright.surge.sh/</Link>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="this-is-a-technical-talk-so-break-out-your-computers">This <em>is</em> a technical talk, so break out your computers</Heading>
          
          </Slide>
          <Slide  id="section">
          
          <Image src={images.ari}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="some-of-our-books">Some of our books</Heading>
          
          <List>
          <ListItem><Link href="http://ng-newsletter.com">ng-newsletter</Link></ListItem>
          <ListItem><Link href="http://ng-book.com">ng-book</Link></ListItem>
          <ListItem><Link href="http://ng-book.com/2">ng-book 2</Link></ListItem>
          <ListItem><Link href="https://fullstackreact.com">fullstackreact.com</Link></ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Link href="http://ng-book.com/2"><Image src="http://d.pr/i/1dDOF.png" title="" width="100%" />
          </Link>
          
          </Slide>
          <Slide>
          
          <Link href="https://fullstackreact.com"><Image src="http://d.pr/i/ILhR.png" title="" width="100%" />
          </Link>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="tools">Tools</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="text-editor">Text Editor</Heading>
          
          <Link href="http://www.sublimetext.com/">Sublime Text 2/3</Link> <Link href="https://macromates.com">Textmate</Link> <Link href="http://www.vim.org">Vim</Link> <Link href="https://www.gnu.org/software/emacs/">Emacs</Link> <Link href="https://atom.io">Atom</Link>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="web-browser">Web browser</Heading>
          
          <Link href="http://google.com/chrome">Google Chrome</Link>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="web-browser-1">Web browser</Heading>
          
          <Link href="http://google.com/chrome">Google Chrome</Link> <em>Really? You're going to use anything else?</em>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="rapid-es6-introduction">Rapid ES6 introduction</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="es6-classes">ES6 classes</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/es6-classes.js')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="es6-functions">ES6 functions</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_0.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="this"><Code>this</Code></Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_1.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1exQD.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="this-1"><Code>this</Code></Heading>
          
          The <em>context</em> is not set right. We need to <em>bind</em> the function to the context.
          
          <CodePane lang="javascript" source={require('raw!../code/code_2.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1dRLV.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="string-interpolation">String interpolation</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_3.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/11IGr.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="variable-expansion">Variable expansion</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_4.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="objects">Objects</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_5.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="document-object-model-dom">Document Object Model (DOM)</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="markup" source={require('raw!../code/basic_page.html')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="playing-with-the-dom">Playing with the DOM</Heading>
          
          <CodePane lang="markup" source={require('raw!../code/code_6.markup')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/10TDy.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="a-light-introduction-to-building-apps-with-react">A <em>light</em> introduction to Building Apps with React</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="react-is...">React is...</Heading>
          
          <List>
          <ListItem>A front-end UI framework for building interfaces</ListItem>
          <ListItem>The <strong>v</strong> in MVC</ListItem>
          <ListItem>Declarative</ListItem>
          <ListItem>Composable</ListItem>
          <ListItem>Much much more...</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/pKfV.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="lets-get-started">Let's get started</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_7.shell')} />
          
          </Slide>
          <Slide>
          
          <CodePane lang="html" source={require('raw!../code/code_8.html')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1grft.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="this-isnt-realistic-ari...-come-on">This isn't realistic, Ari... come on!</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="job-material">Job material</Heading>
          
          <List>
          <ListItem>build tools</ListItem>
          <ListItem>webpack</ListItem>
          <ListItem>babel/es6</ListItem>
          <ListItem>css modules</ListItem>
          <ListItem>postcss</ListItem>
          <ListItem>and more!</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="table-of-contents">Table of contents</Heading>
          
          <List>
          <ListItem>build tools</ListItem>
          <ListItem>webpack</ListItem>
          <ListItem>babel/es6</ListItem>
          <ListItem>basic React</ListItem>
          <ListItem>componentizing</ListItem>
          <ListItem>fetching from Twitter</ListItem>
          <ListItem>css modules</ListItem>
          <ListItem>postcss</ListItem>
          <ListItem>and more!</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="table-of-contents-hopefully">Table of contents (hopefully)</Heading>
          
          <List>
          <ListItem>build tools</ListItem>
          <ListItem>webpack</ListItem>
          <ListItem>babel/es6</ListItem>
          <ListItem>basic React</ListItem>
          <ListItem>componentizing</ListItem>
          <ListItem>fetching from Twitter</ListItem>
          <ListItem>css modules</ListItem>
          <ListItem>postcss</ListItem>
          <ListItem>and more!</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="tools-1">Tools</Heading>
          
          </Slide>
          <Slide>
          
          Make sure you have <Code>npm</Code> installed
          
          <CodePane lang="shell" source={require('raw!../code/code_9.shell')} />
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_10.shell')} />
          
          <Image src="http://d.pr/i/Fd9S.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="generating-our-project">Generating our project</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_11.shell')} />
          
          <Image src="http://d.pr/i/1jSHZ.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          Generated files
          
          <Image src="http://d.pr/i/1g4fF.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="running">Running</Heading>
          
          <CodePane lang="bash" source={require('raw!../code/code_12.bash')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1iHtH.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Link href="http://localhost:3000"><Image src="http://d.pr/i/1cHlv.png" title="" width="100%" />
          </Link>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="complexity-at-the-price-of-simplicity">Complexity at the price of simplicity</Heading>
          
          <List>
          <ListItem>Hot reloading</ListItem>
          <ListItem>Babel out of the box</ListItem>
          <ListItem>Routing (we're not using this today)</ListItem>
          <ListItem>PostCSS</ListItem>
          <ListItem>Redux (we're not using this today)</ListItem>
          <ListItem>CSS modules</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="let-us-simplify-reduce">Let us simplify &amp; reduce</Heading>
          
          Open <Code>src/app.js</Code> and replace <em>all</em> contents with:
          
          <CodePane lang="bash" source={require('raw!../code/code_13.bash')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="whats-all-this-mean">What's all this mean?</Heading>
          
          We are: * importing dependencies * including some styling
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="virtual-dom">Virtual DOM</Heading>
          
          </Slide>
          <Slide>
          
          The <em>idea</em>: interacting with the DOM is <em>slow</em> as my mom trying to hook up her Netflix account on her iPad (no offense, mom -- hey, you have an iPad at least!).
          
          </Slide>
          <Slide>
          
          <Image src="https://www.eboxlab.com/wp-content/uploads/2014/10/grandma_PC.jpg" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="virtual-dom-1">Virtual DOM</Heading>
          
          Rather than updating the DOM on every change, React builds a <em>virtual</em> model of the DOM in memory and flushes (or changes the DOM) at the end when everything is figured out already.
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="virtual-dom-2">Virtual DOM</Heading>
          
          Rather than create <em>actual</em> DOM instances, we'll ask React to create <em>virtual</em> instances instead.
          
          </Slide>
          <Slide>
          
          Building a React app basically means we're responsible for building these virtual DOM instances.
          
          </Slide>
          <Slide>
          
          There are multiple ways to do this. The most basic:
          
          <CodePane lang="javascript" source={require('raw!../code/code_14.javascript')} />
          
          </Slide>
          <Slide>
          
          Our <Code>App</Code> instance is a custom React object with a single function: the <Code>render</Code> function. The <Code>render</Code> function tells React what to render on the page. Except...
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1lHlA.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          We haven't asked React to render anything yet, we've just created the virtual DOM class. We need to ask React to render our <Code>App</Code> into the dom.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_15.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/6fPg.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="jsx">JSX</Heading>
          
          Although it <em>looks</em> like HTML, it's using a language called JavaScript Syntax eXtension, or JSX for short, which compiles to JavaScript
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="jsx-1">JSX</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_16.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="jsx-2">JSX</Heading>
          
          Because the <Code>render</Code> function returns JSX, which is JavaScript, we have to handle dynamic data differently than if it were just HTML, but we can show data variables!
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_17.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/16iE1.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="static-data-is-not-very-interesting">Static data is <em>not</em> very interesting</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="let-us-make-this-dynamic">Let us make this dynamic</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="we-pass-properties-to-react-components">We pass <em>properties</em> to React components</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_18.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="we-can-access-this-data-through-the-this.props-accessor-on-the-component">We can access this data through the <Code>this.props</Code> accessor on the component</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_19.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/w2vZ.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="we-can-pass-all-sorts-of-props">We can pass all sorts of <Code>props</Code></Heading>
          
          <List>
          <ListItem>constants</ListItem>
          <ListItem>variables</ListItem>
          <ListItem>functions</ListItem>
          <ListItem>objects</ListItem>
          <ListItem>arrays</ListItem>
          <ListItem>components</ListItem>
          <ListItem>booleans</ListItem>
          <ListItem>and more...</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_20.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="using-plain-javascript-we-can-map-over-the-list-and-display-them">Using plain JavaScript, we can <em>map</em> over the list and display them</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_21.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/10kQg.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="whats-with-that-error">What's with that error?</Heading>
          
          <em>We will come back to it</em>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="composability">Composability</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="just-like-html">Just like HTML</Heading>
          
          <CodePane lang="markup" source={require('raw!../code/code_22.markup')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="the-react-virtual-dom-is-hierarchical">The React virtual DOM is hierarchical</Heading>
          
          <CodePane lang="markup" source={require('raw!../code/code_23.markup')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="these-are-considered-children">These are considered <Code>children</Code></Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="let-us-make-a-name-component">Let us make a <Code>&lt;Name /&gt;</Code> component</Heading>
          
          <CodePane lang="javascript" source={require('raw!../code/code_24.javascript')} />
          
          </Slide>
          <Slide>
          
          Using our <Code>&lt;Name /&gt;</Code> stateless component, we can substitute our display with the component.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_25.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="virtual-dom-tree">Virtual DOM tree</Heading>
          
          <List>
          <ListItem><Code>&lt;App /&gt;</Code></ListItem>
          <ListItem><Code>&lt;Name /&gt;</Code></ListItem>
          <ListItem><Code>&lt;Name /&gt;</Code></ListItem>
          <ListItem><Code>&lt;Name /&gt;</Code></ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="let-us-get-rid-of-that-error-now">Let us get rid of that error now</Heading>
          
          </Slide>
          <Slide>
          
          React <em>remembers</em> the what each DOM element has what data, so it requires us to tell how to keep DOM elements unique. We do this with a special prop called <Code>key</Code>:
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_26.javascript')} />
          
          </Slide>
          <Slide>
          
          Let us <em>change</em> the <Code>names</Code> variable at watch how React keeps track
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="interactivity">Interactivity</Heading>
          
          </Slide>
          <Slide>
          
          We can listen for events on the component using <Code>props</Code>. Let us add an add button here:
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_27.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/dviw.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          In React, we <em>cannot</em> manipulate <Code>props</Code> in a component.
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="one-way-data-flow">One-way data flow</Heading>
          
          <Code>&lt;App&gt;</Code> -&gt; <Code>&lt;Name /&gt;</Code>
          
          </Slide>
          <Slide>
          
          Believe it or not, this makes everything much easier, as we'll see, but... to manipulate our list of items, we have to handle data in a different way.
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="stateful-components">Stateful components</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="state-is-kind-of-a-big-deal-with-react">State is kind of a big deal with React</Heading>
          
          </Slide>
          <Slide>
          
          We need to tell React if we want to create a stateful component using <Code>getInitialState()</Code>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_28.javascript')} />
          
          </Slide>
          <Slide>
          
          Now, instead of getting the names from the <Code>props</Code>, we can get them from the <Code>state</Code>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_29.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1eIqw.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          State <em>can</em> be manipulated at the component level, so in our <Code>onAdd()</Code> button click, we can change the <Code>state</Code> and the component automatically refreshes and updates/adds a component as necessary.
          
          </Slide>
          <Slide>
          
          We can manipulate state using <Code>setState()</Code> on a component.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_30.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/17UO9.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          What happens if you try to add two names?
          
          </Slide>
          <Slide>
          
          Let us create an entirely new name
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_31.shell')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1gEU3.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_32.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/16Jf2.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="not-very-interesting-ari...">Not very interesting, Ari...</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="let-us-do-a-news-ticker-with-twitter">Let us do a news ticker with twitter</Heading>
          
          </Slide>
          <Slide>
          
          First, let's get some keys for <Link href="http://dev.twitter.com">Twitter</Link>
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/185J2.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          And grab our keys
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/128lV.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          Using our <em>build chain</em>, let's store our keys in a non-git controlled file
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_33.shell')} />
          
          </Slide>
          <Slide>
          
          Now, we can refer to these keys using the uppercased version surrounded by <Code>__</Code>, i.e.:
          
          <CodePane lang="javascript" source={require('raw!../code/code_34.javascript')} />
          
          </Slide>
          <Slide>
          
          OAuth can be a bit ugly, let's make it easier.
          
          I've set up a proxy service using hellojs, so use my <Code>TWITTER_KEY</Code> from above as your own.
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_35.shell')} />
          
          </Slide>
          <Slide>
          
          We need to initialize hello to work with twitter. We only need/want to do this once when the component mounts.
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="lifecycle-callbacks">Lifecycle callbacks</Heading>
          
          </Slide>
          <Slide>
          
          Every basic React component (except functional stateless components) fires lifecycle events at different stages.
          
          </Slide>
          <Slide>
          
          <List>
          <ListItem>componentWillMount - the component is getting ready to mount</ListItem>
          <ListItem>componentDidMount - the component has mounted (DOM elements exist on page)</ListItem>
          <ListItem>componentWillUpdate - before the component is updated, but is about to be</ListItem>
          <ListItem>componentDidUpdate - after the component has updated (and DOM elements update)</ListItem>
          <ListItem>componentWillReceiveProps - the component will receive some new props</ListItem>
          </List>
          
          </Slide>
          <Slide>
          
          Let us initialize <Code>hello</Code> right when the <Code>&lt;App /&gt;</Code> component has been mounted.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_36.javascript')} />
          
          </Slide>
          <Slide>
          
          With hello initialized we can ask twitter to authorize our application to make requests on our behalf.
          
          </Slide>
          <Slide>
          
          Let us create an authorize button for our user to press to get an oauth token from Twitter.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_37.javascript')} />
          
          </Slide>
          <Slide>
          
          We only want to show our <Code>&lt;AuthorizeButton /&gt;</Code> when we're not logged in, for that we'll need to keep track of some <Code>state</Code> in our <Code>&lt;App /&gt;</Code> component.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_38.javascript')} />
          
          </Slide>
          <Slide>
          
          Now we can use our <Code>loggedIn</Code> in <Code>state</Code> to determine if we want to show or hide our authorize a button.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_39.javascript')} />
          
          </Slide>
          <Slide>
          
          Now, depending on the <Code>state</Code> of <Code>&lt;App /&gt;</Code>, the authorize button will show or be hidden.
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/194MU.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          We want <em>something</em> to happen with our <Code>&lt;AuthorizeButton /&gt;</Code> when it's clicked. Let us create an action callback handler to be run on the button when it's clicked.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_40.javascript')} />
          
          </Slide>
          <Slide>
          
          Since the <Code>&lt;App /&gt;</Code> knows about <Code>hello</Code>, but the <Code>&lt;AuthorizeButton /&gt;</Code> instance does not, we'll either have to pass hello in as a prop <em>or</em> a function to be called.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_41.javascript')} />
          
          </Slide>
          <Slide>
          
          hello has a <Code>login()</Code> method we can call when it's ready to call authorization.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_42.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="exercise-store-the-auth-token">Exercise: store the auth token</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_43.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="making-a-call-to-twitter">Making a call to twitter</Heading>
          
          </Slide>
          <Slide>
          
          We can use the <Code>hello()</Code> object to make an API call for us using the token
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_44.javascript')} />
          
          </Slide>
          <Slide>
          
          More apis can be found at:
          
          <Image src="http://d.pr/i/11Suo.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          With a set of statuses, let's list them.
          
          </Slide>
          <Slide>
          
          Let us list these elements in our <Code>&lt;App /&gt;</Code>:
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_45.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="exercise">Exercise:</Heading>
          
          Create a news list component to show the new statuses (<Code>&lt;NewsList /&gt;</Code>) <em>and</em> use another component to render the news item (<Code>&lt;Item /&gt;</Code>).
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1jH2o.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_46.javascript')} />
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_47.javascript')} />
          
          </Slide>
          <Slide>
          
          We need to go fetch some things from Twitter. Let us get the latest samples with our helper method <em>after</em> we have a token.
          
          </Slide>
          <Slide>
          
          We can run a function <em>after</em> the state has been updated as a second argument to the <Code>setState()</Code> function:
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_48.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="what-happens-if-we-refresh">What happens if we refresh?</Heading>
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/q4PD.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          Let us fix this. <Code>hello</Code> stores the auth response in localStorage. We can ask for the credentials when the component mounts and use that to call twitter
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="question-what-method-can-we-call-to-run-when-the-component-mounts">Question: what method can we call to run when the component mounts?</Heading>
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_49.javascript')} />
          
          </Slide>
          <Slide>
          
          But we don't have a <Code>twitterAuth</Code> when the component mounts, right?
          
          </Slide>
          <Slide>
          
          <Code>hello</Code> allows us to make a fetch to get these credentials:
          
          <CodePane lang="javascript" source={require('raw!../code/code_50.javascript')} />
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="ugly----so-ugly">Ugly -- so ugly</Heading>
          
          </Slide>
          <Slide>
          
          Let us add some style
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="css-modules">CSS Modules</Heading>
          
          </Slide>
          <Slide>
          
          CSS is gross, does anyone like css?
          
          </Slide>
          <Slide>
          
          CSS modules give us ways to break up CSS to be specific to a particular module.
          
          </Slide>
          <Slide>
          
          Let us create a CSS module for the <Code>app.js</Code> file in a file called <Code>app.module.css</Code>
          
          </Slide>
          <Slide>
          
          <CodePane lang="css" source={require('raw!../code/container.css')} />
          
          </Slide>
          <Slide>
          
          We need to import these styles into our <Code>app.js</Code>.
          
          </Slide>
          <Slide>
          
          <CodePane lang="javascript" source={require('raw!../code/code_51.javascript')} />
          
          </Slide>
          <Slide>
          
          Let us use our <Code>container</Code> style in our app.
          
          </Slide>
          <Slide>
          
          CSS modules turn our CSS file into:
          
          <CodePane lang="javascript" source={require('raw!../code/code_52.javascript')} />
          
          </Slide>
          <Slide>
          
          Applying this to our <Code>&lt;App /&gt;</Code> container is easy:
          
          <CodePane lang="javascript" source={require('raw!../code/code_53.javascript')} />
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/1hi8L.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          Exercise: Make this look pretty
          
          </Slide>
          <Slide>
          
          <Image src="http://d.pr/i/14ECV.png" title="fig:" width="100%" />
          
          
          </Slide>
          <Slide>
          
          Some helpers
          
          </Slide>
          <Slide>
          
          PostCSS: css preprocessor gives us some sugar around css
          
          </Slide>
          <Slide>
          
          For instance, to style a list item:
          
          <CodePane lang="css" source={require('raw!../code/code_54.css')} />
          
          </Slide>
          <Slide>
          
          We can create CSS variables too!
          
          <CodePane lang="css" source={require('raw!../code/code_55.css')} />
          
          </Slide>
          <Slide>
          
          Use <Code>classnames</Code> to combine and set conditional classnames
          
          </Slide>
          <Slide>
          
          <CodePane lang="shell" source={require('raw!../code/code_56.shell')} />
          
          </Slide>
          <Slide>
          
          <CodePane source={require('raw!../code/classnames.js')} />
          
          </Slide>
          <Slide>
          
          <CodePane source={require('raw!../code/clock.html')} />
          
          </Slide>
          <Slide  id="thanks"><Heading size={1} id="thanks">Thanks!</Heading>
          
          </Slide>
          <Slide>
          
          <Heading size={2} id="for-more-info">For more info:</Heading>
          
          <List>
          <ListItem><span class="cite" data-citation-ids="auser">[Twitter: @auser]</span>(http://twitter.com/auser)</ListItem>
          <ListItem><span class="cite" data-citation-ids="auser">[Github @auser]</span>(http://github.com/auser)</ListItem>
          <ListItem><Link href="mailto:ari@fullstack.io">ari@fullstack.io</Link></ListItem>
          </List>
          </Slide>

       </Deck>
      </Spectacle>
    );
  }
}

