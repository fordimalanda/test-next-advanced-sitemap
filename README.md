# Test Next Advanced Sitemap

This repository serves as a live demonstration and integration test for the `next-advanced-sitemap` library. It validates the generation of complex XML sitemaps within a Next.js environment using Route Handlers.

## Live Demo

The generated sitemap can be viewed at:
https://test-next-advanced-sitemap.vercel.app/sitemap.xml

## Technical Overview

This project implements a full-featured sitemap that includes:
- **Internationalization**: Implementation of `xhtml:link` tags for multi-regional SEO.
- **Media Support**: Advanced tags for Google Images and Google Video.
- **News Integration**: Specialized Google News tags including publication metadata.
- **Type Safety**: Usage of `SitemapEntry` types to ensure schema compliance.

## How to Inspect the Output

Most modern web browsers (Chrome, Edge, Firefox) may render raw XML as a continuous text string if no XSL stylesheet is provided. To view the structured XML hierarchy as intended for search engines:

1. Navigate to the [Live Demo](https://test-next-advanced-sitemap.vercel.app/sitemap.xml).
2. Right-click anywhere on the page.
3. Select **View Page Source** (or press `Ctrl + U` on Windows/Linux, `Cmd + U` on macOS).

This will display the properly formatted XML tags that are consumed by Googlebot and other web crawlers.

## Implementation Details

The sitemap is generated dynamically via a Next.js Route Handler located at `app/sitemap.xml/route.ts`. It utilizes the `getServerSitemapResponse` function from the core library to set the appropriate `Content-Type` headers and transform JavaScript objects into valid XML.

## Library Reference

For the core library source code and documentation, visit:
https://github.com/fomadev/next-advanced-sitemap