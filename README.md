
# Typer

Typer ⌨️ | Experience Typing in Style. Typer is a React-based keyboard and is inspired by a Neumorphic style which gives it a 3D Modern Flair.


## Features

- Interactive Keyboard
- Colorful Themes
- Playful Music for every Theme
- Mechanical Keyboard Sound

## Lessons Learned

I faced so many challenges while during this project and I got to learn a lot from this project namely:  

- How to style SVGs using inline styling i.e., make SVGs into components so that they can be styled easily.
- The true power of React Components, I used the Key Component to its full potential as I reused it to make different types of keys with different width and height all from one single component.
- While designing and developing themes, I got to learn how to use props properly and with that use inline styling to style different elements.
- I learnt about Context in React, which helped me a lot as because of that I didn't had to pass the theme to every single key and without Context, that would have been the end of me.
- I learnt how to dynamically import and use audio files by storing them in the public folder and using them through PUBLIC_URL.



## Run Locally

Clone the project

```bash
  git clone https://github.com/HibbanHaroon/typer.git
```

Go to the project directory

```bash
  cd typer
```
Then,
```bash
  cd virtual-keyboard-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Acknowledgements

 - [Inline SVG](https://refine.dev/blog/react-svg/#inline-svg)
 - [File Structure in React](https://legacy.reactjs.org/docs/faq-structure.html)
 - [Icons8](https://icons8.com/icons)
 - [Fraunces Font](https://fonts.google.com/specimen/Fraunces)
 - [React Tooltip](https://www.npmjs.com/package/react-tooltip)
