const QUIZ_QUESTIONS = {
  overview: [
    {
      id: "matching1",
      type: "matching",
      question: "Match each nervous system component with its role.",
      left: ["Brain", "Spinal Cord", "Peripheral Nerves"],
      right: [
        "Controls thinking, movement, and speech",
        "Sends signals between brain and body",
        "Connect the brain and spinal cord to organs and limbs"
      ],
      correct: {
        Brain: "Controls thinking, movement, and speech",
        "Spinal Cord": "Sends signals between brain and body",
        "Peripheral Nerves": "Connect the brain and spinal cord to organs and limbs"
      }
    },
    {
      id: "overview2",
      type: "multiple-choice",
      question: "The nervous system is made up of which two main parts?",
      options: [
        "Central nervous system and peripheral nervous system",
        "Digestive and respiratory systems",
        "Muscular and skeletal systems"
      ],
      correct: "Central nervous system and peripheral nervous system"
    },
    {
      id: "overview3",
      type: "multiple-choice",
      question: "Which of the following is a common symptom of neurological disorders?",
      options: ["Muscle weakness", "Improved memory", "Stronger bones"],
      correct: "Muscle weakness"
    }
  ],

  types: [
    {
      id: "types1",
      type: "multiple-choice",
      question: "What happens in neurodegenerative diseases like Alzheimer’s or Parkinson’s?",
      options: ["Nerve cells gradually become damaged", "Bones become fragile", "Muscles grow larger"],
      correct: "Nerve cells gradually become damaged"
    },
    {
      id: "types2",
      type: "multiple-choice",
      question: "Epilepsy is caused by:",
      options: ["Sudden electrical disruptions in the brain", "Infections in the lungs", "Broken bones"],
      correct: "Sudden electrical disruptions in the brain"
    },
    {
      id: "types3",
      type: "multiple-choice",
      question: "Which condition is a neuromuscular disorder?",
      options: ["Amyotrophic lateral sclerosis (ALS)", "Asthma", "Diabetes"],
      correct: "Amyotrophic lateral sclerosis (ALS)"
    }
  ],

  caregivers: [
    {
      id: "care1",
      type: "multiple-choice",
      question: "Which task is commonly part of a caregiver’s responsibilities?",
      options: ["Helping with daily routines such as bathing and dressing", "Performing surgery", "Designing medications"],
      correct: "Helping with daily routines such as bathing and dressing"
    },
    {
      id: "care2",
      type: "multiple-choice",
      question: "Why are safety modifications important in a home?",
      options: ["To reduce the risk of falls or injuries", "To improve internet speed", "To increase cooking space"],
      correct: "To reduce the risk of falls or injuries"
    },
    {
      id: "care3",
      type: "multiple-choice",
      question: "Which sign may mean a patient needs immediate help?",
      options: ["Seizures or loss of consciousness", "Feeling slightly hungry", "Normal tiredness"],
      correct: "Seizures or loss of consciousness"
    }
  ],

  research: [
    {
      id: "research1",
      type: "combobox",
      question: "What does gene therapy aim to do?",
      options: ["Modifying or replacing cells to treat disease", "Improving weather forecasts", "Building robots"],
      correct: "Modifying or replacing cells to treat disease"
    },
    {
      id: "research2",
      type: "multiple-choice",
      question: "Scientists use which method to study diseases like Parkinson’s?",
      options: ["Brain stimulation models", "Ocean mapping", "Space exploration"],
      correct: "Brain stimulation models"
    },
    {
      id: "research3",
      type: "multiple-choice",
      question: "Why are stem cells important in neurological research?",
      options: ["They may allow damaged neurons to be replaced", "They strengthen bones", "They improve digestion"],
      correct: "They may allow damaged neurons to be replaced"
    }
  ]
};

export default QUIZ_QUESTIONS;