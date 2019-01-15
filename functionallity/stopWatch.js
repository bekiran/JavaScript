/******************************************************************************
 *  Execution       :   1. default node          : cmd> stopWatch.js
 *                      2. if nodemon installed  : cmd> stopWatch.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To measuring the time that elapses between the start and end clicks.

 * 
 *  @description    
 * 
 *  @file           : stopWatch.js
 *  @overview       : Measure the elapsed time between start and end.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var u =require('../UtilityProgram/utility');
var rl=require('readline-sync');
function stopwatchMain() 
{
    
    u.stopwatch(rl);//calling of stopWatch method.
}

u.stopwatch(rl);