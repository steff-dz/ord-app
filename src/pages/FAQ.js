import React, { useState } from 'react';
import { PageHeader, PageContainer } from '../styles';
import { questItems } from '../Questions';
import Accordion from '../components/Accordion';

const FAQ = () => {
	const [ activeIndex, setActiveIndex ] = useState(null);
	return (
		<PageContainer>
			<PageHeader style={{ marginBottom: '10px' }}>Frequently Asked Questions</PageHeader>
			<Accordion questItems={questItems} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
		</PageContainer>
	);
};

export default FAQ;
