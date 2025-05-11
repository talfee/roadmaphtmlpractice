const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gnocchi, obstacles, score, gameSpeed, isJumping, jumpHeight, jumpSpeed, gravity, jumpPower;
let gracePeriodTime = 4000; // 4 seconds grace period (in milliseconds)
let startTime = Date.now(); // Track when the game starts

const gnocchiWidth = 50;
const gnoccHeight = 50;

const obstacleWidth = 20;
const obstacleHeight = 40;
const obstacleFrequency = 100;

function initializeGame() {
    gnocchi = { x: 50, y: canvas.height - gnoccHeight, width: gnocchiWidth, height: gnoccHeight, speed: 2 };
    obstacles = [];
    score = 0;
    gameSpeed = 3;
    isJumping = false;
    jumpHeight = 0;
    jumpSpeed = 15;
    gravity = 0.5;
    jumpPower = 10;
}

function handleJump() {
    if (isJumping) {
        if (jumpHeight < 100) {
            jumpHeight += jumpSpeed; // Move up
        } else {
            isJumping = false; // Start falling
        }
    } else {
        if (jumpHeight > 0) {
            jumpHeight -= gravity; // Move down
        }
    }
}

function drawGnocchi() {
    ctx.fillStyle = "orange";
    ctx.fillRect(gnocchi.x, canvas.height - gnocchi.height - jumpHeight, gnocchi.width, gnocchi.height);
}

function createObstacle() {
    // Check if grace period is over before allowing obstacles to appear
    if (Date.now() - startTime > gracePeriodTime) {
        if (Math.random() * 100 < obstacleFrequency) {
            obstacles.push({ x: canvas.width, y: canvas.height - obstacleHeight, width: obstacleWidth, height: obstacleHeight });
        }
    }
}

function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach((obstacle, index) => {
        obstacle.x -= gameSpeed;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Remove obstacles that go off screen
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
            score += 10;
        }
    });
}

function checkCollision() {
    obstacles.forEach(obstacle => {
        if (gnocchi.x + gnocchi.width > obstacle.x && gnocchi.x < obstacle.x + obstacle.width &&
            canvas.height - gnocchi.height - jumpHeight < obstacle.y + obstacle.height) {
            gameOver();
        }
    });
}

function gameOver() {
    cancelAnimationFrame(gameLoop);
    alert("Game Over! Your score: " + score);
    initializeGame();
    gameLoop();
}

function updateScore() {
    document.getElementById("score").innerText = "Score: " + score;
}

document.addEventListener("keydown", (e) => {
    if (e.key === " " && !isJumping) { // Space key
        isJumping = true;
    }
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game elements
    handleJump();
    createObstacle();
    drawGnocchi();
    drawObstacles();
    checkCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

initializeGame();
gameLoop();
