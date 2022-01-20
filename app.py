import sys;
import random
from tokenize import tabsize


tabSize = int(input("Please enter the size of the chessboard : "));
basket = [];

chessBoard = [random.randint(0,10) for _ in range(tabSize * tabSize)]
print(chessBoard, '\n')


for x in range(0,len(chessBoard),tabSize):
    print (chessBoard[x], chessBoard[x+1], chessBoard[x+2], chessBoard[x+3], chessBoard[x+4])
