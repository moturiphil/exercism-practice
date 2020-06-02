//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaCode) => {
    switch(dnaCode = ''){
    case 'G':
        dnaCode = 'C';
        break;
    case 'C':
        dnaCode = 'G';
        break;
    case 'T':
        dnaCode = 'A';
        break;
    case 'A':
        dnaCode = 'U';
        break;
    }
}
