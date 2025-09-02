export default function Button(){
    function handleClick(){
        alert('you clicke me!');
    }
    return(
        <button onClick={handleClick}>Click me!</button>
    )
}