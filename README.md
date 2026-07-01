# JSON Comparison Platform

> Professional JSON Comparison Platform - Production-ready web application similar to JSONDiff.com but with modern UI, richer functionality, and enterprise-grade performance.

## 🚀 Features

### Core Functionality
- **Advanced JSON Comparison**: Deep recursive comparison with smart diff detection
- **Dual Monaco Editors**: Syntax highlighting, code folding, auto-format
- **Multiple Views**: Tree view, table view, side-by-side visual comparison
- **Smart Diff Engine**: Detects added, removed, modified, moved, and reordered fields
- **JSON Patch Generation**: RFC6902 and Merge Patch support
- **Merge Tool**: Interactive merge with conflict resolution

### Data Handling
- Drag & drop file upload
- Paste JSON directly
- Load from URL
- Support for JSON, YAML, CSV, and more
- 100MB+ JSON file support
- Web Worker-based processing

### Analysis & Validation
- JSON Schema Validation
- Comprehensive Statistics
- JSONPath Search with Regex
- Schema Update Recommendations
- Duplicate Key Detection

### Export & Sharing
- Multiple formats: JSON, TXT, CSV, HTML, Markdown, PDF
- Diff reports and visualizations
- Image export with html2canvas
- Copy to clipboard

### User Experience
- Dark/Light mode support
- Glassmorphism UI with Tailwind CSS
- Responsive design (desktop-first)
- Keyboard shortcuts
- Accessibility (WCAG AA)
- Real-time comparison option

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Editor**: Monaco Editor
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Diff Engine**: jsondiffpatch
- **Validation**: AJV + Zod
- **Animations**: Framer Motion
- **Virtual Scrolling**: react-window
- **Export**: jsPDF, html2canvas, file-saver
- **Testing**: Vitest

## 📁 Project Structure

```
json-compare-platform/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── editors/
│   │   │   ├── MonacoEditor.tsx
│   │   │   ├── EditorPanel.tsx
│   │   │   └── EditorToolbar.tsx
│   │   ├── comparison/
│   │   │   ├── ComparisonView.tsx
│   │   │   ├── DiffViewer.tsx
│   │   │   ├── TreeView.tsx
│   │   │   └── TableView.tsx
│   │   ├── tools/
│   │   │   ├── JsonFormatter.tsx
│   │   │   ├── JsonValidator.tsx
│   │   │   ├── JsonPatchGenerator.tsx
│   │   │   ├── MergeTool.tsx
│   │   │   └── SchemaValidator.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── Toast.tsx
│   │   └── ErrorBoundary.tsx
│   ├── hooks/
│   │   ├── useJsonComparison.ts
│   │   ├── useFileUpload.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useTheme.ts
│   │   └── useKeyboardShortcuts.ts
│   ├── utils/
│   │   ├── jsonComparison.ts
│   │   ├── jsonFormatting.ts
│   │   ├── jsonValidation.ts
│   │   ├── jsonPatch.ts
│   │   ├── fileHandling.ts
│   │   ├── export.ts
│   │   ├── statistics.ts
│   │   └── performance.ts
│   ├── stores/
│   │   ├── comparisonStore.ts
│   │   ├── editorStore.ts
│   │   ├── settingsStore.ts
│   │   └── uiStore.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── worker.ts
│   │   └── validation.ts
│   ├── types/
│   │   ├── index.ts
│   │   ├── comparison.ts
│   │   ├── editor.ts
│   │   └── settings.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── index.html
│   └── favicon.svg
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── .gitignore
├── eslintrc.json
├── prettier.config.js
├── tailwind.config.js
├── postcss.config.js
├── vitest.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/shekharkashyap-AD/json-compare-platform.git
cd json-compare-platform

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Enter` | Compare |
| `Ctrl+B` | Beautify |
| `Ctrl+M` | Minify |
| `Ctrl+F` | Search |
| `Ctrl+Shift+F` | JSONPath Search |
| `Ctrl+S` | Download |
| `Ctrl+L` | Clear |
| `Ctrl+Shift+D` | Toggle Diff View |
| `Ctrl+Shift+T` | Toggle Tree View |

## 🧪 Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test -- --watch

# UI mode
npm run test:ui

# Coverage
npm run test:coverage
```

## 📦 Build Output

The production build is optimized with:
- Code splitting for Monaco Editor, JSON tools, and UI components
- Minification and tree-shaking
- Source maps for debugging (optional)
- Gzip compression ready

## 🌐 API Endpoints

When API mode is enabled:

```
POST /api/compare
POST /api/validate
POST /api/patch
POST /api/merge
GET  /api/format
GET  /api/statistics
```

## 📖 Documentation

- [Components Guide](./docs/components.md)
- [Utilities Guide](./docs/utilities.md)
- [API Documentation](./docs/api.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🎯 Roadmap

- [ ] AI-powered diff explanations
- [ ] Batch comparison tool
- [ ] Real-time collaboration
- [ ] Version history tracking
- [ ] Custom comparison rules
- [ ] Performance profiling tools
- [ ] Plugin system

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow the [Contributing Guide](./CONTRIBUTING.md).

## 💬 Support

For support, please open an issue on GitHub or contact us at support@example.com.
