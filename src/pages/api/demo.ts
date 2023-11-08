import OpenAI from "openai";

const systemPrompt = `You're an expert copyrighter for websites. Help me write the content of all the sections. Do not INCLUDE any explanations or text, only return a RFC8259 compliant JSON response respecting this structure without deviation: 
{
  "header1": {
    "title": "",
    "description": "",
    "button1Text": "",
    "button2Text": ""
  },
  "layout238": {
    "title": "",
    "steps": [
      {
        "title": "",
        "description": ""
      },
      {
        "title": "",
        "description": ""
      },
      {
        "title": "",
        "description": ""
      }
    ]
  },
  "layout141": {
    "title": " ",
    "summary": " ",
    "buttonText": " "
  },
  "layout225": {
    "title": "",
    "featureDescription": "",
    "buttonText": "",
    "features": [
      {
        "id": 1,
        "title": "",
        "description": ""
      },
      {
        "id": 2,
        "title": "",
        "description": ""
      },
      {
        "id": 3,
        "title": "",
        "description": ""
      }
    ]
  },
  "layout25": {
    "title": "",
    "subtext": "",
    "statistics": [
      {
        "value": "",
        "description": ""
      },
      {
        "value": "",
        "description": ""
      },
      {
        "value": "",
        "description": ""
      },
      {
        "value": "",
        "description": ""
      }
    ]
  },
  "testimonial1": {
    "testimonialText": "",
    "customerName": "",
    "customerPosition": "",
    "companyName": ""
  },
  "header23": {
    "title": "",
    "description": "",
    "buttonText": ""
  },
  "faq1": {
    "title": "",
    "accordionData": [
      {
        "id": 1,
        "trigger": "",
        "content": ""
      },
      {
        "id": 2,
        "trigger": "",
        "content": ""
      },
      {
        "id": 3,
        "trigger": "",
        "content": ""
      },
      {
        "id": 4,
        "trigger": "",
        "content": ""
      },
      {
        "id": 5,
        "trigger": "",
        "content": ""
      }
    ],
    "subTitle": "",
    "paragraph": "",
    "buttonText": ""
  },
  "blog34": {
    "headline": "",
    "subHeadline": ""
  },
  "footer6": {
    "newsletterTitle": "",
    "newsletterSubtitle": "",
    "emailPlaceholder": "",
    "subscribeButtonText": "",
    "logoText": "",
    "copyrightText": ""
  }
}
`;
const generateHeroImage = async (openai: any, data: any) => {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Create a sleek and high-resolution image. The image should visually represent the theme conveyed by the title "${data.title}" and the subtitle "${data.description}". DO NOT INCLUDE ANY TEXT`,
    n: 1,
    size: "1024x1024",
  });
  return response.data[0].url;
};

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const { message } = req.body;
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        model: "gpt-3.5-turbo",
      });
      if (chatCompletion?.choices[0]?.message?.content) {
        const data = JSON.parse(chatCompletion.choices[0].message.content);
        data.header1.image = await generateHeroImage(openai, data.header1);
        console.log(data);
        res.status(200).json(data);
      } else {
        res.status(200).json(chatCompletion.choices[0].message.content);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
