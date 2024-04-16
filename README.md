# The PNF Website

PNF stands for:
-P: Payload CMS, the headless CMS of choice.
-N: Next.js, the framework around all the project.
-F: Fuck.

## Motivation

I wanted to develop a cute test website using a headless CMS and an API fetching the front-end from a GitHub repo. Previosly I had developed several Wordpress websites -around 6 at this exact point- and this is a big step up in every term.

## Method and results

The name and the project itself revolves around the next.js framework, which I chose for code simplicity and the superiority of typescript. Payload CMS was chosen as it is entirely built over next.js, it is open source and it uses MongoDB -which is very powerful and can scale well-. There is a Dockerfile for testing and deployment purposes.

The back-end for the website is self-hosted in my own VPS.

As the project advances I will update this README file.

## Repository overview

├──.vscode
| ├── launch.json
├── docker
│   ├── docker-compose.yml
│   └── Dockerfile
├── public
├── src
│   ├── components
│   ├── lib
│   ├── pages
│   ├── styles
│   └── typings.d.ts
├── test
├── .gitignore
├── next-env.d.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

## More resources

Point interested users to any related literature and/or documentation.

## About

Explain who has contributed to the repository. You can say it has been part of a class you've taken at Tilburg University.
