// ------------- GLOBAL VARIABLES -------------
var ai_view_one = document.querySelector('.ai-view-one')
var ai_view_two = document.querySelector('.ai-view-two')
var human_view = document.querySelector('.human-view')
var game_choice = document.querySelectorAll('.game-choice')
var game_battle = document.querySelector('.game-battle')
var btn_scissors = document.querySelector('.btn-scissors')
var btn_paper = document.querySelector('.btn-paper')
var btn_rock = document.querySelector('.btn-rock')
var btn_return = document.querySelector('.main-btn-return')
var btn_another_game = document.querySelector('.main-btn-another')
var btn_alert = document.querySelector('.alert-btn')
game_battle.style.pointerEvents = 'none'
var check_url = window.location.href


function btn_battle_func(){
    setTimeout(function(){
        game_battle.style.pointerEvents = 'auto'
        game_battle.style.color = "white"
        game_battle.style.backgroundColor = "#e60000"
        btn_alert.style.color = "red"
        btn_alert.innerHTML = "Click the Battle button to see who wins!"
     }, 1000);
}

function load_result_Ai_vs_Ai(){
    if(check_url.includes("computer")){
        postData('', {"game": {}}).then(who_wins => {
            window.globalThis.who_wins = who_wins
        })
        btn_battle_func()
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    game_battle.style.pointerEvents = 'none'
    load_result_Ai_vs_Ai()
})

document.addEventListener('click', function (event) {
        if(event.target.matches('.btn-scissors')) {
            btn_scissors.style.color = "white"
            btn_scissors.style.backgroundColor = "#3366ff"
        } else if (event.target.matches('.btn-paper')){
            btn_paper.style.color = "white"
            btn_paper.style.backgroundColor = "#3366ff"
        } else if (event.target.matches('.btn-rock')){
            btn_rock.style.color = "white"
            btn_rock.style.backgroundColor = "#3366ff"
        }
}, false)

function prepare_battle(){
    var els_to_disable_click = [...game_choice]
    for(var i=0; i < els_to_disable_click.length; i++){
        els_to_disable_click[i].style.pointerEvents = 'none'
     }
     btn_battle_func()
}

document.addEventListener('click', function (event) {
    var entity_move_human = (event.target.matches('.btn-scissors')) ? 'scissors' : (event.target.matches('.btn-paper')) ? 'paper' : (event.target.matches('.btn-rock')) ? 'rock' : false
    if(entity_move_human){
        prepare_battle()
        postData('', {"game": {"human": entity_move_human}}).then(who_wins => {
            window.globalThis.who_wins = who_wins
        })
    }
}, false)

function show_result(){
    btn_another_game.classList.remove("not-active")
    els_to_hide = [human_view, ai_view_one, game_battle, ai_view_two]
    for(i=0; i < els_to_hide.length; i++){
        if(els_to_hide[i]){ els_to_hide[i].classList.add('not-active')}
    }
    btn_alert.style.color = "green"
    for(i=0; i < Object.values(who_wins).length; i++){
        players = Object.values(who_wins)[0]
        winner = Object.values(who_wins)[1]
    }
    string_winner = `The Winner is ${Object.keys(winner)}, <br><br> The players: ${Object.keys(players)[0]} => ${Object.values(players)[0]}, ${Object.keys(players)[1]} => ${Object.values(players)[1]} `
    btn_alert.innerHTML = string_winner
}

document.addEventListener('click', function (event) {
        if(event.target.matches('.game-battle')) {
            show_result()
        }
}, false)


function another_game(){
    btn_alert.style.color = "#000"
    str_return_game = check_url.includes("computer") ? "Attend the choices of AI.." : "Click one an Human-element to fight against the AI"
    btn_alert.innerHTML = str_return_game
    els_to_show = [human_view, ai_view_one, game_battle, ai_view_two]
    for(i=0; i < els_to_show.length; i++){
        if(els_to_show[i]){ els_to_show[i].classList.remove('not-active')}
    }
    els_to_active_click = [...game_choice]
    for(i=0; i < els_to_active_click.length; i++){
        els_to_active_click[i].style.pointerEvents = 'auto'
        els_to_active_click[i].style.backgroundColor = '#b3e0ff'
        els_to_active_click[i].style.color = '#000'
    }
    game_battle.style.pointerEvents = 'none'
    game_battle.style.color = "red"
    game_battle.style.backgroundColor = "#FFF"

    load_result_Ai_vs_Ai()
}

document.addEventListener('click', function (event) {
        if(event.target.matches('.main-btn-another')) {
            btn_another_game.classList.add('not-active')
            another_game()
        }
}, false)




