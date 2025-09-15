$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(225,650,140,20);
    createPlatform(450,550,140,20);
    createPlatform(250,435,140,20);
    createPlatform(700,480,180,100);
    createPlatform(1000,560,200,20);
    createPlatform(880,350,140,20);
    createPlatform(1150,250,140,20);
    createPlatform(1300,650,180,20);
    // TODO 3 - Create Collectables
     createCollectable("steve", 1290, 620, 10, 1);
    createCollectable("diamond", 800, 225, 0, 0);
    createCollectable("max", 125, 250, 0, 0);
    createCollectable("kennedi", 1295, 50, 0, 0);

    // TODO 4 - Create Cannons
    createCannon("left", 650, 750);
    createCannon("left", 150, 750);
    createCannon("top", 1260, 750);
    createCannon("left", 390, 750);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
