'use client';

import { useEffect, useRef } from 'react';

type Star = {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
};

export default function InteractiveStars() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const stars = useRef<Star[]>([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        stars.current = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        }));
        };

        resize();
        window.addEventListener('resize', resize);

        const render = () => {
        ctx.fillStyle = '#050507';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.current.forEach((star) => {
            star.x += star.vx;
            star.y += star.vy;

            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;

            const dx = (mouse.current.x / canvas.width - 0.5) * 20;
            const dy = (mouse.current.y / canvas.height - 0.5) * 20;

            ctx.beginPath();
            ctx.arc(star.x + dx, star.y + dy, star.size, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        });

        requestAnimationFrame(render);
        };

        render();

        const move = (e: MouseEvent) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
        };
        window.addEventListener('mousemove', move);

        return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', move);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
        }}
        />
    );
}
