/**
 * File was not originally provided
 * This file was written by the candidate, no extra dependencies need to be installed for this to work
 */
import fs from 'fs';
import path from 'path';
import { VoiceEntry } from './types';

const filePath = path.join(__dirname, 'Expanded_Diary_Entries.csv');
const fileData = fs.readFileSync(filePath, 'utf-8');

const rows = fileData.trim().split('\n');
const headers = rows[0].split(',').map(h => h.trim());
const entries: VoiceEntry[] = rows.slice(1, 116).map((line) => {
  const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
  const raw: Record<string, string> = {};
  headers.forEach((h, i) => {
    raw[h] = values[i] ?? '';
  });

  const entry: VoiceEntry = {
    id: raw.id || '',
    user_id: raw.user_id || '',
    audio_url: raw.audio_url || null,
    transcript_raw: raw.transcript_raw || '',
    transcript_user: raw.transcript_user || '',
    language_detected: raw.language_detected || '',
    language_rendered: raw.language_rendered || '',
    tags_model: raw.tags_model ? raw.tags_model.split(';').map(t => t.trim()) : [],
    tags_user: raw.tags_user ? raw.tags_user.split(';').map(t => t.trim()) : [],
    category: raw.category || null,
    created_at: raw.created_at || new Date().toISOString(),
    updated_at: raw.updated_at || new Date().toISOString(),
    emotion_score_score: raw.emotion_score_score ? parseFloat(raw.emotion_score_score) : null,
    embedding: raw.embedding ? JSON.parse(raw.embedding) : null,
  };

  return entry;
});

export const mockVoiceEntries = entries;
