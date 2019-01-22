var D=require('../UtilityProgram/utility');
/**
 * import the Utility class to use the functionalities.
 */

var read=require('readline-sync');
var num=read.questionInt("enter the size of an array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
var arr1=D.bubbleSort(arr)
var num=read.questionInt("enter the number to be searched : ")
 var b=D.binarySearch(arr1,num)
 if(b==true)
 console.log("Number is present")
 else
 console.log("Number is not present")