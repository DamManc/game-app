class Rules:
    """ The Rules Class with a entities class-attribute and an instance-method to see who wins
        To implement the Game, implement the Rules before
    """
    entities = ["scissors", "rock", "paper"]

    def __init__(self, players):
        self.players = players

    def versus(self, move_0, move_1):
        if move_0 and move_1 not in self.entities:
            raise ValueError('The moves played are not allowed')
        else:
            if move_0 == "scissors":
                if move_1 == "paper":
                    return move_0
                elif move_1 == move_0:
                    return 'draw'
                else:
                    return move_1
            if move_0 == "rock":
                if move_1 == "scissors":
                    return move_0
                elif move_1 == move_0:
                    return 'draw'
                else:
                    return move_1
            if move_0 == "paper":
                if move_1 == "rock":
                    return move_0
                elif move_1 == move_0:
                    return 'draw'
                else:
                    return move_1

    def who_wins(self):
        if len(self.players) > 2:
            raise ValueError('The max number of players in a game is two')
        entities_0, entities_1 = self.players.items()
        player_0, player_1 = entities_0[0], entities_1[0]
        move_0, move_1 = entities_0[1], entities_1[1]
        win_move = self.versus(move_0, move_1)
        if win_move == move_0:
            win_player = player_0
        elif win_move == move_1:
            win_player = player_1
        else:
            win_player = 'draw'
        return {win_player: win_move}
