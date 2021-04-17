import React, { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';

import './GameOfLife.css';

const ROWS = 20;
const COLUMNS = 30;

const EXPLANATION_LINK =
  'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life';

interface Props {}

const OPERATIONS = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [1, 0],
  [-1, 1],
  [-1, -1],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push(Array.from(Array(COLUMNS), () => 0));
  }

  return rows;
};

export const GameOfLife: React.FC<Props> = () => {
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < ROWS; i++) {
          for (let k = 0; k < COLUMNS; k++) {
            let neighbors = 0;
            OPERATIONS.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < ROWS && newK >= 0 && newK < COLUMNS) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 200);
  }, []);

  return (
    <>
      <button
        className="gof-btn"
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? 'stop' : 'start'}
      </button>
      <button
        className="gof-btn"
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        clear
      </button>
      <a
        className="gof-btn"
        target="_blank"
        rel="noreferrer"
        href={EXPLANATION_LINK}
      >
        Explanation
      </a>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLUMNS > 46 ? 46 : COLUMNS}, 2.3rem)`,
        }}
      >
        {grid.map((row, row_idx) =>
          row.map((col, col_idx) => (
            <div
              key={`${col_idx}-${row_idx}`}
              onClick={() => {
                setGrid(
                  produce(grid, (gridCopy) => {
                    gridCopy[row_idx][col_idx] = 1;
                  })
                );
              }}
              className={
                grid[row_idx][col_idx] ? 'cell cell-alive' : 'cell cell-dead'
              }
            />
          ))
        )}
      </div>
    </>
  );
};

export default GameOfLife;
