# ts-template-app

## Features

- ESM (with extensionless imports)
- Dev script (tsx), other scripts
- Formatting (prettier, import ordering)
- Linting (eslint)
- `.env` support (dotenv-cli)
- Docker: [Dockerfile](Dockerfile), [compose.yml](compose.yml)

## Get started

- `mkdir my-project`
- `git clone https://github.com/garzj/ts-template-app .`
- `git remote remove origin`

## What to change

- [package.json](package.json): `name`, `version`, `description`, `license`, `author`
- [LICENSE](LICENSE)
- [compose.yml](compose.yml): service name, `image`, `container_name`
- Ignore files: [.gitignore](.gitignore), [.prettierignore](.prettierignore), [.dockerignore](.dockerignore), [eslint.config.js](eslint.config.js)
- [README.md](README.md)
