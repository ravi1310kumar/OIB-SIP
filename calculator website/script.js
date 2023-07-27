let buttons = document.querySelectorAll('button');

let string = "";

let arr=Array.from(buttons);
arr.forEach(button=>
    {
    button.addEventListener('click',(e)=>
    {
        
        if(e.target.innerHTML == 'DEL')
        {
            string = string.slice(0,-1);
            document.querySelector('input').value =string;
        }


        else if(e.target.innerHTML == "=")
        {
            string =String(eval(string));
            document.querySelector('input').value = string;
        }
        

        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            document.querySelector('input').value = "";
        }
        

        else{
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})