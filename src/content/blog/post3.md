---
title: "Building Web Components with Lit Element Starter Template"
description: "A complete development environment for creating modern web components using Lit Element, TypeScript, SASS, and Rollup"
pubDate: "Dec 24 2024"
heroImage: "/lit-starter.webp"
badge: "Development"
tags: ["lit-element", "typescript", "web-components", "sass", "rollup"]
---

Web components represent a powerful approach to building modular, reusable UI elements. This starter template combines Lit Element's efficiency with modern development tools to accelerate your web component projects.

## Core Template Features

The template integrates essential tools for professional web component development:

- **Lit Element**: Efficient web components with minimal overhead
- **TypeScript**: Type-safe development with enhanced IDE support
- **SASS/PostCSS**: Advanced styling with automatic vendor prefixing
- **Rollup**: Optimized production bundling
- **OpenWC**: Modern testing infrastructure
- **Hot Reloading**: Rapid development cycle
- **Auto Documentation**: Component API documentation

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/nishantbasu/lit-ts-sass-rollup-openwc-starter.git
cd lit-ts-sass-rollup-openwc-starter
npm install
```

Start development:
```bash
npm run serve
```

Visit `http://localhost:8000/demo` to view your components.

## Development Workflow

### Project Structure
```
src/
  ├── components/      # Web components
  ├── styles/         # SASS stylesheets
  └── index.ts        # Main entry
```

### Available Commands
```bash
npm run build        # Production build
npm run test         # Run tests
npm run lint         # Code quality
npm run docs         # Generate docs
```

### Creating Components

Example component:
```typescript
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  @property() name = 'World';

  render() {
    return html`<h1>Hello, ${this.name}!</h1>`;
  }
}
```

## Quick Start Option: Yeoman Generator

For rapid project scaffolding, use our Yeoman generator:

1. Install prerequisites:
```bash
npm install -g yo
npm install -g generator-lit-sass-rollup-openwc-starter
```

2. Generate project:
```bash
yo lit-sass-rollup-openwc-starter
```

The generator creates the same robust development environment with a simplified setup process.

## Next Steps

1. Explore the demo component at `/demo`
2. Review the documentation generated with `npm run docs`
3. Customize the build configuration in `rollup.config.mjs`
4. Start building your components in `src/components`

Visit the [GitHub repository](https://github.com/nishantbasu/lit-ts-sass-rollup-openwc-starter) for detailed documentation and updates.