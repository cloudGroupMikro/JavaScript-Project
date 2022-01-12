import React from "react"
export default function Header() {
    const [state, setState] = React.useState(0);
    const handleClick = React.useCallback(() => {
        let a = state + 1 ;
        setState(a);
    }, [state]);

    console.log(state);

    return (
<>
        <div>
        {state}
        </div>
        <button onClick={handleClick} style={{width: 200, height:200}}>

        </button>
        </>
    )
}
