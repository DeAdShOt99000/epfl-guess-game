def play():
    secret_number = 7
    secret_color = "blue"

    inp_number = input("Type a number between 1 and 20: ")
    inp_color = input("Type a color: ")

    if secret_number == int(inp_number) and secret_color == inp_color:
        print("Congratulations! You figured out both secrets!")
    elif secret_number == int(inp_number) or secret_color == inp_color:
        print("Great! You found one of the secrets!")
    else:
        print("You didn't find any of the secrets...")
        print("Better luck next time!")
    
    print("Try again!")
    
play()