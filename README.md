# Overview

This project is meant to get designers more familiar with how VHS (and to a lesser extent, React) works in development. You can use this as a place to just try making some VHS components appear on screen. It is fun! I promise. If you get really into it, you can try making prototypes, but that will require some moderate familiarity with React.

# Getting Started

Go to `App.js` and either delete everything inbetween the `<Layout>` tags or just start fiddling with what is there.

## Using Components

### Importing Components

While VHS is installed in this project, to use components from it on the page you need to import them individually. To do that, simply add the component you want to use to the import declaration at the top of the code. This starter has a few components already imported.

Let’s say you want to add an `IconButton`, so you add this code.

```
import { Text, Button, Icon, Input, Checkbox } from '@wistia/vhs';
...
<IconButton .../>
```

😠

The result will be an error because `IconButton` has not been imported. Luckily, importing things is simple! All you have to do is add the name to the other ones in between the curly brackets.

```
import { Text, Button, Icon, IconButton Input, Checkbox } from '@wistia/vhs';
...
<IconButton .../>
```

😸

### Passing Props to Components

This is where things get fun. Every component has a set of “props” that change the properties of the component. This can be the color, the label text, or icon that appears. Every component has a prop table that you can view on Storybook to give you a sense of what is possible.

For this example, we’ll add a headline to the page. We know we are going to want to start with the Text component, so we write:

```
...
<Text>This is a headline</Text>
...
```

And get this result:
![headline not working](https://p-qKFzNW.b1.n0.cdn.getcloudapp.com/items/6quYjpom/a0c02319-a7ea-48aa-8a90-1b0a3bd0331d.png?v=5d1c2eade0147342a9edb675d733968b)
...not very headliney. That is because we need to pass in the right `variant` prop to make it big and bold. Here’s what that looks like:

```
...
<Text variant="headline1">This is a headline</Text>
...
```

And now this is what we see:
![headline working](https://p-qKFzNW.b1.n0.cdn.getcloudapp.com/items/6quYjp12/5ba4e394-12f8-47de-b254-523bdee554cc.png?v=6441450d5b2262957bfe50165d4e5118)
Ahhh. Much better.

Props are the main way we customize components to look how we want. They can also make the component more functional. For example, buttons use the `onClick` prop to know what should happen when they are clicked. Making functional prototypes is a bit beyond the intention of this project, but feel free to push to bounds and explore!

## Styling

## 💅🏾 styled-components

The styling engine we use for VHS and Wistia in general is called styled-components. It might look a little weird at first, but if you understand CSS it won’t be a problem.

I’d highly recommend checking out the [styled-components documentation](https://styled-components.com/docs/basics), it is very good and very readable.

If you wanted to make a 48x48px div with a red background. Using typical HTML & CSS, that would look like this:

```
// CSS
.redSquare {
    background: red;
    height: 48px;
    width: 48px;
}

// HTML
<div class="redSquare">
    This is a red square.
</div>
```

To create the same thing using styled-components, you’d write this:

```
// styled-component
const RedSquare = styled.div`
    background: red;
    height: 48px;
    width: 48px;
`;

// React
<RedSquare>
    This is a red square.
</RedSquare>
```

**The one thing to keep in mind is that you should write you styled-components code _above_ the `App` function. (So above where it says ` function App() ``{ `**

### `style` prop

You can also add styles into the `style` prop in any component. This is akin to inline styling with HTML, but with a slightly different syntax. For more info, check out the [W3 article.](https://www.w3schools.com/react/react_css.asp)
