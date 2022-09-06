import React from 'react';

const About = () => {
	return (
		<div className='tc pa4'>
			<img src='robots/headerRobot.png' alt='robot' />
			<div className='dib pa3 ma3 ba br3'>
				<p>
				To make my first React app, I created some cute robots using Midjorney AI.
				You can see the source code following <a href='https://github.com/KatyaDru/robofriends' rel="noreferrer" target='_blank' className='link dark-green dim'>this link</a>.
				Midjorney is a Discord-bot that imagine pictures (in this case a robots) using custom keywords you can send to the bot.
				</p>
				<p>
				At this page you can see which keywords I'v used to create my own robots.
				Try it now!
				</p>
			</div>	
		</div>
	);
}

export default About;