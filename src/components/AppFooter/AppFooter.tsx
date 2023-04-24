import { FooterButton, FooterContainer } from './AppFooter.style';

interface IProps {
	goToToday: () => void,
	isEventSelected: boolean,
	onEventRemove: () => void
}

function AppFooter({ goToToday, isEventSelected, onEventRemove }: IProps) {
	return (
		<FooterContainer>
			<FooterButton onClick={goToToday}>Today</FooterButton>
			{(isEventSelected) ? <FooterButton onClick={onEventRemove}>Delete</FooterButton> : null}
		</FooterContainer>
	);
}
export default AppFooter;