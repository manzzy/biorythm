import { Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorythmSeries } from "../lib/biorythm";


function BioChart({birthdate, targetdate}){

    const data = calculateBiorythmSeries(birthdate, targetdate, 20);
    return(
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey={"date"} ticks={[data[3].date, data[20].date, data[37].date]}/>
                <ReferenceLine x={data[20].date} />
                <Line type="natural" dataKey="physical"  dot={false} stroke="green" />
                <Line type="natural" dataKey="emotional"  dot={false} stroke="red" />
                <Line type="natural" dataKey="intellectual"  dot={false} stroke="blue" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default BioChart;