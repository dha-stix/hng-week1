import React from "react";
import zuri from "./images/zuri.svg";
import ingressive from "./images/ingressive.png";
import slack from "./images/slack.png";
import github from "./images/github.png";

const App = () => {
	const links = [
		{
			id: "1",
			url: "https://twitter.com/dayvid_JS",
			name: "Twitter Link",
		},
		{
			id: "2",
			url: "https://training.zuri.team/",
			name: "Zuri Team",
			element_id: "btn__zuri",
		},
		{
			id: "3",
			url: "http://books.zuri.team",
			name: "Design & Coding Handbooks",
			element_id: "books",
		},
		{
			id: "4",
			url: "https://books.zuri.team/python-for-beginners?ref_id=dhastix",
			name: "Basic Coding Book for Kids now available",
			element_id: "book__python",
		},
		{
			id: "5",
			url: "https://background.zuri.team",
			name: "Get career guides for your tech career",
			element_id: "pitch",
		},
		{
			id: "6",
			url: "https://books.zuri.team/design-rules",
			name: "Improve your design skills with this free E-book",
			element_id: "book__design",
		},
	];
	return (
		<main className='main'>
			<div className='profile'>
				<img
					src='https://media-exp1.licdn.com/dms/image/C4D03AQEh7OUyleYRLg/profile-displayphoto-shrink_400_400/0/1652050043924?e=1672272000&v=beta&t=klrHvM9mr-TpUt6W2n9Dv3WqyhVbwzEgzx5Exx-S3mc'
					alt='David Asaolu'
					id='profile__img'
				/>
				<h2 id='twitter'>Dayvid_JS</h2>
				<h2 id='slack'>Dha Stix</h2>
			</div>

			<div className='links'>
				{links.map((link) => (
					<a
						href={link.url}
						target='_blank'
						rel='noreferrer'
						className='link'
						key={link.id}
						id={link.element_id}
					>
						{link.name}
					</a>
				))}
			</div>

			<div className='icons'>
				<img src={slack} alt='Slack Icon' className='small__icons' />
				<img src={github} alt='Github Icon' className='small__icons' />
			</div>

			<footer className='footer'>
				<div className='zuri'>
					<img src={zuri} alt='Zuri' />
				</div>
				<p style={{ opacity: 0.5 }}>HNG Internship 9 Frontend Track</p>
				<div className='ingressive'>
					<img
						src={ingressive}
						alt='Ingressive for Good'
						style={{ height: "100px" }}
					/>
				</div>
			</footer>
		</main>
	);
};

export default App;
