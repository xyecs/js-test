export function encryptCaesar(inputString, key) {
  // TODO: write your code here

  // list of utf-16 values for new string
  let code = []

  // Iterate through inputString and get utf-16 code of each letter shifted by key
  for (let i = 0; i < inputString.length; i++) {

    let newCode = inputString.charCodeAt(i) + key - 65;
    
    // handles wrap case
    if (newCode > 26) {
      newCode %= 26;
    }

    code.push(newCode + 65);
  }
  
  // passing code as a list of parameters to get resulting str based on utf values
  return String.fromCharCode.apply(null, code);

  /** BONUS
   * Think of how you could use your encoding function to decode (knowing the key)
   * Subtract key instead of add key, but basically the same solution
   * 
   * 
   * Think of how you could crack the code without knowing the key (google is a big help)
   * One way is shift it back 1 letter at a time and check if it's a word that's in the dictionary or if it makes sense,
   * so it will have to check it 25 more times.
   */
 
}
