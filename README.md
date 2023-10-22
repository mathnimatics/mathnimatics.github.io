# Mathnimatics
Mathnimatics is a library of math animations/visualizations meant to make math "make more sense". Mathnimatics is powered by the community, who constantly add new animations to make this library bigger and better.

## Contributing animations
This site is powered by the [Astro](https://astro.build) framework. Contribute animations by clonin the repo, install the npm packages, then run with `npm run dev`.

Then navigate to the `src/components/animations` directory, containing different categories; find a category for your animation (or create one), then create `your-animation-name.astro`. Refer to other animation files for reference.

## API
The step-by-step process is handled by the `animation/controls.js` file. Import the default export (a single function), then call it passing an array of object in the form:
```js
{
  text: "This text will be displayed on the bottom of the screen.",
  play() {
    // code here will play the current animation
  }
}
```
Once you've completed your animation and verified that it works, create a pull request and we'll handle the rest!

## Background
This was a project submission for the DA Hacks hackathon, which made it into the finals. Now, it is solely here for the sake of verbwire and potatoes.
