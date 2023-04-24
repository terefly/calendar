import styled from 'styled-components';
import { second, third } from '../../app-colors';

export const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.88em;
	height: 7vh;
	border-top: 2px #ebebeb solid;
	background-color: ${ second };
`;
export const FooterButton = styled.button`
	background: none;
	cursor: pointer;
	font-size: 1.2rem;
	border: none;
	color: ${third};
`;