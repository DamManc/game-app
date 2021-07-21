from .rules import Rules


class Game:
    """ Game Class has a Rules to playing with two players max, represented as {type_of_player : his_move} """

    def __init__(self, players):
        self.rules = Rules()
        self.players = players

    def who_wins(self):
        if len(self.players) > 2:
            return False
        entities_0, entities_1 = self.players.items()
        player_0, player_1 = entities_0[0], entities_1[0]
        move_0, move_1 = entities_0[1], entities_1[1]
        win_move = self.rules.versus(move_0, move_1)
        if win_move == move_0:
            win_player = player_0
        elif win_move == move_1:
            win_player = player_1
        else:
            win_player = 'draw'
        return {win_player: win_move}
