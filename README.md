# React TODO web app

A simple todo web app built with ReactJS in TypeScript, styled with Bulma & uses Supabase as it's backend API on production deployed on [Vercel](https://react-todo-benjaminlo.vercel.app/)

Depending on which branch you run on, this app uses 2 different backends. In the case of production the app consumes resources from the Supabase API, which returns records from the Todo list table as JSON
<a align="center">
<img src="./public/img/supabase-db.png"/>
</a>

In the case of local I use a mock API; [json-server](https://github.com/typicode/json-server)

## How to run (local)

Clone from the `local` branch

```bash
git clone -b local git@github.com:benji011/react-todo.git
```

install dependencies then start the app in one terminal..

```bash
yarn && yarn start
```

..then open another terminal and start the db

```bash
yarn start:db
```

Access http://localhost:3000

<a align="center">
<img src="./public/img/screenshot.png"/>
</a>
