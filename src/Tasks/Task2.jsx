import { useState } from "react"

const checkNumber = (num) => {
     if(num % 14 === 0)
        return "bar"
    else if (num % 2 === 0)
        return "foo"
    else if (num % 7 === 0)
        return "foobar"
    else
        return num
}

export default function Task2() {
    const [number, setNumber] = useState(1)
    return (
        <div className="box">
            <h1>Task 2</h1>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value > 0 ? e.target.value : 1)} />
            <h2>{checkNumber(number)}</h2>
        </div>
    )
}
