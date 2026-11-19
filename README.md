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

gh-pages pushes the contents of the folder directly and does not care about .gitignore or commit history:

```bash
yarn build && npx gh-pages -d build
```

- confirm on GitHub
- if the timestamp is still old, the push did not actually happen : check the terminal output for errors

### if really want the subtree method
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
