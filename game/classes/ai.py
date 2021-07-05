import random
from .rules import Rules


class Ai:
    """ The Ai Class is necessary to separate human-data-sent and the moves create with random or algorithm choice"""

    def __init__(self):
        self.name = f'computer_'
        self.move = self.calc_rand_move()

    @staticmethod
    def calc_rand_move():
        move = random.choice(Rules.entities)
        return move
