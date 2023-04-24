import styled from 'styled-components';
import { forth, eventColor, selectedHolderColor } from '../../app-colors';

const FlexContainer = styled.div`
	display: flex;
`;

export const CalendarCanvasContainer = styled.main`
	display: flex;
	height: 71vh;
	overflow-y: scroll;
	font-size: 0.8rem;
`;

export const HoursContainer = styled.div`
	width: 12.5%;
	height: fit-content;
`;

export const Hour = styled.div`
	color: ${forth};
	text-align: end;
	padding-right: 0.4em;
	height: 2.2em;
`;

export const EventsContainer = styled(FlexContainer)`
	width: 87.5%;
	height: fit-content;
	padding: 0.7em 0;
`;

export const EventsForTheDay = styled.div`
	flex-grow: 1;
	height: fit-content;
	& + * {
		border-left: 1.5px solid ${forth};
	}
`;
export const EventHolderOutline = styled.div`
	padding: 1px;
	height: 2.2em;
	& + * {
		border-top: 1.5px solid ${forth};
	}
`;

export const EventHolder = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${({ isSelected, isFilled }) => isSelected ? selectedHolderColor : isFilled ? eventColor : "none"};
	&:hover {
		opacity: ${({ isSelected }) => isSelected ? '1' : '0.3'};
		background-color: ${({ isSelected, isFilled }) => isSelected || isFilled ? selectedHolderColor : eventColor};
	}
`;