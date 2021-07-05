from .rules import Rules


class Game(Rules):
    """ Inherits the Rules to playing with two players max, represented as {type_of_player : his_move} """

    def __init__(self, players):
        super().__init__(players)


