const scene = document.getElementById("scene1");
function createParticle() {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.innerHTML = "✦";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (4 + Math.random() * 6) + "s";
    particle.style.animationDelay = (Math.random * 5) + "s";
    particle.style.fontSize = (8 + Math.random() * 120) + "px";
    scene.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 10000
    );
}
setInterval(createParticle, 500);

const startButton = document.getElementById("startButton");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
startButton.addEventListener("click", () => {
    scene1.style.opacity = "0";
    setTimeout(() => {
        scene1.style.display = "none";
        scene2.classList.remove("scene-hidden");
        scene2.classList.add("show")
    }, 800);
});

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.fontSize = (12 + Math.random() * 14) + "px";
    petal.style.animationDuration = (5 + Math.random() * 6) + "s";
    petal.style.animationDelay = Math.random() * 3 + "s";
    scene2.appendChild(petal);
    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 700);

const scene3 = document.getElementById("scene3");
const nextStory = document.getElementById("nextStory");
const loveHeart = document.getElementById("loveHeart");
const nextLove = document.getElementById("nextLove");
nextStory.addEventListener("click", () => {
    scene2.style.opacity = "0";
    setTimeout(() => {
        scene2.style.display = "none";
        scene3.classList.remove("scene-hidden");
        scene3.style.opacity = "1";
    }, 800);
});

loveHeart.addEventListener("click", () => {

    const messages = document.querySelectorAll(".love-message");

    messages.forEach((message, index) => {

        setTimeout(() => {

            message.style.opacity = "1";

            message.style.transform =
                "translateY(0) rotate(0deg)";

        }, index * 250);

    });

});

const scene4 = document.getElementById("scene4");

nextLove.addEventListener("click", () => {

    scene3.style.opacity = "0";

    setTimeout(() => {

        scene3.style.display = "none";

        scene4.classList.remove("scene-hidden");

        scene4.style.opacity = "1";

    }, 800);

});

const openProposal = document.getElementById("openProposal");
const loveLetter = document.getElementById("loveLetter");

openProposal.addEventListener("click", () => {

    // Hide Scene 4
    scene4.style.opacity = "0";

    setTimeout(() => {

        scene4.style.display = "none";

        // Show love letter
        loveLetter.classList.remove("scene-hidden");
        loveLetter.style.opacity = "1";

    }, 800);

});

/* ===== FLOATING HEARTS ON FINAL LETTER ===== */

function createFinalHeart() {

    const heart = document.createElement("div");

    heart.classList.add("final-heart");

    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.getElementById("loveLetter")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createFinalHeart, 700);