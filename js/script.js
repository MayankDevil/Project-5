/*
- Project 5 ""
- Develope by Mayank
- All Right Rserved by Mayank
- JavaScript : ./js/script.js
*/
try
{
    let main = document.getElementById('main')

    let execute_btn = document.getElementById('execute_btn')
    
    let reset_btn = document.getElementById('reset_btn')
    
    let number = document.getElementById('number')
    
    let num = document.getElementById('num')
    
    var numBox = document.getElementsByClassName('numBox')
    
    // -------------------------------------------------------------
    
    var number_of_box = 100

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
        { onload set number of box }-------------------------------------
    */
    window.onload = () => (window.innerWidth > 700)? number_of_box = 100 : main.innerHTML = `<div class='number'> SORRY REQUIRE MORE THAN 700PX SCREEN WIDTH DEVICE </div>`
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
            
            if (btn_status == false)
            {
                if (random_number == numBox[index].innerHTML)
                {
                    plus ++
                    
                    plusPoint(plus)
                    
                    numBox[index].style.background = '#a3cfbb'
                    
                    setMatrix()
                }
                else
                {
                    minus ++
                    
                    minusPoint(minus)
                    
                    numBox[index].style.background = '#f1aeb5'
                }
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

        for (let i = 0; i < number_of_box; i++)
        {
            num.insertAdjacentHTML("beforeend",`<div class='numBox'>${ getRandomNum() }</div>`)
            
            numSelect(i)
        }
    }
    /*
        ----------------------------------------------------------
        [ counter function ] count reverse time
        ----------------------------------------------------------
    */
    function setTimeLine(yourTime)
    {
        counter = setInterval(function()
        {
            if (yourTime == 0)
            {
                execute_btn.innerHTML = `PLAY`
            
                execute_btn.classList.remove('stop_btn')

                clearInterval(counter)

                btn_status = true

                num.innerHTML = ``
            }
            else
            {            
                yourTime -= 1
                
                setTimer(yourTime)
            }
        }, 1000);
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

            setTimeLine(yourTime)

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
}
catch(error)
{
    console.log(`${error}`)
}
// The End