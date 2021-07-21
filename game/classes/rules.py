class Rules:
    """ The Rules Class with a entities class-attribute and an instance-method to see who wins
    """
    def __init__(self):
        self.entities = ["scissors", "rock", "paper"]

    def versus(self, move_0, move_1):
        if move_0 and move_1 not in self.entities:
            return False
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


