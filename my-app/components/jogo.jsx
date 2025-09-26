'use client'; 

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Jogo.module.css'; // Usaremos um módulo CSS para os estilos

// Lista de palavras aleatórias (com no máximo 10 letras)
const WORDS = [
  "REACT", "PYTHON", "JAVA", "HTML", "CSS",
  "DJANGO", "VERCEL", "API", "CODIGO", "FORCA"
];

// O limite de erros (7 partes do corpo + base + poste = 10 tentativas para completar o desenho da forca)
const MAX_ERRORS = 10; 

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
    // 1. Condição de Vitória: Todas as letras da palavra foram adivinhadas
    const isWordGuessed = word.split('').every(letter => guessedLetters.has(letter));
    if (isWordGuessed) {
      setGameState(prev => ({ ...prev, message: "🎉 Parabéns, você acertou a palavra!", gameOver: true, gameWon: true }));
      return;
    }

    // 2. Condição de Derrota: Erros máximos alcançados
    if (wrongGuesses >= MAX_ERRORS) {
      setGameState(prev => ({ ...prev, message: `Você perdeu! A palavra era: ${word}`, gameOver: true, gameWon: false }));
    }
  }, [word, guessedLetters, wrongGuesses]);

  useEffect(() => {
    checkGameStatus();
  }, [guessedLetters, wrongGuesses, checkGameStatus]);

  // Função principal para lidar com a adivinhação da letra
  const handleGuess = useCallback((key) => {
    if (gameOver || !key || !/^[A-Z]$/.test(key)) return;

    const letter = key.toUpperCase();

    if (guessedLetters.has(letter)) {
      // Já tentou essa letra
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

  // Lógica para capturar teclas do teclado (global)
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

  // Lógica para reiniciar o jogo
  const restartGame = () => {
    if (gameWon) {
      // Se ganhou, reinicia com uma palavra nova
      setGameState(initializeGame());
    } else {
      // Se perdeu, reinicia com a mesma palavra (como pedido)
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

  // Renderiza os espaços das letras
  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className={styles.wordLetter}>
        {guessedLetters.has(letter) ? letter : '_'}
      </span>
    ));
  };
  
  // Renderiza o boneco da forca (usando CSS Module)
  const renderHangman = () => {
      return (
          <div className={styles.hangmanVisual}>
              <div className={`${styles.gallows} ${styles[`gallows-step-${wrongGuesses}`]}`} />
          </div>
      );
  };


  return (
    <div className={styles.hangmanContainer}>
      
      <div className={styles.gameArea}>
        
        {/* 1. VISUAL DA FORCA */}
        <div className={styles.hangmanGallowsArea}>
          {renderHangman()}
        </div>
        
        {/* 2. TECLAS JÁ TENTADAS */}
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

      {/* 3. ESPAÇOS DAS LETRAS */}
      <div className={styles.wordDisplay}>
        {renderWord()}
      </div>

      {/* 4. FEEDBACK E BOTÕES DE REINÍCIO */}
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