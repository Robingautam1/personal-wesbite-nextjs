import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#F4F3EE', // Your Cream Background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #121212', // Industrial Border
                }}
            >
                {/* The "Safety Orange" Corner Accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '10px',
                        height: '10px',
                        background: '#F35815',
                    }}
                />

                {/* The "R" Monogram Text */}
                <div
                    style={{
                        color: '#121212',
                        fontFamily: 'sans-serif',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginTop: -2, // Optical alignment
                        marginLeft: -1,
                    }}
                >
                    R
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
