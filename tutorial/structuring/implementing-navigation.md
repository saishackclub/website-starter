# Implementing Navigation

A good navigation system helps visitors find information quickly and easily. Here’s how you can implement navigation on your site.

## The `<nav>` Element

The `<nav>` element is a container for the main navigation links of your website. It is usually placed at the top of the page.

```html
<nav>
  <a href="#home">Home</a> |
  <a href="#services">Services</a> |
  <a href="#contact">Contact</a>
</nav>
```

## Styling Navigation

Use CSS to style your navigation. Here's an example:

```css
nav {
  background-color: #333;
  overflow: hidden;
}

nav a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}
```

This wraps up our section on structuring your website. Next, we'll delve into more advanced styling and theming!
