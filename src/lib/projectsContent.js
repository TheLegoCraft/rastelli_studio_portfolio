export const projectsContent = {
  "walker": {
    title: "WALKER",
    year: 2022,
    tags: ["CAD", "ONSHAPE", "MECHANICS", "3D PRINTING"],
    brief: [
      "This was a self-led project for me to experiment on building a 4 legged robot walker which could be powered, through a series of cams and mechanisms, with only 2 servo motors per leg for both pitch, tilt and yaw, and controlled with a Raspberry Pi. The whole contraption would be 3D printed and assembled by myself at home.",
      "Unfortunately, only some images have survived since the project was first made."
    ],
    photobooth: [
      ["1fr"],
      ["1fr", "1fr", "1fr"]
    ],
    documentation: []
  },
  "mycoedge": {
    title: "MYCOEDGE",
    year: 2023,
    tags: ["CAD", "BLENDER", "ONSHAPE", "SUSTAINABILITY", "CES EDUPACK", "TEAM-PROJECT"],
    brief: [
      "MycoEdge was a razor designed to tackle all aspects of sustainability throughout it's lifecycle and reduce its environmental impact.",
      "For this project, I worked with a 4 person team to design a sustainable razor made from 304 stainless steel, featuring a unique twisting L-lever mechanism for blade sharpening and replacement.",
      "I focused on the mechanical functionality of the device, using simulations to prove the lever system worked and was manufacturable. Beyond the material choice, we integrated ink into the handle that would change colour depending on how wet it got, in order to reduce water waste during use, and created mycelium packaging to improve sustainability.",
      "Phase 1 of this project also involved the individual analysis of a company, in my case, Gilette, which can be seen in the second document I have attached below."
    ],
    photobooth: [
      ["1fr"],
      ["1fr", "1fr"],
      ["1fr"]
    ],
    documentation: [
      { name: "16_12_23_MycoEdge.pdf", link: "#" },
      { name: "04_11_23_Gilette.pdf", link: "#" }
    ]
  },
  "nasa-vesuvius": {
    title: "NASA & VESUVIUS",
    year: 2020,
    tags: ["CAD", "ONSHAPE", "MECHANICS"],
    brief: [
      "Hosted on HeroX, Nasa had run a challenge called Exploring Hell: Avoiding Obstacles on a Clockwork Rover. The solution the innovators had to find was an innovative obstacle avoidance sensor for Nasa's mechanical clockwork rover.",
      "The only issue? It had to work on Venus.",
      "With a temperature of 450°C, surface pressure 92 times that of Earth, and no electronics available, the solution I delivered had to work in the most extreme of environments. Meanwhile, it had to detect slopes greater than 30 degrees, rocks greater or holes smaller than 0.35m, and have a lifetime of over 6 months.",
      "The solution I devised used a series of levers, gears, pendulums and differentials to be able to always detect slopes relative to gravity and ensure the rover never went over a 30 degree tilt.",
      "https://www.herox.com/VenusRover"
    ],
    photobooth: [
      ["1fr"],
      ["1fr", "1fr"],
      ["1fr"]
    ],
    documentation: []
  },
  "fea-hip-implant": {
    title: "FEA - HIP IMPLANT",
    year: 2023,
    tags: ["CAD", "BLENDER", "ANSYS", "SIMULATION"],
    brief: [
      "This Finite Element Analysis (FEA) project focused on solving a structural challenge in biomedical engineering: the premature failure of hip implants.",
      "The aim was to create a design that could survive a 15-year lifecycle of 5 million loading cycles, while being able to resonate so it could undergo acoustic emission testing.",
      "To make the design work, I needed to reduce the mass enough for the implant to resonate at five different natural frequencies within a specific range, while maintaining enough strength to withstand 2,490 N of force.",
      "Through a total of 32 iterations, I refined the mesh to eliminate stress singularities and experimented with stem indentations and thinned sideways supports, to find a balance between weight and durability.",
      "By the final iteration, I successfully developed a titanium alloy (Ti-6AL-4V) design that met both criteria, surviving over 5 million cycles while being able to resonate at the required frequencies."
    ],
    photobooth: [
      ["1fr"],
      ["1fr", "1fr", "1fr"]
    ],
    documentation: [
      { name: "6-4-23_FEA.pdf", link: "#" }
    ]
  },
  "a-level-nea": {
    title: "A-LEVEL NEA",
    year: 2022,
    tags: ["CAD", "ONSHAPE", "BLENDER", "PROTOTYPING", "CAM", "MANUFACTURING", "USER RESEARCH"],
    brief: [
      "My A-Level project set out to solve a fundamental problem for anyone who wants to use A3 drawing boards daily: the complete lack of portability.",
      "Inspired by Dieter Rams' 10 principles of good design, I engineered a foldable A3 drawing board that folds to fit inside a backpack while maintaining a rigid, seamless surface to work on when opened.",
      "The design journey required me to solve mechanical challenges, ranging from experimentation with Galaxy Z Fold-inspired hinges to developing a cam-based mechanism that maintains a flat surface when open without crimping the leather interior.",
      "While the manufacture of the final prototype resulted in a limited product due to the limits of school equipment and material strength, it was still usable enough to validate the overall concept."
    ],
    photobooth: [
      ["1fr"],
      ["1fr", "2fr"],
      ["2fr", "1fr"],
      ["1fr", "1fr", "1fr"]
    ],
    documentation: [
      { name: "25-4-22_ProductDesignNEA.pdf", link: "#" }
    ]
  },
  "gcse-nea": {
    title: "GCSE NEA",
    year: 2020,
    tags: ["ELECTRONICS", "CAM", "MANUFACTURING", "PYTHON"],
    brief: [
      "The aim of this project was to create a product that would help you practice sports. In my case, I choose to create a product for Dodgeball.",
      "Starting from basic research into the market, I worked on simple card prototypes first, which ended up evolving into a physical product made out of laser cut acrylic.",
      "However, most of the iteration and work I did was focused on getting a simple image recognition algorithm working with a Raspberry 3b+ and the OpenCV repository for Python."
    ],
    photobooth: [
      ["2fr", "1fr"],
      [{ span: "1fr", text: "VIDEO" }],
      [{ span: "1fr", text: "VIDEO" }, { span: "2fr", text: "VIDEO" }],
      ["1fr"]
    ],
    documentation: []
  }
};
