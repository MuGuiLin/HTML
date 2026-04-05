// 粒子背景配置
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#8c61ff" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#4fc3dc",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});