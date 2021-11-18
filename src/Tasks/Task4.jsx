const BeforeRefactor = ({amt, province, ONTARIO_RATE, QUEBEC_RATE, ALBERTA_RATE, basis, extra, points, rate, calc, base}) => {
    if (province === 'ONTARIO') {
            rate = ONTARIO_RATE;
            amt = base * ONTARIO_RATE;
            calc = 2 * basis(amt) + extra(amt) * 1.05;
        } else if ((province === 'QUEBEC') || (province === 'ALBERTA')) {
            rate = (province === 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
            amt = base * rate;
            calc = 2 * basis(amt) + extra(amt) * 1.05;
        if (province === 'QUEBEC') {
            points = 2;
        }
        } else {
            rate = 1;
            amt = base;
            calc = 2 * basis(amt) + extra(amt) * 1.05;
        }
}

const AfterRefactor = ({amt, province, ONTARIO_RATE, QUEBEC_RATE, ALBERTA_RATE, basis, extra, points, base}) => {
    if (province === 'ONTARIO') {
        // rate = ONTARIO_RATE; --> Removed
        amt = base * ONTARIO_RATE;
    } else if ((province === 'QUEBEC') || (province === 'ALBERTA')) {
        // Removed rate -> unused
        amt = (province === 'QUEBEC') ? QUEBEC_RATE * base : ALBERTA_RATE * base; // Doing this to avoid the duplication of code.
        if (province === 'QUEBEC')
            points = 2;
    } else {
        // rate = 1; --> Removed
        amt = base;
    }
    // Removed Rate as it is not being used in this context
    // The Calc will be calculated no matter what
    let calc = 2 * basis(amt) + extra(amt) * 1.05;
}



export default function Task4() {
    return (
        <div className="box">
            <h1>Task 4</h1>
            <p> No output, check the code in source </p>
        </div>
    )
}
