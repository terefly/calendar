import { getDateAddedBy, isSameDate, range } from '../../utils';
import {
	BottomContainer,
	DateField,
	DateValue,
	DayContainer,
	DayValue,
	H1,
	HeaderContainer,
	MonthContainer,
	TopContainer,
	WeekButton,
	WeekContainer
} from './AppHeader.styled';
import { EDaysOfWeek } from './enums/days-of-week.enum';
import { EMonths } from './enums/months.enum';

interface IProps {
	weekStart: Date,
	selectedHolder: Date,
	prevWeek: () => void,
	nextWeek: () => void,
	onNewEvent: (date: Date) => void
}

function AppHeader({ weekStart, selectedHolder, prevWeek, nextWeek, onNewEvent }: IProps) {
	const weekDays: string[] = Object.values(EDaysOfWeek)
	if (weekStart.toUTCString().startsWith('Sun')) {
		weekDays.unshift(Object.values(EDaysOfWeek)[6]);
		weekDays.pop();
	}
	
	const handleNewEvent: () => void = () => {
		const tzoffset: number = (new Date()).getTimezoneOffset() * 60000;
		const initialVal: string = (selectedHolder)
			? new Date(selectedHolder.getTime() - tzoffset)
				.toISOString().slice(0, 10) + " " + `${
					(selectedHolder?.getHours() < 10)
						? "0" + selectedHolder?.getHours().toString()
						: selectedHolder?.getHours().toString()
				}` + ":00:00"
			: "";
		const userInput: string | null = prompt(
			'Enter event time: YYYY-MM-DD HH:mm:ss',
			initialVal
		);
		if (!userInput) {
			return;
		}
		const userInputAsArr = userInput?.trim().split(' ');

		if (userInputAsArr?.length !== 2) {
			alert("Invalid event time!");
			return;
		}

		const date: string[] = userInputAsArr[0].split('-');
		const hour: string[] = userInputAsArr[1].split(':');

		if (
			date?.length !== 3 || hour?.length !== 3
			|| date[0].split('').length !== 4 || date[1].split('').length !== 2 || date[2].split('').length !== 2
			|| hour[0].split('').length !== 2 || hour[1].split('').length !== 2 || hour[2].split('').length !== 2
			|| isNaN(+date[0]) || isNaN(+date[1]) || isNaN(+date[2]) || isNaN(+hour[0])
		) {
			alert("Invalid event time!");
			return;
		}

		const newEvent: Date = new Date(+date[0], +date[1] - 1, +date[2], +hour[0]);
		onNewEvent(newEvent);
	}

	return (
		<HeaderContainer>
			<TopContainer>
				<H1>Interview Calendar</H1>
				<ion-icon name="add-outline" onClick={handleNewEvent} size="large"></ion-icon>
			</TopContainer>
			<BottomContainer>
				<WeekContainer>
					{range(7, 0).map((val: number) => <DayContainer>
						<DayValue>{weekDays[val]}</DayValue>
						<DateValue isToday={isSameDate(new Date(), getDateAddedBy(weekStart, val))}>{getDateAddedBy(weekStart, val).getDate()}</DateValue>
					</DayContainer>)}
				</WeekContainer>
				<MonthContainer>
					<WeekButton>
						<ion-icon name="chevron-back-outline" onClick={prevWeek}></ion-icon>
					</WeekButton>
					<DateField>{Object.values(EMonths)[weekStart?.getMonth()]} {weekStart?.getFullYear()}</DateField>
					<WeekButton>
						<ion-icon name="chevron-forward-outline" onClick={nextWeek}></ion-icon>
					</WeekButton>
				</MonthContainer>
			</BottomContainer>
		</HeaderContainer>
	);
}
export default AppHeader;