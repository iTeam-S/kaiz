# kaiz

Before all:

```bash
$ ~ cd local
$ ~ docker compose -f compose.ollama.yaml up -d
```

Set environment variables:
```bash
export KAIZ_OLLAMA_HOST=...
export KAIZ_OLLAMA_MODEL=...
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To build:

- Linux:
```bash
$ ~ bun build --compile --minify ./index.ts  --target=bun-linux-x64 --outfile=bin/kaiz
```

- Windows:
```bash
$ ~ bun build --compile --minify ./index.ts  --target=bun-windows-x64 --outfile=bin/kaiz
```
