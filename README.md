# A Gatsby 3 & NetlifyCMS & Github & TailwindCSS starter

As the title says. This is a WIP, especially the README.md, use with caution.
Versions might not be up to date.

## Features

### Gatsby 3

This template uses the most recent version of Gatsby. If it's not up-to-date, please submit a pull request.

### Tailwind CSS

The configuration is in `tailwind.config.js`

`gatsby-browser.js` includes `src/styles/global.css`

Example usage of `src/styles/markdown.module.css` is in `src/templates/article.jsx`

### Github Actions

`.github/workflows/main_push.yml` has a simple workflow that runs whenever you push to `master`

### Netlify

Easily deploy your site to Netlify:

1. In `.netlify/state.json`, add your site-id which you find in Netlify's site settings.
1. In `.github/workflows/main_push.yml` remove the `if` condition.
1. Add the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets to your repository (referenced from `main_push.yml`)

### NetlifyCMS

Better explained in https://www.netlifycms.org/

There's a sample configuration file under `static/admin/config.yml`

## Local Development

```shell
gatsby develop
```

## Deployment

```shell
npx netlify deploy --dir=public --message 'some deploy message'
```

## Thanks

* https://marekpukaj.medium.com/build-with-github-actions-host-on-netlify-ebf5fa505616
* https://tailwindui.com/components/marketing/sections/heroes
* https://tailwindcomponents.com/
* Letterkenny
