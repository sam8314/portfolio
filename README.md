# portfolio

From https://github.com/rjshkhr's template

---

# cheatsheet

**local changes**
- Edit `src/portfolio.js`.
- Add/replace PDFs in `public/`.

**local test**
```bash
yarn start
```
- check `http://localhost:3000/portfolio`. 
- verify if changes look good, then stop the server (`Ctrl+C`).

**commit and push to `main`**
```bash
git add .
git commit -m "Update portfolio: added ... project"
git push origin main
```

**deploy to `gh-pages`**
```bash
yarn deploy
```
- this automatically runs `yarn build` and pushes the compiled files to the `gh-pages` branch. 
- wait 1-2 minutes, then visit the site.

---

## if yarn deploy fails or gets stuck

build/ is listed in .gitignore, and `git subtree split --prefix build main` only reads committed history. So if you run:

```bash
yarn build
git push origin `git subtree split --prefix build main`:gh-pages --force
```
you will almost always get Everything up-to-date and gh-pages will NOT update — because the freshly built files were never committed to main, so subtree split produces the exact same history as last time.

If you see Everything up-to-date from a subtree push, STOP : do not keep retrying it. Use the gh-pages package instead (below).

### manual deploy
gh-pages pushes the contents of the folder directly and does not care about .gitignore or commit history:

```bash
yarn build && npx gh-pages -d build
```

Then confirm on GitHub:
- go to the gh-pages branch on github.com
- the latest commit should be from just now, with a message like Publishing to gh-pages branch

if the timestamp is still old, the push did not actually happen : check the terminal output for errors

### really want the subtree method
must force-add and commit the build output to main first:

```bash
git add -f build/
git commit -m "Force add build folder for manual deployment"
git push origin main
git push origin `git subtree split --prefix build main`:gh-pages --force
```

clean up afterwards so main doesn't bloat with build artifacts:

```bash
git rm -r --cached build
git commit -m "Remove build folder from main branch"
git push origin main
```

**reset GitHub Pages**
If the files are on GitHub but the site is still 404:
- go to **GitHub Repository > Settings > Pages**.
- change Source to **None**.
- wait 10 seconds.
- change Source back to **Deploy from a branch** > **`gh-pages`** > **`/ (root)`**.
- click **Save**.
