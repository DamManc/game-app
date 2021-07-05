// ------------- GLOBAL VARIABLES -------------
var btn_ai = document.querySelector('.click-ai')
var btn_hu = document.querySelector('.click-human')

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function loading_game(data){
    els_to_hide = [btn_ai, btn_hu]
    for(i=0; i < els_to_hide.length; i++){
        els_to_hide[i].classList.add('not-active')
    }
    setTimeout(function(){
        if(data == 'computer'){
            els_to_show = [ai_view_one, game_battle, ai_view_two, btn_return]
        } else { els_to_show = [human_view, game_battle, ai_view_two, btn_return] }
        for(i=0; i < els_to_show.length; i++){
            els_to_show[i].classList.remove('not-active')
        }
     }, 1000);
}


async function postData(url = '/', data = {}) {
      const request = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": getCookie('csrftoken')
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        return request.json(); // return a Promise
  }


document.addEventListener('click', function (event) {

    var entity_game = (event.target.matches('.click-ai ')) ? 'computer' : (event.target.matches('.click-human')) ? 'human' : false

	if(entity_game) {
        postData('', {"player": entity_game}).then(data_game => {
        console.log(data_game)
        loading_game(data_game) })
    }
	//event.preventDefault()

}, false)






