const createSnow = (n) => {

    let i = 1;
    const count = 4;
    const style = document.createElement('style');

    // Задаём стиле для снежинок
    style.textContent = `
        body {
            position: relative;
        }   
        .snow {
            width: 20px;
            height: 20px;
            position: fixed;
            top: -20px;
            pointer-events: none;
            animation: fall linear;
            background-repeat: no-repeat;
        }

        @keyframes fall {
            100% {
                transform: translate(100vh, 150vw);
            }
        }
    `;

    // Вставлем наши стили снежинок
    document.head.append(style);

    const createSnowFlake = () => {
        const snow = document.createElement('div');
        snow.classList.add('snow');

        i++;

        if (i > count) i = 1;

        // Разносим как падает наш снег
        snow.style.cssText = `
            left: ${Math.random() * window.innerWidth}px;
            opacity: ${Math.random()};
            animation-duration: ${Math.random() * n + 2}s;
            background-image: url('./snow/img/snowflake${i}.svg');
        `;

        // Вставляем наши снежинки на страницу
        document.body.append(snow);

        // исчезновение снежинок 
        setTimeout(() => {
            snow.remove();
        }, (n + 2) * 1000);

    };

    setInterval(createSnowFlake, 200);



};

createSnow(10);
