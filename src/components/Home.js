


import * as React from 'react';

import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';

// disable flip for this demo
// https://popper.js.org/docs/v2/modifiers/flip/
const modifiers = [
    {
        name: 'flip',
        options: {
            fallbackPlacements: ['bottom'],
        },
    },
];

export default function Home() {
    const [color, setColor] = React.useState('danger');
    return (
        <Card
            orientation="horizontal"
            variant="solid"
            color={color}
            invertedColors
            sx={{
                gap: 10,
                minHeight: 240,
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexGrow: 1,
                zIndex: 0,
            }}
        >

            <IconButton
                sx={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    borderRadius: '50%',
                }}
                onClick={() => {
                    const colors = [
                        'primary',
                        'neutral',
                        'danger',
                        'info',
                        'success',
                        'warning',
                    ];

                    const nextColor = colors.indexOf(color);
                    setColor(colors[nextColor + 1] ?? colors[0]);
                }}
            >
                🎨
            </IconButton>
        </Card>
    );
}
