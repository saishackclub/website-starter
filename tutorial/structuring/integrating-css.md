# Integrating CSS with HTML

Now that you've got the HTML structure down, let's spice things up with some CSS.

## Linking a CSS File

You can link an external CSS file to your HTML document using the `<link>` element inside the `<head>` tag.

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

## Styling Elements

Use CSS selectors to select elements and define properties and values to style them.

```css
header {
  background-color: #4caf50;
  text-align: center;
  padding: 1em;
}
```

This example sets the background color, text alignment, and padding for the `<header>` element.

Let's add some more CSS to our website!

```css
body {
  background-color: #f44336;
  text-align: center;
  padding: 1em;
  color: #fff;
  font-family: sans-serif;
  font-size: 1.2em;
  line-height: 1.5em;
}
```

This example sets the background color, text alignment, padding, and font family for the `<body>` element:

- `background-color` sets the background color.
- `text-align` sets the text alignment (left, center, or right).
- `padding` sets the padding; that is, the amount of space around the element.
- `color` sets the text color.
- `font-family` sets the font family (e.g., `sans-serif`, `serif`, or `monospace`).

Next, let's see how we can add media content to our website!

---

<a href="/tutorial/structuring/creating-html-structure.md">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cloud-c4m75tmer-hack-club-bot.vercel.app/0back.svg">
    <img align="left" width="70" src="https://cloud-c4m75tmer-hack-club-bot.vercel.app/0back.svg" />
  </picture>
</a>

<p align="right">
  <em>
    <b>
      <a href="/tutorial/structuring/adding-media.md">
        Add some swag →
      </a>
    </b>
  </em>
</p>

<br />
