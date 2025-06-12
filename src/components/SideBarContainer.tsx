"use client";
import React from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import {
	Users,
	BookOpen,
	Upload,
	Bell,
	ShieldCheck,
} from "lucide-react";

const SideBarComponent = () => {
	const sidebarItems = [
		{
			label: "Posts",
			items: [
				{
					icon: <Users className="text-white" />,
					text: "posts",
					link: "/timeline",
				},
			],
		},
		{
			label: "Learning",
			items: [
				{
					icon: <BookOpen className="text-white" />,
					text: "Learning",
					link: "/learning",
				},
			],
		},
		{
			label: "Contribution",
			items: [
				{
					icon: <Upload className="text-white" />,
					text: "Contribution",
					link: "/contribution",
				},
			],
		},
		{
			label: "Notifications",
			items: [
				{
					icon: <Bell className="text-white" />,
					text: "Notifications",
					link: "/notifications",
				},
			],
		},
		{
			label: "Sell",
			items: [
				{
					icon: <ShieldCheck className="text-white" />,
					text: "sell",
					link: "/sell",
				},
			],
		},
	];

	return (
		<div className="mt-20 ml-4 w-full">
			<Sidebar
				rootStyles={{
					[`.${sidebarClasses.container}`]: {
						backgroundColor: "#1e293b", // Tailwind's slate-800
						color: "#f8fafc", // Tailwind's slate-50
						borderRadius: "0.5rem",
						padding: "1rem",
						width: "220px",
					},
				}}
			>
				<Menu>
					{sidebarItems.map((section, index) => (
						<div key={index} className="mb-4">
							<h4 className="text-slate-300 uppercase text-xs font-semibold tracking-wider px-2 mb-2">
								{section.label}
							</h4>
							{section.items.map((item, itemIndex) => (
								<MenuItem
									key={itemIndex}
									component={<a href={item.link} />}
									icon={item.icon}
									className="text-sm hover:bg-slate-700 hover:text-slate-950 rounded-md transition-all duration-200 px-2 py-1 w-full"
								>
									{item.text}
								</MenuItem>
							))}
						</div>
					))}
				</Menu>
			</Sidebar>
		</div>
	);
};

export default SideBarComponent;
