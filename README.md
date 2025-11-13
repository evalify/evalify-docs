# Evalify Documentation Site

This is the official documentation website for **Evalify** - A Comprehensive Student Evaluation Platform. The site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator that provides an excellent developer experience for creating documentation websites.

## About Evalify

Evalify is a comprehensive student evaluation platform designed to streamline and enhance the assessment process in educational institutions. This documentation site serves as the central hub for all information related to the platform, including user guides, API documentation, and administrative resources.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Features

This documentation site includes:

- **User Guides**: Comprehensive guides for different user roles (Faculty, Students, Administrators)
- **API Documentation**: Complete API reference and integration guides
- **Getting Started**: Quick start guides and tutorials
- **Dark/Light Mode**: Responsive theme with violet gradient styling
- **Search Functionality**: Built-in search to quickly find information
- **Mobile Responsive**: Optimized for all device sizes

## Project Structure

```
evalify-docs/
├── docs/                   # Documentation content
│   ├── intro.md           # Introduction page
│   └── roles/             # Role-specific documentation
├── src/                   # Custom React components and styling
│   ├── components/        # Custom components
│   ├── css/              # Global CSS and theme customization
│   └── pages/            # Custom pages
├── static/               # Static assets (images, files)
└── docusaurus.config.ts  # Docusaurus configuration
```

## Contributing

To contribute to this documentation:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally using `yarn start`
5. Submit a pull request

## License

This project is part of the Evalify platform. Please refer to the main project repository for licensing information.
