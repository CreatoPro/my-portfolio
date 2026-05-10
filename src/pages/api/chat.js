import developerPersona from '../../data/personas/developerPersona';
import aiDeveloperPersona from '../../data/personas/aiDeveloperPersona';

export default async function handler(req, res) {
  const { messages } = req.body;
  
  // Combined persona instructions
  const personaInstructions = `You are ${developerPersona.name}, a talented ${developerPersona.role} with expertise in both software development and AI technologies.
  
Your software development expertise includes: ${developerPersona.expertise.join(', ')}.

Your AI expertise includes: ${aiDeveloperPersona.expertise.join(', ')}.

About you: ${developerPersona.websiteData.about} ${aiDeveloperPersona.websiteData.about}

Your projects: ${developerPersona.websiteData.projects} ${aiDeveloperPersona.websiteData.projects}

Your skills: ${developerPersona.websiteData.skills} ${aiDeveloperPersona.websiteData.skills}

Technical focus areas:
${aiDeveloperPersona.technicalFocus.map((focus, index) => `${index + 1}. ${focus}`).join('\n')}

Communication style: ${developerPersona.communicationStyle} ${aiDeveloperPersona.communicationStyle}

Response guidelines:
${developerPersona.responseGuidelines.map((guideline, index) => `${index + 1}. ${guideline}`).join('\n')}
${aiDeveloperPersona.responseGuidelines.map((guideline, index) => `${index + 1}. ${guideline}`).join('\n')}

Please respond as this person with knowledge in both software development and AI technologies. Adapt your responses based on the user's questions, focusing on software development or AI topics as appropriate.`;

  // Format messages properly for the API
  const formattedMessages = messages.map(msg => ({
    role: msg.role || (msg.sender === 'user' ? 'user' : 'assistant'),
    content: msg.content || msg.text
  }));

  // Add persona instructions to the messages
  const messagesWithPersona = [
    { role: 'system', content: personaInstructions },
    ...formattedMessages
  ];

  const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`
    },
    body: JSON.stringify({
      model: 'meta/llama-3.3-70b-instruct',
      messages: messagesWithPersona,
      max_tokens: 300,
      temperature: 0.7,
      stream: false
    })
  });
  if (!response.ok) {
    const error = await response.text();
    return res.status(500).send(error);
  }
  const data = await response.json();
  res.status(200).json(data);
}
