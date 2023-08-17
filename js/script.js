/*
-
-
-
-
*/
try
{
    let counter = null;

    var btn_status = true

    let execute_btn = document.getElementById('execute_btn')

    let reset_btn = document.getElementById('reset_btn')

    /*
        ------------------------------------------------------------------
        | function on click execute button | start else stop
        ------------------------------------------------------------------
    */ 

    execute_btn.onclick = () => {

        if (btn_status)
        {
            execute_btn.innerHTML = `STOP`

            execute_btn.classList.add('stop_btn')

            /*
                ----------------------------------------------------------
                [ counter function ] count reverse time
                ----------------------------------------------------------
            */ 
            counter = setInterval(function()
            {
                if (yourTime != 0)
                {            
                    timeBar.innerHTML = `${yourTime} seconds`
                    
                    yourTime -= 1
                }
                else
                {
                    clearInterval(counter)
                    
                    timeBar.innerHTML = `Time Over`
                }
            }, 1000);

            btn_status = false
        }
        else
        {
            execute_btn.innerHTML = `PLAY`

            execute_btn.classList.remove('stop_btn')

            clearInterval(counter)

            btn_status = true
        }
    }
    /*
        ----------------------------------------------------------------
        | function on click reset button | reload the webpage
        ----------------------------------------------------------------
    */ 
    reset_btn.onclick = () => {
        
        if (confirm("You are really want to reset "))
        {
            window.location.reload()
        }
    }

    /*
        -----------------------------------------------------------------
        [ function return ] get random number 
        -----------------------------------------------------------------
    */ 
    function getRandomNum()
    {
        return Math.floor(Math.random(10) * 10)
    }
    /*
        { set plus point or display point }------------------------------
    */
    function plusPoint(point)
    {
        document.getElementById('plusPoint').innerHTML = `Plus Point ${point}`
    }
    /*
        { set minus point or display point }-----------------------------
    */ 
    function minusPoint(point)
    {
        document.getElementById('minusPoint').innerHTML = `Minus Point ${point}`
    }
    /*
        { get point minus point or set score }---------------------------
    */ 
    function score(n1,n2)
    {
        document.getElementById('score').innerHTML = `Score ${n1-n2}`
    }

    let timeBar = document.getElementById('timeBar')
    
    let number = document.getElementById('number')
    
    var random_number = getRandomNum()
    
    var plus = 0
    
    var minus = 0

    var yourTime = 60
    
    plusPoint(plus)
    
    minusPoint(minus)
    
    score(plus, minus)
    
    number.innerHTML = random_number
    
    function isWin()
    {
        rturn (timeBar != 0 && score() > 5)? true : flase
    }
    
    let num = document.getElementById('num')
    
    var numBox = document.getElementsByClassName('numBox')
   
    /*
        -----------------------------------------------------------------
        [ number Lock ] 
        -----------------------------------------------------------------
    */ 

    function numLock()
    {

        for (let i = 0; i < 100; i++)
        {
            num.insertAdjacentHTML("beforeend",`<div class='numBox'>${ getRandomNum() }</div>`)
        
            numBox[i].onclick = () => {
            
                if (random_number == numBox[i].innerHTML)
                {
                    plus ++
                
                    plusPoint(plus)
                
                    numBox[i].style.background = '#a3cfbb'
                }
                else
                {
                    minus ++
                
                    minusPoint(minus)
                
                    numBox[i].style.background = '#f1aeb5'
                }
                score(plus,minus)
            }
        }
    }
    numLock()
}
catch(error)
{
    console.log(`${error}`)
}