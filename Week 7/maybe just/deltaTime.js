var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

//This is the deltatime function for which determines the
//frames per second that the game has.
function GetDeltaTime()
{
    endFrameMillis = startFrameMillis;
    startFrameMillis = Date.now();
    var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
    if(deltaTime > 1)
    {
        deltaTime = 1;
    }

    return deltaTime;

}
