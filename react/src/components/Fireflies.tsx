import React, { useEffect } from "react";

class Firefly {
  x: number;
  y: number;
  size: number;
  angle: number;
  speed: number;

  constructor(
    x: number,
    y: number,
    size: number,
    angle: number,
    speed: number
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = angle;
    this.speed = speed;
  }
}

class Fireflies {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private fireflies: Firefly[];
  private mouse: { x: number; y: number } = { x: 0, y: 0 };
  // @ts-ignore
  private lastMouse: { x: number; y: number } = { x: 0, y: 0 };

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d")!;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;

    this.fireflies = [];

    this.canvas.addEventListener(
      "mousemove",
      (e) => {
        this.lastMouse = { ...this.mouse };
        this.mouse = {
          x: e.pageX - this.canvas.offsetLeft,
          y: e.pageY - this.canvas.offsetTop,
        };
      },
      false
    );

    this.init();
  }

  private init() {
    this.context.fillStyle = "rgba(30,30,30,1)";
    this.context.fillRect(0, 0, this.width, this.height);
    this.loop();
  }

  private createFirefly(): Firefly {
    return new Firefly(
      Math.random() * this.width,
      this.height,
      Math.random() * 2,
      Math.random() * 2 * Math.PI,
      Math.random() * 0.5 + 0.1
    );
  }

  private drawFirefly(firefly: Firefly) {
    this.context.beginPath();
    this.context.arc(firefly.x, firefly.y, firefly.size, 0, 2 * Math.PI);
    this.context.fillStyle = "#448EE2";
    this.context.fill();
  }

  private moveFirefly(firefly: Firefly) {
    firefly.x += firefly.speed * Math.cos(firefly.angle);
    firefly.y -= firefly.speed * Math.sin(firefly.angle);
    firefly.angle +=
      (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;

    const distanceFromBottom = this.height - firefly.y;
    if (distanceFromBottom > 30) {
      firefly.y += firefly.speed * Math.sin(firefly.angle);
      firefly.x += firefly.speed * Math.cos(firefly.angle);
      firefly.angle += ((Math.random() * 20 - 10) * Math.PI) / 180;
    }
  }

  private update() {
    if (this.fireflies.length < 30) {
      for (let j = 0; j < 10; j++) {
        this.fireflies.push(this.createFirefly());
      }
    }

    for (let i = 0; i < this.fireflies.length; i++) {
      this.moveFirefly(this.fireflies[i]);
      this.drawFirefly(this.fireflies[i]);

      if (
        this.fireflies[i].x < 0 ||
        this.fireflies[i].x > this.width ||
        this.fireflies[i].y < 0 ||
        this.fireflies[i].y > this.height
      ) {
        this.fireflies.splice(i, 1);
      }
    }
  }

  private loop() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.update();
    requestAnimationFrame(() => this.loop());
  }

  clear() {
    this.fireflies = []; // Clear the fireflies array
  }
}

const FirefliesX: React.FC = () => {
  useEffect(() => {
    const fireflies = new Fireflies("fireflies");

    return () => {
      fireflies.clear();
    };
  }, []);

  return (
    <>
      <canvas
        id="fireflies"
        className="fixed overflow-x-hidden"
        style={{ zIndex: -7, bottom: 0 }}
      />
    </>
  );
};

export default FirefliesX;
