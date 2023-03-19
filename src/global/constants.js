const VALID_BLACK_KEYS = ['w','e','t','y','u','o','p',']'];
const VALID_WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j','k','l',';',"'", 'Enter'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS]




const NOTES = [
    'c1', 'cs1', 'd1', 'ds1',
    'e1', 'f1', 'fs1', 'g1',
    'gs1', 'a1', 'as1', 'b1',
    'c2', 'cs2', 'd2', 'ds2',
    'e2', 'f2', 'fs2', 'g2',
    'gs2', 'a2', 'as2', 'b2',
    'c3', 'cs3', 'd3', 'ds3',
    'e3', 'f3', 'fs3', 'g3',
    'gs3', 'a3', 'as3', 'b3',
    'c4', 'cs4', 'd4', 'ds4',
    'e4', 'f4', 'fs4', 'g4',
    'gs4', 'a4', 'as4', 'b4',
    'c5', 'cs5', 'd5', 'ds5',
    'e5', 'f5', 'fs5', 'g5',
    'gs5', 'a5', 'as5', 'b5','c6'
]


const KEY_TO_NOTE = {
    'a': 'c3',
    'w': 'cs3',
    's': 'd3',
    'e': 'ds3',
    'd': 'e3',
    'f': 'f3',
    't': 'fs3',
    'g': 'g3',
    'y': 'gs3',
    'h': 'a3',
    'u': 'as3',
    'j': 'b3',
    'k': 'c4',
    'o': 'cs4',
    'l': 'd4',
    'p': 'ds4',
    ';': 'e4',
    "'": 'f4',
    ']': 'fs4',
    'Enter':'g4'
}



const NOTE_TO_KEY = {
    c3: 'a',
    cs3: 'w',
    d3: 's',
    ds3: 'e',
    e3: 'd',
    f3: 'f',
    fs3: 't',
    g3: 'g',
    gs3: 'y',
    a3: 'h',
    as3: 'u',
    b3: 'j',
    c4: 'k',
    cs4: 'o',
    d4: 'l',
    ds4: 'p',
    e4: ';',
    f4: "'",
    fs4: ']',
    g4: 'Enter'

}

export {
    NOTES,
    VALID_KEYS,
    NOTE_TO_KEY,
    KEY_TO_NOTE,
  };