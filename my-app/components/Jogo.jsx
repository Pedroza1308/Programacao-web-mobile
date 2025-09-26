'use client'; 

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Jogo.module.css';

const MAX_ERRORS = 6; 

const FIGURE_PARTS = [
    'right-leg',
    'left-leg',
    'right-arm',  
    'left-arm',   
    'body',       
    'head'        
];

const WORDS = [
  "REACT", "PYTHON", "JAVA", "HTML", "CSS",
  "DJANGO", "VERCEL", "API", "CODIGO", "FORCA"
];

// Inicializa um novo jogo
const initializeGame = () => {
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  return {
    word: word.toUpperCase(),
    guessedLetters: new Set(),
    wrongGuesses: 0,
    message: '',
    gameOver: false,
    gameWon: false,
  };
};

// Componente Jogo da Forca
export default function Jogo() {
  const [gameState, setGameState] = useState(initializeGame());
  const { word, guessedLetters, wrongGuesses, message, gameOver, gameWon } = gameState;

  // Verifica se o jogo acabou
  const checkGameStatus = useCallback(() => {
    
    const isWordGuessed = word.split('').every(letter => guessedLetters.has(letter));
    if (isWordGuessed) {
      setGameState(prev => ({ ...prev, message: "🎉 Parabéns, você acertou a palavra!", gameOver: true, gameWon: true }));
      return;
    }

    if (wrongGuesses >= MAX_ERRORS) {
      setGameState(prev => ({ ...prev, message: `Você perdeu! A palavra era: ${word}`, gameOver: true, gameWon: false }));
    }
  }, [word, guessedLetters, wrongGuesses]);

  useEffect(() => {
    checkGameStatus();
  }, [guessedLetters, wrongGuesses, checkGameStatus]);

  // funcao principal para lidar com advinhacao da letra
  const handleGuess = useCallback((key) => {
    if (gameOver || !key || !/^[A-Z]$/.test(key)) return;

    const letter = key.toUpperCase();

    if (guessedLetters.has(letter)) {
      return; 
    }

    setGameState(prev => {
      const newGuessedLetters = new Set(prev.guessedLetters).add(letter);
      
      let newWrongGuesses = prev.wrongGuesses;
      if (!prev.word.includes(letter)) {
        newWrongGuesses += 1;
      }

      return { ...prev, guessedLetters: newGuessedLetters, wrongGuesses: newWrongGuesses };
    });
  }, [gameOver, guessedLetters]);

  //capturar teclas do teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Filtra apenas letras de A-Z
      if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        handleGuess(event.key.toUpperCase());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleGuess]);

  //reiniciar o jogo
  const restartGame = () => {
    if (gameWon) {
      setGameState(initializeGame());
    } else {
      setGameState(prev => ({ 
        ...prev, 
        guessedLetters: new Set(),
        wrongGuesses: 0,
        message: '',
        gameOver: false,
        gameWon: false,
      }));
    }
  };

  //renderiza os espaços das letras
  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className={styles.wordLetter}>
        {guessedLetters.has(letter) ? letter : '_'}
      </span>
    ));
  };
  
  //renderiza o boneco
  const renderHangman = () => {
    const parts = FIGURE_PARTS.map((partName, index) => {
        // O índice (0 a 5) + 1 é o passo (1 a 6) que remove a parte.
        const removalStep = index + 1; 

        // A parte está visível se o número de erros for MENOR que o passo de remoção.
        const isVisible = wrongGuesses < removalStep;
        
        return (
            <span 
                key={partName} 
                className={`${styles[partName]} ${isVisible ? '' : styles.removed}`}
            />
        );
    });

    return (
        <div className={styles.hangmanVisual}>
            <div className={styles.figure}>
                {parts}
            </div>
        </div>
    );
  };


  return (
    <div className={styles.hangmanContainer}>
      
      <div className={styles.gameArea}>
        
        <div className={styles.hangmanGallowsArea}>
          {renderHangman()}
        </div>
        
        {/*teclas ja tentadas*/}
        <div className={styles.guessedLettersList}>
          <h3>Letras Usadas ({MAX_ERRORS - wrongGuesses} Tentativas Restantes):</h3>
          <div className={styles.lettersContainer}>
            {Array.from(guessedLetters).sort().map(letter => (
              <span 
                key={letter} 
                className={word.includes(letter) ? styles.correctGuess : styles.wrongGuess}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.wordDisplay}>
        {renderWord()}
      </div>
      
      {gameOver && (
        <div className={styles.gameFeedback}>
          <p className={gameWon ? styles.win : styles.lose}>{message}</p>
          <button onClick={restartGame} className={styles.restartButton}>
            {gameWon ? 'Jogar Novamente (Nova Palavra)' : 'Tentar de Novo (Mesma Palavra)'}
          </button>
        </div>
      )}
    </div>
  );
}