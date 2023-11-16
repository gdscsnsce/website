import { Box, Typography, Container, Grid } from '@mui/material';
import HeroTeam from '@/assets/notgpl/snsce.jpg';
import Brand from '@/assets/graphics/logo_clouds.png';
import { ErrorBoundary, HeroHeader, GoogleathonHero } from '@/components/client';
import { FAQ } from '@/components/client';
import faq from '@/data/GoogleathonFAQ.json';


const day1 = [
	{ time: '9:00 AM - 9:30 AM', event: 'Registration and Check-in' },
	{ time: '9:30 AM - 10:00 AM', event: 'Event Inauguration' },
	{ time: '10:00 AM - 10:30 AM', event: 'Problem Statements Announcement' },
	{ time: '10:30 AM - 12:30 PM', event: 'Hackathon Kick-off' },
	{ time: '12:30 PM - 1:30 PM', event: 'Lunch Break' },
	{ time: '1:30 PM - 3:00 PM', event: 'Hacking Session' },
	{ time: '3:00 PM - 3:30 PM', event: 'Refreshments' },
	{ time: '3:30 PM - 7:00 PM', event: 'Hacking Session' },
	{ time: '7:30 PM - 8:30 PM', event: 'Dinner Break' },
	{ time: '8:30 PM - 11:00 PM', event: 'Hacking Session' },
	{ time: '11:00 PM - 11:30 PM', event: 'Midnight Snack and Energizer Activities' },
  ];

const day2 = [
	{ time: '7:00 AM - 9:00 AM', event: ' Final Hacking Session and Submission' },
	{ time: '9:00 AM - 9:30 AM', event: ' Breakfast' },
	{ time: '10 AM', event: 'Project Submission Deadline' },
	{ time: '10:00 AM - 12:00 PM', event: 'Project Presentations' },
	{ time: '12:00 AM - 12:30 AM', event: 'Prize Distribution and Closing Ceremony' }
];

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
						The Googleathon 2.0 Hackathon is an opportunity for students to collaborate and innovate by designing and
						implementing solutions to real-world problems with a focus on creating a positive impact. This challenge
						encourages you to apply your programming, problem-solving, and teamwork skills to develop solutions that
						can make a difference for the greater good.
					</Typography>
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						The hackathon will be held on <strong>November 20th and 21st, 2023</strong>. The event is open to all undergraduate students
						from all disciplines. You can participate as a duo or a team of up to 4 members. The hackathon
						will be conducted offline, and the participants will have access to various resources and mentors to help
						them throughout the event. 
					</Typography>
				</Container>
			</section>

			<section id="agenda">
					<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Agenda
					</Typography>
					<Typography color="text.primary" variant="h5" fontWeight="bold" lineHeight="2.5em">Day 1</Typography>
					{day1.map((item, index) => (
						<Box key={index} sx={{ mt: 2 }}>
						<Typography color="text.primary" variant="h6">
							{item.time}
						</Typography>
						<Typography color="text.primary" variant="body1">
							{item.event}
						</Typography>
						</Box>
					))}
					<Typography color="text.primary" variant="h5" fontWeight="bold" lineHeight="2.5em">Day 2</Typography>
					{day2.map((item, index) => (
						<Box key={index} sx={{ mt: 2 }}>
						<Typography color="text.primary" variant="h6">
							{item.time}
						</Typography>
						<Typography color="text.primary" variant="body1">
							{item.event}
						</Typography>
						</Box>
					))}
					</Container>
			</section>

			{/* prizes */}
			<section id="prizes">
				<HeroHeader text="Prizes" picture={HeroTeam} maxWidth="md" />
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						There will be exciting prizes for the top 3 teams. The winners will also get a chance to present their
						solutions to industry experts and get feedback on their work. All participants will receive a certificate 
						recognized by Google Developer Students Club - SNS College of Engineering.
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<div style={{ border: '2px solid aqua', borderRadius: '20px', padding: '10px' }}> 
								<Typography variant="h6" component="div">
									Winner
								</Typography>
								<Typography variant="body1" component="div">
									Rs. 5000
								</Typography>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div style={{ border: '3px solid green', borderRadius: '20px', padding: '10px' }}>
								<Typography variant="h6" component="div">
									First Runner Up
								</Typography>
								<Typography variant="body1" component="div">
									Rs. 2500
								</Typography>
							</div>
						</Grid>
						<Grid item xs={4}>
							<div style={{ border: '2px solid orange', borderRadius: '20px', padding: '10px' }}>
								<Typography variant="h6" component="div">
									Second Runner Up
								</Typography>
								<Typography variant="body1" component="div">
									Rs. 1250
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div style={{ border: '2px solid white', borderRadius: '20px', padding: '10px' }}>
								<Typography variant="h6" component="div" style={{ textAlign: 'center' }}>
									Participation Certificates + Goodies
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>

			{/* register */}
			<section id="register">
				<HeroHeader text="Register Now" picture={Brand} maxWidth="md" />
				<Container sx={{ py: 8, lineHeight: '2em' }} maxWidth="md">
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						Registration for the Googleathon Hackathon is now open. To register, please fill out the registration form
						by <strong>November 19th, 2023.</strong> You can participate as an individual or as a team of up to 4 members.
					</Typography>
					<Typography color="text.primary" sx={{ py: 2 }} variant="body1">
						<a href="https://forms.gle/akLGcTLd4Sd9iM3p9" 
						style={{ 
							color: 'red', 
							fontSize: '20px', 
							textDecoration: "none", 
							border: '2px solid red', 
							borderRadius: '10px', 
							padding: '10px'
						}}  
						target="_blank" 
						rel="noopener noreferrer" >
						Register Now
						</a>
					</Typography>
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