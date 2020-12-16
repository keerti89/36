class Game {
constructor(){

}
// to fetch the value of gameState from the data base
getState(){
    var gameStateRef=database.ref('gameState')
    //continously reads and the value(predefined) sends to function in the form of data
        gameStateRef.on("value",function(data){
            //.val is predefinedfunction to retreive the data we use 
           gameState=data.val()
        })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}

}