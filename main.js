const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const draw_rock = document.querySelector('#draw-rock')
const draw_paper = document.querySelector('#draw-paper')
const draw_scissors = document.querySelector('#draw-scissors')
const draw_message = document.querySelector('#draw-message')
const lose_message = document.querySelector('#lose-message')
const win_message = document.querySelector('#win-message')
const draw_score = document.querySelector('#draw-score')
const win_score = document.querySelector('#win-score')
const lose_score = document.querySelector('#lose-score')



const rps_choices = [rock,paper,scissors]
const computer_choices = [draw_rock,draw_paper,draw_scissors]

//randomly choices rps for computer
function computer_play() {
    let random_element = computer_choices[Math.floor(Math.random()*computer_choices.length)];
    return random_element
}
// removes buttons that were not clicked
function remove_elements(player_choice) {

    



    rps_choices.forEach(choice => {
        
        if (choice.id !== player_choice.id) {

            choice.classList.toggle('fade-away')
        
            choice.addEventListener('transitionend', () => {
                choice.remove()
                
            })
        }

    });
}


//main
function play_round(player_choice,computer_choice) {

    //checking if score exists in session storage and if not, setting it to 0
    let score = sessionStorage.score || 0


    // player rock choice
    if (player_choice === rock) {
        
        // removing hover, making button unclickable
        player_choice.classList.toggle('btn-hover')
        player_choice.classList.toggle('selected')

        remove_elements(player_choice)

        //draw
        if (computer_choice === draw_rock) {

            // adds computer choice pic in dom
            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            
            }, 800);

            //adds the game messge
            setTimeout(() => {


                draw_score.textContent = `Your score: ${score}`
                draw_message.style.cssText = "opacity: 1; z-index: 1; "
            }, 1200);
        }

        //player loses
        else if (computer_choice===draw_paper) {
            
            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            
            }, 800);

            setTimeout(() => {

                lose_score.textContent = `Your score: ${score}`
                lose_message.style.cssText = "opacity: 1; z-index: 1;"
            }, 1200);
        }

        //player wins
        else if (computer_choice===draw_scissors) {

            sessionStorage.score = ++score


            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            
            }, 800);

            setTimeout(() => {


                win_score.textContent = `Your score: ${score}`
                win_message.style.cssText = "opacity: 1; z-index: 1; "
            }, 1200);
            
        }

    }

    //player paper choice
    else if (player_choice === paper) {
        
        player_choice.classList.remove('btn-hover')
        player_choice.classList.add('selected')
        remove_elements(player_choice)
        player_choice.classList.add('player-choice-position')

        //draw
        if (computer_choice===draw_paper) {


            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            }, 800);

            setTimeout(() => {

                draw_score.textContent = `Your score: ${score}`
                draw_message.style.cssText = "opacity: 1; z-index: 1;"
            }, 1200);


        }
        //win 
        else if (computer_choice===draw_rock) {

            sessionStorage.score = ++score

            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            }, 800);

            setTimeout(() => {

                //incrementing score and updating sessionstorage

                
                win_score.textContent = `Your score: ${score}`
                win_message.style.cssText = "opacity: 1; z-index: 1; margin-left: 100px !important;"
            }, 1200);


        }
        //lose
        else if (computer_choice===draw_scissors) {

            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            }, 800);

            setTimeout(() => {

                lose_score.textContent = `Your score: ${score}`
                lose_message.style.cssText = "opacity: 1; z-index: 1;"
            }, 1200);


        }

        
    }

    //player scissors choice
    else if (player_choice === scissors) {

        player_choice.classList.remove('btn-hover')
        player_choice.classList.add('selected')
        remove_elements(player_choice)
        player_choice.classList.add('player-choice-position')

        //draw
        if (computer_choice === draw_scissors) {

            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            }, 800);

            setTimeout(() => {
                draw_score.textContent = `Your score: ${score}`
                draw_message.style.cssText = "opacity: 1; z-index: 1; margin-left: 120px !important;"
            }, 1200);
            
        }
        //player loses
        else if (computer_choice === draw_rock) {

            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            }, 800);

            setTimeout(() => {
                
                lose_score.textContent = `Your score: ${score}`
                lose_message.style.cssText = "opacity: 1; z-index: 1; margin-left: 100px !important"
            }, 1200);
            
        }
        //player wins
        else if (computer_choice === draw_paper) {
            sessionStorage.score = ++score

        

            setTimeout(() => {
                computer_choice.classList.toggle('fade-in')
            }, 800);

            setTimeout(() => {


                win_score.textContent = `Your score: ${score}`
                win_message.style.cssText = "opacity: 1; z-index: 1;"
            }, 1200);
            
        }
    }


}



function gamestart(){
    rock.addEventListener('click', function() {
        play_round(rock,computer_choice=computer_play())
    })
    
    paper.addEventListener('click', function(){
        play_round(paper,computer_choice=computer_play())
    })
    
    
    scissors.addEventListener('click', function(){
        play_round(scissors,computer_choice=computer_play())
    })
    
}

gamestart()
