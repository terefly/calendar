import { getDateAddedBy, isSameDate, range } from '../../utils';
import {
	EventHolder,
	CalendarCanvasContainer,
	EventsContainer,
	EventsForTheDay,
	Hour,
	HoursContainer,
	EventHolderOutline
} from './CalendarCanvas.styled';

interface IProps {
	weekStart: Date,
	weeksEvents: Date[],
	selectedHolder: Date,
	onHolderSelect: (date: Date, hour: number) => void
}


function CalendarCanvas({ weekStart, weeksEvents, selectedHolder, onHolderSelect }: IProps) {
	return (
		<CalendarCanvasContainer>
			<HoursContainer>
				{range(24, 0).map((hour: number) => <Hour>{((hour < 10) ? '0' + hour : hour) + ":00"}</Hour>)}
			</HoursContainer>
			<EventsContainer>
				{range(7, 0).map((day: number) => {
					const holderDate: Date = getDateAddedBy(weekStart, day);
					const todaysEvents: Date[] = weeksEvents.filter((task: Date) => isSameDate(task, holderDate));

					return <EventsForTheDay>
							{range(24, 0).map((hour: number) => 
								<EventHolderOutline>
									<EventHolder
										isSelected={isSameDate(selectedHolder, holderDate) && selectedHolder.getHours() === hour}
										isFilled={todaysEvents.some((task: Date) => task.getHours() === hour)}
										onClick={() => onHolderSelect(holderDate, hour)}
										/>
								</EventHolderOutline>
							)}
						</EventsForTheDay>
				})}
			</EventsContainer>
		</CalendarCanvasContainer>
	);
}

export default CalendarCanvas;