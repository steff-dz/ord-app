import { useState } from 'react';
//import styled from 'styled-components';
import { PageHeader, PageContainer } from '../styles';
import NumberForm from '../components/NumberForm';
import SkaterCard from '../components/SkaterCard';

const NumberPage = () => {
	const [ page, setPage ] = useState({ message: 'What number were you thinking?' });
	const [ inputNum, setInputNum ] = useState('');
	const [ skater, setSkater ] = useState('');

	return (
		<PageContainer>
			<NumberForm setPage={setPage} inputNum={inputNum} setInputNum={setInputNum} setSkater={setSkater} />
			<PageHeader>{page.message}</PageHeader>
			<SkaterCard skater={skater} />
		</PageContainer>
	);
};

export default NumberPage;
