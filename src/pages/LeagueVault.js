import React, { useState } from 'react';
import OsloPng from '../images/oslo.png';
import { PageHeader, PageContainer } from '../styles';
import styled from 'styled-components';
import Portrait from '../components/Portrait';
import { allSkaters } from '../Playerdata';

const ATeam = allSkaters.filter((skater) => skater.currTeam === 'Oslo A');
const ACrossOvers = allSkaters.filter((skater) => skater.currTeam === 'Oslo A, Oslo B');
const FullATeam = ATeam.concat(ACrossOvers);
const BTeamOnly = allSkaters.filter((skater) => skater.currTeam === 'Oslo B');
const FullBTeam = BTeamOnly.concat(ACrossOvers);
const HallOfFame = allSkaters.filter((skater) => skater.numReserve === true);
const Officials = allSkaters.filter((person) => person.currTeam === 'Officials');
const groups = [
	{
		name: 'Oslo Roller Derby Charter Team',
		value: 'Ateam'
	},

	{
		name: 'Oslo Tiger City Beasts',
		value: 'BTeam'
	},
	{
		name: 'Freshmeat',
		value: 'Fresh'
	},
	{
		name: 'NSOs & Refs',
		value: 'TeamNoFun'
	},
	{
		name: 'Coaches',
		value: 'bench'
	},
	{
		name: 'The Hall of Fame',
		value: 'Dinos'
	},
	{
		name: 'Inactive Members',
		value: 'Deserters'
	}
];

const LeagueVault = () => {
	const [ selectedTeam, setSelectedTeam ] = useState('');
	const [ displayedGroup, setDisplayedGroup ] = useState('Pick a team!');

	const teamHandler = (key, title) => {
		setDisplayedGroup(title);
		if (key === 'Ateam') {
			setSelectedTeam(FullATeam);
		} else if (key === 'BTeam') {
			setSelectedTeam(FullBTeam);
		} else if (key === 'TeamNoFun') {
			setSelectedTeam(Officials);
		} else {
			setSelectedTeam('');
		}
	};

	const renderedGroups = groups.map((group) => {
		return (
			<li onClick={() => teamHandler(group.value, group.name)} key={group.value}>
				{group.name}
			</li>
		);
	});

	return (
		<PageContainer style={{ paddingTop: '0' }}>
			<PageHeader style={{ fontSize: '7rem' }}>The Oslo Roller Derby Vault.</PageHeader>
			<ChantHeader>
				<i>"Oh, oh, oh OSLO!"</i>
			</ChantHeader>
			<ListContainer>
				<ul>{renderedGroups}</ul>
			</ListContainer>
			<LogoContainer>
				<img id="OrdHomeLogo" src={OsloPng} alt="Logo of Oslo Roller Derby." />
			</LogoContainer>
			<GallerySection>
				<h2>{displayedGroup}</h2>
				<GalleryContainer>
					{selectedTeam ? (
						selectedTeam.map((person) => (
							<Portrait
								number={person.number}
								name={person.name}
								key={person.number}
								icon={person.icon}
							/>
						))
					) : (
						''
					)}
				</GalleryContainer>
			</GallerySection>
		</PageContainer>
	);
};

const ChantHeader = styled.h2`
	color: #f18a36;
	font-size: 6rem;
	align-self: flex-start;
	position: absolute;
	top: 15vh;
	left: 22vw;
	margin-top: 1rem;
`;

const ListContainer = styled.article`
	position: absolute;
	top: 30vh;
	left: 10vw;
	font-size: 4.5rem;
	line-height: 5.5rem;

	ul {
		list-style: none;
	}

	li:hover {
		opacity: .5;
		cursor: pointer;
	}
`;

const LogoContainer = styled.div`
	position: absolute;
	top: 25vh;
	right: 15vw;

	img {
		height: 375px;
	}
`;

const GallerySection = styled.section`
	position: absolute;
	top: 90vh;
	height: fit-content;
	width: 80vw;

	h2 {
		margin-top: 4rem;
		font-size: 5rem;
		text-align: center;
	}
`;

const GalleryContainer = styled.div`
	margin-top: 2rem;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`;
export default LeagueVault;
