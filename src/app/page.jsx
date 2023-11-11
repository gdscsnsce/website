import { Container, Typography } from '@mui/material';
import HeroInfoSesh from '@/assets/notgpl/info-session.jpg';
import HeroTeam from '@/assets/notgpl/team.jpg';
import { ErrorBoundary, EventList, HeroHeader, HomepageHero } from '@/components/client';
import { ExpiryContainer, Team } from '@/components/server';

import teamMembers from '@/data/team.json';

export const metadata = {
	title: "Home - GDSC SNSCE",
};

const Homepage = () => {
	return (
		<main id="home">
			{/* hero */}
			<HomepageHero />

			{/* upcoming events */}
			<section id="upcoming-events">
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Upcoming Events
					</Typography>
					<ErrorBoundary>
						<EventList from={new Date()} />
					</ErrorBoundary>
				</Container>
			</section>

			{/* about / who are we */}
			<section id="who-are-we">
				<HeroHeader text="Who are we?" picture={HeroInfoSesh} maxWidth="md" position="top" />
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
					<p>
						<dfn id="gsdc-defn">Google Developer Student Clubs</dfn> (<abbr>GDSC</abbr>) is a
						student-led community backed by Google Developers aimed at empowering undergraduate students
						from all disciplines to grow their knowledge in technology, build solutions for their local
						communities, and connect with other members from the Google community.
					</p>
					<h3>Creating impact and empowering students through technology</h3>
					<p>
						Whether you are new to software development or you&rsquo;ve been developing for quite a
						while, GDSC is a place where you can learn new technologies, make your ideas a reality, and
						collaborate to solve real-world problems. In addition to solving problems, GDSC will allow
						you to connect with other technology enthusiasts from other GDSC chapters and the Google
						Developer Community. We will be hosting events and activities for all students throughout
						the academic year. We hope to see you there!
					</p>
				</Container>
			</section>
			{/* team list */}
			<section id="meet-the-team">
				<ExpiryContainer date={'2024-06-30'}>
					<HeroHeader text="Meet the team" picture={HeroTeam} maxWidth="md" />
					<Container sx={{ py: 8, px: 0 }} maxWidth="md">
						<ErrorBoundary>
							{Object.keys(teamMembers).map((subteam, index) => {
								return <Team key={index} teamInfo={teamMembers[subteam]} title={subteam} />;
							})}
						</ErrorBoundary>
					</Container>
				</ExpiryContainer>
			</section>
		</main>
	);
};

export default Homepage;
