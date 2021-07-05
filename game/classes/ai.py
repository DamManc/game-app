import random
from .rules import Rules


class Ai:

    def __init__(self):
        self.name = f'computer_'
        self.move = self.calc_rand_move()

    @staticmethod
    def calc_rand_move():
        move = random.choice(Rules.entities)
        return move
