import HeroImage from '@/assets/backgrounds/background.jpg';
import HeroImageDark from '@/assets/backgrounds/background_dark.jpg';
import wordmark from 'src/assets/notgpl/coralflow_training.png';
import { SkeletonLoadedImage, THEME } from '@/components/client';
import { alpha, Box, Container, Typography, useTheme } from '@mui/material';
import './CoralflowHero.scss';

/**
 * @returns {JSX.Element} Hero header for the homepage.
 */
export const CoralflowHero = () => {
	const theme = useTheme();

	return (
		<section>
			<Box
				sx={{
					background:
						'linear-gradient(' +
						theme.palette.background.default +
						' 0%,' +
						alpha(theme.palette.background.default, 0.8) +
						'69%,' +
						theme.palette.background.default +
						' 100%), url(' +
						(theme.palette.mode === THEME.DARK ? HeroImageDark.src : HeroImage.src) +
						') no-repeat',
					backgroundSize: 'cover',
					marginBottom: '-15vh',
					pb: 6,
					pt: 8,
				}}
			>
				<Container maxWidth="sm" sx={{ height: '50vh', position: 'relative' }}>
					<Typography
						align="center"
						color="text.primary"
						component="h1"
						gutterBottom
						sx={{
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
							height: '50vh',
							justifyContent: 'center',
							margin: 'auto',
							userSelect: 'none',
						}}
						variant="h2"
					>
						<SkeletonLoadedImage
							alt="Google Developer Student Clubs SNS College of Engineering"
							fill="100%"
							id="gdsc-wordmark"
							src={wordmark}
							style={{ objectFit: 'contain' }}
						/>
					</Typography>
				</Container>
			</Box>
		</section>
	);
};
