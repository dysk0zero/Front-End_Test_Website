# Test Website

This is the front-end code of my test website project using a self-hosted headless CMS on a VPS.

## Motivation

I wanted to develop a cute test website using a headless CMS and an API fetching the front-end from a GitHub repo. Previously I had developed several WordPress websites -around 6 at this exact point- and this is a big step up in every term.

## Method and results

The name and the project itself revolve around the next.js framework, which I chose for code simplicity and the superiority of typescript. Payload CMS was chosen as it is entirely built over next.js, it is open source and it uses MongoDB -which is very powerful and can scale well-. There is a Dockerfile for testing and deployment purposes.

The back-end of the website is self-hosted in my own VPS.

As the project advances I will update this README file.

## Repository overview

- `.vscode`: Instructions to VSC in a .json file.
- `docker`: It contains the Dockerfile and docker-compose.yml file for running on a docker virtual container.
- `src`: Source folder. It contains most of the code.
- `pages:`: Contains the .tsx files of the website pages.
- `styles`: Contains the .css files for styles.

## More resources

Link to Payload CMS website docs: https://payloadcms.com/docs/getting-started/what-is-payload
Link to my Payload GitHub repo: https://github.com/dysk0zero/payload-cms
