import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 130, // Scaled up font size
                    background: '#F4F3EE', // Your Cream Background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '12px solid #121212', // Scaled up border
                }}
            >
                {/* The "Safety Orange" Corner Accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '40px', // Scaled up
                        height: '40px', // Scaled up
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
                        marginTop: -10, // Optical alignment
                        marginLeft: -4,
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
