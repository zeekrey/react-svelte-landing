import { greenDark, sageDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/core';

export const { css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches(
	{
		theme: {
			colors: {
				...greenDark,
				...sageDark
			},
			space: {
				1: '5px',
				2: '10px',
				3: '15px',
				4: '20px',
				5: '25px'
			},
			shadows: {
				...greenDark,
				...sageDark
			}
		},
		media: {
			sm: '(min-width: 640px)',
			md: '(min-width: 768px)',
			lg: '(min-width: 1024px)'
		}
	}
);