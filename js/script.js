/*
- Project 5 ""
- Develope by Mayank
- All Right Rserved by Mayank
- JavaScript : ./js/script.js
*/
try
{
    let execute_btn = document.getElementById('execute_btn')
    
    let reset_btn = document.getElementById('reset_btn')
    
    let number = document.getElementById('number')
    
    let num = document.getElementById('num')
    
    var numBox = document.getElementsByClassName('numBox')

    // -------------------------------------------------------------
    
    var random_number = getRandomNum()
    
    let counter = null;

    var btn_status = true
    
    var plus = 0
    
    var minus = 0

    var yourTime = 60
    
    plusPoint(plus)
    
    minusPoint(minus)
    
    score(plus, minus)

    setTimer(yourTime)

    setMatrix()
    
    number.innerHTML = random_number

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
        document.getElementById('plusPoint').innerHTML = `${point} `
    }
    /*
        { set minus point or display point }-----------------------------
    */ 
    function minusPoint(point)
    {
        document.getElementById('minusPoint').innerHTML = `${point}`
    }
    /*
        { get point minus point or set score }---------------------------
    */ 
    function score(n1,n2)
    {
        document.getElementById('score').innerHTML = `${n1-n2}`
    }
    /*
        { set time bar value }-------------------------------------------
    */
    function setTimer(time)
    {
        document.getElementById('timeBar').innerHTML = `[${time}] seconds`
    }
    /*
        -----------------------------------------------------------------
        [ num Select ] check num is correct else not 
        -----------------------------------------------------------------
    */
    function numSelect(index)
    {
        numBox[index].onclick = () => {

            if (random_number == numBox[index].innerHTML)
            {
                plus ++
                
                plusPoint(plus)
                
                numBox[index].style.background = '#a3cfbb'
            }
            else
            {
                minus ++
                
                minusPoint(minus)
                
                numBox[index].style.background = '#f1aeb5'
            }
            score(plus,minus)
        }
    }
    /*
        -----------------------------------------------------------------
        [ set Matrix ] set matrix in num 
        -----------------------------------------------------------------
    */
    function setMatrix()
    {
        num.innerHTML = ""

        for (let i = 0; i < 100; i++)
        {
            num.insertAdjacentHTML("beforeend",`<div class='numBox'>${ getRandomNum() }</div>`)
            
            numSelect(i)
        }
    }
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
                        yourTime -= 1
                        
                        setTimer(yourTime)
                    }
                    else
                    {
                        clearInterval(counter)

                        num.innerHTML = `<div class='number'> Time Over Your Final Score is ${n1-n2} </div>`
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
            counter = null;
            
            btn_status = true
            
            plus = 0
            
            minus = 0

            yourTime = 60
            
            plusPoint(plus)
            
            minusPoint(minus)
            
            score(plus, minus)

            timerBar(60)

            setMatrix()
            
            number.innerHTML = random_number

            // window.location.reload()
        }
    }
}
catch(error)
{
    console.log(`${error}`)
}
// The End