---
title: The song that never ends
lang:
  - bash
  - css
  - markup
  - javascript
  - typescript
image:
  - name: install_angular_cli
    url: ../assets/install_angular_cli.png
  - name: angularhelp
    url: ../assets/angular-help.png
  - name: ngnewdemo
    url: ../assets/ng-new-demo.png
  - name: ngtree
    url: ../assets/ng-tree.png
  - name: ngserve1
    url: ../assets/ng-serve-1.png
  - name: rmclean
    url: ../assets/rm_clean.png
  - name: nggeneratecomponent
  - name: demo_no_directive
  - name: demo_directive
  - name: ngfor
  - name: npm_semantic_ui
  - name: semantic_ui_css
  - name: semantic_styling
  - name: npm_install_http
  - name: ari
  - name: ng_book_2
  - name: fullstackreact
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

# {}

## Hello

# {}

## Follow along!
[http://buzzjs.surge.sh/](http://buzzjs.surge.sh/)


# { bgColor="primary" transition=\{["fade"]\} }

## This _is_ a technical talk, so break out your computers {textColor="light"}

# {}

``` {lang="bash" textSize=\{22\}}
npm install -g angular-cli
```

# {}

## A _light_ introduction to Angular 2

# {bgColor="primary"}

## Before I forget... {textColor="light"}
## I'm Ari {fit=\{true\}}

![](images.ari)

# {}

## Should I answer the _why_ Angular 2 over React?

# { bgColor="dark" textColor="light" }

## Us {textColor="light"}

* [ng-newsletter](http://ng-newsletter.com)
* [ng-book](http://ng-book.com)
* [ng-book 2](http://ng-book.com/2)
* [fullstackreact.com](https://fullstackreact.com)

# {}

![](images.ng_book_2){width="100%"}

# {}

![](images.fullstackreact){width="100%"}

# {}

![](images.install_angular_cli){width="100%"}

# {}

``` {lang="bash" textSize=\{22\}}
ng new demo && cd demo
```

# {}

![](images.ngnewdemo){width="100%"}

# {}

![](images.ngtree){width="100%"}

# {}

``` {lang="bash" textSize=\{22\}}
ng serve
```

# {}

![](images.ngserve1){width="100%"}

# { bgColor="dark" }

## How does this work? {textColor="light"}

# {noSlide="true"}

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

# {bgColor="dark"}

## Pretty simple, eh? {textColor="light"}

# {}

## Components are the heart of Angular 2

# {}

Conceptually, components allow us to take our app and break it up into smaller parts where we can focus on individual functionality of a particular portion of our page.

# {}

## Now let's build our own Component

# {}

``` {lang="bash" textSize=\{22\}}
$ mkdir -p src/app/counter
```
``` {lang="bash" textSize=\{22\}}
$ touch src/app/counter/counter.component.ts
```

# {}

![](images.rmclean){width="100%"}

# {}

## Imports

# {noSlide="true"}

<CodeSlide
  lang="typescript"
  transition={[]}
  textSize={22}
  code={require('../code/custom-component.ts')}
      ranges={[
             { loc: [0, 1]},
           ]} />

# {}

## `@Component` decorator

# {}

## Decorator?

# {}

#### The decorator pattern

```{lang="javascript" padding="10px auto" textSize=\{24\} source=\{require('raw!../code/decorator.js')\}}
```

# {noSlide="true"}

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

#{}

```{lang="markup" textSize=\{24\} source=\{require('html!../code/selector.html')\}}
```

# {noSlide="true"}

<CodeSlide
  lang="typescript"
  transition={[]}
  textSize={22}
  code={require('../code/custom-component.ts')}
      ranges={[
             { loc: [4, 7] },
           ]} />

#{}

```{lang="javascript" textSize=\{24\} source=\{require('raw!../code/template.js')\}}
```

# {}

## Let's show this bad boy

# {}

``` {lang="markup" textSize=\{24\} source=\{require('html!../code/demo-component.html')\}}
```

# {}

![](images.demo_no_directive){width="100%"}

# {}

## Huh?

# {}

## We need to handle _injection_

# {noSlide="true"}

<CodeSlide
  lang="typescript"
  transition={[]}
  textSize={22}
  code={require('../code/demo-component-with-custom.ts')}
      ranges={[
             { loc: [2, 3] },
             { loc: [7, 8] },
           ]} />

# {}

![](images.demo_directive){width="100%"}

# {}

Not very interesting... let's add an input

# {}

```{lang="markup" textSize=\{22\} source=\{require('html!../code/input-goal.html')\}}
```

# {}

## inputs

# {}

We need to tell the component what to expect as an input.

# {}

```{lang="typescript" textSize=\{22\} source=\{require('../code/component-inputs.ts')\}}
```

# {}

#### `[square brackets]` pass inputs

# {}

```{lang="markup" textSize=\{22\} source=\{require('html!../code/input-brackets.html')\}}
```

# {}

## Let's pass an input

# {noSlide="true"}

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

# {}

Our counter component has access to the counter. Let's use this variable.

# {noSlide="true"}

<CodeSlide
  lang="typescript"
  transition={[]}
  textSize={22}
  code={require('../code/counter-with-initialCount.ts')}
      ranges={[
             { loc: [5, 6] },
             { loc: [7, 9] },
           ]} />

# { bgColor="dark" textColor="light" transition=\{['fade']\} }

## *initialCount* is descriptive for the parent { textColor="light" }

# { bgColor="dark" textColor="light" }

## *count* is more descriptive for the child { textColor="light" }

# {noSlide="true"}

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

# {bgColor="yellow"}

## What good is a counter that doesn't count?

# {}

## Let's add interaction to count clicks

# {textColor="red"}

## `()` { textSize=\{59\} } handles outputs

# {}

`(somethingHappens)="actionToTake()"`

# {}

`(event)="class['method']"`

# {}

## Let's create an output

# {noSlide="true"}

<CodeSlide
  lang="typescript"
  transition={[]}
  textSize={22}
  code={require('../code/counter-with-output.ts')}
      ranges={[
             { loc: [6, 9] },
             { loc: [15, 18] },
           ]} />

# {}

Adding `addCount()` on our function

# {}

Kinda boring, eh?

# {}

Multiple counters are more exciting

# {}

Let's create multiple counters

# {}

Let's create our counts to iterate through in the parent

# {noSlide="true"}

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

# {}

```{lang="javascript" textSize=\{22\}}
*ngFor="let count in counters"
```

# {}

![](images.ngfor){width="100%"}

# {}

Ugly (and only kind of exciting)

# {}

## Styling

# {}

## Multiple ways to style in ng2

# {}

* global stylesheets
* components
* inline

# {}

### Global stylesheets

# {}

``` {lang="bash" textSize=\{22\}}
npm install --save semantic-ui-css
```

# {}

![](images.npm_semantic_ui){width="100%"}

# {}

ng2 needs to know _how_ to include an `npm` module

# {}

Kinda needy, but easier optimization

# {}

`angular-cli` adds `angular-cli-build.js`

# {noSlide="true"}

<CodeSlide
  lang="javascript"
  transition={[]}
  textSize={22}
  code={require('raw!../code/angular-cli-build.js')}
      ranges={[
             { loc: [16, 18] },
           ]} />

# {}

```{lang="markup" textSize=\{20\}}
<link href="vendor/semantic-ui-css/semantic.css" />
```

# {noSlide="true"}

<CodeSlide
 lang="javascript"
 transition={[]}
 textSize={22}
 code={require('html!../code/semantic-ui.html')}
     ranges={[
            { loc: [5, 7] },
          ]} />

# {}

![](images.semantic_ui_css){width="100%"}

# {}

Let's add some pretty-ness

# {}

### Component styling

# {}

In the `@Component()` decorator

# {noSlide="true"}

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

# {}

![](images.semantic_styling){width="100%"}

# {}

### Still ugly

# {}

## Inline styles?

# {}

Of course we can

# {}

``` {lang="markup" textSize=\{22\}}
[ngStyle]="styleObject"
```

# {noSlide="true"}

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

# {}

It's not realistic that we'll store our data in the component.

# {}

## Services

# {}

## Let's store our counts in a service instead!

# {}

``` {lang="bash" textSize=\{22\}}
ng generate service count
```

# {noSlide="true"}

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

# {}

## Now we'll need to _inject_ our service into our component...

# {}

We need to mark it as injectable first

# {noSlide="true"}

<CodeSlide
 lang="javascript"
 transition={[]}
 textSize={22}
 code={require('../code/count_service_1.ts')}
     ranges={[
            { loc: [19, 22] },
          ]} />

# {}

## Now we'll need to _inject_ our service into our component...

# {noSlide="true"}

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

# {}

## What about getting this from the web?

# {}

Let's fake it for now...

# {}



# {}

```{lang="bash" textSize=\{22\}}
npm install --save rxjs@5.0.0-beta.6
```

# {}

## Let's talk about Subject

# {}

A `Subject` {textSize=\{22\}} is both an observer and observable

# {}

A `BehaviorSubject` can subscribe to receive the last and all values

# {}

A `Subject` {textSize=\{22\}} can be subscribed

# {}

Let's move the counter to support `rxjs`

# {noSlide="true"}

<CodeSlide
 lang="javascript"
 transition={[]}
 textSize={22}
 code={require('../code/rxjs.ts')}
     ranges={[
            { loc: [1, 3] },
            { loc: [9, 11] },
          ]} />

# How do we use it?

# {noSlide="true"}

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

# {}

## Phew, that was a LOT

# Thanks! {}

# {}

## For more info:

* [Twitter: @auser](http://twitter.com/auser)
* [Github @auser](http://github.com/auser)
* [ari@fullstack.io](mailto:ari@fullstack.io)
