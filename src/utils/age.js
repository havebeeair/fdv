export const calculate_age = dob => {
	const dateArray = dob.split("-");
	const year = dateArray[0];
	const month = dateArray[1];
	const day = dateArray[2];

	const mydate = new Date(year, month, day);

	var diff_ms = Date.now() - mydate.getTime();
	var age_dt = new Date(diff_ms);
	return Math.abs(age_dt.getUTCFullYear() - 1970);
};
