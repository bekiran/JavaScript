/**
 * Execution       :   1. default node          : cmd> balancedParentheses.js
 *                      2. if nodemon installed  : cmd> balancedParentheses.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       : To accept mathematical expression with parantheses from user
 *                   input and check its balanced or not.  
 * 
 * 
 *  @file           : balancedParentheses.js
 *  @overview       : To accept mathematical expression and check for it's correctness.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 */

var Utility=require('../dataStructure/Implementation/SatckImplement')
var M=require('../UtilityProgram/utility')
var read=require('readline-sync')
function Stack(){
var stack=new Utility.Stack;

var st = new Utility.Stack;
    var str = read.question("Enter your mathematical expression with parantheses : ");
    var ch, i;

    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);

        if (ch == '(' || ch == '[' || ch == '{') {
            st.push(ch);

        }
        else {
            switch (ch) {
                case ')': if (st.pop() != '(') {
                    return false;
                }
                    break;
                case ']': if (st.pop() != '[') {
                    return false;
                }
                    break;
                case '}': if (st.pop() != '{') {
                    return false;
                } break;
            }
        }


    }
    if (st.getSize() == 0) {
        return true;
    }
    return false;
}
var bol = Stack();


if (bol) {
    console.log("Mathematical expression is balanced");

}
else {
    console.log("Mathematical expression not balanced");
}