"use client";
import React from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LockIcon from '@mui/icons-material/Lock';
import WalletIcon from '@mui/icons-material/Wallet';
import SmsIcon from '@mui/icons-material/Sms';
import HowToRegIcon from '@mui/icons-material/HowToReg';
const SideBarComponent = () => {
	const sidebarItems = [
		{
			label: 'Library Management',
			items: [
				{ icon: <AddHomeIcon className="text-blue-950 text-4xl mx-4" />, text: 'Home', link: '/dashboard' },
				{ icon: <WalletIcon className="text-blue-950 text-4xl mx-4" />, text: 'View Books', link: '/view-books' },
				{ icon: <LockIcon className="text-blue-950 text-4xl mx-4" />, text: 'Add Books', link: '/add-book' },
				{ icon: <AssignmentTurnedInIcon className="text-blue-950 text-4xl mx-4" />, text: 'Search Books', link: '/search-books' },
				{ icon: <HowToRegIcon className="text-blue-950 text-4xl mx-4" />, text: 'Manage Members', link: '/manage-members' }
			]
		},
		{
			label: 'Account Management',
			items: [
				{ icon: <SettingsIcon className="text-blue-950 text-4xl mx-4" />, text: 'System Setup', link: '/setup' },
				{ icon: <SmsIcon className="text-blue-950 text-4xl mx-4" />, text: 'Log out', link: '/' }
			]
		}
	];
	return (
		<>
			<div className='mt-20 mr-4 bg-transparent'>
				<Sidebar rootStyles={{
					[`.${sidebarClasses.container}`]: {
						backgroundColor: "transparent",
						height: '80vh',
					},
					breakPoint: "sm",
					width: 160,
					collapsed: true,
					closeOnClick: true,
					toggled: true
				}}>
					<Menu>
						{sidebarItems.map((section, index) => (
							<div key={index}>
								<h4 className="text-blue mx-4">{section.label}</h4>
								{section.items.map((item, itemIndex) => (
									<MenuItem key={itemIndex} href={item.link}>
										{item.link ? (
											<>{item.icon} {item.text}</>
										) : (
											<>{item.icon} {item.text}</>
										)}
									</MenuItem>
								))}
							</div>
						))}
					</Menu>
				</Sidebar>
			</div>
		</>
	);
};

export default SideBarComponent;
