---
name: netlify-deployment
description: "Guidelines and checklists for successfully deploying and configuring static websites on Netlify."
category: deployment
risk: safe
source: self
source_type: self
date_added: "2026-06-29"
author: antigravity
tags: [netlify, deployment, hosting, git]
tools: [claude, cursor, gemini]
---

# Netlify Deployment Guide for Static Sites

## Overview

This skill provides guidelines and configurations for publishing static HTML5/CSS3/JS websites to Netlify, resolving routing issues, and managing assets.

## When to Use This Skill

- Use when preparing the site for deployment to Netlify.
- Use when debugging deployment errors, 404/page-not-found issues, or routing behaviors.
- Use when configuring custom headers, redirects, or Netlify functions.

## How It Works

### Netlify Core Rules
1. **Entry Point Requirement:**
   - Netlify serves `index.html` as the default entry point of the site. Ensure the main page is named `index.html` and placed in the root deploy folder.
2. **Path Case-Sensitivity:**
   - Netlify hosting is case-sensitive. Ensure file paths in HTML tags (e.g., `content/baja_logo.png`) exactly match the casing on the filesystem.
3. **Redirects configuration:**
   - For single-page applications or routing, use a `_redirects` file or `netlify.toml` in the deploy directory.

## Examples

### netlify.toml Configuration File
Place this file in the project root to manage build settings:
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### _redirects File
Alternatively, create a simple `_redirects` file in the root:
```text
/*    /index.html   200
```

## Best Practices

- ✅ Ensure the primary HTML file is named `index.html` rather than custom names like `baja.html` to avoid 404 errors.
- ✅ Always use relative paths (`./content/...`) or absolute root paths (`/content/...`) for styling and assets.
- ✅ Double check filename capitalization (e.g., `.png` vs `.PNG`) since local Windows dev is case-insensitive but Netlify Linux servers are case-sensitive.
- ❌ Do not upload temporary directories, build caches, or Git configuration files to the Netlify deploy folder.
