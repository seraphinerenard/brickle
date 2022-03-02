# BRICKLE

The daily IndyCar word. Six guesses at a five-letter word, a new one every day at local midnight.

Play it at https://seraphinerenard.github.io/brickle/

## How it works

Every answer comes from IndyCar. The list holds 88 words. Guesses accept any five letters, so you can probe with a word that is not in the list; only the answers are themed.

Tiles report each guess the way the original does. A filled tile means the letter sits in the right place, a mid-tone tile means the letter is in the word somewhere else, and a flat tile means the letter is absent. Repeated letters follow the two-pass rule: a guess claims exact positions first, then spends whatever copies the answer has left on misplaced letters.

The daily word is a function of the date rather than anything stored on a server. Both the date arithmetic and the answer lookup are pure functions in `src/engine.js`, so the puzzle is identical for every player and reproducible in a test.

## Running it

No build step and no dependencies. Serve the directory and open it:

```sh
python3 -m http.server 8000
```

The page loads `src/main.js` as a native ES module, which needs `http://` rather than `file://`.

## Tests

The engine's rules are covered by Node's built-in test runner, which also checks the shipped word list for length, duplicates and a valid stride:

```sh
node --test
```

## Layout

    index.html        markup and the element ids the interface binds to
    styles.css        every colour token in the game, declared once
    src/engine.js     pure logic: scoring, puzzle numbering, answer lookup
    src/words.js      the 88-word answer list and daily-cycle settings
    src/main.js       DOM wiring, keyboard input, saved progress and stats
    tests/            engine and word-list tests

## History

Commits before this rewrite contain a copy of [react-wordle](https://github.com/cwackerfuss/react-wordle) by Chase Wackerfuss and its contributors, used under the MIT licence. None of that code remains in the working tree: the engine, interface and word lists here were written from scratch. The MIT licence in this repository covers the current code.

## Licence

MIT. See `LICENSE`.
