import dayjs from "dayjs";

export function calculateBioRythms(birthdate, targetDate) {
    return {
        physical: calculateBioRythm(birthdate, targetDate, 23),
        emotional: calculateBioRythm(birthdate, targetDate, 28),
        intellectual: calculateBioRythm(birthdate, targetDate, 33)
    };
}

export function calculateBiorythmSeries(birthdate, centralDate, range) {
    const series = [];
    const centralDay = dayjs(centralDate);

    for (let diff = -range; diff<= range; diff++){
        const targetDay = centralDay.add(diff, 'day');
        const biorythms = calculateBioRythms(birthdate, targetDay);
        series.push({
            date: targetDay.format('D MMM'),
            ...biorythms
        })
    }
    return series;
}

function calculateBioRythm(birthdate, targetDate, cycle){
    const birthday = dayjs(birthdate);
    const targetday = dayjs(targetDate);
    const diff = birthday.diff(targetday, 'day');
    return Math.sin(2* Math.PI * diff / cycle).toFixed(4);
}