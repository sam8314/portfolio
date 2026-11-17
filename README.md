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

## if `yarn deploy` fails or gets stuck

If `yarn deploy` throws a "non-fast-forward" error, or if `gh-pages` branch refuses to update:

**build project manually**
```bash
yarn build
```

**force push the `build` folder to `gh-pages`**
```bash
git push origin `git subtree split --prefix build main`:gh-pages --force
```

**clean up**
if you previously ran the manual `git add -f build` command you need to untrack the build folder so it doesn't bloat your `main` branch:
```bash
git rm -r --cached build
git commit -m "Stop tracking build folder"
git push origin main
```

**reset GitHub Pages**
If the files are on GitHub but the site is still 404:
- go to **GitHub Repository > Settings > Pages**.
- change Source to **None**.
- wait 10 seconds.
- change Source back to **Deploy from a branch** > **`gh-pages`** > **`/ (root)`**.
- click **Save**.
