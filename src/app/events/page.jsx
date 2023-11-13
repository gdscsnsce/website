import { Alert, Typography } from '@mui/material';

import { ErrorBoundary, EventList } from '@/components/client';
import { Link } from '@/components/server';

import { HeroLayout } from '@/layouts/HeroLayout';

import bannerImage from '@/assets/notgpl/past_googleathon_event.jpg';

export const metadata = {
	title: 'Events',
};

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	return (
		<HeroLayout title={metadata.title} picture={bannerImage} position="bottom" id="events">
			<noscript>
				<Alert severity="warning">
					You need JavaScript to view events. You may view previous events at the{' '}
					<Link external href="https://gdsc.community.dev/sns-college-of-engineering-coimbatore/">
						GDSC SNSCE Community page
					</Link>
				</Alert>
			</noscript>
			<section>
				<Typography
					color="text.primary"
					component="h2"
					fontWeight="bold"
					lineHeight="2.5em"
					variant="h4"
					id="upcoming-events"
				>
					Upcoming Events
				</Typography>
				<ErrorBoundary>
					<EventList from={new Date()} />
				</ErrorBoundary>
			</section>
			<section>
				<Typography
					color="text.primary"
					component="h2"
					fontWeight="bold"
					lineHeight="2.5em"
					variant="h4"
					id="past-events"
				>
					Past Events
				</Typography>
				<ErrorBoundary>
					<EventList to={new Date()} skeleton={9} />
				</ErrorBoundary>
			</section>
		</HeroLayout>
	);
};

export default Events;
