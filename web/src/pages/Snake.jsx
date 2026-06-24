import { useEffect, useState } from "react";
import "./Snake.css";

const GRID_SIZE = 25;

export default function SnakeGame() {
  const [snake, setSnake] = useState([
    { x: 10, y: 10 }
  ]);
  const [food, setFood] = useState({
    x: 5,
    y: 5
  });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 150);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  const moveSnake = () => {
    const head = snake[0];
    let newHead = { ...head };

    switch (direction) {
      case "UP":
        newHead.y--;
        break;
      case "DOWN":
        newHead.y++;
        break;
      case "LEFT":
        newHead.x--;
        break;
      case "RIGHT":
        newHead.x++;
        break;
    }

    if (
      newHead.x < 0 ||
      newHead.x >= GRID_SIZE ||
      newHead.y < 0 ||
      newHead.y >= GRID_SIZE
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      });
      setLevel(level + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const getGameHeader = () => {
    if (gameOver) {
      return (<h2 className="gameOver">Game Over</h2>);
    } 
    return (<h2 className="gameOn">Level {level}</h2>);
  }

  return (
    <div>
      <h1>SnaEK</h1>
      <p> Don't let the green snake reach the border. Instead use the arrow keys on your keyboard to eat the food (red square). Good luck!</p>

      {getGameHeader()}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map(
          (_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);

            const isSnake = snake.some(
              (s) => s.x === x && s.y === y
            );

            const isFood =
              food.x === x && food.y === y;

            return (
              <div
                key={index}
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid #333",
                  background: isSnake
                    ? "limegreen"
                    : isFood
                    ? "red"
                    : "black"
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
}