 export function Button(){
    let count=0; 
    function handleClick(){
        count +=1;
        console.log(count);

    }
    return(
        <div>
        <button onClick={handleClick}>Button </button>
        <p>button cliked {count}</p>
        </div>
    );
}
