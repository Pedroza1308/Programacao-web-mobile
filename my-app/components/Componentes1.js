export default function Button(){
    function handleClick(){
        alert('you clicke me!');
    }
    return(
        <button onClick={handleClick}>Click me!</button>
    )

    function exemploRendering(){
        let content;
        if(isLoggedIn){
            content = <Adminpanel/>;
        }
        else{
            content = <LoginForm/>;
        }
    }
    return(
        <div>
            {content}
        </div>
    );
}