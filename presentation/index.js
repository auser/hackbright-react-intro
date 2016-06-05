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
require('prismjs/components/prism-typescript.js');


const images = {
  install_angular_cli: require('../assets/install_angular_cli.png'),
  angularhelp: require('../assets/angular-help.png'),
  ngnewdemo: require('../assets/ng-new-demo.png'),
  ngtree: require('../assets/ng-tree.png'),
  ngserve1: require('../assets/ng-serve-1.png'),
  rmclean: require('../assets/rm_clean.png'),
  nggeneratecomponent: require('../assets/nggeneratecomponent.png'),
  demo_no_directive: require('../assets/demo_no_directive.png'),
  demo_directive: require('../assets/demo_directive.png'),
  ngfor: require('../assets/ngfor.png'),
  npm_semantic_ui: require('../assets/npm_semantic_ui.png'),
  semantic_ui_css: require('../assets/semantic_ui_css.png'),
  semantic_styling: require('../assets/semantic_styling.png'),
  npm_install_http: require('../assets/npm_install_http.png'),
  ari: require('../assets/ari.png'),
  ng_book_2: require('../assets/ng_book_2.png'),
  fullstackreact: require('../assets/fullstackreact.png'),
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

          <Slide  id="section">
          
          <Heading size={2} id="hello">Hello</Heading>
          
          </Slide>
          <Slide  id="section-1">
          
          <Heading size={2} id="follow-along">Follow along!</Heading>
          
          <Link href="http://buzzjs.surge.sh/">http://buzzjs.surge.sh/</Link>
          
          </Slide>
          <Slide  bgColor="primary" transition={["fade"]} id="section-2">
          
          <Heading size={2} id="this-is-a-technical-talk-so-break-out-your-computers" textColor="light">This <em>is</em> a technical talk, so break out your computers</Heading>
          
          </Slide>
          <Slide  id="section-3">
          
          <CodePane lang="bash" textSize={22}>npm install -g angular-cli</CodePane>
          
          </Slide>
          <Slide  id="section-4">
          
          <Heading size={2} id="a-light-introduction-to-angular-2">A <em>light</em> introduction to Angular 2</Heading>
          
          </Slide>
          <Slide  bgColor="primary" id="section-5">
          
          <Heading size={2} id="before-i-forget..." textColor="light">Before I forget...</Heading>
          
          <Heading size={2} id="im-ari" fit={true}>I'm Ari</Heading>
          
          <Image src={images.ari}  title="fig:" />
          
          
          </Slide>
          <Slide  id="section-6">
          
          <Heading size={2} id="should-i-answer-the-why-angular-2-over-react">Should I answer the <em>why</em> Angular 2 over React?</Heading>
          
          </Slide>
          <Slide  bgColor="dark" id="section-7" textColor="light">
          
          <Heading size={2} id="us" textColor="light">Us</Heading>
          
          <List>
          <ListItem><Link href="http://ng-newsletter.com">ng-newsletter</Link></ListItem>
          <ListItem><Link href="http://ng-book.com">ng-book</Link></ListItem>
          <ListItem><Link href="http://ng-book.com/2">ng-book 2</Link></ListItem>
          <ListItem><Link href="https://fullstackreact.com">fullstackreact.com</Link></ListItem>
          </List>
          
          </Slide>
          <Slide  id="section-8">
          
          <Image src={images.ng_book_2}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-9">
          
          <Image src={images.fullstackreact}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-10">
          
          <Image src={images.install_angular_cli}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-11">
          
          <CodePane lang="bash" textSize={22}>ng new demo &amp;&amp; cd demo</CodePane>
          
          </Slide>
          <Slide  id="section-12">
          
          <Image src={images.ngnewdemo}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-13">
          
          <Image src={images.ngtree}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-14">
          
          <CodePane lang="bash" textSize={22}>ng serve</CodePane>
          
          </Slide>
          <Slide  id="section-15">
          
          <Image src={images.ngserve1}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  bgColor="dark" id="section-16">
          
          <Heading size={2} id="how-does-this-work" textColor="light">How does this work?</Heading>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/first_component.ts')}
                ranges={[
                       { loc: [0, 18]},
                       { loc: [7, 8], title: 'Selector'},
                       { loc: [19, 28]},
                       { loc: [27, 28], title: 'Bootstrap'},
                       { loc: [29, 32]},
                       { loc: [33, 45]},
                       { loc: [47, 50]},
                     ]} />
          
          <Slide  bgColor="dark" id="section-18">
          
          <Heading size={2} id="pretty-simple-eh" textColor="light">Pretty simple, eh?</Heading>
          
          </Slide>
          <Slide  id="section-19">
          
          <Heading size={2} id="components-are-the-heart-of-angular-2">Components are the heart of Angular 2</Heading>
          
          </Slide>
          <Slide  id="section-20">
          
          Conceptually, components allow us to take our app and break it up into smaller parts where we can focus on individual functionality of a particular portion of our page.
          
          </Slide>
          <Slide  id="section-21">
          
          <Heading size={2} id="now-lets-build-our-own-component">Now let's build our own Component</Heading>
          
          </Slide>
          <Slide  id="section-22">
          
          <CodePane lang="bash" textSize={22}>$ mkdir -p src/app/counter</CodePane>
          
          <CodePane lang="bash" textSize={22}>$ touch src/app/counter/counter.component.ts</CodePane>
          
          </Slide>
          <Slide  id="section-23">
          
          <Image src={images.rmclean}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-24">
          
          <Heading size={2} id="imports">Imports</Heading>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/custom-component.ts')}
                ranges={[
                       { loc: [0, 1]},
                     ]} />
          
          <Slide  id="section-26">
          
          <Heading size={2} id="component-decorator"><Code>@Component</Code> decorator</Heading>
          
          </Slide>
          <Slide  id="section-27">
          
          <Heading size={2} id="decorator">Decorator?</Heading>
          
          </Slide>
          <Slide  id="section-28">
          
          <Heading size={4} id="the-decorator-pattern">The decorator pattern</Heading>
          
          <CodePane source={require('raw!../code/decorator.js')} textSize={24} padding="10px auto" lang="javascript"></CodePane>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/custom-component.ts')}
                ranges={[
                       { loc: [2, 8], title: 'Component decorator'},
                       { loc: [8, 12] },
                       { loc: [3, 4] },
                     ]} />
          
          <Slide  id="section-30">
          
          <CodePane source={require('html!../code/selector.html')} lang="markup" textSize={24}></CodePane>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/custom-component.ts')}
                ranges={[
                       { loc: [4, 7] },
                     ]} />
          
          <Slide  id="section-32">
          
          <CodePane source={require('raw!../code/template.js')} lang="javascript" textSize={24}></CodePane>
          
          </Slide>
          <Slide  id="section-33">
          
          <Heading size={2} id="lets-show-this-bad-boy">Let's show this bad boy</Heading>
          
          </Slide>
          <Slide  id="section-34">
          
          <CodePane source={require('html!../code/demo-component.html')} lang="markup" textSize={24}></CodePane>
          
          </Slide>
          <Slide  id="section-35">
          
          <Image src={images.demo_no_directive}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-36">
          
          <Heading size={2} id="huh">Huh?</Heading>
          
          </Slide>
          <Slide  id="section-37">
          
          <Heading size={2} id="we-need-to-handle-injection">We need to handle <em>injection</em></Heading>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/demo-component-with-custom.ts')}
                ranges={[
                       { loc: [2, 3] },
                       { loc: [7, 8] },
                     ]} />
          
          <Slide  id="section-39">
          
          <Image src={images.demo_directive}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-40">
          
          Not very interesting... let's add an input
          
          </Slide>
          <Slide  id="section-41">
          
          <CodePane source={require('html!../code/input-goal.html')} lang="markup" textSize={22}></CodePane>
          
          </Slide>
          <Slide  id="section-42">
          
          <Heading size={2} id="inputs">inputs</Heading>
          
          </Slide>
          <Slide  id="section-43">
          
          We need to tell the component what to expect as an input.
          
          </Slide>
          <Slide  id="section-44">
          
          <CodePane source={require('../code/component-inputs.ts')} lang="typescript" textSize={22}></CodePane>
          
          </Slide>
          <Slide  id="section-45">
          
          <Heading size={4} id="square-brackets-pass-inputs"><Code>[square brackets]</Code> pass inputs</Heading>
          
          </Slide>
          <Slide  id="section-46">
          
          <CodePane source={require('html!../code/input-brackets.html')} lang="markup" textSize={22}></CodePane>
          
          </Slide>
          <Slide  id="section-47">
          
          <Heading size={2} id="lets-pass-an-input">Let's pass an input</Heading>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/demo-with-count.ts')}
                ranges={[
                       { loc: [13, 14] },
                       { loc: [16, 17] },
                       { loc: [21, 25] },
                     ]} />
          
          <Slide  id="section-49">
          
          Our counter component has access to the counter. Let's use this variable.
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/counter-with-initialCount.ts')}
                ranges={[
                       { loc: [5, 6] },
                       { loc: [7, 9] },
                     ]} />
          
          <Slide  bgColor="dark" transition={['fade']} id="section-51" textColor="light">
          
          <Heading size={2} id="initialcount-is-descriptive-for-the-parent" textColor="light"><em>initialCount</em> is descriptive for the parent</Heading>
          
          </Slide>
          <Slide  bgColor="dark" id="section-52" textColor="light">
          
          <Heading size={2} id="count-is-more-descriptive-for-the-child" textColor="light"><em>count</em> is more descriptive for the child</Heading>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/counter-with-count.ts')}
                ranges={[
                       { loc: [5, 6] },
                       { loc: [7, 9] },
                       { loc: [11, 12] }
                     ]} />
          
          <Slide  bgColor="yellow" id="section-54">
          
          <Heading size={2} id="what-good-is-a-counter-that-doesnt-count">What good is a counter that doesn't count?</Heading>
          
          </Slide>
          <Slide  id="section-55">
          
          <Heading size={2} id="lets-add-interaction-to-count-clicks">Let's add interaction to count clicks</Heading>
          
          </Slide>
          <Slide  id="section-56" textColor="red">
          
          <Heading size={2} id="handles-outputs"><Code textSize={59}>()</Code> handles outputs</Heading>
          
          </Slide>
          <Slide  id="section-57">
          
          <Code>(somethingHappens)='actionToTake()'</Code>
          
          </Slide>
          <Slide  id="section-58">
          
          <Code>(event)='class['method']'</Code>
          
          </Slide>
          <Slide  id="section-59">
          
          <Heading size={2} id="lets-create-an-output">Let's create an output</Heading>
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/counter-with-output.ts')}
                ranges={[
                       { loc: [6, 9] },
                       { loc: [15, 18] },
                     ]} />
          
          <Slide  id="section-61">
          
          Adding <Code>addCount()</Code> on our function
          
          </Slide>
          <Slide  id="section-62">
          
          Kinda boring, eh?
          
          </Slide>
          <Slide  id="section-63">
          
          Multiple counters are more exciting
          
          </Slide>
          <Slide  id="section-64">
          
          Let's create multiple counters
          
          </Slide>
          <Slide  id="section-65">
          
          Let's create our counts to iterate through in the parent
          
          </Slide>
          
          
          <CodeSlide
            lang="typescript"
            transition={[]}
            textSize={22}
            code={require('../code/demo-with-counters.ts')}
                ranges={[
                       { loc: [13, 14] },
                       { loc: [15, 18] },
                       { loc: [21, 25] },
                     ]} />
          
          <Slide  id="section-67">
          
          <CodePane lang="javascript" textSize={22}>*ngFor='let count in counters'</CodePane>
          
          </Slide>
          <Slide  id="section-68">
          
          <Image src={images.ngfor}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-69">
          
          Ugly (and only kind of exciting)
          
          </Slide>
          <Slide  id="section-70">
          
          <Heading size={2} id="styling">Styling</Heading>
          
          </Slide>
          <Slide  id="section-71">
          
          <Heading size={2} id="multiple-ways-to-style-in-ng2">Multiple ways to style in ng2</Heading>
          
          </Slide>
          <Slide  id="section-72">
          
          <List>
          <ListItem>global stylesheets</ListItem>
          <ListItem>components</ListItem>
          <ListItem>inline</ListItem>
          </List>
          
          </Slide>
          <Slide  id="section-73">
          
          <Heading size={3} id="global-stylesheets">Global stylesheets</Heading>
          
          </Slide>
          <Slide  id="section-74">
          
          <CodePane lang="bash" textSize={22}>npm install --save semantic-ui-css</CodePane>
          
          </Slide>
          <Slide  id="section-75">
          
          <Image src={images.npm_semantic_ui}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-76">
          
          ng2 needs to know <em>how</em> to include an <Code>npm</Code> module
          
          </Slide>
          <Slide  id="section-77">
          
          Kinda needy, but easier optimization
          
          </Slide>
          <Slide  id="section-78">
          
          <Code>angular-cli</Code> adds <Code>angular-cli-build.js</Code>
          
          </Slide>
          
          
          <CodeSlide
            lang="javascript"
            transition={[]}
            textSize={22}
            code={require('raw!../code/angular-cli-build.js')}
                ranges={[
                       { loc: [16, 18] },
                     ]} />
          
          <Slide  id="section-80">
          
          <CodePane lang="markup" textSize={20}>&lt;link href='vendor/semantic-ui-css/semantic.css' /&gt;</CodePane>
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('html!../code/semantic-ui.html')}
               ranges={[
                      { loc: [5, 7] },
                    ]} />
          
          <Slide  id="section-82">
          
          <Image src={images.semantic_ui_css}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-83">
          
          Let's add some pretty-ness
          
          </Slide>
          <Slide  id="section-84">
          
          <Heading size={3} id="component-styling">Component styling</Heading>
          
          </Slide>
          <Slide  id="section-85">
          
          In the <Code>@Component()</Code> decorator
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/component_style.ts')}
               ranges={[
                      { loc: [1, 19] },
                      { loc: [7, 10] },
                      { loc: [21, 29] },
                    ]} />
          
          <Slide  id="section-87">
          
          <Image src={images.semantic_styling}  title="fig:" width="100%" />
          
          
          </Slide>
          <Slide  id="section-88">
          
          <Heading size={3} id="still-ugly">Still ugly</Heading>
          
          </Slide>
          <Slide  id="section-89">
          
          <Heading size={2} id="inline-styles">Inline styles?</Heading>
          
          </Slide>
          <Slide  id="section-90">
          
          Of course we can
          
          </Slide>
          <Slide  id="section-91">
          
          <CodePane lang="markup" textSize={22}>[ngStyle]='styleObject'</CodePane>
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/inline_styling.ts')}
               ranges={[
                      { loc: [7, 9] },
                      { loc: [29, 30] },
                      { loc: [50, 51] },
                      { loc: [71, 72] },
                      { loc: [84, 87] },
                    ]} />
          
          <Slide  id="section-93">
          
          It's not realistic that we'll store our data in the component.
          
          </Slide>
          <Slide  id="section-94">
          
          <Heading size={2} id="services">Services</Heading>
          
          </Slide>
          <Slide  id="section-95">
          
          <Heading size={2} id="lets-store-our-counts-in-a-service-instead">Let's store our counts in a service instead!</Heading>
          
          </Slide>
          <Slide  id="section-96">
          
          <CodePane lang="bash" textSize={22}>ng generate service count</CodePane>
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/count_service_1.ts')}
               ranges={[
                      { loc: [0, 8] },
                      { loc: [1, 2] },
                      { loc: [4, 6] },
                    ]} />
          
          <Slide  id="section-98">
          
          <Heading size={2} id="now-well-need-to-inject-our-service-into-our-component...">Now we'll need to <em>inject</em> our service into our component...</Heading>
          
          </Slide>
          <Slide  id="section-99">
          
          We need to mark it as injectable first
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/count_service_1.ts')}
               ranges={[
                      { loc: [19, 22] },
                    ]} />
          
          <Slide  id="section-101">
          
          <Heading size={2} id="now-well-need-to-inject-our-service-into-our-component...-1">Now we'll need to <em>inject</em> our service into our component...</Heading>
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/count_service_1.ts')}
               ranges={[
                      { loc: [42, 43] },
                      { loc: [51, 52] },
                      { loc: [58, 59] },
                    ]} />
          
          <Slide  id="section-103">
          
          <Heading size={2} id="what-about-getting-this-from-the-web">What about getting this from the web?</Heading>
          
          </Slide>
          <Slide  id="section-104">
          
          Let's fake it for now...
          
          </Slide>
          <Slide  id="section-105">
          
          </Slide>
          <Slide  id="section-106">
          
          <CodePane lang="bash" textSize={22}>npm install --save rxjs@5.0.0-beta.6</CodePane>
          
          </Slide>
          <Slide  id="section-107">
          
          <Heading size={2} id="lets-talk-about-subject">Let's talk about Subject</Heading>
          
          </Slide>
          <Slide  id="section-108">
          
          A <Code textSize={22}>Subject</Code> is both an observer and observable
          
          </Slide>
          <Slide  id="section-109">
          
          A <Code>BehaviorSubject</Code> can subscribe to receive the last and all values
          
          </Slide>
          <Slide  id="section-110">
          
          A <Code textSize={22}>Subject</Code> can be subscribed
          
          </Slide>
          <Slide  id="section-111">
          
          Let's move the counter to support <Code>rxjs</Code>
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/rxjs.ts')}
               ranges={[
                      { loc: [1, 3] },
                      { loc: [9, 11] },
                    ]} />
          
          <Slide  id="how-do-we-use-it"><Heading size={1} id="how-do-we-use-it">How do we use it?</Heading>
          
          </Slide>
          
          
          <CodeSlide
           lang="javascript"
           transition={[]}
           textSize={22}
           code={require('../code/rxjs.ts')}
               ranges={[
                      { loc: [32, 33] },
                      { loc: [39, 41] },
                      { loc: [49, 50] },
                    ]} />
          
          <Slide  id="section-114">
          
          <Heading size={2} id="phew-that-was-a-lot">Phew, that was a LOT</Heading>
          
          </Slide>
          <Slide  id="thanks"><Heading size={1} id="thanks">Thanks!</Heading>
          
          </Slide>
          <Slide  id="section-115">
          
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

