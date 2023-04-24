type TGetDateAddedBy = (date: Date, by: number) => Date;
type TGetFirstWeekDayOf = (date: Date) => Date;
type TIsSameDate = (first: Date, second: Date) => boolean;
type TRange = (range: number, initialValue: number) => number[];

export const getFirstWeekDayOf: TGetFirstWeekDayOf = (date: Date) => {
	const dateCopy = new Date(date);
	const first: number = dateCopy.getDate() - dateCopy.getDay();
	return new Date(dateCopy.setDate(first));
}

export const getDateAddedBy: TGetDateAddedBy = (date: Date, by: number) => {
	const dateCopy = new Date(date);
	return new Date(dateCopy.setDate(dateCopy.getDate() + by));
}

export const isSameDate: TIsSameDate = (first: Date, second: Date) => {
	return first.getFullYear() === second.getFullYear()
		&& first.getMonth() === second.getMonth()
		&& first.getDate() === second.getDate()
}

export const range: TRange = (range: number, initialValue: number) => new Array(range)
	.fill(initialValue).map((val: number, ind: number) => val + ind);