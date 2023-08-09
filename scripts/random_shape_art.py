from turtle import *
from random import randint

speed(0)

def random_color():
    red = randint(0, 255)
    blue = randint(0, 255)
    green = randint(0, 255)
    color(red, blue, green)

def random_pos():
    penup()
    x = randint(-400, 400)
    y = randint(-300, 300)
    goto(x, y)
    pendown()

def rectangle():
    length = randint(100, 200)
    width = randint(100, 200)
    begin_fill()
    for side in range(2):
        fd(length)
        rt(90)
        fd(width)
        rt(90)
    end_fill()

def star():
    begin_fill()
    size = randint(50, 150)
    for side in range(5):
        lt(144)
        fd(size)
    end_fill()

def circle():
    size = randint(20, 40)
    dot(size)

for shape in range(12):
    random_color()
    random_pos()
    rectangle()
    random_pos()
    random_color()
    star()
    random_pos()
    random_color()
    circle()
    random_pos()
    random_color()


