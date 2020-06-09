# Minecraft Stronghold Finder
That's a Python algorithm that helps speedrunners to find the Stronghold the fastest way.

## What is it about?
This code uses Minecraft in-game information and, with geometry, calculates the best location to throw the ender eyes to (always) find the stronghold position. We could, theoretically, find the stronghold position using only two ender eyes, but this method requires the player to go to such locations that, to be precise enough and spend less time, it would need to know the stronghold location itself to find a good spot to throw the second ender eye (or go to far away, spending even more time), what is in itself a kind of a paradox. So, this program requires three ender eye throws to find the exactly stronghold location.

More details about the math:
[PDF File](https://github.com/AlantheBenign/Minecraft-Stronghold-Finder/blob/master/Minecraft_Stronghold_Finding_Mathematics%20(8).pdf)

## How to use it?
It's very simple to use! The player needs, in any location (assuming that the player is looking for a stronghold in the first stronghold generation ring [1408-2688 blocks away from the origin], which is true in a "good" speedrun), to throw the first ender eye, look at it, looking exactly at the ender eye will grant the precision the player needs, and press F3+C (WARNING: DO NOT PRESS IT FOR TO LONG, BECAUSE IF YOU DO SO MINECRAFT WILL CRASH [isn't that dumb to put two commands completelly different in the same hotkeys?]). Thereby, the information about the player's position and direction it is looking is now on the clipboard, this is the program's first input. After pasting it at the program, it will inform what are the best position's coordenates to do the second ender eye throw. Arriving at the indicated position and throwing the second ender eye, the player must do the same process said before and paste again in the program, so it will inform another point's coordenates, arriving there, the player must throw a third ender eye and it will, for sure, fly down directly to the stronghold location. Now just dig down and good luck!

## Using it:
[Let's go!](http://AlantheBenign.github.io/Minecraft-Stronghold-Finder/) 
