# Miro Event Modeling Toolkit Documentation

## Structure

```
miro-eventmodeling-docs/
├── _config.yml              # Jekyll configuration
├── _layouts/                # HTML templates
│   ├── default.html        # Landing page layout
│   └── docs.html           # Documentation page layout
├── _includes/              # Reusable components
│   └── navigation.html     # Left sidebar navigation
├── assets/
│   └── css/
│       └── style.css       # Styles for the site
├── docs/                   # Documentation pages (Markdown)
│   ├── setup.md
│   ├── event-modeling.md
│   ├── basic-modeling.md
│   ├── advanced-modeling.md
│   ├── code-generation.md
│   └── ai-integration.md
└── index.md                # Landing page
```

## Running Locally

### Prerequisites

- Ruby 2.7 or higher
- Bundler

### Setup

1. Install dependencies:
```bash
gem install bundler jekyll
```

2. Create a Gemfile:
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3"
gem "minima", "~> 2.5"
```

3. Install gems:
```bash
bundle install
```

4. Run the site locally:
```bash
bundle exec jekyll serve
```

5. Open http://localhost:4000 in your browser

## Deploying to GitHub Pages

1. Push this repository to GitHub

2. Go to repository Settings → Pages

3. Configure source:
   - Source: Deploy from a branch
   - Branch: main (or master)
   - Folder: / (root)

4. Click Save

5. Your site will be available at: `https://[username].github.io/[repository-name]/`

## Customization

### Updating Content

Edit the Markdown files in the `docs/` directory. Jekyll will automatically convert them to HTML.

### Styling

Modify `assets/css/style.css` to change colors, fonts, and layout.

### Navigation

Update `_includes/navigation.html` to add or remove menu items.

### Configuration

Edit `_config.yml` to change site title, description, and other settings.

## Writing Documentation

Use standard Markdown syntax. Jekyll also supports:

- Front matter (YAML metadata at the top of files)
- Liquid templating
- Code syntax highlighting
- Tables and other GitHub-flavored Markdown features

Example page structure:

```markdown
---
layout: docs
title: Page Title
---

# Heading

Content goes here...

## Subheading

More content...
```

## Navigation Structure

The site includes:

1. **Landing Page** (`index.md`) - Overview and features
2. **Documentation Pages** with left sidebar navigation:
   - Setup
   - Event Modeling
   - Basic Modeling
   - Advanced Modeling
   - Code Generation
   - AI Integration

## Support

For issues or questions, please refer to the main toolkit documentation.
