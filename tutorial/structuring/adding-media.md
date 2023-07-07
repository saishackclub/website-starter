# Adding Media: Images and Videos

Media content can make your website much more engaging. Let’s look at how you can include images and videos.

## Adding Images

Use the `<img>` tag to embed an image.

```html
<img
  src="my-picture.jpg"
  alt="A description of the image"
  width="500"
  height="600"
/>
```

Here are some common attributes for the `<img>` tag:

| Attribute | Description                |
| --------- | -------------------------- |
| `src`     | The URL of the image       |
| `alt`     | A description of the image |
| `width`   | The width of the image     |
| `height`  | The height of the image    |

## Embedding Videos

To embed a video, use the `<video>` tag.

```html
<video width="320" height="240" controls>
  <source src="my-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

**Why is there text below `<source />` saying "Your browser does not support the video tag."?**
The text is displayed to indicate that the browser does not support the video tag.

In the next part, let's focus on implementing navigation for your website. This will help whoever's visiting your website find what they're looking for quickly.

---

<a href="/tutorial/structuring/integrating-css.md">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cloud-c4m75tmer-hack-club-bot.vercel.app/0back.svg">
    <img align="left" width="70" src="https://cloud-c4m75tmer-hack-club-bot.vercel.app/0back.svg" />
  </picture>
</a>

<p align="right">
  <em>
    <b>
      <a href="/tutorial/structuring/implementing-navigation.md">
        Adding a navbar →
      </a>
    </b>
  </em>
</p>

<br />
