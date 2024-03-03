/*
-   Project-5 : "DesktopGame"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/rock_paper_scissors.js
*/
try
{
    let main = document.getElementById('main')
    
    let btn = document.querySelectorAll("#footer .btn")

    var option = ["rock","paper","scissors"]

    var player_choice = null

    var system_choice = null

    var win = null

    /*
        [ get system choice ]---------------------------------------------
    */ 

    function getSystemChoice(data)
    {
        return data[Math.floor(Math.random() * data.length)]
    }

    /*
        [ isWin function if win return true else false ]------------------
    */ 

    function isWin(player_choice, system_choice)
    {
        if (player_choice == option[1] && system_choice == option[2])
        {
            return false
        }
        else if (player_choice == option[2] && system_choice == option[3])
        {
            return false
        }
        else if (player_choice == option[3] && system_choice == option[1])
        {
            return false
        }
        else
        {
            return true
        }
    }

    /*
        [ button onclick choice active ]----------------------------------
    */ 

    for (let i = 0; i < btn.length; i++)
    {
        btn[i].onclick = function()
        {
            win = null

            player_choice = this.lastElementChild.innerText.toLowerCase()
            
            system_choice = getSystemChoice(option).toLowerCase() 

            if (player_choice == system_choice)
            {
                win = null
            }
            else
            {
                win = isWin(player_choice, system_choice)
            }
            console.log(`${ player_choice } / ${ system_choice } = ${win} `)

            document.getElementById('main').innerHTML = outComeLayout(player_choice, system_choice, win).toString()
            
            // reset viewport

            document.getElementById('reset_btn').onclick = () => window.location.reload()     

        }
    }

    /*
        -------------------------------------------------------
        | outComeLayout function set layout according result |
        -------------------------------------------------------
    */

    function outComeLayout(player_choice, system_choice, win)
    {
        
        if (win != null)
        {
            return (`
                <section id="outCome">
                    
                    <div id="first">

                        <h1> ${ (win)? "you are Win" : "Not Win" } </h1>
                    
                        <img src="./data/img/${player_choice}.png" alt="${player_choice}" class="img">
                    
                    </div>

                    
                    <div id="last">

                        <h1> ${ (win)? "Not i am" : "i am Win" } </h1>
                    
                        <img src="./data/img/${system_choice}.png" alt="${system_choice}" class="img">
                    
                    </div>
                
                </section>
                
                <button id="reset_btn"> Play Again </button>
            `)
        }
        else
        {
            return (`
                <section id="battle_draw">
                
                    <h1> Battle Draw </h1>
                
                    <button id="reset_btn"> Play Again </button>
                
                </section>
            `)
            
        }
    }
}
catch(error)
{
    console.error(error)
}
