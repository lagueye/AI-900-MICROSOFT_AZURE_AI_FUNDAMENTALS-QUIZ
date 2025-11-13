const quizData = [
  {
    "id": 1,
    "question": {
      "intitule": "A company employs a team of customer service agents to provide telephone and email support to customers. The company develops a webchat bot to provide automated answers to common customer queries. Which business benefit should the company expect as a result of creating the webchat bot solution?",
      "image": ""
    },
    "checkbox": {
      "A": "increased sales",
      "B": "a reduced workload for the customer service agents",
      "C": "improved product reliability"
    },
    "reponse": "B",
    "explanation": "",
    "reference": ""
  },
  {
    "id": 2,
    "question": {
      "intitule": "For a machine learning progress, how should you split data for training and evaluation?",
      "image": ""
    },
    "checkbox": {
      "A": "Use features for training and labels for evaluation.",
      "B": "Randomly split the data into rows for training and rows for evaluation.",
      "C": "Use labels for training and features for evaluation.",
      "D": "Randomly split the data into columns for training and columns for evaluation."
    },
    "reponse": "B",
    "explanation": {
      "text": "The Split Data module is particularly useful when you need to separate data into training and testing sets. Use the Split Rows option if you want to divide the data into two parts. You can specify the percentage of data to put in each split, but by default, the data is divided 50-50. You can also randomize the selection of rows in each group, and use stratified sampling."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/split-data"
  },
  {
    "id": 3,
    "question": {
      "intitule": "You are developing a model to predict events by using classification.You have a confusion matrix for the model scored on test data as shown in the following exhibit.Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic",
	  "image": {
        "1": "sources/images/19601894-47fa-46fd-8628-00a836341cc5.jpg",
        "2": "sources/images/27b5c25c-f806-471f-ad25-c25850e9b842.jpg"
      }
    },
    "checkbox": {
		"A": "positive - 5",
		"B": "positive - 11",
		"C": "positive - 1033",
		"D": "positive - 13951",
		"E": "false negative - 5",
		"F": "false negative - 11",
		"G": "false negative - 1033",
		"H": "false negative - 13951",
	},
    "reponse": "B,G",
    "explanation": {
      "image": {
        "1": "sources/images/7411cdbf-8752-4aeb-954e-9dafb879ec3d.jpg",
        "2": "sources/images/6f222c79-9af1-491b-b912-171624dcada2.jpg"
      },
      "text": "Box 1: 11\nTP = True Positive.\nThe class labels in the training set can take on only two possible values, which we usually refer to as positive or negative. The positive and negative instances that a classifier predicts correctly are called true positives (TP) and true negatives (TN), respectively. Similarly, the incorrectly classified instances are called false positives (FP) and false negatives (FN).\nBox 2: 1,033\nFN = False Negative"
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio/evaluate-model-performance"
  },
  {
    "id": 4,
    "question": {
      "intitule": "You build a machine learning model by using the automated machine learning user interface (UI). You need to ensure that the model meets the Microsoft transparency principle for responsible AI. What should you do?",
      "image": ""
    },
    "checkbox": {
      "A": "Set Validation type to Auto.",
      "B": "Enable Explain best model.",
      "C": "Set Primary metric to accuracy.",
      "D": "Set Max concurrent iterations to 0."
    },
    "reponse": "B",
    "explanation": {
      "text": "Model Explain Ability.\nMost businesses run on trust and being able to open the ML ג€black boxג€ helps build transparency and trust. In heavily regulated industries like healthcare and banking, it is critical to comply with regulations and best practices. One key aspect of this is understanding the relationship between input variables (features) and model output. Knowing both the magnitude and direction of the impact each feature (feature importance) has on the predicted value helps better understand and explain the model. With model explain ability, we enable you to understand feature importance as part of automated ML runs."
    },
    "reference": "https://azure.microsoft.com/en-us/blog/new-automated-machine-learning-capabilities-in-azure-machine-learning-service/"
  },
  {
    "id": 5,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/e0a5954b-0869-45b4-84ba-5df92ce54baf.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "B,C,F",
    "explanation": {
      "image": {
        "1": "sources/images/042e16b6-a12f-4a4e-9614-4fdb042025f6.jpg"
      },
      "text": "Anomaly detection encompasses many important tasks in machine learning:\nIdentifying transactions that are potentially fraudulent.\nLearning patterns that indicate that a network intrusion has occurred.\nFinding abnormal clusters of patients.\nChecking values entered into a system."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/anomaly-detection"
  },
  {
    "id": 6,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/c1e66141-1407-4fae-a798-aba5db428500.jpg"
    },
    "checkbox": {
	  "A": "inclusiveness",
      "B": "privacy and security",
      "C": "reliability and safety",
      "D": "transparency"
	},
    "reponse": "C",
    "explanation": {
      "image": {
        "1": "sources/images/b34f9a49-6c0c-4c28-b618-4ccd9ad93c5c.jpg"
      },
      "text": "Reliability and safety:\nAI systems need to be reliable and safe in order to be trusted. It is important for a system to perform as it was originally designed and for it to respond safely to new situations. Its inherent resilience should resist intended or unintended manipulation. Rigorous testing and validation should be established for operating conditions to ensure that the system responds safely to edge cases, and A/B testing and champion/challenger methods should be integrated into the evaluation process.\nAn AI system's performance can degrade over time, so a robust monitoring and model tracking process needs to be established to reactively and proactively measure the model's performance and retrain it, as necessary, to modernize it."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai"
  },
  {
    "id": 7,
    "question": {
      "intitule": "Match the types of AI workloads to the appropriate scenarios. Select the match type whatever the order",
      "image": "sources/images/7623e19a-1e30-4ad7-8383-6528fd0a9aa9.jpg"
    },
    "checkbox": {
	  "A": "anomaly detection",
      "B": "computer vision",
      "C": "conversation AI",
      "D": "knowledge mining",
      "E": "natural language process"
	},
    "reponse": "B,C,E",
    "explanation": {
      "image": {
        "1": "sources/images/e7f32550-1453-4634-8a88-ef5cda1e3cc0.jpg"
      },
      "text": "Box 3: Natural language processing\nNatural language processing (NLP) is used for tasks such as sentiment analysis, topic detection, language detection, key phrase extraction, and document categorization."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 8,
    "question": {
      "intitule": "You are designing an AI system that empowers everyone, including people who have hearing, visual, and other impairments. This is an example of which Microsoft guiding principle for responsible AI?",
      "image": ""
    },
    "checkbox": {
      "A": "fairness",
      "B": "inclusiveness",
      "C": "reliability and safety",
      "D": "accountability"
    },
    "reponse": "B",
    "explanation": {
      "text": "Inclusiveness: At Microsoft, we firmly believe everyone should benefit from intelligent technology, meaning it must incorporate and address a broad range of human needs and experiences. For the 1 billion people with disabilities around the world, AI technologies can be a game-changer."
    },
    "reference": "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 9,
    "question": {
      "intitule": "Match the Microsoft guiding principles for responsible AI to the appropriate descriptions.",
      "image": "sources/images/665794bd-b7ba-4ebf-a13d-c739ca4abfda.jpg"
    },
    "checkbox": {
	  "A": "Accountability",
      "B": "Fairness",
      "C": "Inclusiveness",
      "D": "Privacy and security",
      "E": "Reliability and safety"
	},
    "reponse": "A,D,E",
    "explanation": {
      "image": {
        "1": "sources/images/b32cbcfd-1635-475c-a742-6023ef9c7aba.jpg"
      },
      "text": "Box 1: Reliability and safety\nTo build trust, it's critical that AI systems operate reliably, safely, and consistently under normal circumstances and in unexpected conditions. These systems should be able to operate as they were originally designed, respond safely to unanticipated conditions, and resist harmful manipulation.\nBox 2: Accountability\nThe people who design and deploy AI systems must be accountable for how their systems operate. Organizations should draw upon industry standards to develop accountability norms. These norms can ensure that AI systems are not the final authority on any decision that impacts people's lives and that humans maintain meaningful control over otherwise highly autonomous AI systems.\nBox 3: Privacy and security\nAs AI becomes more prevalent, protecting privacy and securing important personal and business information is becoming more critical and complex. With AI, privacy and data security issues require especially close attention because access to data is essential for AI systems to make accurate and informed predictions and decisions about people. AI systems must comply with privacy laws that require transparency about the collection, use, and storage of data and mandate that consumers have appropriate controls to choose how their data is used."
    },
    "reference": "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 10,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/14b64bb1-13d6-410d-8e41-06d1e7822171.jpg"
    },
    "checkbox": {
	  "A": "Inclusiveness",
      "B": "Accountability",
      "C": "Reliability and safety",
      "D": "Fairness"
	},
    "reponse": "C",
    "explanation": {
      "image": {
        "1": "sources/images/aa5dbed5-580a-476a-bc74-99c8d6fc363a.jpg"
      },
      "text": "Reliability and safety: To build trust, it's critical that AI systems operate reliably, safely, and consistently under normal circumstances and in unexpected conditions.\nThese systems should be able to operate as they were originally designed, respond safely to unanticipated conditions, and resist harmful manipulation."
    },
    "reference": "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 11,
    "question": {
      "intitule": "You are building an AI system. Which task should you include to ensure that the service meets the Microsoft transparency principle for responsible AI?",
      "image": ""
    },
    "checkbox": {
      "A": "Ensure that all visuals have an associated text that can be read by a screen reader.",
      "B": "Enable autoscaling to ensure that a service scales based on demand.",
      "C": "Provide documentation to help developers debug code.",
      "D": "Ensure that a training dataset is representative of the population."
    },
    "reponse": "C",
    "explanation": "",
    "reference": "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 12,
    "question": {
      "intitule": "Match the types of AI workloads to the appropriate scenarios. To answer, drag the appropriate workload type from the column on the left to its scenario on the right. Each workload type may be used once, more than once, or not at all.",
      "image": "sources/images/c5efaad5-b4fb-46af-a100-3ec830550264.jpg"
    },
    "checkbox": {
	  "A": "Box 1 - Anomaly detection",
      "B": "Box 1 - Computer vision",
      "C": "Box 1 - Machine learnig (regression)",
      "D": "Box 1 - Natural language process",
      "E": "Box 2 - Anomaly detection",
      "F": "Box 2 - Computer vision",
      "G": "Box 2 - Machine learnig (regression)",
      "H": "Box 2 - Natural language process",
      "I": "Box 3 - Anomaly detection",
      "J": "Box 3 - Computer vision",
      "K": "Box 3 - Machine learnig (regression)",
      "L": "Box 3 - Natural language process",
      "M": "Box 4 - Anomaly detection",
      "N": "Box 4 - Computer vision",
      "O": "Box 4 - Machine learnig (regression)",
      "P": "Box 4 - Natural language process"
	},
    "reponse": "B,H,I,O",
    "explanation": {
	  "image": {
		  "1":"sources/images/a8fc05c3-4ad2-41db-904c-e3171dc16a2f.jpg"
	  },
	  "text": ""
	},
    "reference": "https://docs.microsoft.com/en-us/learn/paths/get-started-with-artificial-intelligence-on-azure/"
  },
  {
    "id": 13,
    "question": {
      "intitule": "Your company is exploring the use of voice recognition technologies in its smart home devices. The company wants to identify any barriers that might unintentionally leave out specific user groups. This an example of which Microsoft guiding principle for responsible AI?",
      "image": ""
    },
    "checkbox": {
      "A": "accountability",
      "B": "fairness",
      "C": "inclusiveness",
      "D": "privacy and security"
    },
    "reponse": "C",
    "explanation": "",
    "reference": "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 14,
    "question": {
      "intitule": "What are three Microsoft guiding principles for responsible AI? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "knowledgeability",
      "B": "decisiveness",
      "C": "inclusiveness",
      "D": "fairness",
      "E": "opinionatedness",
      "F": "reliability and safety"
    },
    "reponse": "C,D,F",
    "explanation": "",
    "reference": "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 15,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/3be7e3da-61d3-4563-8a1b-011dd562008f.jpg"
    },
    "checkbox": {
      "A": "image classification",
      "B": "object detection",
      "C": "optical character recognizer (OCR)",
      "D": "semantic segmentation"
	},
    "reponse": "B",
    "explanation": {
      "image": "sources/images/e5a6722e-8fe5-433a-9d3d-f9f926ade2b5.jpg"
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-object-detection"
  },
  {
    "id": 16,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/a5bf27d4-5cc2-4bb4-8124-cecafa81f913.jpg"
    },
    "checkbox": {
      "A": "Feature engineering",
      "B": "Feature selection",
      "C": "Model evaluation",
      "D": "Model training"
	},
    "reponse": "A",
    "explanation": {
      "image": "sources/images/b615e6b7-ca0b-46cc-a44d-84935be5bd32.jpg"
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/create-features"
  },
  {
    "id": 17,
    "question": {
      "intitule": "You run a charity event that involves posting photos of people wearing sunglasses on Twitter. You need to ensure that you only retweet photos that meet the following requirements:\n-Include one or more faces.\n-Contain at least one person wearing sunglasses. What should you use to analyze the images?",
      "image": ""
    },
    "checkbox": {
      "A": "the Verify operation in the Face service",
      "B": "the Detect operation in the Face service",
      "C": "the Describe Image operation in the Computer Vision service",
      "D": "the Analyze Image operation in the Computer Vision service"
    },
    "reponse": "B",
    "explanation": "",
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview"
  },
  {
    "id": 18,
    "question": {
      "intitule": "When you design an AI system to assess whether loans should be approved, the factors used to make the decision should be explainable. This is an example of which Microsoft guiding principle for responsible AI?",
      "image": ""
    },
    "checkbox": {
      "A": "transparency",
      "B": "inclusiveness",
      "C": "fairness",
      "D": "privacy and security"
    },
    "reponse": "A",
    "explanation": {
		"text":"Achieving transparency helps the team to understand the data and algorithms used to train the model, what transformation logic was applied to the data, the final model generated, and its associated assets. This information offers insights about how the model was created, which allows it to be reproduced in a transparent way.\nIncorrect Answers:\nB: Inclusiveness mandates that AI should consider all human races and experiences, and inclusive design practices can help developers to understand and address potential barriers that could unintentionally exclude people. Where possible, speech-to-text, text-to-speech, and visual recognition technology should be used to empower people with hearing, visual, and other impairments.\nC: Fairness is a core ethical principle that all humans aim to understand and apply. This principle is even more important when AI systems are being developed. Key checks and balances need to make sure that the system's decisions don't discriminate or run a gender, race, sexual orientation, or religion bias toward a group or individual.\nD: A data holder is obligated to protect the data in an AI system, and privacy and security are an integral part of this system. Personal needs to be secured, and it should be accessed in a way that doesn't compromise an individual's privacy."
	},
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 19,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/ffd4afee-42c4-4747-a42d-03488d0bcdee.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,D,F",
    "explanation": {
      "image": {
        "1": "sources/images/e4990883-29cf-4237-8875-1fa85f0642bc.jpg"
      },
      "text": "Box 1: Yes - Achieving transparency helps the team to understand the data and algorithms used to train the model, what transformation logic was applied to the data, the final model generated, and its associated assets. This information offers insights about how the model was created, which allows it to be reproduced in a transparent way. \n Box 2: No - A data holder is obligated to protect the data in an AI system, and privacy and security are an integral part of this system. Personal needs to be secured, and it should be accessed in a way that doesn't compromise an individual's privacy.\n Box 3: No - Inclusiveness mandates that AI should consider all human races and experiences, and inclusive design practices can help developers to understand and address potential barriers that could unintentionally exclude people.\n Where possible, speech-to-text, text-to-speech, and visual recognition technology should be used to empower people with hearing, visual, and other impairments."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai"
  },
  {
    "id": 20,
    "question": {
      "intitule": "Match the principles of responsible AI to appropriate requirements. To answer, drag the appropriate principles from the column on the left to its requirement on the right. Each principle may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "image": "sources/images/a845d0bf-9821-4908-acc1-5df130712574.jpg"
    },
    "checkbox": {
      "A": "Box 1 - fairness",
      "B": "Box 1 - privacy and security",
      "C": "Box 1 - reliability and safety",
      "D": "Box 1 - transparency",
      "E": "Box 2 - fairness",
      "F": "Box 2 - privacy and security",
      "G": "Box 2 - reliability and safety",
      "H": "Box 2 - transparency",
      "I": "Box 3 - fairness",
      "J": "Box 3 - privacy and security",
      "K": "Box 3 - reliability and safety",
      "L": "Box 3 - transparency"	
	},
    "reponse": "A,F,L",
    "explanation": {
      "image": "sources/images/e1bc360a-5266-4c7d-9ce5-0a59df07e61d.jpg"
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/4-guiding-principles"
  },
  {
    "id": 21,
    "question": {
      "intitule": "You plan to deploy an Azure Machine Learning model as a service that will be used by client applications. Which three processes should you perform in sequence before you deploy the model?",
      "image": "sources/images/51cc433d-334a-46d9-9b10-9f8dec59a47f.jpg"
    },
    "checkbox": {
      "A": "data encryption",
      "B": "model retraining",
      "C": "model training",
      "D": "data preparation",	
      "E": "model evaluation"		
	},
    "reponse": "C,D,E",
    "explanation": {
      "image": "sources/images/fb0a9323-16af-42fa-a33d-d5469b1438d3.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/concept-ml-pipelines"
  },
  {
    "id": 22,
    "question": {
      "intitule": "You are building an AI-based app. You need to ensure that the app uses the principles for responsible AI. Which two principles should you follow? Each correct answer presents part of the solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Implement an Agile software development methodology",
      "B": "Implement a process of AI model validation as part of the software review process",
      "C": "Establish a risk governance committee that includes members of the legal team, members of the risk management team, and a privacy officer",
      "D": "Prevent the disclosure of the use of AI-based algorithms for automated decision making"
    },
    "reponse": "B,C",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": [
      "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai",
      "https://docs.microsoft.com/en-us/learn/modules/responsible-ai-principles/3-implications-responsible-ai-practical"
    ]
  },
  {
    "id": 23,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/6b959bcb-9e1c-4b76-9d4e-a2bccaef9e8e.jpg"
    },	
    "checkbox": {
      "A": "accountability",
      "B": "fairness",
      "C": "inclusiveness",
      "D": "transparency"		
	},
    "reponse": "B",
    "explanation": {
      "image": "sources/images/32b3a65c-b502-46a6-90a5-f73b480b997b.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai"
  },
  {
    "id": 24,
    "question": {
      "intitule": "Select the answer that correctly completes the sentence.",
      "image": "sources/images/cdecb26d-c070-4fa8-893a-9de6f1c19486.jpg"
    },
    "checkbox": {
      "A": "accountability",
      "B": "fairness",
      "C": "inclusiveness",
      "D": "transparency"		
	},
    "reponse": "B",
    "explanation": {
      "image": "sources/images/5a4b2c55-a7a9-449d-be25-4c3d3251cbf5.jpg",
      "text": "Fairness is a core ethical principle that all humans aim to understand and apply. This principle is even more important when AI systems are being developed. Key checks and balances need to make sure that the system's decisions don't discriminate or run a gender, race, sexual orientation, or religion bias toward a group or individual."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai"
  },
  {
    "id": 25,
    "question": {
      "intitule": "Match the types of AI workloads to the appropriate scenarios. Select the match type whatever the order",
      "image": "sources/images/22183d4e-e740-401f-a884-40625310d459.jpg"
    },
    "checkbox": {
      "A": "Anomaly detection",
      "B": "Computer vision",
      "C": "Knowling mining",
      "D": "Natural language processing"		
	},
    "reponse": "B,C,D",
    "explanation": {
      "image": "sources/images/2c57989e-166c-4ac9-aba7-d0936468deff.jpg",
      "text": "Box 1: Knowledge mining\nYou can use Azure Cognitive Search's knowledge mining results and populate your knowledge base of your chatbot.\nBox 2: Computer vision\nBox 3: Natural language processing\nNatural language processing (NLP) is used for tasks such as sentiment analysis."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 26,
    "question": {
      "intitule": "Match the machine learning tasks to the appropriate scenarios.",
      "image": "sources/images/00b3c927-56d1-4b7d-b9ed-55d794cadfb4.jpg"
    },
    "checkbox": {
      "A": "feature engineering",
      "B": "feature selection",
      "C": "model deployment",
      "D": "model evaluation",		
      "E": "model training"		
	},
    "reponse": "A,B,D",
    "explanation": {
      "image": "sources/images/4a69f809-13c2-45e7-98be-8c7fa21d0a24.jpg",
      "text": "Box 1: Model evaluation\nThe Model evaluation module outputs a confusion matrix showing the number of true positives, false negatives, false positives, and true negatives, as well as ROC, Precision/Recall, and Lift curves.\nBox 2: Feature engineering\nFeature engineering is the process of using domain knowledge of the data to create features that help ML algorithms learn better. In Azure Machine Learning, scaling and normalization techniques are applied to facilitate feature engineering. Collectively, these techniques and feature engineering are referred to as featurization.\nNote: Often, features are created from raw data through a process of feature engineering. For example, a time stamp in itself might not be useful for modeling until the information is transformed into units of days, months, or categories that are relevant to the problem, such as holiday versus working day.\nBox 3: Feature selection\nIn machine learning and statistics, feature selection is the process of selecting a subset of relevant, useful features to use in building an analytical model. Feature selection helps narrow the field of data to the most valuable inputs. Narrowing the field of data helps reduce noise and improve training performance."
    },
    "reference": [
      "https://docs.microsoft.com/en-us/azure/machine-learning/studio/evaluate-model-performance",
      "https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml"
    ]
  },
  {
    "id": 27,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/b6ec57f1-28e5-424f-82ee-866bd644d1ee.jpg"
    },
    "checkbox": {
      "A": "dependant variables",
      "B": "features",
      "C": "identifiers",
      "D": "labels"
    },
    "reponse": "B",
    "explanation": {
      "image": "sources/images/e2ce13cd-e418-48eb-8b13-506c474043fb.jpg",
      "text": ""
    },
    "reference": [
      "https://www.baeldung.com/cs/feature-vs-label",
      "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/"
    ]
  },
  {
    "id": 28,
    "question": {
      "intitule": "You have the Predicted vs. True chart shown in the following exhibit.",
      "image": "sources/images/3f1cd94c-3400-440a-9cc8-c7307a45eebe.jpg"
    },
    "checkbox": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "What is a Predicted vs. True chart?\nPredicted vs. True shows the relationship between a predicted value and its correlating true value for a regression problem. This graph can be used to measure performance of a model as the closer to the y=x line the predicted values are, the better the accuracy of a predictive model."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-understand-automated-m"
  },
  {
    "id": 29,
    "question": {
      "intitule": "Which type of machine learning should you use to predict the number of gift cards that will be sold next month?",
      "image": ""
    },
    "checkbox": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "In the most basic sense, regression refers to prediction of a numeric target.\nLinear regression attempts to establish a linear relationship between one or more independent variables and a numeric outcome, or dependent variable.\nYou use this module to define a linear regression method, and then train a model using a labeled dataset. The trained model can then be used to make predictions."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression"
  },
  {
    "id": 30,
    "question": {
      "intitule": "You have a dataset that contains information about taxi journeys that occurred during a given period. You need to train a model to predict the fare of a taxi journey. What should you use as a feature?",
      "image": ""
    },
    "checkbox": {
      "A": "the number of taxi journeys in the dataset",
      "B": "the trip distance of individual taxi journeys",
      "C": "the fare of individual taxi journeys",
      "D": "the trip ID of individual taxi journeys"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "The label is the column you want to predict. The identified Features are the inputs you give the model to predict the Label.\nExample:\nThe provided data set contains the following columns:\nvendor_id: The ID of the taxi vendor is a feature.\nrate_code: The rate type of the taxi trip is a feature.\npassenger_count: The number of passengers on the trip is a feature.\ntrip_time_in_secs: The amount of time the trip took. You want to predict the fare of the trip before the trip is completed. At that moment, you don't know how long the trip would take. Thus, the trip time is not a feature and you'll exclude this column from the model.\ntrip_distance: The distance of the trip is a feature.\npayment_type: The payment method (cash or credit card) is a feature.\nfare_amount: The total taxi fare paid is the label."
    },
    "reference": "https://docs.microsoft.com/en-us/dotnet/machine-learning/tutorials/predict-prices"
  },
  {
    "id": 31,
    "question": {
      "intitule": "You need to predict the sea level in meters for the next 10 years. Which type of machine learning should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "In the most basic sense, regression refers to prediction of a numeric target.\nLinear regression attempts to establish a linear relationship between one or more independent variables and a numeric outcome, or dependent variable.\nYou use this module to define a linear regression method, and then train a model using a labeled dataset. The trained model can then be used to make predictions."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression"
  },
  {
    "id": 32,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/f811c0a0-f8bd-4654-ba52-953fc6a7e55d.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No",
      "G": "Statement 4 - Yes",
      "H": "Statement 4 - No"
    },
    "reponse": "A,C,E,H",
    "explanation": {
      "image": {
        "1": "sources/images/91493881-0c63-4106-a4c9-be81063bf803.jpg"
      },
      "text": "Box 1: Yes\nAutomated machine learning, also referred to as automated ML or AutoML, is the process of automating the time consuming, iterative tasks of machine learning model development. It allows data scientists, analysts, and developers to build ML models with high scale, efficiency, and productivity all while sustaining model quality.\nBox 2: No\nBox 3: Yes\nDuring training, Azure Machine Learning creates a number of pipelines in parallel that try different algorithms and parameters for you. The service iterates through ML algorithms paired with feature selections, where each iteration produces a model with a training score. The higher the score, the better the model is considered to \"fit\" your data. It will stop once it hits the exit criteria defined in the experiment.\nBox 4: No\nApply automated ML when you want Azure Machine Learning to train and tune a model for you using the target metric you specify.\nThe label is the column you want to predict."
    },
    "reference": "https://azure.microsoft.com/en-us/services/machine-learning/automatedml/#features"
  },
  {
    "id": 33,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/9d377620-9fec-4574-8adf-2fd87c444d0e.jpg"
    },
    "checkbox": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "reponse": "A",
    "explanation": {
      "image": {
        "1": "sources/images/1c62e5e8-2a9b-4eef-8b67-61e920342ce6.jpg"
      },
      "text": "Two-class classification provides the answer to simple two-choice questions such as Yes/No or True/False."
    },
    "reference": ""
  },
  {
    "id": 34,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/0f9746c0-91b1-4f7f-a26d-898ed24aff8b.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,D,F",
    "explanation": {
      "image": {
        "1": "sources/images/9a42679f-4bdc-4ce0-9cd3-9f3b7e8e3800.jpg"
      },
      "text": "Box 1: Yes\nIn machine learning, if you have labeled data, that means your data is marked up, or annotated, to show the target, which is the answer you want your machine learning model to predict.\nIn general, data labeling can refer to tasks that include data tagging, annotation, classification, moderation, transcription, or processing.\nBox 2: No\nBox 3: No\nAccuracy is simply the proportion of correctly classified instances. It is usually the first metric you look at when evaluating a classifier. However, when the test data is unbalanced (where most of the instances belong to one of the classes), or you are more interested in the performance on either one of the classes, accuracy doesn't really capture the effectiveness of a classifier."
    },
    "reference": "https://www.cloudfactory.com/data-labeling-guide https://docs.microsoft.com/en-us/azure/machine-learning/studio/evaluate-model-performance"
  },
  {
    "id": 35,
    "question": {
      "intitule": "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
      "image": ""
    },
    "checkbox": {
      "A": "Form Recognizer",
      "B": "Text Analytics",
      "C": "Language Understanding",
      "D": "Custom Vision"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": "Accelerate your business processes by automating information extraction. Form Recognizer applies advanced machine learning to accurately extract text, key/ value pairs, and tables from documents. With just a few samples, Form Recognizer tailors its understanding to your documents, both on-premises and in the cloud. Turn forms into usable data at a fraction of the time and cost, so you can focus more time acting on the information rather than compiling it."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/form-recognizer/"
  },
  {
    "id": 36,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/4c5be1b4-50c9-4d05-bb04-bb6be40595c5.jpg"
    },
    "checkbox": {
      "A": "Custom Vision",
      "B": "Form Recognizer",
      "C": "Lnk Recognizer",
      "D": "Text Analytics"
	},
    "reponse": "B",
    "explanation": {
      "image": {
        "1": "sources/images/92553c7f-15f0-46a4-992f-a6eea711c5cb.jpg"
      },
      "text": "Accelerate your business processes by automating information extraction. Form Recognizer applies advanced machine learning to accurately extract text, key/ value pairs, and tables from documents. With just a few samples, Form Recognizer tailors its understanding to your documents, both on-premises and in the cloud. Turn forms into usable data at a fraction of the time and cost, so you can focus more time acting on the information rather than compiling it."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/form-recognizer/"
  },
  {
    "id": 37,
    "question": {
      "intitule": "You use Azure Machine Learning designer to publish an inference pipeline. Which two parameters should you use to access the web service? Each correct answer presents part of the solution.",
      "image": ""
    },
    "checkbox": {
      "A": "the model name",
      "B": "the training endpoint",
      "C": "the authentication key",
      "D": "the REST endpoint"
    },
    "reponse": "C,D",
    "explanation": {
      "image": "",
      "text": "You can consume a published pipeline in the Published pipelines page. Select a published pipeline and find the REST endpoint of it.\nTo consume the pipeline, you need:\n-The REST endpoint for your service\n-The Primary Key for your service"
    },
    "reference": "https://docs.microsoft.com/en-in/learn/modules/create-regression-model-azure-machine-learning-designer/deploy-service"
  },
  {
    "id": 38,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/27efa014-4c16-4596-b833-b8afaf20947e.jpg"
    },
    "checkbox": {
      "A": "a local web service",
      "B": "Azure Container Instances",
      "C": "Azure Kubernetes Service (AKS)",
      "D": "Azure Machine Learning compute"		
	},
    "reponse": "C",
    "explanation": {
      "image": {
        "1": "sources/images/e91a8a5c-8118-4b45-a8d0-1a7b636729b2.jpg"
      },
      "text": "To perform real-time inferencing, you must deploy a pipeline as a real-time endpoint.\nReal-time endpoints must be deployed to an Azure Kubernetes Service cluster."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/concept-designer#deploy"
  },
  {
    "id": 39,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/986c0faf-1fab-4095-ae2a-f0cc681607bb.jpg"
    },
    "checkbox": {
      "A": "classification",
      "B": "clustering",
      "C": "regression"
	},
    "reponse": "C",
    "explanation": {
      "image": {
        "1": "sources/images/e8f1f35f-e71e-4c65-b0f7-0d8456751f55.jpg"
      },
      "text": "In the most basic sense, regression refers to prediction of a numeric target.\nLinear regression attempts to establish a linear relationship between one or more independent variables and a numeric outcome, or dependent variable.\nYou use this module to define a linear regression method, and then train a model using a labeled dataset. The trained model can then be used to make predictions.\nIncorrect Answers:\n-Classification is a machine learning method that uses data to determine the category, type, or class of an item or row of data.\n-Clustering, in machine learning, is a method of grouping data points into similar clusters. It is also called segmentation.\nOver the years, many clustering algorithms have been developed. Almost all clustering algorithms use the features of individual items to find similar items. For example, you might apply clustering to find similar people by demographics. You might use clustering with text analysis to group sentences with similar topics or sentiment."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/linear-regression https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/machine-learning-initialize-model-clustering"
  },
  {
    "id": 40,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/1850762b-1bdd-4e0f-8d8b-755afb2b1bc2.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,C,F",
    "explanation": {
      "image": {
        "1": "sources/images/072c5086-d268-41b1-910b-448f03e976bc.jpg"
      },
      "text": "Box 1: Yes\nAzure Machine Learning designer lets you visually connect datasets and modules on an interactive canvas to create machine learning models.\nBox 2: Yes\nWith the designer you can connect the modules to create a pipeline draft.\nAs you edit a pipeline in the designer, your progress is saved as a pipeline draft.\nBox 3: No"
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/concept-designer"
  },
  {
    "id": 41,
    "question": {
      "intitule": "You have the following dataset. What are Household Income and House Price Category? To answer, select the appropriate option in the answer area.",
      "image": {
		  "1":"sources/images/17706814-d67b-4dcf-ad03-bac45cab5ec7.jpg",
		  "2":"sources/images/d397e048-7c38-43c0-983e-6c016cb7ac0e.jpg"
	  }
    },
    "checkbox": {
      "A": "Household Income : A feature",
      "B": "Household Income : A label",
      "C": "Household Price Category : A feature",
      "D": "Household Price Category : A label"			
	},
    "reponse": "A,D",
    "explanation": {
      "image": "sources/images/4433e59a-971d-4d2f-b6e8-08c60b687503.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio/interpret-model-results"
  },
  {
    "id": 42,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/3f4d40d2-314d-476a-bea6-4443b553b822.jpg"
    },
    "checkbox": {
      "A": "adding and connection modules on a visual canvas",
      "B": "automatically performing common data preparation tasks",
      "C": "automatically selecting an algorithm to build the most accurate modele",
      "D": "using a code-first notebook experience"		
	},
    "reponse": "A",
    "explanation": {
      "image": "sources/images/821b3baf-b4db-452c-baba-21439d92eb63.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/concept-designer"
  },
  {
    "id": 43,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/1233ac93-bc3c-4c0a-8fcb-4f5dfcb1e382.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "A,C,E",
    "explanation": {
      "image": "sources/images/a55fe895-50c7-432a-b86d-7cf8c76c9278.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-designer-python https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml"
  },
  {
    "id": 44,
    "question": {
      "intitule": "A medical research project uses a large anonymized dataset of brain scan images that are categorized into predefined brain haemorrhage types. You need to use machine learning to support early detection of the different brain haemorrhage types in the images before the images are reviewed by a person. This is an example of which type of machine learning?",
      "image": ""
    },
    "checkbox": {
      "A": "clustering",
      "B": "regression",
      "C": "classification"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/learn/modules/create-classification-model-azure-machine-learning-designer/introduction"
  },
  {
    "id": 45,
    "question": {
      "intitule": "When training a model, why should you randomly split the rows into separate subsets?",
      "image": ""
    },
    "checkbox": {
      "A": "to train the model twice to attain better accuracy",
      "B": "to train multiple models simultaneously to attain better performance",
      "C": "to test the model by using data that was not used to train the model"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": ""
  },
  {
    "id": 46,
    "question": {
      "intitule": "You are evaluating whether to use a basic workspace or an enterprise workspace in Azure Machine Learning. What are two tasks that require an enterprise workspace? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Use a graphical user interface (GUI) to run automated machine learning experiments.",
      "B": "Create a compute instance to use as a workstation.",
      "C": "Use a graphical user interface (GUI) to define and run machine learning experiments from Azure Machine Learning designer.",
      "D": "Create a dataset from a comma-separated value (CSV) file."
    },
    "reponse": "A,C",
    "explanation": {
      "image": "",
      "text": "Note: Enterprise workspaces are no longer available as of September 2020. The basic workspace now has all the functionality of the enterprise workspace."
    },
    "reference": "https://www.azure.cn/en-us/pricing/details/machine-learning/  https://docs.microsoft.com/en-us/azure/machine-learning/concept-workspace"
  },
  {
    "id": 47,
    "question": {
      "intitule": "You need to predict the income range of a given customer by using the following dataset. Which two fields should you use as features? Each correct answer presents a complete solution.",
      "image": "sources/images/9ba34ebe-f496-4d86-adb2-8b637bbd26c1.jpg"
    },
    "checkbox": {
      "A": "Education Level",
      "B": "Last Name",
      "C": "Age",
      "D": "Income Range",
      "E": "First Name"
    },
    "reponse": "A,C",
    "explanation": {
      "image": "",
      "text": "First Name, Last Name, Age and Education Level are features. Income range is a label (what you want to predict). First Name and Last Name are irrelevant in that they have no bearing on income. Age and Education level are the features you should use."
    },
    "reference": ""
  },
  {
    "id": 48,
    "question": {
      "intitule": "You are building a tool that will process images from retail stores and identify the products of competitors. The solution will use a custom model. Which Azure Cognitive Services service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Custom Vision",
      "B": "Form Recognizer",
      "C": "Face",
      "D": "Computer Vision"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/overview"
  },
  {
    "id": 49,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/31ef1dbc-a11a-4691-b9bc-4b66b1701d79.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "A,C,F",
    "explanation": {
      "image": "sources/images/5de145b5-c6e5-486b-aee6-cc2a17dafd90.jpg",
      "text": "Clustering is a machine learning task that is used to group instances of data into clusters that contain similar characteristics. Clustering can also be used to identify relationships in a dataset\nRegression is a machine learning task that is used to predict the value of the label from a set of related features."
    },
    "reference": "https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/tasks"
  },
  {
    "id": 50,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/c3f4d693-f9b3-4323-bb39-ba71a358df9f.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "B,C,F",
    "explanation": {
      "image": "sources/images/ada0c76f-1ec5-430c-9940-5616e1a26443.jpg",
      "text": "Box 1: No\nThe validation dataset is different from the test dataset that is held back from the training of the model.\nBox 2: Yes\nA validation dataset is a sample of data that is used to give an estimate of model skill while tuning model's hyperparameters.\nBox 3: No\nThe Test Dataset, not the validation set, used for this. The Test Dataset is a sample of data used to provide an unbiased evaluation of a final model fit on the training dataset."
    },
    "reference": "https://machinelearningmastery.com/difference-test-validation-datasets/"
  },
  {
    "id": 51,
    "question": {
      "intitule": "What are two metrics that you can use to evaluate a regression model? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "coefficient of determination (R2)",
      "B": "F1 score",
      "C": "root mean squared error (RMSE)",
      "D": "area under curve (AUC)",
      "E": "balanced accuracy"
    },
    "reponse": "A,C",
    "explanation": {
      "image": "",
      "text": "A: R-squared (R2), or Coefficient of determination represents the predictive power of the model as a value between -inf and 1.00. 1.00 means there is a perfect fit, and the fit can be arbitrarily poor so the scores can be negative.  \nC: RMS-loss or Root Mean Squared Error (RMSE) (also called Root Mean Square Deviation, RMSD), measures the difference between values predicted by a model and the values observed from the environment that is being modeled.  \nIncorrect Answers:  \nB: F1 score also known as balanced F-score or F-measure is used to evaluate a classification model.  \nD: aucROC or area under the curve (AUC) is used to evaluate a classification model."
    },
    "reference": "https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/metrics"
  },
  {
    "id": 52,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/4433a91e-f9d6-46be-a320-f7bca8a885d8.jpg"
    },
    "checkbox": {
      "A": "classification",
      "B": "clustering",
      "C": "regression"
	},
    "reponse": "C",
    "explanation": {
      "image": "sources/images/f0a08e59-d285-4ee1-9fbb-ea980bb57911.jpg",
      "text": "Regression is a machine learning task that is used to predict the value of the label from a set of related features."
    },
    "reference": "https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/tasks"
  },
  {
    "id": 53,
    "question": {
      "intitule": "You need to use Azure Machine Learning designer to build a model that will predict automobile prices. Which type of modules should you use to complete the model? To answer, drag the appropriate modules to the correct locations. Each module may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. Select the match type whatever the order",
      "image": "sources/images/ed1fdbf7-5e8c-44ee-a2cf-faf741f104d9.jpg"
    },
    "checkbox": {		
      "A": "Convert CSV",
      "B": "K-Means Clustering",
      "C": "Linear Regression",
      "D": "Split Data",
      "E": "Select Columns in Dataset",
      "F": "Summarize Data"
	},
    "reponse": "C,D,E",
    "explanation": {
      "image": {
		  "1":"sources/images/eda17fc4-0617-4bc6-9cf0-9a60c66a1043.jpg",
		  "2":"sources/images/6f8b6d04-fb7f-4401-9461-51d5f6365589.jpg"
	  },
      "text": "Box 1: Select Columns in Dataset  \nFor Columns to be cleaned, choose the columns that contain the missing values you want to change. You can choose multiple columns, but you must use the same replacement method in all selected columns.  \nExample:  \nimages/6f8b6d04-fb7f-4401-9461-51d5f6365589.jpg  \nBox 2: Split data  \nSplitting data is a common task in machine learning. You will split your data into two separate datasets. One dataset will train the model and the other will test how well the model performed.  \nBox 3: Linear regression  \nBecause you want to predict price, which is a number, you can use a regression algorithm. For this example, you use a linear regression model."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/tutorial-designer-automobile-price-train-score"
  },
  {
    "id": 54,
    "question": {
      "intitule": "Which type of machine learning should you use to identify groups of people who have similar purchasing habits?",
      "image": ""
    },
    "checkbox": {
      "A": "classification",
      "B": "regression",
      "C": "clustering"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": "Clustering is a machine learning task that is used to group instances of data into clusters that contain similar characteristics. Clustering can also be used to identify relationships in a dataset"
    },
    "reference": "https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/tasks"
  },
  {
    "id": 55,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/011665bc-5aca-4c4b-b594-8884a72a4705.jpg"
    },
    "checkbox": {		
      "A": "classification",
      "B": "clustering",
      "C": "regression"
	},
    "reponse": "C",
    "explanation": {
      "image": "sources/images/333206e5-e5b2-4861-9b3e-92786a4c56ac.jpg",
      "text": "Regression is a machine learning task that is used to predict the value of the label from a set of related features."
    },
    "reference": "https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/tasks"
  },
  {
    "id": 56,
    "question": {
      "intitule": "Which metric can you use to evaluate a classification model?",
      "image": ""
    },
    "checkbox": {
      "A": "true positive rate",
      "B": "mean absolute error (MAE)",
      "C": "coefficient of determination (R2)",
      "D": "root mean squared error (RMSE)"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": "What does a good model look like?  \nAn ROC curve that approaches the top left corner with 100% true positive rate and 0% false positive rate will be the best model. A random model would display as a flat line from the bottom left to the top right corner. Worse than random would dip below the y=x line."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-understand-automated-ml#classification"
  },
  {
    "id": 57,
    "question": {
      "intitule": "Which two components can you drag onto a canvas in Azure Machine Learning designer? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "dataset",
      "B": "compute",
      "C": "pipeline",
      "D": "module"
    },
    "reponse": "A,D",
    "explanation": {
      "image": "",
      "text": "You can drag-and-drop datasets and modules onto the canvas."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/concept-designer"
  },
  {
    "id": 58,
    "question": {
      "intitule": "You need to create a training dataset and validation dataset from an existing dataset. Which module in the Azure Machine Learning designer should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Select Columns in Dataset",
      "B": "Add Rows",
      "C": "Split Data",
      "D": "Join Data"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": "A common way of evaluating a model is to divide the data into a training and test set by using Split Data, and then validate the model on the training data.  \nUse the Split Data module to divide a dataset into two distinct sets.  \nThe studio currently supports training/validation data splits"
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-configure-cross-validation-data-splits"
  },
  {
    "id": 59,
    "question": {
      "intitule": "Match the types of machine learning to the appropriate scenarios. To answer, drag the appropriate machine learning type from the column on the left to its scenario on the right. Each machine learning type may be used once, more than once, or not at all.",
      "image": "sources/images/2dd9da1a-5c49-489b-adaf-d4b091ad88af.jpg"
    },
    "checkbox": {
      "A": "Box 1 - Classification",
      "B": "Box 1 - Clustering",
      "C": "Box 1 - Regression",
      "D": "Box 2 - Classification",
      "E": "Box 2 - Clustering",
      "F": "Box 2 - Regression",
      "G": "Box 3 - Classification",
      "H": "Box 3 - Clustering",
      "I": "Box 3 - Regression"
	},
    "reponse": "C,E,G",
    "explanation": {
      "image": "sources/images/8f81da64-d9ac-4f13-80c1-2663b3e8e45e.jpg",
      "text": "Box 1: Regression  \nIn the most basic sense, regression refers to prediction of a numeric target.  \nLinear regression attempts to establish a linear relationship between one or more independent variables and a numeric outcome, or dependent variable.  \nYou use this module to define a linear regression method, and then train a model using a labeled dataset. The trained model can then be used to make predictions.\nBox 2: Clustering  \nClustering, in machine learning, is a method of grouping data points into similar clusters. It is also called segmentation.  \nOver the years, many clustering algorithms have been developed. Almost all clustering algorithms use the features of individual items to find similar items. For example, you might apply clustering to find similar people by demographics. You might use clustering with text analysis to group sentences with similar topics or sentiment.\nBox 3: Classification  \nTwo-class classification provides the answer to simple two-choice questions such as Yes/No or True/False."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/linear-regression"
  },
  {
    "id": 60,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/0722025a-d759-4336-a0b6-8607f2b6e372.jpg"
    },
    "checkbox": {
      "A": "Accuracy",
      "B": "Confidence",
      "C": "Root Mean Square Error",
      "D": "Sentiment"
	},
    "reponse": "A",
    "explanation": {
      "image": "sources/images/9fa96de4-95cc-4d4a-bdd9-2a9205f15cda.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/getting-started-build-a-classifier"
  },
  {
    "id": 61,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/84ab599e-eb00-4280-9c77-527a951dc4af.jpg"
    },
    "checkbox": {
      "A": "an inclusiveness",
      "B": "a privacy and security",
      "C": "a reliability and safety",
      "D": "a transparency"
	},
    "reponse": "C",
    "explanation": {
      "image": "sources/images/150c72e9-33db-426b-901f-ced08eb0e84c.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai"
  },
  {
    "id": 62,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/6f256c08-713b-4537-86fc-357645ff19b3.jpg"
    },
    "checkbox": {
      "A": "data ingestion",
      "B": "feature engineering",
      "C": "feature selection",
      "D": "model training"
	},
    "reponse": "C",
    "explanation": {
      "image": "sources/images/7e318706-73c0-4211-a000-ef25b0ffda15.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-science-process/create-features"
  },
  {
    "id": 63,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/7bd04cf8-aa1b-4aa2-bc47-c6ce113a7510.jpg"
    },
    "checkbox": {
      "A": "evaluation",
      "B": "feature engineering",
      "C": "hyperparameter tuning",
      "D": "labeling"
	},
    "reponse": "D",
    "explanation": {
      "image": "sources/images/e7f3f23f-ed31-4dac-9a72-712bb86ab566.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-label-data"
  },
  {
    "id": 64,
    "question": {
      "intitule": "You have an Azure Machine Learning model that predicts product quality. The model has a training dataset that contains 50,000 records. A sample of the data is shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": {
		  "1":"sources/images/32017b30-5f42-4e7e-a3d0-3b92596cd2cd.jpg",
		  "2":"sources/images/a336d6c7-8657-448e-98f4-5edd68d95c04.jpg",
	  }
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,C,F",
    "explanation": {
      "image": "sources/images/6aad8030-56d2-41e8-9a41-61e27e359afe.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/component-reference/filter-based-feature-selection"
  },
  {
    "id": 65,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/dafae353-7778-43da-8d56-f769fb50189b.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "B,D,E",
    "explanation": {
      "image": "sources/images/6381cca4-6dc6-4046-ae28-88fdf18b96fd.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/learn/modules/create-regression-model-azure-machine-learning-designer/5-create-training-pipeline https://docs.microsoft.com/en-us/learn/modules/create-classification-model-azure-machine-learning-designer/introduction https://docs.microsoft.com/en-us/learn/modules/create-clustering-model-azure-machine-learning-designer/1-introduction"
  },
  {
    "id": 66,
    "question": {
      "intitule": "Which two actions are performed during the data ingestion and data preparation stage of an Azure Machine Learning process? Each correct answer presents part of the solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Calculate the accuracy of the model.",
      "B": "Score test data by using the model.",
      "C": "Combine multiple datasets.",
      "D": "Use the model for real-time predictions.",
      "E": "Remove records that have missing values."
    },
    "reponse": "C,E",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/concept-data-ingestion https://docs.microsoft.com/en-us/azure/architecture/data-science-process/prepare-data"
  },
  {
    "id": 67,
    "question": {
      "intitule": "You need to predict the animal population of an area. Which Azure Machine Learning type should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "regression",
      "B": "clustering",
      "C": "classification"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": "Regression is a supervised machine learning technique used to predict numeric values."
    },
    "reference": "https://docs.microsoft.com/en-us/learn/modules/create-regression-model-azure-machine-learning-designer/1-introduction"
  },
  {
    "id": 68,
    "question": {
      "intitule": "Which two languages can you use to write custom code for Azure Machine Learning designer? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Python",
      "B": "R",
      "C": "C#",
      "D": "Scala"
    },
    "reponse": "A,B",
    "explanation": {
      "image": "",
      "text": "Use Azure Machine Learning designer for customizing using Python and R code."
    },
    "reference": "https://azure.microsoft.com/en-us/services/machine-learning/designer/#features"
  },
  {
    "id": 69,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/f3b46fa5-2cea-42c4-9aaa-2cc360087d55.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,D,F",
    "explanation": {
      "image": {
        "1": "sources/images/d9d9ad16-e865-4fc5-ab8e-5f49f84761ff.jpg"
      },
      "text": "Box 1: Yes\nFor regression problems, the label column must contain numeric data that represents the response variable. Ideally the numeric data represents a continuous scale.\nBox 2: No\nK-Means Clustering\nBecause the K-means algorithm is an unsupervised learning method, a label column is optional.\nIf your data includes a label, you can use the label values to guide selection of the clusters and optimize the model.\nIf your data has no label, the algorithm creates clusters representing possible categories, based solely on the data.\nBox 3: No\nFor classification problems, the label column must contain either categorical values or discrete values. Some examples might be a yes/no rating, a disease classification code or name, or an income group. If you pick a noncategorical column, the component will return an error during training."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/component-reference/train-model https://docs.microsoft.com/en-us/azure/machine-learning/component-reference/k-means-clustering"
  },
  {
    "id": 70,
    "question": {
      "intitule": "Your company wants to build a recycling machine for bottles. The recycling machine must automatically identify bottles of the correct shape and reject all other items. Which type of AI workload should the company use?",
      "image": ""
    },
    "checkbox": {
      "A": "anomaly detection",
      "B": "conversational AI",
      "C": "computer vision",
      "D": "natural language processing"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": "Azure's Computer Vision service gives you access to advanced algorithms that process images and return information based on the visual features you're interested in. For example, Computer Vision can determine whether an image contains adult content, find specific brands or objects, or find human faces."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview"
  },
  {
    "id": 71,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/d404af82-47bc-4219-b253-d214afb8fa23.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "B,C,E",
    "explanation": {
      "image": "sources/images/6ca2f936-2309-4e85-bcb7-f649c5a01a98.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/get-started-build-detector"
  },
  {
    "id": 72,
    "question": {
      "intitule": "In which two scenarios can you use the Form Recognizer service?",
      "image": ""
    },
    "checkbox": {
      "A": "Extract the invoice number from an invoice.",
      "B": "Translate a form from French to English.",
      "C": "Find image of product in a catalog.",
      "D": "Identify the retailer from a receipt."
    },
    "reponse": "A,D",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://azure.microsoft.com/en-gb/services/cognitive-services/form-recognizer/#features"
  },
  {
    "id": 73,
    "question": {
      "intitule": "Select the answer that correctly completes the sentence.",
      "image": "sources/images/6a1a2b0e-b19e-4d8c-8339-902adadcf892.jpg"
    },
    "checkbox": {
      "A": "forecasting",
      "B": "computer vision",
      "C": "conversational AI",
      "D": "anomaly detection"
	},
    "reponse": "B",
    "explanation": {
      "image": "sources/images/f903adbf-0766-415c-a867-ecde5c2118e9.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/intro-to-spatial-analysis-public-preview"
  },
  {
    "id": 74,
    "question": {
      "intitule": "You have a database that contains a list of employees and their photos. You are tagging new photos of the employees. For each of the following statements select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/9471f930-b475-4e9f-b87f-a8c1bf4019ed.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "A,C,F",
    "explanation": {
      "image": "sources/images/9e5a0bf2-77f4-44f4-909f-8d56a9c9ddce.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview https://docs.microsoft.com/en-us/azure/cognitive-services/face/concepts/face-detection"
  },
  {
    "id": 75,
    "question": {
      "intitule": "You need to develop a mobile app for employees to scan and store their expenses while travelling. Which type of computer vision should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "semantic segmentation",
      "B": "image classification",
      "C": "object detection",
      "D": "optical character recognition (OCR)"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": "Azure's Computer Vision API includes Optical Character Recognition (OCR) capabilities that extract printed or handwritten text from images. You can extract text from images, such as photos of license plates or containers with serial numbers, as well as from documents - invoices, bills, financial reports, articles, and more."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-recognizing-text"
  },
  {
    "id": 76,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/d7e02043-b3ac-4e63-945b-9898d3fd3192.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
	},
    "reponse": "A,C,F",
    "explanation": {
      "image": "sources/images/7d27e54a-684e-4896-b9e6-999710ee8035.jpg",
      "text": "Box 1: Yes\nCustom Vision functionality can be divided into two features. Image classification applies one or more labels to an image. Object detection is similar, but it also returns the coordinates in the image where the applied label(s) can be found.\nBox 2: Yes\nThe Custom Vision service uses a machine learning algorithm to analyze images. You, the developer, submit groups of images that feature and lack the characteristics in question. You label the images yourself at the time of submission. Then, the algorithm trains to this data and calculates its own accuracy by testing itself on those same images.\nBox 3: No\nCustom Vision service can be used only on graphic files."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/Custom-Vision-Service/overview"
  },
  {
    "id": 77,
    "question": {
      "intitule": "You are processing photos of runners in a race. You need to read the numbers on the runners' shirts to identity the runners in the photos. Which type of computer vision should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "facial recognition",
      "B": "optical character recognition (OCR)",
      "C": "image classification",
      "D": "object detection"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "Optical character recognition (OCR) allows you to extract printed or handwritten text from images and documents."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr"
  },
  {
    "id": 78,
    "question": {
      "intitule": "Match the types of machine learning to the appropriate scenarios. Select the match type whatever the order",
      "image": "sources/images/fd4e1b91-b432-4717-aac0-311fee64b64b.jpg"
    },
    "checkbox": {
      "A": "Facial detection",
      "B": "Facial recognition",
      "C": "Image classification",
      "D": "Object detection",
      "E": "Optical character recognition (OCR)",
      "F": "Semantic segmentation"
    },
    "reponse": "C,D,F",
    "explanation": {
      "image": "sources/images/4dea64a5-1438-4e70-8c01-ff9e79421fd4.jpg",
      "text": "Box 1: Image classification\nImage classification is a supervised learning problem: define a set of target classes (objects to identify in images), and train a model to recognize them using labeled example photos.\nBox 2: Object detection\nObject detection is a computer vision problem.\nWhile closely related to image classification, object detection performs image classification at a more granular scale. Object detection both locates and categorizes entities within images.\nBox 3: Semantic Segmentation\nSemantic segmentation achieves fine-grained inference by making dense predictions inferring labels for every pixel, so that each pixel is labeled with the class of its enclosing object ore region."
    },
    "reference": "https://developers.google.com/machine-learning/practica/image-classification https://docs.microsoft.com/en-us/dotnet/machine-learning/tutorials/object-detection-model-builder https://nanonets.com/blog/how-to-do-semantic-segmentation-using-deep-learning/"
  },
  {
    "id": 79,
    "question": {
      "intitule": "You use drones to identify where weeds grow between rows of crops to send an instruction for the removal of the weeds. This is an example of which type of computer vision?",
      "image": ""
    },
    "checkbox": {
      "A": "object detection",
      "B": "optical character recognition (OCR)",
      "C": "scene segmentation"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": "Object detection is similar to tagging, but the API returns the bounding box coordinates for each tag applied. For example, if an image contains a dog, cat and person, the Detect operation will list those objects together with their coordinates in the image.\nIncorrect Answers:\nB: Optical character recognition (OCR) allows you to extract printed or handwritten text from images and documents.\nC: Scene segmentation determines when a scene changes in video based on visual cues. A scene depicts a single event and it's composed by a series of consecutive shots, which are semantically related."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/face/#features https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr https://docs.microsoft.com/en-us/azure/azure-video-analyzer/video-analyzer-for-media-docs/video-indexer-overview"
  },
  {
    "id": 80,
    "question": {
      "intitule": "Match the facial recognition tasks to the appropriate questions.",
      "image": "sources/images/1c0b19d6-ed07-4f81-9ee8-95629ab9037d.jpg"
    },
    "checkbox": {
      "A": "Box 1 - grouping",
      "B": "Box 1 - identification",
      "C": "Box 1 - similarity",
      "D": "Box 1 - verification",
      "E": "Box 2 - grouping",
      "F": "Box 2 - identification",
      "G": "Box 2 - similarity",
      "H": "Box 2 - verification",
      "I": "Box 3 - grouping",
      "J": "Box 3 - identification",
      "K": "Box 3 - similarity",
      "L": "Box 3 - verification",
      "M": "Box 4 - grouping",
      "N": "Box 4 - identification",
      "O": "Box 4 - similarity",
      "P": "Box 4 - verification"
	},
    "reponse": "D,G,I,N",
    "explanation": {
      "image": "sources/images/319eb9f6-5eb9-4ea8-a1df-05448f3403f2.jpg",
      "text": "Box 1: verification\nFace verification: Check the likelihood that two faces belong to the same person and receive a confidence score.\nBox 2: similarity\nBox 3: Grouping\nBox 4: identification\nFace detection: Detect one or more human faces along with attributes such as: age, emotion, pose, smile, and facial hair, including 27 landmarks for each face in the image."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/face/#features"
  },
  {
    "id": 81,
    "question": {
      "intitule": "Match the types of computer vision workloads to the appropriate scenarios. Select the match type whatever the order",
      "image": "sources/images/094444fb-7e2b-4d83-91a5-6c31c5546981.jpg"
    },
    "checkbox": {
      "A": "Facial recognition",
      "B": "Image classification",
      "C": "Object detection",
      "D": "Optical character recognition (OCR)"
	},
    "reponse": "A,C,D",
    "explanation": {
      "image": {
        "1": "sources/images/1cb1d13c-7d7b-448e-bbdf-1c9f1c7ddcab.jpg"
      },
      "text": "Box 1: Facial recognition\nFace detection that perceives faces and attributes in an image; person identification that matches an individual in your private repository of up to 1 million people; perceived emotion recognition that detects a range of facial expressions like happiness, contempt, neutrality, and fear; and recognition and grouping of similar faces in images.\nBox 2: OCR\nBox 3: Objection detection\nObject detection is similar to tagging, but the API returns the bounding box coordinates (in pixels) for each object found. For example, if an image contains a dog, cat and person, the Detect operation will list those objects together with their coordinates in the image. You can use this functionality to process the relationships between the objects in an image. It also lets you determine whether there are multiple instances of the same tag in an image.\nThe Detect API applies tags based on the objects or living things identified in the image. There is currently no formal relationship between the tagging taxonomy and the object detection taxonomy. At a conceptual level, the Detect API only finds objects and living things, while the Tag API can also include contextual terms like \"indoor\", which can't be localized with bounding boxes."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/face/ https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-object-detection"
  },
  {
    "id": 82,
    "question": {
      "intitule": "You need to determine the location of cars in an image so that you can estimate the distance between the cars. Which type of computer vision should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "optical character recognition (OCR)",
      "B": "object detection",
      "C": "image classification",
      "D": "face detection"
    },
    "reponse": "B",
    "explanation": {
      "text": "Object detection is similar to tagging, but the API returns the bounding box coordinates (in pixels) for each object found. For example, if an image contains a dog, cat and person, the Detect operation will list those objects together with their coordinates in the image. You can use this functionality to process the relationships between the objects in an image. It also lets you determine whether there are multiple instances of the same tag in an image.\nThe Detect API applies tags based on the objects or living things identified in the image. There is currently no formal relationship between the tagging taxonomy and the object detection taxonomy. At a conceptual level, the Detect API only finds objects and living things, while the Tag API can also include contextual terms like \"indoor\", which can't be localized with bounding boxes."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-object-detection"
  },
  {
    "id": 83,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/aa17fbe8-e699-486a-8153-b13f56f7d93c.jpg"
    },
    "checkbox": {
      "A": "Computer Vision",
      "B": "Custom Vision",
      "C": "Form Recognition",
      "D": "Video Indexer"
	},
    "reponse": "B",
    "explanation": {
      "image": {
        "1": "sources/images/7292cc4f-986d-4fa2-b522-e37a90854cc7.jpg"
      },
      "text": "Azure Custom Vision is a cognitive service that lets you build, deploy, and improve your own image classifiers. An image classifier is an AI service that applies labels (which represent classes) to images, according to their visual characteristics. Unlike the Computer Vision service, Custom Vision allows you to specify the labels to apply.\nNote: The Custom Vision service uses a machine learning algorithm to apply labels to images. You, the developer, must submit groups of images that feature and lack the characteristics in question. You label the images yourself at the time of submission. Then the algorithm trains to this data and calculates its own accuracy by testing itself on those same images. Once the algorithm is trained, you can test, retrain, and eventually use it to classify new images according to the needs of your app. You can also export the model itself for offline use.\nIncorrect Answers:\nComputer Vision:\nAzure's Computer Vision service provides developers with access to advanced algorithms that process images and return information based on the visual features you're interested in. For example, Computer Vision can determine whether an image contains adult content, find specific brands or objects, or find human faces."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/home"
  },
  {
    "id": 84,
    "question": {
      "intitule": "You send an image to a Computer Vision API and receive back the annotated image shown in the exhibit. Which type of computer vision was used?",
      "image": "sources/images/06c4b074-8caa-4819-ad77-d3362b9b28c9.jpg"
    },
    "checkbox": {
      "A": "object detection",
      "B": "face detection",
      "C": "optical character recognition (OCR)",
      "D": "image classification"
    },
    "reponse": "A",
    "explanation": {
      "image": {
        "1": "sources/images/06c4b074-8caa-4819-ad77-d3362b9b28c9.jpg"
      },
      "text": "Object detection is similar to tagging, but the API returns the bounding box coordinates (in pixels) for each object found. For example, if an image contains a dog, cat and person, the Detect operation will list those objects together with their coordinates in the image. You can use this functionality to process the relationships between the objects in an image. It also lets you determine whether there are multiple instances of the same tag in an image.\nThe Detect API applies tags based on the objects or living things identified in the image. There is currently no formal relationship between the tagging taxonomy and the object detection taxonomy. At a conceptual level, the Detect API only finds objects and living things, while the Tag API can also include contextual terms like \"indoor\", which can't be localized with bounding boxes."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-object-detection"
  },
  {
    "id": 85,
    "question": {
      "intitule": "What are two tasks that can be performed by using the Computer Vision service? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Train a custom image classification model.",
      "B": "Detect faces in an image.",
      "C": "Recognize handwritten text.",
      "D": "Translate the text in an image between languages."
    },
    "reponse": "B,C",
    "explanation": {
      "image": {},
      "text": "B: Azure's Computer Vision service provides developers with access to advanced algorithms that process images and return information based on the visual features you're interested in. For example, Computer Vision can determine whether an image contains adult content, find specific brands or objects, or find human faces.\nC: Computer Vision includes Optical Character Recognition (OCR) capabilities. You can use the new Read API to extract printed and handwritten text from images and documents."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/home"
  },
  {
    "id": 86,
    "question": {
      "intitule": "What is a use case for classification?",
      "image": ""
    },
    "checkbox": {
      "A": "predicting how many cups of coffee a person will drink based on how many hours the person slept the previous night.",
      "B": "analyzing the contents of images and grouping images that have similar colors",
      "C": "predicting whether someone uses a bicycle to travel to work based on the distance from home to work",
      "D": "predicting how many minutes it will take someone to run a race based on past race times"
    },
    "reponse": "C",
    "explanation": {
      "image": {},
      "text": "Two-class classification provides the answer to simple two-choice questions such as Yes/No or True/False.\nIncorrect Answers:\nA: This is Regression.\nB: This is Clustering.\nD: This is Regression."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/algorithm-module-reference/linear-regression https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/machine-learning-initialize-model-clustering"
  },
  {
    "id": 87,
    "question": {
      "intitule": "What are two tasks that can be performed by using computer vision? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Predict stock prices.",
      "B": "Detect brands in an image.",
      "C": "Detect the color scheme in an image",
      "D": "Translate text between languages.",
      "E": "Extract key phrases."
    },
    "reponse": "B,C",
    "explanation": {
      "image": {},
      "text": "B: Identify commercial brands in images or videos from a database of thousands of global logos. You can use this feature, for example, to discover which brands are most popular on social media or most prevalent in media product placement.\nC: Analyze color usage within an image. Computer Vision can determine whether an image is black & white or color and, for color images, identify the dominant and accent colors."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview"
  },
  {
    "id": 88,
    "question": {
      "intitule": "You need to build an image tagging solution for social media that tags images of your friends automatically. Which Azure Cognitive Services service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Face",
      "B": "Form Recognizer",
      "C": "Text Analytics",
      "D": "Computer Vision"
    },
    "reponse": "A",
    "explanation": {
      "image": {},
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/howtodetectfacesinimage"
  },
  {
    "id": 89,
    "question": {
      "intitule": "In which two scenarios can you use the Form Recognizer service? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Identify the retailer from a receipt",
      "B": "Translate from French to English",
      "C": "Extract the invoice number from an invoice",
      "D": "Find images of products in a catalog"
    },
    "reponse": "A,C",
    "explanation": {
      "image": {},
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/applied-ai-services/form-recognizer/overview?tabs=v2-1"
  },
  {
    "id": 90,
    "question": {
      "intitule": "Match the facial recognition tasks to the appropriate questions.",
      "image": "sources/images/6c2a4f9b-b325-4eac-b737-e45c0f3da6eb.jpg"
    },
    "checkbox": {
      "A": "grouping",
      "B": "identification",
      "C": "similarity",
      "D": "verification"
	},
    "reponse": "B,C,D",
    "explanation": {
      "image": {
        "1": "sources/images/ef7a75e9-82d6-427c-ada6-23e356cd6b8f.jpg"
      },
      "text": "Box 1: verification\nIdentity verification\nModern enterprises and apps can use the Face identification and Face verification operations to verify that a user is who they claim to be.\nBox 2: similarity\nThe Find Similar operation does face matching between a target face and a set of candidate faces, finding a smaller set of faces that look similar to the target face.\nThis is useful for doing a face search by image.\nThe service supports two working modes, matchPerson and matchFace. The matchPerson mode returns similar faces after filtering for the same person by using the Verify API. The matchFace mode ignores the same-person filter. It returns a list of similar candidate faces that may or may not belong to the same person.\nBox 3: identification\nFace identification can address \"one-to-many\" matching of one face in an image to a set of faces in a secure repository. Match candidates are returned based on how closely their face data matches the query face. This scenario is used in granting building or airport access to a certain group of people or verifying the user of a device."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/face/overview"
  },
  {
    "id": 91,
    "question": {
      "intitule": "Which Computer Vision feature can you use to generate automatic captions for digital photographs?",
      "image": ""
    },
    "checkbox": {
      "A": "Recognize text.",
      "B": "Identify the areas of interest.",
      "C": "Detect objects.",
      "D": "Describe the images."
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": "Describe images with human-readable language  \nComputer Vision can analyze an image and generate a human-readable phrase that describes its contents. The algorithm returns several descriptions based on different visual features, and each description is given a confidence score. The final output is a list of descriptions ordered from highest to lowest confidence.  \nThe image description feature is part of the Analyze Image API."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-describing-images"
  },
  {
    "id": 92,
    "question": {
      "intitule": "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
      "image": ""
    },
    "checkbox": {
      "A": "Custom Vision",
      "B": "Face",
      "C": "Form Recognizer",
      "D": "Language"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": "Form Recognizer applies advanced machine learning to accurately extract text, key-value pairs, tables, and structures from documents."
    },
    "reference": "https://azure.microsoft.com/en-us/services/form-recognizer/"
  },
  {
    "id": 93,
    "question": {
      "intitule": "HOTSPOT (Drag and Drop is not supported)  \nSelect the answer that correctly completes the sentence.  \nHot Area:",
      "image": "sources/images/f264773c-1069-4bf1-894d-7756b65a316a.jpg"
    },
    "checkbox": {
      "A": "object detection",
      "B": "facial recognition",
      "C": "image classification",
      "D": "optical character recognition (OCR)"
	},
    "reponse": "D",
    "explanation": {
      "image": "sources/images/19ef52ae-cde4-4f83-a6bc-c21e4a7887dd.jpg",
      "text": "Handwriting OCR (optical character recognition) is the process of automatically extracting handwritten information from paper, scans and other low-quality digital documents."
    },
    "reference": "https://vidado.ai/handwriting-ocr"
  },
  {
    "id": 94,
    "question": {
      "intitule": "You are developing a solution that uses the Text Analytics service.  \nYou need to identify the main talking points in a collection of documents.  \nWhich type of natural language processing should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "entity recognition",
      "B": "key phrase extraction",
      "C": "sentiment analysis",
      "D": "language detection"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "Broad entity extraction: Identify important concepts in text, including key  \nKey phrase extraction/ Broad entity extraction: Identify important concepts in text, including key phrases and named entities such as people, places, and organizations."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 95,
    "question": {
      "intitule": "In which two scenarios can you use speech recognition? Each correct answer presents a complete solution.  \nNote: Each correct selection is worth one point.",
      "image": ""
    },
    "checkbox": {
      "A": "an in-car system that reads text messages aloud",
      "B": "providing closed captions for recorded or live videos",
      "C": "creating an automated public address system for a train station",
      "D": "creating a transcript of a telephone call or meeting"
    },
    "reponse": "B,D",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://azure.microsoft.com/en-gb/services/cognitive-services/speech-to-text/#features"
  },
  {
    "id": 96,
    "question": {
      "intitule": "HOTSPOT (Drag and Drop is not supported)  \nTo complete the sentence, select the appropriate option in the answer area.  \nHot Area:",
      "image": "sources/images/b23d4cc0-063c-44e9-8278-f5abbd7e9839.jpg"
    },
    "checkbox": {
      "A": "sentiment analysis",
      "B": "speech recognition",
      "C": "speech synthesis",
      "D": "translation"
    },
    "reponse": "B",
    "explanation": {
      "image": "sources/images/95988e70-44a8-4175-bd1f-a8ee78839e35.jpg",
      "text": ""
    },
    "reference": "https://azure.microsoft.com/en-gb/services/cognitive-services/speech-to-text/#features"
  },
  {
    "id": 97,
    "question": {
      "intitule": "You need to build an app that will read recipe instructions aloud to support users who have reduced vision.  \nWhich version service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Text Analytics",
      "B": "Translator",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/#features"
  },
  {
    "id": 98,
    "question": {
      "intitule": "HOTSPOT (Drag and Drop is not supported)  \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.  \nNote: Each correct selection is worth one point.  \nHot Area:",
      "image": "sources/images/331baabf-c050-4ab7-84e2-d13748785278.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,C,E",
    "explanation": {
      "image": "sources/images/9cc9dff3-9216-48c4-9644-c1dd6de2107a.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-gb/azure/cognitive-services/text-analytics/overview https://azure.microsoft.com/en-gb/services/cognitive-services/speech-services/"
  },
  {
    "id": 99,
    "question": {
      "intitule": "Your website has a chatbot to assist customers.  \nYou need to detect when a customer is upset based on what the customer types in the chatbot.  \nWhich type of AI workload should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "anomaly detection",
      "B": "computer vision",
      "C": "regression",
      "D": "natural language processing"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": "Natural language processing (NLP) is used for tasks such as sentiment analysis, topic detection, language detection, key phrase extraction, and document categorization.  \nSentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 100,
    "question": {
      "intitule": "You plan to develop a bot that will enable users to query a knowledge base by using natural language processing.  \nWhich two services should you include in the solution? Each correct answer presents part of the solution.  \nNote: Each correct selection is worth one point.",
      "image": ""
    },
    "checkbox": {
      "A": "QnA Maker",
      "B": "Azure Bot Service",
      "C": "Form Recognizer",
      "D": "Anomaly Detector"
    },
    "reponse": "A,B",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0  \nhttps://docs.microsoft.com/en-us/azure/cognitive-services/luis/choose-natural-language-processing-service"
  },
  {
    "id": 101,
    "question": {
      "intitule": "In which two scenarios can you use a speech synthesis solution? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "an automated voice that reads back a credit card number entered into a telephone by using a numeric keypad",
      "B": "generating live captions for a news broadcast",
      "C": "extracting key phrases from the audio recording of a meeting",
      "D": "an AI character in a computer game that speaks audibly to a player"
    },
    "reponse": "A,D",
    "explanation": {
      "image": "",
      "text": "Azure Text to Speech is a Speech service feature that converts text to lifelike speech.\nIncorrect Answers:\nC: Extracting key phrases is not speech synthesis."
    },
    "reference": "https://azure.microsoft.com/en-in/services/cognitive-services/text-to-speech/"
  },
  {
    "id": 102,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/12897aa8-319e-4f95-91b5-7eb5842dee9a.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,C,F",
    "explanation": {
      "image": "sources/images/bbd6a73b-4f09-4c65-b2bb-b1073834dcc4.jpg",
      "text": "The translator service provides multi-language support for text translation, transliteration, language detection, and dictionaries.\nSpeech-to-Text, also known as automatic speech recognition (ASR), is a feature of Speech Services that provides transcription."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/Translator/translator-info-overview https://docs.microsoft.com/en-us/legal/cognitive-services/speech-service/speech-to-text/transparency-note"
  },
  {
    "id": 103,
    "question": {
      "intitule": "You need to scan the news for articles about your customers and alert employees when there is a negative article. Positive articles must be added to a press book. Which natural language processing tasks should you use to complete the process?",
      "image": "sources/images/47182d58-5ac8-4b3c-a84a-64edd37ec91a.jpg"
    },
    "checkbox": {
	  "A": "Box 1 - Entity recognition",
      "B": "Box 1 - Sentiment Analysis",
      "C": "Box 1 - Speech synthesis",
      "D": "Box 1 - Translation",
      "E": "Box 2 - Entity recognition",
      "F": "Box 2 - Sentiment Analysis",
      "G": "Box 2 - Speech synthesis",
      "H": "Box 2 - Translation"
    },
    "reponse": "A,F",
    "explanation": {
      "image": "sources/images/9b4b6a90-95bc-4918-8d9a-0cabe645bbbe.jpg",
      "text": "Box 1: Entity recognition the Named Entity Recognition module in Machine Learning Studio (classic), to identify the names of things, such as people, companies, or locations in a column of text.\nNamed entity recognition is an important area of research in machine learning and natural language processing (NLP), because it can be used to answer many real-world questions, such as:\n-Which companies were mentioned in a news article?\n-Does a tweet contain the name of a person? Does the tweet also provide his current location?\n-Were specified products mentioned in complaints or reviews?\nBox 2: Sentiment Analysis\nThe Text Analytics API's Sentiment Analysis feature provides two ways for detecting positive and negative sentiment. If you send a Sentiment Analysis request, the API will return sentiment labels (such as \"negative\", \"neutral\" and \"positive\") and confidence scores at the sentence and document-level."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/machine-learning/studio-module-reference/named-entity-recognition https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-sentiment-analysis"
  },
  {
    "id": 104,
    "question": {
      "intitule": "You are building a knowledge base by using QnA Maker. Which file format can you use to populate the knowledge base?",
      "image": ""
    },
    "checkbox": {
      "A": "PPTX",
      "B": "XML",
      "C": "ZIP",
      "D": "PDF"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": "D: Content types of documents you can add to a knowledge base:\nContent types include many standard structured documents such as PDF, DOC, and TXT.\nNote: The tool supports the following file formats for ingestion:\n-.tsv: QnA contained in the format Question(tab)Answer.\n-.txt, .docx, .pdf: QnA contained as regular FAQ content--that is, a sequence of questions and answers.\nIncorrect Answers:\nA: PPTX is the default presentation file format for new PowerPoint presentations.\nB: It is not possible to ingest xml file directly."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/concepts/data-sources-and-content"
  },
  {
    "id": 105,
    "question": {
      "intitule": "In which scenario should you use key phrase extraction?",
      "image": ""
    },
    "checkbox": {
      "A": "identifying whether reviews of a restaurant are positive or negative",
      "B": "generating captions for a video based on the audio track",
      "C": "identifying which documents provide information about the same topics",
      "D": "translating a set of documents from English to German"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": ""
  },
  {
    "id": 106,
    "question": {
      "intitule": "You have insurance claim reports that are stored as text. You need to extract key terms from the reports to generate summaries. Which type of AI workload should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "natural language processing",
      "B": "conversational AI",
      "C": "anomaly detection",
      "D": "computer vision"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 107,
    "question": {
      "intitule": "To complete the sentence, select the appropriate option in the answer area.",
      "image": "sources/images/b1b3344b-12ac-4fee-8dba-9b8b6dfc0276.jpg"
    },
    "checkbox": {
      "A": "classify email messages as work-related or personnal",
      "B": "predict the number of future car rentals",
      "C": "predict wich website visitors will mak e transaction",
      "D": "stop a process in factory when extremely high temperatures are registered"
    },
    "reponse": "A",
    "explanation": {
      "image": "sources/images/b3873481-8d33-40e9-adfe-ef8c89317c87.jpg",
      "text": "Natural language processing (NLP) is used for tasks such as sentiment analysis, topic detection, language detection, key phrase extraction, and document categorization."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 108,
    "question": {
      "intitule": "Which AI service can you use to interpret the meaning of a user input such as `Call me back later?`",
      "image": ""
    },
    "checkbox": {
      "A": "Translator",
      "B": "Text Analytics",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": "Language Understanding (LUIS) is a cloud-based AI service, that applies custom machine-learning intelligence to a user's conversational, natural language text to predict overall meaning, and pull out relevant, detailed information."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/luis/what-is-luis"
  },
  {
    "id": 109,
    "question": {
      "intitule": "You are developing a chatbot solution in Azure. Which service should you use to determine a user's intent?",
      "image": ""
    },
    "checkbox": {
      "A": "Translator",
      "B": "QnA Maker",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": "Language Understanding (LUIS) is a cloud-based API service that applies custom machine-learning intelligence to a user's conversational, natural language text to predict overall meaning, and pull out relevant, detailed information.\nDesign your LUIS model with categories of user intentions called intents. Each intent needs examples of user utterances. Each utterance can provide data that needs to be extracted with machine-learning entities."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/luis/what-is-luis"
  },
  {
    "id": 110,
    "question": {
      "intitule": "You need to make the written press releases of your company available in a range of languages. Which service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Translator",
      "B": "Text Analytics",
      "C": "Speech",
      "D": "Language Understanding (LUIS)"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": "Translator is a cloud-based machine translation service you can use to translate text in near real-time through a simple REST API call. The service uses modern neural machine translation technology and offers statistical machine translation technology. Custom Translator is an extension of Translator, which allows you to build neural translation systems."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/translator/"
  },
  {
    "id": 111,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/e6e79de1-60f2-45df-8ac8-9faa34fb37d6.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,D,E",
    "explanation": {
      "image": {
        "1": "sources/images/493cda16-e0f6-496c-a5db-e9865ecdcc73.jpg"
      },
      "text": "Box 1: Yes\nYou can detect which language the input text is written in and report a single language code for every document submitted on the request in a wide range of languages, variants, dialects, and some regional/cultural languages. The language code is paired with a score indicating the strength of the score.\nBox 2: No\nBox 3: Yes\nNamed Entity Recognition: Identify and categorize entities in your text as people, places, organizations, date/time, quantities, percentages, currencies, and more. Well-known entities are also recognized and linked to more information on the web."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview"
  },
  {
    "id": 112,
    "question": {
      "intitule": "Match the types of natural languages processing workloads to the appropriate scenarios. Select the match type whatever the order",
      "image": "sources/images/660ebeb4-f0e8-4133-81f6-7abe3a04fc6c.jpg"
    },
    "checkbox": {
      "A": "Entity recognition",
      "B": "Key phrase extraction",
      "C": "Language modeling",
      "D": "Sentiment analysis",
      "E": "Translation",
      "F": "Speech recognition and specche synthesis"
    },
    "reponse": "A,D,E",
    "explanation": {
      "image": {
        "1": "sources/images/9d70ebcc-fd60-4455-8cfd-d7a584f233bc.jpg"
      },
      "text": "Box 1: Entity recognition\nNamed Entity Recognition (NER) is the ability to identify different entities in text and categorize them into pre-defined classes or types such as: person, location, event, product, and organization.\nBox 2: Sentiment analysis\nSentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral.\nBox 3: Translation\nUsing Microsoft's Translator text API\nThis versatile API from Microsoft can be used for the following:\nTranslate text from one language to another.\nTransliterate text from one script to another.\nDetecting language of the input text.\nFind alternate translations to specific text.\nDetermine the sentence length."
    },
    "reference": "https://docs.microsoft.com/en-in/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-entity-linking?tabs=version-3-preview https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics"
  },
  {
    "id": 113,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/481b68d3-8254-4dc6-b71f-d579e18c51cc.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"      
	},
    "reponse": "A,D,E",
    "explanation": {
      "image": {
        "1": "sources/images/1d7b095a-a2d5-4af9-9b88-b57b21918039.jpg"
      },
      "text": "Box 1: Yes\nContent Moderator is part of Microsoft Cognitive Services allowing businesses to use machine assisted moderation of text, images, and videos that augment human review.\nThe text moderation capability now includes a new machine-learning based text classification feature which uses a trained model to identify possible abusive, derogatory or discriminatory language such as slang, abbreviated words, offensive, and intentionally misspelled words for review.\nBox 2: No\nAzure's Computer Vision service gives you access to advanced algorithms that process images and return information based on the visual features you're interested in. For example, Computer Vision can determine whether an image contains adult content, find specific brands or objects, or find human faces.\nBox 3: Yes\nNatural language processing (NLP) is used for tasks such as sentiment analysis, topic detection, language detection, key phrase extraction, and document categorization.\nSentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral."
    },
    "reference": "https://azure.microsoft.com/es-es/blog/machine-assisted-text-classification-on-content-moderator-public-preview/ https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 114,
    "question": {
      "intitule": "You are developing a natural language processing solution in Azure. The solution will analyze customer reviews and determine how positive or negative each review is. This is an example of which type of natural language processing workload?",
      "image": ""
    },
    "checkbox": {
      "A": "language detection",
      "B": "sentiment analysis",
      "C": "key phrase extraction",
      "D": "entity recognition"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "Sentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 115,
    "question": {
      "intitule": "You use natural language processing to process text from a Microsoft news story. You receive the output shown in the following exhibit. Which type of natural languages processing was performed?",
      "image": "sources/images/33f2cf69-cbfd-4dcf-9ad2-272f2375ca3d.jpg"
    },
    "checkbox": {
      "A": "entity recognition",
      "B": "key phrase extraction",
      "C": "sentiment analysis",
      "D": "translation"
    },
    "reponse": "A",
    "explanation": {
      "image": "",
      "text": "Named Entity Recognition (NER) is the ability to identify different entities in text and categorize them into pre-defined classes or types such as: person, location, event, product, and organization.\nIn this question, the square brackets indicate the entities such as DateTime, PersonType, Skill."
    },
    "reference": "https://docs.microsoft.com/en-in/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-entity-linking?tabs=version-3-preview"
  },
  {
    "id": 116,
    "question": {
      "intitule": "You plan to apply Text Analytics API features to a technical support ticketing system. Match the Text Analytics API features to the appropriate natural language processing scenarios.",
      "image": "sources/images/cca17d30-ac0b-43df-911c-3f564c1b4ad7.jpg"
    },
    "checkbox": {
      "A": "Box 1 - Entity recognition",
      "B": "Box 1 - Key phrase extraction",
      "C": "Box 1 - Language detection",
      "D": "Box 1 - Sentiment analysis",
      "E": "Box 2 - Entity recognition",
      "F": "Box 2 - Key phrase extraction",
      "G": "Box 2 - Language detection",
      "H": "Box 2 - Sentiment analysis",
      "I": "Box 3 - Entity recognition",
      "J": "Box 3 - Key phrase extraction",
      "K": "Box 3 - Language detection",
      "L": "Box 3 - Sentiment analysis"
    },
    "reponse": "D,F,I",
    "explanation": {
      "image": {
        "1": "sources/images/d0a3aab7-b5eb-4db8-8338-7ca4a6f0e06e.jpg"
      },
      "text": "Box1: Sentiment analysis\nSentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral.\nBox 2: Broad entity extraction\nBroad entity extraction: Identify important concepts in text, including key\nKey phrase extraction/ Broad entity extraction: Identify important concepts in text, including key phrases and named entities such as people, places, and organizations.\nBox 3: Entity Recognition\nNamed Entity Recognition: Identify and categorize entities in your text as people, places, organizations, date/time, quantities, percentages, currencies, and more.\nWell-known entities are also recognized and linked to more information on the web."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics"
  },
  {
    "id": 117,
    "question": {
      "intitule": "You are authoring a Language Understanding (LUIS) application to support a music festival. You want users to be able to ask questions about scheduled shows, such as: `Which act is playing on the main stage?` The question `Which act is playing on the main stage?` is an example of which type of element?",
      "image": ""
    },
    "checkbox": {
      "A": "an intent",
      "B": "an utterance",
      "C": "a domain",
      "D": "an entity"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "Utterances are input from the user that your app needs to interpret."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/LUIS/luis-concept-utterance"
  },
  {
    "id": 118,
    "question": {
      "intitule": "You build a QnA Maker bot by using a frequently asked questions (FAQ) page. You need to add professional greetings and other responses to make the bot more user friendly. What should you do?",
      "image": ""
    },
    "checkbox": {
      "A": "Increase the confidence threshold of responses",
      "B": "Enable active learning",
      "C": "Create multi-turn questions",
      "D": "Add chit-chat"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/how-to/chit-chat-knowledge-base?tabs=v1"
  },
  {
    "id": 119,
    "question": {
      "intitule": "You need to develop a chatbot for a website. The chatbot must answer users' questions based on the information in the following documents:\n-A product troubleshooting guide in a Microsoft Word document\n-A frequently asked questions (FAQ) list on a webpage. Which service should you use to process the documents?",
      "image": ""
    },
    "checkbox": {
      "A": "Azure Bot Service",
      "B": "Language Understanding",
      "C": "Text Analytics",
      "D": "QnA Maker"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/Overview/overview"
  },
  {
    "id": 120,
    "question": {
      "intitule": "You are building a Language Understanding model for an e-commerce business. You need to ensure that the model detects when utterances are outside the intended scope of the model. What should you do?",
      "image": ""
    },
    "checkbox": {
      "A": "Test the model by using new utterances",
      "B": "Add utterances to the None intent",
      "C": "Create a prebuilt task entity",
      "D": "Create a new model"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "The None intent is filled with utterances that are outside of your domain."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/LUIS/luis-concept-intent"
  },
  {
    "id": 121,
    "question": {
      "intitule": "Which two scenarios are examples of a natural language processing workload? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "monitoring the temperature of machinery to turn on a fan when the temperature reaches a specific threshold",
      "B": "a smart device in the home that responds to questions such as, \"What will the weather be like today?\"",
      "C": "a website that uses a knowledge base to interactively respond to users' questions",
      "D": "assembly line machinery that autonomously inserts headlamps into cars"
    },
    "reponse": "B,C",
    "explanation": {
      "image": "",
      "text": "Natural language processing (NLP) is used for tasks such as sentiment analysis, topic detection, language detection, key phrase extraction, and document categorization."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/natural-language-processing"
  },
  {
    "id": 122,
    "question": {
      "intitule": "You have an AI solution that provides users with the ability to control smart devices by using verbal commands. Which two types of natural language processing (NLP) workloads does the solution use? Each correct answer presents part of the solution.",
      "image": ""
    },
    "checkbox": {
      "A": "text-to-speech",
      "B": "key phrase extraction",
      "C": "speech-to-text",
      "D": "language modeling",
      "E": "translation"
    },
    "reponse": "B,C",
    "explanation": {
      "image": "",
      "text": "Key phrase extraction is one of the features offered by Azure Cognitive Service for Language, a collection of machine learning and AI algorithms in the cloud for developing intelligent applications that involve written language. Use key phrase extraction to quickly identify the main concepts in text. For example, in the text \"The food was delicious and the staff were wonderful.\", key phrase extraction will return the main topics: \"food\" and \"wonderful staff\"."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/language-service/key-phrase-extraction/overview"
  },
  {
    "id": 123,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/2a718ccc-23bb-480f-9de1-1e13077aa25a.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,D,E",
    "explanation": {
      "image": "sources/images/556e8dc5-43b0-4d39-a218-6475eba5decc.jpg",
      "text": "Box 1: Yes\nAzure Cognitive Service for Language provides features including:\n* Language detection: This pre-configured feature evaluates text, and determines the language it was written in. It returns a language identifier and a score that indicates the strength of the analysis.\nBox 2: No\nHandwritten detection is part of OCR (Optical Character Recognition).\nBox 3: Yes\nAzure Cognitive Service for Language provides features including:\n* Named Entity Recognition (NER): This pre-configured feature identifies entities in text across several pre-defined categories."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/language-service/overview"
  },
  {
    "id": 124,
    "question": {
      "intitule": "You plan to use Azure Cognitive Services to develop a voice controlled personal assistant app. Match the Azure Cognitive Services to the appropriate tasks.",
      "image": "sources/images/2bdff9ef-5756-4801-8b5b-9d28bdf1d42e.jpg"
    },
    "checkbox": {
      "A": "Box 1 - Speech",
      "B": "Box 1 - Language service",
      "C": "Box 1 - Translator Text",
      "D": "Box 2 - Speech",
      "E": "Box 2 - Language service",
      "F": "Box 2 - Translator Text",
      "G": "Box 3 - Speech",
      "H": "Box 3 - Language service",
      "I": "Box 3 - Translator Text"
    },
    "reponse": "A,E,G",
    "explanation": {
      "image": "sources/images/e54e2696-c869-4e50-857f-bc9142596e7c.jpg",
      "text": "Box 1: Speech\nThe Speech service provides speech-to-text and text-to-speech capabilities with an Azure Speech resource. You can transcribe speech to text with high accuracy, produce natural-sounding text-to-speech voices, translate spoken audio, and use speaker recognition during conversations.\nBox 2: Language service\nBuild applications with conversational language understanding, a Cognitive Service for Language feature that understands natural language to interpret user goals and extracts key information from conversational phrases. Create multilingual, customizable intent classification and entity extraction models for your domain-specific keywords or phrases across 96 languages.\nBox 3: Speech\nIncorrect:\nNot Translator text: Text translation is a cloud-based REST API feature of the Translator service that uses neural machine translation technology to enable quick and accurate source-to-target text translation in real time across all supported languages."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/overview https://azure.microsoft.com/en-us/services/cognitive-services/conversational-language-understanding/ https://docs.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview"
  },
  {
    "id": 125,
    "question": {
      "intitule": "You need to make the written press releases of your company available in a range of languages. Which service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Speech",
      "B": "Language",
      "C": "Translator",
      "D": "Personalizer"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": "Translator, an AI service for real-time document and text translation.\nTranslate text instantly or in batches across more than 100 languages, powered by the latest innovations in machine translation. Support a wide range of use cases, such as translation for call centers, multilingual conversational agents, or in-app communication."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/translator/"
  },
  {
    "id": 126,
    "question": {
      "intitule": "You have insurance claim reports that are stored as text. You need to extract key terms from the reports to generate summaries. Which type of AI workload should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "anomaly detection",
      "B": "natural language processing",
      "C": "computer vision",
      "D": "knowledge mining"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": "Key phrase extraction is one of the features offered by Azure Cognitive Service for Language, a collection of machine learning and AI algorithms in the cloud for developing intelligent applications that involve written language. Use key phrase extraction to quickly identify the main concepts in text. For example, in the text \"The food was delicious and the staff were wonderful.\", key phrase extraction will return the main topics: \"food\" and \"wonderful staff\"."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/language-service/key-phrase-extraction/overview"
  },
  {
    "id": 127,
    "question": {
      "intitule": "You need to build an app that will read recipe instructions aloud to support users who have reduced vision. Which version service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Language service",
      "B": "Translator",
      "C": "Speech",
      "D": "Personalizer"
    },
    "reponse": "C",
    "explanation": {
      "image": "",
      "text": "Speech, a managed service offering industry-leading speech capabilities such as speech-to-text, text-to-speech, speech translation, and speaker recognition."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/"
  },
  {
    "id": 128,
    "question": {
      "intitule": "You have a webchat bot that provides responses from a QnA Maker knowledge base. You need to ensure that the bot uses user feedback to improve the relevance of the responses over time. What should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "key phrase extraction",
      "B": "sentiment analysis",
      "C": "business logic",
      "D": "active learning"
    },
    "reponse": "D",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/how-to/improve-knowledge-base"
  },
  {
    "id": 129,
    "question": {
      "intitule": "You are developing a conversational AI solution that will communicate with users through multiple channels including email, Microsoft Teams, and webchat. Which service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "Text Analytics",
      "B": "Azure Bot Service",
      "C": "Translator",
      "D": "Form Recognizer"
    },
    "reponse": "B",
    "explanation": {
      "image": "",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0"
  },
  {
    "id": 130,
    "question": {
      "intitule": "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "image": "sources/images/24e51069-3936-437a-b034-4fa46cd3b51e.jpg"
    },
    "checkbox": {
      "A": "Statement 1 - Yes",
      "B": "Statement 1 - No",
      "C": "Statement 2 - Yes",
      "D": "Statement 2 - No",
      "E": "Statement 3 - Yes",
      "F": "Statement 3 - No"
    },
    "reponse": "A,D,E",
    "explanation": {
      "image": "sources/images/ea064f01-b716-48b3-8bc4-91ced0dff625.jpg",
      "text": ""
    },
    "reference": "https://docs.microsoft.com/en-us/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0"
  },
  {
    "id": 131,
    "question": {
      "intitule": "You need to provide content for a business chatbot that will help answer simple user queries. What are three ways to create question and answer text by using QnA Maker? Each correct answer presents a complete solution.",
      "image": ""
    },
    "checkbox": {
      "A": "Generate the questions and answers from an existing webpage.",
      "B": "Use automated machine learning to train a model based on a file that contains the questions.",
      "C": "Manually enter the questions and answers.",
      "D": "Connect the bot to the Cortana channel and ask questions by using Cortana.",
      "E": "Import chit-chat content from a predefined data source."
    },
    "reponse": "A,C,E",
    "explanation": {
      "image": {},
      "text": "Automatic extraction\nExtract question-answer pairs from semi-structured content, including FAQ pages, support websites, excel files, SharePoint documents, product manuals and policies."
    },
    "reference": "https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/concepts/content-types"
  },
  {
    "id": 132,
    "question": {
      "intitule": "You have a frequently asked questions (FAQ) PDF file. You need to create a conversational support system based on the FAQ. Which service should you use?",
      "image": ""
    },
    "checkbox": {
      "A": "QnA Maker",
      "B": "Text Analytics",
      "C": "Computer Vision",
      "D": "Language Understanding (LUIS)"
    },
    "reponse": "A",
    "explanation": {
      "image": {},
      "text": "QnA Maker is a cloud-based API service that lets you create a conversational question-and-answer layer over your existing data. Use it to build a knowledge base by extracting questions and answers from your semi-structured content, including FAQs, manuals, and documents."
    },
    "reference": "https://azure.microsoft.com/en-us/services/cognitive-services/qna-maker/"
  }
];

