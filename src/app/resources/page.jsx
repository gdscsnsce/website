import { Box, Grid, Typography } from '@mui/material';

// import Brand from '@/assets/graphics/logo_clouds.png';
import { FAQ, ImageLinkCard } from '@/components/client';
import faq from '@/data/faq.json';
import bannerImage from '@/assets/notgpl/googleathon.jpg';
import gdscLogo from '@/assets/notgpl/GDSC_SNSCE_logo.jpeg';

import { HeroLayout } from '@/layouts/HeroLayout';

export const metadata = {
	title: 'Resources',
};

/**
 * @returns {JSX.Element} The resources page
 */
const ResourcesPage = () => {
	return (
		<HeroLayout title={metadata.title} picture={gdscLogo} height="30rem" position="bottom" id="resources">
			<Grid container justifyContent="space-between" spacing={2} alignItems="flex-start">
				{/* <Grid item>
					<ImageLinkCard
						title="Workshop Archive"
						description="Check out our past workshops!"
						alt="Glimpse of Our Googleathon 1.0 Hackathon."
						href="/resources/workshops"
						height="auto"
						image={workshopImage} />
				</Grid> */}
				<Grid item>
					<ImageLinkCard
						title="Googleathon"
						description="Registration for the Googleathon Hackathon is now open!"
						alt="Googleathon Hackathon."
						href="/googleathon"
						height="auto"
						image={bannerImage} />
				</Grid>
				{/* <Grid item>
<ImageLinkCard
    title="Tech tips"
    description="Linus from Linus Tech Tips is a GDSC UTM member! :) Check out his tips here!"
    alt="" // todo
    href="/resources/tips"
    image={BannerImg}
/>
</Grid> */}
			</Grid>

			{/* opting to keep FAQ in this page to keep it more visible */}
			<h2 className="resources" id="faq">
				Frequently Asked Questions
			</h2>
			{Object.keys(faq).map((category, index) => {
				return (
					<Box
						sx={{
							mt: 2,
						}}
						key={index}
					>
						<Typography sx={{ marginBottom: 2 }} id={category}>
							{category}
						</Typography>

						{faq[category].map((faq, index) => {
							return <FAQ key={index} faq={faq} />;
						})}
					</Box>
				);
			})}
		</HeroLayout>
	);
};

export default ResourcesPage;
