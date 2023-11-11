import { Box, Typography, Container } from '@mui/material';
import HeroTeam from '@/assets/notgpl/team.jpg';
import Brand from '@/assets/graphics/logo_clouds.png';
import { ErrorBoundary, HeroHeader, GoogleathonHero } from '@/components/client';
import { FAQ } from '@/components/client';
import faq from '@/data/GoogleathonFAQ.json';

export const metadata = {
	title: 'Googleathon',
};

/**
 * @returns {JSX.Element} The Googleathon page
 */
const GoogleathonPage = () => {
	return (
		<main id="home">
			{/* hero */}
			<section id="hero">
				<GoogleathonHero />
			</section>
			{/* about the hackathon */}
			<section id="about-hackathon">
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						About the Hackathon
					</Typography>
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						The Googleathon Hackathon is an opportunity for students to collaborate and innovate by designing and
						implementing solutions to real-world problems with a focus on creating a positive impact. This challenge
						encourages you to apply your programming, problem-solving, and teamwork skills to develop solutions that
						can make a difference for the greater good.
					</Typography>
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						The hackathon will be held on November 20th and 21st, 2023. The event is open to all undergraduate students
						from all disciplines. You can participate as an individual or as a team of up to 4 members. The hackathon
						will be conducted virtually, and the participants will have access to various resources and mentors to help
						them throughout the event.
					</Typography>
				</Container>
			</section>

			{/* prizes */}
			<section id="prizes">
				<HeroHeader text="Prizes" picture={HeroTeam} maxWidth="md" />
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						There will be exciting prizes for the top 3 teams. The winners will also get a chance to present their
						solutions to industry experts and get feedback on their work.
					</Typography>
				</Container>
			</section>

			{/* register */}
			<section id="register">
				<HeroHeader text="Register Now" picture={Brand} maxWidth="md" />
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						Registration for the Googleathon Hackathon is now open. To register, please fill out the registration form
						by November 18th, 2023. You can participate as an individual or as a team of up to 4 members.
					</Typography>
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						<a href="https://forms.gle/xxxxxxxxxxxxxxx" target="_blank" rel="noopener noreferrer">
							Register Now
						</a>
					</Typography>
				</Container>
			</section>

			{/* team list */}
			<section id="meet-the-team">
				<HeroHeader text="Meet the Organizers" picture={HeroTeam} maxWidth="md" />
				<Container sx={{ py: 8, px: 0 }} maxWidth="md">
					<ErrorBoundary>
						{/* TODO: Add organizer details */}
					</ErrorBoundary>
				</Container>
			</section>
			<section id="faq">
				{/* opting to keep FAQ in this page to keep it more visible */}
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
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
					</Container>
			</section>
		</main>
	);
};

export default GoogleathonPage;