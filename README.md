# В дополнение к сопроводительному письму

Немного обо мне [тут](https://resume-2026-iota.vercel.app/)

## Что внутри?

### Лэндинг с подробным описанием моего опыта и навыков

`app/(introduction-page)` написано на tailwind - [знакомство](https://resume-2026-iota.vercel.app/)

### Дизайн страницы [dzen.ru/articles](https://dzen.ru/articles)

`app/(scss-page)` написано на scss(modules) - [dzen](https://resume-2026-iota.vercel.app/dzen)

Далее на английском

## Project Structure

```
nextjs-docker/
├── app/                      # Next.js App Router directory
│   ├── (introduction-page)/  # Introduction landing build with Tailwind
│   ├── (scss-app)/           # Page build with scss(modules)
│   ├── app/layout.tsx        # Root layout with metadata
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── Dockerfile                # Multi-stage Docker configuration
├── compose.yml               # Docker Compose configuration
├── eslint.config.mjs         # Eslint config with rules for React and Next.js, 
                                sorting and removing unused imports
├── next.config.ts            # Next.js configuration (standalone mode)
├── postcss.config.js         # PostCSS configuration for Tailwind CSS
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Docker

```bash
# Run with Node.js
docker compose up --build
```

## Configuration

### Next.js Standalone Mode

The `next.config.ts` file is configured with `output: "standalone"`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

The standalone output mode creates a minimal, self-contained production build optimized for containerized deployments. When enabled, Next.js generates a `.next/standalone` directory containing only the essential files needed to run your application, excluding unnecessary dependencies and files. 
This results in significantly smaller Docker images and faster container startup times.