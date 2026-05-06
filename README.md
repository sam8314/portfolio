# portfolio

portfolio is a portfolio template built with React. However, if you prefer a template built with HTML, CSS, and JavaScript, you can check out [portfolio Minimal](https://github.com/rjshkhr/portfolio-minimal).

## Preview

[![Imgur](https://imgur.com/FwDMNEM.gif)](https://rjshkhr.github.io/portfolio)

[Live Demo](https://rjshkhr.github.io/portfolio)

## Instructions

### Setup

```shell
git clone https://github.com/rjshkhr/portfolio
cd portfolio
```

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), execute:

```shell
nvm install
nvm use
```

Or:

```shell
fnm install
fnm use
```

To install and launch the project, run these commands:

```shell
yarn
yarn start
```

### How to Use

- Open the `public/index.html` file and replace:

`<title>John Smith</title>` with `<title>Your Name</title>`.

- Open the `src/portfolio.js` file and make the necessary changes.

- Optionally, you can add an image or logo for each project in two ways:
  1. **Local image**
     - Put your image inside the `public/images/` folder
     - In `portfolio.js`, just use the file name:
      ```js
      image: "portfolio.png"
      ```

  2. **Web image**
     - If your image is already hosted online, just paste the URL:
     ```js
     image: "https://example.com/my-logo.png"
     ```



### Deployment

- In the `package.json` file, update:

`"homepage": "https://rjshkhr.github.io/portfolio"`

to `"homepage": "https://yourusername.github.io"`.

- Push the changes to your repository.

- To build and deploy, run the following commands:

```shell
yarn build
yarn deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
