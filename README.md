# 🧱 pg-monorepo

A modern monorepo powered by [Bun](https://bun.sh), using workspaces to organize multiple applications and packages.

## 📦 Project Structure

```plain
pg-monorepo/
├── apps/ # Frontend and backend apps
│ ├── project-a/ # Example app (uses Vite)
│ └── ...
├── packages/ # Shared packages/libraries
│ ├── pg/ # Example shared package
│ └── ...
├── bun.lockb # Bun lockfile
├── package.json # Root package, defines workspaces
└── tsconfig.json # Base TS config (optional)
```


## 🚀 Getting Started

### 1. Install Bun

If you haven't installed Bun yet:

```bash
curl -fsSL https://bun.sh/install | bash
```

Verify Bun is installed:
```bash
bun --version  # Should be >= 1.1.10
```

### 2. Install Dependencies
Run from the root of the monorepo:

```bash
bun install
```
Bun will automatically install dependencies across all workspaces.

## 📂 Scripts
Run these from the root:

| Script           | Description                               |
| ---------------- | ----------------------------------------- |
| `bun run dev`    | Start the `project-a` app (frontend)      |
| `bun run dev:pg` | Start the `@mm/pg` package (backend?)     |
| `bun run build`  | Build all apps and packages               |
| `bun run clean`  | Clean all workspace builds (if supported) |

| Each workspace may have its own dev, build, and clean scripts.

### 🛠️ Developing
To start frontend and backend together (Linux/macOS):

```bash
bun run dev:pg & bun run dev
```
Or use a tool like bunx concurrently for more control.

### 🧪 Testing
Add test instructions here (Vitest, Jest, etc.)

### 📦 Publishing Packages
If any package in packages/ is meant to be published:

```bash
cd packages/pg
bun publish
```

### 📝 License
This project is private or licensed under [your license].

### 🙌 Acknowledgments
Built with ❤️ using Bun and modern monorepo practices.
