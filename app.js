const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());

var pressedDiv = null;

var ps = document.querySelectorAll('.p');

ps.forEach(function(div){
    div.addEventListener('click', function(){
        pressedDiv = div.id;
        console.log('Div pressed: ' + pressedDiv);
    })
})
