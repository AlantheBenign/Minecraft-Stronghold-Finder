# Minecraft Stronghold Finder
That's a Python algorithm that helps speedrunners to find the Stronghold the fastest way.

## What is it about?
This code uses Minecraft in-game information and, with geometry, calculates the best location to throw the eyes of ender to (always) find the stronghold position. We could, theoretically, find the stronghold position using only two eyes of ender, but this method requires the player to go to such locations that, to be precise enough and spend less time, it would need to know the stronghold location itself to find a good spot to throw the second eye of ender (or go to far away, spending even more time), what is in itself a kind of a paradox. So, this program requires three eyes of ender throws to find the exactly stronghold location.

More details about the math:
[PDF File](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Minecraft_Stronghold_Finding_Mathematics%20(11).pdf)

## Using it:
[Let's go!](http://AlantheBenign.github.io/Minecraft-Stronghold-Finder/) 

## How to use it?
It's very simple to use!

First of all, **throw an eye of ender in any location** (assuming that the player is looking for a stronghold in the first stronghold generation ring [1408-2688 blocks away from the origin], which is true in a "good" speedrun) and **look directly at it**.

![tutorial10](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/tutorial10.png)

Then, **press F3+C** (WARNING: DO NOT PRESS IT FOR TO LONG, BECAUSE IF YOU DO SO MINECRAFT WILL CRASH [isn't that dumb to put two commands completelly different in the same hotkeys?]).

![tutorial11](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/tutorial11.png)

Thereby, the information about the player's position and direction it is looking is now on the clipboard, this is the program's first input, the program only accepts this data format. Then, **paste it at the program's first text box (CTRL+V)** and **click on the "Calculate Second Throw Position Button"** (EXAMPLE: /execute in minecraft:overworld run tp @s 158.49 71.00 -306.67 -540.90 10.50).

![tutorial1](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial1.png)

![tutorial2](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial2.png)

![tutorial3](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial3.png)

![tutorial4](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial4.png)

The program now informs the player what are the best position's coordenates to do the second eye of ender throw. **Arriving at the indicated position and throwing the second eye of ender, the player must do the same process said before and paste again in the program.**

![tutorial5](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial5.png)

![tutorial6](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial6.png)

![tutorial7](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial7.png)

![tutorial8](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Images/tutorial8.png)

So, **the program informs another point's coordenates, arriving there, the player must throw a third eye of ender and it will, for sure, fly down directly to the stronghold location. Now just dig down and good luck!**
