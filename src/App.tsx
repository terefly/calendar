import { useState } from 'react';
import { AppContainer } from './App.styled';
import CalendarCanvas from './components/calendarCanvas/CalendarCanvas';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import { getDateAddedBy, getFirstWeekDayOf, isSameDate } from './utils';
import { TUseState } from './use-state.type';



function App() {
	const [events, setEvents]: TUseState<Date[]> = useState([new Date(), getDateAddedBy(new Date(), 2), getDateAddedBy(new Date(), -2), getDateAddedBy(new Date(), 5)] as Date[]);
	const [selectedHolder, setSelectedHolder]: TUseState<Date> = useState(new Date());
	const [displayFirstDay, setDisplayFirstDay]: TUseState<Date> = useState(getFirstWeekDayOf(new Date()));

	const prevWeek: () => void = () => {
		setDisplayFirstDay((prevVal: Date) => getDateAddedBy(new Date(prevVal), -7));
	}

	const nextWeek: () => void = () => {
		setDisplayFirstDay((prevVal: Date) => getDateAddedBy(new Date(prevVal), 7));
	}

	const goToToday: () => void = () => {
		setDisplayFirstDay(getFirstWeekDayOf(new Date()));
	}

	const onHolderSelect: (date: Date, hour: number) => void = (date: Date, hour: number) => {
		const newDate = new Date(date);
		newDate.setHours(hour);
		setSelectedHolder(newDate);
	}

	const onEventRemove: () => void = () => setEvents((prevEvents) => [...prevEvents]
		.filter((event: Date) => !isSameDate(event, selectedHolder) || event.getHours() !== selectedHolder.getHours())
	);

	const onNewEvent: (date: Date) => void = (date: Date) => setEvents((prevEvents) => {
		const newEvents = [...prevEvents];
		newEvents.push(date);
		return newEvents;
	});

	return (
		<AppContainer>
			<AppHeader
				selectedHolder={selectedHolder}
				weekStart={displayFirstDay}
				prevWeek={prevWeek}
				nextWeek={nextWeek}
				onNewEvent={onNewEvent}
			/>
			<CalendarCanvas
				weekStart={displayFirstDay}
				weeksEvents={events.filter((task: Date) => isSameDate(getFirstWeekDayOf(task), getFirstWeekDayOf(displayFirstDay)))}
				selectedHolder={selectedHolder}
				onHolderSelect={onHolderSelect}
			/>
			<AppFooter
				goToToday={goToToday}
				isEventSelected={events.some((task: Date) => isSameDate(task, selectedHolder) && task.getHours() === selectedHolder.getHours())}
				onEventRemove={onEventRemove}
			/>
		</AppContainer>
	);
}

export default App;