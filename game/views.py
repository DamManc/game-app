import json

from django.http import HttpResponse
from django.shortcuts import render
from game.classes.game import Game
from game.classes.ai import Ai


def home(request):
    return render(request, 'game/home.html')


def battle(request, who):
    data = {'who': who}
    if request.method == 'GET' and (who == 'human' or who == 'computer'):
        return render(request, 'game/battle.html', data)
    elif request.method == 'POST':
        body = json.loads(request.body)
        ai_1 = Ai()
        if 'game' in body.keys():
            game_data = body['game']
            game_data[ai_1.name+'1'] = ai_1.move
            if len(game_data) < 2:
                ai_2 = Ai()
                game_data[ai_2.name+'2'] = ai_2.move
            game = Game(game_data)
            content = game.who_wins()
        else:
            raise Exception
        return HttpResponse(json.dumps(content), status=200, content_type="application/json")
