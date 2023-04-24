import styled from 'styled-components';
import { second, third } from '../../app-colors';

const FlexContainer = styled.div`
	display: flex;
`;

export const HeaderContainer = styled.header`
	height: 22vh;
	display: flex;
	flex-direction: column;
`;
export const TopContainer = styled(FlexContainer)`
	justify-content: space-between;
	align-items: center;
	padding: 0 1.88em;
	flex-grow: 1;
`;

export const H1 = styled.h1`
	font-size: 1.2rem;
	font-weight: normal;
`;

export const BottomContainer = styled.div`
	font-size: 0.8rem;
	background-color: ${second};
	padding: 0.4em 0;
	border-top: 2px #ebebeb solid;
	border-bottom: 2px #ebebeb solid;
`;

export const MonthContainer = styled(FlexContainer)`
	margin-left: auto;
	width: 87.5%;
	justify-content: space-around;
`;

export const WeekButton = styled.span`
	flex-grow: 1;
	text-align: center;
`;

export const DateField = styled.span`
	flex-grow: 5;
	text-align: center;
`;

export const DayContainer = styled(FlexContainer)`
	flex-direction: column;
`;

export const WeekContainer = styled(FlexContainer)`
	justify-content: space-around;
	margin-left: auto;
	width: 87.5%;
`;

export const DayValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const DateValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.4em;
	color: ${({ isToday }) => (isToday) ? "white" : "black"};
	background-color: ${({ isToday }) => (isToday) ? third : "none"};
	border-radius: 50%;
`;