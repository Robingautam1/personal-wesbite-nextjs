import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Robin Gautam | Digital Product Studio'
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
                    background: '#F4F3EE',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '24px solid #121212',
                    position: 'relative',
                }}
            >
                {/* Safety Orange Corner Accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '120px',
                        height: '120px',
                        background: '#F35815',
                    }}
                />

                {/* Top Left Decoration */}
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        display: 'flex',
                        gap: '10px'
                    }}
                >
                    <div style={{ width: 20, height: 20, background: '#121212' }} />
                    <div style={{ width: 20, height: 20, background: '#121212', opacity: 0.5 }} />
                    <div style={{ width: 20, height: 20, background: '#121212', opacity: 0.25 }} />
                </div>


                {/* Main Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    {/* Logo Mark - Scaled Up */}
                    <svg
                        width="150"
                        height="150"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20 20 H50 V35 H35 V45 H50 V60 H65 V80 H80 V20 H20 Z" fill="#121212" fillOpacity="0.1" />
                        <path d="M25 25 V75 H40 V60 H50 L60 75 H78 L65 55 C72 52 75 45 75 38 C75 28 68 25 55 25 H25 Z M40 38 H55 C58 38 60 40 60 42 C60 45 58 47 55 47 H40 V38 Z" fill="#121212" />
                    </svg>

                    {/* Typography */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            lineHeight: 1,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 100,
                                fontWeight: 900,
                                fontFamily: 'sans-serif',
                                color: '#121212',
                                letterSpacing: '-0.02em',
                                marginBottom: '10px',
                                textTransform: 'uppercase'
                            }}
                        >
                            ROBIN GAUTAM
                        </div>

                        <div
                            style={{
                                fontSize: 32,
                                fontWeight: 600,
                                fontFamily: 'monospace',
                                color: '#F35815',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Digital Product Studio
                        </div>
                    </div>
                </div>

                {/* Bottom Left Status */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '40px',
                        fontSize: 24,
                        fontFamily: 'monospace',
                        color: '#121212',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    <div style={{ width: 12, height: 12, background: '#10B981', borderRadius: '50%' }} />
                    <span>SYSTEM ONLINE</span>
                </div>

            </div>
        ),
        {
            ...size,
        }
    )
}
