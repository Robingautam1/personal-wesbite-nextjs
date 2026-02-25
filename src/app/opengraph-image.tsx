import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Match the new metadata text here
export const alt = 'Robin Gautam Studio | Engineering Business Outcomes'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#121212', // Industrial Black
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '20px solid #F4F3EE', // Cream Border Frame
                }}
            >
                {/* The "RG" Monogram */}
                <div style={{ display: 'flex', marginBottom: 40 }}>
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="2" y="2" width="96" height="96" stroke="#F4F3EE" strokeWidth="4" />
                        <rect x="70" y="70" width="30" height="30" fill="#F35815" />
                        <path
                            d="M25 25 V75 H40 V60 H50 L60 75 H78 L65 55 C72 52 75 45 75 38 C75 28 68 25 55 25 H25 Z M40 38 H55 C58 38 60 40 60 42 C60 45 58 47 55 47 H40 V38 Z"
                            fill="#F4F3EE"
                        />
                    </svg>
                </div>

                {/* The New "Studio" Headline - Neutral & Powerful */}
                <div
                    style={{
                        color: '#F4F3EE',
                        fontSize: 60,
                        fontFamily: 'sans-serif',
                        fontWeight: 900,
                        textAlign: 'center',
                        letterSpacing: '-0.02em',
                        marginBottom: 20,
                        textTransform: 'uppercase',
                    }}
                >
                    DIGITAL PRODUCT STUDIO
                </div>

                {/* The Subtext - Outcome Focused */}
                <div
                    style={{
                        color: '#F35815', // Brand Orange
                        fontSize: 30,
                        fontFamily: 'monospace',
                        textAlign: 'center',
                        letterSpacing: '0.05em',
                    }}
                >
                    ROBINGAUTAM.IN /// ENGINEERING OUTCOMES
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
