# TurfRentals.ca

Production website: https://turfrentals.ca

## Development

Requires Node.js 22.13+ and pnpm. Run `pnpm install`, then `pnpm dev`. Run `pnpm exec tsc --noEmit` for type checking and `pnpm build` for the production Worker build.

Built with React, Vinext, Vite and Cloudflare Workers. `.openai/hosting.json` retains the existing Sites project identity. Do not create another Sites project when deploying an update.

## Quote requests

The shared contact form sends directly to the existing Formspree endpoint `mwlkqabj`. It validates required fields, prevents duplicate clicks, times out after 20 seconds, retains details on failure, and shows success only after a successful JSON response. Confirm receipt in the intended mailbox before considering email delivery verified. Formspree account configuration is managed outside this repository.

## Languages

English content includes service and location guides. `/fr` provides a French landing page, service overview and inquiry form; `/fr/privacy` provides the French privacy notice. All nine service guides and six city pages now have French counterparts at `/fr/services` and `/fr/locations`, with matching-page language switches and reciprocal language metadata. French versions of About, How It Works, Turf Options, Rental Cost, Gallery and Contact complete the remaining page coverage.

## Publication and backup

Sites owns production publishing. This GitHub repository is a source and asset backup; pushing here does not automatically publish the live site. Build output and dependencies are intentionally excluded. No credentials should be committed.
