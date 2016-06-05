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
$for(lang)$
require('prismjs/components/prism-$lang$.js');
$endfor$


const images = {
$for(image)$
  $image.name$: $if(image.url)$require('$image.url$')$else$require('../assets/$image.name$.png')$endif$,
$endfor$
};

preloader(images);

const styles = {};

const theme = createTheme({
  $for(theme)$
  $theme.name$: '#$theme.color$',
  $endfor$
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

          $body$

       </Deck>
      </Spectacle>
    );
  }
}
