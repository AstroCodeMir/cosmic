# CF-011 — Business Positioning & Services

## Overview

Cosmic is presented as a digital development studio serving businesses with modern websites, custom business systems, and ongoing technical support.

## Implemented

- Updated the hero value proposition and calls to action.
- Added Services navigation and anchor targets.
- Added three capability-based service cards:
  - Website Development
  - Custom Business Systems
  - Maintenance & Technical Support
- Reused the existing contact destinations and project imagery.
- Preserved the astronaut layer and existing project section behavior.
- Added restrained soft-violet styling overrides.
- Preserved mobile navigation structure and reduced-motion CSS handling.

## Architecture

BusinessApp.jsx owns the CF-011 presentation and service data. AstronautLayer remains the existing animation component. business.css contains the focused brand and services overrides.

## Testing

Completed: npm run lint passed with no errors. npm run build passed and generated the production bundle in dist/.

Not performed: interactive browser QA was not run in this environment, so visual breakpoint inspection, keyboard traversal, mobile menu interaction, and live reduced-motion behavior remain to be checked manually.

## Known limitations

- The existing AstroCodeMir App.jsx remains in the repository for preservation and comparison; main.jsx now loads the CF-011 application entry.
- Contact destinations remain the existing email, GitHub, and LinkedIn links.
- Service cards describe development capabilities and do not claim completed deployments.

## Status

Implemented; browser QA remains outstanding.
