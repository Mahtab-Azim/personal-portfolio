import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: '-2px',
          color: '#5B3FD9', // var(--accent-vivid)
          paddingRight: '2px', // to center it visually because of negative letter spacing
        }}
      >
        MA
      </div>
    ),
    {
      ...size,
    }
  );
}
