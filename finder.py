import numpy as np

#hitCircle calculates where the first stronghold generation ring starts, where the player would "hit" it, moving directly forward
#and calculates the position to the second ender eye throw
def hitCircle(pX,pZ,angle):
    xHit = None
    yHit = None
    cos = np.cos(angle*np.pi/180)
    #if the stronghold is at the +X
    if cos >= 0:
        x = np.linspace(pX-10, 2700,2700)
        a = np.tan(angle*np.pi/180)
        b = pZ - pX * a
        y = a*x + b
        for i in range(len(x)):
            if x[i]*x[i] + y[i]*y[i] >= 1408*1408:
                xHit = x[i]
                yHit = y[i]
                break
        pos1 = (xHit,yHit)
        x2 = np.linspace(xHit, xHit+100,500)
        a2 = -1/np.tan(angle*np.pi/180)
        b2 = yHit - xHit * a2
        y2 = a2*x2 + b2
        for i in range(len(x2)):
            if abs(x2[i] - xHit)**2 + abs(y2[i] - yHit)**2 >= 42*42:
                xST = x2[i]
                yST = y2[i]
        pos2 = (xST,yST)
    #if the stronghold is at the -X
    else:
        x = np.linspace(pX+10, -2700,2700)
        a = np.tan(angle*np.pi/180)
        b = pZ - pX * a
        y = a*x + b
        for i in range(len(x)):
            if x[i]*x[i] + y[i]*y[i] >= 1408*1408:
                xHit = x[i]
                yHit = y[i]
                break
        pos1 = (xHit,yHit)
        x2 = np.linspace(xHit, xHit+100,500)
        a2 = -1/np.tan(angle*np.pi/180)
        b2 = yHit - xHit * a2
        y2 = a2*x2 + b2
        for i in range(len(x2)):
            if abs(x2[i] - xHit)**2 + abs(y2[i] - yHit)**2 >= 42*42:
                xST = x2[i]
                yST = y2[i]
        pos2 = (xST,yST)
        
    return (pos1,pos2)
    
def StrongholdCoords():
    #stabilishing the variables
    f3c0 = input()
    f3c0 = f3c0[42:]
    f3c0 = f3c0.split()
    px0 = float(f3c0[0]) 
    pz0 = float(f3c0[2])
    angle0 = float(f3c0[3])%360

    #translating minecraft angles to daily life cartesian angles
    if angle0 >= 0:
        angle0 = (angle0+90)%360
    else:
        angle0 = (angle0-270)%360
    
    #distance from origin
    distOrigin = np.sqrt(px0*px0 + pz0*pz0)
    #print("You're this far from the Origin: ", distOrigin)
    
    if distOrigin >= 1400:
        print("Move 27 blocks perpendicularly to the Ender Eye flight direction and throw the second one. (27 blocks = 4 seconds sprinting)")
    
    else:
        circlePoint, secThrowPoint = hitCircle(px0,pz0,angle0)
        print("Go to: ", secThrowPoint, "\nCircle starts at: ", circlePoint)
    
    #stabilishing the variables
    f3c1 = input()
    f3c1 = f3c1[42:]
    f3c1 = f3c1.split()
    px1 = float(f3c1[0])
    pz1 = float(f3c1[2])
    angle1 = float(f3c1[3])%360
        
    #translating minecraft angles to daily life cartesian angles    
    if angle1 >= 0:
        angle1 = (angle1+90)%360
    else:
        angle1 = (angle1-270)%360
    
    #calculating stronghold position
    a0 = np.tan(angle0*np.pi/180)
    a1 = np.tan(angle1*np.pi/180)
    b0 = pz0 - px0 * a0
    b1 = pz1 - px1 * a1
    pxS = (b1 - b0)/(a0 - a1)
    pzS = pxS * a0 + b0
    
    #printing
    print("Stronghold is at: ", (pxS, pzS), " GOOD LUCK :D")
