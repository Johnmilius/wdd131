const heightModifiers = {
    short: {
      squat: 1.03,          // 3% boost for short lifters
      benchPress: 1.04,     // 4% boost for bench press
      deadlift: 0.98,       // 2% penalty for deadlift
      pushups: 1.03,        // 3% boost for pushups
      pullups: 1.05         // 5% boost for pullups
    },
    average: {
      squat: 1.00,
      benchPress: 1.00,
      deadlift: 1.00,
      pushups: 1.00,
      pullups: 1.00
    },
    tall: {
      squat: 0.95,          // 5% penalty for tall lifters
      benchPress: 0.95,     // 5% penalty for bench press
      deadlift: 1.05,       // 5% boost for deadlift
      pushups: 0.97,        // 3% penalty for pushups
      pullups: 0.95         // 5% penalty for pullups
    }
  };

  


  const strengthStandards = {
    male: {
      '110lbs': {
        squat: { beginner: 53, novice: 84, intermediate: 125, advanced: 173, elite: 226 },
        benchPress: { beginner: 53, novice: 84, intermediate: 125, advanced: 173, elite: 226 },
        deadlift: { beginner: 70, novice: 111, intermediate: 162, advanced: 221, elite: 285 },
        pushups: { beginner: 17, novice: 30, intermediate: 45, advanced: 60, elite: 80 },
        pullups: { beginner: 1, novice: 5, intermediate: 10, advanced: 15, elite: 20 }
      },
      '120lbs': {
        squat: { beginner: 63, novice: 97, intermediate: 140, advanced: 191, elite: 247 },
        benchPress: { beginner: 63, novice: 97, intermediate: 140, advanced: 191, elite: 247 },
        deadlift: { beginner: 83, novice: 126, intermediate: 179, advanced: 242, elite: 310 },
        pushups: { beginner: 18, novice: 32, intermediate: 48, advanced: 64, elite: 85 },
        pullups: { beginner: 2, novice: 6, intermediate: 11, advanced: 16, elite: 21 }
      },
      '130lbs': {
        squat: { beginner: 73, novice: 109, intermediate: 154, advanced: 208, elite: 266 },
        benchPress: { beginner: 73, novice: 109, intermediate: 154, advanced: 208, elite: 266 },
        deadlift: { beginner: 95, novice: 141, intermediate: 196, advanced: 262, elite: 333 },
        pushups: { beginner: 20, novice: 34, intermediate: 51, advanced: 68, elite: 90 },
        pullups: { beginner: 3, novice: 7, intermediate: 12, advanced: 17, elite: 22 }
      },
      '140lbs': {
        squat: { beginner: 83, novice: 121, intermediate: 169, advanced: 224, elite: 285 },
        benchPress: { beginner: 83, novice: 121, intermediate: 169, advanced: 224, elite: 285 },
        deadlift: { beginner: 107, novice: 156, intermediate: 213, advanced: 282, elite: 355 },
        pushups: { beginner: 22, novice: 36, intermediate: 54, advanced: 72, elite: 95 },
        pullups: { beginner: 4, novice: 8, intermediate: 13, advanced: 18, elite: 23 }
      },
      '150lbs': {
        squat: { beginner: 93, novice: 133, intermediate: 182, advanced: 240, elite: 302 },
        benchPress: { beginner: 93, novice: 133, intermediate: 182, advanced: 240, elite: 302 },
        deadlift: { beginner: 119, novice: 170, intermediate: 229, advanced: 301, elite: 376 },
        pushups: { beginner: 24, novice: 38, intermediate: 57, advanced: 76, elite: 100 },
        pullups: { beginner: 5, novice: 9, intermediate: 14, advanced: 19, elite: 24 }
      },
      '160lbs': {
        squat: { beginner: 102, novice: 144, intermediate: 196, advanced: 255, elite: 319 },
        benchPress: { beginner: 102, novice: 144, intermediate: 196, advanced: 255, elite: 319 },
        deadlift: { beginner: 130, novice: 184, intermediate: 245, advanced: 320, elite: 396 },
        pushups: { beginner: 26, novice: 40, intermediate: 60, advanced: 80, elite: 105 },
        pullups: { beginner: 6, novice: 10, intermediate: 15, advanced: 20, elite: 25 }
      },
      '170lbs': {
        squat: { beginner: 112, novice: 155, intermediate: 209, advanced: 270, elite: 336 },
        benchPress: { beginner: 112, novice: 155, intermediate: 209, advanced: 270, elite: 336 },
        deadlift: { beginner: 141, novice: 197, intermediate: 260, advanced: 338, elite: 415 },
        pushups: { beginner: 28, novice: 42, intermediate: 63, advanced: 84, elite: 110 },
        pullups: { beginner: 7, novice: 11, intermediate: 16, advanced: 21, elite: 26 }
      },
      '180lbs': {
        squat: { beginner: 121, novice: 166, intermediate: 221, advanced: 284, elite: 352 },
        benchPress: { beginner: 121, novice: 166, intermediate: 221, advanced: 284, elite: 352 },
        deadlift: { beginner: 151, novice: 210, intermediate: 275, advanced: 355, elite: 433 },
        pushups: { beginner: 30, novice: 44, intermediate: 66, advanced: 88, elite: 115 },
        pullups: { beginner: 8, novice: 12, intermediate: 17, advanced: 22, elite: 27 }
      },
      '190lbs': {
        squat: { beginner: 130, novice: 177, intermediate: 234, advanced: 298, elite: 367 },
        benchPress: { beginner: 130, novice: 177, intermediate: 234, advanced: 298, elite: 367 },
        deadlift: { beginner: 162, novice: 222, intermediate: 289, advanced: 372, elite: 450 },
        pushups: { beginner: 32, novice: 46, intermediate: 69, advanced: 92, elite: 120 },
        pullups: { beginner: 9, novice: 13, intermediate: 18, advanced: 23, elite: 28 }
      },
    '200lbs': {
        squat: { beginner: 140, novice: 190, intermediate: 250, advanced: 320, elite: 390 },
        benchPress: { beginner: 135, novice: 185, intermediate: 240, advanced: 305, elite: 375 },
        deadlift: { beginner: 170, novice: 235, intermediate: 310, advanced: 390, elite: 470 },
        pushups: { beginner: 30, novice: 44, intermediate: 65, advanced: 87, elite: 115 },
        pullups: { beginner: 8, novice: 12, intermediate: 17, advanced: 22, elite: 27 }
    },
    '210lbs': {
        squat: { beginner: 150, novice: 200, intermediate: 265, advanced: 340, elite: 410 },
        benchPress: { beginner: 140, novice: 190, intermediate: 245, advanced: 315, elite: 385 },
        deadlift: { beginner: 175, novice: 245, intermediate: 320, advanced: 400, elite: 480 },
        pushups: { beginner: 28, novice: 42, intermediate: 62, advanced: 84, elite: 110 },
        pullups: { beginner: 7, novice: 11, intermediate: 16, advanced: 21, elite: 26 }
    },
    '220lbs': {
        squat: { beginner: 160, novice: 215, intermediate: 280, advanced: 355, elite: 425 },
        benchPress: { beginner: 145, novice: 200, intermediate: 255, advanced: 325, elite: 395 },
        deadlift: { beginner: 185, novice: 255, intermediate: 335, advanced: 415, elite: 495 },
        pushups: { beginner: 26, novice: 40, intermediate: 60, advanced: 80, elite: 105 },
        pullups: { beginner: 6, novice: 10, intermediate: 15, advanced: 20, elite: 25 }
    },
    '230lbs': {
        squat: { beginner: 170, novice: 230, intermediate: 295, advanced: 375, elite: 445 },
        benchPress: { beginner: 150, novice: 205, intermediate: 260, advanced: 335, elite: 405 },
        deadlift: { beginner: 195, novice: 270, intermediate: 350, advanced: 430, elite: 510 },
        pushups: { beginner: 24, novice: 38, intermediate: 58, advanced: 77, elite: 100 },
        pullups: { beginner: 6, novice: 9, intermediate: 14, advanced: 19, elite: 24 }
    },
    '240lbs': {
        squat: { beginner: 180, novice: 245, intermediate: 310, advanced: 390, elite: 460 },
        benchPress: { beginner: 155, novice: 215, intermediate: 270, advanced: 345, elite: 415 },
        deadlift: { beginner: 205, novice: 280, intermediate: 360, advanced: 445, elite: 525 },
        pushups: { beginner: 22, novice: 36, intermediate: 55, advanced: 74, elite: 95 },
        pullups: { beginner: 5, novice: 9, intermediate: 13, advanced: 18, elite: 23 }
    },
    '250lbs': {
        squat: { beginner: 190, novice: 260, intermediate: 325, advanced: 405, elite: 475 },
        benchPress: { beginner: 160, novice: 220, intermediate: 280, advanced: 355, elite: 425 },
        deadlift: { beginner: 215, novice: 290, intermediate: 375, advanced: 455, elite: 540 },
        pushups: { beginner: 20, novice: 34, intermediate: 52, advanced: 70, elite: 90 },
        pullups: { beginner: 5, novice: 8, intermediate: 12, advanced: 17, elite: 22 }
    }
    }
}