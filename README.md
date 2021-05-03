# Mini Project: Trolynhaxe.com landing page

## Date: 03 - May - 2021

### Screenshot

<img src="https://i.imgur.com/yMTbFtO.png" alt="screenshot"/>

### Tech-Stack

- NextJS

### Template

https://startuplanding.redq.io/

### Deploy

- [Live Site](<[link](http://trolynhaxe.com/)>)

### Set up

Use the cmd line to clone repo to your computer

```
git clone [github_repo_url]
```

Use the cmd line to install dependencies.

```
npm install
```

Run in cmd for start the dependencies server on `localhost:3000`

```
npm run dev
```

### Deploy:

Use cmd:

```
npm run build
```

After that, it have the error with `next-sitemap`. Just skip it, and run the next cmd.

```
npm run export
```

The `out` folder will create if the build is success

Next step:

```
firebase login
```

Firebase init project with `hosting`, and choose the root folder is `out`

```
firebase init
```

Get the id of project in firebase, and paste it:

```
firebase use [your-project-id]
```

Finally:

```
firebase deploy
```
