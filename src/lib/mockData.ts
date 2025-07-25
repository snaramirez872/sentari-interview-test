import { VoiceEntry } from "./types";

export const mockVoiceEntries: VoiceEntry[] = [
  {
    id: '1',
    user_id: '1234',
    audio_url: null,
    transcript_raw: "I kind of don't want to go to the party, but I also don't want them to think I'm avoiding them.",
    transcript_user: "I kind of don't want to go to the party, though I also don't want them to think I'm avoiding them.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['reluctance'],
    category: null,
    created_at: '5/10/2025 8:00',
    updated_at: '5/10/2025 8:05',
    emotion_score_score: 0.05,
    embedding: null,
  },
  {
    id: '9',
    user_id: '4558',
    audio_url: null,
    transcript_raw: "I know he's not right for me, but I still want to give it one more try.",
    transcript_user: "I know he's not right for me, though I still want to give it one more try.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['hopeful'],
    category: null,
    created_at: '5/18/2025 8:00',
    updated_at: '5/18/2025 8:05',
    emotion_score_score: 0.41,
    embedding: null,
  },
  {
    id: '12',
    user_id: '7788',
    audio_url: null,
    transcript_raw: "I keep telling people I'm confident in my path, but truthfully I have doubts all the time.",
    transcript_user: "I keep telling peopleI'm confident in my path, though truthfully I have doubts all the time.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['reflection'],
    category: null,
    created_at: '5/21/2025 8:00',
    updated_at: '5/21/2025 8:05',
    emotion_score_score: 0.55,
    embedding: null,
  },
  {
    id: '14',
    user_id: '6545',
    audio_url: null,
    transcript_raw: "There's a more efficient way to do this, but I keep doing it my way. Maybe it's stubbornness, or maybe I'm afraid of change.",
    transcript_user: "There's a more efficient way to do this, though I keep doing it my way. Maybe it's stubbornness, or maybe I'm afraid of change'",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['reflection'],
    category: null,
    created_at: '5/23/2025 8:00',
    updated_at: '5/23/2025 8:05',
    emotion_score_score: 0.64,
    embedding: null,
  },
  {
    id: '17',
    user_id: '5586',
    audio_url: null,
    transcript_raw: "I dream of a peaceful life, but I'm scared I'll get bored and regret not doing more.",
    transcript_user: "I dream of a peaceful life, though I'm scared I'll get bored and regret not doing more.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['conflicted'],
    category: null,
    created_at: '5/26/2025 8:00',
    updated_at: '5/26/2025 8:05',
    emotion_score_score: 0.77,
    embedding: null,
  },
  {
    id: '26',
    user_id: '6987',
    audio_url: null,
    transcript_raw: "I need to finish this certification course by July.",
    transcript_user: "I've been thinking I need to finish this certification course by July.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['class'],
    category: null,
    created_at: '6/6/2025 9:00',
    updated_at: '6/6/2025 9:05',
    emotion_score_score: 0.15,
    embedding: null,
  },
  {
    id: '95',
    user_id: '4682',
    audio_url: null,
    transcript_raw: "Need to finish my presentation slides by Friday.",
    transcript_user: "Need to finish my presentation slides by Friday.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['work'],
    category: null,
    created_at: '7/1/2025 9:00',
    updated_at: '7/1/2025 9:05',
    emotion_score_score: 0.26,
    embedding: null,
  },
  {
    id: '174',
    user_id: '2254',
    audio_url: null,
    transcript_raw: "Need to schedule a dentist appointment before the weekend.",
    transcript_user: "Need to schedule a dentist appointment before the weekend.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['appointment'],
    category: null,
    created_at: '5/3/2025 16:00',
    updated_at: '5/3/2025 16:05',
    emotion_score_score: 0.18,
    embedding: null,
  },
  {
    id: '186',
    user_id: '7415',
    audio_url: null,
    transcript_raw: "Buy groceries after work, running low on eggs and milk.",
    transcript_user: "Buy groceries after work, running low on eggs and milk.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['groceries', 'urgent'],
    category: null,
    created_at: '5/4/2025 4:00',
    updated_at: '5/4/2025 4:05',
    emotion_score_score: 0.47,
    embedding: null,
  },
  {
    id: '155',
    user_id: '6923',
    audio_url: null,
    transcript_raw: "Don't forget to call Grandpa for his birthday.",
    transcript_user: "Don't forget to call Grandpa for his birthday.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: '5/4/2025 16:00',
    updated_at: '5/4/2025 16:05',
    emotion_score_score: -0.22,
    embedding: null,
  },

  // Candidate defined mock data
  {
    id: '2',
    user_id: '4567',
    audio_url: null,
    transcript_raw: "I need to go and renew my license tomorrow.",
    transcript_user: "I need to go and renew my license tomorrow.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: '6/16/2025 2:33',
    updated_at: '6/16/2025 3:40',
    emotion_score_score: 0.15,
    embedding: null,
  },
  {
    id: '3',
    user_id: '4567',
    audio_url: null,
    transcript_raw: "Have to call my doctor next week",
    transcript_user: "Have to call my doctor next week",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: '6/16/2025 8:15',
    updated_at: '6/16/2025 8:20',
    emotion_score_score: 0.16,
    embedding: null,
  },
  {
    id: '4',
    user_id: '4567',
    audio_url: null,
    transcript_raw: "Don't forget to send this code by tomorrow afternoon.",
    transcript_user: "Don't forget to send this code by tomorrow afternoon.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['urgent'],
    category: null,
    created_at: '6/16/2025 12:35',
    updated_at: '6/16/2025 12:36',
    emotion_score_score: 0.22,
    embedding: null,
  },
  {
    id: '5',
    user_id: '4567',
    audio_url: null,
    transcript_raw: "Send a message to Dylan later.",
    transcript_user: "Send a message to Dylan later.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: '6/16/2025 1:32',
    updated_at: '6/16/2025 1:35',
    emotion_score_score: 0.05,
    embedding: null,
  },
  {
    id: '6',
    user_id: '4567',
    audio_url: null,
    transcript_raw: "I need to finish watching new anime by next weekend.",
    transcript_user: "I need to finish watching new anime by next weekend.",
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['entertainment'],
    category: null,
    created_at: '6/16/2025 4:32',
    updated_at: '6/16/2025 4:38',
    emotion_score_score: 0.12,
    embedding: null,
  },
];
