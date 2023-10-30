/*
   Filename: AdvancedCodeExample.js
   Description: This code demonstrates an advanced algorithm for finding the longest common subsequence (LCS) 
   between two strings using dynamic programming.
*/

// Function to find the longest common subsequence between two strings
function findLCS(string1, string2) {
  // Create a 2D array to store the LCS lengths
  let lcsMatrix = [];
  for (let i = 0; i <= string1.length; i++) {
    lcsMatrix[i] = new Array(string2.length + 1);
  }

  // Fill the matrix with LCS lengths
  for (let i = 0; i <= string1.length; i++) {
    for (let j = 0; j <= string2.length; j++) {
      if (i === 0 || j === 0) {
        lcsMatrix[i][j] = 0;
      } else if (string1[i - 1] === string2[j - 1]) {
        lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1;
      } else {
        lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
      }
    }
  }

  // Trace back to find the LCS
  let lcs = "";
  let i = string1.length;
  let j = string2.length;
  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      lcs = string1[i - 1] + lcs;
      i--;
      j--;
    } else if (lcsMatrix[i - 1][j] > lcsMatrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  
  return lcs;
}

// Test the findLCS function
let string1 = "AGGTAB";
let string2 = "GXTXAYB";
let longestCommonSubsequence = findLCS(string1, string2);
console.log("Longest Common Subsequence: " + longestCommonSubsequence);

// Output: Longest Common Subsequence: GTAB