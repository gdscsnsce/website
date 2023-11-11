import { Typography } from '@mui/material';

import { ResourceLayout } from '@/layouts/ResourceLayout';

export const metadata = {
	title: 'Tech Tips',
};

/**
 * @returns {JSX.Element} The tech tips widget
 */
const TechTips = () => {
	return (
		<ResourceLayout title={metadata.title} id="tech-tips">
			<Typography variant="h2" component="h2" gutterBottom>
				Coming Soon!
			</Typography>
		</ResourceLayout>
	);
};

export default TechTips;
