# EuroSnap Remotion Promo Video

This folder contains the public Remotion/React source for the EuroSnap promo animation.

It is included as portfolio/showcase code. It does not include the private production bot backend.

## Commands

```console
npm install
npm run dev
npm run lint
npx remotion render EurosnapAd
```

## Structure

- `src/EuroSnapAd.tsx`: composition layering and scene sequencing.
- `src/Root.tsx`: Remotion composition registration.
- `src/lib/timing.ts`: frame counts, scene starts, and fade helpers.
- `src/lib/theme.ts`: shared visual tokens.
- `src/components/`: reusable animation and phone mockup pieces.
- `src/scenes/`: hook, problem, solution, demo, and CTA scenes.
- `public/fonts/`: local Poppins font assets.
- `public/audio/`: promo audio stem.

## Composition

- ID: `EurosnapAd`
- Size: 1920 x 1080
- FPS: 30
- Duration: 750 frames

This code is safe to publish because it is product marketing/animation code, not the private alerting backend.
